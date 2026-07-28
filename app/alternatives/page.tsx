import { Header, Footer } from '../components';
import { ContentListing } from '../content-listing';
import { getDocuments } from '../../lib/content';
export const metadata = { title: 'Alternatives | Offshore Resourcing', description: 'Honest comparisons of offshore staffing models, services, and providers.' };
export default function Alternatives() { const documents = getDocuments('alternatives'); return <><Header/><main className="section"><div className="container"><p className="eyebrow">Offshore staffing alternatives</p><h1>Compare the model before choosing a provider.</h1><p className="lead">Explore provider, role, service, and hiring-model alternatives with clear fit, tradeoffs, controls, and next steps.</p><ContentListing documents={documents} type="alternatives"/></div></main><Footer/></>; }
