---
title: "How Many Closed Offshore Exceptions Lack Supporting Evidence?"
description: "An evidence audit for closed exceptions, with a coding scheme that separates a missing record from an inaccessible or ambiguous one."
category: "offshore resourcing operations"
publishedAt: 2026-11-10
verifiedAt: 2026-11-10
image: "/daily10/offshoreresourcing/how-many-closed-offshore-exceptions-lack-supporting-evidence.webp"
sourceCount: 6
---

## Research question and decision supported

The question is what share of closed exceptions have the evidence needed to reconstruct the decision, and which types of evidence are most often missing. The decision supported is whether the team can rely on its closure records for audit, client reporting, and learning. A closure that says resolved without a source record may still be correct, but it cannot be verified. The method measures the record, not the quality of the underlying decision. That distinction matters because a missing record is a fixable process problem, while a wrong decision requires a different review.

State which decisions the record must support, such as client reporting, audit, or a later correction. A record that is adequate for one purpose may be insufficient for another. Report the purpose beside the evidence standard so the result is not read as a universal compliance score. The team can then fix the standard that matters most.

## Define closure evidence

Closure evidence is the minimum set of records that lets a reviewer confirm what happened, who approved it, and why the item was closed. For a queue exception, that usually includes the item identifier, the exception reason, the action taken, the source document or system link, the approver, and the closure time. For a customer case, it may include the customer communication and the resolution confirmation. Write the definition for each exception type rather than one generic list. State which fields are mandatory and which are optional. A note that only says done is not evidence under this definition.

Write the standard as a checklist with a required, optional, and not applicable column. Include an example of a complete record and a record that looks complete but is not. Review the checklist with the approver and the client where the client requires a specific record. A shared definition prevents the audit from measuring the auditor's preference.

## Draw a sample of closed exceptions

Select closed exceptions from a defined period and stratify by type, owner, and age at closure. Include fast closures and slow closures, because a fast closure may skip evidence and a slow one may accumulate it. Include items closed by each role that has closure authority. Exclude items that were reopened, because they are no longer closed at the time of the audit. Record the sample size and the selection rule so the result can be repeated. If the volume is low, review every closed exception and report the count rather than a percentage.

Record how the sample was selected and whether it includes every owner with closure authority. If one role is missing, the result cannot describe that role. Check the age distribution so the sample is not dominated by recent items. A sample that only covers the easiest period will understate the problem.

## Build a four-part evidence test

For each item, check four things: whether a source record exists, whether it is linked or retrievable, whether it supports the stated resolution, and whether the approver is identified. Score each part separately rather than collapsing them into pass or fail. An item with a source record that cannot be opened is different from an item with no source at all. An item with an approver but no evidence is different from an item with evidence but no approval. The four-part test shows where the record breaks and gives the team a specific repair. It also prevents a single missing field from making an otherwise complete record look worthless.

Have two reviewers score a small overlapping sample and compare their results. Discuss any item where one reviewer counts a record as supporting and the other does not. The discussion clarifies the standard and exposes fields that are ambiguous. Keep the agreed examples with the audit template.

## Measure missing evidence by type

Report the share of items missing each part, grouped by exception type, owner, and closure age. Look for a type that consistently lacks a source link, such as a manual adjustment or a verbal approval. Check whether the closure form allows a free-text note to substitute for a required field. Compare the missing-evidence rate with the exception volume so a high-volume lane is not judged only on raw counts. Show the number of items that fail more than one part. A record that fails three parts is a different risk from one that lacks only the approver's name.

Show the results in a table with the exception type, the number reviewed, and the number missing each part. Add a short note for the most common gap. A table is easier to act on than a list of percentages without denominators. Include the count of items that fail more than one part.

## Separate absence from inaccessibility

A record may exist but be unavailable to the auditor because of permissions, retention, or a broken link. Test access with the same role that a reviewer would use, not with an administrator account. If a link requires a system the team cannot open, record it as inaccessible rather than missing. If the source is a message in a channel that expires, note the retention period. This distinction changes the fix: an access problem needs a permission or retention change, while a missing record needs a process change. Do not count an inaccessible record as proof that the work was undocumented.

Test access with a standard reviewer account and record the exact error or permission screen. If the record is in a system the team does not use, note the system and the owner. Do not ask an administrator to retrieve it for the audit, because that hides the access problem. The reviewer's experience is the relevant evidence.

## Check whether closure evidence predicts reopen

Link the sampled items to the seven-day reopen record where one exists. Compare the reopen rate for items with complete evidence and items with missing evidence. A higher rate among incomplete records would support the idea that evidence is not paperwork but a check on the decision. A similar rate would suggest that the closure form is not capturing the real reason for returns. Read a few reopens in both groups to see what the record missed. This check keeps the audit connected to an outcome rather than to a compliance score.

Use the same seven-day window and the same reopen definition as the queue study. If the numbers are not available, state that the check could not be performed. Do not infer a relationship from a few examples. The comparison is useful only when both measures come from the same cohort.

## Use the result to fix one field

Pick the most common and most consequential gap and change the closure form or the workflow. If the source link is missing, make it required and provide a picker rather than a free-text box. If the approver is missing, route the closure through the approval step. If the evidence exists but is inaccessible, fix the permission or the retention rule. Train the team on one example of a complete record and one of an incomplete record. Re-audit the same sample frame after the change and compare the same four parts. Do not add a second checklist before confirming that the first one is usable.

Test the changed form on a small set of closures before rolling it out. Ask the team whether the new field is clear and whether the evidence is easy to attach. Check that the change did not add a step that people complete with a placeholder. A required field that accepts any text is not a control.

## Limitations

The audit measures whether a record can be reconstructed, not whether the original decision was correct. Sampling error and a small number of exceptions can make the rate unstable, and the four-part test involves judgment about whether evidence supports the resolution. Access tests may not reflect every reviewer's permissions. Records can be edited after closure, and a link that works today may fail later. Report the sample, the selection rule, and the access role used. Treat the result as a record-quality signal that should be paired with a separate review of decision quality.

The audit measures record quality, not decision quality, and the four-part test involves judgment. Access conditions can change after the audit. A small sample may not represent every exception type or owner. Report the sample, the access role, and the standard used. Pair the result with a separate review of the decisions themselves.

## Sources

1. [NIST SP 800-53 Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
2. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
3. [CISA Cyber Essentials](https://www.cisa.gov/cyber-essentials)
4. [ISO 9001 Quality Management Principles](https://www.iso.org/iso-9001-quality-management.html)
5. [APQC Process Classification Framework](https://www.apqc.org/process-frameworks)
6. [U.S. Small Business Administration, Manage your business](https://www.sba.gov/business-guide/manage-your-business)
