import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const app = readFileSync(new URL('./dist/app.js', import.meta.url), 'utf8');
function run(url, verified, search = '') {
  const links = Array.from({ length: 3 }, () => ({
    attributes: { 'aria-disabled': 'true', tabindex: '0' },
    setAttribute(k, v) { this.attributes[k] = v; },
    removeAttribute(k) { delete this.attributes[k]; },
    addEventListener() {},
  }));
  vm.runInNewContext(app, {
    CHECKOUT_URL: url,
    LAUNCH_CONFIG: { productFilesVerified: verified, deliveryVerified: verified },
    URL, URLSearchParams,
    window: { location: { search } },
    document: { querySelectorAll: () => links },
  });
  return links;
}
for (const [url, ready] of [['', false], ['', true], ['javascript:alert(1)', true], ['http://checkout.example.test/kit', true], ['not-a-url', true]]) {
  assert.ok(run(url, ready).every(l => !l.href && l.attributes['aria-disabled'] === 'true'));
}
for (const source of ['bio', 'dm']) {
  const links = run('https://pay.hotmart.com/O107942250T?bid=1791469571471', false, `?utm_source=instagram&utm_content=${source}&utm_campaign=wedding%20kit&private_note=excluded`);
  assert.equal(new Set(links.map(l => l.href)).size, 1);
  for (const link of links) {
    const url = new URL(link.href);
    assert.equal(url.searchParams.get('bid'), '1791469571471');
    assert.equal(url.origin + url.pathname, 'https://pay.hotmart.com/O107942250T');
    assert.equal(url.searchParams.get('utm_source'), 'instagram');
    assert.equal(url.searchParams.get('utm_content'), source);
    assert.equal(url.searchParams.get('utm_campaign'), 'wedding kit');
    assert.equal(url.searchParams.has('private_note'), false);
    assert.equal(link.attributes['aria-disabled'], undefined);
  }
}
console.log('PASS: all three CTAs, missing configuration, invalid destinations, Hotmart bid, bio/DM UTMs, query preservation. No network requests or purchases.');
