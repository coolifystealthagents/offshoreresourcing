import { Footer, Header } from './components';

export default function NotFound() {
  return <><Header/><main className="commercial-page not-found-page"><section className="not-found-hero"><div className="commercial-shell not-found-grid"><div><p className="signal-label">Page not found</p><h1>This handoff reached the wrong queue.</h1><p className="hero-lead">The page may have moved or the address may be incomplete. Use one of these routes to continue.</p><div className="hero-actions"><a className="signal-button" href="/">Return home</a><a className="text-link" href="/services">Browse services</a><a className="text-link" href="/contact-us">Contact Us</a></div></div><img src="/images/thumbnail-backgrounds/role-scorecard.webp" width="1200" height="675" alt="Role planning scorecard with organized work lanes"/></div></section></main><Footer/></>;
}
