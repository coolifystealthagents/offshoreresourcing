import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { serviceDetails, services, site } from '../../data';
import { defaultSocialImage } from '../../../lib/seo';

const base = `https://${String(site.domain).toLowerCase()}`;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };
  const url = `${base}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.desc, url, type: 'website', images: [defaultSocialImage] },
    twitter: { card: 'summary_large_image', title: service.title, description: service.desc, images: [defaultSocialImage] },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const details = serviceDetails[slug as keyof typeof serviceDetails];
  const url = `${base}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: service.title,
        description: service.desc,
        url,
        mainEntity: { '@id': `${url}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: details?.summary ?? service.desc,
        url,
        serviceOutput: 'Staffing support delivered by talent recruited and hired only in the Philippines',
        ...(details ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Workforce planning tasks',
            itemListElement: details.bestTasks.map((task) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: task } })),
          },
          hasPart: { '@id': `${url}#first-week` },
        } : {}),
      },
      ...(details ? [
        {
          '@type': 'HowTo',
          '@id': `${url}#first-week`,
          name: `How to start ${service.title.toLowerCase()}`,
          step: details.firstWeek.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.body })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: details.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
        },
      ] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main>
      <JsonLd data={schema} />
      <section className="service-hero">
        <div className="container two">
          <div>
            <p className="eyebrow">Philippines-based service</p>
            <h1>{service.title}</h1>
            <p className="lead">{details?.summary ?? service.desc}</p>
            <a className="btn primary" href="/contact">Discuss this role</a>
          </div>
          <div className="support-strip">
            <h2>Built for a clear handoff</h2>
            <p>Filipino specialists work from your examples, system permissions, and approval rules. Your team keeps ownership of exceptions and final decisions.</p>
            <ul><li>Documented recurring tasks</li><li>Named quality reviewer</li><li>Defined escalation path</li><li>Weekly workload review</li></ul>
          </div>
        </div>
      </section>

      {details ? <>
        <section className="section service-detail-section">
          <div className="container service-detail-grid">
            <div>
              <p className="eyebrow">Good work to hand over</p>
              <h2>Planning support built around approved records</h2>
              <ul className="service-check-list">{details.bestTasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <aside className="service-control-card">
              <p className="eyebrow">Manager controls</p>
              <h2>Decisions that stay with your team</h2>
              <ul>{details.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </aside>
          </div>
        </section>

        <section className="section service-launch-section" id="first-week">
          <div className="container">
            <p className="eyebrow">First-week plan</p>
            <h2>Start with one draft before adding more work</h2>
            <div className="service-step-grid">{details.firstWeek.map((step, index) => <article key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.body}</p>
            </article>)}</div>
          </div>
        </section>

        <section className="section service-faq-section">
          <div className="container service-faq-wrap">
            <p className="eyebrow">Workforce planning questions</p>
            <h2>Know the boundary before the role starts</h2>
            {details.faqs.map((faq) => <article key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></article>)}
          </div>
        </section>
      </> : <section className="section"><div className="container cards">
        <article className="card"><h2>Role scope</h2><p>The Filipino specialist receives a written task list, schedule, and expected outputs.</p></article>
        <article className="card"><h2>Access plan</h2><p>Permissions begin with the systems needed for approved Philippines-based work.</p></article>
        <article className="card"><h2>Review rhythm</h2><p>Samples, open questions, and exceptions stay visible to the role owner.</p></article>
      </div></section>}
      <CTA />
    </main>
    <Footer />
  </>;
}
