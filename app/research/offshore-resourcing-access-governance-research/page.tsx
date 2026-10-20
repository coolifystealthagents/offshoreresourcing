import DynamicPost, { generateMetadata as dynamicMetadata } from '../[slug]/page';
const slug = 'offshore-resourcing-access-governance-research';
export function generateMetadata() { return dynamicMetadata({ params: Promise.resolve({ slug }) }); }
export default function Page() { return DynamicPost({ params: Promise.resolve({ slug }) }); }
