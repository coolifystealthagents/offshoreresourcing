import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { commercialServices, serviceBySlug } from '../../commercial-data';

const base = 'https://offshoreresourcing.com';
export function generateStaticParams() { return commercialServices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = serviceBySlug[(await params).slug];
  if (!service) return { title: 'Service not found', robots: { index: false, follow: false } };
  const url = `${base}/services/${service.slug}`;
  const socialImage = { url: service.heroImage, width: 1200, height: 630, alt: service.heroAlt };
  return { title: service.title, description: service.description, alternates: { canonical: url }, openGraph: { title: service.title, description: service.description, url, type: 'website', images: [socialImage] }, twitter: { card: 'summary_large_image', title: service.title, description: service.description, images: [socialImage] } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = serviceBySlug[(await params).slug];
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const related = service.related.map(slug => serviceBySlug[slug]).filter(Boolean);
  const schema = {'@context':'https://schema.org','@graph':[{'@type':'WebPage','@id':`${url}#webpage`,name:service.title,url,publisher:{'@type':'Organization',name:'Offshore Resourcing',url:base},mainEntity:{'@id':`${url}#service`}},{'@type':'Service','@id':`${url}#service`,name:service.title,description:service.description,url,areaServed:'Worldwide',provider:{'@type':'Organization',name:'StealthAgents',url:'https://stealthagents.com/'}},{'@type':'FAQPage',mainEntity:service.faqs.map(faq=>({'@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}}))},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Services',item:`${base}/services`},{'@type':'ListItem',position:3,name:service.title,item:url}]}]};
  return <><Header/><main className="commercial-page service-guide"><JsonLd data={schema}/>
    <section className="service-guide-hero"><div className="commercial-shell service-guide-hero-grid"><div><p className="signal-label">Philippines based service guide</p><h1>{service.title}</h1><p className="hero-lead">{service.description}</p><p className="audience-note"><strong>Designed for:</strong> {service.audience}</p><a className="signal-button" href="/contact-us">Discuss this role</a></div><figure><img src={service.heroImage} width="1200" height="630" alt={service.heroAlt}/><figcaption>Document the source, owner, status, and next handoff.</figcaption></figure></div></section>
    <section className="commercial-section"><div className="commercial-shell guide-problem"><div><p className="section-kicker">The operating problem</p><h2>Make the work visible before adding capacity.</h2></div><p>{service.problem}</p></div></section>
    <section className="commercial-section tinted-section"><div className="commercial-shell guide-two-column"><div><p className="section-kicker">Scope</p><h2>Work this lane can support</h2><ul className="plain-checks">{service.scope.map(item=><li key={item}>{item}</li>)}</ul></div><div className="input-panel"><p className="section-kicker">Inputs</p><h2>What your team provides</h2><ul>{service.inputs.map(item=><li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="commercial-section aubergine-section"><div className="commercial-shell"><p className="section-kicker">Workflow</p><h2>Move one approved record at a time.</h2><div className="workflow-grid">{service.workflow.map(step=><article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>
    <section className="commercial-section"><div className="commercial-shell guide-two-column"><div><p className="section-kicker">Deliverables</p><h2>Visible outputs for review</h2><ul className="document-list">{service.deliverables.map(item=><li key={item}>{item}</li>)}</ul></div><div><p className="section-kicker">Boundaries</p><h2>Decisions that stay internal</h2><ul className="boundary-list">{service.boundaries.map(item=><li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="commercial-section teal-section"><div className="commercial-shell guide-two-column"><div><p className="section-kicker">Quality controls</p><h2>Checks before the handoff closes</h2><ul className="plain-checks">{service.qualityControls.map(item=><li key={item}>{item}</li>)}</ul></div><div><p className="section-kicker">Manager rhythm</p><h2>Review evidence, not activity alone.</h2><p>Sample completed records, inspect exceptions, confirm source accuracy, and update instructions when the same question repeats. Expand volume only after the lane is stable.</p></div></div></section>
    <section className="commercial-section"><div className="commercial-shell"><div className="section-heading"><p className="section-kicker">Concrete scenarios</p><h2>What the boundary looks like in practice.</h2></div><div className="scenario-grid">{service.scenarios.map(scenario=><article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.body}</p></article>)}</div></div></section>
    <section className="commercial-section faq-section"><div className="commercial-shell narrow-shell"><p className="section-kicker">Frequently asked questions</p><h2>Clarify the role before launch.</h2>{service.faqs.map(faq=><details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <section className="commercial-section related-section"><div className="commercial-shell"><p className="section-kicker">Related services</p><h2>Adjacent lanes to compare</h2><div className="related-grid">{related.map(item=><a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p></a>)}</div></div></section>
    <CTA/>
  </main><Footer/></>;
}
