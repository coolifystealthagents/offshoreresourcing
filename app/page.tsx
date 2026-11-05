import type { Metadata } from 'next';
import { Header, Footer, JsonLd, CTA, ReviewsMarquee } from './components';
import { commercialServices } from './commercial-data';
import { site } from './data';
import { defaultSocialImage } from '../lib/seo';
import { ProcessIcon } from './visual-assets';

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
    <section className="home-hero"><div className="commercial-shell home-hero-grid"><div className="home-hero-copy"><p className="signal-label hero-badge"><span aria-hidden="true">★</span> Philippines staffing role design</p><h1>Turn a recurring work queue <span>into a role.</span></h1><p className="hero-lead">Map the tasks, systems, coverage hours, review points, and escalation path before recruiting begins.</p><ul className="hero-checklist"><li>Bring a real task list and finished examples</li><li>Name the system of record and required access</li><li>Assign the reviewer for samples and exceptions</li><li>Keep hiring, policy, budget, and final approvals internal</li></ul><div className="hero-actions"><a className="signal-button" href="/contact-us">Plan Your Role <span aria-hidden="true">→</span></a><a className="text-link" href="/services">Compare Service Lanes</a></div><p className="hero-assurance">Leave with a practical role brief for the recruiting handoff.</p></div><figure className="documentary-frame"><img src="/brand/offshore-work-queue-handoff.jpg" width="1800" height="1012" loading="eager" fetchPriority="high" decoding="async" alt="Three colleagues reviewing work beside shared workstation monitors"/><figcaption>Workplace collaboration photographed by Austin Distel on Unsplash; people shown are illustrative.</figcaption></figure></div></section>
    <section className="home-review-band"><div className="commercial-shell"><ReviewsMarquee/></div></section>

    <section className="commercial-section"><div className="commercial-shell split-intro"><div><p className="section-kicker">Role brief</p><h2>Describe the queue, not just the job title.</h2></div><div><p>Trace one real request from intake to completion. Record where it starts, which fields and files are required, what a finished result contains, and who resolves an exception.</p><ul className="plain-checks"><li>Task volume, cadence, and due time</li><li>Approved systems and access level</li><li>Finished example and review rubric</li><li>Correction, escalation, and handoff owner</li></ul></div></div></section>

    <section className="commercial-section tinted-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Service directory</p><h2>Choose the queue a support specialist will own.</h2><p>Each guide shows the required inputs, finished output, review check, escalation point, and decisions that stay with your team.</p></div><div className="service-link-grid">{commercialServices.map(service=><a href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.description}</p><span>See inputs and handoffs</span></a>)}</div></div></section>

    <section className="commercial-section aubergine-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Recruiting handoff</p><h2>Move one proven task from example to owned queue.</h2></div><ol className="process-list"><li><ProcessIcon name="brief"/><div><h3>Document the task</h3><p>Capture volume, source records, finished examples, schedule, and the manager who owns decisions.</p></div></li><li><ProcessIcon name="evidence"/><div><h3>Test relevant work</h3><p>Compare a realistic sample with the written acceptance criteria and note unresolved questions.</p></div></li><li><ProcessIcon name="access"/><div><h3>Open a limited lane</h3><p>Use named accounts, the minimum permissions, and a small first queue while instructions are tested.</p></div></li><li><ProcessIcon name="review"/><div><h3>Review before expanding</h3><p>Add volume or access only after quality checks, corrections, and escalations work as documented.</p></div></li></ol></div></section>

    <section className="commercial-section"><div className="commercial-shell boundary-grid"><div><p className="section-kicker">Decision boundary</p><h2>Support can prepare the record. Your leaders own the call.</h2><p>Offshore work is easier to manage when administrative preparation is separated from decisions with financial, legal, policy, customer, or employee consequences.</p></div><div className="boundary-board"><div><h3>Suitable for a defined lane</h3><ul><li>Record maintenance and reconciliation</li><li>Scheduling and approved communication</li><li>Research with source evidence</li><li>Reporting preparation</li></ul></div><div><h3>Keep with accountable owners</h3><ul><li>Hiring and compensation decisions</li><li>Policy interpretation and exceptions</li><li>Budget and payment approval</li><li>Final risk acceptance</li></ul></div></div></div></section>

    <section className="commercial-section faq-section"><div className="commercial-shell narrow-shell"><p className="section-kicker">Planning questions</p><h2>Questions to settle before the handoff.</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <CTA/>
  </main><Footer/></>;
}
