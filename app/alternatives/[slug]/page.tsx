import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { ContentArticle } from '../../content-components';
import { getDocument, getDocuments, isValidPublicDate } from '../../../lib/content';

const base = 'https://offshoreresourcing.com';
export function generateStaticParams() { return getDocuments('alternatives').map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getDocument('alternatives', slug);
  if (!item) return {};
  const url = `${base}/alternatives/${slug}`;
  const image = `${base}${item.image}`;
  return {
    title: item.title, description: item.description,
    alternates: { canonical: url }, robots: { index: true, follow: true },
    openGraph: { title: item.title, description: item.description, url, type: 'article', images: [{ url: image, width: item.imageWidth, height: item.imageHeight, alt: `${item.title} comparison guide` }], ...(isValidPublicDate(item.publishedAt) ? { publishedTime: item.publishedAt } : {}), ...(isValidPublicDate(item.verifiedAt) ? { modifiedTime: item.verifiedAt } : {}) },
    twitter: { card: 'summary_large_image', title: item.title, description: item.description, images: [image] },
  };
}

export default async function AlternativePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getDocument('alternatives', slug);
  if (!item) notFound();
  const documents = getDocuments('alternatives').filter((other) => other.slug !== slug);
  const related = [...documents.filter((other) => other.category === item.category), ...documents.filter((other) => other.category !== item.category)];
  return <><Header/><ContentArticle document={item} related={related}/><Footer/></>;
}
