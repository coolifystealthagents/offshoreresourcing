import { CTA, JsonLd } from './components';
import { EditorialToc } from './editorial-toc';
import { editorialText, headingId, isValidPublicDate, type ContentDocument } from '../lib/content';

const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

function inline(text: string) {
  const pieces = editorialText(text).split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return pieces.map((piece, index) => {
    const link = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a href={link[2]} key={index} rel={link[2].startsWith('http') ? 'noreferrer' : undefined}>{link[1]}</a>;
    if (piece.startsWith('**') && piece.endsWith('**')) return <strong key={index}>{piece.slice(2, -2)}</strong>;
    if (piece.startsWith('*') && piece.endsWith('*')) return <em key={index}>{piece.slice(1, -1)}</em>;
    if (piece.startsWith('`') && piece.endsWith('`')) return <code key={index}>{piece.slice(1, -1)}</code>;
    return piece;
  });
}

export function MarkdownBody({ body }: { body: string }) {
  const lines = body.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  const headingCounts = new Map<string, number>();
  const nextHeadingId = (text: string) => {
    const base = headingId(text);
    const count = (headingCounts.get(base) ?? 0) + 1;
    headingCounts.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const code: string[] = []; index++;
      while (index < lines.length && !lines[index].trim().startsWith('```')) code.push(lines[index++]);
      if (index < lines.length) index++;
      nodes.push(<pre key={index}><code data-language={language || undefined}>{code.join('\n')}</code></pre>); continue;
    }
    if (line.startsWith('### ')) {
      const text = editorialText(line.slice(4));
      nodes.push(<h3 id={nextHeadingId(text)} key={index}>{text}</h3>); index++; continue;
    }
    if (line.startsWith('## ')) {
      const text = editorialText(line.slice(3));
      nodes.push(<h2 id={nextHeadingId(text)} key={index}>{text}</h2>); index++; continue;
    }
    if (line.startsWith('# ')) {
      const text = editorialText(line.slice(2));
      nodes.push(<h2 className="markdown-intro-heading" id={nextHeadingId(text)} key={index}>{text}</h2>); index++; continue;
    }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.trim().startsWith('- ')) items.push(lines[index++].trim().slice(2));
      nodes.push(<ul key={index}>{items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{inline(item)}</li>)}</ul>); continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (/^\d+\.\s/.test(lines[index]?.trim() || '')) items.push(lines[index++].trim().replace(/^\d+\.\s*/, ''));
      nodes.push(<ol key={index}>{items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{inline(item)}</li>)}</ol>); continue;
    }
    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (lines[index]?.trim().startsWith('|')) rows.push(lines[index++].trim().slice(1, -1).split('|').map((cell) => cell.trim()));
      const filtered = rows.filter((row) => !row.every((cell) => /^:?-+:?$/.test(cell)));
      if (filtered.length) nodes.push(<div className="content-table-scroll" key={index} tabIndex={0} role="region" aria-label="Scrollable article table"><table><thead><tr>{filtered[0].map((cell, cellIndex) => <th key={`${cell}-${cellIndex}`}>{inline(cell)}</th>)}</tr></thead><tbody>{filtered.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>); continue;
    }
    nodes.push(<p key={index}>{inline(line)}</p>); index++;
  }
  return <div className="markdown-body">{nodes}</div>;
}

export function ContentArticle({ document, related, canonicalSlug = document.slug }: { document: ContentDocument; related: ContentDocument[]; canonicalSlug?: string }) {
  const base = 'https://offshoreresourcing.com';
  const section = document.type === 'research' ? 'Research' : 'Alternatives';
  const url = `${base}/${document.type}/${canonicalSlug}`;
  const hasPublished = isValidPublicDate(document.publishedAt);
  const hasVerified = isValidPublicDate(document.verifiedAt);
  const relatedItems = related.slice(0, 3);
  const tocItems = [
    ...document.headings,
    { id: 'practical-decision-framework', text: 'A practical decision framework', level: 2 as const },
    { id: 'related-editorial', text: `Related ${section}`, level: 2 as const },
    ...relatedItems.map((item) => ({ id: `related-${headingId(item.title)}`, text: item.title, level: 3 as const })),
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': document.type === 'research' ? 'TechArticle' : 'Article', headline: document.title, name: document.title, description: document.description, url, mainEntityOfPage: url, ...(hasPublished ? { datePublished: document.publishedAt } : {}), ...(hasVerified && document.verifiedAt !== document.publishedAt ? { dateModified: document.verifiedAt } : {}), image: { '@type': 'ImageObject', url: `${base}${document.image}`, width: document.imageWidth, height: document.imageHeight }, publisher: { '@type': 'Organization', name: 'Offshore Resourcing', url: base } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: section, item: `${base}/${document.type}` },
        { '@type': 'ListItem', position: 3, name: document.title, item: url },
      ] },
    ],
  };
  return <main className="section article-page editorial-page">
    <JsonLd data={schema} />
    <article className="container content-article">
      <header className="editorial-hero">
        <div className="editorial-hero-copy">
          <p className="eyebrow">{section}{hasPublished && <> · <time dateTime={document.publishedAt}>Published {formatPublicDate(document.publishedAt)}</time></>}{hasVerified && <> · Verified <time dateTime={document.verifiedAt}>{formatPublicDate(document.verifiedAt)}</time></>}</p>
          <h1>{document.title}</h1>
          <p className="lead">{document.description}</p>
          <div className="content-badges"><span>{document.category}</span>{document.type === 'research' && <span>{document.sourceCount} sources</span>}{document.alternativeType && <span>{editorialText(document.alternativeType)}</span>}</div>
        </div>
        <img className="content-hero" src={document.image} alt={`${document.title} editorial guide`} width={document.imageWidth} height={document.imageHeight} />
      </header>
      <div className="content-layout">
        <EditorialToc items={tocItems} family={section} />
        <div className="editorial-body">
          <MarkdownBody body={document.body} />
          <aside className="card content-testimonial"><h2 id="practical-decision-framework">A practical decision framework</h2><p>Use the evidence in this guide to define tasks, controls, and manager ownership before hiring begins.</p></aside>
          <section className="editorial-related" aria-labelledby="related-editorial"><h2 id="related-editorial">Related {section}</h2><div className="cards">{relatedItems.map((item) => <a className="card" href={`/${item.type}/${item.slug}`} key={item.slug}><h3 id={`related-${headingId(item.title)}`}>{item.title}</h3><p>{item.description}</p></a>)}</div></section>
        </div>
      </div>
    </article>
    <CTA />
  </main>;
}
