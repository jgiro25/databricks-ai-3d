import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type()==='error' && errs.push(m.text()));
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await p.waitForFunction(() => !document.getElementById('loader'), null, { timeout: 60000 });
await p.click('.tile.live'); await p.waitForTimeout(3000);
console.log('hash', await p.evaluate(() => location.hash));
for (let i = 0; i < 3; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(2500); }
console.log('hash', await p.evaluate(() => location.hash), 'step', await p.textContent('#stepNow'));
await p.click('#btnCode'); await p.waitForTimeout(500);
await p.screenshot({ path: 'shots/12-interact-code.png' });
await p.keyboard.press('Escape'); await p.waitForTimeout(1500);
console.log('home visible', await p.evaluate(() => !document.getElementById('home').classList.contains('hidden')));
const fps = await p.evaluate(() => new Promise(r => { let n=0; const t0=performance.now(); const f=()=>{n++; if(performance.now()-t0<2000) requestAnimationFrame(f); else r(n/2);}; requestAnimationFrame(f); }));
console.log('fps(swiftshader)', fps, 'errors', errs);
await b.close();
