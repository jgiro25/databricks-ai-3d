(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,N=33778,te=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,Ne=2301,I=2302,Pe=2303,Fe=2400,Ie=2401,L=2402,Le=3200,Re=`srgb`,R=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=35048,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,z(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=Math.PI/180,it=180/Math.PI;function at(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function ot(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n){return(1-n)*e+n*t}function lt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ut(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dt(e,t){if(t.constructor===Float32Array)return e;let n=ut(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function ft(e,t){if(t.constructor===Float32Array)return e;let n=ut(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var V=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mt.copy(this).projectOnVector(e),this.sub(mt)}reflect(e){return this.sub(mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mt=new H,ht=new pt,gt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_t.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new gt,vt=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yt=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bt(){let e={enabled:!0,workingColorSpace:R,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[R]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var xt=bt();function St(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ct(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wt,Tt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wt===void 0&&(wt=qe(`canvas`)),wt.width=e.width,wt.height=e.height;let t=wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=St(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(St(t[e]/255)*255):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Et=0,Dt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=at(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ot(r[t].image)):e.push(Ot(r[t]))}else e=Ot(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Tt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var kt=0,At=new H,jt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=at(),this.name=``,this.source=new Dt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(At).x}get height(){return this.source.getSize(At).y}get depth(){return this.source.getSize(At).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=300,jt.DEFAULT_ANISOTROPY=1;var Mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new jt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pt=class extends Nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ft=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},It=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Lt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Rt.setFromMatrixColumn(e,0).length(),i=1/Rt.setFromMatrixColumn(e,1).length(),a=1/Rt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bt,e,Vt)}lookAt(e,t,n){let r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ht.crossVectors(n,Wt),Ht.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ht.crossVectors(n,Wt)),Ht.normalize(),Ut.crossVectors(Wt,Ht),r[0]=Ht.x,r[4]=Ut.x,r[8]=Wt.x,r[1]=Ht.y,r[5]=Ut.y,r[9]=Wt.y,r[2]=Ht.z,r[6]=Ut.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*te,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*te,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*te,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*te,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Rt.set(r[0],r[1],r[2]).length(),o=Rt.set(r[4],r[5],r[6]).length(),s=Rt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),zt.copy(this);let c=1/a,l=1/o,u=1/s;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=l,zt.elements[5]*=l,zt.elements[6]*=l,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rt=new H,zt=new Lt,Bt=new H(0,0,0),Vt=new H(1,1,1),Ht=new H,Ut=new H,Wt=new H,Gt=new Lt,Kt=new pt,qt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ot(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kt.setFromEuler(this),this.setFromQuaternion(Kt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER=`XYZ`;var Jt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Yt=0,Xt=new H,Zt=new pt,Qt=new Lt,$t=new H,en=new H,tn=new H,nn=new pt,rn=new H(1,0,0),an=new H(0,1,0),on=new H(0,0,1),sn={type:`added`},cn={type:`removed`},ln={type:`childadded`,child:null},un={type:`childremoved`,child:null},dn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=at(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new qt,r=new pt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new gt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.multiply(Zt),this}rotateOnWorldAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.premultiply(Zt),this}rotateX(e){return this.rotateOnAxis(rn,e)}rotateY(e){return this.rotateOnAxis(an,e)}rotateZ(e){return this.rotateOnAxis(on,e)}translateOnAxis(e,t){return Xt.copy(e).applyQuaternion(this.quaternion),this.position.add(Xt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rn,e)}translateY(e){return this.translateOnAxis(an,e)}translateZ(e){return this.translateOnAxis(on,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$t.copy(e):$t.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(en,$t,this.up):Qt.lookAt($t,en,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Zt.setFromRotationMatrix(Qt),this.quaternion.premultiply(Zt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,e,tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};dn.DEFAULT_UP=new H(0,1,0),dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},fn={type:`move`},pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},gn={h:0,s:0,l:0};function _n(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=st(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=_n(i,r,e+1/3),this.g=_n(i,r,e),this.b=_n(i,r,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=mn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return xt.workingToColorSpace(vn.copy(this),e),Math.round(ot(vn.r*255,0,255))*65536+Math.round(ot(vn.g*255,0,255))*256+Math.round(ot(vn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,i=vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Re){xt.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(gn);let n=ct(hn.h,gn.h,t),r=ct(hn.s,gn.s,t),i=ct(hn.l,gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new W;W.NAMES=mn;var yn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},bn=class extends dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new H,Sn=new H,Cn=new H,wn=new H,Tn=new H,En=new H,Dn=new H,On=new H,kn=new H,An=new H,jn=new Mt,Mn=new Mt,Nn=new Mt,Pn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xn.subVectors(r,t),Sn.subVectors(n,t),Cn.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Sn),s=xn.dot(Cn),c=Sn.dot(Sn),l=Sn.dot(Cn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wn)!==null&&wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,wn.x),s.addScaledVector(a,wn.y),s.addScaledVector(o,wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return jn.setScalar(0),Mn.setScalar(0),Nn.setScalar(0),jn.fromBufferAttribute(e,t),Mn.fromBufferAttribute(e,n),Nn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jn,i.x),a.addScaledVector(Mn,i.y),a.addScaledVector(Nn,i.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Sn.subVectors(e,t),xn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),xn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Tn.subVectors(r,n),En.subVectors(i,n),On.subVectors(e,n);let s=Tn.dot(On),c=En.dot(On);if(s<=0&&c<=0)return t.copy(n);kn.subVectors(e,r);let l=Tn.dot(kn),u=En.dot(kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Tn,a);An.subVectors(e,i);let f=Tn.dot(An),p=En.dot(An);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(En,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Dn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Dn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Tn,a).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ln):Ln.fromBufferAttribute(r,t),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Rn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Rn.copy(e.boundingBox)),Rn.applyMatrix4(e.matrixWorld),this.union(Rn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gn),Kn.subVectors(this.max,Gn),zn.subVectors(e.a,Gn),Bn.subVectors(e.b,Gn),Vn.subVectors(e.c,Gn),Hn.subVectors(Bn,zn),Un.subVectors(Vn,Bn),Wn.subVectors(zn,Vn);let t=[0,-Hn.z,Hn.y,0,-Un.z,Un.y,0,-Wn.z,Wn.y,Hn.z,0,-Hn.x,Un.z,0,-Un.x,Wn.z,0,-Wn.x,-Hn.y,Hn.x,0,-Un.y,Un.x,0,-Wn.y,Wn.x,0];return!Yn(t,zn,Bn,Vn,Kn)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,zn,Bn,Vn,Kn))?!1:(qn.crossVectors(Hn,Un),t=[qn.x,qn.y,qn.z],Yn(t,zn,Bn,Vn,Kn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new H,new H,new H,new H,new H,new H,new H,new H],Ln=new H,Rn=new Fn,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H;function Yn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Jn.fromArray(e,a);let o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),s=t.dot(Jn),c=n.dot(Jn),l=r.dot(Jn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xn=new H,Zn=new V,Qn=0,$n=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:ut(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXY(t,Zn.x,Zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ft(e,this.array):Math.round(e*t)}},er=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}},tr=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nr=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}},rr=new Fn,ir=new H,ar=new H,or=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ar)),this.expandByPoint(ir.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=0,cr=new Lt,lr=new dn,ur=new H,dr=new Fn,fr=new Fn,pr=new H,mr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=at(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?tr:er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new gt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new nr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(pr),pr.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(pr)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(dr.min,fr.min),dr.expandByPoint(pr),pr.addVectors(dr.max,fr.max),dr.expandByPoint(pr)):(dr.expandByPoint(fr.min),dr.expandByPoint(fr.max))}dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pr.fromBufferAttribute(a,t),o&&(ur.fromBufferAttribute(e,t),pr.add(ur)),r=Math.max(r,n.distanceToSquared(pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pr.fromBufferAttribute(e,t),pr.normalize(),e.setXYZ(t,pr.x,pr.y,pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new $n(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=He,this.updateRanges=[],this.version=0,this.uuid=at()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function gr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=at()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var _r=new H,vr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:ut(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix4(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyNormalMatrix(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.transformDirection(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ft(e,this.data.array):Math.round(e*t)}},yr=new H,br=new H,xr=new gt,Sr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=yr.subVectors(n,t).cross(br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xr.getNormalMatrix(e),r=this.coplanarPoint(yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cr=0,wr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=at(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Sr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Tr=class extends wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Er,Dr=new H,Or=new H,kr=new H,Ar=new V,jr=new V,Mr=new Lt,Nr=new H,Pr=new H,Fr=new H,Ir=new V,Lr=new V,Rr=new V,zr=class extends dn{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type=`Sprite`,Er===void 0){Er=new mr;let e=new hr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute(`position`,new vr(e,3,0,!1)),Er.setAttribute(`uv`,new vr(e,2,3,!1))}this.geometry=Er,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Or.setFromMatrixScale(this.matrixWorld),Mr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-kr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Br(Nr.set(-.5,-.5,0),kr,a,Or,r,i),Br(Pr.set(.5,-.5,0),kr,a,Or,r,i),Br(Fr.set(.5,.5,0),kr,a,Or,r,i),Ir.set(0,0),Lr.set(1,0),Rr.set(1,1);let o=e.ray.intersectTriangle(Nr,Pr,Fr,!1,Dr);if(o===null&&(Br(Pr.set(-.5,.5,0),kr,a,Or,r,i),Lr.set(0,1),o=e.ray.intersectTriangle(Nr,Fr,Pr,!1,Dr),o===null))return;let s=e.ray.origin.distanceTo(Dr);s<e.near||s>e.far||t.push({distance:s,point:Dr.clone(),uv:Pn.getInterpolation(Dr,Nr,Pr,Fr,Ir,Lr,Rr,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Br(e,t,n,r,i,a){Ar.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?jr.copy(Ar):(jr.x=a*Ar.x-i*Ar.y,jr.y=i*Ar.x+a*Ar.y),e.copy(t),e.x+=jr.x,e.y+=jr.y,e.applyMatrix4(Mr)}var Vr=new H,Hr=new H,Ur=new H,Wr=new H,Gr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Hr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Wr.dot(this.direction),s=-Wr.dot(Ur),c=Wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hr).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=ee-N*M,se=j-te*M,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=P*(ce*D+F*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qr=new Lt,Jr=new Gr,Yr=new or,Xr=new H,Zr=new H,Qr=new H,$r=new H,ei=new H,ti=new H,ni=new H,ri=new H,G=class extends dn{constructor(e=new mr,t=new Kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ei.fromBufferAttribute(s,e),a?ti.addScaledVector(ei,r):ti.addScaledVector(ei.sub(t),r))}t.add(ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Jr.copy(e.ray).recast(e.near),Yr.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yr,Xr)===null||Jr.origin.distanceToSquared(Xr)>(e.far-e.near)**2)||(qr.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(qr),(n.boundingBox===null||Jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ai(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ai(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ai(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ai(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ii(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ri.copy(s),ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ri);return l<n.near||l>n.far?null:{distance:l,point:ri.clone(),object:e}}function ai(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zr),e.getVertexPosition(c,Qr),e.getVertexPosition(l,$r);let u=ii(e,t,n,r,Zr,Qr,$r,ni);if(u){let e=new H;Pn.getBarycoord(ni,Zr,Qr,$r,e),i&&(u.uv=Pn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Pn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Pn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Pn.getNormal(Zr,Qr,$r,t.normal),u.face=t,u.barycoord=e}return u}var oi=class extends jt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},si=class extends $n{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ci=new Lt,li=new Lt,ui=[],di=new Fn,fi=new Lt,pi=new G,mi=new or,hi=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,fi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),di.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),mi.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(mi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(pi.geometry=this.geometry,pi.material=this.material,pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mi.copy(this.boundingSphere),mi.applyMatrix4(n),e.ray.intersectsSphere(mi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ci),li.multiplyMatrices(n,ci),pi.matrixWorld=li,pi.raycast(e,ui);for(let e=0,n=ui.length;e<n;e++){let n=ui[e];n.instanceId=i,n.object=this,t.push(n)}ui.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gi=new or,_i=new V(.5,.5),vi=new H,yi=class{constructor(e=new Sr,t=new Sr,n=new Sr,r=new Sr,i=new Sr,a=new Sr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476+_i.distanceTo(e.center),gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vi.x=r.normal.x>0?e.max.x:e.min.x,vi.y=r.normal.y>0?e.max.y:e.min.y,vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bi=new Lt,xi=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];bi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new yi),n[e].setFromProjectionMatrix(bi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new yi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Si=class extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ci=new H,wi=new H,Ti=new Lt,Ei=new Gr,Di=new or,Oi=new H,ki=new H,Ai=class extends dn{constructor(e=new mr,t=new Si){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ci.fromBufferAttribute(t,e-1),wi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ci.distanceTo(wi);e.setAttribute(`lineDistance`,new nr(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=i,e.ray.intersectsSphere(Di)===!1)return;Ti.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Ti);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ji(this,e,Ei,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ji(this,e,Ei,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ji(this,e,Ei,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ji(this,e,Ei,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ji(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ci.fromBufferAttribute(s,i),wi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ci,wi,Oi,ki)>r)return;Oi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Oi);if(!(c<t.near||c>t.far))return{distance:c,point:ki.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Mi=new H,Ni=new H,Pi=class extends Ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Mi.fromBufferAttribute(t,e),Ni.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Mi.distanceTo(Ni);e.setAttribute(`lineDistance`,new nr(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Fi=class extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ii=new Lt,Li=new Gr,Ri=new or,zi=new H,Bi=class extends dn{constructor(e=new mr,t=new Fi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ri.copy(n.boundingSphere),Ri.applyMatrix4(r),Ri.radius+=i,e.ray.intersectsSphere(Ri)===!1)return;Ii.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Ii);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);zi.fromBufferAttribute(l,n),Vi(zi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)zi.fromBufferAttribute(l,a),Vi(zi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Vi(e,t,n,r,i,a,o){let s=Li.distanceSqToPoint(e);if(s<n){let n=new H;Li.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hi=class extends jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wi=class extends jt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gi=class extends Wi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ki=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},K=class e extends mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},qi=class e extends mr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new nr(o,3)),this.setAttribute(`normal`,new nr(s,3)),this.setAttribute(`uv`,new nr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ji=class e extends mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new nr(a,3)),this.setAttribute(`normal`,new nr(o,3)),this.setAttribute(`uv`,new nr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yi=class e extends mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new nr(u,3)),this.setAttribute(`normal`,new nr(d,3)),this.setAttribute(`uv`,new nr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class e extends Yi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class e extends mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new nr(i,3)),this.setAttribute(`normal`,new nr(i.slice(),3)),this.setAttribute(`uv`,new nr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Qi=class e extends Zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},$i=new H,ea=new H,ta=new H,na=new Pn,ra=class extends mr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(rt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=na;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),na.getNormal(ta),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=na[c[e]],o=na[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(ta.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:ta.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;$i.fromBufferAttribute(a,t),ea.fromBufferAttribute(a,n),d.push($i.x,$i.y,$i.z),d.push(ea.x,ea.y,ea.z)}this.setAttribute(`position`,new nr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ia=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new Lt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ot(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ot(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},aa=class extends ia{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oa=class extends aa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function sa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ca=new H,la=new H,ua=new sa,da=new sa,fa=new sa,pa=class extends ia{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(la.subVectors(r[0],r[1]).add(r[0]),c=la);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ca.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ca),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ua.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),da.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),fa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ua.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),da.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),fa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ua.calc(s),da.calc(s),fa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ma(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ha(e,t){let n=1-e;return n*n*t}function ga(e,t){return 2*(1-e)*e*t}function _a(e,t){return e*e*t}function va(e,t,n,r){return ha(e,t)+ga(e,n)+_a(e,r)}function ya(e,t){let n=1-e;return n*n*n*t}function ba(e,t){let n=1-e;return 3*n*n*e*t}function xa(e,t){return 3*(1-e)*e*e*t}function Sa(e,t){return e*e*e*t}function Ca(e,t,n,r,i){return ya(e,t)+ba(e,n)+xa(e,r)+Sa(e,i)}var wa=class extends ia{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ca(e,r.x,i.x,a.x,o.x),Ca(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends ia{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ca(e,r.x,i.x,a.x,o.x),Ca(e,r.y,i.y,a.y,o.y),Ca(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends ia{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends ia{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends ia{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(va(e,r.x,i.x,a.x),va(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends ia{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(va(e,r.x,i.x,a.x),va(e,r.y,i.y,a.y),va(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends ia{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ma(o,s.x,c.x,l.x,u.x),ma(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},ja=Object.freeze({__proto__:null,ArcCurve:oa,CatmullRomCurve3:pa,CubicBezierCurve:wa,CubicBezierCurve3:Ta,EllipseCurve:aa,LineCurve:Ea,LineCurve3:Da,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:ka,SplineCurve:Aa}),Ma=class extends ia{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ja[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Na=class extends Ma{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ea(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Oa(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new wa(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Aa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new aa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pa=class extends Na{constructor(e){super(e),this.uuid=at(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Na().fromJSON(n))}return this}};function Fa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ia(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ua(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ra(a,o,n,s,c,l,0),o}function Ia(e,t,n,r,i){let a;if(i===mo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=uo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=uo(i/r|0,e[i],e[i+1],a);return a&&no(a,a.next)&&(fo(a),a=a.next),a}function La(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(no(n,n.next)||to(n.prev,n,n.next)===0)){if(fo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ra(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ja(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ba(e,r,i,a):za(e))t.push(c.i,e.i,l.i),fo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Va(La(e),t),Ra(e,t,n,r,i,a,2)):o===2&&Ha(e,t,n,r,i,a):Ra(La(e),t,n,r,i,a,1);break}}}function za(e){let t=e.prev,n=e,r=e.next;if(to(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&$a(i,s,a,c,o,l,m.x,m.y)&&to(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ba(e,t,n,r){let i=e.prev,a=e,o=e.next;if(to(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Xa(p,m,t,n,r),v=Xa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&$a(s,u,c,d,l,f,y.x,y.y)&&to(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&$a(s,u,c,d,l,f,b.x,b.y)&&to(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&$a(s,u,c,d,l,f,y.x,y.y)&&to(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&$a(s,u,c,d,l,f,b.x,b.y)&&to(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Va(e,t){let n=e;do{let r=n.prev,i=n.next.next;!no(r,i)&&ro(r,n,n.next,i)&&so(r,i)&&so(i,r)&&(t.push(r.i,n.i,i.i),fo(n),fo(n.next),n=e=i),n=n.next}while(n!==e);return La(n)}function Ha(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&eo(o,e)){let s=lo(o,e);o=La(o,o.next),s=La(s,s.next),Ra(o,t,n,r,i,a,0),Ra(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ua(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ia(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Za(o))}i.sort(Wa);for(let e=0;e<i.length;e++)n=Ga(i[e],n);return n}function Wa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ga(e,t){let n=Ka(e,t);if(!n)return t;let r=lo(n,e);return La(r,r.next),La(n,n.next)}function Ka(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(no(e,n))return n;do{if(no(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Qa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);so(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&qa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function qa(e,t){return to(e.prev,e,t.prev)<0&&to(t.next,e,e.next)<0}function Ja(e,t,n,r){let i=e;do i.z===0&&(i.z=Xa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ya(i)}function Ya(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Xa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Za(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Qa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function $a(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Qa(e,t,n,r,i,a,o,s)}function eo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!oo(e,t)&&(so(e,t)&&so(t,e)&&co(e,t)&&(to(e.prev,e,t.prev)||to(e,t.prev,t))||no(e,t)&&to(e.prev,e,e.next)>0&&to(t.prev,t,t.next)>0)}function to(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function no(e,t){return e.x===t.x&&e.y===t.y}function ro(e,t,n,r){let i=ao(to(e,t,n)),a=ao(to(e,t,r)),o=ao(to(n,r,e)),s=ao(to(n,r,t));return!!(i!==a&&o!==s||i===0&&io(e,n,t)||a===0&&io(e,r,t)||o===0&&io(n,e,r)||s===0&&io(n,t,r))}function io(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ao(e){return e>0?1:e<0?-1:0}function oo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ro(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function so(e,t){return to(e.prev,e,e.next)<0?to(e,t,e.next)>=0&&to(e,e.prev,t)>=0:to(e,t,e.prev)<0||to(e,e.next,t)<0}function co(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function lo(e,t){let n=po(e.i,e.x,e.y),r=po(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function uo(e,t,n,r){let i=po(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function fo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function po(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ho=class{static triangulate(e,t,n=2){return Fa(e,t,n)}},go=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];_o(e),vo(n,e);let a=e.length;t.forEach(_o);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,vo(n,t[e]);let o=ho.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function _o(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function vo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var yo=class e extends mr{constructor(e=new Pa([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new nr(r,3)),this.setAttribute(`uv`,new nr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?bo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!go.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];go.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],M,N=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);j.push(M),N=N.concat(M)}let te;if(p===0)te=go.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=go.triangulateShape(e,t)}let P=te.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=te[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=te[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=te[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=te[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ja[i.type]().fromJSON(i)),new e(r,t.options)}},bo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function xo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var So=class e extends Zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Co=class e extends Zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wo=class e extends mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},To=class e extends mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Eo=class e extends mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Do=class e extends mr{constructor(e=new ka(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,s=new H,c=new V,l=new H,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new nr(u,3)),this.setAttribute(`normal`,new nr(d,3)),this.setAttribute(`uv`,new nr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ja[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Oo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ao(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ao(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ko(e){let t={};for(let n=0;n<e.length;n++){let r=Oo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ao(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function jo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Mo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}var No={clone:Oo,merge:ko},Po=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Io=class extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Po,this.fragmentShader=Fo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=jo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new gt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lo=class extends Io{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ro=class extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends Ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Bo=class extends wr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Vo=class extends wr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ho=class extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Go(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ko=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},qo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ie:i=e,o=2*t-n;break;case L:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ie:a=e,s=2*n-t;break;case L:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Jo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Yo=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xo=class extends Ko{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=$o(n,t,g,y,r);i[p]=Zo(x,o,_,b,m)}return i}};function Zo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Qo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function $o(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Zo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Qo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var es=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Go(e.settings)&&(n.settings={inTangents:Wo(e.settings.inTangents,Array),outTangents:Wo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case I:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return I;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Go(this.settings)&&(ts(this.settings.inTangents,e),ts(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Go(this.settings)&&(ns(this.settings.inTangents,e),ns(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===I,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Go(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ts(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function ns(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}es.prototype.ValueTypeName=``,es.prototype.TimeBufferType=Float32Array,es.prototype.ValueBufferType=Float32Array,es.prototype.DefaultInterpolation=Ne;var rs=class extends es{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName=`bool`,rs.prototype.ValueBufferType=Array,rs.prototype.DefaultInterpolation=Me,rs.prototype.InterpolantFactoryMethodLinear=void 0,rs.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};is.prototype.ValueTypeName=`color`;var as=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`number`;var os=class extends Ko{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ss=class extends es{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new os(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName=`quaternion`,ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends es{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName=`string`,cs.prototype.ValueBufferType=Array,cs.prototype.DefaultInterpolation=Me,cs.prototype.InterpolantFactoryMethodLinear=void 0,cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends es{constructor(e,t,n,r){super(e,t,n,r)}};ls.prototype.ValueTypeName=`vector`;var us=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ds=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fs=new Lt,ps=new H,ms=new H,hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ps.setFromMatrixPosition(e.matrixWorld),t.position.copy(ps),ms.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ms),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gs=new H,_s=new pt,vs=new H,ys=class extends dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gs,_s,vs),vs.x===1&&vs.y===1&&vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,vs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gs,_s,vs),vs.x===1&&vs.y===1&&vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,vs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bs=new H,xs=new V,Ss=new V,Cs=class extends ys{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=it*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return it*2*Math.atan(Math.tan(rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,xs,Ss),t.subVectors(Ss,xs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=class extends hs{constructor(){super(new Cs(90,1,.5,500)),this.isPointLightShadow=!0}},Ts=class extends us{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ws}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends ys{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=class extends hs{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ds}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ks=-90,As=1,js=class extends dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Cs(ks,As,e,t);r.layers=this.layers,this.add(r);let i=new Cs(ks,As,e,t);i.layers=this.layers,this.add(i);let a=new Cs(ks,As,e,t);a.layers=this.layers,this.add(a);let o=new Cs(ks,As,e,t);o.layers=this.layers,this.add(o);let s=new Cs(ks,As,e,t);s.layers=this.layers,this.add(s);let c=new Cs(ks,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ms=class extends Cs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ns=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ps.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ps(){this._document.hidden===!1&&this.reset()}var Fs=`\\[\\]\\.:\\/`,Is=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ls=`[^\\[\\]\\.:\\/]`,Rs=`[^`+Fs.replace(`\\.`,``)+`]`,zs=`((?:WC+[\\/:])*)`.replace(`WC`,Ls),Bs=`(WCOD+)?`.replace(`WCOD`,Rs),Vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ls),Hs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ls),Us=RegExp(`^`+zs+Bs+Vs+Hs+`$`),Ws=[`material`,`materials`,`bones`,`map`],Gs=class{constructor(e,t,n){let r=n||Ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Is,``)}static parseTrackName(e){let t=Us.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ws.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ks.Composite=Gs,Ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ks.prototype.GetterByBindingType=[Ks.prototype._getValue_direct,Ks.prototype._getValue_array,Ks.prototype._getValue_arrayElement,Ks.prototype._getValue_toArray],Ks.prototype.SetterByBindingTypeAndVersioning=[[Ks.prototype._setValue_direct,Ks.prototype._setValue_direct_setNeedsUpdate,Ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_array,Ks.prototype._setValue_array_setNeedsUpdate,Ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_arrayElement,Ks.prototype._setValue_arrayElement_setNeedsUpdate,Ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_fromArray,Ks.prototype._setValue_fromArray_setNeedsUpdate,Ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qs=new Lt,Js=class{constructor(e,t,n=0,r=1/0){this.ray=new Gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Jt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return qs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qs),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(Ys),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Xs(e[r],this,n,t);return n.sort(Ys),n}};function Ys(e,t){return e.distance-t.distance}function Xs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Xs(r[e],t,n,!0)}}var Zs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,z(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Qs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=ot(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var $s=class extends Pi{constructor(e=10,t=10,n=4473924,r=8947848){n=new W(n),r=new W(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new mr;l.setAttribute(`position`,new nr(s,3)),l.setAttribute(`color`,new nr(c,3));let u=new Si({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ec(e,t,n,r){let i=tc(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function tc(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function nc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ic={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ac={basic:{uniforms:ko([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:ic.meshbasic_vert,fragmentShader:ic.meshbasic_frag},lambert:{uniforms:ko([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:ic.meshlambert_vert,fragmentShader:ic.meshlambert_frag},phong:{uniforms:ko([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ic.meshphong_vert,fragmentShader:ic.meshphong_frag},standard:{uniforms:ko([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag},toon:{uniforms:ko([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new W(0)}}]),vertexShader:ic.meshtoon_vert,fragmentShader:ic.meshtoon_frag},matcap:{uniforms:ko([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:ic.meshmatcap_vert,fragmentShader:ic.meshmatcap_frag},points:{uniforms:ko([q.points,q.fog]),vertexShader:ic.points_vert,fragmentShader:ic.points_frag},dashed:{uniforms:ko([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ic.linedashed_vert,fragmentShader:ic.linedashed_frag},depth:{uniforms:ko([q.common,q.displacementmap]),vertexShader:ic.depth_vert,fragmentShader:ic.depth_frag},normal:{uniforms:ko([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:ic.meshnormal_vert,fragmentShader:ic.meshnormal_frag},sprite:{uniforms:ko([q.sprite,q.fog]),vertexShader:ic.sprite_vert,fragmentShader:ic.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ic.background_vert,fragmentShader:ic.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:ic.backgroundCube_vert,fragmentShader:ic.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ic.cube_vert,fragmentShader:ic.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ic.equirect_vert,fragmentShader:ic.equirect_frag},distance:{uniforms:ko([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ic.distance_vert,fragmentShader:ic.distance_frag},shadow:{uniforms:ko([q.lights,q.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:ic.shadow_vert,fragmentShader:ic.shadow_frag}};ac.physical={uniforms:ko([ac.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag};var oc={r:0,b:0,g:0},sc=new Lt,cc=new gt;cc.set(-1,0,0,0,1,0,0,0,1);function lc(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new G(new K(1,1,1),new Io({name:`BackgroundCubeMaterial`,uniforms:Oo(ac.backgroundCube.uniforms),vertexShader:ac.backgroundCube.vertexShader,fragmentShader:ac.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cc),l.material.toneMapped=xt.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new wo(2,2),new Io({name:`BackgroundMaterial`,uniforms:Oo(ac.background.uniforms),vertexShader:ac.background.vertexShader,fragmentShader:ac.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=xt.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oc,Mo(e)),n.buffers.color.setClear(oc.r,oc.g,oc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function uc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&z(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Sr,s=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mc=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new K(5,5,5),i=new Io({name:`CubemapFromEquirect`,uniforms:Oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new js(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},hc=256,gc=3,_c=20,vc=256,yc=16,bc=3,xc=new H,Sc=new W,Cc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new G(new K(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Sc));let h=new js(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hc,lt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?hc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wc(e,!1,!1),n=Math.log2(e)-gc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ec(),this._integrationMaterial=Dc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/yc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-bc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(vc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Oc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function wc(e,t,n){return new mc(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:R,depthBuffer:n})}function Tc(e,t,n){return new Io({name:e,uniforms:t,vertexShader:ic.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ec(){return Tc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dc(){return Tc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Oc(){return Tc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_c}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kc(){return Tc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ac(){return Tc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new mc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Nc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?tr:er)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Pc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ic(e,t,n){let r=new WeakMap,i=new Mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Ft(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zc(e,t,n,r,i,a){let o=new Pt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new mr;u.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new nr([0,2,0,0,2,0],2));let d=new Lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new G(u,d),p=new Es(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Pt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Pt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Wi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},xt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Rc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Bc=new jt,Vc=new Wi(1,1),Hc=new Gi(1),Uc=new Ft,Wc=new It,Gc=new Hi,Kc=[],qc=[],Jc=new Float32Array(16),Yc=new Float32Array(9),Xc=new Float32Array(4);function Zc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Kc[i];if(a===void 0&&(a=new Float32Array(i),Kc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $c(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function el(e,t){let n=qc[t];n===void 0&&(n=new Int32Array(t),qc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2fv(this.addr,t),$c(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qc(n,t))return;e.uniform3fv(this.addr,t),$c(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4fv(this.addr,t),$c(n,t)}}function al(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Xc.set(r),e.uniformMatrix2fv(this.addr,!1,Xc),$c(n,r)}}function ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Yc.set(r),e.uniformMatrix3fv(this.addr,!1,Yc),$c(n,r)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Jc.set(r),e.uniformMatrix4fv(this.addr,!1,Jc),$c(n,r)}}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2iv(this.addr,t),$c(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3iv(this.addr,t),$c(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4iv(this.addr,t),$c(n,t)}}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2uiv(this.addr,t),$c(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3uiv(this.addr,t),$c(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4uiv(this.addr,t),$c(n,t)}}function gl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function _l(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?gl(Vc):Bc,n.setTexture2D(t||a,i)}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wc,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?gl(Hc):Gc,n.setTextureCube(t||a,i)}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Uc,i)}function xl(e){switch(e){case 5126:return tl;case 35664:return nl;case 35665:return rl;case 35666:return il;case 35674:return al;case 35675:return ol;case 35676:return sl;case 5124:case 35670:return cl;case 35667:case 35671:return ll;case 35668:case 35672:return ul;case 35669:case 35673:return dl;case 5125:return fl;case 36294:return pl;case 36295:return ml;case 36296:return hl;case 35678:case 36198:case 36298:case 36306:case 35682:return _l;case 35679:case 36299:case 36307:return vl;case 35680:case 36300:case 36308:case 36293:return yl;case 36289:case 36303:case 36311:case 36292:return bl}}function Sl(e,t){e.uniform1fv(this.addr,t)}function Cl(e,t){let n=Zc(t,this.size,2);e.uniform2fv(this.addr,n)}function wl(e,t){let n=Zc(t,this.size,3);e.uniform3fv(this.addr,n)}function Tl(e,t){let n=Zc(t,this.size,4);e.uniform4fv(this.addr,n)}function El(e,t){let n=Zc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dl(e,t){let n=Zc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ol(e,t){let n=Zc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kl(e,t){e.uniform1iv(this.addr,t)}function Al(e,t){e.uniform2iv(this.addr,t)}function jl(e,t){e.uniform3iv(this.addr,t)}function Ml(e,t){e.uniform4iv(this.addr,t)}function Nl(e,t){e.uniform1uiv(this.addr,t)}function Pl(e,t){e.uniform2uiv(this.addr,t)}function Fl(e,t){e.uniform3uiv(this.addr,t)}function Il(e,t){e.uniform4uiv(this.addr,t)}function Ll(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gl(Vc):Bc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wc,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?gl(Hc):Gc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Bl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Uc,a[e])}function Vl(e){switch(e){case 5126:return Sl;case 35664:return Cl;case 35665:return wl;case 35666:return Tl;case 35674:return El;case 35675:return Dl;case 35676:return Ol;case 5124:case 35670:return kl;case 35667:case 35671:return Al;case 35668:case 35672:return jl;case 35669:case 35673:return Ml;case 5125:return Nl;case 36294:return Pl;case 36295:return Fl;case 36296:return Il;case 35678:case 36198:case 36298:case 36306:case 35682:return Ll;case 35679:case 36299:case 36307:return Rl;case 35680:case 36300:case 36308:case 36293:return zl;case 36289:case 36303:case 36311:case 36292:return Bl}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xl(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vl(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function Kl(e,t){e.seq.push(t),e.map[t.id]=t}function ql(e,t,n){let r=e.name,i=r.length;for(Gl.lastIndex=0;;){let a=Gl.exec(r),o=Gl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Kl(n,l===void 0?new Hl(s,e,t):new Ul(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wl(s),Kl(n,e)),n=e}}}var Jl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ql(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Yl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xl=37297,Zl=0;function Ql(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $l=new gt;function eu(e){xt._getMatrix($l,xt.workingColorSpace,e);let t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(xt.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ql(e.getShaderSource(t),r)}return i}function nu(e,t){let n=eu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ru={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function iu(e,t){let n=ru[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var au=new H;function ou(){return xt.getLuminanceCoefficients(au),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${au.x.toFixed(4)}, ${au.y.toFixed(4)}, ${au.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function su(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(uu).join(`
`)}function cu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function uu(e){return e!==``}function du(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pu=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(e){return e.replace(pu,hu)}function hu(e,t){let n=ic[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return mu(n)}var gu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(e){return e.replace(gu,vu)}function vu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xu(e){return bu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Su={302:`ENVMAP_MODE_REFRACTION`};function Cu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Su[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wu[e.combine]||`ENVMAP_BLENDING_NONE`}function Eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Cu(n),d=Tu(n),f=su(n),p=cu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uu).join(`
`),g.length>0&&(g+=`
`)):(h=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(uu).join(`
`),g=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ic.tonemapping_pars_fragment,n.toneMapping===0?``:iu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ic.colorspace_pars_fragment,nu(`linearToOutputTexel`,n.outputColorSpace),ou(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(uu).join(`
`)),o=mu(o),o=du(o,n),o=fu(o,n),s=mu(s),s=du(s,n),s=fu(s,n),o=_u(o),s=_u(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Yl(i,i.VERTEX_SHADER,v),x=Yl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=tu(i,b,`vertex`),n=tu(i,x,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Jl(i,m),w=lu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Xl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Du=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=Du++,this.code=e,this.usedTimes=0}};function Au(e){return e===1030||e===37490||e===36285}function ju(e,t,n,r,i,a){let o=new Jt,s=new Ou,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ac[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,te=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.diffuseRoughness>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=ue&&!!i.anisotropyMap,ye=de&&!!i.clearcoatMap,be=de&&!!i.clearcoatNormalMap,xe=de&&!!i.clearcoatRoughnessMap,Se=fe&&!!i.diffuseRoughnessMap,Ce=he&&!!i.iridescenceMap,we=he&&!!i.iridescenceThicknessMap,Te=ge&&!!i.sheenColorMap,Ee=ge&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=_e&&!!i.transmissionMap,je=_e&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,I=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let L=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:te,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?L.length-1:null,envMapSize:ne?L[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Au(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:ve,clearcoat:de,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:fe,diffuseRoughnessMap:Se,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:_e,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:I,alphaHash:Pe,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:le&&p(i.roughnessMap.channel),anisotropyMapUv:ve&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ce&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(i.sheenRoughnessMap.channel),specularMapUv:De&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:ke&&p(i.specularIntensityMap.channel),transmissionMapUv:Ae&&p(i.transmissionMap.channel),thicknessMapUv:je&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||ue),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&xt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&xt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ac[t];n=No.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Mu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nu),r.length>1&&r.sort(t||Pu),i.length>1&&i.sort(t||Pu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Iu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fu,e.set(t,[i])):n>=r.length?(i=new Fu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zu=0;function Bu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vu(e){let t=new Lu,n=Ru(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Lt,o=new Lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hu(e){let t=new Vu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Uu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hu(e),t.set(n,[a])):r>=i.length?(a=new Hu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ku=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],qu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ju=new Lt,Yu=new H,Xu=new H;function Zu(e,t,n){let i=new yi,a=new V,s=new V,c=new Mt,l=new Ho,u=new Uo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Io({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Wu,fragmentShader:Gu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new mr;y.setAttribute(`position`,new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Pt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Wi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new mc(a.x),p.map.depthTexture=new Gi(a.x,m)):(p.map=new Pt(a.x,a.y),p.map.depthTexture=new Wi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Yu),Xu.copy(e.position),Xu.add(Ku[t]),e.up.copy(qu[t]),e.lookAt(Xu),e.updateMatrixWorld(),n.makeTranslation(-Yu.x,-Yu.y,-Yu.z),Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Pt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qu(e,t){function n(){let t=!1,n=new Mt,r=null,i=new Mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Mt().fromArray(re),oe=new Mt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function L(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Re(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function R(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:I,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Ie,viewport:L,reset:R}}function $u(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function O(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:xt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function M(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function N(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,ne),P(e),se(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),P(e),F(e)}function oe(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}C.clear(),b.clear()}function se(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ce(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ce(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function F(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ie(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(e,t){let n=f.get(e);if(e.isVideoTexture&&Le(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ge(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ee(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function _e(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ee(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ve(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?De(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ye={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},be={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},xe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Se(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ye[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ye[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ye[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,be[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,be[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,xe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function Ce(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne),te(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=me(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ce(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=we(r.start,t.width,4),c=we(n.start,t.width,4);r.start<=o+1&&s===c&&we(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ee(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Ce(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=xt.getPrimaries(xt.workingColorSpace),n=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Re(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Se(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=N(t,e);if(t.isDepthTexture)u=M(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Te(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ec(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ec(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=R(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=R(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function De(e,t,n){if(t.image.length!==6)return;let r=Ce(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=xt.getPrimaries(xt.workingColorSpace),o=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Re(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=N(t,h);Se(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=M(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=R(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Oe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),L(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ie(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=M(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;L(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ie(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ie(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);L(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ie(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ie(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ae(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ve(t.depthTexture,0):he(t.depthTexture,0);let o=i.__webglTexture,s=Ie(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)L(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)L(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ae(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Ae(t.__webglFramebuffer[0],e,0):Ae(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),ke(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),ke(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Me(e,t,n){let r=f.get(e);t!==void 0&&Oe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&je(e)}function Ne(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,re),te(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&L(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ie(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),ke(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Se(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Oe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Oe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Se(o,r),Oe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Se(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Oe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Oe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&je(e)}function I(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Pe=[];function Fe(e){if(e.samples>0){if(L(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Pe.length=0,Pe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Pe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Pe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ie(e){return Math.min(p.maxSamples,e.samples)}function L(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Le(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(xt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=L,this.dispose=oe}function ed(e,t){function n(n,r=``){let i,a=xt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var td=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Io({vertexShader:td,fragmentShader:nd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new rd,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=null,ee=new Cs;ee.viewport=new Mt;let j=new Cs;j.viewport=new Mt;let M=[ee,j],N=new Ms,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Wi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Pt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=ee.near=t,N.far=j.far=ee.far=n,(te!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,P=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ae(N,i);for(let e=0;e<a.length;e++)ae(a[e],i);N.projectionMatrix.copy(ee.projectionMatrix),N.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,N,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=it*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new Cs,o.layers.enable(n),o.viewport=new Mt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ki,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let F=new nc;F.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},ad=new Lt,od=new gt;od.set(-1,0,0,0,1,0,0,0,1);function sd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Mo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ad.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ld=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ud=null;function dd(){return ud===null&&(ud=new oi(ld,16,16,k,g),ud.name=`DFG_LUT`,ud.minFilter=o,ud.magFilter=o,ud.wrapS=t,ud.wrapT=t,ud.generateMipmaps=!1,ud.needsUpdate=!0),ud}var fd=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,M=[],N=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Re;let se=0,ce=0,F=null,le=-1,ue=null,de=new Mt,fe=new Mt,pe=null,me=new W(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Mt(0,0,ge,_e),Se=new Mt(0,0,ge,_e),Ce=!1,we=new yi,Te=new xi,Ee=!1,De=!1,Oe=new Lt,ke=new H,Ae=new Mt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return F===null?ve:1}let I=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,L,Le,R,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),I===null){let t=`webgl2`;if(I=Pe(t,e),I===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),B(`WebGLRenderer: `+e.message),e}function st(){Fe=new Mc(I),Fe.init(),it=new ed(I,Fe),Ie=new fc(I,Fe,e,it),L=new Qu(I,Fe),Ie.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Le=new Fc(I),R=new Mu,ze=new $u(I,Fe,L,R,Ie,it,Le),Be=new jc(P),Ve=new rc(I),at=new uc(I,Ve),He=new Nc(I,Ve,Le,at),Ue=new Lc(I,He,Ve,at,Le),tt=new Ic(I,Ie,ze),Ze=new pc(R),Ge=new ju(P,Be,Fe,Ie,at,Ze),Ke=new sd(P,R),qe=new Iu,Ye=new Uu(Fe),et=new lc(P,Be,L,Ue,x,s),Qe=new Zu(P,Ue,Ie),ot=new cd(I,Le,Ie,L),nt=new dc(I,Fe,Le),rt=new Pc(I,Fe,Le),Le.programs=Ge.programs,P.capabilities=Ie,P.extensions=Fe,P.properties=R,P.renderLists=qe,P.shadowMap=Qe,P.state=L,P.info=Le}S!==1009&&(te=new zc(S,t.width,t.height,o,r,i));let ct=new id(P,I);this.xr=ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){ct.isPresenting?z(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(Ne()).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(Ne()).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et.dispose(),qe.dispose(),Ye.dispose(),ze.dispose(),R.dispose(),Be.dispose(),Ue.dispose(),He.dispose(),at.dispose(),ot.dispose(),Ge.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,_t),ct.removeEventListener(`sessionend`,vt),yt.stop()};function lt(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){Xe(`WebGLRenderer: Context Restored.`),ne=!1;let e=Le.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;st(),Le.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function dt(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),V(t)}function V(e){pt(e),R.remove(e)}function pt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Ee===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),j=Ye.get(n),j.init(t),N.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),re!==null&&re.updateLights(j.state.lightsArray),De=this.localClippingEnabled,Ee=Ze.init(this.clippingPlanes,De),Ee===!0&&Ze.setGlobalState(this.clippingPlanes,t),re!==null&&Qe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=N.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new nc;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,ct.setAnimationLoop(e),e===null?yt.stop():yt.start()},ct.addEventListener(`sessionstart`,_t),ct.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),j=Ye.get(e,N.length),j.init(t),j.state.textureUnits=ze.getTextureUnits(),N.push(j),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Te.setFromArrayCamera(t):we.setFromProjectionMatrix(Oe,We,t.reversedDepth),De=this.localClippingEnabled,Ee=Ze.init(this.clippingPlanes,De),k=qe.get(e,M.length),k.init(),M.push(k),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,P.sortObjects)}bt(e,t,0,P.sortObjects),k.finish(),re!==null&&re.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(ye,be),Me=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Me&&et.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ze.beginShadows();let i=j.state.shadowsArray;if(Qe.render(i,e,t),Ee===!0&&Ze.endShadows(),(r&&te.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Me&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(k,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Me&&et.render(e),St(k,e,t)}F!==null&&ce===0&&(ze.updateMultisampleRenderTarget(F),ze.updateRenderTargetMipmap(F)),r&&te.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),at.resetDefaultState(),le=-1,ue=null,N.pop(),N.length>0?(j=N[N.length-1],ze.setTextureUnits(j.state.textureUnits),Ee===!0&&Ze.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,re!==null&&re.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Te:we;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ee===!0&&Ze.setGlobalState(P.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Pt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(me),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),Me&&et.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ee===!0&&Ze.setGlobalState(P.clippingPlanes,r),wt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(me,he),p!==void 0&&(r.viewport=p),P.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=je);let r=R.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ge.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),At(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:xt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=j.state.lights;if(Ee===!0&&(De===!0||e!==ue)){let t=e===ue&&r.id===le;Ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==le&&(le=r.id,w=!0),C||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,ze),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,ze),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,ze));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&tt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=dd()),w){if(E.setValue(I,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&Nt(O,T),a&&r.fog===!0&&Ke.refreshFogUniforms(O,a),Ke.refreshMaterialUniforms(O,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Jl.upload(I,kt(v),O,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jl.upload(I,kt(v),O,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,S),ot.bind(n,S)}}return S}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function It(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $e(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function pd(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function md(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var hd={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},gd={duration:.5,overwrite:!1,delay:0},_d,vd,yd,bd=1e8,xd=1/bd,Sd=Math.PI*2,Cd=Sd/4,wd=0,Td=Math.sqrt,Ed=Math.cos,Dd=Math.sin,Od=function(e){return typeof e==`string`},kd=function(e){return typeof e==`function`},Ad=function(e){return typeof e==`number`},jd=function(e){return e===void 0},Md=function(e){return typeof e==`object`},Nd=function(e){return e!==!1},Pd=function(){return typeof window<`u`},Fd=function(e){return kd(e)||Od(e)},Id=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Ld=Array.isArray,Rd=/random\([^)]+\)/g,zd=/,\s*/g,Bd=/(?:-?\.?\d|\.)+/gi,Vd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hd=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ud=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wd=/[+-]=-?[.\d]+/,Gd=/[^,'"\[\]\s]+/gi,Kd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qd,Jd,Yd,Xd,Zd={},Qd={},$d,ef=function(e){return(Qd=Nf(e,Zd))&&Qm},tf=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},nf=function(e,t){return!t&&console.warn(e)},rf=function(e,t){return e&&(Zd[e]=t)&&Qd&&(Qd[e]=t)||Zd},af=function(){return 0},of={suppressEvents:!0,isStart:!0,kill:!1},sf={suppressEvents:!0,kill:!1},cf={suppressEvents:!0},lf={},uf=[],df={},ff,pf={},mf={},hf=30,gf=[],_f=``,vf=function(e){var t=e[0],n,r;if(Md(t)||kd(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=gf.length;r--&&!gf[r].targetTest(t););n=gf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cm(e[r],n)))||e.splice(r,1);return e},yf=function(e){return e._gsap||vf(gp(e))[0]._gsap},bf=function(e,t,n){return(n=e[t])&&kd(n)?e[t]():jd(n)&&e.getAttribute&&e.getAttribute(t)||n},xf=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Sf=function(e){return Math.round(e*1e5)/1e5||0},Cf=function(e){return Math.round(e*1e7)/1e7||0},wf=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Tf=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ef=function(){var e=uf.length,t=uf.slice(0),n,r;for(df={},uf.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Df=function(e){return!!(e._initted||e._startAt||e.add)},Of=function(e,t,n,r){uf.length&&!vd&&Ef(),e.render(t,n,r||!!(vd&&t<0&&Df(e))),uf.length&&!vd&&Ef()},kf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Gd).length<2?t:Od(e)?e.trim():e},Af=function(e){return e},jf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mf=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Nf=function(e,t){for(var n in t)e[n]=t[n];return e},Pf=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Md(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Ff=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},If=function(e){var t=e.parent||qd,n=e.keyframes?Mf(Ld(e.keyframes)):jf;if(Nd(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Lf=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Rf=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},zf=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Bf=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vf=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uf=function(e,t,n,r){return e._startAt&&(vd?e._startAt.revert(sf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Wf=function e(t){return!t||t._ts&&e(t.parent)},Gf=function(e){return e._repeat?Kf(e._tTime,e=e.duration()+e._rDelay)*e:0},Kf=function(e,t){var n=Math.floor(e=Cf(e/t));return e&&n===e?n-1:n},qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jf=function(e){return e._end=Cf(e._start+(e._tDur/Math.abs(e._ts||e._rts||xd)||0))},Yf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Cf(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jf(e),n._dirty||Vf(n,e)),e},Xf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=qf(e.rawTime(),t),(!t._dur||up(0,t.totalDuration(),n)-t._tTime>xd)&&t.render(n,!0)),Vf(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xd}},Zf=function(e,t,n,r){return t.parent&&Bf(t),t._start=Cf((Ad(n)?n:n||e!==qd?sp(e,n,t):e._time)+t._delay),t._end=Cf(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rf(e,t,`_first`,`_last`,e._sort?`_start`:0),tp(t)||(e._recent=t),r||Xf(e,t),e._ts<0&&Yf(e,e._tTime),e},Qf=function(e,t){return(Zd.ScrollTrigger||tf(`scrollTrigger`,t))&&Zd.ScrollTrigger.create(t,e)},$f=function(e,t,n,r,i){if(_m(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!vd&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ff!==Jp.frame)return uf.push(e),e._lazy=[i,r],1},ep=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},tp=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},np=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ep(e)&&(e._initted||!tp(e))||(e._ts<0||e._dp._ts<0)&&!tp(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=up(0,e._tDur,t),l=Kf(s,o),e._yoyo&&l&1&&(a=1-a),l!==Kf(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||vd||r||e._zTime===xd||!t&&e._zTime){if(!e._initted&&$f(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?xd:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Uf(e,t,n,!0),e._onUpdate&&!n&&Np(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Np(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bf(e,1),!n&&!vd&&(Np(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},rp=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},ip=function(e,t,n,r){var i=e._repeat,a=Cf(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:Cf(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Yf(e,e._tTime=e._tDur*o),e.parent&&Jf(e),n||Vf(e.parent,e),e},ap=function(e){return e instanceof um?Vf(e):ip(e,e._dur)},op={_start:0,endTime:af,totalDuration:af},sp=function e(t,n,r){var i=t.labels,a=t._recent||op,o=t.duration()>=bd?a.endTime(!1):t._dur,s,c,l;return Od(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Ld(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},cp=function(e,t,n){var r=Ad(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Nd(s.vars.inherit)&&s.parent;a.immediateRender=Nd(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new wm(t[0],a,t[i+1])},lp=function(e,t){return e||e===0?t(e):t},up=function(e,t,n){return n<e?e:n>t?t:n},dp=function(e,t){return!Od(e)||!(t=Kd.exec(e))?``:t[1]},fp=function(e,t,n){return lp(n,function(n){return up(e,t,n)})},pp=[].slice,mp=function(e,t){return e&&Md(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Md(e[0]))&&!e.nodeType&&e!==Jd},hp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Od(e)&&!t||mp(e,1)?(r=n).push.apply(r,gp(e)):n.push(e)})||n},gp=function(e,t,n){return yd&&!t&&yd.selector?yd.selector(e):Od(e)&&!n&&(Yd||!Yp())?pp.call((t||Xd).querySelectorAll(e),0):Ld(e)?hp(e,n):mp(e)?pp.call(e,0):e?[e]:[]},_p=function(e){return e=gp(e)[0]||nf(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return gp(t,n.querySelectorAll?n:n===e?nf(`Invalid scope`)||Xd.createElement(`div`):e)}},vp=function(e){return e.sort(function(){return .5-Math.random()})},yp=function(e){if(kd(e))return e;var t=Md(e)?e:{each:e},n=rm(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Od(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,bd])[1],!S){for(b=-bd;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===bd?0:s?f*u/S-.5:r/S|0,b=0,x=bd,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Td(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&vp(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=dp(t.amount||t.each)||0,n=n&&f<0?nm(n):n}return f=(p[e]-p.min)/p.max||0,Cf(p.b+(n?n(f):f)*p.v)+p.u}},bp=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=Cf(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ad(n)?0:dp(n))}},xp=function(e,t){var n=Ld(e),r,i;return!n&&Md(e)&&(r=n=e.radius||bd,e.values?(e=gp(e.values),(i=!Ad(e[0]))&&(r*=r)):e=bp(e.increment)),lp(t,n?kd(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=bd,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Ad(t)?s:s+dp(t)}:bp(e))},Sp=function(e,t,n,r){return lp(Ld(e)?!t:n===!0?!!(n=0):!r,function(){return Ld(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Cp=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},wp=function(e,t){return function(n){return e(parseFloat(n))+(t||dp(n))}},Tp=function(e,t,n){return Ap(e,t,0,1,n)},Ep=function(e,t,n){return lp(n,function(n){return e[~~t(n)]})},Dp=function e(t,n,r){var i=n-t;return Ld(t)?Ep(t,e(0,t.length),n):lp(r,function(e){return(i+(e-t)%i)%i+t})},Op=function e(t,n,r){var i=n-t,a=i*2;return Ld(t)?Ep(t,e(0,t.length-1),n):lp(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},kp=function(e){return e.replace(Rd,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(zd);return Sp(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ap=function(e,t,n,r,i){var a=t-e,o=r-n;return lp(i,function(t){return n+((t-e)/a*o||0)})},jp=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Od(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Ld(t)&&!Ld(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Nf(Ld(t)?[]:{},t));if(!u){for(c in n)fm.call(s,t,c,`get`,n[c]);a=function(e){return Nm(e,s)||(o?t.p:t)}}}return lp(r,a)},Mp=function(e,t,n){var r=e.labels,i=bd,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Np=function(e,t,n){var r=e.vars,i=r[t],a=yd,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&uf.length&&Ef(),o&&(yd=o),l=s?i.apply(c,s):i.call(c),yd=a,l},Pp=function(e){return Bf(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vd),e.progress()<1&&Np(e,`onInterrupt`),e},Fp,Ip=[],Lp=function(e){if(e){if(e=!e.name&&e.default||e,Pd()||e.headless){var t=e.name,n=kd(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:af,render:Nm,add:fm,kill:Fm,modifier:Pm,rawVars:0},a={targetTest:0,get:0,getSetter:km,aliases:{},register:0};if(Yp(),e!==r){if(pf[t])return;jf(r,jf(Ff(e,i),a)),Nf(r.prototype,Nf(i,Ff(e,a))),pf[r.prop=t]=r,e.targetTest&&(gf.push(r),lf[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}rf(t,r),e.register&&e.register(Qm,r,Rm)}else Ip.push(e)}},Rp=255,zp={aqua:[0,Rp,Rp],lime:[0,Rp,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rp],navy:[0,0,128],white:[Rp,Rp,Rp],olive:[128,128,0],yellow:[Rp,Rp,0],orange:[Rp,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rp,0,0],pink:[Rp,192,203],cyan:[0,Rp,Rp],transparent:[Rp,Rp,Rp,0]},Bp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rp+.5|0},Vp=function(e,t,n){var r=e?Ad(e)?[e>>16,e>>8&Rp,e&Rp]:0:zp.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),zp[e])r=zp[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rp,r&Rp,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rp,e&Rp]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Bd),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Bp(s+1/3,i,a),r[1]=Bp(s,i,a),r[2]=Bp(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Vd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Bd)||zp.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Rp,a=r[1]/Rp,o=r[2]/Rp,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Hp=function(e){var t=[],n=[],r=-1;return e.split(Wp).forEach(function(e){var i=e.match(Hd)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Up=function(e,t,n){var r=``,i=(e+r).match(Wp),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Vp(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Hp(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Wp,`1`).split(Hd),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Wp),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Wp=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in zp)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Gp=/hsl[a]?\(/,Kp=function(e){var t=e.join(` `),n;if(Wp.lastIndex=0,Wp.test(t))return n=Gp.test(t),e[1]=Up(e[1],n),e[0]=Up(e[0],n,Hp(e[1])),!0},qp,Jp=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){$d&&(!Yd&&Pd()&&(Jd=Yd=window,Xd=Jd.document||{},Zd.gsap=Qm,(Jd.gsapVersions||(Jd.gsapVersions=[])).push(Qm.version),ef(Qd||Jd.GreenSockGlobals||!Jd.gsap&&Jd||{}),Ip.forEach(Lp)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},qp=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),qp=0,l=af},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Yp(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Yp=function(){return!qp&&Jp.wake()},Xp={},Zp=/^[\d.\-M][\d.\-,\s]/,Qp=/["']/g,$p=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Qp,``).trim():+c,r=s.substr(o+1).trim();return t},em=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},tm=function(e){var t=(e+``).split(`(`),n=Xp[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[$p(t[1])]:em(e).split(`,`).map(kf)):Xp._CE&&Zp.test(e)?Xp._CE(``,e):n},nm=function(e){return function(t){return 1-e(1-t)}},rm=function(e,t){return e&&(kd(e)?e:Xp[e]||tm(e))||t},im=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return xf(e,function(e){for(var t in Xp[e]=Zd[e]=i,Xp[a=e.toLowerCase()]=n,i)Xp[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Xp[e+`.`+t]=i[t]}),i},am=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},om=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Sd*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Dd((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:am(s);return a=Sd/a,c.config=function(n,r){return e(t,n,r)},c},sm=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:am(r);return i.config=function(n){return e(t,n)},i};xf(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;im(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Xp.Linear.easeNone=Xp.none=Xp.Linear.easeIn,im(`Elastic`,om(`in`),om(`out`),om()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};im(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),im(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),im(`Circ`,function(e){return-(Td(1-e*e)-1)}),im(`Sine`,function(e){return e===1?1:-Ed(e*Cd)+1}),im(`Back`,sm(`in`),sm(`out`),sm()),Xp.SteppedEase=Xp.steps=Zd.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-xd;return function(e){return((r*up(0,a,e)|0)+i)*n}}},gd.ease=Xp[`quad.out`],xf(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return _f+=e+`,`+e+`Params,`});var cm=function(e,t){this.id=wd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bf,this.set=t?t.getSetter:km},lm=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ip(this,+e.duration,1,1),this.data=e.data,yd&&(this._ctx=yd,yd.data.push(this)),qp||Jp.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,ip(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Yp(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Yf(this,e),!n._dp||n.parent||Xf(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Zf(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===xd||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Of(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Gf(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Gf(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Kf(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-xd?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?qf(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-xd?0:this._rts,this.totalTime(up(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Jf(this),Hf(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yp(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xd&&(this._tTime-=xd)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=Cf(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Zf(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Nd(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qf(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=cf);var t=vd;return vd=e,Df(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),vd=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ap(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ap(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(sp(this,e),Nd(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Nd(t)),this._dur||(this._zTime=-xd),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-xd:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xd,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-xd)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=kd(e)?e:Af,a=function(){var e=t.then;t.then=null,n&&n(),kd(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Pp(this)},e}();jf(lm.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xd,_prom:0,_ps:!1,_rts:1});var um=function(e){md(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Nd(t.sortChildren),qd&&Zf(t.parent||qd,pd(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Qf(pd(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return cp(0,arguments,this),this},n.from=function(e,t,n){return cp(1,arguments,this),this},n.fromTo=function(e,t,n,r){return cp(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,If(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new wm(e,t,sp(this,n),1),this},n.call=function(e,t,n){return Zf(this,wm.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new wm(e,n,sp(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,If(n).immediateRender=Nd(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,If(r).immediateRender=Nd(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:Cf(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==qd&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=Cf(o%f),o===i?(d=this._repeat,c=a):(_=Cf(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Kf(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:Cf(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Np(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=rp(this,Cf(r),Cf(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Np(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-xd);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||vd&&Df(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-xd:xd);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-xd)._zTime=c>=r?1:-1,this._ts))return this._start=g,Jf(this),this.render(e,t,n);this._onUpdate&&!t&&Np(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Bf(this,1),t||e<0&&!r||!o&&!r&&i||(Np(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Ad(t)||(t=sp(this,t,e)),!(e instanceof lm)){if(Ld(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Od(e))return this.addLabel(e,t);if(kd(e))e=wm.delayedCall(0,e);else return this}return this===e?this:Zf(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-bd);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof wm?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Od(e)?this.removeLabel(e):kd(e)?this.killTweensOf(e):(e.parent===this&&zf(this,e),e===this._recent&&(this._recent=this._last),Vf(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Cf(Jp.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=sp(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=wm.delayedCall(0,t||af,n);return r.data=`isPause`,this._hasPause=1,Zf(this,r,sp(this,e))},n.removePause=function(e){var t=this._first;for(e=sp(this,e);t;)t._start===e&&t.data===`isPause`&&Bf(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)hm!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=gp(e),i=this._first,a=Ad(t),o;i;)i instanceof wm?Tf(i._targets,r)&&(a?(!hm||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=sp(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=wm.to(n,jf({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||xd,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&ip(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,jf({startAt:{time:sp(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Mp(this,sp(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Mp(this,sp(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+xd)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=Cf(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Vf(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Vf(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=bd,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Zf(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=Cf(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;ip(n,n===qd&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(qd._ts&&(Of(qd,qf(e,qd)),ff=Jp.frame),Jp.frame>=hf){hf+=hd.autoSleep||120;var t=qd._first;if((!t||!t._ts)&&hd.autoSleep&&Jp._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Jp.sleep()}}},t}(lm);jf(um.prototype,{_lock:0,_hasPause:0,_forcing:0});var dm=function(e,t,n,r,i,a,o){var s=new Rm(this._pt,e,t,0,1,Mm,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=kp(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Ud)||[];u=Ud.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?wf(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Ud.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Wd.test(r)||g)&&(s.e=0),this._pt=s,s},fm=function(e,t,n,r,i,a,o,s,c,l){kd(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?kd(u)?c?e[t.indexOf(`set`)||!kd(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=kd(u)?c?Dm:Em:Tm,p;if(Od(r)&&(~r.indexOf(`random(`)&&(r=kp(r)),r.charAt(1)===`=`&&(p=wf(d,r)+(dp(d)||0),(p||p===0)&&(r=p))),!l||d!==r||gm)return!isNaN(d*r)&&r!==``?(p=new Rm(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?jm:Am,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&tf(t,r),dm.call(this,e,t,d,r,f,s||hd.stringFilter,c))},pm=function(e,t,n,r,i){if(kd(e)&&(e=xm(e,i,t,n,r)),!Md(e)||e.style&&e.nodeType||Ld(e)||Id(e))return Od(e)?xm(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=xm(e[o],i,t,n,r);return a},mm=function(e,t,n,r,i,a){var o,s,c,l;if(pf[e]&&(o=new pf[e]).init(i,o.rawVars?t[e]:pm(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Rm(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Fp))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},hm,gm,_m=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!_d,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,ee,j,M,N;if(!b||f&&a||(a=`none`),t._ease=rm(a,gd.ease),t._rEase=x&&(rm(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?yf(g[0]).harness:0,M=k&&i[k.prop],S=Ff(i,lf),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?sf:of),h._lazy=0),o){if(Bf(t._startAt=wm.set(g,jf({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Nd(c),startAt:null,delay:0,onUpdate:l&&function(){return Np(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vd||!s&&!p)&&t._startAt.revert(sf),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=jf({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Nd(c),immediateRender:s,stagger:0,parent:_},S),M&&(w[k.prop]=M),Bf(t._startAt=wm.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(vd?t._startAt.revert(sf):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,xd,xd);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Nd(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||vf(g)[C]._gsap,t._ptLookup[C]=ee={},df[O.id]&&uf.length&&Ef(),j=v===g?C:v.indexOf(E),k&&(A=new k).init(E,M||S,t,j,v)!==!1&&(t._pt=T=new Rm(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){ee[e]=T}),A.priority&&(D=1)),!k||M)for(w in S)pf[w]&&(A=mm(w,S,t,j,E,v))?A.priority&&(D=1):ee[w]=T=fm.call(t,E,w,`get`,S[w],j,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(hm=t,qd.killTweensOf(E,ee,t.globalTime(n)),N=!t.parent,hm=0),t._pt&&c&&(df[O.id]=1)}D&&Lm(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(bd,!0,!0)},vm=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return gm=1,e.vars[t]=`+=0`,_m(e,o),gm=0,s?nf(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Sf(n)+dp(u.e)),u.b&&(u.b=l.s+dp(u.b))},ym=function(e,t){var n=e[0]?yf(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Nf({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},bm=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Ld(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},xm=function(e,t,n,r,i){return kd(e)?e.call(t,n,r,i):Od(e)&&~e.indexOf(`random(`)?kp(e):e},Sm=_f+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Cm={};xf(Sm+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Cm[e]=1});var wm=function(e){md(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:If(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||qd,g=(Ld(t)||Id(t)?Ad(t[0]):`length`in n)?[t]:gp(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?vf(g):nf(`GSAP target `+t+` not found. https://gsap.com`,!hd.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Fd(s)||Fd(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new um({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=pd(a),_._start=0,u||Fd(s)||Fd(c)){if(b=g.length,C=u&&yp(u),Md(u))for(x in u)~Sm.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=Ff(n,Cm),y.stagger=0,T&&(y.easeReverse=T),w&&Nf(y,w),S=g[v],y.duration=+xm(s,pd(a),v,S,g),y.delay=(+xm(c,pd(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Xp.none;_.duration()?s=c=0:a.timeline=0}else if(f){If(jf(_.vars.defaults,{ease:`none`})),_._ease=rm(f.ease||n.ease||`none`);var E=0,D,O,k;if(Ld(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||bm(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!_d&&(hm=pd(a),qd.killTweensOf(g),hm=0),Zf(h,pd(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===Cf(h._time)&&Nd(l)&&Wf(pd(a))&&h.data!==`nested`)&&(a._tTime=-xd,a.render(Math.max(0,-c)||0)),m&&Qf(pd(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-xd&&!o?i:e<xd?0:e,c,l,u,d,f,p,m,h;if(!a)np(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=Cf(s%d),s===i?(u=this._repeat,c=a):(f=Cf(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Kf(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(Cf(d*u),!0).invalidate()._lock=0)}if(!this._initted){if($f(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Np(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Uf(this,e,t,n),Np(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Np(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Uf(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Bf(this,1),!t&&(!o||r)&&(s||r||p)&&(Np(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){qp||Jp.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||_m(this,a),o=this._ease(a/this._dur),vm(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Yf(this,0),this.parent||Rf(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Pp(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vd),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,hm&&hm.vars.overwrite!==!0)._first||Pp(this),this.parent&&n!==this.timeline.totalDuration()&&ip(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?gp(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Lf(r,i))return t===`all`&&(this._pt=0),Pp(this);for(s=this._op=this._op||[],t!==`all`&&(Od(t)&&(d={},xf(t,function(e){return d[e]=1}),t=d),t=ym(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||zf(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Pp(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return cp(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return cp(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return qd.killTweensOf(e,t,n)},t}(lm);jf(wm.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),xf(`staggerTo,staggerFrom,staggerFromTo`,function(e){wm[e]=function(){var t=new um,n=pp.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Tm=function(e,t,n){return e[t]=n},Em=function(e,t,n){return e[t](n)},Dm=function(e,t,n,r){return e[t](r.fp,n)},Om=function(e,t,n){return e.setAttribute(t,n)},km=function(e,t){return kd(e[t])?Em:jd(e[t])&&e.setAttribute?Om:Tm},Am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mm=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Nm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Pm=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Fm=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zf(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Im=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Lm=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Rm=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Am,this.d=o||this,this.set=s||Tm,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Im,this.m=e,this.mt=n,this.tween=t},e}();xf(_f+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return lf[e]=1}),Zd.TweenMax=Zd.TweenLite=wm,Zd.TimelineLite=Zd.TimelineMax=um,qd=new um({sortChildren:!1,defaults:gd,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),hd.stringFilter=Kp;var zm=[],Bm={},Vm=[],Hm=0,Um=0,Wm=function(e){return(Bm[e]||Vm).map(function(e){return e()})},Gm=function(){var e=Date.now(),t=[];e-Hm>2&&(Wm(`matchMediaInit`),zm.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Jd.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Wm(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Hm=e,Wm(`matchMedia`))},Km=function(){function e(e,t){this.selector=t&&_p(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Um++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){kd(e)&&(n=t,t=e,e=kd);var r=this,i=function(){var e=yd,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=_p(n)),yd=r,a=t.apply(r,arguments),kd(a)&&r._r.push(a),yd=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===kd?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=yd;yd=null,e(this),yd=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof wm&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof um?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof wm)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=zm.length;r--;)zm[r].id===this.id&&zm.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),qm=function(){function e(e){this.contexts=[],this.scope=e,yd&&yd.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Md(e)||(e={matches:e});var r=new Km(0,n||this.scope),i=r.conditions={},a,o,s;for(o in yd&&!r.selector&&(r.selector=yd.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Jd.matchMedia(e[o]),a&&(zm.indexOf(r)<0&&zm.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Gm):a.addEventListener(`change`,Gm)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Jm={registerPlugin:function(){[...arguments].forEach(function(e){return Lp(e)})},timeline:function(e){return new um(e)},getTweensOf:function(e,t){return qd.getTweensOf(e,t)},getProperty:function(e,t,n,r){Od(e)&&(e=gp(e)[0]);var i=yf(e||{}).get,a=n?Af:kf;return n===`native`&&(n=``),e&&(t?a((pf[t]&&pf[t].get||i)(e,t,n,r)):function(t,n,r){return a((pf[t]&&pf[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=gp(e),e.length>1){var r=e.map(function(e){return Qm.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=pf[t],o=yf(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Fp._pt=0,r.init(e,n?t+n:t,Fp,0,[e]),r.render(1,r),Fp._pt&&Nm(1,Fp)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Qm.to(e,jf((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return qd.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rm(e.ease,gd.ease)),Pf(gd,e||{})},config:function(e){return Pf(hd,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!pf[e]&&!Zd[e]&&nf(t+` effect requires `+e+` plugin.`)}),mf[t]=function(e,t,r){return n(gp(e),jf(t||{},i),r)},a&&(um.prototype[t]=function(e,n,r){return this.add(mf[t](e,Md(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Xp[e]=rm(t)},parseEase:function(e,t){return arguments.length?rm(e,t):Xp},getById:function(e){return qd.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new um(e),r,i;for(n.smoothChildTiming=Nd(e.smoothChildTiming),qd.remove(n),n._dp=0,n._time=n._tTime=qd._time,r=qd._first;r;)i=r._next,(t||!(!r._dur&&r instanceof wm&&r.vars.onComplete===r._targets[0]))&&Zf(n,r,r._start-r._delay),r=i;return Zf(qd,n,0),n},context:function(e,t){return e?new Km(e,t):yd},matchMedia:function(e){return new qm(e)},matchMediaRefresh:function(){return zm.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Gm()},addEventListener:function(e,t){var n=Bm[e]||(Bm[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bm[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Dp,wrapYoyo:Op,distribute:yp,random:Sp,snap:xp,normalize:Tp,getUnit:dp,clamp:fp,splitColor:Vp,toArray:gp,selector:_p,mapRange:Ap,pipe:Cp,unitize:wp,interpolate:jp,shuffle:vp},install:ef,effects:mf,ticker:Jp,updateRoot:um.updateRoot,plugins:pf,globalTimeline:qd,core:{PropTween:Rm,globals:rf,Tween:wm,Timeline:um,Animation:lm,getCache:yf,_removeLinkedListItem:zf,reverting:function(){return vd},context:function(e){return e&&yd&&(yd.data.push(e),e._ctx=yd),yd},suppressOverwrites:function(e){return _d=e}}};xf(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Jm[e]=wm[e]}),Jp.add(um.updateRoot),Fp=Jm.to({},{duration:0});var Ym=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xm=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Ym(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Zm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Od(n)&&(r={},xf(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Xm(e,n)}}}},Qm=Jm.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vd?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zm(`roundProps`,bp),Zm(`modifiers`),Zm(`snap`,xp))||Jm;wm.version=um.version=Qm.version=`3.15.0`,$d=1,Pd()&&Yp(),Xp.Power0,Xp.Power1,Xp.Power2,Xp.Power3,Xp.Power4,Xp.Linear,Xp.Quad,Xp.Cubic,Xp.Quart,Xp.Quint,Xp.Strong,Xp.Elastic,Xp.Back,Xp.SteppedEase,Xp.Bounce,Xp.Sine,Xp.Expo,Xp.Circ;var $m,eh,th,nh,rh,ih,ah,oh=function(){return typeof window<`u`},sh={},ch=180/Math.PI,lh=Math.PI/180,uh=Math.atan2,dh=1e8,fh=/([A-Z])/g,ph=/(left|right|width|margin|padding|x)/i,mh=/[\s,\(]\S/,hh={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},gh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_h=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vh=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yh=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bh=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},xh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sh=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Ch=function(e,t,n){return e.style[t]=n},wh=function(e,t,n){return e.style.setProperty(t,n)},Th=function(e,t,n){return e._gsap[t]=n},Eh=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Dh=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Oh=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},kh=`transform`,Ah=kh+`Origin`,jh=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in sh&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=hh[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Xh(i,e)}):this.tfm[t]=o.x?o[t]:Xh(i,t),t===Ah&&(this.tfm.zOrigin=o.zOrigin);else return hh.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(kh)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Ah,n,``)),t=kh}(a||n)&&this.props.push(t,n,a[t])},Mh=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Nh=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(fh,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=ah(),i&&i.isStart||n[kh]||(Mh(n),r.zOrigin&&n[Ah]&&(n[Ah]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ph=function(e,t){var n={target:e,props:[],revert:Nh,save:jh};return e._gsap||Qm.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Fh,Ih=function(e,t){var n=eh.createElementNS?eh.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):eh.createElement(e);return n&&n.style?n:eh.createElement(e)},Lh=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(fh,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,zh(n)||n,1)||``},Rh=`O,Moz,ms,Ms,Webkit`.split(`,`),zh=function(e,t,n){var r=(t||rh).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Rh[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Rh[i]:``)+e},Bh=function(){oh()&&window.document&&($m=window,eh=$m.document,th=eh.documentElement,rh=Ih(`div`)||{style:{}},Ih(`div`),kh=zh(kh),Ah=kh+`Origin`,rh.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Fh=!!zh(`perspective`),ah=Qm.core.reverting,nh=1)},Vh=function(e){var t=e.ownerSVGElement,n=Ih(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),th.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),th.removeChild(n),i},Hh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Uh=function(e){var t,n;try{t=e.getBBox()}catch{t=Vh(e),n=1}return t&&(t.width||t.height)||n||(t=Vh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Hh(e,[`x`,`cx`,`x1`])||0,y:+Hh(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Wh=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Uh(e))},Gh=function(e,t){if(t){var n=e.style,r;t in sh&&t!==Ah&&(t=kh),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(fh,`-$1`).toLowerCase())):n.removeAttribute(t)}},Kh=function(e,t,n,r,i,a){var o=new Rm(e._pt,t,n,0,1,a?Sh:xh);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},qh={deg:1,rad:1,turn:1},Jh={grid:1,flex:1},Yh=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=rh.style,c=ph.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||qh[i]||qh[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Wh(t),(p||o===`%`)&&(sh[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Sf(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==eh&&h.appendChild||(h=eh.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Jp.time&&!g.uncache)return Sf(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Gh(t,n)}else(p||o===`%`)&&!Jh[Lh(h,`display`)]&&(s.position=Lh(t,`position`)),h===t&&(s.position=`static`),h.appendChild(rh),m=rh[u],h.removeChild(rh),s.position=`absolute`;return c&&p&&(g=yf(h),g.time=Jp.time,g.width=h[u]),Sf(f?m*a/d:m&&a?d/m*a:0)},Xh=function(e,t,n,r){var i;return nh||Bh(),t in hh&&t!==`transform`&&(t=hh[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),sh[t]&&t!==`transform`?(i=cg(e,r),i=t===`transformOrigin`?i.svg?i.origin:lg(Lh(e,Ah))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=tg[t]&&tg[t](e,t,n)||Lh(e,t)||bf(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Yh(e,t,i,n)+n:i},Zh=function(e,t,n,r){if(!n||n===`none`){var i=zh(t,e,1),a=i&&Lh(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Lh(e,`borderTopColor`))}var o=new Rm(this._pt,e.style,t,0,1,Mm),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Lh(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Lh(e,t)||r,m?e.style[t]=m:Gh(e,t)),l=[n,r],Kp(l),n=l[0],r=l[1],d=n.match(Hd)||[],b=r.match(Hd)||[],b.length){for(;u=Hd.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=wf(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Hd.lastIndex-v.length,v||(v=v||hd.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Yh(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Sh:xh;return Wd.test(r)&&(o.e=0),this._pt=o,o},Qh={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},$h=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Qh[n]||n,t[1]=Qh[r]||r,t.join(` `)},eg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],sh[o]&&(s=1,o=o===`transformOrigin`?Ah:kh),Gh(n,o);s&&(Gh(n,kh),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,cg(n,1),a.uncache=1,Mh(r)))}},tg={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Rm(e._pt,t,n,0,0,eg);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},ng=[1,0,0,1,0,0],rg={},ig=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ag=function(e){var t=Lh(e,kh);return ig(t)?ng:t.substr(7).match(Vd).map(Sf)},og=function(e,t){var n=e._gsap||yf(e),r=e.style,i=ag(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?ng:i):(i===ng&&!e.offsetParent&&e!==th&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,th.appendChild(e)),i=ag(e),s?r.display=s:Gh(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):th.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},sg=function(e,t,n,r,i,a){var o=e._gsap,s=i||og(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==ng&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Uh(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Ah]=`0px 0px`,a&&(Kh(a,o,`xOrigin`,c,y),Kh(a,o,`yOrigin`,l,b),Kh(a,o,`xOffset`,u,o.xOffset),Kh(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},cg=function(e,t){var n=e._gsap||new cm(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Lh(e,Ah)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,ee,j,M,N,te,P,ne,re,ie,ae;return n.svg=!!(e.getCTM&&Wh(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[kh]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[kh]===`none`?``:s[kh])),r.scale=r.rotate=r.translate=`none`),S=og(e,n.svg),n.svg&&(n.uncache?(M=e.getBBox(),c=n.xOrigin-M.x+`px `+(n.yOrigin-M.y)+`px`,j=``):j=!t&&e.getAttribute(`data-svg-origin`),sg(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==ng&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=ee=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?uh(D,E)*ch:0,_=O||k?uh(O,k)*ch+m:0,_&&(p*=Math.abs(Math.cos(_*lh))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ae=S[6],re=S[7],te=S[8],P=S[9],ne=S[10],ie=S[11],l=S[12],u=S[13],d=S[14],C=uh(ae,ne),h=C*ch,C&&(w=Math.cos(-C),T=Math.sin(-C),j=A*w+te*T,M=ee*w+P*T,N=ae*w+ne*T,te=A*-T+te*w,P=ee*-T+P*w,ne=ae*-T+ne*w,ie=re*-T+ie*w,A=j,ee=M,ae=N),C=uh(-O,ne),g=C*ch,C&&(w=Math.cos(-C),T=Math.sin(-C),j=E*w-te*T,M=D*w-P*T,N=O*w-ne*T,ie=k*T+ie*w,E=j,D=M,O=N),C=uh(D,E),m=C*ch,C&&(w=Math.cos(C),T=Math.sin(C),j=E*w+D*T,M=A*w+ee*T,D=D*w-E*T,ee=ee*w-A*T,E=j,A=M),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Sf(Math.sqrt(E*E+D*D+O*O)),p=Sf(Math.sqrt(ee*ee+ae*ae)),C=uh(A,ee),_=Math.abs(C)>2e-4?C*ch:0,y=ie?1/(ie<0?-ie:ie):0),n.svg&&(j=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!ig(Lh(e,kh)),j&&e.setAttribute(`transform`,j))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Sf(f),n.scaleY=Sf(p),n.rotation=Sf(m)+o,n.rotationX=Sf(h)+o,n.rotationY=Sf(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Ah]=lg(c)),n.xOffset=n.yOffset=0,n.force3D=hd.force3D,n.renderTransform=n.svg?gg:Fh?hg:dg,n.uncache=0,n},lg=function(e){return(e=e.split(` `))[0]+` `+e[1]},ug=function(e,t,n){var r=dp(t);return Sf(parseFloat(t)+parseFloat(Yh(e,`x`,n+`px`,r)))+r},dg=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,hg(e,t)},fg=`0deg`,pg=`0px`,mg=`) `,hg=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==fg||l!==fg)){var x=parseFloat(l)*lh,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*lh,w=Math.cos(x),a=ug(_,a,S*w*-v),o=ug(_,o,-Math.sin(x)*-v),s=ug(_,s,C*w*-v+v)}h!==pg&&(y+=`perspective(`+h+mg),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==pg||o!==pg||s!==pg)&&(y+=s!==pg||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+mg),c!==fg&&(y+=`rotate(`+c+mg),l!==fg&&(y+=`rotateY(`+l+mg),u!==fg&&(y+=`rotateX(`+u+mg),(d!==fg||f!==fg)&&(y+=`skew(`+d+`, `+f+mg),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+mg),_.style[kh]=y||`translate(0, 0)`},gg=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=lh,c*=lh,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=lh,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Sf(b),x=Sf(x),S=Sf(S),C=Sf(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Yh(f,`x`,a,`px`),y=Yh(f,`y`,o,`px`)),(p||m||h||g)&&(v=Sf(v+p-(p*b+m*S)+h),y=Sf(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Sf(v+r/100*w.width),y=Sf(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[kh]=w)},_g=function(e,t,n,r,i){var a=360,o=Od(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?ch:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*dh)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*dh)%a-~~(s/a)*a)),e._pt=u=new Rm(e._pt,t,n,r,s,_h),u.e=c,u.u=`deg`,e._props.push(n),u},vg=function(e,t){for(var n in t)e[n]=t[n];return e},yg=function(e,t,n){var r=vg({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[kh]=t,o=cg(n,1),Gh(n,kh),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[kh],a[kh]=t,o=cg(n,1),a[kh]=c),sh)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=dp(c),p=dp(l),u=f===p?parseFloat(c):Yh(n,s,c,p),d=parseFloat(l),e._pt=new Rm(e._pt,o,s,u,d-u,gh),e._pt.u=p||0,e._props.push(s));vg(o,r)};xf(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});tg[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Xh(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var bg={name:`css`,register:Bh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in nh||Bh(),this.styles=this.styles||Ph(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(pf[m]&&mm(m,t,n,r,e,i)))){if(f=typeof l,p=tg[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=kp(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Wp.lastIndex=0,Wp.test(c)||(h=dp(c),g=dp(l),g?h!==g&&(c=Yh(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Od(c)&&~c.indexOf(`random(`)&&(c=kp(c)),dp(c+``)||c===`auto`||(c+=hd.units[m]||dp(Xh(e,m))||``),(c+``).charAt(1)===`=`&&(c=Xh(e,m))):c=Xh(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in hh&&(m===`autoAlpha`&&(d===1&&Xh(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Kh(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=hh[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in sh,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Lh(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Lh(e,`perspective`),T?e.style.perspective=T:Gh(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||cg(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Rm(this._pt,o,kh,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Rm(this._pt,b,`scaleY`,b.scaleY,(_?wf(b.scaleY,_+u):u)-b.scaleY||0,gh),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Ah,0,o[Ah]),l=$h(l),b.svg?sg(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Kh(this,b,`zOrigin`,b.zOrigin,g),Kh(this,o,m,lg(c),lg(l)));continue}else if(m===`svgOrigin`){sg(e,l,1,x,0,this);continue}else if(m in rg){_g(this,b,m,d,_?wf(d,_+l):l);continue}else if(m===`smoothOrigin`){Kh(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){yg(this,l,e);continue}}else m in o||(m=zh(m)||m);if(v||(u||u===0)&&(d||d===0)&&!mh.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=dp(l)||(m in hd.units?hd.units[m]:h),h!==g&&(d=Yh(e,m,c,g)),this._pt=new Rm(this._pt,v?b:o,m,d,(_?wf(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?bh:gh),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=yh):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=vh);else if(m in o)Zh.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){tf(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Lm(this)},render:function(e,t){if(t.tween._time||!ah())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xh,aliases:hh,getSetter:function(e,t,n){var r=hh[t];return r&&r.indexOf(`,`)<0&&(t=r),t in sh&&t!==Ah&&(e._gsap.x||Xh(e,`x`))?n&&ih===n?t===`scale`?Eh:Th:(ih=n||{})&&(t===`scale`?Dh:Oh):e.style&&!jd(e.style[t])?Ch:~t.indexOf(`-`)?wh:km(e,t)},core:{_removeProperty:Gh,_getMatrix:og}};Qm.utils.checkPrefix=zh,Qm.core.getStyleSaver=Ph,(function(e,t,n,r){var i=xf(e+`,`+t+`,`+n,function(e){sh[e]=1});xf(t,function(e){hd.units[e]=`deg`,rg[e]=1}),hh[i[13]]=e+`,`+t,xf(r,function(e){var t=e.split(`:`);hh[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),xf(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){hd.units[e]=`px`}),Qm.registerPlugin(bg);var xg=Qm.registerPlugin(bg)||Qm;xg.core.Tween;var Sg={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Cg=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},wg=new Es(-1,1,1,-1,0,1),Tg=new class extends mr{constructor(){super(),this.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new nr([0,2,0,0,2,0],2))}},Eg=class{constructor(e){this._mesh=new G(Tg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Dg=class extends Cg{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Io?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=No.clone(e.uniforms),this.material=new Io({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Eg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Og=class extends Cg{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},kg=class extends Cg{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ag=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dg(Sg),this.copyPass.material.blending=0,this.timer=new Ns}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Og!==void 0&&(r instanceof Og?n=!0:r instanceof kg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},jg=class extends Cg{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Mg={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Lt},cameraProjectionMatrixInverse:{value:new Lt},cameraWorldMatrix:{value:new Lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new H(-1,-1,-1)},sceneBoxMax:{value:new H(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ng={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Pg={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Fg(t=5){let n=Math.floor(t)%2==0?Math.floor(t)+1:Math.floor(t),r=Ig(n),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let t=r[e],n=2*Math.PI*t/i,o=new H(Math.cos(n),Math.sin(n),0).normalize();a[e*4]=(o.x*.5+.5)*255,a[e*4+1]=(o.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new oi(a,n,n);return o.wrapS=e,o.wrapT=e,o.needsUpdate=!0,o}function Ig(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Lg={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Rg(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new V},cameraProjectionMatrixInverse:{value:new Lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Rg(e,t,n){let r=zg(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function zg(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new H(Math.cos(a),Math.sin(a),o))}return r}var Bg=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,ee=g-1+3*d,j=_-1+3*d,M=v-1+3*d,N=c&255,te=l&255,P=u&255,ne=this.perm[N+this.perm[te+this.perm[P]]]%12,re=this.perm[N+y+this.perm[te+b+this.perm[P+x]]]%12,ie=this.perm[N+S+this.perm[te+C+this.perm[P+w]]]%12,ae=this.perm[N+1+this.perm[te+1+this.perm[P+1]]]%12,oe=.6-g*g-_*_-v*v;oe<0?r=0:(oe*=oe,r=oe*oe*this._dot3(this.grad3[ne],g,_,v));let se=.6-T*T-E*E-D*D;se<0?i=0:(se*=se,i=se*se*this._dot3(this.grad3[re],T,E,D));let ce=.6-O*O-k*k-A*A;ce<0?a=0:(ce*=ce,a=ce*ce*this._dot3(this.grad3[ie],O,k,A));let F=.6-ee*ee-j*j-M*M;return F<0?o=0:(F*=F,o=F*F*this._dot3(this.grad3[ae],ee,j,M)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,ee=w>D?4:0,j=T>D?2:0,M=+(E>D),N=O+k+A+ee+j+M,te=+(a[N][0]>=3),P=+(a[N][1]>=3),ne=+(a[N][2]>=3),re=+(a[N][3]>=3),ie=+(a[N][0]>=2),ae=+(a[N][1]>=2),oe=+(a[N][2]>=2),se=+(a[N][3]>=2),ce=+(a[N][0]>=1),F=+(a[N][1]>=1),le=+(a[N][2]>=1),ue=+(a[N][3]>=1),de=w-te+c,fe=T-P+c,pe=E-ne+c,me=D-re+c,he=w-ie+2*c,ge=T-ae+2*c,_e=E-oe+2*c,ve=D-se+2*c,ye=w-ce+3*c,be=T-F+3*c,xe=E-le+3*c,Se=D-ue+3*c,Ce=w-1+4*c,we=T-1+4*c,Te=E-1+4*c,Ee=D-1+4*c,De=h&255,Oe=g&255,ke=_&255,Ae=v&255,je=o[De+o[Oe+o[ke+o[Ae]]]]%32,Me=o[De+te+o[Oe+P+o[ke+ne+o[Ae+re]]]]%32,Ne=o[De+ie+o[Oe+ae+o[ke+oe+o[Ae+se]]]]%32,I=o[De+ce+o[Oe+F+o[ke+le+o[Ae+ue]]]]%32,Pe=o[De+1+o[Oe+1+o[ke+1+o[Ae+1]]]]%32,Fe=.6-w*w-T*T-E*E-D*D;Fe<0?l=0:(Fe*=Fe,l=Fe*Fe*this._dot4(i[je],w,T,E,D));let Ie=.6-de*de-fe*fe-pe*pe-me*me;Ie<0?u=0:(Ie*=Ie,u=Ie*Ie*this._dot4(i[Me],de,fe,pe,me));let L=.6-he*he-ge*ge-_e*_e-ve*ve;L<0?d=0:(L*=L,d=L*L*this._dot4(i[Ne],he,ge,_e,ve));let Le=.6-ye*ye-be*be-xe*xe-Se*Se;Le<0?f=0:(Le*=Le,f=Le*Le*this._dot4(i[I],ye,be,xe,Se));let Re=.6-Ce*Ce-we*we-Te*Te-Ee*Ee;return Re<0?p=0:(Re*=Re,p=Re*Re*this._dot4(i[Pe],Ce,we,Te,Ee)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Vg=class t extends Cg{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Fg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Pt(this.width,this.height,{type:g,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Io({defines:Object.assign({},Mg.defines),uniforms:No.clone(Mg.uniforms),vertexShader:Mg.vertexShader,fragmentShader:Mg.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bo,this.normalMaterial.blending=0,this.pdMaterial=new Io({defines:Object.assign({},Lg.defines),uniforms:No.clone(Lg.uniforms),vertexShader:Lg.vertexShader,fragmentShader:Lg.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Io({defines:Object.assign({},Ng.defines),uniforms:No.clone(Ng.uniforms),vertexShader:Ng.vertexShader,fragmentShader:Ng.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Io({uniforms:No.clone(Sg.uniforms),vertexShader:Sg.vertexShader,fragmentShader:Sg.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Io({uniforms:No.clone(Pg.uniforms),vertexShader:Pg.vertexShader,fragmentShader:Pg.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Eg(null),this._originalClearColor=new W,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Wi;e.format=E,e.type=y,this.normalRenderTarget=new Pt(this.width,this.height,{minFilter:r,magFilter:r,type:g,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Rg(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case t.OUTPUT.Off:break;case t.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(t=64){let n=new Bg,r=t*t*4,i=new Uint8Array(r);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let a=e,o=r;i[(e*t+r)*4]=(n.noise(a,o)*.5+.5)*255,i[(e*t+r)*4+1]=(n.noise(a+t,o)*.5+.5)*255,i[(e*t+r)*4+2]=(n.noise(a,o+t)*.5+.5)*255,i[(e*t+r)*4+3]=(n.noise(a+t,o+t)*.5+.5)*255}let a=new oi(i,t,t,w,l);return a.wrapS=e,a.wrapT=e,a.needsUpdate=!0,a}};Vg.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Hg={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ug=class e extends Cg{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new V(256,256):new V(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Pt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Pt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Hg;this.highPassUniforms=No.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Io({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=No.clone(Sg.uniforms),this.blendMaterial=new Io({uniforms:this.copyUniforms,vertexShader:Sg.vertexShader,fragmentShader:Sg.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new Kr,this._fsQuad=new Eg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Io({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Io({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ug.BlurDirectionX=new V(1,0),Ug.BlurDirectionY=new V(0,1);var Wg={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Gg=class extends Cg{constructor(){super(),this.isOutputPass=!0,this.uniforms=No.clone(Wg.uniforms),this.material=new Lo({name:Wg.name,uniforms:this.uniforms,vertexShader:Wg.vertexShader,fragmentShader:Wg.fragmentShader}),this._fsQuad=new Eg(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Kg=class extends dn{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new V(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},qg=new H,Jg=new Lt,Yg=new Lt,Xg=new H,Zg=new H,Qg=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Jg.copy(t.matrixWorldInverse),Yg.multiplyMatrices(t.projectionMatrix,Jg),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){qg.setFromMatrixPosition(e.matrixWorld),qg.applyMatrix4(Yg);let c=qg.z>=-1&&qg.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=qg.x*i+i,f=-qg.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Xg.setFromMatrixPosition(e.matrixWorld),Zg.setFromMatrixPosition(t.matrixWorld),Xg.distanceToSquared(Zg)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},$g=class extends bn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new K;e.deleteAttribute(`uv`);let t=new Ro({side:1}),n=new Ro,r=new Ts(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new G(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new hi(e,n,6),o=new dn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new G(e,e_(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new G(e,e_(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new G(e,e_(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new G(e,e_(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new G(e,e_(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new G(e,e_(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function e_(e){return new Vo({color:0,emissive:16777215,emissiveIntensity:e})}var t_=[{n:1,t:`Document Q&A with RAG`,cat:`GenAI`,live:!0,case:`rag`,sub:`Chat with provider contracts & policy PDFs, with citations`},{n:2,t:`Talk to your data with Genie`,cat:`Text-to-SQL`,live:!0,case:`genie`,sub:`Ask claims questions in plain English, get governed SQL, charts and answers`},{n:3,t:`AI Functions inside SQL`,cat:`SQL + LLM`},{n:4,t:`Claims anomaly detection`,cat:`ML`},{n:5,t:`Member churn prediction`,cat:`ML`},{n:6,t:`Cost & volume forecasting`,cat:`Forecast`},{n:7,t:`Extract fields from PDFs`,cat:`Doc AI`},{n:8,t:`Multi-agent supervisor`,cat:`Agents`},{n:9,t:`Provider entity resolution`,cat:`ML`},{n:10,t:`Call transcript insights`,cat:`GenAI`},{n:11,t:`Real-time feature scoring`,cat:`MLOps`},{n:12,t:`Fine-tune on your data`,cat:`GenAI`},{n:13,t:`AI/BI dashboards + Genie`,cat:`BI`},{n:14,t:`Agent with UC function tools`,cat:`Agents`},{n:15,t:`Prior-auth triage classifier`,cat:`GenAI`},{n:16,t:`Synthetic test data`,cat:`GenAI`},{n:17,t:`Recommendation engine`,cat:`ML`},{n:18,t:`Fax & image OCR to tables`,cat:`Doc AI`},{n:19,t:`Guardrails & AI monitoring`,cat:`Governance`},{n:20,t:`MCP tools for agents`,cat:`Agents`}],n_=[{name:`Need`,steps:[0]},{name:`Goal`,steps:[1]},{name:`Prepare data`,steps:[2,3,4,5]},{name:`Answer`,steps:[6,7]},{name:`Production`,steps:[8,9]}],r_={need:`<path d="M4 7h7v10H4zM13 7h7v10h-7z"/><path d="M11 12h2"/>`,goal:`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>`,ingest:`<path d="M12 3v11M7 9l5 5 5-5M4 17v3h16v-3"/>`,chunk:`<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>`,embed:`<path d="M5 19L19 5M19 5h-6M19 5v6"/><circle cx="5" cy="19" r="1.5"/>`,index:`<circle cx="6" cy="7" r="1.6"/><circle cx="16" cy="5" r="1.6"/><circle cx="18" cy="15" r="1.6"/><circle cx="8" cy="17" r="1.6"/><circle cx="12" cy="11" r="1.6"/>`,retrieve:`<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>`,generate:`<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>`,evaluate:`<path d="M4 19h16M7 16V10M12 16V6M17 16v-4"/>`,deploy:`<path d="M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/>`},i_=[{key:`need`,short:`Need`,phase:`Need`,icon:r_.need,title:`Business need → developer solution`,split:{need:[`Provider-ops analysts answer contract and policy questions all day.`,`The answers are buried in ~600 PDFs. One clause can take 20–40 minutes to find.`,`Answers must be correct, cite the source, and respect who may see which contract.`],solution:[`A RAG agent on Databricks that answers only from your PDFs, with citations.`,`PDFs land in Unity Catalog, get parsed and chunked with AI Functions, then embedded into an AI Search index.`,`An LLM writes the answer from retrieved passages. MLflow measures quality. Agent Runtime ships it, governed by Unity Catalog.`]},tags:[[`Unity Catalog`,`tool`],[`AI Functions`,`tool`],[`AI Search`,`tool`],[`MLflow 3`,`tool`],[`Agent Bricks`,`tool`]]},{key:`goal`,short:`Goal`,phase:`Goal`,icon:r_.goal,title:`Ask a question. Get a cited answer.`,what:`An analyst asks about a contract in plain English`,how:`The agent first <b>retrieves</b> passages from your PDFs, then the LLM answers from them`,why:`Answers in seconds, and every one points to its page`,tags:[[`Retrieval-Augmented Generation`,``],[`Citations`,``]]},{key:`ingest`,short:`Ingest`,phase:`Prepare data`,icon:r_.ingest,title:`Land the PDFs in Unity Catalog`,what:`Copy the PDF files into a governed folder, then list them as rows in a table`,how:`<code>UC Volume</code> holds the files · <code>READ_FILES</code> turns each file into one row of a Delta table`,why:`One permissioned, versioned, queryable source of truth`,tags:[[`Unity Catalog Volume`,`tool`],[`READ_FILES`,`tool`],[`Delta Lake`,`tool`]]},{key:`chunk`,short:`Parse+chunk`,phase:`Prepare data`,icon:r_.chunk,title:`Read the layout, cut into passages`,what:`Turn PDF bytes into structured text, then into search-sized passages`,how:`<code>ai_parse_document</code> reads text, tables and pages · <code>ai_prep_search</code> makes chunks`,why:`Small, self-contained passages are what search can find precisely`,tags:[[`ai_parse_document`,`tool`],[`ai_prep_search · Beta`,`tool`],[`VARIANT`,``]]},{key:`embed`,short:`Embed`,phase:`Prepare data`,icon:r_.embed,title:`Turn every passage into numbers`,what:`Each chunk becomes a vector: 1,024 numbers that encode its meaning`,how:`Foundation Model API <code>databricks-gte-large-en</code>, called by the index for you`,why:`Similar meaning ⇒ nearby vectors, even with different words`,tags:[[`databricks-gte-large-en`,`model`],[`1024-dim`,``]]},{key:`index`,short:`Index`,phase:`Prepare data`,icon:r_.index,title:`Build a searchable vector index`,what:`Store all vectors so the nearest ones can be found in milliseconds`,how:`<code>Databricks AI Search</code> Delta Sync index on the <code>chunks</code> table`,why:`New or changed PDFs flow in when you sync. No re-building by hand`,tags:[[`Databricks AI Search`,`tool`],[`Delta Sync`,``],[`Change Data Feed`,``]]},{key:`retrieve`,short:`Retrieve`,phase:`Answer`,icon:r_.retrieve,title:`Find the passages that answer it`,what:`The question is embedded and the closest chunks are pulled out`,how:`<code>index.similarity_search(query_text=…, num_results=5)</code>`,why:`The LLM only sees the 5 passages that matter`,tags:[[`similarity_search`,`tool`],[`top-k`,``],[`hybrid search`,``]]},{key:`generate`,short:`Generate`,phase:`Answer`,icon:r_.generate,title:`Write the answer from the evidence`,what:`Question + 5 passages go into one prompt; the LLM writes a cited answer`,how:`Foundation Model API <code>databricks-meta-llama-3-3-70b-instruct</code>`,why:`Grounded in your text, not the model’s memory`,tags:[[`Llama 3.3 70B Instruct`,`model`],[`Prompt template`,``],[`Unity Gateway`,`tool`]]},{key:`evaluate`,short:`Evaluate`,phase:`Production`,icon:r_.evaluate,title:`Prove it is right before you ship`,what:`Run a test set of real questions; LLM judges score every answer`,how:`<code>mlflow.genai.evaluate</code> with Correctness, Groundedness, Relevance, Safety`,why:`Quality becomes a number you can track and improve`,tags:[[`MLflow 3`,`tool`],[`LLM judges`,`model`],[`Tracing`,``]]},{key:`deploy`,short:`Deploy`,phase:`Production`,icon:r_.deploy,title:`Ship it, governed end to end`,what:`Deploy the agent as an app; every request goes through governance`,how:`<code>agentbricks deploy</code> → Agent Runtime on Databricks Apps · Unity Gateway · Unity Catalog`,why:`Same permissions, rate limits, logs and lineage as the rest of your data`,tags:[[`Agent Bricks CLI`,`tool`],[`Databricks Apps`,`tool`],[`Unity Gateway`,`tool`]]}],a_=`main.provider_ops`,o_=[{lead:`Every AI project starts with a business problem. This step turns the analyst’s problem into a technical design. Each later step builds one piece of that design.`,happens:[`<b>The business side.</b> A provider-operations analyst gets questions like “What is the timely-filing limit for out-of-network claims?” The answer is in one of ~600 contract and policy PDFs, on a page nobody remembers. Today they search folders and skim PDFs. That takes 20–40 minutes, and two analysts can give two different answers.`,`<b>The developer side.</b> The developer turns each business wish into a technical requirement (see the table below), then picks a Databricks component for each one.`,`<b>The design has two paths.</b> An <b>offline path</b> prepares the documents ahead of time (steps 02–05: ingest, parse + chunk, embed, index). It runs on a schedule, whenever PDFs change. An <b>online path</b> runs for every question (steps 06–07: retrieve, generate) and takes a few seconds.`,`<b>Quality and production wrap around both.</b> Step 08 measures answer quality with a test set before anyone relies on it. Step 09 deploys the agent with permissions, rate limits and logs.`],concepts:[{t:`RAG (Retrieval-Augmented Generation)`,d:`An LLM never saw your contracts during training. If you ask it directly, it guesses. RAG first <b>retrieves</b> the relevant passages from your documents, then asks the LLM to <b>generate</b> an answer using only those passages. The model is not retrained. It just reads the right pages first.`},{t:`Why not fine-tune a model?`,d:`Fine-tuning bakes knowledge into model weights. It is expensive, it goes stale when a contract changes, and it cannot cite a page. RAG reads the current document at question time, so updates show up after the next sync and every answer can point to its source.`},{t:`Unity Catalog`,d:`Databricks’ governance layer. Every file, table, index, model and app gets a three-part name like <code>main.provider_ops.chunks</code> (catalog.schema.object), plus permissions and lineage. That is how “only authorised staff see contract X” is enforced in one place.`}],compare:{title:`From business need to technical design`,cols:[`Business need`,`Technical requirement`,`Databricks component`],rows:[[`Answers must come from our documents`,`Ground the LLM on retrieved passages`,`AI Search + prompt template`],[`“Show me where it says that”`,`Keep source file + page on every chunk`,`ai_parse_document → ai_prep_search metadata`],[`Only allowed staff see a contract`,`Central access control on files, tables, index`,`Unity Catalog grants`],[`New contracts arrive every week`,`Incremental processing, no full rebuilds`,`Delta tables + Delta Sync index`],[`It has to be trustworthy`,`Measured quality on a fixed test set`,`MLflow 3 evaluation + LLM judges`],[`Usable from a browser, at scale`,`Authenticated, rate-limited endpoint`,`Agent Runtime on Databricks Apps + Unity Gateway`]]},code:[{label:`The whole solution in 8 lines`,lang:`py`,src:`# Each line is one step of this walkthrough (illustrative outline)
files  = "/Volumes/${a_.replace(`.`,`/`)}/contracts/"          # 02 Ingest: governed folder
parsed = "ai_parse_document(content)"                          # 03 Parse: bytes -> structured text
chunks = "ai_prep_search(parsed)"                              # 03 Chunk: text -> passages
index  = client.create_delta_sync_index(...)                   # 04-05 Embed + index
hits   = index.similarity_search(query_text=q, num_results=5)  # 06 Retrieve
answer = llm.chat(prompt(q, hits))                             # 07 Generate
mlflow.genai.evaluate(data, predict_fn, scorers=[...])         # 08 Evaluate
# $ agentbricks deploy provider-ops                            # 09 Deploy`}],io:[{title:`Today vs with the agent`,cols:[`Question`,`Today`,`With the agent`],rows:[[`Timely-filing limit, out-of-network?`,`~35 min, 2 PDFs opened`,`~6 s · cites Contract §4.2, Claims Policy p.7`],[`Is Dr. Lee’s group credentialed for telehealth?`,`Email to credentialing team`,`~5 s · cites Credentialing Policy §2.1`],[`Fee for CPT 99214 in the 2026 schedule?`,`Open spreadsheet export`,`~5 s · cites Fee Schedule table 3`]]}],why:`Starting from the need keeps the build honest. Every component exists because a business requirement asked for it, and step 08 checks that the requirement is actually met.`,pitfalls:[`Starting with the model instead of the question set. Collect 30–50 real analyst questions with known answers first; they become the evaluation set in step 08.`,`Copying PDFs to laptops or ungoverned buckets “just to test”. Put them in a Unity Catalog Volume from day one so permissions carry through.`,`Scope creep: “answer anything about anything”. Start with one document family (provider contracts + claims policy) and expand.`],objects:[`analyst`,`pdfStack`,`clock`,`volume`,`deltaTable`,`aiParse`,`embedModel`,`index`,`llm`,`judges`,`app`]},{lead:`This is the finished experience you are building toward. Watch what happens between the question and the answer; each later step zooms into one part of it.`,happens:[`The analyst types a question in the app: <i>“What’s the timely-filing limit for out-of-network claims?”</i>`,`The agent sends the question text to the AI Search index. The index embeds it with the same model used for the documents, then returns the 5 most similar passages with their file, section and page.`,`The agent builds one prompt: an instruction (“answer only from the context, cite sources”), the 5 passages, and the question.`,`The LLM reads that prompt and writes: <i>“90 days from date of service [1][2]”</i>. The app turns [1] and [2] into links to <i>Contract §4.2</i> and <i>Claims Policy p.7</i>.`,`In production, every step is recorded as an MLflow <b>trace</b>, so you can later see exactly which passages produced which answer.`],concepts:[{t:`Grounding`,d:`Forcing the model to answer from supplied text instead of memory. The prompt says “If the context does not contain the answer, say you don’t know.” This is the main defence against made-up answers (hallucinations).`},{t:`Citation`,d:`Each passage carries its <code>source_uri</code> and page number from ingestion. The LLM is asked to tag each claim with the passage number it came from, so the app can show the original page.`},{t:`Context window`,d:`The maximum amount of text an LLM can read at once. Retrieval keeps the prompt small (5 short passages instead of 600 PDFs), which is faster, cheaper and more accurate.`}],code:[{label:`What the agent does per question (Python)`,lang:`py`,src:`def answer(question: str) -> dict:
    hits = index.similarity_search(            # step 06
        query_text=question,
        columns=["chunk_id", "chunk_to_retrieve", "source_uri", "page"],
        num_results=5)
    prompt = build_prompt(question, hits)      # step 07
    reply = llm.chat.completions.create(
        model="databricks-meta-llama-3-3-70b-instruct",
        messages=prompt, temperature=0)
    return {"answer": reply.choices[0].message.content,
            "sources": [h["source_uri"] for h in hits]}`}],io:[{title:`Input`,cols:[`field`,`value`],rows:[[`question`,`What’s the timely-filing limit for out-of-network claims?`],[`user`,`analyst@plan.org (Unity Catalog identity)`]]},{title:`Output`,cols:[`field`,`value`],rows:[[`answer`,`90 days from date of service [1][2]`],[`[1]`,`provider_contract_acme.pdf · §4.2 · p.12`],[`[2]`,`claims_policy_2026.pdf · p.7`]]}],why:`Citations change the analyst’s job from searching to verifying. They can trust the answer because they can click through to the exact clause.`,pitfalls:[`Questions the documents don’t answer. Design the prompt to say “I can’t find this in the contracts” instead of guessing.`,`Ambiguous questions (“what’s the limit?”). Let the agent ask a follow-up, or retrieve more passages and list the options.`],objects:[`analyst`,`question`,`ragAgent`,`answer`,`citation`]},{lead:`“Copy the PDF to a Volume, then to a Delta table” sounds abstract. Concretely it is two moves: (1) put the <b>files</b> in a governed folder, and (2) create a <b>table with one row per file</b> that holds the file’s path, size, date and raw bytes. No text is extracted yet.`,happens:[`<b>Create the governed folder.</b> <code>CREATE VOLUME main.provider_ops.contracts</code>. A Volume is a real folder in your cloud object storage (S3, ADLS or GCS) that Unity Catalog manages. Its path is <code>/Volumes/main/provider_ops/contracts/</code>.`,`<b>Copy the files in.</b> Drag and drop in Catalog Explorer, run <code>databricks fs cp</code> from a laptop, or schedule a job or connector that pulls from SharePoint. The PDF bytes are copied as-is. A PDF in a Volume is still a normal PDF you could download and open.`,`<b>Read every file as a row.</b> <code>READ_FILES(path, format =&gt; 'binaryFile')</code> scans the folder and returns one row per file with four columns: <code>path</code>, <code>modificationTime</code>, <code>length</code> (bytes) and <code>content</code> (the whole file as a BINARY value).`,`<b>Save those rows as a Delta table.</b> <code>CREATE TABLE … AS SELECT</code> writes them to <code>main.provider_ops.raw_docs</code>. On disk, Delta stores the rows in <b>Parquet</b> files (columnar, compressed) plus a <code>_delta_log/</code> folder. Each write adds a numbered JSON commit to that folder, recording which Parquet files were added or removed.`,`<b>Next time, only new files.</b> With Auto Loader (<code>cloudFiles</code>), Databricks remembers which files it already ingested (checkpoint). Next week’s run appends only the new PDFs.`],concepts:[{t:`So what does “copy to a Delta table” really mean?`,d:`It means <b>wrapping</b> each PDF as a row: metadata columns plus the bytes in a <code>content</code> column. The PDF is not converted, yet. Once files are rows you get SQL, permissions per table, history (“what did the table look like last Tuesday?”), and a reliable way for every later step to process only what changed.`},{t:`Parquet + transaction log = Delta`,d:`Parquet files hold the data. The <code>_delta_log</code> holds the truth about which Parquet files form the current version. Readers consult the log, so they never see half-written data (ACID). Old versions stay readable for a retention period (“time travel”).`},{t:`BINARY column`,d:`A column type that holds raw bytes. A PDF’s bytes start with <code>25 50 44 46</code>, which is ASCII for “%PDF”. Storing bytes in a table lets <code>ai_parse_document</code> read them with plain SQL in the next step.`},{t:`Do I need both?`,d:`Strictly, no. Step 03 can parse straight from <code>READ_FILES</code>, and the Databricks examples do exactly that. The <code>raw_docs</code> table is worth it at scale: an audit trail of what was ingested, and incremental re-processing.`}],compare:{title:`Volume vs Delta table`,cols:[``,`Unity Catalog Volume`,`Delta table`],rows:[[`Holds`,`Files (PDF, images, CSV…)`,`Rows & columns`],[`Unit`,`One file`,`One row (here: one row per PDF)`],[`Address`,`/Volumes/main/provider_ops/contracts/…`,`main.provider_ops.raw_docs`],[`You use it with`,`File APIs, READ_FILES, Auto Loader`,`SQL, PySpark, AI Functions`],[`On disk`,`The files themselves`,`Parquet files + _delta_log/ JSON commits`],[`Governance`,`READ VOLUME / WRITE VOLUME grants`,`SELECT / MODIFY grants, row filters, lineage`],[`History`,`File overwrite = gone`,`Versioned (DESCRIBE HISTORY, time travel)`]]},code:[{label:`SQL · one-off load`,lang:`sql`,src:`-- 1) A governed home for the files
CREATE SCHEMA IF NOT EXISTS ${a_};
CREATE VOLUME IF NOT EXISTS ${a_}.contracts;

-- 2) Upload (UI drag-and-drop, or from a terminal):
--    databricks fs cp ./pdfs dbfs:/Volumes/main/provider_ops/contracts/ --recursive

-- 3) One row per PDF: metadata + raw bytes
CREATE OR REPLACE TABLE ${a_}.raw_docs AS
SELECT path, modificationTime, length, content
FROM READ_FILES('/Volumes/main/provider_ops/contracts/*.pdf',
                format => 'binaryFile');

-- 4) Look at what you just made
SELECT path, length, modificationTime FROM ${a_}.raw_docs LIMIT 5;
DESCRIBE HISTORY ${a_}.raw_docs;`},{label:`PySpark · incremental with Auto Loader`,lang:`py`,src:`(spark.readStream.format("cloudFiles")
    .option("cloudFiles.format", "binaryFile")
    .option("pathGlobFilter", "*.pdf")
    .load("/Volumes/main/provider_ops/contracts/")
    .writeStream
    .option("checkpointLocation", "/Volumes/main/provider_ops/_chk/raw_docs")
    .trigger(availableNow=True)          # process new files, then stop
    .toTable("${a_}.raw_docs"))`}],io:[{title:`Input · files in the Volume`,cols:[`file`,`size`],rows:[[`provider_contract_acme.pdf`,`2.4 MB`],[`claims_policy_2026.pdf`,`1.1 MB`],[`fee_schedule_2026.pdf`,`3.8 MB`],[`… 597 more`,``]]},{title:`Output · main.provider_ops.raw_docs`,cols:[`path`,`modificationTime`,`length`,`content`],rows:[[`…/contracts/provider_contract_acme.pdf`,`2026-10-28 09:14`,`2,516,402`,`25 50 44 46 2D 31…`],[`…/contracts/claims_policy_2026.pdf`,`2026-10-30 16:02`,`1,148,770`,`25 50 44 46 2D 31…`],[`…/contracts/fee_schedule_2026.pdf`,`2026-11-01 08:47`,`3,981,055`,`25 50 44 46 2D 31…`]],note:`content is BINARY: the actual file bytes. “25 50 44 46” = “%PDF”.`}],why:`Everything downstream (parsing, chunks, the index, the app) inherits permissions and lineage from here. If a contract is restricted in Unity Catalog, it stays restricted all the way to the answer.`,pitfalls:[`Files larger than 100 MB or longer than 500 pages exceed <code>ai_parse_document</code> limits. Split them, or use the <code>pageRange</code> option.`,`Duplicates and old versions. Keep a version or effective-date convention in the file path, or dedupe on a hash of <code>content</code>.`,`Granting access only to the table, not the Volume (or vice versa). Readers of the pipeline need <code>READ VOLUME</code> on the files and <code>SELECT</code> on the tables.`,`Storing bytes twice (Volume and table) costs storage. For very large corpora, keep only path + metadata in the table and parse directly from the Volume.`],objects:[`pdf`,`volume`,`readFiles`,`deltaTable`]},{lead:`A PDF is a set of drawing instructions (“put glyph ‘9’ at x,y”), not text. Two AI Functions turn it into clean, search-sized passages: <code>ai_parse_document</code> reads the layout, and <code>ai_prep_search</code> cuts it into chunks.`,happens:[`<b>Parse.</b> <code>ai_parse_document(content)</code> takes the BINARY bytes from <code>raw_docs</code>. A Databricks-hosted model reads every page and returns a <b>VARIANT</b> (structured JSON-like value) with pages, elements (title, section header, paragraph, table, figure, caption, footer), their text, and their page and bounding box. Tables come out as HTML, so rows and columns survive. Scanned pages are OCR’d.`,`<b>Store the parse.</b> Results go to <code>parsed_docs</code> (one row per PDF), so you never pay to parse the same file twice.`,`<b>Chunk.</b> <code>ai_prep_search(parsed)</code> splits each document into semantic chunks, keeping paragraphs and tables whole, and enriches each one. You get <code>chunk_to_retrieve</code> (the clean text the LLM will read) and <code>chunk_to_embed</code> (the same text plus document title, section header, page number, a one-sentence document summary and, for tables, a summary and related questions).`,`<b>Explode to rows.</b> <code>ai_prep_search</code> returns one VARIANT per document with an array <code>document.contents</code>. <code>variant_explode</code> turns that array into <b>one row per chunk</b> in <code>main.provider_ops.chunks</code>.`,`<b>Prepare for syncing.</b> The table gets <code>delta.enableChangeDataFeed = true</code>, so step 05 can sync only rows that changed.`],concepts:[{t:`Why chunk at all?`,d:`Search works best on passages about one idea. A whole 40-page contract matches everything a little; a 300-word clause on timely filing matches one question strongly. Small chunks also keep the LLM prompt short.`},{t:`chunk_to_embed vs chunk_to_retrieve`,d:`The <b>embed</b> text is what gets turned into a vector. The extra context (“Document: Acme Provider Agreement · Section 4 Claims”) makes it findable. The <b>retrieve</b> text is the clean passage shown to the LLM and the user.`},{t:`VARIANT`,d:`A Databricks column type for semi-structured data (like JSON), queried with paths: <code>result:document.contents</code>, then cast with <code>::STRING</code>.`},{t:`Beta status`,d:`<code>ai_prep_search</code> is in Beta and needs Databricks Runtime 18.2+ (on serverless, environment version 3+). Its only options are <code>version</code> and <code>schema</code>; chunk size is chosen for you.`}],code:[{label:`SQL · parse once, store the result`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${a_}.parsed_docs AS
SELECT path, ai_parse_document(content) AS parsed
FROM ${a_}.raw_docs;`},{label:`SQL · chunk and explode to one row per chunk`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${a_}.chunks
TBLPROPERTIES (delta.enableChangeDataFeed = true) AS
WITH prepped AS (
  SELECT path, ai_prep_search(parsed) AS result
  FROM ${a_}.parsed_docs
)
SELECT
  chunk.value:chunk_id::STRING          AS chunk_id,
  chunk.value:chunk_position::INT       AS chunk_position,
  chunk.value:chunk_to_retrieve::STRING AS chunk_to_retrieve,
  chunk.value:chunk_to_embed::STRING    AS chunk_to_embed,
  chunk.value:pages[0]:page_id::INT     AS page,
  prepped.path                          AS source_uri
FROM prepped,
  LATERAL variant_explode(prepped.result:document.contents) AS chunk;`}],io:[{title:`Input · parsed_docs (excerpt of the VARIANT)`,cols:[`element`,`page`,`content`],rows:[[`section_header`,`12`,`4. Claims Submission`],[`text`,`12`,`4.2 Provider shall submit claims within ninety (90) days…`],[`table`,`13`,`&lt;table&gt;&lt;tr&gt;&lt;th&gt;Claim type&lt;/th&gt;…`]]},{title:`Output · main.provider_ops.chunks`,cols:[`chunk_id`,`page`,`chunk_to_retrieve`,`chunk_to_embed (start)`],rows:[[`acme_…_17`,`12`,`4.2 Provider shall submit claims within ninety (90) days of the date of service…`,`Document Title: Acme Provider Agreement · Section Header: 4. Claims Submission · Page Number: 12 …`],[`acme_…_18`,`13`,`Out-of-network claims are subject to the limits in Exhibit B…`,`Document Title: Acme Provider Agreement · Section Header: 4. Claims …`],[`claims_…_04`,`7`,`Timely filing: 90 calendar days from DOS unless contract states otherwise.`,`Document Title: Claims Policy 2026 · Page Number: 7 …`]]}],why:`Retrieval quality is decided here. Clean structure (tables intact, headers attached, page numbers kept) is what makes the right clause findable and citable later.`,pitfalls:[`Digitally signed PDFs may parse inaccurately. Spot-check a few, and keep the originals in the Volume.`,`Re-parsing everything on every run is slow and costs money. Parse only new rows (incremental pipeline or <code>MERGE</code>).`,`Treating headers/footers as content (“Confidential – Page 7 of 42” in every chunk). <code>ai_prep_search</code> separates them into labelled fields.`,`Forgetting Change Data Feed on <code>chunks</code>. A Delta Sync index needs it.`],objects:[`pdfPage`,`aiParse`,`layout`,`chunk`,`aiPrep`]},{lead:`Search engines match words; we want to match <b>meaning</b>. An embedding model turns each chunk into a list of 1,024 numbers (a vector). Texts that mean similar things get similar numbers.`,happens:[`Each <code>chunk_to_embed</code> string is sent to the Foundation Model API endpoint <code>databricks-gte-large-en</code>.`,`The model (a transformer) reads up to 8,192 tokens and outputs a vector of 1,024 floating-point numbers, e.g. <code>[0.0123, -0.0831, 0.0412, …]</code>.`,`You usually don’t call it yourself. When the index in step 05 is created with <code>embedding_source_column="chunk_to_embed"</code> and <code>embedding_model_endpoint_name="databricks-gte-large-en"</code>, AI Search calls the model for every new or changed row and stores the vectors.`,`At question time the <b>same</b> model embeds the question, so questions and chunks live in the same “meaning space”.`],concepts:[{t:`Vector / embedding`,d:`A point in a 1,024-dimensional space. You can’t picture 1,024 dimensions, so the 3D cloud in step 05 is a projection, but distance works the same way: close = similar meaning. “Submit claims within 90 days” lands near “timely-filing limit”, even though they share no words.`},{t:`Foundation Model APIs`,d:`Databricks-hosted models you call by endpoint name, pay-per-token, with no servers to manage. Through Unity Gateway the same model is also addressable as a model service: <code>system.ai.gte-large-en</code>.`},{t:`Managed vs self-managed embeddings`,d:`<b>Managed</b> (used here): you give the index a text column and a model; it embeds for you. <b>Self-managed</b>: you compute vectors yourself and store them in an <code>ARRAY&lt;FLOAT&gt;</code> column. Use that only if you need a custom model.`}],code:[{label:`Python · what the index does for you (one call)`,lang:`py`,src:`from databricks_openai import DatabricksOpenAI
client = DatabricksOpenAI()

resp = client.embeddings.create(
    model="system.ai.gte-large-en",       # model service behind databricks-gte-large-en
    input=["Document Title: Acme Provider Agreement\\nSection Header: 4. Claims\\n"
           "Content: 4.2 Provider shall submit claims within ninety (90) days…"])
vec = resp.data[0].embedding
print(len(vec), vec[:4])   # 1024 [0.0123, -0.0831, 0.0412, 0.0067]`},{label:`SQL · same thing with an AI Function`,lang:`sql`,src:`SELECT chunk_id,
       ai_query('databricks-gte-large-en', chunk_to_embed) AS embedding
FROM ${a_}.chunks
LIMIT 3;`}],io:[{title:`Input`,cols:[`chunk_id`,`chunk_to_embed`],rows:[[`acme_…_17`,`Document Title: Acme Provider Agreement … Content: 4.2 Provider shall submit claims within ninety (90) days…`]]},{title:`Output`,cols:[`chunk_id`,`embedding (1,024 floats)`],rows:[[`acme_…_17`,`[0.0123, -0.0831, 0.0412, 0.0067, … ]`]]}],why:`Embeddings let the system find the right clause when the analyst’s words differ from the contract’s words. That is the main reason RAG beats keyword search on legal text.`,pitfalls:[`Using one model for documents and another for questions. Vectors from different models are not comparable.`,`Changing the embedding model later means re-embedding everything (a full index re-sync). Choose deliberately. Newer Databricks examples also use <code>databricks-qwen3-embedding-0-6b</code>.`,`Embedding the bare passage without context. The enriched <code>chunk_to_embed</code> retrieves noticeably better.`],objects:[`chunk`,`embedModel`,`vector`]}],s_=`main.provider_ops`,c_=[{lead:`An index is a data structure that finds the nearest vectors without comparing the question against every chunk. Databricks AI Search (formerly Vector Search) builds and serves it, and keeps it in sync with the <code>chunks</code> Delta table.`,happens:[`<b>Create an endpoint.</b> This is the compute that hosts indexes and answers queries. It can be Standard (lowest latency) or Storage-optimized (large corpora, lower cost; triggered sync only).`,`<b>Create a Delta Sync index</b> on <code>main.provider_ops.chunks</code>, with primary key <code>chunk_id</code>, text column <code>chunk_to_embed</code> and model <code>databricks-gte-large-en</code>. AI Search reads the table, embeds every row (step 04), and stores vectors and columns in its own optimised format.`,`<b>Sync on change.</b> With <code>pipeline_type="TRIGGERED"</code>, you call <code>index.sync()</code> after each pipeline run (or schedule it). AI Search reads the table’s <b>Change Data Feed</b>, the list of inserted, updated and deleted rows since the last sync, and embeds only those. <code>CONTINUOUS</code> syncs within seconds but keeps compute running.`,`The index is a Unity Catalog object (<code>main.provider_ops.chunks_index</code>) with its own permissions and lineage back to the PDFs.`],concepts:[{t:`Approximate nearest neighbour (ANN)`,d:`Comparing a question with millions of vectors one by one is slow. ANN indexes (e.g. HNSW graphs) organise vectors so only a small neighbourhood is checked. The answer is near-perfect in milliseconds.`},{t:`Delta Sync vs Direct Vector Access`,d:`<b>Delta Sync</b>: the index mirrors a Delta table automatically, the right choice here. <b>Direct Vector Access</b>: your code upserts and deletes vectors through the API, with no source table.`},{t:`Change Data Feed (CDF)`,d:`A Delta table feature that records row-level changes. It is what makes syncing incremental: one new PDF means ~40 new rows embedded, not 24,000.`},{t:`Why the 3D cloud has clusters`,d:`Chunks about similar topics (claims, credentialing, fee schedules, termination, telehealth) end up near each other. The colours show those neighbourhoods.`}],code:[{label:`Python · create endpoint + index`,lang:`py`,src:`# pip install databricks-ai-search
from databricks.ai_search.client import AISearchClient
client = AISearchClient()

client.create_endpoint_and_wait(name="provider-ops-search",
                                endpoint_type="STANDARD")

index = client.create_delta_sync_index_and_wait(
    endpoint_name="provider-ops-search",
    source_table_name="${s_}.chunks",
    index_name="${s_}.chunks_index",
    pipeline_type="TRIGGERED",
    primary_key="chunk_id",
    embedding_source_column="chunk_to_embed",
    embedding_model_endpoint_name="databricks-gte-large-en")`},{label:`Python · after new PDFs are processed`,lang:`py`,src:`index = client.get_index(index_name="${s_}.chunks_index")
index.sync()          # embeds only rows changed since last sync (via CDF)
print(index.describe()["status"])`},{label:`SQL · prerequisite on the source table`,lang:`sql`,src:`ALTER TABLE ${s_}.chunks
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);`}],io:[{title:`Input · main.provider_ops.chunks`,cols:[`chunk_id`,`chunk_to_embed`,`source_uri`,`page`],rows:[[`acme_…_17`,`Document Title: Acme… 4.2 Provider shall submit…`,`…/provider_contract_acme.pdf`,`12`],[`… 24,000 rows`,``,``,``]]},{title:`Output · main.provider_ops.chunks_index`,cols:[`property`,`value`],rows:[[`type`,`Delta Sync · TRIGGERED`],[`rows indexed`,`24,113`],[`embedding`,`databricks-gte-large-en · 1024-dim`],[`status`,`ONLINE · last sync 2026-11-02 06:00`]]}],why:`Because the index follows the Delta table, adding a contract is just another step in the pipeline: drop the PDF in the Volume, run the job, sync. No manual re-indexing, and deleted contracts disappear from answers too.`,pitfalls:[`Change Data Feed not enabled, so index creation fails or every sync rebuilds everything.`,`The primary key is not unique or not stable across runs. Use <code>chunk_id</code> from <code>ai_prep_search</code>, which is built from the document ID and chunk position.`,`Forgetting to call <code>sync()</code> for TRIGGERED indexes, so answers are a week stale. Add it as the last task in the job.`,`The index must be in the same Unity Catalog metastore and region as the source table.`],objects:[`chunksTable`,`deltaSync`,`vsEndpoint`,`index`,`vector`]},{lead:`Now the online path. The question is turned into a vector with the same model, and the index returns the 5 chunks whose vectors are closest, with a similarity score for each.`,happens:[`The app sends the question text to <code>index.similarity_search(query_text=…)</code>.`,`AI Search embeds the question with <code>databricks-gte-large-en</code>, the same model as the chunks, so both live in the same space.`,`The ANN index walks to the neighbourhood of the question vector and ranks candidates by similarity. Optionally, <code>query_type="HYBRID"</code> also scores keyword matches, which helps with exact terms like CPT codes.`,`<b>Filters</b> narrow the search before ranking, e.g. only documents for one payer or effective in 2026.`,`It returns the top-k rows (k = 5 here) with the columns you asked for and a score. A reranker can re-order them more precisely.`],concepts:[{t:`Similarity score`,d:`How close two vectors are (higher = more similar). Scores compare chunks for the <i>same</i> question. They are not probabilities, and there is no universal “good” threshold.`},{t:`top-k`,d:`How many chunks to return. Too few and you can miss the answer; too many and the prompt fills with noise. 3–10 is typical. Measure it in step 08.`},{t:`Hybrid search & reranking`,d:`Hybrid combines vector (meaning) and keyword (exact term) relevance. A reranker (<code>DatabricksReranker</code>) reads the question and each candidate together and re-orders them. It is slower but more accurate.`}],code:[{label:`Python · retrieve`,lang:`py`,src:`results = index.similarity_search(
    query_text="What's the timely-filing limit for out-of-network claims?",
    columns=["chunk_id", "chunk_to_retrieve", "source_uri", "page"],
    num_results=5,
    filters={"source_uri LIKE": "%2026%"},   # optional pre-filter
    query_type="HYBRID")                     # vectors + keywords

for row in results["result"]["data_array"]:
    print(row)`}],io:[{title:`Input`,cols:[`field`,`value`],rows:[[`query_text`,`What’s the timely-filing limit for out-of-network claims?`],[`num_results`,`5`]]},{title:`Output · top 5`,cols:[`#`,`chunk`,`source`,`score`],rows:[[`1`,`4.2 Provider shall submit claims within ninety (90) days…`,`Contract §4.2 · p.12`,`0.92`],[`2`,`Timely filing: 90 calendar days from DOS unless…`,`Claims Policy · p.7`,`0.89`],[`3`,`Out-of-network claims are subject to Exhibit B…`,`Contract §4.3 · p.13`,`0.84`],[`4`,`Corrected claims must be submitted within…`,`Claims Policy · p.8`,`0.78`],[`5`,`Appeals for timely-filing denials…`,`Appeals Guide · p.3`,`0.74`]]}],why:`If the right clause isn’t in the top 5, no LLM can answer correctly. Retrieval is the foundation of answer quality.`,pitfalls:[`Exact identifiers (claim codes, section numbers) can be missed by pure vector search. Use HYBRID.`,`No filters across payers or years, so the agent mixes up 2025 and 2026 terms. Store metadata columns and filter on them.`,`Not checking retrieval separately from generation. Log the retrieved chunks in traces (step 08).`],objects:[`question`,`queryVector`,`index`,`topk`]},{lead:`The LLM receives one carefully built prompt (instructions, the 5 retrieved passages and the question) and writes the answer token by token, citing passage numbers.`,happens:[`<b>Build the prompt.</b> A system message sets the rules: answer only from the context, cite as [n], say “not found” if missing. The context lists the 5 passages, numbered, each with its source and page. The user message is the question.`,`<b>Call the model.</b> The prompt goes to <code>databricks-meta-llama-3-3-70b-instruct</code> on Foundation Model APIs, through Unity Gateway (which applies rate limits, usage tracking and guardrails).`,`<b>Generate.</b> The model predicts the answer one <b>token</b> (≈ ¾ of a word) at a time, attending to the passages. <code>temperature=0</code> makes it as deterministic as possible.`,`<b>Post-process.</b> The app maps [1], [2] back to the passages’ <code>source_uri</code> and page and renders them as links.`],concepts:[{t:`Prompt template`,d:`The fixed text wrapped around every question. It is the main lever on behaviour (tone, format, refusals, citation style) and is versioned like code.`},{t:`Tokens`,d:`Units the model reads and writes. Pricing and limits are per token. 5 passages × ~300 words + instructions ≈ 2,500 input tokens.`},{t:`Why a 70B instruct model`,d:`Large enough to follow strict instructions and synthesise two passages. “Instruct” means it was tuned to follow instructions. Swap models by changing the endpoint name, then re-run step 08 to compare.`}],code:[{label:`Python · prompt + call`,lang:`py`,src:`SYSTEM = """You answer questions about provider contracts.
Use ONLY the context. Cite each fact as [n].
If the context does not contain the answer, say "Not found in the contracts.""""

def build_prompt(question, hits):
    ctx = "\\n\\n".join(
        f"[{i+1}] ({h['source_uri']} p.{h['page']})\\n{h['chunk_to_retrieve']}"
        for i, h in enumerate(hits))
    return [{"role": "system", "content": SYSTEM},
            {"role": "user", "content": f"Context:\\n{ctx}\\n\\nQuestion: {question}"}]

from databricks.sdk import WorkspaceClient
w = WorkspaceClient()
resp = w.serving_endpoints.query(
    name="databricks-meta-llama-3-3-70b-instruct",
    messages=build_prompt(q, hits), temperature=0, max_tokens=400)`},{label:`SQL · same model from a query`,lang:`sql`,src:`SELECT ai_query(
  'system.ai.meta-llama-3-3-70b-instruct',
  CONCAT('Answer only from this context: ', context, ' Question: ', question)
) AS answer
FROM ${s_}.eval_questions;`}],io:[{title:`Input · prompt (abridged)`,cols:[`role`,`content`],rows:[[`system`,`Use ONLY the context. Cite each fact as [n]…`],[`user`,`Context: [1] (…acme.pdf p.12) 4.2 Provider shall submit… [2] (…claims_policy p.7) Timely filing: 90 calendar days… Question: What’s the timely-filing limit…`]]},{title:`Output`,cols:[`field`,`value`],rows:[[`answer`,`Out-of-network claims must be filed within 90 days of the date of service [1][2]. Corrected claims follow §4.3 [3].`],[`usage`,`2,431 input · 38 output tokens`]]}],why:`The model adds the language skills: summarising, combining two sources, answering in plain English. The retrieved passages supply the facts. Keeping those roles separate is what makes answers both fluent and verifiable.`,pitfalls:[`A weak system prompt, so the model blends in general knowledge (“usually 365 days…”). Be explicit, and test refusals.`,`Passages without source labels, so the model cannot cite. Always number and label the context.`,`No limits: one runaway client can exhaust quota. Set QPM/TPM rate limits in Unity Gateway.`],objects:[`llm`,`prompt`,`tokens`,`answer`,`citation`]},{lead:`Before anyone relies on the agent, you measure it. MLflow 3 runs the agent on a fixed set of questions with known answers, records a <b>trace</b> of every step, and uses LLM <b>judges</b> to score each answer.`,happens:[`<b>Build an evaluation set.</b> 30–200 real analyst questions, each with the facts a correct answer must contain (<code>expected_facts</code>). This is where the business user’s expertise goes in.`,`<b>Run.</b> <code>mlflow.genai.evaluate</code> calls your <code>predict_fn</code> (the agent) for each question. Because <code>predict_fn</code> is decorated with <code>@mlflow.trace</code>, MLflow records the retrieved chunks, the prompt, the answer, tokens and latency.`,`<b>Judge.</b> Each scorer is an LLM judge with a specific rubric. <b>Correctness</b>: are the expected facts present? <b>RetrievalGroundedness</b>: is every claim supported by the retrieved context? <b>RelevanceToQuery</b>: does it address the question? <b>Safety</b>: is it free of harmful content?`,`<b>Review.</b> The MLflow UI shows pass rates per judge and lets you open any failed trace to see why: wrong retrieval, or a good passage the LLM ignored.`,`<b>Iterate.</b> Change one thing (top-k, prompt, chunking, model), re-run, compare runs side by side. Ship when the scores meet the bar you agreed with the business.`],concepts:[{t:`Trace`,d:`A step-by-step recording of one request: each function call with inputs, outputs and timing. It is the X-ray that explains any answer.`},{t:`LLM-as-a-judge`,d:`Using a strong model, with a narrow rubric, to grade answers. Each judge returns a pass/fail plus a written rationale. It scales human review rather than replacing it.`},{t:`Retrieval vs generation errors`,d:`Low groundedness means the LLM invented things. Correct passages missing from the trace means retrieval failed. Each points to a different fix.`}],code:[{label:`Python · MLflow 3 evaluation`,lang:`py`,src:`import mlflow
from mlflow.genai.scorers import (Correctness, RetrievalGroundedness,
                                  RelevanceToQuery, Safety)

eval_data = [
  {"inputs": {"question": "What's the timely-filing limit for OON claims?"},
   "expectations": {"expected_facts": ["90 days", "from date of service"]}},
  {"inputs": {"question": "Is telehealth covered for behavioral health?"},
   "expectations": {"expected_facts": ["covered", "audio-video required"]}},
  # … ~50 more
]

@mlflow.trace
def predict_fn(question: str) -> str:
    return answer(question)["answer"]

results = mlflow.genai.evaluate(
    data=eval_data, predict_fn=predict_fn,
    scorers=[Correctness(), RetrievalGroundedness(),
             RelevanceToQuery(), Safety()])
print(results.metrics)`}],io:[{title:`Input · evaluation set`,cols:[`question`,`expected_facts`],rows:[[`Timely-filing limit, OON?`,`90 days · from date of service`],[`Telehealth for behavioral health?`,`covered · audio-video required`],[`Termination notice period?`,`90 days written notice`]]},{title:`Output · scores (illustrative)`,cols:[`judge`,`pass rate`,`what it means`],rows:[[`Correctness`,`92%`,`expected facts present`],[`RetrievalGroundedness`,`96%`,`claims backed by context`],[`RelevanceToQuery`,`98%`,`on-topic`],[`Safety`,`100%`,`no harmful content`]]}],why:`It turns “it seems to work” into numbers the business can sign off on, and catches regressions whenever you change the prompt, model or data.`,pitfalls:[`An evaluation set written by the developer alone. The questions must come from real analysts.`,`Judging only the final answer. Inspect traces to see whether retrieval found the right clause.`,`Running evaluation once. Re-run it on every change and keep monitoring in production.`],objects:[`evalSet`,`trace`,`correctness`,`groundedness`,`relevance`,`safety`]},{lead:`The agent becomes a service analysts can use. The Agent Bricks CLI packages and deploys it to Agent Runtime on Databricks Apps. Every request passes through Unity Gateway, and Unity Catalog permissions apply to the data it touches.`,happens:[`<b>Scaffold & test locally.</b> <code>agentbricks init</code> creates a project (agent code, <code>agent.toml</code> config). <code>agentbricks dev</code> runs it locally against your workspace.`,`<b>Deploy.</b> <code>agentbricks deploy provider-ops</code> creates the Databricks App <code>agent-bricks-provider-ops</code> on Agent Runtime. It provisions the memory and session stores declared in <code>agent.toml</code>, grants the app’s service principal access, and turns on MLflow tracing.`,`<b>Sign in.</b> Analysts open the app URL and sign in with Databricks (OAuth). Requests carry their identity.`,`<b>Govern.</b> Model calls go through <b>Unity Gateway</b>, which applies rate limits (QPM/TPM, HTTP 429 when exceeded), usage tracking (<code>system.serving.endpoint_usage</code>), inference tables and guardrails. Data access is checked by <b>Unity Catalog</b>: no <code>SELECT</code> on the index means no answer from it.`,`<b>Operate.</b> <code>agentbricks deployments logs | get | stop</code>; scale with <code>--instances</code> (1–5). Production traces feed back into evaluation.`],concepts:[{t:`Service principal`,d:`A non-human identity the app runs as. You grant it exactly what the agent needs (the index, the model service) and nothing else.`},{t:`Unity Gateway`,d:`Formerly AI Gateway. One control point for all model and MCP traffic, with limits, logging, guardrails and fallbacks, so security teams can see and control AI usage.`},{t:`Experimental CLI`,d:`The Agent Bricks CLI (<code>databricks-agentbricks</code>, v0.6) is experimental, so commands may change. The underlying pieces (Apps, Unity Gateway, Unity Catalog) are the stable foundation.`}],code:[{label:`Shell · build and ship`,lang:`sh`,src:`pip install databricks-agentbricks
agentbricks init provider-ops --framework langgraph
cd provider-ops && agentbricks dev            # local test

agentbricks --profile prod deploy provider-ops --instances 2
agentbricks deployments get  agent-bricks-provider-ops
agentbricks deployments logs agent-bricks-provider-ops`},{label:`SQL · permissions & usage`,lang:`sql`,src:`-- who may use the agent's data
GRANT USE CATALOG ON CATALOG main TO \`provider-ops-analysts\`;
GRANT USE SCHEMA ON SCHEMA ${s_} TO \`provider-ops-analysts\`;
GRANT SELECT ON TABLE ${s_}.chunks_index TO \`provider-ops-analysts\`;

-- what it costs / who uses it
SELECT * FROM system.serving.endpoint_usage
WHERE request_time > current_date() - INTERVAL 7 DAYS;`}],io:[{title:`Input`,cols:[`what`,`value`],rows:[[`agent project`,`provider-ops/ (code + agent.toml)`],[`profile`,`prod workspace`]]},{title:`Output`,cols:[`what`,`value`],rows:[[`app`,`agent-bricks-provider-ops (Databricks App, 2 instances)`],[`auth`,`Databricks OAuth, user identity on every request`],[`observability`,`MLflow traces · endpoint_usage · inference tables`]]}],why:`Production means governed: the same identities, permissions, lineage and audit logs as the rest of your data platform, with no separate AI silo.`,pitfalls:[`Giving the app’s service principal broad access “to make it work”. Grant only the index and model service.`,`No rate limits. Set Unity Gateway QPM/TPM before opening the app to everyone.`,`Treating launch as the end. Review production traces weekly and add failures to the evaluation set.`],objects:[`endUser`,`gateway`,`app`,`unityCatalog`,`permissions`]}],l_={analyst:{kind:`Business user`,title:`Provider-ops analyst`,what:`The person who answers provider questions: claims limits, fees, credentialing, contract terms.`,how:`Today they search shared folders and read PDFs. With the agent, they ask in plain English and verify the cited page.`,here:`Their questions define the evaluation set (step 08), and their Unity Catalog identity controls which contracts the agent may read for them.`,facts:[[`Wants`,`Fast, correct, cited answers`],[`Cares about`,`Trust: “show me where it says that”`]]},pdfStack:{kind:`Business data`,title:`~600 contract & policy PDFs`,what:`Provider agreements, claims policies, fee schedules and credentialing rules. Long, legal and full of tables.`,how:`They change weekly: amendments, new providers, new fee years. Search by file name or keyword misses clauses that use different wording.`,here:`These are the knowledge source. Steps 02–05 turn them into a searchable index without retraining any model.`,facts:[[`Volume`,`~600 files · ~24,000 chunks`],[`Hard parts`,`Tables, scans, near-duplicate versions`]]},clock:{kind:`Business pain`,title:`20–40 minutes per question`,what:`The time it takes today to locate and confirm one clause.`,how:`Multiply it by dozens of questions a day per analyst. Answers also vary between people.`,here:`Target: under 10 seconds with a citation, measured in production via MLflow traces (latency per request).`},bubble:{kind:`Business question`,title:`A typical question`,what:`“What’s the timely-filing limit for out-of-network claims?”`,how:`Natural language, possibly vague, using different words than the contract (“timely filing” vs “submit within ninety days”).`,here:`This exact question is followed through every step of the walkthrough.`},blueprint:{kind:`Developer solution`,title:`The RAG blueprint`,what:`A chain of managed Databricks components. Each block on the tray is one component, in the order data flows through them.`,how:`Offline: Volume → Delta → AI Functions → Embedding → AI Search. Online: AI Search → LLM. Around both: MLflow (quality) and Agent Runtime/App (delivery).`,here:`Click each block to see what it is. Each one has its own step later in the tour.`},volume:{kind:`Unity Catalog · storage`,title:`Unity Catalog Volume`,what:`A governed folder for <b>files</b>, backed by your cloud object storage (S3 / ADLS / GCS).`,how:`Created with <code>CREATE VOLUME</code>; addressed as <code>/Volumes/&lt;catalog&gt;/&lt;schema&gt;/&lt;volume&gt;/</code>. Files keep their format: a PDF stays a PDF. Access is controlled with <code>READ VOLUME</code> / <code>WRITE VOLUME</code> grants.`,here:`Holds the original contracts at <code>/Volumes/main/provider_ops/contracts/</code>. It is the landing zone and the archive of record.`,code:{lang:`sql`,src:`CREATE VOLUME main.provider_ops.contracts;
LIST '/Volumes/main/provider_ops/contracts/';`}},deltaTable:{kind:`Delta Lake · table`,title:`Delta table`,what:`A governed table of <b>rows and columns</b>, the format every Databricks table uses by default.`,how:`Data is stored as Parquet files; a <code>_delta_log/</code> folder of JSON commits records every change. That gives ACID transactions, versions (time travel) and a row-level change feed.`,here:`<code>raw_docs</code> holds one row per PDF (path, size, date, bytes). <code>chunks</code> holds one row per passage. Both are queried with SQL.`,facts:[[`On disk`,`part-0000….parquet + _delta_log/000…01.json`],[`History`,`DESCRIBE HISTORY main.provider_ops.raw_docs`]],code:{lang:`sql`,src:`SELECT path, length FROM main.provider_ops.raw_docs;
SELECT * FROM main.provider_ops.raw_docs VERSION AS OF 3;`}},aiParse:{kind:`AI Function`,title:`ai_parse_document`,what:`A built-in SQL function that reads a document’s bytes and returns its structure: pages, elements, text and tables.`,how:`A Databricks-hosted vision/layout model processes each page. Output is a VARIANT; tables are HTML; scanned pages are OCR’d. Limits: 500 pages and 100 MB per document. Use <code>pageRange</code> for parts.`,here:`Turns each <code>content</code> BINARY into structured text in <code>parsed_docs</code>.`,code:{lang:`sql`,src:`SELECT path, ai_parse_document(content) AS parsed
FROM main.provider_ops.raw_docs;`}},aiPrep:{kind:`AI Function · Beta`,title:`ai_prep_search`,what:`Turns parsed documents into search-ready chunks.`,how:`Splits by structure (keeps paragraphs and tables whole) and adds context: title, section, page, a document summary, and table summaries with related questions. Needs DBR 18.2+.`,here:`Produces <code>chunk_id</code>, <code>chunk_to_retrieve</code> and <code>chunk_to_embed</code> for every passage.`,code:{lang:`sql`,src:`SELECT ai_prep_search(parsed) AS result
FROM main.provider_ops.parsed_docs;`}},embedModel:{kind:`Foundation Model API`,title:`databricks-gte-large-en`,what:`A text-embedding model hosted by Databricks.`,how:`Reads up to 8,192 tokens and outputs a 1,024-number vector (not normalised). Pay-per-token, no servers. Unity Gateway model service: <code>system.ai.gte-large-en</code>.`,here:`Embeds every chunk (via the index) and every question, the same model on both sides.`,facts:[[`Dimensions`,`1024`],[`Context`,`8,192 tokens`]]},index:{kind:`Databricks AI Search`,title:`Vector index · chunks_index`,what:`A nearest-neighbour index over all chunk vectors, served by an AI Search endpoint.`,how:`Delta Sync type: mirrors <code>main.provider_ops.chunks</code>, embeds new or changed rows on <code>sync()</code>, answers <code>similarity_search</code> in milliseconds. It is a Unity Catalog object with grants and lineage.`,here:`The “memory” the agent searches. Each dot in the cloud is one chunk.`,code:{lang:`py`,src:`index = client.get_index(index_name="main.provider_ops.chunks_index")
index.similarity_search(query_text=q, num_results=5)`}},llm:{kind:`Foundation Model API`,title:`Llama 3.3 70B Instruct`,what:`A 70-billion-parameter, instruction-tuned language model hosted by Databricks.`,how:`Endpoint <code>databricks-meta-llama-3-3-70b-instruct</code> (model service <code>system.ai.meta-llama-3-3-70b-instruct</code>). Called with chat messages; generates one token at a time.`,here:`Reads the question and 5 retrieved passages, and writes the cited answer. It never sees the other 23,995 chunks.`,code:{lang:`py`,src:`w.serving_endpoints.query(
    name="databricks-meta-llama-3-3-70b-instruct",
    messages=prompt, temperature=0)`}},judges:{kind:`MLflow 3`,title:`Evaluation & LLM judges`,what:`Automated quality measurement for GenAI apps.`,how:`<code>mlflow.genai.evaluate</code> runs the agent on a test set and applies scorers (Correctness, RetrievalGroundedness, RelevanceToQuery, Safety), each an LLM judge with a rubric.`,here:`The gate before launch, and the regression test after every change.`},app:{kind:`Agent Runtime · Databricks Apps`,title:`The agent app`,what:`The deployed agent: a web app plus API, running on Databricks.`,how:`<code>agentbricks deploy</code> creates the Databricks App <code>agent-bricks-&lt;name&gt;</code> on Agent Runtime, with tracing, session/memory stores and a service principal. Users sign in with Databricks OAuth.`,here:`Where analysts type questions and click citations.`},question:{kind:`Input`,title:`The question`,what:`Free text from the analyst.`,how:`Sent to the index as <code>query_text</code>. AI Search embeds it with the same model as the chunks.`,here:`“What’s the timely-filing limit for out-of-network claims?”`},ragAgent:{kind:`Agent`,title:`RAG agent`,what:`Code that orchestrates retrieval and generation: <i>search → build prompt → call LLM → format citations</i>.`,how:`A Python function or LangGraph graph. Every call is traced with MLflow. Deployed with Agent Bricks.`,here:`The core in the middle. The orbiting pages are the passages it pulls in for this question.`,code:{lang:`py`,src:`hits = index.similarity_search(query_text=q, num_results=5)
reply = llm(build_prompt(q, hits))`}},answer:{kind:`Output`,title:`Cited answer`,what:`The LLM’s response, grounded in retrieved text, with [n] markers.`,how:`The prompt forces “only from context, cite [n]”. The app maps each [n] to a source file and page.`,here:`“Out-of-network claims must be filed within 90 days of the date of service [1][2].”`},citation:{kind:`Output`,title:`Citation`,what:`A pointer from a claim in the answer back to the exact source passage.`,how:`Each chunk keeps <code>source_uri</code> and <code>page</code> from ingestion and parsing, so metadata flows end to end.`,here:`Contract §4.2 (p.12) and Claims Policy (p.7). The analyst clicks through to verify.`},pdf:{kind:`File`,title:`Contract PDF`,what:`A binary file: page-drawing instructions, fonts and images. Not plain text.`,how:`Starts with the bytes <code>25 50 44 46</code> (“%PDF”). Copied unchanged into the Volume.`,here:`e.g. <code>provider_contract_acme.pdf</code>, 2.4 MB, 42 pages.`},readFiles:{kind:`SQL table function`,title:`READ_FILES`,what:`Reads files from a path and returns them as rows.`,how:`With <code>format =&gt; 'binaryFile'</code>, each file becomes one row: <code>path</code>, <code>modificationTime</code>, <code>length</code>, <code>content</code> (BINARY). The moving packets show files becoming rows.`,here:`Bridges the Volume (files) and the Delta table (rows).`,code:{lang:`sql`,src:`SELECT path, length, content
FROM READ_FILES('/Volumes/main/provider_ops/contracts/*.pdf',
                format => 'binaryFile');`}},pdfPage:{kind:`Document`,title:`PDF page under the parser`,what:`One page of a contract being read by <code>ai_parse_document</code>.`,how:`The scan line represents the model detecting layout elements (headers, paragraphs, tables) with their page and position.`,here:`Page 12: section “4. Claims Submission”, clause 4.2.`},layout:{kind:`Parsed structure`,title:`Detected layout elements`,what:`The outlines are elements the parser found: title, section header, text blocks, a table.`,how:`Each becomes an entry in the VARIANT output with type, text (tables as HTML), page and bounding box.`,here:`Keeping tables intact is what lets the agent answer fee-schedule questions.`},chunk:{kind:`Row in main.provider_ops.chunks`,title:`Chunk (passage)`,what:`A self-contained piece of a document, usually a few paragraphs or one table.`,how:`Produced by <code>ai_prep_search</code>; one row per chunk after <code>variant_explode</code>. Columns: <code>chunk_id</code>, <code>chunk_to_retrieve</code>, <code>chunk_to_embed</code>, <code>page</code>, <code>source_uri</code>.`,here:`e.g. <code>acme_…_17</code>: “4.2 Provider shall submit claims within ninety (90) days…”`},vector:{kind:`Embedding`,title:`Vector (1,024 numbers)`,what:`The meaning of a chunk as a point in a 1,024-dimensional space.`,how:`Produced by <code>databricks-gte-large-en</code>. Each bar in the barcode is one dimension’s value. Close vectors mean similar meaning.`,here:`<code>[0.0123, -0.0831, 0.0412, …]</code> for chunk <code>acme_…_17</code>.`},portal:{kind:`Model call`,title:`Embedding model`,what:`The portal is the model endpoint: text goes in, a vector comes out.`,how:`Called by AI Search during sync (managed embeddings), batched for throughput.`,here:`Endpoint <code>databricks-gte-large-en</code>.`},chunksTable:{kind:`Source table`,title:`main.provider_ops.chunks`,what:`The Delta table the index mirrors.`,how:`Must have Change Data Feed on, a unique primary key (<code>chunk_id</code>), and a text column to embed (<code>chunk_to_embed</code>).`,here:`~24,000 rows. New PDFs add rows; deleted PDFs remove them.`},deltaSync:{kind:`AI Search sync`,title:`Delta Sync`,what:`The link that keeps the index identical to the source table.`,how:`On <code>index.sync()</code> (TRIGGERED) or continuously, AI Search reads the table’s Change Data Feed, embeds inserted or updated rows, and removes deleted ones.`,here:`The arrow from the table into the cloud. Run it as the last task of the ingestion job.`,code:{lang:`py`,src:`client.get_index(index_name="main.provider_ops.chunks_index").sync()`}},vsEndpoint:{kind:`AI Search compute`,title:`AI Search endpoint`,what:`The managed compute that hosts indexes and serves queries.`,how:`Standard (lowest latency, triggered or continuous) or Storage-optimized (billions of vectors, lower cost, triggered only). Scales automatically.`,here:`<code>provider-ops-search</code>, Standard.`,code:{lang:`py`,src:`client.create_endpoint_and_wait(name="provider-ops-search",
                                endpoint_type="STANDARD")`}},cluster:{kind:`Vector neighbourhood`,title:`Topic cluster`,what:`A group of chunks about the same subject.`,how:`Nobody labels them. They emerge because the embedding model puts similar meanings close together.`,here:`Claims, credentialing, fee schedules, termination, telehealth.`},queryVector:{kind:`Embedding`,title:`Question vector`,what:`The question, embedded with the same model as the chunks.`,how:`AI Search does this automatically when you pass <code>query_text</code>.`,here:`Lands in the “claims” neighbourhood, next to clause 4.2.`},topk:{kind:`Search result`,title:`Top-k results (k = 5)`,what:`The 5 chunks closest to the question, with similarity scores.`,how:`<code>num_results=5</code>. Optional HYBRID adds keyword relevance; filters restrict by metadata; a reranker can re-order.`,here:`Scores 0.92 → 0.74. Only these 5 reach the LLM.`},prompt:{kind:`Prompt`,title:`Context passages`,what:`The 5 retrieved chunks, numbered and labelled with source and page, inserted into the prompt.`,how:`Assembled by the agent code under a system instruction: “answer only from context, cite [n]”.`,here:`[1] Contract §4.2 p.12 · [2] Claims Policy p.7 · …`},tokens:{kind:`Generation`,title:`Tokens`,what:`The answer being written, one token (~¾ word) at a time.`,how:`Each token is predicted from the prompt and all previous tokens. <code>temperature=0</code> picks the most likely one.`,here:`~38 output tokens for this answer; billing and rate limits count tokens.`},evalSet:{kind:`MLflow dataset`,title:`Evaluation set`,what:`Real questions with the facts a correct answer must include.`,how:`Rows like <code>{"inputs": {"question": …}, "expectations": {"expected_facts": [...]}}</code>. Can live in a Delta table or an MLflow evaluation dataset.`,here:`~50 analyst questions agreed with the business.`},trace:{kind:`MLflow tracing`,title:`Trace`,what:`A recording of one request: retrieval, prompt, LLM call, output, with timings and tokens.`,how:`Captured by <code>@mlflow.trace</code> during evaluation and automatically in production.`,here:`Open a failed question’s trace to see whether retrieval or generation went wrong.`},correctness:{kind:`LLM judge`,title:`Correctness`,what:`Does the answer contain the expected facts?`,how:`Needs <code>expectations</code> (expected_facts or expected_response) in each row.`,here:`Checks “90 days” and “from date of service” are both present.`,code:{lang:`py`,src:`from mlflow.genai.scorers import Correctness`}},groundedness:{kind:`LLM judge`,title:`RetrievalGroundedness`,what:`Is every claim supported by the retrieved context?`,how:`Reads the retrieved chunks from the trace and the answer, and flags unsupported statements.`,here:`Catches the model adding “usually 365 days” from general knowledge.`},relevance:{kind:`LLM judge`,title:`RelevanceToQuery`,what:`Does the answer address the question asked?`,how:`Compares question and answer. It needs no ground truth.`,here:`Fails answers that are correct but about the wrong topic.`},safety:{kind:`LLM judge`,title:`Safety`,what:`Is the response free of harmful or inappropriate content?`,how:`Content-safety rubric applied to every answer.`,here:`Expected 100% for a contracts assistant. Any failure blocks the release.`},gateway:{kind:`Governance`,title:`Unity Gateway`,what:`The control point for all model and MCP traffic (formerly AI Gateway).`,how:`Rate limits per user or endpoint (QPM/TPM, HTTP 429 when exceeded), usage tracking in <code>system.serving.endpoint_usage</code>, inference tables, guardrails.`,here:`Every LLM and embedding call from the agent passes through it.`},unityCatalog:{kind:`Governance`,title:`Unity Catalog`,what:`One governance layer for files, tables, indexes, models and apps.`,how:`Three-level names, grants, row/column security, audit logs and automatic lineage from PDF to answer.`,here:`The dome: everything the agent touches is inside it.`},endUser:{kind:`User`,title:`Analyst using the app`,what:`An authenticated user sending a question.`,how:`Signs in with Databricks OAuth; the request carries their identity to the agent.`,here:`Allowed users get answers; others are stopped (red).`},permissions:{kind:`Unity Catalog grant`,title:`Access denied`,what:`A request from someone without permission on the data.`,how:`Without <code>SELECT</code> on the index (or <code>EXECUTE</code>/access on the model service), the call fails. No data leaves the governed boundary.`,here:`User 3 is not in <code>provider-ops-analysts</code>.`,code:{lang:`sql`,src:"GRANT SELECT ON TABLE main.provider_ops.chunks_index\n  TO `provider-ops-analysts`;"}},cli:{kind:`Developer tool · experimental`,title:`agentbricks deploy`,what:`Agent Bricks CLI command that ships the agent.`,how:`Creates the Databricks App <code>agent-bricks-&lt;name&gt;</code> on Agent Runtime, provisions stores from <code>agent.toml</code>, grants the service principal, enables tracing.`,here:`<code>agentbricks --profile prod deploy provider-ops --instances 2</code>`}},J={lava:14247227,ember:13075039,amber:12821107,cyan:9086138,mint:9350813,violet:9999285,pink:11766170,white:15328992,steel:2303533},u_=[13208168,9086138,9999285,9350813,12821107],d_=e=>Math.min(1,Math.max(0,e)),Y=(e,t,n)=>d_((e-t)/(n-t)),f_=(e,t,n)=>e+(t-e)*n,X={out:e=>1-(1-e)**3,in:e=>e*e*e,io:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,back:e=>1+2.2*(e-1)**3+1.2*(e-1)**2,elastic:e=>e===0||e===1?e:2**(-10*e)*Math.sin((e*10-.75)*(2*Math.PI/3))+1},p_=(e,t,n)=>{let r=Y(e,t,n);return Math.sin(r*Math.PI)},m_=new Map;function Z(e,t=2.2){let n=e+`_`+t;return m_.has(n)||m_.set(n,new Ro({color:e,roughness:.42,metalness:.15,emissive:e,emissiveIntensity:Math.min(.38,.06+t*.07),envMapIntensity:.8})),m_.get(n)}function h_(e,t=2.2,n=1){return new Ro({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,transparent:!0,opacity:n*.55,depthWrite:!1})}function g_(e=16777215,t={}){return new zo({color:e,metalness:0,roughness:Math.max(.12,t.roughness??.12),transmission:t.transmission??1,thickness:t.thickness??.6,ior:1.45,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:t.env??.9,transparent:!0,opacity:t.opacity??1,attenuationColor:new W(t.tint??e),attenuationDistance:t.att??3,side:t.side??0})}function __(e=16777215,t=.28,n={}){return new zo({color:e,metalness:.05,roughness:n.roughness??.35,transparent:!0,opacity:Math.min(.92,t*1.6+.12),clearcoat:.4,clearcoatRoughness:.3,envMapIntensity:.6,depthWrite:!1,side:2,emissive:n.emissive??0,emissiveIntensity:Math.min(.08,n.ei??0)})}function v_(e=2764084,t=.35,n=.9){return new Ro({color:e,metalness:Math.min(n,.75),roughness:Math.max(t,.32),envMapIntensity:.9})}function Q(e=2764084,t=.7){return new Ro({color:e,metalness:.05,roughness:t,envMapIntensity:.6})}function y_(e,t,n=1.6,r=.9){return new Pi(new ra(e,20),new Si({color:t,transparent:!0,opacity:r*.5}))}function $(e,t,n,r=.08,i=4){let a=new Pa,o=-e/2,s=-t/2;a.moveTo(o+r,s),a.lineTo(o+e-r,s),a.quadraticCurveTo(o+e,s,o+e,s+r),a.lineTo(o+e,s+t-r),a.quadraticCurveTo(o+e,s+t,o+e-r,s+t),a.lineTo(o+r,s+t),a.quadraticCurveTo(o,s+t,o,s+t-r),a.lineTo(o,s+r),a.quadraticCurveTo(o,s,o+r,s);let c=new yo(a,{depth:Math.max(.001,n-r*2*.5),bevelEnabled:!0,bevelSize:r*.5,bevelThickness:r*.5,bevelSegments:i,curveSegments:i});return c.center(),c}function b_(e,t=``,n=[0,0,0]){let r=document.createElement(`div`);r.className=`lbl `+t,r.innerHTML=e;let i=new Kg(r);return i.position.set(...n),i.userData.isLabel=!0,i}var x_=[{t:`PROVIDER CONTRACT`,c:`#b8603e`},{t:`CLAIMS POLICY`,c:`#a8865a`},{t:`CREDENTIALING`,c:`#5f7d96`},{t:`FEE SCHEDULE`,c:`#76709a`},{t:`NETWORK POLICY`,c:`#5f8a76`},{t:`PRIOR AUTH`,c:`#9a7a52`}],S_={};function C_(e=0){if(e%=x_.length,S_[e])return S_[e];let t=x_[e],n=document.createElement(`canvas`);n.width=512,n.height=680;let r=n.getContext(`2d`);r.scale(2,2),r.fillStyle=`#eeebe4`,r.fillRect(0,0,256,340),r.fillStyle=t.c,r.fillRect(20,22,4,26),r.fillStyle=`#2a2c31`,r.font=`600 15px Inter, Helvetica, Arial, sans-serif`,r.fillText(t.t,32,36),r.fillStyle=`#8b8d92`,r.font=`9px Inter, Helvetica, Arial, sans-serif`,r.fillText(`Rev. 2026 · Page 7 of 42`,32,50);let i=72;for(let e=0;e<15;e++)if(e===5||e===11){r.strokeStyle=`#b9b6ae`,r.lineWidth=1,r.strokeRect(20,i,216,34),r.beginPath();for(let e=1;e<4;e++)r.moveTo(20+e*54,i),r.lineTo(20+e*54,i+34);r.moveTo(20,i+12),r.lineTo(236,i+12),r.stroke(),r.fillStyle=`#d9d5cc`,r.fillRect(20,i,216,12),i+=44}else r.fillStyle=e%4==0?`#45474d`:`#a9a8a4`,r.fillRect(20,i,216*(.55+e*37%40/100),e%4==0?6:4),i+=e%4==0?16:12;r.strokeStyle=t.c,r.lineWidth=1.2,r.beginPath(),r.roundRect(196,304,40,18,3),r.stroke(),r.fillStyle=t.c,r.font=`600 10px Inter, Helvetica, Arial, sans-serif`,r.fillText(`PDF`,205,317);let a=new Ui(n);return a.colorSpace=Re,a.anisotropy=8,S_[e]=a,a}var w_=x_.map(e=>new W(e.c).getHex()),T_=new Ro({color:14276044,roughness:.9,metalness:0});function E_(e){return new Ro({map:e,color:14078924,roughness:.82,metalness:0,envMapIntensity:.5})}function D_(e,t,n,r,i=3422014){let a=i===`paper`?T_:Q(i,.55);return new G(new K(e,t,n),[a,a,a,a,E_(r),a])}function O_(e=0,t=1.1,n=1.45){let r=new U,i=D_(t,n,.03,C_(e),`paper`);return r.add(i),r}var k_;function A_(){if(k_)return k_;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),k_=new Ui(e),k_}var j_=class{constructor(e=J.cyan,t=.025,n=3){this.mesh=new G(new Yi(t*.8,t*.8,1,8,1,!0),new Ro({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,transparent:!0,opacity:.75})),this.mesh.geometry.translate(0,.5,0),this.mesh.geometry.rotateX(Math.PI/2)}set(e,t,n=1){let r=e.distanceTo(t)*n;this.mesh.position.copy(e),this.mesh.lookAt(t),this.mesh.scale.set(1,1,Math.max(1e-4,r)),this.mesh.visible=n>.001}},M_=class{constructor(e,t=60,n=J.amber,r=.16,i=.25){this.curve=e,this.n=Math.max(6,Math.round(t*.4)),this.speed=i*.7,t=this.n;let a=new mr;this.pos=new Float32Array(t*3),this.off=new Float32Array(t).map((e,n)=>n/t),a.setAttribute(`position`,new $n(this.pos,3)),this.mat=new Fi({size:r*.55,map:A_(),color:n,transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:1}),this.points=new Bi(a,this.mat),this.points.frustumCulled=!1,this._v=new H}update(e,t=1){for(let t=0;t<this.n;t++){let n=(this.off[t]+e*this.speed)%1;this.curve.getPointAt(n,this._v),this.pos[t*3]=this._v.x,this.pos[t*3+1]=this._v.y,this.pos[t*3+2]=this._v.z}this.points.geometry.attributes.position.needsUpdate=!0,this.mat.opacity=Math.min(.85,t*.8)}};function N_(e=5,t=J.lava){let n=new U,r=new G(new Yi(e,e*1.015,.34,128),new Ro({color:2105896,roughness:.62,metalness:.25,envMapIntensity:.5}));r.position.y=-.17,r.receiveShadow=!0,r.castShadow=!0,n.add(r);let i=new G(new Ji(e*.965,128),new Ro({color:2764083,roughness:.85,metalness:.05,envMapIntensity:.4}));i.rotation.x=-Math.PI/2,i.position.y=.002,i.receiveShadow=!0,n.add(i);let a=new G(new Ji(e*.96,128),new Io({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uR:{value:e}},vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,fragmentShader:`uniform float uR; varying vec2 vP;
      void main(){ float r = length(vP)/uR; float w = fwidth(r*6.);
        float rings = 1.-smoothstep(0.,w*1.2,abs(fract(r*6.)-.5)-.49+w);
        float fade = smoothstep(1.,.35,r);
        gl_FragColor = vec4(vec3(.85,.83,.8), rings*fade*.05); }`}));a.rotation.x=-Math.PI/2,a.position.y=.006,n.add(a);let o=new G(new Eo(e*.985,.012,6,200),new Ro({color:t,emissive:t,emissiveIntensity:.35,roughness:.4}));return o.rotation.x=Math.PI/2,o.position.y=.01,n.add(o),n.userData.uni=a.material.uniforms,n}function P_(e=J.cyan){let t=new U,n=new Ro({color:12170411,roughness:.55,metalness:.05}),r=new Ro({color:new W(e).lerp(new W(2829877),.55),roughness:.75,metalness:.02}),i=new G(new To(.25,40,20),n);i.position.y=1.32,t.add(i);let a=new G(new Yi(.08,.1,.14,16),n);a.position.y=1.08,t.add(a);let o=new G(new qi(.3,.46,8,28),r);o.position.y=.62,t.add(o);let s=new G(new Yi(.42,.46,.06,40),Q(3422014,.6));return s.position.y=.03,t.add(s),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}var F_=new H;function I_(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return e.getWorldScale(F_),Math.min(F_.x,F_.y,F_.z)>.08}var L_=new Kr({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),R_=class e{constructor(e={}){this.group=new U,this.labels=[],this.picks=[],this.local=0,this.loop=e.loop??9,this.accent=e.accent??J.lava,this.cam={pos:[0,4.3,14.5],target:[0,2.1,0],...e.cam||{}},this.plat=N_(e.radius??6.2,this.accent),this.group.add(this.plat),this.focus=0}addLabel(e,t,n,r=this.group){let i=b_(e,t,n);return i.userData.vis=1,r.add(i),this.labels.push(i),i}show(e,t){e.userData.vis=t}pick(e,t,n=[0,0,0]){e.userData.pickId=t;let r={obj:e,id:t,hs:null};if(n){let i=document.createElement(`button`);i.className=`hs`,i.dataset.id=t,i.setAttribute(`aria-label`,`Inspect`),i.innerHTML=`<i></i>`;let a=new Kg(i);a.position.set(...n),a.center.set(.5,.5),e.add(a),r.hs=a}return this.picks.push(r),e}hitBox(e,t,n,r,i=this.group){let a=new G(new K(e,t,n),L_);return a.position.set(...r),a.userData.noShadow=!0,a.userData.hit=!0,a.layers.set(1),i.add(a),a}reset(e=0){this.local=-e}tick(t,n,r){r&&(this.local+=t);let i=Math.max(0,this.local)%this.loop;this.plat.userData.uni.uTime.value=n,this.update(i,n,t);for(let e of this.labels){let t=this.focus*e.userData.vis;e.visible=t>.02,e.visible&&(e.element.style.opacity=t.toFixed(3))}let a=this.focus>.6&&e.hotspots;for(let e of this.picks)if(e.hs){let t=a&&I_(e.obj);e.hs.visible=t,t&&(e.hs.element.style.opacity=Math.min(1,(this.focus-.6)*2.5).toFixed(2))}}update(){}};R_.hotspots=!0;var z_=[{id:`volume`,n:`Volume`},{id:`deltaTable`,n:`Delta table`},{id:`aiParse`,n:`AI Functions`},{id:`embedModel`,n:`Embedding`},{id:`index`,n:`AI Search`},{id:`llm`,n:`LLM`},{id:`judges`,n:`MLflow eval`},{id:`app`,n:`App`}],B_=46;function V_(e){let t=new U,n=Z(J.lava,1.2),r=v_(9080729,.4,.6),i=Q(3816772,.55);if(e===`volume`){let e=new G(new Yi(.3,.3,.5,40),r);e.position.y=.25,t.add(e);let i=new G(new Eo(.3,.02,6,40),n);i.rotation.x=Math.PI/2,i.position.y=.42,t.add(i)}if(e===`deltaTable`)for(let e=0;e<4;e++){let r=new G($(.66,.08,.46,.02),e===3?n:Q(9278107,.5));r.position.y=.06+e*.12,t.add(r)}if(e===`aiParse`){let e=D_(.42,.56,.03,C_(0),`paper`);e.position.y=.32,t.add(e);let r=new G(new K(.52,.03,.06),n);r.position.set(0,.38,.04),t.add(r)}if(e===`embedModel`){let e=new G(new Eo(.26,.07,16,48),r);e.position.y=.36,t.add(e);let i=new G(new To(.08,16,8),n);i.position.y=.36,t.add(i)}if(e===`index`)for(let e=0;e<14;e++){let r=new G(new To(.06,12,8),e%4?Q(9086138,.45):n);r.position.set(Math.sin(e*2.4)*.24,.32+Math.cos(e*1.7)*.18,Math.cos(e*2.4)*.2),t.add(r)}if(e===`llm`){let e=new G(new So(.3,1),Q(9999285,.4));e.position.y=.36,t.add(e);let n=y_(e.geometry,15328992,1,.3);n.position.copy(e.position),t.add(n)}if(e===`judges`){let e=new G(new Yi(.3,.3,.06,40),i);e.rotation.x=Math.PI/2,e.position.y=.36,t.add(e);let r=new G(new Eo(.24,.035,8,48,Math.PI*1.6),n);r.position.set(0,.36,.04),t.add(r)}if(e===`app`){let e=new G($(.44,.62,.05,.06),i);e.position.y=.36,t.add(e);for(let e=0;e<3;e++){let r=new G($(e%2?.26:.2,.08,.02,.03),e%2?n:Q(9086138));r.position.set(e%2?-.05:.06,.52-e*.14,.035),t.add(r)}}return t}var H_=class extends R_{constructor(){super({loop:10,radius:7,cam:{pos:[0,5,15.8],target:[0,1.9,0],pk:1.25}});let e=this.group;this.biz=new U,this.biz.position.set(-3.6,0,0),e.add(this.biz);let t=new U;t.position.set(-.6,0,.9),this.biz.add(t);let n=new G($(2.2,.08,1,.03),Q(4866104,.55));n.position.y=.9,t.add(n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([e,n])=>{let r=new G(new K(.05,.9,.05),v_(2829876,.4,.6));r.position.set(e*1,.45,n*.42),t.add(r)});let r=new G($(.6,.4,.03,.02),Q(2829876,.4));r.position.set(.1,1.15,-.1),r.rotation.x=-.25,t.add(r),this.analyst=P_(J.cyan),this.analyst.position.set(-.6,0,1.9),this.biz.add(this.analyst),this.analyst.rotation.y=Math.PI*.9,this.stack=new hi(new K(.85,.045,1.1),new Ro({color:14078924,roughness:.85}),B_),this.stack.position.set(1.5,0,-.4),this.biz.add(this.stack),this._m=new Lt,this._q=new pt,this._s=new H,this._p=new H,this._e=new qt,this.jit=Array.from({length:B_},(e,t)=>[Math.sin(t*7.1)*.05,Math.cos(t*3.3)*.05,Math.sin(t*1.9)*.08]),this.stack.computeBoundingSphere=function(){this.boundingSphere=new or(new H(0,1.1,0),1.3)},this.stack.computeBoundingSphere(),this.addLabel(`≈ 600 contracts &amp; policy PDFs`,`ghost`,[1.5,-.35,.6],this.biz),this.clock=new U,this.clock.position.set(-1.7,3.7,-.6),this.biz.add(this.clock);let i=new G(new Yi(.62,.62,.08,64),Q(14868182,.6));i.rotation.x=Math.PI/2,this.clock.add(i);let a=new G(new Eo(.64,.05,12,64),v_(3816772,.4,.6));this.clock.add(a);for(let e=0;e<12;e++){let t=new G(new K(.03,e%3?.06:.12,.02),Q(2829876)),n=e/12*Math.PI*2;t.position.set(Math.sin(n)*.5,Math.cos(n)*.5,.05),t.rotation.z=-n,this.clock.add(t)}this.hMin=new G(new K(.035,.46,.02),Q(2829876)),this.hMin.geometry.translate(0,.21,0),this.hMin.position.z=.06,this.clock.add(this.hMin),this.hHr=new G(new K(.05,.3,.02),Z(J.lava,1.2)),this.hHr.geometry.translate(0,.13,0),this.hHr.position.z=.07,this.clock.add(this.hHr),this.clockLbl=this.addLabel(`20–40 min per question`,`ghost nomob`,[0,.95,0],this.clock),this.bubble=this.addLabel(`“What is the timely-filing limit for Aetna?”`,`bubble cyan`,[-.6,2.55,1.9],this.biz),this.addLabel(`BUSINESS NEED`,`section`,[0,5,0],this.biz);let o=[new H(-1.4,1.6,.4),new H(0,2.3,.6),new H(1.4,1.6,.4)];this.bridgeCurve=new pa(o),this.bridge=new G(new Do(this.bridgeCurve,60,.025,8),Q(9080729,.5)),e.add(this.bridge),this.bridge.geometry.setDrawRange(0,0),this.chev=new G(new Xi(.1,.26,16),Z(J.lava,1.5)),e.add(this.chev),this.dev=new U,this.dev.position.set(3.7,0,0),this.dev.scale.setScalar(1.18),e.add(this.dev),this.tray=new G($(5.4,.12,3.9,.06),Q(2435635,.7)),this.tray.position.y=.06,this.dev.add(this.tray);let s=new $s(5.2,26,6122109,3818064);s.position.y=.125,s.material.transparent=!0,s.material.opacity=.35,this.dev.add(s),this.tray.add(y_(this.tray.geometry,7174797,1,.4)),this.blocks=z_.map((e,t)=>{let n=t<4?0:1,r=n?3-(t-4):t,i=new U;i.position.set(-1.95+r*1.3,.12,n?.95:-.95),this.dev.add(i);let a=new G($(.95,.14,.95,.04),Q(3817287,.55));a.position.y=.07,i.add(a);let o=V_(e.id);return o.position.y=.14,i.add(o),i.userData.ic=o,i.userData.lbl=this.addLabel(`<b>`+(t+1)+`</b> `+e.n,`ghost tiny`,[0,-.18,.62],i),this.pick(i,e.id,t===0||t===5?[.38,.95,0]:null),i});let c=this.blocks.map(e=>e.position.clone().add(new H(0,.12,0))),l=new mr().setFromPoints(c);this.flow=new Ai(l,new Si({color:J.lava,transparent:!0,opacity:.7})),this.flow.position.y=.04,this.dev.add(this.flow),this.addLabel(`DEVELOPER SOLUTION`,`section`,[0,4.25,0],this.dev),this.solLbl=this.addLabel(`RAG agent on Databricks · cited answers in seconds`,`lava nomob`,[0,2.3,-1.6],this.dev),this.pick(this.analyst,`analyst`,[0,1.95,0]),this.pick(this.stack,`pdfStack`,[.55,2.25,0]),this.pick(this.clock,`clock`,[.6,.6,.1]),this.pick(this.hitBox(3.2,.6,.3,[-4.2,2.55,1.9]),`bubble`,null),this.pick(this.tray,`blueprint`,[2.6,.3,1.6])}update(e,t){let n=1-Y(e,9.6,10),r=Y(e,.2,1.8);for(let e=0;e<B_;e++){let t=Y(r*B_,e,e+1),[i,a,o]=this.jit[e];this._p.set(i,.03+e*.048+(1-t)*.6,a),this._e.set(0,o,0),this._q.setFromEuler(this._e),this._s.setScalar(Math.max(1e-4,t*n)),this._m.compose(this._p,this._q,this._s),this.stack.setMatrixAt(e,this._m)}this.stack.instanceMatrix.needsUpdate=!0;let i=p_(e,1,6);this.hMin.rotation.z=-t*(.4+i*6),this.hHr.rotation.z=-t*(.04+i*.5),this.clock.scale.setScalar(Math.max(.001,X.back(Y(e,.6,1.1))*n)),this.show(this.clockLbl,Y(e,1.2,1.6)*n),this.show(this.bubble,Y(e,1.4,1.8)*n),this.analyst.rotation.y=Math.PI*.9+Math.sin(t*.8)*.15*i;let a=X.io(Y(e,2.6,3.4));this.bridge.geometry.setDrawRange(0,Math.floor(a*n*this.bridge.geometry.index.count/3)*3),this.chev.visible=a>.02&&n>.05,this.bridgeCurve.getPoint(Math.min(.999,a),this._p),this.chev.position.copy(this._p);let o=this.bridgeCurve.getTangent(Math.min(.999,a));this.chev.quaternion.setFromUnitVectors(new H(0,1,0),o),this.blocks.forEach((r,i)=>{let a=X.back(Y(e,3.4+i*.32,3.9+i*.32))*n;r.userData.ic.scale.setScalar(Math.max(.001,a)),r.userData.ic.position.y=.14+Math.sin(t*1.4+i)*.03*a,r.userData.ic.children[0]&&(r.userData.ic.rotation.y=Math.sin(t*.5+i)*.35),this.show(r.userData.lbl,Y(e,3.6+i*.32,3.9+i*.32)*n)});let s=Y(e,3.6,6.16);this.flow.geometry.setDrawRange(0,Math.max(0,Math.ceil(s*8*n))),this.show(this.solLbl,Y(e,6.6,7)*n)}},U_=class extends R_{constructor(){super({loop:9.5,cam:{pos:[0,4.4,15],target:[0,2.2,0]}});let e=this.group;this.user=P_(J.cyan),this.user.position.set(-5,0,.6),this.user.rotation.y=.5,e.add(this.user),this.qPanel=new G($(3.2,1.25,.12,.16),__(5989488,.5)),this.qPanel.position.set(-3.3,3.35,.4),e.add(this.qPanel),this.qPanel.add(y_(this.qPanel.geometry,J.cyan,1,.5)),this.qLbl=this.addLabel(`What’s the <b>timely-filing limit</b> for out-of-network claims?`,`bubble cyan`,[0,0,.1],this.qPanel),this.core=new U,this.core.position.set(.6,2.3,0),e.add(this.core),this.shell=new G(new So(1.25,0),g_(16767433,{thickness:1.2,roughness:.05,tint:16747100,att:1.6})),this.core.add(this.shell),this.shellEdges=y_(this.shell.geometry,J.amber,1,.5),this.core.add(this.shellEdges),this.heart=new G(new So(.48,2),Z(J.lava,2)),this.core.add(this.heart),this.halo=new G(new To(.9,32,16),h_(J.ember,.6,.1)),this.core.add(this.halo),this.rings=[];for(let e=0;e<3;e++){let t=new G(new Eo(1.75+e*.28,.018,8,160),v_(e===1?9080729:7040888,.8,.35));t.rotation.set(Math.PI/2+(e-1)*.45,e*.6,0),this.core.add(t),this.rings.push(t)}this.docs=[];for(let e=0;e<4;e++){let t=O_(e,.5,.66);this.core.add(t),this.docs.push(t)}this.addLabel(`RAG agent`,`lava big`,[0,-2.05,0],this.core),this.aPanel=new G($(3.3,1.35,.12,.16),__(7035474,.5)),this.aPanel.position.set(4.9,3.1,.4),e.add(this.aPanel),this.aPanel.add(y_(this.aPanel.geometry,J.amber,1,.5)),this.aLbl=this.addLabel(`<b>90 days</b> from date of service <span class="cite">§4.2</span><span class="cite">p.7</span>`,`bubble lava`,[0,0,.1],this.aPanel),this.cites=[0,1].map(t=>{let n=O_(t,.42,.55);return e.add(n),n}),this.citeBeams=[0,1].map(()=>{let t=new j_(J.amber,.014,3);return e.add(t.mesh),t}),this.qOrb=new G(new To(.16,24,12),Z(J.cyan,2)),e.add(this.qOrb),this.aOrb=new G(new To(.16,24,12),Z(J.amber,2)),e.add(this.aOrb),this.curveQ=new ka(new H(-3.3,2.7,.4),new H(-1.6,4.4,.6),new H(.6,2.3,0)),this.curveA=new ka(new H(.6,2.3,0),new H(2.8,4.6,.6),new H(4.9,3.1,.4)),this.sQ=new M_(this.curveQ,40,J.cyan,.12,.45),e.add(this.sQ.points),this.sA=new M_(this.curveA,40,J.amber,.12,.45),e.add(this.sA.points),this._v=new H,this.pick(this.user,`analyst`,[0,1.95,0]),this.pick(this.qPanel,`question`,[1.75,.7,.1]),this.pick(this.core,`ragAgent`,[1.3,1.35,0]),this.pick(this.aPanel,`answer`,[1.8,.75,.1]),this.cites.forEach((e,t)=>this.pick(e,`citation`,t?null:[0,.48,.05]))}update(e,t){let n=X.back(Y(e,.3,1));this.qPanel.scale.setScalar(Math.max(.001,n)),this.show(this.qLbl,Y(e,.6,1));let r=Y(e,1.3,2.6);this.qOrb.visible=r>0&&r<1,this.curveQ.getPoint(X.io(r),this.qOrb.position),this.sQ.update(t,.15+p_(e,1.2,3)*.9);let i=p_(e,2.4,4.4),a=.4+i*3;this.core.rotation.y+=.004*a*2,this.shell.rotation.x=t*.2,this.shellEdges.rotation.x=t*.2,this.heart.scale.setScalar(1+i*.45+Math.sin(t*4)*.05),this.halo.scale.setScalar(1+i*.6),this.rings.forEach((e,n)=>{e.rotation.z=t*(.3+n*.15)*(1+i*3)}),this.docs.forEach((e,n)=>{let r=t*(.5+i)+n/4*Math.PI*2,a=2.35-i*.9;e.position.set(Math.cos(r)*a,Math.sin(r*1.3+n)*.4,Math.sin(r)*a),e.lookAt(this.core.position.clone().add(new H(0,0,50)))});let o=Y(e,4.1,5.1);this.aOrb.visible=o>0&&o<1,this.curveA.getPoint(X.io(o),this.aOrb.position),this.sA.update(t,.15+p_(e,4,5.6)*.9);let s=X.back(Y(e,4.9,5.5));this.aPanel.scale.setScalar(Math.max(.001,s)),this.show(this.aLbl,Y(e,5.2,5.6)),this.cites.forEach((t,n)=>{let r=X.out(Y(e,5.6+n*.25,6.6+n*.25)),i=this._v.set(.6,2.3,0);t.position.set(f_(i.x,4.3+n*1.25,r),f_(i.y,1.4,r),f_(0,.6,r)),t.scale.setScalar(Math.max(.001,r)),t.rotation.y=(1-r)*3,this.citeBeams[n].set(new H(4.3+n*1.25,1.75,.6),new H(4.3+n*1.25,2.45,.45),Y(e,6.4,7))});let c=1-Y(e,8.8,9.4);this.aPanel.scale.multiplyScalar(c+1e-4),this.qPanel.scale.multiplyScalar(c+1e-4),this.cites.forEach(e=>e.scale.multiplyScalar(c+1e-4)),this.citeBeams.forEach(e=>e.mesh.visible=e.mesh.visible&&c>.05),c<.5&&(this.show(this.aLbl,0),this.show(this.qLbl,0))}},W_=6,G_=class extends R_{constructor(){super({loop:9,cam:{pos:[.3,4.6,15],target:[.3,2,0]}});let e=this.group;this.docs=[];for(let t=0;t<W_;t++){let n=O_(t,.95,1.25);e.add(n),this.docs.push(n)}this.addLabel(`Contract PDFs`,`ghost`,[-5,.15,1.4]),this.vol=new U,this.vol.position.set(0,0,0),e.add(this.vol);let t=new G(new Yi(1.35,1.35,3.2,64,1,!0),g_(13625599,{thickness:.4,tint:10475263,att:4,side:2}));t.position.y=1.75,this.vol.add(t);for(let e of[.15,3.35]){let t=new G(new Yi(1.48,1.48,.16,64),v_(2764083,.45,.7));t.position.y=e,this.vol.add(t);let n=new G(new Eo(1.5,.035,8,120),Z(J.lava,1));n.rotation.x=Math.PI/2,n.position.y=e+.09,this.vol.add(n)}this.hex=new G(new Eo(.42,.05,6,6),v_(12821107,.4,.7)),this.hex.position.set(0,4.15,0),this.vol.add(this.hex),this.core=new G(new Yi(.5,.5,2.6,32,1,!0),h_(J.ember,.4,.12)),this.core.position.y=1.75,this.vol.add(this.core),this.inside=[];for(let e=0;e<W_;e++){let t=new G(new K(.62,.05,.8),Q(w_[e],.6));t.position.set(0,.45+e*.42,0),this.vol.add(t),this.inside.push(t)}this.addLabel(`Unity Catalog Volume`,`lava big`,[0,-.55,1.6],this.vol),this.tbl=new U,this.tbl.position.set(5,.2,0),e.add(this.tbl);let n=new G($(3.1,3.5,.12,.12),__(4870752,.35));n.position.set(0,2,-.35),this.tbl.add(n),n.add(y_(n.geometry,J.cyan,1,.3));let r=new G($(2.8,.32,.16,.06),Q(3817287,.6));r.position.set(0,3.45,0),this.tbl.add(r),this.rows=[];for(let e=0;e<W_;e++){let t=[];for(let n=0;n<4;n++){let r=[.95,.62,.42,.55],i=[-.86,0,.57,1.11],a=r[n],o=i[n],s=new G($(a,.26,.12,.05),n===0?Q(w_[e],.55):n===3?Q(4869976,.5):Q(9278107,.6));s.position.set(o,2.95-e*.42,0),this.tbl.add(s),t.push(s)}this.rows.push(t)}this.delta=new G(new Eo(.42,.06,8,3),v_(9086138,.4,.7)),this.delta.position.set(0,4.4,0),this.delta.rotation.z=Math.PI/2,this.tbl.add(this.delta),this.addLabel(`Delta table · raw_docs`,`cyan big`,[0,-.4,1],this.tbl),this.addLabel(`<span>path</span><span>modTime</span><span>length</span><span>content</span>`,`cols`,[.1,3.82,.1],this.tbl),this.addLabel(`READ_FILES`,`ghost`,[2.5,3.7,.4]),this.packets=[];for(let t=0;t<W_;t++){let n=new G(new K(.2,.2,.2),Q(w_[t],.5));e.add(n),this.packets.push(n)}this.flow=new pa([new H(1.4,2.2,0),new H(2.6,3,.4),new H(3.6,2.5,.2)]),this.stream=new M_(this.flow,30,J.cyan,.1,.5),e.add(this.stream.points),this._a=new H,this._b=new H,this.docs.forEach((e,t)=>this.pick(e,`pdf`,t===0?[0,.8,.05]:null)),this.pick(this.vol,`volume`,[1.55,3.55,0]),this.pick(this.tbl,`deltaTable`,[1.75,3.5,0]),this.pick(this.hitBox(1.6,1.4,1,[2.5,2.7,.2]),`readFiles`,[0,.35,0])}update(e,t){this.hex.rotation.y=t*.8,this.delta.rotation.y=t*.6,this.core.material.opacity=.18+Math.sin(t*3)*.06;let n=1-Y(e,8.5,9);for(let r=0;r<W_;r++){let i=.5+r*.75,a=Y(e,i,i+.9),o=this.docs[r],s=-5+(r-2.5)*.16,c=.9+r*.1,l=.3-r*.08;if(a<=0)o.position.set(s,c+Math.sin(t*1.5+r)*.05,l),o.rotation.set(-.15,.35+r*.05,(r-2.5)*.06),o.scale.setScalar(1),o.visible=!0;else{let e=X.io(a);o.position.set(f_(s,0,e),f_(c,3.6,e)+Math.sin(e*Math.PI)*2.2,f_(l,0,e)),o.rotation.set(-.15+e*-1.2,(.35+r*.05)*(1-e)+e*2,0),o.scale.setScalar(1-e*.75),o.visible=a<1}let u=Y(e,i+.8,i+1.1)*n;this.inside[r].scale.set(Math.max(.001,u),1,Math.max(.001,u));let d=Y(e,i+1,i+1.7),f=this.packets[r];f.visible=d>0&&d<1,f.visible&&(this.flow.getPoint(X.io(d),f.position),f.rotation.set(t*3,t*2,0));let p=X.back(Y(e,i+1.6,i+2))*n;this.rows[r].forEach((e,t)=>{e.scale.set(Math.max(.001,p),Math.max(.001,p),1)})}this.stream.update(t,.25+p_(e,1.4,6.4)*.8)}},K_=2,q_=4,J_=class extends R_{constructor(){super({loop:9,cam:{pos:[.4,4.2,14.5],target:[.4,2.3,0]}});let e=this.group,t=2.4,n=3.2;this.W=t,this.H=n,this.docPos=new H(-3,2.4,0),this.doc=new G(new K(t,n,.05),[v_(13620450,.6,.1),v_(13620450,.6,.1),v_(13620450,.6,.1),v_(13620450,.6,.1),new Ro({map:C_(0),color:12106955,emissive:16777215,emissiveMap:C_(0),emissiveIntensity:.07,envMapIntensity:.35,roughness:.5}),v_(12173262,.6,.1)]),this.doc.position.copy(this.docPos),e.add(this.doc),this.scan=new G(new K(t*1.25,.05,.5),Z(J.cyan,2)),e.add(this.scan),this.scanGlow=new G(new wo(t*1.25,.9),new Io({transparent:!0,depthWrite:!1,uniforms:{c:{value:new W(J.cyan)}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform vec3 c; varying vec2 vUv; void main(){ float a = smoothstep(0.,1.,vUv.y)*.22; gl_FragColor = vec4(c, a);}`})),e.add(this.scanGlow),this.addLabel(`ai_parse_document`,`cyan big`,[-3,4.55,.3]);let r=[[0,1.3,2.1,.35],[0,.6,2.1,.75],[0,-.25,2.1,.55],[0,-1.05,2.1,.85]];this.layout=r.map(([t,n,r,i])=>{let a=y_(new wo(r,i),J.cyan,2.6,.95);return a.position.set(this.docPos.x+t,this.docPos.y+n,.06),e.add(a),a}),this.chunks=[];let i=t/K_,a=n/q_;for(let r=0;r<q_;r++)for(let o=0;o<K_;o++){let s=C_(0).clone();s.repeat.set(1/K_,1/q_),s.offset.set(o/K_,1-(r+1)/q_),s.needsUpdate=!0;let c=r===2?J.cyan:r===0?J.lava:J.amber,l=[Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),new Ro({map:s,color:12106955,emissive:16777215,emissiveMap:s,emissiveIntensity:.07,envMapIntensity:.35,roughness:.5}),Q(3816772,.6)],u=new G(new K(i*.97,a*.97,.12),l),d=y_(u.geometry,c,3,1);u.add(d),u.userData.edge=d,u.userData.home=new H(this.docPos.x-t/2+i*(o+.5),this.docPos.y+n/2-a*(r+.5),0);let f=r*K_+o;u.userData.dest=new H(1.7+f%2*1.45,4.2-Math.floor(f/2)*.95,.2+f%2*.15),u.userData.idx=f,e.add(u),this.chunks.push(u)}this.addLabel(`ai_prep_search`,`lava big`,[2.4,5.2,.3]),this.idLbls=this.chunks.filter((e,t)=>t%2==1).map((e,t)=>this.addLabel(`chunk_`+String(t*2+1).padStart(2,`0`),`ghost`,[e.userData.dest.x+1.25,e.userData.dest.y,e.userData.dest.z])),this.cut=new G(new K(t*1.1,.03,.08),Z(J.lava,5)),e.add(this.cut),this.cutV=new G(new K(.03,n*1.08,.08),Z(J.lava,5)),e.add(this.cutV),this.pick(this.doc,`pdfPage`,[1.3499999999999999,-1.3,.1]),this.pick(this.hitBox(2.8,.55,.3,[-3,4.55,.3]),`aiParse`,[-1.6,0,0]),this.pick(this.hitBox(2.6,.55,.3,[2.4,5.2,.3]),`aiPrep`,[1.5,0,0]),this.chunks.forEach((e,t)=>this.pick(e,`chunk`,t===1?[.75,.5,.1]:null))}update(e,t){this.W;let n=this.H,r=this.docPos,i=Y(e,.4,2.2),a=r.y+n/2+.1-i*(n+.2);this.scan.visible=this.scanGlow.visible=i>0&&i<1,this.scan.position.set(r.x,a,.15),this.scanGlow.position.set(r.x,a+.45,.1),this.layout.forEach((t,n)=>{let r=+(i>(n+.5)/4.6);t.material.opacity=r*(.95-Y(e,2.6,3)*.95)});let o=Y(e,2.4,3);this.cut.visible=this.cutV.visible=o>0&&o<1,this.cut.position.set(r.x,r.y+n/2-n/q_*Math.min(3,Math.floor(o*4)+1),.1),this.cut.scale.x=.2+o*4%1,this.cutV.position.set(r.x,r.y,.1),this.cutV.scale.y=o;let s=Y(e,3,3.6);this.doc.visible=s<=0,this.chunks.forEach((n,i)=>{n.visible=s>0||e<.01?s>0:!1;let a=n.userData.home,o=n.userData.dest,c=X.out(s),l=a.x+(a.x-r.x)*.35*c,u=a.y+(a.y-r.y)*.3*c,d=c*(.4+i%3*.3),f=X.io(Y(e,3.8+i*.12,5.2+i*.12));n.position.set(f_(l,o.x,f),f_(u,o.y,f)+Math.sin(f*Math.PI)*.8,f_(d,o.z,f)),n.rotation.set(Math.sin(f*Math.PI)*.5,-.25*f+Math.sin(f*Math.PI)*.8,0),n.scale.setScalar(f_(1,.62,f)*(1-Y(e,8.5,9))+1e-4),n.userData.edge.material.opacity=.35+f*.65+Math.sin(t*4+i)*.1,n.position.y+=f*Math.sin(t*1.6+i)*.04}),this.idLbls.forEach((t,n)=>this.show(t,Y(e,5.4+n*.1,5.8+n*.1)))}};function Y_(e=7){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function X_(e){let t=0,n=0;for(;t===0;)t=e();return n=e(),Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}var Z_=[`Timely filing`,`Credentialing`,`Fee schedules`,`Prior auth`,`Network rules`],Q_=[[-1.9,.9,.6],[1.8,1.5,-.6],[.4,-1.3,1.3],[2,-.7,1.4],[-1.4,-1,-1.4]].map(e=>new H(...e));function $_(e=300,t=11){let n=Y_(t),r=[];for(let t=0;t<e;t++){let e=t%5,i=Q_[e].clone().add(new H(X_(n),X_(n),X_(n)).multiplyScalar(.48));r.push({p:i,c:e})}let i=new hi(new So(.065,1),new Ro({color:16777215,roughness:.42,metalness:.1,emissive:0}),e),a=new W;r.forEach((e,t)=>{a.set(u_[e.c]),i.setColorAt(t,a)}),i.instanceMatrix.setUsage(Ue);let o=new U;return Q_.forEach((e,t)=>{let n=new zr(new Tr({map:A_(),color:u_[t],transparent:!0,opacity:.08,depthWrite:!1}));n.position.copy(e),n.scale.setScalar(2.6),o.add(n)}),{pts:r,mesh:i,halos:o}}function ev(e=6.4,t=8225420){let n=new U,r=new Pi(new ra(new K(e,e,e)),new Si({color:t,transparent:!0,opacity:.35}));n.add(r);let i=new $s(e,8,t,t);i.material.transparent=!0,i.material.opacity=.12,i.position.y=-e/2,n.add(i);let a=new mr().setFromPoints([new H(-e/2,-e/2,-e/2),new H(e/2,-e/2,-e/2),new H(-e/2,-e/2,-e/2),new H(-e/2,e/2,-e/2),new H(-e/2,-e/2,-e/2),new H(-e/2,-e/2,e/2)]);return n.add(new Pi(a,new Si({color:13204056,transparent:!0,opacity:.55}))),n}var tv=6,nv=18,rv=class extends R_{constructor(){super({loop:9,cam:{pos:[0,4,14.5],target:[0,2.3,0]}});let e=this.group;this.portal=new U,this.portal.position.set(-.2,2.4,0),e.add(this.portal),this.ring=new G(new Eo(1.7,.11,24,160),v_(3816772,.35,.75)),this.portal.add(this.ring),this.ringGlow=new G(new Eo(1.7,.035,8,160),Z(J.lava,2)),this.ringGlow.position.z=.12,this.portal.add(this.ringGlow),this.ring2=new G(new Eo(2.05,.015,8,160,Math.PI*1.4),Q(9080729,.5)),this.portal.add(this.ring2),this.ring3=new G(new Eo(2.25,.012,8,160,Math.PI*.8),Q(7040888,.5)),this.portal.add(this.ring3),this.swirl=new G(new Ji(1.62,96),new Io({transparent:!0,depthWrite:!1,side:2,uniforms:{uTime:{value:0},uAmp:{value:.5}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float uTime; uniform float uAmp; varying vec2 vUv;
        void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.y,p.x);
          float s = sin(a*5. + r*10. - uTime*2.)*.5+.5;
          vec3 base = vec3(.11,.12,.14);
          vec3 c = mix(base, vec3(.85,.40,.23), s * smoothstep(1.,.1,r) * (.18 + uAmp*.55));
          c = mix(c, vec3(.93,.9,.86), smoothstep(.3,.0,r) * uAmp * .5);
          gl_FragColor = vec4(c, .92); }`})),this.portal.add(this.swirl),this.addLabel(`databricks-gte-large-en`,`violet big`,[0,-2.6,0],this.portal),this.chunks=[];for(let t=0;t<tv;t++){let n=C_(t%3).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,t%4*.25),n.needsUpdate=!0;let r=new G(new K(1.05,.72,.1),[Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),new Ro({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),Q(3816772,.6)]);r.add(y_(r.geometry,t%3==1?J.cyan:J.amber,2.6,1)),e.add(r),this.chunks.push(r)}this.addLabel(`chunks`,`ghost`,[-5.6,.35,.6]);let t=Y_(5);this.vecs=[];let n=new K(.09,1,.09);n.translate(0,.5,0);for(let r=0;r<tv;r++){let i=new hi(n,new Ro({color:16777215,roughness:.5,metalness:.1}),nv),a=[],o=new W;for(let e=0;e<nv;e++){let n=.12+t()*.55;a.push(n),o.set(u_[(e+r)%2==0?1:2]).lerp(new W(J.cyan),t()),i.setColorAt(e,o)}i.userData.h=a,i.frustumCulled=!1,e.add(i),this.vecs.push(i)}this.dims=this.addLabel(`[0.12, −0.83, 0.41, … ] · 1024 dims`,`cyan`,[3.1,5.25,.3]),this._m=new Lt,this._q=new pt,this._s=new H,this._p=new H,this.sparks=new Bi(new mr,new Fi({size:.04,color:J.amber,transparent:!0,opacity:.55,depthWrite:!1}));let r=new Float32Array(600);this.sparkSeed=new Float32Array(600).map(()=>Math.random()),this.sparks.geometry.setAttribute(`position`,new $n(r,3)),this.sparks.frustumCulled=!1,this.portal.add(this.sparks),this.pick(this.portal,`embedModel`,[1.75,1.75,0]),this.pick(this.hitBox(1.6,4.2,.8,[-5.4,2.6,.3]),`chunk`,[.2,2.4,0]),this.pick(this.hitBox(3,4.2,.8,[3.2,2.6,.3]),`vector`,[1.7,2,0])}update(e,t){let n=1-Y(e,8.5,9),r=0;this.portal.rotation.y=Math.sin(t*.4)*.18,this.ring2.rotation.z=t*.6,this.ring3.rotation.z=-t*.9;for(let i=0;i<tv;i++){let a=.4+i*.85,o=Y(e,a,a+1),s=this.chunks[i],c=-5.6+i%2*.4,l=1+i*.62,u=i%2*.3,d=X.in(o);s.position.set(f_(c,-.2,d),f_(l,2.4,d),f_(u,0,d)),s.rotation.set(0,(1-d)*.35+d*1.2,d*2),s.scale.setScalar(Math.max(.001,(1-d*.9)*(o>=1?0:1))),r=Math.max(r,p_(e,a+.7,a+1.4));let f=Y(e,a+.9,a+1.8),p=this.vecs[i];p.visible=f>0;let m=X.out(f),h=f_(-.2,3.2,m),g=f_(2.4,4.4-i*.62,m),_=f_(0,.3,m);for(let r=0;r<p.count;r++){let o=p.userData.h[r]*(.25+.75*X.back(Y(e,a+1.4+r*.015,a+2+r*.015)));this._p.set(h+(r-nv/2)*.14*m,g-.25,_),this._s.set(1,Math.max(.001,o*(.9+.1*Math.sin(t*3+r+i))*n),1),this._m.compose(this._p,this._q,this._s),p.setMatrixAt(r,this._m)}p.instanceMatrix.needsUpdate=!0}this.swirl.material.uniforms.uTime.value=t,this.swirl.material.uniforms.uAmp.value=r,this.ringGlow.scale.setScalar(1+r*.05);let i=this.sparks.geometry.attributes.position.array;for(let e=0;e<200;e++){let n=this.sparkSeed[e*3]*Math.PI*2+t*(.5+this.sparkSeed[e*3+1]),a=1.75+(t*.6+this.sparkSeed[e*3+2])%1*.9*(.3+r);i[e*3]=Math.cos(n)*a,i[e*3+1]=Math.sin(n)*a,i[e*3+2]=(this.sparkSeed[e*3+2]-.5)*.4}this.sparks.geometry.attributes.position.needsUpdate=!0,this.show(this.dims,Y(e,2.6,3.2))}},iv=class extends R_{constructor(){super({loop:10,cam:{pos:[.6,5,15.5],target:[.6,2.6,0]}});let e=this.group;this.space=new U,this.space.position.set(1.4,3.2,0),e.add(this.space),this.space.add(ev(6.2));let{pts:t,mesh:n,halos:r}=$_(320,11);this.pts=t,this.mesh=n,this.space.add(n),this.halos=r,this.space.add(r),this.clLbls=Q_.map((e,t)=>this.addLabel(Z_[t],``,[e.x,e.y+.75,e.z],this.space)),this.clLbls.forEach((e,t)=>{e.element.style.borderColor=`#`+new W(u_[t]).getHexString()}),this.addLabel(`Databricks AI Search index`,`lava big`,[0,-3.75,2.2],this.space),this.tbl=new U,this.tbl.position.set(-4.6,.3,1.2),e.add(this.tbl),this.slabs=[];for(let e=0;e<7;e++){let t=new G($(1.7,.2,1.1,.05),e===6?Q(J.mint,.5):Q(7305090,.55));t.position.y=.2+e*.27,this.tbl.add(t),this.slabs.push(t)}this.sync=new G(new Eo(1.45,.04,8,100,Math.PI*1.6),Z(J.cyan,1.5)),this.sync.position.y=1.1,this.sync.rotation.x=Math.PI/2,this.tbl.add(this.sync),this.arrow=new G(new Xi(.13,.32,16),Z(J.cyan,1.5)),this.sync.add(this.arrow),this.addLabel(`Delta Sync`,`cyan`,[0,-.45,.9],this.tbl),this.newOrb=new G(new To(.12,16,8),Z(J.mint,2)),e.add(this.newOrb),this._m=new Lt,this._q=new pt,this._s=new H,this._p=new H,this.rack=new U,this.rack.position.set(5.3,0,-2),this.rack.rotation.y=-.5,e.add(this.rack);let i=new G($(1,2.3,.85,.05),v_(2829876,.45,.6));i.position.y=1.15,this.rack.add(i),this.leds=[];for(let e=0;e<6;e++){let t=new G($(.84,.26,.04,.02),Q(1776930,.4));t.position.set(0,.35+e*.33,.44),this.rack.add(t);let n=new G(new K(.1,.03,.02),Z(e%3?J.mint:J.lava,2));n.position.set(.28,.35+e*.33,.47),this.rack.add(n),this.leds.push(n)}this.addLabel(`AI Search endpoint`,`ghost`,[0,-.3,.6],this.rack),this.pick(this.mesh,`index`,[0,3.45,0]),this.pick(this.tbl,`chunksTable`,[1.05,2.15,0]),this.pick(this.sync,`deltaSync`,null),this.pick(this.hitBox(1.6,.45,.3,[0,-.45,.9],this.tbl),`deltaSync`,[0,-.42,0]),this.pick(this.rack,`vsEndpoint`,[0,2.65,.3]),this.src=new H(-6,1.3-3.2,1.2)}update(e,t){this.space.rotation.y=t*.12;let n=1-Y(e,9.5,10);for(let r=0;r<this.pts.length;r++){let i=this.pts[r],a=r/this.pts.length*2.6,o=X.out(Y(e,.4+a,1.4+a));this._p.lerpVectors(this.src,i.p,o),this._p.y+=Math.sin(o*Math.PI)*1.2;let s=o*n*(1+.25*Math.sin(t*3+r));this._s.setScalar(Math.max(.001,s)),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(r,this._m)}this.mesh.instanceMatrix.needsUpdate=!0,this.halos.children.forEach((r,i)=>{r.material.opacity=.08*Y(e,2.5+i*.2,3.6+i*.2)*n*(.85+.15*Math.sin(t*2+i))}),this.clLbls.forEach((t,r)=>this.show(t,Y(e,3.6+r*.15,4+r*.15)*n)),this.sync.rotation.z=-t*1.5,this.leds.forEach((e,n)=>{e.visible=Math.sin(t*(3+n)+n*1.7)>-.6}),this.arrow.position.set(1.45*Math.cos(Math.PI*1.6),1.45*Math.sin(Math.PI*1.6),0),this.arrow.rotation.z=Math.PI*1.6+Math.PI;let r=X.back(Y(e,5.4,5.9));this.slabs[6].scale.set(Math.max(.001,r),1,Math.max(.001,r));let i=Y(e,6,7.4);if(this.newOrb.visible=i>0&&i<1,this.newOrb.visible){let e=Q_[0].clone().applyAxisAngle(new H(0,1,0),this.space.rotation.y).add(this.space.position),t=new H(-4.6,2.3,1.2),n=X.io(i);this.newOrb.position.lerpVectors(t,e,n),this.newOrb.position.y+=Math.sin(n*Math.PI)*2}}},av=5,ov=class extends R_{constructor(){super({loop:9.5,cam:{pos:[.4,4.8,15.5],target:[.4,2.7,0]}});let e=this.group;this.space=new U,this.space.position.set(.6,3.1,0),this.space.rotation.y=.5,e.add(this.space),this.space.add(ev(6.2));let{pts:t,mesh:n,halos:r}=$_(320,11);this.pts=t,this.mesh=n,this.space.add(n),this.space.add(r),r.children.forEach(e=>e.material.opacity=.06),this.qLocal=Q_[0].clone().add(new H(.15,.1,.1));let i=t.map((e,t)=>({i:t,d:e.p.distanceTo(this.qLocal)})).sort((e,t)=>e.d-t.d);this.nn=i.slice(0,av).map(e=>e.i),this.nnSet=new Set(this.nn),this.qCard=new G($(2.4,.9,.1,.14),__(5989488,.5)),this.qCard.position.set(-5.6,4.6,.6),e.add(this.qCard),this.qCard.add(y_(this.qCard.geometry,J.cyan,1,.5)),this.qLbl=this.addLabel(`timely-filing limit?`,`bubble cyan`,[0,0,.1],this.qCard),this.mini=new G(new Eo(.45,.04,8,64),Z(J.lava,3.5)),this.mini.position.set(-4,3.2,.5),this.mini.rotation.y=Math.PI/2.4,e.add(this.mini),this.qOrb=new U,e.add(this.qOrb),this.qOrb.add(new G(new To(.17,24,12),Z(16777215,4))),this.qRing=new G(new Eo(.32,.02,8,48),Z(J.cyan,3.5)),this.qOrb.add(this.qRing),this.pulse=new G(new So(1,3),new Kr({color:J.cyan,wireframe:!0,transparent:!0,opacity:.2,depthWrite:!1})),this.space.add(this.pulse),this.beams=this.nn.map(()=>{let e=new j_(16777215,.018,3.5);return this.space.add(e.mesh),e}),this.qLbl2=this.addLabel(`your question`,`cyan`,[0,.55,0],this.qOrb),this.out=[];let a=[`0.92`,`0.89`,`0.84`,`0.78`,`0.74`];for(let t=0;t<av;t++){let n=C_(t%2).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,.25*((t+1)%4)),n.needsUpdate=!0;let r=new G(new K(1.15,.62,.08),[Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),new Ro({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),Q(3816772,.6)]);r.add(y_(r.geometry,u_[0],3,1)),e.add(r),r.userData.dest=new H(5.7,5-t*.8,.8),r.userData.lbl=this.addLabel(a[t],`lava`,[r.userData.dest.x+1.05,r.userData.dest.y,r.userData.dest.z]),this.out.push(r)}this.topk=this.addLabel(`top-k = 5`,`lava big`,[5.9,.9,.8]),this.pick(this.qCard,`question`,[1.3,.5,.1]),this.pick(this.qOrb,`queryVector`,[.4,.4,0]),this.pick(this.mesh,`index`,[0,3.45,0]),this.out.forEach((e,t)=>this.pick(e,`topk`,t===0?[.7,.42,.1]:null)),this.pick(this.hitBox(2.2,.5,.3,[5.9,.9,.8]),`topk`,null),this._m=new Lt,this._q=new pt,this._s=new H,this._p=new H,this._w=new H,this.curve=new pa([new H(-5.6,4.1,.6),new H(-4,3.2,.5),new H(-2.2,4.4,.4),new H(0,4,.2)])}update(e,t){let n=1-Y(e,9,9.5);this.space.rotation.y=.5+Math.sin(t*.25)*.2,this.space.updateMatrixWorld(),this.mini.rotation.z=t*2,this.qCard.scale.setScalar(Math.max(.001,X.back(Y(e,.2,.7))*n)),this.show(this.qLbl,Y(e,.4,.8)*n);let r=this._w.copy(this.qLocal);this.space.localToWorld(r),this.curve.points[3].copy(r);let i=Y(e,.9,2.7);this.qOrb.visible=i>0,i<1?this.curve.getPoint(X.io(i),this.qOrb.position):this.qOrb.position.copy(r),this.qOrb.scale.setScalar(n+.001),this.qRing.rotation.x=t*2,this.qRing.rotation.y=t*1.3,this.show(this.qLbl2,Y(e,2.6,3)*n);let a=Y(e,2.7,3.7);this.pulse.position.copy(this.qLocal),this.pulse.scale.setScalar(.1+X.out(a)*1.05),this.pulse.visible=a>0&&n>.05,this.pulse.material.opacity=.2*(1-a*.6);let o=Y(e,2.8,3.6)*n;for(let e=0;e<this.pts.length;e++){let n=this.nnSet.has(e)?1+o*1.6+o*.3*Math.sin(t*6):1-o*.55;this._s.setScalar(n),this._m.compose(this.pts[e].p,this._q,this._s),this.mesh.setMatrixAt(e,this._m)}this.mesh.instanceMatrix.needsUpdate=!0,this.beams.forEach((t,r)=>t.set(this.qLocal,this.pts[this.nn[r]].p,X.out(Y(e,3.1+r*.12,3.6+r*.12))*n)),this.out.forEach((t,r)=>{let i=this._p.copy(this.pts[this.nn[r]].p);this.space.localToWorld(i);let a=X.io(Y(e,4.3+r*.18,5.5+r*.18));t.position.lerpVectors(i,t.userData.dest,a),t.position.y+=Math.sin(a*Math.PI)*.8,t.scale.setScalar(Math.max(.001,a*n)),t.rotation.y=(1-a)*4-.25*a,this.show(t.userData.lbl,Y(e,5.4+r*.18,5.8+r*.18)*n)}),this.show(this.topk,Y(e,6.2,6.6)*n)}},sv=5,cv=22,lv=class extends R_{constructor(){super({loop:10,cam:{pos:[.3,4.4,15.5],target:[.3,2.4,0]}});let e=this.group;this.core=new U,this.core.position.set(0,2.6,0),e.add(this.core),this.shell=new G(new So(1.55,1),g_(14273791,{thickness:1.5,tint:10189823,att:2.2,roughness:.04})),this.core.add(this.shell),this.shellEdges=y_(this.shell.geometry,J.violet,1,.4),this.core.add(this.shellEdges),this.neural=new G(new So(.85,3),new Kr({color:12170704,wireframe:!0,transparent:!0,opacity:.3,depthWrite:!1})),this.core.add(this.neural),this.heart=new G(new To(.42,32,16),Z(J.violet,2)),this.core.add(this.heart),this.orbits=[];for(let e=0;e<3;e++){let t=new U;t.rotation.set(e*1.05,e*.7,0),this.core.add(t);let n=new G(new Eo(2.05+e*.22,.012,8,160),v_(e===1?9080729:7040888,.4,.7));t.add(n);let r=new G(new To(.08,16,8),Z(e===1?J.lava:15328992,1.5));r.position.x=2.05+e*.22,t.add(r),this.orbits.push(t)}this.addLabel(`Llama 3.3 70B Instruct`,`violet big`,[0,-2.35,.4],this.core),this.qCard=new G($(2.2,.62,.1,.12),__(5989488,.55)),this.qCard.add(y_(this.qCard.geometry,J.cyan,1,.5)),e.add(this.qCard),this.qLbl=this.addLabel(`question`,`cyan`,[0,0,.1],this.qCard),this.ctx=[];for(let t=0;t<sv;t++){let n=C_(t%2).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,.25*((t+1)%4)),n.needsUpdate=!0;let r=new G(new K(1.5,.42,.08),[Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),Q(3816772,.6),new Ro({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),Q(3816772,.6)]);r.add(y_(r.geometry,J.amber,3,1)),e.add(r),this.ctx.push(r)}this.ctxLbl=this.addLabel(`context · top 5`,`lava`,[-5.3,.35,.6]),this.tokens=new hi(new K(.16,.16,.16),new Ro({color:J.amber,roughness:.45,metalness:.2}),cv),this.tokens.frustumCulled=!1,e.add(this.tokens),this.outCurve=new pa([new H(1.2,2.8,.3),new H(2.6,4.2,.6),new H(4.2,3.5,.5)]),this.aPanel=new G($(3.4,1.4,.12,.16),__(7035474,.5)),this.aPanel.position.set(5,3.1,.5),e.add(this.aPanel),this.aPanel.add(y_(this.aPanel.geometry,J.amber,1,.5)),this.aLbl=this.addLabel(`<b>90 days</b> from date of service <span class="cite">1</span><span class="cite">2</span>`,`bubble lava`,[0,0,.1],this.aPanel),this.srcs=[0,1].map(t=>{let n=O_(t,.55,.72);return n.position.set(4.2+t*1.6,1,.6),e.add(n),n}),this.srcLbls=[`Contract §4.2`,`Claims Policy p.7`].map((e,t)=>this.addLabel(e,`ghost`,[4.2+t*1.6,.4,.6])),this.beams=[0,1].map(()=>{let t=new j_(J.amber,.016,3);return e.add(t.mesh),t}),this._m=new Lt,this._q=new pt,this._s=new H,this._p=new H,this.pick(this.core,`llm`,[1.65,1.6,0]),this.pick(this.hitBox(1.9,3,.6,[-5.2,2.7,.6]),`prompt`,[1,1.5,0]),this.pick(this.hitBox(3,1.4,.6,[2.7,3.7,.4]),`tokens`,null),this.pick(this.aPanel,`answer`,[1.85,.78,.1]),this.srcs.forEach((e,t)=>this.pick(e,`citation`,t?null:[0,.5,.05]))}update(e,t){let n=1-Y(e,9.5,10),r=p_(e,2.6,5.4);this.shell.rotation.y=this.shellEdges.rotation.y=t*.15,this.neural.rotation.y=-t*(.3+r*2.5),this.neural.rotation.x=t*.2,this.neural.material.opacity=.22+r*.25,this.heart.scale.setScalar(1+r*.6+Math.sin(t*5)*.04*(1+r*3)),this.orbits.forEach((e,t)=>{e.rotation.z+=.01*(1+r*5)*(t%2?-1:1)});let i=Y(e,.2,.6),a=X.in(Y(e,1.9,2.6));this.qCard.position.set(f_(-5.2,0,a),f_(4.6,2.6,a),f_(.6,0,a)),this.qCard.scale.setScalar(Math.max(.001,X.back(i)*(1-a))),this.show(this.qLbl,i*(1-Y(e,1.8,2))),this.ctx.forEach((t,n)=>{let r=X.out(Y(e,.3+n*.1,.8+n*.1)),i=X.in(Y(e,1+n*.14,1.8+n*.14));t.position.set(f_(-5.2,0,i),f_(3.75-n*.55,2.6,i)+Math.sin(i*Math.PI)*.6,f_(.6,0,i)),t.rotation.set(0,.3*(1-i),i*3),t.scale.setScalar(Math.max(.001,r*(1-i)))}),this.show(this.ctxLbl,Y(e,.6,1)*(1-Y(e,1.6,1.9)));for(let n=0;n<cv;n++){let r=Y(e,4+n*.07,5+n*.07);r>0&&r<1?(this.outCurve.getPoint(X.io(r),this._p),this._s.setScalar(.6+Math.sin(r*Math.PI)*.6)):this._s.setScalar(1e-4),this._q.setFromEuler(new qt(t*3+n,t*2,0)),this._m.compose(this._p,this._q,this._s),this.tokens.setMatrixAt(n,this._m)}this.tokens.instanceMatrix.needsUpdate=!0;let o=X.back(Y(e,5.2,5.8))*n;this.aPanel.scale.setScalar(Math.max(.001,o)),this.show(this.aLbl,Y(e,5.5,5.9)*n),this.srcs.forEach((r,i)=>{let a=X.back(Y(e,6+i*.2,6.5+i*.2))*n;r.scale.setScalar(Math.max(.001,a)),r.rotation.y=Math.sin(t+i)*.2,r.position.y=1+Math.sin(t*1.5+i)*.06}),this.srcLbls.forEach((t,r)=>this.show(t,Y(e,6.3+r*.2,6.7+r*.2)*n)),this.beams.forEach((t,r)=>t.set(new H(4.2+r*1.6,1.4,.6),new H(4.6+r*.9,2.4,.55),Y(e,6.6,7.2)*n))}},uv=[{n:`agent`,s:0,d:1,c:J.lava,ms:`1.42 s`},{n:`retrieve · AI Search`,s:.04,d:.13,c:J.cyan,ms:`0.18 s`},{n:`llm · Llama 3.3 70B`,s:.2,d:.76,c:J.violet,ms:`1.08 s`},{n:`cite & format`,s:.96,d:.04,c:J.mint,ms:`0.05 s`}],dv=[{n:`Correctness`,v:.94},{n:`Grounded`,v:.97},{n:`Relevance`,v:.95},{n:`Safety`,v:1}];function fv(e){return new Io({transparent:!0,depthWrite:!1,uniforms:{uP:{value:0},uC:{value:new W(e)},uT:{value:0}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float uP; uniform vec3 uC; uniform float uT; varying vec2 vUv;
      void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.x, p.y)/6.28318+.5;
        float band = smoothstep(.70,.73,r)*smoothstep(.93,.9,r);
        float on = step(a, uP);
        vec3 bg = vec3(.17,.18,.2);
        vec3 c = mix(bg, uC*(.8+.2*sin(a*30.-uT*4.)), on);
        float inner = smoothstep(.62,.6,r)*.05;
        gl_FragColor = vec4(c*band + uC*inner*on*.6, band + inner*.5); }`})}var pv=class extends R_{constructor(){super({loop:9,cam:{pos:[.6,4.3,15],target:[.6,2.6,0]}});let e=this.group;this.panel=new U,this.panel.position.set(-2.4,2.7,0),this.panel.rotation.y=.18,e.add(this.panel);let t=new G($(6,3.6,.1,.18),__(4080460,.55));t.position.z=-.15,this.panel.add(t),t.add(y_(t.geometry,9080729,1,.3)),this.addLabel(`MLflow Trace`,`lava big`,[-2.1,2.15,0],this.panel);for(let e=0;e<=6;e++){let t=new G(new K(.01,3,.01),new Kr({color:7040888,transparent:!0,opacity:.35}));t.position.set(-2.6+5.2/6*e,-.1,-.05),this.panel.add(t)}this.bars=uv.map((e,t)=>{let n=$(1,.42,.22,.08);n.translate(.5,0,0);let r=new G(n,Z(e.c,1));return r.position.set(-2.6+e.s*5.2,1.1-t*.78,.05),this.panel.add(r),r.userData.w=e.d*5.2,r.userData.lbl=this.addLabel(e.n,``,[t===3?1.2:-2.6+e.s*5.2,1.43-t*.78,.3],this.panel),r.userData.lbl.center.set(0,.5),r.userData.ms=this.addLabel(e.ms,``,[-2.6+(e.s+e.d)*5.2+.05,1.1-t*.78,.35],this.panel),r.userData.ms.center.set(0,.5),r}),this.cursor=new G(new K(.03,3.2,.05),Z(16777215,1.6)),this.panel.add(this.cursor),this.judges=new U,this.judges.position.set(4.3,2.5,.2),this.judges.rotation.y=-.2,e.add(this.judges),this.addLabel(`LLM judges`,`violet big`,[0,2.6,0],this.judges);let n=[J.amber,J.cyan,J.violet,J.mint];this.gauges=dv.map((e,t)=>{let r=new U;r.position.set((t%2?1:-1)*1.15,t<2?1.05:-1.15,0),this.judges.add(r);let i=new G(new Yi(.95,.95,.12,64),v_(2829876,.4,.6));i.rotation.x=Math.PI/2,i.position.z=-.08,r.add(i);let a=new G(new wo(2,2),fv(n[t]));r.add(a);let o=new U,s=new G(new K(.32,.08,.08),Z(n[t],3));s.position.set(-.13,-.05,0),s.rotation.z=-Math.PI/4,o.add(s);let c=new G(new K(.6,.08,.08),Z(n[t],3));return c.position.set(.12,.06,0),c.rotation.z=Math.PI/4,o.add(c),r.add(o),{grp:r,arc:a,check:o,l:this.addLabel(e.n+` <b>`+Math.round(e.v*100)+`%</b>`,``,[0,-1.22,0],r),v:e.v}}),this.qs=[];for(let t=0;t<8;t++){let t=new G($(.36,.24,.06,.05),Q(J.cyan,.5));e.add(t),this.qs.push(t)}this.evalLbl=this.addLabel(`mlflow.genai.evaluate`,`cyan`,[.7,.35,1.8]),this.pick(this.panel,`trace`,[3.1,1.95,0]),[`correctness`,`groundedness`,`relevance`,`safety`].forEach((e,t)=>this.pick(this.gauges[t].grp,e,[.78,.78,.1])),this.qs.forEach(e=>this.pick(e,`evalSet`,null)),this.pick(this.hitBox(2.6,.5,.3,[.7,.35,1.8]),`evalSet`,[1.45,0,0])}update(e,t){let n=1-Y(e,8.5,9),r=Y(e,.5,3.2);this.cursor.position.set(-2.6+r*5.2,-.1,.15),this.cursor.visible=r>0&&r<1,this.bars.forEach((e,t)=>{let i=uv[t],a=Y(r,i.s,i.s+i.d);e.scale.set(Math.max(1e-4,a*e.userData.w),n+1e-4,1),this.show(e.userData.lbl,Y(r,i.s,i.s+.05)*n),this.show(e.userData.ms,+(a>=1)*n)}),this.gauges.forEach((r,i)=>{let a=X.out(Y(e,3.4+i*.3,4.8+i*.3));r.arc.material.uniforms.uP.value=a*r.v*n,r.arc.material.uniforms.uT.value=t;let o=X.back(Y(e,4.8+i*.3,5.2+i*.3))*n;r.check.scale.setScalar(Math.max(.001,o)),this.show(r.l,Y(e,3.6+i*.3,4+i*.3)*n),r.grp.position.z=Math.sin(t*1.4+i)*.06}),this.qs.forEach((r,i)=>{let a=(t*.35+i/8)%1,o=Y(e,3,3.5)*n;r.position.set(f_(1,4.3,a),.3+Math.sin(a*Math.PI)*1.2+i*.02,1+Math.sin(i)*.3),r.scale.setScalar(Math.max(.001,o*Math.sin(a*Math.PI))),r.rotation.y=t+i}),this.show(this.evalLbl,Y(e,3.2,3.6)*n)}},mv=5,hv=class extends R_{constructor(){super({loop:11,radius:7,cam:{pos:[0,5.6,17],target:[0,2.4,0]}});let e=this.group;this.beam=new G(new Yi(.9,1.3,9,48,1,!0),h_(J.amber,1.4,0)),this.beam.position.set(0,4.5,-1.2),e.add(this.beam),this.app=new U,this.app.position.set(0,2.6,-1.2),e.add(this.app);let t=new G($(2.5,3.8,.16,.22),v_(2829876,.4,.6));this.app.add(t);let n=new G($(2.25,3.5,.05,.16),Q(1777188,.35));n.position.z=.1,this.app.add(n),this.app.add(y_(t.geometry,J.amber,1,.35)),this.msgs=[];for(let e=0;e<5;e++){let t=e%2==0,n=new G($(t?1.2:1.55,.36,.06,.1),Q(t?9086138:13075039,.5));n.position.set(t?.42:-.25,1.3-e*.6,.18),this.app.add(n),this.msgs.push(n)}this.addLabel(`Databricks App`,`lava big`,[0,2.35,0],this.app),this.addLabel(`Agent Runtime`,`ghost`,[0,-2.25,.3],this.app),this.assets=new U,this.assets.position.set(0,0,-3.6),e.add(this.assets);let r=new U;for(let e=0;e<4;e++){let t=new G($(1.1,.14,.8,.04),Q(7305090,.55));t.position.y=.3+e*.2,r.add(t)}r.position.x=-3.4,this.assets.add(r);let i=new U;for(let e=0;e<40;e++){let t=new G(new To(.06,8,6),Z([J.cyan,J.violet,J.amber][e%3],2.6));t.position.set(Math.sin(e*2.3)*.6,.9+Math.cos(e*1.7)*.5,Math.sin(e*.9)*.5),i.add(t)}i.position.x=3.4,this.assets.add(i),this.assetRings=[-3.4,3.4].map(e=>{let t=new G(new Eo(.95,.02,6,6),Z(J.mint,3));return t.rotation.x=Math.PI/2,t.position.set(e,.1,0),this.assets.add(t),t}),this.addLabel(`tables`,`ghost`,[-3.4,-.25,.6],this.assets),this.addLabel(`index · model`,`ghost`,[3.4,-.25,.6],this.assets),this.dome=new U,e.add(this.dome);let a=new So(6.3,2);this.domeLines=new Pi(new ra(a),new Si({color:J.mint,transparent:!0,opacity:.18})),this.dome.add(this.domeLines),this.domeSkin=new G(a,new Kr({color:new W(J.mint),transparent:!0,opacity:.025,side:1,depthWrite:!1})),this.dome.add(this.domeSkin),this.dome.position.set(0,-.6,-1.6),this.clip=new Sr(new H(0,-1,0),0),this.floorClip=new Sr(new H(0,1,0),.02),this.domeLines.material.clippingPlanes=[this.clip,this.floorClip],this.domeSkin.material.clippingPlanes=[this.clip,this.floorClip],this.ucLbl=this.addLabel(`Unity Catalog · permissions · lineage`,`mint big`,[0,6.35,-1.6]),this.gate=new U,this.gate.position.set(0,2.2,2.4),e.add(this.gate),this.gateRing=new G(new Eo(1.25,.09,16,120),v_(3816772,.35,.75)),this.gate.add(this.gateRing),this.gateGlow=new G(new Eo(1.25,.03,8,120),Z(J.amber,3.5)),this.gateGlow.position.z=.1,this.gate.add(this.gateGlow),this.gateTicks=new G(new Eo(1.48,.02,4,24),Q(9080729,.5)),this.gate.add(this.gateTicks),this.addLabel(`Unity Gateway`,`lava`,[0,-1.6,0],this.gate),this.users=[],this.reqs=[];for(let t=0;t<mv;t++){let n=-.9+t/4*1.8,r=P_(t===3?J.lava:J.cyan);r.scale.setScalar(.75),r.position.set(Math.sin(n)*5.6,0,2.4+Math.cos(n)*2.6),r.lookAt(0,0,0),e.add(r),this.users.push(r);let i=new G(new To(.11,16,8),Z(t===3?J.lava:J.cyan,4));e.add(i),this.reqs.push(i)}this.denied=this.addLabel(`✕ no access`,`lava`,[0,0,0]),this.cmd=this.addLabel(`agentbricks deploy`,`lava big`,[0,.35,2.3]),this._v=new H,this.domeSkin.raycast=()=>{},this.pick(this.app,`app`,[1.45,2,.1]),this.pick(this.gate,`gateway`,[1.35,1.05,0]),this.users.forEach((e,t)=>this.pick(e,t===3?`permissions`:`endUser`,t===3||t===0?[0,2.15,0]:null)),this.pick(this.hitBox(4.6,.5,.3,[0,6.35,-1.6]),`unityCatalog`,[2.6,0,0]),this.pick(this.hitBox(2.6,.45,.3,[0,.35,2.3]),`cli`,null)}update(e,t){let n=1-Y(e,10.5,11),r=Y(e,.2,1.6);this.beam.material.opacity=p_(e,.2,2.2)*.12,this.beam.scale.set(1-r*.4,1,1-r*.4);let i=X.back(Y(e,.8,1.9));this.app.position.y=f_(-1.6,2.6,i)+Math.sin(t*1.2)*.05,this.app.scale.setScalar(Math.max(.001,Math.min(1,i*1.1))),this.show(this.cmd,p_(e,.1,2.6)),this.msgs.forEach((t,r)=>{let i=X.back(Y(e,4.2+r*.55,4.6+r*.55))*n;t.scale.setScalar(Math.max(.001,i))});let a=X.io(Y(e,1.8,3.4));this.clip.constant=f_(0,7.5,a)*n,this.dome.rotation.y=t*.05,this.domeLines.material.opacity=.15+.04*Math.sin(t*2),this.show(this.ucLbl,Y(e,3,3.4)*n),this.assetRings.forEach((r,i)=>{r.rotation.z=t*(i?-.6:.6),r.scale.setScalar(Math.max(.001,X.back(Y(e,2.6+i*.2,3.1+i*.2))*n))}),this.gateTicks.rotation.z=t*.8,this.gate.scale.setScalar(Math.max(.001,X.back(Y(e,2.4,3))*n));let o=null,s=0;this.reqs.forEach((t,r)=>{let i=this.users[r].position,a=e-3.6-r*.35,c=2.2,l=a<0?-1:a%c/c;if(t.visible=l>=0&&n>.1,!t.visible)return;let u=this._v.set(0,2.2,2.4);if(r===3){let e=Y(l,0,.45),n=Y(l,.5,.95);l<.5?t.position.lerpVectors(new H(i.x,1,i.z),u,X.io(e)):t.position.lerpVectors(u,new H(i.x,1,i.z),X.out(n)),t.scale.setScalar(l>.42&&l<.6?1.8:1),l>.42&&l<.9&&(s=1,o=u.clone().add(new H(1.9,.6,0)))}else{let e=new H(0,2.6,-1);l<.4?t.position.lerpVectors(new H(i.x,1,i.z),u,X.io(Y(l,0,.4))):l<.65?t.position.lerpVectors(u,e,X.io(Y(l,.4,.65))):t.position.lerpVectors(e,new H(i.x,1,i.z),X.io(Y(l,.65,1))),t.material=l>=.65?this._ans||=Z(J.amber,4):this._req||=Z(J.cyan,4),t.scale.setScalar(1)}}),o&&this.denied.position.copy(o),this.show(this.denied,s);let c=this.reqs.some(e=>e.visible&&e.position.distanceTo(this._v.set(0,2.2,2.4))<.4);this.gateGlow.scale.setScalar(c?1.06:1)}},gv=[{name:`Need`,steps:[0]},{name:`Goal`,steps:[1]},{name:`Prepare data`,steps:[2,3,4]},{name:`Build agent`,steps:[5]},{name:`Answer`,steps:[6,7]},{name:`Production`,steps:[8,9]}],_v={need:`<path d="M4 7h7v10H4zM13 7h7v10h-7z"/><path d="M11 12h2"/>`,goal:`<path d="M4 5h16v10H9l-5 4z"/><path d="M8 10h8"/>`,curate:`<path d="M3 7h18M5 12h14M8 17h8"/>`,describe:`<path d="M4 4h10l6 6v10H4z"/><path d="M14 4v6h6M8 14h8M8 17h5"/>`,metrics:`<circle cx="12" cy="13" r="7"/><path d="M12 13l4-4M8 4h8"/>`,agent:`<rect x="5" y="5" width="14" height="14" rx="4"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>`,ask:`<path d="M4 18V8M9 18V4M14 18v-7M19 18v-4"/><path d="M3 21h18"/>`,govern:`<path d="M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z"/><path d="M8 12h8M10 15h4"/>`,bench:`<path d="M5 12l4 4 10-10"/><path d="M5 20h14"/>`,share:`<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6"/>`},vv=[{key:`need`,short:`Need`,phase:`Need`,icon:_v.need,title:`Business need → developer solution`,split:{need:[`Claims-ops managers have data questions every day: denial rates, paid amounts, backlog by state.`,`Each one becomes a ticket for the BI team. A new answer takes 3–5 days, and “denial rate” is computed three different ways.`,`Answers must use the official metric definitions, and each manager may only see their own region’s members.`],solution:[`A <b>Genie Agent</b> (formerly Genie space): managers ask in English and get SQL, a table, a chart and a summary.`,`Clean Gold tables are built with Lakeflow pipelines, then described in Unity Catalog. Metrics are defined once in a metric view.`,`Example SQL and trusted functions teach Genie. Row filters and column masks enforce access per user. Benchmarks measure accuracy before you share it.`]},tags:[[`Genie Agents`,`tool`],[`Unity Catalog`,`tool`],[`Metric views`,`tool`],[`Serverless SQL warehouse`,`tool`],[`Lakeflow`,`tool`]]},{key:`goal`,short:`Goal`,phase:`Goal`,icon:_v.goal,title:`Ask in English. Get SQL, a chart and a summary.`,what:`A manager types a business question. No SQL, no ticket`,how:`Genie writes a <b>read-only SQL query</b> from your curated context and runs it on a SQL warehouse`,why:`Answers in seconds. The SQL is always visible, so anyone can check it`,tags:[[`Text-to-SQL`,``],[`Chat mode`,``],[`Compound AI system`,`model`]]},{key:`curate`,short:`Gold tables`,phase:`Prepare data`,icon:_v.curate,title:`Build clean, analysis-ready Gold tables`,what:`Turn raw claim feeds into a small, clean star schema: one fact table and a few dimensions`,how:`<code>Lakeflow Spark Declarative Pipelines</code>: bronze → silver (expectations) → gold materialized views`,why:`Genie works best on ≤5 focused, pre-joined tables, not 200 raw ones`,tags:[[`Lakeflow Declarative Pipelines`,`tool`],[`Delta Lake`,`tool`],[`Medallion`,``]]},{key:`describe`,short:`Describe`,phase:`Prepare data`,icon:_v.describe,title:`Describe every table, column and key`,what:`Add plain-English comments and declare how tables join`,how:`<code>COMMENT ON</code> / AI-generated descriptions · <code>PRIMARY KEY</code> / <code>FOREIGN KEY</code> constraints`,why:`Genie reads this metadata to pick the right columns and joins`,tags:[[`Unity Catalog metadata`,`tool`],[`AI-generated comments`,`model`],[`PK / FK`,``]]},{key:`metrics`,short:`Metrics`,phase:`Prepare data`,icon:_v.metrics,title:`Define the business metrics once`,what:`Write “denial rate”, “total paid” and “claims per member” as governed formulas`,how:`A UC <code>metric view</code> (YAML: dimensions + measures), queried with <code>MEASURE()</code>`,why:`Every answer uses the same official definition, no matter how it is asked`,tags:[[`Metric views`,`tool`],[`MEASURE()`,``],[`Semantic layer`,``]]},{key:`agent`,short:`Genie Agent`,phase:`Build agent`,icon:_v.agent,title:`Assemble and teach the Genie Agent`,what:`Pick the tables, a SQL warehouse, then add examples, SQL expressions and instructions`,how:`Genie Agent → <code>Configure</code>: data, knowledge store, example SQL, <b>trusted</b> UC functions`,why:`This curated context is what turns a generic LLM into your claims analyst`,tags:[[`Genie Agent`,`tool`],[`Serverless SQL`,`tool`],[`Knowledge store`,``],[`Trusted assets`,``]]},{key:`ask`,short:`Ask`,phase:`Answer`,icon:_v.ask,title:`Question → context → SQL → chart`,what:`The question is matched to context, turned into SQL, run, and visualized`,how:`Genie selects metadata + examples, the LLM writes SQL, the warehouse runs it`,why:`Each answer shows its SQL, so people can verify and build on it`,tags:[[`Managed LLMs`,`model`],[`SQL warehouse`,`tool`],[`Agent mode`,``]]},{key:`govern`,short:`Govern`,phase:`Answer`,icon:_v.govern,title:`Same question, different rows per user`,what:`Two managers ask the same thing. Each sees only their own region`,how:`Data access runs as the <b>end user</b>: UC <code>ROW FILTER</code> and column <code>MASK</code> apply`,why:`No separate security model for AI. Unity Catalog already governs it`,tags:[[`Row filters`,`tool`],[`Column masks`,`tool`],[`Query history`,``]]},{key:`bench`,short:`Benchmark`,phase:`Production`,icon:_v.bench,title:`Measure accuracy before you share`,what:`Run real questions with known-correct SQL and score every answer`,how:`Genie <code>Benchmarks</code>: result sets compared to ground-truth SQL · Monitor tab · feedback`,why:`Accuracy becomes a number you can track after every change`,tags:[[`Benchmarks`,`tool`],[`Monitor tab`,`tool`],[`Feedback`,``]]},{key:`share`,short:`Share`,phase:`Production`,icon:_v.share,title:`Put it where people already work`,what:`Share the agent in Genie One, Teams, an app, or call it from code and other agents`,how:`<code>CAN RUN</code> sharing · Conversation API · iframe embed · Genie Agent MCP server`,why:`One governed agent, many front doors`,tags:[[`Genie One`,`tool`],[`Conversation API`,`tool`],[`Managed MCP`,`tool`]]}],yv=`main.claims`,bv=[{lead:`Claims-operations managers run on numbers: how many claims were denied, how much was paid, which providers are slow. Today every new question becomes a BI ticket. The developer’s job is to give them a <b>Genie Agent</b>, a governed chat that writes the SQL for them, on top of data the developer has curated and secured.`,happens:[`<b>The question.</b> “Why did denied claims jump in Florida last quarter?” A manager can’t write the SQL. The data lives in dozens of raw tables with cryptic column names like <code>clm_sts_cd</code>.`,`<b>Today’s path.</b> Ticket → BI analyst → SQL → dashboard tweak → reply. That takes 3–5 days, and follow-ups (“…and by plan type?”) start the loop again.`,`<b>The hidden problem.</b> Three teams compute “denial rate” three ways (by claim, by line, with or without pended claims). Different numbers erode trust.`,`<b>The constraint.</b> Claims contain PHI. A Florida manager may only see Florida members, and member IDs must be masked for most users.`,`<b>The solution.</b> Curate a small, well-described set of Gold tables and metric definitions, wrap them in a Genie Agent, secure them with Unity Catalog, measure accuracy with benchmarks, then share it.`],concepts:[{t:`Genie Agent`,d:`A domain-specific chat interface (formerly “Genie space”). Users ask questions in natural language. Genie answers with a generated SQL query, a result table, an optional chart and a short summary.`},{t:`Genie family`,d:`<b>Genie One</b> is the business-user front door across agents, dashboards and apps. <b>Genie Code</b> is the developer assistant for code, pipelines and dashboards. <b>Genie Agents</b> are the curated, domain-specific chats you build here.`},{t:`Text-to-SQL`,d:`Translating a natural-language question into a SQL query. The model never “knows” your numbers. It writes SQL, and the SQL warehouse computes the answer from real data.`},{t:`Curator`,d:`The person (usually a SQL-fluent analyst or data engineer) who chooses the data, writes the metadata, examples and instructions, and keeps the agent accurate over time.`}],compare:{title:`Ticket queue vs Genie Agent`,cols:[``,`BI ticket`,`Genie Agent`],rows:[[`Time to answer`,`3–5 days`,`seconds`],[`Follow-up question`,`new ticket`,`same chat, keeps context`],[`Metric definition`,`depends who writes it`,`one governed definition`],[`Who sees which rows`,`enforced in each report`,`enforced by Unity Catalog`],[`Proof`,`trust the analyst`,`generated SQL always visible`]]},why:`The value is not “AI writes SQL”. It is self-service analytics with <b>one</b> set of definitions and <b>one</b> security model, so business users get fast answers the data team is willing to stand behind.`,pitfalls:[`Pointing Genie at the raw lake (“all 200 tables”). Accuracy collapses. Start with ≤5 curated tables for one audience.`,`Skipping governance “for the pilot”. The pilot data is real PHI. Row filters must be on from day one.`,`Promising answers to everything. A Genie Agent is scoped to one domain. Out-of-scope questions should get a clear “I can’t answer that”.`],objects:[`manager`,`ticketQueue`,`waitTime`,`question`,`blueprint2`]},{lead:`The target experience: a manager types a question, and seconds later sees the SQL Genie wrote, the result table, a chart and a one-line summary. They can ask a follow-up in the same conversation.`,happens:[`<b>Ask.</b> In Genie One or the agent’s chat: “Denial rate by state, last quarter vs the one before.”`,`<b>Understand.</b> Genie parses the question, identifies relevant tables, columns, metrics and example queries, and may ask a clarifying question if something is ambiguous.`,`<b>Write SQL.</b> A managed LLM generates a <b>read-only</b> SQL query (SELECT only, never INSERT/UPDATE/DELETE).`,`<b>Run.</b> The query executes on the agent’s SQL warehouse, with data access checked against <b>your</b> Unity Catalog identity.`,`<b>Explain.</b> Genie returns the result table, suggests a visualization, writes a short natural-language summary and offers follow-up questions.`],concepts:[{t:`Chat mode`,d:`The default. Best for questions a single SQL query can answer. Conversations are stateful: “now split by plan type” reuses the previous context.`},{t:`Agent mode`,d:`Multi-step reasoning (formerly Research Agent). Genie plans, runs several SQL queries, tests hypotheses and returns a report with citations. Use it for “why” questions. <b>Flash</b> (Beta) is a faster Agent mode option.`},{t:`Compound AI system`,d:`Genie is not one model. It combines retrieval of relevant metadata and examples, LLM SQL generation, execution, error retries and summarization. You do not choose the LLM; Databricks manages it.`},{t:`Inspect`,d:`Public Preview. Genie reviews its own SQL by running smaller checking queries (filters, date windows, joins) and returns an improved query if it finds a gap.`}],io:[{title:`Input`,cols:[`field`,`value`],rows:[[`question`,`Denial rate by state, last quarter vs prior`],[`user`,`fl.manager@payer.com`],[`mode`,`Chat`]]},{title:`Output`,cols:[`part`,`example`],rows:[[`SQL`,"SELECT member_state, MEASURE(`Denial rate`) …"],[`table`,`FL 9.8% · GA 7.1% · TX 6.4% …`],[`chart`,`bar chart, grouped by quarter`],[`summary`,`Florida rose 2.6 pts, the largest increase`]]}],why:`Showing the SQL is the trust mechanism. A manager gets the answer; an analyst can open the SQL and verify it. Genie is a transparent co-worker, not a black box.`,pitfalls:[`Expecting Genie to answer from PDFs in Chat mode. Chat mode works on structured data only. Files in volumes need Agent mode.`,`Treating the summary as the answer. Always glance at the generated SQL, especially the date filter.`],objects:[`manager`,`question`,`sqlCard`,`chart`,`summary`]},{lead:`Genie is only as good as the tables you give it. A data engineer builds a small star schema with Lakeflow Spark Declarative Pipelines (formerly DLT): raw claim feeds → cleaned rows → business-ready Gold tables.`,happens:[`<b>Bronze.</b> 837 claim files and eligibility extracts land in a UC volume. A streaming table ingests them incrementally with <code>read_files</code> (Auto Loader).`,`<b>Silver.</b> Clean and conform: cast types, standardize status codes (<code>clm_sts_cd = 'D'</code> → <code>DENIED</code>), drop duplicates. <b>Expectations</b> quarantine bad rows (negative amounts, missing member IDs).`,`<b>Gold.</b> Materialized views shape the star schema: <code>fact_claims</code> (one row per claim) with <code>dim_member</code>, <code>dim_provider</code> and <code>dim_plan</code>.`,`<b>Simplify for Genie.</b> Rename columns to business words (<code>paid_amount</code>, not <code>pd_amt</code>), drop technical columns, and pre-join where it helps.`,`<b>Schedule.</b> The pipeline refreshes nightly (or continuously). Genie always queries the latest Gold data.`],concepts:[{t:`Medallion architecture`,d:`Bronze (raw, as received) → Silver (cleaned, conformed) → Gold (business-level aggregates and models). Each layer is a set of Delta tables in Unity Catalog.`},{t:`Streaming table vs materialized view`,d:`A streaming table processes only new data (append-heavy sources). A materialized view stores a query’s result and is refreshed, incrementally when possible, as sources change.`},{t:`Expectations`,d:`Data-quality rules declared in the pipeline: <code>EXPECT (…) ON VIOLATION DROP ROW | FAIL UPDATE</code>. Metrics on passing and failing rows appear in the pipeline UI.`},{t:`Star schema`,d:`One central <b>fact</b> table (events with numbers, like claims) surrounded by <b>dimension</b> tables (who, what, where). It is the shape that SQL generators handle best.`}],code:[{label:`SQL · pipeline (Lakeflow)`,lang:`sql`,src:`-- bronze: incremental ingest from a UC volume
CREATE OR REFRESH STREAMING TABLE bronze_claims AS
SELECT * FROM STREAM read_files('/Volumes/${yv}/landing/837/', format => 'json');

-- silver: clean, conform, enforce quality
CREATE OR REFRESH STREAMING TABLE silver_claims (
  CONSTRAINT valid_member EXPECT (member_id IS NOT NULL) ON VIOLATION DROP ROW,
  CONSTRAINT valid_amount EXPECT (billed_amount >= 0)    ON VIOLATION DROP ROW
) AS SELECT
  clm_id                         AS claim_id,
  mbr_id                         AS member_id,
  CAST(svc_dt AS DATE)           AS service_date,
  CASE clm_sts_cd WHEN 'P' THEN 'PAID' WHEN 'D' THEN 'DENIED' ELSE 'PENDED' END AS claim_status,
  CAST(pd_amt AS DECIMAL(12,2))  AS paid_amount, *
FROM STREAM bronze_claims;

-- gold: the fact table Genie will query
CREATE OR REFRESH MATERIALIZED VIEW fact_claims AS
SELECT claim_id, member_id, provider_id, plan_id, member_state,
       service_date, claim_status, denial_reason, billed_amount, paid_amount
FROM silver_claims;`}],io:[{title:`Input · bronze row`,cols:[`clm_id`,`mbr_id`,`clm_sts_cd`,`pd_amt`],rows:[[`C-88213`,`M0042`,`D`,`"0.00"`],[`C-88214`,`NULL`,`P`,`"-12"`]]},{title:`Output · gold fact_claims`,cols:[`claim_id`,`member_id`,`claim_status`,`paid_amount`],rows:[[`C-88213`,`M0042`,`DENIED`,`0.00`],[`(dropped)`,`-`,`failed expectation`,`-`]]}],why:`Most Genie accuracy problems are data-model problems. Clean names, one row per claim and simple joins make SQL generation easy and correct.`,pitfalls:[`Adding bronze or silver tables to the agent. Business users should only see Gold.`,`Wide tables with 300 columns. Hide or drop what the audience does not need (aim for focused tables).`,`Ambiguous columns (<code>amount</code>, <code>date</code>). Say which amount and which date.`],objects:[`bronze`,`silver`,`pipeline`,`factClaims`,`dimTables`]},{lead:`Genie reads Unity Catalog metadata (table and column names, comments, primary and foreign keys) to decide which columns answer a question and how tables join. Writing this metadata is the single highest-leverage task.`,happens:[`<b>Table comments.</b> Say what one row is and what the table is for: “One row per adjudicated medical claim, 2023+. Use for denial and payment analysis.”`,`<b>Column comments.</b> Define meaning, units and allowed values: “claim_status: PAID, DENIED or PENDED. Denied = rejected at adjudication.”`,`<b>AI-generated descriptions.</b> In Catalog Explorer, <b>AI generate</b> drafts comments from names and sample values. A human reviews and edits them before saving.`,`<b>Keys.</b> Declare <code>PRIMARY KEY</code> on dimensions and <code>FOREIGN KEY</code> on the fact table. These are informational (not enforced) but tell Genie the correct join paths.`,`<b>Agent-level overrides.</b> Inside the Genie Agent you can also add synonyms (“denials” ↔ <code>claim_status = 'DENIED'</code>), hide columns, and turn on prompt matching. These are scoped to the agent and don’t change UC.`],concepts:[{t:`Unity Catalog metadata`,d:`Names, comments, tags, constraints and lineage stored centrally. Every tool (SQL editor, dashboards, Genie, agents) reads the same metadata.`},{t:`Informational constraints`,d:`PK/FK constraints on Databricks are not enforced on write. They document relationships, which Genie and the query optimizer (with <code>RELY</code>) use.`},{t:`Prompt matching`,d:`Genie samples column values so it can map “Florida” to <code>'FL'</code> and fix typos (“Flordia”). It is enabled automatically when you add tables; you can manage it per column.`},{t:`Knowledge store`,d:`Agent-level curated semantics: table/column descriptions, synonyms, join relationships, prompt matching and SQL expressions. Up to 200 snippets per agent.`}],code:[{label:`SQL · comments`,lang:`sql`,src:`COMMENT ON TABLE ${yv}.fact_claims IS
  'One row per adjudicated medical claim (2023+). Use for denial-rate, paid-amount and volume analysis.';

ALTER TABLE ${yv}.fact_claims ALTER COLUMN claim_status
  COMMENT 'Adjudication outcome: PAID, DENIED or PENDED.';
ALTER TABLE ${yv}.fact_claims ALTER COLUMN member_state
  COMMENT 'Two-letter US state of the member (FL, TX, GA ...).';
ALTER TABLE ${yv}.fact_claims ALTER COLUMN paid_amount
  COMMENT 'Amount paid to the provider in USD after adjudication.';`},{label:`SQL · keys`,lang:`sql`,src:`ALTER TABLE ${yv}.dim_member
  ADD CONSTRAINT pk_member PRIMARY KEY (member_id);
ALTER TABLE ${yv}.dim_provider
  ADD CONSTRAINT pk_provider PRIMARY KEY (provider_id);

ALTER TABLE ${yv}.fact_claims
  ADD CONSTRAINT fk_member FOREIGN KEY (member_id)
  REFERENCES ${yv}.dim_member (member_id);
ALTER TABLE ${yv}.fact_claims
  ADD CONSTRAINT fk_provider FOREIGN KEY (provider_id)
  REFERENCES ${yv}.dim_provider (provider_id);`}],io:[{title:`Before`,cols:[`column`,`comment`],rows:[[`claim_status`,`-`],[`member_state`,`-`],[`paid_amount`,`-`]]},{title:`After`,cols:[`column`,`comment`],rows:[[`claim_status`,`PAID, DENIED or PENDED`],[`member_state`,`2-letter member state`],[`paid_amount`,`USD paid after adjudication`]]}],why:`An LLM can’t guess that <code>sts</code> means status or which of three dates is the service date. Clear metadata removes guesswork, and it helps every human who uses the tables too.`,pitfalls:[`Accepting AI-generated comments blindly. They can be confidently wrong about business meaning.`,`Comments that restate the name (“member_id: the member id”). Add meaning, units and allowed values.`,`Missing foreign keys. Genie may join on the wrong column or not join at all.`],objects:[`columns`,`comment`,`aiGenerate`,`primaryKey`,`foreignKey`]},{lead:`“Denial rate” must mean one thing. A <b>metric view</b> in Unity Catalog defines measures (formulas) and dimensions (ways to slice) once, in YAML. Genie, dashboards and SQL users all query the same definitions.`,happens:[`<b>Agree the definitions.</b> With finance: denial rate = denied claims ÷ all adjudicated claims (pended excluded). Total paid = SUM(paid_amount).`,`<b>Write the metric view.</b> <code>CREATE VIEW … WITH METRICS LANGUAGE YAML</code>: a source table, optional joins, a list of dimensions and a list of measures.`,`<b>Query with MEASURE().</b> Measures are aggregated at query time for whatever dimensions you group by, so a ratio stays correct at state, plan or month level.`,"<b>Add to Genie.</b> Metric views count as data sources (up to 50 per agent). Genie uses <code>MEASURE(`Denial rate`)</code> instead of inventing its own formula.",`<b>Lighter option.</b> Inside the agent, <b>SQL expressions</b> in the knowledge store define measures, filters and fields (with synonyms) without creating a UC object.`],concepts:[{t:`Measure`,d:`An aggregate formula such as <code>SUM(paid_amount)</code> or a ratio. Unlike a pre-computed column, it is evaluated at the grain of each query.`},{t:`Dimension`,d:`An attribute to group or filter by: member state, plan type, service quarter.`},{t:`Metric view vs SQL expression`,d:`A metric view is a governed UC object reused by every tool. A SQL expression lives in one Genie Agent. Use metric views for company-wide KPIs and SQL expressions for agent-specific terms like “high-cost claim”.`}],compare:{title:`Where to put business logic`,cols:[`Need`,`Best tool`],rows:[[`Company KPI (denial rate)`,`Metric view measure`],[`Common filter (“high-cost” = paid > $10k)`,`SQL expression · filter`],[`Derived field (service quarter)`,`Metric view dimension or SQL expression · field`],[`Complex multi-step question`,`Example SQL query`],[`Tone, clarifying questions`,`Text instructions (last resort)`]]},code:[{label:`SQL · metric view`,lang:`sql`,src:`CREATE OR REPLACE VIEW ${yv}.claims_metrics
WITH METRICS LANGUAGE YAML AS $$
version: 1.1
comment: "Official claims KPIs (owner: claims finance)"
source: ${yv}.fact_claims
filter: claim_status IN ('PAID', 'DENIED')
joins:
  - name: plan
    source: ${yv}.dim_plan
    on: source.plan_id = plan.plan_id
dimensions:
  - name: Member state
    expr: member_state
  - name: Plan type
    expr: plan.plan_type
  - name: Service quarter
    expr: DATE_TRUNC('QUARTER', service_date)
measures:
  - name: Claims
    expr: COUNT(1)
  - name: Denial rate
    expr: COUNT(1) FILTER (WHERE claim_status = 'DENIED') / COUNT(1)
  - name: Total paid
    expr: SUM(paid_amount)
$$;`},{label:`SQL · query it`,lang:`sql`,src:`SELECT \`Member state\`,
       MEASURE(\`Denial rate\`) AS denial_rate,
       MEASURE(\`Claims\`)      AS claims
FROM ${yv}.claims_metrics
WHERE \`Service quarter\` = DATE'2026-07-01'
GROUP BY ALL
ORDER BY denial_rate DESC;`}],io:[{title:`Output · MEASURE() by state`,cols:[`Member state`,`denial_rate`,`claims`],rows:[[`FL`,`0.098`,`412,880`],[`GA`,`0.071`,`198,402`],[`TX`,`0.064`,`377,915`]]}],why:`Ratios are where text-to-SQL goes wrong most often (averaging averages, wrong denominators). A governed measure makes the correct formula the easy one.`,pitfalls:[`Pre-computing ratios as columns and then averaging them. Use a measure.`,`Defining the same KPI differently in a metric view and in a text instruction. Keep one source of truth.`,`Forgetting the filter (pended claims) that finance assumes. Put it in the metric view.`],objects:[`metricView`,`yamlSpec`,`measure`,`dimension`,`rawRows`]},{lead:`Now the analyst creates the Genie Agent: chooses data sources and a SQL warehouse, then teaches it with example SQL, trusted functions, SQL expressions and a few precise instructions.`,happens:[`<b>Create.</b> In the sidebar, <b>Genie → New</b>. Add data sources: <code>fact_claims</code>, <code>dim_member</code>, <code>dim_provider</code>, <code>dim_plan</code> and the <code>claims_metrics</code> metric view (≤50 allowed; aim for ≤5). Genie Code drafts descriptions and sample questions.`,`<b>Compute.</b> In <b>Configure → Settings</b>, choose a <b>pro or serverless SQL warehouse</b> (serverless is recommended for fast start-up). Add a title, description and sample questions.`,`<b>Example SQL queries.</b> In <b>Configure → Examples</b>, add 5–10 verified queries for common or tricky questions. Use <code>:parameters</code> so one example covers many states or dates.`,`<b>Trusted assets.</b> Parameterized examples and UC SQL functions are “trusted”: when Genie answers with one, the response is labeled <b>Trusted</b> because the logic is author-verified.`,`<b>SQL expressions & instructions.</b> Add a filter “high-cost claim” and a field “service quarter”. Use text instructions last, for things like “If no time range is given, ask which quarter.”`],concepts:[{t:`Embedded credentials`,d:`The warehouse runs with the author’s compute credentials, so users don’t need warehouse permissions. Data access is still checked as the end user (step 07).`},{t:`Example SQL query`,d:`A question + SQL pair. Genie retrieves the most relevant examples for each new question and learns the pattern, including joins, filters and date logic.`},{t:`Priority of guidance`,d:`Databricks recommends: metadata first, then SQL expressions and example SQL, and text instructions only as a last resort. Keep them consistent (same rounding, same definitions).`},{t:`Capacity`,d:`Up to 50 data sources, 200 knowledge-store snippets, 200,000 conversations per agent and 10,000 messages per conversation.`}],code:[{label:`SQL · trusted function`,lang:`sql`,src:`CREATE OR REPLACE FUNCTION ${yv}.denial_rate_by_state(
    q_start DATE COMMENT 'first service date',
    q_end   DATE COMMENT 'last service date')
RETURNS TABLE (member_state STRING, denial_rate DOUBLE, claims BIGINT)
COMMENT 'Official denial rate per member state for a service-date window.'
RETURN
  SELECT member_state,
         COUNT_IF(claim_status = 'DENIED') / COUNT(*) AS denial_rate,
         COUNT(*) AS claims
  FROM ${yv}.fact_claims
  WHERE claim_status IN ('PAID', 'DENIED')
    AND service_date BETWEEN q_start AND q_end
  GROUP BY member_state;`},{label:`SQL · example query`,lang:`sql`,src:`-- Question: "Top denial reasons in <state> last quarter"
SELECT denial_reason,
       COUNT(*) AS denied_claims
FROM ${yv}.fact_claims
WHERE claim_status = 'DENIED'
  AND member_state = :state
  AND service_date >= DATE_TRUNC('QUARTER', ADD_MONTHS(current_date(), -3))
  AND service_date <  DATE_TRUNC('QUARTER', current_date())
GROUP BY denial_reason
ORDER BY denied_claims DESC
LIMIT 10;`},{label:`Text · instructions`,lang:`sh`,src:`# General instructions (keep short, specific)
- "Last quarter" means the last complete calendar quarter by service_date.
- When users ask about denials without a time range, ask:
  "Which quarter should I use?"

Instructions you must follow when providing summaries
- Show rates as percentages with one decimal.
- Name the quarter covered by the result.`}],io:[{title:`Agent configuration`,cols:[`setting`,`value`],rows:[[`Data`,`4 tables + 1 metric view`],[`Warehouse`,`claims-genie (serverless)`],[`Examples`,`8 SQL queries · 2 trusted functions`],[`SQL expressions`,`high-cost claim · service quarter`],[`Instructions`,`6 lines`]]}],why:`Examples and trusted functions turn tribal SQL knowledge into reusable context. The difference between a 60% and a 90%+ accurate agent is almost always curation, not the model.`,pitfalls:[`Writing 3 pages of text instructions. Long instructions dilute each other. Move rules into SQL expressions and examples.`,`Conflicting guidance (instructions say round to 2 decimals, examples round to 1).`,`Using a classic warehouse. Genie requires pro or serverless.`],objects:[`agentCore`,`dataSources`,`warehouse`,`examples`,`trusted`,`instructions`]},{lead:`What happens in the few seconds between a question and a chart: Genie assembles the most relevant context, an LLM writes SQL, the SQL warehouse runs it, and Genie turns the result into a table, chart and summary.`,happens:[`<b>Parse.</b> “Denial rate by state, last quarter vs prior”. Genie detects the metric (denial rate), dimension (state) and time window (two quarters).`,`<b>Select context.</b> From everything you curated, Genie retrieves only what is relevant: the <code>claims_metrics</code> view, the <code>member_state</code> column, the matching example query, instructions and chat history.`,`<b>Generate SQL.</b> A managed LLM writes a read-only query. If a trusted function fits, Genie calls it and labels the answer <b>Trusted</b>.`,`<b>Execute.</b> The query runs on the serverless SQL warehouse (Photon). Errors are retried automatically. Results are attributed to the user in query history.`,`<b>Respond.</b> A result table, an auto-chosen chart (bars by state, grouped by quarter), a short summary and suggested follow-ups. The user can view or edit the SQL and give 👍 / 👎.`],concepts:[{t:`Context selection`,d:`Genie doesn’t send all metadata to the LLM. It filters tables, columns, examples and history down to what matters, which is why focused agents are more accurate.`},{t:`Read-only SQL`,d:`Generated queries are always SELECTs. Genie can’t modify your tables.`},{t:`Follow-ups`,d:`The conversation keeps state: “only Medicare Advantage” rewrites the previous query with an extra filter.`},{t:`Clarifying questions`,d:`When the question is ambiguous (no time range, two possible metrics), Genie asks before guessing, especially if your instructions tell it to.`}],code:[{label:`SQL · what Genie generates`,lang:`sql`,src:`-- Denial rate by state, last quarter vs prior
SELECT \`Member state\`,
       \`Service quarter\`,
       MEASURE(\`Denial rate\`) AS denial_rate
FROM ${yv}.claims_metrics
WHERE \`Service quarter\` >= DATE_TRUNC('QUARTER', ADD_MONTHS(current_date(), -6))
  AND \`Service quarter\` <  DATE_TRUNC('QUARTER', current_date())
GROUP BY ALL
ORDER BY \`Member state\`, \`Service quarter\`;`}],io:[{title:`Context Genie selected`,cols:[`source`,`used`],rows:[[`claims_metrics`,`Denial rate, Member state, Service quarter`],[`example SQL`,`“Denial rate by state for a quarter”`],[`instruction`,`“last quarter” = last complete quarter`]]},{title:`Result`,cols:[`state`,`Q2 2026`,`Q3 2026`],rows:[[`FL`,`7.2%`,`9.8%`],[`GA`,`6.9%`,`7.1%`],[`TX`,`6.6%`,`6.4%`]]}],why:`Every answer is reproducible SQL over governed data. That makes Genie auditable in a way a chatbot that “remembers” numbers can never be.`,pitfalls:[`Ignoring 👎 feedback. It shows up in the Monitor tab and is your best signal for what to fix.`,`Asking multi-step “why” questions in Chat mode. Switch to Agent mode for investigations.`],objects:[`question`,`contextSel`,`llm2`,`sqlCard`,`warehouse`,`chart`]},{lead:`Two managers ask the identical question and get different rows, as they should. A Genie Agent runs SQL with the author’s compute, but Unity Catalog evaluates <b>data access as the end user</b>. Row filters and column masks apply automatically.`,happens:[`<b>Two identities.</b> The Florida manager and the Texas manager both ask “Denied claims by provider last quarter.”`,`<b>Same SQL.</b> Genie writes the same query for both.`,`<b>Row filter.</b> <code>fact_claims</code> has a row filter function. For each row, UC checks the current user’s region mapping, so FL sees FL rows and TX sees TX rows. National analysts in an admin group see all.`,`<b>Column mask.</b> <code>member_id</code> has a mask. Users outside <code>phi_readers</code> see <code>***0042</code>.`,`<b>Audit.</b> Each query is attributed to the real user in query history, the agent’s Monitor tab and audit logs (system tables).`],concepts:[{t:`Compute vs data access`,d:`Compute: the warehouse runs with credentials embedded by the author. Data: UC checks the <b>end user’s</b> SELECT grants, row filters and masks. Questions about data a user can’t access return an empty response.`},{t:`Row filter`,d:`A SQL UDF that returns TRUE/FALSE per row, attached with <code>ALTER TABLE … SET ROW FILTER</code>. It is evaluated at query time for every engine and tool.`},{t:`Column mask`,d:`A SQL UDF that returns the value or a redacted version, attached with <code>ALTER COLUMN … SET MASK</code>.`},{t:`ABAC policies`,d:`Attribute-based access control: define a filter or mask once and apply it to every table carrying a governed tag (for example <code>phi=member_id</code>), instead of table by table.`}],code:[{label:`SQL · row filter`,lang:`sql`,src:`CREATE OR REPLACE FUNCTION ${yv}.state_filter(state STRING)
RETURN is_account_group_member('claims_national')
    OR EXISTS (
      SELECT 1 FROM ${yv}.user_regions r
      WHERE r.user_email = current_user() AND r.state = state);

ALTER TABLE ${yv}.fact_claims
  SET ROW FILTER ${yv}.state_filter ON (member_state);`},{label:`SQL · column mask`,lang:`sql`,src:`CREATE OR REPLACE FUNCTION ${yv}.mask_member_id(member_id STRING)
RETURN CASE
  WHEN is_account_group_member('phi_readers') THEN member_id
  ELSE concat('***', right(member_id, 4))
END;

ALTER TABLE ${yv}.dim_member
  ALTER COLUMN member_id SET MASK ${yv}.mask_member_id;`},{label:`SQL · audit`,lang:`sql`,src:`SELECT executed_by, statement_text, start_time
FROM system.query.history
WHERE statement_text ILIKE '%fact_claims%'
  AND start_time > current_date() - INTERVAL 7 DAYS
ORDER BY start_time DESC;`}],io:[{title:`FL manager sees`,cols:[`provider`,`state`,`denied`,`member_id`],rows:[[`Bayview Clinic`,`FL`,`1,204`,`***0042`],[`Coral Ortho`,`FL`,`988`,`***7731`]]},{title:`TX manager sees`,cols:[`provider`,`state`,`denied`,`member_id`],rows:[[`Lone Star Imaging`,`TX`,`1,117`,`***5510`],[`Gulf Family Med`,`TX`,`642`,`***2208`]]}],why:`Security lives in the data layer, so it’s identical in Genie, dashboards, notebooks and the API. You don’t have to trust the LLM to “remember” who may see what.`,pitfalls:[`Putting “only show Florida” in a text instruction. That’s not security. Use row filters.`,`Testing only as the author. Test with a real end-user account (or group) before sharing.`,`Sharing the agent before users have SELECT on the data. They’ll get empty answers.`],objects:[`userFL`,`userTX`,`rowFilter`,`colMask`,`ucGate`,`audit`]},{lead:`Before sharing, prove it works. <b>Benchmarks</b> are test questions with a known-correct SQL answer. Genie runs each as a new conversation and compares result sets. After launch, the Monitor tab and user feedback keep the agent honest.`,happens:[`<b>Collect questions.</b> 20–50 real questions from managers, including awkward phrasings and out-of-scope ones that should be declined.`,`<b>Add ground truth.</b> In <b>Benchmarks → Add benchmark</b>, enter the question and the SQL answer (or a UC function). <b>Generate SQL</b> can draft it for you to verify.`,`<b>Run.</b> Run all benchmarks in <b>Chat mode</b> (result sets compared to your SQL) or <b>Agent mode</b> (an LLM judge grades the report, guided by an evaluation note).`,`<b>Read the evaluation.</b> The Evaluations tab shows each run’s accuracy and, per question, Genie’s output vs ground truth: Good, Bad or Manual review.`,`<b>Fix and re-run.</b> Fix failures with metadata, SQL expressions or examples, never by editing the benchmark. Re-run after every change to catch regressions.`,`<b>Monitor.</b> After launch, the Monitor tab lists every question with ratings and flagged responses. <b>Analyze Agent Usage</b> uses Genie Code to summarize recurring issues.`],concepts:[{t:`Benchmarks are evaluation-only`,d:`Genie does <b>not</b> learn from benchmark questions or SQL. That keeps the test honest. Up to 500 benchmark questions per agent.`},{t:`Result-set comparison`,d:`In Chat mode, accuracy is about the answer, not the SQL text. Two different queries that return the same rows both pass.`},{t:`Feedback loop`,d:`👍 / 👎 and “request review” from users appear in the Monitor tab and audit logs. Turn each failure into a new benchmark and a curation fix.`}],io:[{title:`Benchmark run (illustrative)`,cols:[`question`,`result`,`note`],rows:[[`Denial rate by state, Q3`,`Good`,`matches trusted function`],[`Top 5 providers by paid amount`,`Good`,``],[`Claims per member, MA plans`,`Bad`,`joined on wrong date → add FK`],[`What’s our stock price?`,`Good`,`correctly declined`],[`Run summary`,`23 / 25 = 92%`,`target ≥ 90% before sharing`]]}],code:[{label:`SQL · ground-truth answer`,lang:`sql`,src:`-- Benchmark: "Denial rate by state for Q3 2026"
SELECT * FROM ${yv}.denial_rate_by_state(DATE'2026-07-01', DATE'2026-09-30')
ORDER BY member_state;`}],why:`Without a benchmark, every change to instructions is a guess. With one, you can say “92% on 25 real questions” and show exactly what broke when a number drops.`,pitfalls:[`Benchmarks written only by the developer. Use real user questions.`,`Only happy-path questions. Include ambiguous and out-of-scope prompts.`,`Tuning to pass a single benchmark with a very specific text instruction. Fix the underlying metadata instead.`],objects:[`benchSet`,`groundTruth`,`compare2`,`accuracy`,`monitor`]},{lead:`One governed agent, many front doors. Share it with <code>CAN RUN</code>, and users find it in <b>Genie One</b>, Microsoft Teams or an embedded iframe. Developers call it through the <b>Conversation API</b>, and other AI agents use it as a tool through the <b>Genie Agent MCP server</b>.`,happens:[`<b>Grant data.</b> Users need the Databricks SQL entitlement, <code>SELECT</code> on the tables, and <code>CAN RUN</code> (or CAN VIEW) on the agent. They don’t need warehouse permissions.`,`<b>Genie One.</b> Business users see the agent beside dashboards and apps. Genie One routes questions to the best matching agent. It’s also available on mobile.`,`<b>Teams / embed.</b> The Databricks Genie app in Microsoft Teams (Public Preview) can pin this agent to a channel. An admin can allow an embedding domain, and authors copy iframe code from <b>Share → Embed space</b>.`,`<b>Conversation API.</b> <code>POST /api/2.0/genie/spaces/{space_id}/start-conversation</code>, poll the message until <code>COMPLETED</code>, then fetch the query result. Paths still say <code>spaces</code>.`,`<b>MCP for agents.</b> <code>/api/2.0/mcp/genie/{space_id}</code> exposes the agent as a read-only tool to any MCP client, with UC permissions enforced per request.`,`<b>As code.</b> Version and promote the agent across dev, staging and prod with Declarative Automation Bundles.`],concepts:[{t:`Permission levels`,d:`<b>CAN MANAGE</b>: edit, share, see monitoring. <b>CAN EDIT</b>: change configuration. <b>CAN RUN</b>: ask questions. <b>CAN VIEW</b>: read the agent and conversations.`},{t:`Asynchronous API`,d:`Start → poll every 1–5 s with exponential backoff (max ~10 minutes) → read attachments. Start a new conversation per user session; follow-ups go to the same conversation.`},{t:`Genie as a tool`,d:`A custom agent (for example from use case 01) can call this Genie Agent for data questions and the RAG index for document questions. Each call is asked by an identity, and that identity’s UC permissions decide the rows.`}],code:[{label:`Shell · Conversation API`,lang:`sh`,src:`# 1 · ask
curl -s -X POST "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/start-conversation" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN" \\
  -d '{"content": "Denial rate by state last quarter"}'
# → {"conversation_id": "...", "message_id": "...", "message": {"status": "IN_PROGRESS"}}

# 2 · poll until status is COMPLETED
curl -s "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/conversations/$CONV_ID/messages/$MSG_ID" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN"

# 3 · fetch the rows of the SQL attachment
curl -s "$DATABRICKS_HOST/api/2.0/genie/spaces/$SPACE_ID/conversations/$CONV_ID/messages/$MSG_ID/attachments/$ATT_ID/query-result" \\
  -H "Authorization: Bearer $DATABRICKS_TOKEN"`},{label:`Python · SDK`,lang:`py`,src:`from databricks.sdk import WorkspaceClient

w = WorkspaceClient()                      # auth from env / profile
msg = w.genie.start_conversation_and_wait(
    space_id=SPACE_ID,
    content="Denial rate by state last quarter")

for a in msg.attachments or []:
    if a.query:
        print(a.query.query)               # the generated SQL
        res = w.genie.get_message_attachment_query_result(
            SPACE_ID, msg.conversation_id, msg.message_id, a.attachment_id)

# follow-up keeps context
w.genie.create_message_and_wait(SPACE_ID, msg.conversation_id,
                                "Only Medicare Advantage plans")`},{label:`SQL · grants`,lang:`sql`,src:`GRANT USE CATALOG ON CATALOG main TO \`claims-managers\`;
GRANT USE SCHEMA  ON SCHEMA  ${yv} TO \`claims-managers\`;
GRANT SELECT      ON SCHEMA  ${yv} TO \`claims-managers\`;
-- then: Genie Agent → Share → claims-managers → Can Run`}],io:[{title:`Front doors`,cols:[`surface`,`who`,`how`],rows:[[`Genie One`,`business users`,`web + mobile, routes to agents`],[`Microsoft Teams`,`everyone`,`@Databricks Genie, pinned agent`],[`Embedded iframe`,`portal users`,`Share → Embed space`],[`Conversation API`,`developers`,`REST / SDK`],[`MCP server`,`AI agents`,`/api/2.0/mcp/genie/{space_id}`]]}],why:`People adopt tools that live where they already work. Because identity and permissions travel with every request, adding a new front door never adds a new security risk.`,pitfalls:[`Reusing one conversation for many users in an app. Start a new conversation per session.`,`Polling in a tight loop. Use backoff and a timeout.`,`Forgetting that the MCP endpoint has no chat history. Each tool call is a standalone question.`],objects:[`agentCore`,`genieOne`,`teams`,`embed`,`api`,`mcp`]}],xv=`main.claims`,Sv={manager:{kind:`Business user`,title:`Claims-operations manager`,what:`Runs a regional claims team. Decides staffing, provider outreach and appeals based on denial and payment numbers.`,how:`Knows the business deeply, but not SQL or the table layout. Today every new question is a ticket to the BI team.`,here:`The audience the Genie Agent is curated for. Their real questions become the sample questions, example SQL and benchmarks.`,facts:[[`Wants`,`Answers today, with numbers finance agrees with`],[`Sees`,`Only their own region (row filter)`]]},ticketQueue:{kind:`Business pain`,title:`The BI ticket backlog`,what:`A queue of one-off data requests: “denials by provider”, “paid amount by plan”, “same thing but for Q2”.`,how:`Each ticket waits for an analyst, who writes SQL and replies. Most are variations of the same 20 questions.`,here:`Genie absorbs the repetitive questions so the BI team can focus on new analysis and on curating the agent.`},waitTime:{kind:`Business pain`,title:`3–5 days per new question`,what:`The typical turnaround for an ad-hoc data request through a ticket queue.`,how:`Follow-up questions restart the clock. Decisions get made on stale or partial data.`,here:`Target: seconds per answer, with the SQL visible and accuracy measured by benchmarks (step 08).`},question:{kind:`Business question`,title:`“Why did denied claims jump in Florida last quarter?”`,what:`A natural-language question with an implied metric (denial rate), a filter (Florida) and a time window (last complete quarter).`,how:`Genie needs metadata to map “denied” to <code>claim_status = 'DENIED'</code>, “Florida” to <code>'FL'</code>, and “last quarter” to a date range.`,here:`This question is followed through the walkthrough. A “why” question like this is a good fit for Agent mode, which runs several queries.`},blueprint2:{kind:`Developer solution`,title:`The Genie blueprint`,what:`Eight Databricks components, in the order you build them. Each block is explained in its own step.`,how:`Data: Lakeflow → Gold tables → UC metadata → metric view. Agent: Genie Agent on a SQL warehouse. Trust: row filters, then benchmarks.`,here:`Click a block to learn what it is. Notice that most of the work is data curation, not AI.`},sqlCard:{kind:`Genie output`,title:`Generated SQL`,what:`The read-only query Genie wrote for the question. It is always shown with the answer.`,how:`Generated by a managed LLM from selected context (metadata, examples, metric views, instructions). Users can open, copy, edit and re-run it.`,here:`The trust mechanism: an analyst can verify the logic, and the same SQL can become an example or a benchmark.`,code:{lang:`sql`,src:`SELECT \`Member state\`, MEASURE(\`Denial rate\`)\nFROM ${xv}.claims_metrics\nGROUP BY ALL;`}},chart:{kind:`Genie output`,title:`Result table and chart`,what:`The rows returned by the SQL warehouse, plus an automatically suggested visualization.`,how:`Genie picks a chart type from the result shape (categories + a number → bars; dates → lines). Users can ask “make it a line chart”.`,here:`Florida’s bar rises the most between the two quarters, which is the start of the investigation.`,facts:[[`Rows`,`Up to the warehouse result limit`],[`Charts`,`bar, line, area, scatter, pie, table`]]},summary:{kind:`Genie output`,title:`Natural-language summary`,what:`A short sentence explaining the result: “Florida’s denial rate rose 2.6 points to 9.8%, the largest increase.”`,how:`Written by the LLM from the result rows. Only text instructions under “Instructions you must follow when providing summaries” change its style.`,here:`Helps non-technical readers, but the numbers always come from the SQL result.`},bronze:{kind:`Medallion · Bronze`,title:`Bronze: raw claim feeds`,what:`Claim (837) and eligibility files exactly as received, with cryptic codes and string-typed amounts.`,how:`Loaded incrementally into a streaming table with <code>read_files</code> / Auto Loader from a UC volume.`,here:`Never added to the Genie Agent. It is the audit copy and the input to Silver.`},silver:{kind:`Medallion · Silver`,title:`Silver: cleaned and conformed`,what:`Typed, deduplicated rows with readable status codes.`,how:`Pipeline <b>expectations</b> drop or quarantine rows that fail quality rules.`,here:`Turns <code>clm_sts_cd = 'D'</code> into <code>claim_status = 'DENIED'</code>, the value Genie will filter on.`,code:{lang:`sql`,src:`CONSTRAINT valid_amount EXPECT (billed_amount >= 0)
  ON VIOLATION DROP ROW`}},pipeline:{kind:`Lakeflow`,title:`Lakeflow Spark Declarative Pipelines`,what:`Databricks’ declarative ETL framework (formerly Delta Live Tables). You declare tables in SQL or Python; Databricks handles order, retries, incremental processing and data quality.`,how:`<code>CREATE OR REFRESH STREAMING TABLE</code> for incremental sources, <code>CREATE OR REFRESH MATERIALIZED VIEW</code> for derived tables. Runs on serverless compute on a schedule or continuously.`,here:`Keeps the Gold tables Genie reads fresh and clean every night.`},factClaims:{kind:`Gold · fact table`,title:`${xv}.fact_claims`,what:`One row per adjudicated claim: IDs, member state, service date, status, denial reason, billed and paid amounts.`,how:`A materialized view produced by the pipeline. Joins to dimensions through foreign keys.`,here:`The center of the star schema and the main table Genie queries.`,facts:[[`Rows`,`~38 million`],[`Grain`,`one claim`],[`Keys`,`claim_id (PK) · member_id, provider_id, plan_id (FK)`]]},dimTables:{kind:`Gold · dimensions`,title:`dim_member · dim_provider · dim_plan`,what:`Descriptive tables: who the member is, which provider, which plan.`,how:`Small, slowly changing tables joined to the fact table by key.`,here:`Let Genie answer “by provider specialty” or “by plan type” with a simple join.`},columns:{kind:`Unity Catalog`,title:`Columns with business names`,what:`Each pillar is a column of <code>fact_claims</code>. Its height is how often Genie uses it.`,how:`Genie sees column names, types, comments and sampled values. Columns you hide in the agent are ignored.`,here:`Clear names like <code>paid_amount</code> beat <code>pd_amt</code> every time.`},comment:{kind:`Unity Catalog metadata`,title:`Table and column comments`,what:`Plain-English descriptions stored in Unity Catalog with the table.`,how:`Set with <code>COMMENT ON TABLE</code> / <code>ALTER COLUMN … COMMENT</code> or in Catalog Explorer. Shared by every tool.`,here:`Genie reads them to choose columns. “claim_status: PAID, DENIED or PENDED” tells it exactly how to filter denials.`,code:{lang:`sql`,src:`ALTER TABLE ${xv}.fact_claims ALTER COLUMN claim_status\n  COMMENT 'PAID, DENIED or PENDED';`}},aiGenerate:{kind:`AI assist`,title:`AI-generated descriptions`,what:`Catalog Explorer and Genie Code can draft table and column comments from names, types and sample values.`,how:`An LLM proposes text; you review, edit and save it.`,here:`Fast first drafts for 40 columns. A curator corrects business meaning before saving.`},primaryKey:{kind:`Constraint`,title:`Primary key`,what:`Declares the column that uniquely identifies a row, e.g. <code>member_id</code> in <code>dim_member</code>.`,how:`<code>ADD CONSTRAINT … PRIMARY KEY (…)</code>. Informational on Databricks: documented, not enforced on write.`,here:`Tells Genie which side of a join is the “one” side.`},foreignKey:{kind:`Constraint`,title:`Foreign key`,what:`Declares that <code>fact_claims.member_id</code> refers to <code>dim_member.member_id</code>.`,how:`<code>ADD CONSTRAINT … FOREIGN KEY (…) REFERENCES …</code>. Join relationships can also be added in the agent’s knowledge store.`,here:`The glowing arcs: correct join paths, so Genie never joins on the wrong date or ID.`,code:{lang:`sql`,src:`ALTER TABLE ${xv}.fact_claims ADD CONSTRAINT fk_member\n  FOREIGN KEY (member_id) REFERENCES ${xv}.dim_member (member_id);`}},metricView:{kind:`Unity Catalog · metric view`,title:`${xv}.claims_metrics`,what:`A governed semantic object: a source table plus named dimensions and measures, defined in YAML.`,how:"Created with <code>CREATE VIEW … WITH METRICS LANGUAGE YAML</code>. Queried with <code>MEASURE(`name`)</code> and <code>GROUP BY</code> on dimensions. Usable in Genie, dashboards, alerts and SQL.",here:`The prism: raw rows go in, official KPIs come out. Genie queries it instead of inventing formulas.`},yamlSpec:{kind:`Metric view · definition`,title:`The YAML spec`,what:`The human-readable definition: <code>source</code>, optional <code>joins</code> and <code>filter</code>, <code>dimensions</code>, <code>measures</code>.`,how:`Stored in Unity Catalog with the view, so it has owners, permissions and lineage like any table.`,here:`Finance reviews this file once. Everyone gets the same “denial rate”.`,code:{lang:`sql`,src:`measures:
  - name: Denial rate
    expr: COUNT(1) FILTER (WHERE claim_status = 'DENIED') / COUNT(1)`}},measure:{kind:`Metric view · measure`,title:`Measures (the dials)`,what:`Aggregate formulas: Claims, Denial rate, Total paid.`,how:`Evaluated at query time at the grain of the GROUP BY, so ratios stay correct whether you group by state, plan or month.`,here:`Each dial is one measure. The needle position comes from the same formula everywhere.`},dimension:{kind:`Metric view · dimension`,title:`Dimensions (the rings)`,what:`Ways to slice a measure: Member state, Plan type, Service quarter.`,how:`A dimension is a column or expression, e.g. <code>DATE_TRUNC('QUARTER', service_date)</code>.`,here:`The rings around the prism: Genie picks the ones the question mentions.`},rawRows:{kind:`Input rows`,title:`Claim rows flowing in`,what:`Individual rows from <code>fact_claims</code>.`,how:`The metric view reads them through its <code>source</code> and <code>filter</code> (pended claims excluded).`,here:`Many rows in, a few governed numbers out.`},agentCore:{kind:`Genie Agent`,title:`Claims Ops Genie Agent`,what:`The curated agent (formerly “Genie space”): data sources + warehouse + knowledge store + examples + instructions.`,how:`Created in the UI (Genie → New), via the CLI (<code>databricks genie create-space</code>) or the management API. Its ID is the <code>space_id</code> used by APIs.`,here:`The core everything docks into. Its quality depends on what you feed it.`,facts:[[`Limits`,`50 data sources · 200 knowledge snippets`],[`Usage`,`200,000 conversations · 10,000 messages each`]]},dataSources:{kind:`Genie Agent · data`,title:`Data sources`,what:`The tables, views and metric views the agent may query: 4 tables + 1 metric view here.`,how:`Managed, external, foreign tables, views, materialized views and metric views registered in Unity Catalog. Max 50; aim for 5 or fewer.`,here:`Fewer, focused sources mean less confusion and higher accuracy.`},warehouse:{kind:`Compute`,title:`Serverless SQL warehouse`,what:`The SQL engine (Photon) that runs every query Genie generates.`,how:`Must be pro or serverless. Serverless starts in seconds and scales automatically. The author’s credentials for it are embedded, so users don’t need warehouse permissions.`,here:`The disk stack: it spins up when a question arrives and returns the rows.`,facts:[[`Type`,`Serverless (recommended) or Pro`],[`Billing`,`DBSQL usage for each query`]]},examples:{kind:`Genie Agent · examples`,title:`Example SQL queries`,what:`Question + SQL pairs written or verified by the curator.`,how:`Genie retrieves the most relevant examples for each question. <code>:parameters</code> let one example cover many states and dates.`,here:`The orbiting cards: the best way to teach joins, date logic and business rules.`,code:{lang:`sql`,src:`WHERE claim_status = 'DENIED'
  AND member_state = :state`}},trusted:{kind:`Genie Agent · trusted asset`,title:`Trusted assets`,what:`Parameterized example queries and UC SQL functions whose logic the author has verified.`,how:`When Genie answers with one, the response is labeled <b>Trusted</b>, so users know the logic is approved.`,here:`The shield: <code>denial_rate_by_state(q_start, q_end)</code> is the official calculation.`,code:{lang:`sql`,src:`SELECT * FROM ${xv}.denial_rate_by_state(\n  DATE'2026-07-01', DATE'2026-09-30');`}},instructions:{kind:`Genie Agent · instructions`,title:`Instructions`,what:`Short text rules: definitions of “last quarter”, when to ask clarifying questions, how to format summaries.`,how:`Use them last, after metadata, SQL expressions and examples. Clarification rules work best with a trigger, the missing detail, the action and an example.`,here:`Six specific lines beat three pages of prose.`},contextSel:{kind:`Genie internals`,title:`Context selection`,what:`From all curated knowledge, Genie picks what is relevant to this one question.`,how:`Matches the question against table/column metadata, sample values, SQL expressions, examples, instructions and chat history.`,here:`Only the highlighted tiles go to the LLM: the metric view, two dimensions and one example.`},llm2:{kind:`Model`,title:`Managed LLM (text-to-SQL)`,what:`The large language model that writes the SQL. Part of Genie’s compound AI system; Databricks manages it.`,how:`Receives the question plus selected context and returns a read-only query. Errors are retried automatically.`,here:`It writes SQL, it doesn’t know the numbers. The warehouse computes them.`},userFL:{kind:`End user`,title:`Florida manager`,what:`Member of group <code>claims-managers</code>, mapped to state FL in <code>user_regions</code>.`,how:`Genie runs the query, and UC evaluates the row filter with <code>current_user()</code> = this person.`,here:`Sees only FL rows, with member IDs masked.`},userTX:{kind:`End user`,title:`Texas manager`,what:`Same group, mapped to state TX.`,how:`Same agent, same question, same SQL.`,here:`Sees only TX rows. No extra configuration in Genie was needed.`},rowFilter:{kind:`Unity Catalog · security`,title:`Row filter`,what:`A SQL function attached to a table that decides, per row, whether the current user may see it.`,how:`<code>ALTER TABLE … SET ROW FILTER fn ON (member_state)</code>. Evaluated for every query from every tool.`,here:`The sieve: each manager’s rows pass through, others are removed.`,code:{lang:`sql`,src:`ALTER TABLE ${xv}.fact_claims\n  SET ROW FILTER ${xv}.state_filter ON (member_state);`}},colMask:{kind:`Unity Catalog · security`,title:`Column mask`,what:`A SQL function that returns the real value or a redacted one, based on who is asking.`,how:`<code>ALTER COLUMN member_id SET MASK fn</code>. Use <code>is_account_group_member()</code> inside the function.`,here:`<code>M0042</code> becomes <code>***0042</code> for anyone outside <code>phi_readers</code>.`},ucGate:{kind:`Unity Catalog`,title:`Unity Catalog access check`,what:`Every query is checked against the end user’s grants (USE CATALOG, USE SCHEMA, SELECT), filters and masks.`,how:`Genie uses the author’s compute but the user’s data identity. Questions about inaccessible data return an empty response.`,here:`The gate: one security model for Genie, dashboards, notebooks and APIs.`},audit:{kind:`Observability`,title:`Query history and audit logs`,what:`Every Genie query is attributed to the real user.`,how:`Visible in query history, the agent’s Monitor tab and audit system tables.`,here:`Compliance can see who asked what, and which rows were returned.`,code:{lang:`sql`,src:`SELECT executed_by, statement_text
FROM system.query.history
ORDER BY start_time DESC;`}},benchSet:{kind:`Genie Agent · benchmarks`,title:`Benchmark questions`,what:`Test questions with a ground-truth SQL answer. Up to 500 per agent.`,how:`Added in the Benchmarks tab. Each runs as a new conversation. Genie does not learn from them.`,here:`The cards on the conveyor: 25 real manager questions, including ones that should be declined.`},groundTruth:{kind:`Benchmark · ground truth`,title:`Ground-truth SQL`,what:`The verified correct query (or UC function) for a benchmark question.`,how:`Write it yourself or use <b>Generate SQL</b> and verify. Chat mode compares result sets, not SQL text.`,here:`The reference each Genie answer is compared against.`},compare2:{kind:`Benchmark · evaluation`,title:`Result comparison`,what:`Genie’s result set vs the ground-truth result set.`,how:`Rated <b>Good</b>, <b>Bad</b> or <b>Manual review needed</b>. Agent mode benchmarks use an LLM judge instead.`,here:`Green = match, red = mismatch to fix with metadata or examples.`},accuracy:{kind:`Benchmark · score`,title:`Accuracy score`,what:`The share of benchmark questions answered correctly in a run.`,how:`Shown per run in the Evaluations tab, so you can compare before/after a change.`,here:`23 of 25 = 92%. Set a bar (e.g. ≥ 90%) before sharing with users.`},monitor:{kind:`Genie Agent · monitoring`,title:`Monitor tab`,what:`All questions users asked, with 👍 / 👎, review requests and a weekly digest.`,how:`<b>Analyze Agent Usage</b> launches Genie Code to summarize patterns over recent months.`,here:`Production feedback becomes new benchmarks and curation fixes.`},genieOne:{kind:`Surface`,title:`Genie One`,what:`The business-user front door (formerly Databricks One): chat across Genie Agents, dashboards and apps, on web and mobile.`,how:`Users with CAN RUN see the agent. Genie One can route questions to the best matching agent.`,here:`Where most managers will meet the agent.`},teams:{kind:`Surface`,title:`Microsoft Teams`,what:`The Databricks Genie app for Teams (Public Preview).`,how:`Ask in chat or channels. Answers come from Genie One or a pinned Genie Agent, with the user’s identity.`,here:`Answers inside the tool managers already use all day.`},embed:{kind:`Surface`,title:`Embedded iframe`,what:`The agent embedded in an internal portal or app.`,how:`An admin allows the embedding domain. An author with CAN MANAGE copies code from <b>Share → Embed space</b>. Viewers sign in and can’t edit.`,here:`Puts Genie next to the claims workflow screen.`,code:{lang:`sh`,src:`<!-- src: copy from Share → Embed space -->
<iframe src="EMBED_URL" allow="clipboard-write"></iframe>`}},api:{kind:`Developer access`,title:`Genie Conversation API`,what:`REST endpoints to ask questions programmatically and read the SQL, results and summary.`,how:`Start a conversation, poll the message until COMPLETED, fetch attachment query results. Available in the Python SDK (<code>w.genie</code>). Paths still use <code>/genie/spaces/</code>.`,here:`Powers custom apps, Slack bots and scheduled reports.`,code:{lang:`sh`,src:`POST /api/2.0/genie/spaces/{space_id}/start-conversation
{"content": "Denial rate by state last quarter"}`}},mcp:{kind:`Developer access`,title:`Genie Agent MCP server`,what:`A managed MCP server (Public Preview) that exposes the agent as a read-only tool to AI agents and MCP clients.`,how:`Endpoint <code>https://&lt;host&gt;/api/2.0/mcp/genie/{space_id}</code>, OAuth scope <code>genie</code>. No conversation history; each call stands alone. Billed at DBSQL pricing.`,here:`Lets the RAG agent from use case 01 ask data questions too.`}};Object.assign(Sv,{b_lakeflow:Sv.pipeline,b_gold:Sv.factClaims,b_meta:Sv.comment,b_metric:Sv.metricView,b_genie:Sv.agentCore,b_wh:Sv.warehouse,b_rls:Sv.rowFilter,b_bench:Sv.benchSet});var Cv=`Inter, Helvetica, Arial, sans-serif`,wv=`JetBrains Mono, Menlo, Consolas, monospace`,Tv=new Map;function Ev(e,t,n,r){if(Tv.has(e))return Tv.get(e);let i=document.createElement(`canvas`);i.width=t*2,i.height=n*2;let a=i.getContext(`2d`);a.scale(2,2),r(a,t,n);let o=new Ui(i);return o.colorSpace=Re,o.anisotropy=8,Tv.set(e,o),o}function Dv(e,t,{w:n=420,h:r=220,title:i=``,bg:a=`#1c1f25`}={}){return Ev(e,n,r,e=>{e.fillStyle=a,e.fillRect(0,0,n,r);let o=22;i&&(e.fillStyle=`#d9653b`,e.fillRect(14,12,3,14),e.fillStyle=`#e9e6e0`,e.font=`600 12px ${Cv}`,e.fillText(i,24,24),o=46),e.font=`12px ${wv}`;for(let n of t){let[t,r]=Array.isArray(n)?n:[n];e.fillStyle=r||`#b9bcc4`,e.fillText(t,16,o),o+=17}})}var Ov=`#d9875f`,kv=`#c9ccd4`,Av=`#8eae9d`,jv=`#7d828c`;function Mv(e,t,n,{d:r=.06,edge:i=7174797,edgeO:a=.5,side:o=2829877}={}){let s=Q(o,.6),c=new Ro({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.32,color:12172484,roughness:.55,envMapIntensity:.3}),l=new G(new K(e,t,r),[s,s,s,s,c,s]);return i!=null&&l.add(y_(l.geometry,i,1,a)),l}function Nv(e,{w:t=2.6,d:n=.7,maxH:r=2,colors:i}={}){let a=new U,o=new G($(t+.3,.08,n+.3,.03),Q(3093307,.6));o.position.y=.04,a.add(o);let s=t/e;a.bars=[];for(let r=0;r<e;r++){let e=i?i[r]:9080729,o=new G($(s*.62,1,n*.7,.03),e===J.lava?Z(J.lava,1.4):Q(e,.45));o.geometry.translate(0,.5,0),o.position.set(-t/2+s*(r+.5),.08,0),o.scale.y=.001,a.add(o),a.bars.push(o)}return a.set=e=>a.bars.forEach((t,n)=>{t.scale.y=Math.max(.001,e[n]*r)}),a}function Pv(e=4,t=.75){let n=new U;n.disks=[];for(let r=0;r<e;r++){let e=new U;e.position.y=.16+r*.32,n.add(e);let i=new G(new Yi(t,t,.2,64),v_(4869976,.35,.6));e.add(i);let a=new G(new Eo(t+.005,.018,6,80),Z(J.lava,1.4));a.rotation.x=Math.PI/2,a.position.y=.06,e.add(a);for(let n=0;n<8;n++){let r=new G(new K(.06,.04,.02),Z(n%3?J.mint:J.amber,1)),i=n/8*Math.PI*2;r.position.set(Math.sin(i)*(t+.01),-.03,Math.cos(i)*(t+.01)),r.rotation.y=i,e.add(r)}n.disks.push(e)}let r=new G(new Yi(t*.6,t*.7,.1,48),Q(2829877,.5));return r.position.y=.16+e*.32-.1,n.add(r),n}function Fv(e=.9){let t=new U;return t.shell=new G(new Qi(e,0),__(5989488,.35)),t.add(t.shell),t.cage=y_(t.shell.geometry,15328992,1,.45),t.add(t.cage),t.heart=new G(new So(e*.42,1),Z(J.lava,2)),t.add(t.heart),t.ring=new G(new Eo(e*1.35,.02,8,120),Z(J.amber,1)),t.ring.rotation.x=Math.PI/2,t.add(t.ring),t}function Iv(e=J.amber){let t=new U,n=Z(e,1.2),r=new G(new Eo(.14,.045,10,32),n);t.add(r);let i=new G(new K(.36,.06,.06),n);i.position.x=.32,t.add(i);let a=new G(new K(.05,.1,.06),n);a.position.set(.42,-.07,0),t.add(a);let o=a.clone();return o.position.x=.32,t.add(o),t}function Lv(e=J.mint,t=1){let n=new Pa;n.moveTo(0,.5),n.lineTo(.4,.36),n.lineTo(.38,-.05),n.quadraticCurveTo(.3,-.38,0,-.52),n.quadraticCurveTo(-.3,-.38,-.38,-.05),n.lineTo(-.4,.36),n.closePath();let r=new yo(n,{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2});r.center(),r.scale(t,t,t);let i=new U,a=new G(r,Q(3093564,.45));i.add(a),i.add(y_(r,e,1,.8));let o=new Pa;o.moveTo(-.16,0),o.lineTo(-.05,-.12),o.lineTo(.18,.14),o.lineTo(.14,.18),o.lineTo(-.05,-.03),o.lineTo(-.12,.04),o.closePath();let s=new yo(o,{depth:.04,bevelEnabled:!1});s.scale(t,t,t);let c=new G(s,Z(e,1.6));return c.position.z=.07*t,i.add(c),i}function Rv(e=.8,t=J.lava){let n=new U,r=new G(new Yi(e,e,.08,64),Q(2369326,.5));r.rotation.x=Math.PI/2,n.add(r);let i=new G(new Eo(e*.8,.035,8,96,Math.PI*1.5),Q(4869976,.5));i.rotation.z=-Math.PI*.25,i.position.z=.05,n.add(i),n.arc=new G(new Eo(e*.8,.05,8,96,Math.PI*1.5),Z(t,1.6)),n.arc.rotation.z=Math.PI*1.25,n.arc.scale.x=-1,n.arc.position.z=.07,n.add(n.arc),n.needle=new G(new K(.04,e*.7,.02),Q(15328992,.4)),n.needle.geometry.translate(0,e*.33,0),n.needle.position.z=.09,n.add(n.needle);let a=new G(new Yi(.07,.07,.06,24),v_(9080729,.4,.6));return a.rotation.x=Math.PI/2,a.position.z=.1,n.add(a),n.set=t=>{t=Math.max(.001,Math.min(1,t)),Math.abs(t-(n._v??-1))<.004||(n._v=t,n.needle.rotation.z=Math.PI*.75-t*Math.PI*1.5,n.arc.geometry.dispose(),n.arc.geometry=new Eo(e*.8,.05,8,64,Math.PI*1.5*t))},n}function zv(e=J.amber){let t=new U,n=new G($(.7,.42,.04,.04),Q(14078924,.8));t.add(n);let r=new G(new K(.05,.3,.045),Z(e,1));r.position.x=-.28,t.add(r);for(let e=0;e<3;e++){let n=new G(new K(.4-e*.08,.035,.045),Q(8225420,.6));n.position.set(-.02-e*.04,.1-e*.09,0),t.add(n)}return t}var Bv=new H,Vv=new H(0,0,1),Hv=class extends j_{set(e,t,n=1){Bv.subVectors(t,e);let r=Bv.length()*n;this.mesh.position.copy(e),Bv.lengthSq()>1e-8&&this.mesh.quaternion.setFromUnitVectors(Vv,Bv.normalize()),this.mesh.scale.set(1,1,Math.max(1e-4,r)),this.mesh.visible=n>.001}},Uv=(e,t,n)=>new H(e,t,n),Wv=(e,t)=>e.scale.setScalar(Math.max(.001,t)),Gv=[{id:`b_lakeflow`,n:`Lakeflow`},{id:`b_gold`,n:`Gold tables`},{id:`b_meta`,n:`UC metadata`},{id:`b_metric`,n:`Metric view`},{id:`b_genie`,n:`Genie Agent`},{id:`b_wh`,n:`SQL warehouse`},{id:`b_rls`,n:`Row filters`},{id:`b_bench`,n:`Benchmarks`}];function Kv(e){let t=new U,n=Z(J.lava,1.2),r=v_(9080729,.4,.6),i=Q(9278107,.5);if(e===`b_lakeflow`)for(let e=0;e<3;e++){let r=new G($(.22,.12+e*.12,.3,.03),e===2?n:i);r.position.set(-.24+e*.24,.06+e*.06,0),t.add(r)}if(e===`b_gold`){let e=new G($(.26,.26,.26,.04),n);e.position.y=.3,t.add(e);for(let e=0;e<4;e++){let n=e*Math.PI/2+.6,r=new G($(.14,.14,.14,.03),i);r.position.set(Math.sin(n)*.3,.3,Math.cos(n)*.3),t.add(r)}}if(e===`b_meta`){for(let e=0;e<4;e++){let n=new G(new K(.08,.18+e*.08,.08),i);n.position.set(-.2+e*.13,.09+e*.04,0),t.add(n)}let e=new G($(.3,.16,.03,.03),n);e.position.set(.05,.62,0),t.add(e)}if(e===`b_metric`){let e=new G(new Yi(.28,.28,.5,3),Q(9999285,.35));e.position.y=.3,t.add(e);let r=new G(new Eo(.34,.02,6,48),n);r.rotation.x=Math.PI/2,r.position.y=.3,t.add(r)}if(e===`b_genie`){let e=Fv(.26);e.position.y=.36,e.ring.visible=!1,t.add(e)}if(e===`b_wh`){let e=Pv(3,.26);e.scale.setScalar(.9),t.add(e)}if(e===`b_rls`){for(let e=0;e<5;e++){let r=new G(new K(.5,.06,.1),e%2?Q(4869976):n);r.position.set(0,.1+e*.1,0),t.add(r)}let e=new G(new Eo(.3,.025,6,4),r);e.rotation.z=Math.PI/4,e.position.y=.3,t.add(e)}if(e===`b_bench`){let e=Rv(.3);e.position.y=.36,e.set(.85),t.add(e)}return t}var qv=class extends R_{constructor(){super({loop:10,radius:7,cam:{pos:[0,5,15.8],target:[0,1.9,0],pk:1.25}});let e=this.group;this.biz=new U,this.biz.position.set(-3.6,0,0),e.add(this.biz);let t=new U;t.position.set(-.9,0,.9),this.biz.add(t);let n=new G($(2,.08,.9,.03),Q(4866104,.55));n.position.y=.9,t.add(n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([e,n])=>{let r=new G(new K(.05,.9,.05),v_(2829876,.4,.6));r.position.set(e*.9,.45,n*.38),t.add(r)});let r=Ev(`g0scr`,200,120,(e,t,n)=>{e.fillStyle=`#1c1f25`,e.fillRect(0,0,t,n),e.fillStyle=`#d9653b`,e.font=`600 13px ${Cv}`,e.fillText(`Denials · FL ?`,12,24),e.fillStyle=`#4a4f58`;for(let t=0;t<4;t++)e.fillRect(12,40+t*16,120-t*18,8);e.fillStyle=`#7d828c`,e.font=`11px ${Cv}`,e.fillText(`no access to SQL`,12,110)});this.mon=Mv(.9,.55,r),this.mon.position.set(.1,1.35,-.15),t.add(this.mon),this.mgr=P_(J.cyan),this.mgr.position.set(-.9,0,1.95),this.mgr.rotation.y=Math.PI*.9,this.biz.add(this.mgr),this.trayQ=new G($(1.5,.1,1.1,.04),Q(3159100,.6)),this.trayQ.position.set(1.4,.05,-.5),this.biz.add(this.trayQ),this.trayQ.add(y_(this.trayQ.geometry,7174797,1,.4)),this.tix=Array.from({length:12},(e,t)=>{let n=zv(t%3?J.amber:J.lava);return n.rotation.x=-Math.PI/2,this.biz.add(n),n.userData.j=[Math.sin(t*4.1)*.25,Math.cos(t*2.3)*.2,Math.sin(t*1.3)*.4],n}),this.qLbl=this.addLabel(`BI ticket queue`,`ghost`,[1.4,-.3,.3],this.biz),this.tixHit=this.hitBox(1.6,1.4,1.2,[-2.2,.7,-.5]),this.cal=new U,this.cal.position.set(-1,3.5,-.4),this.biz.add(this.cal);let i=new G($(1,1,.12,.06),Q(14868182,.6));this.cal.add(i);let a=new G($(1,.24,.14,.05),Z(J.lava,1));a.position.y=.4,this.cal.add(a),this.days=[1,2,3,4,5].map(e=>Ev(`g0day`+e,120,90,(t,n,r)=>{t.fillStyle=`#e2ded6`,t.fillRect(0,0,n,r),t.fillStyle=`#2a2c31`,t.font=`700 46px ${Cv}`,t.textAlign=`center`,t.fillText(String(e),n/2,56),t.font=`600 13px ${Cv}`,t.fillStyle=`#8b8d92`,t.fillText(`DAY`,n/2,80)})),this.page=new G(new wo(.86,.66),new Ro({map:this.days[0],roughness:.8})),this.page.position.set(0,-.08,.065),this.cal.add(this.page),this.flip=new G(new wo(.86,.66),new Ro({map:this.days[0],roughness:.8,side:2,transparent:!0})),this.flip.geometry.translate(0,.33,0),this.flip.position.set(0,-.41,.07),this.cal.add(this.flip),this.calLbl=this.addLabel(`3–5 days per new question`,`ghost nomob`,[0,.85,0],this.cal),this.bubble=this.addLabel(`“Why did denied claims jump in Florida last quarter?”`,`bubble cyan`,[-.9,2.6,1.95],this.biz),this.addLabel(`BUSINESS NEED`,`section`,[0,5,0],this.biz),this.bridgeCurve=new pa([Uv(-1.4,1.6,.4),Uv(0,2.3,.6),Uv(1.4,1.6,.4)]),this.bridge=new G(new Do(this.bridgeCurve,60,.025,8),Q(9080729,.5)),e.add(this.bridge),this.bridge.geometry.setDrawRange(0,0),this.chev=new G(new Xi(.1,.26,16),Z(J.lava,1.5)),e.add(this.chev),this.dev=new U,this.dev.position.set(3.7,0,0),this.dev.scale.setScalar(1.18),e.add(this.dev),this.tray=new G($(5.4,.12,3.9,.06),Q(2435635,.7)),this.tray.position.y=.06,this.dev.add(this.tray);let o=new $s(5.2,26,6122109,3818064);o.position.y=.125,o.material.transparent=!0,o.material.opacity=.35,this.dev.add(o),this.tray.add(y_(this.tray.geometry,7174797,1,.4)),this.blocks=Gv.map((e,t)=>{let n=t<4?0:1,r=n?3-(t-4):t,i=new U;i.position.set(-1.95+r*1.3,.12,n?.95:-.95),this.dev.add(i);let a=new G($(.95,.14,.95,.04),Q(3817287,.55));a.position.y=.07,i.add(a);let o=Kv(e.id);return o.position.y=.14,i.add(o),i.userData.ic=o,i.userData.lbl=this.addLabel(`<b>`+(t+1)+`</b> `+e.n,`ghost tiny`,[0,-.18,.62],i),this.pick(i,e.id,t===0||t===4?[.38,.95,0]:null),i}),this.flow=new Ai(new mr().setFromPoints(this.blocks.map(e=>e.position.clone().add(Uv(0,.12,0)))),new Si({color:J.lava,transparent:!0,opacity:.7})),this.flow.position.y=.04,this.dev.add(this.flow),this.addLabel(`DEVELOPER SOLUTION`,`section`,[0,4.25,0],this.dev),this.solLbl=this.addLabel(`Genie Agent on curated, governed data · answers in seconds`,`lava nomob`,[0,2.3,-1.6],this.dev),this.pick(this.mgr,`manager`,[0,1.95,0]),this.pick(this.tixHit,`ticketQueue`,null),this.pick(this.trayQ,`ticketQueue`,[.75,.5,0]),this.pick(this.cal,`waitTime`,[.6,.6,.1]),this.pick(this.hitBox(3.2,.6,.3,[-4.5,2.6,1.95]),`question`,null),this.pick(this.tray,`blueprint2`,[2.6,.3,1.6]),this._p=Uv(0,0,0)}update(e,t){let n=1-Y(e,9.6,10);this.tix.forEach((t,r)=>{let i=.3+r*.22,a=X.io(Y(e,i,i+.6)),[o,s,c]=t.userData.j,l=Uv(-.5,1.4,.8),u=Uv(1.4+o,.13+Math.floor(r/2)*.045+r%2*.02,-.5+s);t.position.lerpVectors(l,u,a),t.position.y+=Math.sin(a*Math.PI)*.9,t.rotation.z=c*a,Wv(t,+(a>0)*n)}),this.show(this.qLbl,Y(e,1.2,1.6)*n);let r=X.back(Y(e,.6,1.1))*n;Wv(this.cal,r);let i=Y(e,1.4,6.4)*4,a=Math.min(3,Math.floor(i)),o=i-a;this.page.material.map=this.days[Math.min(4,a+ +(o>.5||i>=4))],this.flip.material.map=this.days[a],this.flip.rotation.x=-X.io(o)*Math.PI,this.flip.visible=i<4&&i>0,this.show(this.calLbl,Y(e,1.2,1.6)*n),this.show(this.bubble,Y(e,.2,.6)*n),this.mgr.rotation.y=Math.PI*.9+Math.sin(t*.7)*.12;let s=X.io(Y(e,2.6,3.4));this.bridge.geometry.setDrawRange(0,Math.floor(s*n*this.bridge.geometry.index.count/3)*3),this.chev.visible=s>.02&&n>.05,this.bridgeCurve.getPoint(Math.min(.999,s),this._p),this.chev.position.copy(this._p),this.chev.quaternion.setFromUnitVectors(Uv(0,1,0),this.bridgeCurve.getTangent(Math.min(.999,s))),this.blocks.forEach((r,i)=>{let a=X.back(Y(e,3.4+i*.32,3.9+i*.32))*n;Wv(r.userData.ic,a),r.userData.ic.position.y=.14+Math.sin(t*1.4+i)*.03*a,r.userData.ic.rotation.y=Math.sin(t*.5+i)*.35,this.show(r.userData.lbl,Y(e,3.6+i*.32,3.9+i*.32)*n)}),this.flow.geometry.setDrawRange(0,Math.max(0,Math.ceil(Y(e,3.6,6.2)*8*n))),this.show(this.solLbl,Y(e,6.6,7)*n)}},Jv=[[`SELECT`,Ov],["  `Member state`,",kv],["  MEASURE(`Denial rate`)",kv],[`FROM claims_metrics`,kv],[`WHERE quarter IN (Q2, Q3)`,jv],[`GROUP BY ALL`,Ov]],Yv=class extends R_{constructor(){super({loop:9,cam:{pos:[0,4.6,15],target:[0,2.4,0]}});let e=this.group;this.mgr=P_(J.cyan),this.mgr.position.set(-4.6,0,1.2),this.mgr.rotation.y=.5,e.add(this.mgr);let t=Ev(`g1chat`,300,120,(e,t,n)=>{e.fillStyle=`#23262d`,e.fillRect(0,0,t,n),e.fillStyle=`#8aa4ba`,e.beginPath(),e.roundRect(14,14,272,54,10),e.fill(),e.fillStyle=`#1c1f25`,e.font=`600 14px ${Cv}`,e.fillText(`Denial rate by state,`,26,36),e.fillText(`last quarter vs prior?`,26,56),e.fillStyle=`#7d828c`,e.font=`11px ${Cv}`,e.fillText(`Ask Genie…`,18,100),e.fillStyle=`#d9653b`,e.fillRect(262,88,22,18)});this.chat=Mv(2.3,.92,t,{edge:J.cyan}),this.chat.position.set(-3.6,3.3,.6),this.chat.rotation.y=.25,e.add(this.chat),this.core=Fv(.55),this.core.position.set(-1,2.6,0),e.add(this.core),this.coreLbl=this.addLabel(`Genie`,`lava`,[0,-1,0],this.core),this.sql=Mv(2.2,1.25,Dv(`g1sql`,Jv,{w:300,h:170,title:`Generated SQL`}),{edge:J.lava,edgeO:.6}),this.sql.position.set(1.4,4.3,.2),this.sql.rotation.y=-.1,e.add(this.sql),this.chart=Nv(6,{w:3,d:.8,maxH:2.2,colors:[J.lava,9080729,9080729,9086138,9086138,9086138]}),this.chart.position.set(3.2,0,.6),this.chart.rotation.y=-.35,e.add(this.chart),this.vals=[.98,.72,.71,.69,.66,.64],[`FL`,`GA`,`TX`,`AZ`,`NC`,`OH`].forEach((e,t)=>this.addLabel(e,`ghost tiny`,[this.chart.bars[t].position.x,-.15,.6],this.chart)),this.sumLbl=this.addLabel(`<b>Florida</b> rose 2.6 pts to 9.8%, the largest increase.`,`bubble`,[3.2,3.3,.6]),this.cap=this.addLabel(`Question → <b>SQL</b> → table + chart + summary`,`big`,[0,6.2,0]),this.curve=new pa([Uv(-3.6,3,.6),Uv(-1,2.6,0),Uv(.6,3.8,.2),Uv(1.6,4,.3),Uv(3,2,.6)]),this.stream=new M_(this.curve,50,J.lava,.2,.3),e.add(this.stream.points),this.pick(this.mgr,`manager`,[0,1.95,0]),this.pick(this.chat,`question`,[1.15,.46,.05]),this.pick(this.sql,`sqlCard`,[1.1,.62,.05]),this.pick(this.chart,`chart`,[1.6,2.4,0]),this.pick(this.hitBox(3,.8,.3,[3.2,3.3,.6]),`summary`,null),this.pick(this.core,`llm2`,null)}update(e,t){let n=1-Y(e,8.6,9);Wv(this.chat,X.back(Y(e,.2,.7))*n),this.chat.position.y=3.3+Math.sin(t)*.05;let r=p_(e,1.4,3.4);Wv(this.core,X.back(Y(e,.8,1.3))*n),this.core.rotation.y=t*(.4+r*3),this.core.heart.rotation.x=t*1.2,this.core.ring.scale.setScalar(1+r*.2),this.show(this.coreLbl,Y(e,1,1.4)*n),Wv(this.sql,X.back(Y(e,2.6,3.2))*n),this.sql.position.y=4.3+Math.sin(t*.8)*.06;let i=X.out(Y(e,3.6,5.2));Wv(this.chart,Y(e,3.3,3.6)*n),this.chart.set(this.vals.map((e,t)=>e*X.out(Y(i*1.4-t*.07,0,1)))),this.show(this.sumLbl,Y(e,5.4,5.8)*n),this.show(this.cap,Y(e,.3,.8)*n),this.stream.update(t,p_(e,.8,5.6)*n)}},Xv=class extends R_{constructor(){super({loop:10,cam:{pos:[0,5.2,15],target:[0,2.2,0]}});let e=this.group,t=(t,n,r,i)=>{let a=new U;a.position.set(t,0,0),e.add(a);let o=new G(new Yi(.9,1,n,6),Q(3093307,.6));o.position.y=n/2,a.add(o);let s=new G(new Yi(1.25,1.25,.1,6),Q(r,.5));return s.position.y=n+.05,a.add(s),s.add(y_(s.geometry,r,1,.8)),a.userData.top=n+.1,a.userData.lbl=this.addLabel(i,`ghost`,[0,-.3,1.3],a),a};this.bz=t(-4.2,.5,9202250,`Bronze · raw 837 feeds`),this.sv=t(-1.2,1.1,9080729,`Silver · cleaned`),this.gd=t(2.9,1.7,J.amber,`Gold · star schema`),this.mess=Array.from({length:16},(e,t)=>{let n=new G(new K(.22,.22,.22),Q(t%5?8021072:10111546,.7));return n.userData.r=[Math.sin(t*3.1)*.8,Math.cos(t*2.7)*.7,t*.7],this.bz.add(n),n}),this.rows=Array.from({length:12},(e,t)=>{let n=new G($(.5,.08,.22,.02),Q(11449018,.5));return n.position.set(-.3+t%2*.6,this.sv.userData.top+.04+Math.floor(t/2)*.1,0),this.sv.add(n),n}),this.star=new U,this.star.position.y=this.gd.userData.top+.75,this.gd.add(this.star),this.fact=new G($(.75,.75,.75,.08),Z(J.lava,1.3)),this.star.add(this.fact),this.factLbl=this.addLabel(`fact_claims`,`lava`,[0,.72,0],this.star),this.dims=[`dim_member`,`dim_provider`,`dim_plan`,`dim_date`].map((e,t)=>{let n=t/4*Math.PI*2+.4,r=new G($(.42,.42,.42,.06),Q([J.cyan,J.violet,J.mint,J.amber][t],.4));r.userData.a=n,this.star.add(r);let i=new Hv(13225172,.018);return this.star.add(i.mesh),r.userData.beam=i,r.userData.lbl=this.addLabel(e,`ghost tiny`,[0,-.4,0],r),r});let n=new pa([Uv(-4.2,1,0),Uv(-2.7,2.2,.2),Uv(-1.2,1.5,0)]),r=new pa([Uv(-1.2,1.8,0),Uv(.9,3,.2),Uv(2.9,2.6,0)]);[n,r].forEach(t=>{let n=new G(new Do(t,48,.02,6),Q(7174797,.5));e.add(n)}),this.s1=new M_(n,40,9202250,.2,.35),e.add(this.s1.points),this.s2=new M_(r,40,J.amber,.2,.35),e.add(this.s2.points),this.rej=Array.from({length:4},()=>{let t=new G(new K(.14,.14,.14),Z(11753802,1));return e.add(t),t}),this.rejLbl=this.addLabel(`EXPECT … DROP ROW`,`tiny`,[-2.7,1,.9]),this.pipeLbl=this.addLabel(`Lakeflow Spark Declarative Pipelines`,`big`,[0,6,0]),this.pick(this.bz,`bronze`,[0,1.4,0]),this.pick(this.sv,`silver`,[0,2,0]),this.pick(this.fact,`factClaims`,[.45,.45,0]),this.dims.forEach((e,t)=>this.pick(e,`dimTables`,t===1?[.3,.3,0]:null)),this.pick(this.hitBox(5,2.4,.6,[-1,2.2,.2]),`pipeline`,null),this.pick(this.hitBox(4.4,.5,.3,[0,6,0]),`pipeline`,null)}update(e,t){let n=1-Y(e,9.6,10);this.mess.forEach((r,i)=>{let[a,o,s]=r.userData.r;r.position.set(a*.8,this.bz.userData.top+.12+i%3*.2+Math.sin(t*2+i)*.03,o*.8),r.rotation.set(s+t*.2,s,s*.5),Wv(r,X.back(Y(e,.1+i*.03,.5+i*.03))*n)}),this.rows.forEach((t,r)=>Wv(t,X.back(Y(e,1.6+r*.12,2+r*.12))*n)),this.s1.update(t,p_(e,1,5)*n),this.s2.update(t,p_(e,3.2,8.4)*n),this.rej.forEach((t,r)=>{let i=Y((e-1.4-r*.7)%2.8,0,1.4);t.position.set(-2.7+r*.12,2.1-X.in(i)*2,.3+i*.5),Wv(t,+(i>0&&i<1)*Y(e,1.3,1.5)*(1-Y(e,5,5.4))*n)}),this.show(this.rejLbl,p_(e,1.4,5.4)*n);let r=X.back(Y(e,4,4.8))*n;Wv(this.fact,r),this.show(this.factLbl,Y(e,4.4,4.8)*n),this.star.rotation.y=t*.25,this.dims.forEach((r,i)=>{let a=X.out(Y(e,4.8+i*.25,5.5+i*.25))*n,o=r.userData.a,s=1.5*a;r.position.set(Math.sin(o)*s,Math.sin(t+i)*.06+(i%2?.15:-.05),Math.cos(o)*s),Wv(r,a),r.userData.beam.set(Uv(0,0,0),r.position,a),this.show(r.userData.lbl,Y(e,5.4+i*.25,5.8+i*.25)*n)});for(let t of[this.bz,this.sv,this.gd])this.show(t.userData.lbl,Y(e,.2,.6)*n);this.show(this.pipeLbl,Y(e,.4,.9)*n)}},Zv=[[`claim_id`,`PK · one row per claim`],[`member_id`,`FK → dim_member`],[`provider_id`,`FK → dim_provider`],[`member_state`,`2-letter state`],[`service_date`,`date of service`],[`claim_status`,`PAID · DENIED · PENDED`],[`paid_amount`,`USD paid`],[`denial_reason`,`CARC reason`]],Qv=class extends R_{constructor(){super({loop:10,cam:{pos:[0,5.4,14.6],target:[0,2.1,0]}});let e=this.group;this.slab=new G($(6.6,.22,1.6,.06),Q(3159100,.55)),this.slab.position.set(-.6,.11,.4),e.add(this.slab),this.slab.add(y_(this.slab.geometry,J.amber,1,.5)),this.slabLbl=this.addLabel(`main.claims.fact_claims`,`ghost`,[-.6,-.25,1.4]),this.pillars=Zv.map(([t,n],r)=>{let i=new U;i.position.set(-3.5+r*.83,.22,.4),e.add(i);let a=.9+r*37%5*.25,o=new G($(.34,a,.34,.05),Q(r===5?10127978:8225420,.45));o.geometry.translate(0,a/2,0),i.add(o),i.userData.p=o,i.userData.h=a;let s=new G($(.62,.32,.03,.04),Q(14078924,.8));s.position.set(0,a+.38,.05),i.add(s);let c=new G(new K(.03,.2,.03),Q(9080729));c.position.set(0,a+.12,0),i.add(c);let l=new G(new K(.04,.22,.035),Z(J.lava,1));return l.position.set(-.27,0,.005),s.add(l),i.userData.tag=s,i.userData.pin=c,i.userData.nl=this.addLabel(t,`ghost tiny`,[0,r%2?-.42:-.12,.45],i),i.userData.cl=this.addLabel(n,`tiny`,[0,a+.78,0],i),i}),this.orb=new U,e.add(this.orb),this.orb.add(new G(new Co(.2,0),Z(J.violet,2.5))),this.orbRing=new G(new Eo(.34,.015,6,48),Z(J.violet,1.5)),this.orb.add(this.orbRing),this.orbLbl=this.addLabel(`AI generate`,`violet`,[0,.55,0],this.orb),this.dimsG=new U,this.dimsG.position.set(0,0,-2.4),e.add(this.dimsG),this.dimM=new G($(1.2,.8,.8,.06),Q(J.cyan,.45)),this.dimM.position.set(-3,1.6,0),this.dimsG.add(this.dimM),this.dimP=new G($(1.2,.8,.8,.06),Q(J.violet,.45)),this.dimP.position.set(-.5,2.6,0),this.dimsG.add(this.dimP),this.addLabel(`dim_member`,`ghost tiny`,[-3,2.2,0],this.dimsG),this.addLabel(`dim_provider`,`ghost tiny`,[-.5,3.2,0],this.dimsG),this.keyA=Iv(),this.keyA.position.set(-3.25,1.6,.45),this.dimsG.add(this.keyA),this.keyB=Iv(),this.keyB.position.set(-.75,2.6,.45),this.dimsG.add(this.keyB),this.keyF=Iv(J.lava),this.keyF.position.set(-3.6,.6,1.25),this.keyF.scale.setScalar(.8),e.add(this.keyF);let t=(t,n)=>{let r=t.clone().lerp(n,.5);r.y+=1.4;let i=new G(new Do(new ka(t,r,n),48,.03,8),Z(J.lava,1.2));return i.geometry.setDrawRange(0,0),e.add(i),i};this.fk1=t(Uv(-2.67,1.4,.4),Uv(-3,1.6,-2)),this.fk2=t(Uv(-1.84,1.6,.4),Uv(-.5,2.6,-2)),this.fkLbl=this.addLabel(`FOREIGN KEY … REFERENCES`,`lava nomob`,[-1.2,3.9,-.9]),this.cap=this.addLabel(`Metadata Genie reads: <b>comments</b> · <b>keys</b> · <b>synonyms</b>`,`big`,[0,6,0]),this.syn=Mv(2,.9,Ev(`g3syn`,240,108,(e,t,n)=>{e.fillStyle=`#23262d`,e.fillRect(0,0,t,n),e.fillStyle=`#9893b5`,e.font=`600 12px ${Cv}`,e.fillText(`Synonyms (agent-level)`,12,22),e.fillStyle=`#c9ccd4`,e.font=`12px ${Cv}`,e.fillText(`“denials” → claim_status = DENIED`,12,50),e.fillText(`“Florida” → member_state = FL`,12,74),e.fillStyle=`#7d828c`,e.fillText(`prompt matching on`,12,96)}),{edge:J.violet}),this.syn.position.set(4.6,3,.2),this.syn.rotation.y=-.35,e.add(this.syn),this.pillars.forEach((e,t)=>this.pick(e,t===0?`primaryKey`:t<3?`foreignKey`:`columns`,t===4?[.25,e.userData.h*.5,.2]:null)),this.pillars.forEach((e,t)=>{t===5?this.pick(e.userData.tag,`comment`,[.35,.18,.05]):this.pick(e.userData.tag,`comment`,null)}),this.pick(this.orb,`aiGenerate`,[.3,.3,0]),this.pick(this.keyA,`primaryKey`,[.2,.2,0]),this.pick(this.keyB,`primaryKey`,null),this.pick(this.fk2,`foreignKey`,null),this.pick(this.fk1,`foreignKey`,null),this.pick(this.dimM,`dimTables`,null),this.pick(this.dimP,`dimTables`,null),this.pick(this.syn,`comment`,null),this.pick(this.slab,`factClaims`,null)}update(e,t){let n=1-Y(e,9.6,10);this.show(this.slabLbl,Y(e,.1,.5)*n);let r=f_(-4.2,3.4,X.io(Y(e,1,5)));this.orb.position.set(r,3.4+Math.sin(t*2)*.1,.9),Wv(this.orb,p_(e,.8,5.6)>.02?Math.min(1,p_(e,.8,5.6)*3)*n:.001),this.orb.rotation.y=t*2,this.orbRing.rotation.x=t,this.show(this.orbLbl,p_(e,.9,5.4)*n),this.pillars.forEach((t,i)=>{let a=X.out(Y(e,.1+i*.08,.7+i*.08))*n;t.userData.p.scale.y=Math.max(.001,a);let o=-3.5+i*.83,s=X.back(Y(r-o,0,.5))*n*+(e>1);Wv(t.userData.tag,s),t.userData.tag.position.y=t.userData.h*a+.38,t.userData.pin.scale.y=Math.max(.001,s),t.userData.pin.position.y=t.userData.h*a+.12,t.userData.tag.rotation.y=(1-s)*Math.PI,this.show(t.userData.nl,Y(e,.5,.9)*n),this.show(t.userData.cl,Y(e,5.2+i*.05,5.6+i*.05)*n*+(i%2==0||i===5))}),Wv(this.dimsG,X.out(Y(e,5,5.6))*n);for(let e of[this.keyA,this.keyB])e.rotation.y=Math.sin(t*1.5)*.6;Wv(this.keyF,X.back(Y(e,5.4,5.8))*n),this.keyF.rotation.z=Math.sin(t)*.2;let i=X.io(Y(e,5.8,6.8)),a=X.io(Y(e,6.2,7.2));this.fk1.geometry.setDrawRange(0,Math.floor(i*n*this.fk1.geometry.index.count/3)*3),this.fk2.geometry.setDrawRange(0,Math.floor(a*n*this.fk2.geometry.index.count/3)*3),this.show(this.fkLbl,Y(e,6.8,7.2)*n),Wv(this.syn,X.back(Y(e,7.2,7.8))*n),this.syn.position.y=3+Math.sin(t*.9)*.06,this.show(this.cap,Y(e,.3,.8)*n)}},$v=[[`version: 1.1`,jv],[`source: fact_claims`,kv],[`dimensions:`,Ov],[`  - Member state`,kv],[`  - Service quarter`,kv],[`measures:`,Ov],[`  - Denial rate`,Av],[`    COUNT(1) FILTER(DENIED)/COUNT(1)`,jv],[`  - Total paid: SUM(paid_amount)`,Av]],ey=class extends R_{constructor(){super({loop:10,cam:{pos:[0,4.8,15],target:[0,2.6,0]}});let e=this.group;this.prism=new U,this.prism.position.set(-.4,2.7,0),e.add(this.prism);let t=new Yi(1.1,1.1,2.4,3,1);this.prismM=new G(t,__(9999285,.32)),this.prism.add(this.prismM),this.prism.add(y_(t,15328992,1,.6)),this.inner=new G(new Yi(.35,.35,1.6,3),Z(J.violet,2)),this.prism.add(this.inner);let n=new G(new Yi(.9,1.1,.4,6),Q(3093307,.6));n.position.set(-.4,.2,0),e.add(n),this.prLbl=this.addLabel(`claims_metrics · metric view`,`violet`,[0,1.65,0],this.prism),this.rings=[`Member state`,`Plan type`,`Service quarter`].map((t,n)=>{let r=new G(new Eo(1.55+n*.28,.022,8,120),Q([J.cyan,J.mint,J.amber][n],.4));return r.position.copy(this.prism.position),e.add(r),r.userData.lbl=this.addLabel(t,`ghost tiny`,[0,0,0],r),r.userData.lbl.position.set(1.55+n*.28,0,0),r}),this.rowsIn=Array.from({length:14},(t,n)=>{let r=new G($(.5,.08,.24,.02),Q(n%4?11449018:11753802,.5));return e.add(r),r}),this.rowLbl=this.addLabel(`fact_claims rows`,`ghost`,[-5,1.6,.4]),this.dials=[[`Denial rate`,`9.8%`,.62],[`Total paid`,`$412M`,.8],[`Claims`,`412,880`,.7]].map(([t,n,r],i)=>{let a=Rv(.55,[J.lava,J.amber,J.cyan][i]);return a.position.set(3.9,4.4-i*1.4,.3),a.rotation.y=-.3,e.add(a),a.userData.x=r,a.userData.lbl=this.addLabel(`${t} <b>${n}</b>`,`ghost`,[.95,0,0],a),a.userData.lbl.center.set(0,.5),a}),this.beams=this.dials.map(()=>{let t=new Hv(J.violet,.02);return e.add(t.mesh),t}),this.yaml=Mv(2.5,1.95,Dv(`g4yaml`,$v,{w:300,h:234,title:`WITH METRICS LANGUAGE YAML`}),{edge:J.violet}),this.yaml.position.set(-4,4.6,-.6),this.yaml.rotation.y=.3,e.add(this.yaml),this.mLbl=this.addLabel("MEASURE(`Denial rate`) · one definition everywhere",`lava nomob`,[.2,.3,2.4]),this.pick(this.prismM,`metricView`,[.9,1.1,0]),this.pick(this.yaml,`yamlSpec`,[1.2,.95,.05]),this.dials.forEach((e,t)=>this.pick(e,`measure`,t===0?[.5,.5,.1]:null)),this.rings.forEach((e,t)=>this.pick(e,`dimension`,null)),this.pick(this.hitBox(4.2,.5,4.2,[-.4,2.7,0]),`dimension`,null),this.rowsIn.forEach((e,t)=>this.pick(e,`rawRows`,null)),this.pick(this.hitBox(2.4,1.2,.8,[-4.4,2.2,.3]),`rawRows`,null)}update(e,t){let n=1-Y(e,9.6,10);Wv(this.prism,X.back(Y(e,.1,.7))*n),this.prism.rotation.y=t*.35,this.inner.rotation.y=-t*1.4,this.show(this.prLbl,Y(e,.5,.9)*n),this.rings.forEach((r,i)=>{Wv(r,X.out(Y(e,.8+i*.25,1.5+i*.25))*n),r.rotation.set(Math.PI/2+Math.sin(t*.5+i*2)*.35,t*(.2+i*.1),i*.7),this.show(r.userData.lbl,Y(e,1.4+i*.25,1.8+i*.25)*n)});let r=+(p_(e,1.2,8.6)>.05);this.rowsIn.forEach((e,i)=>{let a=(t*.35+i/14)%1;e.position.set(f_(-6,-1,a),1.4+Math.sin(i*1.7)*.6+a*1,.3+Math.cos(i)*.3),e.rotation.y=a*.6,Wv(e,r*(1-Y(a,.8,1))*Y(a,0,.1)*n)}),this.show(this.rowLbl,Y(e,1.2,1.6)*n),this.dials.forEach((t,r)=>{let i=X.out(Y(e,3+r*.4,4.6+r*.4))*n;Wv(t,X.back(Y(e,2.8+r*.4,3.2+r*.4))*n),t.set(t.userData.x*i),this.show(t.userData.lbl,Y(e,3.6+r*.4,4+r*.4)*n),this.beams[r].set(this.prism.position,t.position,X.io(Y(e,2.6+r*.4,3.1+r*.4))*n)}),Wv(this.yaml,X.back(Y(e,.4,1))*n),this.yaml.position.y=4.6+Math.sin(t*.8)*.05,this.show(this.mLbl,Y(e,5.4,5.8)*n)}},ty=(e,t,n)=>new H(e,t,n),ny=(e,t)=>e.scale.setScalar(Math.max(.001,t)),ry=(e,t,n,r)=>Ev(e,180,90,(e,i,a)=>{e.fillStyle=`#23262d`,e.fillRect(0,0,i,a),e.fillStyle=r,e.fillRect(0,0,5,a),e.fillStyle=`#e9e6e0`,e.font=`600 15px ${Cv}`,e.fillText(t,16,36),e.fillStyle=`#8b8d92`,e.font=`12px ${Cv}`,e.fillText(n,16,62)}),iy=[[`fact_claims`,`table · 38M rows`,`#d9653b`],[`dim_member`,`table`,`#8aa4ba`],[`dim_provider`,`table`,`#9893b5`],[`dim_plan`,`table`,`#8eae9d`],[`claims_metrics`,`metric view`,`#c3a273`]],ay=[[`-- Top denial reasons in :state`,jv],[`SELECT denial_reason, COUNT(*)`,Ov],[`WHERE member_state = :state`,kv]],oy=class extends R_{constructor(){super({loop:10,cam:{pos:[0,4.9,15],target:[0,2.6,0]}});let e=this.group;this.core=Fv(1),this.core.position.set(0,3,0),e.add(this.core);let t=new G(new Yi(.7,.9,.5,8),Q(3093307,.6));t.position.y=.25,e.add(t);let n=new G(new Yi(.06,.06,1.6,12),v_(7172736,.4,.6));n.position.y=1.2,e.add(n),this.coreLbl=this.addLabel(`Claims Ops · Genie Agent`,`lava`,[0,1.55,0],this.core),this.tiles=iy.map(([t,n,r],i)=>{let a=Mv(1.15,.58,ry(`g5t`+i,t,n,r),{edge:new W(r).getHex(),edgeO:.6,d:.05});return a.userData.a=-Math.PI*.62+Math.PI*1.24/4*i,a.userData.start=ty(-6+i*.4,.6+i*.5,2.4),e.add(a),a}),this.dsLbl=this.addLabel(`Data · 4 tables + 1 metric view (≤ 5 recommended)`,`ghost nomob`,[0,.95,2.4]),this.wh=Pv(4,.7),this.wh.position.set(4.6,0,-.6),e.add(this.wh),this.whLbl=this.addLabel(`Serverless SQL warehouse`,`ghost`,[0,1.75,0],this.wh),this.link=new Hv(J.lava,.03),e.add(this.link.mesh),this.orbit=new U,this.orbit.position.copy(this.core.position),e.add(this.orbit),this.cards=[0,1,2,3].map(e=>{let t=Mv(1.2,.5,Dv(`g5ex`+e%2,e%2?[[`-- Paid PMPM by plan`,jv],[`SELECT plan_type,`,Ov],["  MEASURE(`Total paid`)",kv]]:ay,{w:230,h:90}),{edge:J.amber,edgeO:.5,d:.04});return t.userData.a=e*Math.PI/2,this.orbit.add(t),t}),this.exLbl=this.addLabel(`Example SQL · <b>:parameters</b>`,`ghost nomob`,[-3.6,5.4,0]),this.shield=Lv(J.mint,1.1),this.shield.position.set(-3.6,3,.8),this.shield.rotation.y=.35,e.add(this.shield),this.shLbl=this.addLabel(`Trusted · denial_rate_by_state()`,`mint`,[0,-.85,0],this.shield),this.ins=Mv(2.1,1.2,Ev(`g5ins`,250,144,(e,t,n)=>{e.fillStyle=`#23262d`,e.fillRect(0,0,t,n),e.fillStyle=`#c3a273`,e.font=`600 12px ${Cv}`,e.fillText(`Instructions (last resort)`,12,22),e.fillStyle=`#c9ccd4`,e.font=`11.5px ${Cv}`,[`“Last quarter” = last complete`,`calendar quarter (service_date).`,`No time range? Ask which quarter.`,`Rates as % with one decimal.`].forEach((t,n)=>e.fillText(t,12,48+n*22))}),{edge:J.amber}),this.ins.position.set(3.2,4.6,.6),this.ins.rotation.y=-.3,e.add(this.ins),this.pick(this.core.shell,`agentCore`,[.8,.8,0]),this.tiles.forEach((e,t)=>this.pick(e,`dataSources`,t===0?[.58,.3,.05]:null)),this.pick(this.wh,`warehouse`,[.7,1.4,0]),this.cards.forEach((e,t)=>this.pick(e,`examples`,t===0?[.6,.26,.05]:null)),this.pick(this.shield,`trusted`,[.4,.45,.1]),this.pick(this.ins,`instructions`,[1.05,.6,.05])}update(e,t){let n=1-Y(e,9.6,10);ny(this.core,X.back(Y(e,.1,.7))*n);let r=Y(e,1,8);this.core.rotation.y=t*.3,this.core.heart.rotation.y=-t*1.5,this.core.heart.scale.setScalar(.6+r*.6+Math.sin(t*3)*.04),this.core.ring.rotation.z=t*.4,this.show(this.coreLbl,Y(e,.5,.9)*n),this.tiles.forEach((t,r)=>{let i=X.io(Y(e,.8+r*.3,1.8+r*.3)),a=t.userData.a,o=ty(Math.sin(a)*2.3,1.2+Math.abs(Math.cos(a))*.15,Math.cos(a)*1.4+.6);t.position.lerpVectors(t.userData.start,o,i),t.position.y+=Math.sin(i*Math.PI)*1.2,t.rotation.set(-.35*i,a*.6*i,0),ny(t,Y(e,.7+r*.3,.9+r*.3)*n)}),this.show(this.dsLbl,Y(e,2.6,3)*n),ny(this.wh,X.back(Y(e,2.4,3))*n),this.wh.disks.forEach((e,n)=>e.rotation.y=t*(.3+n*.15)*(n%2?-1:1)),this.link.set(ty(4.6,1.2,-.6),this.core.position,X.io(Y(e,3,3.6))*n),this.show(this.whLbl,Y(e,2.8,3.2)*n),this.orbit.rotation.y=t*.45,this.cards.forEach((r,i)=>{let a=X.back(Y(e,3.8+i*.25,4.3+i*.25))*n,o=r.userData.a;r.position.set(Math.sin(o)*2.1,1+Math.sin(t+i)*.1,Math.cos(o)*2.1),r.rotation.y=o,ny(r,a)}),this.show(this.exLbl,Y(e,4.2,4.6)*n),ny(this.shield,X.back(Y(e,5.4,6))*n),this.shield.rotation.y=.35+Math.sin(t*.8)*.25,this.show(this.shLbl,Y(e,5.8,6.2)*n),ny(this.ins,X.back(Y(e,6.6,7.2))*n),this.ins.position.y=4.6+Math.sin(t*.9)*.05}},sy=[["SELECT `Member state`,",Ov],["  `Service quarter`,",kv],["  MEASURE(`Denial rate`)",kv],[`FROM claims_metrics`,kv],[`WHERE quarter >= Q2 2026`,jv],[`GROUP BY ALL`,Ov]],cy=class extends R_{constructor(){super({loop:10,radius:6.6,cam:{pos:[0,5.2,15.6],target:[0,2.7,0],pk:1.1}});let e=this.group,t=[-5,-2.8,-.5,1.8,4.3];this.q=Mv(1.9,.8,Ev(`g6q`,230,96,(e,t,n)=>{e.fillStyle=`#8aa4ba`,e.beginPath(),e.roundRect(0,0,t,n,14),e.fill(),e.fillStyle=`#1c1f25`,e.font=`600 14px ${Cv}`,e.fillText(`Denial rate by state,`,14,38),e.fillText(`last quarter vs prior?`,14,62)}),{edge:J.cyan}),this.q.position.set(t[0],3.6,.6),this.q.rotation.y=.3,e.add(this.q),this.ctx=new U,this.ctx.position.set(t[1],3.2,0),this.ctx.rotation.y=.2,e.add(this.ctx),this.ctxT=Array.from({length:9},(e,t)=>{let n=[1,4,6].includes(t),r=new G($(.5,.34,.06,.04),n?Z(J.amber,1):Q(4869976,.6));return r.position.set((t%3-1)*.6,(1-Math.floor(t/3))*.44,0),r.userData.sel=n,this.ctx.add(r),r}),this.ctxLbl=this.addLabel(`select context`,`ghost`,[0,-.95,0],this.ctx),this.llm=new U,this.llm.position.set(t[2],3.4,0),e.add(this.llm);let n=new G(new So(.62,1),Q(9999285,.38));this.llm.add(n),this.llm.add(y_(n.geometry,15328992,1,.35)),this.llmM=n,this.llmLbl=this.addLabel(`LLM writes SQL`,`violet`,[0,-1,0],this.llm),this.sql=Mv(2.2,1.3,Dv(`g6sql`,sy,{w:300,h:176,title:`read-only SQL`}),{edge:J.lava,edgeO:.6}),this.sql.position.set(t[3]-.4,5.1,-.4),e.add(this.sql),this.wh=Pv(3,.6),this.wh.position.set(t[3],0,.2),e.add(this.wh),this.whLbl=this.addLabel(`SQL warehouse runs it`,`ghost`,[0,1.4,.7],this.wh),this.chart=new U,this.chart.position.set(t[4],0,.6),this.chart.rotation.y=-.4,e.add(this.chart),this.cA=Nv(4,{w:1.8,d:.4,maxH:2.4,colors:[7172736,7172736,7172736,7172736]}),this.cA.position.z=-.25,this.chart.add(this.cA),this.cB=Nv(4,{w:1.8,d:.4,maxH:2.4,colors:[J.lava,9086138,9086138,9086138]}),this.cB.position.z=.25,this.chart.add(this.cB),this.cA.children[0].visible=!1,[`FL`,`GA`,`TX`,`AZ`].forEach((e,t)=>this.addLabel(e,`ghost tiny`,[this.cB.bars[t].position.x,-.15,.7],this.chart)),this.chLbl=this.addLabel(`<b>Q3</b> vs Q2 · FL +2.6 pts`,`lava`,[0,3,0],this.chart),this.fb=this.addLabel(`👍 👎 · view SQL`,`tiny`,[0,3.5,0],this.chart),this.trusted=this.addLabel(`Trusted answer when a verified function is used`,`mint nomob`,[0,.2,3.2]),this.curve=new pa([ty(t[0],3.6,.6),ty(t[1],3.2,.3),ty(t[2],3.4,.2),ty(t[3]-.4,4.6,0),ty(t[3],1.4,.4),ty(t[4],2.2,.6)]),this.tube=new G(new Do(this.curve,160,.02,6),Q(7174797,.5)),e.add(this.tube),this.tube.geometry.setDrawRange(0,0),this.packet=new G(new To(.13,20,12),Z(J.lava,3)),e.add(this.packet),this.stepLbls=[`① ask`,`② context`,`③ generate`,`④ execute`,`⑤ visualize`].map((e,n)=>this.addLabel(e,`tiny`,[t[n],.35,2])),this.pick(this.q,`question`,[.95,.4,.05]),this.pick(this.ctx,`contextSel`,[.9,.6,0]),this.pick(this.llm,`llm2`,[.5,.5,0]),this.pick(this.sql,`sqlCard`,[1.1,.65,.05]),this.pick(this.wh,`warehouse`,[.6,1.1,0]),this.pick(this.chart,`chart`,[1,2.6,0])}update(e,t){let n=1-Y(e,9.6,10),r=Y(e,.8,7),i=this.tube.geometry.index.count;this.tube.geometry.setDrawRange(0,Math.floor(X.io(r)*n*i/3)*3),this.curve.getPoint(Math.min(.999,X.io(r)),this.packet.position),this.packet.visible=r>0&&r<1&&n>.1,ny(this.q,X.back(Y(e,.1,.6))*n),this.q.position.y=3.6+Math.sin(t)*.05,ny(this.ctx,X.back(Y(e,1.2,1.7))*n),this.ctxT.forEach((t,n)=>{let r=t.userData.sel?Y(e,2,2.4):0;t.position.z=r*.35,ny(t,(t.userData.sel?1:1-Y(e,2.2,2.8)*.4)*1)}),this.show(this.ctxLbl,Y(e,1.4,1.8)*n);let a=p_(e,2.6,4.4);ny(this.llm,X.back(Y(e,2.2,2.7))*n),this.llm.rotation.set(t*(.3+a*2),t*(.4+a*3),0),this.show(this.llmLbl,Y(e,2.5,2.9)*n),ny(this.sql,X.back(Y(e,3.8,4.3))*n),this.sql.position.y=5.1+Math.sin(t*.8)*.06,ny(this.wh,X.back(Y(e,4.4,4.9))*n);let o=p_(e,4.8,6.4);this.wh.disks.forEach((e,n)=>e.rotation.y=t*(.3+o*4)*(n%2?-1:1)),this.show(this.whLbl,Y(e,4.8,5.2)*n);let s=X.out(Y(e,6.2,7.6));ny(this.chart,Y(e,6,6.2)*n),this.cA.set([.72,.69,.66,.6].map(e=>e*s)),this.cB.set([.98,.71,.64,.62].map((e,t)=>e*X.out(Y(s*1.3-t*.08,0,1)))),this.show(this.chLbl,Y(e,7.4,7.8)*n),this.show(this.fb,Y(e,7.8,8.2)*n),this.show(this.trusted,Y(e,8,8.4)*n),this.stepLbls.forEach((t,r)=>this.show(t,Y(e,.4+r*1.4,.8+r*1.4)*n))}},ly=[[`FL`,J.lava],[`TX`,J.cyan],[`GA`,7172736],[`FL`,J.lava],[`AZ`,7172736],[`TX`,J.cyan],[`FL`,J.lava],[`NC`,7172736],[`TX`,J.cyan],[`OH`,7172736]],uy=class extends R_{constructor(){super({loop:10,cam:{pos:[0,5,15.2],target:[0,2.6,0]}});let e=this.group;this.uFL=P_(J.lava),this.uFL.position.set(-4.4,0,1.4),this.uFL.rotation.y=.6,e.add(this.uFL),this.uTX=P_(J.cyan),this.uTX.position.set(4.4,0,1.4),this.uTX.rotation.y=-.6,e.add(this.uTX),this.lFL=this.addLabel(`FL manager`,`lava`,[-4.4,2.05,1.4]),this.lTX=this.addLabel(`TX manager`,`cyan`,[4.4,2.05,1.4]),this.bFL=this.addLabel(`“Denied claims by provider?”`,`bubble`,[-4.4,2.65,1.4]),this.bTX=this.addLabel(`“Denied claims by provider?”`,`bubble`,[4.4,2.65,1.4]),this.gate=new U,this.gate.position.set(0,0,-.4),e.add(this.gate);let t=new G(new Eo(1.7,.14,16,80,Math.PI),v_(4869976,.35,.6));t.position.y=2,this.gate.add(t),[-1.7,1.7].forEach(e=>{let t=new G(new Yi(.14,.18,2,16),v_(4869976,.35,.6));t.position.set(e,1,0),this.gate.add(t)}),this.archGlow=new G(new Eo(1.7,.03,8,80,Math.PI),Z(J.lava,1.4)),this.archGlow.position.set(0,2,.15),this.gate.add(this.archGlow),this.sh=Lv(J.amber,.9),this.sh.position.set(0,3.95,.15),this.gate.add(this.sh),this.gateLbl=this.addLabel(`Unity Catalog · checked as the end user`,`ghost`,[0,4.7,0],this.gate),this.sieve=new G(new Yi(1.2,1.2,.06,6,1,!0),__(9080729,.35)),this.sieve.position.set(0,2.2,0),this.gate.add(this.sieve),this.sieveGrid=new G(new Ji(1.2,6),new Kr({color:12821107,wireframe:!0,transparent:!0,opacity:.4})),this.sieveGrid.rotation.x=-Math.PI/2,this.sieveGrid.position.set(0,2.2,0),this.gate.add(this.sieveGrid),this.rfLbl=this.addLabel(`ROW FILTER state_filter(member_state)`,`lava nomob`,[0,1.65,1.6],this.gate),this.rows=ly.map(([t,n],r)=>{let i=new G($(.62,.16,.3,.03),n===7172736?Q(n,.5):Z(n,1));return i.userData.s=t,e.add(i),i});let n=(e,t,n)=>Mv(2,1.1,Ev(e,240,132,(e,r,i)=>{e.fillStyle=`#1c1f25`,e.fillRect(0,0,r,i),e.fillStyle=n,e.font=`600 12px ${Cv}`,e.fillText(`provider · state · denied · member`,10,20),e.font=`12px ${wv}`,e.fillStyle=`#c9ccd4`,t.forEach((t,n)=>e.fillText(t,10,48+n*24)),e.fillStyle=`#7d828c`,e.fillText(`member_id masked`,10,122)}),{edge:new W(n).getHex()});this.rFL=n(`g7fl`,[`Bayview   FL 1,204 ***0042`,`Coral Ort FL   988 ***7731`,`Tampa Gen FL   811 ***1290`],`#d9653b`),this.rFL.position.set(-2.7,4.4,.8),this.rFL.rotation.y=.35,e.add(this.rFL),this.rTX=n(`g7tx`,[`LoneStar  TX 1,117 ***5510`,`Gulf Fam  TX   642 ***2208`,`Austin Rx TX   590 ***9013`],`#8aa4ba`),this.rTX.position.set(2.7,4.4,.8),this.rTX.rotation.y=-.35,e.add(this.rTX),this.mask=new U,this.mask.position.set(0,.6,1.8),e.add(this.mask);let r=Mv(1.5,.42,Ev(`g7mask`,180,50,(e,t,n)=>{e.fillStyle=`#23262d`,e.fillRect(0,0,t,n),e.font=`600 16px ${wv}`,e.fillStyle=`#7d828c`,e.fillText(`M0042`,14,32),e.fillStyle=`#d9653b`,e.fillText(`→ ***0042`,76,32)}),{edge:J.violet});this.mask.add(r),this.maskLbl=this.addLabel(`column MASK`,`violet`,[0,.45,0],this.mask),this.audit=Mv(1.6,1.6,Ev(`g7aud`,190,190,(e,t,n)=>{e.fillStyle=`#1c1f25`,e.fillRect(0,0,t,n),e.fillStyle=`#c3a273`,e.font=`600 12px ${Cv}`,e.fillText(`query history`,10,20),e.font=`11px ${wv}`,[`fl.manager  SELECT…`,`tx.manager  SELECT…`,`fl.manager  SELECT…`,`ga.analyst  SELECT…`,`tx.manager  SELECT…`,`nat.lead    SELECT…`].forEach((t,n)=>{e.fillStyle=n%2?`#8aa4ba`:`#c9ccd4`,e.fillText(t,10,46+n*23)})}),{edge:J.amber}),this.audit.position.set(0,4.9,-2.6),e.add(this.audit),this.pick(this.uFL,`userFL`,[0,1.95,0]),this.pick(this.uTX,`userTX`,[0,1.95,0]),this.pick(this.sieve,`rowFilter`,null),this.pick(this.hitBox(2.6,.6,2.6,[0,1.8,-.4]),`rowFilter`,null),this.pick(this.gate,`ucGate`,[1.9,2,0]),this.pick(this.mask,`colMask`,[.75,.2,.05]),this.pick(this.audit,`audit`,[.8,.8,.05]),this.pick(this.rFL,`userFL`,null),this.pick(this.rTX,`userTX`,null)}update(e,t){let n=1-Y(e,9.6,10);this.show(this.lFL,Y(e,.1,.5)*n),this.show(this.lTX,Y(e,.1,.5)*n),this.show(this.bFL,p_(e,.4,3.2)),this.show(this.bTX,p_(e,.7,3.4)),ny(this.gate,X.back(Y(e,.4,1))*n),this.show(this.gateLbl,Y(e,.9,1.3)*n),this.sh.rotation.y=Math.sin(t)*.3,this.sieveGrid.rotation.z=t*.5,this.sieve.rotation.y=t*.5,this.show(this.rfLbl,Y(e,2,2.4)*n);let r=Y(e,1.6,7);this.rows.forEach((e,t)=>{let i=Y(r*1.6-t*.06,0,1),a=e.userData.s,o=a===`FL`?-1:+(a===`TX`),s=ty((t%5-2)*.35,5.6,(t%2-.5)*.4-.4),c;if(i<.5)c=s.clone().lerp(ty(s.x*.6,2.3,-.4),X.in(i*2));else if(o){let e=X.out((i-.5)*2);c=ty(f_(s.x*.6,o*3.2,e),2.3+Math.sin(e*Math.PI)*.8+e*.9,f_(-.4,.8,e))}else c=ty(s.x*.6,2.3-(i-.5)*2*1.6,-.4);e.position.copy(c),e.rotation.y=o*i,ny(e,(i>0&&(o||i<.95)&&i<.999?1:0)*(o?1:1-Y(i,.55,.9))*n)}),ny(this.rFL,X.back(Y(e,5.6,6.1))*n),ny(this.rTX,X.back(Y(e,5.8,6.3))*n),ny(this.mask,X.back(Y(e,6.6,7.1))*n),this.show(this.maskLbl,Y(e,7,7.4)*n),ny(this.audit,X.back(Y(e,7.4,7.9))*n)}},dy=class extends R_{constructor(){super({loop:10,cam:{pos:[0,5,15.2],target:[0,2.5,0]}});let e=this.group;this.belt=new G($(10.2,.16,1.1,.06),Q(3159100,.6)),this.belt.position.set(0,1,.6),e.add(this.belt),this.belt.add(y_(this.belt.geometry,7174797,1,.4)),[-4.6,4.6].forEach(t=>{let n=new G(new K(.16,.9,.9),Q(2829877));n.position.set(t,.45,.6),e.add(n)}),this.rollers=Array.from({length:14},(t,n)=>{let r=new G(new Yi(.06,.06,1,12),v_(7172736,.4,.6));return r.rotation.x=Math.PI/2,r.position.set(-4.9+n*.75,1.1,.6),e.add(r),r}),this.cmp=new U,this.cmp.position.set(0,1.1,.6),e.add(this.cmp);let t=new G(new K(1.6,1.6,1.3),__(5989488,.25));t.position.y=.8,this.cmp.add(t);let n=y_(t.geometry,13225172,1,.5);n.position.y=.8,this.cmp.add(n),this.scan=new G(new wo(1.5,.04),Z(J.lava,3)),this.scan.rotation.x=-Math.PI/2,this.cmp.add(this.scan),this.gt=Mv(1.5,.9,Dv(`g8gt`,[[`SELECT * FROM`,Ov],[`denial_rate_by_state(`,kv],[`  DATE'2026-07-01', …)`,Av]],{w:200,h:120,title:`ground truth`}),{edge:J.mint}),this.gt.position.set(-1.6,3.4,0),this.gt.rotation.y=.2,e.add(this.gt),this.gn=Mv(1.5,.9,Dv(`g8gn`,[["SELECT `Member state`,",Ov],["MEASURE(`Denial rate`)",kv],[`FROM claims_metrics …`,kv]],{w:200,h:120,title:`Genie answer`}),{edge:J.lava}),this.gn.position.set(1.6,3.4,0),this.gn.rotation.y=-.2,e.add(this.gn),this.eq=this.addLabel(`result sets equal?`,`ghost`,[0,3.4,0]),this.res=[1,1,0,1,1,1,1,0,1,1],this.cards=this.res.map((t,n)=>{let r=new U;e.add(r);let i=new G($(.62,.06,.6,.03),Q(14078924,.8));r.add(i);let a=new G(new K(.4,.07,.06),Q(8225420,.6));a.position.set(-.04,.01,-.12),r.add(a);let o=new G(new Yi(.13,.13,.05,24),Z(t?J.mint:11753802,1.6));return o.position.set(.12,.06,.12),r.add(o),r.userData.st=o,r}),this.setLbl=this.addLabel(`25 real questions`,`ghost`,[-4.4,1.9,.6]),this.gauge=Rv(1,J.mint),this.gauge.position.set(-3.6,4,-.6),this.gauge.rotation.y=.3,e.add(this.gauge),this.accLbl=this.addLabel(``,`big`,[0,-1.3,0],this.gauge),this.mon=Mv(2.4,1.5,Ev(`g8mon`,280,176,(e,t,n)=>{e.fillStyle=`#1c1f25`,e.fillRect(0,0,t,n),e.fillStyle=`#c3a273`,e.font=`600 13px ${Cv}`,e.fillText(`Monitor · last 7 days`,12,22),e.font=`12px ${Cv}`,[[`Denials by provider, FL`,`👍`],[`Paid PMPM by plan`,`👍`],[`Claims per member, MA`,`👎`],[`Top denial reasons, TX`,`👍`],[`Backlog by region`,`⚑ review`]].forEach(([t,n],r)=>{e.fillStyle=`#c9ccd4`,e.fillText(t,12,50+r*24),e.fillStyle=n===`👎`?`#b3594a`:n.startsWith(`⚑`)?`#c3a273`:`#8eae9d`,e.fillText(n,210,50+r*24)})}),{edge:J.amber}),this.mon.position.set(3.8,4.1,-.6),this.mon.rotation.y=-.3,e.add(this.mon),this.pick(this.hitBox(3.4,.6,1.2,[-3.2,1.3,.6]),`benchSet`,null),this.cards.forEach((e,t)=>this.pick(e,`benchSet`,null)),this.pick(this.belt,`benchSet`,[-4.8,.3,.5]),this.pick(this.gt,`groundTruth`,[.75,.45,.05]),this.pick(this.gn,`sqlCard`,null),this.pick(this.cmp,`compare2`,[.8,1.6,.65]),this.pick(this.gauge,`accuracy`,[.9,.9,.1]),this.pick(this.mon,`monitor`,[1.2,.75,.05])}update(e,t){let n=1-Y(e,9.6,10),r=Y(e,.8,7.6);this.rollers.forEach(e=>e.rotation.y=t*3*(r>0?1:.1));let i=0,a=0;this.cards.forEach((t,r)=>{let o=e<.8?-1:(((e-.8)*.16-r*.1)%1+1)%1,s=f_(-4.8,4.8,o);t.position.set(s,1.15,.6),ny(t,+(o>.01&&o<.99)*Y(e,.8+r*.6,1+r*.6)*n);let c=s>0;t.userData.st.visible=c,c&&(a++,i+=this.res[r]),t.userData.st.scale.setScalar(c?X.back(Y(s,0,.5)):.001)}),this.scan.position.y=.2+(Math.sin(t*4)*.5+.5)*1.3,ny(this.cmp,X.back(Y(e,.2,.7))*n),ny(this.gt,X.back(Y(e,.6,1.1))*n),ny(this.gn,X.back(Y(e,.8,1.3))*n),this.show(this.eq,Y(e,1.2,1.6)*n),this.show(this.setLbl,Y(e,.4,.8)*n);let o=X.out(Y(e,2,7.6))*.92;ny(this.gauge,X.back(Y(e,1.4,1.9))*n),this.gauge.set(o),this.accLbl.element.innerHTML=`accuracy <b>${Math.round(o*100)}%</b>`,this.show(this.accLbl,Y(e,1.8,2.2)*n),ny(this.mon,X.back(Y(e,7,7.6))*n),this.mon.position.y=4.1+Math.sin(t*.8)*.05}},fy=[[`genieOne`,`Genie One`,J.lava],[`teams`,`Microsoft Teams`,J.violet],[`embed`,`Embedded iframe`,J.cyan],[`api`,`Conversation API`,J.amber],[`mcp`,`MCP server → agents`,J.mint]];function py(e,t){let n=new U,r=Z(t,1.3),i=Q(2829877,.5);if(e===`genieOne`){let e=new G($(.5,.9,.06,.08),i);n.add(e);for(let e=0;e<3;e++){let t=new G($(e%2?.28:.34,.1,.02,.04),e%2?r:Q(9086138));t.position.set(e%2?.06:-.03,.22-e*.18,.04),n.add(t)}}if(e===`teams`){let e=new G($(.7,.7,.12,.12),Q(6972822,.45));n.add(e);let t=new G(new K(.36,.08,.04),Q(15328992));t.position.set(0,.14,.07),n.add(t);let r=new G(new K(.08,.36,.04),Q(15328992));r.position.set(0,-.04,.07),n.add(r)}if(e===`embed`){let e=new G($(1,.7,.05,.05),i);n.add(e);let t=new G(new K(.96,.1,.02),Q(4869976));t.position.set(0,.28,.03),n.add(t);let a=new G($(.6,.38,.02,.03),r);a.position.set(.1,-.06,.04),n.add(a)}if(e===`api`){for(let e of[-1,1]){let t=new G(new Eo(.32,.05,8,24,Math.PI*.7),r);t.rotation.z=e>0?-Math.PI*.35:Math.PI*.65,t.position.x=e*.06,n.add(t)}let e=new G(new K(.06,.4,.04),Q(15328992));e.rotation.z=-.4,n.add(e)}if(e===`mcp`){let e=new G($(.5,.42,.3,.06),i);n.add(e);for(let e of[-.12,.12]){let t=new G(new Yi(.04,.04,.3,10),r);t.position.set(e,.34,0),n.add(t)}let t=new G(new Eo(.2,.03,8,30,Math.PI),r);t.rotation.z=Math.PI,t.position.y=-.3,n.add(t)}return n}var my=class extends R_{constructor(){super({loop:10,cam:{pos:[0,5,15],target:[0,2.8,0]}});let e=this.group;this.core=Fv(.9),this.core.position.set(0,3,0),e.add(this.core);let t=new G(new Yi(.7,.9,.5,8),Q(3093307,.6));t.position.y=.25,e.add(t);let n=new G(new Yi(.06,.06,1.7,12),v_(7172736,.4,.6));n.position.y=1.2,e.add(n),this.coreLbl=this.addLabel(`Genie Agent · <b>CAN RUN</b>`,`lava`,[0,1.4,0],this.core),this.sats=fy.map(([t,n,r],i)=>{let a=new U;e.add(a);let o=py(t,r);a.add(o),a.userData.ic=o;let s=-Math.PI*.5+Math.PI/4*i;a.userData.base=ty(Math.sin(s)*4.4,3+Math.cos(s)*1.9,Math.cos(s)*.8-.4),a.userData.lbl=this.addLabel(n,`ghost`,[0,-.75,0],a);let c=new Hv(r,.02);e.add(c.mesh),a.userData.beam=c;let l=new G(new To(.09,16,8),Z(r,3));return e.add(l),a.userData.pk=l,this.pick(a,t,[.5,.5,0]),a}),this.ucLbl=this.addLabel(`Same identity, same UC permissions on every path`,`big`,[0,6.6,0]),this.apiLbl=this.addLabel(`POST /api/2.0/genie/spaces/{id}/start-conversation`,`tiny`,[0,.45,2.4]),this.pick(this.core.shell,`agentCore`,[.7,.7,0])}update(e,t){let n=1-Y(e,9.6,10);ny(this.core,X.back(Y(e,.1,.7))*n),this.core.rotation.y=t*.3,this.core.heart.rotation.x=t,this.core.ring.rotation.z=t*.3,this.show(this.coreLbl,Y(e,.5,.9)*n),this.sats.forEach((r,i)=>{let a=X.out(Y(e,1+i*.45,1.8+i*.45))*n,o=r.userData.base;r.position.copy(this.core.position).lerp(o,a),r.position.y+=Math.sin(t*.9+i)*.1,ny(r,a),r.userData.ic.rotation.y=Math.sin(t*.6+i)*.4,r.userData.beam.set(this.core.position,r.position,+(a>.95));let s=(t*.6+i*.37)%1;r.userData.pk.position.copy(this.core.position).lerp(r.position,i%2?s:1-s),r.userData.pk.visible=a>.95,this.show(r.userData.lbl,Y(e,1.6+i*.45,2+i*.45)*n)}),this.show(this.ucLbl,Y(e,4.4,4.8)*n),this.show(this.apiLbl,Y(e,5,5.4)*n)}},hy={rag:{id:`rag`,n:1,title:`Document Q&A with RAG`,steps:i_,phases:n_,deep:[...o_,...c_],objects:l_,classes:[H_,U_,G_,J_,rv,iv,ov,lv,pv,hv]},genie:{id:`genie`,n:2,title:`Talk to your data with Genie`,steps:vv,phases:gv,deep:bv,objects:Sv,classes:[qv,Yv,Xv,Qv,ey,oy,cy,uy,dy,my]}},gy=`rag`,_y=hy.rag,vy=_y.steps,yy=_y.phases,by=_y.deep,xy=_y.objects,Sy=10,Cy=e=>document.querySelector(e),wy=matchMedia(`(pointer:coarse)`).matches||innerWidth<820,Ty=new URLSearchParams(location.search),Ey=e=>String(e).padStart(2,`0`),Dy=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);Ty.get(`hs`)===`0`&&(R_.hotspots=!1);var Oy=Cy(`#gl`),ky=new fd({canvas:Oy,antialias:!1,powerPreference:`high-performance`});ky.setPixelRatio(Math.min(devicePixelRatio,wy?1.5:1.75)),ky.setSize(innerWidth,innerHeight),ky.toneMapping=7,ky.toneMappingExposure=1,ky.outputColorSpace=Re,ky.localClippingEnabled=!0,ky.shadowMap.enabled=!0,ky.shadowMap.type=1;var Ay=new Qg({element:Cy(`#labels`)});Ay.setSize(innerWidth,innerHeight);var jy=new bn,My=1382171;jy.background=new W(My),jy.fog=new yn(My,.011),jy.environment=new Cc(ky).fromScene(new $g,.04).texture,jy.environmentIntensity=.55;var Ny=new Cs(42,innerWidth/innerHeight,.1,600);jy.add(new ds(14673648,2762274,.55));var Py=new Os(16773600,2.3);Py.castShadow=!0,Py.shadow.mapSize.set(wy?1024:2048,wy?1024:2048),Object.assign(Py.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:60}),Py.shadow.bias=-4e-4,Py.shadow.normalBias=.03,Py.shadow.radius=4,jy.add(Py,Py.target);var Fy=new Os(10466512,.7);Fy.position.set(-14,7,-10),jy.add(Fy);var Iy=new Ag(ky,new Pt(innerWidth,innerHeight,{type:g,samples:wy?2:4}));Iy.setPixelRatio(ky.getPixelRatio()),Iy.addPass(new jg(jy,Ny));var Ly=null;!wy&&Ty.get(`ao`)!==`0`&&(Ly=new Vg(jy,Ny,innerWidth,innerHeight),Ly.output=Vg.OUTPUT.Default,Ly.blendIntensity=.85,Ly.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.5,scale:1,samples:16}),Ly.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),Ly._overrideVisibility=function(){let e=this._visibilityCache;this.scene.traverse(t=>{if(!t.visible)return;let n=t.material,r=n&&!Array.isArray(n)&&(n.depthWrite===!1||n.transparent&&n.opacity<.6);(t.isPoints||t.isLine||t.isLine2||t.isSprite||t.isMesh&&r)&&(t.visible=!1,e.push(t))})},Iy.addPass(Ly));var Ry=new Ug(new V(innerWidth/2,innerHeight/2),.12,.4,.93);Iy.addPass(Ry),Iy.addPass(new Gg);var zy=30,By=e=>new H(e*zy,0,-Math.sin(e*.75)*8),Vy=new G(new wo(900,400),new Ro({color:1711136,roughness:.95,metalness:0}));Vy.rotation.x=-Math.PI/2,Vy.position.set(130,-1.6,0),Vy.receiveShadow=!0,jy.add(Vy);var Hy=new Io({transparent:!0,depthWrite:!1,vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vW;
    float line(float x, float w){ float f = abs(fract(x)-.5); float d = fwidth(x); return smoothstep(w+d, w, .5-f); }
    void main(){ vec2 p = vW.xz/2.5; float g = max(line(p.x,.01), line(p.y,.01));
      float d = length(vW.xz - cameraPosition.xz); float fade = exp(-d*0.03);
      gl_FragColor = vec4(vec3(.85,.84,.8), g*fade*.06); }`}),Uy=new G(new wo(900,400),Hy);Uy.rotation.x=-Math.PI/2,Uy.position.set(130,-1.595,0),jy.add(Uy);var Wy=[new H(-40,-.55,6)];for(let e=0;e<Sy;e++){let t=By(e);if(Wy.push(new H(t.x,-.55,t.z)),e<9){let n=By(e+1);Wy.push(new H((t.x+n.x)/2,-.95,(t.z+n.z)/2+3))}}Wy.push(new H(310,-.55,0));var Gy=new pa(Wy);jy.add(new G(new Do(Gy,900,.035,8,!1),new Ro({color:4869718,roughness:.35,metalness:.7})));var Ky=wy?60:120,qy=new hi(new To(.06,12,8),Z(J.lava,1.2),Ky);qy.frustumCulled=!1,jy.add(qy);var Jy=new Lt,Yy=new H,Xy=new pt,Zy=new H(1,1,1),Qy={};function $y(e){if(Qy[e])return Qy[e];let t=new U;t.name=`world-`+e,jy.add(t);let n=hy[e].classes.map((e,n)=>{let r=new e;return r.group.position.copy(By(n)),t.add(r.group),r});return n.forEach(e=>e.group.traverse(e=>{!e.isMesh||e.userData.noShadow||e.userData.hit||(e.castShadow=(Array.isArray(e.material)?e.material:[e.material]).every(e=>!e.transparent&&!e.isShaderMaterial),e.receiveShadow=!0)})),Qy[e]={grp:t,stations:n},Qy[e]}var eb=$y(`rag`).stations,tb={pos:new H(-16,9,22),target:new H(34,1,-6)},nb={yaw:0,pitch:0,tyaw:0,tpitch:0,px:0,py:0},rb=null;function ib(e){let t=eb[e],n=t.group.position,r=Ny.aspect,i=r<1?(1+(1-r)*2.15)*(t.cam.pk||1):r<1.4?1.3:1.18,a=new H(...t.cam.pos).sub(new H(...t.cam.target)).multiplyScalar(i),o=new H(...t.cam.target).add(n);return{pos:o.clone().add(a),target:o}}var ab=()=>({pos:new H(-17,8.5,21),target:new H(30,1.5,-6)});function ob(e,t=2,n=!1){if(rb&&rb.kill(),n){tb.pos.copy(e.pos),tb.target.copy(e.target);return}let r=tb.pos.clone(),i=tb.target.clone(),a=Math.min(6,r.distanceTo(e.pos)*.12),o={p:0};rb=xg.to(o,{p:1,duration:t,ease:`power3.inOut`,onUpdate:()=>{let t=o.p;tb.pos.lerpVectors(r,e.pos,t),tb.pos.y+=Math.sin(t*Math.PI)*a,tb.pos.z+=Math.sin(t*Math.PI)*a*.9,tb.target.lerpVectors(i,e.target,X.io(Math.min(1,t*1.15)))}})}var sb=!1,cb={x:0,tx:0};function lb(){let e=innerWidth;return db!==`case`||e<820?0:sb?Math.min(560,e*.42)*.5:-e*.13}function ub(e=!1){cb.tx=lb(),e&&(cb.x=cb.tx);let t=innerWidth,n=innerHeight;db===`case`?t<820?Ny.setViewOffset(t,n,0,n*.2,t,n):Ny.setViewOffset(t,n,cb.x,n*.02,t,n):Ny.clearViewOffset()}var db=`home`,fb=0,pb=!1,mb=0,hb=!1,gb=Cy(`#grid`);t_.forEach((e,t)=>{let n=document.createElement(e.live?`button`:`div`);n.className=`tile `+(e.live?`live`:`locked`),n.innerHTML=`<div><div class="n">${Ey(e.n)}</div><h3>${e.t}</h3>${e.live?`<p class="sub">${e.sub}</p>`:``}</div>
    ${e.live?`<span class="go">Explore in 3D <b>→</b></span>`:`<div class="k"><span class="cat">${e.cat}</span><span class="soon">Coming soon</span></div>`}`,e.live&&(n.dataset.case=e.case,n.addEventListener(`click`,()=>Lb(e.case,0))),gb.appendChild(n),setTimeout(()=>n.classList.add(`in`),250+t*30)});var _b=Cy(`#map`),vb=[];function yb(){_b.innerHTML=``,vb=[],yy.forEach(e=>{let t=document.createElement(`div`);t.className=`phase-grp`,t.innerHTML=`<div class="phase-lbl">${e.name}</div><div class="phase-nodes"></div>`,e.steps.forEach(e=>{let n=vy[e],r=document.createElement(`button`);r.className=`node`,r.title=n.title,r.innerHTML=`<div class="nd"><svg viewBox="0 0 24 24">${n.icon}</svg></div><span>${n.short}</span>`,r.addEventListener(`click`,()=>Ib(e)),t.querySelector(`.phase-nodes`).appendChild(r),vb[e]=r}),_b.appendChild(t)})}yb();function bb(e){if(hy[e]||(e=`rag`),e===gy&&Qy[e])return;for(let e in Qy)Qy[e].grp.visible=!1,Qy[e].stations.forEach(e=>{xg.killTweensOf(e),e.focus=0});let t=$y(e);t.grp.visible=!0,e!==gy&&ky.compile(jy,Ny),gy=e,_y=hy[e],vy=_y.steps,yy=_y.phases,by=_y.deep,xy=_y.objects,eb=t.stations,eb.forEach(e=>{e.focus=0}),yb(),Cy(`#ucNum`).textContent=Ey(_y.n),Cy(`#ucName`).textContent=_y.title,Cy(`#stepTot`).textContent=`/ `+Ey(9),document.body.dataset.case=e}function xb(e){let t=vy[e];Cy(`#cStepIdx`).textContent=`STEP `+Ey(e),Cy(`#cPhase`).textContent=t.phase.toUpperCase(),Cy(`#cTitle`).textContent=t.title,t.split?Cy(`#cRows`).innerHTML=`<div class="split">
      <div class="col need"><label>Business need</label><ul>${t.split.need.map(e=>`<li>${e}</li>`).join(``)}</ul></div>
      <div class="col sol"><label>Developer solution</label><ul>${t.split.solution.map(e=>`<li>${e}</li>`).join(``)}</ul></div></div>`:Cy(`#cRows`).innerHTML=[[`what`,`What`,t.what],[`how`,`How`,t.how],[`why`,`Why`,t.why]].map(([e,t,n])=>`<div class="row"><i class="ico ${e}"></i><div><label>${t}</label><p>${n}</p></div></div>`).join(``),Cy(`#cTags`).innerHTML=t.tags.map(([e,t])=>`<span class="tag ${t}">${e}</span>`).join(``),Cy(`#stepNow`).textContent=Ey(e),vb.forEach((t,n)=>{t.classList.toggle(`on`,n===e),t.classList.toggle(`done`,n<e)}),vb[e].scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`}),hb?xg.set(`#card`,{opacity:1,y:0}):xg.fromTo(`#card`,{opacity:0,y:12},{opacity:1,y:0,duration:.6,ease:`power3.out`,delay:.35})}var Sb={sql:new Set(`SELECT FROM WHERE CREATE OR REPLACE TABLE VOLUME AS AND INSERT INTO LATERAL ALTER SET TBLPROPERTIES GRANT ON TO USE CATALOG SCHEMA DESCRIBE HISTORY LIMIT ORDER BY GROUP JOIN STRING INT BIGINT NULL TRUE FALSE WITH IF NOT EXISTS DESC ASC IN IS CASE WHEN THEN ELSE END MERGE USING MATCHED UPDATE VALUES DISTINCT INTERVAL HOUR DAY ARRAY MAP STRUCT VARIANT BINARY TIMESTAMP DOUBLE FLOAT BOOLEAN FUNCTION RETURN RETURNS ROW FILTER MASK COLUMN CONSTRAINT PRIMARY KEY FOREIGN REFERENCES COMMENT METRICS LANGUAGE YAML VIEW STREAMING MATERIALIZED REFRESH STREAM EXPECT VIOLATION DROP ADD DATE DECIMAL BETWEEN ALL ILIKE LIKE ALTER`.split(` `)),py:new Set(`from import def return for in if else elif with as None True False lambda class not and or is try except raise while print`.split(` `)),sh:new Set(`pip install databricks fs cp agentbricks init dev deploy deployments logs get stop list export cd curl genie`.split(` `))};function Cb(e,t){let n=RegExp(`(${t===`sql`?`--[^\\n]*`:`#[^\\n]*`})|("""[\\s\\S]*?"""|'(?:\\\\.|[^'\\\\\\n])*'|"(?:\\\\.|[^"\\\\\\n])*")|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_]\\w*)(?=\\()|([A-Za-z_][\\w-]*)`,`g`),r=Sb[t]||new Set,i=``,a=0,o;for(;o=n.exec(e);){i+=Dy(e.slice(a,o.index)),a=o.index+o[0].length;let[n,s,c,l,u,d]=o;i+=s?`<span class="c">${Dy(s)}</span>`:c?`<span class="s">${Dy(c)}</span>`:l?`<span class="n">${l}</span>`:u?r.has(t===`sql`?u.toUpperCase():u)?`<span class="k">${u}</span>`:`<span class="f">${u}</span>`:d?r.has(t===`sql`?d.toUpperCase():d)?`<span class="k">${Dy(d)}</span>`:Dy(d):Dy(n)}return i+Dy(e.slice(a))}var wb={sql:`SQL`,py:`Python`,sh:`Shell`};function Tb(e){return!e||!e.length?``:`<div class="codebox">${e.length>1?`<div class="tabs" role="tablist">${e.map((e,t)=>`<button class="tab${t?``:` on`}" data-k="${t}">${Dy(e.label||wb[e.lang])}</button>`).join(``)}</div>`:`<div class="code-cap">${Dy(e[0].label||wb[e[0].lang])}</div>`}${e.map((e,t)=>`<div class="code-wrap${t?` hidden`:``}" data-k="${t}"><span class="lang">${wb[e.lang]||``}</span><button class="copy" data-k="${t}">Copy</button><pre class="code"><code>${Cb(e.src,e.lang)}</code></pre></div>`).join(``)}</div>`}function Eb(e){return`<figure class="tbl">${e.title?`<figcaption>${e.title}</figcaption>`:``}<div class="tscroll"><table><thead><tr>${e.cols.map(e=>`<th>${e}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td>${e}</td>`).join(``)}</tr>`).join(``)}</tbody></table></div>${e.note?`<p class="note">${e.note}</p>`:``}</figure>`}function Db(e,t){return`<div class="chips">${e.filter(e=>xy[e]).map(e=>`<button class="chip${e===t?` on`:``}" data-obj="${e}"><i></i>${xy[e].title}</button>`).join(``)}</div>`}var Ob=Cy(`#panel`),kb=Cy(`#pBody`),Ab=null;function jb(e){sb=e,Ob.classList.toggle(`open`,e),document.body.classList.toggle(`panel-open`,e),ub()}function Mb(e=fb,t=0){let n=by[e],r=vy[e];Ab={type:`step`,i:e},Cy(`#pKick`).innerHTML=`STEP ${Ey(e)} · ${r.phase.toUpperCase()}`,Cy(`#pBack`).classList.add(`hidden`);let i=`<h2>${r.title}</h2><p class="lead">${n.lead}</p>`;i+=`<section><h3><span>1</span>What happens, technically</h3><ol class="steps">${n.happens.map(e=>`<li>${e}</li>`).join(``)}</ol></section>`,i+=`<section><h3><span>2</span>Concepts you need</h3><dl class="concepts">${n.concepts.map(e=>`<div><dt>${e.t}</dt><dd>${e.d}</dd></div>`).join(``)}</dl>${n.compare?Eb(n.compare):``}</section>`,n.code?.length&&(i+=`<section><h3><span>3</span>The actual code</h3>${Tb(n.code)}</section>`),n.io?.length&&(i+=`<section><h3><span>4</span>Input → output</h3>${n.io.map(Eb).join(`<div class="io-arrow">↓</div>`)}</section>`),i+=`<section><h3><span>5</span>Why it matters</h3><p>${n.why}</p></section>`,n.pitfalls?.length&&(i+=`<section><h3><span>6</span>Pitfalls to avoid</h3><ul class="pitfalls">${n.pitfalls.map(e=>`<li>${e}</li>`).join(``)}</ul></section>`),n.objects?.length&&(i+=`<section><h3><span>7</span>Inspect the objects in this scene</h3>${Db(n.objects)}</section>`),i+=`<div class="p-nav">${e>0?`<button class="pn" data-step="${e-1}">← ${Ey(e-1)} ${vy[e-1].short}</button>`:`<span></span>`}${e<9?`<button class="pn" data-step="${e+1}">${Ey(e+1)} ${vy[e+1].short} →</button>`:``}</div>`,kb.innerHTML=i,kb.scrollTop=t,jb(!0)}function Nb(e){let t=xy[e];if(!t)return;Ab={type:`obj`,id:e,i:fb},Cy(`#pKick`).innerHTML=`${Dy(t.kind).toUpperCase()} · STEP ${Ey(fb)}`,Cy(`#pBack`).classList.remove(`hidden`);let n=`<h2>${t.title}</h2>`;n+=`<section><h3>What it is</h3><p>${t.what}</p></section>`,n+=`<section><h3>How it works</h3><p>${t.how}</p></section>`,n+=`<section class="here"><h3>Its job in this step</h3><p>${t.here}</p></section>`,t.facts?.length&&(n+=`<section><h3>Key facts</h3><dl class="facts">${t.facts.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl></section>`),t.code&&(n+=`<section><h3>In code</h3>${Tb([t.code])}</section>`);let r=(by[fb].objects||[]).filter(t=>t!==e);r.length&&(n+=`<section><h3>Other objects in this step</h3>${Db(r)}</section>`),n+=`<button class="deep-btn ghost" data-deep="1">Read the full explanation of step ${Ey(fb)} →</button>`,kb.innerHTML=n,kb.scrollTop=0,jb(!0)}function Pb(){jb(!1),Ab=null}Cy(`#pClose`).addEventListener(`click`,Pb),Cy(`#pBack`).addEventListener(`click`,()=>Mb(fb)),Cy(`#btnDeep`).addEventListener(`click`,()=>Mb(fb)),Ob.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.obj)Nb(t.dataset.obj);else if(t.dataset.deep)Mb(fb);else if(t.dataset.step)Ib(+t.dataset.step),Mb(+t.dataset.step);else if(t.classList.contains(`tab`)){let e=t.closest(`.codebox`);e.querySelectorAll(`.tab`).forEach(e=>e.classList.toggle(`on`,e===t)),e.querySelectorAll(`.code-wrap`).forEach(e=>e.classList.toggle(`hidden`,e.dataset.k!==t.dataset.k))}else if(t.classList.contains(`copy`)){let e=t.parentElement.querySelector(`pre`);navigator.clipboard?.writeText(e.innerText).then(()=>{t.textContent=`Copied`,setTimeout(()=>t.textContent=`Copy`,1200)}).catch(()=>{})}}}),Cy(`#labels`).addEventListener(`click`,e=>{let t=e.target.closest(`.hs`);t&&(e.stopPropagation(),Nb(t.dataset.id))});function Fb(e){eb.forEach((t,n)=>xg.to(t,{focus:+(n===e),duration:n===e?.8:.35,delay:n===e?1.2:0}))}function Ib(e,t={}){e=(e+Sy)%Sy;let n=Math.abs(e-fb);fb=e,mb=0;let r=!!t.instant;ob(ib(e),r?0:Math.min(2.6,1.5+n*.15),r),eb[e].reset(r?0:1.1),nb.tyaw=0,nb.tpitch=0,Fb(e),xb(e),Yb(null),sb&&Ab&&(Ab.type===`step`?Mb(e):Pb()),history.replaceState(null,``,location.pathname+location.search+`#/`+gy+`/`+e)}function Lb(e=`rag`,t=0,n=!1){bb(e),db=`case`,ub(!0),Cy(`#hud`).classList.remove(`hidden`),n?(Cy(`#home`).classList.add(`hidden`),Cy(`#hud`).style.opacity=1):(xg.to(`#home`,{opacity:0,duration:.5,onComplete:()=>Cy(`#home`).classList.add(`hidden`)}),xg.fromTo(`#hud`,{opacity:0},{opacity:1,duration:.8,delay:.3})),fb=-99,Ib(t,{instant:n})}function Rb(){Pb(),db=`home`,zb(!1),ub(!0),eb.forEach(e=>xg.to(e,{focus:0,duration:.3})),Cy(`#home`).classList.remove(`hidden`),xg.to(`#home`,{opacity:1,duration:.6}),xg.to(`#hud`,{opacity:0,duration:.3,onComplete:()=>Cy(`#hud`).classList.add(`hidden`)}),ob(ab(),2.2),history.replaceState(null,``,location.pathname+location.search+`#/`)}function zb(e){pb=e,mb=0,Cy(`#btnPlay`).classList.toggle(`on`,e)}Cy(`#btnHome`).addEventListener(`click`,Rb),Cy(`#btnNext`).addEventListener(`click`,()=>{hb=!1,Ib(fb+1)}),Cy(`#btnPrev`).addEventListener(`click`,()=>Ib(fb-1)),Cy(`#btnPlay`).addEventListener(`click`,()=>zb(!pb)),addEventListener(`keydown`,e=>{db===`case`?e.key===`Escape`?sb?Pb():Rb():e.target.closest&&e.target.closest(`#panel`)||(e.key===`ArrowRight`?Ib(fb+1):e.key===`ArrowLeft`?Ib(fb-1):e.key===` `&&(e.preventDefault(),zb(!pb))):e.key===`Enter`&&Lb(`rag`,0)});var Bb=new Js;Bb.layers.enableAll(),Bb.params.Line.threshold=.02,Bb.params.Points.threshold=.1;var Vb=new V;function Hb(e,t){if(db!==`case`||fb<0)return null;let n=eb[fb];if(n.focus<.5)return null;Vb.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Bb.setFromCamera(Vb,Ny);let r=Bb.intersectObjects(n.picks.map(e=>e.obj),!0);for(let e of r){if(!I_(e.object))continue;let t=e.object;for(;t&&!t.userData.pickId;)t=t.parent;if(t&&xy[t.userData.pickId])return{id:t.userData.pickId,obj:t}}return null}var Ub=(()=>{let e=.22,t=[];for(let n of[-.5,.5])for(let r of[-.5,.5])for(let i of[-.5,.5])t.push(n,r,i,n-Math.sign(n)*e,r,i,n,r,i,n,r-Math.sign(r)*e,i,n,r,i,n,r,i-Math.sign(i)*e);let n=new mr;n.setAttribute(`position`,new nr(t,3));let r=new Pi(n,new Si({color:15235148,transparent:!0,opacity:.95,depthTest:!1}));return r.renderOrder=999,r.visible=!1,r.frustumCulled=!1,jy.add(r),r})(),Wb=new Fn,Gb=new H,Kb=new H,qb=null,Jb=Cy(`#tip`);function Yb(e,t,n){qb=e,Oy.style.cursor=e?`pointer`:Zb?`grabbing`:`grab`,e?(Jb.innerHTML=`<b>${xy[e.id].title}</b><span>${wy?`tap`:`click`} to inspect</span>`,Jb.style.transform=`translate(${Math.min(t+16,innerWidth-260)}px, ${n+18}px)`,Jb.classList.add(`on`)):(Jb.classList.remove(`on`),Ub.visible=!1)}function Xb(){qb&&(Wb.makeEmpty(),qb.obj.traverse(e=>{e.isMesh&&(e.visible||e.userData.hit)&&Wb.expandByObject(e,!1)}),Wb.isEmpty()?Ub.visible=!1:(Wb.getCenter(Gb),Wb.getSize(Kb),Kb.multiplyScalar(1.08).max(new H(.2,.2,.2)),Ub.position.copy(Gb),Ub.scale.copy(Kb),Ub.visible=!0))}var Zb=null;Oy.addEventListener(`pointerdown`,e=>{db===`case`&&(Zb={x:e.clientX,y:e.clientY,t:performance.now(),y0:nb.tyaw,p0:nb.tpitch,moved:0})}),addEventListener(`pointermove`,e=>{nb.px=e.clientX/innerWidth-.5,nb.py=e.clientY/innerHeight-.5,Zb?(Zb.moved=Math.max(Zb.moved,Math.hypot(e.clientX-Zb.x,e.clientY-Zb.y)),Zb.moved>6&&(nb.tyaw=Math.max(-1,Math.min(1,Zb.y0-(e.clientX-Zb.x)*.005)),nb.tpitch=Math.max(-.25,Math.min(.5,Zb.p0+(e.clientY-Zb.y)*.003)),Yb(null))):e.pointerType===`mouse`&&e.target===Oy?Yb(Hb(e.clientX,e.clientY),e.clientX,e.clientY):e.target!==Oy&&qb&&Yb(null)}),addEventListener(`pointerup`,e=>{if(!Zb)return;let t=e.clientX-Zb.x,n=performance.now()-Zb.t;if(Zb.moved<8&&n<1500){let t=Hb(e.clientX,e.clientY);t&&(Nb(t.id),e.pointerType!==`mouse`&&(Yb(t,e.clientX,e.clientY),setTimeout(()=>Yb(null),1400)))}else wy&&Math.abs(t)>70&&n<350&&(nb.tyaw=Zb.y0,Ib(fb+(t<0?1:-1)));Zb=null});var Qb=new Zs,$b=0,ex=new H,tx=new Qs;function nx(){let e=Math.min(.05,Qb.getDelta());$b+=e,nb.yaw+=(nb.tyaw-nb.yaw)*.08,nb.pitch+=(nb.tpitch-nb.pitch)*.08,Math.abs(cb.tx-cb.x)>.5&&(cb.x+=(cb.tx-cb.x)*.12,ub()),ex.copy(tb.pos).sub(tb.target),tx.setFromVector3(ex);let t=wy||hb?0:1;tx.theta+=nb.yaw+(db===`home`?Math.sin($b*.08)*.12:nb.px*.05*t),tx.phi=Math.max(.35,Math.min(1.5,tx.phi-nb.pitch+nb.py*.03*t)),Ny.position.copy(tb.target).add(ex.setFromSpherical(tx)),Ny.lookAt(tb.target),Py.target.position.set(tb.target.x,0,tb.target.z),Py.position.set(tb.target.x+9,17,tb.target.z+11);for(let e=0;e<Ky;e++)Gy.getPointAt((e/Ky+$b*.004)%1,Yy),Jy.compose(Yy,Xy,Zy),qy.setMatrixAt(e,Jy);if(qy.instanceMatrix.needsUpdate=!0,eb.forEach((t,n)=>{let r=db===`home`?n<4:Math.abs(n-fb)<=1;t.group.visible=db===`home`?n<6:Math.abs(n-fb)<=2,r?t.tick(e,$b,db===`home`||n===fb&&!hb):t.group.visible&&t.tick(0,$b,!1)}),Xb(),pb&&db===`case`){mb+=e;let t=eb[fb].loop+1;Cy(`#btnPlay`).style.setProperty(`--p`,Math.min(1,mb/t).toFixed(3)),mb>=t&&Ib(fb+1)}Iy.render(),Ay.render(jy,Ny),innerWidth<820&&db===`case`&&eb[fb]&&ix(eb[fb]),requestAnimationFrame(nx)}var rx=new H;function ix(e){let t=innerWidth;for(let n of e.labels){let e=n.element;if(!n.visible||e.style.display===`none`){e._dx&&=(e.style.translate=``,0);continue}let r=e.offsetWidth;if(!r)continue;n.getWorldPosition(rx).project(Ny);let i=(rx.x*.5+.5)*t-r*n.center.x,a=i+r,o=0;i<6?o=6-i:a>t-6&&(o=t-6-a),o=Math.round(o),o!==(e._dx||0)&&(e.style.translate=o?o+`px 0`:``,e._dx=o)}}function ax(){let e=innerWidth,t=innerHeight;Ny.aspect=e/t,Ny.fov=e/t<1?52:42,Ny.updateProjectionMatrix(),ky.setSize(e,t),Iy.setSize(e,t),Ay.setSize(e,t),Ry.resolution.set(e/2,t/2),ub(!0),db===`case`&&ob(ib(fb),0,!0)}addEventListener(`resize`,ax),ax();var ox=location.hash.match(/#\/(rag|genie)\/(\d+)/),sx=parseFloat(Ty.get(`t`));hb=!isNaN(sx)&&!!ox,xg.ticker.lagSmoothing(hb?0:2e3,50),ox?(Lb(ox[1],Math.max(0,Math.min(9,parseInt(ox[2],10))),!0),isNaN(sx)||(eb[fb].reset(0),eb[fb].local=sx,xg.killTweensOf(eb[fb]),eb[fb].focus=1),Ty.get(`deep`)&&Mb(fb),Ty.get(`obj`)&&Nb(Ty.get(`obj`)),sb&&ub(!0)):ob(ab(),0,!0),Oy.style.cursor=`grab`,ky.compile(jy,Ny),requestAnimationFrame(nx),setTimeout(()=>{Cy(`#loader`).style.opacity=0,setTimeout(()=>Cy(`#loader`).remove(),900)},600),window.__app={go:Ib,openCase:Lb,openHome:Rb,openStep:Mb,openObject:Nb,closePanel:Pb,setPlay:zb,pickAt:Hb,camera:Ny,get stations(){return eb},get caseId(){return gy}};