---
title: "How Much Time Do Offshore Staff Lose to Tool Permission Waits Each Month?"
description: "A time-study method for permission waits, separating blocked work from a workaround that keeps the queue moving."
category: "offshore resourcing operations"
publishedAt: 2026-11-10
verifiedAt: 2026-11-10
image: "/daily10/offshoreresourcing/how-much-time-do-offshore-staff-lose-to-tool-permission-waits-each-month.webp"
sourceCount: 6
---

## Research question and decision supported

The question is how much productive time offshore staff lose each month waiting for a tool permission, and which parts of the request path create the delay. The decision supported is whether to change the request form, the approval authority, the provisioning process, or the role's default access. A permission wait can look small in a single ticket and large when it repeats across a team. The method measures the interval from the moment work is blocked to the moment the person can complete the task. It does not assume that every wait is waste, because some requests should be reviewed carefully.

State the scope of the study, including the roles, tools, and period covered. A permission wait in a rarely used tool may matter less than one in the daily queue. Weight the result by the frequency of the task, not only by the length of the wait. The decision should target the waits that block the most work.

## Define a permission wait

A permission wait starts when a worker cannot perform an assigned task because an access right is missing, and ends when the worker can perform it. Record the task, the tool, the missing right, the request time, the approval time, the provisioning time, and the first successful use. If the worker can use a read-only view or a colleague's export in the meantime, record that workaround separately rather than counting it as productive time. If the request is denied and the task is reassigned, end the wait at the denial and record the outcome. The definition should exclude time spent learning a tool that the worker can already access.

Test the definition on a request that was approved before the task started and one that was denied. Confirm that neither is counted as a wait under the study. Include a case where the worker used a read-only view as a workaround. The examples keep the boundary between blocked and workaround time consistent.

## Instrument the request path

Use the ticket system, the identity provider, and the application log to capture the timestamps rather than asking people to estimate. If the systems do not connect, have the worker record the request and the first successful use, and have the approver record the decision time. Add a field for the business justification and the role, because a request that lacks justification will wait longer. Separate the approval queue from the provisioning queue so the analysis can show which one is slow. Check the data against a small sample of manual observations before trusting the timestamps. A time study built on guesses will produce a precise number with no operational value.

Record the source system for each timestamp and the person who entered it. If a timestamp is manual, mark it and report the share of manual records. Check for clock differences between the ticket system and the application log. A small time-zone error can change the median for short waits.

## Sample requests across roles and tools

Select permission requests from a defined period and include every role that depends on the tool. Stratify by tool, request type, role, and whether the request was routine or exceptional. Include requests that were approved quickly and requests that were denied, because a denial can also block a task. Exclude requests made in advance of a start date if the worker was not yet expected to work. Record the tenure of the requester, since a new hire may need a broader set of rights. A sample drawn only from the slowest tickets will overstate the typical wait.

Report the number of requests by role and tool before presenting the average. If one role dominates the sample, the result describes that role more than the team. Include a small number of denied requests and explain why they are in the sample. A study that excludes denials can miss a real source of lost time.

## Calculate blocked and workaround time

For each request, calculate the blocked interval and the workaround interval separately. Blocked time is the period when the task could not proceed at all. Workaround time is the period when the worker used another method, which may be slower or less reliable. Multiply the median by the monthly request volume to estimate the team-level cost, and show the range rather than a single figure. Do not add workaround time to blocked time as if both were lost, because the workaround may still produce the output. Report the number of tasks affected and the number that missed a due point. The estimate should be transparent enough for a manager to challenge the assumptions.

Show the formula and the assumptions beside the estimate. Use a wage or cost figure from a cited source, or present the result in hours only. Do not mix hours and dollars in the same table without a conversion note. A simple estimate with clear assumptions is more useful than a precise number with hidden inputs.

## Compare by tool and approval path

Group the waits by tool and by the approval path, such as a manager, a tool owner, a security team, or an automatic role-based grant. Compare the median, the 75th percentile, and the longest wait for each path. A fast median with a long tail may mean the primary approver is usually available but the backup is not. A slow median may be appropriate for a high-risk tool and unnecessary for a read-only report. Include the number of requests that were returned for missing information. The comparison should show where a change would reduce the most waiting without weakening the control.

Include the volume of requests for each path, because a long wait on a rarely used tool may not justify a process change. Compare the tail as well as the median. Identify the path with the largest total waiting time, not just the longest single case. The total shows where a change would recover the most capacity.

## Separate necessary review from avoidable delay

Not every wait is a process defect. A request for a sensitive data export should be reviewed, and a new tool should be assessed before access is granted. Classify each wait as necessary review, queued approval, missing information, provisioning delay, or rework. If most of the time sits in queued approval, add a service-level target or a backup approver. If it sits in missing information, fix the request form. If it sits in provisioning, work with the tool owner on a standard role. This classification prevents the team from removing a control just because the wait is visible.

Ask the tool owner to confirm which reviews are required by policy and which are a local habit. A review that no policy requires may still be useful, but it should be justified. Record the reason for each classification. This step prevents the team from weakening a necessary control in the name of speed.

## Use the result to change one step

Choose the step with the largest avoidable delay and make one change. A pre-approved role profile can remove routine requests, a clearer form can reduce returns, and a named backup can cover absences. Set a target for the changed step and measure the same interval afterward. Ask the workers whether the change reduced the wait or merely moved it to another queue. Keep the high-risk review for the rights that genuinely need it. Report the before-and-after result with the same sample frame. A permission process improves when the team can see which step it is trying to fix.

Set a target for the changed step and a date for the follow-up measurement. Use the same sample frame and the same definition. Ask the workers whether the wait moved to another step or genuinely decreased. A change that only shifts the queue is not an improvement.

## Limitations

System timestamps may not capture the moment a worker actually needed access, and a request can be created before the task is assigned. Workers may use informal workarounds that are not recorded, which understates the delay. A small sample may not represent rare but high-impact tools. The cost estimate depends on a wage assumption that should be stated and sourced. The method does not judge whether a request should have been approved. Report the sample, the assumptions, and the missing records, and treat the result as a planning estimate rather than an accounting figure.

The estimate depends on timestamp quality, workaround reporting, and the wage assumption. A small sample may miss rare tools or seasonal peaks. The method does not prove that a permission should have been granted. Report the limitations with the result and use the finding to prioritize a process review, not to set a blanket service target.

## Sources

1. [U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics](https://www.bls.gov/oes/)
2. [U.S. Department of Labor, Fact Sheet 22: Hours Worked](https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked)
3. [NIST SP 800-53 Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
4. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
5. [CISA Cyber Essentials](https://www.cisa.gov/cyber-essentials)
6. [U.S. Small Business Administration, Manage your business](https://www.sba.gov/business-guide/manage-your-business)
