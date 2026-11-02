import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

// Restrained, professional palette: graphite neutrals + one muted Databricks-orange accent.
export const COL = {
  lava: 0xd9653b,   // accent (muted Databricks orange)
  ember: 0xc7825f,  // softer accent tint
  amber: 0xc3a273,  // sand
  cyan: 0x8aa4ba,   // steel blue
  mint: 0x8eae9d,   // sage
  violet: 0x9893b5, // dusty lavender
  pink: 0xb3899a,
  white: 0xe9e6e0, steel: 0x23262d,
};
export const CLUSTER = [0xc98a68, 0x8aa4ba, 0x9893b5, 0x8eae9d, 0xc3a273];

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const seg = (t, a, b) => clamp01((t - a) / (b - a));
export const lerp = (a, b, t) => a + (b - a) * t;
export const E = {
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  io: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  back: (t) => { const c1 = 1.2, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  elastic: (t) => (t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1),
};
export const bell = (t, a, b) => { const p = seg(t, a, b); return Math.sin(p * Math.PI); };

// "glow" is now a satin-finished, softly self-lit material (no HDR blow-out).
const glowCache = new Map();
export function glow(color, k = 2.2) {
  const key = color + '_' + k;
  if (!glowCache.has(key)) {
    glowCache.set(key, new THREE.MeshStandardMaterial({
      color, roughness: 0.42, metalness: 0.15, emissive: color,
      emissiveIntensity: Math.min(0.38, 0.06 + k * 0.07), envMapIntensity: 0.8,
    }));
  }
  return glowCache.get(key);
}
export function glowT(color, k = 2.2, opacity = 1) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.25, roughness: 0.5, transparent: true, opacity: opacity * 0.55, depthWrite: false });
}
export function glass(color = 0xffffff, o = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0, roughness: Math.max(0.12, o.roughness ?? 0.12), transmission: o.transmission ?? 1, thickness: o.thickness ?? 0.6,
    ior: 1.45, clearcoat: 0.6, clearcoatRoughness: 0.15, envMapIntensity: o.env ?? 0.9, transparent: true, opacity: o.opacity ?? 1,
    attenuationColor: new THREE.Color(o.tint ?? color), attenuationDistance: o.att ?? 3, side: o.side ?? THREE.FrontSide,
  });
}
// satin acrylic panel
export function frost(color = 0xffffff, opacity = 0.28, o = {}) {
  return new THREE.MeshPhysicalMaterial({ color, metalness: 0.05, roughness: o.roughness ?? 0.35, transparent: true, opacity: Math.min(0.92, opacity * 1.6 + 0.12), clearcoat: 0.4, clearcoatRoughness: 0.3, envMapIntensity: 0.6, depthWrite: false, side: THREE.DoubleSide, emissive: o.emissive ?? 0x000000, emissiveIntensity: Math.min(0.08, o.ei ?? 0) });
}
export function metal(color = 0x2a2d34, rough = 0.35, metalness = 0.9) {
  return new THREE.MeshStandardMaterial({ color, metalness: Math.min(metalness, 0.75), roughness: Math.max(rough, 0.32), envMapIntensity: 0.9 });
}
export function matte(color = 0x2a2d34, rough = 0.7) {
  return new THREE.MeshStandardMaterial({ color, metalness: 0.05, roughness: rough, envMapIntensity: 0.6 });
}
export function edgeLines(geo, color, k = 1.6, opacity = 0.9) {
  return new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), new THREE.LineBasicMaterial({ color, transparent: true, opacity: opacity * 0.5 }));
}
export function roundedBox(w, h, d, r = 0.08, s = 4) {
  const shape = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  shape.moveTo(x + r, y); shape.lineTo(x + w - r, y); shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r); shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h); shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r); shape.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.001, d - r * 2 * 0.5), bevelEnabled: true, bevelSize: r * 0.5, bevelThickness: r * 0.5, bevelSegments: s, curveSegments: s });
  g.center();
  return g;
}

export function label(html, cls = '', pos = [0, 0, 0]) {
  const el = document.createElement('div');
  el.className = 'lbl ' + cls;
  el.innerHTML = html;
  const o = new CSS2DObject(el);
  o.position.set(...pos);
  o.userData.isLabel = true;
  return o;
}

// ------- canvas textures (paper documents) -------
const DOCS = [
  { t: 'PROVIDER CONTRACT', c: '#b8603e' },
  { t: 'CLAIMS POLICY', c: '#a8865a' },
  { t: 'CREDENTIALING', c: '#5f7d96' },
  { t: 'FEE SCHEDULE', c: '#76709a' },
  { t: 'NETWORK POLICY', c: '#5f8a76' },
  { t: 'PRIOR AUTH', c: '#9a7a52' },
];
const texCache = {};
export function docTexture(i = 0) {
  i = i % DOCS.length;
  if (texCache[i]) return texCache[i];
  const d = DOCS[i];
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 680;
  const g = cv.getContext('2d'); g.scale(2, 2);
  g.fillStyle = '#eeebe4'; g.fillRect(0, 0, 256, 340);
  g.fillStyle = d.c; g.fillRect(20, 22, 4, 26);
  g.fillStyle = '#2a2c31'; g.font = '600 15px Inter, Helvetica, Arial, sans-serif'; g.fillText(d.t, 32, 36);
  g.fillStyle = '#8b8d92'; g.font = '9px Inter, Helvetica, Arial, sans-serif'; g.fillText('Rev. 2026 · Page 7 of 42', 32, 50);
  let y = 72;
  for (let k = 0; k < 15; k++) {
    if (k === 5 || k === 11) { g.strokeStyle = '#b9b6ae'; g.lineWidth = 1; g.strokeRect(20, y, 216, 34); g.beginPath(); for (let c = 1; c < 4; c++) { g.moveTo(20 + c * 54, y); g.lineTo(20 + c * 54, y + 34); } g.moveTo(20, y + 12); g.lineTo(236, y + 12); g.stroke(); g.fillStyle = '#d9d5cc'; g.fillRect(20, y, 216, 12); y += 44; continue; }
    g.fillStyle = k % 4 === 0 ? '#45474d' : '#a9a8a4';
    g.fillRect(20, y, 216 * (0.55 + ((k * 37) % 40) / 100), k % 4 === 0 ? 6 : 4);
    y += k % 4 === 0 ? 16 : 12;
  }
  g.strokeStyle = d.c; g.lineWidth = 1.2; g.beginPath(); g.roundRect(196, 304, 40, 18, 3); g.stroke();
  g.fillStyle = d.c; g.font = '600 10px Inter, Helvetica, Arial, sans-serif'; g.fillText('PDF', 205, 317);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  texCache[i] = t; return t;
}
export const DOC_COLORS = DOCS.map((d) => new THREE.Color(d.c).getHex());
const edgeMat = new THREE.MeshStandardMaterial({ color: 0xd9d5cc, roughness: 0.9, metalness: 0 });
export function paperMat(tex) {
  return new THREE.MeshStandardMaterial({ map: tex, color: 0xd6d3cc, roughness: 0.82, metalness: 0, envMapIntensity: 0.5 });
}
export function paperBox(w, h, d, tex, side = 0x34373e) {
  const s = side === 'paper' ? edgeMat : matte(side, 0.55);
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [s, s, s, s, paperMat(tex), s]);
}
export function makeDoc(i = 0, w = 1.1, h = 1.45) {
  const grp = new THREE.Group();
  const body = paperBox(w, h, 0.03, docTexture(i), 'paper');
  grp.add(body);
  return grp;
}

let dotTex;
export function dotTexture() {
  if (dotTex) return dotTex;
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.5, 'rgba(255,255,255,.7)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  dotTex = new THREE.CanvasTexture(cv); return dotTex;
}

// thin connector between two points
export class Beam {
  constructor(color = COL.cyan, radius = 0.025, k = 3) {
    this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.8, radius * 0.8, 1, 8, 1, true), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.25, roughness: 0.5, transparent: true, opacity: 0.75 }));
    this.mesh.geometry.translate(0, 0.5, 0); this.mesh.geometry.rotateX(Math.PI / 2);
  }
  set(a, b, t = 1) {
    const len = a.distanceTo(b) * t;
    this.mesh.position.copy(a); this.mesh.lookAt(b);
    this.mesh.scale.set(1, 1, Math.max(0.0001, len));
    this.mesh.visible = t > 0.001;
  }
}

// small beads that travel along a curve (data in motion)
export class Stream {
  constructor(curve, n = 60, color = COL.amber, size = 0.16, speed = 0.25) {
    this.curve = curve; this.n = Math.max(6, Math.round(n * 0.4)); this.speed = speed * 0.7;
    n = this.n;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(n * 3); this.off = new Float32Array(n).map((_, i) => i / n);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.mat = new THREE.PointsMaterial({ size: size * 0.55, map: dotTexture(), color, transparent: true, depthWrite: false, sizeAttenuation: true, opacity: 1 });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false;
    this._v = new THREE.Vector3();
  }
  update(time, amount = 1) {
    for (let i = 0; i < this.n; i++) {
      const u = (this.off[i] + time * this.speed) % 1;
      this.curve.getPointAt(u, this._v);
      this.pos[i * 3] = this._v.x; this.pos[i * 3 + 1] = this._v.y; this.pos[i * 3 + 2] = this._v.z;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.mat.opacity = Math.min(0.85, amount * 0.8);
  }
}

// matte graphite plinth each station stands on
export function platform(radius = 5, accent = COL.lava) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.015, 0.34, 128), new THREE.MeshStandardMaterial({ color: 0x202228, roughness: 0.62, metalness: 0.25, envMapIntensity: 0.5 }));
  base.position.y = -0.17; base.receiveShadow = true; base.castShadow = true; g.add(base);
  const top = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.965, 128), new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.85, metalness: 0.05, envMapIntensity: 0.4 }));
  top.rotation.x = -Math.PI / 2; top.position.y = 0.002; top.receiveShadow = true; g.add(top);
  // faint engraved rings
  const lines = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.96, 128), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uR: { value: radius } },
    vertexShader: `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform float uR; varying vec2 vP;
      void main(){ float r = length(vP)/uR; float w = fwidth(r*6.);
        float rings = 1.-smoothstep(0.,w*1.2,abs(fract(r*6.)-.5)-.49+w);
        float fade = smoothstep(1.,.35,r);
        gl_FragColor = vec4(vec3(.85,.83,.8), rings*fade*.05); }`,
  }));
  lines.rotation.x = -Math.PI / 2; lines.position.y = 0.006; g.add(lines);
  // thin accent inlay at the rim
  const inlay = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.985, 0.012, 6, 200), new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.35, roughness: 0.4 }));
  inlay.rotation.x = Math.PI / 2; inlay.position.y = 0.01; g.add(inlay);
  g.userData.uni = lines.material.uniforms;
  return g;
}

// stylised mannequin figure
export function person(color = COL.cyan) {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xb9b4ab, roughness: 0.55, metalness: 0.05 });
  const cloth = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).lerp(new THREE.Color(0x2b2e35), 0.55), roughness: 0.75, metalness: 0.02 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 40, 20), skin); head.position.y = 1.32; g.add(head);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.14, 16), skin); neck.position.y = 1.08; g.add(neck);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.46, 8, 28), cloth); body.position.y = 0.62; g.add(body);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.46, 0.06, 40), matte(0x34373e, 0.6)); base.position.y = 0.03; g.add(base);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
