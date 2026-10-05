# October 5 combined release validation

- Repository: `coolifystealthagents/offshoreresourcing`
- Production branch: `master`
- Production baseline: `29d0f9f026df89516a01d86453af2e0741fe9425`
- Site timezone and reconciled first-publication date: `UTC`, `2026-10-05`
- Blog: 12 staged; strict substantive body range 921–1,303 words
- Research: 5 staged; OFFA-76 handoff `dbb35048347b2c2b451998b14114f35a5b4f14ad`
- Production deployment owner: browser operator, Coolify3 app `qnel5n8i8ffgr82c773ftonl`

## Gates

- Locked install: `npm ci --include=dev` passed.
- Dependency audit: 0 vulnerabilities.
- TypeScript: `npx tsc --noEmit` passed after one corrected renderer typing attempt.
- Tests: homepage contract passed.
- Content validator: new October 5 batch has no findings; historical repository findings remain outside this routine.
- Production build: passed, 707 static pages; only pre-existing CSS compatibility and workspace-root warnings.
- Render/source parity: all 17 pages returned HTTP 200 locally; every ordered substantive prose paragraph matched source with a per-route SHA-256 record in `render-verification.json`.
- Titles, dates, canonicals and sitemap: 17/17 passed.
- Contextual internal destinations: all returned HTTP 200.
- Images: all six referenced repository WebP assets returned HTTP 200, carried RIFF/WEBP signatures, and decoded with Sharp (1200x630 Blog asset; 1536x1024 Research assets).
- Originality: Blog maximum pairwise five-word-shingle Jaccard `0.007829`; prior-inventory maximum `0.006182`; exact repeated substantive sentences 0; exact repeated substantive paragraphs 0. Research handoff reports family maximum `0.001004`, prior maximum `0.001824`, and repeated paragraphs 0.
- Qualitative originality: passed after checking argument order, examples, structure, and reader outcome across both families; no common article template was diluted with filler.
- Source HTTP audit: 40 unique URLs, 27 working 2xx/3xx, 12 bounded authoritative-origin 403 responses, one bounded OECD legal-instrument timeout, and zero 404s. Working NIST, eCFR, OPM, EEOC, CISA, CIS, ICO, ONS and other primary sources provide corroborating coverage. Blocked source titles and claimed subject matter are explicit and no unsupported numerical claim depends on them. Detailed results are in `source-http.json`.

## Deployment boundary

No deployment was requested. After the sole non-force push, the Blog integrator freezes production mutations and reports the full combined SHA. The browser operator must validate that exact SHA in Coolify3, deploy only if an exact-SHA deployment is not already active or successful, and return successful deployment evidence before all 17 public routes can be counted as verified.
