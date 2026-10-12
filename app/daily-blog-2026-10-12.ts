type Topic = {
  slug: string;
  title: string;
  focus: string;
  artifact: string;
  owner: string;
  signal: string;
  service: string;
  serviceHref: string;
};

const topics: Topic[] = [
  { slug: 'offshore-role-service-boundary-map', title: 'Map Service Boundaries Before an Offshore Role Goes Live', focus: 'service boundary mapping', artifact: 'boundary map', owner: 'service owner', signal: 'a request crosses from prepared work into a customer, financial, policy, or access decision', service: 'workforce planning support', serviceHref: '/services/workforce-planning-support' },
  { slug: 'offshore-queue-assumption-register', title: 'Build an Assumption Register for an Offshore Work Queue', focus: 'queue assumption control', artifact: 'assumption register', owner: 'queue owner', signal: 'actual arrivals, handling steps, or reviewer availability differ from the planning case', service: 'operations staffing', serviceHref: '/services/operations-staffing' },
  { slug: 'offshore-coverage-overlap-decision-log', title: 'Run a Coverage Overlap Decision Log Across Time Zones', focus: 'coverage overlap decisions', artifact: 'overlap decision log', owner: 'coverage manager', signal: 'an item arrives near a shift boundary without a confirmed next owner', service: 'administrative support staffing', serviceHref: '/services/administrative-support-staffing' },
  { slug: 'offshore-exception-rehearsal', title: 'Rehearse Exceptions Before Expanding Offshore Work', focus: 'exception rehearsal', artifact: 'exception rehearsal record', owner: 'operations owner', signal: 'the written procedure cannot determine a safe next action', service: 'quality assurance staffing', serviceHref: '/services/quality-assurance-staffing' },
  { slug: 'offshore-approval-latency-budget', title: 'Set an Approval Latency Budget for Offshore Operations', focus: 'approval latency budgeting', artifact: 'approval latency budget', owner: 'approval owner', signal: 'waiting for a consequential decision threatens the promised service window', service: 'project coordination support', serviceHref: '/services/project-coordination-support' },
  { slug: 'offshore-access-dependency-map', title: 'Create an Access Dependency Map for Offshore Staff', focus: 'access dependency mapping', artifact: 'access dependency map', owner: 'system owner', signal: 'a task needs a permission, export, shared identity, or recovery route outside its approved scope', service: 'IT support staffing', serviceHref: '/services/it-support-staffing' },
  { slug: 'offshore-pilot-acceptance-rubric', title: 'Use a Pilot Acceptance Rubric for Offshore Resourcing', focus: 'pilot acceptance', artifact: 'pilot acceptance rubric', owner: 'pilot sponsor', signal: 'evidence is incomplete, a case was excluded, or the acceptance rule changes after work begins', service: 'workforce planning support', serviceHref: '/services/workforce-planning-support' },
  { slug: 'offshore-manager-capacity-checkpoint', title: 'Add a Manager Capacity Checkpoint Before Offshore Expansion', focus: 'manager capacity review', artifact: 'capacity checkpoint', owner: 'department leader', signal: 'review, coaching, or exception work exceeds the time reserved for it', service: 'operations staffing', serviceHref: '/services/operations-staffing' },
  { slug: 'offshore-instruction-decay-review', title: 'Review Instruction Decay in a Mature Offshore Workflow', focus: 'instruction decay review', artifact: 'instruction change register', owner: 'process owner', signal: 'current system behavior or accepted examples no longer match the written procedure', service: 'quality assurance staffing', serviceHref: '/services/quality-assurance-staffing' },
  { slug: 'offshore-incident-handoff-across-time-zones', title: 'Design an Incident Handoff Across Offshore Time Zones', focus: 'incident handoff design', artifact: 'incident handoff packet', owner: 'incident commander', signal: 'an unresolved incident reaches shift end or changes severity', service: 'IT support staffing', serviceHref: '/services/it-support-staffing' },
  { slug: 'offshore-vendor-transition-evidence-pack', title: 'Prepare an Evidence Pack for an Offshore Vendor Transition', focus: 'vendor transition evidence', artifact: 'transition evidence pack', owner: 'transition sponsor', signal: 'ownership, access, open work, or retention obligations cannot be reconciled', service: 'project coordination support', serviceHref: '/services/project-coordination-support' },
  { slug: 'offshore-queue-recovery-playbook', title: 'Build a Queue Recovery Playbook After an Offshore Disruption', focus: 'queue recovery', artifact: 'queue recovery playbook', owner: 'continuity owner', signal: 'restored systems do not prove that queued, duplicated, or partially completed work is reconciled', service: 'customer support staffing', serviceHref: '/services/customer-support-staffing' },
];

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Primary governance framework for cybersecurity outcomes and accountable risk decisions.' },
  { name: 'CISA Cybersecurity Performance Goals', url: 'https://www.cisa.gov/cybersecurity-performance-goals', note: 'Government guidance for practical identity, access, logging, backup, and recovery safeguards.' },
  { name: 'Philippine National Privacy Commission', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Primary Philippine guidance on accountable personal-data processing.' },
  { name: 'U.S. GAO data reliability guidance', url: 'https://www.gao.gov/products/gao-20-283g', note: 'Audit guidance for testing source, completeness, and fitness for an intended use.' },
];

const headings = ['Define the decision before the activity', 'Inventory the evidence and dependencies', 'Separate preparation from authority', 'Design the working record', 'Test permissions and failure states', 'Rehearse routine and adverse cases', 'Set stop rules and escalation clocks', 'Measure the whole operating interval', 'Verify acceptance in the destination', 'Close the cycle with durable evidence'];

function sections(topic: Topic) {
  return headings.map((heading, index) => {
    const first = [
      `Treat ${topic.focus} as a named operating decision, not a collection of informal tasks. The ${topic.owner} should state the eligible work, intended result, service window, exclusions, evidence standard, and the decisions that remain with the client. The working ${topic.artifact} must be specific enough that a new reviewer can distinguish preparation from approval without relying on private chat or institutional memory.`,
      `For ${topic.title.toLowerCase()}, inventory every request source, system, file, mailbox, reviewer, downstream destination, and deadline touched by the lane. Mark each fact as confirmed, inferred, conflicting, unavailable, or awaiting an owner. Preserve the effective date and procedure version because later success must not erase what was missing when the decision was made.`,
      `The offshore specialist may gather evidence, apply an approved classification, prepare a recommendation, and route a complete record for review. The ${topic.owner} retains policy interpretation, employment choices, payments, public promises, risk acceptance, access administration, and material exceptions. Urgency or silence does not transfer that authority.`,
      `Use a compact ${topic.artifact} with the request, authoritative source, expected output, accountable owner, next action, due point, exception code, approval, and destination receipt. A blank field is ambiguous, so distinguish not applicable, not requested, unavailable, pending, and accidentally omitted. Keep sensitive records in their approved system and link by authorized reference.`,
      `List the identities, roles, integrations, exports, recovery paths, and local copies involved in ${topic.focus}. Begin with least privilege for one bounded case. Test one allowed action and one prohibited action, then record who can approve, provision, expand, suspend, and remove access. A successful login alone is not evidence that the boundary works.`,
      `Rehearse ${topic.focus} with an ordinary item, duplicate, missing source, conflicting instruction, unavailable reviewer, system rejection, urgent request, and correction after apparent completion. Write the expected action and stop point before testing. Use synthetic or properly protected data until the handling rules and permissions have been accepted by their accountable owners.`,
      `A stop rule should fire when ${topic.signal}. Give the paused item a safe state, reason code, current evidence, decision owner, backup, response clock, and next review time. A correct pause is a control success when it prevents unsupported action; it should not be scored as poor productivity merely because elapsed time increases.`,
      `Measure ${topic.focus} from eligible arrival through accepted outcome. Separate specialist handling, provider review, client wait, external wait, system delay, rework, reopened cases, and corrections. State the denominator and exclusions beside every rate. Activity counts cannot establish that the intended result reached the right person or system and was accepted.`,
      `Define the destination receipt for ${topic.artifact}: a system event, approved record, acknowledged handoff, reconciled balance, or other observable proof. Compare the accepted result with the approved version, population, schedule, and access state. When an action cannot be reversed, the ${topic.owner} chooses the corrective path while the specialist records facts and receipts.`,
      `Close ${topic.focus} with the scope, sources, approvals, execution evidence, exceptions, corrections, access changes, and unresolved actions retained according to policy. Mark each control passed, failed, waived, or not tested. Review the design when volume, systems, data sensitivity, service windows, authority, or personnel change rather than allowing stable work to create silent permission.`
    ][index];
    const second = `In the ${topic.artifact}, add a route-specific checkpoint for “${topic.signal}.” Record the observed condition, the expected condition, the smallest safe next step, the evidence still needed, and the person authorized to decide. This makes ${topic.title.toLowerCase()} inspectable across time zones and protects both the business and the contributor from confident guessing. Review one normal case and one difficult case together before widening scope.`;
    return { heading, paragraphs: [first, second] };
  });
}

export const dailyBlogOct12Posts = topics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  excerpt: `A practical guide to ${topic.focus} that keeps evidence, stop rules, review capacity, and consequential decisions visible across an offshore operating lane.`,
  minutes: 11 + (index % 2),
  publishedAt: '2026-10-12' as const,
  image: `/images/october-12/${topic.slug}.webp`,
  details: {
    sections: sections(topic),
    sources,
    service: topic.service,
    serviceHref: topic.serviceHref,
    faqs: [
      { q: `Who owns ${topic.focus}?`, a: `The named ${topic.owner} owns consequential decisions. Offshore staff can prepare the ${topic.artifact}, verify routine evidence, and escalate exceptions within written authority.` },
      { q: `What should be tested before ${topic.focus} expands?`, a: 'Test ordinary work, missing evidence, a changed instruction, unavailable review, a denied action, and correction after apparent completion.' },
    ],
  },
}));

export const dailyBlogOct12Details = Object.fromEntries(dailyBlogOct12Posts.map((post) => [post.slug, post.details]));
