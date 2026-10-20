'use client';
import { useMemo, useState } from 'react';
import type { ContentDocument, ContentType } from '../lib/content';

const editorialText = (value: string) => value.replace(/[—–]/g, ' - ').replace(/--+/g, ' - ');
const isValidPublicDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function ContentListing({ documents, type }: { documents: ContentDocument[]; type: ContentType }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(documents.map((document) => document.category)))];
  const filtered = useMemo(() => documents.filter((document) => (category === 'All' || document.category === category) && `${document.title} ${document.description}`.toLowerCase().includes(query.toLowerCase())), [documents, query, category]);
  return <>
    <div className="content-tools"><label>Search<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${type}`} /></label><label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    <p aria-live="polite">{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
    {filtered.length ? <div className="cards editorial-listing-grid">{filtered.map((document) => <a className="card editorial-listing-card" href={`/${type}/${document.slug}`} key={document.slug}><p className="eyebrow">{editorialText(document.category)}</p><h2>{document.title}</h2><p>{document.description}</p><span>{isValidPublicDate(document.verifiedAt) ? `Verified ${formatDate(document.verifiedAt)}` : 'Editorial guide'}{type === 'research' ? ` · ${document.sourceCount} sources` : ''}</span></a>)}</div> : <div className="card editorial-empty" role="status"><h2>No matching guides</h2><p>Try a broader search or choose a different category.</p><button className="btn secondary" type="button" onClick={() => { setQuery(''); setCategory('All'); }}>Clear filters</button></div>}
  </>;
}
