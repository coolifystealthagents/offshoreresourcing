import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return { title: p?.title || 'Guide', description: p?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const details = blogDetails[slug as keyof typeof blogDetails];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const articleUrl = `${siteUrl}/blog/${p.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: details?.sources?.map((source) => source.url),
      },
      ...(details?.faqs
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: details.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container article-wrap">
          <p className="eyebrow">{site.brand} guide · {p.minutes} min read</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.excerpt}</p>

          {details ? (
            <>
              <section className="card evidence-card">
                <h2>The short answer</h2>
                <p>
                  A good offshore provider call should leave you with a role plan, a quality owner, a
                  replacement rule, and clear access limits. If you only get a price and a start date,
                  you still have too much risk on your side.
                </p>
                <ul className="list">
                  {details.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {details.sections.map((section) => (
                <section className="article-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}

              <section className="card">
                <h2>Provider answer check</h2>
                <div className="comparison-table" role="table" aria-label="Provider answer check">
                  <div className="comparison-row comparison-head" role="row">
                    <span>Topic</span>
                    <span>Weak answer</span>
                    <span>Better answer</span>
                  </div>
                  {details.comparison.map((row) => (
                    <div className="comparison-row" role="row" key={row.topic}>
                      <span>{row.topic}</span>
                      <span>{row.weak}</span>
                      <span>{row.strong}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card script-card">
                <p className="eyebrow">Copy-ready question</p>
                <h2>Use this on the call</h2>
                <p className="quote">{details.quoteScript}</p>
              </section>

              <section className="article-section">
                <h2>Sources worth checking</h2>
                <ul className="source-list">
                  {details.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url}>{source.name}</a>
                      <span>{source.note}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card">
                <h2>FAQ</h2>
                {details.faqs.map((faq) => (
                  <div className="faq-item" key={faq.q}>
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </section>
            </>
          ) : (
            <div className="card">
              <h2>The short answer</h2>
              <p>
                Start with one role, a short task list, and a weekly scorecard. Do not outsource a
                messy process until examples and rules are clear.
              </p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
