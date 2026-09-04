---
title: "How should daily offshore articles be sampled after publication?"
description: "A risk-based sampling design for checking live article dates, metadata, images, links, and presentation."
category: Publishing Assurance
publishedAt: 2026-09-04
verifiedAt: 2026-09-04
image: /images/research-2026-08-31/negative-evidence.svg
sourceCount: 10
---
## Research question

When a daily batch is too large for repeated manual inspection, how can a team sample live pages without overlooking the highest-risk defects? For a promised count, every counted route still needs a basic automated gate; sampling is for deeper visual and editorial checks.

## Evidence scope and method

This review adapts statistical sampling, accessibility, and search metadata guidance. It does not provide a universal sample size or prove that an unchecked page is correct.

Run HTTP, date, canonical, structured date, image, index-membership, and sitemap checks across the full counted set. Then stratify deeper inspection by template, content family, image type, article length, and novelty. Include at least one page from each stratum plus all automated failures and boundary cases. Random selection within ordinary strata reduces cherry-picking. Preserve the seed or selected URLs, viewport, browser, timestamp, and observations.

Visual review should cover narrow and wide layouts, heading order, overflow, image rendering, link clarity, and readable controls. Research pages also need citation presentation and visible limitations. A failure should trigger a defined expansion rule. For example, inspect the remaining pages using the same component or image type instead of searching for one passing example.

## Limitations

A small sample cannot prove absence of rare defects. Automated tools have false positives and cannot judge usefulness. Browser, cache, region, and responsive breakpoints vary. Stratification depends on recognizing relevant risk groups in advance. Full inspection may remain appropriate for a small high-stakes release.

## Conclusion

Use universal machine-checkable gates and risk-based sampling for deeper presentation checks. Predefine strata and expansion rules, preserve negative findings, and never use a passing sample to inflate the number of routes actually verified.

## Sources

1. [NIST/SEMATECH e-Handbook, process or product monitoring](https://www.itl.nist.gov/div898/handbook/pmc/pmc.htm)
2. [W3C, WCAG evaluation resources](https://www.w3.org/WAI/test-evaluate/)
3. [Google Search Central, canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
4. [Google Search Central, article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
5. [Schema.org, datePublished](https://schema.org/datePublished)
6. [UK Government Service Manual, testing for accessibility](https://www.gov.uk/service-manual/helping-people-to-use-your-service/testing-for-accessibility)
7. [NIST, engineering statistics handbook](https://www.itl.nist.gov/div898/handbook/)
8. [W3C, website quality assurance](https://www.w3.org/QA/)
9. [Google Search Central, image SEO](https://developers.google.com/search/docs/appearance/google-images)
10. [ISO, quality management principles](https://www.iso.org/quality-management-principles.html)
