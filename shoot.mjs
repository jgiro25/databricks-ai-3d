import { chromium } from 'playwright-core';
const base = (process.argv[2]&&process.argv[2].startsWith('http')) ? process.argv[2] : 'http://localhost:4173/';
const only = process.argv[2] && !process.argv[2].startsWith('http') ? process.argv[2] : process.argv[3];
const shots = [
  ['01-home', '', 1440, 900, 4000],
  ['02-step1-goal', '#/rag/1', 1440, 900, 0, 7.2],
  ['03-step3-chunk', '#/rag/3', 1440, 900, 0, 6.5],
  ['04-step6-retrieve', '#/rag/6', 1440, 900, 0, 6.8],
  ['05-step9-deploy', '#/rag/9', 1440, 900, 0, 7.5],
  ['06-phone-step5', '#/rag/5', 390, 844, 0, 6.0, true],
  ['07-phone-home', '', 390, 844, 3500, null, true],
  ['08-step2-ingest', '#/rag/2', 1440, 900, 0, 6.5],
  ['09-step4-embed', '#/rag/4', 1440, 900, 0, 7.0],
  ['10-step7-generate', '#/rag/7', 1440, 900, 0, 7.4],
  ['11-step8-evaluate', '#/rag/8', 1440, 900, 0, 6.5],
];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
for (const [name, hash, w, h, wait, t, mobile] of shots) {
  if (only && !name.includes(only)) continue;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: mobile ? 2 : 1, isMobile: !!mobile, hasTouch: !!mobile });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  const q = t != null ? '?t=' + t : '';
  await page.goto(base + q + hash, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 60000 }); await page.waitForTimeout(wait || 2500);
  await page.screenshot({ path: `shots/${name}.png` });
  console.log(name, errs.length ? 'ERR ' + errs.join(' | ') : 'ok');
  await ctx.close();
}
await browser.close();
