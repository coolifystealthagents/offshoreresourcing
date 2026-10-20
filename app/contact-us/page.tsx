import type { Metadata } from 'next';
import { Header, Footer, ReviewsMarquee } from '../components';
import { services } from '../data';
import StandardContactForm from './StandardContactForm';
import styles from './contact.module.css';

const canonical = 'https://offshoreresourcing.com/contact-us';
const description = 'Share the workload, coverage, tools, and approval boundaries for a Philippines based staffing plan.';
const socialImage = { url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Stealth Agents team in Bacolod' };
export const metadata: Metadata = {
  title: 'Contact Us',
  description,
  alternates: { canonical },
  openGraph: { title: 'Plan Your Offshore Role', description, url: canonical, type: 'website', images: [socialImage] },
  twitter: { card: 'summary_large_image', title: 'Plan Your Offshore Role', description, images: [socialImage] },
};

export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.heroGrid}>
      <div className={styles.copy}><p className={styles.kicker}>Staffing intake</p><h1>Turn a workload into a role your manager can run.</h1><p className={styles.lead}>Share the recurring work, tools, coverage, and decisions that stay internal. We will use the detail to guide a practical staffing conversation.</p><div className={styles.scopeLabels}><span>Role scope</span><span>Access limits</span><span>Review rhythm</span><span>Philippines based talent</span></div></div>
      <div id="consultation" className={styles.formColumn}><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
      <div className={styles.reviews}><ReviewsMarquee/></div>
    </div></section>
    <section className={styles.teamSection}><div className={styles.teamGrid}><figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Official Stealth Agents team together in Bacolod, Philippines"/><figcaption><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt=""/><strong>Official team, Bacolod</strong></figcaption></figure><div><p className={styles.kicker}>The staffing partner</p><h2>People and process behind the handoff.</h2><p>Offshore Resourcing helps buyers define the work and operating boundaries. Staffing requests may be routed to StealthAgents, which recruits and hires talent in the Philippines.</p><p>Your team remains responsible for role priorities, system access, review standards, and consequential decisions. The staffing conversation starts with those controls, not with a generic job title.</p><a className={styles.partnerPlate} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt=""/><span>Visit Stealth Agents</span></a></div></div></section>
    <section className={styles.scopeSection}><div className={styles.shell}><p className={styles.kicker}>Prepare the brief</p><h2>Bring enough context to test the role.</h2><div className={styles.scopeGrid}><article><h3>Work and volume</h3><p>List recurring tasks, frequency, current owner, backlog, and one example of a complete result.</p></article><article><h3>Systems and coverage</h3><p>Name the tools, working window, source of truth, and permissions that must stay restricted.</p></article><article><h3>Review and exceptions</h3><p>Identify who checks quality, approves sensitive actions, and answers work that falls outside the normal lane.</p></article></div><div className={styles.serviceLinks}>{services.map(service=><a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div></section>
  </main><Footer/></>;
}
