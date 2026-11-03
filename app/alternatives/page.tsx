import { Header, Footer } from '../components';
import { ContentListing } from '../content-listing';
import { getDocuments } from '../../lib/content';
export const metadata = { title: 'Alternatives', description: 'Honest comparisons of offshore staffing models, services, and providers.', alternates: { canonical: '/alternatives' } };
export default function Alternatives() { const documents = getDocuments('alternatives'); return <><Header/><main className="editorial-index-page"><section className="editorial-index-hero"><div className="container"><p className="eyebrow">Offshore staffing alternatives</p><h1>Compare the model before choosing a provider.</h1><p className="lead">Explore provider, role, service, and hiring-model alternatives with clear fit, tradeoffs, controls, and next steps.</p></div></section><section className="editorial-index-library"><div className="container"><ContentListing documents={documents} type="alternatives"/></div></section></main><Footer/></>; }
