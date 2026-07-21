import type { Metadata } from 'next';
import { Header, Footer, CTA } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://offshoreresourcing.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service?.title || 'Service';
  const description = service?.desc || 'Plan a clear offshore role with practical tasks, checks, and first-week steps.';
  const canonical = `${baseUrl}/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.brand,
      type: 'website',
    },
  };
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const canonical = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': `${canonical}#service` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: service.title,
        description: service.desc,
        url: canonical,
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: baseUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} offshore service team`} />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Good first tasks</h3>
              <ul>{service.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Checks to keep</h3>
              <ul>{service.controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>First week</h3>
              <ul>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
