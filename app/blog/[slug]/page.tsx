import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, guideBasics, site } from '../../data';

const base = `https://${String(site.domain).toLowerCase()}`;

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
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article' },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const details = blogDetails[slug as keyof typeof blogDetails];
  const basics = guideBasics[slug as keyof typeof guideBasics];
  const url = `${base}/blog/${post.slug}`;
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
        citation: details?.sources.map((source) => source.url),
      },
      ...(details ? [{
        '@type': 'FAQPage',
        mainEntity: details.faqs.map((faq) => ({
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

        {details ? <>
          <section className="card evidence-card">
            <h2>The short answer</h2>
            <p>A useful provider call should end with a role plan, a quality owner, a replacement rule, and clear account limits. A price and start date are not enough to protect the work.</p>
            <ul>{details.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          {details.sections.map((section) => <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>)}

          <section className="card">
            <h2>Provider answer check</h2>
            <div className="comparison-table" role="table" aria-label="Weak and useful provider answers">
              <div className="comparison-row comparison-head" role="row"><span>Topic</span><span>Weak answer</span><span>Useful answer</span></div>
              {details.comparison.map((row) => <div className="comparison-row" role="row" key={row.topic}>
                <strong>{row.topic}</strong><span>{row.weak}</span><span>{row.strong}</span>
              </div>)}
            </div>
          </section>

          <section className="card script-card">
            <p className="eyebrow">Copy-ready question</p>
            <h2>Use this on the provider call</h2>
            <blockquote>{details.quoteScript}</blockquote>
          </section>

          <section className="article-section">
            <h2>Sources worth checking</h2>
            <ul className="source-list">{details.sources.map((source) => <li key={source.url}>
              <a href={source.url} rel="noreferrer">{source.name}</a><span>{source.note}</span>
            </li>)}</ul>
          </section>

          <section className="card faq-card">
            <h2>Questions buyers ask</h2>
            {details.faqs.map((faq) => <div className="faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
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
      <CTA />
    </main>
    <Footer />
  </>;
}
