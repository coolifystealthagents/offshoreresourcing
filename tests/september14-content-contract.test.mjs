import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const blog = fs.readFileSync(path.join(root, 'app/daily-blog-2026-09-14.ts'), 'utf8');
const research = fs.readdirSync(path.join(root, 'content/research')).filter((name) => {
  const body = fs.readFileSync(path.join(root, 'content/research', name), 'utf8');
  return /datePublished: "2026-09-14"/.test(body);
});

test('September 14 campaign is exactly 12 Blog and 5 Research routes', () => {
  assert.equal((blog.match(/\[\'[^']+\',\'/g) || []).length, 12);
  assert.equal(research.length, 5);
  assert.match(blog, /publishedAt:'2026-09-14'/);
  assert.match(blog, /Published: September 14, 2026/);
});

test('September 14 research routes contain every required evidence section', () => {
  const titles = new Set();
  for (const name of research) {
    const body = fs.readFileSync(path.join(root, 'content/research', name), 'utf8');
    const title = body.match(/^title: "(.+)"$/m)?.[1];
    assert.ok(title && !titles.has(title), `${name} must have a unique title`);
    titles.add(title);
    for (const heading of ['Methodology', 'Scope, population, and observation window', 'Inference and causal boundaries', 'Limitations', 'Sources and references']) assert.match(body, new RegExp(`## ${heading}`), `${name}: ${heading}`);
    assert.match(body, /\*Published: September 14, 2026\*/);
    assert.match(body, /image: "\/images\/thumbnail-backgrounds\/.+\.webp"/);
  }
});

test('September 14 content is wired into indexes and Blog rendering', () => {
  const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
  const page = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
  assert.match(data, /dailyBlogSep14Posts/);
  assert.match(page, /dailyBlogSep14Details/);
});
