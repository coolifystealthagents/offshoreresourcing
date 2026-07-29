import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, guideBasics, site } from '../../data';
import { defaultSocialImage } from '../../../lib/seo';

const base = `https://${String(site.domain).toLowerCase()}`;

type PublisherDetails = Extract<(typeof blogDetails)[keyof typeof blogDetails], { articleType: 'publisher' }>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Article not found' };
  const url = `${base}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article', images: [defaultSocialImage] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [defaultSocialImage] },
  };
}

function ArticleBanner({ banner, position }: { banner: PublisherDetails['banners'][number]; position: number }) {
  return <aside className={`article-banner banner-${position}`} data-article-banner={position}>
    <div>
      <p className="eyebrow">{banner.eyebrow}</p>
      <h2>{banner.title}</h2>
      <p>{banner.body}</p>
    </div>
    <a className="btn primary" href={banner.href}>{banner.label}</a>
  </aside>;
}

function WorkforceChart({ stats, chart }: { stats: PublisherDetails['stats']; chart: PublisherDetails['chart'] }) {
  return <figure className="article-visual chart-visual" data-visual="workforce-context-chart" tabIndex={0} aria-label={`${chart.title}. Scroll horizontally to read the full chart on a small screen.`}>
    <figcaption>
      <strong>{chart.title}</strong>
      <span>{chart.subtitle}</span>
    </figcaption>
    <p className="scroll-cue">Swipe sideways to see the full chart.</p>
    <svg viewBox="0 0 760 390" role="img" aria-labelledby="workforce-chart-title workforce-chart-desc">
      <title id="workforce-chart-title">{chart.title}</title>
      <desc id="workforce-chart-desc">{stats.map((stat) => `${stat.label}: ${stat.display} in ${stat.year}`).join('; ')}.</desc>
      <g className="chart-grid">
        {[0, 20, 40, 60, 80, 100].map((tick) => <g key={tick}>
          <line x1={190 + tick * 5} y1="46" x2={190 + tick * 5} y2="314" />
          <text x={190 + tick * 5} y="338" textAnchor="middle">{tick}%</text>
        </g>)}
      </g>
      {stats.map((stat, index) => {
        const y = 72 + index * 88;
        return <g className="chart-row" key={stat.label}>
          <text x="176" y={y + 20} textAnchor="end">{stat.label}</text>
          <rect x="190" y={y} width={stat.value * 5} height="34" rx="8" />
          <text className="chart-value" x={205 + stat.value * 5} y={y + 23}>{stat.display} ({stat.year})</text>
        </g>;
      })}
    </svg>
    <p className="method-note">{chart.methodNote}</p>
  </figure>;
}

function QueueGraphic({ graphic }: { graphic: PublisherDetails['queueGraphic'] }) {
  const steps = graphic.steps.map((step, index) => ({ ...step, x: 34 + index * 176 }));
  return <figure className="article-visual queue-visual" data-visual="coordinator-queue-graphic" tabIndex={0} aria-label={`${graphic.title}. Scroll horizontally to read the full graphic on a small screen.`}>
    <figcaption>
      <strong>{graphic.title}</strong>
      <span>{graphic.subtitle}</span>
    </figcaption>
    <p className="scroll-cue">Swipe sideways to see the full handoff graphic.</p>
    <svg viewBox="0 0 760 250" role="img" aria-labelledby="queue-title queue-desc">
      <title id="queue-title">{graphic.title}</title>
      <desc id="queue-desc">{graphic.description}</desc>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 Z" /></marker>
      </defs>
      {steps.slice(0, -1).map((step, index) => <line className="queue-arrow" key={step.label} x1={step.x + 142} y1="116" x2={steps[index + 1].x - 10} y2="116" markerEnd="url(#arrowhead)" />)}
      {steps.map((step, index) => <g className="queue-step" key={step.label}>
        <rect x={step.x} y="62" width="142" height="108" rx="18" />
        <circle cx={step.x + 23} cy="84" r="13" />
        <text className="queue-number" x={step.x + 23} y="89" textAnchor="middle">{index + 1}</text>
        <text className="queue-label" x={step.x + 16} y="124">{step.label}</text>
        <text className="queue-note" x={step.x + 16} y="148">{step.note}</text>
      </g>)}
      <text className="queue-owner" x="380" y="215" textAnchor="middle">{graphic.ownerNote}</text>
    </svg>
    <p className="method-note">{graphic.methodNote}</p>
  </figure>;
}

function RelatedCards({ items }: { items: ReadonlyArray<{ label: string; href: string; description?: string }> }) {
  const cards = items.slice(0, 3);
  return <section className="card article-related-module" aria-labelledby="article-related-heading">
    <h2 id="article-related-heading">Related content</h2>
    <div className="article-related-grid">
      {cards.map((item) => <a className="card article-related-card" href={item.href} key={item.href}>
        <h3>{item.label}</h3>
        <p>{item.description || item.label}</p>
      </a>)}
    </div>
  </section>;
}

function PublisherArticle({ details }: { details: PublisherDetails }) {
  return <>
    <section className="card evidence-card">
      <h2>The short answer</h2>
      {details.shortAnswer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <h3>Keep these four points</h3>
      <ul>{details.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>

    <ArticleBanner banner={details.banners[0]} position={1} />

    <section className="article-section">
      <h2>{details.sections[0].heading}</h2>
      {details.sections[0].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>
    <section className="article-section">
      <h2>{details.sections[1].heading}</h2>
      {details.sections[1].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <WorkforceChart stats={details.stats} chart={details.chart} />
    <ArticleBanner banner={details.banners[1]} position={2} />

    <section className="article-section">
      <h2>{details.sections[2].heading}</h2>
      {details.sections[2].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="card role-table-card">
      <h2>{details.table.title}</h2>
      <p>{details.table.intro}</p>
      <p className="scroll-cue">Swipe sideways to see every table column.</p>
      <div className="role-table-scroll" tabIndex={0} aria-label="Talent role responsibility table. Scroll horizontally on a small screen.">
        <table className="role-table">
          <caption>{details.table.caption}</caption>
          <thead><tr><th>Stage</th><th>Specialist handles</th><th>Manager owns</th><th>Proof to check</th></tr></thead>
          <tbody>{details.roleTable.map((row) => <tr key={row.stage}>
            <th scope="row">{row.stage}</th><td>{row.coordinator}</td><td>{row.manager}</td><td>{row.proof}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </section>

    <section className="article-section">
      <h2>{details.sections[3].heading}</h2>
      {details.sections[3].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>
    <section className="article-section">
      <h2>{details.sections[4].heading}</h2>
      {details.sections[4].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <QueueGraphic graphic={details.queueGraphic} />
    <ArticleBanner banner={details.banners[2]} position={3} />

    <section className="article-section">
      <h2>{details.sections[5].heading}</h2>
      {details.sections[5].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <p>{details.relatedLinks.intro}</p>
    </section>
    <RelatedCards items={details.relatedLinks.items} />
    <section className="article-section">
      <h2>{details.sections[6].heading}</h2>
      {details.sections[6].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <figure className="expert-quote">
      <blockquote>“{details.expertQuote.text}”</blockquote>
      <figcaption>
        <strong>{details.expertQuote.person}</strong>, {details.expertQuote.title}.{' '}
        <a href={details.expertQuote.url} rel="noreferrer">{details.expertQuote.sourceName}</a>
      </figcaption>
    </figure>

    <section className="article-section">
      <h2>{details.sections[7].heading}</h2>
      {details.sections[7].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="article-section numbered-sources">
      <h2>Sources</h2>
      <ol>{details.sources.map((source) => <li key={source.url}>
        <a href={source.url} rel="noreferrer">{source.name}</a>
        <span>{source.note}</span>
      </li>)}</ol>
    </section>

    <section className="card faq-card">
      <h2>Questions buyers ask</h2>
      {details.faqs.map((faq) => <div className="faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
    </section>
  </>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const details = blogDetails[slug as keyof typeof blogDetails];
  const publisherDetails = details && 'articleType' in details && details.articleType === 'publisher' ? details : null;
  const legacyDetails = details && 'comparison' in details ? details : null;
  const basics = guideBasics[slug as keyof typeof guideBasics];
  const url = `${base}/blog/${post.slug}`;
  const sources = details?.sources ?? [];
  const faqs = details?.faqs ?? [];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        publisher: { '@type': 'Organization', name: site.brand, url: base },
        citation: sources.map((source) => source.url),
      },
      ...(details ? [{
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main className="section article-page">
      <JsonLd data={schema} />
      <article className="container article-wrap">
        <p className="eyebrow">Philippines staffing guide · {post.minutes} min read</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>

        {publisherDetails ? <PublisherArticle details={publisherDetails} /> : legacyDetails ? <>
          <section className="card evidence-card">
            <h2>The short answer</h2>
            <p>A useful provider call should end with a role plan, a quality owner, a replacement rule, and clear account limits. A start date alone is not enough to protect the work.</p>
            <ul>{legacyDetails.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          {legacyDetails.sections.map((section) => <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>)}

          <section className="card">
            <h2>Provider answer check</h2>
            <div className="comparison-table" role="table" aria-label="Weak and useful provider answers">
              <div className="comparison-row comparison-head" role="row"><span>Topic</span><span>Weak answer</span><span>Useful answer</span></div>
              {legacyDetails.comparison.map((row) => <div className="comparison-row" role="row" key={row.topic}>
                <strong>{row.topic}</strong><span>{row.weak}</span><span>{row.strong}</span>
              </div>)}
            </div>
          </section>

          <section className="card script-card">
            <p className="eyebrow">Copy-ready question</p>
            <h2>Use this on the provider call</h2>
            <blockquote>{legacyDetails.quoteScript}</blockquote>
          </section>

          <section className="article-section">
            <h2>Sources worth checking</h2>
            <ul className="source-list">{legacyDetails.sources.map((source) => <li key={source.url}>
              <a href={source.url} rel="noreferrer">{source.name}</a><span>{source.note}</span>
            </li>)}</ul>
          </section>

          <section className="card faq-card">
            <h2>Questions buyers ask</h2>
            {legacyDetails.faqs.map((faq) => <div className="faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
          </section>
        </> : basics ? <div className="card fallback-guide">
          <h2>The short answer</h2><p>{basics.answer}</p>
          <h2>What to prepare</h2><ul>{basics.prepare.map((item) => <li key={item}>{item}</li>)}</ul>
          <h2>Check these points</h2><ul>{basics.checks.map((item) => <li key={item}>{item}</li>)}</ul>
        </div> : <div className="card fallback-guide">
          <h2>Start with a defined role</h2><p>Write the recurring tasks, examples, tools, and approval boundaries before a Filipino specialist begins. This gives the role owner a practical basis for review.</p>
          <h2>Review the workload</h2><p>Check completed work and open questions each week. Update the role notes when the process changes.</p>
        </div>}
      </article>
      {!publisherDetails && <CTA />}
    </main>
    <Footer />
  </>;
}
