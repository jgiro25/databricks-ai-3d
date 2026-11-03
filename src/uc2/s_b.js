import * as THREE from 'three';
import { Station } from '../stations/base.js';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, person, Stream, seg, bell, E, lerp } from '../helpers.js';
import { screenTex, codeTex, panel, barChart, warehouse, agentCore, shield, gauge, KW, ID, STR, DIM, FONT, MONO, LBeam as Beam } from './kit.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const sc = (o, v) => o.scale.setScalar(Math.max(0.001, v));
const tileTex = (key, title, sub, col) => screenTex(key, 180, 90, (c, w, h) => { c.fillStyle = '#23262d'; c.fillRect(0, 0, w, h); c.fillStyle = col; c.fillRect(0, 0, 5, h); c.fillStyle = '#e9e6e0'; c.font = `600 15px ${FONT}`; c.fillText(title, 16, 36); c.fillStyle = '#8b8d92'; c.font = `12px ${FONT}`; c.fillText(sub, 16, 62); });

// ───────────────────────── 5 · ASSEMBLE THE AGENT
const DS = [['fact_claims', 'table · 38M rows', '#d9653b'], ['dim_member', 'table', '#8aa4ba'], ['dim_provider', 'table', '#9893b5'], ['dim_plan', 'table', '#8eae9d'], ['claims_metrics', 'metric view', '#c3a273']];
const EX = [['-- Top denial reasons in :state', DIM], ['SELECT denial_reason, COUNT(*)', KW], ['WHERE member_state = :state', ID]];
export class GAgent extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 4.9, 15], target: [0, 2.6, 0] } });
    const g = this.group;
    this.core = agentCore(1.0); this.core.position.set(0, 3.0, 0); g.add(this.core);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.5, 8), matte(0x2f333b, 0.6)); ped.position.y = 0.25; g.add(ped);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 12), metal(0x6d7280, 0.4, 0.6)); col.position.y = 1.2; g.add(col);
    this.coreLbl = this.addLabel('Claims Ops · Genie Agent', 'lava', [0, 1.55, 0], this.core);
    // data source tiles dock around lower ring
    this.tiles = DS.map(([n, s, c], i) => {
      const m = panel(1.15, 0.58, tileTex('g5t' + i, n, s, c), { edge: new THREE.Color(c).getHex(), edgeO: 0.6, d: 0.05 });
      m.userData.a = -Math.PI * 0.62 + i * (Math.PI * 1.24 / 4); m.userData.start = V(-6 + i * 0.4, 0.6 + i * 0.5, 2.4); g.add(m); return m;
    });
    this.dsLbl = this.addLabel('Data · 4 tables + 1 metric view (≤ 5 recommended)', 'ghost nomob', [0, 0.95, 2.4]);
    // warehouse
    this.wh = warehouse(4, 0.7); this.wh.position.set(4.6, 0, -0.6); g.add(this.wh);
    this.whLbl = this.addLabel('Serverless SQL warehouse', 'ghost', [0, 1.75, 0], this.wh);
    this.link = new Beam(COL.lava, 0.03); g.add(this.link.mesh);
    // orbiting example cards
    this.orbit = new THREE.Group(); this.orbit.position.copy(this.core.position); g.add(this.orbit);
    this.cards = [0, 1, 2, 3].map((i) => { const m = panel(1.2, 0.5, codeTex('g5ex' + (i % 2), i % 2 ? [['-- Paid PMPM by plan', DIM], ['SELECT plan_type,', KW], ['  MEASURE(`Total paid`)', ID]] : EX, { w: 230, h: 90 }), { edge: COL.amber, edgeO: 0.5, d: 0.04 }); m.userData.a = i * Math.PI / 2; this.orbit.add(m); return m; });
    this.exLbl = this.addLabel('Example SQL · <b>:parameters</b>', 'ghost nomob', [-3.6, 5.4, 0]);
    // trusted shield
    this.shield = shield(COL.mint, 1.1); this.shield.position.set(-3.6, 3.0, 0.8); this.shield.rotation.y = 0.35; g.add(this.shield);
    this.shLbl = this.addLabel('Trusted · denial_rate_by_state()', 'mint', [0, -0.85, 0], this.shield);
    // instructions panel
    this.ins = panel(2.1, 1.2, screenTex('g5ins', 250, 144, (c, w, h) => { c.fillStyle = '#23262d'; c.fillRect(0, 0, w, h); c.fillStyle = '#c3a273'; c.font = `600 12px ${FONT}`; c.fillText('Instructions (last resort)', 12, 22); c.fillStyle = '#c9ccd4'; c.font = `11.5px ${FONT}`; ['“Last quarter” = last complete', 'calendar quarter (service_date).', 'No time range? Ask which quarter.', 'Rates as % with one decimal.'].forEach((l, i) => c.fillText(l, 12, 48 + i * 22)); }), { edge: COL.amber });
    this.ins.position.set(3.2, 4.6, 0.6); this.ins.rotation.y = -0.3; g.add(this.ins);
    this.pick(this.core.shell, 'agentCore', [0.8, 0.8, 0]);
    this.tiles.forEach((m, i) => this.pick(m, 'dataSources', i === 0 ? [0.58, 0.3, 0.05] : null));
    this.pick(this.wh, 'warehouse', [0.7, 1.4, 0]);
    this.cards.forEach((m, i) => this.pick(m, 'examples', i === 0 ? [0.6, 0.26, 0.05] : null));
    this.pick(this.shield, 'trusted', [0.4, 0.45, 0.1]);
    this.pick(this.ins, 'instructions', [1.05, 0.6, 0.05]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    sc(this.core, E.back(seg(t, 0.1, 0.7)) * fade);
    const fill = seg(t, 1, 8);
    this.core.rotation.y = time * 0.3; this.core.heart.rotation.y = -time * 1.5;
    this.core.heart.scale.setScalar(0.6 + fill * 0.6 + Math.sin(time * 3) * 0.04);
    this.core.ring.rotation.z = time * 0.4;
    this.show(this.coreLbl, seg(t, 0.5, 0.9) * fade);
    this.tiles.forEach((m, i) => {
      const p = E.io(seg(t, 0.8 + i * 0.3, 1.8 + i * 0.3));
      const a = m.userData.a, dest = V(Math.sin(a) * 2.3, 1.2 + Math.abs(Math.cos(a)) * 0.15, Math.cos(a) * 1.4 + 0.6);
      m.position.lerpVectors(m.userData.start, dest, p); m.position.y += Math.sin(p * Math.PI) * 1.2;
      m.rotation.set(-0.35 * p, a * 0.6 * p, 0); sc(m, seg(t, 0.7 + i * 0.3, 0.9 + i * 0.3) * fade);
    });
    this.show(this.dsLbl, seg(t, 2.6, 3.0) * fade);
    sc(this.wh, E.back(seg(t, 2.4, 3.0)) * fade);
    this.wh.disks.forEach((d, i) => (d.rotation.y = time * (0.3 + i * 0.15) * (i % 2 ? -1 : 1)));
    this.link.set(V(4.6, 1.2, -0.6), this.core.position, E.io(seg(t, 3.0, 3.6)) * fade);
    this.show(this.whLbl, seg(t, 2.8, 3.2) * fade);
    this.orbit.rotation.y = time * 0.45;
    this.cards.forEach((m, i) => {
      const p = E.back(seg(t, 3.8 + i * 0.25, 4.3 + i * 0.25)) * fade, a = m.userData.a;
      m.position.set(Math.sin(a) * 2.1, 1.0 + Math.sin(time + i) * 0.1, Math.cos(a) * 2.1); m.rotation.y = a; sc(m, p);
    });
    this.show(this.exLbl, seg(t, 4.2, 4.6) * fade);
    sc(this.shield, E.back(seg(t, 5.4, 6.0)) * fade); this.shield.rotation.y = 0.35 + Math.sin(time * 0.8) * 0.25;
    this.show(this.shLbl, seg(t, 5.8, 6.2) * fade);
    sc(this.ins, E.back(seg(t, 6.6, 7.2)) * fade); this.ins.position.y = 4.6 + Math.sin(time * 0.9) * 0.05;
  }
}

// ───────────────────────── 6 · ASK → SQL → CHART
const SQL6 = [['SELECT `Member state`,', KW], ['  `Service quarter`,', ID], ['  MEASURE(`Denial rate`)', ID], ['FROM claims_metrics', ID], ['WHERE quarter >= Q2 2026', DIM], ['GROUP BY ALL', KW]];
export class GAsk extends Station {
  constructor() {
    super({ loop: 10, radius: 6.6, cam: { pos: [0, 5.2, 15.6], target: [0, 2.7, 0], pk: 1.1 } });
    const g = this.group;
    const x = [-5.0, -2.8, -0.5, 1.8, 4.3];
    // 1 question
    this.q = panel(1.9, 0.8, screenTex('g6q', 230, 96, (c, w, h) => { c.fillStyle = '#8aa4ba'; c.beginPath(); c.roundRect(0, 0, w, h, 14); c.fill(); c.fillStyle = '#1c1f25'; c.font = `600 14px ${FONT}`; c.fillText('Denial rate by state,', 14, 38); c.fillText('last quarter vs prior?', 14, 62); }), { edge: COL.cyan }); this.q.position.set(x[0], 3.6, 0.6); this.q.rotation.y = 0.3; g.add(this.q);
    // 2 context selection grid (9 tiles, 3 selected)
    this.ctx = new THREE.Group(); this.ctx.position.set(x[1], 3.2, 0); this.ctx.rotation.y = 0.2; g.add(this.ctx);
    this.ctxT = Array.from({ length: 9 }, (_, i) => { const sel = [1, 4, 6].includes(i); const m = new THREE.Mesh(roundedBox(0.5, 0.34, 0.06, 0.04), sel ? glow(COL.amber, 1) : matte(0x4a4f58, 0.6)); m.position.set(((i % 3) - 1) * 0.6, (1 - Math.floor(i / 3)) * 0.44, 0); m.userData.sel = sel; this.ctx.add(m); return m; });
    this.ctxLbl = this.addLabel('select context', 'ghost', [0, -0.95, 0], this.ctx);
    // 3 LLM
    this.llm = new THREE.Group(); this.llm.position.set(x[2], 3.4, 0); g.add(this.llm);
    const ic = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 1), matte(0x9893b5, 0.38)); this.llm.add(ic); this.llm.add(edgeLines(ic.geometry, 0xe9e6e0, 1, 0.35)); this.llmM = ic;
    this.llmLbl = this.addLabel('LLM writes SQL', 'violet', [0, -1.0, 0], this.llm);
    // 4 SQL card above, warehouse below
    this.sql = panel(2.2, 1.3, codeTex('g6sql', SQL6, { w: 300, h: 176, title: 'read-only SQL' }), { edge: COL.lava, edgeO: 0.6 }); this.sql.position.set(x[3] - 0.4, 5.1, -0.4); g.add(this.sql);
    this.wh = warehouse(3, 0.6); this.wh.position.set(x[3], 0, 0.2); g.add(this.wh);
    this.whLbl = this.addLabel('SQL warehouse runs it', 'ghost', [0, 1.4, 0.7], this.wh);
    // 5 chart
    this.chart = new THREE.Group(); this.chart.position.set(x[4], 0, 0.6); this.chart.rotation.y = -0.4; g.add(this.chart);
    this.cA = barChart(4, { w: 1.8, d: 0.4, maxH: 2.4, colors: [0x6d7280, 0x6d7280, 0x6d7280, 0x6d7280] }); this.cA.position.z = -0.25; this.chart.add(this.cA);
    this.cB = barChart(4, { w: 1.8, d: 0.4, maxH: 2.4, colors: [COL.lava, 0x8aa4ba, 0x8aa4ba, 0x8aa4ba] }); this.cB.position.z = 0.25; this.chart.add(this.cB);
    this.cA.children[0].visible = false;
    ['FL', 'GA', 'TX', 'AZ'].forEach((s, i) => this.addLabel(s, 'ghost tiny', [this.cB.bars[i].position.x, -0.15, 0.7], this.chart));
    this.chLbl = this.addLabel('<b>Q3</b> vs Q2 · FL +2.6 pts', 'lava', [0, 3.0, 0], this.chart);
    this.fb = this.addLabel('👍 👎 · view SQL', 'tiny', [0, 3.5, 0], this.chart);
    this.trusted = this.addLabel('Trusted answer when a verified function is used', 'mint nomob', [0, 0.2, 3.2]);
    // flow curve
    this.curve = new THREE.CatmullRomCurve3([V(x[0], 3.6, 0.6), V(x[1], 3.2, 0.3), V(x[2], 3.4, 0.2), V(x[3] - 0.4, 4.6, 0), V(x[3], 1.4, 0.4), V(x[4], 2.2, 0.6)]);
    this.tube = new THREE.Mesh(new THREE.TubeGeometry(this.curve, 160, 0.02, 6), matte(0x6d7a8d, 0.5)); g.add(this.tube); this.tube.geometry.setDrawRange(0, 0);
    this.packet = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 12), glow(COL.lava, 3)); g.add(this.packet);
    this.stepLbls = ['① ask', '② context', '③ generate', '④ execute', '⑤ visualize'].map((s, i) => this.addLabel(s, 'tiny', [x[i], 0.35, 2.0]));
    this.pick(this.q, 'question', [0.95, 0.4, 0.05]);
    this.pick(this.ctx, 'contextSel', [0.9, 0.6, 0]);
    this.pick(this.llm, 'llm2', [0.5, 0.5, 0]);
    this.pick(this.sql, 'sqlCard', [1.1, 0.65, 0.05]);
    this.pick(this.wh, 'warehouse', [0.6, 1.1, 0]);
    this.pick(this.chart, 'chart', [1.0, 2.6, 0]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    const pr = seg(t, 0.8, 7.0), cnt = this.tube.geometry.index.count;
    this.tube.geometry.setDrawRange(0, Math.floor(E.io(pr) * fade * cnt / 3) * 3);
    this.curve.getPoint(Math.min(0.999, E.io(pr)), this.packet.position); this.packet.visible = pr > 0 && pr < 1 && fade > 0.1;
    sc(this.q, E.back(seg(t, 0.1, 0.6)) * fade); this.q.position.y = 3.6 + Math.sin(time) * 0.05;
    sc(this.ctx, E.back(seg(t, 1.2, 1.7)) * fade);
    this.ctxT.forEach((m, i) => { const on = m.userData.sel ? seg(t, 2.0, 2.4) : 0; m.position.z = on * 0.35; sc(m, (m.userData.sel ? 1 : 1 - seg(t, 2.2, 2.8) * 0.4) * 1); });
    this.show(this.ctxLbl, seg(t, 1.4, 1.8) * fade);
    const gen = bell(t, 2.6, 4.4);
    sc(this.llm, E.back(seg(t, 2.2, 2.7)) * fade); this.llm.rotation.set(time * (0.3 + gen * 2), time * (0.4 + gen * 3), 0);
    this.show(this.llmLbl, seg(t, 2.5, 2.9) * fade);
    sc(this.sql, E.back(seg(t, 3.8, 4.3)) * fade); this.sql.position.y = 5.1 + Math.sin(time * 0.8) * 0.06;
    sc(this.wh, E.back(seg(t, 4.4, 4.9)) * fade);
    const run = bell(t, 4.8, 6.4);
    this.wh.disks.forEach((d, i) => (d.rotation.y = time * (0.3 + run * 4) * (i % 2 ? -1 : 1)));
    this.show(this.whLbl, seg(t, 4.8, 5.2) * fade);
    const cv = E.out(seg(t, 6.2, 7.6));
    sc(this.chart, seg(t, 6.0, 6.2) * fade);
    this.cA.set([0.72, 0.69, 0.66, 0.6].map((v) => v * cv));
    this.cB.set([0.98, 0.71, 0.64, 0.62].map((v, i) => v * E.out(seg(cv * 1.3 - i * 0.08, 0, 1))));
    this.show(this.chLbl, seg(t, 7.4, 7.8) * fade); this.show(this.fb, seg(t, 7.8, 8.2) * fade);
    this.show(this.trusted, seg(t, 8.0, 8.4) * fade);
    this.stepLbls.forEach((l, i) => this.show(l, seg(t, 0.4 + i * 1.4, 0.8 + i * 1.4) * fade));
  }
}

// ───────────────────────── 7 · GOVERN (same question, different rows)
const STATES = [['FL', COL.lava], ['TX', COL.cyan], ['GA', 0x6d7280], ['FL', COL.lava], ['AZ', 0x6d7280], ['TX', COL.cyan], ['FL', COL.lava], ['NC', 0x6d7280], ['TX', COL.cyan], ['OH', 0x6d7280]];
export class GGovern extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 5.0, 15.2], target: [0, 2.6, 0] } });
    const g = this.group;
    this.uFL = person(COL.lava); this.uFL.position.set(-4.4, 0, 1.4); this.uFL.rotation.y = 0.6; g.add(this.uFL);
    this.uTX = person(COL.cyan); this.uTX.position.set(4.4, 0, 1.4); this.uTX.rotation.y = -0.6; g.add(this.uTX);
    this.lFL = this.addLabel('FL manager', 'lava', [-4.4, 2.05, 1.4]); this.lTX = this.addLabel('TX manager', 'cyan', [4.4, 2.05, 1.4]);
    this.bFL = this.addLabel('“Denied claims by provider?”', 'bubble', [-4.4, 2.65, 1.4]); this.bTX = this.addLabel('“Denied claims by provider?”', 'bubble', [4.4, 2.65, 1.4]);
    // UC gate (arch) with sieve
    this.gate = new THREE.Group(); this.gate.position.set(0, 0, -0.4); g.add(this.gate);
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.14, 16, 80, Math.PI), metal(0x4a4f58, 0.35, 0.6)); arch.position.y = 2.0; this.gate.add(arch);
    [-1.7, 1.7].forEach((x) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 2.0, 16), metal(0x4a4f58, 0.35, 0.6)); p.position.set(x, 1.0, 0); this.gate.add(p); });
    this.archGlow = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.03, 8, 80, Math.PI), glow(COL.lava, 1.4)); this.archGlow.position.set(0, 2.0, 0.15); this.gate.add(this.archGlow);
    this.sh = shield(COL.amber, 0.9); this.sh.position.set(0, 3.95, 0.15); this.gate.add(this.sh);
    this.gateLbl = this.addLabel('Unity Catalog · checked as the end user', 'ghost', [0, 4.7, 0], this.gate);
    this.sieve = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.06, 6, 1, true), frost(0x8a8f99, 0.35)); this.sieve.position.set(0, 2.2, 0); this.gate.add(this.sieve);
    this.sieveGrid = new THREE.Mesh(new THREE.CircleGeometry(1.2, 6), new THREE.MeshBasicMaterial({ color: 0xc3a273, wireframe: true, transparent: true, opacity: 0.4 })); this.sieveGrid.rotation.x = -Math.PI / 2; this.sieveGrid.position.set(0, 2.2, 0); this.gate.add(this.sieveGrid);
    this.rfLbl = this.addLabel('ROW FILTER state_filter(member_state)', 'lava nomob', [0, 1.65, 1.6], this.gate);
    // rows falling
    this.rows = STATES.map(([s, c], i) => { const m = new THREE.Mesh(roundedBox(0.62, 0.16, 0.3, 0.03), c === 0x6d7280 ? matte(c, 0.5) : glow(c, 1)); m.userData.s = s; g.add(m); return m; });
    // result tables at each side
    const res = (key, rows, col) => panel(2.0, 1.1, screenTex(key, 240, 132, (c, w, h) => { c.fillStyle = '#1c1f25'; c.fillRect(0, 0, w, h); c.fillStyle = col; c.font = `600 12px ${FONT}`; c.fillText('provider · state · denied · member', 10, 20); c.font = `12px ${MONO}`; c.fillStyle = '#c9ccd4'; rows.forEach((r, i) => c.fillText(r, 10, 48 + i * 24)); c.fillStyle = '#7d828c'; c.fillText('member_id masked', 10, 122); }), { edge: new THREE.Color(col).getHex() });
    this.rFL = res('g7fl', ['Bayview   FL 1,204 ***0042', 'Coral Ort FL   988 ***7731', 'Tampa Gen FL   811 ***1290'], '#d9653b'); this.rFL.position.set(-2.7, 4.4, 0.8); this.rFL.rotation.y = 0.35; g.add(this.rFL);
    this.rTX = res('g7tx', ['LoneStar  TX 1,117 ***5510', 'Gulf Fam  TX   642 ***2208', 'Austin Rx TX   590 ***9013'], '#8aa4ba'); this.rTX.position.set(2.7, 4.4, 0.8); this.rTX.rotation.y = -0.35; g.add(this.rTX);
    // mask chip
    this.mask = new THREE.Group(); this.mask.position.set(0, 0.6, 1.8); g.add(this.mask);
    const mk = panel(1.5, 0.42, screenTex('g7mask', 180, 50, (c, w, h) => { c.fillStyle = '#23262d'; c.fillRect(0, 0, w, h); c.font = `600 16px ${MONO}`; c.fillStyle = '#7d828c'; c.fillText('M0042', 14, 32); c.fillStyle = '#d9653b'; c.fillText('→ ***0042', 76, 32); }), { edge: COL.violet }); this.mask.add(mk);
    this.maskLbl = this.addLabel('column MASK', 'violet', [0, 0.45, 0], this.mask);
    // audit log
    this.audit = panel(1.6, 1.6, screenTex('g7aud', 190, 190, (c, w, h) => { c.fillStyle = '#1c1f25'; c.fillRect(0, 0, w, h); c.fillStyle = '#c3a273'; c.font = `600 12px ${FONT}`; c.fillText('query history', 10, 20); c.font = `11px ${MONO}`; ['fl.manager  SELECT…', 'tx.manager  SELECT…', 'fl.manager  SELECT…', 'ga.analyst  SELECT…', 'tx.manager  SELECT…', 'nat.lead    SELECT…'].forEach((l, i) => { c.fillStyle = i % 2 ? '#8aa4ba' : '#c9ccd4'; c.fillText(l, 10, 46 + i * 23); }); }), { edge: COL.amber }); this.audit.position.set(0, 4.9, -2.6); g.add(this.audit);
    this.pick(this.uFL, 'userFL', [0, 1.95, 0]); this.pick(this.uTX, 'userTX', [0, 1.95, 0]);
    this.pick(this.sieve, 'rowFilter', null); this.pick(this.hitBox(2.6, 0.6, 2.6, [0, 1.8, -0.4]), 'rowFilter', null);
    this.pick(this.gate, 'ucGate', [1.9, 2.0, 0]);
    this.pick(this.mask, 'colMask', [0.75, 0.2, 0.05]);
    this.pick(this.audit, 'audit', [0.8, 0.8, 0.05]);
    this.pick(this.rFL, 'userFL', null); this.pick(this.rTX, 'userTX', null);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    this.show(this.lFL, seg(t, 0.1, 0.5) * fade); this.show(this.lTX, seg(t, 0.1, 0.5) * fade);
    this.show(this.bFL, bell(t, 0.4, 3.2)); this.show(this.bTX, bell(t, 0.7, 3.4));
    sc(this.gate, E.back(seg(t, 0.4, 1.0)) * fade); this.show(this.gateLbl, seg(t, 0.9, 1.3) * fade);
    this.sh.rotation.y = Math.sin(time) * 0.3; this.sieveGrid.rotation.z = time * 0.5; this.sieve.rotation.y = time * 0.5;
    this.show(this.rfLbl, seg(t, 2.0, 2.4) * fade);
    const run = seg(t, 1.6, 7.0);
    this.rows.forEach((m, i) => {
      const p = seg(run * 1.6 - i * 0.06, 0, 1);  // 0 → 1 travel
      const s = m.userData.s, side = s === 'FL' ? -1 : s === 'TX' ? 1 : 0;
      const top = V(((i % 5) - 2) * 0.35, 5.6, ((i % 2) - 0.5) * 0.4 - 0.4);
      let pos;
      if (p < 0.5) pos = top.clone().lerp(V(top.x * 0.6, 2.3, -0.4), E.in(p * 2));
      else if (side) { const q = E.out((p - 0.5) * 2); pos = V(lerp(top.x * 0.6, side * 3.2, q), 2.3 + Math.sin(q * Math.PI) * 0.8 + q * 0.9, lerp(-0.4, 0.8, q)); }
      else pos = V(top.x * 0.6, 2.3 - (p - 0.5) * 2 * 1.6, -0.4);
      m.position.copy(pos); m.rotation.y = side * p;
      const vis = p > 0 && (side || p < 0.95) && p < 0.999;
      sc(m, (vis ? 1 : 0) * (side ? 1 : 1 - seg(p, 0.55, 0.9)) * fade);
    });
    sc(this.rFL, E.back(seg(t, 5.6, 6.1)) * fade); sc(this.rTX, E.back(seg(t, 5.8, 6.3)) * fade);
    sc(this.mask, E.back(seg(t, 6.6, 7.1)) * fade); this.show(this.maskLbl, seg(t, 7.0, 7.4) * fade);
    sc(this.audit, E.back(seg(t, 7.4, 7.9)) * fade);
  }
}

// ───────────────────────── 8 · BENCHMARK & MONITOR
export class GBench extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 5.0, 15.2], target: [0, 2.5, 0] } });
    const g = this.group;
    // conveyor
    this.belt = new THREE.Mesh(roundedBox(10.2, 0.16, 1.1, 0.06), matte(0x30343c, 0.6)); this.belt.position.set(0, 1.0, 0.6); g.add(this.belt);
    this.belt.add(edgeLines(this.belt.geometry, 0x6d7a8d, 1, 0.4));
    [-4.6, 4.6].forEach((x) => { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.9, 0.9), matte(0x2b2e35)); leg.position.set(x, 0.45, 0.6); g.add(leg); });
    this.rollers = Array.from({ length: 14 }, (_, i) => { const r = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 12), metal(0x6d7280, 0.4, 0.6)); r.rotation.x = Math.PI / 2; r.position.set(-4.9 + i * 0.75, 1.1, 0.6); g.add(r); return r; });
    // comparator arch
    this.cmp = new THREE.Group(); this.cmp.position.set(0, 1.1, 0.6); g.add(this.cmp);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.3), frost(0x5b6470, 0.25)); frame.position.y = 0.8; this.cmp.add(frame); const fe = edgeLines(frame.geometry, 0xc9ccd4, 1, 0.5); fe.position.y = 0.8; this.cmp.add(fe);
    this.scan = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.04), glow(COL.lava, 3)); this.scan.rotation.x = -Math.PI / 2; this.cmp.add(this.scan);
    this.gt = panel(1.5, 0.9, codeTex('g8gt', [['SELECT * FROM', KW], ['denial_rate_by_state(', ID], ["  DATE'2026-07-01', …)", STR]], { w: 200, h: 120, title: 'ground truth' }), { edge: COL.mint }); this.gt.position.set(-1.6, 3.4, 0.0); this.gt.rotation.y = 0.2; g.add(this.gt);
    this.gn = panel(1.5, 0.9, codeTex('g8gn', [['SELECT `Member state`,', KW], ['MEASURE(`Denial rate`)', ID], ['FROM claims_metrics …', ID]], { w: 200, h: 120, title: 'Genie answer' }), { edge: COL.lava }); this.gn.position.set(1.6, 3.4, 0.0); this.gn.rotation.y = -0.2; g.add(this.gn);
    this.eq = this.addLabel('result sets equal?', 'ghost', [0, 3.4, 0]);
    // cards
    this.res = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
    this.cards = this.res.map((ok, i) => {
      const grp = new THREE.Group(); g.add(grp);
      const c = new THREE.Mesh(roundedBox(0.62, 0.06, 0.6, 0.03), matte(0xd6d3cc, 0.8)); grp.add(c);
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.07, 0.06), matte(0x7d828c, 0.6)); l.position.set(-0.04, 0.01, -0.12); grp.add(l);
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.05, 24), glow(ok ? COL.mint : 0xb3594a, 1.6)); st.position.set(0.12, 0.06, 0.12); grp.add(st); grp.userData.st = st;
      return grp;
    });
    this.setLbl = this.addLabel('25 real questions', 'ghost', [-4.4, 1.9, 0.6]);
    // gauge
    this.gauge = gauge(1.0, COL.mint); this.gauge.position.set(-3.6, 4.0, -0.6); this.gauge.rotation.y = 0.3; g.add(this.gauge);
    this.accLbl = this.addLabel('', 'big', [0, -1.3, 0], this.gauge);
    // monitor screen
    this.mon = panel(2.4, 1.5, screenTex('g8mon', 280, 176, (c, w, h) => { c.fillStyle = '#1c1f25'; c.fillRect(0, 0, w, h); c.fillStyle = '#c3a273'; c.font = `600 13px ${FONT}`; c.fillText('Monitor · last 7 days', 12, 22); c.font = `12px ${FONT}`; [['Denials by provider, FL', '👍'], ['Paid PMPM by plan', '👍'], ['Claims per member, MA', '👎'], ['Top denial reasons, TX', '👍'], ['Backlog by region', '⚑ review']].forEach(([q, r], i) => { c.fillStyle = '#c9ccd4'; c.fillText(q, 12, 50 + i * 24); c.fillStyle = r === '👎' ? '#b3594a' : r.startsWith('⚑') ? '#c3a273' : '#8eae9d'; c.fillText(r, 210, 50 + i * 24); }); }), { edge: COL.amber });
    this.mon.position.set(3.8, 4.1, -0.6); this.mon.rotation.y = -0.3; g.add(this.mon);
    this.pick(this.hitBox(3.4, 0.6, 1.2, [-3.2, 1.3, 0.6]), 'benchSet', null);
    this.cards.forEach((c, i) => this.pick(c, 'benchSet', null));
    this.pick(this.belt, 'benchSet', [-4.8, 0.3, 0.5]);
    this.pick(this.gt, 'groundTruth', [0.75, 0.45, 0.05]);
    this.pick(this.gn, 'sqlCard', null);
    this.pick(this.cmp, 'compare2', [0.8, 1.6, 0.65]);
    this.pick(this.gauge, 'accuracy', [0.9, 0.9, 0.1]);
    this.pick(this.mon, 'monitor', [1.2, 0.75, 0.05]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    const run = seg(t, 0.8, 7.6);
    this.rollers.forEach((r) => (r.rotation.y = time * 3 * (run > 0 ? 1 : 0.1)));
    let passed = 0, seen = 0;
    this.cards.forEach((c, i) => {
      const p = t < 0.8 ? -1 : (((t - 0.8) * 0.16 - i * 0.1) % 1 + 1) % 1; const x = lerp(-4.8, 4.8, p);
      c.position.set(x, 1.15, 0.6); sc(c, (p > 0.01 && p < 0.99 ? 1 : 0) * seg(t, 0.8 + i * 0.6, 1.0 + i * 0.6) * fade);
      const judged = x > 0; c.userData.st.visible = judged; if (judged) { seen++; passed += this.res[i]; }
      c.userData.st.scale.setScalar(judged ? E.back(seg(x, 0, 0.5)) : 0.001);
    });
    this.scan.position.y = 0.2 + (Math.sin(time * 4) * 0.5 + 0.5) * 1.3;
    sc(this.cmp, E.back(seg(t, 0.2, 0.7)) * fade);
    sc(this.gt, E.back(seg(t, 0.6, 1.1)) * fade); sc(this.gn, E.back(seg(t, 0.8, 1.3)) * fade);
    this.show(this.eq, seg(t, 1.2, 1.6) * fade); this.show(this.setLbl, seg(t, 0.4, 0.8) * fade);
    const acc = E.out(seg(t, 2.0, 7.6)) * 0.92;
    sc(this.gauge, E.back(seg(t, 1.4, 1.9)) * fade); this.gauge.set(acc);
    this.accLbl.element.innerHTML = `accuracy <b>${Math.round(acc * 100)}%</b>`;
    this.show(this.accLbl, seg(t, 1.8, 2.2) * fade);
    sc(this.mon, E.back(seg(t, 7.0, 7.6)) * fade); this.mon.position.y = 4.1 + Math.sin(time * 0.8) * 0.05;
  }
}

// ───────────────────────── 9 · SHARE (satellites)
const SAT = [['genieOne', 'Genie One', COL.lava], ['teams', 'Microsoft Teams', COL.violet], ['embed', 'Embedded iframe', COL.cyan], ['api', 'Conversation API', COL.amber], ['mcp', 'MCP server → agents', COL.mint]];
function satIcon(id, col) {
  const g = new THREE.Group(), acc = glow(col, 1.3), dark = matte(0x2b2e35, 0.5);
  if (id === 'genieOne') { const ph = new THREE.Mesh(roundedBox(0.5, 0.9, 0.06, 0.08), dark); g.add(ph); for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(roundedBox(i % 2 ? 0.28 : 0.34, 0.1, 0.02, 0.04), i % 2 ? acc : matte(0x8aa4ba)); b.position.set(i % 2 ? 0.06 : -0.03, 0.22 - i * 0.18, 0.04); g.add(b); } }
  if (id === 'teams') { const s = new THREE.Mesh(roundedBox(0.7, 0.7, 0.12, 0.12), matte(0x6a6596, 0.45)); g.add(s); const t = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.08, 0.04), matte(0xe9e6e0)); t.position.set(0, 0.14, 0.07); g.add(t); const t2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.36, 0.04), matte(0xe9e6e0)); t2.position.set(0, -0.04, 0.07); g.add(t2); }
  if (id === 'embed') { const w = new THREE.Mesh(roundedBox(1.0, 0.7, 0.05, 0.05), dark); g.add(w); const bar = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.1, 0.02), matte(0x4a4f58)); bar.position.set(0, 0.28, 0.03); g.add(bar); const fr = new THREE.Mesh(roundedBox(0.6, 0.38, 0.02, 0.03), acc); fr.position.set(0.1, -0.06, 0.04); g.add(fr); }
  if (id === 'api') { for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.05, 8, 24, Math.PI * 0.7), acc); b.rotation.z = s > 0 ? -Math.PI * 0.35 : Math.PI * 0.65; b.position.x = s * 0.06; g.add(b); } const d = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.04), matte(0xe9e6e0)); d.rotation.z = -0.4; g.add(d); }
  if (id === 'mcp') { const body = new THREE.Mesh(roundedBox(0.5, 0.42, 0.3, 0.06), dark); g.add(body); for (const x of [-0.12, 0.12]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 10), acc); p.position.set(x, 0.34, 0); g.add(p); } const c = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 8, 30, Math.PI), acc); c.rotation.z = Math.PI; c.position.y = -0.3; g.add(c); }
  return g;
}
export class GShare extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 5.0, 15], target: [0, 2.8, 0] } });
    const g = this.group;
    this.core = agentCore(0.9); this.core.position.set(0, 3.0, 0); g.add(this.core);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.5, 8), matte(0x2f333b, 0.6)); ped.position.y = 0.25; g.add(ped);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.7, 12), metal(0x6d7280, 0.4, 0.6)); col.position.y = 1.2; g.add(col);
    this.coreLbl = this.addLabel('Genie Agent · <b>CAN RUN</b>', 'lava', [0, 1.4, 0], this.core);
    this.sats = SAT.map(([id, n, c], i) => {
      const grp = new THREE.Group(); g.add(grp);
      const ic = satIcon(id, c); grp.add(ic); grp.userData.ic = ic;
      const a = -Math.PI * 0.5 + i * (Math.PI / 4);
      grp.userData.base = V(Math.sin(a) * 4.4, 3.0 + Math.cos(a) * 1.9, Math.cos(a) * 0.8 - 0.4);
      grp.userData.lbl = this.addLabel(n, 'ghost', [0, -0.75, 0], grp);
      const b = new Beam(c, 0.02); g.add(b.mesh); grp.userData.beam = b;
      const pk = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 8), glow(c, 3)); g.add(pk); grp.userData.pk = pk;
      this.pick(grp, id, [0.5, 0.5, 0]);
      return grp;
    });
    this.ucLbl = this.addLabel('Same identity, same UC permissions on every path', 'big', [0, 6.6, 0]);
    this.apiLbl = this.addLabel('POST /api/2.0/genie/spaces/{id}/start-conversation', 'tiny', [0, 0.45, 2.4]);
    this.pick(this.core.shell, 'agentCore', [0.7, 0.7, 0]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    sc(this.core, E.back(seg(t, 0.1, 0.7)) * fade);
    this.core.rotation.y = time * 0.3; this.core.heart.rotation.x = time; this.core.ring.rotation.z = time * 0.3;
    this.show(this.coreLbl, seg(t, 0.5, 0.9) * fade);
    this.sats.forEach((s, i) => {
      const p = E.out(seg(t, 1.0 + i * 0.45, 1.8 + i * 0.45)) * fade, b = s.userData.base;
      s.position.copy(this.core.position).lerp(b, p); s.position.y += Math.sin(time * 0.9 + i) * 0.1;
      sc(s, p); s.userData.ic.rotation.y = Math.sin(time * 0.6 + i) * 0.4;
      s.userData.beam.set(this.core.position, s.position, p > 0.95 ? 1 : 0);
      const q = (time * 0.6 + i * 0.37) % 1; s.userData.pk.position.copy(this.core.position).lerp(s.position, (i % 2) ? q : 1 - q);
      s.userData.pk.visible = p > 0.95;
      this.show(s.userData.lbl, seg(t, 1.6 + i * 0.45, 2.0 + i * 0.45) * fade);
    });
    this.show(this.ucLbl, seg(t, 4.4, 4.8) * fade);
    this.show(this.apiLbl, seg(t, 5.0, 5.4) * fade);
  }
}
