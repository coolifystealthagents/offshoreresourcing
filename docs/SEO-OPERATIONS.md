# OffshoreResourcing SEO and Search Operations

Baseline date: 2026-07-28
Production property: `https://offshoreresourcing.com`

## Evidence labels

- **Measured** means observed from the live site, repository, or an authenticated search-data export.
- **Modeled** means an estimate or editorial hypothesis. Modeled values must never be reported as clicks, impressions, rankings, conversions, or customer outcomes.
- **Pending access** means no authenticated measurement is available.

## Live technical baseline

Measured on 2026-07-28:

- The home page, `/blog`, `/research`, `/robots.txt`, and `/sitemap.xml` returned HTTP 200.
- `robots.txt` allows crawling and names the canonical sitemap.
- The sitemap contained 22 unique URLs. Every listed URL returned HTTP 200.
- The sitemap covered the home page, primary static pages, 12 service pages, and two published blog articles.
- The two published blog pages and sampled service page rendered one H1, a self-referencing canonical, and JSON-LD.
- The home page rendered WebSite JSON-LD. Route-level structured data is not present on listing, contact, or legal pages, which is acceptable unless a supported schema type is added with complete visible data.
- Two duplicate cancellation-policy routes returned the same indexable content. `/cancellation` is now redirected to `/cancellation-policy`.
- Listing and contact titles repeated the brand because page titles included the brand and the root template appended it again. The route titles are now normalized.
- A site-restricted web search returned no OffshoreResourcing result. This is an observation from a non-authenticated search check, not proof that Google has deindexed the property.

## Indexability and sitemap routine

Run daily after a production publish and weekly across the full sitemap:

1. Fetch `robots.txt` and `sitemap.xml`; require HTTP 200 and the expected content type.
2. Confirm the sitemap host is `offshoreresourcing.com`, URLs are unique, and every intended canonical content URL is included once.
3. Fetch each sitemap URL without following an unexpected cross-domain redirect.
4. Require HTTP 200 for canonical pages, exactly one H1, a non-empty title and description, and one self-referencing canonical.
5. Confirm no published page has a `noindex` directive.
6. Confirm removed or duplicate URLs redirect to the selected canonical and are absent from the sitemap.
7. Compare sitemap additions and removals with the approved publish manifest. Escalate unexplained changes.

## Structured-data review

For every new or changed content template:

1. Parse every JSON-LD block and require valid JSON.
2. Match schema fields to visible page content.
3. Use WebSite on the home page, Service on service pages, and Article plus BreadcrumbList and FAQPage only where the article visibly supports those values.
4. Do not create FAQPage markup for FAQs that are absent from the rendered page.
5. Record validation errors by URL, schema type, owner, and fix date.

## Topic and keyword validation

Maintain one topic ledger with: proposed slug, content type, primary intent, secondary intents, audience, funnel stage, target service, closest existing URL, evidence label, owner, and status.

Before drafting:

1. Search existing titles, slugs, H1s, and primary-intent fields.
2. Compare the proposal with the closest live URL. Reject a new page when the same reader, task, and desired outcome are already served.
3. Prefer updating the existing URL when overlap is substantial.
4. Keep content-type boundaries explicit: practical guides in `/blog`, data and benchmark queries in `/research`, and provider or model comparisons in `/alternatives`.
5. Label volume, difficulty, traffic potential, and expected ranking as modeled unless sourced from a named tool and dated export.
6. Record the decision as approve, merge, redirect, retarget, or reject.

The current two articles have distinct primary intent:

- `/blog/philippines-recruitment-coordinator-hiring-guide`: recruitment workflow coordination and handoffs.
- `/blog/philippines-talent-sourcing-specialist-hiring-guide`: candidate discovery, evidence capture, and sourcing boundaries.

## Internal-link strategy

- Every standard blog article must contain exactly two contextual internal links and one authoritative external link under the playbook rule.
- At least one internal link should point to the closest commercial service page; the second should point to a distinct supporting service or guide.
- Service pages should link downward to relevant guides when published, and guides should link laterally only where the reader's next task is genuinely different.
- Use descriptive anchor text. Do not repeat the same exact-match anchor across every page.
- Before publish, verify target status, canonical destination, and that the link is rendered in the article body.
- Keep navigation, breadcrumbs, CTAs, and related-card links outside the contextual-link count.

## GSC momentum and striking-distance routine

Status: **Pending access**. No authenticated Google Search Console property or export was available for this baseline.

When access is configured, export page and query data for the last 28 days and the preceding 28 days. Record clicks, impressions, CTR, and average position as measured. Flag:

- Momentum: impressions or clicks increased by at least 20 percent with no material position loss.
- Striking distance: average position 4 through 20, at least 50 impressions in 28 days, and intent aligned with the page.
- CTR opportunity: position 1 through 10 with CTR materially below the property's query-class baseline.
- Regression: clicks or impressions down at least 30 percent while the prior period had at least 20 clicks or 100 impressions.

Thresholds are operating rules, not forecasts. Review query mix, seasonality, page changes, and indexing before recommending action.

For each opportunity, record query, URL, comparison windows, measured metrics, diagnosis, proposed change, owner, deploy date, and T+30 date. Never combine branded and non-branded queries in one conclusion without labeling the mix.

## T+30 tracking and regression report

Create the T+30 checkpoint on the production deploy date. Compare equal 28-day windows when data is mature enough; otherwise mark the result pending.

Use this concise report:

```text
URL:
Change and deploy date:
Evidence: measured | modeled | pending access
Before window:
After window:
Clicks / impressions / CTR / position:
Indexing and canonical:
Result: improved | neutral | regressed | inconclusive
Next action, owner, due date:
```

An indexing regression, sitemap fetch failure, canonical mismatch, or unexpected `noindex` is urgent. The production delivery owner owns code/deployment remediation; the site owner owns GSC property access and permission. The SEO Lead validates the fix live and records the result.

## Current escalation

- **Blocker:** authenticated GSC access is not configured, so momentum, query-level striking distance, CTR opportunity, and T+30 search performance cannot yet be measured.
- **Owner:** OffshoreResourcing site owner.
- **Action:** grant the SEO Lead read access to the `https://offshoreresourcing.com/` domain property or provide dated Performance and Pages exports.
- **SEO Lead follow-up:** confirm the property, record the first 28-day baseline, inspect sitemap submission and Page Indexing, then open T+30 checkpoints for production SEO changes.
