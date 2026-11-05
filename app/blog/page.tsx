import { blogPosts } from "../data";
import { editorialImageFor } from "../visual-assets";
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: "Blog",
  description: "Practical Philippines staffing guides.",
  alternates: { canonical: "/blog" },
};
export default function Blog() {
  const posts = blogPosts.slice(0, 20);
  const pages = Math.max(1, Math.ceil(blogPosts.length / 20));
  return (
    <>
      <main className="editorial-index-page">
        <section className="editorial-index-hero"><div className="container">
          <p className="eyebrow">Offshore staffing operating guides</p>
          <h1>Build the task brief, review path, and handoff.</h1>
          <p className="lead">Use these guides to document queues, permissions, acceptance checks, corrections, coverage, and manager-owned decisions for Philippines based support.</p>
        </div></section>
        <section className="editorial-index-library"><div className="container">
          <div className="cards">
            {posts.map((p) => {
              const image = p.image ? { src: p.image, alt: `Editorial image for ${p.title}` } : editorialImageFor(`${p.title} ${p.slug}`);
              return <a className="card" href={`/blog/${p.slug}`} key={p.slug}>
                <img className="editorial-card-image listing-card-image" src={image.src} width="1200" height="630" alt={image.alt}/>
                <div className="editorial-card-copy">
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                {"publishedAt" in p && typeof p.publishedAt === "string" ? <time dateTime={p.publishedAt}>Published {formatDate(p.publishedAt)}</time> : null}
                <span>{p.minutes} min read</span>
                </div>
              </a>
            })}
          </div>
          <nav className="pagination" aria-label="Blog pages">
            {Array.from({ length: pages }, (_, i) => (
              <a
                aria-current={i === 0 ? "page" : undefined}
                href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}
                key={i}
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </div></section>
      </main>
    </>
  );
}
