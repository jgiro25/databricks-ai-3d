import * as THREE from 'three';
import { Station } from '../stations/base.js';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, person, makeDoc, Stream, seg, bell, E, lerp } from '../helpers.js';
import { screenTex, codeTex, panel, shield, agentCore, tableTex, cardTex, deltaSlab, bucket, hnswGraph, modelStack, vectorStrip, fakeVec, FONT, MONO, KW, ID, STR, DIM, LBeam as Beam } from './kit.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const sc = (o, v) => o.scale.setScalar(Math.max(0.001, v));
const chunkCard = (key, title, txt, foot, accent) => panel(1.9, 1.05, cardTex(key, { title, parts: [[txt, null, null]], foot, w: 260, h: 144, accent }), { d: 0.04 });

function rack(w = 1.6, h = 3.2, d = 1.4) {
  const g = new THREE.Group();
  const shell = new THREE.Mesh(roundedBox(w, h, d, 0.08), frost(0x5b6470, 0.16)); shell.position.y = h / 2 + 0.05; g.add(shell);
  shell.add(edgeLines(new THREE.BoxGeometry(w, h, d), 0x8aa4ba, 1, 0.6));
  const base = new THREE.Mesh(roundedBox(w + 0.2, 0.12, d + 0.2, 0.04), metal(0x4a4f58, 0.4, 0.6)); base.position.y = 0.06; g.add(base);
  g.leds = [];
  for (let i = 0; i < 6; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.02), glow(i % 2 ? COL.mint : COL.amber, 1.4)); l.position.set(-w / 2 + 0.2, 0.4 + i * 0.5, d / 2 + 0.01); g.add(l); g.leds.push(l); }
  g.shell = shell; return g;
}

// ───────────────────────── 5 · EMBED
const SPACE = [
  // [x,y,z,color] clusters: deadlines (lava), credentialing (cyan), fees (mint)
  ...Array.from({ length: 9 }, (_, i) => [-0.6 + Math.sin(i * 2.1) * 0.35, 0.7 + Math.cos(i * 1.3) * 0.3, 0.3 + Math.sin(i) * 0.3, COL.lava]),
  ...Array.from({ length: 9 }, (_, i) => [0.7 + Math.sin(i * 1.7) * 0.35, -0.5 + Math.cos(i * 2.3) * 0.3, -0.3 + Math.sin(i * 0.7) * 0.3, COL.cyan]),
  ...Array.from({ length: 8 }, (_, i) => [0.5 + Math.sin(i * 2.9) * 0.3, 0.8 + Math.cos(i * 1.9) * 0.25, -0.6 + Math.sin(i * 1.3) * 0.3, COL.mint]),
];
export class XEmbed extends Station {
  constructor() {
    super({ loop: 11, cam: { pos: [0, 4.6, 14.8], target: [0, 2.4, 0] } });
    const g = this.group;
    this.card = chunkCard('rx_e_card', 'chunk acme_pa-0041', '4.2 Provider shall submit claims within ninety (90) days of the date of service…', 'chunk_text', '#d9653b');
    g.add(this.card); this.pick(this.card, 'chunkIn', [0.95, 0.52, 0.03]);
    this.model = modelStack(6, 1.3); this.model.position.set(-1.6, 0.3, 0.6); g.add(this.model);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.95, 0.3, 8), matte(0x2f333b, 0.6)); ped.position.set(-1.6, 0.15, 0.6); g.add(ped);
    this.pick(this.model.plates[3], 'embedModel', [0.75, 0.4, 0]);
    this.modelL = this.addLabel('databricks-gte-large-en', 'lava', [-1.6, 2.3, 0.6]);
    // vector strip
    this.vec = vectorStrip(fakeVec(48, 3), { w: 4.2, maxH: 0.8 }); this.vec.position.set(2.3, 3.0, 0.6); g.add(this.vec);
    this.vecHit = this.hitBox(4.4, 1.6, 0.3, [2.3, 3.0, 0.6]); this.pick(this.vecHit, 'vectorStrip', [2.2, 0.8, 0]);
    this.vecL = this.addLabel('1,024 floats (48 drawn) · illustrative', 'tiny', [2.3, 2.0, 0.6]);
    this.vals = panel(4.3, 0.55, codeTex('rx_vals', [['[0.0123, -0.0831, 0.0412, 0.0067, -0.0219, … 1,019 more]', STR]], { w: 520, h: 40 }), { d: 0.03 });
    this.vals.position.set(2.3, 4.2, 0.4); g.add(this.vals);
    // meaning space
    this.space = new THREE.Group(); this.space.position.set(3.6, 0.95, -0.8); g.add(this.space);
    const cube = new THREE.BoxGeometry(2.4, 1.8, 1.8); this.space.add(edgeLines(cube, 0x8d929b, 1, 0.5));
    const box = new THREE.Mesh(cube, frost(0x5b6470, 0.06)); this.space.add(box);
    this.dots = SPACE.map(([x, y, z, c]) => { const d = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), glow(c, 1.2)); d.position.set(x, y * 0.8, z); this.space.add(d); return d; });
    this.newDot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 10), glow(0xffffff, 2)); this.space.add(this.newDot);
    this.pick(box, 'meaningSpace', [1.2, 0.9, 0]);
    this.spL = this.addLabel('Similar meaning → nearby points', 'ghost', [3.6, -0.15, 0.3]);
    this.c1 = this.addLabel('deadlines', 'tiny', [-0.6, 1.15, 0.3], this.space);
    this.c2 = this.addLabel('credentialing', 'tiny', [0.7, -0.85, -0.3], this.space);
    // two storage options
    const opt = (x, id, col, title) => {
      const grp = new THREE.Group(); grp.position.set(x, 0, 1.9); g.add(grp);
      const p = new THREE.Mesh(roundedBox(1.7, 0.3, 0.9, 0.06), matte(0x2f333b, 0.6)); p.position.y = 0.15; grp.add(p);
      const tag = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.04, 0.04), glow(col, 1.4)); tag.position.set(0, 0.31, 0.46); grp.add(tag);
      grp.userData.lbl = this.addLabel(title, 'tiny', [0, 0.75, 0], grp);
      this.pick(grp, id, [0.8, 0.5, 0.3]); return grp;
    };
    this.optA = opt(-4.4, 'managedOpt', COL.lava, '<b>Managed</b> · vectors stored in the index');
    const gr = hnswGraph({ layers: 2, counts: [4, 8], w: 1.0, d: 0.5, gap: 0.3 }); gr.position.y = 0.4; this.optA.add(gr);
    this.optB = opt(-0.6, 'selfOpt', COL.cyan, '<b>Self-managed</b> · ARRAY&lt;FLOAT&gt; in Delta');
    const sl = deltaSlab(1.2, 0.5, 2); sl.position.y = 0.3; this.optB.add(sl);
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.52), glow(COL.cyan, 1.2)); col.position.set(0.72, 0.55, 0); this.optB.add(col);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    const p = E.io(seg(t, 0.6, 2.2));
    this.card.position.set(lerp(-4.6, -1.6, p), lerp(3.2, 1.8, p), lerp(0.4, 0.6, p)); this.card.rotation.y = lerp(0.4, 0, p);
    sc(this.card, E.back(seg(t, 0.1, 0.6)) * (1 - seg(t, 2.0, 2.4) * 0.999) * f);
    sc(this.model, E.out(seg(t, 0.2, 0.9)) * f); this.show(this.modelL, seg(t, 0.6, 1.0) * f);
    this.model.plates.forEach((pl, i) => { pl.material.emissiveIntensity = 0.03 + 0.06 * bell((t * 1.6 - i * 0.25) % 2, 0, 1) * seg(t, 2.0, 2.4) * 10; });
    this.model.core.rotation.y = time;
    this.vec.position.x = 2.3; sc(this.vec, seg(t, 2.4, 2.5) * f); this.vec.set(E.out(seg(t, 2.5, 3.8)));
    this.show(this.vecL, seg(t, 3.2, 3.6) * f); sc(this.vals, E.back(seg(t, 3.6, 4.1)) * f);
    sc(this.space, E.out(seg(t, 4.4, 5.1)) * f); this.space.rotation.y = Math.sin(time * 0.25) * 0.3;
    const q = E.io(seg(t, 5.3, 6.5)); this.newDot.position.set(lerp(-1.6, -0.55, q), lerp(1.5, 0.62, q), lerp(1.2, 0.35, q));
    this.newDot.visible = t > 5.3;
    this.show(this.spL, seg(t, 5.0, 5.4) * f); this.show(this.c1, seg(t, 5.2, 5.6) * f); this.show(this.c2, seg(t, 5.3, 5.7) * f);
    sc(this.optA, E.back(seg(t, 6.8, 7.4)) * f); sc(this.optB, E.back(seg(t, 7.2, 7.8)) * f);
    this.show(this.optA.userData.lbl, seg(t, 7.2, 7.6) * f); this.show(this.optB.userData.lbl, seg(t, 7.6, 8.0) * f);
  }
}

// ───────────────────────── 6 · INDEX
export class XIndex extends Station {
  constructor() {
    super({ loop: 11, radius: 6.6, cam: { pos: [0, 4.8, 15.2], target: [0, 2.3, 0] } });
    const g = this.group;
    this.slab = deltaSlab(2.2, 1.4, 4); this.slab.position.set(-4.0, 0, 0.3); g.add(this.slab);
    this.tbl = panel(2.7, 1.0, tableTex('rx_idx_src', { title: 'chunks', sub: 'source table', cols: [['chunk_id', 110], ['chunk_text', 200]], rows: [['acme_pa-0041', '4.2 Provider shall submit…'], ['acme_pa-0042', 'Claims received after…']], w: 330, h: 100 }), { d: 0.04 });
    this.tbl.position.set(-4.0, 1.6, 0.4); g.add(this.tbl);
    this.pick(this.slab, 'chunksSrc', [1.1, 0.9, 0.5]);
    this.pick(this.tbl, 'chunksSrc', null);
    // CDF pipe
    const curve = new THREE.CatmullRomCurve3([V(-2.8, 0.6, 0.4), V(-1.4, 1.0, 1.2), V(0.2, 1.0, 1.2), V(1.6, 1.4, 0.4)]);
    this.pipe = new THREE.Mesh(new THREE.TubeGeometry(curve, 60, 0.12, 12), frost(0x8aa4ba, 0.28)); g.add(this.pipe);
    this.pick(this.pipe, 'cdfPipe', null);
    this.cdfHit = this.hitBox(2.0, 0.8, 0.8, [-1.4, 1.0, 1.2]); this.pick(this.cdfHit, 'cdfPipe', [0, 0.5, 0]);
    this.curve = curve;
    this.chips = [['+', COL.mint], ['~', COL.amber], ['+', COL.mint], ['−', 0xc0563a], ['+', COL.mint]].map(([s, c]) => { const m = new THREE.Mesh(roundedBox(0.26, 0.2, 0.2, 0.05), glow(c, 1.4)); g.add(m); return m; });
    this.cdfL = this.addLabel('Change Data Feed: inserts · updates · deletes', 'tiny', [-1.2, 1.85, 1.2]);
    // sync embedding call
    this.emb = modelStack(3, 0.6); this.emb.position.set(0.2, 1.25, 1.2); g.add(this.emb);
    this.pick(this.emb.plates[1], 'syncEmbed', [0.4, 0.3, 0]);
    this.embL = this.addLabel('embeds new chunks', 'tiny', [0.2, 2.25, 1.2]);
    // endpoint + HNSW
    this.rack = rack(2.9, 3.2, 2.2); this.rack.position.set(3.0, 0, -0.2); g.add(this.rack);
    this.epHit = this.hitBox(3.0, 0.55, 2.3, [3.0, 3.0, -0.2]); this.pick(this.epHit, 'endpoint', [1.5, 0.1, 0]);
    this.graph = hnswGraph({ layers: 3, counts: [4, 10, 24], w: 2.3, d: 1.5, gap: 0.95 }); this.graph.position.set(3.0, 0.55, -0.2); g.add(this.graph);
    this.gHit = this.hitBox(2.4, 2.2, 1.6, [3.0, 1.5, -0.2]); this.pick(this.gHit, 'hnsw', [-1.1, 1.0, 0.8]);
    this.epL = this.addLabel('AI Search endpoint · <b>chunks_index</b>', 'lava', [3.0, 3.65, -0.2]);
    this.neL = this.addLabel('A separate copy built for search, <b>not</b> the Delta table', 'big', [0.4, 4.6, 0]);
    // sync mode switch
    this.sw = panel(2.4, 0.95, codeTex('rx_sync', [['pipeline_type = "TRIGGERED"', KW], ['  → index.sync() after each load', DIM], ['  or "CONTINUOUS" (seconds behind)', DIM]], { w: 300, h: 90 }), { d: 0.04 });
    this.sw.position.set(-3.8, 3.4, -0.6); this.sw.rotation.y = 0.25; g.add(this.sw);
    this.pick(this.sw, 'syncMode', [1.2, 0.45, 0.03]);
    // writeback (optional)
    this.wb = deltaSlab(1.1, 0.7, 2, 0x3a3f48); this.wb.position.set(5.2, 0, 1.7); g.add(this.wb);
    this.pick(this.wb, 'writeback', [0.5, 0.5, 0.3]);
    this.wbL = this.addLabel('optional <b>_writeback_table</b>', 'tiny', [5.2, 0.85, 1.7]);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    sc(this.slab, E.out(seg(t, 0.2, 0.8)) * f); sc(this.tbl, E.back(seg(t, 0.4, 1.0)) * f);
    this.pipe.scale.setScalar(Math.max(0.001, seg(t, 1.0, 1.6) * f));
    const on = seg(t, 1.6, 2.0) * f;
    this.chips.forEach((c, i) => { const u = (time * 0.18 + i / this.chips.length) % 1; this.curve.getPointAt(u, c.position); c.rotation.y = time + i; sc(c, on * bell(u, 0, 1) * 1.2); });
    this.show(this.cdfL, seg(t, 1.8, 2.2) * f);
    sc(this.emb, E.back(seg(t, 2.2, 2.7)) * f); this.show(this.embL, seg(t, 2.6, 3.0) * f); this.emb.core.rotation.y = time * 1.5;
    sc(this.rack, E.out(seg(t, 2.8, 3.5)) * f); this.show(this.epL, seg(t, 3.4, 3.8) * f);
    this.graph.lv.forEach((L, i) => { const p = E.out(seg(t, 3.6 + (2 - i) * 0.4, 4.4 + (2 - i) * 0.4)) * f; L.mats.forEach((m) => sc(m, p)); L.plane.scale.setScalar(Math.max(0.001, p)); });
    this.graph.children.filter((c) => c.isLineSegments).forEach((l) => (l.material.opacity = 0.35 * seg(t, 5.0, 5.6) * f));
    this.rack.leds.forEach((l, i) => (l.visible = Math.sin(time * 4 + i * 1.3) > -0.3));
    this.show(this.neL, seg(t, 5.6, 6.0) * f);
    sc(this.sw, E.back(seg(t, 6.4, 7.0)) * f);
    sc(this.wb, E.back(seg(t, 7.2, 7.7)) * f); this.show(this.wbL, seg(t, 7.5, 7.9) * f);
  }
}

// ───────────────────────── 7 · QUERY
const TOP = [
  ['[1] 0.89', 'acme_pa-0041', '4.2 Provider shall submit claims within ninety (90) days of the date of service…', '#d9653b'],
  ['[2] 0.81', 'claims_policy-0107', 'Timely filing: 90 calendar days from DOS for in- and out-of-network…', '#c3a273'],
  ['[3] 0.62', 'acme_pa-0043', '4.4 Out-of-network claims follow the limits in §7.1…', '#8aa4ba'],
];
export class XQuery extends Station {
  constructor() {
    super({ loop: 12, radius: 6.6, cam: { pos: [0, 5.0, 15.4], target: [0, 2.5, 0] } });
    const g = this.group;
    this.user = person(COL.cyan); this.user.position.set(-5.0, 0, 1.4); this.user.rotation.y = 0.6; g.add(this.user);
    this.q = panel(3.0, 0.72, cardTex('rx_q_card', { parts: [['“What’s the timely-filing limit for out-of-network claims?”', null, null]], w: 380, h: 70, accent: '#8aa4ba' }), { d: 0.04 });
    this.q.position.set(-3.9, 3.4, 1.0); this.q.rotation.y = 0.25; g.add(this.q);
    this.pick(this.q, 'question', [1.5, 0.36, 0.03]);
    this.model = modelStack(4, 0.8); this.model.position.set(-2.2, 0.0, 1.4); g.add(this.model);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.15, 8), matte(0x2f333b, 0.6)); ped.position.set(-2.2, 0.08, 1.4); g.add(ped);
    this.pick(this.model.plates[2], 'sameModel', [0.5, 0.3, 0]);
    this.modelL = this.addLabel('same model: gte-large-en', 'tiny', [-2.2, 1.45, 1.4]);
    this.qv = vectorStrip(fakeVec(24, 11), { w: 1.6, maxH: 0.45 }); this.qv.position.set(-2.2, 2.2, 1.4); g.add(this.qv);
    this.qvHit = this.hitBox(1.8, 0.9, 0.3, [-2.2, 2.2, 1.4]); this.pick(this.qvHit, 'queryVector', [0.9, 0.4, 0]);
    this.star = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), glow(0xffffff, 2.2)); g.add(this.star);
    // index graph
    this.graph = hnswGraph({ layers: 3, counts: [4, 10, 26], w: 3.2, d: 1.8, gap: 1.0, seed: 19 }); this.graph.position.set(0.9, 0.5, -0.3); g.add(this.graph);
    this.gHit = this.hitBox(3.4, 2.4, 2.0, [0.9, 1.6, -0.3]); this.pick(this.gHit, 'annWalk', [1.6, 1.3, 0.9]);
    this.idxL = this.addLabel('AI Search index · <b>ANN over vectors</b>', 'lava', [0.9, 3.25, -0.3]);
    // greedy path: one node per layer, nearest to a target point
    const target = V(0.5, 0, 0.4);
    this.path = this.graph.lv.map((L) => { let best = 0, bd = 1e9; L.pts.forEach((p, i) => { const d = (p.x - target.x) ** 2 + (p.z - target.z) ** 2; if (d < bd) { bd = d; best = i; } }); return L.pts[best].clone().add(this.graph.position); });
    this.pathB = [new Beam(COL.lava, 0.03), new Beam(COL.lava, 0.03), new Beam(COL.lava, 0.03)]; this.pathB.forEach((b) => g.add(b.mesh));
    const bottom = this.graph.lv[2];
    this.knn = bottom.pts.map((p, i) => [p.distanceTo(this.path[2].clone().sub(this.graph.position)), i]).sort((a, b) => a[0] - b[0]).slice(0, 3).map(([, i]) => bottom.mats[i]);
    this.halo = this.knn.map(() => { const h = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.02, 6, 24), glow(COL.lava, 2)); h.rotation.x = Math.PI / 2; g.add(h); return h; });
    // results
    this.res = TOP.map(([s, id, txt, c], i) => { const m = chunkCard('rx_top' + i, `${s} · ${id}`, txt, 'score · illustrative', c); m.position.set(4.6, 4.0 - i * 1.2, 0.4); m.rotation.y = -0.3; g.add(m); return m; });
    this.resHit = this.hitBox(2.0, 3.5, 0.4, [4.6, 2.8, 0.4]); this.pick(this.resHit, 'topK', [-0.9, 1.6, 0.2]);
    this.resL = this.addLabel('top-k = 3 · chunk_id, chunk_text, score', 'tiny', [4.6, 5.0, 0.4]);
    // filters
    this.filter = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.1, 0.55, 24, 1, true), frost(COL.amber, 0.4)); this.filter.position.set(-0.9, 3.7, 0.6); g.add(this.filter);
    this.pick(this.filter, 'filters', [0.4, 0.2, 0]);
    this.filterL = this.addLabel('filters={"doc_type": "contract"}', 'tiny', [-0.9, 4.2, 0.6]);
    // dimmed Delta table: not scanned
    this.slab = deltaSlab(2.0, 1.0, 3, 0x2f333b); this.slab.position.set(2.7, 0, 3.7); g.add(this.slab);
    this.x = new THREE.Group(); this.x.position.set(2.7, 1.1, 4.2); g.add(this.x);
    [1, -1].forEach((k) => { const b = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.08), glow(0xc0563a, 1.6)); b.rotation.z = k * Math.PI / 4; this.x.add(b); });
    this.pick(this.slab, 'noScan', [1.0, 0.7, 0.5]);
    this.noL = this.addLabel('chunks table: <b>not scanned</b> at query time', 'ghost', [2.7, 1.75, 4.2]);
  }
  update(t, time) {
    const f = 1 - seg(t, 11.6, 12);
    sc(this.q, E.back(seg(t, 0.2, 0.7)) * f);
    sc(this.model, E.out(seg(t, 0.6, 1.2)) * f); this.show(this.modelL, seg(t, 1.0, 1.4) * f); this.model.core.rotation.y = time * 1.5;
    sc(this.qv, seg(t, 1.6, 1.7) * f); this.qv.set(E.out(seg(t, 1.7, 2.6)));
    sc(this.graph, E.out(seg(t, 0.4, 1.4)) * f); this.show(this.idxL, seg(t, 1.0, 1.4) * f);
    sc(this.slab, E.out(seg(t, 0.8, 1.4)) * f); sc(this.x, E.back(seg(t, 2.0, 2.4)) * f); this.show(this.noL, seg(t, 2.2, 2.6) * f);
    sc(this.filter, E.back(seg(t, 2.6, 3.0)) * f); this.show(this.filterL, seg(t, 2.8, 3.2) * f); this.filter.rotation.y = time;
    // star travels from query vector into the graph, then down the layers
    const top = this.path[0].clone().add(V(0, 0.6, 0));
    const a = E.io(seg(t, 3.0, 4.0));
    const pts = [V(-2.2, 2.2, 1.4), top, ...this.path];
    let pos;
    if (t < 4.0) pos = pts[0].clone().lerp(pts[1], a);
    else { const k = Math.min(2.999, seg(t, 4.0, 6.4) * 3); const i = Math.floor(k); pos = pts[1 + i].clone().lerp(pts[2 + i], E.io(k - i)); }
    this.star.position.copy(pos); this.star.rotation.y = time * 3; sc(this.star, seg(t, 2.9, 3.0) * f * (1 - seg(t, 9.5, 9.8)));
    this.pathB.forEach((b, i) => { const s = seg(t, 4.0 + i * 0.8, 4.8 + i * 0.8); b.set(pts[1 + i], pts[2 + i], s * f); });
    this.halo.forEach((h, i) => { h.position.copy(this.knn[i].getWorldPosition(new THREE.Vector3())); sc(h, E.back(seg(t, 6.4 + i * 0.2, 6.9 + i * 0.2)) * f); h.rotation.z = time; });
    this.res.forEach((r, i) => { sc(r, E.back(seg(t, 7.0 + i * 0.35, 7.6 + i * 0.35)) * f); r.position.y = 4.0 - i * 1.2 + Math.sin(time + i) * 0.03; });
    this.show(this.resL, seg(t, 7.4, 7.8) * f);
  }
}

// ───────────────────────── 8 · PROMPT
const PROMPT = [
  ['SYSTEM', KW], ['Answer ONLY from the context. Cite as [n].', ID], ['', ''],
  ['CONTEXT', KW], ['[1] acme_pa p.12 · 4.2 Provider shall submit', STR], ['    claims within ninety (90) days of DOS…', STR],
  ['[2] claims_policy p.7 · Timely filing: 90', STR], ['    calendar days from DOS…', STR], ['[3] acme_pa p.13 · 4.4 Out-of-network claims…', STR], ['', ''],
  ['USER', KW], ['What’s the timely-filing limit for', ID], ['out-of-network claims?', ID],
];
export class XPrompt extends Station {
  constructor() {
    super({ loop: 11, cam: { pos: [0, 4.6, 14.8], target: [0, 2.5, 0] } });
    const g = this.group;
    this.graph = hnswGraph({ layers: 2, counts: [5, 14], w: 1.6, d: 1.0, gap: 0.6, seed: 5 }); this.graph.position.set(-4.6, 0.4, 0.2); g.add(this.graph);
    this.gL = this.addLabel('index', 'ghost', [-4.6, 1.5, 0.2]);
    this.retr = new THREE.Group(); this.retr.position.set(-2.6, 0, 0.6); g.add(this.retr);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 1.2, 6), metal(0x4a4f58, 0.4, 0.6)); b.position.y = 0.6; this.retr.add(b);
    this.magnet = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.09, 10, 32, Math.PI), glow(COL.lava, 1.6)); this.magnet.position.y = 1.55; this.magnet.rotation.z = Math.PI; this.retr.add(this.magnet);
    this.pick(this.retr, 'retriever', [0.5, 1.6, 0]);
    this.retrL = this.addLabel('Retriever = your code + similarity_search', 'tiny', [0, 2.05, 0], this.retr);
    this.cards = [0, 1, 2].map((i) => { const c = panel(1.1, 0.5, cardTex('rx_pc' + i, { title: `[${i + 1}]`, parts: [[TOP[i][2].slice(0, 46), null, null]], w: 200, h: 90, accent: TOP[i][3] }), { d: 0.03 }); g.add(c); return c; });
    this.prompt = panel(3.3, 3.5, codeTex('rx_prompt', PROMPT, { w: 380, h: 300, title: 'Assembled prompt' }), { d: 0.05 });
    this.prompt.position.set(0.2, 2.6, 0.2); g.add(this.prompt);
    this.pick(this.prompt, 'promptPanel', [1.65, 1.75, 0.03]);
    this.llm = agentCore(0.7); this.llm.position.set(3.5, 2.8, 0.2); g.add(this.llm);
    this.pick(this.llm.shell, 'llm', [0.6, 0.6, 0]);
    this.llmL = this.addLabel('LLM endpoint · llama-3-3-70b-instruct', 'lava', [3.5, 3.95, 0.2]);
    this.beam = new Beam(COL.lava, 0.03); g.add(this.beam.mesh);
    this.ans = this.addLabel('Out-of-network claims must be filed within <b>90 days</b> of the date of service [1][2].', 'bubble', [4.0, 1.25, 1.0]);
    this.ansHit = this.hitBox(2.4, 0.9, 0.3, [4.0, 1.25, 1.0]); this.pick(this.ansHit, 'answer', [1.2, 0.4, 0]);
    this.bigL = this.addLabel('The LLM never searches. It only reads what the retriever pasted in.', 'big', [0, 5.25, 0]);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    sc(this.graph, E.out(seg(t, 0.1, 0.7)) * f); this.show(this.gL, seg(t, 0.4, 0.8) * f);
    sc(this.retr, E.back(seg(t, 0.4, 1.0)) * f); this.show(this.retrL, seg(t, 0.8, 1.2) * f); this.magnet.rotation.y = time;
    sc(this.prompt, E.out(seg(t, 1.0, 1.6)) * f);
    this.cards.forEach((c, i) => {
      const a = seg(t, 1.6 + i * 0.6, 2.4 + i * 0.6), p = E.io(a);
      const from = V(-4.6, 1.4, 0.2), mid = V(-2.6, 2.4, 0.8), to = V(0.6, 3.05 - i * 0.64, 0.35);
      c.position.copy(p < 0.5 ? from.clone().lerp(mid, p * 2) : mid.clone().lerp(to, (p - 0.5) * 2));
      sc(c, (a > 0 ? 1 : 0.001) * (1 - seg(t, 2.4 + i * 0.6, 2.7 + i * 0.6)) * f);
    });
    sc(this.llm, E.back(seg(t, 4.0, 4.6)) * f); this.show(this.llmL, seg(t, 4.4, 4.8) * f);
    this.llm.rotation.y = time * 0.3; this.llm.heart.rotation.x = time;
    this.beam.set(V(1.9, 2.6, 0.2), V(2.8, 2.8, 0.2), seg(t, 4.8, 5.4) * f);
    this.show(this.ans, seg(t, 6.0, 6.5) * f);
    this.show(this.bigL, seg(t, 6.8, 7.2) * f);
  }
}

// ───────────────────────── 9 · STORAGE MAP
const STORES = [
  ['mapVolume', 'Volume', 'PDF file · original bytes', COL.amber],
  ['mapBronze', 'Bronze table', 'path · length · content BINARY', 0x8d929b],
  ['mapSilver', 'Silver table', 'parsed text per element', COL.mint],
  ['mapChunks', 'Chunks table', 'passages (+ vectors if self-managed)', COL.mint],
  ['mapIndex', 'AI Search index', 'vectors + synced columns', COL.cyan],
  ['mapModels', 'Model Serving', 'embed model + LLM · store no data', COL.violet],
];
export class XMap extends Station {
  constructor() {
    super({ loop: 12, radius: 7.4, cam: { pos: [0, 6.6, 14.6], target: [0, 1.7, 0] } });
    const g = this.group;
    this.nodes = STORES.map(([id, n, sub, c], i) => {
      const a = -1.15 + i * 0.46;
      const grp = new THREE.Group(); grp.position.set(Math.sin(a) * 5.6, 0, Math.cos(a) * 1.6 - 0.6); g.add(grp);
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.22, 32), matte(0x2f333b, 0.6)); ped.position.y = 0.11; grp.add(ped);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.02, 6, 64), glow(c, 1.4)); ring.rotation.x = Math.PI / 2; ring.position.y = 0.23; grp.add(ring);
      let ic;
      if (i === 0) { ic = bucket(0.5, 0.7); const d = makeDoc(0, 0.4, 0.52); d.position.set(0, 0.75, 0); ic.add(d); grp.userData.spin = d; }
      else if (i <= 3) { ic = deltaSlab(1.0, 0.7, i + 1); if (i === 3) { const v = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18 * 4, 0.72), frost(COL.cyan, 0.4)); v.position.set(0.6, 0.45, 0); ic.add(v); } }
      else if (i === 4) { ic = hnswGraph({ layers: 3, counts: [3, 6, 12], w: 0.9, d: 0.7, gap: 0.35, seed: 3 }); ic.position.y = 0.2; }
      else { ic = new THREE.Group(); const m1 = modelStack(3, 0.55); m1.position.x = -0.32; ic.add(m1); const c2 = agentCore(0.26); c2.position.set(0.36, 0.55, 0); ic.add(c2); grp.userData.core = c2; }
      ic.position.y += 0.22; grp.add(ic);
      grp.userData.lbl = this.addLabel(`<b>${n}</b><span class="lsub"><br>${sub}</span>`, 'big', [0, 1.9 + (i % 2) * 1.05, 0], grp);
      this.pick(grp, id, [0.75, 1.2, 0.4]);
      return grp;
    });
    // flow along the data path
    const ctr = this.nodes.map((n) => n.position.clone().add(V(0, 0.9, 0)));
    this.flow = new Stream(new THREE.CatmullRomCurve3(ctr.slice(0, 5)), 50, COL.lava, 0.2, 0.12); g.add(this.flow.points);
    this.qflow = new Stream(new THREE.CatmullRomCurve3([ctr[4], ctr[4].clone().lerp(ctr[5], 0.5).add(V(0, 0.8, 0.6)), ctr[5]]), 16, COL.cyan, 0.2, 0.3); g.add(this.qflow.points);
    // Unity Catalog dome
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(6.6, 48, 16, 0, Math.PI * 2, 0, Math.PI / 2), frost(COL.mint, 0.05)); this.dome.scale.y = 0.72; g.add(this.dome);
    this.domeE = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(6.6, 18, 6, 0, Math.PI * 2, 0, Math.PI / 2)), new THREE.LineBasicMaterial({ color: COL.mint, transparent: true, opacity: 0.12 })); this.domeE.scale.y = 0.72; g.add(this.domeE);
    this.uc = shield(COL.mint, 1.1); this.uc.position.set(0, 5.0, -0.6); g.add(this.uc);
    this.pick(this.uc, 'mapUC', [0.6, 0.6, 0]);
    this.ucL = this.addLabel('Unity Catalog governs all six · main.provider_ops.*', 'lava', [0, 5.95, -0.6]);
    this.keyL = this.addLabel('<b>orange</b> = build path (offline) · <b>blue</b> = query path (per question)', 'tiny', [0, -0.4, 2.4]);
  }
  update(t, time) {
    const f = 1 - seg(t, 11.6, 12);
    this.nodes.forEach((n, i) => {
      sc(n, E.back(seg(t, 0.3 + i * 0.4, 0.9 + i * 0.4)) * f);
      this.show(n.userData.lbl, seg(t, 0.8 + i * 0.4, 1.2 + i * 0.4) * f);
      if (n.userData.spin) n.userData.spin.rotation.y = time * 0.6;
      if (n.userData.core) { n.userData.core.rotation.y = time; n.userData.core.heart.rotation.x = time; }
    });
    this.flow.update(time, seg(t, 3.0, 3.6) * f); this.qflow.update(time, seg(t, 4.0, 4.6) * f);
    const d = E.out(seg(t, 4.6, 5.6)) * f;
    this.dome.material.opacity = 0.1 * d; this.domeE.material.opacity = 0.12 * d;
    sc(this.uc, E.back(seg(t, 5.2, 5.8)) * f); this.uc.rotation.y = Math.sin(time * 0.6) * 0.4;
    this.show(this.ucL, seg(t, 5.6, 6.0) * f); this.show(this.keyL, seg(t, 4.2, 4.6) * f);
  }
}
