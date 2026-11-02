import * as THREE from 'three';
import { Station } from './base.js';
import { COL, glow, glowT, glass, frost, metal, edgeLines, roundedBox, makeDoc, DOC_COLORS, Stream, seg, bell, E, lerp } from '../helpers.js';

const N = 6;
export class IngestStation extends Station {
  constructor() {
    super({ loop: 9, cam: { pos: [0.3, 4.6, 15], target: [0.3, 2.0, 0] } });
    const g = this.group;
    // source stack
    this.docs = [];
    for (let i = 0; i < N; i++) { const d = makeDoc(i, 0.95, 1.25); g.add(d); this.docs.push(d); }
    this.addLabel('Contract PDFs', 'ghost', [-5, 0.15, 1.4]);

    // UC Volume vault
    this.vol = new THREE.Group(); this.vol.position.set(0, 0, 0); g.add(this.vol);
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 3.2, 64, 1, true), glass(0xcfe8ff, { thickness: 0.4, tint: 0x9fd6ff, att: 4, side: THREE.DoubleSide }));
    cyl.position.y = 1.75; this.vol.add(cyl);
    for (const y of [0.15, 3.35]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.48, 1.48, 0.16, 64), metal(0x151a2a, 0.3, 0.9)); cap.position.y = y; this.vol.add(cap);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.035, 8, 120), glow(COL.lava, 3)); ring.rotation.x = Math.PI / 2; ring.position.y = y + 0.09; this.vol.add(ring);
    }
    // UC hex badge
    this.hex = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 6, 6), glow(COL.amber, 3)); this.hex.position.set(0, 4.15, 0); this.vol.add(this.hex);
    this.core = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.6, 32, 1, true), glowT(COL.ember, 1.4, 0.25)); this.core.position.y = 1.75; this.vol.add(this.core);
    this.inside = [];
    for (let i = 0; i < N; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.05, 0.8), glow(DOC_COLORS[i], 2.4)); s.position.set(0, 0.45 + i * 0.42, 0); this.vol.add(s); this.inside.push(s); }
    this.addLabel('Unity Catalog Volume', 'lava big', [0, -0.55, 1.6], this.vol);

    // Delta table
    this.tbl = new THREE.Group(); this.tbl.position.set(5.0, 0.2, 0); g.add(this.tbl);
    const back = new THREE.Mesh(roundedBox(3.1, 3.5, 0.12, 0.12), frost(0x9fe9ff, 0.12)); back.position.set(0, 2, -0.35); this.tbl.add(back);
    back.add(edgeLines(back.geometry, COL.cyan, 1.4, 0.35));
    const head = new THREE.Mesh(roundedBox(2.8, 0.32, 0.16, 0.06), glow(COL.cyan, 1.2)); head.position.set(0, 3.45, 0); this.tbl.add(head);
    this.rows = [];
    for (let r = 0; r < N; r++) {
      const row = [];
      for (let c = 0; c < 3; c++) {
        const w = c === 0 ? 0.6 : c === 1 ? 1.2 : 0.75;
        const x = c === 0 ? -1.05 : c === 1 ? -0.1 : 0.98;
        const cell = new THREE.Mesh(roundedBox(w, 0.26, 0.12, 0.05), c === 0 ? glow(DOC_COLORS[r], 2.2) : frost(0x7d89a6, 0.4, { emissive: 0x9fb4d0, ei: 0.06 }));
        cell.position.set(x, 2.95 - r * 0.42, 0); this.tbl.add(cell); row.push(cell);
      }
      this.rows.push(row);
    }
    this.delta = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 3), glow(COL.cyan, 3)); this.delta.position.set(0, 4.4, 0); this.delta.rotation.z = Math.PI / 2; this.tbl.add(this.delta);
    this.addLabel('Delta table', 'cyan big', [0, -0.4, 1.0], this.tbl);
    this.addLabel('READ_FILES', 'ghost', [2.5, 3.7, 0.4]);

    // packets volume -> table
    this.packets = []; for (let i = 0; i < N; i++) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), glow(DOC_COLORS[i], 3.5)); g.add(p); this.packets.push(p); }
    this.flow = new THREE.CatmullRomCurve3([new THREE.Vector3(1.4, 2.2, 0), new THREE.Vector3(2.6, 3.0, 0.4), new THREE.Vector3(3.6, 2.5, 0.2)]);
    this.stream = new Stream(this.flow, 30, COL.cyan, 0.1, 0.5); g.add(this.stream.points);
    this._a = new THREE.Vector3(); this._b = new THREE.Vector3();
  }
  update(t, time) {
    this.hex.rotation.y = time * 0.8; this.delta.rotation.y = time * 0.6;
    this.core.material.opacity = 0.18 + Math.sin(time * 3) * 0.06;
    const fade = 1 - seg(t, 8.5, 9);
    for (let i = 0; i < N; i++) {
      const t0 = 0.5 + i * 0.75;
      const p = seg(t, t0, t0 + 0.9);
      const d = this.docs[i];
      const sx = -5 + (i - 2.5) * 0.16, sy = 0.9 + i * 0.1, sz = 0.3 - i * 0.08;
      if (p <= 0) { d.position.set(sx, sy + Math.sin(time * 1.5 + i) * 0.05, sz); d.rotation.set(-0.15, 0.35 + i * 0.05, (i - 2.5) * 0.06); d.scale.setScalar(1); d.visible = true; }
      else {
        const e = E.io(p);
        // arc into the top of the vault
        d.position.set(lerp(sx, 0, e), lerp(sy, 3.6, e) + Math.sin(e * Math.PI) * 2.2, lerp(sz, 0, e));
        d.rotation.set(-0.15 + e * -1.2, (0.35 + i * 0.05) * (1 - e) + e * 2, 0);
        d.scale.setScalar(1 - e * 0.75); d.visible = p < 1;
      }
      const inside = seg(t, t0 + 0.8, t0 + 1.1) * fade;
      this.inside[i].scale.set(Math.max(0.001, inside), 1, Math.max(0.001, inside));
      // packet to table
      const q = seg(t, t0 + 1.0, t0 + 1.7);
      const pk = this.packets[i];
      pk.visible = q > 0 && q < 1;
      if (pk.visible) { this.flow.getPoint(E.io(q), pk.position); pk.rotation.set(time * 3, time * 2, 0); }
      const lit = E.back(seg(t, t0 + 1.6, t0 + 2.0)) * fade;
      this.rows[i].forEach((c, k) => { c.scale.set(Math.max(0.001, lit), Math.max(0.001, lit), 1); });
    }
    this.stream.update(time, 0.25 + bell(t, 1.4, 6.4) * 0.8);
  }
}
