import * as THREE from 'three';
import { gsap } from 'gsap';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { USE_CASES, STEPS, PHASES } from './data.js';
import { COL, Stream, dotTexture, E } from './helpers.js';
import { GoalStation } from './stations/s1_goal.js';
import { IngestStation } from './stations/s2_ingest.js';
import { ChunkStation } from './stations/s3_chunk.js';
import { EmbedStation } from './stations/s4_embed.js';
import { IndexStation } from './stations/s5_index.js';
import { RetrieveStation } from './stations/s6_retrieve.js';
import { GenerateStation } from './stations/s7_generate.js';
import { EvaluateStation } from './stations/s8_evaluate.js';
import { DeployStation } from './stations/s9_deploy.js';

const $ = (s) => document.querySelector(s);
const isMobile = matchMedia('(pointer:coarse)').matches || innerWidth < 820;
const params = new URLSearchParams(location.search);

// ---------- renderer ----------
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.localClippingEnabled = true;

const labelRenderer = new CSS2DRenderer({ element: $('#labels') });
labelRenderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
const BG = 0x05060b;
scene.background = new THREE.Color(BG);
scene.fog = new THREE.FogExp2(BG, 0.0125);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.7;

const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 600);

// lights
scene.add(new THREE.HemisphereLight(0x8fa6ff, 0x1a0d08, 0.35));
const key = new THREE.DirectionalLight(0xffd1b0, 2.2); key.position.set(10, 18, 12); scene.add(key);
const rim = new THREE.DirectionalLight(0x6fd8ff, 1.4); rim.position.set(-14, 6, -10); scene.add(rim);

// ---------- composer ----------
const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: isMobile ? 2 : 4 });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(renderer.getPixelRatio());
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.85, 0.55, 0.82);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------- world ----------
const SPACING = 30;
const stationPos = (i) => new THREE.Vector3(i * SPACING, 0, -Math.sin(i * 0.75) * 8);

// floor grid
const floor = new THREE.Mesh(new THREE.PlaneGeometry(900, 400), new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, fog: false,
  uniforms: { uTime: { value: 0 } },
  vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
  fragmentShader: `uniform float uTime; varying vec3 vW;
    float line(float x, float w){ float f = abs(fract(x)-.5); return smoothstep(w, 0., .5-f); }
    void main(){
      vec2 p = vW.xz/2.5;
      float g = max(line(p.x,.035), line(p.y,.035));
      vec2 p2 = vW.xz/12.5; float G = max(line(p2.x,.012), line(p2.y,.012));
      float d = length(vW.xz - cameraPosition.xz);
      float fade = exp(-d*0.022);
      vec3 c = vec3(.16,.19,.32)*g*.55 + vec3(1.,.32,.18)*G*.5;
      gl_FragColor = vec4(c*fade, (g*.4+G*.7)*fade);
    }`,
}));
floor.rotation.x = -Math.PI / 2; floor.position.set(120, -1.6, 0); scene.add(floor);

// stars + dust
function starField(n, rMin, rMax, size, color, op) {
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2, r = rMin + Math.random() * (rMax - rMin);
    const s = Math.sqrt(1 - u * u);
    pos[i * 3] = 120 + r * s * Math.cos(th); pos[i * 3 + 1] = Math.abs(r * u) * 0.8 - 10; pos[i * 3 + 2] = r * s * Math.sin(th);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ size, color, map: dotTexture(), transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false }));
}
scene.add(starField(isMobile ? 1200 : 2600, 200, 320, 1.4, 0x9fb0ff, 0.75));
const dust = (() => {
  const n = isMobile ? 500 : 1100, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { pos[i * 3] = -30 + Math.random() * 300; pos[i * 3 + 1] = -1 + Math.random() * 16; pos[i * 3 + 2] = -30 + Math.random() * 50; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ size: 0.07, color: new THREE.Color(0xffb08a).multiplyScalar(1.2), map: dotTexture(), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
})();
scene.add(dust);

// data river connecting stations
const riverPts = [new THREE.Vector3(-40, -0.5, 6)];
for (let i = 0; i < 9; i++) { const p = stationPos(i); riverPts.push(new THREE.Vector3(p.x, -0.5, p.z)); if (i < 8) { const q = stationPos(i + 1); riverPts.push(new THREE.Vector3((p.x + q.x) / 2, -0.9, (p.z + q.z) / 2 + 3)); } }
riverPts.push(new THREE.Vector3(8 * SPACING + 40, -0.5, 0));
const river = new THREE.CatmullRomCurve3(riverPts);
const riverMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  uniforms: { uTime: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform float uTime; varying vec2 vUv;
    void main(){ float s = fract(vUv.x*140. - uTime*.9); float pulse = smoothstep(.0,.08,s)*smoothstep(.5,.08,s);
      float core = .35 + pulse*1.6; vec3 c = mix(vec3(1.,.21,.13), vec3(1.,.65,.3), pulse);
      gl_FragColor = vec4(c*core*1.6, .85); }`,
});
scene.add(new THREE.Mesh(new THREE.TubeGeometry(river, 900, 0.07, 8, false), riverMat));
const riverStream = new Stream(river, isMobile ? 260 : 520, COL.amber, 0.22, 0.004);
scene.add(riverStream.points);

// stations
const CLASSES = [GoalStation, IngestStation, ChunkStation, EmbedStation, IndexStation, RetrieveStation, GenerateStation, EvaluateStation, DeployStation];
const stations = CLASSES.map((C, i) => { const s = new C(); s.group.position.copy(stationPos(i)); scene.add(s.group); return s; });

// ---------- camera rig ----------
const rig = { pos: new THREE.Vector3(-16, 9, 22), target: new THREE.Vector3(34, 1, -6) };
const view = { yaw: 0, pitch: 0, tyaw: 0, tpitch: 0, px: 0, py: 0 };
let flight = null;
function camFor(i) {
  const s = stations[i], base = s.group.position;
  const a = camera.aspect;
  const k = a < 1 ? 1 + (1 - a) * 1.35 : a < 1.4 ? 1.3 : 1.18;
  const off = new THREE.Vector3(...s.cam.pos).sub(new THREE.Vector3(...s.cam.target)).multiplyScalar(k);
  const target = new THREE.Vector3(...s.cam.target).add(base);
  return { pos: target.clone().add(off), target };
}
const HOME = () => ({ pos: new THREE.Vector3(-17, 8.5, 21), target: new THREE.Vector3(30, 1.5, -6) });
function flyTo(dest, dur = 2.0, instant = false) {
  if (flight) flight.kill();
  if (instant) { rig.pos.copy(dest.pos); rig.target.copy(dest.target); return; }
  const p0 = rig.pos.clone(), t0 = rig.target.clone();
  const dist = p0.distanceTo(dest.pos);
  const lift = Math.min(6, dist * 0.12);
  const o = { p: 0 };
  flight = gsap.to(o, {
    p: 1, duration: dur, ease: 'power3.inOut',
    onUpdate: () => {
      const e = o.p;
      rig.pos.lerpVectors(p0, dest.pos, e); rig.pos.y += Math.sin(e * Math.PI) * lift; rig.pos.z += Math.sin(e * Math.PI) * lift * 0.9;
      const te = E.io(Math.min(1, e * 1.15));
      rig.target.lerpVectors(t0, dest.target, te);
    },
  });
}
function applyViewOffset() {
  const w = innerWidth, h = innerHeight;
  if (mode !== 'case') { camera.clearViewOffset(); return; }
  if (w < 820) camera.setViewOffset(w, h, 0, h * 0.2, w, h);
  else camera.setViewOffset(w, h, -w * 0.13, h * 0.02, w, h);
}

// ---------- HUD ----------
let mode = 'home', cur = 0, playing = false, playT = 0, frozen = false;
const grid = $('#grid');
const CAT_COL = { GenAI: '#ff6a3d', 'Text-to-SQL': '#3ce0ff', 'SQL + LLM': '#ffb547', ML: '#9b7bff', Forecast: '#3dffb0', 'Doc AI': '#ff4fa3', Agents: '#ff3621', MLOps: '#7fd8ff', BI: '#ffd166', Governance: '#3dffb0' };
USE_CASES.forEach((u, i) => {
  const el = document.createElement(u.live ? 'button' : 'div');
  el.className = 'tile ' + (u.live ? 'live' : 'locked');
  const c = CAT_COL[u.cat] || '#888';
  el.innerHTML = `<div class="glyph" style="background:radial-gradient(circle at 30% 30%, ${c}, transparent 70%);box-shadow:0 0 24px -6px ${c}"></div>
    <div><div class="n">${String(u.n).padStart(2, '0')}</div><h3>${u.t}</h3>${u.live ? `<p class="sub" style="margin-top:8px;font-size:13px">${u.sub}</p>` : ''}</div>
    ${u.live ? '<span class="go">Explore in 3D →</span>' : `<div class="k"><span class="cat">${u.cat}</span><span class="soon">· soon</span></div>`}`;
  if (u.live) el.addEventListener('click', () => openCase(0));
  grid.appendChild(el);
  setTimeout(() => el.classList.add('in'), 250 + i * 35);
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
  $('#cStepIdx').textContent = 'STEP ' + String(i + 1).padStart(2, '0');
  $('#cPhase').textContent = s.phase.toUpperCase();
  $('#cTitle').textContent = s.title;
  $('#cWhat').innerHTML = s.what; $('#cHow').innerHTML = s.how; $('#cWhy').innerHTML = s.why;
  $('#cTags').innerHTML = s.tags.map(([t, k]) => `<span class="tag ${k}">${t}</span>`).join('');
  $('#cCode').innerHTML = s.code;
  $('#stepNow').textContent = i + 1;
  nodes.forEach((n, k) => { n.classList.toggle('on', k === i); n.classList.toggle('done', k < i); });
  nodes[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  gsap.fromTo('#card', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.35 });
  gsap.fromTo('#card .row, #card .tags', { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, delay: 0.5, ease: 'power2.out' });
}
$('#btnCode').addEventListener('click', () => $('#cCode').classList.toggle('hidden'));

function setFocus(i) {
  stations.forEach((s, k) => gsap.to(s, { focus: k === i ? 1 : 0, duration: k === i ? 0.8 : 0.35, delay: k === i ? 1.2 : 0 }));
}
function go(i, opts = {}) {
  i = (i + STEPS.length) % STEPS.length;
  const jump = Math.abs(i - cur);
  cur = i; playT = 0;
  const instant = !!opts.instant;
  flyTo(camFor(i), instant ? 0 : Math.min(2.6, 1.5 + jump * 0.15), instant);
  stations[i].reset(instant ? 0 : 1.1);
  view.tyaw = 0; view.tpitch = 0;
  setFocus(i);
  renderCard(i);
  history.replaceState(null, '', '#/rag/' + (i + 1));
}
function openCase(i = 0, instant = false) {
  mode = 'case';
  applyViewOffset();
  gsap.to('#home', { opacity: 0, duration: 0.5, onComplete: () => $('#home').classList.add('hidden') });
  $('#hud').classList.remove('hidden'); gsap.fromTo('#hud', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.3 });
  cur = -99; go(i, { instant });
}
function openHome() {
  mode = 'home'; setPlay(false);
  applyViewOffset();
  stations.forEach((s) => gsap.to(s, { focus: 0, duration: 0.3 }));
  $('#home').classList.remove('hidden'); gsap.to('#home', { opacity: 1, duration: 0.6 });
  gsap.to('#hud', { opacity: 0, duration: 0.3, onComplete: () => $('#hud').classList.add('hidden') });
  flyTo(HOME(), 2.2);
  history.replaceState(null, '', '#/');
}
function setPlay(v) { playing = v; playT = 0; $('#btnPlay').classList.toggle('on', v); }
$('#btnHome').addEventListener('click', openHome);
$('#btnNext').addEventListener('click', () => { frozen = false; go(cur + 1); });
$('#btnPrev').addEventListener('click', () => go(cur - 1));
$('#btnPlay').addEventListener('click', () => setPlay(!playing));
addEventListener('keydown', (e) => {
  if (mode !== 'case') { if (e.key === 'Enter') openCase(0); return; }
  if (e.key === 'ArrowRight') { go(cur + 1); }
  else if (e.key === 'ArrowLeft') { go(cur - 1); }
  else if (e.key === ' ') { e.preventDefault(); setPlay(!playing); }
  else if (e.key === 'Escape') openHome();
});

// drag to orbit / swipe to change step
let drag = null;
canvas.addEventListener('pointerdown', (e) => { if (mode === 'case') drag = { x: e.clientX, y: e.clientY, t: performance.now(), y0: view.tyaw, p0: view.tpitch }; });
addEventListener('pointermove', (e) => {
  view.px = (e.clientX / innerWidth - 0.5); view.py = (e.clientY / innerHeight - 0.5);
  if (!drag) return;
  view.tyaw = Math.max(-1.0, Math.min(1.0, drag.y0 - (e.clientX - drag.x) * 0.005));
  view.tpitch = Math.max(-0.25, Math.min(0.5, drag.p0 + (e.clientY - drag.y) * 0.003));
});
addEventListener('pointerup', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dt = performance.now() - drag.t;
  if (isMobile && Math.abs(dx) > 70 && dt < 350) { view.tyaw = drag.y0; go(cur + (dx < 0 ? 1 : -1)); }
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
  // orbit offset around target
  _off.copy(rig.pos).sub(rig.target);
  _sph.setFromVector3(_off);
  const par = isMobile ? 0 : 1;
  _sph.theta += view.yaw + (mode === 'home' ? Math.sin(time * 0.08) * 0.12 : view.px * 0.06 * par);
  _sph.phi = Math.max(0.35, Math.min(1.5, _sph.phi - view.pitch + view.py * 0.04 * par));
  camera.position.copy(rig.target).add(_off.setFromSpherical(_sph));
  camera.lookAt(rig.target);

  riverMat.uniforms.uTime.value = time;
  riverStream.update(time, 0.9);
  dust.rotation.y = Math.sin(time * 0.02) * 0.02;
  stations.forEach((s, k) => {
    const near = mode === 'home' ? k < 4 : Math.abs(k - cur) <= 1;
    s.group.visible = mode === 'home' ? k < 6 : Math.abs(k - cur) <= 2;
    if (near) s.tick(dt, time, mode === 'home' ? true : k === cur && !frozen);
    else if (s.group.visible) s.tick(0, time, false);
  });
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
  applyViewOffset();
  if (mode === 'case') flyTo(camFor(cur), 0, true);
}
addEventListener('resize', resize);

// boot
resize();
const m = location.hash.match(/#\/rag\/(\d+)/);
const shotT = parseFloat(params.get('t'));
frozen = !isNaN(shotT) && !!m;
if (m) {
  openCase(Math.max(0, Math.min(8, parseInt(m[1], 10) - 1)), true);
  if (!isNaN(shotT)) { stations[cur].reset(0); stations[cur].local = shotT; gsap.killTweensOf(stations[cur]); stations[cur].focus = 1; }
} else flyTo(HOME(), 0, true);
renderer.compile(scene, camera);
requestAnimationFrame(frame);
setTimeout(() => { $('#loader').style.opacity = 0; setTimeout(() => $('#loader').remove(), 900); }, 600);
window.__app = { go, openCase, openHome, stations, setPlay };
