import type { Metadata } from 'next';
import { CTA, Footer, Header, PartnerAttribution } from '../components';

const canonical = 'https://offshoreresourcing.com/about';
const description = 'How Offshore Resourcing defines Philippines based support roles, operating boundaries, and accountable manager handoffs.';
export const metadata: Metadata = {
  title: 'About Offshore Resourcing',
  description,
  alternates: { canonical },
  openGraph: { title: 'About Offshore Resourcing', description, url: canonical, type: 'website', images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Stealth Agents team in Bacolod, Philippines' }] },
  twitter: { card: 'summary_large_image', title: 'About Offshore Resourcing', description, images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Stealth Agents team in Bacolod, Philippines' }] },
};

const accountabilities = [
  ['Your team', 'Defines priorities, grants system access, approves sensitive actions, and owns business decisions.'],
  ['The specialist', 'Works the approved queue, records evidence, follows stop points, and escalates exceptions.'],
  ['The staffing partner', 'Recruits and hires against the role brief, then supports the staffing relationship.'],
];

export default function AboutPage() {
  return <><Header/><main className="commercial-page about-page">
    <section className="about-hero"><div className="commercial-shell about-hero-grid"><div><p className="signal-label">About Offshore Resourcing</p><h1>An operating manual for a role people can actually run.</h1><p className="hero-lead">We help buyers turn recurring work into a clear Philippines based support lane. The plan starts with inputs, outputs, access, review, and decisions that stay with accountable leaders.</p><a className="signal-button" href="#operating-model">See the operating model</a></div><figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Stealth Agents team together in Bacolod, Philippines"/><figcaption>Real staffing works best when the role and handoffs are visible.</figcaption></figure></div></section>
    <section className="commercial-section" id="operating-model"><div className="commercial-shell split-intro"><div><p className="section-kicker">Operating model</p><h2>Define the lane before adding capacity.</h2></div><div><p>Offshore Resourcing publishes practical service guides for recurring recruiting and people operations work. Each guide separates preparation and coordination from judgment, approval, and policy ownership.</p><p>A useful brief names the source record, finished output, normal due time, reviewer, and stop point. That structure gives a candidate a fair view of the work and gives a manager a concrete way to review it.</p></div></div></section>
    <section className="commercial-section tinted-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Accountabilities</p><h2>Every handoff keeps a named owner.</h2></div><div className="accountability-grid">{accountabilities.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="commercial-section"><div className="commercial-shell about-partner-grid"><div><p className="section-kicker">StealthAgents role</p><h2>Planning guidance and staffing delivery are distinct.</h2><p>Offshore Resourcing provides role planning information. Staffing requests may be routed to StealthAgents, which recruits and hires talent in the Philippines. StealthAgents is identified wherever that relationship matters, including the site header and footer.</p><p>Your organization remains responsible for priorities, permissions, review standards, and consequential decisions. No service guide transfers those accountabilities.</p><PartnerAttribution/></div><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt=""/></div></section>
    <section className="commercial-section aubergine-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Working sequence</p><h2>Scope, test, review, then expand.</h2></div><ol className="process-list"><li><div><h3>Record the workload</h3><p>List recurring tasks, volume, examples, tools, and coverage needs.</p></div></li><li><div><h3>Set controls</h3><p>Name permissions, review rules, stop points, and decision owners.</p></div></li><li><div><h3>Calibrate the work</h3><p>Use sample records and early review to clarify the standard.</p></div></li><li><div><h3>Expand carefully</h3><p>Add volume or access only after the current lane is stable.</p></div></li></ol></div></section>
    <CTA/>
  </main><Footer/></>;
}
