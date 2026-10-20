import aug19Meta from '../aug19-meta.json';
import { site, services, blogPosts } from '../data';
import { getCanonicalStatus, getDocuments } from '../../lib/content';

export function GET() {
  const base = `https://${String(site.domain).toLowerCase()}`;
  const pages = Math.max(1, Math.ceil(blogPosts.length / 20));
  const aug19Paths = Object.entries(aug19Meta).map(([slug, value]) => `/${(value as { family: string }).family}/${slug}`);
  const research = getDocuments('research').filter((document) => !getCanonicalStatus(document).isDuplicate);
  const alternatives = getDocuments('alternatives');
  const paths = [
    ...aug19Paths,
    '', '/about', '/services', '/blog', '/blog/top-30-offshore-staffing-companies', '/research', '/alternatives', '/contact-us', '/privacy', '/terms', '/cancellation-policy',
    ...services.map((service) => `/services/${service.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...research.map((document) => `/research/${document.slug}`),
    ...alternatives.map((document) => `/alternatives/${document.slug}`),
    ...Array.from({ length: Math.max(0, pages - 1) }, (_, index) => `/blog/page/${index + 2}`),
  ];
  const body = Array.from(new Set(paths)).map((pathname) => `<url><loc>${base}${pathname}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
