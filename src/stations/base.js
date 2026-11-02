import * as THREE from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { label, platform, COL } from '../helpers.js';

const _s = new THREE.Vector3();
export function shown(o) {
  for (let p = o; p; p = p.parent) if (!p.visible) return false;
  o.getWorldScale(_s);
  return Math.min(_s.x, _s.y, _s.z) > 0.08;
}

const HIT_MAT = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });

export class Station {
  constructor(opts = {}) {
    this.group = new THREE.Group();
    this.labels = [];
    this.picks = [];   // {obj, id, hs}
    this.local = 0;
    this.loop = opts.loop ?? 9;
    this.accent = opts.accent ?? COL.lava;
    this.cam = { pos: [0, 4.3, 14.5], target: [0, 2.1, 0], ...(opts.cam || {}) };
    this.plat = platform(opts.radius ?? 6.2, this.accent);
    this.group.add(this.plat);
    this.focus = 0;
  }
  addLabel(html, cls, pos, parent = this.group) {
    const l = label(html, cls, pos);
    l.userData.vis = 1;
    parent.add(l); this.labels.push(l);
    return l;
  }
  show(l, v) { l.userData.vis = v; }
  /** Make obj clickable. hs = [x,y,z] local offset for a "+" hotspot marker, or null for none. */
  pick(obj, id, hs = [0, 0, 0]) {
    obj.userData.pickId = id;
    const p = { obj, id, hs: null };
    if (hs) {
      const el = document.createElement('button');
      el.className = 'hs'; el.dataset.id = id; el.setAttribute('aria-label', 'Inspect');
      el.innerHTML = '<i></i>';
      const o = new CSS2DObject(el);
      o.position.set(...hs); o.center.set(0.5, 0.5);
      obj.add(o); p.hs = o;
    }
    this.picks.push(p);
    return obj;
  }
  /** Invisible hit volume for picking things that are thin or made of particles. */
  hitBox(w, h, d, pos, parent = this.group) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), HIT_MAT);
    m.position.set(...pos); m.userData.noShadow = true; m.userData.hit = true; m.layers.set(1); parent.add(m); return m;
  }
  reset(delay = 0) { this.local = -delay; }
  tick(dt, time, isCurrent) {
    if (isCurrent) this.local += dt;
    const lt = Math.max(0, this.local) % this.loop;
    this.plat.userData.uni.uTime.value = time;
    this.update(lt, time, dt);
    for (const l of this.labels) {
      const o = this.focus * l.userData.vis;
      l.visible = o > 0.02;
      if (l.visible) l.element.style.opacity = o.toFixed(3);
    }
    const hsOn = this.focus > 0.6 && Station.hotspots;
    for (const p of this.picks) if (p.hs) {
      const v = hsOn && shown(p.obj);
      p.hs.visible = v;
      if (v) p.hs.element.style.opacity = Math.min(1, (this.focus - 0.6) * 2.5).toFixed(2);
    }
  }
  update() {}
}
Station.hotspots = true;
