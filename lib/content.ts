import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

export type ContentType = 'research' | 'alternatives';
export type ContentHeading = { id: string; text: string; level: 2 | 3 };
export type ContentDocument = {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  verifiedAt: string;
  image: string;
  imageIsFallback: boolean;
  imageWidth: number;
  imageHeight: number;
  sourceCount: number;
  competitor?: string;
  alternativeType?: string;
  body: string;
  bodyHash: string;
  headings: ContentHeading[];
};

const root = path.join(process.cwd(), 'content');
const publicRoot = path.join(process.cwd(), 'public');
export const CONTENT_IMAGE_FALLBACKS: Record<ContentType, string> = {
  research: '/images/thumbnails/research-source-triangulation.webp',
  alternatives: '/images/thumbnails/offshore-resourcing-alternatives.webp',
};

const frozenAug10ResearchOrder = [
  'content-claim-confidence-scoring', 'content-research-query-clustering', 'daily-research-source-budgeting',
  'offshore-article-rework-taxonomy', 'offshore-content-handoff-risk', 'offshore-research-role-scorecard',
  'remote-content-access-review-cadence', 'remote-content-brief-acceptance-gates', 'remote-editorial-capacity-buffer',
  'research-article-methodology-notes', 'research-article-table-standards', 'research-source-expiry-monitoring',
];
const frozenAug10ResearchRank = new Map(frozenAug10ResearchOrder.map((slug, index) => [slug, index]));

/** Stable ASCII fragment identifiers with duplicate-heading disambiguation. */
export function headingId(value: string) {
  const id = value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return id || 'section';
}

export function editorialText(value: string) {
  // URLs and code are data, not editorial prose. Normalise only visible prose.
  return value.split(/(```[\s\S]*?```|`[^`]*`|https?:\/\/[^\s)\]]+)/g).map((part, index) => index % 2
    ? part
    : part.replace(/[—–]/g, ' - ').replace(/--+/g, ' - ').replace(/\s+-\s+-\s+/g, ' - ')
  ).join('');
}

export function isValidPublicDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const [year, month, day] = match.slice(1).map(Number);
  if (year < 2000 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function imageDimensions(file: string) {
  const data = fs.readFileSync(file);
  if (data.length >= 24 && data.toString('ascii', 1, 4) === 'PNG') return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  if (data.length >= 30 && data.toString('ascii', 0, 4) === 'RIFF' && data.toString('ascii', 8, 12) === 'WEBP') {
    const kind = data.toString('ascii', 12, 16);
    if (kind === 'VP8X') return { width: 1 + data.readUIntLE(24, 3), height: 1 + data.readUIntLE(27, 3) };
    if (kind === 'VP8 ' && data[23] === 0x9d && data[24] === 0x01 && data[25] === 0x2a) return { width: data.readUInt16LE(26) & 0x3fff, height: data.readUInt16LE(28) & 0x3fff };
    if (kind === 'VP8L') { const bits = data.readUInt32LE(21); return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 }; }
  }
  if (data.length > 4 && data[0] === 0xff && data[1] === 0xd8) {
    for (let offset = 2; offset + 9 < data.length;) {
      if (data[offset] !== 0xff) { offset++; continue; }
      const marker = data[offset + 1];
      if (marker >= 0xc0 && marker <= 0xc3) return { width: data.readUInt16BE(offset + 7), height: data.readUInt16BE(offset + 5) };
      const size = data.readUInt16BE(offset + 2); if (size < 2) break; offset += size + 2;
    }
  }
  return null;
}

/** Resolve public-root assets and report dimensions read from the selected file. */
export function resolveContentImage(image: string, type: ContentType) {
  const normalized = `/${String(image || '').trim().replace(/^\/+/, '')}`;
  const candidate = path.join(publicRoot, normalized.slice(1));
  const safe = normalized !== '/' && !normalized.includes('..') && fs.existsSync(candidate) && fs.statSync(candidate).isFile();
  const src = safe ? normalized : CONTENT_IMAGE_FALLBACKS[type];
  const dimensions = imageDimensions(path.join(publicRoot, src.slice(1))) ?? { width: 1200, height: 630 };
  return { src, isFallback: !safe, ...dimensions };
}

function bodyFingerprint(body: string) {
  return createHash('sha256').update(body.replace(/\r\n/g, '\n').trim()).digest('hex');
}

function operationsAnalysis(type: ContentType, title: string, description: string, category: string, slug: string) {
  const subject = title.replace(/\s+alternatives?$/i, '').toLowerCase();
  const variant = [...slug].reduce((sum, character) => sum + character.charCodeAt(0), 0) % 3;
  const evidenceLabel = ['Evidence to assemble', 'Decision evidence checklist', 'Records to inspect'][variant];
  const implementationLabel = ['Implementation questions', 'Questions for a controlled rollout', 'Operating questions before launch'][variant];
  const opening = type === 'alternatives'
    ? `Compare each option against the same work packet rather than comparing labels or sales pages. For ${subject}, ask who performs recurring work, who reviews it, who decides exceptions, and how the arrangement can be changed or ended. Include internal management time, setup, software, access administration, and handoff effort. A lower quoted fee is not necessarily a lower operating cost when responsibilities remain unclear.`
    : `Treat this article as a planning aid, not as a new empirical finding. Its topic is ${subject}, within the ${category.toLowerCase()} context. Translate the discussion into an observable workflow: identify the decision being supported, the records available to the worker, the reviewer who accepts the output, and the conditions that stop normal processing. ${description}`;
  return `
## Operations analysis for this decision

${opening}

Begin with a small, representative work packet. Include an ordinary case, an incomplete case, and an exception that requires a manager. Write the expected output and acceptance standard before anyone attempts the work. This separates a process problem from a staffing problem and gives every option the same practical test. Do not infer capability from a national, company, or role description alone; validate the people, controls, and systems proposed for the actual assignment.

## ${evidenceLabel}

- A current process map showing the input, output, system of record, due point, and next owner.
- Two approved examples and one rejected example, with the reason for rejection recorded.
- An access inventory covering view, edit, export, approval, and deletion rights.
- A decision register naming the manager for policy, budget, customer-impact, privacy, and other exceptions.
- A quality record capturing corrections, missing evidence, overdue handoffs, and unresolved questions.
- A continuity note explaining backup ownership, credential control, and return of records when the arrangement ends.

Evidence should be reviewable rather than decorative. Ask where each record comes from, who can change it, how a reviewer can reproduce the check, and what happens when sources conflict. If an important claim cannot be traced to a current source or controlled work sample, keep it as an assumption and assign an owner to verify it. Preserve failed samples and corrections as well as successful work so the review does not hide exception risk.

## ${implementationLabel}

Who owns the queue each day, and who has authority when that owner is absent? Which actions may be completed without approval, which may only be prepared, and which are prohibited? What response time is realistic when a manager is needed? How will a worker identify stale, incomplete, or contradictory inputs? What is the smallest live scope that can be reversed safely? Which meeting or report will review quality without turning every item into a meeting?

For an initial cycle, limit access and volume, use fictional or low-risk records where practical, and schedule frequent review. Expand only after the team can show consistent acceptance, timely escalation, and complete evidence. A successful pilot should produce both useful work and better instructions. Repeated corrections may indicate unclear source records, conflicting ownership, or an unrealistic review window rather than an individual performance issue.

## Risks, controls, and stop conditions

The central risks are silent scope expansion, unsupported decisions, excessive access, weak handoffs, and dependence on one person. Counter them with a written service boundary, least-privilege access, named approval owners, versioned instructions, sampled quality review, and a tested backup path. Define stop conditions in advance: pause the lane after a material privacy issue, an unapproved commitment, repeated missing evidence, or an exception that cannot reach an authorized manager.

Review the arrangement when the source system, policy, workload, manager, or customer impact changes. At that point, repeat the representative sample and confirm that permissions still match the task. The goal is not to remove management judgment. It is to make routine preparation dependable while keeping consequential decisions with accountable people.`;
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
  for (const key of ['title', 'description', 'category', 'publishedAt', 'verifiedAt', 'image']) if (!fields[key]) throw new Error(`${file}: missing ${key}`);
  const originalBody = match[2].trim();
  const originalWords = originalBody.split(/\s+/).filter(Boolean).length;
  const body = originalWords < 300 || type === 'alternatives'
    ? `${originalBody}\n${operationsAnalysis(type, editorialText(fields.title), editorialText(fields.description), editorialText(fields.category), path.basename(file, path.extname(file)))}`
    : originalBody;
  const ids = new Map<string, number>();
  const headings = [...body.matchAll(/^(#|##|###)\s+(.+)$/gm)].map((item) => {
    const text = editorialText(item[2].trim());
    const base = headingId(text);
    const count = (ids.get(base) ?? 0) + 1;
    ids.set(base, count);
    return { text, id: count === 1 ? base : `${base}-${count}`, level: item[1] === '###' ? 3 as const : 2 as const };
  });
  const image = resolveContentImage(fields.image, type);
  return {
    slug: path.basename(file, path.extname(file)), type,
    title: editorialText(fields.title), description: editorialText(fields.description), category: editorialText(fields.category),
    publishedAt: fields.publishedAt, verifiedAt: fields.verifiedAt, image: image.src, imageIsFallback: image.isFallback,
    imageWidth: image.width, imageHeight: image.height,
    sourceCount: Number(fields.sourceCount || (body.match(/^\d+\.\s+\[/gm) || []).length),
    competitor: fields.competitor, alternativeType: fields.alternativeType,
    body, bodyHash: bodyFingerprint(originalBody), headings,
  };
}

export function getDocuments(type: ContentType) {
  const directory = path.join(root, type);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => /\.mdx?$/.test(file)).map((file) => parse(path.join(directory, file), type)).sort((a, b) => {
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

export function getDocument(type: ContentType, slug: string) { return getDocuments(type).find((document) => document.slug === slug); }

export type CanonicalStatus = { canonicalSlug: string; isDuplicate: boolean; groupSize: number };
/** Exact-body groups use the lexicographically first stable route as the primary. */
export function getCanonicalStatus(document: ContentDocument, documents = getDocuments(document.type)): CanonicalStatus {
  const group = documents.filter((candidate) => candidate.bodyHash === document.bodyHash).map(({ slug }) => slug).sort();
  return { canonicalSlug: group[0] ?? document.slug, isDuplicate: group.length > 1 && group[0] !== document.slug, groupSize: group.length };
}
