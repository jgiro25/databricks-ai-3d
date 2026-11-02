import * as THREE from 'three';
import { Station } from './base.js';
import { COL, glow, glowT, glass, frost, metal, edgeLines, roundedBox, person, makeDoc, Stream, Beam, seg, bell, E, lerp } from '../helpers.js';

export class GoalStation extends Station {
  constructor() {
    super({ loop: 9.5, cam: { pos: [0, 4.4, 15], target: [0, 2.2, 0] } });
    const g = this.group;
    this.user = person(COL.cyan); this.user.position.set(-5, 0, 0.6); this.user.rotation.y = 0.5; g.add(this.user);

    // question panel
    this.qPanel = new THREE.Mesh(roundedBox(3.2, 1.25, 0.12, 0.16), frost(0x5b6470, 0.5));
    this.qPanel.position.set(-3.3, 3.35, 0.4); g.add(this.qPanel);
    this.qPanel.add(edgeLines(this.qPanel.geometry, COL.cyan, 1, 0.5));
    this.qLbl = this.addLabel('What’s the <b>timely-filing limit</b> for out-of-network claims?', 'bubble cyan', [0, 0, 0.1], this.qPanel);

    // RAG agent core
    this.core = new THREE.Group(); this.core.position.set(0.6, 2.3, 0); g.add(this.core);
    this.shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 0), glass(0xffd9c9, { thickness: 1.2, roughness: 0.05, tint: 0xff8a5c, att: 1.6 }));
    this.core.add(this.shell);
    this.shellEdges = edgeLines(this.shell.geometry, COL.amber, 1, 0.5); this.core.add(this.shellEdges);
    this.heart = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 2), glow(COL.lava, 2)); this.core.add(this.heart);
    this.halo = new THREE.Mesh(new THREE.SphereGeometry(0.9, 32, 16), glowT(COL.ember, 0.6, 0.1)); this.core.add(this.halo);
    this.rings = [];
    for (let i = 0; i < 3; i++) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(1.75 + i * 0.28, 0.018, 8, 160), metal(i === 1 ? 0x8a8f99 : 0x6b6f78, 0.8, 0.35));
      r.rotation.set(Math.PI / 2 + (i - 1) * 0.45, i * 0.6, 0); this.core.add(r); this.rings.push(r);
    }
    // orbiting docs = "your PDFs"
    this.docs = [];
    for (let i = 0; i < 4; i++) { const d = makeDoc(i, 0.5, 0.66); this.core.add(d); this.docs.push(d); }
    this.addLabel('RAG agent', 'lava big', [0, -2.05, 0], this.core);

    // answer panel
    this.aPanel = new THREE.Mesh(roundedBox(3.3, 1.35, 0.12, 0.16), frost(0x6b5a52, 0.5));
    this.aPanel.position.set(4.9, 3.1, 0.4); g.add(this.aPanel);
    this.aPanel.add(edgeLines(this.aPanel.geometry, COL.amber, 1, 0.5));
    this.aLbl = this.addLabel('<b>90 days</b> from date of service <span class="cite">§4.2</span><span class="cite">p.7</span>', 'bubble lava', [0, 0, 0.1], this.aPanel);

    // citation chips
    this.cites = [0, 1].map((i) => { const c = makeDoc(i, 0.42, 0.55); g.add(c); return c; });
    this.citeBeams = [0, 1].map(() => { const b = new Beam(COL.amber, 0.014, 3); g.add(b.mesh); return b; });

    // travelling orbs
    this.qOrb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 12), glow(COL.cyan, 2)); g.add(this.qOrb);
    this.aOrb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 12), glow(COL.amber, 2)); g.add(this.aOrb);
    this.curveQ = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-3.3, 2.7, 0.4), new THREE.Vector3(-1.6, 4.4, 0.6), new THREE.Vector3(0.6, 2.3, 0));
    this.curveA = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0.6, 2.3, 0), new THREE.Vector3(2.8, 4.6, 0.6), new THREE.Vector3(4.9, 3.1, 0.4));
    this.sQ = new Stream(this.curveQ, 40, COL.cyan, 0.12, 0.45); g.add(this.sQ.points);
    this.sA = new Stream(this.curveA, 40, COL.amber, 0.12, 0.45); g.add(this.sA.points);
    this._v = new THREE.Vector3();
    this.pick(this.user, 'analyst', [0, 1.95, 0]);
    this.pick(this.qPanel, 'question', [1.75, 0.7, 0.1]);
    this.pick(this.core, 'ragAgent', [1.3, 1.35, 0]);
    this.pick(this.aPanel, 'answer', [1.8, 0.75, 0.1]);
    this.cites.forEach((c, i) => this.pick(c, 'citation', i ? null : [0, 0.48, 0.05]));
  }
  update(t, time) {
    // question pops
    const qp = E.back(seg(t, 0.3, 1.0));
    this.qPanel.scale.setScalar(Math.max(0.001, qp)); this.show(this.qLbl, seg(t, 0.6, 1.0));
    // q orb flight
    const qf = seg(t, 1.3, 2.6);
    this.qOrb.visible = qf > 0 && qf < 1; this.curveQ.getPoint(E.io(qf), this.qOrb.position);
    this.sQ.update(time, 0.15 + bell(t, 1.2, 3) * 0.9);
    // core thinking
    const think = bell(t, 2.4, 4.4);
    const spin = 0.4 + think * 3;
    this.core.rotation.y += 0.004 * spin * 2;
    this.shell.rotation.x = time * 0.2; this.shellEdges.rotation.x = time * 0.2;
    this.heart.scale.setScalar(1 + think * 0.45 + Math.sin(time * 4) * 0.05);
    this.halo.scale.setScalar(1 + think * 0.6);
    this.rings.forEach((r, i) => { r.rotation.z = time * (0.3 + i * 0.15) * (1 + think * 3); });
    this.docs.forEach((d, i) => {
      const a = time * (0.5 + think) + (i / 4) * Math.PI * 2;
      const rr = 2.35 - think * 0.9;
      d.position.set(Math.cos(a) * rr, Math.sin(a * 1.3 + i) * 0.4, Math.sin(a) * rr);
      d.lookAt(this.core.position.clone().add(new THREE.Vector3(0, 0, 50)));
    });
    // answer
    const af = seg(t, 4.1, 5.1);
    this.aOrb.visible = af > 0 && af < 1; this.curveA.getPoint(E.io(af), this.aOrb.position);
    this.sA.update(time, 0.15 + bell(t, 4, 5.6) * 0.9);
    const ap = E.back(seg(t, 4.9, 5.5));
    this.aPanel.scale.setScalar(Math.max(0.001, ap)); this.show(this.aLbl, seg(t, 5.2, 5.6));
    // citations fly out from core to below the answer
    this.cites.forEach((c, i) => {
      const p = E.out(seg(t, 5.6 + i * 0.25, 6.6 + i * 0.25));
      const from = this._v.set(0.6, 2.3, 0);
      c.position.set(lerp(from.x, 4.3 + i * 1.25, p), lerp(from.y, 1.4, p), lerp(0, 0.6, p));
      c.scale.setScalar(Math.max(0.001, p)); c.rotation.y = (1 - p) * 3;
      const b = this.citeBeams[i];
      b.set(new THREE.Vector3(4.3 + i * 1.25, 1.75, 0.6), new THREE.Vector3(4.3 + i * 1.25, 2.45, 0.45), seg(t, 6.4, 7));
    });
    const fade = 1 - seg(t, 8.8, 9.4);
    this.aPanel.scale.multiplyScalar(fade + 0.0001); this.qPanel.scale.multiplyScalar(fade + 0.0001);
    this.cites.forEach((c) => c.scale.multiplyScalar(fade + 0.0001));
    this.citeBeams.forEach((b) => (b.mesh.visible = b.mesh.visible && fade > 0.05));
    if (fade < 0.5) { this.show(this.aLbl, 0); this.show(this.qLbl, 0); }
  }
}
