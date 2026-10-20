import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = file => readFileSync(path.join(root, file), 'utf8');
const components = read('app/components.tsx');
const contact = read('app/contact-us/page.tsx');
const reviews = read('app/reviews.ts');
const commercialData = read('app/commercial-data.ts');
const data = read('app/data.ts');
const form = read('app/contact-us/StandardContactForm.tsx');
const contactApi = read('app/api/contact/route.ts');
const globalCss = read('app/globals.css');

function slugsFrom(source, start, end) {
  const section = source.slice(source.indexOf(start), end ? source.indexOf(end, source.indexOf(start)) : undefined);
  return [...section.matchAll(/slug:\s*["']([^"']+)["']/g)].map(match => match[1]);
}

test('header has exact primary routes and visible partner attribution in header and footer', () => {
  const nav = components.match(/<nav className="links fleet-links"[\s\S]*?<\/nav>/)?.[0] || '';
  const links = [...nav.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map(match => [match[2], match[1]]);
  assert.deepEqual(links, [['Home', '/'], ['Services', '/services'], ['Contact Us', '/contact-us']]);
  assert.match(components, /<PartnerAttribution \/>[\s\S]*<\/header>/);
  assert.match(components, /<PartnerAttribution footer \/>/);
  assert.match(components, /Powered by StealthAgents/);
  assert.match(globalCss, /partner-attribution span\{position:static;width:auto;height:auto;overflow:visible;clip:auto\}/);
  assert.doesNotMatch(globalCss, /partner-attribution span\{position:absolute;width:1px/);
});

test('reviews contain exactly fourteen unique records with official record provenance', () => {
  const names = [...reviews.matchAll(/name:\s*'([^']+)'/g)].map(match => match[1]);
  assert.equal(names.length, 14);
  assert.equal(new Set(names).size, names.length);
  assert.equal((reviews.match(/\.\.\.officialSource/g) || []).length, 14);
  assert.match(reviews, /sourceLabel: 'Stealth Agents official homepage'/);
  assert.match(reviews, /sourceUrl: 'https:\/\/stealthagents\.com\/'/);
  assert.match(components, />StealthAgents reviews</);
  assert.match(components, />Source: Stealth Agents</);
  assert.match(components, /href=\{review\.sourceUrl\}[\s\S]*\{review\.sourceLabel\}/);
  const marquee = components.match(/export function ReviewsMarquee[\s\S]*$/)?.[0] || '';
  assert.doesNotMatch(marquee, /<button|controls=/);
  assert.match(globalCss, /\.review-source\{display:inline-block/);
  assert.match(globalCss, /@keyframes review-marquee/);
  assert.match(globalCss, /prefers-reduced-motion:reduce[\s\S]*nth-child\(n\+15\)/);
});

test('contact keeps intake form, official team plate, reviews, and responsive order', () => {
  assert.doesNotMatch(contact, /oncehub|iframe/i);
  assert.match(contact, /stealth-agents-team-bacolod\.jpg/);
  assert.match(contact, /<figcaption><img[^>]+stealth-agents-logo\.png[\s\S]*?<strong>Official team, Bacolod<\/strong>/);
  assert.match(contact, /<StandardContactForm[\s\S]*<ReviewsMarquee\/>/);
  const contactCss = read('app/contact-us/contact.module.css');
  assert.match(contactCss, /grid-template-areas:"copy form" "reviews form"/);
  assert.match(contactCss, /grid-template-areas:"copy" "form" "reviews"/);
});

test('approved contact form contract and API mappings are preserved', () => {
  for (const field of ['firstName', 'lastName', 'email', 'phoneLocal', 'countryCode', 'companyName', 'website', 'companySize', 'positions', 'referral', 'referralSpecify', 'message']) assert.match(form, new RegExp(`name=["']${field}["']`), `missing form field ${field}`);
  for (const label of ['First Name *', 'Last Name *', 'Business Email *', 'Not Accepting Personal Email', 'Phone Number *', 'Company Name *', 'Website / URL', 'Company Size *', 'How Many Positions to Fill *', 'How Did You Hear About Us? *', 'Please Specify *', 'Message']) assert.ok(form.includes(label), `missing approved label ${label}`);
  assert.match(form, /textarea name="message" rows=\{4\}/);
  assert.match(form, /textarea\{resize:vertical;min-height:150px\}/);
  assert.match(form, /source: "contact-form", formId: "contactPageForm"/);
  assert.match(form, /acrTracker\?\.trackLead/);
  assert.match(form, /const tracker = .*acrTracker\?\.trackLead/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.match(form, /We could not submit your request\. Please try again\./);
  for (const key of ['phoneLocal', 'countryCode', 'phoneCountryCode', 'country_code', "text(form, 'phone'", 'referralSpecify']) assert.ok(contactApi.includes(key), `API mapping missing ${key}`);
  assert.match(contactApi, /referral === 'Other' \? `Other: \$\{referralSpecify\}` : referral/);
  assert.match(contactApi, /Complete the following required fields/);
  for (const required of ['phone number', 'company name', 'company size', 'positions to fill', 'referral source', 'referral details']) assert.ok(contactApi.includes(required));
  assert.match(contactApi, /full_name: name,[\s\S]*company_name: business,[\s\S]*how_they_heard: referralForUpstream/);
  assert.match(contactApi, /new URL\('\/thank-you\?lead=accepted'/);
  assert.match(contactApi, /request\.body\.getReader\(\)/);
  assert.match(contactApi, /bytes > MAX_BODY_BYTES/);
  assert.match(contactApi, /reader\.cancel\('Body limit exceeded'\)/);
  assert.doesNotMatch(contactApi, /await request\.formData\(\)/);
});

test('commercial service guides are substantial and exactly match app data slugs', () => {
  const commercialSlugs = slugsFrom(commercialData, 'export const commercialServices', 'export const serviceBySlug');
  const dataSlugs = slugsFrom(data, 'export const services', 'export const serviceDetails');
  const servicesSection = commercialData.slice(commercialData.indexOf('export const commercialServices'), commercialData.indexOf('export const serviceBySlug'));
  assert.equal(commercialSlugs.length, 12);
  assert.deepEqual(commercialSlugs, dataSlugs);
  for (const key of ['scope:', 'inputs:', 'workflow:', 'deliverables:', 'boundaries:', 'qualityControls:', 'scenarios:', 'faqs:', 'related:']) assert.equal((servicesSection.match(new RegExp(key, 'g')) || []).length, 12, `${key} must exist for every service`);
  const detail = read('app/services/[slug]/page.tsx');
  for (const field of ['scope', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faqs', 'related']) assert.match(detail, new RegExp(`service\\.${field}`));
});

test('about, sitemap, redirects, scheduler, confirmation, and recovery routes are wired', () => {
  const about = read('app/about/page.tsx');
  assert.match(about, /alternates: \{ canonical \}/);
  assert.match(about, /Operating model/);
  assert.match(about, /Accountabilities/);
  assert.match(about, /StealthAgents role/);
  assert.match(read('app/sitemap.xml/route.ts'), /'\/about'/);
  assert.match(read('app/contact/page.tsx'), /permanentRedirect\('\/contact-us'\)/);
  const thanks = read('app/thank-you/page.tsx');
  assert.match(thanks, /src="https:\/\/go\.oncehub\.com\/StealthAgentsTeam\?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1&amp;redirect_url=/);
  assert.match(thanks, /redirect_url=https%3A%2F%2Foffshoreresourcing\.com%2Fthanks-whats-next/);
  assert.match(thanks, /Completed a booking\?[\s\S]*href="\/thanks-whats-next"/);
  assert.match(read('app/thanks-whats-next/page.tsx'), /robots: \{ index: false, follow: false \}/);
  const notFound = read('app/not-found.tsx');
  assert.match(notFound, /Return home/);
  assert.match(notFound, /Browse services/);
  assert.match(notFound, /<img/);
});

test('commercial copy avoids prohibited dash punctuation and keeps section labels', () => {
  const files = ['app/page.tsx', 'app/components.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx', 'app/contact-us/page.tsx', 'app/about/page.tsx', 'app/thank-you/page.tsx', 'app/thanks-whats-next/page.tsx', 'app/not-found.tsx'];
  for (const file of files) {
    const source = read(file);
    assert.doesNotMatch(source, /[–—]/, `${file} contains prohibited dash punctuation`);
    const visibleLiterals = [...source.matchAll(/>([^<{]+)</g)].map(match => match[1]);
    for (const text of visibleLiterals) assert.doesNotMatch(text, /--/, `${file} contains a visible double hyphen`);
  }
  assert.match(read('app/page.tsx'), /signal-label/);
  assert.match(read('app/services/page.tsx'), /section-kicker/);
  assert.match(read('app/services/[slug]/page.tsx'), /section-kicker/);
});

test('commercial image declarations match source dimensions and social metadata', () => {
  for (const file of ['app/page.tsx', 'app/contact-us/page.tsx', 'app/about/page.tsx', 'app/thanks-whats-next/page.tsx']) {
    for (const tag of read(file).matchAll(/<img[^>]+stealth-agents-team-bacolod\.jpg[^>]*>/g)) assert.match(tag[0], /width="953" height="540"/, `${file} has incorrect team image dimensions`);
  }
  for (const file of ['app/components.tsx', 'app/contact-us/page.tsx', 'app/about/page.tsx']) {
    for (const tag of read(file).matchAll(/<img[^>]+stealth-agents-logo\.png[^>]*>/g)) assert.match(tag[0], /width="149" height="50"/, `${file} has incorrect logo dimensions`);
  }
  assert.match(read('app/services/page.tsx'), /width="1200" height="630"/);
  assert.match(read('app/services/[slug]/page.tsx'), /width="1200" height="630"/);
  for (const file of ['app/page.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx', 'app/contact-us/page.tsx', 'app/about/page.tsx']) assert.match(read(file), /twitter:/, `${file} needs page specific Twitter metadata`);
});

test('service schema identifies staffing provider and editorial publisher', () => {
  const detail = read('app/services/[slug]/page.tsx');
  assert.match(detail, /provider:\{'@type':'Organization',name:'StealthAgents',url:'https:\/\/stealthagents\.com\/'\}/);
  assert.match(detail, /publisher:\{'@type':'Organization',name:'Offshore Resourcing',url:base\}/);
  assert.doesNotMatch(detail, /provider:\{'@type':'Organization',name:'Offshore Resourcing'/);
});

test('adjacent partner logos are decorative', () => {
  assert.match(components, /stealth-agents-logo\.png" width="149" height="50" alt=""/);
  assert.match(contact, /stealth-agents-logo\.png" width="149" height="50" alt=""/);
});

test('security headers, registry keys, hero structure, and custom 404 remain complete', () => {
  const config = read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.ok(config.includes(header));
  const registry = JSON.parse(read('design-registry.json'))[0];
  for (const key of ['domain', 'industry', 'audience', 'designFamily', 'heroComposition', 'typeCharacter', 'paletteFamily', 'shapeGrammar', 'imageTreatment', 'sectionRhythm', 'navigationTreatment', 'motionSignature', 'density', 'signatureElement']) assert.ok(registry[key], `registry key ${key} is missing`);
  for (const file of ['app/page.tsx', 'app/services/page.tsx', 'app/contact-us/page.tsx', 'app/about/page.tsx', 'app/thank-you/page.tsx', 'app/thanks-whats-next/page.tsx', 'app/not-found.tsx']) assert.equal((read(file).match(/<h1\b/g) || []).length, 1, `${file} must have one hero H1`);
  const notFound = read('app/not-found.tsx');
  assert.match(notFound, /Return home/);
  assert.match(notFound, /Browse services/);
});
