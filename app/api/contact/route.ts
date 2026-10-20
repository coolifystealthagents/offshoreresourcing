import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();

function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function errorPage(status: number, detail = 'Please go back and try again.') {
  const safeDetail = detail.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] || character);
  return new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>${safeDetail}</p><a href="/contact-us">Return to the contact form</a></main>`, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter(timestamp => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) {
    for (const [storedKey, values] of attempts) if (!values.some(timestamp => now - timestamp < WINDOW_MS)) attempts.delete(storedKey);
  }
  return recent.length > max;
}

async function boundedUrlEncodedForm(request: NextRequest) {
  if (!request.body) throw new Error('Missing request body');
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > MAX_BODY_BYTES) {
      await reader.cancel('Body limit exceeded');
      throw new RangeError('Body limit exceeded');
    }
    chunks.push(value);
  }
  const body = new Uint8Array(bytes);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  const parameters = new URLSearchParams(new TextDecoder().decode(body));
  const form = new FormData();
  for (const [key, value] of parameters) form.append(key, value);
  return form;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const declaredLength = request.headers.get('content-length');
  const length = declaredLength === null ? null : Number(declaredLength);
  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) return errorPage(400, 'The request origin is not allowed.');
  if (length !== null && (!Number.isFinite(length) || length < 0 || length > MAX_BODY_BYTES)) return errorPage(400, 'The submitted form is too large.');
  if (!contentType.includes('application/x-www-form-urlencoded')) return errorPage(400, 'Submit the contact form using URL encoded form data.');
  if (limited(`ip:${ip(request)}`, 10)) return errorPage(429, 'Too many requests. Please wait before trying again.');

  let form: FormData;
  try {
    form = await boundedUrlEncodedForm(request);
  } catch (error) {
    if (error instanceof RangeError) return errorPage(400, 'The submitted form is too large.');
    return errorPage(400, 'The submitted form could not be read.');
  }
  if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) return errorPage(400, 'The submitted form could not be accepted.');

  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const legacyName = text(form, 'name', 200) || text(form, 'fullName', 200);
  const name = `${first} ${last}`.trim() || legacyName;
  const email = (text(form, 'email', 320) || text(form, 'businessEmail', 320)).toLowerCase();
  const phoneLocal = text(form, 'phoneLocal', 100);
  const countryCode = text(form, 'countryCode', 20) || text(form, 'phoneCountryCode', 20) || text(form, 'country_code', 20);
  const phone = text(form, 'phone', 100) || [countryCode, phoneLocal].filter(Boolean).join(' ');
  const business = text(form, 'companyName', 300) || text(form, 'company', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions') || text(form, 'positionsToFill') || text(form, 'role');
  const referral = text(form, 'referral', 300) || text(form, 'howTheyHeard', 300) || text(form, 'source', 300);
  const referralSpecify = text(form, 'referralSpecify', 300);

  const missing = [
    !name && 'name',
    !legacyName && !first && 'first name',
    !legacyName && !last && 'last name',
    (!email || !EMAIL_RE.test(email)) && 'valid business email',
    !phone && 'phone number',
    !business && 'company name',
    !companySize && 'company size',
    !positions && 'positions to fill',
    !referral && 'referral source',
    referral === 'Other' && !referralSpecify && 'referral details',
  ].filter(Boolean) as string[];
  if (missing.length) return errorPage(400, `Complete the following required fields: ${missing.join(', ')}.`);
  if (limited(`email:${email}`, 3)) return errorPage(429, 'Too many requests for this email address. Please wait before trying again.');

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const referralForUpstream = referral === 'Other' ? `Other: ${referralSpecify}` : referral;
  const message = [text(form, 'message'), text(form, 'needs'), text(form, 'details'), positions, text(form, 'tier'), companySize, text(form, 'website')].filter(Boolean).join('\n');
  const payload = {
    full_name: name,
    email,
    phone,
    company_name: business,
    message,
    how_they_heard: referralForUpstream,
    client_event_id: crypto.randomUUID(),
    attribution: {
      source_page: pageUrl,
      landing_page: pageUrl,
      referrer: request.headers.get('referer') || '',
      page_journey: ['Contact form'],
    },
  };

  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorPage(503, 'The contact service is temporarily unavailable. Please try again later.');
  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-lead-token': token },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorPage(502, 'The contact service did not accept the request. Please try again.');
  } catch {
    return errorPage(502, 'The contact service could not be reached. Please try again.');
  }

  void sendLeadFallbackToMattermost({ name, email, phone, business, message, companySize, positions, referral: referralForUpstream, pageUrl, userAgent: request.headers.get('user-agent') || '' });
  return NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
}
