import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'What Happens Next',
  description: 'Your meeting request is complete. Prepare the details needed for a practical staffing conversation.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header/><main className="commercial-page confirmation-page"><section className="confirmation-hero"><div className="commercial-shell confirmation-grid"><div><p className="signal-label">Meeting scheduled</p><h1>Your next conversation has a clear starting point.</h1><p className="hero-lead">Your booking is complete. Bring the recurring workload, required coverage, tools, and decisions that must stay with your team.</p><div className="confirmation-actions"><a className="signal-button" href="/services">Review service guides</a><a className="text-link" href="/">Return home</a></div></div><img src="/brand/stealth-agents-team-bacolod.jpg" width="953" height="540" alt="Stealth Agents team in Bacolod ready for a staffing conversation"/></div></section><section className="commercial-section"><div className="commercial-shell narrow-shell"><p className="section-kicker">Prepare for the call</p><h2>Three useful items to have ready.</h2><div className="accountability-grid"><article><h3>A real work sample</h3><p>Bring one completed example that shows the expected result and source information.</p></article><article><h3>Access boundaries</h3><p>List the systems involved and the approvals or sensitive actions that remain internal.</p></article><article><h3>Review ownership</h3><p>Name the manager who answers exceptions and checks early work.</p></article></div></div></section></main><Footer/></>;
}
