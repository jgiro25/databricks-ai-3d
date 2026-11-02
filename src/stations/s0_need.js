import * as THREE from 'three';
import { Station } from './base.js';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, docTexture, paperBox, person, seg, bell, E, lerp } from '../helpers.js';

// Step 0: the business need (left) and the developer's solution blueprint (right).
const BLOCKS = [
  { id: 'volume', n: 'Volume' }, { id: 'deltaTable', n: 'Delta table' }, { id: 'aiParse', n: 'AI Functions' }, { id: 'embedModel', n: 'Embedding' },
  { id: 'index', n: 'AI Search' }, { id: 'llm', n: 'LLM' }, { id: 'judges', n: 'MLflow eval' }, { id: 'app', n: 'App' },
];
const SHEETS = 46;

function icon(id) {
  const g = new THREE.Group();
  const acc = glow(COL.lava, 1.2), steel = metal(0x8a8f99, 0.4, 0.6), dark = matte(0x3a3d44, 0.55);
  if (id === 'volume') { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.5, 40), steel); c.position.y = 0.25; g.add(c); const r = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 6, 40), acc); r.rotation.x = Math.PI / 2; r.position.y = 0.42; g.add(r); }
  if (id === 'deltaTable') for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(roundedBox(0.66, 0.08, 0.46, 0.02), i === 3 ? acc : matte(0x8d929b, 0.5)); s.position.y = 0.06 + i * 0.12; g.add(s); }
  if (id === 'aiParse') { const p = paperBox(0.42, 0.56, 0.03, docTexture(0), 'paper'); p.position.y = 0.32; g.add(p); const b = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.03, 0.06), acc); b.position.set(0, 0.38, 0.04); g.add(b); }
  if (id === 'embedModel') { const t = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.07, 16, 48), steel); t.position.y = 0.36; g.add(t); const h = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 8), acc); h.position.y = 0.36; g.add(h); }
  if (id === 'index') for (let i = 0; i < 14; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), i % 4 ? matte(0x8aa4ba, 0.45) : acc); s.position.set(Math.sin(i * 2.4) * 0.24, 0.32 + Math.cos(i * 1.7) * 0.18, Math.cos(i * 2.4) * 0.2); g.add(s); }
  if (id === 'llm') { const ic = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), matte(0x9893b5, 0.4)); ic.position.y = 0.36; g.add(ic); const el = edgeLines(ic.geometry, 0xe9e6e0, 1, 0.3); el.position.copy(ic.position); g.add(el); }
  if (id === 'judges') { const d = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.06, 40), dark); d.rotation.x = Math.PI / 2; d.position.y = 0.36; g.add(d); const a = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.035, 8, 48, Math.PI * 1.6), acc); a.position.set(0, 0.36, 0.04); g.add(a); }
  if (id === 'app') { const f = new THREE.Mesh(roundedBox(0.44, 0.62, 0.05, 0.06), dark); f.position.y = 0.36; g.add(f); for (let i = 0; i < 3; i++) { const m = new THREE.Mesh(roundedBox(i % 2 ? 0.26 : 0.2, 0.08, 0.02, 0.03), i % 2 ? acc : matte(0x8aa4ba)); m.position.set(i % 2 ? -0.05 : 0.06, 0.52 - i * 0.14, 0.035); g.add(m); } }
  return g;
}

export class NeedStation extends Station {
  constructor() {
    super({ loop: 10, radius: 7, cam: { pos: [0, 5.0, 15.8], target: [0, 1.9, 0], pk: 1.25 } });
    const g = this.group;
    // ---- business side ----
    this.biz = new THREE.Group(); this.biz.position.set(-3.6, 0, 0); g.add(this.biz);
    const desk = new THREE.Group(); desk.position.set(-0.6, 0, 0.9); this.biz.add(desk);
    const top = new THREE.Mesh(roundedBox(2.2, 0.08, 1.0, 0.03), matte(0x4a4038, 0.55)); top.position.y = 0.9; desk.add(top);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, z]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.9, 0.05), metal(0x2b2e34, 0.4, 0.6)); l.position.set(x * 1.0, 0.45, z * 0.42); desk.add(l); });
    const laptop = new THREE.Mesh(roundedBox(0.6, 0.4, 0.03, 0.02), matte(0x2b2e34, 0.4)); laptop.position.set(0.1, 1.15, -0.1); laptop.rotation.x = -0.25; desk.add(laptop);
    this.analyst = person(COL.cyan); this.analyst.position.set(-0.6, 0, 1.9); this.biz.add(this.analyst);
    this.analyst.rotation.y = Math.PI * 0.9;
    // instanced stack of contract PDFs
    this.stack = new THREE.InstancedMesh(new THREE.BoxGeometry(0.85, 0.045, 1.1), new THREE.MeshStandardMaterial({ color: 0xd6d3cc, roughness: 0.85 }), SHEETS);
    this.stack.position.set(1.5, 0, -0.4); this.biz.add(this.stack);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._e = new THREE.Euler();
    this.jit = Array.from({ length: SHEETS }, (_, i) => [Math.sin(i * 7.1) * 0.05, Math.cos(i * 3.3) * 0.05, Math.sin(i * 1.9) * 0.08]);
    this.stack.computeBoundingSphere = function () { this.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 1.1, 0), 1.3); };
    this.stack.computeBoundingSphere();
    this.addLabel('≈ 600 contracts &amp; policy PDFs', 'ghost', [1.5, -0.35, 0.6], this.biz);
    // clock
    this.clock = new THREE.Group(); this.clock.position.set(-1.7, 3.7, -0.6); this.biz.add(this.clock);
    const face = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.08, 64), matte(0xe2ded6, 0.6)); face.rotation.x = Math.PI / 2; this.clock.add(face);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.05, 12, 64), metal(0x3a3d44, 0.4, 0.6)); this.clock.add(rim);
    for (let i = 0; i < 12; i++) { const tk = new THREE.Mesh(new THREE.BoxGeometry(0.03, i % 3 ? 0.06 : 0.12, 0.02), matte(0x2b2e34)); const a = (i / 12) * Math.PI * 2; tk.position.set(Math.sin(a) * 0.5, Math.cos(a) * 0.5, 0.05); tk.rotation.z = -a; this.clock.add(tk); }
    this.hMin = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.46, 0.02), matte(0x2b2e34)); this.hMin.geometry.translate(0, 0.21, 0); this.hMin.position.z = 0.06; this.clock.add(this.hMin);
    this.hHr = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.02), glow(COL.lava, 1.2)); this.hHr.geometry.translate(0, 0.13, 0); this.hHr.position.z = 0.07; this.clock.add(this.hHr);
    this.clockLbl = this.addLabel('20–40 min per question', 'ghost nomob', [0, 0.95, 0], this.clock);
    this.bubble = this.addLabel('“What is the timely-filing limit for Aetna?”', 'bubble cyan', [-0.6, 2.55, 1.9], this.biz);
    this.addLabel('BUSINESS NEED', 'section', [0, 5.0, 0], this.biz);

    // ---- bridge ----
    const pts = [new THREE.Vector3(-1.4, 1.6, 0.4), new THREE.Vector3(0, 2.3, 0.6), new THREE.Vector3(1.4, 1.6, 0.4)];
    this.bridgeCurve = new THREE.CatmullRomCurve3(pts);
    this.bridge = new THREE.Mesh(new THREE.TubeGeometry(this.bridgeCurve, 60, 0.025, 8), matte(0x8a8f99, 0.5)); g.add(this.bridge);
    this.bridge.geometry.setDrawRange(0, 0);
    this.chev = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.26, 16), glow(COL.lava, 1.5)); g.add(this.chev);

    // ---- developer side: blueprint tray ----
    this.dev = new THREE.Group(); this.dev.position.set(3.7, 0, 0); this.dev.scale.setScalar(1.18); g.add(this.dev);
    this.tray = new THREE.Mesh(roundedBox(5.4, 0.12, 3.9, 0.06), matte(0x252a33, 0.7)); this.tray.position.y = 0.06; this.dev.add(this.tray);
    const grid = new THREE.GridHelper(5.2, 26, 0x5d6a7d, 0x3a4250); grid.position.y = 0.125; grid.material.transparent = true; grid.material.opacity = 0.35; this.dev.add(grid);
    this.tray.add(edgeLines(this.tray.geometry, 0x6d7a8d, 1, 0.4));
    this.blocks = BLOCKS.map((b, i) => {
      const row = i < 4 ? 0 : 1, col = row ? 3 - (i - 4) : i;
      const grp = new THREE.Group(); grp.position.set(-1.95 + col * 1.3, 0.12, row ? 0.95 : -0.95); this.dev.add(grp);
      const ped = new THREE.Mesh(roundedBox(0.95, 0.14, 0.95, 0.04), matte(0x3a3f47, 0.55)); ped.position.y = 0.07; grp.add(ped);
      const ic = icon(b.id); ic.position.y = 0.14; grp.add(ic);
      grp.userData.ic = ic;
      grp.userData.lbl = this.addLabel('<b>' + (i + 1) + '</b> ' + b.n, 'ghost tiny', [0, -0.18, 0.62], grp);
      this.pick(grp, b.id, i === 0 || i === 5 ? [0.38, 0.95, 0] : null);
      return grp;
    });
    const path = this.blocks.map((b) => b.position.clone().add(new THREE.Vector3(0, 0.12, 0)));
    const lineGeo = new THREE.BufferGeometry().setFromPoints(path);
    this.flow = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: COL.lava, transparent: true, opacity: 0.7 }));
    this.flow.position.y = 0.04; this.dev.add(this.flow);
    this.addLabel('DEVELOPER SOLUTION', 'section', [0, 4.25, 0], this.dev);
    this.solLbl = this.addLabel('RAG agent on Databricks · cited answers in seconds', 'lava nomob', [0, 2.3, -1.6], this.dev);

    this.pick(this.analyst, 'analyst', [0, 1.95, 0]);
    this.pick(this.stack, 'pdfStack', [0.55, 2.25, 0]);
    this.pick(this.clock, 'clock', [0.6, 0.6, 0.1]);
    this.pick(this.hitBox(3.2, 0.6, 0.3, [-4.2, 2.55, 1.9]), 'bubble', null);
    this.pick(this.tray, 'blueprint', [2.6, 0.3, 1.6]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.6, 10);
    // stack grows
    const grow = seg(t, 0.2, 1.8);
    for (let i = 0; i < SHEETS; i++) {
      const on = seg(grow * SHEETS, i, i + 1);
      const [jx, jz, jr] = this.jit[i];
      this._p.set(jx, 0.03 + i * 0.048 + (1 - on) * 0.6, jz);
      this._e.set(0, jr, 0); this._q.setFromEuler(this._e);
      this._s.setScalar(Math.max(0.0001, on * fade));
      this._m.compose(this._p, this._q, this._s); this.stack.setMatrixAt(i, this._m);
    }
    this.stack.instanceMatrix.needsUpdate = true;
    // clock spins fast while the analyst searches
    const spin = bell(t, 1.0, 6.0);
    this.hMin.rotation.z = -time * (0.4 + spin * 6);
    this.hHr.rotation.z = -time * (0.04 + spin * 0.5);
    this.clock.scale.setScalar(Math.max(0.001, E.back(seg(t, 0.6, 1.1)) * fade));
    this.show(this.clockLbl, seg(t, 1.2, 1.6) * fade);
    this.show(this.bubble, seg(t, 1.4, 1.8) * fade);
    this.analyst.rotation.y = Math.PI * 0.9 + Math.sin(time * 0.8) * 0.15 * spin;
    // bridge
    const br = E.io(seg(t, 2.6, 3.4));
    this.bridge.geometry.setDrawRange(0, Math.floor(br * fade * this.bridge.geometry.index.count / 3) * 3);
    this.chev.visible = br > 0.02 && fade > 0.05;
    this.bridgeCurve.getPoint(Math.min(0.999, br), this._p); this.chev.position.copy(this._p);
    const tan = this.bridgeCurve.getTangent(Math.min(0.999, br)); this.chev.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
    // blocks rise one by one
    this.blocks.forEach((b, i) => {
      const p = E.back(seg(t, 3.4 + i * 0.32, 3.9 + i * 0.32)) * fade;
      b.userData.ic.scale.setScalar(Math.max(0.001, p));
      b.userData.ic.position.y = 0.14 + Math.sin(time * 1.4 + i) * 0.03 * p;
      if (b.userData.ic.children[0]) b.userData.ic.rotation.y = Math.sin(time * 0.5 + i) * 0.35;
      this.show(b.userData.lbl, seg(t, 3.6 + i * 0.32, 3.9 + i * 0.32) * fade);
    });
    const fl = seg(t, 3.6, 3.6 + 8 * 0.32);
    this.flow.geometry.setDrawRange(0, Math.max(0, Math.ceil(fl * 8 * fade)));
    this.show(this.solLbl, seg(t, 6.6, 7.0) * fade);
  }
}
