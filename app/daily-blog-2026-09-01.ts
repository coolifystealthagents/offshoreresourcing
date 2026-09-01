export type DailyBlogSep1 = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  publishedAt: '2026-09-01';
  details: { sections: { heading: string; paragraphs: string[] }[]; faqs: { q: string; a: string }[] };
};

type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  operatingQuestion: string;
  opening: string;
  artifact: string;
  ownerDecision: string;
  signals: string[];
  headings: string[];
};

const topics: Topic[] = [
  {
    slug: 'philippines-offshore-pilot-scope-one-workflow',
    title: 'How to scope a one-workflow pilot for a Philippines offshore hire',
    excerpt: 'Start with one repeatable workflow, a bounded queue, and a manager-owned acceptance check before expanding the role.',
    operatingQuestion: 'which single workflow can prove the handoff without exposing unrelated systems or commitments',
    opening: 'A team wants offshore support across inboxes, reporting, scheduling, and customer records on day one. The breadth makes it impossible to tell whether weak results come from instruction, access, review delay, or the role itself.',
    artifact: 'a pilot charter listing the input, output, weekly volume, approved systems, examples, exception rule, reviewer, success evidence, and stop date',
    ownerDecision: 'The hiring manager selects the workflow, accepts live output, and decides whether evidence supports expansion.',
    signals: ['items completed from approved inputs', 'exceptions stopped at the agreed boundary', 'review turnaround during the pilot', 'changes required before a second workflow'],
    headings: ['Choose a workflow with a visible finish', 'Set a volume boundary', 'Provide accepted examples', 'Limit access to the pilot', 'Define the exception stop', 'Reserve manager review time', 'Compare evidence at the midpoint', 'Close with an expansion decision'],
  },
  {
    slug: 'philippines-offshore-reviewer-load-forecast',
    title: 'Forecasting reviewer load for a Philippines offshore support lane',
    excerpt: 'Estimate the checks, questions, corrections, and approval windows a manager must absorb as offshore work begins.',
    operatingQuestion: 'whether the named reviewer has enough capacity to keep prepared work moving safely',
    opening: 'A coordinator can prepare forty records each week, but the manager has only one short review window. The staffing plan counts contributor capacity while treating approval capacity as unlimited.',
    artifact: 'a reviewer-load forecast showing expected items, sample rate, exception rate, minutes per check, decision windows, backup coverage, and maximum safe backlog',
    ownerDecision: 'The accountable manager commits review capacity, changes the sample plan, or delays volume growth.',
    signals: ['work awaiting first review', 'minutes spent on ordinary checks', 'exception decisions completed on time', 'corrections caused by hurried review'],
    headings: ['Count review events, not headcount', 'Separate checks from decisions', 'Estimate the early learning curve', 'Model exception demand', 'Name a maximum review backlog', 'Protect decision windows', 'Assign credible backup coverage', 'Reforecast after observed work'],
  },
  {
    slug: 'philippines-offshore-request-readiness-gate',
    title: 'Building a request-readiness gate for Philippines offshore work',
    excerpt: 'Keep incomplete requests out of the active queue with clear inputs, ownership, due-date logic, and a return path.',
    operatingQuestion: 'whether a request contains enough approved context to begin without the contributor inventing missing decisions',
    opening: 'Managers send tasks with a title and deadline but omit the source record, accepted example, or approval owner. The queue looks full even though much of it cannot safely start.',
    artifact: 'a readiness checklist covering requester, business outcome, source location, output format, due-date reason, permissions, reviewer, and known exceptions',
    ownerDecision: 'The queue owner defines readiness, resolves disputed urgency, and accepts any exception to the gate.',
    signals: ['requests returned before work starts', 'missing fields by requester', 'time spent waiting for context', 'work reopened because the brief was incomplete'],
    headings: ['Define ready in observable terms', 'Require an accountable requester', 'Link the authoritative source', 'Explain the due date', 'Name the output and reviewer', 'Return incomplete work visibly', 'Track repeat readiness gaps', 'Change the gate when work changes'],
  },
  {
    slug: 'philippines-offshore-shadowing-observation-log',
    title: 'Using a shadowing observation log to transfer Philippines offshore work',
    excerpt: 'Turn live demonstrations into reusable evidence about steps, judgment points, system limits, and unanswered questions.',
    operatingQuestion: 'what a new team member must observe and record before attempting the workflow with supervision',
    opening: 'An experienced employee shares a screen and completes the task quickly, but the learner sees clicks without understanding why records were chosen or when the normal path should stop.',
    artifact: 'an observation log pairing each task stage with source, action, reason, expected result, exception clue, permission used, and follow-up question',
    ownerDecision: 'The process owner confirms the captured reasoning and decides when observation can progress to supervised practice.',
    signals: ['questions tied to a specific step', 'unstated judgment made explicit', 'instructions corrected after observation', 'practice attempts completed without guessing'],
    headings: ['Observe one complete work item', 'Record the reason behind each step', 'Mark judgment points', 'Capture system and access limits', 'Compare the log with instructions', 'Answer questions in the shared record', 'Move to supervised practice', 'Retain learning for the next handoff'],
  },
  {
    slug: 'philippines-offshore-approval-timeout-rule',
    title: 'Setting an approval-timeout rule for Philippines offshore workflows',
    excerpt: 'Define what happens when a required manager decision does not arrive before work or a customer promise is affected.',
    operatingQuestion: 'how long prepared work may wait and which safe action follows a missed approval window',
    opening: 'A contributor finishes a draft during Philippine working hours, but the approver does not respond. The next shift cannot tell whether to hold, notify, reroute, or treat silence as consent.',
    artifact: 'an approval-timeout rule naming the decision, expected window, reminder, backup owner, latest safe time, prohibited assumptions, and closure record',
    ownerDecision: 'Managers set response commitments and authorize any backup decision path; silence never expands contributor authority.',
    signals: ['decisions received inside the window', 'timeouts by decision owner', 'commitments changed after delay', 'cases rerouted to an approved backup'],
    headings: ['Name the exact approval', 'Set a realistic response window', 'Define the latest safe time', 'Ban implied approval', 'Use one reminder channel', 'Route to an authorized backup', 'Repair affected commitments', 'Review timeout patterns'],
  },
  {
    slug: 'philippines-offshore-workload-seasonality-map',
    title: 'Mapping workload seasonality for a Philippines offshore role',
    excerpt: 'Plan staffing and review coverage around recurring peaks, cutoff dates, low-volume periods, and exception-heavy cycles.',
    operatingQuestion: 'which changes in volume or complexity are predictable enough to plan before they overload the lane',
    opening: 'Monthly averages suggest a stable role, yet quarter-end requests arrive together and carry more exceptions. The average conceals the weeks when both contributor and reviewer capacity fail.',
    artifact: 'a seasonality map recording time period, normal volume, peak volume, task mix, exception rate, cutoff, reviewer demand, and approved response',
    ownerDecision: 'Operations leaders approve capacity changes, service commitments, overtime, and work that will be deferred during peaks.',
    signals: ['volume by week rather than annual average', 'exception mix during known peaks', 'review backlog near cutoff dates', 'planned work displaced by seasonal demand'],
    headings: ['Use the smallest useful time period', 'Separate volume from complexity', 'Mark business cutoffs', 'Add reviewer demand', 'Identify the lowest-risk work to defer', 'Prepare coverage before the peak', 'Track the actual peak', 'Revise the next cycle'],
  },
  {
    slug: 'philippines-offshore-definition-of-done',
    title: 'Writing a definition of done for Philippines offshore support tasks',
    excerpt: 'Make completion verifiable with output, evidence, status, handoff, and acceptance rules that another person can inspect.',
    operatingQuestion: 'what evidence distinguishes finished work from activity that still needs review or follow-up',
    opening: 'A queue item is marked complete when a form is updated, while the manager expects a checked attachment, customer note, and handoff to the next owner. Both sides use the same status for different outcomes.',
    artifact: 'a definition-of-done card covering required output, evidence location, quality check, status update, next owner, notification, and acceptance exception',
    ownerDecision: 'The process owner defines acceptable completion and resolves conflicts between speed, format, policy, and customer impact.',
    signals: ['completed items reopened', 'missing evidence at handoff', 'reviewers applying the same acceptance rule', 'next owners acknowledging receipt'],
    headings: ['Describe the finished outcome', 'Name required evidence', 'Include the quality check', 'Update status and next action', 'Make the handoff visible', 'Separate done from awaiting approval', 'Calibrate with real examples', 'Revise after controlled changes'],
  },
  {
    slug: 'philippines-offshore-correction-turnaround-lane',
    title: 'Designing a correction-turnaround lane for Philippines offshore work',
    excerpt: 'Route returned work with a clear defect, owner, priority, learning note, and acceptance check instead of scattered feedback.',
    operatingQuestion: 'how corrected work should re-enter the queue without hiding defects or displacing higher-risk commitments',
    opening: 'Reviewers return work in chat with phrases such as please fix or not quite right. The contributor cannot distinguish a factual defect from a style preference or tell when the correction is due.',
    artifact: 'a correction ticket containing the affected output, observed defect, acceptance rule, severity, reviewer evidence, due time, assigned owner, and final check',
    ownerDecision: 'Reviewers classify defects consistently; the queue owner decides priority and any change to existing commitments.',
    signals: ['corrections linked to an acceptance rule', 'time from return to recheck', 'repeat defects after instruction changes', 'preferences separated from required fixes'],
    headings: ['Return the work through one lane', 'Describe an observable defect', 'Link the acceptance rule', 'Set severity by consequence', 'Protect the active queue', 'Record the correction made', 'Recheck before closure', 'Use patterns to repair instructions'],
  },
  {
    slug: 'philippines-offshore-stakeholder-notification-matrix',
    title: 'Creating a stakeholder notification matrix for Philippines offshore operations',
    excerpt: 'Tell the right owner about delays, exceptions, approvals, and closures without copying everyone into routine work.',
    operatingQuestion: 'who needs which operational signal, through what channel, and by what time',
    opening: 'A routine delay triggers a broad email while a customer-sensitive exception remains in a private message. More communication has not produced better awareness.',
    artifact: 'a notification matrix mapping event, consequence, recipient, message fields, channel, deadline, sender, and acknowledgement requirement',
    ownerDecision: 'Business owners define material events, external communication authority, and who may accept a changed commitment.',
    signals: ['material events reaching the named owner', 'routine updates kept in shared records', 'acknowledgements received where required', 'duplicate or contradictory notices'],
    headings: ['Start with events, not people', 'Classify operational consequence', 'Choose the smallest audience', 'Specify the message fields', 'Match channel to urgency', 'Protect external communication authority', 'Record acknowledgement', 'Remove noisy notifications'],
  },
  {
    slug: 'philippines-offshore-new-manager-handoff',
    title: 'Handing a Philippines offshore team to a new manager',
    excerpt: 'Transfer workflow ownership, review commitments, decision rights, access, and unresolved issues before leadership changes.',
    operatingQuestion: 'what a new manager must accept so the offshore lane can continue without silent gaps in authority',
    opening: 'A manager leaves with deep knowledge of exception history and review standards. The replacement receives a team chart but no map of active decisions, fragile controls, or promised review windows.',
    artifact: 'a manager-handoff pack listing workflows, role boundaries, current volume, approval duties, open exceptions, system ownership, quality rules, commitments, and next reviews',
    ownerDecision: 'The incoming manager formally accepts decision and review responsibilities or escalates capacity and authority gaps.',
    signals: ['open decisions assigned to the incoming owner', 'review windows preserved after transition', 'access ownership confirmed', 'team questions answered in shared guidance'],
    headings: ['Transfer decisions, not just documents', 'Map every active workflow', 'Show review and approval duties', 'List unresolved exceptions', 'Confirm system ownership', 'Revisit team boundaries', 'Run the first review together', 'Record formal acceptance'],
  },
  {
    slug: 'philippines-offshore-low-volume-role-test',
    title: 'Testing whether a low-volume workflow belongs in a Philippines offshore role',
    excerpt: 'Assess frequency, setup cost, memory burden, access, and interruption risk before assigning occasional work offshore.',
    operatingQuestion: 'whether an infrequent task creates enough stable value to justify training, access, and readiness maintenance',
    opening: 'A task appears easy and takes two hours each month, but every run requires remembering changed fields, reopening permissions, and asking a specialist about an exception.',
    artifact: 'a low-volume role test comparing frequency, task time, setup time, instruction stability, access upkeep, exception dependence, business value, and alternative owner',
    ownerDecision: 'The role owner decides whether to retain, bundle, automate, or keep the work with an internal specialist.',
    signals: ['setup time compared with task time', 'instruction changes between runs', 'access failures after inactivity', 'specialist intervention required'],
    headings: ['Measure the whole cost of each run', 'Count readiness maintenance', 'Test instruction stability', 'Check dormant access risk', 'Expose specialist dependence', 'Compare sensible alternatives', 'Pilot one complete cycle', 'Keep or remove the task explicitly'],
  },
  {
    slug: 'philippines-offshore-escalation-response-quality',
    title: 'Reviewing escalation-response quality in a Philippines offshore team',
    excerpt: 'Check whether managers answer the question raised, protect the deadline, record the decision, and improve future guidance.',
    operatingQuestion: 'whether an escalation produces a timely, usable decision rather than another ambiguous message',
    opening: 'Contributors escalate correctly but receive replies such as use your judgment or handle as usual. Response time looks good while the decision needed to proceed remains absent.',
    artifact: 'an escalation-response sample recording the question, risk, deadline, responder, answer, authority, resulting action, closure evidence, and instruction follow-up',
    ownerDecision: 'Managers provide decisions within their authority and route legal, financial, security, or policy questions to qualified owners.',
    signals: ['responses that answer the stated question', 'decision time before the safe deadline', 'authority visible in the record', 'repeat escalations reduced by updated guidance'],
    headings: ['Sample complete escalation threads', 'Test whether the question was answered', 'Measure against the safe deadline', 'Verify responder authority', 'Record the resulting action', 'Separate advice from approval', 'Update guidance after closure', 'Review manager-side patterns'],
  },
];

function sections(topic: Topic) {
  return topic.headings.map((heading, index) => ({
    heading,
    paragraphs: [
      index === 0
        ? `Published September 1, 2026. ${topic.opening} The operating question is ${topic.operatingQuestion}. Begin with a recent item and the record it produced. Show the source, the action taken, the point where work paused, and the person authorised to decide. This keeps role design anchored to evidence instead of a broad job title.`
        : `${heading} affects ${topic.signals[index % topic.signals.length]}. Inspect one ordinary item and one exception. Note when the request arrived, whether its inputs were approved, what the contributor could decide, and where the next owner responded. Differences between those two cases often reveal a missing boundary more clearly than an average completion time.`,
      `Use ${topic.artifact}. Each field should support a real action or review question. Give every unresolved status an owner and next checkpoint. If a fact cannot be verified, label it missing rather than filling the gap from memory. Store the record where an authorised backup can find it, and link to source material instead of duplicating sensitive data unnecessarily.`,
      `${topic.ownerDecision} Contributors may prepare records, apply agreed rules, and surface exceptions, but they should not inherit authority because an owner is busy. When a decision is late, state the question, operational consequence, latest safe time, and available approved options. Review ${topic.signals[(index + 1) % topic.signals.length]} after the next cycle, change one control at a time, and keep the revision only when the evidence improves.`,
    ],
  }));
}

export const dailyBlogSep1Posts: DailyBlogSep1[] = topics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  excerpt: `${topic.excerpt} Published September 1, 2026.`,
  minutes: 9 + (index % 3),
  publishedAt: '2026-09-01',
  details: {
    sections: sections(topic),
    faqs: [
      { q: `What should managers decide first for ${topic.title.toLowerCase()}?`, a: `Managers should decide ${topic.operatingQuestion}, then name the evidence, responsible owner, and review time.` },
      { q: 'What can the offshore team member prepare?', a: `The team member can prepare ${topic.artifact}. Final policy, risk, budget, employment, and customer-impact decisions stay with authorised owners.` },
    ],
  },
}));

export const dailyBlogSep1Details = Object.fromEntries(dailyBlogSep1Posts.map((post) => [post.slug, post.details]));
