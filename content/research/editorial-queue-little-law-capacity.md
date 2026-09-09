---
title: What Little's Law can and cannot tell an offshore editorial queue
description: A bounded desk study of throughput, work in progress, and elapsed time in daily article production.
category: Workflow design
publishedAt: 2026-09-09
verifiedAt: 2026-09-09
image: /images/research-2026-08-21/review-queue-sampling.png
sourceCount: 10
---
## Research question and scope

Can Little's Law help a manager size an offshore editorial queue? This desk study considers a stable workflow in which article starts, completions, and elapsed time can be counted consistently. It does not estimate writer productivity or prescribe an article quota. The unit is an article moving through a defined lane during a stated observation window.

## Methodology

We compared operations references on Little's Law and flow with official guidance on measurement and worker wellbeing. The practical inference is deliberately narrow: average work in progress equals average completion rate multiplied by average time in the system when the observed process is sufficiently stable and the measures share the same boundary. A team should record arrivals, completions, pauses, rework, and the observation period before applying the relationship.

## Finding and practical use

The relationship can expose an implausible plan. If a lane completes five reviewed articles per week and articles remain in that lane for two weeks on average, an average inventory near ten is consistent with those measurements. Adding more starts without changing completion capacity is likely to increase waiting. That is a queue observation, not proof that a particular contributor is slow.

For Offshore Resourcing readers, the useful implementation is a small board with stage entry time, current owner, blocked status, review return, and completion time. Separate active work from items paused by an owner decision. Review research, drafting, editing, and approval as distinct lanes because each may have a different constraint.

## Inference limits

Little's Law does not identify the cause of waiting, set a safe workload, or show whether an article is accurate. Daily content work may also be unstable: topics vary, urgent work arrives, reviewers change standards, and completed drafts can return for revision. Averages can hide an aging tail. Pair the calculation with age bands, quality checks, and one or two traced examples.

## Limitations and decision use

This is not a controlled study of OffshoreResourcing.com and supplies no causal estimate. Definitions chosen by the team affect every value. Short windows and small samples are noisy. Use the finding to test a reversible work in progress limit, then compare waiting, rework, and corrections while quality gates remain constant.

## Sources

1. [MIT OpenCourseWare, Operations Management](https://ocw.mit.edu/courses/15-761-introduction-to-operations-management-spring-2013/)
2. [NIST Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/)
3. [ASQ, Little's Law](https://asq.org/quality-resources/lean/littles-law)
4. [Project Management Institute, Kanban resources](https://www.pmi.org/disciplined-agile/process/kanban)
5. [Lean Enterprise Institute, flow](https://www.lean.org/lexicon-terms/continuous-flow/)
6. [U.S. Bureau of Labor Statistics, productivity](https://www.bls.gov/productivity/)
7. [ILO, working time](https://www.ilo.org/topics-and-sectors/working-time)
8. [WHO, mental health at work](https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work)
9. [OECD, productivity](https://www.oecd.org/en/topics/productivity.html)
10. [NIST, measurement science](https://www.nist.gov/topics/measurement-science)
