import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/blog.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const article = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') throw new Error('manifest contract mismatch');
if (manifest.family !== 'blog' || manifest.domain !== 'offshoreresourcing.com' || manifest.branch !== 'main') throw new Error('manifest identity mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length !== 24) throw new Error('accepted count mismatch');
const seen = new Set();
const commit = manifest.entries[0].introducedByCommit;
const parent = execFileSync('git', ['rev-parse', commit + '^'], { encoding: 'utf8' }).trim();
const before = execFileSync('git', ['show', parent + ':app/data.ts'], { encoding: 'utf8' });
const after = execFileSync('git', ['show', commit + ':app/data.ts'], { encoding: 'utf8' });
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) throw new Error('duplicate slug: ' + entry.slug);
  seen.add(entry.slug);
  if (entry.route !== '/blog/' + entry.slug || !/^\/blog\/[a-z0-9-]+$/.test(entry.route)) throw new Error('family route mismatch: ' + entry.route);
  if (entry.sourcePath !== 'app/data.ts' || !source.includes(entry.slug)) throw new Error('source record missing: ' + entry.slug);
  if (entry.sourceDateField !== 'publishedAt' || entry.sourceDate !== '2026-08-10') throw new Error('source date mismatch: ' + entry.slug);
  if (entry.provenance !== 'original-aug10-batch' || !/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error('provenance mismatch: ' + entry.slug);
  if (before.includes(entry.slug) || !after.includes(entry.slug)) throw new Error('introducing diff proof failed: ' + entry.slug);
  if (entry.renderedDate !== '2026-08-10' || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error('rendered date manifest mismatch: ' + entry.slug);
}
if (!source.includes("publishedAt: '2026-08-10'")) throw new Error('source date implementation missing');
if (!article.includes('datePublished') || !article.includes('time dateTime={post.publishedAt}')) throw new Error('rendered date implementation missing');
if (!article.includes('alternates: { canonical: url }')) throw new Error('canonical implementation missing');
if (!sitemap.includes('blogPosts.map(p=>`/blog/${p.slug}`)')) throw new Error('sitemap eligibility implementation missing');
if (!source.includes(".sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '')")) throw new Error('newest-first index sort missing');
console.log('PASS: 24 August 10 blog entries, provenance, source/rendered dates, canonical/sitemap, and newest-first controls verified');

