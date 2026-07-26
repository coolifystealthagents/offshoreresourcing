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

export const blogPosts = [
  {
    "slug": "philippines-recruitment-coordinator-hiring-guide",
    "title": "How to hire a Philippines recruitment coordinator",
    "excerpt": "Build a clear recruiting support role for candidate records, interview schedules, follow-ups, and manager handoffs.",
    "minutes": 12
  },
  {
    "slug": "offshore-resourcing-planning",
    "title": "How to plan an offshore role before you hire",
    "excerpt": "Turn a loose task list into a role with clear hours, access limits, and review rules.",
    "minutes": 6
  },
  {
    "slug": "offshore-resourcing-tasks-to-outsource",
    "title": "Which tasks should you outsource first?",
    "excerpt": "Start with repeatable work that has examples, an owner, and a clear line for exceptions.",
    "minutes": 7
  },
  {
    "slug": "offshore-resourcing-provider-questions",
    "title": "Questions to ask an offshore staffing provider",
    "excerpt": "Ask how screening, quality checks, access, and replacement work before you sign.",
    "minutes": 8
  },
  {
    "slug": "offshore-resourcing-onboarding-checklist",
    "title": "A practical first-week onboarding checklist",
    "excerpt": "Set up tools, sample work, daily reviews, and approval limits before the role gets busy.",
    "minutes": 9
  }
] as const;

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
    expertQuote: {
      text: 'Effective LMI analysis can improve education and training programmes to meet current and future industry skills needs. However, such LMI analysis for improved skills needs anticipation and matching requires reliable and comprehensive information,',
      person: 'Khalid Hassan',
      title: 'Director, ILO Country Office for the Philippines',
      sourceName: 'International Labour Organization, February 17, 2023',
      url: 'https://www.ilo.org/resource/article/maximizing-philippine-labour-market-intelligence-local-skills-needs',
    },
    banners: [
      { eyebrow: 'Role scope', title: 'Turn the task list into a recruiting support brief.', body: 'Write the hiring lanes, systems, coverage hours, and approval limits before screening begins. The workforce planning guide gives you a simple place to start.', label: 'Plan the role', href: '/blog/offshore-resourcing-planning' },
      { eyebrow: 'Service fit', title: 'Need help with interview scheduling?', body: 'Review the exact scheduling tasks a Filipino coordinator can own. Keep interviewer choice and hiring decisions with your manager.', label: 'See interview scheduling support', href: '/services/interview-scheduling' },
      { eyebrow: 'First month', title: 'Set up the handoff before the queue gets busy.', body: 'Use limited access, sample work, and daily checks while the coordinator learns your process. Add work only after the first lane stays accurate.', label: 'Open the onboarding checklist', href: '/blog/offshore-resourcing-onboarding-checklist' },
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
  'offshore-resourcing-provider-questions': {
    takeaways: [
      'Ask who owns quality before you ask about price.',
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
      { q: 'Should I ask about price first?', a: 'Ask about scope and management first. Price only makes sense after the provider knows the role, hours, tools, and quality checks.' },
      { q: 'What is a red flag in an offshore provider call?', a: 'A provider who cannot explain screening, replacement, access controls, or who checks quality during the first two weeks is a risk.' },
      { q: 'Do I need SOPs before hiring?', a: 'You do not need a perfect manual. You do need examples, approval rules, and a short list of tasks for the first week.' },
    ],
  },
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
