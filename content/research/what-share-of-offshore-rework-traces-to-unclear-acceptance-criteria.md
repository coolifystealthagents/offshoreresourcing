---
title: "What Share of Offshore Rework Traces to Unclear Acceptance Criteria?"
description: "A reproducible method for coding returned offshore work so a team can separate unclear instructions from execution errors."
category: "offshore resourcing operations"
publishedAt: 2026-11-09
verifiedAt: 2026-11-09
image: "/daily09/offshoreresourcing/what-share-of-offshore-rework-traces-to-unclear-acceptance-criteria.webp"
sourceCount: 10
---

Rework is often discussed as a single quality problem, but the causes point to different owners and different repairs. A returned item may reflect a worker who missed a known rule, an instruction that never defined the acceptance condition, or a source record that could not support the required output. Treating all three as an execution issue leads to more training when the real repair belongs in the instructions. This report sets out a reproducible method for coding returned offshore work and estimating the share attributable to unclear acceptance criteria.

## Research question and decision supported

The question is what share of returned work items can be traced to an acceptance criterion that was missing, ambiguous, or contradicted by another instruction. The decision supported is whether the next improvement should target worker training, the written standard, or the source record. A second decision is whether a lane should pause expansion until the acceptance criteria are clear enough for two reviewers to apply consistently. The method does not attempt to assign blame to an individual. It classifies the evidence available at the moment the item was returned and keeps later changes in a separate field.

## Define the unit of analysis

Use the returned work item as the unit, not the worker, the reviewer, or the week. An item is in scope when it came back to the same lane because the output did not meet an acceptance condition. Exclude client-requested changes, normal edits made before first delivery, and items returned because the source system was unavailable. Record the item identifier, the task type, the reviewer, the return date, and the instruction version that applied. If the same item is returned twice, count it once but record both return events. This prevents a single difficult item from dominating the analysis and keeps the denominator reproducible.

## Define unclear acceptance criteria

An acceptance criterion is unclear when a competent worker could not determine the required output from the instruction and the approved examples. Three patterns matter most. The criterion may be absent, so the worker had to guess what good looked like. It may be ambiguous, so two reasonable readings produced different outputs. It may conflict with another instruction, an example, or a client message. A criterion that exists but is hard to find is a separate usability problem, not necessarily an unclear rule. Code that case separately so the repair can target navigation rather than the wording.

## Build the coding frame

Use five codes: clear rule missed, unclear criterion, conflicting instruction, missing source information, and tool or access failure. Add a sixth code for cases the reviewer cannot classify after reading the evidence. Ask the reviewer to choose one primary code and one secondary code when two causes genuinely interact. Write a one-sentence definition for each code and two examples. Keep the examples in the coding guide so new reviewers apply the same boundary. A coding frame with too many categories produces disagreement, while a frame with only right and wrong hides the instruction problem.

Test the frame on ten returns before using it for the full period. Have two reviewers code the same ten items and compare their choices. Where they disagree, ask which definition or example would have resolved the difference. Revise the guide once, then freeze it for the study. A short pilot costs an hour and prevents a month of inconsistent coding.

## Sample the returns, not the whole queue

Sample from the items returned during the period and stratify by task type and shift. Include returns that were corrected quickly as well as those that waited, because a fast correction can still reveal an unclear rule. If the volume is high, take a random sample from each stratum and state the sampling method. If the volume is low, review every return and report the count rather than a percentage. Include a small comparison group of items that were accepted on the first pass, which helps test whether the criterion is applied consistently across workers.

## Read the evidence in the right order

For each item, read the instruction that applied, the source record, the worker's note, and the reviewer's correction. Start with the instruction before reading the final output, so the review is not anchored by the answer. Ask whether the required output could be derived from the available evidence. Then ask whether the reviewer's correction relied on knowledge that was not in the instruction or the example. If the correction depends on an unwritten preference, the case is a candidate for an unclear criterion. Record the exact sentence or missing field that supports the code.

## Separate instruction gaps from execution errors

The distinction is not always comfortable. A worker can miss a clear rule, and an instruction can be clear to its author but ambiguous to everyone else. Use a second reviewer on a subset and compare the codes before calculating the share. If the reviewers disagree, read the item together and decide which evidence would settle the question. A disagreement about whether a rule was clear is itself a finding about the instruction. Do not resolve it by defaulting to the worker's error, because that choice hides the documentation problem the method is meant to surface.

## Calculate the share reproducibly

Report the numerator, the denominator, the period, and the coding frame version. Show the share for all returns and for each task type, because a single aggregate can hide a lane where the criteria are much weaker. If the sample was stratified, apply the correct weights or state that the result is unweighted. Round consistently and avoid implying precision that a small sample cannot support. Keep the item-level coding sheet so another analyst can recompute the share. A percentage without its denominator and coding rules is not a finding that a manager can act on.

Keep the calculation sheet simple enough for a second analyst to follow. One row per item, one column per code, and a short note for any case that required a judgment call. Store the instruction version beside the row so a later change does not get applied backward. A clean sheet is worth more than a sophisticated chart because it lets the team challenge a number.

## Interpret the result with caution

A high share of unclear-criteria returns does not prove that every worker would have succeeded with a better instruction. It shows that the evidence available at the time did not determine the output. A low share does not prove that the instructions are good, because workers may be compensating with informal knowledge that is not written down. Compare the result with the reviewer agreement rate, the age of the instruction, and the number of questions the lane receives. Use several signals before deciding where to invest. The share is a pointer to the next investigation, not a final verdict. If the share is high and reviewer agreement is also high, the instruction is the likely problem. If the share is high but reviewers disagree, the coding frame or the standard itself may be unstable.

## Report and follow up

Report the period, sample size, task types, code counts, and the most common missing criterion. Add two or three anonymized examples that show the difference between a clear rule and an unclear one. Recommend a specific repair such as adding an acceptance field, replacing an outdated example, or resolving a conflict between two documents. Assign an owner and a review date. Repeat the coding after the change and compare the same categories. If unclear-criteria returns fall without an increase in missed clear rules, the instruction probably improved.

## Limitations

The method depends on written records and reviewer memory, and some instructions are intentionally judgment-based. A returned item may have more than one cause, and the primary code is a simplification. Reviewers may be reluctant to code a rule as unclear if they wrote it. Use a reviewer who is independent of the instruction owner for a subset, and state the disagreement rate. Small samples cannot support fine distinctions between task types. Report the limitations beside the result so a reader can judge how much confidence the share deserves.

## Sources

1. [U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics](https://www.bls.gov/oes/)
2. [U.S. Department of Labor, Fact Sheet 22: Hours Worked](https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked)
3. [U.S. Small Business Administration, Hire and Manage Employees](https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees)
4. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
5. [NIST SP 800-53 Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
6. [CISA Cyber Essentials](https://www.cisa.gov/cyber-essentials)
7. [APQC Process Classification Framework](https://www.apqc.org/process-frameworks)
8. [ISO 9001 Quality Management Principles](https://www.iso.org/iso-9001-quality-management.html)
9. [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
10. [FTC Data Security Guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security)
