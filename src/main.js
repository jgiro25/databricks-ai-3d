import * as THREE from 'three';
import { gsap } from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { USE_CASES, STEPS, PHASES } from './data.js';
import { DEEP_A } from './content/deep1.js';
import { DEEP_B } from './content/deep2.js';
import { OBJECTS } from './content/objects.js';
import { COL, E, glow } from './helpers.js';
import { Station, shown } from './stations/base.js';
import { NeedStation } from './stations/s0_need.js';
import { GoalStation } from './stations/s1_goal.js';
import { IngestStation } from './stations/s2_ingest.js';
import { ChunkStation } from './stations/s3_chunk.js';
import { EmbedStation } from './stations/s4_embed.js';
import { IndexStation } from './stations/s5_index.js';
import { RetrieveStation } from './stations/s6_retrieve.js';
import { GenerateStation } from './stations/s7_generate.js';
import { EvaluateStation } from './stations/s8_evaluate.js';
import { DeployStation } from './stations/s9_deploy.js';

const DEEP = [...DEEP_A, ...DEEP_B];
const N = STEPS.length;
const $ = (s) => document.querySelector(s);
const isMobile = matchMedia('(pointer:coarse)').matches || innerWidth < 820;
const params = new URLSearchParams(location.search);
const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
if (params.get('hs') === '0') Station.hotspots = false;

// ---------- renderer ----------
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.localClippingEnabled = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const labelRenderer = new CSS2DRenderer({ element: $('#labels') });
labelRenderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const BG = 0x15171b;
scene.background = new THREE.Color(BG);
scene.fog = new THREE.FogExp2(BG, 0.011);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.55;

const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 600);

// soft studio lighting: sky/ground fill, warm key with soft shadows, cool rim
scene.add(new THREE.HemisphereLight(0xdfe6f0, 0x2a2622, 0.55));
const key = new THREE.DirectionalLight(0xfff1e0, 2.3);
key.castShadow = true;
key.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: 1, far: 60 });
key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03; key.shadow.radius = 4;
scene.add(key, key.target);
const rim = new THREE.DirectionalLight(0x9fb4d0, 0.7); rim.position.set(-14, 7, -10); scene.add(rim);

// ---------- composer: render → ambient occlusion → (very light) bloom → output ----------
const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: isMobile ? 2 : 4 });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(renderer.getPixelRatio());
composer.addPass(new RenderPass(scene, camera));
let gtao = null;
if (!isMobile && params.get('ao') !== '0') {
  gtao = new GTAOPass(scene, camera, innerWidth, innerHeight);
  gtao.output = GTAOPass.OUTPUT.Default;
  gtao.blendIntensity = 0.85;
  gtao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.5, thickness: 1.5, scale: 1, samples: 16 });
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
  // keep sprites, lines and see-through surfaces out of the AO depth/normal pass (they would read as dark blocks)
  gtao._overrideVisibility = function () {
    const cache = this._visibilityCache;
    this.scene.traverse((o) => {
      if (!o.visible) return;
      const m = o.material;
      const seeThrough = m && !Array.isArray(m) && (m.depthWrite === false || (m.transparent && m.opacity < 0.6));
      if (o.isPoints || o.isLine || o.isLine2 || o.isSprite || (o.isMesh && seeThrough)) { o.visible = false; cache.push(o); }
    });
  };
  composer.addPass(gtao);
}
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.12, 0.4, 0.93);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- world ----------
const SPACING = 30;
const stationPos = (i) => new THREE.Vector3(i * SPACING, 0, -Math.sin(i * 0.75) * 8);

// matte floor + faint engineering grid
const floor = new THREE.Mesh(new THREE.PlaneGeometry(900, 400), new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.95, metalness: 0 }));
floor.rotation.x = -Math.PI / 2; floor.position.set(130, -1.6, 0); floor.receiveShadow = true; scene.add(floor);
const gridMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false,
  vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
  fragmentShader: `varying vec3 vW;
    float line(float x, float w){ float f = abs(fract(x)-.5); float d = fwidth(x); return smoothstep(w+d, w, .5-f); }
    void main(){ vec2 p = vW.xz/2.5; float g = max(line(p.x,.01), line(p.y,.01));
      float d = length(vW.xz - cameraPosition.xz); float fade = exp(-d*0.03);
      gl_FragColor = vec4(vec3(.85,.84,.8), g*fade*.06); }`,
});
const grid = new THREE.Mesh(new THREE.PlaneGeometry(900, 400), gridMat);
grid.rotation.x = -Math.PI / 2; grid.position.set(130, -1.595, 0); scene.add(grid);

// a thin brushed rail links the stations; small beads travel along it
const railPts = [new THREE.Vector3(-40, -0.55, 6)];
for (let i = 0; i < N; i++) { const p = stationPos(i); railPts.push(new THREE.Vector3(p.x, -0.55, p.z)); if (i < N - 1) { const q = stationPos(i + 1); railPts.push(new THREE.Vector3((p.x + q.x) / 2, -0.95, (p.z + q.z) / 2 + 3)); } }
railPts.push(new THREE.Vector3((N - 1) * SPACING + 40, -0.55, 0));
const rail = new THREE.CatmullRomCurve3(railPts);
scene.add(new THREE.Mesh(new THREE.TubeGeometry(rail, 900, 0.035, 8, false), new THREE.MeshStandardMaterial({ color: 0x4a4e56, roughness: 0.35, metalness: 0.7 })));
const BEADS = isMobile ? 60 : 120;
const beads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.06, 12, 8), glow(COL.lava, 1.2), BEADS);
beads.frustumCulled = false; scene.add(beads);
const _bm = new THREE.Matrix4(), _bp = new THREE.Vector3(), _bq = new THREE.Quaternion(), _bs = new THREE.Vector3(1, 1, 1);

// stations
const CLASSES = [NeedStation, GoalStation, IngestStation, ChunkStation, EmbedStation, IndexStation, RetrieveStation, GenerateStation, EvaluateStation, DeployStation];
const stations = CLASSES.map((C, i) => { const s = new C(); s.group.position.copy(stationPos(i)); scene.add(s.group); return s; });
// shadows: opaque meshes cast + receive
stations.forEach((s) => s.group.traverse((o) => {
  if (!o.isMesh || o.userData.noShadow || o.userData.hit) return;
  const mats = Array.isArray(o.material) ? o.material : [o.material];
  const opaque = mats.every((m) => !m.transparent && !m.isShaderMaterial);
  o.castShadow = opaque; o.receiveShadow = true;
}));

// ---------- camera rig ----------
const rig = { pos: new THREE.Vector3(-16, 9, 22), target: new THREE.Vector3(34, 1, -6) };
const view = { yaw: 0, pitch: 0, tyaw: 0, tpitch: 0, px: 0, py: 0 };
let flight = null;
function camFor(i) {
  const s = stations[i], base = s.group.position;
  const a = camera.aspect;
  const k = a < 1 ? (1 + (1 - a) * 2.15) * (s.cam.pk || 1) : a < 1.4 ? 1.3 : 1.18;
  const off = new THREE.Vector3(...s.cam.pos).sub(new THREE.Vector3(...s.cam.target)).multiplyScalar(k);
  const target = new THREE.Vector3(...s.cam.target).add(base);
  return { pos: target.clone().add(off), target };
}
const HOME = () => ({ pos: new THREE.Vector3(-17, 8.5, 21), target: new THREE.Vector3(30, 1.5, -6) });
function flyTo(dest, dur = 2.0, instant = false) {
  if (flight) flight.kill();
  if (instant) { rig.pos.copy(dest.pos); rig.target.copy(dest.target); return; }
  const p0 = rig.pos.clone(), t0 = rig.target.clone();
  const lift = Math.min(6, p0.distanceTo(dest.pos) * 0.12);
  const o = { p: 0 };
  flight = gsap.to(o, {
    p: 1, duration: dur, ease: 'power3.inOut',
    onUpdate: () => {
      const e = o.p;
      rig.pos.lerpVectors(p0, dest.pos, e); rig.pos.y += Math.sin(e * Math.PI) * lift; rig.pos.z += Math.sin(e * Math.PI) * lift * 0.9;
      rig.target.lerpVectors(t0, dest.target, E.io(Math.min(1, e * 1.15)));
    },
  });
}
let panelOpen = false;
const vo = { x: 0, tx: 0 };
function viewOffsetTarget() {
  const w = innerWidth;
  if (mode !== 'case') return 0;
  if (w < 820) return 0;
  if (panelOpen) return Math.min(560, w * 0.42) * 0.5;
  return -w * 0.13;
}
function applyViewOffset(instant = false) {
  vo.tx = viewOffsetTarget(); if (instant) vo.x = vo.tx;
  const w = innerWidth, h = innerHeight;
  if (mode !== 'case') { camera.clearViewOffset(); return; }
  if (w < 820) camera.setViewOffset(w, h, 0, h * 0.2, w, h);
  else camera.setViewOffset(w, h, vo.x, h * 0.02, w, h);
}

// ---------- HUD ----------
let mode = 'home', cur = 0, playing = false, playT = 0, frozen = false;
const gridEl = $('#grid');
USE_CASES.forEach((u, i) => {
  const el = document.createElement(u.live ? 'button' : 'div');
  el.className = 'tile ' + (u.live ? 'live' : 'locked');
  el.innerHTML = `<div><div class="n">${pad(u.n)}</div><h3>${u.t}</h3>${u.live ? `<p class="sub">${u.sub}</p>` : ''}</div>
    ${u.live ? '<span class="go">Explore in 3D <b>→</b></span>' : `<div class="k"><span class="cat">${u.cat}</span><span class="soon">Coming soon</span></div>`}`;
  if (u.live) el.addEventListener('click', () => openCase(0));
  gridEl.appendChild(el);
  setTimeout(() => el.classList.add('in'), 250 + i * 30);
});

const map = $('#map');
const nodes = [];
PHASES.forEach((ph) => {
  const grp = document.createElement('div'); grp.className = 'phase-grp';
  grp.innerHTML = `<div class="phase-lbl">${ph.name}</div><div class="phase-nodes"></div>`;
  ph.steps.forEach((si) => {
    const s = STEPS[si];
    const n = document.createElement('button'); n.className = 'node'; n.title = s.title;
    n.innerHTML = `<div class="nd"><svg viewBox="0 0 24 24">${s.icon}</svg></div><span>${s.short}</span>`;
    n.addEventListener('click', () => go(si));
    grp.querySelector('.phase-nodes').appendChild(n); nodes[si] = n;
  });
  map.appendChild(grp);
});

function renderCard(i) {
  const s = STEPS[i];
  $('#cStepIdx').textContent = 'STEP ' + pad(i);
  $('#cPhase').textContent = s.phase.toUpperCase();
  $('#cTitle').textContent = s.title;
  if (s.split) {
    $('#cRows').innerHTML = `<div class="split">
      <div class="col need"><label>Business need</label><ul>${s.split.need.map((t) => `<li>${t}</li>`).join('')}</ul></div>
      <div class="col sol"><label>Developer solution</label><ul>${s.split.solution.map((t) => `<li>${t}</li>`).join('')}</ul></div></div>`;
  } else {
    $('#cRows').innerHTML = [['what', 'What', s.what], ['how', 'How', s.how], ['why', 'Why', s.why]]
      .map(([k, l, t]) => `<div class="row"><i class="ico ${k}"></i><div><label>${l}</label><p>${t}</p></div></div>`).join('');
  }
  $('#cTags').innerHTML = s.tags.map(([t, k]) => `<span class="tag ${k}">${t}</span>`).join('');
  $('#stepNow').textContent = pad(i);
  nodes.forEach((n, k) => { n.classList.toggle('on', k === i); n.classList.toggle('done', k < i); });
  nodes[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  if (frozen) gsap.set('#card', { opacity: 1, y: 0 });
  else gsap.fromTo('#card', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.35 });
}

// ---------- syntax highlighter (sql / py / sh) ----------
const KW = {
  sql: new Set('SELECT FROM WHERE CREATE OR REPLACE TABLE VOLUME AS AND INSERT INTO LATERAL ALTER SET TBLPROPERTIES GRANT ON TO USE CATALOG SCHEMA DESCRIBE HISTORY LIMIT ORDER BY GROUP JOIN STRING INT BIGINT NULL TRUE FALSE WITH IF NOT EXISTS DESC ASC IN IS CASE WHEN THEN ELSE END MERGE USING MATCHED UPDATE VALUES DISTINCT INTERVAL HOUR DAY ARRAY MAP STRUCT VARIANT BINARY TIMESTAMP DOUBLE FLOAT BOOLEAN'.split(' ')),
  py: new Set('from import def return for in if else elif with as None True False lambda class not and or is try except raise while print'.split(' ')),
  sh: new Set('pip install databricks fs cp agentbricks init dev deploy deployments logs get stop list export cd'.split(' ')),
};
function hl(src, lang) {
  const cm = lang === 'sql' ? '--[^\\n]*' : '#[^\\n]*';
  const re = new RegExp(`(${cm})|("""[\\s\\S]*?"""|'(?:\\\\.|[^'\\\\\\n])*'|"(?:\\\\.|[^"\\\\\\n])*")|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_]\\w*)(?=\\()|([A-Za-z_][\\w-]*)`, 'g');
  const kw = KW[lang] || new Set();
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index)); last = m.index + m[0].length;
    const [all, c, s, n, f, w] = m;
    if (c) out += `<span class="c">${esc(c)}</span>`;
    else if (s) out += `<span class="s">${esc(s)}</span>`;
    else if (n) out += `<span class="n">${n}</span>`;
    else if (f) out += kw.has(lang === 'sql' ? f.toUpperCase() : f) ? `<span class="k">${f}</span>` : `<span class="f">${f}</span>`;
    else if (w) out += kw.has(lang === 'sql' ? w.toUpperCase() : w) ? `<span class="k">${esc(w)}</span>` : esc(w);
    else out += esc(all);
  }
  return out + esc(src.slice(last));
}
const LANG = { sql: 'SQL', py: 'Python', sh: 'Shell' };
function codeBlock(blocks) {
  if (!blocks || !blocks.length) return '';
  const tabs = blocks.length > 1 ? `<div class="tabs" role="tablist">${blocks.map((b, k) => `<button class="tab${k ? '' : ' on'}" data-k="${k}">${esc(b.label || LANG[b.lang])}</button>`).join('')}</div>` : `<div class="code-cap">${esc(blocks[0].label || LANG[blocks[0].lang])}</div>`;
  return `<div class="codebox">${tabs}${blocks.map((b, k) => `<div class="code-wrap${k ? ' hidden' : ''}" data-k="${k}"><span class="lang">${LANG[b.lang] || ''}</span><button class="copy" data-k="${k}">Copy</button><pre class="code"><code>${hl(b.src, b.lang)}</code></pre></div>`).join('')}</div>`;
}
function table(t) {
  return `<figure class="tbl">${t.title ? `<figcaption>${t.title}</figcaption>` : ''}<div class="tscroll"><table><thead><tr>${t.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${t.note ? `<p class="note">${t.note}</p>` : ''}</figure>`;
}
function chips(ids, active) {
  return `<div class="chips">${ids.filter((id) => OBJECTS[id]).map((id) => `<button class="chip${id === active ? ' on' : ''}" data-obj="${id}"><i></i>${OBJECTS[id].title}</button>`).join('')}</div>`;
}

// ---------- detail panel ----------
const panel = $('#panel'), pBody = $('#pBody');
let panelState = null;
function setPanel(open) {
  panelOpen = open;
  panel.classList.toggle('open', open);
  document.body.classList.toggle('panel-open', open);
  applyViewOffset();
}
function openStep(i = cur, scrollTo = 0) {
  const d = DEEP[i], s = STEPS[i];
  panelState = { type: 'step', i };
  $('#pKick').innerHTML = `STEP ${pad(i)} · ${s.phase.toUpperCase()}`;
  $('#pBack').classList.add('hidden');
  let h = `<h2>${s.title}</h2><p class="lead">${d.lead}</p>`;
  h += `<section><h3><span>1</span>What happens, technically</h3><ol class="steps">${d.happens.map((x) => `<li>${x}</li>`).join('')}</ol></section>`;
  h += `<section><h3><span>2</span>Concepts you need</h3><dl class="concepts">${d.concepts.map((c) => `<div><dt>${c.t}</dt><dd>${c.d}</dd></div>`).join('')}</dl>${d.compare ? table(d.compare) : ''}</section>`;
  if (d.code?.length) h += `<section><h3><span>3</span>The actual code</h3>${codeBlock(d.code)}</section>`;
  if (d.io?.length) h += `<section><h3><span>4</span>Input → output</h3>${d.io.map(table).join('<div class="io-arrow">↓</div>')}</section>`;
  h += `<section><h3><span>5</span>Why it matters</h3><p>${d.why}</p></section>`;
  if (d.pitfalls?.length) h += `<section><h3><span>6</span>Pitfalls to avoid</h3><ul class="pitfalls">${d.pitfalls.map((x) => `<li>${x}</li>`).join('')}</ul></section>`;
  if (d.objects?.length) h += `<section><h3><span>7</span>Inspect the objects in this scene</h3>${chips(d.objects)}</section>`;
  h += `<div class="p-nav">${i > 0 ? `<button class="pn" data-step="${i - 1}">← ${pad(i - 1)} ${STEPS[i - 1].short}</button>` : '<span></span>'}${i < N - 1 ? `<button class="pn" data-step="${i + 1}">${pad(i + 1)} ${STEPS[i + 1].short} →</button>` : ''}</div>`;
  pBody.innerHTML = h; pBody.scrollTop = scrollTo;
  setPanel(true);
}
function openObject(id) {
  const o = OBJECTS[id]; if (!o) return;
  panelState = { type: 'obj', id, i: cur };
  $('#pKick').innerHTML = `${esc(o.kind).toUpperCase()} · STEP ${pad(cur)}`;
  $('#pBack').classList.remove('hidden');
  let h = `<h2>${o.title}</h2>`;
  h += `<section><h3>What it is</h3><p>${o.what}</p></section>`;
  h += `<section><h3>How it works</h3><p>${o.how}</p></section>`;
  h += `<section class="here"><h3>Its job in this step</h3><p>${o.here}</p></section>`;
  if (o.facts?.length) h += `<section><h3>Key facts</h3><dl class="facts">${o.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></section>`;
  if (o.code) h += `<section><h3>In code</h3>${codeBlock([o.code])}</section>`;
  const others = (DEEP[cur].objects || []).filter((x) => x !== id);
  if (others.length) h += `<section><h3>Other objects in this step</h3>${chips(others)}</section>`;
  h += `<button class="deep-btn ghost" data-deep="1">Read the full explanation of step ${pad(cur)} →</button>`;
  pBody.innerHTML = h; pBody.scrollTop = 0;
  setPanel(true);
}
function closePanel() { setPanel(false); panelState = null; }
$('#pClose').addEventListener('click', closePanel);
$('#pBack').addEventListener('click', () => openStep(cur));
$('#btnDeep').addEventListener('click', () => openStep(cur));
panel.addEventListener('click', (e) => {
  const t = e.target.closest('button'); if (!t) return;
  if (t.dataset.obj) openObject(t.dataset.obj);
  else if (t.dataset.deep) openStep(cur);
  else if (t.dataset.step) { go(+t.dataset.step); openStep(+t.dataset.step); }
  else if (t.classList.contains('tab')) {
    const box = t.closest('.codebox');
    box.querySelectorAll('.tab').forEach((b) => b.classList.toggle('on', b === t));
    box.querySelectorAll('.code-wrap').forEach((w) => w.classList.toggle('hidden', w.dataset.k !== t.dataset.k));
  } else if (t.classList.contains('copy')) {
    const pre = t.parentElement.querySelector('pre');
    navigator.clipboard?.writeText(pre.innerText).then(() => { t.textContent = 'Copied'; setTimeout(() => (t.textContent = 'Copy'), 1200); }).catch(() => {});
  }
});
$('#labels').addEventListener('click', (e) => { const b = e.target.closest('.hs'); if (b) { e.stopPropagation(); openObject(b.dataset.id); } });

// ---------- navigation ----------
function setFocus(i) {
  stations.forEach((s, k) => gsap.to(s, { focus: k === i ? 1 : 0, duration: k === i ? 0.8 : 0.35, delay: k === i ? 1.2 : 0 }));
}
function go(i, opts = {}) {
  i = (i + N) % N;
  const jump = Math.abs(i - cur);
  cur = i; playT = 0;
  const instant = !!opts.instant;
  flyTo(camFor(i), instant ? 0 : Math.min(2.6, 1.5 + jump * 0.15), instant);
  stations[i].reset(instant ? 0 : 1.1);
  view.tyaw = 0; view.tpitch = 0;
  setFocus(i);
  renderCard(i);
  setHover(null);
  if (panelOpen && panelState) { if (panelState.type === 'step') openStep(i); else closePanel(); }
  history.replaceState(null, '', location.pathname + location.search + '#/rag/' + i);
}
function openCase(i = 0, instant = false) {
  mode = 'case';
  applyViewOffset(true);
  $('#hud').classList.remove('hidden');
  if (instant) { $('#home').classList.add('hidden'); $('#hud').style.opacity = 1; }
  else {
    gsap.to('#home', { opacity: 0, duration: 0.5, onComplete: () => $('#home').classList.add('hidden') });
    gsap.fromTo('#hud', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.3 });
  }
  cur = -99; go(i, { instant });
}
function openHome() {
  closePanel();
  mode = 'home'; setPlay(false);
  applyViewOffset(true);
  stations.forEach((s) => gsap.to(s, { focus: 0, duration: 0.3 }));
  $('#home').classList.remove('hidden'); gsap.to('#home', { opacity: 1, duration: 0.6 });
  gsap.to('#hud', { opacity: 0, duration: 0.3, onComplete: () => $('#hud').classList.add('hidden') });
  flyTo(HOME(), 2.2);
  history.replaceState(null, '', location.pathname + location.search + '#/');
}
function setPlay(v) { playing = v; playT = 0; $('#btnPlay').classList.toggle('on', v); }
$('#btnHome').addEventListener('click', openHome);
$('#btnNext').addEventListener('click', () => { frozen = false; go(cur + 1); });
$('#btnPrev').addEventListener('click', () => go(cur - 1));
$('#btnPlay').addEventListener('click', () => setPlay(!playing));
addEventListener('keydown', (e) => {
  if (mode !== 'case') { if (e.key === 'Enter') openCase(0); return; }
  if (e.key === 'Escape') { if (panelOpen) closePanel(); else openHome(); return; }
  if (e.target.closest && e.target.closest('#panel')) return;
  if (e.key === 'ArrowRight') go(cur + 1);
  else if (e.key === 'ArrowLeft') go(cur - 1);
  else if (e.key === ' ') { e.preventDefault(); setPlay(!playing); }
});

// ---------- picking: hover highlight + click to inspect ----------
const ray = new THREE.Raycaster();
ray.layers.enableAll();
ray.params.Line.threshold = 0.02; ray.params.Points.threshold = 0.1;
const _ndc = new THREE.Vector2();
function pickAt(x, y) {
  if (mode !== 'case' || cur < 0) return null;
  const st = stations[cur]; if (st.focus < 0.5) return null;
  _ndc.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
  ray.setFromCamera(_ndc, camera);
  const hits = ray.intersectObjects(st.picks.map((p) => p.obj), true);
  for (const h of hits) {
    if (!shown(h.object)) continue;
    let o = h.object; while (o && !o.userData.pickId) o = o.parent;
    if (o && OBJECTS[o.userData.pickId]) return { id: o.userData.pickId, obj: o };
  }
  return null;
}
// corner-bracket highlight
const bracket = (() => {
  const L = 0.22, pts = [];
  for (const x of [-0.5, 0.5]) for (const y of [-0.5, 0.5]) for (const z of [-0.5, 0.5]) {
    pts.push(x, y, z, x - Math.sign(x) * L, y, z, x, y, z, x, y - Math.sign(y) * L, z, x, y, z, x, y, z - Math.sign(z) * L);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const m = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xe8784c, transparent: true, opacity: 0.95, depthTest: false }));
  m.renderOrder = 999; m.visible = false; m.frustumCulled = false; scene.add(m); return m;
})();
const _box = new THREE.Box3(), _bc = new THREE.Vector3(), _bsz = new THREE.Vector3();
let hover = null;
const tip = $('#tip');
function setHover(h, x, y) {
  hover = h;
  canvas.style.cursor = h ? 'pointer' : (drag ? 'grabbing' : 'grab');
  if (!h) { tip.classList.remove('on'); bracket.visible = false; return; }
  tip.innerHTML = `<b>${OBJECTS[h.id].title}</b><span>${isMobile ? 'tap' : 'click'} to inspect</span>`;
  tip.style.transform = `translate(${Math.min(x + 16, innerWidth - 260)}px, ${y + 18}px)`;
  tip.classList.add('on');
}
function updateBracket() {
  if (!hover) return;
  _box.makeEmpty();
  hover.obj.traverse((o) => { if (o.isMesh && (o.visible || o.userData.hit)) _box.expandByObject(o, false); });
  if (_box.isEmpty()) { bracket.visible = false; return; }
  _box.getCenter(_bc); _box.getSize(_bsz); _bsz.multiplyScalar(1.08).max(new THREE.Vector3(0.2, 0.2, 0.2));
  bracket.position.copy(_bc); bracket.scale.copy(_bsz); bracket.visible = true;
}

// drag to orbit / swipe to change step / tap or click to inspect
let drag = null;
canvas.addEventListener('pointerdown', (e) => { if (mode === 'case') drag = { x: e.clientX, y: e.clientY, t: performance.now(), y0: view.tyaw, p0: view.tpitch, moved: 0 }; });
addEventListener('pointermove', (e) => {
  view.px = (e.clientX / innerWidth - 0.5); view.py = (e.clientY / innerHeight - 0.5);
  if (drag) {
    drag.moved = Math.max(drag.moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
    if (drag.moved > 6) {
      view.tyaw = Math.max(-1.0, Math.min(1.0, drag.y0 - (e.clientX - drag.x) * 0.005));
      view.tpitch = Math.max(-0.25, Math.min(0.5, drag.p0 + (e.clientY - drag.y) * 0.003));
      setHover(null);
    }
    return;
  }
  if (e.pointerType === 'mouse' && e.target === canvas) { const h = pickAt(e.clientX, e.clientY); setHover(h, e.clientX, e.clientY); }
  else if (e.target !== canvas && hover) setHover(null);
});
addEventListener('pointerup', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dt = performance.now() - drag.t;
  if (drag.moved < 8 && dt < 1500) {
    const h = pickAt(e.clientX, e.clientY);
    if (h) { openObject(h.id); if (e.pointerType !== 'mouse') { setHover(h, e.clientX, e.clientY); setTimeout(() => setHover(null), 1400); } }
  } else if (isMobile && Math.abs(dx) > 70 && dt < 350) { view.tyaw = drag.y0; go(cur + (dx < 0 ? 1 : -1)); }
  drag = null;
});

// ---------- loop ----------
const clock = new THREE.Clock();
let time = 0;
const _off = new THREE.Vector3(), _sph = new THREE.Spherical();
function frame() {
  const dt = Math.min(0.05, clock.getDelta());
  time += dt;
  view.yaw += (view.tyaw - view.yaw) * 0.08; view.pitch += (view.tpitch - view.pitch) * 0.08;
  if (Math.abs(vo.tx - vo.x) > 0.5) { vo.x += (vo.tx - vo.x) * 0.12; applyViewOffset(); }
  _off.copy(rig.pos).sub(rig.target);
  _sph.setFromVector3(_off);
  const par = isMobile || frozen ? 0 : 1;
  _sph.theta += view.yaw + (mode === 'home' ? Math.sin(time * 0.08) * 0.12 : view.px * 0.05 * par);
  _sph.phi = Math.max(0.35, Math.min(1.5, _sph.phi - view.pitch + view.py * 0.03 * par));
  camera.position.copy(rig.target).add(_off.setFromSpherical(_sph));
  camera.lookAt(rig.target);

  // key light (and its shadow frustum) follows what you are looking at
  key.target.position.set(rig.target.x, 0, rig.target.z);
  key.position.set(rig.target.x + 9, 17, rig.target.z + 11);

  for (let i = 0; i < BEADS; i++) {
    rail.getPointAt(((i / BEADS) + time * 0.004) % 1, _bp);
    _bm.compose(_bp, _bq, _bs); beads.setMatrixAt(i, _bm);
  }
  beads.instanceMatrix.needsUpdate = true;

  stations.forEach((s, k) => {
    const near = mode === 'home' ? k < 4 : Math.abs(k - cur) <= 1;
    s.group.visible = mode === 'home' ? k < 6 : Math.abs(k - cur) <= 2;
    if (near) s.tick(dt, time, mode === 'home' ? true : k === cur && !frozen);
    else if (s.group.visible) s.tick(0, time, false);
  });
  updateBracket();
  if (playing && mode === 'case') {
    playT += dt;
    const dur = stations[cur].loop + 1.0;
    $('#btnPlay').style.setProperty('--p', Math.min(1, playT / dur).toFixed(3));
    if (playT >= dur) go(cur + 1);
  }
  composer.render();
  labelRenderer.render(scene, camera);
  requestAnimationFrame(frame);
}

function resize() {
  const w = innerWidth, h = innerHeight;
  camera.aspect = w / h; camera.fov = w / h < 1 ? 52 : 42; camera.updateProjectionMatrix();
  renderer.setSize(w, h); composer.setSize(w, h); labelRenderer.setSize(w, h); bloom.resolution.set(w / 2, h / 2);
  applyViewOffset(true);
  if (mode === 'case') flyTo(camFor(cur), 0, true);
}
addEventListener('resize', resize);

// boot
resize();
const m = location.hash.match(/#\/rag\/(\d+)/);
const shotT = parseFloat(params.get('t'));
frozen = !isNaN(shotT) && !!m;
gsap.ticker.lagSmoothing(frozen ? 0 : 2000, 50); // slow GPUs: let UI tweens finish in real time
if (m) {
  openCase(Math.max(0, Math.min(N - 1, parseInt(m[1], 10))), true);
  if (!isNaN(shotT)) { stations[cur].reset(0); stations[cur].local = shotT; gsap.killTweensOf(stations[cur]); stations[cur].focus = 1; }
  if (params.get('deep')) openStep(cur);
  if (params.get('obj')) openObject(params.get('obj'));
  if (panelOpen) applyViewOffset(true);
} else flyTo(HOME(), 0, true);
canvas.style.cursor = 'grab';
renderer.compile(scene, camera);
requestAnimationFrame(frame);
setTimeout(() => { $('#loader').style.opacity = 0; setTimeout(() => $('#loader').remove(), 900); }, 600);
window.__app = { go, openCase, openHome, openStep, openObject, closePanel, stations, setPlay, pickAt, camera };
