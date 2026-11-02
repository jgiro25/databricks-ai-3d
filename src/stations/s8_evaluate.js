import * as THREE from 'three';
import { Station } from './base.js';
import { COL, glow, glowT, frost, metal, edgeLines, roundedBox, seg, bell, E, lerp } from '../helpers.js';

const SPANS = [
  { n: 'agent', s: 0, d: 1, c: COL.lava, ms: '1.42 s' },
  { n: 'retrieve · AI Search', s: 0.04, d: 0.13, c: COL.cyan, ms: '0.18 s' },
  { n: 'llm · Llama 3.3 70B', s: 0.2, d: 0.76, c: COL.violet, ms: '1.08 s' },
  { n: 'cite & format', s: 0.96, d: 0.04, c: COL.mint, ms: '0.05 s' },
];
const JUDGES = [
  { n: 'Correctness', v: 0.94 }, { n: 'Grounded', v: 0.97 }, { n: 'Relevance', v: 0.95 }, { n: 'Safety', v: 1.0 },
];
function arcMat(color) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uP: { value: 0 }, uC: { value: new THREE.Color(color).multiplyScalar(1.5) }, uT: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `uniform float uP; uniform vec3 uC; uniform float uT; varying vec2 vUv;
      void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.x, p.y)/6.28318+.5;
        float band = smoothstep(.70,.73,r)*smoothstep(.93,.9,r);
        float on = step(a, uP);
        vec3 bg = vec3(.12,.14,.22);
        vec3 c = mix(bg, uC*(.8+.2*sin(a*30.-uT*4.)), on);
        float inner = smoothstep(.62,.6,r)*.05;
        gl_FragColor = vec4(c*band + uC*inner*on*.6, band + inner*.5); }`,
  });
}
export class EvaluateStation extends Station {
  constructor() {
    super({ loop: 9, cam: { pos: [0.6, 4.3, 15], target: [0.6, 2.6, 0] } });
    const g = this.group;
    // trace panel
    this.panel = new THREE.Group(); this.panel.position.set(-2.4, 2.7, 0); this.panel.rotation.y = 0.18; g.add(this.panel);
    const back = new THREE.Mesh(roundedBox(6.0, 3.6, 0.1, 0.18), frost(0x9fb4ff, 0.12)); back.position.z = -0.15; this.panel.add(back);
    back.add(edgeLines(back.geometry, 0x7f8cff, 1.4, 0.35));
    this.addLabel('MLflow Trace', 'lava big', [-2.1, 2.15, 0], this.panel);
    // time ticks
    for (let i = 0; i <= 6; i++) { const tk = new THREE.Mesh(new THREE.BoxGeometry(0.01, 3.0, 0.01), new THREE.MeshBasicMaterial({ color: 0x3a4160, transparent: true, opacity: 0.5 })); tk.position.set(-2.6 + i * (5.2 / 6), -0.1, -0.05); this.panel.add(tk); }
    this.bars = SPANS.map((s, i) => {
      const geo = roundedBox(1, 0.42, 0.22, 0.08); geo.translate(0.5, 0, 0);
      const m = new THREE.Mesh(geo, glow(s.c, 1.0));
      m.position.set(-2.6 + s.s * 5.2, 1.1 - i * 0.78, 0.05); this.panel.add(m);
      m.userData.w = s.d * 5.2;
      m.userData.lbl = this.addLabel(s.n, '', [i === 3 ? 1.2 : -2.6 + s.s * 5.2, 1.43 - i * 0.78, 0.3], this.panel);
      m.userData.lbl.center.set(0, 0.5);
      m.userData.ms = this.addLabel(s.ms, '', [-2.6 + (s.s + s.d) * 5.2 + 0.05, 1.1 - i * 0.78, 0.35], this.panel);
      m.userData.ms.center.set(0, 0.5);
      return m;
    });
    this.cursor = new THREE.Mesh(new THREE.BoxGeometry(0.03, 3.2, 0.05), glow(0xffffff, 1.6)); this.panel.add(this.cursor);
    // judges
    this.judges = new THREE.Group(); this.judges.position.set(4.3, 2.5, 0.2); this.judges.rotation.y = -0.2; g.add(this.judges);
    this.addLabel('LLM judges', 'violet big', [0, 2.6, 0], this.judges);
    const cols = [COL.amber, COL.cyan, COL.violet, COL.mint];
    this.gauges = JUDGES.map((j, i) => {
      const grp = new THREE.Group(); grp.position.set((i % 2 ? 1 : -1) * 1.15, i < 2 ? 1.05 : -1.15, 0); this.judges.add(grp);
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.12, 64), metal(0x121626, 0.3, 0.8)); disc.rotation.x = Math.PI / 2; disc.position.z = -0.08; grp.add(disc);
      const arc = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), arcMat(cols[i])); grp.add(arc);
      const check = new THREE.Group();
      const a = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.08), glow(cols[i], 3)); a.position.set(-0.13, -0.05, 0); a.rotation.z = -Math.PI / 4; check.add(a);
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.08, 0.08), glow(cols[i], 3)); b.position.set(0.12, 0.06, 0); b.rotation.z = Math.PI / 4; check.add(b);
      grp.add(check);
      const l = this.addLabel(j.n + ' <b style="color:#fff">' + Math.round(j.v * 100) + '%</b>', '', [0, -1.22, 0], grp);
      return { grp, arc, check, l, v: j.v };
    });
    // eval set questions feeding judges
    this.qs = [];
    for (let i = 0; i < 8; i++) { const q = new THREE.Mesh(roundedBox(0.36, 0.24, 0.06, 0.05), glow(COL.cyan, 1.8)); g.add(q); this.qs.push(q); }
    this.evalLbl = this.addLabel('mlflow.genai.evaluate', 'cyan', [0.7, 0.35, 1.8]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 8.5, 9);
    const run = seg(t, 0.5, 3.2);
    this.cursor.position.set(-2.6 + run * 5.2, -0.1, 0.15); this.cursor.visible = run > 0 && run < 1;
    this.bars.forEach((m, i) => {
      const s = SPANS[i];
      const p = seg(run, s.s, s.s + s.d);
      m.scale.set(Math.max(0.0001, p * m.userData.w), fade + 0.0001, 1);
      this.show(m.userData.lbl, seg(run, s.s, s.s + 0.05) * fade);
      this.show(m.userData.ms, (p >= 1 ? 1 : 0) * fade);
    });
    this.gauges.forEach((gg, i) => {
      const p = E.out(seg(t, 3.4 + i * 0.3, 4.8 + i * 0.3));
      gg.arc.material.uniforms.uP.value = p * gg.v * fade; gg.arc.material.uniforms.uT.value = time;
      const c = E.back(seg(t, 4.8 + i * 0.3, 5.2 + i * 0.3)) * fade;
      gg.check.scale.setScalar(Math.max(0.001, c));
      this.show(gg.l, seg(t, 3.6 + i * 0.3, 4 + i * 0.3) * fade);
      gg.grp.position.z = Math.sin(time * 1.4 + i) * 0.06;
    });
    this.qs.forEach((q, i) => {
      const p = ((time * 0.35 + i / 8) % 1);
      const on = seg(t, 3.0, 3.5) * fade;
      q.position.set(lerp(1.0, 4.3, p), 0.3 + Math.sin(p * Math.PI) * 1.2 + i * 0.02, 1.0 + Math.sin(i) * 0.3);
      q.scale.setScalar(Math.max(0.001, on * Math.sin(p * Math.PI)));
      q.rotation.y = time + i;
    });
    this.show(this.evalLbl, seg(t, 3.2, 3.6) * fade);
  }
}
