'use client';
import { useMemo, useState } from 'react';
import type { ContentDocument, ContentType } from '../lib/content';

export function ContentListing({ documents, type }: { documents: ContentDocument[]; type: ContentType }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(documents.map((document) => document.category)))];
  const filtered = useMemo(() => documents.filter((document) => (category === 'All' || document.category === category) && `${document.title} ${document.description}`.toLowerCase().includes(query.toLowerCase())), [documents, query, category]);
  return <>
    <div className="content-tools"><label>Search<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${type}`} /></label><label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    <p aria-live="polite">{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
    <div className="cards">{filtered.map((document) => <a className="card" href={`/${type}/${document.slug}`} key={document.slug}><p className="eyebrow">{document.category}</p><h2>{document.title}</h2><p>{document.description}</p><span>Verified {document.verifiedAt}{type === 'research' ? ` · ${document.sourceCount} sources` : ''}</span></a>)}</div>
  </>;
}
