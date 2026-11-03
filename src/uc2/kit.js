import * as THREE from 'three';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, Beam } from '../helpers.js';

const FONT = 'Inter, Helvetica, Arial, sans-serif';
const MONO = 'JetBrains Mono, Menlo, Consolas, monospace';
const cache = new Map();

/** Dark "screen" texture with lines of text. lines: [text, color?, bold?] */
export function screenTex(key, w, h, draw) {
  if (cache.has(key)) return cache.get(key);
  const cv = document.createElement('canvas'); cv.width = w * 2; cv.height = h * 2;
  const g = cv.getContext('2d'); g.scale(2, 2);
  draw(g, w, h);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  cache.set(key, t); return t;
}
export function codeTex(key, lines, { w = 420, h = 220, title = '', bg = '#1c1f25' } = {}) {
  return screenTex(key, w, h, (g) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    let y = 22;
    if (title) { g.fillStyle = '#d9653b'; g.fillRect(14, 12, 3, 14); g.fillStyle = '#e9e6e0'; g.font = `600 12px ${FONT}`; g.fillText(title, 24, 24); y = 46; }
    g.font = `12px ${MONO}`;
    for (const l of lines) {
      const [txt, col] = Array.isArray(l) ? l : [l];
      g.fillStyle = col || '#b9bcc4'; g.fillText(txt, 16, y); y += 17;
    }
  });
}
export const KW = '#d9875f', ID = '#c9ccd4', STR = '#8eae9d', DIM = '#7d828c';

/** A flat panel (rounded slab) with a texture on its front face. */
export function panel(w, h, tex, { d = 0.06, edge = 0x6d7a8d, edgeO = 0.5, side = 0x2b2e35 } = {}) {
  const s = matte(side, 0.6);
  const face = new THREE.MeshStandardMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32, color: 0xb9bcc4, roughness: 0.55, envMapIntensity: 0.3 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [s, s, s, s, face, s]);
  if (edge != null) m.add(edgeLines(m.geometry, edge, 1, edgeO));
  return m;
}

/** 3D bar chart on a base. Returns group with .bars and .set(values01[]) */
export function barChart(n, { w = 2.6, d = 0.7, maxH = 2, colors } = {}) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(roundedBox(w + 0.3, 0.08, d + 0.3, 0.03), matte(0x2f333b, 0.6)); base.position.y = 0.04; g.add(base);
  const gap = w / n; g.bars = [];
  for (let i = 0; i < n; i++) {
    const c = colors ? colors[i] : 0x8a8f99;
    const b = new THREE.Mesh(roundedBox(gap * 0.62, 1, d * 0.7, 0.03), c === COL.lava ? glow(COL.lava, 1.4) : matte(c, 0.45));
    b.geometry.translate(0, 0.5, 0); b.position.set(-w / 2 + gap * (i + 0.5), 0.08, 0); b.scale.y = 0.001; g.add(b); g.bars.push(b);
  }
  g.set = (v) => g.bars.forEach((b, i) => { b.scale.y = Math.max(0.001, v[i] * maxH); });
  return g;
}

/** Stack of glowing disks: a SQL warehouse. */
export function warehouse(n = 4, r = 0.75) {
  const g = new THREE.Group(); g.disks = [];
  for (let i = 0; i < n; i++) {
    const disk = new THREE.Group(); disk.position.y = 0.16 + i * 0.32; g.add(disk);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.2, 64), metal(0x4a4f58, 0.35, 0.6)); disk.add(c);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r + 0.005, 0.018, 6, 80), glow(COL.lava, 1.4)); ring.rotation.x = Math.PI / 2; ring.position.y = 0.06; disk.add(ring);
    for (let k = 0; k < 8; k++) { const led = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.02), glow(k % 3 ? COL.mint : COL.amber, 1)); const a = k / 8 * Math.PI * 2; led.position.set(Math.sin(a) * (r + 0.01), -0.03, Math.cos(a) * (r + 0.01)); led.rotation.y = a; disk.add(led); }
    g.disks.push(disk);
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.6, r * 0.7, 0.1, 48), matte(0x2b2e35, 0.5)); cap.position.y = 0.16 + n * 0.32 - 0.1; g.add(cap);
  return g;
}

/** Faceted agent core: dodecahedron in a cage with an inner light. */
export function agentCore(r = 0.9) {
  const g = new THREE.Group();
  g.shell = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), frost(0x5b6470, 0.35)); g.add(g.shell);
  g.cage = edgeLines(g.shell.geometry, 0xe9e6e0, 1, 0.45); g.add(g.cage);
  g.heart = new THREE.Mesh(new THREE.IcosahedronGeometry(r * 0.42, 1), glow(COL.lava, 2)); g.add(g.heart);
  g.ring = new THREE.Mesh(new THREE.TorusGeometry(r * 1.35, 0.02, 8, 120), glow(COL.amber, 1)); g.ring.rotation.x = Math.PI / 2; g.add(g.ring);
  return g;
}

/** Key icon (primary key). */
export function keyIcon(color = COL.amber) {
  const g = new THREE.Group(); const m = glow(color, 1.2);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.045, 10, 32), m); g.add(ring);
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.06), m); shaft.position.x = 0.32; g.add(shaft);
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.06), m); t1.position.set(0.42, -0.07, 0); g.add(t1);
  const t2 = t1.clone(); t2.position.x = 0.32; g.add(t2);
  return g;
}

/** Shield (trusted / governed). */
export function shield(color = COL.mint, s = 1) {
  const sh = new THREE.Shape();
  sh.moveTo(0, 0.5); sh.lineTo(0.4, 0.36); sh.lineTo(0.38, -0.05); sh.quadraticCurveTo(0.3, -0.38, 0, -0.52); sh.quadraticCurveTo(-0.3, -0.38, -0.38, -0.05); sh.lineTo(-0.4, 0.36); sh.closePath();
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  geo.center(); geo.scale(s, s, s);
  const g = new THREE.Group();
  const m = new THREE.Mesh(geo, matte(0x2f343c, 0.45)); g.add(m);
  g.add(edgeLines(geo, color, 1, 0.8));
  const chk = new THREE.Shape(); chk.moveTo(-0.16, 0.0); chk.lineTo(-0.05, -0.12); chk.lineTo(0.18, 0.14); chk.lineTo(0.14, 0.18); chk.lineTo(-0.05, -0.03); chk.lineTo(-0.12, 0.04); chk.closePath();
  const cg = new THREE.ExtrudeGeometry(chk, { depth: 0.04, bevelEnabled: false }); cg.scale(s, s, s);
  const c = new THREE.Mesh(cg, glow(color, 1.6)); c.position.z = 0.07 * s; g.add(c);
  return g;
}

/** Gauge dial with needle; .set(v01). */
export function gauge(r = 0.8, color = COL.lava) {
  const g = new THREE.Group();
  const face = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.08, 64), matte(0x24272e, 0.5)); face.rotation.x = Math.PI / 2; g.add(face);
  const track = new THREE.Mesh(new THREE.TorusGeometry(r * 0.8, 0.035, 8, 96, Math.PI * 1.5), matte(0x4a4f58, 0.5)); track.rotation.z = -Math.PI * 0.25; track.position.z = 0.05; g.add(track);
  g.arc = new THREE.Mesh(new THREE.TorusGeometry(r * 0.8, 0.05, 8, 96, Math.PI * 1.5), glow(color, 1.6)); g.arc.rotation.z = Math.PI * 1.25; g.arc.scale.x = -1; g.arc.position.z = 0.07; g.add(g.arc);
  g.needle = new THREE.Mesh(new THREE.BoxGeometry(0.04, r * 0.7, 0.02), matte(0xe9e6e0, 0.4)); g.needle.geometry.translate(0, r * 0.33, 0); g.needle.position.z = 0.09; g.add(g.needle);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.06, 24), metal(0x8a8f99, 0.4, 0.6)); hub.rotation.x = Math.PI / 2; hub.position.z = 0.1; g.add(hub);
  g.set = (v) => {
    v = Math.max(0.001, Math.min(1, v));
    if (Math.abs(v - (g._v ?? -1)) < 0.004) return; g._v = v;
    g.needle.rotation.z = Math.PI * 0.75 - v * Math.PI * 1.5;
    g.arc.geometry.dispose(); g.arc.geometry = new THREE.TorusGeometry(r * 0.8, 0.05, 8, 64, Math.PI * 1.5 * v);
  };
  return g;
}

/** Ticket/card slab (small paper card). */
export function ticket(color = COL.amber) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(roundedBox(0.7, 0.42, 0.04, 0.04), matte(0xd6d3cc, 0.8)); g.add(b);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.045), glow(color, 1)); strip.position.x = -0.28; g.add(strip);
  for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.4 - i * 0.08, 0.035, 0.045), matte(0x7d828c, 0.6)); l.position.set(-0.02 - i * 0.04, 0.1 - i * 0.09, 0); g.add(l); }
  return g;
}
export { FONT, MONO };

// Beam with endpoints in the parent's local space (orientation from the local direction, not world lookAt)
const _bd = new THREE.Vector3(), _bz = new THREE.Vector3(0, 0, 1);
export class LBeam extends Beam {
  set(a, b, t = 1) {
    _bd.subVectors(b, a); const len = _bd.length() * t;
    this.mesh.position.copy(a);
    if (_bd.lengthSq() > 1e-8) this.mesh.quaternion.setFromUnitVectors(_bz, _bd.normalize());
    this.mesh.scale.set(1, 1, Math.max(0.0001, len));
    this.mesh.visible = t > 0.001;
  }
}
