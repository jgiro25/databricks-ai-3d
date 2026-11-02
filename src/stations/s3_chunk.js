import * as THREE from 'three';
import { Station } from './base.js';
import { COL, matte, glow, glowT, frost, metal, edgeLines, roundedBox, docTexture, seg, bell, E, lerp } from '../helpers.js';

const COLS = 2, ROWS = 4;
export class ChunkStation extends Station {
  constructor() {
    super({ loop: 9, cam: { pos: [0.4, 4.2, 14.5], target: [0.4, 2.3, 0] } });
    const g = this.group;
    const W = 2.4, H = 3.2;
    this.W = W; this.H = H;
    this.docPos = new THREE.Vector3(-3, 2.4, 0);
    // full doc
    this.doc = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.05), [metal(0xcfd4e2, .6, .1), metal(0xcfd4e2, .6, .1), metal(0xcfd4e2, .6, .1), metal(0xcfd4e2, .6, .1),
      new THREE.MeshStandardMaterial({ map: docTexture(0), color: 0xb8bccb, emissive: 0xffffff, emissiveMap: docTexture(0), emissiveIntensity: 0.07, envMapIntensity: 0.35, roughness: 0.5 }), metal(0xb9bfce, .6, .1)]);
    this.doc.position.copy(this.docPos); g.add(this.doc);
    // scanner
    this.scan = new THREE.Mesh(new THREE.BoxGeometry(W * 1.25, 0.05, 0.5), glow(COL.cyan, 2)); g.add(this.scan);
    this.scanGlow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.25, 0.9), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, 
      uniforms: { c: { value: new THREE.Color(COL.cyan) } },
      vertexShader: 'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: 'uniform vec3 c; varying vec2 vUv; void main(){ float a = smoothstep(0.,1.,vUv.y)*.22; gl_FragColor = vec4(c, a);}' }));
    g.add(this.scanGlow);
    this.addLabel('ai_parse_document', 'cyan big', [-3, 4.55, 0.3]);
    // layout boxes
    const boxes = [[0, 1.3, 2.1, 0.35], [0, 0.6, 2.1, 0.75], [0, -0.25, 2.1, 0.55], [0, -1.05, 2.1, 0.85]];
    this.layout = boxes.map(([x, y, w, h]) => {
      const geo = new THREE.PlaneGeometry(w, h);
      const l = edgeLines(geo, COL.cyan, 2.6, 0.95); l.position.set(this.docPos.x + x, this.docPos.y + y, 0.06); g.add(l); return l;
    });
    // chunks: each carries its slice of the page texture
    this.chunks = [];
    const cw = W / COLS, ch = H / ROWS;
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const tex = docTexture(0).clone(); tex.repeat.set(1 / COLS, 1 / ROWS); tex.offset.set(c / COLS, 1 - (r + 1) / ROWS); tex.needsUpdate = true;
      const isTable = r === 2;
      const col = isTable ? COL.cyan : (r === 0 ? COL.lava : COL.amber);
      const mats = [matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6),
        new THREE.MeshStandardMaterial({ map: tex, color: 0xb8bccb, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.07, envMapIntensity: 0.35, roughness: 0.5 }), matte(0x3a3d44, .6)];
      const m = new THREE.Mesh(new THREE.BoxGeometry(cw * 0.97, ch * 0.97, 0.12), mats);
      const edge = edgeLines(m.geometry, col, 3, 1); m.add(edge); m.userData.edge = edge;
      m.userData.home = new THREE.Vector3(this.docPos.x - W / 2 + cw * (c + 0.5), this.docPos.y + H / 2 - ch * (r + 0.5), 0);
      const k = r * COLS + c;
      m.userData.dest = new THREE.Vector3(1.7 + (k % 2) * 1.45, 4.2 - Math.floor(k / 2) * 0.95, 0.2 + (k % 2) * 0.15);
      m.userData.idx = k; g.add(m); this.chunks.push(m);
    }
    this.addLabel('ai_prep_search', 'lava big', [2.4, 5.2, 0.3]);
    this.idLbls = this.chunks.filter((_, i) => i % 2 === 1).map((m, i) => this.addLabel('chunk_' + String(i * 2 + 1).padStart(2, '0'), 'ghost', [m.userData.dest.x + 1.25, m.userData.dest.y, m.userData.dest.z]));
    // laser cut lines
    this.cut = new THREE.Mesh(new THREE.BoxGeometry(W * 1.1, 0.03, 0.08), glow(COL.lava, 5)); g.add(this.cut);
    this.cutV = new THREE.Mesh(new THREE.BoxGeometry(0.03, H * 1.08, 0.08), glow(COL.lava, 5)); g.add(this.cutV);
    this.pick(this.doc, 'pdfPage', [W / 2 + 0.15, -H / 2 + 0.3, 0.1]);
    this.pick(this.hitBox(2.8, 0.55, 0.3, [-3, 4.55, 0.3]), 'aiParse', [-1.6, 0, 0]);
    this.pick(this.hitBox(2.6, 0.55, 0.3, [2.4, 5.2, 0.3]), 'aiPrep', [1.5, 0, 0]);
    this.chunks.forEach((m, i) => this.pick(m, 'chunk', i === 1 ? [0.75, 0.5, 0.1] : null));
  }
  update(t, time) {
    const W = this.W, H = this.H, dp = this.docPos;
    // scan sweep
    const s = seg(t, 0.4, 2.2);
    const sy = dp.y + H / 2 + 0.1 - s * (H + 0.2);
    this.scan.visible = this.scanGlow.visible = s > 0 && s < 1;
    this.scan.position.set(dp.x, sy, 0.15); this.scanGlow.position.set(dp.x, sy + 0.45, 0.1);
    this.layout.forEach((l, i) => { const vis = s > (i + 0.5) / 4.6 ? 1 : 0; l.material.opacity = vis * (0.95 - seg(t, 2.6, 3.0) * 0.95); });
    // cut lines
    const cutP = seg(t, 2.4, 3.0);
    this.cut.visible = this.cutV.visible = cutP > 0 && cutP < 1;
    this.cut.position.set(dp.x, dp.y + H / 2 - (H / ROWS) * Math.min(3, Math.floor(cutP * 4) + 1), 0.1);
    this.cut.scale.x = 0.2 + (cutP * 4 % 1);
    this.cutV.position.set(dp.x, dp.y, 0.1); this.cutV.scale.y = cutP;
    // split
    const split = seg(t, 3.0, 3.6);
    this.doc.visible = split <= 0;
    this.chunks.forEach((m, k) => {
      m.visible = split > 0 || t < 0.01 ? split > 0 : false;
      const h = m.userData.home, d = m.userData.dest;
      const ex = E.out(split);
      // exploded hover position
      const hx = h.x + (h.x - dp.x) * 0.35 * ex, hy = h.y + (h.y - dp.y) * 0.3 * ex, hz = ex * (0.4 + (k % 3) * 0.3);
      const f = E.io(seg(t, 3.8 + k * 0.12, 5.2 + k * 0.12));
      m.position.set(lerp(hx, d.x, f), lerp(hy, d.y, f) + Math.sin(f * Math.PI) * 0.8, lerp(hz, d.z, f));
      m.rotation.set(Math.sin(f * Math.PI) * 0.5, -0.25 * f + Math.sin(f * Math.PI) * 0.8, 0);
      m.scale.setScalar(lerp(1, 0.62, f) * (1 - seg(t, 8.5, 9)) + 0.0001);
      m.userData.edge.material.opacity = 0.35 + f * 0.65 + Math.sin(time * 4 + k) * 0.1;
      m.position.y += f * Math.sin(time * 1.6 + k) * 0.04;
    });
    this.idLbls.forEach((l, i) => this.show(l, seg(t, 5.4 + i * 0.1, 5.8 + i * 0.1)));
  }
}
