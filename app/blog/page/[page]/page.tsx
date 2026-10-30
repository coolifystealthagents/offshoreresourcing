import { notFound, permanentRedirect } from "next/navigation";
import { Header, Footer } from "../../../components";
import { blogPosts } from "../../../data";
import { editorialText } from "../../../../lib/content";
const totalPages = Math.max(1, Math.ceil(blogPosts.length / 20));
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
    title: `Blog page ${pageNumber}`,
    description: "Practical Philippines staffing guides.",
    alternates: { canonical: pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}` },
  };
}
export function generateStaticParams() {
  return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }));
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = parsePageNumber(page);
  if (n === 1) permanentRedirect("/blog");
  if (n === null || n > totalPages) notFound();
  const posts = blogPosts.slice((n - 1) * 20, n * 20);
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Philippines staffing blog</p>
          <h1>Blog page {n}</h1>
          <div className="cards">
            {posts.map((p) => (
              <a className="card" href={`/blog/${p.slug}`} key={p.slug}>
                <h2>{editorialText(p.title)}</h2>
                <p>{editorialText(p.excerpt)}</p>
              </a>
            ))}
          </div>
          <nav className="pagination" aria-label="Blog pages">
            {Array.from({ length: totalPages }, (_, i) => (
              <a
                aria-current={i + 1 === n ? "page" : undefined}
                href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}
                key={i}
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
