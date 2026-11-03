import { chromium } from 'playwright-core';
const base = 'http://localhost:4173/';
const only = process.argv[2];
const shots = [
  ['rx-01-home', '', 1440, 900, 4000],
  ['rx-02-step0-questions', '#/inside/0', 1440, 900, 0, 8],
  ['rx-03-step1-volume', '#/inside/1', 1440, 900, 0, 7],
  ['rx-04-step2-bronze', '#/inside/2', 1440, 900, 0, 7.5],
  ['rx-05-step3-parse', '#/inside/3', 1440, 900, 0, 7.5],
  ['rx-06-step4-chunk', '#/inside/4', 1440, 900, 0, 7.5],
  ['rx-07-step5-embed', '#/inside/5', 1440, 900, 0, 7.5],
  ['rx-08-step6-index', '#/inside/6', 1440, 900, 0, 8],
  ['rx-09-step7-query', '#/inside/7', 1440, 900, 0, 8],
  ['rx-10-step8-prompt', '#/inside/8', 1440, 900, 0, 8],
  ['rx-11-step9-map', '#/inside/9', 1440, 900, 0, 7],
  ['rx-12-drawer-step2', '#/inside/2', 1440, 900, 0, 7.5, false, '&deep=1'],
  ['rx-13-object-noScan', '#/inside/7', 1440, 900, 0, 8, false, '&obj=noScan'],
  ['rx-14-phone-home', '', 390, 844, 3500, null, true],
  ['rx-15-phone-step0', '#/inside/0', 390, 844, 0, 8, true],
  ['rx-16-phone-step7', '#/inside/7', 390, 844, 0, 8, true],
  ['rx-17-phone-step9', '#/inside/9', 390, 844, 0, 7, true],
  ['rx-18-phone-drawer-step4', '#/inside/4', 390, 844, 0, 7.5, true, '&deep=1'],
  ['rx-19-rag-step0-check', '#/rag/0', 1440, 900, 0, 8],
];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
for (const [name, hash, w, h, wait, t, mobile, extra] of shots) {
  if (only && !name.includes(only)) continue;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: mobile ? 2 : 1, isMobile: !!mobile, hasTouch: !!mobile });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  const q = (t != null ? '?t=' + t : '') + (extra || '');
  await page.goto(base + q + hash, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 90000 }); await page.waitForTimeout(wait || 2500);
  await page.screenshot({ path: `shots/${name}.png` });
  console.log(name, errs.length ? 'ERR ' + errs.join(' | ') : 'ok');
  await ctx.close();
}
await browser.close();
