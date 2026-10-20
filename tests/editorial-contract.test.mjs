import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const bodyOf = (raw) => raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();

test('all editorial families use the shared TOC architecture', () => {
  const component = read('app/content-components.tsx');
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  const alternatives = read('app/alternatives/[slug]/page.tsx');
  assert.match(component, /<EditorialToc items=\{tocItems\}/);
  assert.match(blog, /<EditorialToc items=\{model\.toc\} family="Blog"/);
  assert.match(research, /getCanonicalStatus\(item\)/);
  assert.match(alternatives, /<ContentArticle document=\{item\}/);
});

test('active TOC is observer based and accessible without DOM mutation', () => {
  const toc = read('app/editorial-toc.tsx');
  assert.match(toc, /new IntersectionObserver/);
  assert.match(toc, /aria-current=\{activeId === item\.id \? 'location'/);
  assert.match(toc, /<details className="editorial-mobile-toc">/);
  assert.doesNotMatch(toc, /innerHTML|appendChild|querySelector/);
});

test('editorial layout has sticky desktop navigation, mobile flow, and readable body width', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.editorial-sidebar\{position:sticky;top:96px/);
  assert.match(css, /\.editorial-mobile-toc\{display:none\}/);
  assert.match(css, /@media\(max-width:900px\)[^{]*\{[^}]*\.editorial-hero/);
  assert.match(css, /\.editorial-body\{min-width:0;max-width:72ch\}/);
  assert.match(css, /scroll-margin-top:112px/);
});

test('heading IDs are stable, escaped, complete, and disambiguated', () => {
  const content = read('lib/content.ts');
  assert.match(content, /normalize\('NFKD'\)/);
  assert.match(content, /count === 1 \? base : `\$\{base\}-\$\{count\}`/);
  assert.match(content, /\^\(#\|##\|###\)/);
  const renderer = read('app/content-components.tsx');
  assert.match(renderer, /<h2 id=\{nextHeadingId\(text\)\}/);
  assert.match(renderer, /<h3 id=\{nextHeadingId\(text\)\}/);
});

test('the exact 13-record research duplicate group has deterministic SEO handling', () => {
  const directory = path.join(root, 'content/research');
  const groups = new Map();
  for (const file of fs.readdirSync(directory).filter((name) => /\.mdx?$/.test(name))) {
    const body = bodyOf(fs.readFileSync(path.join(directory, file), 'utf8'));
    const hash = crypto.createHash('sha256').update(body).digest('hex');
    groups.set(hash, [...(groups.get(hash) || []), file.replace(/\.mdx?$/, '')]);
  }
  const duplicates = [...groups.values()].filter((group) => group.length > 1);
  assert.equal(duplicates.length, 1);
  assert.equal(duplicates[0].length, 13);
  assert.equal([...duplicates[0]].sort()[0], 'content-accessibility-review');
  const helper = read('lib/content.ts');
  assert.match(helper, /\.map\(\(\{ slug \}\) => slug\)\.sort\(\)/);
  const route = read('app/research/[slug]/page.tsx');
  assert.match(route, /robots: canonical\.isDuplicate \? \{ index: false, follow: true \}/);
  assert.match(route, /alternates: \{ canonical: url \}/);
});

test('all seven invalid editorial hero paths are protected by verified fallbacks', () => {
  const invalid = [];
  for (const type of ['research', 'alternatives']) {
    const directory = path.join(root, 'content', type);
    for (const file of fs.readdirSync(directory).filter((name) => /\.mdx?$/.test(name))) {
      const raw = fs.readFileSync(path.join(directory, file), 'utf8');
      const image = raw.match(/^image:\s*["']?([^\n"']+)/m)?.[1]?.trim();
      if (image && !fs.existsSync(path.join(root, 'public', image.replace(/^\//, '')))) invalid.push(image);
    }
  }
  assert.equal(invalid.length, 7);
  for (const fallback of ['/images/thumbnails/research-source-triangulation.webp', '/images/thumbnails/offshore-resourcing-alternatives.webp']) {
    assert.ok(fs.existsSync(path.join(root, 'public', fallback.slice(1))), fallback);
  }
  const helper = read('lib/content.ts');
  assert.match(helper, /fs\.existsSync\(candidate\)/);
  assert.match(helper, /fs\.statSync\(candidate\)\.isFile\(\)/);
  assert.match(helper, /const src = safe \? normalized : CONTENT_IMAGE_FALLBACKS\[type\]/);
  assert.match(helper, /imageDimensions\(path\.join\(publicRoot/);
});

test('metadata and schema consistently expose canonical article images and valid dates', () => {
  for (const route of ['app/research/[slug]/page.tsx', 'app/alternatives/[slug]/page.tsx']) {
    const source = read(route);
    assert.match(source, /width: item\.imageWidth, height: item\.imageHeight/);
    assert.match(source, /isValidPublicDate\(item\.publishedAt\)/);
    assert.match(source, /twitter: \{ card: 'summary_large_image'/);
  }
  const article = read('app/content-components.tsx');
  assert.match(article, /'TechArticle' : 'Article'/);
  assert.match(article, /'BreadcrumbList'/);
  assert.match(article, /width: document\.imageWidth, height: document\.imageHeight/);
});

test('rendered markdown data normalizes forbidden long and double dash punctuation', () => {
  const helper = read('lib/content.ts');
  assert.match(helper, /replace\(\/\[—–\]\/g/);
  assert.match(helper, /replace\(\/--\+\/g/);
  assert.match(read('app/content-components.tsx'), /editorialText\(text\)/);
});
