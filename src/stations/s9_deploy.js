import * as THREE from 'three';
import { Station } from './base.js';
import { COL, glow, glowT, glass, frost, metal, edgeLines, roundedBox, person, seg, bell, E, lerp } from '../helpers.js';

const U = 5;
export class DeployStation extends Station {
  constructor() {
    super({ loop: 11, radius: 7, cam: { pos: [0, 5.6, 17], target: [0, 2.4, 0] } });
    const g = this.group;
    // launch beam
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.3, 9, 48, 1, true), glowT(COL.amber, 1.4, 0.0)); this.beam.position.set(0, 4.5, -1.2); g.add(this.beam);
    // app window (Databricks App)
    this.app = new THREE.Group(); this.app.position.set(0, 2.6, -1.2); g.add(this.app);
    const frame = new THREE.Mesh(roundedBox(2.5, 3.8, 0.16, 0.22), metal(0x161a2a, 0.25, 0.9)); this.app.add(frame);
    const screen = new THREE.Mesh(roundedBox(2.25, 3.5, 0.05, 0.16), frost(0x9ad7ff, 0.35, { emissive: 0x0c2740, ei: 1 })); screen.position.z = 0.1; this.app.add(screen);
    this.app.add(edgeLines(frame.geometry, COL.amber, 2, 0.5));
    this.msgs = [];
    for (let i = 0; i < 5; i++) {
      const user = i % 2 === 0;
      const m = new THREE.Mesh(roundedBox(user ? 1.2 : 1.55, 0.36, 0.06, 0.1), user ? glow(COL.cyan, 1.4) : glow(COL.ember, 1.5));
      m.position.set(user ? 0.42 : -0.25, 1.3 - i * 0.6, 0.18); this.app.add(m); this.msgs.push(m);
    }
    this.addLabel('Databricks App', 'lava big', [0, 2.35, 0], this.app);
    this.addLabel('Agent Runtime', 'ghost', [0, -2.25, 0.3], this.app);

    // governed assets behind
    this.assets = new THREE.Group(); this.assets.position.set(0, 0, -3.6); g.add(this.assets);
    const tbl = new THREE.Group(); for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(roundedBox(1.1, 0.14, 0.8, 0.04), frost(0x9fe9ff, 0.5, { emissive: COL.cyan, ei: 0.4 })); s.position.y = 0.3 + i * 0.2; tbl.add(s); } tbl.position.x = -3.4; this.assets.add(tbl);
    const idx = new THREE.Group(); for (let i = 0; i < 40; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), glow([COL.cyan, COL.violet, COL.amber][i % 3], 2.6)); s.position.set((Math.sin(i * 2.3) * 0.6), 0.9 + Math.cos(i * 1.7) * 0.5, Math.sin(i * 0.9) * 0.5); idx.add(s); } idx.position.x = 3.4; this.assets.add(idx);
    this.assetRings = [-3.4, 3.4].map((x) => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.02, 6, 6), glow(COL.mint, 3)); r.rotation.x = Math.PI / 2; r.position.set(x, 0.1, 0); this.assets.add(r); return r; });
    this.addLabel('tables', 'ghost', [-3.4, -0.25, 0.6], this.assets);
    this.addLabel('index · model', 'ghost', [3.4, -0.25, 0.6], this.assets);

    // Unity Catalog dome
    this.dome = new THREE.Group(); g.add(this.dome);
    const dgeo = new THREE.IcosahedronGeometry(6.3, 2);
    this.domeLines = new THREE.LineSegments(new THREE.EdgesGeometry(dgeo), new THREE.LineBasicMaterial({ color: new THREE.Color(COL.mint).multiplyScalar(1.6), transparent: true, opacity: 0.25 }));
    this.dome.add(this.domeLines);
    this.domeSkin = new THREE.Mesh(dgeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(COL.mint), transparent: true, opacity: 0.035, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending })); this.dome.add(this.domeSkin);
    this.dome.position.set(0, -0.6, -1.6);
    this.clip = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
    this.floorClip = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.02);
    this.domeLines.material.clippingPlanes = [this.clip, this.floorClip]; this.domeSkin.material.clippingPlanes = [this.clip, this.floorClip];
    this.ucLbl = this.addLabel('Unity Catalog · permissions · lineage', 'mint big', [0, 6.35, -1.6]);

    // Unity Gateway ring
    this.gate = new THREE.Group(); this.gate.position.set(0, 2.2, 2.4); g.add(this.gate);
    this.gateRing = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.09, 16, 120), metal(0x1b2033, 0.2, 1)); this.gate.add(this.gateRing);
    this.gateGlow = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.03, 8, 120), glow(COL.amber, 3.5)); this.gateGlow.position.z = 0.1; this.gate.add(this.gateGlow);
    this.gateTicks = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.02, 4, 24), glow(COL.lava, 3)); this.gate.add(this.gateTicks);
    this.addLabel('Unity Gateway', 'lava', [0, -1.6, 0], this.gate);

    // users + requests
    this.users = []; this.reqs = [];
    for (let i = 0; i < U; i++) {
      const a = -0.9 + (i / (U - 1)) * 1.8;
      const p = person(i === 3 ? COL.lava : COL.cyan); p.scale.setScalar(0.75);
      p.position.set(Math.sin(a) * 5.6, 0, 2.4 + Math.cos(a) * 2.6); p.lookAt(0, 0, 0); g.add(p); this.users.push(p);
      const r = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 8), glow(i === 3 ? COL.lava : COL.cyan, 4)); g.add(r); this.reqs.push(r);
    }
    this.denied = this.addLabel('✕ no access', 'lava', [0, 0, 0]);
    this.cmd = this.addLabel('agentbricks deploy', 'lava big', [0, 0.35, 2.3]);
    this._v = new THREE.Vector3();
  }
  update(t, time) {
    const fade = 1 - seg(t, 10.5, 11);
    // launch
    const launch = seg(t, 0.2, 1.6);
    this.beam.material.opacity = bell(t, 0.2, 2.2) * 0.35;
    this.beam.scale.set(1 - launch * 0.4, 1, 1 - launch * 0.4);
    const rise = E.back(seg(t, 0.8, 1.9));
    this.app.position.y = lerp(-1.6, 2.6, rise) + Math.sin(time * 1.2) * 0.05;
    this.app.scale.setScalar(Math.max(0.001, Math.min(1, rise * 1.1)));
    this.show(this.cmd, bell(t, 0.1, 2.6));
    this.msgs.forEach((m, i) => { const p = E.back(seg(t, 4.2 + i * 0.55, 4.6 + i * 0.55)) * fade; m.scale.setScalar(Math.max(0.001, p)); });
    // dome builds from bottom up (clip plane rises)
    const dp = E.io(seg(t, 1.8, 3.4));
    this.clip.constant = lerp(0, 7.5, dp) * fade; // keeps world y <= constant
    this.dome.rotation.y = time * 0.05;
    this.domeLines.material.opacity = 0.2 + 0.1 * Math.sin(time * 2);
    this.show(this.ucLbl, seg(t, 3.0, 3.4) * fade);
    this.assetRings.forEach((r, i) => { r.rotation.z = time * (i ? -0.6 : 0.6); r.scale.setScalar(Math.max(0.001, E.back(seg(t, 2.6 + i * 0.2, 3.1 + i * 0.2)) * fade)); });
    // gateway
    this.gateTicks.rotation.z = time * 0.8;
    this.gate.scale.setScalar(Math.max(0.001, E.back(seg(t, 2.4, 3.0)) * fade));
    // requests
    let deniedPos = null, deniedVis = 0;
    this.reqs.forEach((r, i) => {
      const start = this.users[i].position;
      const cyc = (t - 3.6 - i * 0.35);
      const per = 2.2;
      const ph = cyc < 0 ? -1 : (cyc % per) / per;
      r.visible = ph >= 0 && fade > 0.1;
      if (!r.visible) return;
      const gatePos = this._v.set(0, 2.2, 2.4);
      if (i === 3) {
        // blocked at gateway: goes to gate, bounces back
        const p1 = seg(ph, 0, 0.45), p2 = seg(ph, 0.5, 0.95);
        if (ph < 0.5) r.position.lerpVectors(new THREE.Vector3(start.x, 1.0, start.z), gatePos, E.io(p1));
        else r.position.lerpVectors(gatePos, new THREE.Vector3(start.x, 1.0, start.z), E.out(p2));
        r.scale.setScalar(ph > 0.42 && ph < 0.6 ? 1.8 : 1);
        if (ph > 0.42 && ph < 0.9) { deniedVis = 1; deniedPos = gatePos.clone().add(new THREE.Vector3(1.9, 0.6, 0)); }
      } else {
        const appPos = new THREE.Vector3(0, 2.6, -1.0);
        if (ph < 0.4) r.position.lerpVectors(new THREE.Vector3(start.x, 1.0, start.z), gatePos, E.io(seg(ph, 0, 0.4)));
        else if (ph < 0.65) r.position.lerpVectors(gatePos, appPos, E.io(seg(ph, 0.4, 0.65)));
        else r.position.lerpVectors(appPos, new THREE.Vector3(start.x, 1.0, start.z), E.io(seg(ph, 0.65, 1)));
        r.material = ph >= 0.65 ? this._ans || (this._ans = glow(COL.amber, 4)) : this._req || (this._req = glow(COL.cyan, 4));
        r.scale.setScalar(1);
      }
    });
    if (deniedPos) this.denied.position.copy(deniedPos);
    this.show(this.denied, deniedVis);
    const gatePulse = this.reqs.some((r) => r.visible && r.position.distanceTo(this._v.set(0, 2.2, 2.4)) < 0.4);
    this.gateGlow.scale.setScalar(gatePulse ? 1.06 : 1);
  }
}
