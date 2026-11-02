import { chromium } from 'playwright-core';
const base = (process.argv[2]&&process.argv[2].startsWith('http')) ? process.argv[2] : 'http://localhost:4173/';
const only = process.argv[2] && !process.argv[2].startsWith('http') ? process.argv[2] : process.argv[3];
const shots = [
  ['01-home', '', 1440, 900, 4000],
  ['02-step0-need', '#/rag/0', 1440, 900, 0, 8],
  ['03-step1-goal', '#/rag/1', 1440, 900, 0, 7.2],
  ['04-step2-ingest', '#/rag/2', 1440, 900, 0, 6.5],
  ['05-step3-chunk', '#/rag/3', 1440, 900, 0, 4.2],
  ['06-step4-embed', '#/rag/4', 1440, 900, 0, 4.0],
  ['07-step5-index', '#/rag/5', 1440, 900, 0, 6.0],
  ['08-step6-retrieve', '#/rag/6', 1440, 900, 0, 6.8],
  ['09-step7-generate', '#/rag/7', 1440, 900, 0, 7.4],
  ['10-step8-evaluate', '#/rag/8', 1440, 900, 0, 6.5],
  ['11-step9-deploy', '#/rag/9', 1440, 900, 0, 7.5],
  ['12-drawer-step2', '#/rag/2', 1440, 900, 0, 6.5, false, '&deep=1'],
  ['13-object-deltaTable', '#/rag/2', 1440, 900, 0, 6.5, false, '&obj=deltaTable'],
  ['14-phone-home', '', 390, 844, 3500, null, true],
  ['15-phone-step0', '#/rag/0', 390, 844, 0, 8, true],
  ['16-phone-step5', '#/rag/5', 390, 844, 0, 6.0, true],
  ['17-phone-drawer-step3', '#/rag/3', 390, 844, 0, 6.5, true, '&deep=1'],
  ['18-phone-object-index', '#/rag/5', 390, 844, 0, 6.0, true, '&obj=index'],
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
  await page.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 60000 }); await page.waitForTimeout(wait || 2500);
  await page.screenshot({ path: `shots/${name}.png` });
  console.log(name, errs.length ? 'ERR ' + errs.join(' | ') : 'ok');
  await ctx.close();
}
await browser.close();
