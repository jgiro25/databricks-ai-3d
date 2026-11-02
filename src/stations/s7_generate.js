import * as THREE from 'three';
import { Station } from './base.js';
import { COL, glow, glowT, glass, frost, metal, edgeLines, roundedBox, docTexture, makeDoc, Beam, Stream, seg, bell, E, lerp } from '../helpers.js';

const K = 5, TOK = 22;
export class GenerateStation extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0.3, 4.4, 15.5], target: [0.3, 2.4, 0] } });
    const g = this.group;
    // LLM core
    this.core = new THREE.Group(); this.core.position.set(0, 2.6, 0); g.add(this.core);
    this.shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.55, 1), glass(0xd9ccff, { thickness: 1.5, tint: 0x9b7bff, att: 2.2, roughness: 0.04 }));
    this.core.add(this.shell);
    this.shellEdges = edgeLines(this.shell.geometry, COL.violet, 2.2, 0.55); this.core.add(this.shellEdges);
    this.neural = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 3), new THREE.MeshBasicMaterial({ color: new THREE.Color(COL.violet).multiplyScalar(2.6), wireframe: true, transparent: true, opacity: 0.65 }));
    this.core.add(this.neural);
    this.heart = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 16), glow(0xffc6ff, 2.6)); this.core.add(this.heart);
    this.orbits = [];
    for (let i = 0; i < 3; i++) {
      const o = new THREE.Group(); o.rotation.set(i * 1.05, i * 0.7, 0); this.core.add(o);
      const r = new THREE.Mesh(new THREE.TorusGeometry(2.05 + i * 0.22, 0.012, 8, 160), glow(i === 0 ? COL.violet : i === 1 ? COL.lava : COL.cyan, 2.6)); o.add(r);
      const sat = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 8), glow(0xffffff, 4)); sat.position.x = 2.05 + i * 0.22; o.add(sat);
      this.orbits.push(o);
    }
    this.addLabel('Llama 3.3 70B Instruct', 'violet big', [0, -2.35, 0.4], this.core);

    // inputs: question + context chunks
    this.qCard = new THREE.Mesh(roundedBox(2.2, 0.62, 0.1, 0.12), frost(0x9fe9ff, 0.25, { emissive: COL.cyan, ei: 0.3 }));
    this.qCard.add(edgeLines(this.qCard.geometry, COL.cyan, 2.2, 0.7)); g.add(this.qCard);
    this.qLbl = this.addLabel('question', 'cyan', [0, 0, 0.1], this.qCard);
    this.ctx = [];
    for (let i = 0; i < K; i++) {
      const tex = docTexture(i % 2).clone(); tex.repeat.set(0.5, 0.25); tex.offset.set((i % 2) * 0.5, 0.25 * ((i + 1) % 4)); tex.needsUpdate = true;
      const m = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.42, 0.08), [metal(0x2a3048), metal(0x2a3048), metal(0x2a3048), metal(0x2a3048), new THREE.MeshStandardMaterial({ map: tex, color: 0xb8bccb, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.07, envMapIntensity: 0.35 }), metal(0x2a3048)]);
      m.add(edgeLines(m.geometry, COL.amber, 3, 1)); g.add(m); this.ctx.push(m);
    }
    this.ctxLbl = this.addLabel('context · top 5', 'lava', [-5.3, 0.35, 0.6]);

    // tokens out
    this.tokens = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), new THREE.MeshBasicMaterial({ color: new THREE.Color(COL.amber).multiplyScalar(3) }), TOK);
    this.tokens.frustumCulled = false; g.add(this.tokens);
    this.outCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(1.2, 2.8, 0.3), new THREE.Vector3(2.6, 4.2, 0.6), new THREE.Vector3(4.2, 3.5, 0.5)]);
    // answer panel
    this.aPanel = new THREE.Mesh(roundedBox(3.4, 1.4, 0.12, 0.16), frost(0xffd2b8, 0.22, { emissive: COL.ember, ei: 0.25 }));
    this.aPanel.position.set(5.0, 3.1, 0.5); g.add(this.aPanel);
    this.aPanel.add(edgeLines(this.aPanel.geometry, COL.amber, 2.2, 0.6));
    this.aLbl = this.addLabel('<b>90 days</b> from date of service <span class="cite">1</span><span class="cite">2</span>', 'bubble lava', [0, 0, 0.1], this.aPanel);
    // sources
    this.srcs = [0, 1].map((i) => { const d = makeDoc(i, 0.55, 0.72); d.position.set(4.2 + i * 1.6, 1.0, 0.6); g.add(d); return d; });
    this.srcLbls = ['Contract §4.2', 'Claims Policy p.7'].map((s, i) => this.addLabel(s, 'ghost', [4.2 + i * 1.6, 0.4, 0.6]));
    this.beams = [0, 1].map(() => { const b = new Beam(COL.amber, 0.016, 3); g.add(b.mesh); return b; });
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
  }
  update(t, time) {
    const fade = 1 - seg(t, 9.5, 10);
    const think = bell(t, 2.6, 5.4);
    this.shell.rotation.y = this.shellEdges.rotation.y = time * 0.15;
    this.neural.rotation.y = -time * (0.3 + think * 2.5); this.neural.rotation.x = time * 0.2;
    this.neural.material.opacity = 0.45 + think * 0.5;
    this.heart.scale.setScalar(1 + think * 0.6 + Math.sin(time * 5) * 0.04 * (1 + think * 3));
    this.orbits.forEach((o, i) => { o.rotation.z += 0.01 * (1 + think * 5) * (i % 2 ? -1 : 1); });
    // inputs
    const qp = seg(t, 0.2, 0.6);
    const qf = E.in(seg(t, 1.9, 2.6));
    this.qCard.position.set(lerp(-5.2, 0, qf), lerp(4.6, 2.6, qf), lerp(0.6, 0, qf));
    this.qCard.scale.setScalar(Math.max(0.001, E.back(qp) * (1 - qf)));
    this.show(this.qLbl, qp * (1 - seg(t, 1.8, 2.0)));
    this.ctx.forEach((m, i) => {
      const a = E.out(seg(t, 0.3 + i * 0.1, 0.8 + i * 0.1));
      const f = E.in(seg(t, 1.0 + i * 0.14, 1.8 + i * 0.14));
      m.position.set(lerp(-5.2, 0, f), lerp(3.75 - i * 0.55, 2.6, f) + Math.sin(f * Math.PI) * 0.6, lerp(0.6, 0, f));
      m.rotation.set(0, 0.3 * (1 - f), f * 3);
      m.scale.setScalar(Math.max(0.001, a * (1 - f)));
    });
    this.show(this.ctxLbl, seg(t, 0.6, 1) * (1 - seg(t, 1.6, 1.9)));
    // tokens stream
    for (let i = 0; i < TOK; i++) {
      const p = seg(t, 4.0 + i * 0.07, 5.0 + i * 0.07);
      const vis = p > 0 && p < 1;
      if (vis) { this.outCurve.getPoint(E.io(p), this._p); this._s.setScalar(0.6 + Math.sin(p * Math.PI) * 0.6); }
      else this._s.setScalar(0.0001);
      this._q.setFromEuler(new THREE.Euler(time * 3 + i, time * 2, 0));
      this._m.compose(this._p, this._q, this._s); this.tokens.setMatrixAt(i, this._m);
    }
    this.tokens.instanceMatrix.needsUpdate = true;
    const ap = E.back(seg(t, 5.2, 5.8)) * fade;
    this.aPanel.scale.setScalar(Math.max(0.001, ap)); this.show(this.aLbl, seg(t, 5.5, 5.9) * fade);
    this.srcs.forEach((d, i) => { const s = E.back(seg(t, 6.0 + i * 0.2, 6.5 + i * 0.2)) * fade; d.scale.setScalar(Math.max(0.001, s)); d.rotation.y = Math.sin(time + i) * 0.2; d.position.y = 1.0 + Math.sin(time * 1.5 + i) * 0.06; });
    this.srcLbls.forEach((l, i) => this.show(l, seg(t, 6.3 + i * 0.2, 6.7 + i * 0.2) * fade));
    this.beams.forEach((b, i) => b.set(new THREE.Vector3(4.2 + i * 1.6, 1.4, 0.6), new THREE.Vector3(4.6 + i * 0.9, 2.4, 0.55), seg(t, 6.6, 7.2) * fade));
  }
}
