import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type()==='error') errs.push(m.text()); if (/^(UP|DOWN)/.test(m.text())) console.log(m.text()); });
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await p.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 60000 });
await p.click('.tile.live'); await p.waitForTimeout(6000);
console.log('hash', await p.evaluate(() => location.hash), 'step', await p.textContent('#stepNow'));
await p.keyboard.press('ArrowRight'); await p.keyboard.press('ArrowRight'); await p.waitForTimeout(7000);
console.log('step', await p.textContent('#stepNow'), await p.evaluate(() => location.hash));
await p.waitForFunction(() => __app.stations[2].focus > 0.9, null, { timeout: 60000 });
// find a pickable screen point by scanning
const pt = await p.evaluate(() => { for (let y = 120; y < 640; y += 20) for (let x = 300; x < 1250; x += 20) { const h = __app.pickAt(x, y); if (h) return { x, y, id: h.id }; } return null; });
console.log('pickable point', pt);
if (pt) {
  await p.mouse.move(pt.x, pt.y); await p.waitForTimeout(800);
  console.log('tooltip', await p.evaluate(() => document.getElementById('tip').classList.contains('on') && document.getElementById('tip').innerText.replace(/\n/g,' | ')), 'cursor', await p.evaluate(() => document.getElementById('gl').style.cursor));
  await p.screenshot({ path: 'shots/19-hover-tooltip.png' });
  const pt2 = await p.evaluate(() => { for (let y = 120; y < 640; y += 20) for (let x = 300; x < 1250; x += 20) { const h = __app.pickAt(x, y); if (h) return { x, y, id: h.id }; } return null; });
  console.log('click target', pt2); await p.mouse.move(pt2.x, pt2.y);
  await p.evaluate(() => { addEventListener('pointerup', (e) => console.log('UP', e.target.id, e.clientX, e.clientY, document.elementFromPoint(1080,220).id, JSON.stringify(__app.pickAt(1080,220)?.id), document.getElementById('panel').className), true); addEventListener('pointerdown', () => console.log('DOWN', performance.now()|0), true); });
  await p.mouse.down(); await p.mouse.up(); await p.waitForFunction(() => document.getElementById('panel').classList.contains('open'), null, {timeout:15000}).catch(()=>{}); await p.waitForTimeout(1200);
  console.log('panel open', await p.evaluate(() => document.getElementById('panel').classList.contains('open')), 'title', await p.textContent('#pBody h2'));
  await p.screenshot({ path: 'shots/20-click-object.png' });
  await p.keyboard.press('Escape'); await p.waitForTimeout(800);
  console.log('panel after esc', await p.evaluate(() => document.getElementById('panel').classList.contains('open')));
}
// hotspot click
const hs = await p.$$eval('#labels .hs', els => els.filter(e => e.offsetParent && +getComputedStyle(e).opacity > 0.5 && getComputedStyle(e.parentElement).display !== 'none').map(e => { const r = e.getBoundingClientRect(); return { id: e.dataset.id, x: r.x + r.width / 2, y: r.y + r.height / 2 }; }).filter(h => document.elementFromPoint(h.x, h.y)?.closest?.('.hs')));
console.log('visible hotspots', JSON.stringify(hs));
if (hs.length) { console.log('hs0', hs[0], await p.evaluate(({x,y}) => { const e = document.elementFromPoint(x,y); return e.tagName + '.' + e.className + ' ' + (e.closest('.hs')?.dataset.id); }, hs[0])); await p.mouse.click(hs[0].x, hs[0].y); console.log('open?', await p.evaluate(() => document.getElementById('panel').classList.contains('open'))); await p.waitForTimeout(1000); console.log('hotspot opened', await p.textContent('#pBody h2')); }
// chip -> another object, back -> step overview, tabs
await p.click('#pBody .chip'); await p.waitForTimeout(500); console.log('chip ->', await p.textContent('#pBody h2'));
await p.click('#pBack'); await p.waitForTimeout(500); console.log('back ->', await p.textContent('#pKick'), '| sections', await p.$$eval('#pBody section', s => s.length));
const tabs = await p.$$('#pBody .tab'); if (tabs[1]) { await tabs[1].click(); console.log('tab2 visible', await p.$$eval('#pBody .code-wrap', w => w.map(x => !x.classList.contains('hidden')))); }
await p.keyboard.press('Escape'); await p.waitForTimeout(500); await p.keyboard.press('Escape'); await p.waitForTimeout(1500);
console.log('home visible', await p.evaluate(() => !document.getElementById('home').classList.contains('hidden')));
// check every step's deep panel renders + all object ids resolvable
const chk = await p.evaluate(() => { const out = []; for (let i = 0; i < 10; i++) { __app.go(i, {instant:true}); __app.openStep(i); out.push(i + ':' + document.querySelectorAll('#pBody section').length + 's/' + document.querySelectorAll('#pBody pre').length + 'code/' + document.querySelectorAll('#pBody .chip').length + 'chips/picks' + __app.stations[i].picks.length); } __app.closePanel(); return out; });
console.log(chk.join('  '));
const fps = await p.evaluate(() => new Promise(r => { let n=0; const t0=performance.now(); const f=()=>{n++; if(performance.now()-t0<2000) requestAnimationFrame(f); else r(n/2);}; requestAnimationFrame(f); }));
console.log('fps(swiftshader)', fps, 'errors', errs);
await b.close();
