import { dailyBlogPosts } from './daily-blog-2026-08-18';
import { dailyBlog20Posts } from './daily-blog-2026-08-20';
import { repairBlog21Posts } from './daily-blog-2026-08-21-repair';
import { sourceRepair2Posts } from './daily-blog-2026-08-21-source-repair-2';

export const site = {
  "domain": "OffshoreResourcing.com",
  "slug": "offshoreresourcing",
  "brand": "Offshore Resourcing",
  "primary": "offshore resourcing",
  "audience": "companies building reliable offshore teams across admin, support, finance, and tech",
  "angle": "role planning, recruiting lanes, QA, replacement coverage, and scorecards",
  "style": "Enterprise resource matrix",
  "dark": "#111827",
  "color": "#475569",
  "accent": "#14b8a6",
  "heroImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  "alt": "global offshore team video call with dashboards",
  "badge": "Team bench"
} as const;
export const services = [
  { slug: "talent-sourcing-support", title: "Talent Sourcing Support", desc: "Filipino resourcing specialists can handle talent sourcing support with documented workflows, approval limits, and owner review." },
  { slug: "candidate-screening-coordination", title: "Candidate Screening Coordination", desc: "Filipino resourcing specialists can handle candidate screening coordination with documented workflows, approval limits, and owner review." },
  { slug: "interview-scheduling", title: "Interview Scheduling", desc: "Filipino resourcing specialists can handle interview scheduling with documented workflows, approval limits, and owner review." },
  { slug: "recruitment-administration", title: "Recruitment Administration", desc: "Filipino resourcing specialists can handle recruitment administration with documented workflows, approval limits, and owner review." },
  { slug: "workforce-planning-support", title: "Workforce Planning Support", desc: "Filipino resourcing specialists can handle workforce planning support with documented workflows, approval limits, and owner review." },
  { slug: "onboarding-coordination", title: "Onboarding Coordination", desc: "Filipino resourcing specialists can handle onboarding coordination with documented workflows, approval limits, and owner review." },
  { slug: "training-administration", title: "Training Administration", desc: "Filipino resourcing specialists can handle training administration with documented workflows, approval limits, and owner review." },
  { slug: "performance-reporting", title: "Performance Reporting", desc: "Filipino resourcing specialists can handle performance reporting with documented workflows, approval limits, and owner review." },
  { slug: "schedule-coordination", title: "Schedule Coordination", desc: "Filipino resourcing specialists can handle schedule coordination with documented workflows, approval limits, and owner review." },
  { slug: "people-operations-support", title: "People Operations Support", desc: "Filipino resourcing specialists can handle people operations support with documented workflows, approval limits, and owner review." },
  { slug: "compliance-document-administration", title: "Compliance Document Administration", desc: "Filipino resourcing specialists can handle compliance document administration with documented workflows, approval limits, and owner review." },
  { slug: "retention-program-support", title: "Retention Program Support", desc: "Filipino resourcing specialists can handle retention program support with documented workflows, approval limits, and owner review." },
] as const;

export const serviceDetails = {
  'workforce-planning-support': {
    summary: 'A Filipino workforce planning specialist can organize workload records, coverage notes, and draft staffing views for your manager. Your team still decides headcount, budget, overtime, hiring, and any exception that changes policy.',
    bestTasks: [
      'Combine approved hours, leave records, and workload forecasts in one planning sheet',
      'Flag coverage gaps and prepare options for manager review',
      'Keep role, schedule, and capacity records current after approved changes',
      'Prepare a weekly summary of open roles, planned coverage, and unresolved questions',
    ],
    controls: [
      'Managers approve headcount, hiring plans, overtime, and budget changes',
      'The specialist works only from approved source records and named systems',
      'Draft plans stay unpublished until the manager checks assumptions and exceptions',
      'Access is limited to the workforce records needed for the assigned planning work',
    ],
    firstWeek: [
      { title: 'Share the source records', body: 'Provide approved schedules, leave records, role lists, and one recent planning example.' },
      { title: 'Build a draft view', body: 'The Filipino specialist prepares a planning sheet and marks missing or conflicting information.' },
      { title: 'Review before use', body: 'The manager checks coverage, assumptions, and exceptions before any staffing decision is made.' },
    ],
    faqs: [
      { q: 'Can the specialist decide how many people we need?', a: 'No. The specialist can prepare workload and coverage information, but your manager owns headcount and hiring decisions.' },
      { q: 'What should we provide before the work starts?', a: 'Share approved schedules, leave records, role lists, workload data, and an example of the planning format your team already uses.' },
      { q: 'Can this role approve overtime or leave?', a: 'No. A Filipino specialist can record approved changes and flag conflicts. Your authorized manager approves overtime, leave, and policy exceptions.' },
    ],
  },
} as const;

const blogPostsSource = [
  { slug: 'philippines-offshore-workforce-capacity-planning', title: 'How to plan Philippines offshore workforce capacity without overloading the queue', excerpt: 'Translate recurring work, coverage windows, review capacity, and exception volume into a staffing plan your manager can actually run.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-role-approval-checklist', title: 'Philippines offshore role approval checklist for accountable hiring managers', excerpt: 'Decide which work belongs in a Philippines support role, what evidence is needed, and which decisions must remain with the hiring manager.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-work-sample-design', title: 'How to design a Philippines offshore work sample that tests the real role', excerpt: 'Build a fair fictional exercise around the records, handoffs, quality checks, and exception judgment the role will use every week.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-manager-coverage-hours', title: 'Choosing coverage hours for a Philippines offshore support role', excerpt: 'Set overlap around decisions, handoffs, customer impact, and review windows instead of choosing hours from habit.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-role-boundaries-sensitive-data', title: 'Sensitive-data boundaries for Philippines offshore support roles', excerpt: 'Separate necessary system access from restricted decisions, downloads, approvals, and records that need an accountable owner.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-handoff-latency-review', title: 'How to review handoff latency in a Philippines offshore team', excerpt: 'Measure waiting time between owners, missing context, and overdue decisions so a remote queue becomes easier to manage.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-rework-triage', title: 'Philippines offshore rework triage: fix the instruction or the role?', excerpt: 'Use error patterns, examples, access rules, and escalation notes to find the real cause of repeat rework.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-team-knowledge-transfer', title: 'Knowledge transfer plan for a Philippines offshore support role', excerpt: 'Move from observation to controlled ownership with examples, shadowing, review checkpoints, and a written exception path.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-queue-aging-review', title: 'A practical queue-aging review for Philippines offshore teams', excerpt: 'Sort open work by age, risk, owner, and next action so managers can remove blockers before they become customer problems.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-quality-sampling-plan', title: 'Quality sampling plan for a Philippines offshore operations role', excerpt: 'Choose representative work samples, record defects consistently, and review quality without rewarding speed over accuracy.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-escalation-matrix', title: 'How to build a Philippines offshore escalation matrix', excerpt: 'Map normal work, sensitive exceptions, response expectations, and decision owners before the first urgent case arrives.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-manager-review-rhythm', title: 'Manager review rhythm for Philippines offshore staff', excerpt: 'Match daily checks, weekly samples, and monthly role reviews to the risk and maturity of each support lane.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-role-documentation-standard', title: 'Role documentation standard for Philippines offshore support', excerpt: 'Write task instructions around inputs, outputs, examples, stop points, and owners so the role can be learned and checked.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-backup-coverage-plan', title: 'Backup coverage plan for a Philippines offshore support role', excerpt: 'Protect continuity with current role notes, access ownership, queue visibility, and a clear handoff when the primary person is away.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-performance-conversation-guide', title: 'Performance conversation guide for Philippines offshore support', excerpt: 'Discuss observable work, missed handoffs, quality evidence, and agreed next steps without relying on vague personality feedback.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-role-expansion-gates', title: 'Gates for expanding a Philippines offshore role safely', excerpt: 'Add systems, volume, or decision-adjacent work only after accuracy, documentation, escalation, and manager review are stable.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-records-retention-boundaries', title: 'Records retention boundaries for Philippines offshore support', excerpt: 'Define which records the role may create, update, store, or archive while your policy and accountable owners govern retention.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-absence-handoff-checklist', title: 'Absence handoff checklist for Philippines offshore teams', excerpt: 'Make a short absence useful with open-work status, due times, access notes, approved messages, and named escalation owners.', minutes: 8, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-work-intake-rules', title: 'Work-intake rules for Philippines offshore support queues', excerpt: 'Control new requests with required fields, priority definitions, ownership, and a rule for work that does not fit the role.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-role-risk-review', title: 'Risk review before adding a Philippines offshore support lane', excerpt: 'Check data access, reversibility, customer impact, approvals, and manager capacity before moving a new process offshore.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-team-feedback-loop', title: 'Feedback loop for improving Philippines offshore support work', excerpt: 'Turn recurring questions, rework, and manager corrections into better examples, clearer boundaries, and safer process changes.', minutes: 9, publishedAt: '2026-08-17' },
  { slug: 'philippines-offshore-transition-readiness', title: 'Transition-readiness test for a Philippines offshore role', excerpt: 'Confirm that instructions, records, access, quality checks, and escalation ownership are ready before a live handoff.', minutes: 10, publishedAt: '2026-08-17' },
  { slug: 'philippines-operations-dashboard-assistant-guide', title: 'How to scope a Philippines operations dashboard assistant', excerpt: 'Keep recurring metrics, owner notes, and follow-up records current without handing over operational decisions.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-contract-administration-coordinator-guide', title: 'How to scope a Philippines contract administration coordinator', excerpt: 'Organize contract dates, document versions, renewal reminders, and approvals while legal authority stays with your team.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-patient-scheduling-coordinator-guide', title: 'How to scope a Philippines patient scheduling coordinator', excerpt: 'Define appointment records, reminders, rescheduling rules, and privacy boundaries for scheduling support.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-order-management-coordinator-guide', title: 'How to scope a Philippines order management coordinator', excerpt: 'Create a clear lane for order records, status updates, exception notes, and manager-owned fulfillment decisions.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-insurance-policy-administration-guide', title: 'How to scope Philippines insurance policy administration support', excerpt: 'Separate policy records, document follow-up, and customer updates from underwriting and coverage decisions.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-customer-onboarding-coordinator-guide', title: 'How to scope a Philippines customer onboarding coordinator', excerpt: 'Track kickoff actions, required documents, account records, and handoffs while implementation owners make the final calls.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-procurement-administration-assistant-guide', title: 'How to scope a Philippines procurement administration assistant', excerpt: 'Maintain supplier records, request logs, document status, and approvals without transferring purchasing authority.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-social-media-coordinator-role-scope', title: 'How to scope a Philippines social media coordinator role', excerpt: 'Organize approved calendars, community records, asset requests, and escalation while brand decisions remain with your team.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-project-coordinator-support-guide', title: 'How to scope a Philippines project coordinator support role', excerpt: 'Keep milestones, action registers, risks, and meeting follow-ups visible without making project decisions for the owner.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-claims-processing-coordinator-guide', title: 'How to scope Philippines claims processing support', excerpt: 'Organize claim documents, status records, missing information, and follow-ups while adjusters retain claim judgment.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-community-management-assistant-guide', title: 'How to scope a Philippines community management assistant', excerpt: 'Set boundaries for member records, approved replies, moderation queues, and escalation to the accountable community owner.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-revenue-operations-coordinator-guide', title: 'How to scope a Philippines revenue operations coordinator', excerpt: 'Keep pipeline fields, handoff records, reporting inputs, and exception notes accurate for revenue leaders.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-website-content-coordinator-guide', title: 'How to scope a Philippines website content coordinator', excerpt: 'Coordinate approved page updates, content records, link checks, and stakeholder feedback without owning brand strategy.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-facilities-coordinator-support-guide', title: 'How to scope Philippines facilities coordinator support', excerpt: 'Track service requests, vendors, site records, and maintenance follow-up while facilities leaders approve changes.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-appointment-intake-coordinator-guide', title: 'How to scope a Philippines appointment intake coordinator', excerpt: 'Create a reliable intake lane for requests, confirmations, reschedules, and escalation to the service owner.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-document-control-coordinator-guide', title: 'How to scope a Philippines document control coordinator', excerpt: 'Maintain version records, review dates, access requests, and handoffs so approved documents stay findable.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-technical-project-coordinator-guide', title: 'How to scope a Philippines technical project coordinator', excerpt: 'Track technical actions, dependencies, release notes, and questions without replacing engineering judgment.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-digital-marketing-coordinator-guide', title: 'How to scope a Philippines digital marketing coordinator', excerpt: 'Coordinate approved campaigns, asset status, reporting inputs, and channel tasks while strategy stays with marketing owners.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-community-support-coordinator-guide', title: 'How to scope a Philippines community support coordinator', excerpt: 'Organize member questions, approved responses, issue tags, and escalations for a consistent support experience.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-payroll-administration-coordinator-guide', title: 'How to scope Philippines payroll administration support', excerpt: 'Prepare attendance records, approved changes, employee questions, and reconciliation notes without owning payroll approval.', minutes: 10, publishedAt: '2026-08-14' },
  { slug: 'philippines-website-project-coordinator-guide', title: 'How to scope a Philippines website project coordinator', excerpt: 'Keep page requests, asset dependencies, review dates, and stakeholder decisions organized across a website project.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-records-management-assistant-guide', title: 'How to scope a Philippines records management assistant', excerpt: 'Create a reliable lane for filing, retention reminders, retrieval requests, and access escalation across business records.', minutes: 9, publishedAt: '2026-08-14' },
  { slug: 'philippines-accounts-payable-coordinator-guide', title: 'How to scope a Philippines accounts payable coordinator', excerpt: 'Define invoice intake, coding checks, approval routing, and exception records while payment authority stays with your team.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-accounts-receivable-coordinator-guide', title: 'How to scope a Philippines accounts receivable coordinator', excerpt: 'Organize invoice status, remittance records, customer follow-up, and escalation without transferring collection judgment.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-legal-administration-assistant-scope', title: 'How to scope a Philippines legal administration assistant', excerpt: 'Build a support lane for matter records, deadlines, document requests, and lawyer-owned legal decisions.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-medical-billing-support-role', title: 'How to scope Philippines medical billing support', excerpt: 'Separate claim documentation, account updates, and follow-up queues from clinical and payer decisions.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-employee-relations-administration-guide', title: 'How to scope a Philippines employee relations administration assistant', excerpt: 'Organize case records, meeting notes, policy references, and escalation while employee decisions remain with HR leaders.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-customer-success-operations-guide', title: 'How to scope a Philippines customer success operations coordinator', excerpt: 'Keep account records, adoption notes, meeting actions, and renewal inputs organized for customer success owners.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-human-resources-coordinator-scope', title: 'How to scope a Philippines human resources coordinator', excerpt: 'Define employee records, onboarding administration, calendar support, and confidential decision boundaries.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-recruiting-operations-analyst-guide', title: 'How to scope a Philippines recruiting operations analyst', excerpt: 'Use clean funnel records, source reporting, interview data, and manager-owned recruiting decisions.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-customer-feedback-coordinator-guide', title: 'How to scope a Philippines customer feedback coordinator', excerpt: 'Turn survey responses, interview notes, and recurring themes into an organized customer insight queue.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-renewals-administration-assistant-guide', title: 'How to scope a Philippines renewals administration assistant', excerpt: 'Track contract dates, account records, reminder tasks, and commercial decisions kept with the account owner.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-quality-assurance-coordinator-role', title: 'How to scope a Philippines quality assurance coordinator', excerpt: 'Create a review role around samples, defect records, corrective actions, and manager-approved quality standards.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-data-privacy-coordinator-support', title: 'How to scope Philippines data privacy coordinator support', excerpt: 'Organize request logs, policy records, access reviews, and escalation to the accountable privacy owner.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-finance-reporting-assistant-guide', title: 'How to scope a Philippines finance reporting assistant', excerpt: 'Prepare recurring reports, source reconciliations, variance notes, and finance-owner review packets.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-healthcare-appointment-coordinator-guide', title: 'How to scope a Philippines healthcare appointment coordinator', excerpt: 'Define scheduling, reminders, patient-message records, privacy limits, and clinical escalation.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-real-estate-transaction-coordinator-guide', title: 'How to scope a Philippines real estate transaction coordinator', excerpt: 'Coordinate transaction documents, milestone dates, inspection follow-up, and agent-owned decisions.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-supply-chain-data-assistant-scope', title: 'How to scope a Philippines supply chain data assistant', excerpt: 'Maintain item records, shipment data, exception notes, and planning inputs without owning supply decisions.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-learning-development-coordinator-guide', title: 'How to scope a Philippines learning and development coordinator', excerpt: 'Coordinate course records, attendance, learner communication, and manager-owned development decisions.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-event-coordinator-support-guide', title: 'How to scope a Philippines event coordinator support role', excerpt: 'Manage vendor records, schedules, attendee details, and event exceptions with an accountable lead.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-knowledge-base-coordinator-guide', title: 'How to scope a Philippines knowledge base coordinator', excerpt: 'Keep approved help content organized through ownership, change requests, feedback, and subject review.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-commercial-operations-assistant-guide', title: 'How to scope a Philippines commercial operations assistant', excerpt: 'Coordinate quotes, account records, approvals, and handoffs while commercial authority stays with leaders.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-vendor-management-coordinator-scope', title: 'How to scope a Philippines vendor management coordinator', excerpt: 'Organize vendor records, renewal reminders, service issues, and review inputs without owning supplier selection.', minutes: 9, publishedAt: '2026-08-13' },
  { slug: 'philippines-security-compliance-coordinator-guide', title: 'How to scope a Philippines security compliance coordinator', excerpt: 'Organize control evidence, review reminders, access records, and escalation while security owners retain approval authority.', minutes: 10, publishedAt: '2026-08-13' },
  { slug: 'philippines-virtual-assistant-workflow-guide', title: 'How to scope a Philippines virtual assistant workflow', excerpt: 'Choose repeatable tasks, clear handoffs, and manager-owned decisions before adding a Philippines virtual assistant.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-customer-support-team-lead-guide', title: 'How to hire a Philippines customer support team lead', excerpt: 'Define queue ownership, coaching habits, escalation judgment, and reporting before hiring a support lead.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-bookkeeping-assistant-hiring-guide', title: 'How to hire a Philippines bookkeeping assistant', excerpt: 'Separate transaction preparation, reconciliation support, and documentation from approvals and accounting decisions.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-executive-assistant-role-scope', title: 'How to scope a Philippines executive assistant role', excerpt: 'Build an executive assistant role around calendar control, briefing notes, follow-through, and confidentiality.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-ecommerce-support-specialist-guide', title: 'How to scope a Philippines ecommerce support specialist', excerpt: 'Plan order questions, returns records, customer updates, and escalation rules for an ecommerce support lane.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-data-entry-quality-checklist', title: 'Philippines data entry quality checklist', excerpt: 'Use field rules, sample checks, duplicate handling, and exception ownership to improve data entry accuracy.', minutes: 8, publishedAt: '2026-08-12' },
  { slug: 'philippines-sales-operations-assistant-guide', title: 'How to hire a Philippines sales operations assistant', excerpt: 'Define CRM updates, pipeline hygiene, meeting preparation, and approval boundaries for sales operations support.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-recruiting-sourcer-scorecard', title: 'Philippines recruiting sourcer scorecard', excerpt: 'Score search quality, evidence, duplicate control, and useful handoffs when reviewing recruiting sourcer candidates.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-accounts-receivable-support-scope', title: 'How to scope Philippines accounts receivable support', excerpt: 'Keep invoice records, follow-up notes, and aging reports organized while payment decisions stay with your finance owner.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-property-management-assistant-guide', title: 'How to scope a Philippines property management assistant', excerpt: 'Organize maintenance requests, vendor records, resident updates, and manager escalations in one support lane.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-medical-admin-support-boundaries', title: 'Philippines medical administration support boundaries', excerpt: 'Plan scheduling and records support with careful access controls, approved scripts, and clear clinical boundaries.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-logistics-coordinator-hiring-guide', title: 'How to hire a Philippines logistics coordinator', excerpt: 'Test shipment tracking, exception notes, carrier follow-up, and time-zone communication before hiring.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-technical-support-specialist-scope', title: 'How to scope a Philippines technical support specialist', excerpt: 'Define troubleshooting tiers, documentation habits, escalation triggers, and customer communication standards.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-marketing-assistant-role-guide', title: 'How to scope a Philippines marketing assistant role', excerpt: 'Separate campaign administration, asset coordination, reporting preparation, and marketing decisions.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-hr-administration-support-guide', title: 'How to scope Philippines HR administration support', excerpt: 'Set careful boundaries for employee records, onboarding administration, reporting, and confidential decisions.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-quality-assurance-coordinator-guide', title: 'How to hire a Philippines quality assurance coordinator', excerpt: 'Test inspection discipline, defect notes, sample selection, and escalation judgment for a QA support role.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-real-estate-admin-assistant-guide', title: 'How to hire a Philippines real estate admin assistant', excerpt: 'Define listing records, appointment coordination, document follow-up, and agent-owned decisions.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-podcast-production-assistant-scope', title: 'How to scope a Philippines podcast production assistant', excerpt: 'Organize guest notes, episode assets, publishing records, and approval handoffs without losing editorial ownership.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-legal-admin-support-boundaries', title: 'Philippines legal administration support boundaries', excerpt: 'Separate document organization, scheduling, and status tracking from legal judgment and client advice.', minutes: 10, publishedAt: '2026-08-12' },
  { slug: 'philippines-inventory-coordinator-hiring-guide', title: 'How to hire a Philippines inventory coordinator', excerpt: 'Build a role around stock records, discrepancy notes, reorder visibility, and manager-approved changes.', minutes: 9, publishedAt: '2026-08-12' },
  { slug: 'philippines-email-inbox-management-guide', title: 'How to scope Philippines email inbox management', excerpt: 'Create practical triage rules, response templates, privacy limits, and escalation ownership for inbox support.', minutes: 8, publishedAt: '2026-08-12' },
  { slug: 'philippines-remote-office-manager-guide', title: 'How to hire a Philippines remote office manager', excerpt: 'Define vendor coordination, meeting logistics, records, and service issues without transferring business authority.', minutes: 9, publishedAt: '2026-08-12' },
  {
    "slug": "philippines-recruitment-coordinator-hiring-guide",
    "title": "How to hire a Philippines recruitment coordinator",
    "excerpt": "Build a clear recruiting support role for candidate records, interview schedules, follow-ups, and manager handoffs.",
    "minutes": 12
  },
  {
    "slug": "philippines-talent-sourcing-specialist-hiring-guide",
    "title": "How to hire a Philippines talent sourcing specialist",
    "excerpt": "Set up a focused sourcing role for search plans, candidate records, outreach drafts, and clean manager handoffs.",
    "minutes": 13
  },
  { slug: 'philippines-interview-scheduling-workflow', title: 'How to build a Philippines interview scheduling workflow', excerpt: 'Create a reliable scheduling lane with time zone checks, approved messages, and visible manager handoffs.', minutes: 9 },
  { slug: 'philippines-recruitment-administration-checklist', title: 'Philippines recruitment administration checklist', excerpt: 'Use a practical checklist for requisitions, candidate records, approvals, and end-of-day recruiting handoffs.', minutes: 8 },
  { slug: 'philippines-workforce-planning-support-guide', title: 'How to scope Philippines workforce planning support', excerpt: 'Define the records, planning views, and approval boundaries a workforce planning specialist can support.', minutes: 10 },
  { slug: 'philippines-onboarding-coordinator-hiring-guide', title: 'How to hire a Philippines onboarding coordinator', excerpt: 'Plan onboarding coordination around access, equipment, training records, and manager-owned decisions.', minutes: 11 },
  { slug: 'philippines-training-administration-workflow', title: 'Philippines training administration workflow', excerpt: 'Build a clear process for training schedules, attendance records, materials, and follow-up actions.', minutes: 8 },
  { slug: 'philippines-performance-reporting-support', title: 'How to scope Philippines performance reporting support', excerpt: 'Create a reporting role that keeps metrics accurate while leaving performance decisions with managers.', minutes: 10 },
  { slug: 'philippines-schedule-coordinator-hiring-guide', title: 'How to hire a Philippines schedule coordinator', excerpt: 'Test calendar accuracy, coverage judgment, change handling, and clean communication before hiring.', minutes: 10 },
  { slug: 'philippines-people-operations-support-guide', title: 'Philippines people operations support guide', excerpt: 'Separate repeatable people operations administration from confidential decisions and policy ownership.', minutes: 9 },
  { slug: 'philippines-compliance-document-administration', title: 'Philippines compliance document administration guide', excerpt: 'Set access, naming, review, and escalation rules for a compliance documentation support role.', minutes: 9 },
  { slug: 'philippines-retention-program-support', title: 'How to scope Philippines retention program support', excerpt: 'Organize retention surveys, action logs, and follow-ups without outsourcing employee decisions.', minutes: 9 },
  { slug: 'philippines-customer-support-coordinator-hiring', title: 'How to hire a Philippines customer support coordinator', excerpt: 'Define queue ownership, escalation rules, response quality checks, and the first-month ramp.', minutes: 11 },
  { slug: 'philippines-admin-workflow-outsourcing-guide', title: 'Philippines admin workflow outsourcing guide', excerpt: 'Choose repeatable administrative work, document exceptions, and start with controlled system access.', minutes: 9 },
  { slug: 'philippines-bookkeeping-support-role-scope', title: 'How to scope a Philippines bookkeeping support role', excerpt: 'Separate bookkeeping preparation from approvals, payment decisions, and accounting ownership.', minutes: 10 },
  { slug: 'philippines-remote-team-handoff-checklist', title: 'Philippines remote team handoff checklist', excerpt: 'Use owners, due times, records, and escalation rules to keep work moving across time zones.', minutes: 8 },
  { slug: 'philippines-offshore-role-scorecard-template', title: 'Philippines offshore role scorecard template', excerpt: 'Build a small scorecard that measures accuracy, queue health, handoffs, and quality before volume.', minutes: 9 },
  { slug: 'philippines-offshore-staff-access-controls', title: 'Access controls for Philippines offshore staff', excerpt: 'Start with least privilege, named accounts, review dates, and clear rules for sensitive business data.', minutes: 10 },
  { slug: 'philippines-offshore-staff-first-week-plan', title: 'First-week plan for Philippines offshore staff', excerpt: 'Make the first week measurable with sample work, limited access, daily review, and written questions.', minutes: 8 },
  { slug: 'philippines-offshore-team-quality-review', title: 'How to review quality in a Philippines offshore team', excerpt: 'Use small work samples, documented misses, and clear owners to improve quality without guesswork.', minutes: 9 },
  { slug: 'philippines-offshore-replacement-coverage-guide', title: 'Philippines offshore replacement coverage guide', excerpt: 'Prepare role notes, access ownership, and continuity steps before a replacement is ever needed.', minutes: 9 },
  { slug: 'philippines-offshore-team-manager-handoff', title: 'Philippines offshore team manager handoff guide', excerpt: 'Make manager handoffs clear with decision logs, due times, queue ownership, and escalation rules.', minutes: 8 },
  { slug: 'philippines-offshore-content-writer-hiring-guide', title: 'How to hire a Philippines offshore content writer', excerpt: 'Scope a writing lane around briefs, source notes, editorial review, and a dependable publishing handoff.', minutes: 10 },
  { slug: 'philippines-content-editor-quality-checklist', title: 'Philippines content editor quality checklist', excerpt: 'Use a practical review lane for claims, structure, links, metadata, and clean handoffs to publishing.', minutes: 9 },
  { slug: 'philippines-seo-content-brief-workflow', title: 'Philippines SEO content brief workflow', excerpt: 'Turn search intent, audience needs, sources, and internal links into a brief a writer can use.', minutes: 9 },
  { slug: 'philippines-blog-production-calendar', title: 'How to build a Philippines blog production calendar', excerpt: 'Plan recurring article creation with owners, review gates, source timing, and visible capacity.', minutes: 8 },
  { slug: 'philippines-content-research-assistant-scope', title: 'How to scope a Philippines content research assistant', excerpt: 'Separate source discovery and evidence notes from editorial judgment and final publication approval.', minutes: 9 },
  { slug: 'philippines-article-fact-checking-workflow', title: 'Philippines article fact-checking workflow', excerpt: 'Create a repeatable fact check with claim records, authoritative sources, dates, and escalation rules.', minutes: 10 },
  { slug: 'philippines-content-qa-coordinator-hiring-guide', title: 'How to hire a Philippines content QA coordinator', excerpt: 'Test detail, consistency, link checks, metadata review, and the discipline to record exceptions.', minutes: 9 },
  { slug: 'philippines-content-refresh-coordinator-guide', title: 'Philippines content refresh coordinator guide', excerpt: 'Keep existing articles useful with review triggers, source checks, change notes, and approval boundaries.', minutes: 9 },
  { slug: 'philippines-editorial-handoff-checklist', title: 'Philippines editorial handoff checklist', excerpt: 'Make each article handoff clear with a complete brief, source record, draft status, and next owner.', minutes: 8 },
  { slug: 'philippines-content-operations-manager-scope', title: 'How to scope a Philippines content operations manager', excerpt: 'Define capacity, queues, quality gates, and reporting without transferring editorial ownership.', minutes: 10 },
  { slug: 'philippines-blog-outline-writer-workflow', title: 'Philippines blog outline and writer workflow', excerpt: 'Move from approved intent to a useful outline, complete draft, review notes, and publishable article.', minutes: 8 },
  { slug: 'philippines-source-research-queue-management', title: 'Philippines source research queue management', excerpt: 'Prioritize research requests by intent, source quality, due date, and the cost of waiting.', minutes: 9 },
  { slug: 'philippines-content-calendar-capacity-planning', title: 'Philippines content calendar capacity planning', excerpt: 'Match article volume to writer, editor, research, and approval capacity before promising dates.', minutes: 9 },
  { slug: 'philippines-article-internal-linking-checklist', title: 'Philippines article internal linking checklist', excerpt: 'Choose contextual links that help readers while keeping ownership, relevance, and final review clear.', minutes: 8 },
  { slug: 'philippines-content-metadata-review-guide', title: 'Philippines content metadata review guide', excerpt: 'Check titles, descriptions, canonical inputs, schema fields, and image assignments before handoff.', minutes: 8 },
  { slug: 'philippines-blog-editor-first-week-plan', title: 'First-week plan for a Philippines blog editor', excerpt: 'Start with sample reviews, limited access, a short queue, and daily feedback on quality decisions.', minutes: 8 },
  { slug: 'philippines-content-publishing-qa-workflow', title: 'Philippines content publishing QA workflow', excerpt: 'Build a final gate for article structure, links, formatting, images, and documented exceptions.', minutes: 9 },
  { slug: 'philippines-authoritative-source-research-guide', title: 'Philippines authoritative source research guide', excerpt: 'Help researchers find primary and institutional sources that strengthen practical business articles.', minutes: 9 },
  { slug: 'philippines-content-team-replacement-coverage', title: 'Philippines content team replacement coverage guide', excerpt: 'Protect daily publishing with role notes, queue ownership, source records, and continuity steps.', minutes: 9 },
  { slug: 'philippines-daily-article-creation-routine', title: 'How to run a daily Philippines article creation routine', excerpt: 'Connect briefs, research, drafting, review, publishing, and evidence into one dependable daily rhythm.', minutes: 10 },
  { slug: 'philippines-content-brief-approval-workflow', title: 'Philippines content brief approval workflow', excerpt: 'Set clear approval rules for intent, audience, sources, links, and the work a writer should begin.', minutes: 9 },
  { slug: 'philippines-content-writer-brief-template', title: 'Philippines content writer brief template', excerpt: 'Give a writer the audience, search intent, evidence, structure, and review rules needed for a clean draft.', minutes: 9 },
  { slug: 'philippines-blog-editor-review-queue', title: 'Philippines blog editor review queue', excerpt: 'Organize article reviews by risk, due date, source status, link checks, and the next accountable owner.', minutes: 9 },
  { slug: 'philippines-content-source-log-workflow', title: 'Philippines content source log workflow', excerpt: 'Keep claims, URLs, access dates, notes, and unresolved questions together before an article reaches review.', minutes: 8 },
  { slug: 'philippines-blog-content-brief-quality-check', title: 'Blog content brief quality check', excerpt: 'Use a short pre-draft check to catch unclear intent, thin evidence, weak differentiation, and missing internal links.', minutes: 8 },
  { slug: 'philippines-content-draft-review-scorecard', title: 'Philippines content draft review scorecard', excerpt: 'Score accuracy, usefulness, structure, links, metadata, and revision discipline with one visible review record.', minutes: 9 },
  { slug: 'philippines-daily-blog-queue-management', title: 'Philippines daily blog queue management', excerpt: 'Keep daily articles moving with intake rules, work-in-progress limits, review ownership, and exception notes.', minutes: 9 },
  { slug: 'philippines-content-publishing-handoff-checklist', title: 'Philippines content publishing handoff checklist', excerpt: 'Pass a finished article to publishing with the right files, links, metadata, image, and approval evidence.', minutes: 8 },
  { slug: 'philippines-blog-article-refresh-workflow', title: 'Philippines blog article refresh workflow', excerpt: 'Review older articles for changed facts, search intent, broken links, stale examples, and useful improvements.', minutes: 9 },
  { slug: 'philippines-content-brief-search-intent-guide', title: 'Philippines content brief search intent guide', excerpt: 'Turn a query into a useful article angle by identifying the reader, decision, evidence, and next action.', minutes: 8 },
  { slug: 'philippines-blog-internal-link-review', title: 'Philippines blog internal link review', excerpt: 'Choose two useful contextual links that support the reader without creating overlap or forcing a sales path.', minutes: 8 },
  { slug: 'philippines-article-source-verification-checklist', title: 'Philippines article source verification checklist', excerpt: 'Check source authority, date, claim fit, link health, and the note a reviewer needs to repeat the check.', minutes: 9 },
  { slug: 'philippines-content-editor-escalation-rules', title: 'Philippines content editor escalation rules', excerpt: 'Define when an editor can fix a draft, when a subject owner must decide, and how exceptions stay visible.', minutes: 8 },
  { slug: 'philippines-blog-writer-quality-sample', title: 'Philippines blog writer quality sample', excerpt: 'Design a fair writing exercise that tests brief reading, evidence use, structure, links, and revision response.', minutes: 9 },
  { slug: 'philippines-content-team-capacity-board', title: 'Philippines content team capacity board', excerpt: 'Match article commitments to research, writing, editing, approvals, and publishing capacity before setting dates.', minutes: 9 },
  { slug: 'philippines-blog-article-brief-handoff', title: 'Philippines blog article brief handoff', excerpt: 'Move an approved brief between research and writing with owners, open questions, sources, and a dated next step.', minutes: 8 },
  { slug: 'philippines-content-quality-exception-log', title: 'Philippines content quality exception log', excerpt: 'Record missed checks, decisions, owners, and fixes so recurring publication problems become easier to prevent.', minutes: 8 },
  { slug: 'philippines-blog-fact-checking-role-scope', title: 'How to scope a Philippines blog fact-checking role', excerpt: 'Separate claim checking and source records from editorial judgment, legal advice, and final publication approval.', minutes: 9 },
  { slug: 'philippines-content-operations-daily-standup', title: 'Philippines content operations daily standup', excerpt: 'Run a brief daily check around blocked work, review queues, source needs, due times, and clear ownership.', minutes: 8 },
  { slug: 'philippines-blog-article-revision-workflow', title: 'Philippines blog article revision workflow', excerpt: 'Turn review notes into a controlled revision pass that preserves approved facts and closes each finding.', minutes: 8 },
  { slug: 'philippines-content-metadata-publishing-checklist', title: 'Philippines content metadata publishing checklist', excerpt: 'Review titles, descriptions, canonical URLs, schema inputs, images, and index updates before publishing.', minutes: 8 },
  { slug: 'philippines-blog-editor-manager-handoff', title: 'Philippines blog editor manager handoff', excerpt: 'Give the approving manager a concise record of the article, open decisions, sources, changes, and next action.', minutes: 8 },
  { slug: 'philippines-content-calendar-approval-rules', title: 'Philippines content calendar approval rules', excerpt: 'Set a practical gate for topic fit, capacity, source readiness, owner availability, and changes to committed dates.', minutes: 8 },
  { slug: 'philippines-daily-content-production-scorecard', title: 'Philippines daily content production scorecard', excerpt: 'Track article readiness, review quality, source completeness, handoff age, and exceptions without rewarding filler.', minutes: 9 },
] as const;

const augustTenBlogDates: Record<string, string> = {
  'philippines-content-brief-approval-workflow': '2026-08-10', 'philippines-content-writer-brief-template': '2026-08-10', 'philippines-blog-editor-review-queue': '2026-08-10',
  'philippines-content-source-log-workflow': '2026-08-10', 'philippines-blog-content-brief-quality-check': '2026-08-10', 'philippines-content-draft-review-scorecard': '2026-08-10',
  'philippines-daily-blog-queue-management': '2026-08-10', 'philippines-content-publishing-handoff-checklist': '2026-08-10', 'philippines-blog-article-refresh-workflow': '2026-08-10',
  'philippines-content-brief-search-intent-guide': '2026-08-10', 'philippines-blog-internal-link-review': '2026-08-10', 'philippines-article-source-verification-checklist': '2026-08-10',
  'philippines-content-editor-escalation-rules': '2026-08-10', 'philippines-blog-writer-quality-sample': '2026-08-10', 'philippines-content-team-capacity-board': '2026-08-10',
  'philippines-blog-article-brief-handoff': '2026-08-10', 'philippines-content-quality-exception-log': '2026-08-10', 'philippines-blog-fact-checking-role-scope': '2026-08-10',
  'philippines-content-operations-daily-standup': '2026-08-10', 'philippines-blog-article-revision-workflow': '2026-08-10', 'philippines-content-metadata-publishing-checklist': '2026-08-10',
  'philippines-blog-editor-manager-handoff': '2026-08-10', 'philippines-content-calendar-approval-rules': '2026-08-10', 'philippines-daily-content-production-scorecard': '2026-08-10',
};

type BlogPost = { slug: string; title: string; excerpt: string; minutes: number; publishedAt?: string };

export const blogPosts: readonly BlogPost[] = [...(blogPostsSource as readonly BlogPost[]), ...dailyBlogPosts, ...dailyBlog20Posts, ...repairBlog21Posts, ...sourceRepair2Posts]
  .map((post): BlogPost => augustTenBlogDates[post.slug] ? { ...post, publishedAt: augustTenBlogDates[post.slug] } : post)
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '') || (blogPostsSource.findIndex((item) => item.slug === a.slug) - blogPostsSource.findIndex((item) => item.slug === b.slug)));

export const guideBasics = {
  'offshore-resourcing-planning': {
    answer: 'Write the role around work that already exists. List the tasks, the tools used, the hours that need coverage, and the decisions that stay with your team. A provider can screen more accurately when those details are settled first.',
    prepare: ['Five to ten tasks the person will handle often', 'Examples of finished work', 'Required hours and overlap', 'Tools and access limits'],
    checks: ['Who owns the result?', 'What needs approval?', 'How will the first week be reviewed?', 'What would make this role a poor fit?'],
  },
  'offshore-resourcing-tasks-to-outsource': {
    answer: 'Begin with work that repeats and is easy to check. Inbox sorting, record updates, routine ticket replies, and report preparation are usually safer starting points than work that depends on judgment or money decisions.',
    prepare: ['A real example of the task', 'A short list of steps', 'The expected finish time', 'A rule for unusual cases'],
    checks: ['Can a new person learn this from examples?', 'Can a manager check the result quickly?', 'Does the task involve payments or private data?', 'Who handles exceptions?'],
  },
  'offshore-resourcing-onboarding-checklist': {
    answer: 'Keep the first week small. Give access only to the tools needed for the first tasks, review sample work early, and write down where the staff member must stop and ask for help.',
    prepare: ['Accounts with limited permissions', 'Two or three sample tasks', 'A daily check-in time', 'Named contacts for questions'],
    checks: ['Can the person find the current instructions?', 'Are approval limits written down?', 'Is completed work easy to see?', 'When will access and quality be reviewed?'],
  },
} as const;

const historicalBlogSlugs = [
  'philippines-client-success-coordinator-guide', 'philippines-purchasing-assistant-role-scope', 'philippines-payroll-administration-support',
  'philippines-insurance-admin-assistant-guide', 'philippines-sales-development-representative-scope', 'philippines-claims-processing-support-guide',
  'philippines-digital-marketing-coordinator-guide', 'philippines-operations-analyst-support-scope', 'philippines-revenue-operations-assistant-guide',
  'philippines-community-manager-role-scope', 'philippines-website-content-coordinator-guide', 'philippines-technical-project-coordinator-scope',
  'philippines-procurement-coordinator-hiring-guide', 'philippines-customer-onboarding-specialist-guide', 'philippines-virtual-receptionist-intake-guide',
  'philippines-document-control-specialist-guide', 'philippines-research-assistant-role-scope', 'philippines-social-media-coordinator-guide',
  'philippines-facilities-coordinator-hiring-guide', 'philippines-technical-writer-support-guide', 'philippines-order-management-specialist-guide',
  'philippines-appointment-coordinator-role-scope',
  'philippines-virtual-assistant-workflow-guide', 'philippines-customer-support-team-lead-guide', 'philippines-bookkeeping-assistant-hiring-guide',
  'philippines-executive-assistant-role-scope', 'philippines-ecommerce-support-specialist-guide', 'philippines-data-entry-quality-checklist',
  'philippines-sales-operations-assistant-guide', 'philippines-recruiting-sourcer-scorecard', 'philippines-accounts-receivable-support-scope',
  'philippines-property-management-assistant-guide', 'philippines-medical-admin-support-boundaries', 'philippines-logistics-coordinator-hiring-guide',
  'philippines-technical-support-specialist-scope', 'philippines-marketing-assistant-role-guide', 'philippines-hr-administration-support-guide',
  'philippines-quality-assurance-coordinator-guide', 'philippines-real-estate-admin-assistant-guide', 'philippines-podcast-production-assistant-scope',
  'philippines-legal-admin-support-boundaries', 'philippines-inventory-coordinator-hiring-guide', 'philippines-email-inbox-management-guide',
  'philippines-remote-office-manager-guide',
  'philippines-content-brief-approval-workflow', 'philippines-content-writer-brief-template', 'philippines-blog-editor-review-queue',
  'philippines-content-source-log-workflow', 'philippines-blog-content-brief-quality-check', 'philippines-content-draft-review-scorecard',
  'philippines-daily-blog-queue-management', 'philippines-content-publishing-handoff-checklist', 'philippines-blog-article-refresh-workflow',
  'philippines-content-brief-search-intent-guide', 'philippines-blog-internal-link-review', 'philippines-article-source-verification-checklist',
  'philippines-content-editor-escalation-rules', 'philippines-blog-writer-quality-sample', 'philippines-content-team-capacity-board',
  'philippines-blog-article-brief-handoff', 'philippines-content-quality-exception-log', 'philippines-blog-fact-checking-role-scope',
  'philippines-content-operations-daily-standup', 'philippines-blog-article-revision-workflow', 'philippines-content-metadata-publishing-checklist',
  'philippines-blog-editor-manager-handoff', 'philippines-content-calendar-approval-rules', 'philippines-daily-content-production-scorecard',
] as const;

function makeBatchBlogDetails(slug: string) {
  const topic = slug.replace(/^philippines-/, '').replace(/-/g, ' ');
  const label = topic.charAt(0).toUpperCase() + topic.slice(1);
  const sourceUrl = 'https://www.ilo.org/global/topics/labour-administration-inspection/resources-library/publications/WCMS_793281/lang--en/index.htm';
  return {
    articleType: 'publisher' as const,
    shortAnswer: [`A useful ${topic} process starts with a written brief, a named owner, and a small review record. The support role can prepare and check repeatable work while the authorized manager keeps final editorial and business decisions.`, `Keep the first queue narrow. Give the Philippines-based team member approved examples, limited access, and a clear escalation path before adding more volume.`],
    takeaways: ['Write the work and pass rules before assigning the queue.', 'Test a small sample for accuracy, evidence, and handoff quality.', 'Keep final approvals and unusual decisions with the authorized owner.', 'Review misses by cause and record the fix.'],
    stats: [{ label: 'Labor force participation', value: 61.35, display: '61.35%', year: '2025', note: 'Modeled ILO estimate from the World Bank.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10' }, { label: 'Employment in services', value: 59.55, display: '59.55%', year: '2025', note: 'Modeled ILO estimate from the World Bank.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10' }, { label: 'Tertiary enrollment', value: 47.41, display: '47.41%', year: '2024', note: 'Gross tertiary enrollment ratio from the World Bank.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=10' }],
    chart: { title: 'Philippine workforce context', subtitle: 'Percent, latest year shown for each World Bank indicator', methodNote: 'These country measures provide context for planning a support role. They do not establish an individual applicant’s skills or suitability.' },
    sections: Array.from({ length: 8 }, (_, i) => ({ heading: [`Define the ${topic} lane`, 'Use a brief that another person can follow', 'Set evidence and source rules', 'Test the work with a small sample', 'Keep access and decisions separate', 'Run the daily handoff', 'Review quality before volume', 'Build a steady first month'][i], paragraphs: [
      `Start the ${topic} lane with the recurring work that needs support. Name the inputs, the expected output, the usual finish time, and the person who owns the result. A job title is not enough to guide a careful handoff.`,
      `The brief should show the systems, examples, coverage hours, and stop rules. If a step depends on a new judgment or an unusual request, the support role should record the question and send it to the named owner instead of guessing.`,
      `Use an approved source list and keep the evidence beside the work record. The International Labour Organization’s guidance on teleworking is a useful reference for documenting work arrangements, communication, and responsibilities.`,
    ] })),
    roleTable: [{ stage: 'Intake', coordinator: 'Record the approved task, inputs, and open questions.', manager: 'Approve scope, priority, and exceptions.', proof: 'Dated brief with named owner.' }, { stage: 'Work', coordinator: 'Complete repeatable steps and record evidence.', manager: 'Answer escalations and quality questions.', proof: 'Current queue record.' }, { stage: 'Review', coordinator: 'Fix stated issues and note unresolved items.', manager: 'Accept the result or request a revision.', proof: 'Review decision and next action.' }, { stage: 'Handoff', coordinator: 'Pass files, links, and status to the next owner.', manager: 'Own the business decision and access changes.', proof: 'No loose work remains.' }],
    table: { title: `${label} responsibilities and decision boundaries`, intro: 'Use this table to separate repeatable support from decisions that require the manager or subject owner.', caption: `${label} responsibility table` },
    queueGraphic: { title: 'A brief-to-review handoff', subtitle: 'Each step leaves a record for the next owner', description: 'Four connected boxes show an approved brief, a work queue, an evidence record, and manager review.', ownerNote: 'Authorized manager owns approvals and exceptions', methodNote: 'Keep one current record as work moves between owners.', steps: [{ label: 'Approved brief', note: 'Set scope' }, { label: 'Work queue', note: 'Do steps' }, { label: 'Evidence', note: 'Show proof' }, { label: 'Review', note: 'Decide next' }] },
    relatedLinks: { intro: 'For nearby operating guidance, review these three pages.', items: [{ label: 'Article production workflow', href: '/research/offshore-article-production-workflow' }, { label: 'Content QA checklist', href: '/research/offshore-content-qa-checklist' }, { label: 'Content continuity plan', href: '/research/offshore-content-continuity-plan' }] },
    expertQuote: { text: 'Teleworking arrangements should be based on trust, respect and mutual benefit.', person: 'International Labour Organization', title: 'Teleworking guidance', sourceName: 'ILO teleworking resources', url: sourceUrl },
    banners: [{ eyebrow: 'Role brief', title: 'Define the lane before adding volume.', body: 'Write the work, tools, review owner, and stop rules before the first handoff.', label: 'Review role scope', href: '/services' }, { eyebrow: 'Sample check', title: 'Test a small piece of real work.', body: 'Check evidence and accuracy before expanding access or queue size.', label: 'Review services', href: '/services' }, { eyebrow: 'Manager handoff', title: 'Keep the final call with the owner.', body: 'Support staff can prepare records and questions. The authorized manager decides exceptions.', label: 'Contact Us', href: '/contact-us' }],
    sources: [{ name: 'International Labour Organization teleworking resources', url: sourceUrl, note: 'Reference for documenting responsibilities, communication, and work arrangements.' }, { name: 'World Bank labor force participation data', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10', note: 'Country-level context for workforce planning.' }, { name: 'World Bank employment in services data', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10', note: 'Country-level context for service work.' }],
    faqs: [{ q: `What belongs in a ${topic} brief?`, a: 'Include the recurring tasks, inputs, output examples, tools, coverage hours, review owner, and stop rules.' }, { q: 'What should the support role not decide?', a: 'Keep final approvals, policy changes, sensitive exceptions, and business commitments with the authorized owner.' }, { q: 'How should quality be reviewed?', a: 'Sample completed work against the brief, record misses, and assign one dated next action.' }],
  };
}

// August 17 Blog batch: each record is authored separately so the public article
// has a topic-specific thesis, examples, boundaries, and review questions.
const august17BlogDetails = {
  'philippines-offshore-workforce-capacity-planning': { articleType: 'custom', checklist: ['Count arrival volume, completion time, review time, and exception work separately.', 'Reserve manager capacity for approvals instead of treating it as free production time.', 'Model a low, expected, and surge week before assigning a coverage window.', 'Use the queue as evidence and revise the plan when the work mix changes.'], sections: [
    { heading: 'Capacity is more than a headcount', paragraphs: ['A Philippines offshore workforce plan should begin with the work entering the lane, not a target number of people. Count requests, handling time, review time, and exception decisions separately. A queue can look comfortable while a manager is quietly spending every afternoon correcting or approving work.', 'The useful unit is a completed, accepted item during an agreed coverage window. If one role handles records, handoffs, and customer-facing follow-up, estimate each stream rather than hiding them under one average.'] },
    { heading: 'Build three operating cases', paragraphs: ['Write a low-volume, expected-volume, and surge case using recent work records. For each case, show what the Philippines team can finish, what the manager must review, and which items wait for another owner. This makes an expansion decision visible before the queue is already late.', 'Do not treat overtime or instant manager replies as a permanent capacity source. A plan that works only when every exception is answered immediately is a fragile plan, not spare capacity.'] },
    { heading: 'Protect review capacity', paragraphs: ['Review time belongs in the plan. Set a daily review block, name its owner, and record the maximum unresolved exceptions that can wait safely. If a manager cannot review the planned volume, reduce intake or narrow the role before adding another work type.', 'Use a small sample to test the estimate: compare planned handling time with actual completion and correction time. Investigate the difference instead of multiplying a single optimistic average.'] },
    { heading: 'Make coverage a decision tool', paragraphs: ['Choose overlap hours around approvals, handoffs, and time-sensitive customer or finance work. The Philippines shift does not need to mirror every manager hour; it needs enough shared time for decisions that cannot be safely inferred from instructions.', 'Mark work that can continue asynchronously and work that must stop. That distinction is more useful than a generic “full coverage” promise because it tells the manager where a delay will actually occur.'] },
    { heading: 'Review the plan weekly', paragraphs: ['A weekly capacity review should compare arrivals, completions, aged items, rework, and manager review time. Explain whether a miss came from volume, unclear instructions, access, an unavailable decision owner, or a role that has expanded beyond its brief.', 'Keep the next change small. Adjust one queue limit, review window, or task boundary, then observe the result before rebuilding the whole workforce plan.'] },
  ], sources: [{ name: 'U.S. Department of Labor, Workload and staffing guidance', url: 'https://www.dol.gov/general/topic/workhours', note: 'Context for separating working time, coverage, and workload assumptions.' }, { name: 'International Labour Organization, Teleworking during the COVID-19 pandemic and beyond', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on documenting arrangements, communication, and responsibilities.' }] },
  'philippines-offshore-role-approval-checklist': { articleType: 'custom', checklist: ['Name the business outcome and the repeatable tasks before naming the role.', 'List data, systems, approvals, and decisions that are outside the role.', 'Require a work sample that tests the actual inputs and output.', 'Record the accountable manager and the first review date.'], sections: [
    { heading: 'Approve work, not a vague title', paragraphs: ['A role approval checklist for a Philippines offshore position should answer what work is moving, why it is suitable for support, and who remains accountable. “Assistant” or “coordinator” describes a label; it does not define the records, quality standard, or decision boundary a manager must approve.', 'Start with five to ten recurring tasks. For each, name the input, output, system, expected timing, and an example of acceptable work. Leave ambiguous tasks in an open-questions section rather than approving them by implication.'] },
    { heading: 'Separate support from authority', paragraphs: ['Mark every step that changes a customer record, payment, employment decision, access permission, or policy interpretation. The Philippines team member may prepare information or route an approved action, while the named owner makes the decision and records it.', 'This distinction should appear in the approval record and the first-week brief. A boundary that exists only in a manager’s memory will fail when a request arrives outside the normal queue.'] },
    { heading: 'Use a realistic work sample', paragraphs: ['Give applicants a fictional packet with normal work, a missing field, a conflicting instruction, and one time-zone handoff. Ask for the completed record and a short escalation note. Score accuracy, evidence, and restraint rather than polished wording alone.', 'Keep the sample consistent for every candidate and remove real personal information. The exercise should reveal whether the person can follow the approved lane without inventing a rule when the record is incomplete.'] },
    { heading: 'Check access and review ownership', paragraphs: ['Before approval, list the systems required for the first tasks and the minimum permission for each. Identify who grants access, who reviews it, and when it is removed. Do not approve broad access because future work might eventually need it.', 'Name the manager who reviews the queue, the frequency of the sample check, and the escalation route for sensitive work. A role without a review owner is not ready for handoff.'] },
    { heading: 'Reapprove expansion', paragraphs: ['Treat added systems, higher volume, and decision-adjacent work as changes to the role. Revisit the checklist when the task mix changes, when rework repeats, or when the manager no longer has time to review the output.', 'The goal is a defensible operating boundary: the support lane is useful, the manager can see its results, and exceptions reach the person authorized to decide them.'] },
  ], sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Useful structure for identifying data-processing risks and controls.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance, access, and review responsibilities.' }] },
  'philippines-offshore-work-sample-design': { articleType: 'custom', checklist: ['Use fictional records that resemble the real role without exposing personal data.', 'Include one normal case, one omission, one conflict, and one escalation.', 'Score the output against observable rules before judging presentation.', 'Ask the candidate to explain what they would not decide alone.'], sections: [
    { heading: 'Test the work the role will actually perform', paragraphs: ['A Philippines offshore work sample is useful when it mirrors the decisions, records, and handoffs in the approved role. Avoid a generic typing or personality exercise. If the job is recruitment administration, test a schedule conflict and candidate-status update; if it is finance support, test a reconciliation exception without asking the applicant to approve money.', 'Keep the exercise small enough to review consistently. The objective is not to simulate a whole week. It is to observe how the candidate reads instructions, protects evidence, handles uncertainty, and leaves the next owner a usable record.'] },
    { heading: 'Design the packet deliberately', paragraphs: ['Give every candidate the same brief, source records, output format, and time limit. Include a normal item so basic execution is visible, then add a missing field, conflicting dates, and a request that exceeds the role boundary.', 'State what may be assumed and what must be flagged. A good sample tests judgment under defined rules; it should not reward guessing what the evaluator secretly wanted.'] },
    { heading: 'Score evidence before style', paragraphs: ['Use a scorecard with separate lines for completeness, factual accuracy, sequence, escalation quality, and privacy handling. A polished answer that changes a status without support should not pass because it sounds confident.', 'Have two reviewers compare a small set of outputs against the same pass rules. Record disagreements and improve the rubric before using it again, especially when the work involves sensitive records or customer impact.'] },
    { heading: 'Read the handoff as part of the answer', paragraphs: ['Ask for a short note to the manager: what is done, what is blocked, what evidence supports the result, and what decision is needed. This reveals whether the candidate can make progress without hiding uncertainty.', 'The note should name the record and next action, not merely say “please review.” In distributed work, a precise handoff often prevents more delay than an extra paragraph in the completed task.'] },
    { heading: 'Keep the sample fair and bounded', paragraphs: ['Do not request unpaid production work, real applicant outreach, or access to live systems. Remove personal information and explain how the sample will be evaluated. Keep the same materials and reasonable time for every candidate.', 'Use the result as one hiring input alongside the approved criteria. It can show how someone handles the role’s work; it cannot prove every future skill or justify a broad claim about a country or talent pool.'] },
  ], sources: [{ name: 'U.S. Equal Employment Opportunity Commission, Employment tests and selection procedures', url: 'https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures', note: 'Guidance for job-related, consistently administered selection procedures.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Reference for minimizing and managing personal-data exposure in exercises.' }] },
  'philippines-offshore-manager-coverage-hours': { articleType: 'custom', checklist: ['Map hours to decisions, handoffs, and service commitments.', 'Identify work that can pause safely and work that cannot.', 'Set an overlap window with a named decision owner.', 'Review missed handoffs before extending coverage.'], sections: [
    { heading: 'Choose hours around work dependencies', paragraphs: ['Coverage hours for a Philippines offshore support role should follow the moments when work needs a decision, a handoff, or a response—not a fashionable shift pattern. List the queue’s deadlines, manager availability, customer commitments, and systems that close or change during the day.', 'A useful schedule shows when the offshore role works independently, when manager overlap is required, and what happens outside overlap. That makes time-zone tradeoffs explicit instead of treating every hour as equally urgent.'] },
    { heading: 'Classify what may wait', paragraphs: ['Divide tasks into safe-to-pause, next-overlap, and same-day escalation categories. A report draft may wait for review; a customer-impacting account change may not. The rule belongs beside the task, with a named owner for exceptions.', 'Avoid promising instant responses when the manager is offline. Set an acknowledgement rule, a queue status, and a route for urgent cases so the team knows whether it is waiting, working, or escalating.'] },
    { heading: 'Design the overlap window', paragraphs: ['Use overlap for approvals, ambiguous records, feedback, and the handoff of work that cannot be inferred safely. A short, protected review block can be more valuable than scattered availability because both owners know when decisions will be made.', 'If several managers depend on the same role, rank the decisions and publish one shared window. Otherwise the coordinator spends the shift chasing conflicting availability and the queue loses its owner.'] },
    { heading: 'Measure the schedule', paragraphs: ['Review overdue items by cause: no overlap, missing input, unclear priority, unavailable approver, or avoidable rework. Compare the planned coverage with actual waiting time and the number of handoffs that crossed a shift boundary.', 'Do not “solve” every miss by adding hours. First repair the task boundary or handoff record. Extra coverage cannot compensate for an instruction that leaves two owners unsure who decides.'] },
    { heading: 'Change one variable at a time', paragraphs: ['Trial a new overlap window or queue rule for a defined period, then compare the same measures before and after. Keep the schedule transparent to the Philippines team member and the manager who owns the result.', 'A stable schedule is not the one with the most hours. It is the one that gives independent work a clear path, gives exceptions a reachable owner, and makes waiting visible early.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking during the COVID-19 pandemic and beyond', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on working arrangements, communication, and clear responsibilities.' }, { name: 'U.S. Department of Labor, Hours worked', url: 'https://www.dol.gov/general/topic/workhours', note: 'General reference for defining working-time assumptions.' }] },
  'philippines-offshore-role-boundaries-sensitive-data': { articleType: 'custom', checklist: ['Inventory the records needed for the first tasks.', 'Separate viewing, editing, exporting, and approving permissions.', 'Name the owner for access reviews and incidents.', 'Document a stop rule for uncertain requests.'], sections: [
    { heading: 'Start with the record, not the tool', paragraphs: ['Sensitive-data boundaries for a Philippines offshore role should identify the exact records the work needs. A coordinator may need to view a status field without exporting a full customer file, or update a ticket without approving a refund. Permission should follow the task, not the convenience of a broad role.'] },
    { heading: 'Write four kinds of permission', paragraphs: ['For every system, distinguish viewing, editing, downloading, and approving. Record which actions are allowed, which require a manager, and which are prohibited. This gives the team member a usable answer when a request arrives outside the normal pattern.'] },
    { heading: 'Make exceptions visible', paragraphs: ['The role should stop when a request involves a new data type, an unusual export, a legal demand, or an uncertain identity. The escalation note should name the record, request, risk, and owner needed to decide.'] },
    { heading: 'Review access as work changes', paragraphs: ['Use named accounts, multi-factor authentication, approved storage, and dated access reviews. Remove permissions when the task ends or the role changes; do not rely on a future cleanup list that has no owner.'] },
    { heading: 'Test the boundary', paragraphs: ['A short fictional exercise can ask the candidate to route three requests: one routine, one restricted, and one ambiguous. Score whether they preserve the record, explain the stop point, and reach the right owner without inventing authority.'] },
  ], sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Framework for identifying and managing privacy risk.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance, identity, and access controls.' }] },
  'philippines-offshore-handoff-latency-review': { articleType: 'custom', checklist: ['Timestamp when work leaves one owner and when it is accepted.', 'Separate waiting for information from waiting for a decision.', 'Review the oldest handoffs before average latency.', 'Assign one corrective action to each recurring delay.'], sections: [
    { heading: 'Measure waiting between owners', paragraphs: ['Handoff latency in a Philippines offshore team is the time work spends waiting between accountable owners. Record sent time, accepted time, missing-input time, and decision time. A single end-to-end average hides whether the real problem is an unclear request or an unavailable approver.'] },
    { heading: 'Use an aging view', paragraphs: ['Sort open handoffs by age and impact. The oldest item is not always the most urgent, so add customer, financial, privacy, or deadline risk to the queue. Give each item a next action rather than a passive “pending” label.'] },
    { heading: 'Diagnose the cause', paragraphs: ['Review samples for incomplete briefs, unclear ownership, time-zone mismatch, missing access, and repeated review corrections. Ask what information would have let the next owner act safely, then change the record or instruction that was missing.'] },
    { heading: 'Set a response contract', paragraphs: ['Define acknowledgement, expected completion, and escalation times for each lane. The contract should tell the Philippines team member what to do when a manager misses the window and prevent silent queue aging.'] },
    { heading: 'Keep the fix narrow', paragraphs: ['Pilot one change, such as a required field or protected overlap block, and compare latency before and after. Do not claim improvement from a shorter average if high-risk items are still waiting.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for communication and responsibility in distributed work.' }, { name: 'U.S. Department of Labor, Hours worked', url: 'https://www.dol.gov/general/topic/workhours', note: 'Background for documenting time and coverage assumptions.' }] },
  'philippines-offshore-rework-triage': { articleType: 'custom', checklist: ['Classify rework by instruction, access, data, skill, and review cause.', 'Use examples of accepted work, not only error labels.', 'Keep business decisions with the authorized owner.', 'Change one control and check whether the defect repeats.'], sections: [
    { heading: 'Find the cause before blaming the role', paragraphs: ['Philippines offshore rework triage should ask why an item returned, not merely count the return. Separate an incomplete brief from a missed step, a bad source record, an access problem, and a decision that the role was never allowed to make.'] },
    { heading: 'Build a useful defect record', paragraphs: ['Record the task, expected result, actual result, evidence, reviewer correction, and owner of the next fix. A label such as “quality issue” does not teach the team member or show the manager whether the process itself is unclear.'] },
    { heading: 'Compare examples', paragraphs: ['Keep one accepted example beside the defect and explain the difference in observable terms. Avoid feedback about personality or effort when the real correction is a missing field, a sequence rule, or an escalation boundary.'] },
    { heading: 'Choose the right intervention', paragraphs: ['Repair the instruction when the same ambiguity affects several people; repair access when the work cannot be completed safely; coach the individual when the rule is clear but repeatedly missed. Keep sensitive exceptions with the manager.'] },
    { heading: 'Verify the change', paragraphs: ['Sample the next set of completed work and look for the same defect, a new workaround, or a hidden shift in queue time. Close the triage item only when the evidence supports the chosen fix.'] },
  ], sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Reference for treating data handling as a process risk.' }, { name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on clear work expectations and communication.' }] },
  'philippines-offshore-team-knowledge-transfer': { articleType: 'custom', checklist: ['Capture decisions and examples while the current owner still remembers them.', 'Move from observation to supervised completion.', 'Test exception handling before expanding access.', 'Keep a current handoff record for the next owner.'], sections: [
    { heading: 'Transfer judgment, not just steps', paragraphs: ['Knowledge transfer for a Philippines offshore support role should explain inputs, outputs, examples, stop points, and the reasons behind the important checks. A screen recording may show clicks, but it will not explain when a request must be escalated or why a field matters.'] },
    { heading: 'Use a staged handover', paragraphs: ['Begin with observation, then have the new owner complete fictional cases, then a small live queue under review. At each stage, record questions and update the brief so the next person does not inherit undocumented uncertainty.'] },
    { heading: 'Teach the exceptions', paragraphs: ['Normal cases are easy to copy. Spend deliberate time on missing inputs, conflicting records, urgent requests, and sensitive data. Ask the learner to explain the stop rule and the evidence a manager needs before deciding.'] },
    { heading: 'Check the record', paragraphs: ['A successful transfer leaves current instructions, examples, access notes, queue ownership, and a dated review decision. If knowledge remains in a private chat or one person’s memory, the role is not yet resilient.'] },
    { heading: 'Retest after a quiet period', paragraphs: ['Return to the lane after several days and ask the new owner to complete a mixed sample without coaching. Use the misses to improve the documentation, not to pretend that a single shadowing session proved readiness.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on communication and documented responsibilities.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for making access and ownership explicit.' }] },
  'philippines-offshore-queue-aging-review': { articleType: 'custom', checklist: ['Sort by age, risk, owner, and next action.', 'Separate blocked work from work that is simply unstarted.', 'Escalate customer, privacy, and deadline risk early.', 'Use aged items to improve intake and capacity rules.'], sections: [
    { heading: 'Age is a signal, not a diagnosis', paragraphs: ['A queue-aging review for a Philippines offshore team should show how long work has waited, who owns the next action, and what risk grows with delay. An old low-risk request may need a reminder; an hour-old customer-impacting item may need immediate escalation.'] },
    { heading: 'Make statuses meaningful', paragraphs: ['Use distinct states for ready, in progress, waiting for input, waiting for manager, and blocked. Require a dated next action. “Pending” without a reason turns the queue into a list of guesses and makes handoff latency impossible to explain.'] },
    { heading: 'Review the oldest risky work', paragraphs: ['Start with items whose delay can affect a customer, payment, privacy obligation, or committed deadline. Ask whether the Philippines role can proceed, needs an owner decision, or should be removed from the lane entirely.'] },
    { heading: 'Trace repeat aging', paragraphs: ['Group aged items by missing field, access issue, unclear priority, unavailable reviewer, and role boundary. Repeated aging in one category is evidence for a process change, not a reason to ask the coordinator to work invisibly longer.'] },
    { heading: 'Close with ownership', paragraphs: ['Every review should end with a short list of actions, owners, and dates. Recheck the list next time and preserve the history so the manager can see whether the queue became healthier or only looked quieter.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for communication and accountable handoffs.' }, { name: 'U.S. Department of Labor, Hours worked', url: 'https://www.dol.gov/general/topic/workhours', note: 'Background for coverage and workload records.' }] },
  'philippines-offshore-quality-sampling-plan': { articleType: 'custom', checklist: ['Sample by work type and risk, not only by convenience.', 'Define a defect before reviewing the first item.', 'Record reviewer agreement and correction evidence.', 'Use findings to improve the lane before increasing volume.'], sections: [
    { heading: 'Sample the work that matters', paragraphs: ['A quality sampling plan for a Philippines offshore operations role should represent the work mix and its risk. A random sample can miss rare but serious exceptions, while a manager’s favorite examples can distort the picture. Use both routine selection and deliberate high-risk checks.'] },
    { heading: 'Write the standard first', paragraphs: ['Define complete, accurate, timely, and safely escalated work in observable language. Include examples of acceptable output and the point at which the role must stop. Reviewers should not invent a different standard after seeing the result.'] },
    { heading: 'Record the finding', paragraphs: ['For each sample, capture the task, expected evidence, observed result, defect severity, correction, and owner. Distinguish a harmless formatting issue from a wrong customer record or an unauthorized decision so the response matches the risk.'] },
    { heading: 'Look for patterns', paragraphs: ['Compare defects by task, source system, reviewer, and instruction version. If one step fails repeatedly, test the process before concluding that the Philippines team member lacks care or skill.'] },
    { heading: 'Change the sample as the role matures', paragraphs: ['Early reviews should be frequent and broad. Later reviews can focus on exceptions and newly added tasks, but only after the manager can show stable accuracy and a visible escalation path.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for risk-based controls and review.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Useful when quality checks contain personal information.' }] },
  'philippines-offshore-escalation-matrix': { articleType: 'custom', checklist: ['List normal work, sensitive exceptions, and urgent triggers.', 'Name one decision owner for each escalation class.', 'Set acknowledgement and response expectations.', 'Review false alarms and missed escalations separately.'], sections: [
    { heading: 'Map the decisions around the work', paragraphs: ['A Philippines offshore escalation matrix should tell the support role what can proceed, what needs manager review, and what must stop immediately. Use actual request types, not vague labels such as “important” or “complex.”'] },
    { heading: 'Define the trigger', paragraphs: ['For each class, describe the observable trigger: a missing approval, a privacy concern, a customer-impacting error, a payment instruction, or a deadline at risk. The trigger should be recognizable in the queue record.'] },
    { heading: 'Assign an owner', paragraphs: ['One named owner should receive the escalation, with a backup route when unavailable. “Escalate to the team” is not an owner and creates the same waiting problem the matrix was meant to solve.'] },
    { heading: 'Set the handoff record', paragraphs: ['Require the original request, evidence, action already taken, risk, and decision needed. This lets the manager decide without making the Philippines team member reconstruct the case from scattered messages.'] },
    { heading: 'Audit the matrix', paragraphs: ['Review missed and unnecessary escalations. Tighten the trigger when routine work is being interrupted; broaden it when the role is making decisions that the owner should see.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance and escalation of material risks.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Background for privacy-risk escalation.' }] },
  'philippines-offshore-manager-review-rhythm': { articleType: 'custom', checklist: ['Match review frequency to risk and role maturity.', 'Use daily exception checks and weekly work samples.', 'Keep feedback tied to observable records.', 'Do not expand the lane because meetings feel smooth.'], sections: [
    { heading: 'Review is part of the role design', paragraphs: ['A manager review rhythm for Philippines offshore staff should make quality and decisions visible without turning every task into a live approval. Start with daily checks for exceptions, weekly samples for routine work, and a monthly review of scope, access, and capacity.'] },
    { heading: 'Make each cadence useful', paragraphs: ['A daily check answers what is blocked today. A weekly sample answers whether the process is being followed. A monthly review answers whether the role still fits. Do not use one meeting to answer all three questions.'] },
    { heading: 'Keep feedback concrete', paragraphs: ['Discuss the record, expected result, actual result, and next action. Replace “be more careful” with a correction to the required field, example, sequence, or escalation boundary.'] },
    { heading: 'Watch manager load', paragraphs: ['If review takes longer than the work, narrow the lane or improve the input. Manager capacity is a control, not an inconvenience that can be ignored while a Philippines queue grows.'] },
    { heading: 'Earn expansion', paragraphs: ['Add work only after the existing lane shows stable accuracy, timely handoffs, and manageable exceptions across more than one review period.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on communication and clear responsibilities.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance and review.' }] },
  'philippines-offshore-role-documentation-standard': { articleType: 'custom', checklist: ['Document inputs, outputs, examples, and stop points.', 'Version instructions when a rule changes.', 'Keep a named owner for unresolved questions.', 'Test the document with someone who did not write it.'], sections: [
    { heading: 'Write for the next operator', paragraphs: ['Role documentation for Philippines offshore support should let a careful new person understand the work without relying on a private explanation. Describe the input, sequence, output, quality check, and decision that remains with the manager.'] },
    { heading: 'Use examples and boundaries', paragraphs: ['One accepted example and one exception are often more useful than a page of abstract policy. Show what to do when a required field is missing and where to record the question.'] },
    { heading: 'Control changes', paragraphs: ['Put an owner, effective date, and short change note on each instruction set. Outdated documents are a source of rework, especially when the Philippines team works across time zones and cannot ask immediately.'] },
    { heading: 'Test findability', paragraphs: ['Ask a person outside the authoring conversation to locate the answer to three real questions. Record where they hesitated, then simplify the section rather than adding more prose around the same ambiguity.'] },
    { heading: 'Review after exceptions', paragraphs: ['A repeated escalation is evidence that the documentation needs a clearer rule, example, or owner. Update the document only after the accountable manager approves the change.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for documenting responsibilities and communication.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for ownership and control changes.' }] },
  'philippines-offshore-backup-coverage-plan': { articleType: 'custom', checklist: ['Keep current role notes and queue ownership in one place.', 'Define what the backup may do and what still needs approval.', 'Test a short absence before a critical absence occurs.', 'Review access and continuity records after the handoff.'], sections: [
    { heading: 'Backup coverage begins with visibility', paragraphs: ['A Philippines offshore backup coverage plan should make open work, due times, access ownership, and decisions waiting for a manager visible before the primary person is away. A replacement cannot safely infer status from an empty inbox or a calendar.'] },
    { heading: 'Limit the substitute lane', paragraphs: ['List tasks the backup can complete, tasks they can prepare, and tasks that must wait for the accountable owner. Continuity does not justify granting every permission the primary role has accumulated.'] },
    { heading: 'Use a handoff packet', paragraphs: ['Include current queue, examples, open questions, escalation contacts, approved messages, and the next review time. Mark the date so stale notes do not look like current instructions.'] },
    { heading: 'Run a rehearsal', paragraphs: ['Use a short planned absence to test whether the backup can find the work, complete a normal item, and escalate an exception. Record delays caused by missing information rather than blaming the substitute.'] },
    { heading: 'Restore and learn', paragraphs: ['When the primary returns, reconcile changes, remove temporary access, and capture what the backup needed. Improve the permanent role notes from that evidence.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for continuity, access, and recovery responsibilities.' }, { name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on distributed work arrangements.' }] },
  'philippines-offshore-performance-conversation-guide': { articleType: 'custom', checklist: ['Discuss records and outcomes, not personality labels.', 'Bring examples, dates, and the agreed standard.', 'Separate coaching from a change in role authority.', 'End with one owner and one review date.'], sections: [
    { heading: 'Make the conversation evidence-led', paragraphs: ['A performance conversation for Philippines offshore support should use observable work: a missed field, late handoff, incorrect status, or well-handled escalation. Avoid broad judgments about attitude or culture that cannot guide the next action.'] },
    { heading: 'Start with the agreed standard', paragraphs: ['Show the role brief, accepted example, and record under discussion. Ask what the team member saw, what was unclear, and what information was missing before deciding whether the issue was execution or process.'] },
    { heading: 'Name the control', paragraphs: ['The next step may be coaching, a documentation change, a smaller queue, access correction, or a manager decision. Make the choice explicit and do not quietly expand authority as a reward for speed.'] },
    { heading: 'Protect dignity and clarity', paragraphs: ['Give the Philippines team member time to explain the work and ask questions. Keep confidential information limited to the people who need it and record only the facts needed for follow-up.'] },
    { heading: 'Close the loop', paragraphs: ['Agree on the next observable result, support offered, owner, and review date. Revisit the same evidence rather than moving the goalposts or treating one improved item as proof that every issue is resolved.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for fair communication and clear responsibilities.' }, { name: 'U.S. Equal Employment Opportunity Commission, Enforcement guidance', url: 'https://www.eeoc.gov/laws/guidance', note: 'General reference for fair, consistent employment practices.' }] },
  'philippines-offshore-role-expansion-gates': { articleType: 'custom', checklist: ['Prove stable quality in the current lane first.', 'Check manager review capacity and access impact.', 'Add one task or system at a time.', 'Set a rollback rule before expansion.'], sections: [
    { heading: 'Expansion is a new approval', paragraphs: ['Gates for expanding a Philippines offshore role should prevent a successful narrow lane from becoming an unreviewed catch-all. Before adding volume, systems, or decision-adjacent tasks, show stable work quality, clear documentation, and manageable exceptions.'] },
    { heading: 'Check the evidence', paragraphs: ['Review samples, aged work, rework causes, escalation quality, and manager review time. Activity volume alone is not evidence that the role can safely absorb another responsibility.'] },
    { heading: 'Add one boundary', paragraphs: ['Choose one additional task with its own input, output, access, quality check, and stop rule. Tell the Philippines team member what remains outside the role and who owns the first exceptions.'] },
    { heading: 'Set the rollback', paragraphs: ['Define the defect, queue age, or review burden that pauses the expansion. A rollback rule makes it easier to protect quality before a problem becomes a customer or data incident.'] },
    { heading: 'Reassess the whole lane', paragraphs: ['After the trial, compare the new work with the original plan. Keep the addition only if the manager can still review the result and the role remains understandable to the person doing it.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance and risk-based change.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Useful when expansion changes data access.' }] },
  'philippines-offshore-records-retention-boundaries': { articleType: 'custom', checklist: ['Identify which records the role creates, updates, stores, or archives.', 'Follow the company policy and accountable records owner.', 'Prevent personal-device copies and uncontrolled exports.', 'Record deletion or archive decisions with authorization.'], sections: [
    { heading: 'Retention is an ownership question', paragraphs: ['Records retention boundaries for Philippines offshore support should state what the role may create, update, store, or archive and who owns the policy. The support role can apply an approved rule; it should not invent a retention period because a file feels old.'] },
    { heading: 'Map the record life cycle', paragraphs: ['For each work type, name the source, working copy, approved record, archive location, and disposal authority. Include naming and access rules so the next owner can tell which version is current.'] },
    { heading: 'Control copies', paragraphs: ['Limit downloads, personal-device storage, forwarded attachments, and duplicate exports. If a temporary copy is necessary, record its purpose, location, owner, and removal step.'] },
    { heading: 'Escalate uncertainty', paragraphs: ['A legal hold, privacy request, disputed record, or unclear policy should stop normal cleanup. The Philippines team member should preserve the record and route the question to the responsible owner.'] },
    { heading: 'Audit the boundary', paragraphs: ['Sample records for location, access, naming, and approved disposition. Treat a missing retention decision as a control gap, not as permission to delete or keep everything forever.'] },
  ], sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Framework for privacy governance and data lifecycle risk.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for asset, access, and control governance.' }] },
  'philippines-offshore-absence-handoff-checklist': { articleType: 'custom', checklist: ['List open work, due dates, status, and next actions.', 'Identify approvals and access questions that cannot wait.', 'Name the backup and escalation owner.', 'Reconcile the queue when the primary returns.'], sections: [
    { heading: 'Make absence information actionable', paragraphs: ['An absence handoff for a Philippines offshore team should let the backup act without reconstructing the queue. Include open items, due times, source links, current status, approved messages, and the exact decision waiting for a manager.'] },
    { heading: 'Separate work by risk', paragraphs: ['Mark routine work, customer-impacting work, privacy-sensitive work, and items that may safely wait. A short list of priorities is more useful than copying every conversation into a handoff document.'] },
    { heading: 'Name the limits', paragraphs: ['State what the backup may complete, what needs approval, and what must remain untouched. Temporary coverage should not silently create new authority or wider access.'] },
    { heading: 'Use a dated record', paragraphs: ['Put the handoff date, primary owner, backup owner, and next review time at the top. Update the record when work moves so two people do not act on different versions.'] },
    { heading: 'Close after return', paragraphs: ['Compare the queue before and after the absence, remove temporary permissions, and record any missing instruction. That turns a checklist into a continuity improvement rather than a one-time file.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on clear communication and responsibility.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for continuity and access review.' }] },
  'philippines-offshore-work-intake-rules': { articleType: 'custom', checklist: ['Require the fields needed to start the task safely.', 'Define priority using impact and due time.', 'Reject or route work outside the approved role.', 'Review rejected requests for a recurring scope problem.'], sections: [
    { heading: 'Control the queue at intake', paragraphs: ['Work-intake rules for Philippines offshore support should prevent incomplete requests from becoming hidden rework. Require the requester, purpose, source records, due time, expected output, and approval status before the item enters the active queue.'] },
    { heading: 'Use a practical priority rule', paragraphs: ['Rank work by customer impact, financial or privacy risk, deadline, and reversibility. “Urgent” should describe an observable condition and a decision owner, not the requester’s preferred label.'] },
    { heading: 'Route work outside scope', paragraphs: ['When a request needs policy interpretation, a sensitive export, a payment decision, or a new system, the Philippines team member should flag it and route it. Refusing to guess is part of a reliable intake process.'] },
    { heading: 'Keep the requester informed', paragraphs: ['Record accepted, returned, blocked, and escalated states with a next action. A clear return note tells the requester what is missing and prevents repeated messages that create more queue noise.'] },
    { heading: 'Improve from the data', paragraphs: ['Review returned and misprioritized requests each week. If the same field is missing or the same work falls outside scope, update the brief or service boundary with manager approval.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for documented communication and work expectations.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Reference for identifying privacy risks at intake.' }] },
  'philippines-offshore-role-risk-review': { articleType: 'custom', checklist: ['Check data access, reversibility, customer impact, and approvals.', 'Confirm the manager can review the proposed work.', 'Start with a narrow, observable lane.', 'Record the condition that would pause the transition.'], sections: [
    { heading: 'Review the role before the handoff', paragraphs: ['A risk review before adding a Philippines offshore support lane should examine what can go wrong, who can reverse it, and who decides when the record is unclear. Repeatability alone does not make work safe if access or customer impact is high.'] },
    { heading: 'Map the risk dimensions', paragraphs: ['List personal data, financial consequences, customer communication, irreversible actions, policy interpretation, and dependency on a manager. For each, state the control, owner, and evidence the review will check.'] },
    { heading: 'Reduce the first scope', paragraphs: ['Remove approvals, exports, unusual cases, and high-impact changes from the initial lane. Let the Philippines team member prepare records and questions until the manager has evidence that the process is stable.'] },
    { heading: 'Plan the exception', paragraphs: ['Write the stop rule and escalation path before the first live item. The team should know exactly what to preserve, what not to change, and which owner must respond.'] },
    { heading: 'Revisit after evidence', paragraphs: ['Use samples, rework, aged items, and review time to update the risk assessment. Expand only when the controls work in the real queue, not because the transition date has arrived.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for identifying, governing, and treating operational risk.' }, { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Reference for privacy-risk assessment.' }] },
  'philippines-offshore-team-feedback-loop': { articleType: 'custom', checklist: ['Capture questions, corrections, and recurring rework.', 'Turn feedback into an approved example or boundary.', 'Give the team member a chance to explain the work.', 'Check whether the change improves the next sample.'], sections: [
    { heading: 'Make feedback part of the work', paragraphs: ['A feedback loop for Philippines offshore support should turn recurring questions and manager corrections into better examples, clearer boundaries, or safer process changes. A private comment that never reaches the role documentation does not improve the next handoff.'] },
    { heading: 'Collect useful signals', paragraphs: ['Record the task, question, evidence, answer, and whether the issue came from the brief, source data, access, or execution. Avoid collecting vague complaints that cannot guide a change.'] },
    { heading: 'Close the loop with the operator', paragraphs: ['Explain the approved change to the team member and ask them to apply it to a small sample. Their questions may reveal that the new rule still leaves two plausible interpretations.'] },
    { heading: 'Keep authority clear', paragraphs: ['The feedback loop can improve a process, but it cannot silently change policy, selection criteria, access, or customer commitments. The accountable owner approves changes that alter the role’s authority.'] },
    { heading: 'Measure the result', paragraphs: ['Review whether the same question, defect, or handoff delay repeats after the change. If it does, revisit the example or boundary rather than simply repeating the instruction louder.'] },
  ], sources: [{ name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Background on communication and mutual work expectations.' }, { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance and continuous improvement.' }] },
  'philippines-offshore-transition-readiness': { articleType: 'custom', checklist: ['Confirm instructions, records, access, quality checks, and owners.', 'Run a fictional and a supervised live case.', 'Keep exceptions outside the lane until approved.', 'Set a dated go/no-go review.'], sections: [
    { heading: 'Readiness means the lane can be checked', paragraphs: ['A transition-readiness test for a Philippines offshore role should prove that another person can find the current instructions, complete normal work, record evidence, and escalate an exception. A signed kickoff date does not prove the lane is ready.'] },
    { heading: 'Check the operating pieces', paragraphs: ['Verify the role brief, examples, queue fields, system access, review owner, escalation route, and backup coverage. Missing one of these can turn a simple task into an invisible dependency on the original owner.'] },
    { heading: 'Run two kinds of test', paragraphs: ['Use a fictional case to test reading and judgment without exposing data, then a small supervised live case to test the real handoff. Keep the same pass rules and record what required coaching.'] },
    { heading: 'Set the go/no-go rule', paragraphs: ['Define which findings pause the transition: wrong records, unclear authority, missing access control, unowned exceptions, or review capacity that is already full. The rule should be agreed before the result is known.'] },
    { heading: 'Recheck after launch', paragraphs: ['The first review after handoff should compare the planned lane with actual work, queue age, corrections, and questions. Fix the boundary while the scope is still small rather than normalizing workarounds.'] },
  ], sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Reference for governance, access, and risk treatment.' }, { name: 'International Labour Organization, Teleworking guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/publications/WCMS_751232/lang--en/index.htm', note: 'Context for documented arrangements and responsibility.' }] },
} as const;

export const blogDetails = {
  ...august17BlogDetails,
  'philippines-recruitment-coordinator-hiring-guide': {
    articleType: 'publisher',
    shortAnswer: [
      'A Philippines recruitment coordinator can keep candidate records clean, arrange interviews, send approved follow-ups, and prepare hiring updates. The hiring manager should still choose candidates, approve offers, and decide any exception to the written process.',
      'The role works best when one manager owns the result and the coordinator has a narrow first-month task list. Give the coordinator approved message templates, limited system access, and a clear place to record every handoff.',
    ],
    takeaways: [
      'Hire for careful follow-through, not for a vague promise to run all recruitment.',
      'Test the real work with a scheduling and candidate-record sample before making a decision.',
      'Keep candidate decisions, offer approval, and sensitive exceptions with your authorized manager.',
      'Review queue age, record accuracy, and missed handoffs each week.',
    ],
    stats: [
      { label: 'Labor force participation', value: 61.35, display: '61.35%', year: '2025', note: 'Share of the population age 15+ in the labor force, modeled ILO estimate.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10' },
      { label: 'Employment in services', value: 59.55, display: '59.55%', year: '2025', note: 'Share of total Philippine employment in services, modeled ILO estimate.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10' },
      { label: 'Tertiary enrollment', value: 47.41, display: '47.41%', year: '2024', note: 'Gross tertiary enrollment ratio for the Philippines.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=10' },
    ],
    chart: {
      title: 'Philippine workforce context',
      subtitle: 'Percent, latest year shown for each World Bank indicator',
      methodNote: 'Method note: Values come from the linked World Bank indicator series. Labor force participation and services employment are modeled ILO estimates; tertiary enrollment is a gross enrollment ratio. These country figures describe context, not the ability of an individual applicant.',
    },
    sections: [
      {
        heading: 'Start with a support role, not a catch-all recruiter',
        paragraphs: [
          'A recruitment coordinator handles the movement around a hiring decision. That includes opening approved requisitions, checking whether applications are complete, arranging interviews, sending approved reminders, and keeping the applicant tracking system current.',
          'The role should not quietly absorb every people decision. Your hiring manager still defines the required experience, decides who advances, approves any assessment, checks references under company policy, and makes the final hiring call.',
          'This split matters when the coordinator works from the Philippines and supports managers in another time zone. A written handoff point prevents a scheduling question from turning into an unauthorized promise to a candidate.',
        ],
      },
      {
        heading: 'Use national data as context, not as a hiring promise',
        paragraphs: [
          'The World Bank reports a 61.35 percent Philippine labor force participation share for 2025. It also reports that services accounted for 59.55 percent of employment in 2025, which gives buyers useful context for service-based support work.',
          'The same database lists a 47.41 percent gross tertiary enrollment ratio for 2024. That number describes participation in tertiary education at the country level; it does not prove that a particular applicant has the writing, judgment, or system skills your role needs.',
          'Country data can help you decide where to search, but the work sample still decides whether a person can do the job. Screen each applicant against the same role brief, examples, and pass rules instead of leaning on broad claims about Filipino talent.',
        ],
      },
      {
        heading: 'Write the role brief before you review applicants',
        paragraphs: [
          'A useful brief names the hiring lanes, systems, coverage hours, and decisions that stay with the manager. It also says how quickly the coordinator should acknowledge a new request and where an overdue handoff gets flagged.',
          'List the work by frequency instead of filling the brief with personality words. For example, the daily list may cover candidate status checks and interview changes, while the weekly list may cover an aging report and a meeting with each hiring manager.',
          'State what the coordinator cannot do without approval. Common limits include changing selection criteria, rejecting an applicant for a new reason, promising a start date, sharing interview notes outside the approved group, or sending an offer.',
        ],
      },
      {
        heading: 'Test the work candidates will actually do',
        paragraphs: [
          'A short work sample tells you more than another general interview question. Give every finalist the same small packet: a fictional candidate list, two interviewer calendars, one cancellation, one missing document, and your approved message templates.',
          'Ask the person to prepare a schedule, update the candidate statuses, draft two messages, and write a short note for the hiring manager. Remove real names and personal details so the exercise does not expose applicant information.',
          'Score accuracy first. A polished message cannot make up for a double-booked interview, a missing time zone, or a candidate moved to the wrong stage.',
        ],
      },
      {
        heading: 'Build a daily queue that managers can see',
        paragraphs: [
          'The coordinator needs one source of truth for open interviews, candidate questions, and manager approvals. A shared queue should show the owner, next action, due time, current stage, and the last contact made.',
          'Start each shift with changes that affect people today: cancellations, no replies, interviewer conflicts, and missing meeting links. Then handle new scheduling requests and record work before preparing the manager update.',
          'End the shift with a short handoff. The note should name what moved, what is waiting for a manager, what may miss its date, and what the next coordinator or manager needs to do.',
        ],
      },
      {
        heading: 'Protect applicant data from the first screen',
        paragraphs: [
          'Candidate files may contain contact details, work history, interview notes, and identity records. Give the coordinator access only to the records needed for the assigned hiring lanes, and remove access when the work changes.',
          'The Philippine Data Privacy Act sets rules for processing personal information, while the NIST Privacy Framework gives teams a practical way to identify and manage privacy risk. Your own legal and security owners should decide the controls that apply to your company and the places where it operates.',
          'Use named accounts, multi-factor authentication, approved storage, and a written rule against downloading applicant files to personal devices. Keep interview notes factual and limit who can see them.',
        ],
      },
      {
        heading: 'Run the first month in small steps',
        paragraphs: [
          'During week one, let the coordinator observe one complete hiring lane and update sample records. The manager should check every schedule and candidate message before it goes out.',
          'In week two, hand over live scheduling for a small set of roles while the manager reviews the queue each day. Add the weekly aging report only after candidate stages and handoffs stay accurate.',
          'Weeks three and four can add more hiring lanes or a second manager if the first queue remains clean. Do not add reference checks, assessment administration, or access to more applicant files just because the calendar work looks good.',
        ],
      },
      {
        heading: 'Manage the role with a small weekly scorecard',
        paragraphs: [
          'A scorecard should help a manager find a problem, not reward activity for its own sake. Track records updated correctly, interviews arranged without avoidable conflict, overdue handoffs, and candidate messages sent from approved templates.',
          'Review a small sample of records each week and discuss the misses with the coordinator. If the same mistake repeats, fix the instruction, access rule, or review step before adding more work.',
          'Volume belongs beside quality, never above it. A coordinator who closes many tasks but loses candidate history or misses manager approvals creates more work than the dashboard shows.',
        ],
      },
    ],
    roleTable: [
      { stage: 'New request', coordinator: 'Open the approved role record and check required fields.', manager: 'Approve the role brief, selection rules, and interview team.', proof: 'Complete requisition with one named owner.' },
      { stage: 'Applicant review', coordinator: 'Check completeness and apply only written routing rules.', manager: 'Decide who advances and record the reason.', proof: 'Status and decision owner match the record.' },
      { stage: 'Interview setup', coordinator: 'Confirm time zones, send the approved invite, and track replies.', manager: 'Choose interviewers and handle exceptions.', proof: 'Calendar, link, stage, and candidate message agree.' },
      { stage: 'Follow-up', coordinator: 'Send approved reminders and flag overdue decisions.', manager: 'Give the decision and approve any custom reply.', proof: 'Next action, due date, and last contact are visible.' },
      { stage: 'Close or handoff', coordinator: 'Update the final status and archive records under policy.', manager: 'Approve the outcome and any offer or rejection message.', proof: 'No open task, loose file, or unclear owner remains.' },
    ],
    table: {
      title: 'Recruiting work and decision boundaries',
      intro: 'Use this table to separate coordination from manager decisions. Change the proof column to match the records your team already keeps.',
      caption: 'Recruitment coordinator responsibility table',
    },
    queueGraphic: {
      title: 'A visible recruiting queue',
      subtitle: 'Each step ends with a record, owner, and next action',
      description: 'Four connected boxes show a new request, candidate record, interview, and manager handoff. The manager owns the hiring decision.',
      ownerNote: 'Manager owns selection, exceptions, and the final decision',
      methodNote: 'Use the same sequence in your applicant tracking system or shared queue. The tool matters less than a current stage, named owner, due time, and written next action.',
      steps: [
        { label: 'New request', note: 'Check scope' },
        { label: 'Candidate record', note: 'Update stage' },
        { label: 'Interview', note: 'Confirm time zone' },
        { label: 'Manager handoff', note: 'Record decision' },
      ],
    },
    relatedLinks: {
      intro: 'These pages explain the nearby recruiting handoffs. Read',
      items: [
        { label: 'candidate screening coordination', href: '/services/candidate-screening-coordination' },
        { label: 'recruitment administration', href: '/services/recruitment-administration' },
      ],
    },
    expertQuote: {
      text: 'Effective LMI analysis can improve education and training programmes to meet current and future industry skills needs. However, such LMI analysis for improved skills needs anticipation and matching requires reliable and comprehensive information,',
      person: 'Khalid Hassan',
      title: 'Director, ILO Country Office for the Philippines',
      sourceName: 'International Labour Organization, February 17, 2023',
      url: 'https://www.ilo.org/resource/article/maximizing-philippine-labour-market-intelligence-local-skills-needs',
    },
    banners: [
      { eyebrow: 'Role scope', title: 'Turn the task list into a recruiting support brief.', body: 'Write the hiring lanes, systems, coverage hours, and approval limits before screening begins. The workforce planning guide gives you a simple place to start.', label: 'Plan the role', href: '/blog' },
      { eyebrow: 'Service fit', title: 'Need help with interview scheduling?', body: 'Review the exact scheduling tasks a Filipino coordinator can own. Keep interviewer choice and hiring decisions with your manager.', label: 'See interview scheduling support', href: '/services/interview-scheduling' },
      { eyebrow: 'First month', title: 'Set up the handoff before the queue gets busy.', body: 'Use limited access, sample work, and daily checks while the coordinator learns your process. Add work only after the first lane stays accurate.', label: 'Open the onboarding checklist', href: '/blog' },
    ],
    sources: [
      { name: 'World Bank: Labor force participation, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10', note: '2025 value: 61.35 percent. Modeled ILO estimate for people age 15 and older.' },
      { name: 'World Bank: Employment in services, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10', note: '2025 value: 59.548 percent of total employment, shown as 59.55 percent in this guide.' },
      { name: 'World Bank: School enrollment, tertiary, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=10', note: '2024 gross enrollment ratio: 47.4135 percent, shown as 47.41 percent in this guide.' },
      { name: 'International Labour Organization: Maximizing Philippine labour market intelligence for local skills needs', url: 'https://www.ilo.org/resource/article/maximizing-philippine-labour-market-intelligence-local-skills-needs', note: 'Source for Khalid Hassan’s exact statement about reliable labor market information and skills matching.' },
      { name: 'Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Full legal text used for the applicant-data boundary.' },
      { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Voluntary framework for identifying and managing privacy risk.' },
    ],
    faqs: [
      { q: 'What can a Philippines recruitment coordinator handle?', a: 'The coordinator can maintain candidate records, arrange interviews, send approved reminders, prepare queue reports, and flag missing manager decisions. The exact scope should match your systems and written approval rules.' },
      { q: 'Should the coordinator reject applicants?', a: 'The hiring manager should own selection decisions. A coordinator may record and send an approved decision, but should not create a new rejection reason or change the selection rules.' },
      { q: 'How do I test a recruitment coordinator?', a: 'Use a short fictional scheduling exercise with calendars, candidate stages, a cancellation, and approved message templates. Score record accuracy, time-zone handling, message clarity, and the quality of the manager handoff.' },
      { q: 'What should the weekly scorecard include?', a: 'Track record accuracy, avoidable scheduling conflicts, overdue handoffs, and use of approved messages. Review a sample of records so the score reflects the actual work.' },
    ],
  },
  'philippines-talent-sourcing-specialist-hiring-guide': {
    articleType: 'publisher',
    shortAnswer: [
      'A Philippines talent sourcing specialist can turn an approved role brief into search strings, candidate lists, contact records, and outreach drafts. Your hiring manager should still set the job requirements, decide who advances, approve unusual messages, and make every hiring decision.',
      'Keep the first search lane narrow enough to review by hand. Give the specialist a written target profile, named sources, a duplicate rule, approved contact wording, and one place to record why each person may fit.',
    ],
    takeaways: [
      'Write the must-have work evidence before asking someone to search for candidates.',
      'Judge a sample list by fit and record quality, not by the number of names.',
      'Use approved sources and contact rules for every search lane.',
      'Keep screening decisions and candidate promises with your hiring manager.',
    ],
    stats: [
      { label: 'Labor force participation', value: 61.35, display: '61.35%', year: '2025', note: 'Share of the population age 15+ in the labor force, modeled ILO estimate.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10' },
      { label: 'Employment in services', value: 59.55, display: '59.55%', year: '2025', note: 'Share of total Philippine employment in services, modeled ILO estimate.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10' },
      { label: 'Tertiary enrollment', value: 47.41, display: '47.41%', year: '2024', note: 'Gross tertiary enrollment ratio for the Philippines.', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=10' },
    ],
    chart: {
      title: 'Philippine workforce context for a sourcing plan',
      subtitle: 'Percent, latest year shown for each World Bank indicator',
      methodNote: 'Method note: Values come from the linked World Bank indicator series. Labor force participation and services employment are modeled ILO estimates; tertiary enrollment is a gross enrollment ratio. Use these country figures as search context, not as proof that one candidate fits a role.',
    },
    sections: [
      {
        heading: 'Define sourcing as research support',
        paragraphs: [
          'A talent sourcing specialist finds people who may match an approved role. The daily work can include building search strings, checking public work history, removing duplicates, recording source links, and drafting a first message from an approved template.',
          'The specialist should not decide that a person is qualified just because a profile contains the right title. Your hiring manager owns the must-have criteria, reviews uncertain matches, chooses who enters screening, and decides what the company can promise.',
          'This split is useful when the sourcer works from the Philippines and the hiring team sits in another time zone. The search can keep moving during agreed hours without turning a research task into an unsupervised hiring lane.',
        ],
      },
      {
        heading: 'Read national figures without turning them into claims',
        paragraphs: [
          'The World Bank reports Philippine labor force participation at 61.35 percent for 2025. Its services employment series puts services at 59.55 percent of total Philippine employment in 2025, which helps explain the broad setting for service support roles.',
          'The World Bank also reports a 47.41 percent gross tertiary enrollment ratio for 2024. That is a country measure, so it cannot tell you whether a particular sourcer can understand a technical brief, check evidence, or write a careful candidate note.',
          'Use public data to frame the search market, then test the actual work. A small research sample will show whether the person can follow criteria, cite the source of a profile, spot a missing fact, and leave a clean record for the manager.',
        ],
      },
      {
        heading: 'Turn the job request into a search brief',
        paragraphs: [
          'Start with the work that the new hire must perform in the first ninety days. Name the systems, shift overlap, writing level, required work evidence, and any condition that truly rules a person out.',
          'Separate required evidence from useful extras. If the job needs monthly reconciliation work, for example, a profile should show that task or a close equivalent; a broad finance title alone should not earn a pass.',
          'Add a stop rule for unclear profiles. The sourcer should mark the missing fact and send it to the manager instead of guessing a skill, location, notice period, or right to work.',
        ],
      },
      {
        heading: 'Test search judgment with one small assignment',
        paragraphs: [
          'Give each finalist the same fictional role brief and ask for five possible candidates from approved public sources. The exercise should require a source link, two lines of fit evidence, one open question, and a reason to leave out at least one tempting profile.',
          'Score the result against the written brief before looking at presentation. A plain sheet with five defensible records is better than a polished list where titles replace evidence and source links are missing.',
          'Check the search trail too. A good sourcer can explain which terms were too broad, which filters removed useful people, and what change produced a better set without pretending that every search worked.',
        ],
      },
      {
        heading: 'Keep source and contact records clean',
        paragraphs: [
          'Candidate records may contain names, contact details, work history, and notes about possible fit. The Philippine Data Privacy Act covers the processing of personal information, while your own privacy and legal owners must set the rules for every country where you recruit.',
          'Use named accounts and approved sources, then store only the details needed for the search and hiring process. The record should show where the information came from, when it was checked, who can see it, and what happens when the search closes.',
          'Do not let the sourcer copy profile data into personal files or build a private contact list. NIST Privacy Framework guidance can help your team map privacy risk, but your written retention and access rules need to say what staff should do each day.',
        ],
      },
      {
        heading: 'Run one queue from search to manager review',
        paragraphs: [
          'A sourcing queue should show the role, search lane, profile source, fit evidence, open question, current owner, and next action. One current record keeps a profile from being copied into several sheets or contacted twice by different people.',
          'The specialist can clear obvious duplicates and records that miss a written requirement. Borderline profiles should go to a manager review column with the missing fact plainly stated, not a hidden guess added to the notes.',
          'Close each shift with a short handoff that names new records, manager questions, search terms that failed, and any candidate message waiting for approval. The next person should be able to continue without reading a long chat history.',
        ],
      },
      {
        heading: 'Use a careful first-month ramp',
        paragraphs: [
          'During week one, let the specialist rebuild a completed search from a sample brief and compare the result with records your manager already reviewed. Check every source link, fit note, exclusion reason, and proposed outreach draft.',
          'In week two, open one live search lane with a small daily review. Weeks three and four can add another role or approved source only after duplicate handling, evidence notes, and manager handoffs remain accurate.',
          'Do not widen access simply because the list is growing. Keep candidate contact, screening questions, assessments, and offer details outside the role until your manager has written a reason and a review step for each new task.',
        ],
      },
      {
        heading: 'Review quality before search volume',
        paragraphs: [
          'A weekly scorecard should sample real records and compare them with the role brief. Track defensible matches, missing source links, duplicates, unsupported claims, overdue manager questions, and contact drafts that did not follow the approved wording.',
          'Search volume can sit beside those checks, but it should not outrank them. A long list full of weak matches gives the screening team more work and hides whether the sourcer understood the role.',
          'When the same miss appears twice, inspect the brief and the search rule before blaming effort. The fix may be a clearer example, a narrower must-have, a better exclusion rule, or a named manager who answers questions on time.',
        ],
      },
    ],
    roleTable: [
      { stage: 'Role intake', coordinator: 'Turn approved criteria into a search checklist and record open questions.', manager: 'Approve must-haves, exclusions, target locations, and contact rules.', proof: 'One dated brief with a named owner.' },
      { stage: 'Search setup', coordinator: 'Build search terms and use only approved public or licensed sources.', manager: 'Approve any new source or major change to the target profile.', proof: 'Saved search lane and source list.' },
      { stage: 'Record review', coordinator: 'Add source links, fit evidence, missing facts, and duplicate checks.', manager: 'Decide whether uncertain profiles enter screening.', proof: 'Each record supports its fit note.' },
      { stage: 'Outreach draft', coordinator: 'Prepare approved wording and flag any request for a custom message.', manager: 'Approve message rules, promises, and unusual replies.', proof: 'Template version and approval are visible.' },
      { stage: 'Handoff', coordinator: 'Move reviewed records with their source trail and open questions.', manager: 'Own screening, candidate decisions, and next-stage communication.', proof: 'No loose record or unclear owner remains.' },
    ],
    table: {
      title: 'Talent sourcing work and decision boundaries',
      intro: 'Use this table to keep research tasks separate from hiring decisions. Match each proof item to the applicant tracking system or shared record your team already uses.',
      caption: 'Talent sourcing specialist responsibility table',
    },
    queueGraphic: {
      title: 'A source-to-review handoff',
      subtitle: 'Every step leaves evidence for the next owner',
      description: 'Four connected boxes show an approved role brief, a search lane, a candidate record, and manager review. The hiring manager owns screening and selection.',
      ownerNote: 'Manager owns criteria, screening, exceptions, and selection',
      methodNote: 'Method note: Keep the same record as a person moves through the queue. A source link, written fit evidence, current owner, and next action make the handoff reviewable.',
      steps: [
        { label: 'Role brief', note: 'Approve criteria' },
        { label: 'Search lane', note: 'Record source' },
        { label: 'Candidate record', note: 'Add evidence' },
        { label: 'Manager review', note: 'Decide next step' },
      ],
    },
    relatedLinks: {
      intro: 'These pages explain the nearby sourcing handoffs. Read',
      items: [
        { label: 'talent sourcing support', href: '/services/talent-sourcing-support' },
        { label: 'candidate screening coordination', href: '/services/candidate-screening-coordination' },
        { label: 'workforce planning support', href: '/services/workforce-planning-support' },
      ],
    },
    expertQuote: {
      text: 'Effective LMI analysis can improve education and training programmes to meet current and future industry skills needs.',
      person: 'Khalid Hassan',
      title: 'Director, ILO Country Office for the Philippines',
      sourceName: 'International Labour Organization, February 17, 2023',
      url: 'https://www.ilo.org/resource/article/maximizing-philippine-labour-market-intelligence-local-skills-needs',
    },
    banners: [
      { eyebrow: 'Role brief', title: 'Give the search a clear starting line.', body: 'Write the work evidence, search lanes, exclusions, and manager questions before the first profile is added. The sourcing service page can help you narrow that scope.', label: 'Review talent sourcing support', href: '/services/talent-sourcing-support' },
      { eyebrow: 'Sample check', title: 'Test five records before opening a live queue.', body: 'Use one fictional brief, approved public sources, and the same scoring sheet for each finalist. Check evidence and source links before style.', label: 'See screening coordination', href: '/services/candidate-screening-coordination' },
      { eyebrow: 'Manager handoff', title: 'Keep the final call with your hiring manager.', body: 'The specialist can prepare clean records and open questions. Your manager still sets criteria, chooses who advances, and approves every exception.', label: 'Open workforce planning support', href: '/services/workforce-planning-support' },
    ],
    sources: [
      { name: 'World Bank: Labor force participation, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.TLF.CACT.ZS?format=json&per_page=10', note: '2025 value: 61.35 percent. Modeled ILO estimate for people age 15 and older.' },
      { name: 'World Bank: Employment in services, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=10', note: '2025 value: 59.548 percent of total employment, shown as 59.55 percent in this guide.' },
      { name: 'World Bank: School enrollment, tertiary, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=10', note: '2024 gross enrollment ratio: 47.4135 percent, shown as 47.41 percent in this guide.' },
      { name: 'International Labour Organization: Maximizing Philippine labour market intelligence for local skills needs', url: 'https://www.ilo.org/resource/article/maximizing-philippine-labour-market-intelligence-local-skills-needs', note: 'Source for Khalid Hassan’s exact statement about labor market information and skills needs.' },
      { name: 'Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Full Philippine legal text used for the candidate-data boundary.' },
      { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Voluntary guidance for identifying and managing privacy risk.' },
    ],
    faqs: [
      { q: 'What can a Philippines talent sourcing specialist handle?', a: 'The specialist can build searches from an approved brief, find possible candidates, remove duplicates, record source links, write fit notes, and prepare outreach drafts. Your manager should still decide who enters screening.' },
      { q: 'How should I test a talent sourcer?', a: 'Give each finalist the same fictional role brief and ask for five records from approved sources. Score source quality, fit evidence, duplicate handling, open questions, and the reason for excluding one close but unsuitable profile.' },
      { q: 'Should a sourcer contact candidates without review?', a: 'Use a written contact rule and approved templates. Your manager should approve any unusual message, promise, screening question, or change to the stated role.' },
      { q: 'What belongs on the weekly scorecard?', a: 'Review a sample for supported matches, working source links, duplicates, missing facts, overdue manager questions, and use of approved messages. Keep search volume as context rather than the main quality measure.' },
    ],
  },
  'offshore-resourcing-provider-questions': {
    takeaways: [
      'Ask who owns quality before you ask about terms.',
      'Get the replacement rule in writing before the first start date.',
      'Treat tool access, customer data, and approval limits as part of the role, not as setup after hiring.',
    ],
    sections: [
      {
        heading: 'Start with the work, then ask who manages it',
        paragraphs: [
          'A provider can send resumes fast and still leave you with a messy hire. Start with the work list, not a job title copied from another company.',
          'Ask which tasks are safe for a Filipino staff member on day one, which tasks need owner approval, and who checks the first two weeks of output. A vague answer usually means you will have to build the management plan after hiring.',
        ],
      },
      {
        heading: 'Ask for the real quality loop',
        paragraphs: [
          'Quality checks should be simple and visible. Ask who reviews the work, how often they review it, and where they record a missed step.',
          'Customer support may use ticket samples and response checks, while admin work may use inbox rules and a daily done list. Finance support also needs written approval limits and restricted account access.',
        ],
      },
      {
        heading: 'Check replacement coverage before you need it',
        paragraphs: [
          'A hire can be the wrong fit even after careful screening. Ask how replacement works, how long the search may take, and who keeps the role moving during the change.',
          'Your notes, instructions, and account access should have a named owner throughout the handoff. A written replacement rule is more useful than a promise that the provider will handle it.',
        ],
      },
    ],
    comparison: [
      { topic: 'Screening', weak: '"We have many candidates."', strong: '"Here is how we screen for this role, schedule, and tool stack."' },
      { topic: 'Quality', weak: '"You can manage them directly."', strong: '"Here is the weekly scorecard and escalation path."' },
      { topic: 'Access', weak: '"Give them the tools they need."', strong: '"Start with limited permissions and named approval rules."' },
      { topic: 'Replacement', weak: '"We can replace if needed."', strong: '"This is the replacement window and handoff process."' },
    ],
    quoteScript: '"Before we choose a person, can you show me the first two weeks of management? I want to see the scorecard, access limits, replacement rule, and who reviews the work if quality slips."',
    sources: [
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Useful for access, identity, and risk conversations when offshore staff need business systems.' },
      { name: 'FTC Safeguards Rule guidance', url: 'https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know', note: 'A plain reminder that some customer and financial data needs written safeguards, not casual sharing.' },
      { name: 'Microsoft identity security best practices', url: 'https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity', note: 'Helpful background for least-privilege access and account controls.' },
    ],
    faqs: [
      { q: 'Should I ask about terms first?', a: 'Ask about scope and management first. Commercial terms only make sense after the provider knows the role, hours, tools, and quality checks.' },
      { q: 'What is a red flag in an offshore provider call?', a: 'A provider who cannot explain screening, replacement, access controls, or who checks quality during the first two weeks is a risk.' },
      { q: 'Do I need SOPs before hiring?', a: 'You do not need a perfect manual. You do need examples, approval rules, and a short list of tasks for the first week.' },
    ],
  },
  ...Object.fromEntries([
    'philippines-accounts-payable-coordinator-guide', 'philippines-accounts-receivable-coordinator-guide', 'philippines-legal-administration-assistant-scope',
    'philippines-medical-billing-support-role', 'philippines-employee-relations-administration-guide', 'philippines-customer-success-operations-guide',
    'philippines-human-resources-coordinator-scope', 'philippines-recruiting-operations-analyst-guide', 'philippines-customer-feedback-coordinator-guide',
    'philippines-renewals-administration-assistant-guide', 'philippines-quality-assurance-coordinator-role', 'philippines-data-privacy-coordinator-support',
    'philippines-finance-reporting-assistant-guide', 'philippines-healthcare-appointment-coordinator-guide', 'philippines-real-estate-transaction-coordinator-guide',
    'philippines-supply-chain-data-assistant-scope', 'philippines-learning-development-coordinator-guide', 'philippines-event-coordinator-support-guide',
    'philippines-knowledge-base-coordinator-guide', 'philippines-commercial-operations-assistant-guide', 'philippines-vendor-management-coordinator-scope',
    'philippines-security-compliance-coordinator-guide',
    'philippines-operations-dashboard-assistant-guide', 'philippines-contract-administration-coordinator-guide', 'philippines-patient-scheduling-coordinator-guide',
    'philippines-order-management-coordinator-guide', 'philippines-insurance-policy-administration-guide', 'philippines-customer-onboarding-coordinator-guide',
    'philippines-procurement-administration-assistant-guide', 'philippines-social-media-coordinator-role-scope', 'philippines-project-coordinator-support-guide',
    'philippines-claims-processing-coordinator-guide', 'philippines-community-management-assistant-guide', 'philippines-revenue-operations-coordinator-guide',
    'philippines-website-content-coordinator-guide', 'philippines-facilities-coordinator-support-guide', 'philippines-appointment-intake-coordinator-guide',
    'philippines-document-control-coordinator-guide', 'philippines-technical-project-coordinator-guide', 'philippines-digital-marketing-coordinator-guide',
    'philippines-community-support-coordinator-guide', 'philippines-payroll-administration-coordinator-guide', 'philippines-website-project-coordinator-guide',
    'philippines-records-management-assistant-guide',
  ].map((slug) => [slug, makeBatchBlogDetails(slug)])),
} as const;

export const staffingOffer = {
  partner: 'a staffing partner',
  promise: 'Get an offshore staffing plan based on the work you need handled.',
  fit: [
    'business owners who need remote staff but do not want to screen candidates alone',
    'teams that want backup coverage and a clear person to contact when work slips',
    'companies hiring for admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role planning call that turns your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'help setting up instructions, scorecards, reporting, and safe tool access',
    'a clear contact for quality, attendance, and replacement questions',
  ],
  proof: [
    'task scope agreed before hiring',
    'a set time for weekly reporting',
    'named owners for approvals and escalations',
    'a written handoff for tools, instructions, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Turn the task list into one role with clear tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'Compare candidates against the work, schedule, communication needs, and skill level.' },
  { step: '3', title: 'Start small', body: 'Use sample work, limited access, and daily checks while the person learns the role.' },
  { step: '4', title: 'Add work carefully', body: 'Hand over more tasks only after the first ones are accurate and easy to review.' },
] as const;

export const staffingFitNote = 'The right setup depends on the work, hours, tools, and level of manager support. Share those details so the follow-up team can point you toward a sensible fit.';


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
