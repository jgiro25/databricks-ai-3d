import * as THREE from 'three';
import { Station } from './base.js';
import { COL, CLUSTER, matte, glow, glowT, frost, metal, edgeLines, roundedBox, seg, bell, E, lerp } from '../helpers.js';
import { makeCloud, spaceFrame, CLUSTER_NAMES, CENTERS } from './cloud.js';

export class IndexStation extends Station {
  constructor() {
    super({ loop: 10, cam: { pos: [0.6, 5.0, 15.5], target: [0.6, 2.6, 0] } });
    const g = this.group;
    this.space = new THREE.Group(); this.space.position.set(1.4, 3.2, 0); g.add(this.space);
    this.space.add(spaceFrame(6.2));
    const { pts, mesh, halos } = makeCloud(320, 11);
    this.pts = pts; this.mesh = mesh; this.space.add(mesh); this.halos = halos; this.space.add(halos);
    this.clLbls = CENTERS.map((c, i) => this.addLabel(CLUSTER_NAMES[i], '', [c.x, c.y + 0.75, c.z], this.space));
    this.clLbls.forEach((l, i) => { l.element.style.borderColor = '#' + new THREE.Color(CLUSTER[i]).getHexString(); });
    this.addLabel('Databricks AI Search index', 'lava big', [0, -3.75, 2.2], this.space);

    // source delta table
    this.tbl = new THREE.Group(); this.tbl.position.set(-4.6, 0.3, 1.2); g.add(this.tbl);
    this.slabs = [];
    for (let i = 0; i < 7; i++) {
      const s = new THREE.Mesh(roundedBox(1.7, 0.2, 1.1, 0.05), i === 6 ? matte(COL.mint, 0.5) : matte(0x6f7782, 0.55));
      s.position.y = 0.2 + i * 0.27; this.tbl.add(s); this.slabs.push(s);
    }
    this.sync = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.04, 8, 100, Math.PI * 1.6), glow(COL.cyan, 1.5)); this.sync.position.y = 1.1; this.sync.rotation.x = Math.PI / 2; this.tbl.add(this.sync);
    this.arrow = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.32, 16), glow(COL.cyan, 1.5)); this.sync.add(this.arrow);
    this.addLabel('Delta Sync', 'cyan', [0, -0.45, 0.9], this.tbl);
    this.newOrb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 8), glow(COL.mint, 2)); g.add(this.newOrb);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
    // AI Search endpoint: the compute that serves the index
    this.rack = new THREE.Group(); this.rack.position.set(5.3, 0, -2.0); this.rack.rotation.y = -0.5; g.add(this.rack);
    const body = new THREE.Mesh(roundedBox(1.0, 2.3, 0.85, 0.05), metal(0x2b2e34, 0.45, 0.6)); body.position.y = 1.15; this.rack.add(body);
    this.leds = [];
    for (let i = 0; i < 6; i++) {
      const u = new THREE.Mesh(roundedBox(0.84, 0.26, 0.04, 0.02), matte(0x1b1d22, 0.4)); u.position.set(0, 0.35 + i * 0.33, 0.44); this.rack.add(u);
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.03, 0.02), glow(i % 3 ? COL.mint : COL.lava, 2)); led.position.set(0.28, 0.35 + i * 0.33, 0.47); this.rack.add(led); this.leds.push(led);
    }
    this.addLabel('AI Search endpoint', 'ghost', [0, -0.3, 0.6], this.rack);
    this.pick(this.mesh, 'index', [0, 3.45, 0]);
    this.pick(this.tbl, 'chunksTable', [1.05, 2.15, 0]);
    this.pick(this.sync, 'deltaSync', null);
    this.pick(this.hitBox(1.6, 0.45, 0.3, [0, -0.45, 0.9], this.tbl), 'deltaSync', [0, -0.42, 0]);
    this.pick(this.rack, 'vsEndpoint', [0, 2.65, 0.3]);
    this.src = new THREE.Vector3(-4.6 - 1.4, 1.3 - 3.2, 1.2);
  }
  update(t, time) {
    this.space.rotation.y = time * 0.12;
    const fade = 1 - seg(t, 9.5, 10);
    for (let i = 0; i < this.pts.length; i++) {
      const pt = this.pts[i];
      const d = (i / this.pts.length) * 2.6;
      const p = E.out(seg(t, 0.4 + d, 1.4 + d));
      // fly from table (in space-local coords, ignoring rotation for a swirl feel)
      this._p.lerpVectors(this.src, pt.p, p);
      this._p.y += Math.sin(p * Math.PI) * 1.2;
      const s = p * fade * (1 + 0.25 * Math.sin(time * 3 + i));
      this._s.setScalar(Math.max(0.001, s));
      this._m.compose(this._p, this._q, this._s); this.mesh.setMatrixAt(i, this._m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.halos.children.forEach((h, i) => { h.material.opacity = 0.08 * seg(t, 2.5 + i * 0.2, 3.6 + i * 0.2) * fade * (0.85 + 0.15 * Math.sin(time * 2 + i)); });
    this.clLbls.forEach((l, i) => this.show(l, seg(t, 3.6 + i * 0.15, 4.0 + i * 0.15) * fade));
    this.sync.rotation.z = -time * 1.5;
    this.leds.forEach((l, i) => { l.visible = Math.sin(time * (3 + i) + i * 1.7) > -0.6; });
    this.arrow.position.set(1.45 * Math.cos(Math.PI * 1.6), 1.45 * Math.sin(Math.PI * 1.6), 0); this.arrow.rotation.z = Math.PI * 1.6 + Math.PI;
    // new row -> auto sync
    const nr = E.back(seg(t, 5.4, 5.9));
    this.slabs[6].scale.set(Math.max(0.001, nr), 1, Math.max(0.001, nr));
    const fl = seg(t, 6.0, 7.4);
    this.newOrb.visible = fl > 0 && fl < 1;
    if (this.newOrb.visible) {
      const target = CENTERS[0].clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), this.space.rotation.y).add(this.space.position);
      const start = new THREE.Vector3(-4.6, 2.3, 1.2);
      const e = E.io(fl);
      this.newOrb.position.lerpVectors(start, target, e); this.newOrb.position.y += Math.sin(e * Math.PI) * 2;
    }
  }
}
