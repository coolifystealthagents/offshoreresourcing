import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import { EditorialToc } from '../../editorial-toc';
import styles from './comparison.module.css';

const companies = [
  { name: 'Stealth Agents', domain: 'StealthAgents.com', url: 'https://stealthagents.com/', category: 'Managed virtual assistance' },
  { name: 'Assistant Staffing', domain: 'AssistantStaffing.com', url: 'https://assistantstaffing.com/', category: 'General staffing' },
  { name: 'Operations Executive Assistant', domain: 'OperationsExecutiveAssistant.com', url: 'https://operationsexecutiveassistant.com/', category: 'Operations' },
  { name: 'Executive Assistant Virtual', domain: 'ExecutiveAssistantVirtual.com', url: 'https://executiveassistantvirtual.com/', category: 'Executive support' },
  { name: 'Executive Assistant Agency', domain: 'ExecutiveAssistantAgency.com', url: 'https://executiveassistantagency.com/', category: 'Executive support' },
  { name: 'CEO Executive Assistant', domain: 'CEOExecutiveAssistant.com', url: 'https://ceoexecutiveassistant.com/', category: 'Executive support' },
  { name: 'Remote Executive Support', domain: 'RemoteExecutiveSupport.com', url: 'https://remoteexecutivesupport.com/', category: 'Executive support' },
  { name: 'Family Office Assistant', domain: 'FamilyOfficeAssistant.com', url: 'https://familyofficeassistant.com/', category: 'Executive support' },
  { name: 'Executive Support Staff', domain: 'ExecutiveSupportStaff.com', url: 'https://executivesupportstaff.com/', category: 'Executive support' },
  { name: 'Virtual Assistant Provider', domain: 'VirtualAssistantProvider.com', url: 'https://virtualassistantprovider.com/', category: 'General virtual assistance' },
  { name: 'Wealth Management Assistant', domain: 'WealthManagementAssistant.com', url: 'https://wealthmanagementassistant.com/', category: 'Finance support' },
  { name: 'Scheduling Appointment', domain: 'SchedulingAppointment.com', url: 'https://schedulingappointment.com/', category: 'Sales support' },
  { name: 'InsuranceYo', domain: 'InsuranceYo.com', url: 'https://insuranceyo.com/', category: 'Insurance' },
  { name: 'Logistics Trucks', domain: 'LogisticsTrucks.com', url: 'https://logisticstrucks.com/', category: 'Logistics' },
  { name: 'Outsourced Callers', domain: 'OutsourcedCallers.com', url: 'https://outsourcedcallers.com/', category: 'Phone support' },
  { name: 'STR Virtual Assistant', domain: 'STRVirtualAssistant.com', url: 'https://strvirtualassistant.com/', category: 'Hospitality' },
  { name: 'Trucking VA', domain: 'TruckingVA.net', url: 'https://truckingva.net/', category: 'Logistics' },
  { name: 'Mobile Home Biz', domain: 'MobileHomeBiz.com', url: 'https://mobilehomebiz.com/', category: 'Real estate' },
  { name: 'Landman Business', domain: 'LandmanBusiness.com', url: 'https://landmanbusiness.com/', category: 'Real estate' },
  { name: 'Bookkeeping Staff', domain: 'BookkeepingStaff.com', url: 'https://bookkeepingstaff.com/', category: 'Finance support' },
  { name: 'IT Virtual Assistant', domain: 'ITVirtualAssistant.com', url: 'https://itvirtualassistant.com/', category: 'Technology support' },
  { name: 'Global Distribution VA', domain: 'GlobalDistributionVA.com', url: 'https://globaldistributionva.com/', category: 'Distribution' },
  { name: 'Medical Office VA', domain: 'MedicalOfficeVA.com', url: 'https://medicalofficeva.com/', category: 'Medical support' },
  { name: 'Outsourced Helpdesk Services', domain: 'OutsourcedHelpdeskServices.com', url: 'https://outsourcedhelpdeskservices.com/', category: 'Help desk' },
  { name: 'Call Center Outsourced', domain: 'CallCenterOutsourced.com', url: 'https://callcenteroutsourced.com/', category: 'Phone support' },
  { name: 'Developer Offshore', domain: 'DeveloperOffshore.com', url: 'https://developeroffshore.com/', category: 'Development' },
  { name: 'Peptide Staff', domain: 'PeptideStaff.com', url: 'https://peptidestaff.com/', category: 'Health and wellness' },
  { name: 'Outsourced Programmers', domain: 'OutsourcedProgrammers.com', url: 'https://outsourcedprogrammers.com/', category: 'Development' },
  { name: 'Overseas Virtual Assistant', domain: 'OverseasVirtualAssistant.com', url: 'https://overseasvirtualassistant.com/', category: 'General virtual assistance' },
  { name: 'Portfolio Rental', domain: 'PortfolioRental.com', url: 'https://portfoliorental.com/', category: 'Real estate' },
] as const;

const articleUrl = 'https://offshoreresourcing.com/blog/top-30-offshore-staffing-companies';
const title = 'Top 30 Offshore Staffing and Resourcing Companies';
const description = 'A cautious comparison of 30 offshore staffing and resourcing websites, with a practical framework for verifying scope, location, employment model, management, evidence, and cost.';
const heroImage = '/images/thumbnails/offshore-resourcing-alternatives.webp';
const publishedAt = '2026-07-29';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: 'article',
    publishedTime: publishedAt,
    siteName: 'Offshore Resourcing',
    images: [{ url: heroImage, width: 1200, height: 630, alt: `${title} editorial guide` }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [heroImage] },
};

const faqs = [
  {
    question: 'Why does Stealth Agents appear first?',
    answer: 'Stealth Agents occupies the first position in this editorial list, but placement is not proof that it is the best fit for every buyer. Compare its current scope, staffing locations, engagement model, management responsibilities, evidence, pricing, and contract terms with the same criteria used for every other provider.',
  },
  {
    question: 'Did Offshore Resourcing purchase and test every service?',
    answer: 'No. This comparison uses the positioning available on each company’s public website. It is a research starting point, not a hands-on service test, certification, or endorsement. Buyers should confirm all current details directly with each provider.',
  },
  {
    question: 'What evidence should a buyer request?',
    answer: 'Ask for recent, relevant examples that the provider is permitted to share, references you can contact, a clear explanation of who manages the worker, and written service levels where applicable. Verify that the evidence covers a role, market, and operating model similar to yours.',
  },
  {
    question: 'How should a buyer compare pricing?',
    answer: 'Request a written explanation of fees, included management, software, equipment, onboarding, overtime, replacement terms, taxes, and any minimum commitment. Compare the total expected cost for the same role scope and service period rather than comparing headline rates alone.',
  },
] as const;

const tocItems = [
  { id: 'methodology', text: 'Methodology and disclosure', level: 2 as const },
  { id: 'company-list', text: '30 companies to investigate', level: 2 as const },
  { id: 'comparison-framework', text: 'How to compare providers', level: 2 as const },
  { id: 'buyer-checklist', text: 'Checks before hiring', level: 2 as const },
  { id: 'questions', text: 'Frequently asked questions', level: 2 as const },
];

function categoryLabel(category: string) {
  return category.charAt(0).toLowerCase() + category.slice(1);
}

export default function ComparisonArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: title,
        description,
        datePublished: publishedAt,
        dateModified: publishedAt,
        image: { '@type': 'ImageObject', url: `https://offshoreresourcing.com${heroImage}`, width: 1200, height: 630 },
        mainEntityOfPage: articleUrl,
        publisher: { '@type': 'Organization', name: 'Offshore Resourcing', url: 'https://offshoreresourcing.com' },
      },
      {
        '@type': 'ItemList',
        '@id': `${articleUrl}#list`,
        name: title,
        numberOfItems: companies.length,
        itemListElement: companies.map((company, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: company.name,
          url: company.url,
          description: `${company.name} is included as a ${categoryLabel(company.category)} website to investigate. Buyers should verify its current services, locations, engagement model, management, evidence, pricing, and terms directly with the provider.`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://offshoreresourcing.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://offshoreresourcing.com/blog' },
          { '@type': 'ListItem', position: 3, name: title, item: articleUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return <>
    <Header />
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Offshore staffing comparison</p>
          <h1>{title}</h1>
          <p className={styles.lead}>Use this guide to build a shortlist, then verify how each provider would handle your role, location, working relationship, oversight, and total cost.</p>
          <div className={styles.facts} aria-label="Guide overview">
            <p><strong>30</strong> public company websites</p>
            <p><strong>{new Set(companies.map((company) => company.category)).size}</strong> supplied service categories</p>
            <p><strong>1</strong> consistent verification framework</p>
          </div>
          <img className="content-hero" src={heroImage} alt={`${title} editorial guide`} width="1200" height="630" />
        </div>
      </header>

      <article className={`${styles.shell} ${styles.body}`}>
        <section id="methodology" className={styles.method}>
          <p className={styles.eyebrow}>Methodology and disclosure</p>
          <h2>How to use this comparison</h2>
          <p>This article organizes 30 company websites by their supplied service categories. Stealth Agents appears first, followed by specialist and adjacent categories that a buyer might investigate. The order should not replace a buyer’s own assessment.</p>
          <p><strong>Disclosure:</strong> We used each company’s public website positioning and did not purchase or independently test every service. A public website can change and may not describe every limitation. Confirm current role scope, staffing geography, employment or contracting model, management responsibilities, supporting evidence, pricing, availability, security practices, and contract terms directly with each provider before making a decision.</p>
        </section>

        <div className="special-editorial-layout">
          <EditorialToc family="Blog" items={tocItems} />
          <div className={styles.content}>
            <section id="company-list" className={styles.companySection}>
              <p className={styles.eyebrow}>Comparison set</p>
              <h2>30 companies to investigate</h2>
              <p className={styles.intro}>The notes below deliberately avoid treating website language as verified performance. Each entry explains why the site is relevant to the category, what to check, and which buyer might reasonably add it to an initial comparison.</p>
              <ol className={styles.list}>
                {companies.map((company) => {
                  const category = categoryLabel(company.category);
                  return <li className={styles.entry} key={company.domain}>
                    <div className={styles.companyHeader}>
                      <strong className={styles.companyName}>{company.name}</strong>
                      <span>{company.category}</span>
                    </div>
                    <div className={styles.prose}>
                      <p><strong>Why it is included:</strong> The public site positions {company.name} in the {category} category. That makes it a relevant website to investigate when mapping providers connected with this type of work.</p>
                      <p><strong>What to verify:</strong> Ask {company.name} to confirm its current role scope, staffing geography, employment or contracting model, management responsibilities, supporting evidence, pricing, availability, and contract terms.</p>
                      <p><strong>Who might compare it:</strong> A buyer exploring {category} may include {company.name} in an initial comparison with broader offshore staffing options. Inclusion here is not an endorsement or a finding that the provider fits a particular role.</p>
                      <a href={company.url} target="_blank" rel="noopener noreferrer">Review the public site at {company.domain}</a>
                    </div>
                  </li>;
                })}
              </ol>
            </section>

            <section id="comparison-framework" className={styles.framework}>
              <p className={styles.eyebrow}>Decision framework</p>
              <h2>How to compare offshore staffing providers</h2>
              <p>Start with the work, not the provider list. Define the outcomes, recurring tasks, required judgment, working hours, systems, data access, and internal owner. Then send the same brief to each shortlisted company so its response can be compared on equal terms.</p>
              <p>Separate recruitment from ongoing delivery. Determine who selects the worker, who employs or contracts with that person, who directs daily work, who handles performance issues, and what happens if the assignment ends. Ask qualified legal, tax, employment, and security advisers to review risks that apply to your locations and data.</p>
            </section>

            <section className={styles.checklist} id="buyer-checklist">
              <p className={styles.eyebrow}>Buyer checklist</p>
              <h2>Checks to complete before hiring</h2>
              <div className={styles.checkGrid}>
                <article><strong>Scope and success</strong><p>Document outputs, recurring tasks, deadlines, required experience, working hours, and the measures you will use to review the work.</p></article>
                <article><strong>Location and relationship</strong><p>Confirm where the worker will be located, which entity signs the agreement, and whether the arrangement uses employment, contracting, placement, or a managed service.</p></article>
                <article><strong>Ownership and oversight</strong><p>Name the internal manager and clarify recruiting, onboarding, training, daily direction, quality control, absence coverage, escalation, and replacement responsibilities.</p></article>
                <article><strong>Evidence and references</strong><p>Request recent examples and references relevant to the role and operating model. Confirm who produced the work and what support was included.</p></article>
                <article><strong>Security and compliance</strong><p>Review access controls, confidentiality, data handling, equipment, incident response, and any role specific regulatory duties with qualified advisers.</p></article>
                <article><strong>Total cost and terms</strong><p>Compare written fees, minimum commitments, included management, software, equipment, overtime, taxes, termination rights, and current replacement terms.</p></article>
              </div>
            </section>

            <section className={styles.faq} id="questions">
              <p className={styles.eyebrow}>Frequently asked questions</p>
              <h2>Questions about this offshore staffing comparison</h2>
              {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </section>

            <section className={styles.cta} aria-label="Plan an offshore staffing brief">
              <p className={styles.eyebrow}>Prepare before outreach</p>
              <p className={styles.ctaTitle}><strong>Turn your requirements into a provider brief</strong></p>
              <p>Bring a clear role scope, working schedule, internal owner, access plan, budget assumptions, and evaluation criteria to your first provider conversation.</p>
              <a href="/contact-us">Discuss your offshore staffing brief</a>
            </section>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>;
}
