import { CTA, JsonLd } from './components';
import type { ContentDocument } from '../lib/content';

function inline(text: string) {
  const pieces = text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);
  return pieces.map((piece, index) => {
    const link = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a href={link[2]} key={index} rel={link[2].startsWith('http') ? 'noreferrer' : undefined}>{link[1]}</a>;
    if (piece.startsWith('**') && piece.endsWith('**')) return <strong key={index}>{piece.slice(2, -2)}</strong>;
    if (piece.startsWith('`') && piece.endsWith('`')) return <code key={index}>{piece.slice(1, -1)}</code>;
    return piece;
  });
}

export function MarkdownBody({ body }: { body: string }) {
  const lines = body.split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      nodes.push(<h2 id={id} key={index}>{text}</h2>); index++; continue;
    }
    if (line.startsWith('### ')) { nodes.push(<h3 key={index}>{line.slice(4)}</h3>); index++; continue; }
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (lines[index]?.trim().startsWith('- ')) items.push(lines[index++].trim().slice(2));
      nodes.push(<ul key={index}>{items.map((item) => <li key={item}>{inline(item)}</li>)}</ul>); continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (/^\d+\.\s/.test(lines[index]?.trim() || '')) items.push(lines[index++].trim().replace(/^\d+\.\s*/, ''));
      nodes.push(<ol key={index}>{items.map((item) => <li key={item}>{inline(item)}</li>)}</ol>); continue;
    }
    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (lines[index]?.trim().startsWith('|')) rows.push(lines[index++].trim().slice(1, -1).split('|').map((cell) => cell.trim()));
      const filtered = rows.filter((row) => !row.every((cell) => /^:?-+:?$/.test(cell)));
      nodes.push(<div className="content-table-scroll" key={index} tabIndex={0}><table><thead><tr>{filtered[0].map((cell) => <th key={cell}>{inline(cell)}</th>)}</tr></thead><tbody>{filtered.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>); continue;
    }
    nodes.push(<p key={index}>{inline(line)}</p>); index++;
  }
  return <div className="markdown-body">{nodes}</div>;
}

export function ContentArticle({ document, related }: { document: ContentDocument; related: ContentDocument[] }) {
  const base = 'https://offshoreresourcing.com';
  const section = document.type === 'research' ? 'Research' : 'Alternatives';
  const url = `${base}/${document.type}/${document.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': document.type === 'research' ? 'Article' : 'ItemList', name: document.title, description: document.description, url, datePublished: document.publishedAt, dateModified: document.verifiedAt, image: `${base}${document.image}`, publisher: { '@type': 'Organization', name: 'Offshore Resourcing', url: base } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: section, item: `${base}/${document.type}` },
        { '@type': 'ListItem', position: 3, name: document.title, item: url },
      ] },
    ],
  };
  return <main className="section article-page">
    <JsonLd data={schema} />
    <article className="container content-article">
      <p className="eyebrow">{section} · verified {document.verifiedAt}</p>
      <h1>{document.title}</h1>
      <p className="lead">{document.description}</p>
      <div className="content-badges"><span>{document.category}</span>{document.type === 'research' && <span>{document.sourceCount} sources</span>}{document.alternativeType && <span>{document.alternativeType}</span>}</div>
      <img className="content-hero" src={document.image} alt={`${document.title} article thumbnail`} width="1200" height="630" />
      <div className="content-layout">
        <aside className="content-toc"><strong>On this page</strong><ol>{document.headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>)}</ol><a className="btn primary" href="/contact-us">Plan your offshore team</a></aside>
        <div><MarkdownBody body={document.body} /></div>
      </div>
      <aside className="card content-testimonial"><h2>A practical decision, not a generic list</h2><p>Offshore Resourcing helps teams define tasks, controls, and manager ownership before hiring begins.</p></aside>
      <section><h2>Related {section}</h2><div className="cards">{related.slice(0, 3).map((item) => <a className="card" href={`/${item.type}/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p></a>)}</div></section>
    </article>
    <CTA />
  </main>;
}
