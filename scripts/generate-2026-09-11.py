from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-11"

blogs = [
    ("offshore-role-evidence-first-intake", "Build an evidence-first intake for an offshore role", "turn an informal staffing request into a reviewable work packet", "request purpose, recurring tasks, source systems, acceptance examples, and the manager who can resolve exceptions"),
    ("philippines-offshore-access-sequencing-plan", "Sequence access for a Philippines-based offshore hire", "grant only the access needed for each verified stage of the ramp", "system owner, approved permission, training evidence, expiry date, and revocation check"),
    ("offshore-work-sample-acceptance-rubric", "Create an acceptance rubric for an offshore work sample", "compare candidates against the same observable standard", "sample inputs, expected output, scoring anchors, prohibited assumptions, and escalation behavior"),
    ("remote-support-queue-recovery-drill", "Run a recovery drill for a remote support queue", "test how the team restores service when a queue owner is unavailable", "trigger time, backlog snapshot, temporary owner, priority rules, and recovery decision"),
    ("offshore-manager-decision-rights-map", "Map decision rights before offshore work begins", "show which choices a specialist may make and which stay with management", "decision category, delegated action, consultation point, approver, and stop condition"),
    ("philippines-offshore-quality-sample-calendar", "Set a quality sampling calendar for Philippines offshore work", "inspect enough completed work to spot recurring defects without rereading everything", "population, sample rule, reviewer, defect categories, and follow-up date"),
    ("offshore-service-handoff-acknowledgment", "Require acknowledgment at an offshore service handoff", "prove that the receiving owner has accepted the work and its unresolved risks", "handoff time, deliverable link, open exceptions, receiving owner, and acceptance response"),
    ("remote-role-instruction-decay-check", "Check remote role instructions for decay", "find procedures that no longer match the live system or current authority", "instruction version, observed workflow, mismatch, risk owner, and approved correction"),
    ("offshore-capacity-trigger-register", "Maintain a capacity trigger register for offshore operations", "connect demand signals to a pre-agreed management response", "signal definition, threshold, observation window, response owner, and reset condition"),
    ("philippines-offshore-escalation-quality-review", "Review the quality of offshore escalation notes", "make escalations concise enough to support a timely management decision", "decision requested, evidence checked, impact, deadline, and safe interim action"),
    ("offshore-process-exception-learning-loop", "Turn offshore process exceptions into a learning loop", "use repeated exceptions to improve the workflow without normalizing workarounds", "exception class, immediate disposition, root-condition hypothesis, control owner, and retest date"),
    ("remote-team-continuity-evidence-pack", "Assemble a continuity evidence pack for a remote team", "keep essential operating context usable during an absence or provider transition", "current queue, role boundaries, access contacts, approved procedures, and unresolved decisions"),
]

def q(value):
    return value.replace("\\", "\\\\").replace("'", "\\'")

rows = []
for slug, title, purpose, record in blogs:
    rows.append("['%s','%s','%s','%s']" % tuple(map(q, (slug, title, purpose, record))))

ts = """type Topic={slug:string;title:string;purpose:string;record:string};
const image='/images/thumbnail-backgrounds/operations-board.webp';
const topics:Topic[]=[%s].map(([slug,title,purpose,record])=>({slug,title,purpose,record})) as Topic[];
const make=(t:Topic)=>({sections:[
{heading:'Define the operating decision',paragraphs:[`Published September 11, 2026. Use this practice to ${t.purpose}. Begin with the decision the workflow must support, the person accountable for it, and the latest useful decision time.`,`A narrow question keeps a remote staffing process from becoming a collection of fields with no clear use. Write the question in plain language and connect it to a real handoff or service commitment.`]},
{heading:'Create evidence another owner can verify',paragraphs:[`The minimum record includes ${t.record}. Attach source links and timestamps so a reviewer can distinguish current evidence from an old assumption.`,`Keep sensitive data in its approved system. The operating record should point to controlled evidence, identify what was checked, and state what remains unresolved.`]},
{heading:'Make authority and stop conditions explicit',paragraphs:[`List the routine actions the offshore specialist may complete, the decisions that require consultation, and the exceptions that require approval. The person moving the queue is not automatically the owner of policy, employment, security, legal, or commercial decisions.`,`A useful stop condition names the trigger, the recipient, the evidence to send, and the safe interim state. It should let the specialist pause uncertain work without hiding a deadline or improvising an answer.`]},
{heading:'Test the handoff with edge cases',paragraphs:[`Run one ordinary example, one incomplete request, one conflicting instruction, and one unavailable approver through the process. Observe where the record loses context and where ownership becomes ambiguous.`,`Correct the instruction or permission at the point where the failure appeared. Do not solve a structural gap by asking one operator to remember an undocumented workaround.`]},
{heading:'Review the result on a fixed cadence',paragraphs:[`Inspect queue age, returned work, missing evidence, escalation response time, and accepted handoffs. These measures describe the process; they do not prove individual capability or the cause of an outcome.`,`Compare several operating cycles and keep the scope stable long enough to interpret the pattern. Annotate policy, staffing, and system changes that could explain a shift.`]},
{heading:'Decide whether to retain the control',paragraphs:[`Keep the practice when it makes a decision, risk, or owner materially clearer. Simplify fields that are never used and strengthen gates that repeatedly catch consequential errors.`,`Assign an owner and next review date to every retained control. Offshore Resourcing can support documented coordination and queue work, while the client retains final authority for employment, policy, security, and material exceptions.`]}
],faqs:[{q:'Who owns the final decision?',a:'The named client manager or authorised specialist owns the decision; the offshore operator prepares and routes the evidence.'},{q:'How should the team start?',a:'Pilot the practice with a small, live-shaped set of routine and exception cases before expanding its scope.'}]});
export const dailyBlogSep11Posts=topics.map((t,i)=>({slug:t.slug,title:t.title,excerpt:`A practical guide to ${t.purpose}.`,minutes:8+i%%3,publishedAt:'2026-09-11' as const,image,details:make(t)}));
export const dailyBlogSep11Details=Object.fromEntries(dailyBlogSep11Posts.map(p=>[p.slug,p.details]));
""" % (",\n".join(rows))
(ROOT / "app" / "daily-blog-2026-09-11.ts").write_text(ts)

research = [
    ("offshore-handoff-completeness-field-study-design", "How to Measure Offshore Handoff Completeness", "handoff completeness", "completed work handoffs", "four consecutive weekly operating cycles"),
    ("remote-queue-aging-observation-framework", "A Framework for Observing Remote Queue Aging", "queue aging", "open work items in one defined remote support queue", "twenty consecutive business days"),
    ("offshore-reviewer-agreement-sampling-study", "Designing a Reviewer Agreement Study for Offshore Work", "reviewer agreement", "a prespecified sample of completed offshore deliverables", "two review rounds completed within one calendar month"),
    ("philippines-offshore-escalation-latency-method", "Measuring Escalation Latency in Philippines Offshore Operations", "escalation latency", "eligible escalation records from one approved workflow", "six consecutive operating weeks"),
    ("remote-instruction-decay-audit-method", "A Bounded Audit Method for Remote Instruction Decay", "instruction decay", "active procedures used by one remote operating team", "a baseline audit and one repeat audit thirty days later"),
]

sources = """1. [NIST Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/)
2. [GAO Standards for Internal Control](https://www.gao.gov/products/gao-14-704g)
3. [UK Government Service Manual: Measuring Success](https://www.gov.uk/service-manual/measuring-success)
4. [OECD Handbook on Constructing Composite Indicators](https://www.oecd.org/sdd/42495745.pdf)
5. [NIST Risk Management Framework](https://csrc.nist.gov/projects/risk-management/about-rmf)
6. [ILO Teleworking Guidance](https://www.ilo.org/topics/teleworking)
7. [W3C Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/)
8. [CISA Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals)
9. [NIH Rigor and Reproducibility](https://grants.nih.gov/policy-and-compliance/policy-topics/reproducibility)
10. [US Census Statistical Quality Standards](https://www.census.gov/about/policies/quality/standards.html)"""

for i, (slug, title, construct, population, window) in enumerate(research):
    image = ["workforce-dashboard.webp", "capacity-planning.webp", "quality-review.webp", "handoff-lanes.webp", "document-workflow.webp"][i]
    body = f'''---
title: "{title}"
description: "A bounded research design for examining {construct} in distributed operations without overstating causal evidence."
datePublished: "{DATE}"
publishedAt: "{DATE}"
verifiedAt: "{DATE}"
category: offshore-operating-models
image: "/images/thumbnail-backgrounds/{image}"
sourceCount: "10"
---

*Published: September 11, 2026*

## Research question

How can an authorised operations team examine {construct} using records that already exist in a controlled workflow? The purpose is to produce a repeatable descriptive view, not a universal benchmark or a promise about service outcomes.

## Methodology

Use a preregistered observational protocol. Define the unit of analysis, eligible states, timestamps, exclusions, missing-data codes, and review procedure before selecting records. Export only the fields needed for the analysis, remove direct personal identifiers, and preserve a dated data dictionary. Two trained reviewers should independently classify a small calibration set, reconcile the rubric, then review the bounded population. Report counts, medians, ranges, category shares, and missingness beside the result. Keep raw records in the approved source system and retain an auditable analysis log.

## Scope, population, and observation window

The study population is {population}. The observation window is {window}. Records outside that workflow, period, or eligibility rule are excluded. The unit of analysis is one eligible record, not one employee, client, or provider. Results therefore describe the selected operating context and should not be generalized to other teams, countries, seasons, or service lines without a new sampling frame.

## Measures and quality checks

Define {construct} with observable fields rather than impressions. Validate timestamp order, duplicate handling, timezone conversion, and status definitions before analysis. Report how many records were eligible, excluded, incomplete, and reviewed. Recheck a fixed sample against the source system and have a second reviewer reproduce the summary from the frozen extract. Treat disagreements and missing fields as findings about measurement quality, not values to silently repair.

## Analysis plan

Begin with the full distribution and reason categories. Compare prespecified subgroups only when each group has enough eligible records to avoid exposing individuals or creating unstable percentages. Annotate staffing, policy, demand, and system changes during the window. A useful output shows where work waits, which evidence is absent, and which decision owner can investigate, while retaining the uncertainty around each observation.

## Inference and causal boundaries

This descriptive design can identify recorded patterns and measurement gaps within the stated population and window. It cannot establish that location, staffing model, an individual worker, or a specific management practice caused the pattern. Queue composition, task complexity, demand changes, system outages, policy changes, and unrecorded work are plausible alternative explanations. Causal claims require a separate design with an appropriate comparison, stable measurement, and controls for confounding.

## Limitations

Operational records may omit informal coordination, use inconsistent timestamps, or reflect behavior changed by observation. Small samples can produce unstable rates. Reviewer agreement does not prove the underlying record is true, and a clean record does not prove the service outcome was good. Privacy and access rules may limit available fields. Publish the exclusions and missingness, avoid individual rankings, and withdraw conclusions that the evidence cannot support.

## Decision use

The findings can support a narrow decision to clarify a field, adjust a handoff, schedule a deeper review, or test a revised control. The authorised manager should name the action, owner, review date, and evidence that would justify keeping or reversing the change. Offshore Resourcing can assist with the documented workflow and analysis preparation; the client retains decisions about people, policy, access, security, and material service commitments.

## Sources and references

{sources}
'''
    (ROOT / "content" / "research" / f"{slug}.md").write_text(body)

print("generated 12 blog records and 5 research documents")
