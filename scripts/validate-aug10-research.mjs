import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const target = '2026-08-10';
const root = process.cwd();
const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fail = (message) => { throw new Error(message); };
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') fail('manifest contract mismatch');
if (manifest.family !== 'research' || manifest.domain !== 'offshoreresourcing.com' || manifest.branch !== 'main') fail('manifest identity mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length < 10) fail('accepted count below minimum');
const articleTemplate = fs.readFileSync('app/content-components.tsx', 'utf8');
if (!articleTemplate.includes('datePublished: document.publishedAt') || !articleTemplate.includes('<time dateTime={document.publishedAt}>')) fail('render date contract missing');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (!sitemap.includes("getDocuments('research')") || !sitemap.includes('`/research/${p.slug}`')) fail('research sitemap route missing');
const routes = new Set();
let previous = '9999-99-99';
for (const entry of manifest.entries) {
  if (routes.has(entry.route) || entry.route !== `/research/${entry.slug}`) fail(`bad or duplicate route: ${entry.slug}`);
  routes.add(entry.route);
  if (!/^([a-z0-9]+-)*[a-z0-9]+$/.test(entry.slug) || entry.sourcePath !== `content/research/${entry.slug}.md`) fail(`family/source mismatch: ${entry.slug}`);
  if (!fs.existsSync(entry.sourcePath)) fail(`missing source: ${entry.sourcePath}`);
  const source = fs.readFileSync(entry.sourcePath, 'utf8');
  const date = source.match(/^publishedAt:\s*(\S+)/m)?.[1];
  const verified = source.match(/^verifiedAt:\s*(\S+)/m)?.[1];
  if (date !== target || entry.sourceDate !== target || entry.sourceDateField !== 'publishedAt') fail(`source date mismatch: ${entry.slug}`);
  if (verified !== target || entry.renderedDate !== target || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) fail(`render date mismatch: ${entry.slug}`);
  if (!source.includes(`image:`)) fail(`thumbnail missing: ${entry.slug}`);
  const parent = `${entry.introducedByCommit}^`;
  let beforeExists = true;
  try { execFileSync('git', ['cat-file', '-e', `${parent}:${entry.sourcePath}`], { stdio: 'ignore' }); } catch { beforeExists = false; }
  if (beforeExists) fail(`provenance was not absent before commit: ${entry.slug}`);
  try { execFileSync('git', ['cat-file', '-e', `${entry.introducedByCommit}:${entry.sourcePath}`], { stdio: 'ignore' }); } catch { fail(`provenance source missing at introducing commit: ${entry.slug}`); }
  const builtPath = `.next/server/app/research/${entry.slug}.html`;
  if (fs.existsSync(builtPath)) {
    const built = fs.readFileSync(builtPath, 'utf8');
    if (!built.includes(`datePublished\":\"${target}\"`) || !built.includes(`dateTime=\"${target}\"`) || !built.includes(`https://offshoreresourcing.com/research/${entry.slug}`)) fail(`built route date/canonical mismatch: ${entry.slug}`);
  }
  if (target > previous) fail('index is not newest-first');
  previous = target;
}
console.log(`PASS: ${manifest.entries.length} August 10 research entries; source, rendered-date, canonical-route, sitemap, index-order, and Git provenance checks passed.`);
