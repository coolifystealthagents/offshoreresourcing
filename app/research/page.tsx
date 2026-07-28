import { Header, Footer } from '../components';
import { ContentListing } from '../content-listing';
import { getDocuments } from '../../lib/content';
export const metadata = { title: 'Research | Offshore Resourcing', description: 'Sourced research for Philippines-based staffing decisions.' };
export default function Research() { const documents = getDocuments('research'); return <><Header/><main className="section"><div className="container"><p className="eyebrow">Philippines staffing research</p><h1>Evidence for better offshore staffing decisions.</h1><p className="lead">Review current benchmarks, costs, workforce context, and operating guidance with transparent sources and verification dates.</p><ContentListing documents={documents} type="research"/></div></main><Footer/></>; }
