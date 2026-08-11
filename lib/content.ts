import fs from 'node:fs';
import path from 'node:path';

export type ContentType = 'research' | 'alternatives';
export type ContentDocument = {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  verifiedAt: string;
  image: string;
  sourceCount: number;
  competitor?: string;
  alternativeType?: string;
  body: string;
  headings: Array<{ id: string; text: string }>;
};

const root = path.join(process.cwd(), 'content');

const frozenAug10ResearchOrder = [
  'content-claim-confidence-scoring',
  'content-research-query-clustering',
  'daily-research-source-budgeting',
  'offshore-article-rework-taxonomy',
  'offshore-content-handoff-risk',
  'offshore-research-role-scorecard',
  'remote-content-access-review-cadence',
  'remote-content-brief-acceptance-gates',
  'remote-editorial-capacity-buffer',
  'research-article-methodology-notes',
  'research-article-table-standards',
  'research-source-expiry-monitoring',
];
const frozenAug10ResearchRank = new Map(frozenAug10ResearchOrder.map((slug, index) => [slug, index]));

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parse(file: string, type: ContentType): ContentDocument {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing YAML frontmatter`);
  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator > 0) fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^["']|["']$/g, '');
  }
  const required = ['title', 'description', 'category', 'publishedAt', 'verifiedAt', 'image'];
  for (const key of required) if (!fields[key]) throw new Error(`${file}: missing ${key}`);
  const body = match[2].trim();
  const headings = [...body.matchAll(/^##\s+(.+)$/gm)].map((item) => ({ text: item[1].trim(), id: slugify(item[1]) }));
  return {
    slug: path.basename(file, path.extname(file)),
    type,
    title: fields.title,
    description: fields.description,
    category: fields.category,
    publishedAt: fields.publishedAt,
    verifiedAt: fields.verifiedAt,
    image: fields.image,
    sourceCount: Number(fields.sourceCount || (body.match(/^\d+\.\s+\[/gm) || []).length),
    competitor: fields.competitor,
    alternativeType: fields.alternativeType,
    body,
    headings,
  };
}

export function getDocuments(type: ContentType) {
  const directory = path.join(root, type);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => parse(path.join(directory, file), type))
    .sort((a, b) => {
      const dateOrder = b.publishedAt.localeCompare(a.publishedAt);
      if (dateOrder !== 0) return dateOrder;
      if (type === 'research') {
        const aRank = frozenAug10ResearchRank.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const bRank = frozenAug10ResearchRank.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
        if (aRank !== bRank) return aRank - bRank;
      }
      return a.slug.localeCompare(b.slug);
    });
}

export function getDocument(type: ContentType, slug: string) {
  return getDocuments(type).find((document) => document.slug === slug);
}
