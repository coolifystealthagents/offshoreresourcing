import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const proxyPath = new URL('../proxy.ts', import.meta.url);

function source() {
  return readFileSync(proxyPath, 'utf8');
}

test('canonical proxy detects Cloudflare and forwarded HTTP visitor schemes', () => {
  const code = source();
  assert.match(code, /cf-visitor/i);
  assert.match(code, /x-forwarded-proto/i);
  assert.match(code, /scheme[^\n]*http|http[^\n]*scheme/i);
});

test('canonical proxy builds an explicit HTTPS host without an internal port', () => {
  const code = source();
  assert.match(code, /destination\.protocol\s*=\s*['"]https:['"]/);
  assert.match(code, /destination\.hostname\s*=\s*['"]offshoreresourcing\.com['"]/);
  assert.match(code, /destination\.port\s*=\s*['"]['"]/);
  assert.match(code, /NextResponse\.redirect\(destination,\s*308\)/);
});
