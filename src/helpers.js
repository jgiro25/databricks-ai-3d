import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export const COL = {
  lava: 0xff3621, ember: 0xff6a3d, amber: 0xffb547, cyan: 0x3ce0ff, mint: 0x3dffb0,
  violet: 0x9b7bff, pink: 0xff4fa3, white: 0xffffff, steel: 0x1a1f33,
};
export const CLUSTER = [0xff6a3d, 0x3ce0ff, 0x9b7bff, 0x3dffb0, 0xffb547];

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const seg = (t, a, b) => clamp01((t - a) / (b - a));
export const lerp = (a, b, t) => a + (b - a) * t;
export const E = {
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  io: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  back: (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  elastic: (t) => (t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1),
};
// rise then fall (0..1..0) within window
export const bell = (t, a, b) => { const p = seg(t, a, b); return Math.sin(p * Math.PI); };

const glowCache = new Map();
export function glow(color, k = 2.2) {
  const key = color + '_' + k;
  if (!glowCache.has(key)) glowCache.set(key, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), toneMapped: true }));
  return glowCache.get(key);
}
export function glowT(color, k = 2.2, opacity = 1) {
  return new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
}
export function glass(color = 0xffffff, o = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0, roughness: o.roughness ?? 0.08, transmission: o.transmission ?? 1, thickness: o.thickness ?? 0.6,
    ior: 1.45, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: o.env ?? 1.4, transparent: true, opacity: o.opacity ?? 1,
    attenuationColor: new THREE.Color(o.tint ?? color), attenuationDistance: o.att ?? 2.5, side: o.side ?? THREE.FrontSide,
  });
}
// cheaper glass-look (no transmission pass) for many objects / mobile
export function frost(color = 0xffffff, opacity = 0.28, o = {}) {
  return new THREE.MeshPhysicalMaterial({ color, metalness: 0.1, roughness: o.roughness ?? 0.15, transparent: true, opacity, clearcoat: 1, envMapIntensity: 0.85, depthWrite: false, side: THREE.DoubleSide, emissive: o.emissive ?? 0x000000, emissiveIntensity: o.ei ?? 0 });
}
export function metal(color = 0x222738, rough = 0.35, metalness = 0.9) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness: rough, envMapIntensity: 1.2 });
}
export function edgeLines(geo, color, k = 1.6, opacity = 0.9) {
  const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), new THREE.LineBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), transparent: true, opacity }));
  return e;
}
export function roundedBox(w, h, d, r = 0.08, s = 4) {
  // lightweight rounded box via extrude
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

// ------- canvas textures -------
const DOCS = [
  { t: 'PROVIDER CONTRACT', c: '#ff3621' },
  { t: 'CLAIMS POLICY', c: '#ff9a3d' },
  { t: 'CREDENTIALING', c: '#3ce0ff' },
  { t: 'FEE SCHEDULE', c: '#9b7bff' },
  { t: 'NETWORK POLICY', c: '#3dffb0' },
  { t: 'PRIOR AUTH', c: '#ffb547' },
];
const texCache = {};
export function docTexture(i = 0) {
  i = i % DOCS.length;
  if (texCache[i]) return texCache[i];
  const d = DOCS[i];
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 340;
  const g = cv.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 340); grd.addColorStop(0, '#f6f7fb'); grd.addColorStop(1, '#dfe3ee');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 340);
  g.fillStyle = d.c; g.fillRect(0, 0, 256, 10);
  g.fillStyle = '#1b2033'; g.font = 'bold 17px sans-serif'; g.fillText(d.t, 20, 44);
  g.fillStyle = d.c; g.fillRect(20, 54, 46, 4);
  let y = 78;
  for (let k = 0; k < 15; k++) {
    if (k === 5 || k === 11) { g.fillStyle = '#c8cdda'; g.fillRect(20, y, 216, 34); g.fillStyle = '#aeb4c4'; for (let c = 0; c < 4; c++) g.fillRect(24 + c * 54, y + 4, 46, 26); y += 44; continue; }
    g.fillStyle = k % 4 === 0 ? '#4a5168' : '#9aa1b5';
    g.fillRect(20, y, 216 * (0.55 + ((k * 37) % 40) / 100), k % 4 === 0 ? 7 : 5);
    y += k % 4 === 0 ? 16 : 12;
  }
  g.fillStyle = d.c; g.beginPath(); g.roundRect(186, 300, 52, 24, 5); g.fill();
  g.fillStyle = '#fff'; g.font = 'bold 13px sans-serif'; g.fillText('PDF', 198, 317);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  texCache[i] = t; return t;
}
export const DOC_COLORS = DOCS.map((d) => new THREE.Color(d.c).getHex());

export function makeDoc(i = 0, w = 1.1, h = 1.45) {
  const grp = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.035), [
    metal(0x8a90a3, 0.6, 0.1), metal(0x8a90a3, 0.6, 0.1), metal(0x8a90a3, 0.6, 0.1), metal(0x8a90a3, 0.6, 0.1),
    new THREE.MeshStandardMaterial({ map: docTexture(i), color: 0xb8bccb, roughness: 0.7, metalness: 0, emissive: 0xffffff, emissiveMap: docTexture(i), emissiveIntensity: 0.06, envMapIntensity: 0.35 }),
    metal(0x7d8396, 0.6, 0.1),
  ]);
  grp.add(body);
  const rim = new THREE.Mesh(new THREE.BoxGeometry(w * 1.02, 0.03, 0.04), glow(DOC_COLORS[i % DOC_COLORS.length], 2.5));
  rim.position.y = h / 2; grp.add(rim);
  return grp;
}

// soft round sprite texture for particles
let dotTex;
export function dotTexture() {
  if (dotTex) return dotTex;
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const g = cv.getContext('2d');
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,.85)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  dotTex = new THREE.CanvasTexture(cv); return dotTex;
}

// a glowing beam between two points (cylinder), updated each frame
export class Beam {
  constructor(color = COL.cyan, radius = 0.025, k = 3) {
    this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 1, 8, 1, true), glowT(color, k, 1));
    this.mesh.geometry.translate(0, 0.5, 0); this.mesh.geometry.rotateX(Math.PI / 2);
    this._a = new THREE.Vector3(); this._b = new THREE.Vector3();
  }
  set(a, b, t = 1) {
    this._a.copy(a); this._b.copy(b);
    const len = a.distanceTo(b) * t;
    this.mesh.position.copy(a); this.mesh.lookAt(b);
    this.mesh.scale.set(1, 1, Math.max(0.0001, len));
    this.mesh.visible = t > 0.001;
  }
}

// particles that stream along a curve
export class Stream {
  constructor(curve, n = 60, color = COL.amber, size = 0.16, speed = 0.25) {
    this.curve = curve; this.n = n; this.speed = speed;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(n * 3); this.off = new Float32Array(n).map(() => Math.random());
    this.jit = new Float32Array(n * 3).map(() => (Math.random() - 0.5) * 0.18);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.mat = new THREE.PointsMaterial({ size, map: dotTexture(), color: new THREE.Color(color).multiplyScalar(2.2), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, opacity: 1 });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false;
    this._v = new THREE.Vector3();
  }
  update(time, amount = 1) {
    for (let i = 0; i < this.n; i++) {
      const u = (this.off[i] + time * this.speed) % 1;
      this.curve.getPointAt(u, this._v);
      this.pos[i * 3] = this._v.x + this.jit[i * 3]; this.pos[i * 3 + 1] = this._v.y + this.jit[i * 3 + 1]; this.pos[i * 3 + 2] = this._v.z + this.jit[i * 3 + 2];
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.mat.opacity = amount;
  }
}

// glowing platform disc each station stands on
export function platform(radius = 5, accent = COL.lava) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.04, 0.22, 96), metal(0x0a0c14, 0.55, 0.6));
  base.material.envMapIntensity = 0.18;
  base.position.y = -0.11; g.add(base);
  const top = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.985, 96), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uCol: { value: new THREE.Color(accent) }, uR: { value: radius } },
    vertexShader: `varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform float uTime; uniform vec3 uCol; uniform float uR; varying vec2 vP;
      void main(){
        float r = length(vP)/uR;
        float rings = smoothstep(.03,.0,abs(fract(r*7.-uTime*.15)-.5)-.47);
        vec2 gp = abs(fract(vP*1.2)-.5);
        float grid = smoothstep(.49,.5,max(gp.x,gp.y))*.35;
        float edge = smoothstep(.93,1.,r)*smoothstep(1.,.985,r);
        float fade = smoothstep(1.,.2,r);
        vec3 c = uCol*(rings*.35*fade + grid*fade*.5) + uCol*edge*2.4;
        gl_FragColor = vec4(c, (rings*.35+grid)*fade*.6 + edge);
      }`,
  }));
  top.rotation.x = -Math.PI / 2; top.position.y = 0.005; g.add(top);
  g.userData.uni = top.material.uniforms;
  // under glow ring
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.04, 0.025, 8, 160), glow(accent, 3));
  ring.rotation.x = Math.PI / 2; ring.position.y = -0.2; g.add(ring);
  return g;
}

// a simple icon-like user figure
export function person(color = COL.cyan) {
  const g = new THREE.Group();
  const m = new THREE.MeshPhysicalMaterial({ color: 0x1b2135, metalness: 0.4, roughness: 0.25, clearcoat: 1, envMapIntensity: 1.5 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 16), m); head.position.y = 1.25; g.add(head);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.5, 8, 24), m); body.position.y = 0.55; g.add(body);
  const visor = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.025, 8, 48, Math.PI), glow(color, 3)); visor.position.set(0, 1.27, 0.02); visor.rotation.z = Math.PI; g.add(visor);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.02, 8, 64), glow(color, 2.5)); ring.rotation.x = Math.PI / 2; ring.position.y = 0.02; g.add(ring);
  return g;
}
