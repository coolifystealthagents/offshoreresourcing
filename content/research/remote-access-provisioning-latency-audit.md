---
title: Auditing remote access provisioning latency
description: A method for measuring the time between an approved access request and a working account, with handoff and rework categories.
category: Access research
publishedAt: 2026-10-22
verifiedAt: 2026-10-22
image: /oct22/remote-access-provisioning-latency-audit.png
sourceCount: 3
---

## Why provisioning time matters

A new offshore hire cannot start productive work until the approved access works. The delay is often invisible because it sits between teams: the manager approves, the provider prepares, the client provisions, and the worker waits.

Measuring the interval makes the dependency visible without turning it into a blame exercise.

## Define the events

Start at the timestamp of the approved request, including the approver and the systems requested. Stop when the worker confirms a successful sign-in and the required role, not merely when the account exists.

Record the intermediate steps: identity created, role assigned, multi-factor enrolled, and first successful use.

## Classify the wait

Use a small set of categories: approval wait, provider preparation, client provisioning, missing information, rework after an error, and worker-side setup.

Each category has a different owner. A single elapsed-time number cannot point to the fix.

## Sample the requests

Use a defined period and include new hires, role changes, and replacements. Exclude requests that were withdrawn, and report the count.

For each request, record the system, the access tier, and whether the role was standard or exceptional. Exceptional requests legitimately take longer and should be reported separately.

## Report the result

Report the median and the 90th percentile by category, plus the share of requests that required rework. A long tail usually points to missing information or an approval bottleneck.

Pair the figures with two examples so the operational owner can see the pattern.

## Limitations

The method measures provisioning, not whether the access was appropriate. It also depends on accurate timestamps from multiple systems, which may use different clocks.

## Sources

- International Labour Organization, labour statistics: https://ilostat.ilo.org/
- World Bank, World Development Indicators: https://databank.worldbank.org/source/world-development-indicators
- Philippine Statistics Authority: https://psa.gov.ph/
