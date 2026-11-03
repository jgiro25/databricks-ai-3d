import { chromium } from 'playwright-core';
const base = 'http://localhost:4173/';
const only = process.argv[2];
const shots = [
  ['uc2-01-home', '', 1440, 900, 4000],
  ['uc2-02-step0-need', '#/genie/0', 1440, 900, 0, 8],
  ['uc2-03-step1-goal', '#/genie/1', 1440, 900, 0, 6.5],
  ['uc2-04-step2-curate', '#/genie/2', 1440, 900, 0, 7.0],
  ['uc2-05-step3-describe', '#/genie/3', 1440, 900, 0, 8.0],
  ['uc2-06-step4-metrics', '#/genie/4', 1440, 900, 0, 7.0],
  ['uc2-07-step5-agent', '#/genie/5', 1440, 900, 0, 8.0],
  ['uc2-08-step6-ask', '#/genie/6', 1440, 900, 0, 8.6],
  ['uc2-09-step7-govern', '#/genie/7', 1440, 900, 0, 8.2],
  ['uc2-10-step8-bench', '#/genie/8', 1440, 900, 0, 8.0],
  ['uc2-11-step9-share', '#/genie/9', 1440, 900, 0, 7.0],
  ['uc2-12-drawer-step4', '#/genie/4', 1440, 900, 0, 7.0, false, '&deep=1'],
  ['uc2-13-object-metricView', '#/genie/4', 1440, 900, 0, 7.0, false, '&obj=metricView'],
  ['uc2-14-phone-home', '', 390, 844, 3500, null, true],
  ['uc2-15-phone-step0', '#/genie/0', 390, 844, 0, 8, true],
  ['uc2-16-phone-step7', '#/genie/7', 390, 844, 0, 8.2, true],
  ['uc2-17-phone-drawer-step5', '#/genie/5', 390, 844, 0, 8, true, '&deep=1'],
  ['uc2-18-rag-step0-check', '#/rag/0', 1440, 900, 0, 8],
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
