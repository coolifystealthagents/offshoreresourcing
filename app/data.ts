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
  {
    slug: 'operations-support',
    title: 'Operations Support',
    desc: 'Keep recurring handoffs, queue updates, and routine follow-up moving without putting every check back on the owner.',
    bestTasks: ['Update work queues and trackers', 'Prepare handoff notes and status reports', 'Follow documented steps for recurring requests'],
    controls: ['Named owner for approvals', 'Daily record of completed work', 'Escalation rules for exceptions'],
    firstWeek: ['Choose one queue to hand off', 'Share examples and access limits', 'Review a small batch together'],
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    desc: 'Add offshore coverage for routine tickets and customer follow-up while keeping refunds, exceptions, and sensitive cases with your team.',
    bestTasks: ['Answer common questions from approved replies', 'Tag and route incoming tickets', 'Follow up on open requests'],
    controls: ['Sample ticket reviews', 'Clear refund and credit limits', 'Escalation path for sensitive cases'],
    firstWeek: ['Learn the help desk and reply library', 'Handle low-risk tickets in a test queue', 'Review replies before wider access'],
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    desc: 'Move calendar upkeep, inbox sorting, data entry, and document follow-up to a role with clear limits and review points.',
    bestTasks: ['Sort inboxes using agreed labels', 'Update calendars and shared records', 'Prepare documents from approved templates'],
    controls: ['Written calendar and inbox rules', 'Limited access to only the needed tools', 'Approval before sending sensitive messages'],
    firstWeek: ['Start with one inbox or calendar', 'Work from real examples', 'Check the daily done list together'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Give managers a cleaner view of offshore work through sample checks, scorecard updates, and documented follow-up on misses.',
    bestTasks: ['Pull weekly activity numbers', 'Check samples against a written rubric', 'Log errors and follow-up actions'],
    controls: ['One scorecard with named measures', 'Manager review for disputed results', 'A record of fixes and repeat issues'],
    firstWeek: ['Agree on what good work looks like', 'Score a small sample together', 'Set the first review date'],
  },
] as const;
export const blogPosts = [
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
  'offshore-resourcing-provider-questions': {
    takeaways: [
      'Ask who owns quality before you ask about price.',
      'Get the replacement rule in writing before the first start date.',
      'Treat tool access, customer data, and approval limits as part of the role, not as setup after hiring.',
    ],
    sections: [
      {
        heading: 'Start with the work, then ask who manages it',
        body: 'A provider can send resumes fast and still leave you with a messy hire. Start with the work list. Ask which tasks are safe for an offshore staff member on day one, which tasks need owner approval, and who checks the first two weeks of output. If the answer is vague, the provider is selling labor instead of a managed staffing plan.',
      },
      {
        heading: 'Ask for the real quality loop',
        body: 'Quality control should be boring and visible. You want a named reviewer, a weekly scorecard, and a simple way to flag misses. For customer support, that may mean ticket samples and response checks. For admin work, it may mean inbox labels, calendar rules, and a daily done list. For finance support, it should include approval limits and restricted access.',
      },
      {
        heading: 'Check replacement coverage before you need it',
        body: 'Bad fit happens. The provider should explain how replacement works, how long it usually takes, and what happens to your notes, SOPs, and tool access if a person changes. This matters more than a polished pitch deck. A clean replacement rule protects the business owner from starting over from memory.',
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
      { name: 'FTC Safeguards Rule', url: 'https://www.ftc.gov/business-guidance/privacy-security/safeguards-rule', note: 'A plain reminder that some customer and financial data needs written safeguards, not casual sharing.' },
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
