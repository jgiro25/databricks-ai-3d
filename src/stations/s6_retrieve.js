import * as THREE from 'three';
import { Station } from './base.js';
import { COL, CLUSTER, matte, glow, glowT, frost, metal, edgeLines, roundedBox, docTexture, Beam, seg, bell, E, lerp } from '../helpers.js';
import { makeCloud, spaceFrame, CENTERS } from './cloud.js';

const K = 5;
export class RetrieveStation extends Station {
  constructor() {
    super({ loop: 9.5, cam: { pos: [0.4, 4.8, 15.5], target: [0.4, 2.7, 0] } });
    const g = this.group;
    this.space = new THREE.Group(); this.space.position.set(0.6, 3.1, 0); this.space.rotation.y = 0.5; g.add(this.space);
    this.space.add(spaceFrame(6.2));
    const { pts, mesh, halos } = makeCloud(320, 11);
    this.pts = pts; this.mesh = mesh; this.space.add(mesh); this.space.add(halos);
    halos.children.forEach((h) => (h.material.opacity = 0.06));
    // query point near cluster 0
    this.qLocal = CENTERS[0].clone().add(new THREE.Vector3(0.15, 0.1, 0.1));
    const d = pts.map((p, i) => ({ i, d: p.p.distanceTo(this.qLocal) })).sort((a, b) => a.d - b.d);
    this.nn = d.slice(0, K).map((o) => o.i);
    this.nnSet = new Set(this.nn);

    // question card
    this.qCard = new THREE.Mesh(roundedBox(2.4, 0.9, 0.1, 0.14), frost(0x5b6470, 0.5));
    this.qCard.position.set(-5.6, 4.6, 0.6); g.add(this.qCard);
    this.qCard.add(edgeLines(this.qCard.geometry, COL.cyan, 1, 0.5));
    this.qLbl = this.addLabel('timely-filing limit?', 'bubble cyan', [0, 0, 0.1], this.qCard);
    // mini embed ring
    this.mini = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 8, 64), glow(COL.lava, 3.5)); this.mini.position.set(-4.0, 3.2, 0.5); this.mini.rotation.y = Math.PI / 2.4; g.add(this.mini);
    this.qOrb = new THREE.Group(); g.add(this.qOrb);
    this.qOrb.add(new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 12), glow(0xffffff, 4)));
    this.qRing = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.02, 8, 48), glow(COL.cyan, 3.5)); this.qOrb.add(this.qRing);
    this.pulse = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 3), new THREE.MeshBasicMaterial({ color: COL.cyan, wireframe: true, transparent: true, opacity: 0.2, depthWrite: false }));
    this.space.add(this.pulse);
    this.beams = this.nn.map(() => { const b = new Beam(0xffffff, 0.018, 3.5); this.space.add(b.mesh); return b; });
    this.qLbl2 = this.addLabel('your question', 'cyan', [0, 0.55, 0], this.qOrb);

    // retrieved chunks to the right
    this.out = [];
    const scores = ['0.92', '0.89', '0.84', '0.78', '0.74'];
    for (let i = 0; i < K; i++) {
      const tex = docTexture(i % 2).clone(); tex.repeat.set(0.5, 0.25); tex.offset.set((i % 2) * 0.5, 0.25 * ((i + 1) % 4)); tex.needsUpdate = true;
      const m = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.62, 0.08), [matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6), new THREE.MeshStandardMaterial({ map: tex, color: 0xb8bccb, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.07, envMapIntensity: 0.35 }), matte(0x3a3d44, .6)]);
      m.add(edgeLines(m.geometry, CLUSTER[0], 3, 1)); g.add(m);
      m.userData.dest = new THREE.Vector3(5.7, 5.0 - i * 0.8, 0.8);
      m.userData.lbl = this.addLabel(scores[i], 'lava', [m.userData.dest.x + 1.05, m.userData.dest.y, m.userData.dest.z]);
      this.out.push(m);
    }
    this.topk = this.addLabel('top-k = 5', 'lava big', [5.9, 0.9, 0.8]);
    this.pick(this.qCard, 'question', [1.3, 0.5, 0.1]);
    this.pick(this.qOrb, 'queryVector', [0.4, 0.4, 0]);
    this.pick(this.mesh, 'index', [0, 3.45, 0]);
    this.out.forEach((m, i) => this.pick(m, 'topk', i === 0 ? [0.7, 0.42, 0.1] : null));
    this.pick(this.hitBox(2.2, 0.5, 0.3, [5.9, 0.9, 0.8]), 'topk', null);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._w = new THREE.Vector3();
    this.curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-5.6, 4.1, 0.6), new THREE.Vector3(-4.0, 3.2, 0.5), new THREE.Vector3(-2.2, 4.4, 0.4), new THREE.Vector3(0, 4, 0.2)]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 9, 9.5);
    this.space.rotation.y = 0.5 + Math.sin(time * 0.25) * 0.2;
    this.space.updateMatrixWorld();
    this.mini.rotation.z = time * 2;
    this.qCard.scale.setScalar(Math.max(0.001, E.back(seg(t, 0.2, 0.7)) * fade));
    this.show(this.qLbl, seg(t, 0.4, 0.8) * fade);
    // query orb path (world) -> into space at qLocal
    const qWorld = this._w.copy(this.qLocal); this.space.localToWorld(qWorld);
    this.curve.points[3].copy(qWorld);
    const f = seg(t, 0.9, 2.7);
    this.qOrb.visible = f > 0;
    if (f < 1) this.curve.getPoint(E.io(f), this.qOrb.position); else this.qOrb.position.copy(qWorld);
    this.qOrb.scale.setScalar(fade + 0.001);
    this.qRing.rotation.x = time * 2; this.qRing.rotation.y = time * 1.3;
    this.show(this.qLbl2, seg(t, 2.6, 3.0) * fade);
    // pulse
    const pp = seg(t, 2.7, 3.7);
    this.pulse.position.copy(this.qLocal); this.pulse.scale.setScalar(0.1 + E.out(pp) * 1.05); this.pulse.visible = pp > 0 && fade > 0.05;
    this.pulse.material.opacity = 0.2 * (1 - pp * 0.6);
    // search dims non-neighbours, highlights neighbours
    const search = seg(t, 2.8, 3.6) * fade;
    for (let i = 0; i < this.pts.length; i++) {
      const isN = this.nnSet.has(i);
      const s = isN ? 1 + search * 1.6 + search * 0.3 * Math.sin(time * 6) : 1 - search * 0.55;
      this._s.setScalar(s); this._m.compose(this.pts[i].p, this._q, this._s); this.mesh.setMatrixAt(i, this._m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.beams.forEach((b, k) => b.set(this.qLocal, this.pts[this.nn[k]].p, E.out(seg(t, 3.1 + k * 0.12, 3.6 + k * 0.12)) * fade));
    // chunks fly out
    this.out.forEach((m, k) => {
      const src = this._p.copy(this.pts[this.nn[k]].p); this.space.localToWorld(src);
      const p = E.io(seg(t, 4.3 + k * 0.18, 5.5 + k * 0.18));
      m.position.lerpVectors(src, m.userData.dest, p); m.position.y += Math.sin(p * Math.PI) * 0.8;
      m.scale.setScalar(Math.max(0.001, p * fade)); m.rotation.y = (1 - p) * 4 - 0.25 * p;
      this.show(m.userData.lbl, seg(t, 5.4 + k * 0.18, 5.8 + k * 0.18) * fade);
    });
    this.show(this.topk, seg(t, 6.2, 6.6) * fade);
  }
}
