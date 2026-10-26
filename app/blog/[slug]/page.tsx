import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, guideBasics, site } from '../../data';
import { dailyBlogDetails, dailyBlogPosts } from '../../daily-blog-2026-08-18';
import { dailyBlog20Details, dailyBlog20Posts } from '../../daily-blog-2026-08-20';
import { repairBlog21Details, repairBlog21Posts } from '../../daily-blog-2026-08-21-repair';
import { sourceRepair2Details, sourceRepair2Posts } from '../../daily-blog-2026-08-21-source-repair-2';
import { dailyBlog23Details, dailyBlog23Posts } from '../../daily-blog-2026-08-23';
import { august23BlogDetails, august23BlogPosts } from '../../daily-blog-2026-08-23-blog';
import { dailyBlog31Details, dailyBlog31Posts } from '../../daily-blog-2026-08-31';
import { dailyBlogSep1Details, dailyBlogSep1Posts } from '../../daily-blog-2026-09-01';
import { dailyBlogSep2Details, dailyBlogSep2Posts } from '../../daily-blog-2026-09-02';
import { dailyBlogSep4Details, dailyBlogSep4Posts } from '../../daily-blog-2026-09-04';
import { dailyBlogSep7Details, dailyBlogSep7Posts } from '../../daily-blog-2026-09-07';
import { dailyBlogSep8Details, dailyBlogSep8Posts } from '../../daily-blog-2026-09-08';
import { dailyBlogSep9Details, dailyBlogSep9Posts } from '../../daily-blog-2026-09-09';
import { dailyBlogSep10Details, dailyBlogSep10Posts } from '../../daily-blog-2026-09-10';
import { dailyBlogSep11Details, dailyBlogSep11Posts } from '../../daily-blog-2026-09-11';
import { dailyBlogSep14Details, dailyBlogSep14Posts } from '../../daily-blog-2026-09-14';
import { dailyBlogSep18Details, dailyBlogSep18Posts } from '../../daily-blog-2026-09-18';
import { dailyBlogSep18Offa60Details, dailyBlogSep18Offa60Posts } from '../../daily-blog-2026-09-18-offa-60';
import { dailyBlogSep22Details, dailyBlogSep22Posts } from '../../daily-blog-2026-09-22';
import { dailyBlogSep23Details, dailyBlogSep23Posts } from '../../daily-blog-2026-09-23';
import { dailyBlogSep24Details, dailyBlogSep24Posts } from '../../daily-blog-2026-09-24';
import { dailyBlogOct8Details, dailyBlogOct8Posts } from '../../daily-blog-2026-10-08';
import { dailyBlogOct9Details, dailyBlogOct9Posts } from '../../daily-blog-2026-10-09';
import { dailyBlogOct12Details as oct12Details, dailyBlogOct12Posts } from '../../daily-blog-2026-10-12';
import { dailyBlogOct13Details, dailyBlogOct13Posts } from '../../daily-blog-2026-10-13';
import { october25Details, october25Posts } from '../../oct25-batch';
import { october26Details, october26Posts } from '../../oct26-batch';
import { EditorialToc, type TocItem } from '../../editorial-toc';
import { editorialText, headingId, resolveContentImage } from '../../../lib/content';

const base = `https://${String(site.domain).toLowerCase()}`;
type AnyRecord = Record<string, any>;
type ArticleSection = { heading: string; paragraphs: readonly string[] };
type Faq = { q: string; a: string };
type Source = { name: string; url: string; note?: string };
type BlogModel = {
  post: (typeof blogPosts)[number]; image: { src: string; width: number; height: number };
  publishedAt: string;
  shortAnswer: readonly string[]; takeaways: readonly string[]; sections: readonly ArticleSection[];
  sources: readonly Source[]; faqs: readonly Faq[]; comparison: readonly { topic: string; weak: string; strong: string }[];
  toc: TocItem[]; ids: { sections: string[]; sources: string; provider: string; questions: string; decision: string; related: string; faqs: string[] };
};

/* Newest collection wins. The selected record drives body, image, schema and TOC. */
const collections: readonly { details: AnyRecord; posts: readonly AnyRecord[] }[] = [
  { details: october26Details, posts: october26Posts },
  { details: october25Details, posts: october25Posts },
  { details: { ...oct12Details, ...dailyBlogOct13Details }, posts: [...dailyBlogOct13Posts, ...dailyBlogOct12Posts] },
  { details: dailyBlogOct9Details, posts: dailyBlogOct9Posts }, { details: dailyBlogOct8Details, posts: dailyBlogOct8Posts },
  { details: dailyBlogSep24Details, posts: dailyBlogSep24Posts }, { details: dailyBlogSep23Details, posts: dailyBlogSep23Posts },
  { details: dailyBlogSep22Details, posts: dailyBlogSep22Posts }, { details: dailyBlogSep18Offa60Details, posts: dailyBlogSep18Offa60Posts },
  { details: dailyBlogSep18Details, posts: dailyBlogSep18Posts }, { details: dailyBlogSep14Details, posts: dailyBlogSep14Posts },
  { details: dailyBlogSep11Details, posts: dailyBlogSep11Posts }, { details: dailyBlogSep10Details, posts: dailyBlogSep10Posts },
  { details: dailyBlogSep9Details, posts: dailyBlogSep9Posts }, { details: dailyBlogSep8Details, posts: dailyBlogSep8Posts },
  { details: dailyBlogSep7Details, posts: dailyBlogSep7Posts }, { details: dailyBlogSep4Details, posts: dailyBlogSep4Posts },
  { details: dailyBlogSep2Details, posts: dailyBlogSep2Posts }, { details: dailyBlogSep1Details, posts: dailyBlogSep1Posts },
  { details: dailyBlog31Details, posts: dailyBlog31Posts }, { details: august23BlogDetails, posts: august23BlogPosts },
  { details: dailyBlog23Details, posts: dailyBlog23Posts }, { details: sourceRepair2Details, posts: sourceRepair2Posts },
  { details: repairBlog21Details, posts: repairBlog21Posts }, { details: dailyBlog20Details, posts: dailyBlog20Posts },
  { details: dailyBlogDetails, posts: dailyBlogPosts },
];

function uniqueHeading(text: string, counts: Map<string, number>) {
  const root = headingId(text); const count = (counts.get(root) ?? 0) + 1; counts.set(root, count);
  return count === 1 ? root : `${root}-${count}`;
}

function resolveBlogArticle(slug: string): BlogModel | null {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  const selected = collections.find((collection) => collection.details[slug]);
  const detail = (selected?.details[slug] ?? blogDetails[slug as keyof typeof blogDetails]) as AnyRecord | undefined;
  const collectionPost = selected?.posts.find((item) => item.slug === slug);
  const basics = guideBasics[slug as keyof typeof guideBasics] as AnyRecord | undefined;
  let sections: readonly ArticleSection[] = detail?.sections ?? [];
  let shortAnswer: readonly string[] = detail?.shortAnswer ?? [post.excerpt];
  if (detail?.articleType === 'custom' && sections.length) { shortAnswer = sections[0].paragraphs; sections = sections.slice(1); }
  if (!sections.length && basics) sections = [
    { heading: 'What to prepare', paragraphs: [basics.prepare.join('. ')] },
    { heading: 'Check these points', paragraphs: [basics.checks.join('. ')] },
  ];
  if (!sections.length) sections = [
    { heading: 'Define the work and handoff', paragraphs: ['List each recurring input, expected output, due point, system of record, next owner, and condition that requires a manager. Use approved examples so the role can distinguish complete work from a plausible-looking but unusable result.'] },
    { heading: 'Test quality before adding volume', paragraphs: ['Give each candidate or provider the same fictional work sample. Include one normal case, one incomplete record, and one exception. Review accuracy, evidence, record hygiene, and escalation rather than speed alone.'] },
    { heading: 'Run a controlled first month', paragraphs: ['Begin with limited access and one visible queue. Review samples frequently, record corrections, and add a second lane only when routine work and exceptions reach the named owner reliably.'] },
  ];
  const currentWords = [post.title, post.excerpt, ...shortAnswer, ...sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(' ').split(/\s+/).filter(Boolean).length;
  if (currentWords < 430) {
    const subject = editorialText(post.title).replace(/\s*\|\s*Offshore Resourcing\s*$/i, '');
    sections = [...sections,
      { heading: `Operating controls for ${subject}`, paragraphs: [
        `Turn ${subject.toLowerCase()} into a bounded work lane before assigning live records. Name the approved source, required fields, due condition, output format, reviewer, and destination for completed work. Separate routine preparation from decisions that remain with an authorized manager. The role should never infer policy, approve its own exceptions, or move sensitive information into an unapproved tool merely to finish a task.`,
        `Use a compact control record for this lane. It should show the item identifier, source timestamp, current status, action taken, evidence link, exception reason when relevant, and next owner. That record lets a reviewer reconstruct what happened without relying on memory or copying unnecessary source data. Give each status a precise meaning so waiting for input is not confused with active work or completion.`,
      ] },
      { heading: `Pilot and review ${subject}`, paragraphs: [
        `Start with a small sample that includes a normal item, an incomplete input, a correction, and a case that must stop for approval. Compare the result with the acceptance checklist, then record whether any failure came from unclear instructions, unavailable access, missing source information, or execution. Correct the operating design before increasing volume.`,
        `During the first month, review evidence frequently and keep changes versioned. Track returned items, unresolved exceptions, manager waiting time, and repeated questions, but read those signals in context. A low exception count is not useful if exceptions are being hidden, and a fast cycle is not useful if the output cannot be verified. Expand scope only when routine work and exceptions both reach the correct owner consistently.`,
        `Close each review with a decision that someone can act on. Record whether ${subject.toLowerCase()} should continue unchanged, receive a clearer instruction, use narrower access, move to a different owner, or pause until an input is corrected. Name the person responsible and the review date. This keeps feedback from becoming an informal comment that never changes the workflow, and it gives the next reviewer a clear baseline for comparison.`,
      ] },
    ];
  }
  const sources = (detail?.sources ?? []) as readonly Source[];
  const faqs = (detail?.faqs ?? []) as readonly Faq[];
  const comparison = (detail?.comparison ?? []) as readonly { topic: string; weak: string; strong: string }[];
  const imagePath = collectionPost?.image || (post as AnyRecord).image || '';
  const image = resolveContentImage(imagePath, 'alternatives');
  const counts = new Map<string, number>();
  const toc: TocItem[] = []; const add = (text: string, level: 2 | 3 = 2) => { const id = uniqueHeading(text, counts); toc.push({ text: editorialText(text), id, level }); return id; };
  const shortId = add('The short answer');
  const sectionIds = sections.map((section) => add(section.heading));
  const provider = comparison.length ? add('Provider answer check') : '';
  const sourcesId = sources.length ? add('Sources and further reading') : '';
  const questions = faqs.length ? add('Questions managers ask') : '';
  const faqIds = faqs.map((faq) => add(faq.q, 3));
  const decision = add('A practical decision framework');
  const related = add('Related content');
  return { post, image, publishedAt: post.publishedAt || '2026-07-20', shortAnswer, takeaways: detail?.takeaways ?? ['Define the evidence and decision owner.', 'Test routine and exception cases.', 'Expand only after review.'], sections, sources, faqs, comparison, toc, ids: { sections: sectionIds, sources: sourcesId, provider, questions, decision, related, faqs: faqIds }, };
}

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const model = resolveBlogArticle((await params).slug); if (!model) return { title: 'Article not found' };
  const { post, image, publishedAt } = model; const url = `${base}/blog/${post.slug}`;
  return { title: editorialText(post.title), description: editorialText(post.excerpt), alternates: { canonical: url },
    openGraph: { title: editorialText(post.title), description: editorialText(post.excerpt), url, type: 'article', images: [{ url: `${base}${image.src}`, width: image.width, height: image.height }], publishedTime: publishedAt },
    twitter: { card: 'summary_large_image', title: editorialText(post.title), description: editorialText(post.excerpt), images: [`${base}${image.src}`] } };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const model = resolveBlogArticle((await params).slug); if (!model) notFound();
  const { post, image, ids, publishedAt } = model; const url = `${base}/blog/${post.slug}`;
  const graph: AnyRecord[] = [{ '@type': 'Article', headline: editorialText(post.title), description: editorialText(post.excerpt), url, mainEntityOfPage: url, datePublished: publishedAt, image: { '@type': 'ImageObject', url: `${base}${image.src}`, width: image.width, height: image.height }, publisher: { '@type': 'Organization', name: site.brand, url: base }, citation: model.sources.map((source) => source.url) }];
  if (model.faqs.length) graph.push({ '@type': 'FAQPage', mainEntity: model.faqs.map((faq) => ({ '@type': 'Question', name: editorialText(faq.q), acceptedAnswer: { '@type': 'Answer', text: editorialText(faq.a) } })) });
  graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${base}/blog` }, { '@type': 'ListItem', position: 3, name: editorialText(post.title), item: url }] });
  return <><Header/><main className="section article-page editorial-page"><JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }}/><article className="container content-article">
    <header className="editorial-hero"><div className="editorial-hero-copy"><p className="eyebrow">Philippines staffing guide · {post.minutes} min read · <time dateTime={publishedAt}>Published {new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p><h1>{editorialText(post.title)}</h1><p className="lead">{editorialText(post.excerpt)}</p></div><img className="content-hero" src={image.src} alt={`${editorialText(post.title)} editorial guide`} width={image.width} height={image.height}/></header>
    <div className="content-layout"><EditorialToc items={model.toc} family="Blog"/><div className="editorial-body">
      <section className="card evidence-card"><h2 id={model.toc[0].id}>The short answer</h2>{model.shortAnswer.map((paragraph) => <p key={paragraph}>{editorialText(paragraph)}</p>)}<ul>{model.takeaways.map((item) => <li key={item}>{editorialText(item)}</li>)}</ul></section>
      {model.sections.map((section, index) => <section className="article-section" key={`${section.heading}-${index}`}><h2 id={ids.sections[index]}>{editorialText(section.heading)}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{editorialText(paragraph)}</p>)}</section>)}
      {model.comparison.length > 0 && <section className="card"><h2 id={ids.provider}>Provider answer check</h2><div className="comparison-table">{model.comparison.map((row) => <div className="comparison-row" key={row.topic}><strong>{editorialText(row.topic)}</strong><span>{editorialText(row.weak)}</span><span>{editorialText(row.strong)}</span></div>)}</div></section>}
      {model.sources.length > 0 && <section className="article-section numbered-sources"><h2 id={ids.sources}>Sources and further reading</h2><ol>{model.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{editorialText(source.name)}</a>{source.note && <span>{editorialText(source.note)}</span>}</li>)}</ol></section>}
      {model.faqs.length > 0 && <section className="card faq-card"><h2 id={ids.questions}>Questions managers ask</h2>{model.faqs.map((faq, index) => <div className="faq-item" key={faq.q}><h3 id={ids.faqs[index]}>{editorialText(faq.q)}</h3><p>{editorialText(faq.a)}</p></div>)}</section>}
      <section className="card content-testimonial"><h2 id={ids.decision}>A practical decision framework</h2><p>Define the task, evidence, authority boundary, reviewer, and stop condition before assigning live work. Test a normal case and an exception, then expand access or volume only after the evidence is consistently reviewable.</p></section>
      <section className="article-section"><h2 id={ids.related}>Related content</h2><p>Compare <a href="/services">offshore staffing services</a>, review the <a href="/research">research library</a>, or <a href="/contact-us">request a role plan</a> grounded in your systems and approval boundaries.</p></section>
    </div></div>
  </article><CTA/></main><Footer/></>;
}
