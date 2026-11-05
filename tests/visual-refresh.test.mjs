import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const home = read('app/page.tsx');
const services = read('app/services/page.tsx');
const blog = read('app/blog/page.tsx');
const paginatedBlog = read('app/blog/page/[page]/page.tsx');
const research = read('app/research/page.tsx');
const assets = read('app/visual-assets.tsx');
const css = read('app/reference-system.css');

test('visual refresh uses approved local artwork with declared dimensions and useful alt text', () => {
  const referenced = [...`${home}\n${services}\n${assets}`.matchAll(/['"](\/(?:brand|images|illustrations)\/[^'"]+\.(?:svg|webp|png|jpe?g))['"]/g)]
    .map(([, path]) => path);
  assert.ok(referenced.length >= 11);
  for (const path of referenced) assert.ok(existsSync(resolve(root, `public${path}`)), `missing local image: ${path}`);
  assert.match(home, /offshore-work-queue-handoff\.jpg[^>]+width="1800"[^>]+height="1012"[^>]+loading="eager"[^>]+fetchPriority="high"[^>]+alt="Three colleagues reviewing work beside shared workstation monitors"/);
  assert.match(services, /global-team-grid\.webp[^>]+width="1200"[^>]+height="630"[^>]+alt="[^"]+"/);
  assert.match(home, /Workplace collaboration photographed by Austin Distel on Unsplash; people shown are illustrative\./);
});

test('blog and research indexes render accessible landscape thumbnails', () => {
  for (const source of [blog, paginatedBlog, research]) {
    assert.match(source, /width="1200" height="630" alt=\{image\.alt\}/);
  }
  assert.match(css, /\.listing-card-image,[\s\S]*aspect-ratio:\s*16\s*\/\s*9/);
  assert.match(css, /\.directory-grid article \{[^}]*display:\s*flex[^}]*flex-direction:\s*column/);
  assert.match(services, /className="listing-card-image"/);
});

test('homepage process uses meaningful icons instead of generated labels', () => {
  assert.equal((home.match(/<ProcessIcon\b/g) || []).length, 4);
  assert.equal((services.match(/<ProcessIcon\b/g) || []).length, 4);
  assert.doesNotMatch(read('app/globals.css'), /counter-(?:reset|increment)\s*:\s*(?:step|operation)/);
});
