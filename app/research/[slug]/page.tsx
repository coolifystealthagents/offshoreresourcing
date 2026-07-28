import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { ContentArticle } from '../../content-components';
import { getDocument, getDocuments } from '../../../lib/content';
export function generateStaticParams() { return getDocuments('research').map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = getDocument('research', slug); if (!item) return {}; const url = `https://offshoreresourcing.com/research/${slug}`; return { title: item.title, description: item.description, alternates: { canonical: url }, openGraph: { title: item.title, description: item.description, url, type: 'article', images: [item.image] }, twitter: { card: 'summary_large_image', title: item.title, description: item.description, images: [item.image] } }; }
export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = getDocument('research', slug); if (!item) notFound(); const documents = getDocuments('research').filter((other) => other.slug !== slug); const related = [...documents.filter((other) => other.category === item.category), ...documents.filter((other) => other.category !== item.category)]; return <><Header/><ContentArticle document={item} related={related}/><Footer/></>; }
