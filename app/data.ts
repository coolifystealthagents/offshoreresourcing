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
  { slug: 'philippines-virtual-assistant-workflow-guide', title: 'How to scope a Philippines virtual assistant workflow', excerpt: 'Choose repeatable tasks, clear handoffs, and manager-owned decisions before adding a Philippines virtual assistant.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-customer-support-team-lead-guide', title: 'How to hire a Philippines customer support team lead', excerpt: 'Define queue ownership, coaching habits, escalation judgment, and reporting before hiring a support lead.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-bookkeeping-assistant-hiring-guide', title: 'How to hire a Philippines bookkeeping assistant', excerpt: 'Separate transaction preparation, reconciliation support, and documentation from approvals and accounting decisions.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-executive-assistant-role-scope', title: 'How to scope a Philippines executive assistant role', excerpt: 'Build an executive assistant role around calendar control, briefing notes, follow-through, and confidentiality.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-ecommerce-support-specialist-guide', title: 'How to scope a Philippines ecommerce support specialist', excerpt: 'Plan order questions, returns records, customer updates, and escalation rules for an ecommerce support lane.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-data-entry-quality-checklist', title: 'Philippines data entry quality checklist', excerpt: 'Use field rules, sample checks, duplicate handling, and exception ownership to improve data entry accuracy.', minutes: 8, publishedAt: '2026-08-11' },
  { slug: 'philippines-sales-operations-assistant-guide', title: 'How to hire a Philippines sales operations assistant', excerpt: 'Define CRM updates, pipeline hygiene, meeting preparation, and approval boundaries for sales operations support.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-recruiting-sourcer-scorecard', title: 'Philippines recruiting sourcer scorecard', excerpt: 'Score search quality, evidence, duplicate control, and useful handoffs when reviewing recruiting sourcer candidates.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-accounts-receivable-support-scope', title: 'How to scope Philippines accounts receivable support', excerpt: 'Keep invoice records, follow-up notes, and aging reports organized while payment decisions stay with your finance owner.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-property-management-assistant-guide', title: 'How to scope a Philippines property management assistant', excerpt: 'Organize maintenance requests, vendor records, resident updates, and manager escalations in one support lane.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-medical-admin-support-boundaries', title: 'Philippines medical administration support boundaries', excerpt: 'Plan scheduling and records support with careful access controls, approved scripts, and clear clinical boundaries.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-logistics-coordinator-hiring-guide', title: 'How to hire a Philippines logistics coordinator', excerpt: 'Test shipment tracking, exception notes, carrier follow-up, and time-zone communication before hiring.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-technical-support-specialist-scope', title: 'How to scope a Philippines technical support specialist', excerpt: 'Define troubleshooting tiers, documentation habits, escalation triggers, and customer communication standards.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-marketing-assistant-role-guide', title: 'How to scope a Philippines marketing assistant role', excerpt: 'Separate campaign administration, asset coordination, reporting preparation, and marketing decisions.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-hr-administration-support-guide', title: 'How to scope Philippines HR administration support', excerpt: 'Set careful boundaries for employee records, onboarding administration, reporting, and confidential decisions.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-quality-assurance-coordinator-guide', title: 'How to hire a Philippines quality assurance coordinator', excerpt: 'Test inspection discipline, defect notes, sample selection, and escalation judgment for a QA support role.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-real-estate-admin-assistant-guide', title: 'How to hire a Philippines real estate admin assistant', excerpt: 'Define listing records, appointment coordination, document follow-up, and agent-owned decisions.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-podcast-production-assistant-scope', title: 'How to scope a Philippines podcast production assistant', excerpt: 'Organize guest notes, episode assets, publishing records, and approval handoffs without losing editorial ownership.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-legal-admin-support-boundaries', title: 'Philippines legal administration support boundaries', excerpt: 'Separate document organization, scheduling, and status tracking from legal judgment and client advice.', minutes: 10, publishedAt: '2026-08-11' },
  { slug: 'philippines-inventory-coordinator-hiring-guide', title: 'How to hire a Philippines inventory coordinator', excerpt: 'Build a role around stock records, discrepancy notes, reorder visibility, and manager-approved changes.', minutes: 9, publishedAt: '2026-08-11' },
  { slug: 'philippines-email-inbox-management-guide', title: 'How to scope Philippines email inbox management', excerpt: 'Create practical triage rules, response templates, privacy limits, and escalation ownership for inbox support.', minutes: 8, publishedAt: '2026-08-11' },
  { slug: 'philippines-remote-office-manager-guide', title: 'How to hire a Philippines remote office manager', excerpt: 'Define vendor coordination, meeting logistics, records, and service issues without transferring business authority.', minutes: 9, publishedAt: '2026-08-11' },
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

export const blogPosts: readonly BlogPost[] = [...blogPostsSource]
  .map((post): BlogPost => augustTenBlogDates[post.slug] ? { ...post, publishedAt: augustTenBlogDates[post.slug] } : post)
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '') || blogPostsSource.findIndex((item) => item.slug === a.slug) - blogPostsSource.findIndex((item) => item.slug === b.slug));

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

const newBlogSlugs = [
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

export const blogDetails = {
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
  ...Object.fromEntries(newBlogSlugs.map((slug) => [slug, makeBatchBlogDetails(slug)])),
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
