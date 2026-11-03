import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
for (const [w, h, mob] of [[1440, 900, false], [390, 844, true]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: mob, hasTouch: mob, deviceScaleFactor: mob ? 2 : 1 });
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
  await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await p.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 90000 });
  console.log(`== ${w}x${h}`, 'live tiles', await p.$$eval('.tile.live', t => t.map(x => x.dataset.case)));
  await p.click('.tile.live[data-case="genie"]'); await p.waitForTimeout(5000);
  console.log('hash', await p.evaluate(() => location.hash), 'title', await p.textContent('#ucName'), 'step', await p.textContent('#stepNow'), await p.textContent('#stepTot'));
  // every step: card + drawer + objects resolvable + a real click on a pickable point
  for (let i = 0; i < 10; i++) {
    await p.evaluate((i) => { __app.closePanel(); __app.go(i, { instant: true }); }, i);
    await p.waitForFunction((i) => __app.stations[i].focus > 0.9, i, { timeout: 60000 });
    await p.waitForTimeout(mob ? 4500 : 4000);
    const card = await p.textContent('#cTitle');
    const pt = await p.evaluate(([W, H]) => { for (let y = 90; y < H - 200; y += 14) for (let x = 10; x < W - 10; x += 14) { const h = __app.pickAt(x, y); if (h) return { x, y, id: h.id }; } return null; }, [w, h]);
    let clicked = null;
    if (pt) { if (mob) await p.touchscreen.tap(pt.x, pt.y); else await p.mouse.click(pt.x, pt.y); await p.waitForTimeout(900); clicked = await p.evaluate(() => document.getElementById('panel').classList.contains('open') && document.querySelector('#pBody h2').textContent); }
    const d = await p.evaluate((i) => { __app.openStep(i); return { s: document.querySelectorAll('#pBody section').length, code: document.querySelectorAll('#pBody pre').length, chips: document.querySelectorAll('#pBody .chip').length, title: document.querySelector('#pBody h2').textContent }; }, i);
    console.log(i, card, '| drawer', JSON.stringify(d), '| click', pt?.id, '->', clicked);
    if (i === 6 && !mob) await p.screenshot({ path: 'shots/uc2-19-drawer-step6.png' });
  }
  // chip -> object -> other chips all resolve
  const allObj = await p.evaluate(() => { const bad = []; for (let i = 0; i < 10; i++) { __app.openStep(i); for (const c of document.querySelectorAll('#pBody .chip')) { __app.openObject(c.dataset.obj); if (!document.querySelector('#pBody h2').textContent) bad.push(c.dataset.obj); } } __app.closePanel(); return bad; });
  console.log('objects w/o content', allObj);
  if (!mob) { // object explainer via real click, step 7
    await p.evaluate(() => __app.go(7, { instant: true })); await p.waitForTimeout(6000);
    const pt = await p.evaluate(() => { for (let y = 150; y < 700; y += 12) for (let x = 400; x < 1400; x += 12) { const h = __app.pickAt(x, y); if (h && h.id === 'ucGate') return { x, y }; } return null; });
    if (pt) { await p.mouse.move(pt.x, pt.y); await p.waitForTimeout(400); await p.mouse.click(pt.x, pt.y); await p.waitForTimeout(1200); console.log('ucGate click ->', await p.textContent('#pBody h2')); await p.screenshot({ path: 'shots/uc2-20-click-ucGate.png' }); }
  }
  // back home, open case 1, check it still works
  await p.keyboard.press('Escape'); await p.waitForTimeout(400); await p.evaluate(() => __app.openHome()); await p.waitForTimeout(2500);
  await p.click('.tile.live[data-case="rag"]'); await p.waitForTimeout(5000);
  const r = await p.evaluate(() => { __app.openStep(2); return [location.hash, document.getElementById('ucName').textContent, document.querySelector('#pBody h2').textContent, __app.stations.length, __app.caseId]; });
  console.log('case1', r);
  await p.evaluate(() => { __app.closePanel(); __app.go(5, { instant: true }); }); await p.waitForTimeout(4500);
  const pt1 = await p.evaluate(([W, H]) => { for (let y = 90; y < H - 200; y += 14) for (let x = 10; x < W - 10; x += 14) { const h = __app.pickAt(x, y); if (h) return { x, y, id: h.id }; } return null; }, [w, h]);
  if (pt1) { if (mob) await p.touchscreen.tap(pt1.x, pt1.y); else await p.mouse.click(pt1.x, pt1.y); await p.waitForTimeout(900); }
  console.log('case1 click', pt1?.id, '->', await p.evaluate(() => document.getElementById('panel').classList.contains('open') && document.querySelector('#pBody h2').textContent));
  if (mob) await p.screenshot({ path: 'shots/uc2-21-phone-case1-check.png' });
  console.log('errors', errs);
  await ctx.close();
}
await b.close();
