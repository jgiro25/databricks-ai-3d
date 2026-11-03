import * as THREE from 'three';
import { Station } from '../stations/base.js';
import { COL, matte, metal, glow, frost, edgeLines, roundedBox, person, makeDoc, Stream, seg, bell, E, lerp } from '../helpers.js';
import { screenTex, codeTex, panel, shield, tableTex, cardTex, deltaSlab, bucket, FONT, MONO, KW, ID, STR, DIM, LBeam as Beam } from './kit.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const sc = (o, v) => o.scale.setScalar(Math.max(0.001, v));
const PDF_PATH = '/Volumes/main/provider_ops/raw_docs/acme_provider_agreement.pdf';

function qTex(key, n, text) {
  return screenTex(key, 360, 64, (g, w, h) => {
    g.fillStyle = '#1f2228'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#d9653b'; g.beginPath(); g.arc(30, 32, 15, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#1c1f25'; g.font = `700 14px ${FONT}`; g.textAlign = 'center'; g.fillText(String(n), 30, 37); g.textAlign = 'left';
    g.fillStyle = '#e9e6e0'; g.font = `500 14.5px ${FONT}`; g.fillText(text, 56, 37);
  });
}
function hexTex(key, w = 360, h = 220, title = 'content · BINARY (first bytes)') {
  return screenTex(key, w, h, (g) => {
    g.fillStyle = '#16181c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#d9653b'; g.fillRect(14, 12, 3, 14); g.fillStyle = '#e9e6e0'; g.font = `600 12px ${FONT}`; g.fillText(title, 24, 24);
    const rows = [
      ['00000000', '25 50 44 46 2D 31 2E 37', '%PDF-1.7'],
      ['00000008', '0A 25 E2 E3 CF D3 0A 31', '.%.....1'],
      ['00000010', '20 30 20 6F 62 6A 0A 3C', ' 0 obj.<'],
      ['00000018', '3C 2F 46 69 6C 74 65 72', '</Filter'],
      ['00000020', '2F 46 6C 61 74 65 44 65', '/FlateDe'],
      ['00000028', '78 9C ED 5D 5B 8F 1C C7', 'x..][...'],
      ['00000030', 'B1 7E 9F 5F 31 E0 4B 02', '.~._1.K.'],
      ['…', '2,481,337 bytes in total', ''],
    ];
    g.font = `12px ${MONO}`;
    rows.forEach((r, i) => {
      const y = 50 + i * 20;
      g.fillStyle = '#7d828c'; g.fillText(r[0], 16, y);
      g.fillStyle = i < 1 ? '#e8a07f' : '#b9bcc4'; g.fillText(r[1], 96, y);
      g.fillStyle = i < 1 ? '#8eae9d' : '#5d626c'; g.fillText(r[2], 290, y);
    });
  });
}

// ───────────────────────── 0 · QUESTIONS
const QS = [
  ['q_text', 'Is the PDF’s text saved in the Delta table?'],
  ['q_chunk', 'How are chunks cut and vectorized?'],
  ['q_query', 'How is my question turned into a vector?'],
  ['q_where', 'Where does the search look? The Delta table?'],
  ['q_store', 'Where is each piece stored?'],
];
const PATH = ['PDF', 'bytes', 'text', 'chunks', 'vectors', 'index'];
export class XQuestions extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 4.4, 14.5], target: [0, 2.4, 0] } });
    const g = this.group;
    this.dev = person(COL.cyan); this.dev.position.set(-4.3, 0, 1.2); this.dev.rotation.y = 0.5; g.add(this.dev);
    const desk = new THREE.Mesh(roundedBox(1.3, 0.06, 0.7, 0.03), matte(0x3a3f48, 0.5)); desk.position.set(-3.5, 0.85, 1.6); g.add(desk);
    const legs = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, 0.08), metal(0x6d7280)); legs.position.set(-3.5, 0.42, 1.6); g.add(legs);
    this.laptop = panel(0.8, 0.5, codeTex('rx_lap', [['spark.read', KW], ['  .format("binaryFile")', STR], ['ai_parse_document(…)', KW], ['similarity_search(…)', KW]], { w: 220, h: 120 }), { d: 0.03 });
    this.laptop.position.set(-3.5, 1.15, 1.5); this.laptop.rotation.set(-0.15, 0.5, 0); g.add(this.laptop);
    this.pick(this.dev, 'developer', [0, 1.7, 0]);
    this.cards = QS.map(([id, txt], i) => {
      const c = panel(3.6, 0.64, qTex('rx_q' + i, i + 1, txt), { d: 0.05 }); g.add(c);
      c.userData.base = V(-0.9, 4.6 - i * 0.82, 0.2 - i * 0.05);
      this.pick(c, id, [1.9, 0.3, 0.05]); return c;
    });
    // mini data path tray
    this.tray = new THREE.Group(); this.tray.position.set(3.3, 0.3, 0.6); g.add(this.tray);
    const base = new THREE.Mesh(roundedBox(1.3, 0.12, 4.6, 0.05), matte(0x2f333b, 0.6)); base.position.y = 0.06; this.tray.add(base);
    this.tokens = PATH.map((n, i) => {
      const t = new THREE.Group(); t.position.set(0, 0.35, 1.9 - i * 0.76); this.tray.add(t);
      let m;
      if (i === 0) { m = makeDoc(0, 0.42, 0.55); m.rotation.x = -0.3; m.position.y = 0.15; }
      else if (i === 1) { m = new THREE.Group(); for (let k = 0; k < 8; k++) { const c = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), glow(k % 3 ? 0x6d7280 : COL.lava, 0.8)); c.position.set((k % 4) * 0.13 - 0.2, Math.floor(k / 4) * 0.13, 0); m.add(c); } }
      else if (i === 2) { m = new THREE.Group(); for (let k = 0; k < 4; k++) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.5 - (k % 2) * 0.12, 0.05, 0.05), matte(0xd6d3cc, 0.6)); l.position.y = k * 0.1; m.add(l); } }
      else if (i === 3) { m = new THREE.Group(); for (let k = 0; k < 3; k++) { const s = new THREE.Mesh(roundedBox(0.16, 0.34, 0.04, 0.02), matte(0xd6d3cc, 0.6)); s.position.x = (k - 1) * 0.19; s.position.y = 0.12; m.add(s); } }
      else if (i === 4) { m = new THREE.Group(); for (let k = 0; k < 7; k++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1 + ((k * 37) % 5) * 0.06, 0.05), glow(k % 2 ? COL.cyan : COL.lava, 1)); b.position.set((k - 3) * 0.08, 0.12, 0); m.add(b); } }
      else { m = new THREE.Group(); for (let k = 0; k < 6; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), glow(COL.cyan, 1)); s.position.set(Math.sin(k) * 0.22, 0.1 + (k % 2) * 0.18, Math.cos(k * 1.7) * 0.1); m.add(s); } }
      t.add(m);
      t.userData.lbl = this.addLabel(n, 'ghost', [0.85, 0.05, 0], t);
      return t;
    });
    this.flow = new Stream(new THREE.CatmullRomCurve3([V(3.3, 0.55, 2.6), V(3.3, 0.55, -2.4)]), 30, COL.lava, 0.18, 0.18); g.add(this.flow.points);
    this.pick(this.tray, 'dataPath', [0, 0.9, -2.3]);
    this.secQ = this.addLabel('FIVE DEVELOPER QUESTIONS', 'section', [-0.9, 5.35, 0]);
    this.secP = this.addLabel('THE DATA PATH', 'section', [3.3, 2.1, 0.6]);
    this.devL = this.addLabel('You, the developer', 'ghost', [-4.3, 2.0, 1.2]);
  }
  update(t, time) {
    const f = 1 - seg(t, 9.6, 10);
    this.cards.forEach((c, i) => {
      const p = E.back(seg(t, 0.3 + i * 0.4, 1.0 + i * 0.4)) * f;
      c.position.copy(c.userData.base); c.position.x += (1 - p) * -2; c.position.y += Math.sin(time * 0.8 + i) * 0.04;
      sc(c, p); c.rotation.y = Math.sin(time * 0.5 + i) * 0.05;
    });
    this.tokens.forEach((tk, i) => {
      const p = E.back(seg(t, 3.0 + i * 0.35, 3.6 + i * 0.35)) * f; sc(tk, p);
      tk.rotation.y = Math.sin(time * 0.7 + i) * 0.3;
      this.show(tk.userData.lbl, seg(t, 3.3 + i * 0.35, 3.7 + i * 0.35) * f);
    });
    this.flow.update(time, seg(t, 5.2, 5.8) * f);
    this.show(this.secQ, seg(t, 0.2, 0.6) * f); this.show(this.secP, seg(t, 2.8, 3.2) * f); this.show(this.devL, seg(t, 0.4, 0.8) * f);
    this.laptop.rotation.y = 0.5 + Math.sin(time * 0.4) * 0.03;
  }
}

// ───────────────────────── 1 · VOLUME
export class XVolume extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0, 4.6, 14.5], target: [0, 2.2, 0] } });
    const g = this.group;
    // UC tree on the left
    this.tree = new THREE.Group(); this.tree.position.set(-4.0, 0, 0.4); g.add(this.tree);
    const nodes = [['main', 'catalog', 3.6], ['provider_ops', 'schema', 2.5], ['raw_docs', 'volume', 1.4]];
    this.treeNodes = nodes.map(([n, k, y], i) => {
      const b = new THREE.Mesh(roundedBox(1.3, 0.42, 0.42, 0.08), i === 2 ? glow(COL.lava, 1.1) : matte(0x4a4f58, 0.5)); b.position.set(i * 0.25, y, 0); this.tree.add(b);
      b.userData.lbl = this.addLabel(`<b>${k}</b> ${n}`, 'tiny', [0, 0.42, 0], b);
      return b;
    });
    for (let i = 0; i < 2; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.7, 0.04), matte(0x8d929b)); l.position.set(i * 0.25 + 0.1, 3.05 - i * 1.1, 0); this.tree.add(l); }
    const sh = shield(COL.mint, 0.8); sh.position.set(-0.9, 3.6, 0); this.tree.add(sh);
    this.pick(this.tree, 'ucPath', [0.9, 4.1, 0]);
    // bucket = object storage
    this.bkt = bucket(1.35, 1.7); this.bkt.position.set(0.6, 0, 0.3); g.add(this.bkt);
    this.files = [];
    for (let i = 0; i < 9; i++) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.03), matte([0xb8603e, 0xa8865a, 0x5f7d96, 0x76709a][i % 4], 0.6)); f.position.set(((i % 3) - 1) * 0.5, 0.35 + Math.floor(i / 3) * 0.08, ((Math.floor(i / 3)) - 1) * 0.35); f.rotation.x = -1.2; this.bkt.add(f); this.files.push(f); }
    this.pick(this.bkt.wall, 'objectStore', [1.2, 1.4, 0]);
    this.volRing = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.04, 8, 120), glow(COL.lava, 1.6)); this.volRing.rotation.x = Math.PI / 2; this.volRing.position.set(0.6, 1.95, 0.3); g.add(this.volRing);
    this.pick(this.volRing, 'volume', [1.55, 0, 0]);
    this.volL = this.addLabel('UC Volume · /Volumes/main/provider_ops/raw_docs/', 'lava', [0.6, 2.35, 0.3]);
    this.osL = this.addLabel('Cloud object storage · S3 / ADLS / GCS', 'ghost', [0.6, -0.15, 1.8]);
    // the PDF
    this.doc = makeDoc(0, 1.0, 1.32); g.add(this.doc);
    this.pick(this.doc, 'pdfFile', [0.5, 0.66, 0.05]);
    this.docL = this.addLabel('acme_provider_agreement.pdf · 2.4 MB', 'ghost', [0, 0.95, 0], this.doc);
    // listing panel
    this.ls = panel(2.9, 1.55, codeTex('rx_ls', [
      ['%sh ls -la /Volumes/main/provider_ops/raw_docs/', KW],
      ['-rw  2481337  acme_provider_agreement.pdf', ID],
      ['-rw   911204  claims_policy_2026.pdf', ID],
      ['-rw   640118  credentialing_manual.pdf', ID],
      ['', ''],
      ['# a file, unchanged: same bytes you uploaded', DIM],
    ], { w: 400, h: 150, title: 'Volume listing' }), { d: 0.05 });
    this.ls.position.set(4.1, 2.4, -0.2); this.ls.rotation.y = -0.35; g.add(this.ls);
    this.pick(this.ls, 'volumeLs', [1.5, 0.8, 0]);
    this.upL = this.addLabel('Upload: UI, <b>databricks fs cp</b>, or an ingestion job', 'tiny', [-1.6, 5.2, 0]);
  }
  update(t, time) {
    const f = 1 - seg(t, 9.6, 10);
    this.treeNodes.forEach((b, i) => { sc(b, E.back(seg(t, 0.2 + i * 0.3, 0.8 + i * 0.3)) * f); this.show(b.userData.lbl, seg(t, 0.6 + i * 0.3, 1.0 + i * 0.3) * f); });
    sc(this.bkt, E.out(seg(t, 0.4, 1.2)) * f);
    this.volRing.scale.setScalar(Math.max(0.001, E.out(seg(t, 1.2, 1.9)) * f)); this.volRing.rotation.z = time * 0.3;
    this.show(this.volL, seg(t, 1.6, 2.0) * f); this.show(this.osL, seg(t, 1.0, 1.4) * f);
    // PDF descends into the bucket
    const p = E.io(seg(t, 2.2, 4.6));
    this.doc.position.set(lerp(-1.8, 0.6, p), lerp(5.0, 1.25, p) + Math.sin(time * 1.2) * 0.04 * (1 - p), lerp(1.4, 0.4, p));
    this.doc.rotation.set(lerp(-0.1, -0.15, p), lerp(0.4, 0, p), lerp(0.15, 0, p));
    sc(this.doc, E.back(seg(t, 1.8, 2.3)) * f);
    this.show(this.docL, seg(t, 2.0, 2.4) * f * (1 - seg(t, 4.2, 4.6) * 0.0));
    this.show(this.upL, seg(t, 2.2, 2.6) * f);
    sc(this.ls, E.back(seg(t, 4.8, 5.4)) * f);
  }
}

// ───────────────────────── 2 · BRONZE
export class XBronze extends Station {
  constructor() {
    super({ loop: 11, cam: { pos: [0, 4.6, 14.5], target: [0.2, 2.4, 0] } });
    const g = this.group;
    this.doc = makeDoc(0, 0.95, 1.25); this.doc.position.set(-4.6, 2.2, 0.6); this.doc.rotation.y = 0.45; g.add(this.doc);
    this.pick(this.doc, 'pdfFile', [0.48, 0.62, 0.05]);
    // reader device
    this.reader = new THREE.Group(); this.reader.position.set(-2.6, 0, 0.6); g.add(this.reader);
    const body = new THREE.Mesh(roundedBox(1.0, 1.1, 0.9, 0.1), metal(0x4a4f58, 0.4, 0.6)); body.position.y = 1.6; this.reader.add(body);
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.06, 0.05), glow(COL.lava, 1.6)); slot.position.set(0, 1.95, 0.46); this.reader.add(slot);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.05, 12), metal(0x6d7280)); col.position.y = 0.52; this.reader.add(col);
    this.pick(this.reader, 'binaryReader', [0.55, 2.2, 0.3]);
    this.readerL = this.addLabel('spark.read.format("binaryFile")', 'tiny', [0, 2.45, 0], this.reader);
    // byte cubes stream
    this.bytes = new THREE.InstancedMesh(new THREE.BoxGeometry(0.07, 0.07, 0.07), glow(COL.amber, 1.2), 70); g.add(this.bytes);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3();
    this.bytePath = new THREE.CatmullRomCurve3([V(-4.3, 2.2, 0.7), V(-2.6, 1.95, 1.05), V(-0.8, 2.6, 1.0), V(1.9, 2.4, 0.9)]);
    // bronze table
    this.slab = deltaSlab(5.0, 1.4, 4); this.slab.position.set(1.0, 0, -0.6); g.add(this.slab);
    this.tbl = panel(5.6, 1.5, tableTex('rx_bronze', {
      title: 'main.provider_ops.bronze_docs', sub: '1 row per PDF',
      cols: [['path', 170], ['modificationTime', 140], ['length', 76], ['content', 230]],
      rows: [[PDF_PATH, '2026-11-02 06:00', '2481337', '25 50 44 46 2D 31 2E 37 0A…'], ['/Volumes/…/claims_policy_2026.pdf', '2026-10-28 09:14', '911204', '25 50 44 46 2D 31 2E 36 0A…'], ['/Volumes/…/credentialing_manual.pdf', '2026-10-21 16:40', '640118', '25 50 44 46 2D 31 2E 34 0A…']],
      w: 640, h: 150, hl: 3,
    }), { d: 0.06 });
    this.tbl.position.set(1.0, 2.5, 0.2); g.add(this.tbl);
    this.pick(this.tbl, 'bronzeTable', [-2.8, 0.75, 0.05]);
    this.pick(this.slab, 'deltaFiles', [2.5, 0.8, 0.5]);
    this.slabL = this.addLabel('Delta = Parquet files + <b>_delta_log</b> in the table’s storage location', 'tiny', [1.0, -0.1, 0.9]);
    // magnifier lens on content cell
    this.lens = new THREE.Group(); this.lens.position.set(3.2, 4.5, 0.9); g.add(this.lens);
    const lp = panel(2.6, 1.6, hexTex('rx_hex'), { d: 0.04, edge: COL.lava, edgeO: 0.9 }); this.lens.add(lp);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 8, 40), metal(0x8a8f99, 0.35, 0.7)); ring.position.set(-0.5, -1.15, 0); this.lens.add(ring);
    this.pick(lp, 'contentCell', [1.3, 0.8, 0.03]);
    // no-text badge
    this.noTxt = panel(2.8, 0.9, codeTex('rx_notext', [
      ['SELECT * FROM bronze_docs', KW], ['WHERE content LIKE \'%timely filing%\'', ID], ['→ 0 rows: there is no text to match', '#e8a07f'],
    ], { w: 360, h: 90 }), { d: 0.04, edge: 0xc0563a, edgeO: 0.9 });
    this.noTxt.position.set(-2.2, 4.4, 0.6); this.noTxt.rotation.y = 0.2; g.add(this.noTxt);
    this.pick(this.noTxt, 'noText', [1.4, 0.45, 0.03]);
    this.bigL = this.addLabel('This table stores the PDF’s <b>bytes</b>, not its text', 'big lava', [1.0, 3.55, 0.3]);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    sc(this.doc, E.back(seg(t, 0.1, 0.6)) * f * (1 - 0.35 * seg(t, 1.2, 3)));
    this.doc.rotation.y = 0.45 + Math.sin(time * 0.6) * 0.06;
    sc(this.reader, E.back(seg(t, 0.3, 0.9)) * f); this.show(this.readerL, seg(t, 0.8, 1.2) * f);
    sc(this.slab, E.out(seg(t, 0.5, 1.2)) * f);
    const on = seg(t, 1.2, 1.6) * (1 - seg(t, 8.5, 9.2));
    for (let i = 0; i < 70; i++) {
      const u = (i / 70 + time * 0.12) % 1; this.bytePath.getPointAt(u, this._s);
      this._m.compose(this._s, this._q.setFromAxisAngle(V(0.3, 1, 0.2).normalize(), time + i), V(1, 1, 1).multiplyScalar(Math.max(0.001, on * f * bell(u, 0, 1) * 1.3)));
      this.bytes.setMatrixAt(i, this._m);
    }
    this.bytes.instanceMatrix.needsUpdate = true;
    sc(this.tbl, E.back(seg(t, 1.8, 2.4)) * f);
    this.show(this.bigL, seg(t, 3.0, 3.4) * f); this.show(this.slabL, seg(t, 2.2, 2.6) * f);
    sc(this.lens, E.back(seg(t, 3.6, 4.2)) * f); this.lens.position.y = 4.55 + Math.sin(time * 0.9) * 0.05;
    sc(this.noTxt, E.back(seg(t, 5.0, 5.6)) * f);
  }
}

// ───────────────────────── 3 · PARSE
const ELEMS = [
  ['title', 'PROVIDER AGREEMENT', COL.lava, 1.6],
  ['section_header', '4. Claims Submission', COL.amber, 1.3],
  ['text', '4.2 Provider shall submit claims…', 0xb9bcc4, 1.9],
  ['text', '4.3 Corrected claims within 120 days…', 0xb9bcc4, 1.9],
  ['table', 'Claim type | Limit (days)', COL.cyan, 1.7],
  ['page_footer', 'Page 12 of 48', 0x6d7280, 1.0],
];
export class XParse extends Station {
  constructor() {
    super({ loop: 11, cam: { pos: [0, 4.6, 14.8], target: [0.3, 2.4, 0] } });
    const g = this.group;
    this.doc = makeDoc(0, 1.0, 1.32); g.add(this.doc);
    this.pick(this.doc, 'pdfFile', [0.5, 0.66, 0.05]);
    // parser gate
    this.gate = new THREE.Group(); this.gate.position.set(-2.0, 2.3, 0.4); this.gate.rotation.y = Math.PI / 2; g.add(this.gate);
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.09, 12, 80), metal(0x4a4f58, 0.35, 0.7)); this.gate.add(this.ring);
    this.ringG = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.025, 8, 80), glow(COL.lava, 2)); this.ringG.position.z = 0.1; this.gate.add(this.ringG);
    this.scan = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.04), glow(COL.lava, 2)); this.gate.add(this.scan);
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.25, 12), metal(0x6d7280)); stand.position.set(-2.0, 0.62, 0.4); g.add(stand);
    this.pick(this.ring, 'parser', [0, 1.2, 0]);
    this.gateL = this.addLabel('ai_parse_document(content)', 'lava', [-2.0, 3.75, 0.4]);
    // elements fly out
    this.elems = ELEMS.map(([type, txt, c, w], i) => {
      const grp = new THREE.Group(); g.add(grp);
      const m = new THREE.Mesh(roundedBox(w, 0.3, 0.08, 0.04), c === 0xb9bcc4 || c === 0x6d7280 ? matte(c, 0.55) : glow(c, 1.1)); grp.add(m);
      if (type === 'table') { for (let k = 1; k < 4; k++) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.28, 0.1), matte(0x1c1f25)); l.position.x = -w / 2 + k * w / 4; grp.add(l); } }
      grp.userData.lbl = this.addLabel(`<b>${type}</b> ${txt}`, 'tiny', [w / 2 + 0.1, 0, 0], grp);
      grp.userData.lbl.center.set(0, 0.5);
      grp.userData.base = V(-0.1, 4.2 - i * 0.48, 0.5);
      return grp;
    });
    this.elHit = this.hitBox(2.2, 3.0, 0.5, [-0.1, 3.0, 0.5]); this.pick(this.elHit, 'elements', [1.0, 1.4, 0]);
    // scanned page + OCR
    this.scanDoc = makeDoc(1, 0.8, 1.05); this.scanDoc.position.set(-4.4, 4.2, -0.4); this.scanDoc.rotation.z = 0.08; g.add(this.scanDoc);
    this.scanDoc.children[0].material = this.scanDoc.children[0].material.map((m) => { const c = m.clone(); c.color = new THREE.Color(0x9a948a); return c; });
    this.eye = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.05), glow(COL.mint, 2)); this.eye.position.z = 0.03; this.scanDoc.add(this.eye);
    this.pick(this.scanDoc, 'ocr', [0.42, 0.55, 0.05]);
    this.ocrL = this.addLabel('Scanned page? OCR is built in', 'tiny', [0, -0.75, 0], this.scanDoc);
    // silver table
    this.tbl = panel(4.6, 1.75, tableTex('rx_silver', {
      title: 'main.provider_ops.silver_doc_elements', sub: 'TEXT lives here',
      cols: [['doc_id', 70], ['page', 40], ['element_type', 110], ['text', 300]],
      rows: [['acme_pa', 12, 'section_header', '4. Claims Submission'], ['acme_pa', 12, 'text', '4.2 Provider shall submit claims within ninety (90) days of the date of service…'], ['acme_pa', 12, 'text', '4.3 Corrected claims must be received within 120 days…'], ['acme_pa', 13, 'table', '<table><tr><td>Claim type</td><td>Limit</td>…'], ['acme_pa', 13, 'text', '4.4 Out-of-network claims follow §7.1…']],
      w: 540, h: 175, hl: 3, hlCol: '#8eae9d',
    }), { d: 0.06 });
    this.tbl.position.set(3.5, 1.4, 0.0); this.tbl.rotation.y = -0.28; g.add(this.tbl);
    this.pick(this.tbl, 'silverTable', [-2.3, 0.9, 0.05]);
    this.variant = panel(2.7, 1.25, codeTex('rx_variant', [
      ['{"document": {', DIM], ['  "elements": [{', DIM], ['    "type": "text",', STR], ['    "content": "4.2 Provider shall…",', ID], ['    "bbox": [{"coord":[72,410,540,452],', DIM], ['             "page_id": 11}] }…] } }', DIM],
    ], { w: 350, h: 130, title: 'Raw output · VARIANT' }), { d: 0.04 });
    this.variant.position.set(3.4, 4.0, -0.4); this.variant.rotation.y = -0.25; g.add(this.variant);
    this.pick(this.variant, 'variantOut', [1.35, 0.62, 0.03]);
    this.bigL = this.addLabel('Now a Delta table contains the PDF’s <b>text</b>', 'big', [3.5, 0.15, 0.9]);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    const p = E.io(seg(t, 0.6, 2.4));
    this.doc.position.set(lerp(-4.6, -2.0, p), 2.3, 0.4); this.doc.rotation.set(0, lerp(0.5, Math.PI / 2, p), 0);
    sc(this.doc, E.back(seg(t, 0.1, 0.6)) * (1 - seg(t, 2.2, 2.6)) * f);
    sc(this.gate, E.out(seg(t, 0.2, 0.9)) * f); this.show(this.gateL, seg(t, 0.6, 1.0) * f);
    this.ringG.rotation.z = time; this.scan.position.y = Math.sin(time * 2.4) * 0.9; this.scan.scale.x = Math.sqrt(Math.max(0.01, 1 - (this.scan.position.y / 1.05) ** 2));
    this.elems.forEach((e, i) => {
      const q = E.out(seg(t, 2.4 + i * 0.25, 3.2 + i * 0.25)) * f;
      e.position.copy(V(-2.0, 2.3, 0.4)).lerp(e.userData.base, q); e.position.y += Math.sin(time + i) * 0.02;
      sc(e, Math.max(0.001, q)); this.show(e.userData.lbl, seg(t, 3.0 + i * 0.25, 3.4 + i * 0.25) * f);
    });
    sc(this.scanDoc, E.back(seg(t, 4.0, 4.5)) * f); this.eye.position.y = Math.sin(time * 1.8) * 0.48; this.show(this.ocrL, seg(t, 4.4, 4.8) * f);
    sc(this.tbl, E.back(seg(t, 4.6, 5.2)) * f); this.show(this.bigL, seg(t, 5.2, 5.6) * f);
    sc(this.variant, E.back(seg(t, 5.8, 6.4)) * f);
  }
}

// ───────────────────────── 4 · CHUNK
export class XChunk extends Station {
  constructor() {
    super({ loop: 11, cam: { pos: [0, 4.8, 14.8], target: [0, 2.5, 0] } });
    const g = this.group;
    // source paragraph ribbon
    this.ribbon = panel(7.6, 0.9, cardTex('rx_rib', { parts: [['4.2 Provider shall submit claims within ninety (90) days of the date of service. ', null, null], ['Claims received after this period will be denied for timely filing.', '#2b2e35', 'rgba(195,162,115,.55)'], [' 4.3 Corrected claims must be received ', null, null], ['within 120 days of the original denial.', '#2b2e35', 'rgba(142,174,157,.55)'], [' 4.4 Out-of-network claims follow the limits in §7.1.', null, null]], w: 900, h: 88, accent: '#6d7280' }), { d: 0.04 });
    this.ribbon.position.set(0, 5.0, -0.3); g.add(this.ribbon);
    this.pick(this.ribbon, 'sourceText', [3.8, 0.45, 0.03]);
    this.ribL = this.addLabel('One section of silver text (illustrative)', 'ghost', [0, 5.65, -0.3]);
    // blades
    this.blades = [-0.75, 1.05].map((x) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.4, 0.5), glow(COL.lava, 2)); b.position.set(x, 6.4, -0.1); g.add(b); return b; });
    this.splitter = new THREE.Group(); this.blades.forEach((b) => this.splitter.add(b)); g.add(this.splitter);
    this.pick(this.blades[0], 'splitter', [0, 0.7, 0]);
    // chunk cards
    const CH = [
      { id: 'c0', parts: [['4.2 Provider shall submit claims within ninety (90) days of the date of service. ', null, null], ['Claims received after this period will be denied for timely filing.', '#2b2e35', 'rgba(195,162,115,.6)']], foot: 'acme_pa-0041 · p.12 · 512 tok' },
      { id: 'c1', parts: [['Claims received after this period will be denied for timely filing.', '#2b2e35', 'rgba(195,162,115,.6)'], [' 4.3 Corrected claims must be received within 120 days of the original denial.', null, null]], foot: 'acme_pa-0042 · p.12 · 508 tok' },
      { id: 'c2', parts: [['…within 120 days of the original denial.', '#2b2e35', 'rgba(195,162,115,.6)'], [' 4.4 Out-of-network claims follow the limits in §7.1.', null, null]], foot: 'acme_pa-0043 · p.13 · 497 tok' },
    ];
    this.cards = CH.map((c, i) => {
      const m = panel(2.25, 1.35, cardTex('rx_ch' + i, { title: `chunk ${i}`, parts: c.parts, foot: c.foot, w: 300, h: 180 }), { d: 0.04 });
      m.userData.from = V(-2.5 + i * 2.5, 5.0, -0.3); m.userData.to = V(-2.75 + i * 2.75, 2.75, 0.8);
      g.add(m); return m;
    });
    this.cardHit = this.hitBox(8, 1.5, 0.3, [0, 2.75, 0.8]); this.pick(this.cardHit, 'chunkCards', [-3.9, 0.75, 0]);
    // overlap brackets
    this.ovl = [0, 1].map((i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 0.06), glow(COL.amber, 1.8)); b.position.set(-1.375 + i * 2.75, 3.6, 0.85); g.add(b); return b; });
    this.pick(this.ovl[0], 'overlap', [0, 0.18, 0]);
    this.ovlL = this.addLabel('<b>overlap</b> ~64 tokens shared', 'tiny', [-1.375, 3.85, 0.85]);
    // token ruler
    this.ruler = new THREE.Group(); this.ruler.position.set(0, 1.55, 1.2); g.add(this.ruler);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(8, 0.05, 0.12), matte(0x8d929b, 0.5)); this.ruler.add(bar);
    for (let k = 0; k <= 16; k++) { const tk = new THREE.Mesh(new THREE.BoxGeometry(0.02, k % 4 ? 0.1 : 0.22, 0.02), matte(0xc9ccd4)); tk.position.set(-4 + k * 0.5, 0.08, 0.06); this.ruler.add(tk); }
    [[-4, -1.5, COL.lava], [-2.2, 0.3, COL.cyan], [-0.4, 2.1, COL.mint]].forEach(([a, b, c], i) => { const s = new THREE.Mesh(new THREE.BoxGeometry(b - a, 0.06, 0.06), glow(c, 1.2)); s.position.set((a + b) / 2, -0.12 - i * 0.09, 0.08); this.ruler.add(s); });
    this.pick(this.ruler, 'tokenRuler', [4.1, 0.1, 0]);
    this.rulerL = this.addLabel('chunk_size 512 tokens · chunk_overlap 64', 'tiny', [0, -0.5, 0.1], this.ruler);
    // chunks table + CDF
    this.tbl = panel(5.4, 1.2, tableTex('rx_chunks', {
      title: 'main.provider_ops.chunks', sub: 'CDF on',
      cols: [['chunk_id', 110], ['doc_id', 70], ['page', 40], ['chunk_text', 300], ['n_tok', 50]],
      rows: [['acme_pa-0041', 'acme_pa', 12, '4.2 Provider shall submit claims within ninety (90)…', 512], ['acme_pa-0042', 'acme_pa', 12, 'Claims received after this period will be denied…', 508], ['acme_pa-0043', 'acme_pa', 13, '…within 120 days of the original denial. 4.4…', 497]],
      w: 600, h: 120, hl: 3, hlCol: '#8eae9d',
    }), { d: 0.05 });
    this.tbl.position.set(-0.9, 0.7, 2.7); this.tbl.rotation.x = -0.55; g.add(this.tbl);
    this.pick(this.tbl, 'chunksTable', [-2.75, 0.6, 0.03]);
    this.cdf = new THREE.Mesh(roundedBox(1.6, 0.4, 0.12, 0.08), glow(COL.mint, 1.2)); this.cdf.position.set(3.6, 0.9, 2.5); g.add(this.cdf);
    this.cdfL = this.addLabel('delta.enableChangeDataFeed = true', 'tiny', [0, 0.42, 0], this.cdf);
    this.pick(this.cdf, 'cdf', [0.8, 0.2, 0.06]);
  }
  update(t, time) {
    const f = 1 - seg(t, 10.6, 11);
    sc(this.ribbon, E.out(seg(t, 0.2, 0.8)) * f * (1 - seg(t, 2.6, 2.9))); this.show(this.ribL, seg(t, 0.5, 0.9) * f * (1 - seg(t, 2.6, 2.9)));
    const cut = bell(t, 1.2, 2.6);
    this.blades.forEach((b) => { b.position.y = 6.4 - cut * 1.4; sc(b, seg(t, 1.0, 1.2) * (1 - seg(t, 2.6, 2.8)) * f + 0.001); });
    this.cards.forEach((c, i) => {
      const p = E.io(seg(t, 2.6 + i * 0.15, 4.0 + i * 0.15));
      c.position.copy(c.userData.from).lerp(c.userData.to, p); c.position.y += Math.sin(time * 0.8 + i) * 0.03 * p;
      sc(c, seg(t, 2.5, 2.7) * f); c.rotation.y = (i - 1) * -0.12 * p;
    });
    this.ovl.forEach((o) => sc(o, E.back(seg(t, 4.3, 4.8)) * f)); this.show(this.ovlL, seg(t, 4.6, 5.0) * f);
    sc(this.ruler, E.out(seg(t, 5.0, 5.6)) * f); this.show(this.rulerL, seg(t, 5.4, 5.8) * f);
    sc(this.tbl, E.back(seg(t, 6.0, 6.6)) * f);
    sc(this.cdf, E.back(seg(t, 6.8, 7.3)) * f); this.show(this.cdfL, seg(t, 7.1, 7.5) * f);
  }
}
