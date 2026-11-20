import { notFound, permanentRedirect } from "next/navigation";
import { Header, Footer } from "../../../components";
import { site } from "../../../data";
import { getCanonicalStatus, getDocuments } from "../../../../lib/content";
import { editorialPhotoFor } from "../../../visual-assets";

const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
const PAGE_SIZE = 24;
const allResearch = getDocuments("research").filter((document) => !getCanonicalStatus(document).isDuplicate);
const totalPages = Math.max(1, Math.ceil(allResearch.length / PAGE_SIZE));

function parsePageNumber(page: string) {
  if (!/^[1-9]\d*$/.test(page)) return null;
  const pageNumber = Number(page);
  return Number.isSafeInteger(pageNumber) ? pageNumber : null;
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNumber = parsePageNumber(page);
  if (pageNumber === null || pageNumber > totalPages) notFound();
  return {
    title: `Research page ${pageNumber}`,
    description: "Source-backed research for planning Philippines based support.",
    alternates: { canonical: `/research/page/${pageNumber}` },
  };
}

export function generateStaticParams() {
  return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }));
}

export default async function ResearchPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = parsePageNumber(page);
  if (n === 1) permanentRedirect("/research");
  if (n === null || n > totalPages) notFound();
  const researchPosts = allResearch.slice((n - 1) * PAGE_SIZE, n * PAGE_SIZE);

  return (
    <>
      <Header />
      <main className="research-index-page">
        <section className="research-hero">
          <div className="container research-hero-grid">
            <div>
              <p className="eyebrow">Offshore staffing research</p>
              <h1>Research page {n}</h1>
              <p className="lead">
                Continue through the source record, method, limits, and operating
                context behind staffing scope, access, review, and handoff
                decisions.
              </p>
              <div className="research-meta">
                <span>{allResearch.length} reports</span>
                <span>Page {n} of {totalPages}</span>
                <span>Buyer controls</span>
              </div>
            </div>
            <aside className="research-hero-card" aria-label="Research quality signals">
              <div>
                <strong>Evidence</strong>
                <span>Benchmarks and operating context</span>
              </div>
              <div>
                <strong>Review</strong>
                <span>Practical screening questions</span>
              </div>
              <div>
                <strong>Action</strong>
                <span>Implementation checks</span>
              </div>
            </aside>
          </div>
        </section>
        <section className="section research-library-section">
          <div className="container">
            <div className="research-card-grid">
              {researchPosts.map((p) => {
                const image = editorialPhotoFor(`${p.title} ${p.category} ${p.slug}`);
                return <a
                  className="research-library-card"
                  href={`/research/${p.slug}`}
                  key={p.slug}
                >
                  <img className="research-card-image listing-card-image" src={image.src} width="1200" height="630" alt={image.alt}/>
                  <div className="research-card-copy">
                  <span className="research-card-badge">
                    {p.category}
                  </span>
                  <h2>{p.title}</h2>
                  <time dateTime={p.publishedAt}>Published {formatDate(p.publishedAt)}</time>
                  <p className="research-card-excerpt">{p.description}</p>
                  <div className="research-card-meta">
                    <span>{site.brand} Research</span>
                    <span>{p.sourceCount} sources</span>
                    <span>{Math.max(4, Math.ceil(p.body.split(/\s+/).filter(Boolean).length / 220))} min read</span>
                  </div>
                  </div>
                </a>;
              })}
            </div>
            <nav className="pagination" aria-label="Research pages">
              {Array.from({ length: totalPages }, (_, i) => (
                <a
                  aria-current={i + 1 === n ? "page" : undefined}
                  href={i === 0 ? "/research" : `/research/page/${i + 1}`}
                  key={i}
                >
                  {i + 1}
                </a>
              ))}
            </nav>
          </div>
        </section>
        <section className="section research-methodology">
          <div className="container">
            <h2>Read the evidence before applying the recommendation</h2>
            <p>
              Each research page should make assumptions visible, separate
              sourced facts from recommendations, and translate findings into a
              role brief your team can review.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
