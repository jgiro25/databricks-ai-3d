import * as THREE from 'three';
import { Station } from '../stations/base.js';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, person, Stream, seg, bell, E, lerp } from '../helpers.js';
import { screenTex, codeTex, panel, barChart, warehouse, agentCore, keyIcon, shield, gauge, ticket, KW, ID, STR, DIM, FONT, LBeam as Beam } from './kit.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const sc = (o, v) => o.scale.setScalar(Math.max(0.001, v));

// ───────────────────────── 0 · NEED
const BLOCKS = [
  { id: 'b_lakeflow', n: 'Lakeflow' }, { id: 'b_gold', n: 'Gold tables' }, { id: 'b_meta', n: 'UC metadata' }, { id: 'b_metric', n: 'Metric view' },
  { id: 'b_genie', n: 'Genie Agent' }, { id: 'b_wh', n: 'SQL warehouse' }, { id: 'b_rls', n: 'Row filters' }, { id: 'b_bench', n: 'Benchmarks' },
];
function icon(id) {
  const g = new THREE.Group();
  const acc = glow(COL.lava, 1.2), steel = metal(0x8a8f99, 0.4, 0.6), lt = matte(0x8d929b, 0.5);
  if (id === 'b_lakeflow') { for (let i = 0; i < 3; i++) { const t = new THREE.Mesh(roundedBox(0.22, 0.12 + i * 0.12, 0.3, 0.03), i === 2 ? acc : lt); t.position.set(-0.24 + i * 0.24, 0.06 + i * 0.06, 0); g.add(t); } }
  if (id === 'b_gold') { const c = new THREE.Mesh(roundedBox(0.26, 0.26, 0.26, 0.04), acc); c.position.y = 0.3; g.add(c); for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.6; const d = new THREE.Mesh(roundedBox(0.14, 0.14, 0.14, 0.03), lt); d.position.set(Math.sin(a) * 0.3, 0.3, Math.cos(a) * 0.3); g.add(d); } }
  if (id === 'b_meta') { for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18 + i * 0.08, 0.08), lt); p.position.set(-0.2 + i * 0.13, 0.09 + i * 0.04, 0); g.add(p); } const tag = new THREE.Mesh(roundedBox(0.3, 0.16, 0.03, 0.03), acc); tag.position.set(0.05, 0.62, 0); g.add(tag); }
  if (id === 'b_metric') { const pr = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.5, 3), matte(0x9893b5, 0.35)); pr.position.y = 0.3; g.add(pr); const r = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.02, 6, 48), acc); r.rotation.x = Math.PI / 2; r.position.y = 0.3; g.add(r); }
  if (id === 'b_genie') { const c = agentCore(0.26); c.position.y = 0.36; c.ring.visible = false; g.add(c); }
  if (id === 'b_wh') { const w = warehouse(3, 0.26); w.scale.setScalar(0.9); g.add(w); }
  if (id === 'b_rls') { for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.1), i % 2 ? matte(0x4a4f58) : acc); b.position.set(0, 0.1 + i * 0.1, 0); g.add(b); } const f = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.025, 6, 4), steel); f.rotation.z = Math.PI / 4; f.position.y = 0.3; g.add(f); }
  if (id === 'b_bench') { const gg = gauge(0.3); gg.position.y = 0.36; gg.set(0.85); g.add(gg); }
  return g;
}
export class GNeed extends Station {
  constructor() {
    super({ loop: 10, radius: 7, cam: { pos: [0, 5.0, 15.8], target: [0, 1.9, 0], pk: 1.25 } });
    const g = this.group;
    this.biz = new THREE.Group(); this.biz.position.set(-3.6, 0, 0); g.add(this.biz);
    // desk + monitor + manager
    const desk = new THREE.Group(); desk.position.set(-0.9, 0, 0.9); this.biz.add(desk);
    const top = new THREE.Mesh(roundedBox(2.0, 0.08, 0.9, 0.03), matte(0x4a4038, 0.55)); top.position.y = 0.9; desk.add(top);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.9, 0.05), metal(0x2b2e34, 0.4, 0.6)); l.position.set(x * 0.9, 0.45, z * 0.38); desk.add(l); });
    const scrTex = screenTex('g0scr', 200, 120, (c, w, h) => { c.fillStyle = '#1c1f25'; c.fillRect(0, 0, w, h); c.fillStyle = '#d9653b'; c.font = `600 13px ${FONT}`; c.fillText('Denials · FL ?', 12, 24); c.fillStyle = '#4a4f58'; for (let i = 0; i < 4; i++) c.fillRect(12, 40 + i * 16, 120 - i * 18, 8); c.fillStyle = '#7d828c'; c.font = `11px ${FONT}`; c.fillText('no access to SQL', 12, 110); });
    this.mon = panel(0.9, 0.55, scrTex); this.mon.position.set(0.1, 1.35, -0.15); desk.add(this.mon);
    this.mgr = person(COL.cyan); this.mgr.position.set(-0.9, 0, 1.95); this.mgr.rotation.y = Math.PI * 0.9; this.biz.add(this.mgr);
    // ticket queue → BI backlog tray
    this.trayQ = new THREE.Mesh(roundedBox(1.5, 0.1, 1.1, 0.04), matte(0x30343c, 0.6)); this.trayQ.position.set(1.4, 0.05, -0.5); this.biz.add(this.trayQ);
    this.trayQ.add(edgeLines(this.trayQ.geometry, 0x6d7a8d, 1, 0.4));
    this.tix = Array.from({ length: 12 }, (_, i) => { const t = ticket(i % 3 ? COL.amber : COL.lava); t.rotation.x = -Math.PI / 2; this.biz.add(t); t.userData.j = [Math.sin(i * 4.1) * 0.25, Math.cos(i * 2.3) * 0.2, Math.sin(i * 1.3) * 0.4]; return t; });
    this.qLbl = this.addLabel('BI ticket queue', 'ghost', [1.4, -0.3, 0.3], this.biz);
    this.tixHit = this.hitBox(1.6, 1.4, 1.2, [-2.2, 0.7, -0.5]);
    // calendar
    this.cal = new THREE.Group(); this.cal.position.set(-1.0, 3.5, -0.4); this.biz.add(this.cal);
    const calBody = new THREE.Mesh(roundedBox(1.0, 1.0, 0.12, 0.06), matte(0xe2ded6, 0.6)); this.cal.add(calBody);
    const hdr = new THREE.Mesh(roundedBox(1.0, 0.24, 0.14, 0.05), glow(COL.lava, 1)); hdr.position.y = 0.4; this.cal.add(hdr);
    this.days = [1, 2, 3, 4, 5].map((d) => screenTex('g0day' + d, 120, 90, (c, w, h) => { c.fillStyle = '#e2ded6'; c.fillRect(0, 0, w, h); c.fillStyle = '#2a2c31'; c.font = `700 46px ${FONT}`; c.textAlign = 'center'; c.fillText(String(d), w / 2, 56); c.font = `600 13px ${FONT}`; c.fillStyle = '#8b8d92'; c.fillText('DAY', w / 2, 80); }));
    this.page = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.66), new THREE.MeshStandardMaterial({ map: this.days[0], roughness: 0.8 })); this.page.position.set(0, -0.08, 0.065); this.cal.add(this.page);
    this.flip = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.66), new THREE.MeshStandardMaterial({ map: this.days[0], roughness: 0.8, side: THREE.DoubleSide, transparent: true })); this.flip.geometry.translate(0, 0.33, 0); this.flip.position.set(0, -0.41, 0.07); this.cal.add(this.flip);
    this.calLbl = this.addLabel('3–5 days per new question', 'ghost nomob', [0, 0.85, 0], this.cal);
    this.bubble = this.addLabel('“Why did denied claims jump in Florida last quarter?”', 'bubble cyan', [-0.9, 2.6, 1.95], this.biz);
    this.addLabel('BUSINESS NEED', 'section', [0, 5.0, 0], this.biz);
    // bridge
    this.bridgeCurve = new THREE.CatmullRomCurve3([V(-1.4, 1.6, 0.4), V(0, 2.3, 0.6), V(1.4, 1.6, 0.4)]);
    this.bridge = new THREE.Mesh(new THREE.TubeGeometry(this.bridgeCurve, 60, 0.025, 8), matte(0x8a8f99, 0.5)); g.add(this.bridge); this.bridge.geometry.setDrawRange(0, 0);
    this.chev = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.26, 16), glow(COL.lava, 1.5)); g.add(this.chev);
    // developer tray
    this.dev = new THREE.Group(); this.dev.position.set(3.7, 0, 0); this.dev.scale.setScalar(1.18); g.add(this.dev);
    this.tray = new THREE.Mesh(roundedBox(5.4, 0.12, 3.9, 0.06), matte(0x252a33, 0.7)); this.tray.position.y = 0.06; this.dev.add(this.tray);
    const grid = new THREE.GridHelper(5.2, 26, 0x5d6a7d, 0x3a4250); grid.position.y = 0.125; grid.material.transparent = true; grid.material.opacity = 0.35; this.dev.add(grid);
    this.tray.add(edgeLines(this.tray.geometry, 0x6d7a8d, 1, 0.4));
    this.blocks = BLOCKS.map((b, i) => {
      const row = i < 4 ? 0 : 1, col = row ? 3 - (i - 4) : i;
      const grp = new THREE.Group(); grp.position.set(-1.95 + col * 1.3, 0.12, row ? 0.95 : -0.95); this.dev.add(grp);
      const ped = new THREE.Mesh(roundedBox(0.95, 0.14, 0.95, 0.04), matte(0x3a3f47, 0.55)); ped.position.y = 0.07; grp.add(ped);
      const ic = icon(b.id); ic.position.y = 0.14; grp.add(ic); grp.userData.ic = ic;
      grp.userData.lbl = this.addLabel('<b>' + (i + 1) + '</b> ' + b.n, 'ghost tiny', [0, -0.18, 0.62], grp);
      this.pick(grp, b.id, i === 0 || i === 4 ? [0.38, 0.95, 0] : null);
      return grp;
    });
    this.flow = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.blocks.map((b) => b.position.clone().add(V(0, 0.12, 0)))), new THREE.LineBasicMaterial({ color: COL.lava, transparent: true, opacity: 0.7 }));
    this.flow.position.y = 0.04; this.dev.add(this.flow);
    this.addLabel('DEVELOPER SOLUTION', 'section', [0, 4.25, 0], this.dev);
    this.solLbl = this.addLabel('Genie Agent on curated, governed data · answers in seconds', 'lava nomob', [0, 2.3, -1.6], this.dev);
    this.pick(this.mgr, 'manager', [0, 1.95, 0]);
    this.pick(this.tixHit, 'ticketQueue', null);
    this.pick(this.trayQ, 'ticketQueue', [0.75, 0.5, 0]);
    this.pick(this.cal, 'waitTime', [0.6, 0.6, 0.1]);
    this.pick(this.hitBox(3.2, 0.6, 0.3, [-4.5, 2.6, 1.95]), 'question', null);
    this.pick(this.tray, 'blueprint2', [2.6, 0.3, 1.6]);
    this._p = V(0, 0, 0);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    // tickets fly from the desk into the queue and pile up
    this.tix.forEach((k, i) => {
      const a = 0.3 + i * 0.22, p = E.io(seg(t, a, a + 0.6));
      const [jx, jz, jr] = k.userData.j;
      const from = V(-0.5, 1.4, 0.8), to = V(1.4 + jx, 0.13 + Math.floor(i / 2) * 0.045 + (i % 2) * 0.02, -0.5 + jz);
      k.position.lerpVectors(from, to, p); k.position.y += Math.sin(p * Math.PI) * 0.9;
      k.rotation.z = jr * p;
      sc(k, (p > 0 ? 1 : 0) * fade);
    });
    this.show(this.qLbl, seg(t, 1.2, 1.6) * fade);
    // calendar flips through days 1..5
    const cs = E.back(seg(t, 0.6, 1.1)) * fade; sc(this.cal, cs);
    const ft = seg(t, 1.4, 6.4) * 4, fi = Math.min(3, Math.floor(ft)), fp = ft - fi;
    this.page.material.map = this.days[Math.min(4, fi + (fp > 0.5 || ft >= 4 ? 1 : 0))];
    this.flip.material.map = this.days[fi];
    this.flip.rotation.x = -E.io(fp) * Math.PI; this.flip.visible = ft < 4 && ft > 0;
    this.show(this.calLbl, seg(t, 1.2, 1.6) * fade);
    this.show(this.bubble, seg(t, 0.2, 0.6) * fade);
    this.mgr.rotation.y = Math.PI * 0.9 + Math.sin(time * 0.7) * 0.12;
    // bridge
    const br = E.io(seg(t, 2.6, 3.4));
    this.bridge.geometry.setDrawRange(0, Math.floor(br * fade * this.bridge.geometry.index.count / 3) * 3);
    this.chev.visible = br > 0.02 && fade > 0.05;
    this.bridgeCurve.getPoint(Math.min(0.999, br), this._p); this.chev.position.copy(this._p);
    this.chev.quaternion.setFromUnitVectors(V(0, 1, 0), this.bridgeCurve.getTangent(Math.min(0.999, br)));
    this.blocks.forEach((b, i) => {
      const p = E.back(seg(t, 3.4 + i * 0.32, 3.9 + i * 0.32)) * fade;
      sc(b.userData.ic, p);
      b.userData.ic.position.y = 0.14 + Math.sin(time * 1.4 + i) * 0.03 * p;
      b.userData.ic.rotation.y = Math.sin(time * 0.5 + i) * 0.35;
      this.show(b.userData.lbl, seg(t, 3.6 + i * 0.32, 3.9 + i * 0.32) * fade);
    });
    this.flow.geometry.setDrawRange(0, Math.max(0, Math.ceil(seg(t, 3.6, 6.2) * 8 * fade)));
    this.show(this.solLbl, seg(t, 6.6, 7.0) * fade);
  }
}

// ───────────────────────── 1 · GOAL
const SQL1 = [['SELECT', KW], ['  `Member state`,', ID], ['  MEASURE(`Denial rate`)', ID], ['FROM claims_metrics', ID], ['WHERE quarter IN (Q2, Q3)', DIM], ['GROUP BY ALL', KW]];
export class GGoal extends Station {
  constructor() {
    super({ loop: 9, cam: { pos: [0, 4.6, 15], target: [0, 2.4, 0] } });
    const g = this.group;
    this.mgr = person(COL.cyan); this.mgr.position.set(-4.6, 0, 1.2); this.mgr.rotation.y = 0.5; g.add(this.mgr);
    // chat panel
    const chatTex = screenTex('g1chat', 300, 120, (c, w, h) => { c.fillStyle = '#23262d'; c.fillRect(0, 0, w, h); c.fillStyle = '#8aa4ba'; c.beginPath(); c.roundRect(14, 14, 272, 54, 10); c.fill(); c.fillStyle = '#1c1f25'; c.font = `600 14px ${FONT}`; c.fillText('Denial rate by state,', 26, 36); c.fillText('last quarter vs prior?', 26, 56); c.fillStyle = '#7d828c'; c.font = `11px ${FONT}`; c.fillText('Ask Genie…', 18, 100); c.fillStyle = '#d9653b'; c.fillRect(262, 88, 22, 18); });
    this.chat = panel(2.3, 0.92, chatTex, { edge: COL.cyan }); this.chat.position.set(-3.6, 3.3, 0.6); this.chat.rotation.y = 0.25; g.add(this.chat);
    // core in middle
    this.core = agentCore(0.55); this.core.position.set(-1.0, 2.6, 0); g.add(this.core);
    this.coreLbl = this.addLabel('Genie', 'lava', [0, -1.0, 0], this.core);
    // SQL card
    this.sql = panel(2.2, 1.25, codeTex('g1sql', SQL1, { w: 300, h: 170, title: 'Generated SQL' }), { edge: COL.lava, edgeO: 0.6 }); this.sql.position.set(1.4, 4.3, 0.2); this.sql.rotation.y = -0.1; g.add(this.sql);
    // chart
    this.chart = barChart(6, { w: 3.0, d: 0.8, maxH: 2.2, colors: [COL.lava, 0x8a8f99, 0x8a8f99, 0x8aa4ba, 0x8aa4ba, 0x8aa4ba] }); this.chart.position.set(3.2, 0, 0.6); this.chart.rotation.y = -0.35; g.add(this.chart);
    this.vals = [0.98, 0.72, 0.71, 0.69, 0.66, 0.64];
    ['FL', 'GA', 'TX', 'AZ', 'NC', 'OH'].forEach((s, i) => this.addLabel(s, 'ghost tiny', [this.chart.bars[i].position.x, -0.15, 0.6], this.chart));
    this.sumLbl = this.addLabel('<b>Florida</b> rose 2.6 pts to 9.8%, the largest increase.', 'bubble', [3.2, 3.3, 0.6]);
    this.cap = this.addLabel('Question → <b>SQL</b> → table + chart + summary', 'big', [0, 6.2, 0]);
    // flow
    this.curve = new THREE.CatmullRomCurve3([V(-3.6, 3.0, 0.6), V(-1.0, 2.6, 0), V(0.6, 3.8, 0.2), V(1.6, 4.0, 0.3), V(3.0, 2.0, 0.6)]);
    this.stream = new Stream(this.curve, 50, COL.lava, 0.2, 0.3); g.add(this.stream.points);
    this.pick(this.mgr, 'manager', [0, 1.95, 0]);
    this.pick(this.chat, 'question', [1.15, 0.46, 0.05]);
    this.pick(this.sql, 'sqlCard', [1.1, 0.62, 0.05]);
    this.pick(this.chart, 'chart', [1.6, 2.4, 0]);
    this.pick(this.hitBox(3.0, 0.8, 0.3, [3.2, 3.3, 0.6]), 'summary', null);
    this.pick(this.core, 'llm2', null);
  }
  update(t, time) {
    const fade = 1 - seg(t, 8.6, 9);
    sc(this.chat, E.back(seg(t, 0.2, 0.7)) * fade);
    this.chat.position.y = 3.3 + Math.sin(time) * 0.05;
    const thinking = bell(t, 1.4, 3.4);
    sc(this.core, E.back(seg(t, 0.8, 1.3)) * fade);
    this.core.rotation.y = time * (0.4 + thinking * 3); this.core.heart.rotation.x = time * 1.2;
    this.core.ring.scale.setScalar(1 + thinking * 0.2);
    this.show(this.coreLbl, seg(t, 1.0, 1.4) * fade);
    sc(this.sql, E.back(seg(t, 2.6, 3.2)) * fade);
    this.sql.position.y = 4.3 + Math.sin(time * 0.8) * 0.06;
    const cv = E.out(seg(t, 3.6, 5.2));
    sc(this.chart, seg(t, 3.3, 3.6) * fade);
    this.chart.set(this.vals.map((v, i) => v * E.out(seg(cv * 1.4 - i * 0.07, 0, 1))));
    this.show(this.sumLbl, seg(t, 5.4, 5.8) * fade);
    this.show(this.cap, seg(t, 0.3, 0.8) * fade);
    this.stream.update(time, bell(t, 0.8, 5.6) * fade);
  }
}

// ───────────────────────── 2 · CURATE (bronze → silver → gold star)
export class GCurate extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 5.2, 15], target: [0, 2.2, 0] } });
    const g = this.group;
    const tray = (x, h, c, name) => {
      const grp = new THREE.Group(); grp.position.set(x, 0, 0); g.add(grp);
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.0, h, 6), matte(0x2f333b, 0.6)); ped.position.y = h / 2; grp.add(ped);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.1, 6), matte(c, 0.5)); top.position.y = h + 0.05; grp.add(top);
      top.add(edgeLines(top.geometry, c, 1, 0.8));
      grp.userData.top = h + 0.1;
      grp.userData.lbl = this.addLabel(name, 'ghost', [0, -0.3, 1.3], grp);
      return grp;
    };
    this.bz = tray(-4.2, 0.5, 0x8c6a4a, 'Bronze · raw 837 feeds');
    this.sv = tray(-1.2, 1.1, 0x8a8f99, 'Silver · cleaned');
    this.gd = tray(2.9, 1.7, COL.amber, 'Gold · star schema');
    // bronze: messy jumble of cubes
    this.mess = Array.from({ length: 16 }, (_, i) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), matte(i % 5 ? 0x7a6450 : 0x9a4a3a, 0.7)); m.userData.r = [Math.sin(i * 3.1) * 0.8, Math.cos(i * 2.7) * 0.7, i * 0.7]; this.bz.add(m); return m; });
    // silver: tidy rows
    this.rows = Array.from({ length: 12 }, (_, i) => { const m = new THREE.Mesh(roundedBox(0.5, 0.08, 0.22, 0.02), matte(0xaeb2ba, 0.5)); m.position.set(-0.3 + (i % 2) * 0.6, this.sv.userData.top + 0.04 + Math.floor(i / 2) * 0.1, 0); this.sv.add(m); return m; });
    // gold: star schema
    this.star = new THREE.Group(); this.star.position.y = this.gd.userData.top + 0.75; this.gd.add(this.star);
    this.fact = new THREE.Mesh(roundedBox(0.75, 0.75, 0.75, 0.08), glow(COL.lava, 1.3)); this.star.add(this.fact);
    this.factLbl = this.addLabel('fact_claims', 'lava', [0, 0.72, 0], this.star);
    this.dims = ['dim_member', 'dim_provider', 'dim_plan', 'dim_date'].map((n, i) => {
      const a = i / 4 * Math.PI * 2 + 0.4, d = new THREE.Mesh(roundedBox(0.42, 0.42, 0.42, 0.06), matte([COL.cyan, COL.violet, COL.mint, COL.amber][i], 0.4));
      d.userData.a = a; this.star.add(d);
      const b = new Beam(0xc9ccd4, 0.018); this.star.add(b.mesh); d.userData.beam = b;
      d.userData.lbl = this.addLabel(n, 'ghost tiny', [0, -0.4, 0], d);
      return d;
    });
    // pipeline arcs + streams
    const c1 = new THREE.CatmullRomCurve3([V(-4.2, 1.0, 0), V(-2.7, 2.2, 0.2), V(-1.2, 1.5, 0)]);
    const c2 = new THREE.CatmullRomCurve3([V(-1.2, 1.8, 0), V(0.9, 3.0, 0.2), V(2.9, 2.6, 0)]);
    [c1, c2].forEach((c) => { const tb = new THREE.Mesh(new THREE.TubeGeometry(c, 48, 0.02, 6), matte(0x6d7a8d, 0.5)); g.add(tb); });
    this.s1 = new Stream(c1, 40, 0x8c6a4a, 0.2, 0.35); g.add(this.s1.points);
    this.s2 = new Stream(c2, 40, COL.amber, 0.2, 0.35); g.add(this.s2.points);
    // rejected rows (expectations)
    this.rej = Array.from({ length: 4 }, () => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), glow(0xb3594a, 1)); g.add(m); return m; });
    this.rejLbl = this.addLabel('EXPECT … DROP ROW', 'tiny', [-2.7, 1.0, 0.9]);
    this.pipeLbl = this.addLabel('Lakeflow Spark Declarative Pipelines', 'big', [0, 6.0, 0]);
    this.pick(this.bz, 'bronze', [0, 1.4, 0]);
    this.pick(this.sv, 'silver', [0, 2.0, 0]);
    this.pick(this.fact, 'factClaims', [0.45, 0.45, 0]);
    this.dims.forEach((d, i) => this.pick(d, 'dimTables', i === 1 ? [0.3, 0.3, 0] : null));
    this.pick(this.hitBox(5, 2.4, 0.6, [-1, 2.2, 0.2]), 'pipeline', null);
    this.pick(this.hitBox(4.4, 0.5, 0.3, [0, 6.0, 0]), 'pipeline', null);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    this.mess.forEach((m, i) => { const [x, z, r] = m.userData.r; m.position.set(x * 0.8, this.bz.userData.top + 0.12 + (i % 3) * 0.2 + Math.sin(time * 2 + i) * 0.03, z * 0.8); m.rotation.set(r + time * 0.2, r, r * 0.5); sc(m, E.back(seg(t, 0.1 + i * 0.03, 0.5 + i * 0.03)) * fade); });
    this.rows.forEach((m, i) => sc(m, E.back(seg(t, 1.6 + i * 0.12, 2.0 + i * 0.12)) * fade));
    this.s1.update(time, bell(t, 1.0, 5.0) * fade);
    this.s2.update(time, bell(t, 3.2, 8.4) * fade);
    this.rej.forEach((m, i) => { const p = seg((t - 1.4 - i * 0.7) % 2.8, 0, 1.4); m.position.set(-2.7 + i * 0.12, 2.1 - E.in(p) * 2.0, 0.3 + p * 0.5); sc(m, (p > 0 && p < 1 ? 1 : 0) * seg(t, 1.3, 1.5) * (1 - seg(t, 5.0, 5.4)) * fade); });
    this.show(this.rejLbl, bell(t, 1.4, 5.4) * fade);
    const st = E.back(seg(t, 4.0, 4.8)) * fade;
    sc(this.fact, st); this.show(this.factLbl, seg(t, 4.4, 4.8) * fade);
    this.star.rotation.y = time * 0.25;
    this.dims.forEach((d, i) => {
      const p = E.out(seg(t, 4.8 + i * 0.25, 5.5 + i * 0.25)) * fade;
      const a = d.userData.a, r = 1.5 * p;
      d.position.set(Math.sin(a) * r, Math.sin(time + i) * 0.06 + (i % 2 ? 0.15 : -0.05), Math.cos(a) * r); sc(d, p);
      d.userData.beam.set(V(0, 0, 0), d.position, p);
      this.show(d.userData.lbl, seg(t, 5.4 + i * 0.25, 5.8 + i * 0.25) * fade);
    });
    for (const tr of [this.bz, this.sv, this.gd]) this.show(tr.userData.lbl, seg(t, 0.2, 0.6) * fade);
    this.show(this.pipeLbl, seg(t, 0.4, 0.9) * fade);
  }
}

// ───────────────────────── 3 · DESCRIBE (columns, comments, keys)
const COLS = [['claim_id', 'PK · one row per claim'], ['member_id', 'FK → dim_member'], ['provider_id', 'FK → dim_provider'], ['member_state', '2-letter state'], ['service_date', 'date of service'], ['claim_status', 'PAID · DENIED · PENDED'], ['paid_amount', 'USD paid'], ['denial_reason', 'CARC reason']];
export class GDescribe extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 5.4, 14.6], target: [0, 2.1, 0] } });
    const g = this.group;
    this.slab = new THREE.Mesh(roundedBox(6.6, 0.22, 1.6, 0.06), matte(0x30343c, 0.55)); this.slab.position.set(-0.6, 0.11, 0.4); g.add(this.slab);
    this.slab.add(edgeLines(this.slab.geometry, COL.amber, 1, 0.5));
    this.slabLbl = this.addLabel('main.claims.fact_claims', 'ghost', [-0.6, -0.25, 1.4]);
    this.pillars = COLS.map(([n, c], i) => {
      const grp = new THREE.Group(); grp.position.set(-3.5 + i * 0.83, 0.22, 0.4); g.add(grp);
      const h = 0.9 + ((i * 37) % 5) * 0.25;
      const p = new THREE.Mesh(roundedBox(0.34, h, 0.34, 0.05), matte(i === 5 ? 0x9a8a6a : 0x7d828c, 0.45)); p.geometry.translate(0, h / 2, 0); grp.add(p);
      grp.userData.p = p; grp.userData.h = h;
      const tag = new THREE.Mesh(roundedBox(0.62, 0.32, 0.03, 0.04), matte(0xd6d3cc, 0.8)); tag.position.set(0, h + 0.38, 0.05); grp.add(tag);
      const pin = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.2, 0.03), matte(0x8a8f99)); pin.position.set(0, h + 0.12, 0); grp.add(pin);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.035), glow(COL.lava, 1)); strip.position.set(-0.27, 0, 0.005); tag.add(strip);
      grp.userData.tag = tag; grp.userData.pin = pin;
      grp.userData.nl = this.addLabel(n, 'ghost tiny', [0, i % 2 ? -0.42 : -0.12, 0.45], grp);
      grp.userData.cl = this.addLabel(c, 'tiny', [0, h + 0.78, 0], grp);
      return grp;
    });
    // AI generate orb
    this.orb = new THREE.Group(); g.add(this.orb);
    this.orb.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), glow(COL.violet, 2.5)));
    this.orbRing = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.015, 6, 48), glow(COL.violet, 1.5)); this.orb.add(this.orbRing);
    this.orbLbl = this.addLabel('AI generate', 'violet', [0, 0.55, 0], this.orb);
    // dimension cubes with keys at the back
    this.dimsG = new THREE.Group(); this.dimsG.position.set(0, 0, -2.4); g.add(this.dimsG);
    this.dimM = new THREE.Mesh(roundedBox(1.2, 0.8, 0.8, 0.06), matte(COL.cyan, 0.45)); this.dimM.position.set(-3.0, 1.6, 0); this.dimsG.add(this.dimM);
    this.dimP = new THREE.Mesh(roundedBox(1.2, 0.8, 0.8, 0.06), matte(COL.violet, 0.45)); this.dimP.position.set(-0.5, 2.6, 0); this.dimsG.add(this.dimP);
    this.addLabel('dim_member', 'ghost tiny', [-3.0, 2.2, 0], this.dimsG); this.addLabel('dim_provider', 'ghost tiny', [-0.5, 3.2, 0], this.dimsG);
    this.keyA = keyIcon(); this.keyA.position.set(-3.25, 1.6, 0.45); this.dimsG.add(this.keyA);
    this.keyB = keyIcon(); this.keyB.position.set(-0.75, 2.6, 0.45); this.dimsG.add(this.keyB);
    this.keyF = keyIcon(COL.lava); this.keyF.position.set(-3.6, 0.6, 1.25); this.keyF.scale.setScalar(0.8); g.add(this.keyF);
    // FK arcs
    const arc = (from, to) => { const mid = from.clone().lerp(to, 0.5); mid.y += 1.4; const c = new THREE.QuadraticBezierCurve3(from, mid, to); const m = new THREE.Mesh(new THREE.TubeGeometry(c, 48, 0.03, 8), glow(COL.lava, 1.2)); m.geometry.setDrawRange(0, 0); g.add(m); return m; };
    this.fk1 = arc(V(-2.67, 1.4, 0.4), V(-3.0, 1.6, -2.0));
    this.fk2 = arc(V(-1.84, 1.6, 0.4), V(-0.5, 2.6, -2.0));
    this.fkLbl = this.addLabel('FOREIGN KEY … REFERENCES', 'lava nomob', [-1.2, 3.9, -0.9]);
    this.cap = this.addLabel('Metadata Genie reads: <b>comments</b> · <b>keys</b> · <b>synonyms</b>', 'big', [0, 6.0, 0]);
    // synonym card
    this.syn = panel(2.0, 0.9, screenTex('g3syn', 240, 108, (c, w, h) => { c.fillStyle = '#23262d'; c.fillRect(0, 0, w, h); c.fillStyle = '#9893b5'; c.font = `600 12px ${FONT}`; c.fillText('Synonyms (agent-level)', 12, 22); c.fillStyle = '#c9ccd4'; c.font = `12px ${FONT}`; c.fillText('“denials” → claim_status = DENIED', 12, 50); c.fillText('“Florida” → member_state = FL', 12, 74); c.fillStyle = '#7d828c'; c.fillText('prompt matching on', 12, 96); }), { edge: COL.violet });
    this.syn.position.set(4.6, 3.0, 0.2); this.syn.rotation.y = -0.35; g.add(this.syn);
    this.pillars.forEach((p, i) => this.pick(p, i === 0 ? 'primaryKey' : i < 3 ? 'foreignKey' : 'columns', i === 4 ? [0.25, p.userData.h * 0.5, 0.2] : null));
    this.pillars.forEach((p, i) => { if (i === 5) this.pick(p.userData.tag, 'comment', [0.35, 0.18, 0.05]); else this.pick(p.userData.tag, 'comment', null); });
    this.pick(this.orb, 'aiGenerate', [0.3, 0.3, 0]);
    this.pick(this.keyA, 'primaryKey', [0.2, 0.2, 0]); this.pick(this.keyB, 'primaryKey', null);
    this.pick(this.fk2, 'foreignKey', null); this.pick(this.fk1, 'foreignKey', null);
    this.pick(this.dimM, 'dimTables', null); this.pick(this.dimP, 'dimTables', null);
    this.pick(this.syn, 'comment', null);
    this.pick(this.slab, 'factClaims', null);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    this.show(this.slabLbl, seg(t, 0.1, 0.5) * fade);
    const ox = lerp(-4.2, 3.4, E.io(seg(t, 1.0, 5.0)));
    this.orb.position.set(ox, 3.4 + Math.sin(time * 2) * 0.1, 0.9); sc(this.orb, bell(t, 0.8, 5.6) > 0.02 ? Math.min(1, bell(t, 0.8, 5.6) * 3) * fade : 0.001);
    this.orb.rotation.y = time * 2; this.orbRing.rotation.x = time;
    this.show(this.orbLbl, bell(t, 0.9, 5.4) * fade);
    this.pillars.forEach((p, i) => {
      const rise = E.out(seg(t, 0.1 + i * 0.08, 0.7 + i * 0.08)) * fade;
      p.userData.p.scale.y = Math.max(0.001, rise);
      const x = -3.5 + i * 0.83, on = E.back(seg(ox - x, 0, 0.5)) * fade * (t > 1 ? 1 : 0);
      sc(p.userData.tag, on); p.userData.tag.position.y = p.userData.h * rise + 0.38; p.userData.pin.scale.y = Math.max(0.001, on); p.userData.pin.position.y = p.userData.h * rise + 0.12;
      p.userData.tag.rotation.y = (1 - on) * Math.PI;
      this.show(p.userData.nl, seg(t, 0.5, 0.9) * fade);
      this.show(p.userData.cl, seg(t, 5.2 + i * 0.05, 5.6 + i * 0.05) * fade * (i % 2 === 0 || i === 5 ? 1 : 0));
    });
    sc(this.dimsG, E.out(seg(t, 5.0, 5.6)) * fade);
    for (const k of [this.keyA, this.keyB]) k.rotation.y = Math.sin(time * 1.5) * 0.6;
    sc(this.keyF, E.back(seg(t, 5.4, 5.8)) * fade); this.keyF.rotation.z = Math.sin(time) * 0.2;
    const f1 = E.io(seg(t, 5.8, 6.8)), f2 = E.io(seg(t, 6.2, 7.2));
    this.fk1.geometry.setDrawRange(0, Math.floor(f1 * fade * this.fk1.geometry.index.count / 3) * 3);
    this.fk2.geometry.setDrawRange(0, Math.floor(f2 * fade * this.fk2.geometry.index.count / 3) * 3);
    this.show(this.fkLbl, seg(t, 6.8, 7.2) * fade);
    sc(this.syn, E.back(seg(t, 7.2, 7.8)) * fade); this.syn.position.y = 3.0 + Math.sin(time * 0.9) * 0.06;
    this.show(this.cap, seg(t, 0.3, 0.8) * fade);
  }
}

// ───────────────────────── 4 · METRICS (prism, dials, rings)
const YAML = [['version: 1.1', DIM], ['source: fact_claims', ID], ['dimensions:', KW], ['  - Member state', ID], ['  - Service quarter', ID], ['measures:', KW], ['  - Denial rate', STR], ['    COUNT(1) FILTER(DENIED)/COUNT(1)', DIM], ['  - Total paid: SUM(paid_amount)', STR]];
export class GMetrics extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 4.8, 15], target: [0, 2.6, 0] } });
    const g = this.group;
    this.prism = new THREE.Group(); this.prism.position.set(-0.4, 2.7, 0); g.add(this.prism);
    const pg = new THREE.CylinderGeometry(1.1, 1.1, 2.4, 3, 1);
    this.prismM = new THREE.Mesh(pg, frost(0x9893b5, 0.32)); this.prism.add(this.prismM);
    this.prism.add(edgeLines(pg, 0xe9e6e0, 1, 0.6));
    this.inner = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 1.6, 3), glow(COL.violet, 2)); this.prism.add(this.inner);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.4, 6), matte(0x2f333b, 0.6)); ped.position.set(-0.4, 0.2, 0); g.add(ped);
    this.prLbl = this.addLabel('claims_metrics · metric view', 'violet', [0, 1.65, 0], this.prism);
    // dimension rings
    this.rings = ['Member state', 'Plan type', 'Service quarter'].map((n, i) => {
      const r = new THREE.Mesh(new THREE.TorusGeometry(1.55 + i * 0.28, 0.022, 8, 120), matte([COL.cyan, COL.mint, COL.amber][i], 0.4));
      r.position.copy(this.prism.position); g.add(r);
      r.userData.lbl = this.addLabel(n, 'ghost tiny', [0, 0, 0], r);
      r.userData.lbl.position.set(1.55 + i * 0.28, 0, 0);
      return r;
    });
    // raw rows flowing in from left
    this.rowsIn = Array.from({ length: 14 }, (_, i) => { const m = new THREE.Mesh(roundedBox(0.5, 0.08, 0.24, 0.02), matte(i % 4 ? 0xaeb2ba : 0xb3594a, 0.5)); g.add(m); return m; });
    this.rowLbl = this.addLabel('fact_claims rows', 'ghost', [-5.0, 1.6, 0.4]);
    // dials out on the right
    this.dials = [['Denial rate', '9.8%', 0.62], ['Total paid', '$412M', 0.8], ['Claims', '412,880', 0.7]].map(([n, v, x], i) => {
      const d = gauge(0.55, [COL.lava, COL.amber, COL.cyan][i]); d.position.set(3.9, 4.4 - i * 1.4, 0.3); d.rotation.y = -0.3; g.add(d);
      d.userData.x = x; d.userData.lbl = this.addLabel(`${n} <b>${v}</b>`, 'ghost', [0.95, 0, 0], d);
      d.userData.lbl.center.set(0, 0.5);
      return d;
    });
    this.beams = this.dials.map(() => { const b = new Beam(COL.violet, 0.02); g.add(b.mesh); return b; });
    // YAML
    this.yaml = panel(2.5, 1.95, codeTex('g4yaml', YAML, { w: 300, h: 234, title: 'WITH METRICS LANGUAGE YAML' }), { edge: COL.violet }); this.yaml.position.set(-4.0, 4.6, -0.6); this.yaml.rotation.y = 0.3; g.add(this.yaml);
    this.mLbl = this.addLabel('MEASURE(`Denial rate`) · one definition everywhere', 'lava nomob', [0.2, 0.3, 2.4]);
    this.pick(this.prismM, 'metricView', [0.9, 1.1, 0]);
    this.pick(this.yaml, 'yamlSpec', [1.2, 0.95, 0.05]);
    this.dials.forEach((d, i) => this.pick(d, 'measure', i === 0 ? [0.5, 0.5, 0.1] : null));
    this.rings.forEach((r, i) => this.pick(r, 'dimension', null));
    this.pick(this.hitBox(4.2, 0.5, 4.2, [-0.4, 2.7, 0]), 'dimension', null);
    this.rowsIn.forEach((m, i) => this.pick(m, 'rawRows', null));
    this.pick(this.hitBox(2.4, 1.2, 0.8, [-4.4, 2.2, 0.3]), 'rawRows', null);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    sc(this.prism, E.back(seg(t, 0.1, 0.7)) * fade);
    this.prism.rotation.y = time * 0.35; this.inner.rotation.y = -time * 1.4;
    this.show(this.prLbl, seg(t, 0.5, 0.9) * fade);
    this.rings.forEach((r, i) => {
      const p = E.out(seg(t, 0.8 + i * 0.25, 1.5 + i * 0.25)) * fade; sc(r, p);
      r.rotation.set(Math.PI / 2 + Math.sin(time * 0.5 + i * 2) * 0.35, time * (0.2 + i * 0.1), i * 0.7);
      this.show(r.userData.lbl, seg(t, 1.4 + i * 0.25, 1.8 + i * 0.25) * fade);
    });
    const flow = bell(t, 1.2, 8.6) > 0.05 ? 1 : 0;
    this.rowsIn.forEach((m, i) => {
      const p = ((time * 0.35 + i / 14) % 1);
      m.position.set(lerp(-6.0, -1.0, p), 1.4 + Math.sin(i * 1.7) * 0.6 + p * 1.0, 0.3 + Math.cos(i) * 0.3);
      m.rotation.y = p * 0.6; sc(m, flow * (1 - seg(p, 0.8, 1)) * seg(p, 0, 0.1) * fade);
    });
    this.show(this.rowLbl, seg(t, 1.2, 1.6) * fade);
    this.dials.forEach((d, i) => {
      const p = E.out(seg(t, 3.0 + i * 0.4, 4.6 + i * 0.4)) * fade;
      sc(d, E.back(seg(t, 2.8 + i * 0.4, 3.2 + i * 0.4)) * fade); d.set(d.userData.x * p);
      this.show(d.userData.lbl, seg(t, 3.6 + i * 0.4, 4.0 + i * 0.4) * fade);
      this.beams[i].set(this.prism.position, d.position, E.io(seg(t, 2.6 + i * 0.4, 3.1 + i * 0.4)) * fade);
    });
    sc(this.yaml, E.back(seg(t, 0.4, 1.0)) * fade); this.yaml.position.y = 4.6 + Math.sin(time * 0.8) * 0.05;
    this.show(this.mLbl, seg(t, 5.4, 5.8) * fade);
  }
}
