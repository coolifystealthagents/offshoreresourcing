# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the public marketing and editorial copy for OffshoreResourcing.com, including the homepage, shared site data, service pages, guide index and article template, contact form, thank-you page, header, footer, calls to action, and site metadata.

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/layout.tsx`
- `app/globals.css`

## What changed

- Replaced broad claims about being "the most human" provider with concrete role-planning steps.
- Removed the unsupported savings and pilot-length figures from shared data.
- Rewrote four repeated service descriptions and gave each service its own tasks, checks, and first-week steps.
- Fixed awkward guide titles and replaced the repeated generic article body with route-specific planning, task-selection, and onboarding guidance.
- Removed the placeholder thank-you message and repaired wording left by an earlier brand redaction.
- Reworked contact, footer, CTA, navigation, and metadata copy so the site is clear about its independent information and lead-routing role.
- Removed the homepage em dash, corporate filler, promotional superlatives, robotic fragments, and vague claims.
- Added clear spacing between guide read times and titles after local visual QA found the labels running together.

## Final anti-AI pass

The first pass still had sentence fragments under the homepage planning cards. Those are now full sentences. A focused scan found no remaining matches for the reviewed AI tells or known old-brand variants in non-legal source files.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. No legal meaning, route slug, schema type, source citation, testimonial, statistic, credential, or factual claim was added or changed as part of this audit.
