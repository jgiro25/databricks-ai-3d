import * as THREE from 'three';
import { label, platform, COL } from '../helpers.js';

export class Station {
  constructor(opts = {}) {
    this.group = new THREE.Group();
    this.labels = [];
    this.local = 0;
    this.loop = opts.loop ?? 9;
    this.accent = opts.accent ?? COL.lava;
    this.cam = { pos: [0, 4.3, 14.5], target: [0, 2.1, 0], ...(opts.cam || {}) };
    this.plat = platform(opts.radius ?? 6.2, this.accent);
    this.group.add(this.plat);
    this.focus = 0; // 0..1 how "current" this station is (drives label opacity)
  }
  addLabel(html, cls, pos, parent = this.group) {
    const l = label(html, cls, pos);
    l.userData.vis = 1;
    parent.add(l); this.labels.push(l);
    return l;
  }
  show(l, v) { l.userData.vis = v; }
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
  }
  update() {}
}
