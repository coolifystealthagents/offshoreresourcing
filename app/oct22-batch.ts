export const october22Posts = [
  { slug: 'offshore-role-pilot-scorecard', title: 'A pilot scorecard for an offshore role', excerpt: 'Measure accuracy, evidence, escalation, and review time during a controlled first month before expanding scope.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-role-pilot-scorecard.png' },
  { slug: 'philippines-timezone-coverage-plan', title: 'A Philippines time-zone coverage plan that holds', excerpt: 'Map the hours that need coverage, the overlap you actually get, and the handoffs that must survive the gap.', minutes: 8, publishedAt: '2026-10-22', image: '/oct22/philippines-timezone-coverage-plan.png' },
  { slug: 'offshore-onboarding-buddy-system', title: 'Designing an onboarding buddy system for offshore staff', excerpt: 'Give a new hire a named buddy, a short question window, and a record of what was asked before the first month ends.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-onboarding-buddy-system.png' },
  { slug: 'remote-workstation-readiness-check', title: 'A remote workstation readiness check before day one', excerpt: 'Verify equipment, connectivity, power backup, and approved software before the first shift instead of during it.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/remote-workstation-readiness-check.png' },
  { slug: 'offshore-team-meeting-cadence', title: 'A meeting cadence for a distributed offshore team', excerpt: 'Use a short daily handoff, a weekly evidence review, and a monthly scope check instead of a calendar full of calls.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-team-meeting-cadence.png' },
  { slug: 'role-backup-coverage-matrix', title: 'A backup coverage matrix for every offshore role', excerpt: 'Name who covers each task, what access they need, and how the handoff is tested before leave or attrition forces it.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/role-backup-coverage-matrix.png' },
  { slug: 'offshore-attrition-warning-signals', title: 'Reading attrition warning signals early', excerpt: 'Watch for silent queue ownership, rising rework, disengagement from reviews, and access changes, then ask before guessing.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-attrition-warning-signals.png' },
  { slug: 'philippines-holiday-coverage-calendar', title: 'A Philippines holiday coverage calendar', excerpt: 'Plan around regular and special holidays with named coverage, approved alternatives, and customer expectations.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/philippines-holiday-coverage-calendar.png' },
  { slug: 'offshore-task-intake-triage', title: 'Triage offshore task intake before it becomes a queue', excerpt: 'Accept only requests with a source, owner, due point, and stop condition, and return the rest for completion.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-task-intake-triage.png' },
  { slug: 'remote-access-offboarding-timeline', title: 'A remote access offboarding timeline', excerpt: 'Sequence account removal, device recovery, knowledge transfer, and evidence retention when a role ends.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/remote-access-offboarding-timeline.png' },
  { slug: 'offshore-quality-sample-review', title: 'Running a quality sample review for offshore work', excerpt: 'Sample normal and exception items, score against a written standard, and separate coaching from process repair.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-quality-sample-review.png' },
  { slug: 'offshore-invoice-reconciliation', title: 'Reconciling offshore staffing invoices', excerpt: 'Match hours, headcount, leave, and approved rate changes before payment, with one exception list for the vendor.', minutes: 7, publishedAt: '2026-10-22', image: '/oct22/offshore-invoice-reconciliation.png' },
];

const baseTakeaways = [
  'Write the boundary before assigning the work.',
  'Use one evidence record the reviewer can reconstruct.',
  'Test a normal case and an exception before expanding.',
  'Review the lane weekly and change one thing at a time.',
];

export const october22Details = {
  'offshore-role-pilot-scorecard': {
    shortAnswer: [
      'A pilot scorecard turns the first month of an offshore role into evidence instead of impressions. It should score completed work against a written standard, record the exceptions the role escalated, and show how long manager review actually takes.',
      'The scorecard is not a performance rating for the person alone. It also tests the brief, the access, and the examples. If several items fail for the same reason, the operating design needs repair before volume increases.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Choose four scored dimensions', paragraphs: [
        'Score accuracy, evidence, escalation, and review time. Accuracy covers whether the output matches the approved example. Evidence covers whether the source and decision trail are attached. Escalation covers whether the role stopped at the right line. Review time covers how long a completed item waits for a manager.',
        'Keep each dimension to a three-level scale: meets, needs correction, critical failure. Critical failure is reserved for a wrong commitment, a privacy breach, or work that cannot be traced to a source. More levels invite debate without improving the decision.',
      ] },
      { heading: 'Sample the normal and the hard cases', paragraphs: [
        'Review at least twenty items in the first month, including incomplete inputs, a correction, and one item that required manager judgment. If the sample contains only clean work, the scorecard measures the sample selection, not the role.',
        'Record the item identifier, the score, the reason, and the corrective action. Preserve the first-pass score so a later discussion does not rewrite the history.',
      ] },
      { heading: 'Separate person from process', paragraphs: [
        'Group failures by cause: unclear instruction, missing access, missing source, execution error, or judgment call. A cluster of unclear instructions is a brief problem; a cluster of missing sources is an intake problem.',
        'Correct the process before coaching the person on a rule that was never written down. The scorecard should show which change was made and when it will be rechecked.',
      ] },
      { heading: 'Decide at the end of the pilot', paragraphs: [
        'At the end of the pilot, choose one of four outcomes: continue as designed, continue with narrower scope, extend the pilot with a specific fix, or stop. Record the evidence behind the decision and the date of the next review.',
        'A pilot that ends with no written decision becomes a permanent informal arrangement. The decision is the deliverable.',
      ] },
    ],
  },
  'philippines-timezone-coverage-plan': {
    shortAnswer: [
      'A Philippines-based role usually overlaps the morning of a US or European day, not the whole day. The coverage plan should state the hours actually covered, the handoff window, and the decisions that cannot wait for the next overlap.',
      'Build the plan around work that fits the overlap, then move asynchronous work outside it. Do not promise live coverage for hours the schedule does not cover.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Map the work by time sensitivity', paragraphs: [
        'List the recurring tasks and mark each as live, same-day, or asynchronous. A live call queue needs overlap; a reporting task can run before the onshore team wakes up.',
        'This map prevents the common failure where a role is hired for live support but most of the queue is asynchronous, or the reverse.',
      ] },
      { heading: 'State the handoff window', paragraphs: [
        'Define the thirty to sixty minutes at the end of the overlap when open items, decisions, and exceptions pass to the onshore owner. Give the handoff a written format: item, status, next action, and who owns it.',
        'The handoff is the control that makes a time-zone gap safe. Without it, work waits silently until the next overlap.',
      ] },
      { heading: 'Plan the quiet hours', paragraphs: [
        'Decide which work continues without supervision and which must stop. Access, approvals, and customer commitments usually stop; preparation, documentation, and scheduled reports can continue.',
        'Record the stop rule in the role brief so the offshore team does not invent authority to keep the queue moving.',
      ] },
      { heading: 'Review the actual overlap monthly', paragraphs: [
        'Compare planned coverage with the timestamps on completed work. If most handoffs happen after the window, the schedule or the task mix is wrong.',
        'Adjust one variable at a time: the shift start, the task mix, or the handoff time. Record the change and the next review date.',
      ] },
    ],
  },
  'offshore-onboarding-buddy-system': {
    shortAnswer: [
      'A buddy system gives a new offshore hire a named person to ask questions during the first weeks, without making the manager the only source of answers. It works when the buddy has time, a defined scope, and a way to record recurring questions.',
      'The buddy is not the reviewer of record. The manager still owns the probation decision and the quality standard.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Name the buddy and the window', paragraphs: [
        'Choose a peer who does the work and can answer operational questions. Set a daily question window, such as the first hour of the shift, and a backup for days off.',
        'Write the window into both schedules. An informal offer to help disappears when the buddy has a full queue.',
      ] },
      { heading: 'Separate buddy questions from manager decisions', paragraphs: [
        'The buddy can explain where a file lives, how a form is completed, and which example to follow. The manager decides scope changes, exceptions, access, and performance.',
        'Give the new hire a short list of questions that must go to the manager, so a buddy does not accidentally approve something outside their authority.',
      ] },
      { heading: 'Record recurring questions', paragraphs: [
        'Keep a simple log of questions asked more than twice. At the end of the first month, turn the answers into a checklist or a short guide.',
        'This record is the cheapest onboarding improvement available. It shows where the written material is missing rather than blaming the new hire for asking.',
      ] },
      { heading: 'Review the buddy arrangement', paragraphs: [
        'Ask both people whether the window was usable and whether the buddy had enough time. If the buddy absorbed extra work without recognition, the arrangement will fail quietly.',
        'At the end of probation, decide whether to keep the buddy for a second month, rotate the role, or retire it. Record the decision.',
      ] },
    ],
  },
  'remote-workstation-readiness-check': {
    shortAnswer: [
      'A workstation check verifies the equipment, connectivity, power, and approved software a remote worker needs before the first shift. It prevents the first day from becoming a troubleshooting session.',
      'The check should produce evidence: a photo or a test result for each item, not a verbal assurance.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'List the minimum equipment', paragraphs: [
        'Record the computer, headset, camera, second screen if required, and any approved peripheral. Note the serial numbers and whether the equipment is company-owned or personal.',
        'For personal equipment, confirm that the security requirements are met before access is granted.',
      ] },
      { heading: 'Test connectivity and power', paragraphs: [
        'Run a speed and latency test during the working hours, not at midnight. Record the result and the backup connection, such as a mobile hotspot.',
        'Ask about power backup and the plan for an outage. A role that handles live calls needs a different backup standard from one that prepares documents.',
      ] },
      { heading: 'Verify the software and access', paragraphs: [
        'Confirm the approved browser, collaboration tools, and any role-specific application. Check that the account can sign in and that multi-factor authentication is enrolled.',
        'Do not grant production access until the workstation check is complete. A temporary test account is enough for the first day.',
      ] },
      { heading: 'Close the check with evidence', paragraphs: [
        'Store the completed checklist with the test results and the date. If an item fails, record the remediation owner and the date it will be retested.',
        'Repeat the check after a device change, a move, or a connectivity complaint that lasts more than a day.',
      ] },
    ],
  },
  'offshore-team-meeting-cadence': {
    shortAnswer: [
      'A distributed offshore team needs fewer meetings than a co-located one, but it needs more reliable written handoffs. Use a short daily handoff, a weekly evidence review, and a monthly scope check.',
      'Every meeting should have a decision or a record. A recurring call with no output is a status habit, not a control.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Daily handoff, not a status call', paragraphs: [
        'Run a fifteen-minute handoff at the start or end of the overlap. Each person states what moved, what is blocked, and what needs a decision today.',
        'Keep the written queue as the source of truth. The call exists to surface exceptions, not to replace the record.',
      ] },
      { heading: 'Weekly evidence review', paragraphs: [
        'Review a small sample of completed work against the standard. Include one exception and one correction. The review is about the work, not attendance.',
        'End with one process change and an owner. A review that produces no change is a meeting that can be shortened.',
      ] },
      { heading: 'Monthly scope and capacity check', paragraphs: [
        'Compare the work actually performed with the role brief. Look for tasks that grew without a decision and tasks that disappeared without discussion.',
        'Use the review to adjust scope, access, or coverage. Record what changed and when it will be checked again.',
      ] },
      { heading: 'Protect focus time', paragraphs: [
        'Do not fill the overlap with meetings. The overlap is the scarcest resource for live collaboration; asynchronous work should use the rest of the day.',
        'Review the calendar monthly for recurring meetings that no longer have a decision attached.',
      ] },
    ],
  },
  'role-backup-coverage-matrix': {
    shortAnswer: [
      'A backup coverage matrix names who covers each task when the primary person is unavailable, what access the backup needs, and how the handoff is tested. It is the difference between planned leave and a queue emergency.',
      'The matrix should be short and reviewed quarterly. A backup who has never done the task is a name, not coverage.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'List tasks by criticality', paragraphs: [
        'Group the role into daily, weekly, and exception tasks. Mark the tasks that must continue during leave and the ones that can wait.',
        'Start with the daily tasks that touch customers, payments, or access. Those are the ones that fail loudly.',
      ] },
      { heading: 'Name a primary and a backup', paragraphs: [
        'Record the primary owner, the backup, the access level, and the handoff document for each task. Avoid naming the same backup for every role; overload is how coverage fails.',
        'Where a backup is not trained, mark the gap and schedule a practice session before the next leave.',
      ] },
      { heading: 'Test the handoff', paragraphs: [
        'Once a quarter, have the backup complete one task with the primary observing. Record what was missing from the handoff and fix it.',
        'A tabletop review is not a test. The test is completing the work with the access the backup will actually have.',
      ] },
      { heading: 'Review after every absence', paragraphs: [
        'After leave or an unplanned absence, record what worked and what did not. Update the matrix and the handoff document.',
        'Coverage improves through these small corrections, not through a single annual planning exercise.',
      ] },
    ],
  },
  'offshore-attrition-warning-signals': {
    shortAnswer: [
      'Attrition rarely appears without warning. Watch for withdrawal from reviews, rising rework, missed handoffs, sudden access changes, and shorter or more formal communication. Treat the signals as questions, not conclusions.',
      'The first response should be a private conversation and a check on workload, clarity, and support. Do not wait for the resignation to ask.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Track work signals, not personality', paragraphs: [
        'Record changes in queue ownership, response time, rework rate, and handoff completeness. A single bad week is noise; a two-week pattern is worth a conversation.',
        'Avoid scoring attitude. The evidence should be observable work and communication, not a manager’s impression.',
      ] },
      { heading: 'Check the workload and clarity', paragraphs: [
        'Ask whether the role has absorbed work outside the brief, whether priorities conflict, and whether the person has the access needed to finish tasks.',
        'Many apparent engagement problems are actually blocked work. Fix the block before treating it as a retention issue.',
      ] },
      { heading: 'Escalate sensitive cases', paragraphs: [
        'If the signal involves harassment, a safety concern, or a personal crisis, follow the company process and involve the right owner. Do not investigate informally.',
        'Keep the conversation confidential and record only what is needed for the follow-up.',
      ] },
      { heading: 'Act before the notice', paragraphs: [
        'If the risk is real, decide on a retention step: a scope correction, a schedule change, additional support, or a formal review. Record the decision and the date.',
        'If the person does leave, use the coverage matrix and the handoff record rather than starting from memory.',
      ] },
    ],
  },
  'philippines-holiday-coverage-calendar': {
    shortAnswer: [
      'Philippine regular and special holidays affect offshore coverage even when the onshore office is open. Build a calendar with the dates, the coverage plan, and the customer expectation before the quarter starts.',
      'Do not assume every holiday is a full closure. Some are declared later, and some teams agree to work with premium pay or a swap day.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Collect the official dates', paragraphs: [
        'Use the official Philippine proclamation and the company holiday policy. Record regular holidays, special non-working days, and local observances that affect the team.',
        'Mark the dates as confirmed or provisional. A provisional date still needs a plan.',
      ] },
      { heading: 'Decide the coverage model', paragraphs: [
        'For each date, choose closed, skeleton crew, or normal coverage. Record who works, the approval, and the compensation treatment under the employment arrangement.',
        'Keep the decision consistent with the contract and the local requirements. Do not promise a closure that the contract does not support.',
      ] },
      { heading: 'Tell the customer-facing teams', paragraphs: [
        'Publish the coverage calendar to the people who set customer expectations. Include the response time that applies on those dates.',
        'A customer who expects a same-day answer on a holiday will escalate when the queue is quiet.',
      ] },
      { heading: 'Review after the quarter', paragraphs: [
        'Record which dates changed, which coverage plan worked, and where the queue backed up. Update the next quarter’s calendar.',
        'Keep the calendar with the role documentation so a new manager does not rebuild it from news articles.',
      ] },
    ],
  },
  'offshore-task-intake-triage': {
    shortAnswer: [
      'Task intake fails when requests arrive without a source, an owner, a due point, or a definition of done. Triage returns incomplete requests instead of turning them into queue debt.',
      'A short intake form and a daily triage window are enough for most teams. The form protects the requester and the person doing the work.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Require five fields', paragraphs: [
        'Ask for the task, the source, the expected output, the due point, and the person who will review it. Add the access needed if the task touches a restricted system.',
        'A request missing any field goes back with a specific question, not a general rejection.',
      ] },
      { heading: 'Triage once a day', paragraphs: [
        'Review new requests at a fixed time and assign priority, owner, and status. Requests that arrive after the window start the next day unless they meet the emergency rule.',
        'This protects focus time and makes the queue predictable for the requester.',
      ] },
      { heading: 'Separate work from decisions', paragraphs: [
        'A decision request needs a recommendation and a named approver. A work request needs a source and an output. Mixing them produces items that sit because nobody knows which is missing.',
        'Record the type on the intake form so the queue can be filtered.',
      ] },
      { heading: 'Review the return rate', paragraphs: [
        'Track how many requests are returned for missing information. A high rate means the form or the guidance is unclear, not that requesters are careless.',
        'Fix the template before adding reminders.',
      ] },
    ],
  },
  'remote-access-offboarding-timeline': {
    shortAnswer: [
      'Access offboarding is a sequence, not a single disable action. It includes account removal, device recovery, knowledge transfer, and evidence retention, each with a different owner and deadline.',
      'Start before the last day. Waiting until the person has left makes every step slower and less verifiable.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Build the timeline backwards', paragraphs: [
        'Set the last working day, then work backward for knowledge transfer, handoff review, device return, and account removal. Give each step a date and an owner.',
        'Share the timeline with the person leaving so there are no surprises in the final week.',
      ] },
      { heading: 'Remove access in the right order', paragraphs: [
        'Disable interactive sign-in at the agreed time, then revoke sessions, tokens, and shared credentials. Remove group memberships and mailbox delegation after the handoff is complete.',
        'Record the time and the operator for each step. A blanket “access removed” note is not evidence.',
      ] },
      { heading: 'Recover the device and the data', paragraphs: [
        'Confirm the device return, wipe it, and record the serial number. Check that work files live in the approved system, not only on the device.',
        'Where a personal device was used, confirm that company data was removed and record the confirmation.',
      ] },
      { heading: 'Close the record', paragraphs: [
        'Store the offboarding checklist, the access removal log, and the handoff acknowledgement with the role record. Review any exceptions with the security owner.',
        'Update the coverage matrix so the next absence does not repeat the same scramble.',
      ] },
    ],
  },
  'offshore-quality-sample-review': {
    shortAnswer: [
      'A quality sample review checks completed work against a written standard. It should include normal items, exceptions, and corrections, and it should separate a people issue from a process issue.',
      'The output is a small set of corrections and one process change, not a score that nobody acts on.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Define the standard first', paragraphs: [
        'Write the acceptance criteria for the task: required fields, source references, output format, and the escalation condition. Without this, the review measures reviewer preference.',
        'Use the same criteria for the sample as for the first-month pilot.',
      ] },
      { heading: 'Sample across time and difficulty', paragraphs: [
        'Pull items from different days, queues, and reviewers. Include at least one exception and one item that was returned for correction.',
        'Record the sample frame and the selection rule so the result can be repeated.',
      ] },
      { heading: 'Score and classify', paragraphs: [
        'Score each item as meets, needs correction, or critical. Classify the cause: instruction, access, source, execution, or judgment.',
        'Review disagreements with the item open. Do not average them away.',
      ] },
      { heading: 'Fix one thing', paragraphs: [
        'Choose the most common fixable cause and change the instruction, the template, or the access. Record the change and the date of the next sample.',
        'Coaching can happen alongside the fix, but it should not be the only response to a process defect.',
      ] },
    ],
  },
  'offshore-invoice-reconciliation': {
    shortAnswer: [
      'Staffing invoices drift through small differences: a leave day not credited, a rate change applied early, a headcount that does not match the roster. Reconciliation compares the invoice with the approved records before payment.',
      'One exception list to the vendor is more effective than a dozen email threads.',
    ],
    takeaways: baseTakeaways,
    sections: [
      { heading: 'Match the invoice to the roster', paragraphs: [
        'Compare names, roles, start dates, and full-time equivalency with the approved roster. Flag anyone who appears on one list but not the other.',
        'Check the billing period and the currency. A period that overlaps the previous invoice is a common source of double billing.',
      ] },
      { heading: 'Check hours, leave, and overtime', paragraphs: [
        'Compare billed hours with the approved timesheet, leave record, and holiday calendar. Note any premium rate and the approval behind it.',
        'Where the contract bills a fixed monthly fee, check the variable items separately rather than accepting the total.',
      ] },
      { heading: 'Verify rate changes', paragraphs: [
        'Apply rate changes only from the effective date in the signed amendment. Record the amendment reference beside the adjusted line.',
        'An early increase is easy to miss and hard to recover later.',
      ] },
      { heading: 'Send one exception list', paragraphs: [
        'List the disputed lines with the invoice reference, the approved record, and the requested correction. Ask for a credit note or a revised invoice.',
        'Record the resolution and the date. Keep the reconciliation with the payment approval.',
      ] },
    ],
  },
};
