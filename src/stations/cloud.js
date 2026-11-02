import * as THREE from 'three';
import { CLUSTER, dotTexture } from '../helpers.js';

// deterministic PRNG
export function rng(seed = 7) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function gauss(r) { let u = 0, v = 0; while (u === 0) u = r(); v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

export const CLUSTER_NAMES = ['Timely filing', 'Credentialing', 'Fee schedules', 'Prior auth', 'Network rules'];
export const CENTERS = [[-1.9, 0.9, 0.6], [1.8, 1.5, -0.6], [0.4, -1.3, 1.3], [2.0, -0.7, 1.4], [-1.4, -1.0, -1.4]].map((a) => new THREE.Vector3(...a));

export function makeCloud(n = 300, seed = 11) {
  const r = rng(seed);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const c = i % 5;
    const p = CENTERS[c].clone().add(new THREE.Vector3(gauss(r), gauss(r), gauss(r)).multiplyScalar(0.48));
    pts.push({ p, c });
  }
  const geo = new THREE.IcosahedronGeometry(0.065, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0.1, emissive: 0x000000 });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  const col = new THREE.Color();
  pts.forEach((pt, i) => { col.set(CLUSTER[pt.c]); mesh.setColorAt(i, col); });
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  // nebula halos
  const halos = new THREE.Group();
  CENTERS.forEach((c, i) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTexture(), color: CLUSTER[i], transparent: true, opacity: 0.08, depthWrite: false }));
    s.position.copy(c); s.scale.setScalar(2.6); halos.add(s);
  });
  return { pts, mesh, halos };
}

// cube frame + axis ticks for a vector space
export function spaceFrame(size = 6.4, color = 0x7d828c) {
  const g = new THREE.Group();
  const box = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(size, size, size)), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.35 }));
  g.add(box);
  const grid = new THREE.GridHelper(size, 8, color, color); grid.material.transparent = true; grid.material.opacity = 0.12; grid.position.y = -size / 2; g.add(grid);
  const ax = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-size / 2, -size / 2, -size / 2), new THREE.Vector3(size / 2, -size / 2, -size / 2), new THREE.Vector3(-size / 2, -size / 2, -size / 2), new THREE.Vector3(-size / 2, size / 2, -size / 2), new THREE.Vector3(-size / 2, -size / 2, -size / 2), new THREE.Vector3(-size / 2, -size / 2, size / 2)]);
  g.add(new THREE.LineSegments(ax, new THREE.LineBasicMaterial({ color: 0xc97a58, transparent: true, opacity: 0.55 })));
  return g;
}
