import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from './components';
import { EditorialToc, type TocItem } from './editorial-toc';
import { editorialText, headingId, resolveContentImage } from '../lib/content';
import meta from './aug19-meta.json';

const SITE = 'https://offshoreresourcing.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };
type Block = { kind: 'heading' | 'list' | 'paragraph'; text?: string; items?: string[]; id?: string };

function item(slug: string): Item {
  return (meta as Record<string, Item>)[slug];
}

function source(family: Family, slug: string) {
  const file = path.join(process.cwd(), 'content', family, `${slug}.md`);
  const raw = fs.readFileSync(file, 'utf8');
  return raw
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^#[^\n]+\n+/, '')
    .replace(/^\*August 19, 2026\*\s*/, '');
}

function articleModel(family: Family, slug: string) {
  const counts = new Map<string, number>();
  const uniqueId = (text: string) => {
    const base = headingId(text);
    const count = (counts.get(base) ?? 0) + 1;
    counts.set(base, count);
    return count === 1 ? base : `${base}-${count}`;
  };
  const blocks: Block[] = source(family, slug).split(/\n\n+/).filter(Boolean).map((part) => {
    if (part.startsWith('## ')) {
      const text = editorialText(part.slice(3).trim());
      return { kind: 'heading', text, id: uniqueId(text) };
    }
    if (part.startsWith('- ')) {
      return { kind: 'list', items: part.split('\n').map((line) => editorialText(line.replace(/^- /, '').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1: $2'))) };
    }
    return { kind: 'paragraph', text: editorialText(part.trim()) };
  });
  const toc = blocks.filter((block) => block.kind === 'heading').map((block) => ({ id: block.id!, text: block.text!, level: 2 as const }));
  return { blocks, toc };
}

export function getAug19Metadata(family: Family, slug: string): Metadata {
  const record = item(slug);
  const image = resolveContentImage(record.hero, family === 'research' ? 'research' : 'alternatives');
  const url = `${SITE}/${family}/${slug}`;
  return {
    title: editorialText(record.title),
    description: editorialText(record.description),
    alternates: { canonical: url },
    openGraph: { title: editorialText(record.title), description: editorialText(record.description), url, type: 'article', images: [{ url: `${SITE}${image.src}`, width: image.width, height: image.height, alt: `${editorialText(record.title)} editorial guide` }] },
    twitter: { card: 'summary_large_image', title: editorialText(record.title), description: editorialText(record.description), images: [`${SITE}${image.src}`] },
  };
}

export function renderAug19Article(family: Family, slug: string) {
  const record = item(slug);
  const image = resolveContentImage(record.hero, family === 'research' ? 'research' : 'alternatives');
  const model = articleModel(family, slug);
  const section = family === 'research' ? 'Research' : 'Blog';
  const url = `${SITE}/${family}/${slug}`;
  const relatedId = `related-${family}`;
  const toc: TocItem[] = [...model.toc, { id: relatedId, text: `Continue with ${section}`, level: 2 }];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': family === 'research' ? 'TechArticle' : 'Article', headline: editorialText(record.title), description: editorialText(record.description), datePublished: '2026-08-19', dateModified: '2026-08-19', mainEntityOfPage: url, url, image: { '@type': 'ImageObject', url: `${SITE}${image.src}`, width: image.width, height: image.height }, publisher: { '@type': 'Organization', name: 'Offshore Resourcing', url: SITE } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }, { '@type': 'ListItem', position: 2, name: section, item: `${SITE}/${family}` }, { '@type': 'ListItem', position: 3, name: editorialText(record.title), item: url }] },
    ],
  };
  return <>
    <Header />
    <main className="section article-page editorial-page">
      <JsonLd data={schema} />
      <article className="container content-article">
        <header className="editorial-hero">
          <div className="editorial-hero-copy">
            <p className="eyebrow">{section} · <time dateTime="2026-08-19">August 19, 2026</time></p>
            <h1>{editorialText(record.title)}</h1>
            <p className="lead">{editorialText(record.description)}</p>
          </div>
          <img className="content-hero" src={image.src} alt={`${editorialText(record.title)} editorial guide`} width={image.width} height={image.height} />
        </header>
        <div className="content-layout">
          <EditorialToc items={toc} family={section} />
          <div className="editorial-body article-body">
            {model.blocks.map((block, index) => {
              if (block.kind === 'heading') return <h2 id={block.id} key={`${block.id}-${index}`}>{block.text}</h2>;
              if (block.kind === 'list') return <ul key={index}>{block.items!.map((entry) => <li key={entry}>{entry}</li>)}</ul>;
              return <p key={index}>{block.text}</p>;
            })}
            <section className="card content-testimonial" aria-labelledby={relatedId}>
              <h2 id={relatedId}>Continue with {section}</h2>
              <p>Use the related library to compare role boundaries, evidence requirements, manager controls, and handoff risks before hiring.</p>
              <a className="text-link" href={`/${family}`}>Browse all {section.toLowerCase()}</a>
            </section>
          </div>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
  </>;
}
