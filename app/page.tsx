import type { Metadata } from 'next';
import { Header, Footer, JsonLd, CTA } from './components';
import { commercialServices } from './commercial-data';
import { site } from './data';
import { defaultSocialImage } from '../lib/seo';

const canonical = 'https://offshoreresourcing.com';
const description = 'Plan Philippines based offshore roles with clear scope, access boundaries, workflow ownership, and manager review.';
const socialImage = { url: defaultSocialImage, width: 1200, height: 630, alt: 'Philippines workforce planning guide' };
export const metadata: Metadata = { title: 'Offshore Resourcing', description, alternates: { canonical }, openGraph: { title: 'Offshore Resourcing', description, url: canonical, images: [socialImage] }, twitter: { card: 'summary_large_image', title: 'Offshore Resourcing', description, images: [socialImage] } };

const faqs = [
  ['What work is a good starting point?', 'Start with recurring work that has stable inputs, an observable output, and a manager who can review early samples.'],
  ['Which decisions should stay internal?', 'Keep strategy, budget, policy exceptions, sensitive approvals, and consequential customer or employee decisions with accountable leaders.'],
  ['How should access begin?', 'Use named accounts and the least access needed for the first approved tasks. Add permissions only after the workflow is stable.'],
  ['Does this site employ candidates?', 'No. Offshore Resourcing provides planning guidance and routes staffing requests to StealthAgents, a staffing partner that recruits and hires in the Philippines.'],
];

export default function Home() {
  const schema = {'@context':'https://schema.org','@type':'WebSite',name:site.brand,url:canonical};
  return <><Header/><main className="commercial-page home-page"><JsonLd data={schema}/>
    <section className="home-hero"><div className="commercial-shell home-hero-grid"><div className="home-hero-copy"><p className="signal-label">Philippines based staffing planning</p><h1>Build the offshore role around the work.</h1><p className="hero-lead">Define the queue, permissions, handoffs, and review rhythm before a new team member starts. Give managers a practical plan they can operate.</p><div className="hero-actions"><a className="signal-button" href="/contact-us">Plan a role</a><a className="text-link" href="/services">Explore services</a></div><dl className="hero-facts"><div><dt>Start with</dt><dd>Repeatable work</dd></div><div><dt>Keep internal</dt><dd>Judgment and approvals</dd></div><div><dt>Review first</dt><dd>Samples and exceptions</dd></div></dl></div><figure className="documentary-frame"><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Stealth Agents team working together in Bacolod, Philippines"/><figcaption>Operations are built by people, clear records, and accountable handoffs.</figcaption></figure></div></section>

    <section className="commercial-section"><div className="commercial-shell split-intro"><div><p className="section-kicker">Role scope</p><h2>Choose work that can be explained, checked, and handed back.</h2></div><div><p>A role brief should describe the actual queue, not only a job title. Record where work starts, what a finished result contains, which systems are required, and when the specialist must stop and ask.</p><ul className="plain-checks"><li>Recurring tasks with examples</li><li>Coverage window and due times</li><li>Named source of truth</li><li>Quality check and correction path</li></ul></div></div></section>

    <section className="commercial-section tinted-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Service directory</p><h2>Select the work lane before selecting a candidate.</h2><p>Each service guide defines inputs, outputs, controls, scenarios, and manager boundaries.</p></div><div className="service-link-grid">{commercialServices.map(service=><a href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.description}</p><span>Read the operating guide</span></a>)}</div></div></section>

    <section className="commercial-section aubergine-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Operating process</p><h2>Move from workload to controlled ownership.</h2></div><ol className="process-list"><li><div><h3>Write the role brief</h3><p>Capture tasks, volume, systems, examples, schedule, and the manager who owns decisions.</p></div></li><li><div><h3>Review candidate evidence</h3><p>Compare relevant work against the approved criteria instead of relying on a broad title.</p></div></li><li><div><h3>Start with limited access</h3><p>Use sample work, named accounts, and a small queue while instructions are tested.</p></div></li><li><div><h3>Expand after review</h3><p>Add volume or permissions only when quality, handoffs, and escalation are stable.</p></div></li></ol></div></section>

    <section className="commercial-section"><div className="commercial-shell boundary-grid"><div><p className="section-kicker">Decision boundary</p><h2>Support can prepare the record. Your leaders own the call.</h2><p>Offshore work is easier to manage when administrative preparation is separated from decisions with financial, legal, policy, customer, or employee consequences.</p></div><div className="boundary-board"><div><h3>Suitable for a defined lane</h3><ul><li>Record maintenance and reconciliation</li><li>Scheduling and approved communication</li><li>Research with source evidence</li><li>Reporting preparation</li></ul></div><div><h3>Keep with accountable owners</h3><ul><li>Hiring and compensation decisions</li><li>Policy interpretation and exceptions</li><li>Budget and payment approval</li><li>Final risk acceptance</li></ul></div></div></div></section>

    <section className="commercial-section faq-section"><div className="commercial-shell narrow-shell"><p className="section-kicker">Planning questions</p><h2>Questions to settle before the handoff.</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <CTA/>
  </main><Footer/></>;
}
