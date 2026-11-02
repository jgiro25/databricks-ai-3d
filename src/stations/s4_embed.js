import * as THREE from 'three';
import { Station } from './base.js';
import { COL, CLUSTER, matte, glow, glowT, metal, edgeLines, docTexture, seg, bell, E, lerp } from '../helpers.js';
import { rng } from './cloud.js';

const N = 6, BARS = 18;
export class EmbedStation extends Station {
  constructor() {
    super({ loop: 9, cam: { pos: [0, 4.0, 14.5], target: [0, 2.3, 0] } });
    const g = this.group;
    // portal = embedding model
    this.portal = new THREE.Group(); this.portal.position.set(-0.2, 2.4, 0); g.add(this.portal);
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.11, 24, 160), metal(0x3a3d44, 0.35, 0.75)); this.portal.add(this.ring);
    this.ringGlow = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.035, 8, 160), glow(COL.lava, 2)); this.ringGlow.position.z = 0.12; this.portal.add(this.ringGlow);
    this.ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.015, 8, 160, Math.PI * 1.4), matte(0x8a8f99, 0.5)); this.portal.add(this.ring2);
    this.ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.012, 8, 160, Math.PI * 0.8), matte(0x6b6f78, 0.5)); this.portal.add(this.ring3);
    this.swirl = new THREE.Mesh(new THREE.CircleGeometry(1.62, 96), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { uTime: { value: 0 }, uAmp: { value: 0.5 } },
      vertexShader: 'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: `uniform float uTime; uniform float uAmp; varying vec2 vUv;
        void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.y,p.x);
          float s = sin(a*5. + r*10. - uTime*2.)*.5+.5;
          vec3 base = vec3(.11,.12,.14);
          vec3 c = mix(base, vec3(.85,.40,.23), s * smoothstep(1.,.1,r) * (.18 + uAmp*.55));
          c = mix(c, vec3(.93,.9,.86), smoothstep(.3,.0,r) * uAmp * .5);
          gl_FragColor = vec4(c, .92); }` }));
    this.portal.add(this.swirl);
    this.addLabel('databricks-gte-large-en', 'violet big', [0, -2.6, 0], this.portal);

    // incoming chunks
    this.chunks = [];
    for (let i = 0; i < N; i++) {
      const tex = docTexture(i % 3).clone(); tex.repeat.set(0.5, 0.25); tex.offset.set((i % 2) * 0.5, 0.25 * (i % 4)); tex.needsUpdate = true;
      const m = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.72, 0.1), [matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6), matte(0x3a3d44, .6), new THREE.MeshStandardMaterial({ map: tex, color: 0xb8bccb, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.07, envMapIntensity: 0.35 }), matte(0x3a3d44, .6)]);
      m.add(edgeLines(m.geometry, i % 3 === 1 ? COL.cyan : COL.amber, 2.6, 1));
      g.add(m); this.chunks.push(m);
    }
    this.addLabel('chunks', 'ghost', [-5.6, 0.35, 0.6]);

    // vector barcodes
    const r = rng(5);
    this.vecs = [];
    const bar = new THREE.BoxGeometry(0.09, 1, 0.09); bar.translate(0, 0.5, 0);
    for (let i = 0; i < N; i++) {
      const im = new THREE.InstancedMesh(bar, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.1 }), BARS);
      const heights = [];
      const col = new THREE.Color();
      for (let b = 0; b < BARS; b++) {
        const h = 0.12 + r() * 0.55; heights.push(h);
        col.set(CLUSTER[(b + i) % 2 === 0 ? 1 : 2]).lerp(new THREE.Color(COL.cyan), r());
        im.setColorAt(b, col);
      }
      im.userData.h = heights; im.frustumCulled = false;
      g.add(im); this.vecs.push(im);
    }
    this.dims = this.addLabel('[0.12, −0.83, 0.41, … ] · 1024 dims', 'cyan', [3.1, 5.25, 0.3]);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
    this.sparks = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ size: 0.04, color: COL.amber, transparent: true, opacity: 0.55, depthWrite: false }));
    const sp = new Float32Array(200 * 3); this.sparkSeed = new Float32Array(200 * 3).map(() => Math.random());
    this.sparks.geometry.setAttribute('position', new THREE.BufferAttribute(sp, 3)); this.sparks.frustumCulled = false;
    this.portal.add(this.sparks);
    this.pick(this.portal, 'embedModel', [1.75, 1.75, 0]);
    this.pick(this.hitBox(1.6, 4.2, 0.8, [-5.4, 2.6, 0.3]), 'chunk', [0.2, 2.4, 0]);
    this.pick(this.hitBox(3.0, 4.2, 0.8, [3.2, 2.6, 0.3]), 'vector', [1.7, 2.0, 0]);
  }
  update(t, time) {
    const fade = 1 - seg(t, 8.5, 9);
    let amp = 0;
    this.portal.rotation.y = Math.sin(time * 0.4) * 0.18;
    this.ring2.rotation.z = time * 0.6; this.ring3.rotation.z = -time * 0.9;
    for (let i = 0; i < N; i++) {
      const t0 = 0.4 + i * 0.85;
      const p = seg(t, t0, t0 + 1.0);
      const c = this.chunks[i];
      const sx = -5.6 + (i % 2) * 0.4, sy = 1.0 + i * 0.62, sz = (i % 2) * 0.3;
      const e = E.in(p);
      c.position.set(lerp(sx, -0.2, e), lerp(sy, 2.4, e), lerp(sz, 0, e));
      c.rotation.set(0, (1 - e) * 0.35 + e * 1.2, e * 2);
      c.scale.setScalar(Math.max(0.001, (1 - e * 0.9) * (p >= 1 ? 0 : 1)));
      amp = Math.max(amp, bell(t, t0 + 0.7, t0 + 1.4));
      // barcode out
      const q = seg(t, t0 + 0.9, t0 + 1.8);
      const im = this.vecs[i];
      im.visible = q > 0;
      const eq = E.out(q);
      const dx = lerp(-0.2, 3.2, eq), dy = lerp(2.4, 4.4 - i * 0.62, eq), dz = lerp(0, 0.3, eq);
      for (let b = 0; b < im.count; b++) {
        const h = im.userData.h[b] * (0.25 + 0.75 * E.back(seg(t, t0 + 1.4 + b * 0.015, t0 + 2.0 + b * 0.015)));
        this._p.set(dx + (b - BARS / 2) * 0.14 * eq, dy - 0.25, dz);
        this._s.set(1, Math.max(0.001, h * (0.9 + 0.1 * Math.sin(time * 3 + b + i)) * fade), 1);
        this._m.compose(this._p, this._q, this._s); im.setMatrixAt(b, this._m);
      }
      im.instanceMatrix.needsUpdate = true;
    }
    this.swirl.material.uniforms.uTime.value = time; this.swirl.material.uniforms.uAmp.value = amp;
    this.ringGlow.scale.setScalar(1 + amp * 0.05);
    const pos = this.sparks.geometry.attributes.position.array;
    for (let i = 0; i < 200; i++) {
      const a = this.sparkSeed[i * 3] * Math.PI * 2 + time * (0.5 + this.sparkSeed[i * 3 + 1]);
      const rr = 1.75 + ((time * 0.6 + this.sparkSeed[i * 3 + 2]) % 1) * 0.9 * (0.3 + amp);
      pos[i * 3] = Math.cos(a) * rr; pos[i * 3 + 1] = Math.sin(a) * rr; pos[i * 3 + 2] = (this.sparkSeed[i * 3 + 2] - 0.5) * 0.4;
    }
    this.sparks.geometry.attributes.position.needsUpdate = true;
    this.show(this.dims, seg(t, 2.6, 3.2));
  }
}
