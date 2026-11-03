(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,ee=33779,F=35840,te=35841,ne=35842,re=35843,ie=36196,ae=37492,oe=37496,se=37488,I=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,je=2300,Me=2301,L=2302,Ne=2303,Pe=2400,Fe=2401,R=2402,Ie=3200,Le=`srgb`,z=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=35048,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n){return(1-n)*e+n*t}function ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function lt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ut(e,t){if(t.constructor===Float32Array)return e;let n=lt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function dt(e,t){if(t.constructor===Float32Array)return e;let n=lt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var H=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pt.copy(this).projectOnVector(e),this.sub(pt)}reflect(e){return this.sub(pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pt=new U,mt=new ft,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(gt.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(gt.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(gt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gt=new ht,_t=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vt=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yt(){let e={enabled:!0,workingColorSpace:z,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[z]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var bt=yt();function xt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function St(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ct,wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ct===void 0&&(Ct=Ke(`canvas`)),Ct.width=e.width,Ct.height=e.height;let t=Ct.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ct}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=xt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(xt(t[e]/255)*255):t[e]=xt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Tt=0,Et=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Dt(r[t].image)):e.push(Dt(r[t]))}else e=Dt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Dt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Ot=0,kt=new U,At=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=it(),this.name=``,this.source=new Et(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kt).x}get height(){return this.source.getSize(kt).y}get depth(){return this.source.getSize(kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=300,At.DEFAULT_ANISOTROPY=1;var jt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new At({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Et(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nt=class extends Mt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pt=class extends At{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ft=class extends At{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},It=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Lt.setFromMatrixColumn(e,0).length(),i=1/Lt.setFromMatrixColumn(e,1).length(),a=1/Lt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zt,e,Bt)}lookAt(e,t,n){let r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Vt.crossVectors(n,Ut),Vt.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Vt.crossVectors(n,Ut)),Vt.normalize(),Ht.crossVectors(Ut,Vt),r[0]=Vt.x,r[4]=Ht.x,r[8]=Ut.x,r[1]=Vt.y,r[5]=Ht.y,r[9]=Ut.y,r[2]=Vt.z,r[6]=Ht.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Lt.set(r[0],r[1],r[2]).length(),o=Lt.set(r[4],r[5],r[6]).length(),s=Lt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Rt.copy(this);let c=1/a,l=1/o,u=1/s;return Rt.elements[0]*=c,Rt.elements[1]*=c,Rt.elements[2]*=c,Rt.elements[4]*=l,Rt.elements[5]*=l,Rt.elements[6]*=l,Rt.elements[8]*=u,Rt.elements[9]*=u,Rt.elements[10]*=u,t.setFromRotationMatrix(Rt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lt=new U,Rt=new It,zt=new U(0,0,0),Bt=new U(1,1,1),Vt=new U,Ht=new U,Ut=new U,Wt=new It,Gt=new ft,Kt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gt.setFromEuler(this),this.setFromQuaternion(Gt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER=`XYZ`;var qt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Jt=0,Yt=new U,Xt=new ft,Zt=new It,Qt=new U,$t=new U,en=new U,tn=new ft,nn=new U(1,0,0),rn=new U(0,1,0),an=new U(0,0,1),on={type:`added`},sn={type:`removed`},cn={type:`childadded`,child:null},ln={type:`childremoved`,child:null},un=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Kt,r=new ft,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new ht}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xt.setFromAxisAngle(e,t),this.quaternion.multiply(Xt),this}rotateOnWorldAxis(e,t){return Xt.setFromAxisAngle(e,t),this.quaternion.premultiply(Xt),this}rotateX(e){return this.rotateOnAxis(nn,e)}rotateY(e){return this.rotateOnAxis(rn,e)}rotateZ(e){return this.rotateOnAxis(an,e)}translateOnAxis(e,t){return Yt.copy(e).applyQuaternion(this.quaternion),this.position.add(Yt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nn,e)}translateY(e){return this.translateOnAxis(rn,e)}translateZ(e){return this.translateOnAxis(an,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qt.copy(e):Qt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$t.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt($t,Qt,this.up):Zt.lookAt(Qt,$t,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Xt.setFromRotationMatrix(Zt),this.quaternion.premultiply(Xt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,e,en),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};un.DEFAULT_UP=new U(0,1,0),un.DEFAULT_MATRIX_AUTO_UPDATE=!0,un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var W=class extends un{constructor(){super(),this.isGroup=!0,this.type=`Group`}},dn={type:`move`},fn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new W,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new W,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new W,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new W;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},hn={h:0,s:0,l:0};function gn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=gn(i,r,e+1/3),this.g=gn(i,r,e),this.b=gn(i,r,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=pn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}copyLinearToSRGB(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return bt.workingToColorSpace(_n.copy(this),e),Math.round(at(_n.r*255,0,255))*65536+Math.round(at(_n.g*255,0,255))*256+Math.round(at(_n.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(_n.copy(this),t);let n=_n.r,r=_n.g,i=_n.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Le){bt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,r=_n.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(hn);let n=st(mn.h,hn.h,t),r=st(mn.s,hn.s,t),i=st(mn.l,hn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new G;G.NAMES=pn;var vn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},yn=class extends un{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new U,xn=new U,Sn=new U,Cn=new U,wn=new U,Tn=new U,En=new U,Dn=new U,On=new U,kn=new U,An=new jt,jn=new jt,Mn=new jt,Nn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){bn.subVectors(r,t),xn.subVectors(n,t),Sn.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(xn),s=bn.dot(Sn),c=xn.dot(xn),l=xn.dot(Sn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn)!==null&&Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Cn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Cn.x),s.addScaledVector(a,Cn.y),s.addScaledVector(o,Cn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return An.setScalar(0),jn.setScalar(0),Mn.setScalar(0),An.fromBufferAttribute(e,t),jn.fromBufferAttribute(e,n),Mn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(An,i.x),a.addScaledVector(jn,i.y),a.addScaledVector(Mn,i.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),xn.subVectors(e,t),bn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),bn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wn.subVectors(r,n),Tn.subVectors(i,n),Dn.subVectors(e,n);let s=wn.dot(Dn),c=Tn.dot(Dn);if(s<=0&&c<=0)return t.copy(n);On.subVectors(e,r);let l=wn.dot(On),u=Tn.dot(On);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(wn,a);kn.subVectors(e,i);let f=wn.dot(kn),p=Tn.dot(kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return En.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(En,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wn,a).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,In):In.fromBufferAttribute(r,t),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wn),Gn.subVectors(this.max,Wn),Rn.subVectors(e.a,Wn),zn.subVectors(e.b,Wn),Bn.subVectors(e.c,Wn),Vn.subVectors(zn,Rn),Hn.subVectors(Bn,zn),Un.subVectors(Rn,Bn);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-Un.z,Un.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,Un.z,0,-Un.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-Un.y,Un.x,0];return!Jn(t,Rn,zn,Bn,Gn)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Rn,zn,Bn,Gn))?!1:(Kn.crossVectors(Vn,Hn),t=[Kn.x,Kn.y,Kn.z],Jn(t,Rn,zn,Bn,Gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Ln=new Pn,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U,Kn=new U,qn=new U;function Jn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){qn.fromArray(e,a);let o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),s=t.dot(qn),c=n.dot(qn),l=r.dot(qn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Yn=new U,Xn=new H,Zn=0,Qn=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:lt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXY(t,Xn.x,Xn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix3(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.array):Math.round(e*t)}},$n=class extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},er=class extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},tr=class extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},nr=new Pn,rr=new U,ir=new U,ar=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?nr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ir)),this.expandByPoint(rr.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},or=0,sr=new It,cr=new un,lr=new U,ur=new Pn,dr=new Pn,fr=new U,pr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:or++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?er:$n)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new ht().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sr.makeRotationFromQuaternion(e),this.applyMatrix4(sr),this}rotateX(e){return sr.makeRotationX(e),this.applyMatrix4(sr),this}rotateY(e){return sr.makeRotationY(e),this.applyMatrix4(sr),this}rotateZ(e){return sr.makeRotationZ(e),this.applyMatrix4(sr),this}translate(e,t,n){return sr.makeTranslation(e,t,n),this.applyMatrix4(sr),this}scale(e,t,n){return sr.makeScale(e,t,n),this.applyMatrix4(sr),this}lookAt(e){return cr.lookAt(e),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(fr),fr.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(fr)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(ur.min,dr.min),ur.expandByPoint(fr),fr.addVectors(ur.max,dr.max),ur.expandByPoint(fr)):(ur.expandByPoint(dr.min),ur.expandByPoint(dr.max))}ur.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fr.fromBufferAttribute(a,t),o&&(lr.fromBufferAttribute(e,t),fr.add(lr)),r=Math.max(r,n.distanceToSquared(fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Qn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let l=new U,u=new U,d=new U,f=new H,p=new H,m=new H,h=new U,g=new U;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new U,b=new U,x=new U,S=new U;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fr.fromBufferAttribute(e,t),fr.normalize(),e.setXYZ(t,fr.x,fr.y,fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Qn(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ve,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function hr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=it()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var gr=new U,_r=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:lt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Qn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.data.array):Math.round(e*t)}},vr=new U,yr=new U,br=new ht,xr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vr.subVectors(n,t).cross(yr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||br.getNormalMatrix(e),r=this.coplanarPoint(vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sr=0,Cr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new xr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends Cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,Er=new U,Dr=new U,Or=new U,kr=new H,Ar=new H,jr=new It,Mr=new U,Nr=new U,Pr=new U,Fr=new H,Ir=new H,Lr=new H,Rr=class extends un{constructor(e=new wr){if(super(),this.isSprite=!0,this.type=`Sprite`,Tr===void 0){Tr=new pr;let e=new mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute(`position`,new _r(e,3,0,!1)),Tr.setAttribute(`uv`,new _r(e,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&V(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Dr.setFromMatrixScale(this.matrixWorld),jr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Or.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;zr(Mr.set(-.5,-.5,0),Or,a,Dr,r,i),zr(Nr.set(.5,-.5,0),Or,a,Dr,r,i),zr(Pr.set(.5,.5,0),Or,a,Dr,r,i),Fr.set(0,0),Ir.set(1,0),Lr.set(1,1);let o=e.ray.intersectTriangle(Mr,Nr,Pr,!1,Er);if(o===null&&(zr(Nr.set(-.5,.5,0),Or,a,Dr,r,i),Ir.set(0,1),o=e.ray.intersectTriangle(Mr,Pr,Nr,!1,Er),o===null))return;let s=e.ray.origin.distanceTo(Er);s<e.near||s>e.far||t.push({distance:s,point:Er.clone(),uv:Nn.getInterpolation(Er,Mr,Nr,Pr,Fr,Ir,Lr,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function zr(e,t,n,r,i,a){kr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ar.copy(kr):(Ar.x=a*kr.x-i*kr.y,Ar.y=i*kr.x+a*kr.y),e.copy(t),e.x+=Ar.x,e.y+=Ar.y,e.applyMatrix4(jr)}var Br=new U,Vr=new U,Hr=new U,Ur=new U,Wr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vr.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Vr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Ur.dot(this.direction),s=-Ur.dot(Hr),c=Ur.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Vr).addScaledVector(Hr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Br.subVectors(e.center,this.origin);let n=Br.dot(this.direction),r=Br.dot(Br)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,ne=E-ee*D,re=O-P*A,ie=k-ee*A,ae=j-P*N,oe=M-ee*N,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=F*(se*D+I*A+ce*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new It,qr=new Wr,Jr=new ar,Yr=new U,Xr=new U,Zr=new U,Qr=new U,$r=new U,ei=new U,ti=new U,ni=new U,K=class extends un{constructor(e=new pr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2)||(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),(n.boundingBox===null||qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ri(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new U;Nn.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=Nn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Nn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Nn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Nn.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends At{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends Qn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new It,ci=new It,li=[],ui=new Pn,di=new It,fi=new K,pi=new ar,mi=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new ar,gi=new H(.5,.5),_i=new U,vi=class{constructor(e=new xr,t=new xr,n=new xr,r=new xr,i=new xr,a=new xr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476+gi.distanceTo(e.center),hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=new It,bi=class e{constructor(){this.coordinateSystem=Ue,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new vi),n[e].setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new vi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},xi=class extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Si=new U,Ci=new U,wi=new It,Ti=new Wr,Ei=new ar,Di=new U,Oi=new U,ki=class extends un{constructor(e=new pr,t=new xi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Si.fromBufferAttribute(t,e-1),Ci.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Si.distanceTo(Ci);e.setAttribute(`lineDistance`,new tr(n,1))}else B(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere),Ei.applyMatrix4(r),Ei.radius+=i,e.ray.intersectsSphere(Ei)===!1)return;wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ai(this,e,Ti,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ai(this,e,Ti,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ai(this,e,Ti,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ai(this,e,Ti,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Si.fromBufferAttribute(s,i),Ci.fromBufferAttribute(s,a),n.distanceSqToSegment(Si,Ci,Di,Oi)>r)return;Di.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Di);if(!(c<t.near||c>t.far))return{distance:c,point:Oi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ji=new U,Mi=new U,Ni=class extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ji.fromBufferAttribute(t,e),Mi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ji.distanceTo(Mi);e.setAttribute(`lineDistance`,new tr(n,1))}else B(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Pi=class extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fi=new It,Ii=new Wr,Li=new ar,Ri=new U,zi=class extends un{constructor(e=new pr,t=new Pi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(r),Li.radius+=i,e.ray.intersectsSphere(Li)===!1)return;Fi.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Fi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ri.fromBufferAttribute(l,n),Bi(Ri,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ri.fromBufferAttribute(l,a),Bi(Ri,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Bi(e,t,n,r,i,a,o){let s=Ii.distanceSqToPoint(e);if(s<n){let n=new U;Ii.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vi=class extends At{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hi=class extends At{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class extends At{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Et(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wi=class extends Ui{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gi=class extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},q=class e extends pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ki=class e extends pr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new tr(o,3)),this.setAttribute(`normal`,new tr(s,3)),this.setAttribute(`uv`,new tr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},qi=class e extends pr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new tr(a,3)),this.setAttribute(`normal`,new tr(o,3)),this.setAttribute(`uv`,new tr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ji=class e extends pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new tr(u,3)),this.setAttribute(`normal`,new tr(d,3)),this.setAttribute(`uv`,new tr(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Ji{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class e extends pr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new tr(i,3)),this.setAttribute(`normal`,new tr(i.slice(),3)),this.setAttribute(`uv`,new tr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Zi=class e extends Xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Qi=new U,$i=new U,ea=new U,ta=new Nn,na=class extends pr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(nt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ta;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ta.getNormal(ea),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ta[c[e]],o=ta[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(ea.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:ea.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;Qi.fromBufferAttribute(a,t),$i.fromBufferAttribute(a,n),d.push(Qi.x,Qi.y,Qi.z),d.push($i.x,$i.y,$i.z)}this.setAttribute(`position`,new tr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ra=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new It;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(at(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(at(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ia=class extends ra{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},aa=class extends ia{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function oa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var sa=new U,ca=new U,la=new oa,ua=new oa,da=new oa,fa=class extends ra{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ca.subVectors(r[0],r[1]).add(r[0]),c=ca);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(sa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=sa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),la.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ua.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),da.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(la.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ua.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),da.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(la.calc(s),ua.calc(s),da.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ma(e,t){let n=1-e;return n*n*t}function ha(e,t){return 2*(1-e)*e*t}function ga(e,t){return e*e*t}function _a(e,t,n,r){return ma(e,t)+ha(e,n)+ga(e,r)}function va(e,t){let n=1-e;return n*n*n*t}function ya(e,t){let n=1-e;return 3*n*n*e*t}function ba(e,t){return 3*(1-e)*e*e*t}function xa(e,t){return e*e*e*t}function Sa(e,t,n,r,i){return va(e,t)+ya(e,n)+ba(e,r)+xa(e,i)}var Ca=class extends ra{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Sa(e,r.x,i.x,a.x,o.x),Sa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wa=class extends ra{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Sa(e,r.x,i.x,a.x,o.x),Sa(e,r.y,i.y,a.y,o.y),Sa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ta=class extends ra{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends ra{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends ra{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(_a(e,r.x,i.x,a.x),_a(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends ra{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(_a(e,r.x,i.x,a.x),_a(e,r.y,i.y,a.y),_a(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends ra{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(pa(o,s.x,c.x,l.x,u.x),pa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:fa,CubicBezierCurve:Ca,CubicBezierCurve3:wa,EllipseCurve:ia,LineCurve:Ta,LineCurve3:Ea,QuadraticBezierCurve:Da,QuadraticBezierCurve3:Oa,SplineCurve:ka}),ja=class extends ra{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Aa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ma=class extends ja{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ta(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Da(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ca(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ka([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ia(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Na=class extends Ma{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ma().fromJSON(n))}return this}};function Pa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Fa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ha(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return La(a,o,n,s,c,l,0),o}function Fa(e,t,n,r,i){let a;if(i===po(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=lo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=lo(i/r|0,e[i],e[i+1],a);return a&&to(a,a.next)&&(uo(a),a=a.next),a}function Ia(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(to(n,n.next)||eo(n.prev,n,n.next)===0)){if(uo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function La(e,t,n,r,i,a,o){if(!e)return;!o&&a&&qa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?za(e,r,i,a):Ra(e))t.push(c.i,e.i,l.i),uo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ba(Ia(e),t),La(e,t,n,r,i,a,2)):o===2&&Va(e,t,n,r,i,a):La(Ia(e),t,n,r,i,a,1);break}}}function Ra(e){let t=e.prev,n=e,r=e.next;if(eo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Qa(i,s,a,c,o,l,m.x,m.y)&&eo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function za(e,t,n,r){let i=e.prev,a=e,o=e.next;if(eo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ya(p,m,t,n,r),v=Ya(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qa(s,u,c,d,l,f,y.x,y.y)&&eo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Qa(s,u,c,d,l,f,b.x,b.y)&&eo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Qa(s,u,c,d,l,f,y.x,y.y)&&eo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Qa(s,u,c,d,l,f,b.x,b.y)&&eo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ba(e,t){let n=e;do{let r=n.prev,i=n.next.next;!to(r,i)&&no(r,n,n.next,i)&&oo(r,i)&&oo(i,r)&&(t.push(r.i,n.i,i.i),uo(n),uo(n.next),n=e=i),n=n.next}while(n!==e);return Ia(n)}function Va(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&$a(o,e)){let s=co(o,e);o=Ia(o,o.next),s=Ia(s,s.next),La(o,t,n,r,i,a,0),La(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ha(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Fa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Xa(o))}i.sort(Ua);for(let e=0;e<i.length;e++)n=Wa(i[e],n);return n}function Ua(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Wa(e,t){let n=Ga(e,t);if(!n)return t;let r=co(n,e);return Ia(r,r.next),Ia(n,n.next)}function Ga(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(to(e,n))return n;do{if(to(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Za(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);oo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ka(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ka(e,t){return eo(e.prev,e,t.prev)<0&&eo(t.next,e,e.next)<0}function qa(e,t,n,r){let i=e;do i.z===0&&(i.z=Ya(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ja(i)}function Ja(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ya(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Xa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Za(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Qa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Za(e,t,n,r,i,a,o,s)}function $a(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ao(e,t)&&(oo(e,t)&&oo(t,e)&&so(e,t)&&(eo(e.prev,e,t.prev)||eo(e,t.prev,t))||to(e,t)&&eo(e.prev,e,e.next)>0&&eo(t.prev,t,t.next)>0)}function eo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function to(e,t){return e.x===t.x&&e.y===t.y}function no(e,t,n,r){let i=io(eo(e,t,n)),a=io(eo(e,t,r)),o=io(eo(n,r,e)),s=io(eo(n,r,t));return!!(i!==a&&o!==s||i===0&&ro(e,n,t)||a===0&&ro(e,r,t)||o===0&&ro(n,e,r)||s===0&&ro(n,t,r))}function ro(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function io(e){return e>0?1:e<0?-1:0}function ao(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&no(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function oo(e,t){return eo(e.prev,e,e.next)<0?eo(e,t,e.next)>=0&&eo(e,e.prev,t)>=0:eo(e,t,e.prev)<0||eo(e,e.next,t)<0}function so(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function co(e,t){let n=fo(e.i,e.x,e.y),r=fo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function lo(e,t,n,r){let i=fo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function uo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function fo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function po(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var mo=class{static triangulate(e,t,n=2){return Pa(e,t,n)}},ho=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];go(e),_o(n,e);let a=e.length;t.forEach(go);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,_o(n,t[e]);let o=mo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function go(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function _o(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var vo=class e extends pr{constructor(e=new Na([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new tr(r,3)),this.setAttribute(`uv`,new tr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?yo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ho.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ho.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let ee;if(p===0)ee=ho.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ee=ho.triangulateShape(e,t)}let F=ee.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=ee[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=ee[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=ee[e];oe(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=ee[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Aa[i.type]().fromJSON(i)),new e(r,t.options)}},yo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function bo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var xo=class e extends Xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},So=class e extends Xi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Co=class e extends pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},wo=class e extends pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},To=class e extends pr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Eo=class e extends pr{constructor(e=new Oa(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,s=new U,c=new H,l=new U,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new tr(u,3)),this.setAttribute(`normal`,new tr(d,3)),this.setAttribute(`uv`,new tr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Do=class extends pr{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new U,i=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),Oo(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),Oo(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new tr(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Oo(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function ko(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(jo(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(jo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ao(e){let t={};for(let n=0;n<e.length;n++){let r=ko(e[n]);for(let e in r)t[e]=r[e]}return t}function jo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Mo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function No(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}var Po={clone:ko,merge:Ao},Fo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Io=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lo=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fo,this.fragmentShader=Io,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=Mo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new ht().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new It().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends Lo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},zo=class extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bo=class extends zo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ze(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ze(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Vo=class extends Cr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ho=class extends Cr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ie,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Go(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ko(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Jo=class extends qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case R:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case R:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends qo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=es(n,t,g,y,r);i[p]=Qo(x,o,_,b,m)}return i}};function Qo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function $o(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function es(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Qo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=$o(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ts=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ko(e.settings)&&(n.settings={inTangents:Go(e.settings.inTangents,Array),outTangents:Go(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case Me:t=this.InterpolantFactoryMethodLinear;break;case L:t=this.InterpolantFactoryMethodSmooth;break;case Ne:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return Me;case this.InterpolantFactoryMethodSmooth:return L;case this.InterpolantFactoryMethodBezier:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ko(this.settings)&&(ns(this.settings.inTangents,e),ns(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ko(this.settings)&&(rs(this.settings.inTangents,e),rs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===L,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ko(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ns(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function rs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ts.prototype.ValueTypeName=``,ts.prototype.TimeBufferType=Float32Array,ts.prototype.ValueBufferType=Float32Array,ts.prototype.DefaultInterpolation=Me;var is=class extends ts{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName=`bool`,is.prototype.ValueBufferType=Array,is.prototype.DefaultInterpolation=je,is.prototype.InterpolantFactoryMethodLinear=void 0,is.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`color`;var os=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};os.prototype.ValueTypeName=`number`;var ss=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},cs=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ss(this.times,this.values,this.getValueSize(),e)}};cs.prototype.ValueTypeName=`quaternion`,cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends ts{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName=`string`,ls.prototype.ValueBufferType=Array,ls.prototype.DefaultInterpolation=je,ls.prototype.InterpolantFactoryMethodLinear=void 0,ls.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};us.prototype.ValueTypeName=`vector`;var ds=class extends un{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fs=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ps=new It,ms=new U,hs=new U,gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ms.setFromMatrixPosition(e.matrixWorld),t.position.copy(ms),hs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ps.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ps,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_s=new U,vs=new ft,ys=new U,bs=class extends un{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_s,vs,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,ys.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_s,vs,ys),ys.x===1&&ys.y===1&&ys.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_s,vs,ys.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new U,Ss=new H,Cs=new H,ws=class extends bs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Ss,Cs),t.subVectors(Cs,Ss)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=class extends gs{constructor(){super(new ws(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends ds{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ts}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ds=class extends bs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Os=class extends gs{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Os}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},As=-90,js=1,Ms=class extends un{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ws(As,js,e,t);r.layers=this.layers,this.add(r);let i=new ws(As,js,e,t);i.layers=this.layers,this.add(i);let a=new ws(As,js,e,t);a.layers=this.layers,this.add(a);let o=new ws(As,js,e,t);o.layers=this.layers,this.add(o);let s=new ws(As,js,e,t);s.layers=this.layers,this.add(s);let c=new ws(As,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ns=class extends ws{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ps=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Fs(){this._document.hidden===!1&&this.reset()}var Is=`\\[\\]\\.:\\/`,Ls=RegExp(`[\\[\\]\\.:\\/]`,`g`),Rs=`[^\\[\\]\\.:\\/]`,zs=`[^`+Is.replace(`\\.`,``)+`]`,Bs=`((?:WC+[\\/:])*)`.replace(`WC`,Rs),Vs=`(WCOD+)?`.replace(`WCOD`,zs),Hs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Rs),Us=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Rs),Ws=RegExp(`^`+Bs+Vs+Hs+Us+`$`),Gs=[`material`,`materials`,`bones`,`map`],Ks=class{constructor(e,t,n){let r=n||qs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ls,``)}static parseTrackName(e){let t=Ws.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Gs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qs.Composite=Ks,qs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qs.prototype.GetterByBindingType=[qs.prototype._getValue_direct,qs.prototype._getValue_array,qs.prototype._getValue_arrayElement,qs.prototype._getValue_toArray],qs.prototype.SetterByBindingTypeAndVersioning=[[qs.prototype._setValue_direct,qs.prototype._setValue_direct_setNeedsUpdate,qs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_array,qs.prototype._setValue_array_setNeedsUpdate,qs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_arrayElement,qs.prototype._setValue_arrayElement_setNeedsUpdate,qs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qs.prototype._setValue_fromArray,qs.prototype._setValue_fromArray_setNeedsUpdate,qs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Js=new It,Ys=class{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Js.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Js),this}intersectObject(e,t=!0,n=[]){return Zs(e,this,n,t),n.sort(Xs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Zs(e[r],this,n,t);return n.sort(Xs),n}};function Xs(e,t){return e.distance-t.distance}function Zs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Zs(r[e],t,n,!0)}}var Qs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,B(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},$s=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=at(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ec=class extends Ni{constructor(e=10,t=10,n=4473924,r=8947848){n=new G(n),r=new G(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new pr;l.setAttribute(`position`,new tr(s,3)),l.setAttribute(`color`,new tr(c,3));let u=new xi({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function tc(e,t,n,r){let i=nc(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case F:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function nc(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function rc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ic(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ac={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},J={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},oc={basic:{uniforms:Ao([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:ac.meshbasic_vert,fragmentShader:ac.meshbasic_frag},lambert:{uniforms:Ao([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:ac.meshlambert_vert,fragmentShader:ac.meshlambert_frag},phong:{uniforms:Ao([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ac.meshphong_vert,fragmentShader:ac.meshphong_frag},standard:{uniforms:Ao([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ac.meshphysical_vert,fragmentShader:ac.meshphysical_frag},toon:{uniforms:Ao([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new G(0)}}]),vertexShader:ac.meshtoon_vert,fragmentShader:ac.meshtoon_frag},matcap:{uniforms:Ao([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:ac.meshmatcap_vert,fragmentShader:ac.meshmatcap_frag},points:{uniforms:Ao([J.points,J.fog]),vertexShader:ac.points_vert,fragmentShader:ac.points_frag},dashed:{uniforms:Ao([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ac.linedashed_vert,fragmentShader:ac.linedashed_frag},depth:{uniforms:Ao([J.common,J.displacementmap]),vertexShader:ac.depth_vert,fragmentShader:ac.depth_frag},normal:{uniforms:Ao([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:ac.meshnormal_vert,fragmentShader:ac.meshnormal_frag},sprite:{uniforms:Ao([J.sprite,J.fog]),vertexShader:ac.sprite_vert,fragmentShader:ac.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ac.background_vert,fragmentShader:ac.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ac.backgroundCube_vert,fragmentShader:ac.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ac.cube_vert,fragmentShader:ac.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ac.equirect_vert,fragmentShader:ac.equirect_frag},distance:{uniforms:Ao([J.common,J.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ac.distance_vert,fragmentShader:ac.distance_frag},shadow:{uniforms:Ao([J.lights,J.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:ac.shadow_vert,fragmentShader:ac.shadow_frag}};oc.physical={uniforms:Ao([oc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ac.meshphysical_vert,fragmentShader:ac.meshphysical_frag};var sc={r:0,b:0,g:0},cc=new It,lc=new ht;lc.set(-1,0,0,0,1,0,0,0,1);function uc(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new K(new q(1,1,1),new Lo({name:`BackgroundCubeMaterial`,uniforms:ko(oc.backgroundCube.uniforms),vertexShader:oc.backgroundCube.vertexShader,fragmentShader:oc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lc),l.material.toneMapped=bt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Co(2,2),new Lo({name:`BackgroundMaterial`,uniforms:ko(oc.background.uniforms),vertexShader:oc.background.vertexShader,fragmentShader:oc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=bt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(sc,No(e)),n.buffers.color.setClear(sc.r,sc.g,sc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function dc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function fc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function pc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function mc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xr,s=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var hc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new q(5,5,5),i=new Lo({name:`CubemapFromEquirect`,uniforms:ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ms(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},gc=256,_c=3,vc=20,yc=256,bc=16,xc=3,Sc=new U,Cc=new G,wc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ms(1,10,null),this._boxMesh=new K(new q(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Sc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Cc));let h=new Ms(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gc,ct(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?gc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Tc(e,!1,!1),n=Math.log2(e)-_c;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ac()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dc(),this._integrationMaterial=Oc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/bc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-xc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(yc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Tc(e,t,n){return new hc(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:z,depthBuffer:n})}function Ec(e,t,n){return new Lo({name:e,uniforms:t,vertexShader:ac.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Dc(){return Ec(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yc}u

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
	`)}function Oc(){return Ec(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bc}},`

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
	`)}function kc(){return Ec(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vc}
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
	`)}function Ac(){return Ec(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function jc(){return Ec(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new hc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new wc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new wc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Nc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Pc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?er:$n)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Fc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ic(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Lc(e,t,n){let r=new WeakMap,i=new jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Pt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Rc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var zc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Bc(e,t,n,r,i,a){let o=new Nt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new pr;u.setAttribute(`position`,new tr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new tr([0,2,0,0,2,0],2));let d=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new K(u,d),p=new Ds(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Nt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Nt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ui(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},bt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=zc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Vc=new At,Hc=new Ui(1,1),Uc=new Wi(1),Wc=new Pt,Gc=new Ft,Kc=new Vi,qc=[],Jc=[],Yc=new Float32Array(16),Xc=new Float32Array(9),Zc=new Float32Array(4);function Qc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=qc[i];if(a===void 0&&(a=new Float32Array(i),qc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function $c(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function el(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function tl(e,t){let n=Jc[t];n===void 0&&(n=new Int32Array(t),Jc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function nl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($c(n,t))return;e.uniform2fv(this.addr,t),el(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($c(n,t))return;e.uniform3fv(this.addr,t),el(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($c(n,t))return;e.uniform4fv(this.addr,t),el(n,t)}}function ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($c(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),el(n,t)}else{if($c(n,r))return;Zc.set(r),e.uniformMatrix2fv(this.addr,!1,Zc),el(n,r)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($c(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),el(n,t)}else{if($c(n,r))return;Xc.set(r),e.uniformMatrix3fv(this.addr,!1,Xc),el(n,r)}}function cl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($c(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),el(n,t)}else{if($c(n,r))return;Yc.set(r),e.uniformMatrix4fv(this.addr,!1,Yc),el(n,r)}}function ll(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($c(n,t))return;e.uniform2iv(this.addr,t),el(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($c(n,t))return;e.uniform3iv(this.addr,t),el(n,t)}}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($c(n,t))return;e.uniform4iv(this.addr,t),el(n,t)}}function pl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($c(n,t))return;e.uniform2uiv(this.addr,t),el(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($c(n,t))return;e.uniform3uiv(this.addr,t),el(n,t)}}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($c(n,t))return;e.uniform4uiv(this.addr,t),el(n,t)}}function _l(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?_l(Hc):Vc,n.setTexture2D(t||a,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Gc,i)}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?_l(Uc):Kc,n.setTextureCube(t||a,i)}function xl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Wc,i)}function Sl(e){switch(e){case 5126:return nl;case 35664:return rl;case 35665:return il;case 35666:return al;case 35674:return ol;case 35675:return sl;case 35676:return cl;case 5124:case 35670:return ll;case 35667:case 35671:return ul;case 35668:case 35672:return dl;case 35669:case 35673:return fl;case 5125:return pl;case 36294:return ml;case 36295:return hl;case 36296:return gl;case 35678:case 36198:case 36298:case 36306:case 35682:return vl;case 35679:case 36299:case 36307:return yl;case 35680:case 36300:case 36308:case 36293:return bl;case 36289:case 36303:case 36311:case 36292:return xl}}function Cl(e,t){e.uniform1fv(this.addr,t)}function wl(e,t){let n=Qc(t,this.size,2);e.uniform2fv(this.addr,n)}function Tl(e,t){let n=Qc(t,this.size,3);e.uniform3fv(this.addr,n)}function El(e,t){let n=Qc(t,this.size,4);e.uniform4fv(this.addr,n)}function Dl(e,t){let n=Qc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ol(e,t){let n=Qc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kl(e,t){let n=Qc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Al(e,t){e.uniform1iv(this.addr,t)}function jl(e,t){e.uniform2iv(this.addr,t)}function Ml(e,t){e.uniform3iv(this.addr,t)}function Nl(e,t){e.uniform4iv(this.addr,t)}function Pl(e,t){e.uniform1uiv(this.addr,t)}function Fl(e,t){e.uniform2uiv(this.addr,t)}function Il(e,t){e.uniform3uiv(this.addr,t)}function Ll(e,t){e.uniform4uiv(this.addr,t)}function Rl(e,t,n){let r=this.cache,i=t.length,a=tl(n,i);$c(r,a)||(e.uniform1iv(this.addr,a),el(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?_l(Hc):Vc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=tl(n,i);$c(r,a)||(e.uniform1iv(this.addr,a),el(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Gc,a[e])}function Bl(e,t,n){let r=this.cache,i=t.length,a=tl(n,i);$c(r,a)||(e.uniform1iv(this.addr,a),el(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?_l(Uc):Kc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Vl(e,t,n){let r=this.cache,i=t.length,a=tl(n,i);$c(r,a)||(e.uniform1iv(this.addr,a),el(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Wc,a[e])}function Hl(e){switch(e){case 5126:return Cl;case 35664:return wl;case 35665:return Tl;case 35666:return El;case 35674:return Dl;case 35675:return Ol;case 35676:return kl;case 5124:case 35670:return Al;case 35667:case 35671:return jl;case 35668:case 35672:return Ml;case 35669:case 35673:return Nl;case 5125:return Pl;case 36294:return Fl;case 36295:return Il;case 36296:return Ll;case 35678:case 36198:case 36298:case 36306:case 35682:return Rl;case 35679:case 36299:case 36307:return zl;case 35680:case 36300:case 36308:case 36293:return Bl;case 36289:case 36303:case 36311:case 36292:return Vl}}var Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sl(t.type)}},Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hl(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function ql(e,t){e.seq.push(t),e.map[t.id]=t}function Jl(e,t,n){let r=e.name,i=r.length;for(Kl.lastIndex=0;;){let a=Kl.exec(r),o=Kl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ql(n,l===void 0?new Ul(s,e,t):new Wl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Gl(s),ql(n,e)),n=e}}}var Yl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Jl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Xl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Zl=37297,Ql=0;function $l(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var eu=new ht;function tu(e){bt._getMatrix(eu,bt.workingColorSpace,e);let t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(bt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function nu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+$l(e.getShaderSource(t),r)}return i}function ru(e,t){let n=tu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var iu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function au(e,t){let n=iu[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ou=new U;function su(){return bt.getLuminanceCoefficients(ou),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ou.x.toFixed(4)}, ${ou.y.toFixed(4)}, ${ou.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function cu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(du).join(`
`)}function lu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function uu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function du(e){return e!==``}function fu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mu=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(e){return e.replace(mu,gu)}function gu(e,t){let n=ac[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return hu(n)}var _u=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(e){return e.replace(_u,yu)}function yu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function bu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var xu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Su(e){return xu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Cu={302:`ENVMAP_MODE_REFRACTION`};function wu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Cu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Tu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Eu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Tu[e.combine]||`ENVMAP_BLENDING_NONE`}function Du(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Su(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=wu(n),d=Eu(n),f=cu(n),p=lu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(du).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(du).join(`
`),g.length>0&&(g+=`
`)):(h=[bu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(du).join(`
`),g=[bu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ac.tonemapping_pars_fragment,n.toneMapping===0?``:au(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ac.colorspace_pars_fragment,ru(`linearToOutputTexel`,n.outputColorSpace),su(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(du).join(`
`)),o=hu(o),o=fu(o,n),o=pu(o,n),s=hu(s),s=fu(s,n),s=pu(s,n),o=vu(o),s=vu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Xl(i,i.VERTEX_SHADER,v),x=Xl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=nu(i,b,`vertex`),n=nu(i,x,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Yl(i,m),w=uu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Zl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ql++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Ou=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Au(e),t.set(e,n)),n}},Au=class{constructor(e){this.id=Ou++,this.code=e,this.usedTimes=0}};function ju(e){return e===1030||e===37490||e===36285}function Mu(e,t,n,r,i,a){let o=new qt,s=new ku,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=oc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.diffuseRoughness>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=le&&!!i.anisotropyMap,ve=ue&&!!i.clearcoatMap,ye=ue&&!!i.clearcoatNormalMap,be=ue&&!!i.clearcoatRoughnessMap,xe=de&&!!i.diffuseRoughnessMap,Se=me&&!!i.iridescenceMap,Ce=me&&!!i.iridescenceThicknessMap,we=he&&!!i.sheenColorMap,Te=he&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ge&&!!i.transmissionMap,Ae=ge&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,L=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let R=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ie={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?R.length-1:null,envMapSize:te?R[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&ju(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,diffuseRoughness:de,diffuseRoughnessMap:xe,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:he,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:ge,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:L,alphaHash:Ne,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:ae&&p(i.normalMap.channel),displacementMapUv:oe&&p(i.displacementMap.channel),emissiveMapUv:se&&p(i.emissiveMap.channel),metalnessMapUv:I&&p(i.metalnessMap.channel),roughnessMapUv:ce&&p(i.roughnessMap.channel),anisotropyMapUv:_e&&p(i.anisotropyMap.channel),clearcoatMapUv:ve&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(i.sheenRoughnessMap.channel),specularMapUv:Ee&&p(i.specularMap.channel),specularColorMapUv:De&&p(i.specularColorMap.channel),specularIntensityMapUv:Oe&&p(i.specularIntensityMap.channel),transmissionMapUv:ke&&p(i.transmissionMap.channel),thicknessMapUv:Ae&&p(i.thicknessMap.channel),alphaMapUv:Me&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ae||le),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Me),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=oc[t];n=Po.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Du(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Nu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Iu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Pu),r.length>1&&r.sort(t||Fu),i.length>1&&i.sort(t||Fu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Lu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Iu,e.set(t,[i])):n>=r.length?(i=new Iu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ru(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function zu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Bu=0;function Vu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hu(e){let t=new Ru,n=zu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new It,o=new It;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Vu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Bu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Uu(e){let t=new Hu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Wu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Uu(e),t.set(n,[a])):r>=i.length?(a=new Uu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ku=`uniform sampler2D shadow_pass;
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
}`,qu=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ju=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Yu=new It,Xu=new U,Zu=new U;function Qu(e,t,n){let i=new vi,a=new H,s=new H,c=new jt,l=new Uo,u=new Wo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Lo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Gu,fragmentShader:Ku}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new pr;y.setAttribute(`position`,new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Nt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ui(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new hc(a.x),p.map.depthTexture=new Wi(a.x,m)):(p.map=new Nt(a.x,a.y),p.map.depthTexture=new Ui(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Xu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Xu),Zu.copy(e.position),Zu.add(qu[t]),e.up.copy(Ju[t]),e.lookAt(Zu),e.updateMatrixWorld(),n.makeTranslation(-Xu.x,-Xu.y,-Xu.z),Yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Yu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Nt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function $u(e,t){function n(){let t=!1,n=new jt,r=null,i=new jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new jt().fromArray(ne),ae=new jt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ce(e.BLEND),g=!1);else if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function Se(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function R(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Le(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:Me,texImage3D:L,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Fe,viewport:R,reset:z}}function ed(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ke(`canvas`)}function O(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:bt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function N(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function te(e){re(e.target)}function ne(e){ie(e.target)}function re(e){e.removeEventListener(`dispose`,te),F(e),oe(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ie(e){e.removeEventListener(`dispose`,ne),F(e),I(e)}function ae(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ie(t):re(t))}C.clear(),b.clear()}function oe(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&se(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function se(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function I(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&re(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let ce=0;function le(){ce=0}function ue(){return ce}function de(e){ce=e}function fe(){let e=ce;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ce+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function me(e,t){let n=f.get(e);if(e.isVideoTexture&&Ie(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Te(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Te(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ge(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Te(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Ee(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ve={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ye={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},be={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function xe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ve[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ve[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ve[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ye[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ye[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,be[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function Se(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te),ee(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=pe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&se(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function we(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Ce(r.start,t.width,4),c=Ce(n.start,t.width,4);r.start<=o+1&&s===c&&Ce(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Te(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Se(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=bt.getPrimaries(bt.workingColorSpace),n=t.colorSpace===``?null:bt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Le(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);xe(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=P(t,e);if(t.isDepthTexture)u=N(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&we(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=tc(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=tc(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=z(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=z(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ee(e,t,n){if(t.image.length!==6)return;let r=Se(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=bt.getPrimaries(bt.workingColorSpace),o=t.colorSpace===``?null:bt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Le(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=P(t,h);xe(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=N(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=z(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function De(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Fe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=N(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;R(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);R(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ke(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?_e(t.depthTexture,0):me(t.depthTexture,0);let o=i.__webglTexture,s=Fe(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ae(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)ke(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?ke(t.__webglFramebuffer[0],e,0):ke(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Oe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Oe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function je(e,t,n){let r=f.get(e);t!==void 0&&De(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ae(e)}function Me(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ne),ee(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&R(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Fe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Oe(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),xe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)De(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else De(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),xe(o,r),De(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),xe(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)De(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else De(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Ae(e)}function L(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Ne=[];function Pe(e){if(e.samples>0){if(R(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ne.length=0,Ne.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Ne.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ne))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function R(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ie(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=fe,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=je,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=R,this.dispose=ae}function td(e,t){function n(n,r=``){let i,a=bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var nd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rd=`
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

}`,id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lo({vertexShader:nd,fragmentShader:rd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Co(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ad=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new id,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=null,j=new ws;j.viewport=new jt;let M=new ws;M.viewport=new jt;let N=[j,M],P=new Ns,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ee=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,I.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Nt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ui(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Nt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ie(P,i);for(let e=0;e<a.length;e++)ie(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,P,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let oe=null;function se(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new ws,o.layers.enable(n),o.viewport=new jt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Gi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let I=new rc;I.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},od=new It,sd=new ht;sd.set(-1,0,0,0,1,0,0,0,1);function cd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,No(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(od.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(sd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ld(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ud=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dd=null;function fd(){return dd===null&&(dd=new ai(ud,16,16,k,g),dd.name=`DFG_LUT`,dd.minFilter=o,dd.magFilter=o,dd.wrapS=t,dd.wrapT=t,dd.generateMipmaps=!1,dd.needsUpdate=!0),dd}var pd=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,N=[],P=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Le;let oe=0,se=0,I=null,ce=-1,le=null,ue=new jt,de=new jt,fe=null,pe=new G(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new jt(0,0,he,ge),xe=new jt(0,0,he,ge),Se=!1,Ce=new vi,we=new bi,Te=!1,Ee=!1,De=new It,Oe=new U,ke=new jt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return I===null?_e:1}let L=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,R,Ie,z,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),L===null){let t=`webgl2`;if(L=Ne(t,e),L===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),V(`WebGLRenderer: `+e.message),e}function ot(){Pe=new Nc(L),Pe.init(),rt=new td(L,Pe),Fe=new pc(L,Pe,e,rt),R=new $u(L,Pe),Fe.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),re=L.createFramebuffer(),ie=L.createFramebuffer(),ae=L.createFramebuffer(),Ie=new Ic(L),z=new Nu,Re=new ed(L,Pe,R,z,Fe,rt,Ie),ze=new Mc(F),Be=new ic(L),it=new dc(L,Be),Ve=new Pc(L,Be,Ie,it),He=new Rc(L,Ve,Be,it,Ie),et=new Lc(L,Fe,Re),Xe=new mc(z),We=new Mu(F,ze,Pe,Fe,it,Xe),Ge=new cd(F,z),Ke=new Lu,Je=new Wu(Pe),$e=new uc(F,ze,R,He,x,s),Ze=new Qu(F,He,Fe),at=new ld(L,Ie,Fe,R),tt=new fc(L,Pe,Ie),nt=new Fc(L,Pe,Ie),Ie.programs=We.programs,F.capabilities=Fe,F.extensions=Pe,F.properties=z,F.renderLists=Ke,F.shadowMap=Ze,F.state=R,F.info=Ie}S!==1009&&(ee=new Bc(S,t.width,t.height,o,r,i));let st=new ad(F,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){st.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(Me()).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(Me()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),Ke.dispose(),Je.dispose(),Re.dispose(),z.dispose(),ze.dispose(),He.dispose(),Ve.dispose(),it.dispose(),at.dispose(),We.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,gt),st.removeEventListener(`sessionend`,_t),vt.stop()};function ct(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),te=!0}function lt(){Ye(`WebGLRenderer: Context Restored.`),te=!1;let e=Ie.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Ie.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ut(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),H(t)}function H(e){ft(e),z.remove(e)}function ft(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*Me()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),Te===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),M=Je.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),ne!==null&&ne.updateLights(M.state.lightsArray),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),Te===!0&&Xe.setGlobalState(this.clippingPlanes,t),ne!==null&&Ze.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),M=P.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new rc;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,st.setAnimationLoop(e),e===null?vt.stop():vt.start()},st.addEventListener(`sessionstart`,gt),st.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=ee!==null&&(I===null||n)&&ee.begin(F,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,I),M=Je.get(e,P.length),M.init(t),M.state.textureUnits=Re.getTextureUnits(),P.push(M),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?we.setFromArrayCamera(t):Ce.setFromProjectionMatrix(De,Ue,t.reversedDepth),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),k=Ke.get(e,N.length),k.init(),N.push(k),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,F.sortObjects)}yt(e,t,0,F.sortObjects),k.finish(),ne!==null&&ne.updateLights(M.state.lightsArray),F.sortObjects===!0&&k.sort(ve,ye),je=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,je&&$e.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Te===!0&&Xe.beginShadows();let i=M.state.shadowsArray;if(Ze.render(i,e,t),Te===!0&&Xe.endShadows(),(r&&ee.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),je&&$e.render(e),xt(k,e,t)}I!==null&&se===0&&(Re.updateMultisampleRenderTarget(I),Re.updateRenderTargetMipmap(I)),r&&ee.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),it.resetDefaultState(),ce=-1,le=null,P.pop(),P.length>0?(M=P[P.length-1],Re.setTextureUnits(M.state.textureUnits),Te===!0&&Xe.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,ne!==null&&ne.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=He.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),Te===!0&&Xe.setGlobalState(F.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Nt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(pe),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),je&&$e.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),Te===!0&&Xe.setGlobalState(F.clippingPlanes,r),Ct(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(pe,me),p!==void 0&&(r.viewport=p),F.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function Tt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=Ae);let r=z.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,F),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),kt(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Tt(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=z.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Yl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=M.state.lights;if(Te===!0&&(Ee===!0||e!==le)){let t=e===le&&r.id===ce;Xe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Tt(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Dt(r,t,i,s,h):Et(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(R.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ce&&(ce=r.id,w=!0),C||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(L,`projectionMatrix`,e.projectionMatrix),E.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(L,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&E.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&E.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&E.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&E.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){E.setOptional(L,i,`bindMatrix`),E.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(L,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(E.setOptional(L,i,`batchingTexture`),E.setValue(L,`batchingTexture`,i._matricesTexture,Re),E.setOptional(L,i,`batchingIdTexture`),E.setValue(L,`batchingIdTexture`,i._indirectTexture,Re),E.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(L,`batchingColorTexture`,i._colorsTexture,Re));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&et.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=fd()),w){if(E.setValue(L,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Mt(O,T),a&&r.fog===!0&&Ge.refreshFogUniforms(O,a),Ge.refreshMaterialUniforms(O,r,_e,ge,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Yl.upload(L,Ot(v),O,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Yl.upload(L,Ot(v),O,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(L,`center`,i.center),E.setValue(L,`modelViewMatrix`,i.modelViewMatrix),E.setValue(L,`normalMatrix`,i.normalMatrix),E.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,S),at.bind(n,S)}}return S}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=re),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function Ft(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qe(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ie),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,R.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};function md(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function hd(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var gd={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},_d={duration:.5,overwrite:!1,delay:0},vd,yd,bd,xd=1e8,Sd=1/xd,Cd=Math.PI*2,wd=Cd/4,Td=0,Ed=Math.sqrt,Dd=Math.cos,Od=Math.sin,kd=function(e){return typeof e==`string`},Ad=function(e){return typeof e==`function`},jd=function(e){return typeof e==`number`},Md=function(e){return e===void 0},Nd=function(e){return typeof e==`object`},Pd=function(e){return e!==!1},Fd=function(){return typeof window<`u`},Id=function(e){return Ad(e)||kd(e)},Ld=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Rd=Array.isArray,zd=/random\([^)]+\)/g,Bd=/,\s*/g,Vd=/(?:-?\.?\d|\.)+/gi,Hd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ud=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gd=/[+-]=-?[.\d]+/,Kd=/[^,'"\[\]\s]+/gi,qd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jd,Yd,Xd,Zd,Qd={},$d={},ef,tf=function(e){return($d=Pf(e,Qd))&&$m},nf=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},rf=function(e,t){return!t&&console.warn(e)},af=function(e,t){return e&&(Qd[e]=t)&&$d&&($d[e]=t)||Qd},of=function(){return 0},sf={suppressEvents:!0,isStart:!0,kill:!1},cf={suppressEvents:!0,kill:!1},lf={suppressEvents:!0},uf={},df=[],ff={},pf,mf={},hf={},gf=30,_f=[],vf=``,yf=function(e){var t=e[0],n,r;if(Nd(t)||Ad(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=_f.length;r--&&!_f[r].targetTest(t););n=_f[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new lm(e[r],n)))||e.splice(r,1);return e},bf=function(e){return e._gsap||yf(_p(e))[0]._gsap},xf=function(e,t,n){return(n=e[t])&&Ad(n)?e[t]():Md(n)&&e.getAttribute&&e.getAttribute(t)||n},Sf=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Cf=function(e){return Math.round(e*1e5)/1e5||0},wf=function(e){return Math.round(e*1e7)/1e7||0},Tf=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Ef=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Df=function(){var e=df.length,t=df.slice(0),n,r;for(ff={},df.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Of=function(e){return!!(e._initted||e._startAt||e.add)},kf=function(e,t,n,r){df.length&&!yd&&Df(),e.render(t,n,r||!!(yd&&t<0&&Of(e))),df.length&&!yd&&Df()},Af=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Kd).length<2?t:kd(e)?e.trim():e},jf=function(e){return e},Mf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nf=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Pf=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Nd(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},If=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Lf=function(e){var t=e.parent||Jd,n=e.keyframes?Nf(Rd(e.keyframes)):Mf;if(Pd(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Rf=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},zf=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Bf=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Vf=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hf=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Uf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wf=function(e,t,n,r){return e._startAt&&(yd?e._startAt.revert(cf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Gf=function e(t){return!t||t._ts&&e(t.parent)},Kf=function(e){return e._repeat?qf(e._tTime,e=e.duration()+e._rDelay)*e:0},qf=function(e,t){var n=Math.floor(e=wf(e/t));return e&&n===e?n-1:n},Jf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yf=function(e){return e._end=wf(e._start+(e._tDur/Math.abs(e._ts||e._rts||Sd)||0))},Xf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wf(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yf(e),n._dirty||Hf(n,e)),e},Zf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jf(e.rawTime(),t),(!t._dur||dp(0,t.totalDuration(),n)-t._tTime>Sd)&&t.render(n,!0)),Hf(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Sd}},Qf=function(e,t,n,r){return t.parent&&Vf(t),t._start=wf((jd(n)?n:n||e!==Jd?cp(e,n,t):e._time)+t._delay),t._end=wf(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zf(e,t,`_first`,`_last`,e._sort?`_start`:0),np(t)||(e._recent=t),r||Zf(e,t),e._ts<0&&Xf(e,e._tTime),e},$f=function(e,t){return(Qd.ScrollTrigger||nf(`scrollTrigger`,t))&&Qd.ScrollTrigger.create(t,e)},ep=function(e,t,n,r,i){if(vm(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!yd&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pf!==Yp.frame)return df.push(e),e._lazy=[i,r],1},tp=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},np=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},rp=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&tp(e)&&(e._initted||!np(e))||(e._ts<0||e._dp._ts<0)&&!np(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=dp(0,e._tDur,t),l=qf(s,o),e._yoyo&&l&1&&(a=1-a),l!==qf(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||yd||r||e._zTime===Sd||!t&&e._zTime){if(!e._initted&&ep(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Sd:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Wf(e,t,n,!0),e._onUpdate&&!n&&Pp(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Pp(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Vf(e,1),!n&&!yd&&(Pp(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},ip=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},ap=function(e,t,n,r){var i=e._repeat,a=wf(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:wf(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Xf(e,e._tTime=e._tDur*o),e.parent&&Yf(e),n||Hf(e.parent,e),e},op=function(e){return e instanceof dm?Hf(e):ap(e,e._dur)},sp={_start:0,endTime:of,totalDuration:of},cp=function e(t,n,r){var i=t.labels,a=t._recent||sp,o=t.duration()>=xd?a.endTime(!1):t._dur,s,c,l;return kd(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Rd(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},lp=function(e,t,n){var r=jd(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Pd(s.vars.inherit)&&s.parent;a.immediateRender=Pd(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Tm(t[0],a,t[i+1])},up=function(e,t){return e||e===0?t(e):t},dp=function(e,t,n){return n<e?e:n>t?t:n},fp=function(e,t){return!kd(e)||!(t=qd.exec(e))?``:t[1]},pp=function(e,t,n){return up(n,function(n){return dp(e,t,n)})},mp=[].slice,hp=function(e,t){return e&&Nd(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Nd(e[0]))&&!e.nodeType&&e!==Yd},gp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return kd(e)&&!t||hp(e,1)?(r=n).push.apply(r,_p(e)):n.push(e)})||n},_p=function(e,t,n){return bd&&!t&&bd.selector?bd.selector(e):kd(e)&&!n&&(Xd||!Xp())?mp.call((t||Zd).querySelectorAll(e),0):Rd(e)?gp(e,n):hp(e)?mp.call(e,0):e?[e]:[]},vp=function(e){return e=_p(e)[0]||rf(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return _p(t,n.querySelectorAll?n:n===e?rf(`Invalid scope`)||Zd.createElement(`div`):e)}},yp=function(e){return e.sort(function(){return .5-Math.random()})},bp=function(e){if(Ad(e))return e;var t=Nd(e)?e:{each:e},n=im(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return kd(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,xd])[1],!S){for(b=-xd;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===xd?0:s?f*u/S-.5:r/S|0,b=0,x=xd,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Ed(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&yp(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=fp(t.amount||t.each)||0,n=n&&f<0?rm(n):n}return f=(p[e]-p.min)/p.max||0,wf(p.b+(n?n(f):f)*p.v)+p.u}},xp=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=wf(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(jd(n)?0:fp(n))}},Sp=function(e,t){var n=Rd(e),r,i;return!n&&Nd(e)&&(r=n=e.radius||xd,e.values?(e=_p(e.values),(i=!jd(e[0]))&&(r*=r)):e=xp(e.increment)),up(t,n?Ad(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=xd,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||jd(t)?s:s+fp(t)}:xp(e))},Cp=function(e,t,n,r){return up(Rd(e)?!t:n===!0?!!(n=0):!r,function(){return Rd(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},wp=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},Tp=function(e,t){return function(n){return e(parseFloat(n))+(t||fp(n))}},Ep=function(e,t,n){return jp(e,t,0,1,n)},Dp=function(e,t,n){return up(n,function(n){return e[~~t(n)]})},Op=function e(t,n,r){var i=n-t;return Rd(t)?Dp(t,e(0,t.length),n):up(r,function(e){return(i+(e-t)%i)%i+t})},kp=function e(t,n,r){var i=n-t,a=i*2;return Rd(t)?Dp(t,e(0,t.length-1),n):up(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ap=function(e){return e.replace(zd,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Bd);return Cp(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},jp=function(e,t,n,r,i){var a=t-e,o=r-n;return up(i,function(t){return n+((t-e)/a*o||0)})},Mp=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=kd(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Rd(t)&&!Rd(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Pf(Rd(t)?[]:{},t));if(!u){for(c in n)pm.call(s,t,c,`get`,n[c]);a=function(e){return Pm(e,s)||(o?t.p:t)}}}return up(r,a)},Np=function(e,t,n){var r=e.labels,i=xd,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Pp=function(e,t,n){var r=e.vars,i=r[t],a=bd,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&df.length&&Df(),o&&(bd=o),l=s?i.apply(c,s):i.call(c),bd=a,l},Fp=function(e){return Vf(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yd),e.progress()<1&&Pp(e,`onInterrupt`),e},Ip,Lp=[],Rp=function(e){if(e){if(e=!e.name&&e.default||e,Fd()||e.headless){var t=e.name,n=Ad(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:of,render:Pm,add:pm,kill:Im,modifier:Fm,rawVars:0},a={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if(Xp(),e!==r){if(mf[t])return;Mf(r,Mf(If(e,i),a)),Pf(r.prototype,Pf(i,If(e,a))),mf[r.prop=t]=r,e.targetTest&&(_f.push(r),uf[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}af(t,r),e.register&&e.register($m,r,zm)}else Lp.push(e)}},zp=255,Bp={aqua:[0,zp,zp],lime:[0,zp,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zp],navy:[0,0,128],white:[zp,zp,zp],olive:[128,128,0],yellow:[zp,zp,0],orange:[zp,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zp,0,0],pink:[zp,192,203],cyan:[0,zp,zp],transparent:[zp,zp,zp,0]},Vp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*zp+.5|0},Hp=function(e,t,n){var r=e?jd(e)?[e>>16,e>>8&zp,e&zp]:0:Bp.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Bp[e])r=Bp[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&zp,r&zp,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&zp,e&zp]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Vd),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Vp(s+1/3,i,a),r[1]=Vp(s,i,a),r[2]=Vp(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Hd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Vd)||Bp.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/zp,a=r[1]/zp,o=r[2]/zp,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Up=function(e){var t=[],n=[],r=-1;return e.split(Gp).forEach(function(e){var i=e.match(Ud)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Wp=function(e,t,n){var r=``,i=(e+r).match(Gp),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Hp(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Up(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Gp,`1`).split(Ud),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Gp),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Gp=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Bp)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Kp=/hsl[a]?\(/,qp=function(e){var t=e.join(` `),n;if(Gp.lastIndex=0,Gp.test(t))return n=Kp.test(t),e[1]=Wp(e[1],n),e[0]=Wp(e[0],n,Up(e[1])),!0},Jp,Yp=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ef&&(!Xd&&Fd()&&(Yd=Xd=window,Zd=Yd.document||{},Qd.gsap=$m,(Yd.gsapVersions||(Yd.gsapVersions=[])).push($m.version),tf($d||Yd.GreenSockGlobals||!Yd.gsap&&Yd||{}),Lp.forEach(Rp)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Jp=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Jp=0,l=of},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Xp(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Xp=function(){return!Jp&&Yp.wake()},Zp={},Qp=/^[\d.\-M][\d.\-,\s]/,$p=/["']/g,em=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace($p,``).trim():+c,r=s.substr(o+1).trim();return t},tm=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},nm=function(e){var t=(e+``).split(`(`),n=Zp[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[em(t[1])]:tm(e).split(`,`).map(Af)):Zp._CE&&Qp.test(e)?Zp._CE(``,e):n},rm=function(e){return function(t){return 1-e(1-t)}},im=function(e,t){return e&&(Ad(e)?e:Zp[e]||nm(e))||t},am=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Sf(e,function(e){for(var t in Zp[e]=Qd[e]=i,Zp[a=e.toLowerCase()]=n,i)Zp[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Zp[e+`.`+t]=i[t]}),i},om=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sm=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Cd*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Od((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:om(s);return a=Cd/a,c.config=function(n,r){return e(t,n,r)},c},cm=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:om(r);return i.config=function(n){return e(t,n)},i};Sf(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;am(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Zp.Linear.easeNone=Zp.none=Zp.Linear.easeIn,am(`Elastic`,sm(`in`),sm(`out`),sm()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};am(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),am(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),am(`Circ`,function(e){return-(Ed(1-e*e)-1)}),am(`Sine`,function(e){return e===1?1:-Dd(e*wd)+1}),am(`Back`,cm(`in`),cm(`out`),cm()),Zp.SteppedEase=Zp.steps=Qd.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Sd;return function(e){return((r*dp(0,a,e)|0)+i)*n}}},_d.ease=Zp[`quad.out`],Sf(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return vf+=e+`,`+e+`Params,`});var lm=function(e,t){this.id=Td++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xf,this.set=t?t.getSetter:Am},um=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ap(this,+e.duration,1,1),this.data=e.data,bd&&(this._ctx=bd,bd.data.push(this)),Jp||Yp.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,ap(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Xp(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Xf(this,e),!n._dp||n.parent||Zf(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Qf(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Sd||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),kf(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Kf(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Kf(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?qf(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Sd?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Jf(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-Sd?0:this._rts,this.totalTime(dp(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Yf(this),Uf(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xp(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Sd&&(this._tTime-=Sd)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=wf(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Qf(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Pd(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jf(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=lf);var t=yd;return yd=e,Of(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),yd=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,op(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,op(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(cp(this,e),Pd(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Pd(t)),this._dur||(this._zTime=-Sd),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Sd:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Sd,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Sd)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Ad(e)?e:jf,a=function(){var e=t.then;t.then=null,n&&n(),Ad(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Fp(this)},e}();Mf(um.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Sd,_prom:0,_ps:!1,_rts:1});var dm=function(e){hd(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Pd(t.sortChildren),Jd&&Qf(t.parent||Jd,md(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&$f(md(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return lp(0,arguments,this),this},n.from=function(e,t,n){return lp(1,arguments,this),this},n.fromTo=function(e,t,n,r){return lp(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Lf(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Tm(e,t,cp(this,n),1),this},n.call=function(e,t,n){return Qf(this,Tm.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Tm(e,n,cp(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Lf(n).immediateRender=Pd(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Lf(r).immediateRender=Pd(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:wf(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Jd&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=wf(o%f),o===i?(d=this._repeat,c=a):(_=wf(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=qf(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:wf(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Pp(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=ip(this,wf(r),wf(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Pp(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Sd);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||yd&&Of(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Sd:Sd);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Sd)._zTime=c>=r?1:-1,this._ts))return this._start=g,Yf(this),this.render(e,t,n);this._onUpdate&&!t&&Pp(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Vf(this,1),t||e<0&&!r||!o&&!r&&i||(Pp(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(jd(t)||(t=cp(this,t,e)),!(e instanceof um)){if(Rd(e))return e.forEach(function(e){return n.add(e,t)}),this;if(kd(e))return this.addLabel(e,t);if(Ad(e))e=Tm.delayedCall(0,e);else return this}return this===e?this:Qf(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-xd);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Tm?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return kd(e)?this.removeLabel(e):Ad(e)?this.killTweensOf(e):(e.parent===this&&Bf(this,e),e===this._recent&&(this._recent=this._last),Hf(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wf(Yp.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=cp(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Tm.delayedCall(0,t||of,n);return r.data=`isPause`,this._hasPause=1,Qf(this,r,cp(this,e))},n.removePause=function(e){var t=this._first;for(e=cp(this,e);t;)t._start===e&&t.data===`isPause`&&Vf(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)gm!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=_p(e),i=this._first,a=jd(t),o;i;)i instanceof Tm?Ef(i._targets,r)&&(a?(!gm||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=cp(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Tm.to(n,Mf({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Sd,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&ap(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Mf({startAt:{time:cp(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Np(this,cp(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Np(this,cp(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Sd)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=wf(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Hf(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Hf(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=xd,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Qf(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=wf(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;ap(n,n===Jd&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Jd._ts&&(kf(Jd,Jf(e,Jd)),pf=Yp.frame),Yp.frame>=gf){gf+=gd.autoSleep||120;var t=Jd._first;if((!t||!t._ts)&&gd.autoSleep&&Yp._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Yp.sleep()}}},t}(um);Mf(dm.prototype,{_lock:0,_hasPause:0,_forcing:0});var fm=function(e,t,n,r,i,a,o){var s=new zm(this._pt,e,t,0,1,Nm,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ap(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Wd)||[];u=Wd.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Tf(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Wd.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Gd.test(r)||g)&&(s.e=0),this._pt=s,s},pm=function(e,t,n,r,i,a,o,s,c,l){Ad(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Ad(u)?c?e[t.indexOf(`set`)||!Ad(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Ad(u)?c?Om:Dm:Em,p;if(kd(r)&&(~r.indexOf(`random(`)&&(r=Ap(r)),r.charAt(1)===`=`&&(p=Tf(d,r)+(fp(d)||0),(p||p===0)&&(r=p))),!l||d!==r||_m)return!isNaN(d*r)&&r!==``?(p=new zm(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Mm:jm,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&nf(t,r),fm.call(this,e,t,d,r,f,s||gd.stringFilter,c))},mm=function(e,t,n,r,i){if(Ad(e)&&(e=Sm(e,i,t,n,r)),!Nd(e)||e.style&&e.nodeType||Rd(e)||Ld(e))return kd(e)?Sm(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Sm(e[o],i,t,n,r);return a},hm=function(e,t,n,r,i,a){var o,s,c,l;if(mf[e]&&(o=new mf[e]).init(i,o.rawVars?t[e]:mm(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new zm(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Ip))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},gm,_m,vm=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!vd,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=im(a,_d.ease),t._rEase=x&&(im(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?bf(g[0]).harness:0,N=k&&i[k.prop],S=If(i,uf),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?cf:sf),h._lazy=0),o){if(Vf(t._startAt=Tm.set(g,Mf({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Pd(c),startAt:null,delay:0,onUpdate:l&&function(){return Pp(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(yd||!s&&!p)&&t._startAt.revert(cf),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=Mf({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Pd(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Vf(t._startAt=Tm.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(yd?t._startAt.revert(cf):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Sd,Sd);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Pd(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||yf(g)[C]._gsap,t._ptLookup[C]=j={},ff[O.id]&&df.length&&Df(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new zm(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)mf[w]&&(A=hm(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=pm.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(gm=t,Jd.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,gm=0),t._pt&&c&&(ff[O.id]=1)}D&&Rm(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(xd,!0,!0)},ym=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return _m=1,e.vars[t]=`+=0`,vm(e,o),_m=0,s?rf(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Cf(n)+fp(u.e)),u.b&&(u.b=l.s+fp(u.b))},bm=function(e,t){var n=e[0]?bf(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Pf({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},xm=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Rd(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Sm=function(e,t,n,r,i){return Ad(e)?e.call(t,n,r,i):kd(e)&&~e.indexOf(`random(`)?Ap(e):e},Cm=vf+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,wm={};Sf(Cm+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return wm[e]=1});var Tm=function(e){hd(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Lf(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Jd,g=(Rd(t)||Ld(t)?jd(t[0]):`length`in n)?[t]:_p(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?yf(g):rf(`GSAP target `+t+` not found. https://gsap.com`,!gd.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Id(s)||Id(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new dm({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=md(a),_._start=0,u||Id(s)||Id(c)){if(b=g.length,C=u&&bp(u),Nd(u))for(x in u)~Cm.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=If(n,wm),y.stagger=0,T&&(y.easeReverse=T),w&&Pf(y,w),S=g[v],y.duration=+Sm(s,md(a),v,S,g),y.delay=(+Sm(c,md(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Zp.none;_.duration()?s=c=0:a.timeline=0}else if(f){Lf(Mf(_.vars.defaults,{ease:`none`})),_._ease=im(f.ease||n.ease||`none`);var E=0,D,O,k;if(Rd(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||xm(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!vd&&(gm=md(a),Jd.killTweensOf(g),gm=0),Qf(h,md(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===wf(h._time)&&Pd(l)&&Gf(md(a))&&h.data!==`nested`)&&(a._tTime=-Sd,a.render(Math.max(0,-c)||0)),m&&$f(md(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Sd&&!o?i:e<Sd?0:e,c,l,u,d,f,p,m,h;if(!a)rp(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=wf(s%d),s===i?(u=this._repeat,c=a):(f=wf(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=qf(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(wf(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(ep(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Pp(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Wf(this,e,t,n),Pp(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Pp(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Wf(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Vf(this,1),!t&&(!o||r)&&(s||r||p)&&(Pp(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Jp||Yp.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||vm(this,a),o=this._ease(a/this._dur),ym(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Xf(this,0),this.parent||zf(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Fp(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yd),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,gm&&gm.vars.overwrite!==!0)._first||Fp(this),this.parent&&n!==this.timeline.totalDuration()&&ap(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?_p(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Rf(r,i))return t===`all`&&(this._pt=0),Fp(this);for(s=this._op=this._op||[],t!==`all`&&(kd(t)&&(d={},Sf(t,function(e){return d[e]=1}),t=d),t=bm(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||Bf(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Fp(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return lp(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return lp(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Jd.killTweensOf(e,t,n)},t}(um);Mf(Tm.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Sf(`staggerTo,staggerFrom,staggerFromTo`,function(e){Tm[e]=function(){var t=new dm,n=mp.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Em=function(e,t,n){return e[t]=n},Dm=function(e,t,n){return e[t](n)},Om=function(e,t,n,r){return e[t](r.fp,n)},km=function(e,t,n){return e.setAttribute(t,n)},Am=function(e,t){return Ad(e[t])?Dm:Md(e[t])&&e.setAttribute?km:Em},jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Nm=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Pm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Fm=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Im=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Bf(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Lm=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Rm=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},zm=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||jm,this.d=o||this,this.set=s||Em,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Lm,this.m=e,this.mt=n,this.tween=t},e}();Sf(vf+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return uf[e]=1}),Qd.TweenMax=Qd.TweenLite=Tm,Qd.TimelineLite=Qd.TimelineMax=dm,Jd=new dm({sortChildren:!1,defaults:_d,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),gd.stringFilter=qp;var Bm=[],Vm={},Hm=[],Um=0,Wm=0,Gm=function(e){return(Vm[e]||Hm).map(function(e){return e()})},Km=function(){var e=Date.now(),t=[];e-Um>2&&(Gm(`matchMediaInit`),Bm.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Yd.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Gm(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Um=e,Gm(`matchMedia`))},qm=function(){function e(e,t){this.selector=t&&vp(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Wm++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Ad(e)&&(n=t,t=e,e=Ad);var r=this,i=function(){var e=bd,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=vp(n)),bd=r,a=t.apply(r,arguments),Ad(a)&&r._r.push(a),bd=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Ad?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=bd;bd=null,e(this),bd=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Tm&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof dm?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Tm)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Bm.length;r--;)Bm[r].id===this.id&&Bm.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Jm=function(){function e(e){this.contexts=[],this.scope=e,bd&&bd.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Nd(e)||(e={matches:e});var r=new qm(0,n||this.scope),i=r.conditions={},a,o,s;for(o in bd&&!r.selector&&(r.selector=bd.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Yd.matchMedia(e[o]),a&&(Bm.indexOf(r)<0&&Bm.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Km):a.addEventListener(`change`,Km)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Ym={registerPlugin:function(){[...arguments].forEach(function(e){return Rp(e)})},timeline:function(e){return new dm(e)},getTweensOf:function(e,t){return Jd.getTweensOf(e,t)},getProperty:function(e,t,n,r){kd(e)&&(e=_p(e)[0]);var i=bf(e||{}).get,a=n?jf:Af;return n===`native`&&(n=``),e&&(t?a((mf[t]&&mf[t].get||i)(e,t,n,r)):function(t,n,r){return a((mf[t]&&mf[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=_p(e),e.length>1){var r=e.map(function(e){return $m.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=mf[t],o=bf(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Ip._pt=0,r.init(e,n?t+n:t,Ip,0,[e]),r.render(1,r),Ip._pt&&Pm(1,Ip)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=$m.to(e,Mf((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Jd.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=im(e.ease,_d.ease)),Ff(_d,e||{})},config:function(e){return Ff(gd,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!mf[e]&&!Qd[e]&&rf(t+` effect requires `+e+` plugin.`)}),hf[t]=function(e,t,r){return n(_p(e),Mf(t||{},i),r)},a&&(dm.prototype[t]=function(e,n,r){return this.add(hf[t](e,Nd(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Zp[e]=im(t)},parseEase:function(e,t){return arguments.length?im(e,t):Zp},getById:function(e){return Jd.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dm(e),r,i;for(n.smoothChildTiming=Pd(e.smoothChildTiming),Jd.remove(n),n._dp=0,n._time=n._tTime=Jd._time,r=Jd._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Tm&&r.vars.onComplete===r._targets[0]))&&Qf(n,r,r._start-r._delay),r=i;return Qf(Jd,n,0),n},context:function(e,t){return e?new qm(e,t):bd},matchMedia:function(e){return new Jm(e)},matchMediaRefresh:function(){return Bm.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Km()},addEventListener:function(e,t){var n=Vm[e]||(Vm[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vm[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Op,wrapYoyo:kp,distribute:bp,random:Cp,snap:Sp,normalize:Ep,getUnit:fp,clamp:pp,splitColor:Hp,toArray:_p,selector:vp,mapRange:jp,pipe:wp,unitize:Tp,interpolate:Mp,shuffle:yp},install:tf,effects:hf,ticker:Yp,updateRoot:dm.updateRoot,plugins:mf,globalTimeline:Jd,core:{PropTween:zm,globals:af,Tween:Tm,Timeline:dm,Animation:um,getCache:bf,_removeLinkedListItem:Bf,reverting:function(){return yd},context:function(e){return e&&bd&&(bd.data.push(e),e._ctx=bd),bd},suppressOverwrites:function(e){return vd=e}}};Sf(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Ym[e]=Tm[e]}),Yp.add(dm.updateRoot),Ip=Ym.to({},{duration:0});var Xm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zm=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Xm(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Qm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(kd(n)&&(r={},Sf(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Zm(e,n)}}}},$m=Ym.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yd?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qm(`roundProps`,xp),Qm(`modifiers`),Qm(`snap`,Sp))||Ym;Tm.version=dm.version=$m.version=`3.15.0`,ef=1,Fd()&&Xp(),Zp.Power0,Zp.Power1,Zp.Power2,Zp.Power3,Zp.Power4,Zp.Linear,Zp.Quad,Zp.Cubic,Zp.Quart,Zp.Quint,Zp.Strong,Zp.Elastic,Zp.Back,Zp.SteppedEase,Zp.Bounce,Zp.Sine,Zp.Expo,Zp.Circ;var eh,th,nh,rh,ih,ah,oh,sh=function(){return typeof window<`u`},ch={},lh=180/Math.PI,uh=Math.PI/180,dh=Math.atan2,fh=1e8,ph=/([A-Z])/g,mh=/(left|right|width|margin|padding|x)/i,hh=/[\s,\(]\S/,gh={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vh=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yh=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bh=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xh=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ch=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},wh=function(e,t,n){return e.style[t]=n},Th=function(e,t,n){return e.style.setProperty(t,n)},Eh=function(e,t,n){return e._gsap[t]=n},Dh=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Oh=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},kh=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Ah=`transform`,jh=Ah+`Origin`,Mh=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in ch&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=gh[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Zh(i,e)}):this.tfm[t]=o.x?o[t]:Zh(i,t),t===jh&&(this.tfm.zOrigin=o.zOrigin);else return gh.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Ah)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(jh,n,``)),t=Ah}(a||n)&&this.props.push(t,n,a[t])},Nh=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Ph=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(ph,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=oh(),i&&i.isStart||n[Ah]||(Nh(n),r.zOrigin&&n[jh]&&(n[jh]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Fh=function(e,t){var n={target:e,props:[],revert:Ph,save:Mh};return e._gsap||$m.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Ih,Lh=function(e,t){var n=th.createElementNS?th.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):th.createElement(e);return n&&n.style?n:th.createElement(e)},Rh=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(ph,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Bh(n)||n,1)||``},zh=`O,Moz,ms,Ms,Webkit`.split(`,`),Bh=function(e,t,n){var r=(t||ih).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(zh[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?zh[i]:``)+e},Vh=function(){sh()&&window.document&&(eh=window,th=eh.document,nh=th.documentElement,ih=Lh(`div`)||{style:{}},Lh(`div`),Ah=Bh(Ah),jh=Ah+`Origin`,ih.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Ih=!!Bh(`perspective`),oh=$m.core.reverting,rh=1)},Hh=function(e){var t=e.ownerSVGElement,n=Lh(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),nh.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),nh.removeChild(n),i},Uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wh=function(e){var t,n;try{t=e.getBBox()}catch{t=Hh(e),n=1}return t&&(t.width||t.height)||n||(t=Hh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uh(e,[`x`,`cx`,`x1`])||0,y:+Uh(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Gh=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Wh(e))},Kh=function(e,t){if(t){var n=e.style,r;t in ch&&t!==jh&&(t=Ah),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(ph,`-$1`).toLowerCase())):n.removeAttribute(t)}},qh=function(e,t,n,r,i,a){var o=new zm(e._pt,t,n,0,1,a?Ch:Sh);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Jh={deg:1,rad:1,turn:1},Yh={grid:1,flex:1},Xh=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=ih.style,c=mh.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Jh[i]||Jh[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Gh(t),(p||o===`%`)&&(ch[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Cf(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==th&&h.appendChild||(h=th.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Yp.time&&!g.uncache)return Cf(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Kh(t,n)}else(p||o===`%`)&&!Yh[Rh(h,`display`)]&&(s.position=Rh(t,`position`)),h===t&&(s.position=`static`),h.appendChild(ih),m=ih[u],h.removeChild(ih),s.position=`absolute`;return c&&p&&(g=bf(h),g.time=Yp.time,g.width=h[u]),Cf(f?m*a/d:m&&a?d/m*a:0)},Zh=function(e,t,n,r){var i;return rh||Vh(),t in gh&&t!==`transform`&&(t=gh[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),ch[t]&&t!==`transform`?(i=lg(e,r),i=t===`transformOrigin`?i.svg?i.origin:ug(Rh(e,jh))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=ng[t]&&ng[t](e,t,n)||Rh(e,t)||xf(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Xh(e,t,i,n)+n:i},Qh=function(e,t,n,r){if(!n||n===`none`){var i=Bh(t,e,1),a=i&&Rh(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Rh(e,`borderTopColor`))}var o=new zm(this._pt,e.style,t,0,1,Nm),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Rh(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Rh(e,t)||r,m?e.style[t]=m:Kh(e,t)),l=[n,r],qp(l),n=l[0],r=l[1],d=n.match(Ud)||[],b=r.match(Ud)||[],b.length){for(;u=Ud.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Tf(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Ud.lastIndex-v.length,v||(v=v||gd.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Xh(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Ch:Sh;return Gd.test(r)&&(o.e=0),this._pt=o,o},$h={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},eg=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=$h[n]||n,t[1]=$h[r]||r,t.join(` `)},tg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],ch[o]&&(s=1,o=o===`transformOrigin`?jh:Ah),Kh(n,o);s&&(Kh(n,Ah),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,lg(n,1),a.uncache=1,Nh(r)))}},ng={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new zm(e._pt,t,n,0,0,tg);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},rg=[1,0,0,1,0,0],ig={},ag=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},og=function(e){var t=Rh(e,Ah);return ag(t)?rg:t.substr(7).match(Hd).map(Cf)},sg=function(e,t){var n=e._gsap||bf(e),r=e.style,i=og(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?rg:i):(i===rg&&!e.offsetParent&&e!==nh&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,nh.appendChild(e)),i=og(e),s?r.display=s:Kh(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):nh.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},cg=function(e,t,n,r,i,a){var o=e._gsap,s=i||sg(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==rg&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Wh(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[jh]=`0px 0px`,a&&(qh(a,o,`xOrigin`,c,y),qh(a,o,`yOrigin`,l,b),qh(a,o,`xOffset`,u,o.xOffset),qh(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},lg=function(e,t){var n=e._gsap||new lm(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Rh(e,jh)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,ee,F,te,ne,re,ie;return n.svg=!!(e.getCTM&&Gh(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Ah]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Ah]===`none`?``:s[Ah])),r.scale=r.rotate=r.translate=`none`),S=sg(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),cg(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==rg&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?dh(D,E)*lh:0,_=O||k?dh(O,k)*lh+m:0,_&&(p*=Math.abs(Math.cos(_*uh))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ie=S[6],ne=S[7],ee=S[8],F=S[9],te=S[10],re=S[11],l=S[12],u=S[13],d=S[14],C=dh(ie,te),h=C*lh,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+ee*T,N=j*w+F*T,P=ie*w+te*T,ee=A*-T+ee*w,F=j*-T+F*w,te=ie*-T+te*w,re=ne*-T+re*w,A=M,j=N,ie=P),C=dh(-O,te),g=C*lh,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-ee*T,N=D*w-F*T,P=O*w-te*T,re=k*T+re*w,E=M,D=N,O=P),C=dh(D,E),m=C*lh,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Cf(Math.sqrt(E*E+D*D+O*O)),p=Cf(Math.sqrt(j*j+ie*ie)),C=dh(A,j),_=Math.abs(C)>2e-4?C*lh:0,y=re?1/(re<0?-re:re):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!ag(Rh(e,Ah)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Cf(f),n.scaleY=Cf(p),n.rotation=Cf(m)+o,n.rotationX=Cf(h)+o,n.rotationY=Cf(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[jh]=ug(c)),n.xOffset=n.yOffset=0,n.force3D=gd.force3D,n.renderTransform=n.svg?_g:Ih?gg:fg,n.uncache=0,n},ug=function(e){return(e=e.split(` `))[0]+` `+e[1]},dg=function(e,t,n){var r=fp(t);return Cf(parseFloat(t)+parseFloat(Xh(e,`x`,n+`px`,r)))+r},fg=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,gg(e,t)},pg=`0deg`,mg=`0px`,hg=`) `,gg=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==pg||l!==pg)){var x=parseFloat(l)*uh,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*uh,w=Math.cos(x),a=dg(_,a,S*w*-v),o=dg(_,o,-Math.sin(x)*-v),s=dg(_,s,C*w*-v+v)}h!==mg&&(y+=`perspective(`+h+hg),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==mg||o!==mg||s!==mg)&&(y+=s!==mg||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+hg),c!==pg&&(y+=`rotate(`+c+hg),l!==pg&&(y+=`rotateY(`+l+hg),u!==pg&&(y+=`rotateX(`+u+hg),(d!==pg||f!==pg)&&(y+=`skew(`+d+`, `+f+hg),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+hg),_.style[Ah]=y||`translate(0, 0)`},_g=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=uh,c*=uh,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=uh,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Cf(b),x=Cf(x),S=Cf(S),C=Cf(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Xh(f,`x`,a,`px`),y=Xh(f,`y`,o,`px`)),(p||m||h||g)&&(v=Cf(v+p-(p*b+m*S)+h),y=Cf(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Cf(v+r/100*w.width),y=Cf(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Ah]=w)},vg=function(e,t,n,r,i){var a=360,o=kd(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?lh:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*fh)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*fh)%a-~~(s/a)*a)),e._pt=u=new zm(e._pt,t,n,r,s,vh),u.e=c,u.u=`deg`,e._props.push(n),u},yg=function(e,t){for(var n in t)e[n]=t[n];return e},bg=function(e,t,n){var r=yg({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Ah]=t,o=lg(n,1),Kh(n,Ah),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Ah],a[Ah]=t,o=lg(n,1),a[Ah]=c),ch)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=fp(c),p=fp(l),u=f===p?parseFloat(c):Xh(n,s,c,p),d=parseFloat(l),e._pt=new zm(e._pt,o,s,u,d-u,_h),e._pt.u=p||0,e._props.push(s));yg(o,r)};Sf(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});ng[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Zh(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var xg={name:`css`,register:Vh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in rh||Vh(),this.styles=this.styles||Fh(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(mf[m]&&hm(m,t,n,r,e,i)))){if(f=typeof l,p=ng[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Ap(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Gp.lastIndex=0,Gp.test(c)||(h=fp(c),g=fp(l),g?h!==g&&(c=Xh(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],kd(c)&&~c.indexOf(`random(`)&&(c=Ap(c)),fp(c+``)||c===`auto`||(c+=gd.units[m]||fp(Zh(e,m))||``),(c+``).charAt(1)===`=`&&(c=Zh(e,m))):c=Zh(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in gh&&(m===`autoAlpha`&&(d===1&&Zh(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),qh(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=gh[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in ch,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Rh(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Rh(e,`perspective`),T?e.style.perspective=T:Kh(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||lg(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new zm(this._pt,o,Ah,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new zm(this._pt,b,`scaleY`,b.scaleY,(_?Tf(b.scaleY,_+u):u)-b.scaleY||0,_h),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(jh,0,o[jh]),l=eg(l),b.svg?cg(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&qh(this,b,`zOrigin`,b.zOrigin,g),qh(this,o,m,ug(c),ug(l)));continue}else if(m===`svgOrigin`){cg(e,l,1,x,0,this);continue}else if(m in ig){vg(this,b,m,d,_?Tf(d,_+l):l);continue}else if(m===`smoothOrigin`){qh(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){bg(this,l,e);continue}}else m in o||(m=Bh(m)||m);if(v||(u||u===0)&&(d||d===0)&&!hh.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=fp(l)||(m in gd.units?gd.units[m]:h),h!==g&&(d=Xh(e,m,c,g)),this._pt=new zm(this._pt,v?b:o,m,d,(_?Tf(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?xh:_h),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=bh):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=yh);else if(m in o)Qh.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){nf(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Rm(this)},render:function(e,t){if(t.tween._time||!oh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zh,aliases:gh,getSetter:function(e,t,n){var r=gh[t];return r&&r.indexOf(`,`)<0&&(t=r),t in ch&&t!==jh&&(e._gsap.x||Zh(e,`x`))?n&&ah===n?t===`scale`?Dh:Eh:(ah=n||{})&&(t===`scale`?Oh:kh):e.style&&!Md(e.style[t])?wh:~t.indexOf(`-`)?Th:Am(e,t)},core:{_removeProperty:Kh,_getMatrix:sg}};$m.utils.checkPrefix=Bh,$m.core.getStyleSaver=Fh,(function(e,t,n,r){var i=Sf(e+`,`+t+`,`+n,function(e){ch[e]=1});Sf(t,function(e){gd.units[e]=`deg`,ig[e]=1}),gh[i[13]]=e+`,`+t,Sf(r,function(e){var t=e.split(`:`);gh[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Sf(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){gd.units[e]=`px`}),$m.registerPlugin(xg);var Sg=$m.registerPlugin(xg)||$m;Sg.core.Tween;var Cg={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},wg=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Tg=new Ds(-1,1,1,-1,0,1),Eg=new class extends pr{constructor(){super(),this.setAttribute(`position`,new tr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new tr([0,2,0,0,2,0],2))}},Dg=class{constructor(e){this._mesh=new K(Eg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Og=class extends wg{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Po.clone(e.uniforms),this.material=new Lo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},kg=class extends wg{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ag=class extends wg{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},jg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Og(Cg),this.copyPass.material.blending=0,this.timer=new Ps}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}kg!==void 0&&(r instanceof kg?n=!0:r instanceof Ag&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Mg=class extends wg{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new G}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ng={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new H},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new It},cameraProjectionMatrixInverse:{value:new It},cameraWorldMatrix:{value:new It},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Pg={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Fg={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ig(t=5){let n=Math.floor(t)%2==0?Math.floor(t)+1:Math.floor(t),r=Lg(n),i=r.length,a=new Uint8Array(i*4);for(let e=0;e<i;++e){let t=r[e],n=2*Math.PI*t/i,o=new U(Math.cos(n),Math.sin(n),0).normalize();a[e*4]=(o.x*.5+.5)*255,a[e*4+1]=(o.y*.5+.5)*255,a[e*4+2]=127,a[e*4+3]=255}let o=new ai(a,n,n);return o.wrapS=e,o.wrapT=e,o.needsUpdate=!0,o}function Lg(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var Rg={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:zg(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new H},cameraProjectionMatrixInverse:{value:new It},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function zg(e,t,n){let r=Bg(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Bg(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new U(Math.cos(a),Math.sin(a),o))}return r}var Vg=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,ee=l&255,F=u&255,te=this.perm[P+this.perm[ee+this.perm[F]]]%12,ne=this.perm[P+y+this.perm[ee+b+this.perm[F+x]]]%12,re=this.perm[P+S+this.perm[ee+C+this.perm[F+w]]]%12,ie=this.perm[P+1+this.perm[ee+1+this.perm[F+1]]]%12,ae=.6-g*g-_*_-v*v;ae<0?r=0:(ae*=ae,r=ae*ae*this._dot3(this.grad3[te],g,_,v));let oe=.6-T*T-E*E-D*D;oe<0?i=0:(oe*=oe,i=oe*oe*this._dot3(this.grad3[ne],T,E,D));let se=.6-O*O-k*k-A*A;se<0?a=0:(se*=se,a=se*se*this._dot3(this.grad3[re],O,k,A));let I=.6-j*j-M*M-N*N;return I<0?o=0:(I*=I,o=I*I*this._dot3(this.grad3[ie],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,ee=+(a[P][0]>=3),F=+(a[P][1]>=3),te=+(a[P][2]>=3),ne=+(a[P][3]>=3),re=+(a[P][0]>=2),ie=+(a[P][1]>=2),ae=+(a[P][2]>=2),oe=+(a[P][3]>=2),se=+(a[P][0]>=1),I=+(a[P][1]>=1),ce=+(a[P][2]>=1),le=+(a[P][3]>=1),ue=w-ee+c,de=T-F+c,fe=E-te+c,pe=D-ne+c,me=w-re+2*c,he=T-ie+2*c,ge=E-ae+2*c,_e=D-oe+2*c,ve=w-se+3*c,ye=T-I+3*c,be=E-ce+3*c,xe=D-le+3*c,Se=w-1+4*c,Ce=T-1+4*c,we=E-1+4*c,Te=D-1+4*c,Ee=h&255,De=g&255,Oe=_&255,ke=v&255,Ae=o[Ee+o[De+o[Oe+o[ke]]]]%32,je=o[Ee+ee+o[De+F+o[Oe+te+o[ke+ne]]]]%32,Me=o[Ee+re+o[De+ie+o[Oe+ae+o[ke+oe]]]]%32,L=o[Ee+se+o[De+I+o[Oe+ce+o[ke+le]]]]%32,Ne=o[Ee+1+o[De+1+o[Oe+1+o[ke+1]]]]%32,Pe=.6-w*w-T*T-E*E-D*D;Pe<0?l=0:(Pe*=Pe,l=Pe*Pe*this._dot4(i[Ae],w,T,E,D));let Fe=.6-ue*ue-de*de-fe*fe-pe*pe;Fe<0?u=0:(Fe*=Fe,u=Fe*Fe*this._dot4(i[je],ue,de,fe,pe));let R=.6-me*me-he*he-ge*ge-_e*_e;R<0?d=0:(R*=R,d=R*R*this._dot4(i[Me],me,he,ge,_e));let Ie=.6-ve*ve-ye*ye-be*be-xe*xe;Ie<0?f=0:(Ie*=Ie,f=Ie*Ie*this._dot4(i[L],ve,ye,be,xe));let Le=.6-Se*Se-Ce*Ce-we*we-Te*Te;return Le<0?p=0:(Le*=Le,p=Le*Le*this._dot4(i[Ne],Se,Ce,we,Te)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Hg=class t extends wg{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ig(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Nt(this.width,this.height,{type:g,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Lo({defines:Object.assign({},Ng.defines),uniforms:Po.clone(Ng.uniforms),vertexShader:Ng.vertexShader,fragmentShader:Ng.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Vo,this.normalMaterial.blending=0,this.pdMaterial=new Lo({defines:Object.assign({},Rg.defines),uniforms:Po.clone(Rg.uniforms),vertexShader:Rg.vertexShader,fragmentShader:Rg.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Lo({defines:Object.assign({},Pg.defines),uniforms:Po.clone(Pg.uniforms),vertexShader:Pg.vertexShader,fragmentShader:Pg.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Lo({uniforms:Po.clone(Cg.uniforms),vertexShader:Cg.vertexShader,fragmentShader:Cg.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Lo({uniforms:Po.clone(Fg.uniforms),vertexShader:Fg.vertexShader,fragmentShader:Fg.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Dg(null),this._originalClearColor=new G,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new Ui;e.format=E,e.type=y,this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:r,magFilter:r,type:g,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zg(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case t.OUTPUT.Off:break;case t.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case t.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(t=64){let n=new Vg,r=t*t*4,i=new Uint8Array(r);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let a=e,o=r;i[(e*t+r)*4]=(n.noise(a,o)*.5+.5)*255,i[(e*t+r)*4+1]=(n.noise(a+t,o)*.5+.5)*255,i[(e*t+r)*4+2]=(n.noise(a,o+t)*.5+.5)*255,i[(e*t+r)*4+3]=(n.noise(a+t,o+t)*.5+.5)*255}let a=new ai(i,t,t,w,l);return a.wrapS=e,a.wrapT=e,a.needsUpdate=!0,a}};Hg.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ug={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Wg=class e extends wg{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new G(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Nt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Nt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ug;this.highPassUniforms=Po.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Po.clone(Cg.uniforms),this.blendMaterial=new Lo({uniforms:this.copyUniforms,vertexShader:Cg.vertexShader,fragmentShader:Cg.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new G,this._oldClearAlpha=1,this._basic=new Gr,this._fsQuad=new Dg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Lo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Lo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Wg.BlurDirectionX=new H(1,0),Wg.BlurDirectionY=new H(0,1);var Gg={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Kg=class extends wg{constructor(){super(),this.isOutputPass=!0,this.uniforms=Po.clone(Gg.uniforms),this.material=new Ro({name:Gg.name,uniforms:this.uniforms,vertexShader:Gg.vertexShader,fragmentShader:Gg.fragmentShader}),this._fsQuad=new Dg(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},qg=class extends un{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new H(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Jg=new U,Yg=new It,Xg=new It,Zg=new U,Qg=new U,$g=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Yg.copy(t.matrixWorldInverse),Xg.multiplyMatrices(t.projectionMatrix,Yg),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){Jg.setFromMatrixPosition(e.matrixWorld),Jg.applyMatrix4(Xg);let c=Jg.z>=-1&&Jg.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=Jg.x*i+i,f=-Jg.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Zg.setFromMatrixPosition(e.matrixWorld),Qg.setFromMatrixPosition(t.matrixWorld),Zg.distanceToSquared(Qg)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},e_=class extends yn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new q;e.deleteAttribute(`uv`);let t=new zo({side:1}),n=new zo,r=new Es(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new K(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new mi(e,n,6),o=new un;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new K(e,t_(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new K(e,t_(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new K(e,t_(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new K(e,t_(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new K(e,t_(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new K(e,t_(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function t_(e){return new Ho({color:0,emissive:16777215,emissiveIntensity:e})}var n_=[{n:1,t:`Document Q&A with RAG`,cat:`GenAI`,live:!0,case:`rag`,sub:`Chat with provider contracts & policy PDFs, with citations`},{n:2,t:`Inside RAG: how a PDF becomes searchable vectors`,cat:`GenAI · deep dive`,live:!0,case:`inside`,sub:`Developer view: bytes → text → chunks → vectors → index → answer, and where each one is stored`},{n:3,t:`AI Functions inside SQL`,cat:`SQL + LLM`},{n:4,t:`Claims anomaly detection`,cat:`ML`},{n:5,t:`Member churn prediction`,cat:`ML`},{n:6,t:`Cost & volume forecasting`,cat:`Forecast`},{n:7,t:`Extract fields from PDFs`,cat:`Doc AI`},{n:8,t:`Multi-agent supervisor`,cat:`Agents`},{n:9,t:`Provider entity resolution`,cat:`ML`},{n:10,t:`Call transcript insights`,cat:`GenAI`},{n:11,t:`Real-time feature scoring`,cat:`MLOps`},{n:12,t:`Fine-tune on your data`,cat:`GenAI`},{n:13,t:`AI/BI dashboards + Genie`,cat:`BI`},{n:14,t:`Agent with UC function tools`,cat:`Agents`},{n:15,t:`Prior-auth triage classifier`,cat:`GenAI`},{n:16,t:`Synthetic test data`,cat:`GenAI`},{n:17,t:`Recommendation engine`,cat:`ML`},{n:18,t:`Fax & image OCR to tables`,cat:`Doc AI`},{n:19,t:`Guardrails & AI monitoring`,cat:`Governance`},{n:20,t:`MCP tools for agents`,cat:`Agents`}],r_=[{name:`Need`,steps:[0]},{name:`Goal`,steps:[1]},{name:`Prepare data`,steps:[2,3,4,5]},{name:`Answer`,steps:[6,7]},{name:`Production`,steps:[8,9]}],i_={need:`<path d="M4 7h7v10H4zM13 7h7v10h-7z"/><path d="M11 12h2"/>`,goal:`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>`,ingest:`<path d="M12 3v11M7 9l5 5 5-5M4 17v3h16v-3"/>`,chunk:`<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>`,embed:`<path d="M5 19L19 5M19 5h-6M19 5v6"/><circle cx="5" cy="19" r="1.5"/>`,index:`<circle cx="6" cy="7" r="1.6"/><circle cx="16" cy="5" r="1.6"/><circle cx="18" cy="15" r="1.6"/><circle cx="8" cy="17" r="1.6"/><circle cx="12" cy="11" r="1.6"/>`,retrieve:`<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>`,generate:`<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>`,evaluate:`<path d="M4 19h16M7 16V10M12 16V6M17 16v-4"/>`,deploy:`<path d="M12 3l8 4v5c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/>`},a_=[{key:`need`,short:`Need`,phase:`Need`,icon:i_.need,title:`Business need → developer solution`,split:{need:[`Provider-ops analysts answer contract and policy questions all day.`,`The answers are buried in ~600 PDFs. One clause can take 20–40 minutes to find.`,`Answers must be correct, cite the source, and respect who may see which contract.`],solution:[`A RAG agent on Databricks that answers only from your PDFs, with citations.`,`PDFs land in Unity Catalog, get parsed and chunked with AI Functions, then embedded into an AI Search index.`,`An LLM writes the answer from retrieved passages. MLflow measures quality. Agent Runtime ships it, governed by Unity Catalog.`]},tags:[[`Unity Catalog`,`tool`],[`AI Functions`,`tool`],[`AI Search`,`tool`],[`MLflow 3`,`tool`],[`Agent Bricks`,`tool`]]},{key:`goal`,short:`Goal`,phase:`Goal`,icon:i_.goal,title:`Ask a question. Get a cited answer.`,what:`An analyst asks about a contract in plain English`,how:`The agent first <b>retrieves</b> passages from your PDFs, then the LLM answers from them`,why:`Answers in seconds, and every one points to its page`,tags:[[`Retrieval-Augmented Generation`,``],[`Citations`,``]]},{key:`ingest`,short:`Ingest`,phase:`Prepare data`,icon:i_.ingest,title:`Land the PDFs in Unity Catalog`,what:`Copy the PDF files into a governed folder, then list them as rows in a table`,how:`<code>UC Volume</code> holds the files · <code>READ_FILES</code> turns each file into one row of a Delta table`,why:`One permissioned, versioned, queryable source of truth`,tags:[[`Unity Catalog Volume`,`tool`],[`READ_FILES`,`tool`],[`Delta Lake`,`tool`]]},{key:`chunk`,short:`Parse+chunk`,phase:`Prepare data`,icon:i_.chunk,title:`Read the layout, cut into passages`,what:`Turn PDF bytes into structured text, then into search-sized passages`,how:`<code>ai_parse_document</code> reads text, tables and pages · <code>ai_prep_search</code> makes chunks`,why:`Small, self-contained passages are what search can find precisely`,tags:[[`ai_parse_document`,`tool`],[`ai_prep_search · Beta`,`tool`],[`VARIANT`,``]]},{key:`embed`,short:`Embed`,phase:`Prepare data`,icon:i_.embed,title:`Turn every passage into numbers`,what:`Each chunk becomes a vector: 1,024 numbers that encode its meaning`,how:`Foundation Model API <code>databricks-gte-large-en</code>, called by the index for you`,why:`Similar meaning ⇒ nearby vectors, even with different words`,tags:[[`databricks-gte-large-en`,`model`],[`1024-dim`,``]]},{key:`index`,short:`Index`,phase:`Prepare data`,icon:i_.index,title:`Build a searchable vector index`,what:`Store all vectors so the nearest ones can be found in milliseconds`,how:`<code>Databricks AI Search</code> Delta Sync index on the <code>chunks</code> table`,why:`New or changed PDFs flow in when you sync. No re-building by hand`,tags:[[`Databricks AI Search`,`tool`],[`Delta Sync`,``],[`Change Data Feed`,``]]},{key:`retrieve`,short:`Retrieve`,phase:`Answer`,icon:i_.retrieve,title:`Find the passages that answer it`,what:`The question is embedded and the closest chunks are pulled out`,how:`<code>index.similarity_search(query_text=…, num_results=5)</code>`,why:`The LLM only sees the 5 passages that matter`,tags:[[`similarity_search`,`tool`],[`top-k`,``],[`hybrid search`,``]]},{key:`generate`,short:`Generate`,phase:`Answer`,icon:i_.generate,title:`Write the answer from the evidence`,what:`Question + 5 passages go into one prompt; the LLM writes a cited answer`,how:`Foundation Model API <code>databricks-meta-llama-3-3-70b-instruct</code>`,why:`Grounded in your text, not the model’s memory`,tags:[[`Llama 3.3 70B Instruct`,`model`],[`Prompt template`,``],[`Unity Gateway`,`tool`]]},{key:`evaluate`,short:`Evaluate`,phase:`Production`,icon:i_.evaluate,title:`Prove it is right before you ship`,what:`Run a test set of real questions; LLM judges score every answer`,how:`<code>mlflow.genai.evaluate</code> with Correctness, Groundedness, Relevance, Safety`,why:`Quality becomes a number you can track and improve`,tags:[[`MLflow 3`,`tool`],[`LLM judges`,`model`],[`Tracing`,``]]},{key:`deploy`,short:`Deploy`,phase:`Production`,icon:i_.deploy,title:`Ship it, governed end to end`,what:`Deploy the agent as an app; every request goes through governance`,how:`<code>agentbricks deploy</code> → Agent Runtime on Databricks Apps · Unity Gateway · Unity Catalog`,why:`Same permissions, rate limits, logs and lineage as the rest of your data`,tags:[[`Agent Bricks CLI`,`tool`],[`Databricks Apps`,`tool`],[`Unity Gateway`,`tool`]]}],o_=`main.provider_ops`,s_=[{lead:`Every AI project starts with a business problem. This step turns the analyst’s problem into a technical design. Each later step builds one piece of that design.`,happens:[`<b>The business side.</b> A provider-operations analyst gets questions like “What is the timely-filing limit for out-of-network claims?” The answer is in one of ~600 contract and policy PDFs, on a page nobody remembers. Today they search folders and skim PDFs. That takes 20–40 minutes, and two analysts can give two different answers.`,`<b>The developer side.</b> The developer turns each business wish into a technical requirement (see the table below), then picks a Databricks component for each one.`,`<b>The design has two paths.</b> An <b>offline path</b> prepares the documents ahead of time (steps 02–05: ingest, parse + chunk, embed, index). It runs on a schedule, whenever PDFs change. An <b>online path</b> runs for every question (steps 06–07: retrieve, generate) and takes a few seconds.`,`<b>Quality and production wrap around both.</b> Step 08 measures answer quality with a test set before anyone relies on it. Step 09 deploys the agent with permissions, rate limits and logs.`],concepts:[{t:`RAG (Retrieval-Augmented Generation)`,d:`An LLM never saw your contracts during training. If you ask it directly, it guesses. RAG first <b>retrieves</b> the relevant passages from your documents, then asks the LLM to <b>generate</b> an answer using only those passages. The model is not retrained. It just reads the right pages first.`},{t:`Why not fine-tune a model?`,d:`Fine-tuning bakes knowledge into model weights. It is expensive, it goes stale when a contract changes, and it cannot cite a page. RAG reads the current document at question time, so updates show up after the next sync and every answer can point to its source.`},{t:`Unity Catalog`,d:`Databricks’ governance layer. Every file, table, index, model and app gets a three-part name like <code>main.provider_ops.chunks</code> (catalog.schema.object), plus permissions and lineage. That is how “only authorised staff see contract X” is enforced in one place.`}],compare:{title:`From business need to technical design`,cols:[`Business need`,`Technical requirement`,`Databricks component`],rows:[[`Answers must come from our documents`,`Ground the LLM on retrieved passages`,`AI Search + prompt template`],[`“Show me where it says that”`,`Keep source file + page on every chunk`,`ai_parse_document → ai_prep_search metadata`],[`Only allowed staff see a contract`,`Central access control on files, tables, index`,`Unity Catalog grants`],[`New contracts arrive every week`,`Incremental processing, no full rebuilds`,`Delta tables + Delta Sync index`],[`It has to be trustworthy`,`Measured quality on a fixed test set`,`MLflow 3 evaluation + LLM judges`],[`Usable from a browser, at scale`,`Authenticated, rate-limited endpoint`,`Agent Runtime on Databricks Apps + Unity Gateway`]]},code:[{label:`The whole solution in 8 lines`,lang:`py`,src:`# Each line is one step of this walkthrough (illustrative outline)
files  = "/Volumes/${o_.replace(`.`,`/`)}/contracts/"          # 02 Ingest: governed folder
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
CREATE SCHEMA IF NOT EXISTS ${o_};
CREATE VOLUME IF NOT EXISTS ${o_}.contracts;

-- 2) Upload (UI drag-and-drop, or from a terminal):
--    databricks fs cp ./pdfs dbfs:/Volumes/main/provider_ops/contracts/ --recursive

-- 3) One row per PDF: metadata + raw bytes
CREATE OR REPLACE TABLE ${o_}.raw_docs AS
SELECT path, modificationTime, length, content
FROM READ_FILES('/Volumes/main/provider_ops/contracts/*.pdf',
                format => 'binaryFile');

-- 4) Look at what you just made
SELECT path, length, modificationTime FROM ${o_}.raw_docs LIMIT 5;
DESCRIBE HISTORY ${o_}.raw_docs;`},{label:`PySpark · incremental with Auto Loader`,lang:`py`,src:`(spark.readStream.format("cloudFiles")
    .option("cloudFiles.format", "binaryFile")
    .option("pathGlobFilter", "*.pdf")
    .load("/Volumes/main/provider_ops/contracts/")
    .writeStream
    .option("checkpointLocation", "/Volumes/main/provider_ops/_chk/raw_docs")
    .trigger(availableNow=True)          # process new files, then stop
    .toTable("${o_}.raw_docs"))`}],io:[{title:`Input · files in the Volume`,cols:[`file`,`size`],rows:[[`provider_contract_acme.pdf`,`2.4 MB`],[`claims_policy_2026.pdf`,`1.1 MB`],[`fee_schedule_2026.pdf`,`3.8 MB`],[`… 597 more`,``]]},{title:`Output · main.provider_ops.raw_docs`,cols:[`path`,`modificationTime`,`length`,`content`],rows:[[`…/contracts/provider_contract_acme.pdf`,`2026-10-28 09:14`,`2,516,402`,`25 50 44 46 2D 31…`],[`…/contracts/claims_policy_2026.pdf`,`2026-10-30 16:02`,`1,148,770`,`25 50 44 46 2D 31…`],[`…/contracts/fee_schedule_2026.pdf`,`2026-11-01 08:47`,`3,981,055`,`25 50 44 46 2D 31…`]],note:`content is BINARY: the actual file bytes. “25 50 44 46” = “%PDF”.`}],why:`Everything downstream (parsing, chunks, the index, the app) inherits permissions and lineage from here. If a contract is restricted in Unity Catalog, it stays restricted all the way to the answer.`,pitfalls:[`Files larger than 100 MB or longer than 500 pages exceed <code>ai_parse_document</code> limits. Split them, or use the <code>pageRange</code> option.`,`Duplicates and old versions. Keep a version or effective-date convention in the file path, or dedupe on a hash of <code>content</code>.`,`Granting access only to the table, not the Volume (or vice versa). Readers of the pipeline need <code>READ VOLUME</code> on the files and <code>SELECT</code> on the tables.`,`Storing bytes twice (Volume and table) costs storage. For very large corpora, keep only path + metadata in the table and parse directly from the Volume.`],objects:[`pdf`,`volume`,`readFiles`,`deltaTable`]},{lead:`A PDF is a set of drawing instructions (“put glyph ‘9’ at x,y”), not text. Two AI Functions turn it into clean, search-sized passages: <code>ai_parse_document</code> reads the layout, and <code>ai_prep_search</code> cuts it into chunks.`,happens:[`<b>Parse.</b> <code>ai_parse_document(content)</code> takes the BINARY bytes from <code>raw_docs</code>. A Databricks-hosted model reads every page and returns a <b>VARIANT</b> (structured JSON-like value) with pages, elements (title, section header, paragraph, table, figure, caption, footer), their text, and their page and bounding box. Tables come out as HTML, so rows and columns survive. Scanned pages are OCR’d.`,`<b>Store the parse.</b> Results go to <code>parsed_docs</code> (one row per PDF), so you never pay to parse the same file twice.`,`<b>Chunk.</b> <code>ai_prep_search(parsed)</code> splits each document into semantic chunks, keeping paragraphs and tables whole, and enriches each one. You get <code>chunk_to_retrieve</code> (the clean text the LLM will read) and <code>chunk_to_embed</code> (the same text plus document title, section header, page number, a one-sentence document summary and, for tables, a summary and related questions).`,`<b>Explode to rows.</b> <code>ai_prep_search</code> returns one VARIANT per document with an array <code>document.contents</code>. <code>variant_explode</code> turns that array into <b>one row per chunk</b> in <code>main.provider_ops.chunks</code>.`,`<b>Prepare for syncing.</b> The table gets <code>delta.enableChangeDataFeed = true</code>, so step 05 can sync only rows that changed.`],concepts:[{t:`Why chunk at all?`,d:`Search works best on passages about one idea. A whole 40-page contract matches everything a little; a 300-word clause on timely filing matches one question strongly. Small chunks also keep the LLM prompt short.`},{t:`chunk_to_embed vs chunk_to_retrieve`,d:`The <b>embed</b> text is what gets turned into a vector. The extra context (“Document: Acme Provider Agreement · Section 4 Claims”) makes it findable. The <b>retrieve</b> text is the clean passage shown to the LLM and the user.`},{t:`VARIANT`,d:`A Databricks column type for semi-structured data (like JSON), queried with paths: <code>result:document.contents</code>, then cast with <code>::STRING</code>.`},{t:`Beta status`,d:`<code>ai_prep_search</code> is in Beta and needs Databricks Runtime 18.2+ (on serverless, environment version 3+). Its only options are <code>version</code> and <code>schema</code>; chunk size is chosen for you.`}],code:[{label:`SQL · parse once, store the result`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${o_}.parsed_docs AS
SELECT path, ai_parse_document(content) AS parsed
FROM ${o_}.raw_docs;`},{label:`SQL · chunk and explode to one row per chunk`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${o_}.chunks
TBLPROPERTIES (delta.enableChangeDataFeed = true) AS
WITH prepped AS (
  SELECT path, ai_prep_search(parsed) AS result
  FROM ${o_}.parsed_docs
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
FROM ${o_}.chunks
LIMIT 3;`}],io:[{title:`Input`,cols:[`chunk_id`,`chunk_to_embed`],rows:[[`acme_…_17`,`Document Title: Acme Provider Agreement … Content: 4.2 Provider shall submit claims within ninety (90) days…`]]},{title:`Output`,cols:[`chunk_id`,`embedding (1,024 floats)`],rows:[[`acme_…_17`,`[0.0123, -0.0831, 0.0412, 0.0067, … ]`]]}],why:`Embeddings let the system find the right clause when the analyst’s words differ from the contract’s words. That is the main reason RAG beats keyword search on legal text.`,pitfalls:[`Using one model for documents and another for questions. Vectors from different models are not comparable.`,`Changing the embedding model later means re-embedding everything (a full index re-sync). Choose deliberately. Newer Databricks examples also use <code>databricks-qwen3-embedding-0-6b</code>.`,`Embedding the bare passage without context. The enriched <code>chunk_to_embed</code> retrieves noticeably better.`],objects:[`chunk`,`embedModel`,`vector`]}],c_=`main.provider_ops`,l_=[{lead:`An index is a data structure that finds the nearest vectors without comparing the question against every chunk. Databricks AI Search (formerly Vector Search) builds and serves it, and keeps it in sync with the <code>chunks</code> Delta table.`,happens:[`<b>Create an endpoint.</b> This is the compute that hosts indexes and answers queries. It can be Standard (lowest latency) or Storage-optimized (large corpora, lower cost; triggered sync only).`,`<b>Create a Delta Sync index</b> on <code>main.provider_ops.chunks</code>, with primary key <code>chunk_id</code>, text column <code>chunk_to_embed</code> and model <code>databricks-gte-large-en</code>. AI Search reads the table, embeds every row (step 04), and stores vectors and columns in its own optimised format.`,`<b>Sync on change.</b> With <code>pipeline_type="TRIGGERED"</code>, you call <code>index.sync()</code> after each pipeline run (or schedule it). AI Search reads the table’s <b>Change Data Feed</b>, the list of inserted, updated and deleted rows since the last sync, and embeds only those. <code>CONTINUOUS</code> syncs within seconds but keeps compute running.`,`The index is a Unity Catalog object (<code>main.provider_ops.chunks_index</code>) with its own permissions and lineage back to the PDFs.`],concepts:[{t:`Approximate nearest neighbour (ANN)`,d:`Comparing a question with millions of vectors one by one is slow. ANN indexes (e.g. HNSW graphs) organise vectors so only a small neighbourhood is checked. The answer is near-perfect in milliseconds.`},{t:`Delta Sync vs Direct Vector Access`,d:`<b>Delta Sync</b>: the index mirrors a Delta table automatically, the right choice here. <b>Direct Vector Access</b>: your code upserts and deletes vectors through the API, with no source table.`},{t:`Change Data Feed (CDF)`,d:`A Delta table feature that records row-level changes. It is what makes syncing incremental: one new PDF means ~40 new rows embedded, not 24,000.`},{t:`Why the 3D cloud has clusters`,d:`Chunks about similar topics (claims, credentialing, fee schedules, termination, telehealth) end up near each other. The colours show those neighbourhoods.`}],code:[{label:`Python · create endpoint + index`,lang:`py`,src:`# pip install databricks-ai-search
from databricks.ai_search.client import AISearchClient
client = AISearchClient()

client.create_endpoint_and_wait(name="provider-ops-search",
                                endpoint_type="STANDARD")

index = client.create_delta_sync_index_and_wait(
    endpoint_name="provider-ops-search",
    source_table_name="${c_}.chunks",
    index_name="${c_}.chunks_index",
    pipeline_type="TRIGGERED",
    primary_key="chunk_id",
    embedding_source_column="chunk_to_embed",
    embedding_model_endpoint_name="databricks-gte-large-en")`},{label:`Python · after new PDFs are processed`,lang:`py`,src:`index = client.get_index(index_name="${c_}.chunks_index")
index.sync()          # embeds only rows changed since last sync (via CDF)
print(index.describe()["status"])`},{label:`SQL · prerequisite on the source table`,lang:`sql`,src:`ALTER TABLE ${c_}.chunks
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
FROM ${c_}.eval_questions;`}],io:[{title:`Input · prompt (abridged)`,cols:[`role`,`content`],rows:[[`system`,`Use ONLY the context. Cite each fact as [n]…`],[`user`,`Context: [1] (…acme.pdf p.12) 4.2 Provider shall submit… [2] (…claims_policy p.7) Timely filing: 90 calendar days… Question: What’s the timely-filing limit…`]]},{title:`Output`,cols:[`field`,`value`],rows:[[`answer`,`Out-of-network claims must be filed within 90 days of the date of service [1][2]. Corrected claims follow §4.3 [3].`],[`usage`,`2,431 input · 38 output tokens`]]}],why:`The model adds the language skills: summarising, combining two sources, answering in plain English. The retrieved passages supply the facts. Keeping those roles separate is what makes answers both fluent and verifiable.`,pitfalls:[`A weak system prompt, so the model blends in general knowledge (“usually 365 days…”). Be explicit, and test refusals.`,`Passages without source labels, so the model cannot cite. Always number and label the context.`,`No limits: one runaway client can exhaust quota. Set QPM/TPM rate limits in Unity Gateway.`],objects:[`llm`,`prompt`,`tokens`,`answer`,`citation`]},{lead:`Before anyone relies on the agent, you measure it. MLflow 3 runs the agent on a fixed set of questions with known answers, records a <b>trace</b> of every step, and uses LLM <b>judges</b> to score each answer.`,happens:[`<b>Build an evaluation set.</b> 30–200 real analyst questions, each with the facts a correct answer must contain (<code>expected_facts</code>). This is where the business user’s expertise goes in.`,`<b>Run.</b> <code>mlflow.genai.evaluate</code> calls your <code>predict_fn</code> (the agent) for each question. Because <code>predict_fn</code> is decorated with <code>@mlflow.trace</code>, MLflow records the retrieved chunks, the prompt, the answer, tokens and latency.`,`<b>Judge.</b> Each scorer is an LLM judge with a specific rubric. <b>Correctness</b>: are the expected facts present? <b>RetrievalGroundedness</b>: is every claim supported by the retrieved context? <b>RelevanceToQuery</b>: does it address the question? <b>Safety</b>: is it free of harmful content?`,`<b>Review.</b> The MLflow UI shows pass rates per judge and lets you open any failed trace to see why: wrong retrieval, or a good passage the LLM ignored.`,`<b>Iterate.</b> Change one thing (top-k, prompt, chunking, model), re-run, compare runs side by side. Ship when the scores meet the bar you agreed with the business.`],concepts:[{t:`Trace`,d:`A step-by-step recording of one request: each function call with inputs, outputs and timing. It is the X-ray that explains any answer.`},{t:`LLM-as-a-judge`,d:`Using a strong model, with a narrow rubric, to grade answers. Each judge returns a pass/fail plus a written rationale. It scales human review rather than replacing it.`},{t:`Retrieval vs generation errors`,d:`Low groundedness means the LLM invented things. Correct passages missing from the trace means retrieval failed. Each points to a different fix.`}],code:[{label:`Python · MLflow 3 evaluation`,lang:`py`,src:`import mlflow
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
GRANT USE SCHEMA ON SCHEMA ${c_} TO \`provider-ops-analysts\`;
GRANT SELECT ON TABLE ${c_}.chunks_index TO \`provider-ops-analysts\`;

-- what it costs / who uses it
SELECT * FROM system.serving.endpoint_usage
WHERE request_time > current_date() - INTERVAL 7 DAYS;`}],io:[{title:`Input`,cols:[`what`,`value`],rows:[[`agent project`,`provider-ops/ (code + agent.toml)`],[`profile`,`prod workspace`]]},{title:`Output`,cols:[`what`,`value`],rows:[[`app`,`agent-bricks-provider-ops (Databricks App, 2 instances)`],[`auth`,`Databricks OAuth, user identity on every request`],[`observability`,`MLflow traces · endpoint_usage · inference tables`]]}],why:`Production means governed: the same identities, permissions, lineage and audit logs as the rest of your data platform, with no separate AI silo.`,pitfalls:[`Giving the app’s service principal broad access “to make it work”. Grant only the index and model service.`,`No rate limits. Set Unity Gateway QPM/TPM before opening the app to everyone.`,`Treating launch as the end. Review production traces weekly and add failures to the evaluation set.`],objects:[`endUser`,`gateway`,`app`,`unityCatalog`,`permissions`]}],u_={analyst:{kind:`Business user`,title:`Provider-ops analyst`,what:`The person who answers provider questions: claims limits, fees, credentialing, contract terms.`,how:`Today they search shared folders and read PDFs. With the agent, they ask in plain English and verify the cited page.`,here:`Their questions define the evaluation set (step 08), and their Unity Catalog identity controls which contracts the agent may read for them.`,facts:[[`Wants`,`Fast, correct, cited answers`],[`Cares about`,`Trust: “show me where it says that”`]]},pdfStack:{kind:`Business data`,title:`~600 contract & policy PDFs`,what:`Provider agreements, claims policies, fee schedules and credentialing rules. Long, legal and full of tables.`,how:`They change weekly: amendments, new providers, new fee years. Search by file name or keyword misses clauses that use different wording.`,here:`These are the knowledge source. Steps 02–05 turn them into a searchable index without retraining any model.`,facts:[[`Volume`,`~600 files · ~24,000 chunks`],[`Hard parts`,`Tables, scans, near-duplicate versions`]]},clock:{kind:`Business pain`,title:`20–40 minutes per question`,what:`The time it takes today to locate and confirm one clause.`,how:`Multiply it by dozens of questions a day per analyst. Answers also vary between people.`,here:`Target: under 10 seconds with a citation, measured in production via MLflow traces (latency per request).`},bubble:{kind:`Business question`,title:`A typical question`,what:`“What’s the timely-filing limit for out-of-network claims?”`,how:`Natural language, possibly vague, using different words than the contract (“timely filing” vs “submit within ninety days”).`,here:`This exact question is followed through every step of the walkthrough.`},blueprint:{kind:`Developer solution`,title:`The RAG blueprint`,what:`A chain of managed Databricks components. Each block on the tray is one component, in the order data flows through them.`,how:`Offline: Volume → Delta → AI Functions → Embedding → AI Search. Online: AI Search → LLM. Around both: MLflow (quality) and Agent Runtime/App (delivery).`,here:`Click each block to see what it is. Each one has its own step later in the tour.`},volume:{kind:`Unity Catalog · storage`,title:`Unity Catalog Volume`,what:`A governed folder for <b>files</b>, backed by your cloud object storage (S3 / ADLS / GCS).`,how:`Created with <code>CREATE VOLUME</code>; addressed as <code>/Volumes/&lt;catalog&gt;/&lt;schema&gt;/&lt;volume&gt;/</code>. Files keep their format: a PDF stays a PDF. Access is controlled with <code>READ VOLUME</code> / <code>WRITE VOLUME</code> grants.`,here:`Holds the original contracts at <code>/Volumes/main/provider_ops/contracts/</code>. It is the landing zone and the archive of record.`,code:{lang:`sql`,src:`CREATE VOLUME main.provider_ops.contracts;
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
                                endpoint_type="STANDARD")`}},cluster:{kind:`Vector neighbourhood`,title:`Topic cluster`,what:`A group of chunks about the same subject.`,how:`Nobody labels them. They emerge because the embedding model puts similar meanings close together.`,here:`Claims, credentialing, fee schedules, termination, telehealth.`},queryVector:{kind:`Embedding`,title:`Question vector`,what:`The question, embedded with the same model as the chunks.`,how:`AI Search does this automatically when you pass <code>query_text</code>.`,here:`Lands in the “claims” neighbourhood, next to clause 4.2.`},topk:{kind:`Search result`,title:`Top-k results (k = 5)`,what:`The 5 chunks closest to the question, with similarity scores.`,how:`<code>num_results=5</code>. Optional HYBRID adds keyword relevance; filters restrict by metadata; a reranker can re-order.`,here:`Scores 0.92 → 0.74. Only these 5 reach the LLM.`},prompt:{kind:`Prompt`,title:`Context passages`,what:`The 5 retrieved chunks, numbered and labelled with source and page, inserted into the prompt.`,how:`Assembled by the agent code under a system instruction: “answer only from context, cite [n]”.`,here:`[1] Contract §4.2 p.12 · [2] Claims Policy p.7 · …`},tokens:{kind:`Generation`,title:`Tokens`,what:`The answer being written, one token (~¾ word) at a time.`,how:`Each token is predicted from the prompt and all previous tokens. <code>temperature=0</code> picks the most likely one.`,here:`~38 output tokens for this answer; billing and rate limits count tokens.`},evalSet:{kind:`MLflow dataset`,title:`Evaluation set`,what:`Real questions with the facts a correct answer must include.`,how:`Rows like <code>{"inputs": {"question": …}, "expectations": {"expected_facts": [...]}}</code>. Can live in a Delta table or an MLflow evaluation dataset.`,here:`~50 analyst questions agreed with the business.`},trace:{kind:`MLflow tracing`,title:`Trace`,what:`A recording of one request: retrieval, prompt, LLM call, output, with timings and tokens.`,how:`Captured by <code>@mlflow.trace</code> during evaluation and automatically in production.`,here:`Open a failed question’s trace to see whether retrieval or generation went wrong.`},correctness:{kind:`LLM judge`,title:`Correctness`,what:`Does the answer contain the expected facts?`,how:`Needs <code>expectations</code> (expected_facts or expected_response) in each row.`,here:`Checks “90 days” and “from date of service” are both present.`,code:{lang:`py`,src:`from mlflow.genai.scorers import Correctness`}},groundedness:{kind:`LLM judge`,title:`RetrievalGroundedness`,what:`Is every claim supported by the retrieved context?`,how:`Reads the retrieved chunks from the trace and the answer, and flags unsupported statements.`,here:`Catches the model adding “usually 365 days” from general knowledge.`},relevance:{kind:`LLM judge`,title:`RelevanceToQuery`,what:`Does the answer address the question asked?`,how:`Compares question and answer. It needs no ground truth.`,here:`Fails answers that are correct but about the wrong topic.`},safety:{kind:`LLM judge`,title:`Safety`,what:`Is the response free of harmful or inappropriate content?`,how:`Content-safety rubric applied to every answer.`,here:`Expected 100% for a contracts assistant. Any failure blocks the release.`},gateway:{kind:`Governance`,title:`Unity Gateway`,what:`The control point for all model and MCP traffic (formerly AI Gateway).`,how:`Rate limits per user or endpoint (QPM/TPM, HTTP 429 when exceeded), usage tracking in <code>system.serving.endpoint_usage</code>, inference tables, guardrails.`,here:`Every LLM and embedding call from the agent passes through it.`},unityCatalog:{kind:`Governance`,title:`Unity Catalog`,what:`One governance layer for files, tables, indexes, models and apps.`,how:`Three-level names, grants, row/column security, audit logs and automatic lineage from PDF to answer.`,here:`The dome: everything the agent touches is inside it.`},endUser:{kind:`User`,title:`Analyst using the app`,what:`An authenticated user sending a question.`,how:`Signs in with Databricks OAuth; the request carries their identity to the agent.`,here:`Allowed users get answers; others are stopped (red).`},permissions:{kind:`Unity Catalog grant`,title:`Access denied`,what:`A request from someone without permission on the data.`,how:`Without <code>SELECT</code> on the index (or <code>EXECUTE</code>/access on the model service), the call fails. No data leaves the governed boundary.`,here:`User 3 is not in <code>provider-ops-analysts</code>.`,code:{lang:`sql`,src:"GRANT SELECT ON TABLE main.provider_ops.chunks_index\n  TO `provider-ops-analysts`;"}},cli:{kind:`Developer tool · experimental`,title:`agentbricks deploy`,what:`Agent Bricks CLI command that ships the agent.`,how:`Creates the Databricks App <code>agent-bricks-&lt;name&gt;</code> on Agent Runtime, provisions stores from <code>agent.toml</code>, grants the service principal, enables tracing.`,here:`<code>agentbricks --profile prod deploy provider-ops --instances 2</code>`}},Y={lava:14247227,ember:13075039,amber:12821107,cyan:9086138,mint:9350813,violet:9999285,pink:11766170,white:15328992,steel:2303533},d_=[13208168,9086138,9999285,9350813,12821107],f_=e=>Math.min(1,Math.max(0,e)),X=(e,t,n)=>f_((e-t)/(n-t)),p_=(e,t,n)=>e+(t-e)*n,Z={out:e=>1-(1-e)**3,in:e=>e*e*e,io:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,back:e=>1+2.2*(e-1)**3+1.2*(e-1)**2,elastic:e=>e===0||e===1?e:2**(-10*e)*Math.sin((e*10-.75)*(2*Math.PI/3))+1},m_=(e,t,n)=>{let r=X(e,t,n);return Math.sin(r*Math.PI)},h_=new Map;function Q(e,t=2.2){let n=e+`_`+t;return h_.has(n)||h_.set(n,new zo({color:e,roughness:.42,metalness:.15,emissive:e,emissiveIntensity:Math.min(.38,.06+t*.07),envMapIntensity:.8})),h_.get(n)}function g_(e,t=2.2,n=1){return new zo({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,transparent:!0,opacity:n*.55,depthWrite:!1})}function __(e=16777215,t={}){return new Bo({color:e,metalness:0,roughness:Math.max(.12,t.roughness??.12),transmission:t.transmission??1,thickness:t.thickness??.6,ior:1.45,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:t.env??.9,transparent:!0,opacity:t.opacity??1,attenuationColor:new G(t.tint??e),attenuationDistance:t.att??3,side:t.side??0})}function v_(e=16777215,t=.28,n={}){return new Bo({color:e,metalness:.05,roughness:n.roughness??.35,transparent:!0,opacity:Math.min(.92,t*1.6+.12),clearcoat:.4,clearcoatRoughness:.3,envMapIntensity:.6,depthWrite:!1,side:2,emissive:n.emissive??0,emissiveIntensity:Math.min(.08,n.ei??0)})}function y_(e=2764084,t=.35,n=.9){return new zo({color:e,metalness:Math.min(n,.75),roughness:Math.max(t,.32),envMapIntensity:.9})}function $(e=2764084,t=.7){return new zo({color:e,metalness:.05,roughness:t,envMapIntensity:.6})}function b_(e,t,n=1.6,r=.9){return new Ni(new na(e,20),new xi({color:t,transparent:!0,opacity:r*.5}))}function x_(e,t,n,r=.08,i=4){let a=new Na,o=-e/2,s=-t/2;a.moveTo(o+r,s),a.lineTo(o+e-r,s),a.quadraticCurveTo(o+e,s,o+e,s+r),a.lineTo(o+e,s+t-r),a.quadraticCurveTo(o+e,s+t,o+e-r,s+t),a.lineTo(o+r,s+t),a.quadraticCurveTo(o,s+t,o,s+t-r),a.lineTo(o,s+r),a.quadraticCurveTo(o,s,o+r,s);let c=new vo(a,{depth:Math.max(.001,n-r*2*.5),bevelEnabled:!0,bevelSize:r*.5,bevelThickness:r*.5,bevelSegments:i,curveSegments:i});return c.center(),c}function S_(e,t=``,n=[0,0,0]){let r=document.createElement(`div`);r.className=`lbl `+t,r.innerHTML=e;let i=new qg(r);return i.position.set(...n),i.userData.isLabel=!0,i}var C_=[{t:`PROVIDER CONTRACT`,c:`#b8603e`},{t:`CLAIMS POLICY`,c:`#a8865a`},{t:`CREDENTIALING`,c:`#5f7d96`},{t:`FEE SCHEDULE`,c:`#76709a`},{t:`NETWORK POLICY`,c:`#5f8a76`},{t:`PRIOR AUTH`,c:`#9a7a52`}],w_={};function T_(e=0){if(e%=C_.length,w_[e])return w_[e];let t=C_[e],n=document.createElement(`canvas`);n.width=512,n.height=680;let r=n.getContext(`2d`);r.scale(2,2),r.fillStyle=`#eeebe4`,r.fillRect(0,0,256,340),r.fillStyle=t.c,r.fillRect(20,22,4,26),r.fillStyle=`#2a2c31`,r.font=`600 15px Inter, Helvetica, Arial, sans-serif`,r.fillText(t.t,32,36),r.fillStyle=`#8b8d92`,r.font=`9px Inter, Helvetica, Arial, sans-serif`,r.fillText(`Rev. 2026 · Page 7 of 42`,32,50);let i=72;for(let e=0;e<15;e++)if(e===5||e===11){r.strokeStyle=`#b9b6ae`,r.lineWidth=1,r.strokeRect(20,i,216,34),r.beginPath();for(let e=1;e<4;e++)r.moveTo(20+e*54,i),r.lineTo(20+e*54,i+34);r.moveTo(20,i+12),r.lineTo(236,i+12),r.stroke(),r.fillStyle=`#d9d5cc`,r.fillRect(20,i,216,12),i+=44}else r.fillStyle=e%4==0?`#45474d`:`#a9a8a4`,r.fillRect(20,i,216*(.55+e*37%40/100),e%4==0?6:4),i+=e%4==0?16:12;r.strokeStyle=t.c,r.lineWidth=1.2,r.beginPath(),r.roundRect(196,304,40,18,3),r.stroke(),r.fillStyle=t.c,r.font=`600 10px Inter, Helvetica, Arial, sans-serif`,r.fillText(`PDF`,205,317);let a=new Hi(n);return a.colorSpace=Le,a.anisotropy=8,w_[e]=a,a}var E_=C_.map(e=>new G(e.c).getHex()),D_=new zo({color:14276044,roughness:.9,metalness:0});function O_(e){return new zo({map:e,color:14078924,roughness:.82,metalness:0,envMapIntensity:.5})}function k_(e,t,n,r,i=3422014){let a=i===`paper`?D_:$(i,.55);return new K(new q(e,t,n),[a,a,a,a,O_(r),a])}function A_(e=0,t=1.1,n=1.45){let r=new W,i=k_(t,n,.03,T_(e),`paper`);return r.add(i),r}var j_;function M_(){if(j_)return j_;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,.7)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),j_=new Hi(e),j_}var N_=class{constructor(e=Y.cyan,t=.025,n=3){this.mesh=new K(new Ji(t*.8,t*.8,1,8,1,!0),new zo({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,transparent:!0,opacity:.75})),this.mesh.geometry.translate(0,.5,0),this.mesh.geometry.rotateX(Math.PI/2)}set(e,t,n=1){let r=e.distanceTo(t)*n;this.mesh.position.copy(e),this.mesh.lookAt(t),this.mesh.scale.set(1,1,Math.max(1e-4,r)),this.mesh.visible=n>.001}},P_=class{constructor(e,t=60,n=Y.amber,r=.16,i=.25){this.curve=e,this.n=Math.max(6,Math.round(t*.4)),this.speed=i*.7,t=this.n;let a=new pr;this.pos=new Float32Array(t*3),this.off=new Float32Array(t).map((e,n)=>n/t),a.setAttribute(`position`,new Qn(this.pos,3)),this.mat=new Pi({size:r*.55,map:M_(),color:n,transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:1}),this.points=new zi(a,this.mat),this.points.frustumCulled=!1,this._v=new U}update(e,t=1){for(let t=0;t<this.n;t++){let n=(this.off[t]+e*this.speed)%1;this.curve.getPointAt(n,this._v),this.pos[t*3]=this._v.x,this.pos[t*3+1]=this._v.y,this.pos[t*3+2]=this._v.z}this.points.geometry.attributes.position.needsUpdate=!0,this.mat.opacity=Math.min(.85,t*.8)}};function F_(e=5,t=Y.lava){let n=new W,r=new K(new Ji(e,e*1.015,.34,128),new zo({color:2105896,roughness:.62,metalness:.25,envMapIntensity:.5}));r.position.y=-.17,r.receiveShadow=!0,r.castShadow=!0,n.add(r);let i=new K(new qi(e*.965,128),new zo({color:2764083,roughness:.85,metalness:.05,envMapIntensity:.4}));i.rotation.x=-Math.PI/2,i.position.y=.002,i.receiveShadow=!0,n.add(i);let a=new K(new qi(e*.96,128),new Lo({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uR:{value:e}},vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }`,fragmentShader:`uniform float uR; varying vec2 vP;
      void main(){ float r = length(vP)/uR; float w = fwidth(r*6.);
        float rings = 1.-smoothstep(0.,w*1.2,abs(fract(r*6.)-.5)-.49+w);
        float fade = smoothstep(1.,.35,r);
        gl_FragColor = vec4(vec3(.85,.83,.8), rings*fade*.05); }`}));a.rotation.x=-Math.PI/2,a.position.y=.006,n.add(a);let o=new K(new To(e*.985,.012,6,200),new zo({color:t,emissive:t,emissiveIntensity:.35,roughness:.4}));return o.rotation.x=Math.PI/2,o.position.y=.01,n.add(o),n.userData.uni=a.material.uniforms,n}function I_(e=Y.cyan){let t=new W,n=new zo({color:12170411,roughness:.55,metalness:.05}),r=new zo({color:new G(e).lerp(new G(2829877),.55),roughness:.75,metalness:.02}),i=new K(new wo(.25,40,20),n);i.position.y=1.32,t.add(i);let a=new K(new Ji(.08,.1,.14,16),n);a.position.y=1.08,t.add(a);let o=new K(new Ki(.3,.46,8,28),r);o.position.y=.62,t.add(o);let s=new K(new Ji(.42,.46,.06,40),$(3422014,.6));return s.position.y=.03,t.add(s),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}var L_=new U;function R_(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return e.getWorldScale(L_),Math.min(L_.x,L_.y,L_.z)>.08}var z_=new Gr({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),B_=class e{constructor(e={}){this.group=new W,this.labels=[],this.picks=[],this.local=0,this.loop=e.loop??9,this.accent=e.accent??Y.lava,this.cam={pos:[0,4.3,14.5],target:[0,2.1,0],...e.cam||{}},this.plat=F_(e.radius??6.2,this.accent),this.group.add(this.plat),this.focus=0}addLabel(e,t,n,r=this.group){let i=S_(e,t,n);return i.userData.vis=1,r.add(i),this.labels.push(i),i}show(e,t){e.userData.vis=t}pick(e,t,n=[0,0,0]){e.userData.pickId=t;let r={obj:e,id:t,hs:null};if(n){let i=document.createElement(`button`);i.className=`hs`,i.dataset.id=t,i.setAttribute(`aria-label`,`Inspect`),i.innerHTML=`<i></i>`;let a=new qg(i);a.position.set(...n),a.center.set(.5,.5),e.add(a),r.hs=a}return this.picks.push(r),e}hitBox(e,t,n,r,i=this.group){let a=new K(new q(e,t,n),z_);return a.position.set(...r),a.userData.noShadow=!0,a.userData.hit=!0,a.layers.set(1),i.add(a),a}reset(e=0){this.local=-e}tick(t,n,r){r&&(this.local+=t);let i=Math.max(0,this.local)%this.loop;this.plat.userData.uni.uTime.value=n,this.update(i,n,t);for(let e of this.labels){let t=this.focus*e.userData.vis;e.visible=t>.02,e.visible&&(e.element.style.opacity=t.toFixed(3))}let a=this.focus>.6&&e.hotspots;for(let e of this.picks)if(e.hs){let t=a&&R_(e.obj);e.hs.visible=t,t&&(e.hs.element.style.opacity=Math.min(1,(this.focus-.6)*2.5).toFixed(2))}}update(){}};B_.hotspots=!0;var V_=[{id:`volume`,n:`Volume`},{id:`deltaTable`,n:`Delta table`},{id:`aiParse`,n:`AI Functions`},{id:`embedModel`,n:`Embedding`},{id:`index`,n:`AI Search`},{id:`llm`,n:`LLM`},{id:`judges`,n:`MLflow eval`},{id:`app`,n:`App`}],H_=46;function U_(e){let t=new W,n=Q(Y.lava,1.2),r=y_(9080729,.4,.6),i=$(3816772,.55);if(e===`volume`){let e=new K(new Ji(.3,.3,.5,40),r);e.position.y=.25,t.add(e);let i=new K(new To(.3,.02,6,40),n);i.rotation.x=Math.PI/2,i.position.y=.42,t.add(i)}if(e===`deltaTable`)for(let e=0;e<4;e++){let r=new K(x_(.66,.08,.46,.02),e===3?n:$(9278107,.5));r.position.y=.06+e*.12,t.add(r)}if(e===`aiParse`){let e=k_(.42,.56,.03,T_(0),`paper`);e.position.y=.32,t.add(e);let r=new K(new q(.52,.03,.06),n);r.position.set(0,.38,.04),t.add(r)}if(e===`embedModel`){let e=new K(new To(.26,.07,16,48),r);e.position.y=.36,t.add(e);let i=new K(new wo(.08,16,8),n);i.position.y=.36,t.add(i)}if(e===`index`)for(let e=0;e<14;e++){let r=new K(new wo(.06,12,8),e%4?$(9086138,.45):n);r.position.set(Math.sin(e*2.4)*.24,.32+Math.cos(e*1.7)*.18,Math.cos(e*2.4)*.2),t.add(r)}if(e===`llm`){let e=new K(new xo(.3,1),$(9999285,.4));e.position.y=.36,t.add(e);let n=b_(e.geometry,15328992,1,.3);n.position.copy(e.position),t.add(n)}if(e===`judges`){let e=new K(new Ji(.3,.3,.06,40),i);e.rotation.x=Math.PI/2,e.position.y=.36,t.add(e);let r=new K(new To(.24,.035,8,48,Math.PI*1.6),n);r.position.set(0,.36,.04),t.add(r)}if(e===`app`){let e=new K(x_(.44,.62,.05,.06),i);e.position.y=.36,t.add(e);for(let e=0;e<3;e++){let r=new K(x_(e%2?.26:.2,.08,.02,.03),e%2?n:$(9086138));r.position.set(e%2?-.05:.06,.52-e*.14,.035),t.add(r)}}return t}var W_=class extends B_{constructor(){super({loop:10,radius:7,cam:{pos:[0,5,15.8],target:[0,1.9,0],pk:1.25}});let e=this.group;this.biz=new W,this.biz.position.set(-3.6,0,0),e.add(this.biz);let t=new W;t.position.set(-.6,0,.9),this.biz.add(t);let n=new K(x_(2.2,.08,1,.03),$(4866104,.55));n.position.y=.9,t.add(n),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([e,n])=>{let r=new K(new q(.05,.9,.05),y_(2829876,.4,.6));r.position.set(e*1,.45,n*.42),t.add(r)});let r=new K(x_(.6,.4,.03,.02),$(2829876,.4));r.position.set(.1,1.15,-.1),r.rotation.x=-.25,t.add(r),this.analyst=I_(Y.cyan),this.analyst.position.set(-.6,0,1.9),this.biz.add(this.analyst),this.analyst.rotation.y=Math.PI*.9,this.stack=new mi(new q(.85,.045,1.1),new zo({color:14078924,roughness:.85}),H_),this.stack.position.set(1.5,0,-.4),this.biz.add(this.stack),this._m=new It,this._q=new ft,this._s=new U,this._p=new U,this._e=new Kt,this.jit=Array.from({length:H_},(e,t)=>[Math.sin(t*7.1)*.05,Math.cos(t*3.3)*.05,Math.sin(t*1.9)*.08]),this.stack.computeBoundingSphere=function(){this.boundingSphere=new ar(new U(0,1.1,0),1.3)},this.stack.computeBoundingSphere(),this.addLabel(`≈ 600 contracts &amp; policy PDFs`,`ghost`,[1.5,-.35,.6],this.biz),this.clock=new W,this.clock.position.set(-1.7,3.7,-.6),this.biz.add(this.clock);let i=new K(new Ji(.62,.62,.08,64),$(14868182,.6));i.rotation.x=Math.PI/2,this.clock.add(i);let a=new K(new To(.64,.05,12,64),y_(3816772,.4,.6));this.clock.add(a);for(let e=0;e<12;e++){let t=new K(new q(.03,e%3?.06:.12,.02),$(2829876)),n=e/12*Math.PI*2;t.position.set(Math.sin(n)*.5,Math.cos(n)*.5,.05),t.rotation.z=-n,this.clock.add(t)}this.hMin=new K(new q(.035,.46,.02),$(2829876)),this.hMin.geometry.translate(0,.21,0),this.hMin.position.z=.06,this.clock.add(this.hMin),this.hHr=new K(new q(.05,.3,.02),Q(Y.lava,1.2)),this.hHr.geometry.translate(0,.13,0),this.hHr.position.z=.07,this.clock.add(this.hHr),this.clockLbl=this.addLabel(`20–40 min per question`,`ghost nomob`,[0,.95,0],this.clock),this.bubble=this.addLabel(`“What is the timely-filing limit for Aetna?”`,`bubble cyan`,[-.6,2.55,1.9],this.biz),this.addLabel(`BUSINESS NEED`,`section`,[0,5,0],this.biz);let o=[new U(-1.4,1.6,.4),new U(0,2.3,.6),new U(1.4,1.6,.4)];this.bridgeCurve=new fa(o),this.bridge=new K(new Eo(this.bridgeCurve,60,.025,8),$(9080729,.5)),e.add(this.bridge),this.bridge.geometry.setDrawRange(0,0),this.chev=new K(new Yi(.1,.26,16),Q(Y.lava,1.5)),e.add(this.chev),this.dev=new W,this.dev.position.set(3.7,0,0),this.dev.scale.setScalar(1.18),e.add(this.dev),this.tray=new K(x_(5.4,.12,3.9,.06),$(2435635,.7)),this.tray.position.y=.06,this.dev.add(this.tray);let s=new ec(5.2,26,6122109,3818064);s.position.y=.125,s.material.transparent=!0,s.material.opacity=.35,this.dev.add(s),this.tray.add(b_(this.tray.geometry,7174797,1,.4)),this.blocks=V_.map((e,t)=>{let n=t<4?0:1,r=n?3-(t-4):t,i=new W;i.position.set(-1.95+r*1.3,.12,n?.95:-.95),this.dev.add(i);let a=new K(x_(.95,.14,.95,.04),$(3817287,.55));a.position.y=.07,i.add(a);let o=U_(e.id);return o.position.y=.14,i.add(o),i.userData.ic=o,i.userData.lbl=this.addLabel(`<b>`+(t+1)+`</b> `+e.n,`ghost tiny`,[0,-.18,.62],i),this.pick(i,e.id,t===0||t===5?[.38,.95,0]:null),i});let c=this.blocks.map(e=>e.position.clone().add(new U(0,.12,0))),l=new pr().setFromPoints(c);this.flow=new ki(l,new xi({color:Y.lava,transparent:!0,opacity:.7})),this.flow.position.y=.04,this.dev.add(this.flow),this.addLabel(`DEVELOPER SOLUTION`,`section`,[0,4.25,0],this.dev),this.solLbl=this.addLabel(`RAG agent on Databricks · cited answers in seconds`,`lava nomob`,[0,2.3,-1.6],this.dev),this.pick(this.analyst,`analyst`,[0,1.95,0]),this.pick(this.stack,`pdfStack`,[.55,2.25,0]),this.pick(this.clock,`clock`,[.6,.6,.1]),this.pick(this.hitBox(3.2,.6,.3,[-4.2,2.55,1.9]),`bubble`,null),this.pick(this.tray,`blueprint`,[2.6,.3,1.6])}update(e,t){let n=1-X(e,9.6,10),r=X(e,.2,1.8);for(let e=0;e<H_;e++){let t=X(r*H_,e,e+1),[i,a,o]=this.jit[e];this._p.set(i,.03+e*.048+(1-t)*.6,a),this._e.set(0,o,0),this._q.setFromEuler(this._e),this._s.setScalar(Math.max(1e-4,t*n)),this._m.compose(this._p,this._q,this._s),this.stack.setMatrixAt(e,this._m)}this.stack.instanceMatrix.needsUpdate=!0;let i=m_(e,1,6);this.hMin.rotation.z=-t*(.4+i*6),this.hHr.rotation.z=-t*(.04+i*.5),this.clock.scale.setScalar(Math.max(.001,Z.back(X(e,.6,1.1))*n)),this.show(this.clockLbl,X(e,1.2,1.6)*n),this.show(this.bubble,X(e,1.4,1.8)*n),this.analyst.rotation.y=Math.PI*.9+Math.sin(t*.8)*.15*i;let a=Z.io(X(e,2.6,3.4));this.bridge.geometry.setDrawRange(0,Math.floor(a*n*this.bridge.geometry.index.count/3)*3),this.chev.visible=a>.02&&n>.05,this.bridgeCurve.getPoint(Math.min(.999,a),this._p),this.chev.position.copy(this._p);let o=this.bridgeCurve.getTangent(Math.min(.999,a));this.chev.quaternion.setFromUnitVectors(new U(0,1,0),o),this.blocks.forEach((r,i)=>{let a=Z.back(X(e,3.4+i*.32,3.9+i*.32))*n;r.userData.ic.scale.setScalar(Math.max(.001,a)),r.userData.ic.position.y=.14+Math.sin(t*1.4+i)*.03*a,r.userData.ic.children[0]&&(r.userData.ic.rotation.y=Math.sin(t*.5+i)*.35),this.show(r.userData.lbl,X(e,3.6+i*.32,3.9+i*.32)*n)});let s=X(e,3.6,6.16);this.flow.geometry.setDrawRange(0,Math.max(0,Math.ceil(s*8*n))),this.show(this.solLbl,X(e,6.6,7)*n)}},G_=class extends B_{constructor(){super({loop:9.5,cam:{pos:[0,4.4,15],target:[0,2.2,0]}});let e=this.group;this.user=I_(Y.cyan),this.user.position.set(-5,0,.6),this.user.rotation.y=.5,e.add(this.user),this.qPanel=new K(x_(3.2,1.25,.12,.16),v_(5989488,.5)),this.qPanel.position.set(-3.3,3.35,.4),e.add(this.qPanel),this.qPanel.add(b_(this.qPanel.geometry,Y.cyan,1,.5)),this.qLbl=this.addLabel(`What’s the <b>timely-filing limit</b> for out-of-network claims?`,`bubble cyan`,[0,0,.1],this.qPanel),this.core=new W,this.core.position.set(.6,2.3,0),e.add(this.core),this.shell=new K(new xo(1.25,0),__(16767433,{thickness:1.2,roughness:.05,tint:16747100,att:1.6})),this.core.add(this.shell),this.shellEdges=b_(this.shell.geometry,Y.amber,1,.5),this.core.add(this.shellEdges),this.heart=new K(new xo(.48,2),Q(Y.lava,2)),this.core.add(this.heart),this.halo=new K(new wo(.9,32,16),g_(Y.ember,.6,.1)),this.core.add(this.halo),this.rings=[];for(let e=0;e<3;e++){let t=new K(new To(1.75+e*.28,.018,8,160),y_(e===1?9080729:7040888,.8,.35));t.rotation.set(Math.PI/2+(e-1)*.45,e*.6,0),this.core.add(t),this.rings.push(t)}this.docs=[];for(let e=0;e<4;e++){let t=A_(e,.5,.66);this.core.add(t),this.docs.push(t)}this.addLabel(`RAG agent`,`lava big`,[0,-2.05,0],this.core),this.aPanel=new K(x_(3.3,1.35,.12,.16),v_(7035474,.5)),this.aPanel.position.set(4.9,3.1,.4),e.add(this.aPanel),this.aPanel.add(b_(this.aPanel.geometry,Y.amber,1,.5)),this.aLbl=this.addLabel(`<b>90 days</b> from date of service <span class="cite">§4.2</span><span class="cite">p.7</span>`,`bubble lava`,[0,0,.1],this.aPanel),this.cites=[0,1].map(t=>{let n=A_(t,.42,.55);return e.add(n),n}),this.citeBeams=[0,1].map(()=>{let t=new N_(Y.amber,.014,3);return e.add(t.mesh),t}),this.qOrb=new K(new wo(.16,24,12),Q(Y.cyan,2)),e.add(this.qOrb),this.aOrb=new K(new wo(.16,24,12),Q(Y.amber,2)),e.add(this.aOrb),this.curveQ=new Oa(new U(-3.3,2.7,.4),new U(-1.6,4.4,.6),new U(.6,2.3,0)),this.curveA=new Oa(new U(.6,2.3,0),new U(2.8,4.6,.6),new U(4.9,3.1,.4)),this.sQ=new P_(this.curveQ,40,Y.cyan,.12,.45),e.add(this.sQ.points),this.sA=new P_(this.curveA,40,Y.amber,.12,.45),e.add(this.sA.points),this._v=new U,this.pick(this.user,`analyst`,[0,1.95,0]),this.pick(this.qPanel,`question`,[1.75,.7,.1]),this.pick(this.core,`ragAgent`,[1.3,1.35,0]),this.pick(this.aPanel,`answer`,[1.8,.75,.1]),this.cites.forEach((e,t)=>this.pick(e,`citation`,t?null:[0,.48,.05]))}update(e,t){let n=Z.back(X(e,.3,1));this.qPanel.scale.setScalar(Math.max(.001,n)),this.show(this.qLbl,X(e,.6,1));let r=X(e,1.3,2.6);this.qOrb.visible=r>0&&r<1,this.curveQ.getPoint(Z.io(r),this.qOrb.position),this.sQ.update(t,.15+m_(e,1.2,3)*.9);let i=m_(e,2.4,4.4),a=.4+i*3;this.core.rotation.y+=.004*a*2,this.shell.rotation.x=t*.2,this.shellEdges.rotation.x=t*.2,this.heart.scale.setScalar(1+i*.45+Math.sin(t*4)*.05),this.halo.scale.setScalar(1+i*.6),this.rings.forEach((e,n)=>{e.rotation.z=t*(.3+n*.15)*(1+i*3)}),this.docs.forEach((e,n)=>{let r=t*(.5+i)+n/4*Math.PI*2,a=2.35-i*.9;e.position.set(Math.cos(r)*a,Math.sin(r*1.3+n)*.4,Math.sin(r)*a),e.lookAt(this.core.position.clone().add(new U(0,0,50)))});let o=X(e,4.1,5.1);this.aOrb.visible=o>0&&o<1,this.curveA.getPoint(Z.io(o),this.aOrb.position),this.sA.update(t,.15+m_(e,4,5.6)*.9);let s=Z.back(X(e,4.9,5.5));this.aPanel.scale.setScalar(Math.max(.001,s)),this.show(this.aLbl,X(e,5.2,5.6)),this.cites.forEach((t,n)=>{let r=Z.out(X(e,5.6+n*.25,6.6+n*.25)),i=this._v.set(.6,2.3,0);t.position.set(p_(i.x,4.3+n*1.25,r),p_(i.y,1.4,r),p_(0,.6,r)),t.scale.setScalar(Math.max(.001,r)),t.rotation.y=(1-r)*3,this.citeBeams[n].set(new U(4.3+n*1.25,1.75,.6),new U(4.3+n*1.25,2.45,.45),X(e,6.4,7))});let c=1-X(e,8.8,9.4);this.aPanel.scale.multiplyScalar(c+1e-4),this.qPanel.scale.multiplyScalar(c+1e-4),this.cites.forEach(e=>e.scale.multiplyScalar(c+1e-4)),this.citeBeams.forEach(e=>e.mesh.visible=e.mesh.visible&&c>.05),c<.5&&(this.show(this.aLbl,0),this.show(this.qLbl,0))}},K_=6,q_=class extends B_{constructor(){super({loop:9,cam:{pos:[.3,4.6,15],target:[.3,2,0]}});let e=this.group;this.docs=[];for(let t=0;t<K_;t++){let n=A_(t,.95,1.25);e.add(n),this.docs.push(n)}this.addLabel(`Contract PDFs`,`ghost`,[-5,.15,1.4]),this.vol=new W,this.vol.position.set(0,0,0),e.add(this.vol);let t=new K(new Ji(1.35,1.35,3.2,64,1,!0),__(13625599,{thickness:.4,tint:10475263,att:4,side:2}));t.position.y=1.75,this.vol.add(t);for(let e of[.15,3.35]){let t=new K(new Ji(1.48,1.48,.16,64),y_(2764083,.45,.7));t.position.y=e,this.vol.add(t);let n=new K(new To(1.5,.035,8,120),Q(Y.lava,1));n.rotation.x=Math.PI/2,n.position.y=e+.09,this.vol.add(n)}this.hex=new K(new To(.42,.05,6,6),y_(12821107,.4,.7)),this.hex.position.set(0,4.15,0),this.vol.add(this.hex),this.core=new K(new Ji(.5,.5,2.6,32,1,!0),g_(Y.ember,.4,.12)),this.core.position.y=1.75,this.vol.add(this.core),this.inside=[];for(let e=0;e<K_;e++){let t=new K(new q(.62,.05,.8),$(E_[e],.6));t.position.set(0,.45+e*.42,0),this.vol.add(t),this.inside.push(t)}this.addLabel(`Unity Catalog Volume`,`lava big`,[0,-.55,1.6],this.vol),this.tbl=new W,this.tbl.position.set(5,.2,0),e.add(this.tbl);let n=new K(x_(3.1,3.5,.12,.12),v_(4870752,.35));n.position.set(0,2,-.35),this.tbl.add(n),n.add(b_(n.geometry,Y.cyan,1,.3));let r=new K(x_(2.8,.32,.16,.06),$(3817287,.6));r.position.set(0,3.45,0),this.tbl.add(r),this.rows=[];for(let e=0;e<K_;e++){let t=[];for(let n=0;n<4;n++){let r=[.95,.62,.42,.55],i=[-.86,0,.57,1.11],a=r[n],o=i[n],s=new K(x_(a,.26,.12,.05),n===0?$(E_[e],.55):n===3?$(4869976,.5):$(9278107,.6));s.position.set(o,2.95-e*.42,0),this.tbl.add(s),t.push(s)}this.rows.push(t)}this.delta=new K(new To(.42,.06,8,3),y_(9086138,.4,.7)),this.delta.position.set(0,4.4,0),this.delta.rotation.z=Math.PI/2,this.tbl.add(this.delta),this.addLabel(`Delta table · raw_docs`,`cyan big`,[0,-.4,1],this.tbl),this.addLabel(`<span>path</span><span>modTime</span><span>length</span><span>content</span>`,`cols`,[.1,3.82,.1],this.tbl),this.addLabel(`READ_FILES`,`ghost`,[2.5,3.7,.4]),this.packets=[];for(let t=0;t<K_;t++){let n=new K(new q(.2,.2,.2),$(E_[t],.5));e.add(n),this.packets.push(n)}this.flow=new fa([new U(1.4,2.2,0),new U(2.6,3,.4),new U(3.6,2.5,.2)]),this.stream=new P_(this.flow,30,Y.cyan,.1,.5),e.add(this.stream.points),this._a=new U,this._b=new U,this.docs.forEach((e,t)=>this.pick(e,`pdf`,t===0?[0,.8,.05]:null)),this.pick(this.vol,`volume`,[1.55,3.55,0]),this.pick(this.tbl,`deltaTable`,[1.75,3.5,0]),this.pick(this.hitBox(1.6,1.4,1,[2.5,2.7,.2]),`readFiles`,[0,.35,0])}update(e,t){this.hex.rotation.y=t*.8,this.delta.rotation.y=t*.6,this.core.material.opacity=.18+Math.sin(t*3)*.06;let n=1-X(e,8.5,9);for(let r=0;r<K_;r++){let i=.5+r*.75,a=X(e,i,i+.9),o=this.docs[r],s=-5+(r-2.5)*.16,c=.9+r*.1,l=.3-r*.08;if(a<=0)o.position.set(s,c+Math.sin(t*1.5+r)*.05,l),o.rotation.set(-.15,.35+r*.05,(r-2.5)*.06),o.scale.setScalar(1),o.visible=!0;else{let e=Z.io(a);o.position.set(p_(s,0,e),p_(c,3.6,e)+Math.sin(e*Math.PI)*2.2,p_(l,0,e)),o.rotation.set(-.15+e*-1.2,(.35+r*.05)*(1-e)+e*2,0),o.scale.setScalar(1-e*.75),o.visible=a<1}let u=X(e,i+.8,i+1.1)*n;this.inside[r].scale.set(Math.max(.001,u),1,Math.max(.001,u));let d=X(e,i+1,i+1.7),f=this.packets[r];f.visible=d>0&&d<1,f.visible&&(this.flow.getPoint(Z.io(d),f.position),f.rotation.set(t*3,t*2,0));let p=Z.back(X(e,i+1.6,i+2))*n;this.rows[r].forEach((e,t)=>{e.scale.set(Math.max(.001,p),Math.max(.001,p),1)})}this.stream.update(t,.25+m_(e,1.4,6.4)*.8)}},J_=2,Y_=4,X_=class extends B_{constructor(){super({loop:9,cam:{pos:[.4,4.2,14.5],target:[.4,2.3,0]}});let e=this.group,t=2.4,n=3.2;this.W=t,this.H=n,this.docPos=new U(-3,2.4,0),this.doc=new K(new q(t,n,.05),[y_(13620450,.6,.1),y_(13620450,.6,.1),y_(13620450,.6,.1),y_(13620450,.6,.1),new zo({map:T_(0),color:12106955,emissive:16777215,emissiveMap:T_(0),emissiveIntensity:.07,envMapIntensity:.35,roughness:.5}),y_(12173262,.6,.1)]),this.doc.position.copy(this.docPos),e.add(this.doc),this.scan=new K(new q(t*1.25,.05,.5),Q(Y.cyan,2)),e.add(this.scan),this.scanGlow=new K(new Co(t*1.25,.9),new Lo({transparent:!0,depthWrite:!1,uniforms:{c:{value:new G(Y.cyan)}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform vec3 c; varying vec2 vUv; void main(){ float a = smoothstep(0.,1.,vUv.y)*.22; gl_FragColor = vec4(c, a);}`})),e.add(this.scanGlow),this.addLabel(`ai_parse_document`,`cyan big`,[-3,4.55,.3]);let r=[[0,1.3,2.1,.35],[0,.6,2.1,.75],[0,-.25,2.1,.55],[0,-1.05,2.1,.85]];this.layout=r.map(([t,n,r,i])=>{let a=b_(new Co(r,i),Y.cyan,2.6,.95);return a.position.set(this.docPos.x+t,this.docPos.y+n,.06),e.add(a),a}),this.chunks=[];let i=t/J_,a=n/Y_;for(let r=0;r<Y_;r++)for(let o=0;o<J_;o++){let s=T_(0).clone();s.repeat.set(1/J_,1/Y_),s.offset.set(o/J_,1-(r+1)/Y_),s.needsUpdate=!0;let c=r===2?Y.cyan:r===0?Y.lava:Y.amber,l=[$(3816772,.6),$(3816772,.6),$(3816772,.6),$(3816772,.6),new zo({map:s,color:12106955,emissive:16777215,emissiveMap:s,emissiveIntensity:.07,envMapIntensity:.35,roughness:.5}),$(3816772,.6)],u=new K(new q(i*.97,a*.97,.12),l),d=b_(u.geometry,c,3,1);u.add(d),u.userData.edge=d,u.userData.home=new U(this.docPos.x-t/2+i*(o+.5),this.docPos.y+n/2-a*(r+.5),0);let f=r*J_+o;u.userData.dest=new U(1.7+f%2*1.45,4.2-Math.floor(f/2)*.95,.2+f%2*.15),u.userData.idx=f,e.add(u),this.chunks.push(u)}this.addLabel(`ai_prep_search`,`lava big`,[2.4,5.2,.3]),this.idLbls=this.chunks.filter((e,t)=>t%2==1).map((e,t)=>this.addLabel(`chunk_`+String(t*2+1).padStart(2,`0`),`ghost`,[e.userData.dest.x+1.25,e.userData.dest.y,e.userData.dest.z])),this.cut=new K(new q(t*1.1,.03,.08),Q(Y.lava,5)),e.add(this.cut),this.cutV=new K(new q(.03,n*1.08,.08),Q(Y.lava,5)),e.add(this.cutV),this.pick(this.doc,`pdfPage`,[1.3499999999999999,-1.3,.1]),this.pick(this.hitBox(2.8,.55,.3,[-3,4.55,.3]),`aiParse`,[-1.6,0,0]),this.pick(this.hitBox(2.6,.55,.3,[2.4,5.2,.3]),`aiPrep`,[1.5,0,0]),this.chunks.forEach((e,t)=>this.pick(e,`chunk`,t===1?[.75,.5,.1]:null))}update(e,t){this.W;let n=this.H,r=this.docPos,i=X(e,.4,2.2),a=r.y+n/2+.1-i*(n+.2);this.scan.visible=this.scanGlow.visible=i>0&&i<1,this.scan.position.set(r.x,a,.15),this.scanGlow.position.set(r.x,a+.45,.1),this.layout.forEach((t,n)=>{let r=+(i>(n+.5)/4.6);t.material.opacity=r*(.95-X(e,2.6,3)*.95)});let o=X(e,2.4,3);this.cut.visible=this.cutV.visible=o>0&&o<1,this.cut.position.set(r.x,r.y+n/2-n/Y_*Math.min(3,Math.floor(o*4)+1),.1),this.cut.scale.x=.2+o*4%1,this.cutV.position.set(r.x,r.y,.1),this.cutV.scale.y=o;let s=X(e,3,3.6);this.doc.visible=s<=0,this.chunks.forEach((n,i)=>{n.visible=s>0||e<.01?s>0:!1;let a=n.userData.home,o=n.userData.dest,c=Z.out(s),l=a.x+(a.x-r.x)*.35*c,u=a.y+(a.y-r.y)*.3*c,d=c*(.4+i%3*.3),f=Z.io(X(e,3.8+i*.12,5.2+i*.12));n.position.set(p_(l,o.x,f),p_(u,o.y,f)+Math.sin(f*Math.PI)*.8,p_(d,o.z,f)),n.rotation.set(Math.sin(f*Math.PI)*.5,-.25*f+Math.sin(f*Math.PI)*.8,0),n.scale.setScalar(p_(1,.62,f)*(1-X(e,8.5,9))+1e-4),n.userData.edge.material.opacity=.35+f*.65+Math.sin(t*4+i)*.1,n.position.y+=f*Math.sin(t*1.6+i)*.04}),this.idLbls.forEach((t,n)=>this.show(t,X(e,5.4+n*.1,5.8+n*.1)))}};function Z_(e=7){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Q_(e){let t=0,n=0;for(;t===0;)t=e();return n=e(),Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*n)}var $_=[`Timely filing`,`Credentialing`,`Fee schedules`,`Prior auth`,`Network rules`],ev=[[-1.9,.9,.6],[1.8,1.5,-.6],[.4,-1.3,1.3],[2,-.7,1.4],[-1.4,-1,-1.4]].map(e=>new U(...e));function tv(e=300,t=11){let n=Z_(t),r=[];for(let t=0;t<e;t++){let e=t%5,i=ev[e].clone().add(new U(Q_(n),Q_(n),Q_(n)).multiplyScalar(.48));r.push({p:i,c:e})}let i=new mi(new xo(.065,1),new zo({color:16777215,roughness:.42,metalness:.1,emissive:0}),e),a=new G;r.forEach((e,t)=>{a.set(d_[e.c]),i.setColorAt(t,a)}),i.instanceMatrix.setUsage(He);let o=new W;return ev.forEach((e,t)=>{let n=new Rr(new wr({map:M_(),color:d_[t],transparent:!0,opacity:.08,depthWrite:!1}));n.position.copy(e),n.scale.setScalar(2.6),o.add(n)}),{pts:r,mesh:i,halos:o}}function nv(e=6.4,t=8225420){let n=new W,r=new Ni(new na(new q(e,e,e)),new xi({color:t,transparent:!0,opacity:.35}));n.add(r);let i=new ec(e,8,t,t);i.material.transparent=!0,i.material.opacity=.12,i.position.y=-e/2,n.add(i);let a=new pr().setFromPoints([new U(-e/2,-e/2,-e/2),new U(e/2,-e/2,-e/2),new U(-e/2,-e/2,-e/2),new U(-e/2,e/2,-e/2),new U(-e/2,-e/2,-e/2),new U(-e/2,-e/2,e/2)]);return n.add(new Ni(a,new xi({color:13204056,transparent:!0,opacity:.55}))),n}var rv=6,iv=18,av=class extends B_{constructor(){super({loop:9,cam:{pos:[0,4,14.5],target:[0,2.3,0]}});let e=this.group;this.portal=new W,this.portal.position.set(-.2,2.4,0),e.add(this.portal),this.ring=new K(new To(1.7,.11,24,160),y_(3816772,.35,.75)),this.portal.add(this.ring),this.ringGlow=new K(new To(1.7,.035,8,160),Q(Y.lava,2)),this.ringGlow.position.z=.12,this.portal.add(this.ringGlow),this.ring2=new K(new To(2.05,.015,8,160,Math.PI*1.4),$(9080729,.5)),this.portal.add(this.ring2),this.ring3=new K(new To(2.25,.012,8,160,Math.PI*.8),$(7040888,.5)),this.portal.add(this.ring3),this.swirl=new K(new qi(1.62,96),new Lo({transparent:!0,depthWrite:!1,side:2,uniforms:{uTime:{value:0},uAmp:{value:.5}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float uTime; uniform float uAmp; varying vec2 vUv;
        void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.y,p.x);
          float s = sin(a*5. + r*10. - uTime*2.)*.5+.5;
          vec3 base = vec3(.11,.12,.14);
          vec3 c = mix(base, vec3(.85,.40,.23), s * smoothstep(1.,.1,r) * (.18 + uAmp*.55));
          c = mix(c, vec3(.93,.9,.86), smoothstep(.3,.0,r) * uAmp * .5);
          gl_FragColor = vec4(c, .92); }`})),this.portal.add(this.swirl),this.addLabel(`databricks-gte-large-en`,`violet big`,[0,-2.6,0],this.portal),this.chunks=[];for(let t=0;t<rv;t++){let n=T_(t%3).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,t%4*.25),n.needsUpdate=!0;let r=new K(new q(1.05,.72,.1),[$(3816772,.6),$(3816772,.6),$(3816772,.6),$(3816772,.6),new zo({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),$(3816772,.6)]);r.add(b_(r.geometry,t%3==1?Y.cyan:Y.amber,2.6,1)),e.add(r),this.chunks.push(r)}this.addLabel(`chunks`,`ghost`,[-5.6,.35,.6]);let t=Z_(5);this.vecs=[];let n=new q(.09,1,.09);n.translate(0,.5,0);for(let r=0;r<rv;r++){let i=new mi(n,new zo({color:16777215,roughness:.5,metalness:.1}),iv),a=[],o=new G;for(let e=0;e<iv;e++){let n=.12+t()*.55;a.push(n),o.set(d_[(e+r)%2==0?1:2]).lerp(new G(Y.cyan),t()),i.setColorAt(e,o)}i.userData.h=a,i.frustumCulled=!1,e.add(i),this.vecs.push(i)}this.dims=this.addLabel(`[0.12, −0.83, 0.41, … ] · 1024 dims`,`cyan`,[3.1,5.25,.3]),this._m=new It,this._q=new ft,this._s=new U,this._p=new U,this.sparks=new zi(new pr,new Pi({size:.04,color:Y.amber,transparent:!0,opacity:.55,depthWrite:!1}));let r=new Float32Array(600);this.sparkSeed=new Float32Array(600).map(()=>Math.random()),this.sparks.geometry.setAttribute(`position`,new Qn(r,3)),this.sparks.frustumCulled=!1,this.portal.add(this.sparks),this.pick(this.portal,`embedModel`,[1.75,1.75,0]),this.pick(this.hitBox(1.6,4.2,.8,[-5.4,2.6,.3]),`chunk`,[.2,2.4,0]),this.pick(this.hitBox(3,4.2,.8,[3.2,2.6,.3]),`vector`,[1.7,2,0])}update(e,t){let n=1-X(e,8.5,9),r=0;this.portal.rotation.y=Math.sin(t*.4)*.18,this.ring2.rotation.z=t*.6,this.ring3.rotation.z=-t*.9;for(let i=0;i<rv;i++){let a=.4+i*.85,o=X(e,a,a+1),s=this.chunks[i],c=-5.6+i%2*.4,l=1+i*.62,u=i%2*.3,d=Z.in(o);s.position.set(p_(c,-.2,d),p_(l,2.4,d),p_(u,0,d)),s.rotation.set(0,(1-d)*.35+d*1.2,d*2),s.scale.setScalar(Math.max(.001,(1-d*.9)*(o>=1?0:1))),r=Math.max(r,m_(e,a+.7,a+1.4));let f=X(e,a+.9,a+1.8),p=this.vecs[i];p.visible=f>0;let m=Z.out(f),h=p_(-.2,3.2,m),g=p_(2.4,4.4-i*.62,m),_=p_(0,.3,m);for(let r=0;r<p.count;r++){let o=p.userData.h[r]*(.25+.75*Z.back(X(e,a+1.4+r*.015,a+2+r*.015)));this._p.set(h+(r-iv/2)*.14*m,g-.25,_),this._s.set(1,Math.max(.001,o*(.9+.1*Math.sin(t*3+r+i))*n),1),this._m.compose(this._p,this._q,this._s),p.setMatrixAt(r,this._m)}p.instanceMatrix.needsUpdate=!0}this.swirl.material.uniforms.uTime.value=t,this.swirl.material.uniforms.uAmp.value=r,this.ringGlow.scale.setScalar(1+r*.05);let i=this.sparks.geometry.attributes.position.array;for(let e=0;e<200;e++){let n=this.sparkSeed[e*3]*Math.PI*2+t*(.5+this.sparkSeed[e*3+1]),a=1.75+(t*.6+this.sparkSeed[e*3+2])%1*.9*(.3+r);i[e*3]=Math.cos(n)*a,i[e*3+1]=Math.sin(n)*a,i[e*3+2]=(this.sparkSeed[e*3+2]-.5)*.4}this.sparks.geometry.attributes.position.needsUpdate=!0,this.show(this.dims,X(e,2.6,3.2))}},ov=class extends B_{constructor(){super({loop:10,cam:{pos:[.6,5,15.5],target:[.6,2.6,0]}});let e=this.group;this.space=new W,this.space.position.set(1.4,3.2,0),e.add(this.space),this.space.add(nv(6.2));let{pts:t,mesh:n,halos:r}=tv(320,11);this.pts=t,this.mesh=n,this.space.add(n),this.halos=r,this.space.add(r),this.clLbls=ev.map((e,t)=>this.addLabel($_[t],``,[e.x,e.y+.75,e.z],this.space)),this.clLbls.forEach((e,t)=>{e.element.style.borderColor=`#`+new G(d_[t]).getHexString()}),this.addLabel(`Databricks AI Search index`,`lava big`,[0,-3.75,2.2],this.space),this.tbl=new W,this.tbl.position.set(-4.6,.3,1.2),e.add(this.tbl),this.slabs=[];for(let e=0;e<7;e++){let t=new K(x_(1.7,.2,1.1,.05),e===6?$(Y.mint,.5):$(7305090,.55));t.position.y=.2+e*.27,this.tbl.add(t),this.slabs.push(t)}this.sync=new K(new To(1.45,.04,8,100,Math.PI*1.6),Q(Y.cyan,1.5)),this.sync.position.y=1.1,this.sync.rotation.x=Math.PI/2,this.tbl.add(this.sync),this.arrow=new K(new Yi(.13,.32,16),Q(Y.cyan,1.5)),this.sync.add(this.arrow),this.addLabel(`Delta Sync`,`cyan`,[0,-.45,.9],this.tbl),this.newOrb=new K(new wo(.12,16,8),Q(Y.mint,2)),e.add(this.newOrb),this._m=new It,this._q=new ft,this._s=new U,this._p=new U,this.rack=new W,this.rack.position.set(5.3,0,-2),this.rack.rotation.y=-.5,e.add(this.rack);let i=new K(x_(1,2.3,.85,.05),y_(2829876,.45,.6));i.position.y=1.15,this.rack.add(i),this.leds=[];for(let e=0;e<6;e++){let t=new K(x_(.84,.26,.04,.02),$(1776930,.4));t.position.set(0,.35+e*.33,.44),this.rack.add(t);let n=new K(new q(.1,.03,.02),Q(e%3?Y.mint:Y.lava,2));n.position.set(.28,.35+e*.33,.47),this.rack.add(n),this.leds.push(n)}this.addLabel(`AI Search endpoint`,`ghost`,[0,-.3,.6],this.rack),this.pick(this.mesh,`index`,[0,3.45,0]),this.pick(this.tbl,`chunksTable`,[1.05,2.15,0]),this.pick(this.sync,`deltaSync`,null),this.pick(this.hitBox(1.6,.45,.3,[0,-.45,.9],this.tbl),`deltaSync`,[0,-.42,0]),this.pick(this.rack,`vsEndpoint`,[0,2.65,.3]),this.src=new U(-6,1.3-3.2,1.2)}update(e,t){this.space.rotation.y=t*.12;let n=1-X(e,9.5,10);for(let r=0;r<this.pts.length;r++){let i=this.pts[r],a=r/this.pts.length*2.6,o=Z.out(X(e,.4+a,1.4+a));this._p.lerpVectors(this.src,i.p,o),this._p.y+=Math.sin(o*Math.PI)*1.2;let s=o*n*(1+.25*Math.sin(t*3+r));this._s.setScalar(Math.max(.001,s)),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(r,this._m)}this.mesh.instanceMatrix.needsUpdate=!0,this.halos.children.forEach((r,i)=>{r.material.opacity=.08*X(e,2.5+i*.2,3.6+i*.2)*n*(.85+.15*Math.sin(t*2+i))}),this.clLbls.forEach((t,r)=>this.show(t,X(e,3.6+r*.15,4+r*.15)*n)),this.sync.rotation.z=-t*1.5,this.leds.forEach((e,n)=>{e.visible=Math.sin(t*(3+n)+n*1.7)>-.6}),this.arrow.position.set(1.45*Math.cos(Math.PI*1.6),1.45*Math.sin(Math.PI*1.6),0),this.arrow.rotation.z=Math.PI*1.6+Math.PI;let r=Z.back(X(e,5.4,5.9));this.slabs[6].scale.set(Math.max(.001,r),1,Math.max(.001,r));let i=X(e,6,7.4);if(this.newOrb.visible=i>0&&i<1,this.newOrb.visible){let e=ev[0].clone().applyAxisAngle(new U(0,1,0),this.space.rotation.y).add(this.space.position),t=new U(-4.6,2.3,1.2),n=Z.io(i);this.newOrb.position.lerpVectors(t,e,n),this.newOrb.position.y+=Math.sin(n*Math.PI)*2}}},sv=5,cv=class extends B_{constructor(){super({loop:9.5,cam:{pos:[.4,4.8,15.5],target:[.4,2.7,0]}});let e=this.group;this.space=new W,this.space.position.set(.6,3.1,0),this.space.rotation.y=.5,e.add(this.space),this.space.add(nv(6.2));let{pts:t,mesh:n,halos:r}=tv(320,11);this.pts=t,this.mesh=n,this.space.add(n),this.space.add(r),r.children.forEach(e=>e.material.opacity=.06),this.qLocal=ev[0].clone().add(new U(.15,.1,.1));let i=t.map((e,t)=>({i:t,d:e.p.distanceTo(this.qLocal)})).sort((e,t)=>e.d-t.d);this.nn=i.slice(0,sv).map(e=>e.i),this.nnSet=new Set(this.nn),this.qCard=new K(x_(2.4,.9,.1,.14),v_(5989488,.5)),this.qCard.position.set(-5.6,4.6,.6),e.add(this.qCard),this.qCard.add(b_(this.qCard.geometry,Y.cyan,1,.5)),this.qLbl=this.addLabel(`timely-filing limit?`,`bubble cyan`,[0,0,.1],this.qCard),this.mini=new K(new To(.45,.04,8,64),Q(Y.lava,3.5)),this.mini.position.set(-4,3.2,.5),this.mini.rotation.y=Math.PI/2.4,e.add(this.mini),this.qOrb=new W,e.add(this.qOrb),this.qOrb.add(new K(new wo(.17,24,12),Q(16777215,4))),this.qRing=new K(new To(.32,.02,8,48),Q(Y.cyan,3.5)),this.qOrb.add(this.qRing),this.pulse=new K(new xo(1,3),new Gr({color:Y.cyan,wireframe:!0,transparent:!0,opacity:.2,depthWrite:!1})),this.space.add(this.pulse),this.beams=this.nn.map(()=>{let e=new N_(16777215,.018,3.5);return this.space.add(e.mesh),e}),this.qLbl2=this.addLabel(`your question`,`cyan`,[0,.55,0],this.qOrb),this.out=[];let a=[`0.92`,`0.89`,`0.84`,`0.78`,`0.74`];for(let t=0;t<sv;t++){let n=T_(t%2).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,.25*((t+1)%4)),n.needsUpdate=!0;let r=new K(new q(1.15,.62,.08),[$(3816772,.6),$(3816772,.6),$(3816772,.6),$(3816772,.6),new zo({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),$(3816772,.6)]);r.add(b_(r.geometry,d_[0],3,1)),e.add(r),r.userData.dest=new U(5.7,5-t*.8,.8),r.userData.lbl=this.addLabel(a[t],`lava`,[r.userData.dest.x+1.05,r.userData.dest.y,r.userData.dest.z]),this.out.push(r)}this.topk=this.addLabel(`top-k = 5`,`lava big`,[5.9,.9,.8]),this.pick(this.qCard,`question`,[1.3,.5,.1]),this.pick(this.qOrb,`queryVector`,[.4,.4,0]),this.pick(this.mesh,`index`,[0,3.45,0]),this.out.forEach((e,t)=>this.pick(e,`topk`,t===0?[.7,.42,.1]:null)),this.pick(this.hitBox(2.2,.5,.3,[5.9,.9,.8]),`topk`,null),this._m=new It,this._q=new ft,this._s=new U,this._p=new U,this._w=new U,this.curve=new fa([new U(-5.6,4.1,.6),new U(-4,3.2,.5),new U(-2.2,4.4,.4),new U(0,4,.2)])}update(e,t){let n=1-X(e,9,9.5);this.space.rotation.y=.5+Math.sin(t*.25)*.2,this.space.updateMatrixWorld(),this.mini.rotation.z=t*2,this.qCard.scale.setScalar(Math.max(.001,Z.back(X(e,.2,.7))*n)),this.show(this.qLbl,X(e,.4,.8)*n);let r=this._w.copy(this.qLocal);this.space.localToWorld(r),this.curve.points[3].copy(r);let i=X(e,.9,2.7);this.qOrb.visible=i>0,i<1?this.curve.getPoint(Z.io(i),this.qOrb.position):this.qOrb.position.copy(r),this.qOrb.scale.setScalar(n+.001),this.qRing.rotation.x=t*2,this.qRing.rotation.y=t*1.3,this.show(this.qLbl2,X(e,2.6,3)*n);let a=X(e,2.7,3.7);this.pulse.position.copy(this.qLocal),this.pulse.scale.setScalar(.1+Z.out(a)*1.05),this.pulse.visible=a>0&&n>.05,this.pulse.material.opacity=.2*(1-a*.6);let o=X(e,2.8,3.6)*n;for(let e=0;e<this.pts.length;e++){let n=this.nnSet.has(e)?1+o*1.6+o*.3*Math.sin(t*6):1-o*.55;this._s.setScalar(n),this._m.compose(this.pts[e].p,this._q,this._s),this.mesh.setMatrixAt(e,this._m)}this.mesh.instanceMatrix.needsUpdate=!0,this.beams.forEach((t,r)=>t.set(this.qLocal,this.pts[this.nn[r]].p,Z.out(X(e,3.1+r*.12,3.6+r*.12))*n)),this.out.forEach((t,r)=>{let i=this._p.copy(this.pts[this.nn[r]].p);this.space.localToWorld(i);let a=Z.io(X(e,4.3+r*.18,5.5+r*.18));t.position.lerpVectors(i,t.userData.dest,a),t.position.y+=Math.sin(a*Math.PI)*.8,t.scale.setScalar(Math.max(.001,a*n)),t.rotation.y=(1-a)*4-.25*a,this.show(t.userData.lbl,X(e,5.4+r*.18,5.8+r*.18)*n)}),this.show(this.topk,X(e,6.2,6.6)*n)}},lv=5,uv=22,dv=class extends B_{constructor(){super({loop:10,cam:{pos:[.3,4.4,15.5],target:[.3,2.4,0]}});let e=this.group;this.core=new W,this.core.position.set(0,2.6,0),e.add(this.core),this.shell=new K(new xo(1.55,1),__(14273791,{thickness:1.5,tint:10189823,att:2.2,roughness:.04})),this.core.add(this.shell),this.shellEdges=b_(this.shell.geometry,Y.violet,1,.4),this.core.add(this.shellEdges),this.neural=new K(new xo(.85,3),new Gr({color:12170704,wireframe:!0,transparent:!0,opacity:.3,depthWrite:!1})),this.core.add(this.neural),this.heart=new K(new wo(.42,32,16),Q(Y.violet,2)),this.core.add(this.heart),this.orbits=[];for(let e=0;e<3;e++){let t=new W;t.rotation.set(e*1.05,e*.7,0),this.core.add(t);let n=new K(new To(2.05+e*.22,.012,8,160),y_(e===1?9080729:7040888,.4,.7));t.add(n);let r=new K(new wo(.08,16,8),Q(e===1?Y.lava:15328992,1.5));r.position.x=2.05+e*.22,t.add(r),this.orbits.push(t)}this.addLabel(`Llama 3.3 70B Instruct`,`violet big`,[0,-2.35,.4],this.core),this.qCard=new K(x_(2.2,.62,.1,.12),v_(5989488,.55)),this.qCard.add(b_(this.qCard.geometry,Y.cyan,1,.5)),e.add(this.qCard),this.qLbl=this.addLabel(`question`,`cyan`,[0,0,.1],this.qCard),this.ctx=[];for(let t=0;t<lv;t++){let n=T_(t%2).clone();n.repeat.set(.5,.25),n.offset.set(t%2*.5,.25*((t+1)%4)),n.needsUpdate=!0;let r=new K(new q(1.5,.42,.08),[$(3816772,.6),$(3816772,.6),$(3816772,.6),$(3816772,.6),new zo({map:n,color:12106955,emissive:16777215,emissiveMap:n,emissiveIntensity:.07,envMapIntensity:.35}),$(3816772,.6)]);r.add(b_(r.geometry,Y.amber,3,1)),e.add(r),this.ctx.push(r)}this.ctxLbl=this.addLabel(`context · top 5`,`lava`,[-5.3,.35,.6]),this.tokens=new mi(new q(.16,.16,.16),new zo({color:Y.amber,roughness:.45,metalness:.2}),uv),this.tokens.frustumCulled=!1,e.add(this.tokens),this.outCurve=new fa([new U(1.2,2.8,.3),new U(2.6,4.2,.6),new U(4.2,3.5,.5)]),this.aPanel=new K(x_(3.4,1.4,.12,.16),v_(7035474,.5)),this.aPanel.position.set(5,3.1,.5),e.add(this.aPanel),this.aPanel.add(b_(this.aPanel.geometry,Y.amber,1,.5)),this.aLbl=this.addLabel(`<b>90 days</b> from date of service <span class="cite">1</span><span class="cite">2</span>`,`bubble lava`,[0,0,.1],this.aPanel),this.srcs=[0,1].map(t=>{let n=A_(t,.55,.72);return n.position.set(4.2+t*1.6,1,.6),e.add(n),n}),this.srcLbls=[`Contract §4.2`,`Claims Policy p.7`].map((e,t)=>this.addLabel(e,`ghost`,[4.2+t*1.6,.4,.6])),this.beams=[0,1].map(()=>{let t=new N_(Y.amber,.016,3);return e.add(t.mesh),t}),this._m=new It,this._q=new ft,this._s=new U,this._p=new U,this.pick(this.core,`llm`,[1.65,1.6,0]),this.pick(this.hitBox(1.9,3,.6,[-5.2,2.7,.6]),`prompt`,[1,1.5,0]),this.pick(this.hitBox(3,1.4,.6,[2.7,3.7,.4]),`tokens`,null),this.pick(this.aPanel,`answer`,[1.85,.78,.1]),this.srcs.forEach((e,t)=>this.pick(e,`citation`,t?null:[0,.5,.05]))}update(e,t){let n=1-X(e,9.5,10),r=m_(e,2.6,5.4);this.shell.rotation.y=this.shellEdges.rotation.y=t*.15,this.neural.rotation.y=-t*(.3+r*2.5),this.neural.rotation.x=t*.2,this.neural.material.opacity=.22+r*.25,this.heart.scale.setScalar(1+r*.6+Math.sin(t*5)*.04*(1+r*3)),this.orbits.forEach((e,t)=>{e.rotation.z+=.01*(1+r*5)*(t%2?-1:1)});let i=X(e,.2,.6),a=Z.in(X(e,1.9,2.6));this.qCard.position.set(p_(-5.2,0,a),p_(4.6,2.6,a),p_(.6,0,a)),this.qCard.scale.setScalar(Math.max(.001,Z.back(i)*(1-a))),this.show(this.qLbl,i*(1-X(e,1.8,2))),this.ctx.forEach((t,n)=>{let r=Z.out(X(e,.3+n*.1,.8+n*.1)),i=Z.in(X(e,1+n*.14,1.8+n*.14));t.position.set(p_(-5.2,0,i),p_(3.75-n*.55,2.6,i)+Math.sin(i*Math.PI)*.6,p_(.6,0,i)),t.rotation.set(0,.3*(1-i),i*3),t.scale.setScalar(Math.max(.001,r*(1-i)))}),this.show(this.ctxLbl,X(e,.6,1)*(1-X(e,1.6,1.9)));for(let n=0;n<uv;n++){let r=X(e,4+n*.07,5+n*.07);r>0&&r<1?(this.outCurve.getPoint(Z.io(r),this._p),this._s.setScalar(.6+Math.sin(r*Math.PI)*.6)):this._s.setScalar(1e-4),this._q.setFromEuler(new Kt(t*3+n,t*2,0)),this._m.compose(this._p,this._q,this._s),this.tokens.setMatrixAt(n,this._m)}this.tokens.instanceMatrix.needsUpdate=!0;let o=Z.back(X(e,5.2,5.8))*n;this.aPanel.scale.setScalar(Math.max(.001,o)),this.show(this.aLbl,X(e,5.5,5.9)*n),this.srcs.forEach((r,i)=>{let a=Z.back(X(e,6+i*.2,6.5+i*.2))*n;r.scale.setScalar(Math.max(.001,a)),r.rotation.y=Math.sin(t+i)*.2,r.position.y=1+Math.sin(t*1.5+i)*.06}),this.srcLbls.forEach((t,r)=>this.show(t,X(e,6.3+r*.2,6.7+r*.2)*n)),this.beams.forEach((t,r)=>t.set(new U(4.2+r*1.6,1.4,.6),new U(4.6+r*.9,2.4,.55),X(e,6.6,7.2)*n))}},fv=[{n:`agent`,s:0,d:1,c:Y.lava,ms:`1.42 s`},{n:`retrieve · AI Search`,s:.04,d:.13,c:Y.cyan,ms:`0.18 s`},{n:`llm · Llama 3.3 70B`,s:.2,d:.76,c:Y.violet,ms:`1.08 s`},{n:`cite & format`,s:.96,d:.04,c:Y.mint,ms:`0.05 s`}],pv=[{n:`Correctness`,v:.94},{n:`Grounded`,v:.97},{n:`Relevance`,v:.95},{n:`Safety`,v:1}];function mv(e){return new Lo({transparent:!0,depthWrite:!1,uniforms:{uP:{value:0},uC:{value:new G(e)},uT:{value:0}},vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform float uP; uniform vec3 uC; uniform float uT; varying vec2 vUv;
      void main(){ vec2 p = vUv-.5; float r = length(p)*2.; float a = atan(p.x, p.y)/6.28318+.5;
        float band = smoothstep(.70,.73,r)*smoothstep(.93,.9,r);
        float on = step(a, uP);
        vec3 bg = vec3(.17,.18,.2);
        vec3 c = mix(bg, uC*(.8+.2*sin(a*30.-uT*4.)), on);
        float inner = smoothstep(.62,.6,r)*.05;
        gl_FragColor = vec4(c*band + uC*inner*on*.6, band + inner*.5); }`})}var hv=class extends B_{constructor(){super({loop:9,cam:{pos:[.6,4.3,15],target:[.6,2.6,0]}});let e=this.group;this.panel=new W,this.panel.position.set(-2.4,2.7,0),this.panel.rotation.y=.18,e.add(this.panel);let t=new K(x_(6,3.6,.1,.18),v_(4080460,.55));t.position.z=-.15,this.panel.add(t),t.add(b_(t.geometry,9080729,1,.3)),this.addLabel(`MLflow Trace`,`lava big`,[-2.1,2.15,0],this.panel);for(let e=0;e<=6;e++){let t=new K(new q(.01,3,.01),new Gr({color:7040888,transparent:!0,opacity:.35}));t.position.set(-2.6+5.2/6*e,-.1,-.05),this.panel.add(t)}this.bars=fv.map((e,t)=>{let n=x_(1,.42,.22,.08);n.translate(.5,0,0);let r=new K(n,Q(e.c,1));return r.position.set(-2.6+e.s*5.2,1.1-t*.78,.05),this.panel.add(r),r.userData.w=e.d*5.2,r.userData.lbl=this.addLabel(e.n,``,[t===3?1.2:-2.6+e.s*5.2,1.43-t*.78,.3],this.panel),r.userData.lbl.center.set(0,.5),r.userData.ms=this.addLabel(e.ms,``,[-2.6+(e.s+e.d)*5.2+.05,1.1-t*.78,.35],this.panel),r.userData.ms.center.set(0,.5),r}),this.cursor=new K(new q(.03,3.2,.05),Q(16777215,1.6)),this.panel.add(this.cursor),this.judges=new W,this.judges.position.set(4.3,2.5,.2),this.judges.rotation.y=-.2,e.add(this.judges),this.addLabel(`LLM judges`,`violet big`,[0,2.6,0],this.judges);let n=[Y.amber,Y.cyan,Y.violet,Y.mint];this.gauges=pv.map((e,t)=>{let r=new W;r.position.set((t%2?1:-1)*1.15,t<2?1.05:-1.15,0),this.judges.add(r);let i=new K(new Ji(.95,.95,.12,64),y_(2829876,.4,.6));i.rotation.x=Math.PI/2,i.position.z=-.08,r.add(i);let a=new K(new Co(2,2),mv(n[t]));r.add(a);let o=new W,s=new K(new q(.32,.08,.08),Q(n[t],3));s.position.set(-.13,-.05,0),s.rotation.z=-Math.PI/4,o.add(s);let c=new K(new q(.6,.08,.08),Q(n[t],3));return c.position.set(.12,.06,0),c.rotation.z=Math.PI/4,o.add(c),r.add(o),{grp:r,arc:a,check:o,l:this.addLabel(e.n+` <b>`+Math.round(e.v*100)+`%</b>`,``,[0,-1.22,0],r),v:e.v}}),this.qs=[];for(let t=0;t<8;t++){let t=new K(x_(.36,.24,.06,.05),$(Y.cyan,.5));e.add(t),this.qs.push(t)}this.evalLbl=this.addLabel(`mlflow.genai.evaluate`,`cyan`,[.7,.35,1.8]),this.pick(this.panel,`trace`,[3.1,1.95,0]),[`correctness`,`groundedness`,`relevance`,`safety`].forEach((e,t)=>this.pick(this.gauges[t].grp,e,[.78,.78,.1])),this.qs.forEach(e=>this.pick(e,`evalSet`,null)),this.pick(this.hitBox(2.6,.5,.3,[.7,.35,1.8]),`evalSet`,[1.45,0,0])}update(e,t){let n=1-X(e,8.5,9),r=X(e,.5,3.2);this.cursor.position.set(-2.6+r*5.2,-.1,.15),this.cursor.visible=r>0&&r<1,this.bars.forEach((e,t)=>{let i=fv[t],a=X(r,i.s,i.s+i.d);e.scale.set(Math.max(1e-4,a*e.userData.w),n+1e-4,1),this.show(e.userData.lbl,X(r,i.s,i.s+.05)*n),this.show(e.userData.ms,+(a>=1)*n)}),this.gauges.forEach((r,i)=>{let a=Z.out(X(e,3.4+i*.3,4.8+i*.3));r.arc.material.uniforms.uP.value=a*r.v*n,r.arc.material.uniforms.uT.value=t;let o=Z.back(X(e,4.8+i*.3,5.2+i*.3))*n;r.check.scale.setScalar(Math.max(.001,o)),this.show(r.l,X(e,3.6+i*.3,4+i*.3)*n),r.grp.position.z=Math.sin(t*1.4+i)*.06}),this.qs.forEach((r,i)=>{let a=(t*.35+i/8)%1,o=X(e,3,3.5)*n;r.position.set(p_(1,4.3,a),.3+Math.sin(a*Math.PI)*1.2+i*.02,1+Math.sin(i)*.3),r.scale.setScalar(Math.max(.001,o*Math.sin(a*Math.PI))),r.rotation.y=t+i}),this.show(this.evalLbl,X(e,3.2,3.6)*n)}},gv=5,_v=class extends B_{constructor(){super({loop:11,radius:7,cam:{pos:[0,5.6,17],target:[0,2.4,0]}});let e=this.group;this.beam=new K(new Ji(.9,1.3,9,48,1,!0),g_(Y.amber,1.4,0)),this.beam.position.set(0,4.5,-1.2),e.add(this.beam),this.app=new W,this.app.position.set(0,2.6,-1.2),e.add(this.app);let t=new K(x_(2.5,3.8,.16,.22),y_(2829876,.4,.6));this.app.add(t);let n=new K(x_(2.25,3.5,.05,.16),$(1777188,.35));n.position.z=.1,this.app.add(n),this.app.add(b_(t.geometry,Y.amber,1,.35)),this.msgs=[];for(let e=0;e<5;e++){let t=e%2==0,n=new K(x_(t?1.2:1.55,.36,.06,.1),$(t?9086138:13075039,.5));n.position.set(t?.42:-.25,1.3-e*.6,.18),this.app.add(n),this.msgs.push(n)}this.addLabel(`Databricks App`,`lava big`,[0,2.35,0],this.app),this.addLabel(`Agent Runtime`,`ghost`,[0,-2.25,.3],this.app),this.assets=new W,this.assets.position.set(0,0,-3.6),e.add(this.assets);let r=new W;for(let e=0;e<4;e++){let t=new K(x_(1.1,.14,.8,.04),$(7305090,.55));t.position.y=.3+e*.2,r.add(t)}r.position.x=-3.4,this.assets.add(r);let i=new W;for(let e=0;e<40;e++){let t=new K(new wo(.06,8,6),Q([Y.cyan,Y.violet,Y.amber][e%3],2.6));t.position.set(Math.sin(e*2.3)*.6,.9+Math.cos(e*1.7)*.5,Math.sin(e*.9)*.5),i.add(t)}i.position.x=3.4,this.assets.add(i),this.assetRings=[-3.4,3.4].map(e=>{let t=new K(new To(.95,.02,6,6),Q(Y.mint,3));return t.rotation.x=Math.PI/2,t.position.set(e,.1,0),this.assets.add(t),t}),this.addLabel(`tables`,`ghost`,[-3.4,-.25,.6],this.assets),this.addLabel(`index · model`,`ghost`,[3.4,-.25,.6],this.assets),this.dome=new W,e.add(this.dome);let a=new xo(6.3,2);this.domeLines=new Ni(new na(a),new xi({color:Y.mint,transparent:!0,opacity:.18})),this.dome.add(this.domeLines),this.domeSkin=new K(a,new Gr({color:new G(Y.mint),transparent:!0,opacity:.025,side:1,depthWrite:!1})),this.dome.add(this.domeSkin),this.dome.position.set(0,-.6,-1.6),this.clip=new xr(new U(0,-1,0),0),this.floorClip=new xr(new U(0,1,0),.02),this.domeLines.material.clippingPlanes=[this.clip,this.floorClip],this.domeSkin.material.clippingPlanes=[this.clip,this.floorClip],this.ucLbl=this.addLabel(`Unity Catalog · permissions · lineage`,`mint big`,[0,6.35,-1.6]),this.gate=new W,this.gate.position.set(0,2.2,2.4),e.add(this.gate),this.gateRing=new K(new To(1.25,.09,16,120),y_(3816772,.35,.75)),this.gate.add(this.gateRing),this.gateGlow=new K(new To(1.25,.03,8,120),Q(Y.amber,3.5)),this.gateGlow.position.z=.1,this.gate.add(this.gateGlow),this.gateTicks=new K(new To(1.48,.02,4,24),$(9080729,.5)),this.gate.add(this.gateTicks),this.addLabel(`Unity Gateway`,`lava`,[0,-1.6,0],this.gate),this.users=[],this.reqs=[];for(let t=0;t<gv;t++){let n=-.9+t/4*1.8,r=I_(t===3?Y.lava:Y.cyan);r.scale.setScalar(.75),r.position.set(Math.sin(n)*5.6,0,2.4+Math.cos(n)*2.6),r.lookAt(0,0,0),e.add(r),this.users.push(r);let i=new K(new wo(.11,16,8),Q(t===3?Y.lava:Y.cyan,4));e.add(i),this.reqs.push(i)}this.denied=this.addLabel(`✕ no access`,`lava`,[0,0,0]),this.cmd=this.addLabel(`agentbricks deploy`,`lava big`,[0,.35,2.3]),this._v=new U,this.domeSkin.raycast=()=>{},this.pick(this.app,`app`,[1.45,2,.1]),this.pick(this.gate,`gateway`,[1.35,1.05,0]),this.users.forEach((e,t)=>this.pick(e,t===3?`permissions`:`endUser`,t===3||t===0?[0,2.15,0]:null)),this.pick(this.hitBox(4.6,.5,.3,[0,6.35,-1.6]),`unityCatalog`,[2.6,0,0]),this.pick(this.hitBox(2.6,.45,.3,[0,.35,2.3]),`cli`,null)}update(e,t){let n=1-X(e,10.5,11),r=X(e,.2,1.6);this.beam.material.opacity=m_(e,.2,2.2)*.12,this.beam.scale.set(1-r*.4,1,1-r*.4);let i=Z.back(X(e,.8,1.9));this.app.position.y=p_(-1.6,2.6,i)+Math.sin(t*1.2)*.05,this.app.scale.setScalar(Math.max(.001,Math.min(1,i*1.1))),this.show(this.cmd,m_(e,.1,2.6)),this.msgs.forEach((t,r)=>{let i=Z.back(X(e,4.2+r*.55,4.6+r*.55))*n;t.scale.setScalar(Math.max(.001,i))});let a=Z.io(X(e,1.8,3.4));this.clip.constant=p_(0,7.5,a)*n,this.dome.rotation.y=t*.05,this.domeLines.material.opacity=.15+.04*Math.sin(t*2),this.show(this.ucLbl,X(e,3,3.4)*n),this.assetRings.forEach((r,i)=>{r.rotation.z=t*(i?-.6:.6),r.scale.setScalar(Math.max(.001,Z.back(X(e,2.6+i*.2,3.1+i*.2))*n))}),this.gateTicks.rotation.z=t*.8,this.gate.scale.setScalar(Math.max(.001,Z.back(X(e,2.4,3))*n));let o=null,s=0;this.reqs.forEach((t,r)=>{let i=this.users[r].position,a=e-3.6-r*.35,c=2.2,l=a<0?-1:a%c/c;if(t.visible=l>=0&&n>.1,!t.visible)return;let u=this._v.set(0,2.2,2.4);if(r===3){let e=X(l,0,.45),n=X(l,.5,.95);l<.5?t.position.lerpVectors(new U(i.x,1,i.z),u,Z.io(e)):t.position.lerpVectors(u,new U(i.x,1,i.z),Z.out(n)),t.scale.setScalar(l>.42&&l<.6?1.8:1),l>.42&&l<.9&&(s=1,o=u.clone().add(new U(1.9,.6,0)))}else{let e=new U(0,2.6,-1);l<.4?t.position.lerpVectors(new U(i.x,1,i.z),u,Z.io(X(l,0,.4))):l<.65?t.position.lerpVectors(u,e,Z.io(X(l,.4,.65))):t.position.lerpVectors(e,new U(i.x,1,i.z),Z.io(X(l,.65,1))),t.material=l>=.65?this._ans||=Q(Y.amber,4):this._req||=Q(Y.cyan,4),t.scale.setScalar(1)}}),o&&this.denied.position.copy(o),this.show(this.denied,s);let c=this.reqs.some(e=>e.visible&&e.position.distanceTo(this._v.set(0,2.2,2.4))<.4);this.gateGlow.scale.setScalar(c?1.06:1)}},vv=[{name:`Questions`,steps:[0]},{name:`Store the PDF`,steps:[1,2]},{name:`Text & chunks`,steps:[3,4]},{name:`Vectors`,steps:[5,6]},{name:`Query time`,steps:[7,8]},{name:`Storage map`,steps:[9]}],yv={q:`<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.5V14M12 17h.01"/>`,vol:`<path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3v10c0 1.7-3.6 3-8 3s-8-1.3-8-3z"/><path d="M4 7c0 1.7 3.6 3 8 3s8-1.3 8-3"/>`,bytes:`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h2M11 10h2M15 10h2M7 14h2M11 14h2M15 14h2"/>`,parse:`<path d="M4 4h10l6 6v10H4z"/><path d="M8 12h8M8 15h8M8 18h5"/>`,chunk:`<rect x="3" y="6" width="7" height="12" rx="1"/><rect x="14" y="6" width="7" height="12" rx="1"/><path d="M10 9h4M10 15h4"/>`,embed:`<path d="M4 18V14M8 18V8M12 18v-6M16 18V5M20 18v-9"/>`,index:`<circle cx="6" cy="6" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="8" cy="18" r="2"/><circle cx="17" cy="17" r="2"/><path d="M8 6.5l8 1M7 8l1 8M10 18h5M18 10v5"/>`,query:`<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>`,prompt:`<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>`,map:`<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>`},bv=[{key:`questions`,short:`Questions`,phase:`Questions`,icon:yv.q,title:`Five questions this deep dive answers`,split:{labels:[`Developer questions`,`Short answers`],need:[`Is the <b>text</b> of the PDF saved in the Delta table?`,`How are <b>chunks</b> cut, and how is each one <b>vectorized</b>?`,`How is the <b>question</b> vectorized and matched to a chunk?`,`Does the search look <b>inside the Delta table</b>?`,`<b>Where</b> is each piece stored?`],solution:[`Not at first. The bronze table holds the PDF’s <b>bytes</b>. Text appears only after parsing (silver).`,`Text is split by tokens with overlap, then an embedding model turns each chunk into 1,024 numbers.`,`The <b>same</b> embedding model turns the question into a vector, and the nearest chunk vectors win.`,`No. It searches a separate <b>AI Search index</b> that is kept in sync from the chunks table.`,`Volume → bronze → silver → chunks → index, with models on serving endpoints. All in Unity Catalog.`]},tags:[[`Unity Catalog Volume`,`tool`],[`Delta tables`,`tool`],[`ai_parse_document`,`tool`],[`AI Search index`,`tool`],[`databricks-gte-large-en`,`model`]]},{key:`volume`,short:`Volume`,phase:`Store the PDF`,icon:yv.vol,title:`The PDF is a file in a Unity Catalog Volume`,what:`The original PDF is uploaded as a file, unchanged, to a governed folder`,how:`<code>/Volumes/main/provider_ops/raw_docs/</code>, backed by cloud object storage (S3 / ADLS / GCS)`,why:`The Volume is the source of truth. Every table downstream can be rebuilt from it`,tags:[[`UC Volume`,`tool`],[`Object storage`,`tool`],[`READ VOLUME`,``]]},{key:`bronze`,short:`Bronze bytes`,phase:`Store the PDF`,icon:yv.bytes,title:`Bronze table: the PDF’s bytes, not its text`,what:`Each PDF becomes one row. The <code>content</code> column holds the raw file as BINARY`,how:`<code>spark.read.format("binaryFile")</code> → <code>path · modificationTime · length · content</code>`,why:`You cannot search or read text here yet. <code>content</code> starts with <code>%PDF-1.7</code>, then compressed bytes`,tags:[[`binaryFile`,`tool`],[`Auto Loader`,`tool`],[`BINARY column`,``]]},{key:`parse`,short:`Parse`,phase:`Text & chunks`,icon:yv.parse,title:`Parsing turns bytes into text: the silver table`,what:`A parser reads the bytes and writes the PDF’s words, tables and headings as text`,how:`<code>ai_parse_document(content)</code> → elements (text, table, section_header…) · OCR for scanned pages`,why:`Only now does a Delta table contain the readable text of the PDF`,tags:[[`ai_parse_document`,`tool`],[`OCR / layout model`,`model`],[`VARIANT`,``]]},{key:`chunk`,short:`Chunk`,phase:`Text & chunks`,icon:yv.chunk,title:`Cut the text into overlapping chunks`,what:`Long text is split into passages of ~500 tokens, each sharing ~60 tokens with its neighbour`,how:`Recursive, section-aware splitter (or <code>ai_prep_search</code>) → <code>chunks</code> table with Change Data Feed on`,why:`A chunk is the unit that gets a vector, gets found, and gets pasted into the prompt`,tags:[[`Text splitter`,`tool`],[`Overlap`,``],[`Change Data Feed`,`tool`]]},{key:`embed`,short:`Embed`,phase:`Vectors`,icon:yv.embed,title:`An embedding: a chunk’s meaning as 1,024 numbers`,what:`An embedding model reads a chunk and outputs a fixed-length list of floats`,how:`<code>databricks-gte-large-en</code> → <code>[0.0123, -0.0831, …]</code> (1,024 dims) · similar meaning → nearby vectors`,why:`Distance between vectors becomes a measure of how related two texts are`,tags:[[`databricks-gte-large-en`,`model`],[`Managed embeddings`,`tool`],[`ARRAY&lt;FLOAT&gt;`,``]]},{key:`index`,short:`Index`,phase:`Vectors`,icon:yv.index,title:`The AI Search index: a separate, synced search structure`,what:`Vectors and chosen columns are copied into an ANN graph that lives on an AI Search endpoint`,how:`Delta Sync index reads the chunks table’s <b>Change Data Feed</b> · <code>TRIGGERED</code> or <code>CONTINUOUS</code>`,why:`Fast nearest-neighbour search over millions of vectors, without scanning the table`,tags:[[`Delta Sync index`,`tool`],[`AI Search endpoint`,`tool`],[`HNSW / ANN`,``]]},{key:`query`,short:`Query`,phase:`Query time`,icon:yv.query,title:`Question → vector → nearest chunks in the index`,what:`The question is embedded with the same model, then the index returns the top-k closest chunks`,how:`<code>index.similarity_search(query_text=…, num_results=3)</code> · ANN or hybrid · filters`,why:`The search runs <b>against the index</b>, not the Delta table. It returns chunk_id, text and score`,tags:[[`similarity_search`,`tool`],[`Top-k`,``],[`Hybrid (RRF)`,``]]},{key:`prompt`,short:`Prompt`,phase:`Query time`,icon:yv.prompt,title:`The retriever finds. The LLM only reads.`,what:`The returned chunk texts are pasted into the prompt, then the LLM writes the answer`,how:`Your agent code builds <code>system + [1] [2] [3] + question</code> and calls a chat model endpoint`,why:`The LLM never searches anything. It answers only from the text it was handed`,tags:[[`Retriever`,`tool`],[`Prompt template`,``],[`Chat model endpoint`,`model`]]},{key:`map`,short:`Storage map`,phase:`Storage map`,icon:yv.map,title:`Where everything is stored`,what:`Six places hold six different things, from the PDF file to the vectors`,how:`Volume · bronze · silver · chunks · AI Search index · model serving endpoints`,why:`All of them are Unity Catalog objects, with permissions and lineage end to end`,tags:[[`Unity Catalog`,`tool`],[`Lineage`,``],[`Model Serving`,`tool`]]}],xv=`main.provider_ops`,Sv=`Illustrative values, not real output.`,Cv=[{lead:`Use case 01 followed a question from the user to the answer. This deep dive stays on the developer side and follows <b>one PDF</b> through every place it is stored, until a question can find the right passage by meaning. Each step answers one of five concrete questions.`,happens:[`<b>Is the PDF’s text saved in the Delta table?</b> Not at first. The first table (bronze) stores the file’s <b>bytes</b> in a BINARY column. The text appears in a second table (silver), only after a parser reads those bytes.`,`<b>How are chunks created and vectorized?</b> Code cuts the silver text into overlapping passages of a few hundred tokens. An embedding model turns each passage into 1,024 numbers (a vector).`,`<b>How is the question vectorized?</b> With the <b>same</b> embedding model, at query time, so the question and the chunks live in the same “meaning space”.`,`<b>Where does the search look for the right chunk?</b> In the <b>AI Search index</b> (formerly Vector Search), a separate structure synced from the chunks table. It does not scan the Delta table.`,`<b>Where is everything stored?</b> Volume (file) → bronze (bytes) → silver (text) → chunks (passages) → index (vectors). Models compute but store nothing. Unity Catalog governs all of it.`],concepts:[{t:`Build path vs query path`,d:`The <b>build path</b> (steps 01–06) runs offline whenever a PDF is added or changed. The <b>query path</b> (steps 07–08) runs for every question, in about a second.`},{t:`Medallion layers`,d:`A naming habit: <b>bronze</b> = raw as ingested, <b>silver</b> = cleaned and structured, <b>gold</b> = ready for a use case (here: the chunks table).`},{t:`Running example`,d:`The same as use case 01: <code>acme_provider_agreement.pdf</code> in <code>`+xv+`</code>, and the question “What’s the timely-filing limit for out-of-network claims?”`}],compare:{title:`What exists after each step`,cols:[`Step`,`New thing`,`Contains text?`,`Contains vectors?`],rows:[[`01 Volume`,`PDF file`,`inside the file, compressed`,`no`],[`02 Bronze`,`bronze_docs row`,`no (bytes only)`,`no`],[`03 Parse`,`silver_doc_elements rows`,`<b>yes</b>`,`no`],[`04 Chunk`,`chunks rows`,`yes, in passages`,`no (unless self-managed)`],[`05–06 Embed + index`,`chunks_index`,`synced copy`,`<b>yes</b>`]]},why:`Most RAG bugs come from not knowing which copy of the data you are looking at: fixing text in silver doesn’t change an index that hasn’t synced, and a scanned PDF produces empty chunks if nobody checked the parser output.`,pitfalls:[`Assuming the LLM “reads the PDF”. It only ever sees the few chunks your code pastes into the prompt.`,`Assuming the chatbot queries the Delta table. It queries the index, which may be behind the table until it syncs.`],objects:[`developer`,`q_text`,`q_chunk`,`q_query`,`q_where`,`q_store`,`dataPath`]},{lead:`Before anything is a table, the PDF is a <b>file</b>. It is uploaded to a Unity Catalog <b>Volume</b>, a governed folder in your cloud object storage.`,happens:[`<b>Create the volume.</b> <code>CREATE VOLUME `+xv+`.raw_docs</code>. A managed volume stores files under the schema’s storage location; an external volume points at an existing bucket path.`,`<b>Upload.</b> Through Catalog Explorer, the Databricks CLI, the Files REST API, or a job that copies files from SharePoint or S3.`,`<b>Stored as-is.</b> The file is kept byte for byte. Nothing is parsed or indexed yet.`,`<b>Governed.</b> Reading needs <code>READ VOLUME</code>, writing needs <code>WRITE VOLUME</code>, plus <code>USE CATALOG</code> / <code>USE SCHEMA</code>.`],concepts:[{t:`Volume`,d:`A Unity Catalog object for non-tabular files. Path format: <code>/Volumes/&lt;catalog&gt;/&lt;schema&gt;/&lt;volume&gt;/&lt;file&gt;</code>.`},{t:`Object storage`,d:`S3, ADLS or GCS. Cheap, durable storage for files. Tables in Databricks are also files in object storage (Parquet + a log).`},{t:`Why a PDF is not text`,d:`A PDF is a binary container of compressed drawing instructions and fonts. The visible words are not stored as a simple string, and scanned pages contain only images.`}],code:[{label:`Create + grant`,lang:`sql`,src:`CREATE VOLUME IF NOT EXISTS ${xv}.raw_docs;\nGRANT READ VOLUME ON VOLUME ${xv}.raw_docs TO \`rag-pipeline\`;`},{label:`Upload (CLI)`,lang:`sh`,src:`databricks fs cp ./acme_provider_agreement.pdf \\
  dbfs:/Volumes/main/provider_ops/raw_docs/

databricks fs ls dbfs:/Volumes/main/provider_ops/raw_docs/`},{label:`List (Python)`,lang:`py`,src:`for f in dbutils.fs.ls("/Volumes/main/provider_ops/raw_docs/"):
    print(f.name, f.size)`}],io:[{title:`Volume listing`,cols:[`name`,`size (bytes)`],rows:[[`acme_provider_agreement.pdf`,`2,481,337`],[`claims_policy_2026.pdf`,`1,204,880`],[`fee_schedule_amend_3.pdf`,`318,442`]],note:Sv}],why:`The volume is the source of truth. Every downstream table and the index can be rebuilt from these files, and Unity Catalog lineage starts here.`,pitfalls:[`Uploading to a personal workspace folder instead of a volume. You lose governance and jobs can’t read it reliably.`,`Replacing a file with the same name but forgetting that downstream tables and the index must be refreshed.`],objects:[`ucPath`,`objectStore`,`volume`,`pdfFile`,`volumeLs`]},{lead:`The first Delta table, <b>bronze</b>, stores the PDF as <b>one row of bytes</b>. This answers the first question directly: at this stage the text is <b>not</b> in the table in any readable form.`,happens:[`<b>Read as binary.</b> Spark’s <code>binaryFile</code> source reads each file in the volume as one row, without understanding the format.`,`<b>Four columns.</b> <code>path</code>, <code>modificationTime</code>, <code>length</code> and <code>content</code> (BINARY, the entire file).`,`<b>Write to Delta.</b> The rows are saved as <code>`+xv+`.bronze_docs</code>: Parquet files plus a <code>_delta_log</code>.`,`<b>Incremental.</b> In production, Auto Loader (<code>cloudFiles</code>) picks up only new files, so re-runs don’t re-read everything.`],concepts:[{t:`BINARY column`,d:`A column of raw bytes. SQL can store, copy and pass it to functions, but can’t search words inside it.`},{t:`Delta table`,d:`Parquet data files + a transaction log. Gives ACID writes, versions (time travel) and Change Data Feed.`},{t:`Auto Loader`,d:`<code>spark.readStream.format("cloudFiles")</code> with <code>cloudFiles.format = "binaryFile"</code>. Tracks which files it already ingested.`}],code:[{label:`binaryFile (batch)`,lang:`py`,src:`df = (spark.read.format("binaryFile")\n      .option("pathGlobFilter", "*.pdf")\n      .load("/Volumes/main/provider_ops/raw_docs/"))\n\ndf.printSchema()\n# path: string, modificationTime: timestamp,\n# length: long, content: binary\n\ndf.write.mode("overwrite").saveAsTable("${xv}.bronze_docs")`},{label:`SQL (read_files)`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${xv}.bronze_docs AS\nSELECT path, modificationTime, length, content\nFROM read_files(\n  '/Volumes/main/provider_ops/raw_docs/',\n  format => 'binaryFile');`},{label:`Auto Loader`,lang:`py`,src:`(spark.readStream.format("cloudFiles")\n   .option("cloudFiles.format", "binaryFile")\n   .option("pathGlobFilter", "*.pdf")\n   .load("/Volumes/main/provider_ops/raw_docs/")\n   .writeStream\n   .option("checkpointLocation", "/Volumes/main/provider_ops/chk/bronze")\n   .trigger(availableNow=True)\n   .toTable("${xv}.bronze_docs"))`},{label:`Proof: no text`,lang:`sql`,src:`-- searching the bytes for words finds nothing\nSELECT count(*) FROM ${xv}.bronze_docs\nWHERE CAST(content AS STRING) LIKE '%timely filing%';\n-- 0`}],io:[{title:xv+`.bronze_docs`,cols:[`path`,`modificationTime`,`length`,`content (BINARY)`],rows:[[`…/raw_docs/acme_provider_agreement.pdf`,`2026-10-28 14:02`,`2481337`,`<code>25 50 44 46 2D 31 2E 37 0A 25 E2 E3 …</code>`],[`…/raw_docs/claims_policy_2026.pdf`,`2026-10-28 14:02`,`1204880`,`<code>25 50 44 46 2D 31 2E 36 0A …</code>`]],note:`<code>25 50 44 46</code> is “%PDF”, the header every PDF starts with. The rest is compressed. `+Sv}],why:`Keeping an exact binary copy in Delta means parsing can be re-run with a better parser later without going back to the source systems, and you have a versioned record of which file version was ingested.`,pitfalls:[`Expecting <code>content</code> to be searchable text. It isn’t: casting it to STRING gives garbage.`,`Very large files: bronze rows can be tens of MB. Filter with <code>pathGlobFilter</code> and keep only files you need.`,`Dropping <code>modificationTime</code>. You need it to detect changed files and refresh downstream tables.`],objects:[`pdfFile`,`binaryReader`,`bronzeTable`,`deltaFiles`,`contentCell`,`noText`]},{lead:`<b>Parsing</b> is the step that turns the bytes into words. <code>ai_parse_document</code> reads the BINARY content and returns the document’s text, tables and headings. Written to a <b>silver</b> table, this is the first place the PDF’s text exists as text in Delta.`,happens:[`<b>Call the parser.</b> <code>ai_parse_document(content)</code> runs layout-aware AI models over every page.`,`<b>OCR included.</b> Scanned or image-only pages are read visually, so they also produce text.`,`<b>Structured output.</b> It returns a VARIANT: <code>document.pages[]</code> and <code>document.elements[]</code>. Each element has a <code>type</code> (title, section_header, text, table, figure, page_header, page_footer…), <code>content</code> and a <code>bbox</code> with its page.`,`<b>Flatten to rows.</b> <code>variant_explode</code> turns the element list into one row per element in <code>`+xv+`.silver_doc_elements</code>.`,`<b>Clean.</b> Drop page headers, footers and page numbers; keep section headers to help chunking.`],concepts:[{t:`ai_parse_document`,d:`A Databricks AI Function. Input: BINARY. Output: VARIANT. Needs DBR 17.3+ or serverless SQL; up to 500 pages and 100 MB per document.`},{t:`VARIANT`,d:`A column type for semi-structured JSON-like data. Query fields with <code>parsed:document:elements</code>.`},{t:`Tables in PDFs`,d:`Table elements come back as HTML, so rows and columns survive. Plain text extraction would scramble them.`}],compare:{title:`Parser options`,cols:[``,`ai_parse_document`,`pypdf / pdfminer`,`unstructured / Docling`],rows:[[`Scanned pages (OCR)`,`yes`,`no`,`with extra setup`],[`Tables`,`HTML`,`flattened text`,`yes`],[`Runs as`,`SQL function`,`Python UDF`,`Python UDF / library`],[`Element types`,`yes`,`no`,`yes`]]},code:[{label:`Parse (SQL)`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${xv}.silver_parsed AS\nSELECT path,\n       ai_parse_document(content) AS parsed\nFROM ${xv}.bronze_docs;`},{label:`Explode to silver`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${xv}.silver_doc_elements AS\nSELECT\n  regexp_extract(p.path, '([^/]+)\\\\.pdf$', 1)        AS doc_id,\n  e.pos                                             AS element_pos,\n  e.value:bbox[0]:page_id::INT + 1                  AS page,\n  e.value:type::STRING                              AS element_type,\n  e.value:content::STRING                           AS text\nFROM ${xv}.silver_parsed p,\n  LATERAL variant_explode(p.parsed:document:elements) AS e\nWHERE e.value:type::STRING NOT IN ('page_header','page_footer','page_number');`},{label:`Check errors`,lang:`sql`,src:`SELECT path, parsed:error_status\nFROM ${xv}.silver_parsed\nWHERE parsed:error_status IS NOT NULL;`}],io:[{title:`parser output (VARIANT, shortened)`,cols:[`field`,`value`],rows:[[`document.elements[7].type`,`"section_header"`],[`document.elements[7].content`,`"4. Timely filing"`],[`document.elements[8].type`,`"text"`],[`document.elements[8].content`,`"Out-of-network claims must be submitted within ninety (90) days…"`],[`document.elements[8].bbox[0].page_id`,`11`]],note:Sv},{title:xv+`.silver_doc_elements`,cols:[`doc_id`,`element_pos`,`page`,`element_type`,`text`],rows:[[`acme_provider_agreement`,`7`,`12`,`section_header`,`4. Timely filing`],[`acme_provider_agreement`,`8`,`12`,`text`,`Out-of-network claims must be submitted within ninety (90) days of the date of service…`],[`acme_provider_agreement`,`9`,`12`,`table`,`&lt;table&gt;&lt;tr&gt;&lt;th&gt;Claim type&lt;/th&gt;…`]],note:Sv}],why:`Retrieval quality is capped by parsing quality. If the parser misses a scanned page or garbles a table, no embedding model can find what isn’t there.`,pitfalls:[`Not checking <code>error_status</code>: password-protected or corrupt PDFs silently produce no elements.`,`Keeping headers and footers: “Confidential · Page 12 of 48” repeated in every chunk pollutes search.`,`Re-parsing everything on every run. Parse only new or changed bronze rows; parsing is the most expensive step.`],objects:[`pdfFile`,`parser`,`elements`,`ocr`,`silverTable`,`variantOut`]},{lead:`A 48-page contract is too long to be one search result. <b>Chunking</b> cuts the silver text into passages of a few hundred tokens, with a small <b>overlap</b>, so each passage is precise enough to be a good answer and small enough to paste into a prompt.`,happens:[`<b>Join per section.</b> Concatenate silver elements in reading order, ideally per section_header, so chunks don’t straddle unrelated sections.`,`<b>Split.</b> A recursive splitter tries <code>"\\n\\n"</code> (paragraphs) first, then lines, then sentences, then words, until each piece is ≤ <code>chunk_size</code> tokens.`,`<b>Overlap.</b> Each chunk repeats the last <code>chunk_overlap</code> tokens of the previous one, so a sentence on a boundary is complete somewhere.`,`<b>Keep metadata.</b> Each chunk gets a stable <code>chunk_id</code>, its <code>doc_id</code> and <code>page</code> for citations and filters.`,`<b>Save + enable CDF.</b> Write <code>`+xv+`.chunks</code> and turn on Change Data Feed so the index can sync incrementally.`],concepts:[{t:`Token`,d:`A word piece the model reads. ≈ ¾ of an English word. Sizes are counted in tokens because models have token limits.`},{t:`chunk_size / chunk_overlap`,d:`Typical: 300–800 tokens with 10–15% overlap. Illustrative here: 512 / 64.`},{t:`Section-aware chunking`,d:`Starting a new chunk at each heading and prefixing the heading to the text (“4. Timely filing — …”) gives chunks that make sense on their own.`},{t:`ai_prep_search (Beta)`,d:`A Databricks function that does parse output → chunks in SQL, returning <code>chunk_to_embed</code> (with context) and <code>chunk_to_retrieve</code>. Beta, DBR 18.2+.`}],compare:{title:`Chunk size trade-off`,cols:[``,`Small (≈128)`,`Medium (≈512)`,`Large (≈2,000)`],rows:[[`Precision`,`high`,`good`,`low (mixed topics)`],[`Context per chunk`,`too little`,`good`,`a lot`],[`Prompt cost for k=3`,`tiny`,`moderate`,`high`]]},code:[{label:`Chunk (Python)`,lang:`py`,src:`import tiktoken\nfrom langchain_text_splitters import RecursiveCharacterTextSplitter\n\nenc = tiktoken.get_encoding("cl100k_base")\nsplitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(\n    encoding_name="cl100k_base", chunk_size=512, chunk_overlap=64,\n    separators=["\\n\\n", "\\n", ". ", " "])\n\nels = spark.table("${xv}.silver_doc_elements").toPandas()\nrows = []\nfor (doc, page), g in els.groupby(["doc_id", "page"]):\n    text = "\\n\\n".join(g.sort_values("element_pos").text)\n    doc_type = "policy" if doc.startswith("claims_policy") else "contract"\n    for i, c in enumerate(splitter.split_text(text)):\n        chunk_id = f"{doc}-p{page:03d}-{i:02d}"      # stable id\n        rows.append((chunk_id, doc, doc_type, int(page), c, len(enc.encode(c))))\n\n(spark.createDataFrame(rows,\n    "chunk_id string, doc_id string, doc_type string, page int, chunk_text string, n_tokens int")\n  .write.mode("overwrite").saveAsTable("${xv}.chunks"))`},{label:`ai_prep_search (Beta)`,lang:`sql`,src:`-- Beta · DBR 18.2+\nCREATE OR REPLACE TABLE ${xv}.chunks AS\nSELECT\n  c.value:chunk_id::STRING          AS chunk_id,\n  p.path                            AS doc_id,\n  c.value:chunk_to_embed::STRING    AS chunk_text,\n  c.value:chunk_to_retrieve::STRING AS display_text\nFROM ${xv}.silver_parsed p,\n  LATERAL variant_explode(ai_prep_search(p.parsed):document:contents) AS c;`},{label:`Enable CDF`,lang:`sql`,src:`ALTER TABLE ${xv}.chunks\nSET TBLPROPERTIES (delta.enableChangeDataFeed = true);`}],io:[{title:xv+`.chunks`,cols:[`chunk_id`,`doc_id`,`page`,`chunk_text`,`n_tokens`],rows:[[`acme_pa-0041`,`acme_provider_agreement`,`12`,`4. Timely filing. Out-of-network claims must be submitted within ninety (90) days of the date of service. <b>Claims received after this period will be denied</b>…`,`498`],[`acme_pa-0042`,`acme_provider_agreement`,`12`,`<b>Claims received after this period will be denied</b> unless the provider shows good cause, such as…`,`505`],[`acme_pa-0043`,`acme_provider_agreement`,`13`,`…corrected claims must be resubmitted within 60 days of the original denial…`,`471`]],note:`Bold = the overlap repeated across two chunks. Chunk ids and counts are illustrative; the code builds longer, stable ids such as acme_provider_agreement-p012-00.`}],why:`The chunk is the unit of everything downstream: one chunk = one vector = one search hit = one block of prompt text. Bad cuts give answers that are half-right.`,pitfalls:[`No overlap: the key sentence gets split and neither half matches the question well.`,`Unstable chunk_ids (e.g. random UUIDs on each run): every re-run looks like delete-all + insert-all, so the index re-embeds everything.`,`Forgetting CDF: <code>create_delta_sync_index</code> fails on a table without Change Data Feed.`],objects:[`sourceText`,`splitter`,`chunkCards`,`overlap`,`tokenRuler`,`chunksTable`,`cdf`]},{lead:`An <b>embedding model</b> turns each chunk’s text into a fixed list of numbers (a <b>vector</b>) that captures its meaning. Chunks that mean similar things get vectors that are close together, even with different words.`,happens:[`<b>Input.</b> The chunk text (optionally prefixed with the document title and section).`,`<b>Model call.</b> A request to a model serving endpoint, here <code>databricks-gte-large-en</code>.`,`<b>Output.</b> 1,024 floating-point numbers, e.g. <code>[0.0123, -0.0831, 0.0452, … 1,021 more]</code> (illustrative).`,`<b>Meaning as distance.</b> “90 days to file out-of-network claims” and “timely-filing limit” land near each other; “credentialing requirements” lands far away.`,`<b>Where vectors are stored</b> depends on who computes them: managed (inside the index) or self-managed (a column in your Delta table, then copied to the index).`],concepts:[{t:`Embedding`,d:`A learned mapping from text to a point in a high-dimensional space. It does not store the words; you can’t read the text back from the vector.`},{t:`Dimension`,d:`The length of the vector. gte-large-en: 1,024. All vectors in one index must have the same dimension and come from the same model.`},{t:`Similarity`,d:`How close two vectors are. AI Search uses L2 distance under the hood; for normalized vectors this gives the same ranking as cosine similarity.`}],compare:{title:`Managed vs self-managed embeddings`,cols:[``,`Managed`,`Self-managed`],rows:[[`Who calls the model`,`AI Search, during sync and at query time`,`your code (ai_query, a job, a UDF)`],[`Chunks table has`,`text only`,`text + <code>embedding ARRAY&lt;FLOAT&gt;</code>`],[`Vectors stored in`,`<b>the index</b> (+ optional writeback table)`,`<b>your Delta table and the index</b>`],[`Index parameters`,`<code>embedding_source_column</code>, <code>embedding_model_endpoint_name</code>`,`<code>embedding_vector_column</code>, <code>embedding_dimension</code>`],[`Query with`,`<code>query_text</code>`,`<code>query_vector</code> (you embed the question)`]]},code:[{label:`One embedding (SQL)`,lang:`sql`,src:`SELECT ai_query('databricks-gte-large-en',
  'Out-of-network claims must be submitted within ninety (90) days…') AS v;
-- [0.0123, -0.0831, 0.0452, …]  (ARRAY<FLOAT>, 1024 values)`},{label:`Self-managed column`,lang:`sql`,src:`CREATE OR REPLACE TABLE ${xv}.chunks_vec\nTBLPROPERTIES (delta.enableChangeDataFeed = true) AS\nSELECT *, ai_query('databricks-gte-large-en', chunk_text) AS embedding\nFROM ${xv}.chunks;`},{label:`Python (SDK)`,lang:`py`,src:`from mlflow.deployments import get_deploy_client
client = get_deploy_client("databricks")
r = client.predict(endpoint="databricks-gte-large-en",
                   inputs={"input": ["Out-of-network claims must be submitted within 90 days…"]})
vec = r["data"][0]["embedding"]
print(len(vec))   # 1024`}],io:[{title:`chunk → vector`,cols:[`chunk_id`,`chunk_text`,`embedding (first 4 of 1,024)`],rows:[[`acme_pa-0041`,`4. Timely filing. Out-of-network claims must be submitted within ninety (90) days…`,`[0.0123, -0.0831, 0.0452, 0.0017, …]`],[`acme_pa-0042`,`Claims received after this period will be denied unless…`,`[0.0098, -0.0790, 0.0511, -0.0042, …]`]],note:Sv+` Neighbouring chunks have similar numbers because they mean similar things.`}],why:`Embeddings are what let the search find “90 days” when the user typed “timely-filing limit”. Keyword search alone would miss many such matches.`,pitfalls:[`Mixing models: chunks embedded with model A and questions with model B give meaningless distances.`,`Changing the embedding model means re-embedding every chunk (a full index rebuild).`,`Embedding very long chunks: meaning gets averaged out and matches get fuzzy.`],objects:[`chunkIn`,`embedModel`,`vectorStrip`,`meaningSpace`,`managedOpt`,`selfOpt`]},{lead:`The vectors go into a <b>Databricks AI Search index</b> (formerly Vector Search): a separate, search-optimized copy of the chunks that lives on an AI Search endpoint. It is <b>synced</b> from the chunks Delta table, but it is not the Delta table.`,happens:[`<b>Create an endpoint.</b> The compute that hosts indexes: <code>STANDARD</code> or <code>STORAGE_OPTIMIZED</code>.`,`<b>Create a Delta Sync index.</b> Point it at <code>`+xv+`.chunks</code>, name the primary key, the text column and the embedding model.`,`<b>Initial sync.</b> AI Search reads every row, calls the embedding model (managed mode), and builds an ANN graph (HNSW) of all vectors.`,`<b>Incremental sync.</b> Afterwards it reads the table’s Change Data Feed: inserts are embedded and added, updates re-embedded, deletes removed.`,`<b>Copied columns.</b> The index stores the vectors, the primary key and every column in <code>columns_to_sync</code> (e.g. chunk_text, doc_id, page), so it can return them without reading Delta.`],concepts:[{t:`ANN / HNSW`,d:`Approximate Nearest Neighbour search over a Hierarchical Navigable Small World graph: layers of linked vectors that let a search find close neighbours by checking only a small fraction of all vectors.`},{t:`Delta Sync index`,d:`An index that follows a Delta table automatically. The alternative, a Direct Vector Access index, is written to with your own upsert/delete API calls.`},{t:`pipeline_type`,d:`<code>TRIGGERED</code>: updates when you call <code>sync()</code>. <code>CONTINUOUS</code>: streams changes within seconds (costs more). Storage-optimized endpoints support triggered only.`},{t:`Unity Catalog object`,d:`The index has a three-part name (<code>`+xv+`.chunks_index</code>) and needs <code>SELECT</code> to query, like a table.`}],compare:{title:`Delta table vs AI Search index`,cols:[``,`chunks (Delta)`,`chunks_index (AI Search)`],rows:[[`Built for`,`storage, SQL, updates`,`nearest-neighbour search`],[`Holds`,`rows of text`,`vectors + synced columns`],[`Lives in`,`your cloud storage`,`the AI Search endpoint`],[`Read at query time?`,`<b>no</b>`,`<b>yes</b>`],[`Updated by`,`your pipeline`,`Delta Sync from the table`]]},code:[{label:`Endpoint`,lang:`py`,src:`%pip install databricks-ai-search   # formerly databricks-vectorsearch
from databricks.ai_search.client import AISearchClient

client = AISearchClient()
client.create_endpoint(name="provider-ops-search", endpoint_type="STANDARD")`},{label:`Delta Sync index`,lang:`py`,src:`index = client.create_delta_sync_index(\n    endpoint_name="provider-ops-search",\n    source_table_name="${xv}.chunks",\n    index_name="${xv}.chunks_index",\n    pipeline_type="TRIGGERED",\n    primary_key="chunk_id",\n    embedding_source_column="chunk_text",              # managed embeddings\n    embedding_model_endpoint_name="databricks-gte-large-en",\n    columns_to_sync=["chunk_id", "chunk_text", "doc_id", "page", "doc_type"],\n)`},{label:`Sync + status`,lang:`py`,src:`index = client.get_index(index_name="${xv}.chunks_index")\nindex.sync()                      # TRIGGERED: pull new CDF changes now\nprint(index.describe()["status"]) # e.g. ONLINE, indexed_row_count`},{label:`Self-managed variant`,lang:`py`,src:`client.create_delta_sync_index(\n    endpoint_name="provider-ops-search",\n    source_table_name="${xv}.chunks_vec",\n    index_name="${xv}.chunks_vec_index",\n    pipeline_type="TRIGGERED",\n    primary_key="chunk_id",\n    embedding_vector_column="embedding",\n    embedding_dimension=1024,\n)`}],io:[{title:`What the index holds per chunk`,cols:[`chunk_id (pk)`,`vector`,`chunk_text`,`doc_id`,`page`],rows:[[`acme_pa-0041`,`[0.0123, -0.0831, … ×1024]`,`4. Timely filing. Out-of-network claims…`,`acme_provider_agreement`,`12`],[`acme_pa-0042`,`[0.0098, -0.0790, … ×1024]`,`Claims received after this period…`,`acme_provider_agreement`,`12`]],note:Sv}],why:`Searching millions of 1,024-number vectors by brute force on every question would be slow. The index pre-organizes them so a query takes milliseconds, and Delta Sync keeps it consistent with your table without custom code.`,pitfalls:[`Forgetting to call <code>sync()</code> on a TRIGGERED index after the pipeline runs: the chatbot keeps answering from old chunks.`,`Leaving a column out of <code>columns_to_sync</code>, then trying to filter or return it.`,`Assuming “I updated the Delta table” means “the answer changed”. Check the index status and last sync time.`],objects:[`chunksSrc`,`cdfPipe`,`syncEmbed`,`endpoint`,`hnsw`,`syncMode`,`writeback`]},{lead:`At question time the same idea runs in reverse: the question is turned into a vector with the <b>same model</b>, and the <b>index</b> returns the chunks whose vectors are closest. This is where “the right chunk” is found, and it is not in the Delta table.`,happens:[`<b>Question in.</b> “What’s the timely-filing limit for out-of-network claims?”`,`<b>Embed.</b> AI Search sends <code>query_text</code> to <code>databricks-gte-large-en</code> (managed mode) and gets a 1,024-number query vector.`,`<b>Walk the graph.</b> The HNSW search enters the top layer, moves towards the query vector, drops layer by layer, and collects the nearest chunk vectors at the bottom.`,`<b>Hybrid (optional).</b> <code>query_type="HYBRID"</code> also runs a keyword search and merges both rankings with Reciprocal Rank Fusion. Helps with exact terms like codes or names.`,`<b>Filter + top-k.</b> Filters restrict candidates (e.g. only contracts); <code>num_results</code> sets k. The index returns the synced columns plus a score.`],concepts:[{t:`Top-k`,d:`How many nearest chunks to return. Typical 3–10. More = more context and cost; fewer = risk of missing the answer.`},{t:`Score`,d:`Higher = closer meaning. Use it to rank and to drop weak matches, not as an absolute probability.`},{t:`Query types`,d:`<code>ANN</code> (default, vectors only), <code>HYBRID</code> (vectors + keywords), <code>FULL_TEXT</code> (keywords only, Beta).`},{t:`Reranker (optional)`,d:`A second model re-scores the top results by reading question and chunk together. More accurate, a little slower.`}],code:[{label:`similarity_search`,lang:`py`,src:`index = client.get_index(index_name="${xv}.chunks_index")\n\nres = index.similarity_search(\n    query_text="What's the timely-filing limit for out-of-network claims?",\n    columns=["chunk_id", "chunk_text", "doc_id", "page"],\n    num_results=3,\n    query_type="HYBRID",                # or "ANN"\n    filters={"doc_type": "contract"},   # standard endpoint: dict filter\n)`},{label:`Result (JSON)`,lang:`py`,src:`# illustrative output
{"manifest": {"columns": [{"name": "chunk_id"}, {"name": "chunk_text"},
                          {"name": "doc_id"}, {"name": "page"}, {"name": "score"}]},
 "result": {"row_count": 3, "data_array": [
   ["acme_pa-0041", "4. Timely filing. Out-of-network claims must be submitted within ninety (90) days…", "acme_provider_agreement", 12, 0.89],
   ["claims_policy-0107", "Timely filing: unless a contract says otherwise, claims are due within 90 days…", "claims_policy_2026", 7, 0.81],
   ["acme_pa-0043", "…corrected claims must be resubmitted within 60 days of the original denial…", "acme_provider_agreement", 13, 0.62]]}}`},{label:`Self-managed query`,lang:`py`,src:`from mlflow.deployments import get_deploy_client
qv = get_deploy_client("databricks").predict(endpoint="databricks-gte-large-en",
        inputs={"input": [question]})["data"][0]["embedding"]
res = vec_index.similarity_search(query_vector=qv,
        columns=["chunk_id", "chunk_text"], num_results=3)`},{label:`SQL`,lang:`sql`,src:`SELECT *\nFROM vector_search(\n  index => '${xv}.chunks_index',\n  query_text => 'What''s the timely-filing limit for out-of-network claims?',\n  num_results => 3);`}],io:[{title:`Top-3 candidates`,cols:[`rank`,`chunk_id`,`page`,`score`,`why it matched`],rows:[[`1`,`acme_pa-0041`,`12`,`0.89`,`same topic, states the 90-day rule`],[`2`,`claims_policy-0107`,`7`,`0.81`,`general policy, also 90 days`],[`3`,`acme_pa-0043`,`13`,`0.62`,`related (resubmission), weaker`]],note:`Scores are illustrative. Note the question never says “ninety” or “90”; the match is by meaning.`}],why:`This step answers “where does the model look for the right chunk?”: the embedding model only makes the query vector, the AI Search index does the looking, and the LLM is not involved yet.`,pitfalls:[`Querying with a different embedding model than the index uses (self-managed mode).`,`Filtering on a column that isn’t in <code>columns_to_sync</code>.`,`Trusting rank 3 blindly: low-score chunks can mislead the LLM. Consider a score cutoff or a reranker.`],objects:[`question`,`sameModel`,`queryVector`,`annWalk`,`topK`,`filters`,`noScan`]},{lead:`The retrieved chunks are <b>pasted as text into the prompt</b>. The LLM then reads that prompt and writes the answer. It never searches the index or the tables itself.`,happens:[`<b>Retrieve.</b> Your retriever code calls <code>similarity_search</code> (step 07) and gets 3 chunks with ids and pages.`,`<b>Assemble.</b> Build a prompt: instructions (“answer only from the context, cite [n]”), the chunks labelled [1] [2] [3], then the question.`,`<b>Generate.</b> Send it to a chat endpoint, here <code>databricks-meta-llama-3-3-70b-instruct</code>.`,`<b>Cite.</b> The answer’s [n] markers map back to chunk_id → doc → page, so the user can verify.`],concepts:[{t:`Context window`,d:`The maximum prompt length a model accepts. 3 chunks × ~500 tokens + instructions ≈ 2,000 tokens, far below typical limits.`},{t:`Grounding`,d:`Instructing the model to answer only from the supplied context and to say “I don’t know” otherwise. Reduces made-up answers.`},{t:`Retriever tool`,d:`In agent frameworks the retrieval call is wrapped as a tool, e.g. <code>VectorSearchRetrieverTool</code> in <code>databricks-langchain</code>. The agent decides to call it, but the search still runs in the index.`}],code:[{label:`Assemble + call`,lang:`py`,src:`from openai import OpenAI   # Databricks endpoints are OpenAI-compatible

rows = res["result"]["data_array"]
context = "\\n\\n".join(f"[{i+1}] ({r[2]}, p.{r[3]}) {r[1]}" for i, r in enumerate(rows))

messages = [
  {"role": "system", "content": "Answer only from the CONTEXT. Cite sources as [n]. "
                                "If the answer is not in the CONTEXT, say you don't know."},
  {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION: {question}"},
]

llm = OpenAI(api_key=DATABRICKS_TOKEN, base_url=f"{WORKSPACE_URL}/serving-endpoints")
out = llm.chat.completions.create(model="databricks-meta-llama-3-3-70b-instruct",
                                  messages=messages, temperature=0)
print(out.choices[0].message.content)`}],io:[{title:`The prompt the LLM receives`,cols:[`part`,`text`],rows:[[`SYSTEM`,`Answer only from the CONTEXT. Cite sources as [n]. If the answer is not in the CONTEXT, say you don’t know.`],[`CONTEXT [1]`,`(acme_provider_agreement, p.12) 4. Timely filing. Out-of-network claims must be submitted within ninety (90) days of the date of service…`],[`CONTEXT [2]`,`(claims_policy_2026, p.7) Timely filing: unless a contract says otherwise, claims are due within 90 days…`],[`CONTEXT [3]`,`(acme_provider_agreement, p.13) …corrected claims must be resubmitted within 60 days…`],[`USER`,`What’s the timely-filing limit for out-of-network claims?`]]},{title:`Answer`,cols:[`LLM output`],rows:[[`Out-of-network claims must be filed within 90 days of the date of service [1][2]. Corrected claims have 60 days from the original denial [3].`]],note:Sv}],why:`Separating “find” (index) from “write” (LLM) is what makes RAG controllable: you can inspect exactly which chunks the answer was based on, fix retrieval without touching the model, and govern access at the index.`,pitfalls:[`Pasting too many chunks: cost rises and the relevant sentence gets buried.`,`No “I don’t know” instruction: the model fills gaps from general knowledge.`,`Dropping the source/page from the context: you lose citations.`],objects:[`retriever`,`promptPanel`,`llm`,`answer`]},{lead:`The whole path on one map: six places, two flows. The orange <b>build path</b> runs when documents change; the cyan <b>query path</b> runs per question. Unity Catalog governs every object.`,happens:[`<b>Build path:</b> Volume (PDF file) → bronze (bytes) → silver (text) → chunks (passages) → AI Search index (vectors), with Model Serving embedding the chunks during sync.`,`<b>Query path:</b> question → Model Serving (embed the question) → AI Search index (nearest chunks) → your code builds the prompt → Model Serving (LLM writes the answer).`,`<b>Not on the query path:</b> the Volume, bronze, silver and the chunks Delta table. They are only read when building or refreshing the index.`],concepts:[{t:`Lineage`,d:`Unity Catalog records which tables were built from which, so you can trace an answer’s chunk back to the exact PDF.`},{t:`Freshness`,d:`An answer is only as fresh as the last index sync. Monitor the index’s last sync time alongside your pipeline.`}],compare:{title:`What each store holds`,cols:[`#`,`Store`,`UC name`,`Holds`,`Text?`,`Vectors?`,`Read at query time?`],rows:[[`1`,`Volume`,`<code>`+xv+`.raw_docs</code>`,`original PDF files`,`inside the file`,`no`,`no`],[`2`,`Bronze table`,`<code>`+xv+`.bronze_docs</code>`,`path, length, content BINARY`,`<b>no</b>`,`no`,`no`],[`3`,`Silver table`,`<code>`+xv+`.silver_doc_elements</code>`,`parsed elements`,`<b>yes</b>`,`no`,`no`],[`4`,`Chunks table`,`<code>`+xv+`.chunks</code>`,`passages + metadata`,`yes`,`only if self-managed`,`no`],[`5`,`AI Search index`,`<code>`+xv+`.chunks_index</code>`,`vectors + synced columns`,`synced copy`,`<b>yes</b>`,`<b>yes</b>`],[`6`,`Model Serving`,`<code>databricks-gte-large-en</code>, <code>databricks-meta-llama-3-3-70b-instruct</code>`,`models (compute)`,`no`,`no`,`yes (compute only)`]]},code:[{label:`Inspect every store`,lang:`sql`,src:`LIST '/Volumes/main/provider_ops/raw_docs/';\nDESCRIBE TABLE ${xv}.bronze_docs;          -- content: binary\nSELECT element_type, text FROM ${xv}.silver_doc_elements LIMIT 5;\nSELECT chunk_id, chunk_text FROM ${xv}.chunks LIMIT 5;\nSELECT * FROM vector_search(index => '${xv}.chunks_index',\n  query_text => 'timely filing', num_results => 3);`},{label:`Grants`,lang:`sql`,src:`GRANT USE CATALOG ON CATALOG main TO \`provider-ops-bot\`;\nGRANT USE SCHEMA  ON SCHEMA  ${xv} TO \`provider-ops-bot\`;\nGRANT SELECT      ON TABLE   ${xv}.chunks_index TO \`provider-ops-bot\`;`}],why:`Knowing which store holds what turns debugging from guesswork into a checklist: missing text → check silver; wrong passage → check chunks and the index; stale answer → check the last sync.`,pitfalls:[`Granting the chatbot access to bronze/silver “just in case”. It only needs the index and the model endpoints.`,`Deleting a PDF from the volume and assuming it is gone from answers. The rows must be deleted downstream and the index synced.`],objects:[`mapVolume`,`mapBronze`,`mapSilver`,`mapChunks`,`mapIndex`,`mapModels`,`mapUC`]}],wv=`main.provider_ops`,Tv={developer:{kind:`Role`,title:`You, the developer`,what:`The person who builds the pipeline that turns PDFs into something a chatbot can search.`,how:`You write a few notebooks or a Lakeflow pipeline: ingest → parse → chunk → index. Then you write the retriever and prompt code that runs per question.`,here:`Use case 01 showed this from the user’s side. Here we open the box and follow one PDF through every table and index.`},q_text:{kind:`Question 1`,title:`Is the PDF’s text in the Delta table?`,what:`Short answer: <b>not in the first table</b>. Reading a PDF with <code>binaryFile</code> stores its raw bytes in a BINARY column.`,how:`Text appears only after a parser (<code>ai_parse_document</code>) reads those bytes and writes the words into a new, silver table.`,here:`See steps 02 (bronze bytes) and 03 (silver text).`},q_chunk:{kind:`Question 2`,title:`How are chunks cut and vectorized?`,what:`The text is split into passages of a few hundred tokens that overlap a little. Each passage is sent to an embedding model, which returns 1,024 numbers.`,how:`The splitter is ordinary code (or <code>ai_prep_search</code>). The embedding is a call to a model serving endpoint.`,here:`See steps 04 (chunk) and 05 (embed).`},q_query:{kind:`Question 3`,title:`How is the question vectorized?`,what:`With the <b>same</b> embedding model that embedded the chunks, so both live in the same “meaning space”.`,how:`With managed embeddings you pass <code>query_text</code> and AI Search calls the model for you. Otherwise you embed it yourself and pass <code>query_vector</code>.`,here:`See step 07.`},q_where:{kind:`Question 4`,title:`Does the search look inside the Delta table?`,what:`<b>No.</b> At query time the search runs against the AI Search index, a separate structure built for nearest-neighbour lookups.`,how:`The index is filled from the chunks Delta table and kept in sync through its Change Data Feed. It holds the vectors plus the columns you chose to sync.`,here:`See steps 06 (index) and 07 (query).`},q_store:{kind:`Question 5`,title:`Where is each piece stored?`,what:`Six places: Volume (file), bronze (bytes), silver (text), chunks (passages), index (vectors), serving endpoints (models, which store nothing).`,how:`The Volume and the three tables are files in your cloud storage. The index lives on the AI Search endpoint. All are Unity Catalog objects.`,here:`See step 09, the storage map.`},dataPath:{kind:`Overview`,title:`The data path: PDF → bytes → text → chunks → vectors → index`,what:`The six shapes the same information takes before it can be searched by meaning.`,how:`Each arrow is one step of code: binaryFile read, ai_parse_document, splitter, embedding model, Delta Sync.`,here:`Every step in this case explains one arrow, and shows what is actually stored afterwards.`,facts:[[`Build path`,`offline, once per new or changed PDF`],[`Query path`,`online, once per question`]]},ucPath:{kind:`Unity Catalog`,title:`catalog → schema → volume`,what:`Unity Catalog’s three-level namespace: <code>main</code> (catalog) → <code>provider_ops</code> (schema) → <code>raw_docs</code> (volume).`,how:`Tables, volumes, models and indexes all live under a schema, so one set of grants controls the whole pipeline.`,here:`Every object in this case is under <code>main.provider_ops</code>.`,code:{lang:`sql`,src:`CREATE VOLUME IF NOT EXISTS ${wv}.raw_docs;\nGRANT READ VOLUME ON VOLUME ${wv}.raw_docs TO \`rag-pipeline\`;`}},objectStore:{kind:`Storage`,title:`Cloud object storage`,what:`Where the bytes physically live: an S3 bucket, ADLS container or GCS bucket in your cloud account.`,how:`A managed volume stores files under the schema’s managed storage location. An external volume points at a path you already own.`,here:`You never address the bucket directly. You use the governed path <code>/Volumes/…</code>.`},volume:{kind:`UC Volume`,title:`/Volumes/main/provider_ops/raw_docs/`,what:`A Unity Catalog object that governs a folder of non-tabular files: PDFs, images, audio.`,how:`Files are stored as-is, byte for byte. Reading needs <code>READ VOLUME</code>; uploading needs <code>WRITE VOLUME</code>.`,here:`The source of truth. If a downstream table breaks, you can rebuild it from these files.`,facts:[[`Holds`,`files (not rows)`],[`Path`,`/Volumes/&lt;catalog&gt;/&lt;schema&gt;/&lt;volume&gt;/`]]},pdfFile:{kind:`Source file`,title:`acme_provider_agreement.pdf`,what:`A 48-page provider contract, 2,481,337 bytes (illustrative). It contains text, headings, tables and maybe scanned signature pages.`,how:`Inside, a PDF is a binary container: compressed streams of drawing instructions and fonts, not a plain text file.`,here:`That is why the text is not “just there” and needs a parser (step 03).`},volumeLs:{kind:`Listing`,title:`What a Volume looks like`,what:`A normal folder listing: file name and size.`,how:`Upload with the Catalog Explorer UI, <code>databricks fs cp</code>, the Files API, or an ingestion job that lands files here.`,here:`Nothing is parsed, indexed or vectorized yet.`,code:{lang:`sh`,src:`databricks fs cp ./acme_provider_agreement.pdf \\
  dbfs:/Volumes/main/provider_ops/raw_docs/`}},binaryReader:{kind:`Spark reader`,title:`spark.read.format("binaryFile")`,what:`A Spark data source that reads each file as one row, without trying to understand its format.`,how:`It produces four columns: <code>path</code>, <code>modificationTime</code>, <code>length</code>, <code>content</code> (BINARY). With Auto Loader (<code>cloudFiles</code>) it only picks up new files.`,here:`This is the first step that puts the PDF into a Delta table, but only as bytes.`,code:{lang:`py`,src:`df = (spark.read.format("binaryFile")\n      .option("pathGlobFilter", "*.pdf")\n      .load("/Volumes/main/provider_ops/raw_docs/"))\ndf.write.mode("overwrite").saveAsTable("${wv}.bronze_docs")`}},bronzeTable:{kind:`Delta table · bronze`,title:`${wv}.bronze_docs`,what:`One row per PDF. The whole file sits in the <code>content</code> column as a BINARY value.`,how:`The other columns are file metadata. There is <b>no text column</b>. You can’t <code>LIKE</code> or full-text search here.`,here:`Answer to question 1: the PDF is saved in a Delta table, but as bytes, not readable text.`,facts:[[`path`,`STRING`],[`modificationTime`,`TIMESTAMP`],[`length`,`BIGINT (bytes)`],[`content`,`BINARY`]]},deltaFiles:{kind:`Storage`,title:`What a Delta table is on disk`,what:`A folder of Parquet data files plus a <code>_delta_log/</code> folder of JSON commit files.`,how:`The log records which Parquet files make up each version, giving ACID transactions, time travel and Change Data Feed.`,here:`All three tables in this case (bronze, silver, chunks) are this: Parquet + log in your cloud storage.`},contentCell:{kind:`Cell value`,title:`Inside the content column`,what:`The first bytes <code>25 50 44 46 2D 31 2E 37</code> spell <code>%PDF-1.7</code>. After that come compressed (FlateDecode) streams.`,how:`The words “ninety (90) days” are in there, but compressed and split across drawing commands. They are unreadable without a PDF parser.`,here:`This is the exact reason a parsing step exists.`},noText:{kind:`Proof`,title:`Searching bronze for text finds nothing`,what:`A <code>LIKE '%timely filing%'</code> on the bytes returns no rows.`,how:`The phrase is compressed inside the file, so it never appears as plain characters in the BINARY value.`,here:`You need a silver table with real text before you can chunk or embed anything.`},parser:{kind:`AI Function`,title:`ai_parse_document(content)`,what:`A built-in Databricks SQL function that reads document bytes and returns structured content: text, tables, headings, figures, with page and position.`,how:`It uses layout-aware AI models, so it also reads scanned or image-only pages. Input is BINARY; output is a VARIANT (semi-structured JSON).`,here:`Turns the bronze bytes into readable elements.`,facts:[[`Needs`,`Databricks Runtime 17.3+ or serverless SQL`],[`Limits`,`≤ 500 pages, ≤ 100 MB per file`],[`Alternatives`,`unstructured, pypdf, Docling (custom code)`]],code:{lang:`sql`,src:`SELECT path, ai_parse_document(content) AS parsed\nFROM ${wv}.bronze_docs;`}},elements:{kind:`Parser output`,title:`Document elements`,what:`The parser returns a list of elements, each with a <code>type</code> and its <code>content</code>.`,how:`Types include title, section_header, text, table (as HTML), figure, caption, page_header, page_footer, page_number, footnote, signature.`,here:`Keeping the type helps later: you can drop headers and footers, and keep section titles to make better chunks.`},ocr:{kind:`OCR`,title:`Scanned pages`,what:`A scanned PDF is just pictures of pages, with no text layer at all.`,how:`<code>ai_parse_document</code> reads such pages with its vision models, so you get text out anyway. With pypdf you would get nothing and need a separate OCR step.`,here:`Signature pages and old faxed amendments are common in provider contracts.`},silverTable:{kind:`Delta table · silver`,title:`${wv}.silver_doc_elements`,what:`One row per element: doc_id, page, element_type, text. <b>This</b> is where the PDF’s text first lives in a Delta table.`,how:`Built by exploding the parser’s VARIANT output into rows.`,here:`Answer to question 1, part two: yes, the text ends up in Delta, in silver, after parsing.`,facts:[[`doc_id`,`STRING`],[`page`,`INT`],[`element_type`,`STRING`],[`text`,`STRING`]]},variantOut:{kind:`VARIANT`,title:`Raw parser output`,what:`A JSON-like value: <code>document.pages[]</code>, <code>document.elements[]</code> with content, bbox and page_id, plus <code>error_status</code> and <code>metadata</code>.`,how:`You can store it as is in a VARIANT column, or flatten it with <code>variant_explode</code>.`,here:`Check <code>error_status</code>: a corrupt or password-protected PDF produces an error, not text.`},sourceText:{kind:`Silver text`,title:`One section of contract text`,what:`Section 4 of the contract, joined from the silver elements in reading order (illustrative wording).`,how:`Too long to embed as one unit and too broad to be a precise answer.`,here:`The highlighted parts are the overlaps: they end one chunk and start the next.`},splitter:{kind:`Code`,title:`The text splitter`,what:`Code that cuts long text into chunks of a target size, counted in tokens.`,how:`A recursive splitter tries to cut at section breaks first, then paragraphs, then sentences, so chunks stay coherent.`,here:`Chunking is plain code you control. No model is involved yet.`,code:{lang:`py`,src:`from langchain_text_splitters import RecursiveCharacterTextSplitter
splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
    chunk_size=512, chunk_overlap=64,
    separators=["\\n\\n", "\\n", ". ", " "])`}},chunkCards:{kind:`Chunks`,title:`Three overlapping chunks`,what:`Each card is one row of the chunks table: one passage of about 500 tokens with its id, document and page.`,how:`A chunk is the unit that gets one vector, gets found by search, and gets pasted into the prompt.`,here:`The page number travels with the chunk so the answer can cite it.`},overlap:{kind:`Design choice`,title:`Overlap`,what:`The last ~64 tokens of one chunk are repeated at the start of the next.`,how:`If an important sentence falls on a cut, it still appears whole in at least one chunk.`,here:`“Claims received after this period will be denied” lives in both chunk 0 and chunk 1.`},tokenRuler:{kind:`Units`,title:`Tokens, not characters`,what:`A token is a word piece. In English, 1 token ≈ ¾ of a word.`,how:`Chunk size is measured in tokens because embedding models have a token limit. gte-large-en accepts up to 8,192 tokens, but 300–800 usually retrieves better.`,here:`Illustrative setting: chunk_size 512, chunk_overlap 64.`},chunksTable:{kind:`Delta table`,title:`${wv}.chunks`,what:`One row per chunk: chunk_id (primary key), doc_id, page, chunk_text, n_tokens.`,how:`This is the <b>source</b> table that the AI Search index syncs from.`,here:`Still just text. No vectors yet, unless you choose self-managed embeddings (step 05).`,facts:[[`chunk_id`,`STRING · primary key`],[`chunk_text`,`STRING · gets embedded`],[`page`,`INT · for citations`]]},cdf:{kind:`Delta feature`,title:`Change Data Feed`,what:`A Delta table setting that records every inserted, updated and deleted row.`,how:`The Delta Sync index reads this feed so it only processes what changed, instead of re-reading the whole table.`,here:`Required for a Delta Sync index on a standard endpoint.`,code:{lang:`sql`,src:`ALTER TABLE ${wv}.chunks\nSET TBLPROPERTIES (delta.enableChangeDataFeed = true);`}},chunkIn:{kind:`Input`,title:`chunk_text going in`,what:`The text of one chunk. That is all the embedding model sees.`,how:`Some pipelines prepend the document title and section heading to the text that gets embedded (<code>ai_prep_search</code> does this as <code>chunk_to_embed</code>).`,here:`Better input text gives better vectors.`},embedModel:{kind:`Model`,title:`databricks-gte-large-en`,what:`An embedding model on a Databricks model serving endpoint. Text in, 1,024 numbers out.`,how:`A transformer reads the tokens and compresses their meaning into one fixed-length vector. It does not generate text.`,here:`The same model must embed both the chunks and, later, the question.`,facts:[[`Dimensions`,`1,024`],[`Max input`,`8,192 tokens`],[`Alternative`,`databricks-qwen3-embedding-0-6b`]]},vectorStrip:{kind:`Embedding`,title:`The vector`,what:`A list of 1,024 floating-point numbers. Each number on its own means nothing human-readable.`,how:`Together they place the chunk at a point in a 1,024-dimensional space. Orange bars are positive values, blue are negative.`,here:`Values shown are illustrative, not from a real model call.`},meaningSpace:{kind:`Concept`,title:`Meaning space`,what:`A 3-D sketch of a 1,024-D space. Chunks about filing deadlines cluster together; credentialing chunks sit elsewhere.`,how:`Closeness is measured by distance between vectors. AI Search uses L2 distance; for normalized vectors this ranks the same as cosine similarity.`,here:`The white point is chunk acme_pa-0041 landing in the “deadlines” cluster.`},managedOpt:{kind:`Option A`,title:`Managed embeddings`,what:`You give the index the <b>text</b> column and a model endpoint. AI Search calls the model for every new or changed chunk.`,how:`<code>embedding_source_column="chunk_text"</code> + <code>embedding_model_endpoint_name</code>.`,here:`The vectors are stored <b>in the index</b>, not in your Delta table (unless you turn on the optional writeback table).`},selfOpt:{kind:`Option B`,title:`Self-managed embeddings`,what:`You compute the vectors yourself and store them in an <code>ARRAY&lt;FLOAT&gt;</code> column of the chunks table.`,how:`<code>embedding_vector_column="embedding"</code> + <code>embedding_dimension=1024</code>. The index copies those vectors.`,here:`Vectors then live in <b>two</b> places: your Delta table and the index.`,code:{lang:`sql`,src:`SELECT chunk_id, chunk_text,\n  ai_query('databricks-gte-large-en', chunk_text) AS embedding\nFROM ${wv}.chunks;`}},chunksSrc:{kind:`Source`,title:`chunks (source Delta table)`,what:`The table the index is built from. You keep writing to it; the index follows.`,how:`Only the primary key, the text or vector column and <code>columns_to_sync</code> are copied into the index.`,here:`At query time this table is not read.`},cdfPipe:{kind:`Sync`,title:`Delta Sync via Change Data Feed`,what:`The pipe that moves changes from the chunks table into the index.`,how:`Inserted rows are embedded and added, updated rows re-embedded, deleted rows removed.`,here:`Chips: + insert, ~ update, − delete.`},syncEmbed:{kind:`Model call`,title:`Embedding during sync`,what:`With managed embeddings, the sync job calls the embedding endpoint for each new or changed chunk.`,how:`Unchanged chunks are not re-embedded.`,here:`This is where the chunk vectors from step 05 are actually produced in a managed setup.`},endpoint:{kind:`Compute`,title:`AI Search endpoint`,what:`The compute that hosts one or more indexes and answers queries. Formerly “Vector Search endpoint”.`,how:`Type <code>STANDARD</code> (low latency) or <code>STORAGE_OPTIMIZED</code> (large scale, cheaper; triggered sync only).`,here:`The index lives here, outside your Delta table, but it is still a Unity Catalog object: <code>main.provider_ops.chunks_index</code>.`},hnsw:{kind:`Data structure`,title:`ANN graph (HNSW)`,what:`A layered graph of vectors. Top layers have few nodes and long links; the bottom layer holds every chunk.`,how:`A search starts at the top, walks greedily towards the query, then drops a layer. It checks a few hundred vectors instead of millions.`,here:`“Approximate”: it can very occasionally miss the exact nearest neighbour, in exchange for millisecond speed.`},syncMode:{kind:`Setting`,title:`pipeline_type`,what:`<code>TRIGGERED</code>: the index updates when you call <code>index.sync()</code> (or after your job). <code>CONTINUOUS</code>: it follows the table within seconds.`,how:`Triggered is cheaper; continuous keeps a streaming pipeline running. Storage-optimized endpoints only support triggered.`,here:`Contracts change rarely, so triggered after each ingestion run is enough.`},writeback:{kind:`Optional`,title:`Writeback table`,what:`If you enable “save computed embeddings”, AI Search also writes the managed vectors to a Delta table named <code>&lt;index&gt;_writeback_table</code>.`,how:`Useful for auditing or re-using vectors in other jobs.`,here:`Off by default: managed vectors normally exist only inside the index.`},question:{kind:`Input`,title:`“What’s the timely-filing limit for out-of-network claims?”`,what:`The user’s question, as plain text. The same running example as use case 01.`,how:`It goes through no parsing or chunking. It is embedded directly.`,here:`Notice it never says “ninety days”. Vector search finds the answer by meaning, not by matching words.`},sameModel:{kind:`Model`,title:`Same embedding model`,what:`The question is embedded with databricks-gte-large-en, exactly like the chunks.`,how:`Vectors from different models live in different spaces and can’t be compared.`,here:`With managed embeddings, AI Search does this call for you when you pass <code>query_text</code>.`},queryVector:{kind:`Embedding`,title:`The query vector`,what:`1,024 numbers describing the question’s meaning (illustrative values).`,how:`The search looks for chunk vectors closest to this one.`,here:`The white diamond carries it into the index.`},annWalk:{kind:`Search`,title:`Nearest-neighbour walk`,what:`The query vector enters the top layer, hops to the closest node, then descends layer by layer.`,how:`At the bottom it collects the k closest chunk vectors and ranks them by a similarity score.`,here:`This happens inside the AI Search index, on the endpoint, in milliseconds.`},topK:{kind:`Result`,title:`Top-3 chunks with scores`,what:`The index returns the best matches with the columns you asked for (from <code>columns_to_sync</code>) and a score.`,how:`Higher score = closer meaning. Hybrid mode merges vector and keyword rankings with Reciprocal Rank Fusion.`,here:`Scores 0.89 / 0.81 / 0.62 are illustrative. [3] is related but weaker, so a reranker or a score cutoff may drop it.`,facts:[[`[1]`,`acme_pa-0041 · 0.89`],[`[2]`,`claims_policy-0107 · 0.81`],[`[3]`,`acme_pa-0043 · 0.62`]]},filters:{kind:`Option`,title:`Metadata filters`,what:`Restrict the search to rows matching column values, e.g. only contracts, or only one provider.`,how:`Standard endpoints take a dict (<code>{"doc_type": "contract"}</code>); storage-optimized take a SQL-like string.`,here:`Filter columns must be in <code>columns_to_sync</code>.`},noScan:{kind:`Clarification`,title:`The Delta table is not scanned`,what:`Answer to question 4: the search does <b>not</b> look inside the Delta table at query time.`,how:`The index already holds the vectors and the synced columns (chunk_text, page…), so it can answer on its own.`,here:`The Delta table matters at build time: it is the source the index syncs from.`},retriever:{kind:`Your code`,title:`The retriever`,what:`The function in your agent that calls <code>similarity_search</code> and returns the chunk texts.`,how:`Often wrapped as a tool (e.g. <code>VectorSearchRetrieverTool</code>) so the agent framework can call it.`,here:`Search is done by the retriever and the index, never by the LLM.`},promptPanel:{kind:`Prompt`,title:`The assembled prompt`,what:`Plain text: instructions, the retrieved chunks labelled [1] [2] [3] with their source, then the question.`,how:`Built by string formatting in your code. The chunk text is copied from the search result.`,here:`This text is everything the LLM knows about your contract.`},llm:{kind:`Model`,title:`Chat LLM endpoint`,what:`A generative model on Model Serving (here <code>databricks-meta-llama-3-3-70b-instruct</code>, as in use case 01).`,how:`It reads the prompt and writes an answer. It has no access to the index or the tables.`,here:`It never saw the PDF during training. It only knows the three chunks you pasted.`},answer:{kind:`Output`,title:`Grounded answer with citations`,what:`“Out-of-network claims must be filed within 90 days of the date of service [1][2].”`,how:`The [n] markers map back to chunk_id, doc and page, so a user can open the source.`,here:`If no chunk contained the answer, the instructions tell the model to say so.`},mapVolume:{kind:`Storage map · 1`,title:`Volume: the original PDF file`,what:`The uploaded file, byte for byte, in cloud object storage.`,how:`Governed path <code>/Volumes/main/provider_ops/raw_docs/</code>.`,here:`Source of truth. Rebuild everything else from here.`},mapBronze:{kind:`Storage map · 2`,title:`Bronze table: the bytes`,what:`<code>bronze_docs</code>: path, modificationTime, length, <b>content BINARY</b>.`,how:`Parquet + _delta_log in the schema’s storage location.`,here:`No readable text here.`},mapSilver:{kind:`Storage map · 3`,title:`Silver table: the text`,what:`<code>silver_doc_elements</code>: doc_id, page, element_type, <b>text</b>.`,how:`Written by ai_parse_document. First place the PDF’s words exist as text.`,here:`Good for search-free uses too: audits, SQL, extraction.`},mapChunks:{kind:`Storage map · 4`,title:`Chunks table: passages (± vectors)`,what:`<code>chunks</code>: chunk_id, doc_id, page, chunk_text. Plus an <code>embedding ARRAY&lt;FLOAT&gt;</code> column only if you self-manage embeddings.`,how:`Change Data Feed on, so the index can sync.`,here:`The index’s source, not what gets searched.`},mapIndex:{kind:`Storage map · 5`,title:`AI Search index: vectors + synced columns`,what:`<code>chunks_index</code> on an AI Search endpoint: an ANN graph of every chunk vector, plus the primary key and <code>columns_to_sync</code>.`,how:`Filled and updated by Delta Sync. Queried by similarity_search.`,here:`<b>This is where the right chunk is found.</b>`},mapModels:{kind:`Storage map · 6`,title:`Model Serving endpoints`,what:`The embedding model (gte-large-en) and the chat LLM.`,how:`They compute: text → vector, prompt → answer. They store none of your documents.`,here:`Used at build time (embedding chunks) and at query time (embedding the question, writing the answer).`},mapUC:{kind:`Governance`,title:`Unity Catalog over everything`,what:`The volume, the three tables, the index and the model endpoints are all governed objects.`,how:`Grants, audit logs and lineage cover the whole path, from PDF file to the chunk the LLM quoted.`,here:`A user who can’t read the volume or the index can’t get its content through the chatbot.`}},Ev=`Inter, Helvetica, Arial, sans-serif`,Dv=`JetBrains Mono, Menlo, Consolas, monospace`,Ov=new Map;function kv(e,t,n,r){if(Ov.has(e))return Ov.get(e);let i=document.createElement(`canvas`);i.width=t*2,i.height=n*2;let a=i.getContext(`2d`);a.scale(2,2),r(a,t,n);let o=new Hi(i);return o.colorSpace=Le,o.anisotropy=8,Ov.set(e,o),o}function Av(e,t,{w:n=420,h:r=220,title:i=``,bg:a=`#1c1f25`}={}){return kv(e,n,r,e=>{e.fillStyle=a,e.fillRect(0,0,n,r);let o=22;i&&(e.fillStyle=`#d9653b`,e.fillRect(14,12,3,14),e.fillStyle=`#e9e6e0`,e.font=`600 12px ${Ev}`,e.fillText(i,24,24),o=46),e.font=`12px ${Dv}`;for(let n of t){let[t,r]=Array.isArray(n)?n:[n];e.fillStyle=r||`#b9bcc4`,e.fillText(t,16,o),o+=17}})}var jv=`#d9875f`,Mv=`#c9ccd4`,Nv=`#8eae9d`,Pv=`#7d828c`;function Fv(e,t,n,{d:r=.06,edge:i=7174797,edgeO:a=.5,side:o=2829877}={}){let s=$(o,.6),c=new zo({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.32,color:12172484,roughness:.55,envMapIntensity:.3}),l=new K(new q(e,t,r),[s,s,s,s,c,s]);return i!=null&&l.add(b_(l.geometry,i,1,a)),l}function Iv(e=.9){let t=new W;return t.shell=new K(new Zi(e,0),v_(5989488,.35)),t.add(t.shell),t.cage=b_(t.shell.geometry,15328992,1,.45),t.add(t.cage),t.heart=new K(new xo(e*.42,1),Q(Y.lava,2)),t.add(t.heart),t.ring=new K(new To(e*1.35,.02,8,120),Q(Y.amber,1)),t.ring.rotation.x=Math.PI/2,t.add(t.ring),t}function Lv(e=Y.mint,t=1){let n=new Na;n.moveTo(0,.5),n.lineTo(.4,.36),n.lineTo(.38,-.05),n.quadraticCurveTo(.3,-.38,0,-.52),n.quadraticCurveTo(-.3,-.38,-.38,-.05),n.lineTo(-.4,.36),n.closePath();let r=new vo(n,{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2});r.center(),r.scale(t,t,t);let i=new W,a=new K(r,$(3093564,.45));i.add(a),i.add(b_(r,e,1,.8));let o=new Na;o.moveTo(-.16,0),o.lineTo(-.05,-.12),o.lineTo(.18,.14),o.lineTo(.14,.18),o.lineTo(-.05,-.03),o.lineTo(-.12,.04),o.closePath();let s=new vo(o,{depth:.04,bevelEnabled:!1});s.scale(t,t,t);let c=new K(s,Q(e,1.6));return c.position.z=.07*t,i.add(c),i}var Rv=new U,zv=new U(0,0,1),Bv=class extends N_{set(e,t,n=1){Rv.subVectors(t,e);let r=Rv.length()*n;this.mesh.position.copy(e),Rv.lengthSq()>1e-8&&this.mesh.quaternion.setFromUnitVectors(zv,Rv.normalize()),this.mesh.scale.set(1,1,Math.max(1e-4,r)),this.mesh.visible=n>.001}};function Vv(e,{title:t=``,sub:n=``,cols:r,rows:i,w:a=520,h:o=200,hl:s=-1,hlCol:c=`#d9653b`,note:l=``}){return kv(e,a,o,e=>{e.fillStyle=`#1c1f25`,e.fillRect(0,0,a,o);let u=10;t&&(e.fillStyle=`#d9653b`,e.fillRect(14,12,3,14),e.fillStyle=`#e9e6e0`,e.font=`600 12px ${Ev}`,e.fillText(t,24,24),n&&(e.fillStyle=`#7d828c`,e.font=`11px ${Dv}`,e.fillText(n,24+e.measureText(t).width+90,24)),u=36);let d=14,f=r.map(([,e])=>{let t=d;return d+=e,t});s>=0&&(e.fillStyle=`rgba(217,101,59,0.14)`,e.fillRect(f[s]-4,u,r[s][1],o-u-(l?22:6))),e.fillStyle=`#2a2e36`,e.fillRect(10,u,a-20,22),e.font=`600 11px ${Dv}`,r.forEach(([t],n)=>{e.fillStyle=n===s?c:`#c3a273`,e.fillText(t,f[n],u+15)}),u+=22,e.font=`11px ${Dv}`,i.forEach((t,n)=>{e.fillStyle=n%2?`#20232a`:`#1c1f25`,e.fillRect(10,u,a-20,21),t.forEach((t,n)=>{let i=r[n][1]-8,a=String(t);for(e.fillStyle=n===s?`#e8a07f`:`#b9bcc4`;e.measureText(a).width>i&&a.length>2;)a=a.slice(0,-2)+`…`;e.fillText(a,f[n],u+14)}),u+=21}),l&&(e.fillStyle=`#7d828c`,e.font=`italic 10.5px ${Ev}`,e.fillText(l,14,o-8))})}function Hv(e,{title:t=``,parts:n,w:r=300,h:i=170,foot:a=``,accent:o=`#d9653b`}){return kv(e,r,i,e=>{e.fillStyle=`#e4e1da`,e.fillRect(0,0,r,i),e.fillStyle=o,e.fillRect(0,0,5,i);let s=22;t&&(e.fillStyle=`#2b2e35`,e.font=`700 12px ${Ev}`,e.fillText(t,16,s),s+=20),e.font=`12px ${Ev}`;let c=16,l=r-14;for(let[t,r,i]of n)for(let n of t.split(/(\s+)/)){if(!n)continue;let t=e.measureText(n).width;c+t>l&&n.trim()&&(c=16,s+=16),(n.trim()||c!==16)&&(i&&(e.fillStyle=i,e.fillRect(c-1,s-12,t+2,15)),e.fillStyle=r||`#2b2e35`,e.fillText(n,c,s),c+=t)}a&&(e.fillStyle=`#6d727c`,e.font=`10.5px ${Dv}`,e.fillText(a,16,i-10))})}function Uv(e=2.4,t=1.4,n=4,r=4869976){let i=new W;i.slabs=[];for(let a=0;a<n;a++){let o=new K(x_(e,.16,t,.04),$(a===n-1?3817288:r,.55));o.position.y=.1+a*.2,i.add(o),i.slabs.push(o);let s=new K(new q(e*.98,.012,.012),Q(Y.lava,.8));s.position.set(0,.1+a*.2+.04,t/2+.002),i.add(s)}return i.top=.1+(n-1)*.2+.08,i}function Wv({layers:e=3,counts:t=[5,12,26],w:n=3.2,d:r=2.2,gap:i=.9,seed:a=7,color:o=9086138}={}){let s=new W;s.lv=[];let c=a,l=()=>(c=c*16807%2147483647)/2147483647,u=new wo(.055,12,8);for(let a=0;a<e;a++){let c=(e-1-a)*i,d=new K(new Co(n+.4,r+.4),v_(5989488,.1,{side:2}));d.rotation.x=-Math.PI/2,d.position.y=c,s.add(d);let f=[];for(let e=0;e<t[a];e++)f.push(new U((l()-.5)*n,c,(l()-.5)*r));let p=f.map(t=>{let n=new K(u,a===e-1?$(12172484,.5):Q(o,1));return n.position.copy(t),s.add(n),n}),m=[];f.forEach((e,t)=>{f.map((t,n)=>[t.distanceTo(e),n]).filter(([,e])=>e!==t).sort((e,t)=>e[0]-t[0]).slice(0,2).forEach(([,n])=>{n>t&&m.push(e.x,e.y,e.z,f[n].x,f[n].y,f[n].z)})});let h=new pr;h.setAttribute(`position`,new tr(m,3));let g=new Ni(h,new xi({color:o,transparent:!0,opacity:.35}));s.add(g),s.lv.push({y:c,pts:f,mats:p,plane:d})}return s}function Gv(e=1.1,t=1.5){let n=new W,r=new K(new Ji(e,e*.86,t,48,1,!0),v_(9086138,.22,{side:2}));r.position.y=t/2,n.add(r);let i=new K(new Ji(e*.86,e*.86,.08,48),$(3817288,.5));i.position.y=.04,n.add(i);let a=new K(new To(e,.03,8,96),y_(9080729,.35,.7));return a.rotation.x=Math.PI/2,a.position.y=t,n.add(a),n.wall=r,n.h=t,n}function Kv(e=5,t=1.2,n=Y.violet){let r=new W;r.plates=[];for(let i=0;i<e;i++){let e=new K(x_(t,.08,t,.04),v_(n,.4));e.position.y=.2+i*.22,r.add(e),r.plates.push(e),e.add(b_(e.geometry,n,1.2,.6))}return r.core=new K(new xo(t*.18,1),Q(n,1.8)),r.core.position.y=.2+(e-1)*.11,r.add(r.core),r.h=.2+e*.22,r}function qv(e,{w:t=4,maxH:n=.6,color:r=Y.lava,neg:i=Y.cyan}={}){let a=new W;a.bars=[];let o=t/e.length,s=new q(o*.6,1,.08),c=Q(r,1.1),l=Q(i,.9);e.forEach((e,n)=>{let r=new K(s,e>=0?c:l);r.position.x=-t/2+o*(n+.5),a.add(r),a.bars.push(r),r.userData.v=e});let u=new K(new q(t+.2,.01,.01),$(9278107,.5));return a.add(u),a.set=e=>a.bars.forEach(t=>{let r=Math.max(.002,Math.abs(t.userData.v)*n*e);t.scale.y=r,t.position.y=Math.sign(t.userData.v)*r/2}),a}function Jv(e,t=1){let n=t*9301+49297;return Array.from({length:e},()=>{n=n*16807%2147483647;let e=n/2147483647;return(e-.5)*2*(.35+.65*Math.abs(Math.sin(e*12)))})}var Yv=(e,t,n)=>new U(e,t,n),Xv=(e,t)=>e.scale.setScalar(Math.max(.001,t)),Zv=`/Volumes/main/provider_ops/raw_docs/acme_provider_agreement.pdf`;function Qv(e,t,n){return kv(e,360,64,(e,r,i)=>{e.fillStyle=`#1f2228`,e.fillRect(0,0,r,i),e.fillStyle=`#d9653b`,e.beginPath(),e.arc(30,32,15,0,Math.PI*2),e.fill(),e.fillStyle=`#1c1f25`,e.font=`700 14px ${Ev}`,e.textAlign=`center`,e.fillText(String(t),30,37),e.textAlign=`left`,e.fillStyle=`#e9e6e0`,e.font=`500 14.5px ${Ev}`,e.fillText(n,56,37)})}function $v(e,t=360,n=220,r=`content · BINARY (first bytes)`){return kv(e,t,n,e=>{e.fillStyle=`#16181c`,e.fillRect(0,0,t,n),e.fillStyle=`#d9653b`,e.fillRect(14,12,3,14),e.fillStyle=`#e9e6e0`,e.font=`600 12px ${Ev}`,e.fillText(r,24,24),e.font=`12px ${Dv}`,[[`00000000`,`25 50 44 46 2D 31 2E 37`,`%PDF-1.7`],[`00000008`,`0A 25 E2 E3 CF D3 0A 31`,`.%.....1`],[`00000010`,`20 30 20 6F 62 6A 0A 3C`,` 0 obj.<`],[`00000018`,`3C 2F 46 69 6C 74 65 72`,`</Filter`],[`00000020`,`2F 46 6C 61 74 65 44 65`,`/FlateDe`],[`00000028`,`78 9C ED 5D 5B 8F 1C C7`,`x..][...`],[`00000030`,`B1 7E 9F 5F 31 E0 4B 02`,`.~._1.K.`],[`…`,`2,481,337 bytes in total`,``]].forEach((t,n)=>{let r=50+n*20;e.fillStyle=`#7d828c`,e.fillText(t[0],16,r),e.fillStyle=n<1?`#e8a07f`:`#b9bcc4`,e.fillText(t[1],96,r),e.fillStyle=n<1?`#8eae9d`:`#5d626c`,e.fillText(t[2],290,r)})})}var ey=[[`q_text`,`Is the PDF’s text saved in the Delta table?`],[`q_chunk`,`How are chunks cut and vectorized?`],[`q_query`,`How is my question turned into a vector?`],[`q_where`,`Where does the search look? The Delta table?`],[`q_store`,`Where is each piece stored?`]],ty=[`PDF`,`bytes`,`text`,`chunks`,`vectors`,`index`],ny=class extends B_{constructor(){super({loop:10,cam:{pos:[0,4.4,14.5],target:[0,2.4,0]}});let e=this.group;this.dev=I_(Y.cyan),this.dev.position.set(-4.3,0,1.2),this.dev.rotation.y=.5,e.add(this.dev);let t=new K(x_(1.3,.06,.7,.03),$(3817288,.5));t.position.set(-3.5,.85,1.6),e.add(t);let n=new K(new q(.08,.85,.08),y_(7172736));n.position.set(-3.5,.42,1.6),e.add(n),this.laptop=Fv(.8,.5,Av(`rx_lap`,[[`spark.read`,jv],[`  .format("binaryFile")`,Nv],[`ai_parse_document(…)`,jv],[`similarity_search(…)`,jv]],{w:220,h:120}),{d:.03}),this.laptop.position.set(-3.5,1.15,1.5),this.laptop.rotation.set(-.15,.5,0),e.add(this.laptop),this.pick(this.dev,`developer`,[0,1.7,0]),this.cards=ey.map(([t,n],r)=>{let i=Fv(3.6,.64,Qv(`rx_q`+r,r+1,n),{d:.05});return e.add(i),i.userData.base=Yv(-.9,4.6-r*.82,.2-r*.05),this.pick(i,t,[1.9,.3,.05]),i}),this.tray=new W,this.tray.position.set(3.3,.3,.6),e.add(this.tray);let r=new K(x_(1.3,.12,4.6,.05),$(3093307,.6));r.position.y=.06,this.tray.add(r),this.tokens=ty.map((e,t)=>{let n=new W;n.position.set(0,.35,1.9-t*.76),this.tray.add(n);let r;if(t===0)r=A_(0,.42,.55),r.rotation.x=-.3,r.position.y=.15;else if(t===1){r=new W;for(let e=0;e<8;e++){let t=new K(new q(.1,.1,.1),Q(e%3?7172736:Y.lava,.8));t.position.set(e%4*.13-.2,Math.floor(e/4)*.13,0),r.add(t)}}else if(t===2){r=new W;for(let e=0;e<4;e++){let t=new K(new q(.5-e%2*.12,.05,.05),$(14078924,.6));t.position.y=e*.1,r.add(t)}}else if(t===3){r=new W;for(let e=0;e<3;e++){let t=new K(x_(.16,.34,.04,.02),$(14078924,.6));t.position.x=(e-1)*.19,t.position.y=.12,r.add(t)}}else if(t===4){r=new W;for(let e=0;e<7;e++){let t=new K(new q(.05,.1+e*37%5*.06,.05),Q(e%2?Y.cyan:Y.lava,1));t.position.set((e-3)*.08,.12,0),r.add(t)}}else{r=new W;for(let e=0;e<6;e++){let t=new K(new wo(.05,10,8),Q(Y.cyan,1));t.position.set(Math.sin(e)*.22,.1+e%2*.18,Math.cos(e*1.7)*.1),r.add(t)}}return n.add(r),n.userData.lbl=this.addLabel(e,`ghost`,[.85,.05,0],n),n}),this.flow=new P_(new fa([Yv(3.3,.55,2.6),Yv(3.3,.55,-2.4)]),30,Y.lava,.18,.18),e.add(this.flow.points),this.pick(this.tray,`dataPath`,[0,.9,-2.3]),this.secQ=this.addLabel(`FIVE DEVELOPER QUESTIONS`,`section`,[-.9,5.35,0]),this.secP=this.addLabel(`THE DATA PATH`,`section`,[3.3,2.1,.6]),this.devL=this.addLabel(`You, the developer`,`ghost`,[-4.3,2,1.2])}update(e,t){let n=1-X(e,9.6,10);this.cards.forEach((r,i)=>{let a=Z.back(X(e,.3+i*.4,1+i*.4))*n;r.position.copy(r.userData.base),r.position.x+=(1-a)*-2,r.position.y+=Math.sin(t*.8+i)*.04,Xv(r,a),r.rotation.y=Math.sin(t*.5+i)*.05}),this.tokens.forEach((r,i)=>{Xv(r,Z.back(X(e,3+i*.35,3.6+i*.35))*n),r.rotation.y=Math.sin(t*.7+i)*.3,this.show(r.userData.lbl,X(e,3.3+i*.35,3.7+i*.35)*n)}),this.flow.update(t,X(e,5.2,5.8)*n),this.show(this.secQ,X(e,.2,.6)*n),this.show(this.secP,X(e,2.8,3.2)*n),this.show(this.devL,X(e,.4,.8)*n),this.laptop.rotation.y=.5+Math.sin(t*.4)*.03}},ry=class extends B_{constructor(){super({loop:10,cam:{pos:[0,4.6,14.5],target:[0,2.2,0]}});let e=this.group;this.tree=new W,this.tree.position.set(-4,0,.4),e.add(this.tree);let t=[[`main`,`catalog`,3.6],[`provider_ops`,`schema`,2.5],[`raw_docs`,`volume`,1.4]];this.treeNodes=t.map(([e,t,n],r)=>{let i=new K(x_(1.3,.42,.42,.08),r===2?Q(Y.lava,1.1):$(4869976,.5));return i.position.set(r*.25,n,0),this.tree.add(i),i.userData.lbl=this.addLabel(`<b>${t}</b> ${e}`,`tiny`,[0,.42,0],i),i});for(let e=0;e<2;e++){let t=new K(new q(.04,.7,.04),$(9278107));t.position.set(e*.25+.1,3.05-e*1.1,0),this.tree.add(t)}let n=Lv(Y.mint,.8);n.position.set(-.9,3.6,0),this.tree.add(n),this.pick(this.tree,`ucPath`,[.9,4.1,0]),this.bkt=Gv(1.35,1.7),this.bkt.position.set(.6,0,.3),e.add(this.bkt),this.files=[];for(let e=0;e<9;e++){let t=new K(new q(.34,.44,.03),$([12083262,11044442,6258070,7762074][e%4],.6));t.position.set((e%3-1)*.5,.35+Math.floor(e/3)*.08,(Math.floor(e/3)-1)*.35),t.rotation.x=-1.2,this.bkt.add(t),this.files.push(t)}this.pick(this.bkt.wall,`objectStore`,[1.2,1.4,0]),this.volRing=new K(new To(1.55,.04,8,120),Q(Y.lava,1.6)),this.volRing.rotation.x=Math.PI/2,this.volRing.position.set(.6,1.95,.3),e.add(this.volRing),this.pick(this.volRing,`volume`,[1.55,0,0]),this.volL=this.addLabel(`UC Volume · /Volumes/main/provider_ops/raw_docs/`,`lava`,[.6,2.35,.3]),this.osL=this.addLabel(`Cloud object storage · S3 / ADLS / GCS`,`ghost`,[.6,-.15,1.8]),this.doc=A_(0,1,1.32),e.add(this.doc),this.pick(this.doc,`pdfFile`,[.5,.66,.05]),this.docL=this.addLabel(`acme_provider_agreement.pdf · 2.4 MB`,`ghost`,[0,.95,0],this.doc),this.ls=Fv(2.9,1.55,Av(`rx_ls`,[[`%sh ls -la /Volumes/main/provider_ops/raw_docs/`,jv],[`-rw  2481337  acme_provider_agreement.pdf`,Mv],[`-rw   911204  claims_policy_2026.pdf`,Mv],[`-rw   640118  credentialing_manual.pdf`,Mv],[``,``],[`# a file, unchanged: same bytes you uploaded`,Pv]],{w:400,h:150,title:`Volume listing`}),{d:.05}),this.ls.position.set(4.1,2.4,-.2),this.ls.rotation.y=-.35,e.add(this.ls),this.pick(this.ls,`volumeLs`,[1.5,.8,0]),this.upL=this.addLabel(`Upload: UI, <b>databricks fs cp</b>, or an ingestion job`,`tiny`,[-1.6,5.2,0])}update(e,t){let n=1-X(e,9.6,10);this.treeNodes.forEach((t,r)=>{Xv(t,Z.back(X(e,.2+r*.3,.8+r*.3))*n),this.show(t.userData.lbl,X(e,.6+r*.3,1+r*.3)*n)}),Xv(this.bkt,Z.out(X(e,.4,1.2))*n),this.volRing.scale.setScalar(Math.max(.001,Z.out(X(e,1.2,1.9))*n)),this.volRing.rotation.z=t*.3,this.show(this.volL,X(e,1.6,2)*n),this.show(this.osL,X(e,1,1.4)*n);let r=Z.io(X(e,2.2,4.6));this.doc.position.set(p_(-1.8,.6,r),p_(5,1.25,r)+Math.sin(t*1.2)*.04*(1-r),p_(1.4,.4,r)),this.doc.rotation.set(p_(-.1,-.15,r),p_(.4,0,r),p_(.15,0,r)),Xv(this.doc,Z.back(X(e,1.8,2.3))*n),this.show(this.docL,X(e,2,2.4)*n*(1-X(e,4.2,4.6)*0)),this.show(this.upL,X(e,2.2,2.6)*n),Xv(this.ls,Z.back(X(e,4.8,5.4))*n)}},iy=class extends B_{constructor(){super({loop:11,cam:{pos:[0,4.6,14.5],target:[.2,2.4,0]}});let e=this.group;this.doc=A_(0,.95,1.25),this.doc.position.set(-4.6,2.2,.6),this.doc.rotation.y=.45,e.add(this.doc),this.pick(this.doc,`pdfFile`,[.48,.62,.05]),this.reader=new W,this.reader.position.set(-2.6,0,.6),e.add(this.reader);let t=new K(x_(1,1.1,.9,.1),y_(4869976,.4,.6));t.position.y=1.6,this.reader.add(t);let n=new K(new q(.7,.06,.05),Q(Y.lava,1.6));n.position.set(0,1.95,.46),this.reader.add(n);let r=new K(new Ji(.08,.1,1.05,12),y_(7172736));r.position.y=.52,this.reader.add(r),this.pick(this.reader,`binaryReader`,[.55,2.2,.3]),this.readerL=this.addLabel(`spark.read.format("binaryFile")`,`tiny`,[0,2.45,0],this.reader),this.bytes=new mi(new q(.07,.07,.07),Q(Y.amber,1.2),70),e.add(this.bytes),this._m=new It,this._q=new ft,this._s=new U,this.bytePath=new fa([Yv(-4.3,2.2,.7),Yv(-2.6,1.95,1.05),Yv(-.8,2.6,1),Yv(1.9,2.4,.9)]),this.slab=Uv(5,1.4,4),this.slab.position.set(1,0,-.6),e.add(this.slab),this.tbl=Fv(5.6,1.5,Vv(`rx_bronze`,{title:`main.provider_ops.bronze_docs`,sub:`1 row per PDF`,cols:[[`path`,170],[`modificationTime`,140],[`length`,76],[`content`,230]],rows:[[Zv,`2026-11-02 06:00`,`2481337`,`25 50 44 46 2D 31 2E 37 0A…`],[`/Volumes/…/claims_policy_2026.pdf`,`2026-10-28 09:14`,`911204`,`25 50 44 46 2D 31 2E 36 0A…`],[`/Volumes/…/credentialing_manual.pdf`,`2026-10-21 16:40`,`640118`,`25 50 44 46 2D 31 2E 34 0A…`]],w:640,h:150,hl:3}),{d:.06}),this.tbl.position.set(1,2.5,.2),e.add(this.tbl),this.pick(this.tbl,`bronzeTable`,[-2.8,.75,.05]),this.pick(this.slab,`deltaFiles`,[2.5,.8,.5]),this.slabL=this.addLabel(`Delta = Parquet files + <b>_delta_log</b> in the table’s storage location`,`tiny`,[1,-.1,.9]),this.lens=new W,this.lens.position.set(3.2,4.5,.9),e.add(this.lens);let i=Fv(2.6,1.6,$v(`rx_hex`),{d:.04,edge:Y.lava,edgeO:.9});this.lens.add(i);let a=new K(new To(.22,.04,8,40),y_(9080729,.35,.7));a.position.set(-.5,-1.15,0),this.lens.add(a),this.pick(i,`contentCell`,[1.3,.8,.03]),this.noTxt=Fv(2.8,.9,Av(`rx_notext`,[[`SELECT * FROM bronze_docs`,jv],[`WHERE content LIKE '%timely filing%'`,Mv],[`→ 0 rows: there is no text to match`,`#e8a07f`]],{w:360,h:90}),{d:.04,edge:12604986,edgeO:.9}),this.noTxt.position.set(-2.2,4.4,.6),this.noTxt.rotation.y=.2,e.add(this.noTxt),this.pick(this.noTxt,`noText`,[1.4,.45,.03]),this.bigL=this.addLabel(`This table stores the PDF’s <b>bytes</b>, not its text`,`big lava`,[1,3.55,.3])}update(e,t){let n=1-X(e,10.6,11);Xv(this.doc,Z.back(X(e,.1,.6))*n*(1-.35*X(e,1.2,3))),this.doc.rotation.y=.45+Math.sin(t*.6)*.06,Xv(this.reader,Z.back(X(e,.3,.9))*n),this.show(this.readerL,X(e,.8,1.2)*n),Xv(this.slab,Z.out(X(e,.5,1.2))*n);let r=X(e,1.2,1.6)*(1-X(e,8.5,9.2));for(let e=0;e<70;e++){let i=(e/70+t*.12)%1;this.bytePath.getPointAt(i,this._s),this._m.compose(this._s,this._q.setFromAxisAngle(Yv(.3,1,.2).normalize(),t+e),Yv(1,1,1).multiplyScalar(Math.max(.001,r*n*m_(i,0,1)*1.3))),this.bytes.setMatrixAt(e,this._m)}this.bytes.instanceMatrix.needsUpdate=!0,Xv(this.tbl,Z.back(X(e,1.8,2.4))*n),this.show(this.bigL,X(e,3,3.4)*n),this.show(this.slabL,X(e,2.2,2.6)*n),Xv(this.lens,Z.back(X(e,3.6,4.2))*n),this.lens.position.y=4.55+Math.sin(t*.9)*.05,Xv(this.noTxt,Z.back(X(e,5,5.6))*n)}},ay=[[`title`,`PROVIDER AGREEMENT`,Y.lava,1.6],[`section_header`,`4. Claims Submission`,Y.amber,1.3],[`text`,`4.2 Provider shall submit claims…`,12172484,1.9],[`text`,`4.3 Corrected claims within 120 days…`,12172484,1.9],[`table`,`Claim type | Limit (days)`,Y.cyan,1.7],[`page_footer`,`Page 12 of 48`,7172736,1]],oy=class extends B_{constructor(){super({loop:11,cam:{pos:[0,4.6,14.8],target:[.3,2.4,0]}});let e=this.group;this.doc=A_(0,1,1.32),e.add(this.doc),this.pick(this.doc,`pdfFile`,[.5,.66,.05]),this.gate=new W,this.gate.position.set(-2,2.3,.4),this.gate.rotation.y=Math.PI/2,e.add(this.gate),this.ring=new K(new To(1.05,.09,12,80),y_(4869976,.35,.7)),this.gate.add(this.ring),this.ringG=new K(new To(1.05,.025,8,80),Q(Y.lava,2)),this.ringG.position.z=.1,this.gate.add(this.ringG),this.scan=new K(new Co(1.9,.04),Q(Y.lava,2)),this.gate.add(this.scan);let t=new K(new Ji(.08,.12,1.25,12),y_(7172736));t.position.set(-2,.62,.4),e.add(t),this.pick(this.ring,`parser`,[0,1.2,0]),this.gateL=this.addLabel(`ai_parse_document(content)`,`lava`,[-2,3.75,.4]),this.elems=ay.map(([t,n,r,i],a)=>{let o=new W;e.add(o);let s=new K(x_(i,.3,.08,.04),r===12172484||r===7172736?$(r,.55):Q(r,1.1));if(o.add(s),t===`table`)for(let e=1;e<4;e++){let t=new K(new q(.02,.28,.1),$(1842981));t.position.x=-i/2+e*i/4,o.add(t)}return o.userData.lbl=this.addLabel(`<b>${t}</b> ${n}`,`tiny`,[i/2+.1,0,0],o),o.userData.lbl.center.set(0,.5),o.userData.base=Yv(-.1,4.2-a*.48,.5),o}),this.elHit=this.hitBox(2.2,3,.5,[-.1,3,.5]),this.pick(this.elHit,`elements`,[1,1.4,0]),this.scanDoc=A_(1,.8,1.05),this.scanDoc.position.set(-4.4,4.2,-.4),this.scanDoc.rotation.z=.08,e.add(this.scanDoc),this.scanDoc.children[0].material=this.scanDoc.children[0].material.map(e=>{let t=e.clone();return t.color=new G(10130570),t}),this.eye=new K(new Co(.85,.05),Q(Y.mint,2)),this.eye.position.z=.03,this.scanDoc.add(this.eye),this.pick(this.scanDoc,`ocr`,[.42,.55,.05]),this.ocrL=this.addLabel(`Scanned page? OCR is built in`,`tiny`,[0,-.75,0],this.scanDoc),this.tbl=Fv(4.6,1.75,Vv(`rx_silver`,{title:`main.provider_ops.silver_doc_elements`,sub:`TEXT lives here`,cols:[[`doc_id`,70],[`page`,40],[`element_type`,110],[`text`,300]],rows:[[`acme_pa`,12,`section_header`,`4. Claims Submission`],[`acme_pa`,12,`text`,`4.2 Provider shall submit claims within ninety (90) days of the date of service…`],[`acme_pa`,12,`text`,`4.3 Corrected claims must be received within 120 days…`],[`acme_pa`,13,`table`,`<table><tr><td>Claim type</td><td>Limit</td>…`],[`acme_pa`,13,`text`,`4.4 Out-of-network claims follow §7.1…`]],w:540,h:175,hl:3,hlCol:`#8eae9d`}),{d:.06}),this.tbl.position.set(3.5,1.4,0),this.tbl.rotation.y=-.28,e.add(this.tbl),this.pick(this.tbl,`silverTable`,[-2.3,.9,.05]),this.variant=Fv(2.7,1.25,Av(`rx_variant`,[[`{"document": {`,Pv],[`  "elements": [{`,Pv],[`    "type": "text",`,Nv],[`    "content": "4.2 Provider shall…",`,Mv],[`    "bbox": [{"coord":[72,410,540,452],`,Pv],[`             "page_id": 11}] }…] } }`,Pv]],{w:350,h:130,title:`Raw output · VARIANT`}),{d:.04}),this.variant.position.set(3.4,4,-.4),this.variant.rotation.y=-.25,e.add(this.variant),this.pick(this.variant,`variantOut`,[1.35,.62,.03]),this.bigL=this.addLabel(`Now a Delta table contains the PDF’s <b>text</b>`,`big`,[3.5,.15,.9])}update(e,t){let n=1-X(e,10.6,11),r=Z.io(X(e,.6,2.4));this.doc.position.set(p_(-4.6,-2,r),2.3,.4),this.doc.rotation.set(0,p_(.5,Math.PI/2,r),0),Xv(this.doc,Z.back(X(e,.1,.6))*(1-X(e,2.2,2.6))*n),Xv(this.gate,Z.out(X(e,.2,.9))*n),this.show(this.gateL,X(e,.6,1)*n),this.ringG.rotation.z=t,this.scan.position.y=Math.sin(t*2.4)*.9,this.scan.scale.x=Math.sqrt(Math.max(.01,1-(this.scan.position.y/1.05)**2)),this.elems.forEach((r,i)=>{let a=Z.out(X(e,2.4+i*.25,3.2+i*.25))*n;r.position.copy(Yv(-2,2.3,.4)).lerp(r.userData.base,a),r.position.y+=Math.sin(t+i)*.02,Xv(r,Math.max(.001,a)),this.show(r.userData.lbl,X(e,3+i*.25,3.4+i*.25)*n)}),Xv(this.scanDoc,Z.back(X(e,4,4.5))*n),this.eye.position.y=Math.sin(t*1.8)*.48,this.show(this.ocrL,X(e,4.4,4.8)*n),Xv(this.tbl,Z.back(X(e,4.6,5.2))*n),this.show(this.bigL,X(e,5.2,5.6)*n),Xv(this.variant,Z.back(X(e,5.8,6.4))*n)}},sy=class extends B_{constructor(){super({loop:11,cam:{pos:[0,4.8,14.8],target:[0,2.5,0]}});let e=this.group;this.ribbon=Fv(7.6,.9,Hv(`rx_rib`,{parts:[[`4.2 Provider shall submit claims within ninety (90) days of the date of service. `,null,null],[`Claims received after this period will be denied for timely filing.`,`#2b2e35`,`rgba(195,162,115,.55)`],[` 4.3 Corrected claims must be received `,null,null],[`within 120 days of the original denial.`,`#2b2e35`,`rgba(142,174,157,.55)`],[` 4.4 Out-of-network claims follow the limits in §7.1.`,null,null]],w:900,h:88,accent:`#6d7280`}),{d:.04}),this.ribbon.position.set(0,5,-.3),e.add(this.ribbon),this.pick(this.ribbon,`sourceText`,[3.8,.45,.03]),this.ribL=this.addLabel(`One section of silver text (illustrative)`,`ghost`,[0,5.65,-.3]),this.blades=[-.75,1.05].map(t=>{let n=new K(new q(.03,1.4,.5),Q(Y.lava,2));return n.position.set(t,6.4,-.1),e.add(n),n}),this.splitter=new W,this.blades.forEach(e=>this.splitter.add(e)),e.add(this.splitter),this.pick(this.blades[0],`splitter`,[0,.7,0]);let t=[{id:`c0`,parts:[[`4.2 Provider shall submit claims within ninety (90) days of the date of service. `,null,null],[`Claims received after this period will be denied for timely filing.`,`#2b2e35`,`rgba(195,162,115,.6)`]],foot:`acme_pa-0041 · p.12 · 512 tok`},{id:`c1`,parts:[[`Claims received after this period will be denied for timely filing.`,`#2b2e35`,`rgba(195,162,115,.6)`],[` 4.3 Corrected claims must be received within 120 days of the original denial.`,null,null]],foot:`acme_pa-0042 · p.12 · 508 tok`},{id:`c2`,parts:[[`…within 120 days of the original denial.`,`#2b2e35`,`rgba(195,162,115,.6)`],[` 4.4 Out-of-network claims follow the limits in §7.1.`,null,null]],foot:`acme_pa-0043 · p.13 · 497 tok`}];this.cards=t.map((t,n)=>{let r=Fv(2.25,1.35,Hv(`rx_ch`+n,{title:`chunk ${n}`,parts:t.parts,foot:t.foot,w:300,h:180}),{d:.04});return r.userData.from=Yv(-2.5+n*2.5,5,-.3),r.userData.to=Yv(-2.75+n*2.75,2.75,.8),e.add(r),r}),this.cardHit=this.hitBox(8,1.5,.3,[0,2.75,.8]),this.pick(this.cardHit,`chunkCards`,[-3.9,.75,0]),this.ovl=[0,1].map(t=>{let n=new K(new q(1,.06,.06),Q(Y.amber,1.8));return n.position.set(-1.375+t*2.75,3.6,.85),e.add(n),n}),this.pick(this.ovl[0],`overlap`,[0,.18,0]),this.ovlL=this.addLabel(`<b>overlap</b> ~64 tokens shared`,`tiny`,[-1.375,3.85,.85]),this.ruler=new W,this.ruler.position.set(0,1.55,1.2),e.add(this.ruler);let n=new K(new q(8,.05,.12),$(9278107,.5));this.ruler.add(n);for(let e=0;e<=16;e++){let t=new K(new q(.02,e%4?.1:.22,.02),$(13225172));t.position.set(-4+e*.5,.08,.06),this.ruler.add(t)}[[-4,-1.5,Y.lava],[-2.2,.3,Y.cyan],[-.4,2.1,Y.mint]].forEach(([e,t,n],r)=>{let i=new K(new q(t-e,.06,.06),Q(n,1.2));i.position.set((e+t)/2,-.12-r*.09,.08),this.ruler.add(i)}),this.pick(this.ruler,`tokenRuler`,[4.1,.1,0]),this.rulerL=this.addLabel(`chunk_size 512 tokens · chunk_overlap 64`,`tiny`,[0,-.5,.1],this.ruler),this.tbl=Fv(5.4,1.2,Vv(`rx_chunks`,{title:`main.provider_ops.chunks`,sub:`CDF on`,cols:[[`chunk_id`,110],[`doc_id`,70],[`page`,40],[`chunk_text`,300],[`n_tok`,50]],rows:[[`acme_pa-0041`,`acme_pa`,12,`4.2 Provider shall submit claims within ninety (90)…`,512],[`acme_pa-0042`,`acme_pa`,12,`Claims received after this period will be denied…`,508],[`acme_pa-0043`,`acme_pa`,13,`…within 120 days of the original denial. 4.4…`,497]],w:600,h:120,hl:3,hlCol:`#8eae9d`}),{d:.05}),this.tbl.position.set(-.9,.7,2.7),this.tbl.rotation.x=-.55,e.add(this.tbl),this.pick(this.tbl,`chunksTable`,[-2.75,.6,.03]),this.cdf=new K(x_(1.6,.4,.12,.08),Q(Y.mint,1.2)),this.cdf.position.set(3.6,.9,2.5),e.add(this.cdf),this.cdfL=this.addLabel(`delta.enableChangeDataFeed = true`,`tiny`,[0,.42,0],this.cdf),this.pick(this.cdf,`cdf`,[.8,.2,.06])}update(e,t){let n=1-X(e,10.6,11);Xv(this.ribbon,Z.out(X(e,.2,.8))*n*(1-X(e,2.6,2.9))),this.show(this.ribL,X(e,.5,.9)*n*(1-X(e,2.6,2.9)));let r=m_(e,1.2,2.6);this.blades.forEach(t=>{t.position.y=6.4-r*1.4,Xv(t,X(e,1,1.2)*(1-X(e,2.6,2.8))*n+.001)}),this.cards.forEach((r,i)=>{let a=Z.io(X(e,2.6+i*.15,4+i*.15));r.position.copy(r.userData.from).lerp(r.userData.to,a),r.position.y+=Math.sin(t*.8+i)*.03*a,Xv(r,X(e,2.5,2.7)*n),r.rotation.y=(i-1)*-.12*a}),this.ovl.forEach(t=>Xv(t,Z.back(X(e,4.3,4.8))*n)),this.show(this.ovlL,X(e,4.6,5)*n),Xv(this.ruler,Z.out(X(e,5,5.6))*n),this.show(this.rulerL,X(e,5.4,5.8)*n),Xv(this.tbl,Z.back(X(e,6,6.6))*n),Xv(this.cdf,Z.back(X(e,6.8,7.3))*n),this.show(this.cdfL,X(e,7.1,7.5)*n)}},cy=(e,t,n)=>new U(e,t,n),ly=(e,t)=>e.scale.setScalar(Math.max(.001,t)),uy=(e,t,n,r,i)=>Fv(1.9,1.05,Hv(e,{title:t,parts:[[n,null,null]],foot:r,w:260,h:144,accent:i}),{d:.04});function dy(e=1.6,t=3.2,n=1.4){let r=new W,i=new K(x_(e,t,n,.08),v_(5989488,.16));i.position.y=t/2+.05,r.add(i),i.add(b_(new q(e,t,n),9086138,1,.6));let a=new K(x_(e+.2,.12,n+.2,.04),y_(4869976,.4,.6));a.position.y=.06,r.add(a),r.leds=[];for(let t=0;t<6;t++){let i=new K(new q(.14,.05,.02),Q(t%2?Y.mint:Y.amber,1.4));i.position.set(-e/2+.2,.4+t*.5,n/2+.01),r.add(i),r.leds.push(i)}return r.shell=i,r}var fy=[...Array.from({length:9},(e,t)=>[-.6+Math.sin(t*2.1)*.35,.7+Math.cos(t*1.3)*.3,.3+Math.sin(t)*.3,Y.lava]),...Array.from({length:9},(e,t)=>[.7+Math.sin(t*1.7)*.35,-.5+Math.cos(t*2.3)*.3,-.3+Math.sin(t*.7)*.3,Y.cyan]),...Array.from({length:8},(e,t)=>[.5+Math.sin(t*2.9)*.3,.8+Math.cos(t*1.9)*.25,-.6+Math.sin(t*1.3)*.3,Y.mint])],py=class extends B_{constructor(){super({loop:11,cam:{pos:[0,4.6,14.8],target:[0,2.4,0]}});let e=this.group;this.card=uy(`rx_e_card`,`chunk acme_pa-0041`,`4.2 Provider shall submit claims within ninety (90) days of the date of service…`,`chunk_text`,`#d9653b`),e.add(this.card),this.pick(this.card,`chunkIn`,[.95,.52,.03]),this.model=Kv(6,1.3),this.model.position.set(-1.6,.3,.6),e.add(this.model);let t=new K(new Ji(.8,.95,.3,8),$(3093307,.6));t.position.set(-1.6,.15,.6),e.add(t),this.pick(this.model.plates[3],`embedModel`,[.75,.4,0]),this.modelL=this.addLabel(`databricks-gte-large-en`,`lava`,[-1.6,2.3,.6]),this.vec=qv(Jv(48,3),{w:4.2,maxH:.8}),this.vec.position.set(2.3,3,.6),e.add(this.vec),this.vecHit=this.hitBox(4.4,1.6,.3,[2.3,3,.6]),this.pick(this.vecHit,`vectorStrip`,[2.2,.8,0]),this.vecL=this.addLabel(`1,024 floats (48 drawn) · illustrative`,`tiny`,[2.3,2,.6]),this.vals=Fv(4.3,.55,Av(`rx_vals`,[[`[0.0123, -0.0831, 0.0412, 0.0067, -0.0219, … 1,019 more]`,Nv]],{w:520,h:40}),{d:.03}),this.vals.position.set(2.3,4.2,.4),e.add(this.vals),this.space=new W,this.space.position.set(3.6,.95,-.8),e.add(this.space);let n=new q(2.4,1.8,1.8);this.space.add(b_(n,9278107,1,.5));let r=new K(n,v_(5989488,.06));this.space.add(r),this.dots=fy.map(([e,t,n,r])=>{let i=new K(new wo(.06,12,8),Q(r,1.2));return i.position.set(e,t*.8,n),this.space.add(i),i}),this.newDot=new K(new wo(.11,16,10),Q(16777215,2)),this.space.add(this.newDot),this.pick(r,`meaningSpace`,[1.2,.9,0]),this.spL=this.addLabel(`Similar meaning → nearby points`,`ghost`,[3.6,-.15,.3]),this.c1=this.addLabel(`deadlines`,`tiny`,[-.6,1.15,.3],this.space),this.c2=this.addLabel(`credentialing`,`tiny`,[.7,-.85,-.3],this.space);let i=(t,n,r,i)=>{let a=new W;a.position.set(t,0,1.9),e.add(a);let o=new K(x_(1.7,.3,.9,.06),$(3093307,.6));o.position.y=.15,a.add(o);let s=new K(new q(1.5,.04,.04),Q(r,1.4));return s.position.set(0,.31,.46),a.add(s),a.userData.lbl=this.addLabel(i,`tiny`,[0,.75,0],a),this.pick(a,n,[.8,.5,.3]),a};this.optA=i(-4.4,`managedOpt`,Y.lava,`<b>Managed</b> · vectors stored in the index`);let a=Wv({layers:2,counts:[4,8],w:1,d:.5,gap:.3});a.position.y=.4,this.optA.add(a),this.optB=i(-.6,`selfOpt`,Y.cyan,`<b>Self-managed</b> · ARRAY&lt;FLOAT&gt; in Delta`);let o=Uv(1.2,.5,2);o.position.y=.3,this.optB.add(o);let s=new K(new q(.22,.42,.52),Q(Y.cyan,1.2));s.position.set(.72,.55,0),this.optB.add(s)}update(e,t){let n=1-X(e,10.6,11),r=Z.io(X(e,.6,2.2));this.card.position.set(p_(-4.6,-1.6,r),p_(3.2,1.8,r),p_(.4,.6,r)),this.card.rotation.y=p_(.4,0,r),ly(this.card,Z.back(X(e,.1,.6))*(1-X(e,2,2.4)*.999)*n),ly(this.model,Z.out(X(e,.2,.9))*n),this.show(this.modelL,X(e,.6,1)*n),this.model.plates.forEach((t,n)=>{t.material.emissiveIntensity=.03+.06*m_((e*1.6-n*.25)%2,0,1)*X(e,2,2.4)*10}),this.model.core.rotation.y=t,this.vec.position.x=2.3,ly(this.vec,X(e,2.4,2.5)*n),this.vec.set(Z.out(X(e,2.5,3.8))),this.show(this.vecL,X(e,3.2,3.6)*n),ly(this.vals,Z.back(X(e,3.6,4.1))*n),ly(this.space,Z.out(X(e,4.4,5.1))*n),this.space.rotation.y=Math.sin(t*.25)*.3;let i=Z.io(X(e,5.3,6.5));this.newDot.position.set(p_(-1.6,-.55,i),p_(1.5,.62,i),p_(1.2,.35,i)),this.newDot.visible=e>5.3,this.show(this.spL,X(e,5,5.4)*n),this.show(this.c1,X(e,5.2,5.6)*n),this.show(this.c2,X(e,5.3,5.7)*n),ly(this.optA,Z.back(X(e,6.8,7.4))*n),ly(this.optB,Z.back(X(e,7.2,7.8))*n),this.show(this.optA.userData.lbl,X(e,7.2,7.6)*n),this.show(this.optB.userData.lbl,X(e,7.6,8)*n)}},my=class extends B_{constructor(){super({loop:11,radius:6.6,cam:{pos:[0,4.8,15.2],target:[0,2.3,0]}});let e=this.group;this.slab=Uv(2.2,1.4,4),this.slab.position.set(-4,0,.3),e.add(this.slab),this.tbl=Fv(2.7,1,Vv(`rx_idx_src`,{title:`chunks`,sub:`source table`,cols:[[`chunk_id`,110],[`chunk_text`,200]],rows:[[`acme_pa-0041`,`4.2 Provider shall submit…`],[`acme_pa-0042`,`Claims received after…`]],w:330,h:100}),{d:.04}),this.tbl.position.set(-4,1.6,.4),e.add(this.tbl),this.pick(this.slab,`chunksSrc`,[1.1,.9,.5]),this.pick(this.tbl,`chunksSrc`,null);let t=new fa([cy(-2.8,.6,.4),cy(-1.4,1,1.2),cy(.2,1,1.2),cy(1.6,1.4,.4)]);this.pipe=new K(new Eo(t,60,.12,12),v_(9086138,.28)),e.add(this.pipe),this.pick(this.pipe,`cdfPipe`,null),this.cdfHit=this.hitBox(2,.8,.8,[-1.4,1,1.2]),this.pick(this.cdfHit,`cdfPipe`,[0,.5,0]),this.curve=t,this.chips=[[`+`,Y.mint],[`~`,Y.amber],[`+`,Y.mint],[`−`,12604986],[`+`,Y.mint]].map(([t,n])=>{let r=new K(x_(.26,.2,.2,.05),Q(n,1.4));return e.add(r),r}),this.cdfL=this.addLabel(`Change Data Feed: inserts · updates · deletes`,`tiny`,[-1.2,1.85,1.2]),this.emb=Kv(3,.6),this.emb.position.set(.2,1.25,1.2),e.add(this.emb),this.pick(this.emb.plates[1],`syncEmbed`,[.4,.3,0]),this.embL=this.addLabel(`embeds new chunks`,`tiny`,[.2,2.25,1.2]),this.rack=dy(2.9,3.2,2.2),this.rack.position.set(3,0,-.2),e.add(this.rack),this.epHit=this.hitBox(3,.55,2.3,[3,3,-.2]),this.pick(this.epHit,`endpoint`,[1.5,.1,0]),this.graph=Wv({layers:3,counts:[4,10,24],w:2.3,d:1.5,gap:.95}),this.graph.position.set(3,.55,-.2),e.add(this.graph),this.gHit=this.hitBox(2.4,2.2,1.6,[3,1.5,-.2]),this.pick(this.gHit,`hnsw`,[-1.1,1,.8]),this.epL=this.addLabel(`AI Search endpoint · <b>chunks_index</b>`,`lava`,[3,3.65,-.2]),this.neL=this.addLabel(`A separate copy built for search, <b>not</b> the Delta table`,`big`,[.4,4.6,0]),this.sw=Fv(2.4,.95,Av(`rx_sync`,[[`pipeline_type = "TRIGGERED"`,jv],[`  → index.sync() after each load`,Pv],[`  or "CONTINUOUS" (seconds behind)`,Pv]],{w:300,h:90}),{d:.04}),this.sw.position.set(-3.8,3.4,-.6),this.sw.rotation.y=.25,e.add(this.sw),this.pick(this.sw,`syncMode`,[1.2,.45,.03]),this.wb=Uv(1.1,.7,2,3817288),this.wb.position.set(5.2,0,1.7),e.add(this.wb),this.pick(this.wb,`writeback`,[.5,.5,.3]),this.wbL=this.addLabel(`optional <b>_writeback_table</b>`,`tiny`,[5.2,.85,1.7])}update(e,t){let n=1-X(e,10.6,11);ly(this.slab,Z.out(X(e,.2,.8))*n),ly(this.tbl,Z.back(X(e,.4,1))*n),this.pipe.scale.setScalar(Math.max(.001,X(e,1,1.6)*n));let r=X(e,1.6,2)*n;this.chips.forEach((e,n)=>{let i=(t*.18+n/this.chips.length)%1;this.curve.getPointAt(i,e.position),e.rotation.y=t+n,ly(e,r*m_(i,0,1)*1.2)}),this.show(this.cdfL,X(e,1.8,2.2)*n),ly(this.emb,Z.back(X(e,2.2,2.7))*n),this.show(this.embL,X(e,2.6,3)*n),this.emb.core.rotation.y=t*1.5,ly(this.rack,Z.out(X(e,2.8,3.5))*n),this.show(this.epL,X(e,3.4,3.8)*n),this.graph.lv.forEach((t,r)=>{let i=Z.out(X(e,3.6+(2-r)*.4,4.4+(2-r)*.4))*n;t.mats.forEach(e=>ly(e,i)),t.plane.scale.setScalar(Math.max(.001,i))}),this.graph.children.filter(e=>e.isLineSegments).forEach(t=>t.material.opacity=.35*X(e,5,5.6)*n),this.rack.leds.forEach((e,n)=>e.visible=Math.sin(t*4+n*1.3)>-.3),this.show(this.neL,X(e,5.6,6)*n),ly(this.sw,Z.back(X(e,6.4,7))*n),ly(this.wb,Z.back(X(e,7.2,7.7))*n),this.show(this.wbL,X(e,7.5,7.9)*n)}},hy=[[`[1] 0.89`,`acme_pa-0041`,`4.2 Provider shall submit claims within ninety (90) days of the date of service…`,`#d9653b`],[`[2] 0.81`,`claims_policy-0107`,`Timely filing: 90 calendar days from DOS for in- and out-of-network…`,`#c3a273`],[`[3] 0.62`,`acme_pa-0043`,`4.4 Out-of-network claims follow the limits in §7.1…`,`#8aa4ba`]],gy=class extends B_{constructor(){super({loop:12,radius:6.6,cam:{pos:[0,5,15.4],target:[0,2.5,0]}});let e=this.group;this.user=I_(Y.cyan),this.user.position.set(-5,0,1.4),this.user.rotation.y=.6,e.add(this.user),this.q=Fv(3,.72,Hv(`rx_q_card`,{parts:[[`“What’s the timely-filing limit for out-of-network claims?”`,null,null]],w:380,h:70,accent:`#8aa4ba`}),{d:.04}),this.q.position.set(-3.9,3.4,1),this.q.rotation.y=.25,e.add(this.q),this.pick(this.q,`question`,[1.5,.36,.03]),this.model=Kv(4,.8),this.model.position.set(-2.2,0,1.4),e.add(this.model);let t=new K(new Ji(.5,.6,.15,8),$(3093307,.6));t.position.set(-2.2,.08,1.4),e.add(t),this.pick(this.model.plates[2],`sameModel`,[.5,.3,0]),this.modelL=this.addLabel(`same model: gte-large-en`,`tiny`,[-2.2,1.45,1.4]),this.qv=qv(Jv(24,11),{w:1.6,maxH:.45}),this.qv.position.set(-2.2,2.2,1.4),e.add(this.qv),this.qvHit=this.hitBox(1.8,.9,.3,[-2.2,2.2,1.4]),this.pick(this.qvHit,`queryVector`,[.9,.4,0]),this.star=new K(new So(.14,0),Q(16777215,2.2)),e.add(this.star),this.graph=Wv({layers:3,counts:[4,10,26],w:3.2,d:1.8,gap:1,seed:19}),this.graph.position.set(.9,.5,-.3),e.add(this.graph),this.gHit=this.hitBox(3.4,2.4,2,[.9,1.6,-.3]),this.pick(this.gHit,`annWalk`,[1.6,1.3,.9]),this.idxL=this.addLabel(`AI Search index · <b>ANN over vectors</b>`,`lava`,[.9,3.25,-.3]);let n=cy(.5,0,.4);this.path=this.graph.lv.map(e=>{let t=0,r=1e9;return e.pts.forEach((e,i)=>{let a=(e.x-n.x)**2+(e.z-n.z)**2;a<r&&(r=a,t=i)}),e.pts[t].clone().add(this.graph.position)}),this.pathB=[new Bv(Y.lava,.03),new Bv(Y.lava,.03),new Bv(Y.lava,.03)],this.pathB.forEach(t=>e.add(t.mesh));let r=this.graph.lv[2];this.knn=r.pts.map((e,t)=>[e.distanceTo(this.path[2].clone().sub(this.graph.position)),t]).sort((e,t)=>e[0]-t[0]).slice(0,3).map(([,e])=>r.mats[e]),this.halo=this.knn.map(()=>{let t=new K(new To(.13,.02,6,24),Q(Y.lava,2));return t.rotation.x=Math.PI/2,e.add(t),t}),this.res=hy.map(([t,n,r,i],a)=>{let o=uy(`rx_top`+a,`${t} · ${n}`,r,`score · illustrative`,i);return o.position.set(4.6,4-a*1.2,.4),o.rotation.y=-.3,e.add(o),o}),this.resHit=this.hitBox(2,3.5,.4,[4.6,2.8,.4]),this.pick(this.resHit,`topK`,[-.9,1.6,.2]),this.resL=this.addLabel(`top-k = 3 · chunk_id, chunk_text, score`,`tiny`,[4.6,5,.4]),this.filter=new K(new Ji(.42,.1,.55,24,1,!0),v_(Y.amber,.4)),this.filter.position.set(-.9,3.7,.6),e.add(this.filter),this.pick(this.filter,`filters`,[.4,.2,0]),this.filterL=this.addLabel(`filters={"doc_type": "contract"}`,`tiny`,[-.9,4.2,.6]),this.slab=Uv(2,1,3,3093307),this.slab.position.set(2.7,0,3.7),e.add(this.slab),this.x=new W,this.x.position.set(2.7,1.1,4.2),e.add(this.x),[1,-1].forEach(e=>{let t=new K(new q(1.1,.08,.08),Q(12604986,1.6));t.rotation.z=e*Math.PI/4,this.x.add(t)}),this.pick(this.slab,`noScan`,[1,.7,.5]),this.noL=this.addLabel(`chunks table: <b>not scanned</b> at query time`,`ghost`,[2.7,1.75,4.2])}update(e,t){let n=1-X(e,11.6,12);ly(this.q,Z.back(X(e,.2,.7))*n),ly(this.model,Z.out(X(e,.6,1.2))*n),this.show(this.modelL,X(e,1,1.4)*n),this.model.core.rotation.y=t*1.5,ly(this.qv,X(e,1.6,1.7)*n),this.qv.set(Z.out(X(e,1.7,2.6))),ly(this.graph,Z.out(X(e,.4,1.4))*n),this.show(this.idxL,X(e,1,1.4)*n),ly(this.slab,Z.out(X(e,.8,1.4))*n),ly(this.x,Z.back(X(e,2,2.4))*n),this.show(this.noL,X(e,2.2,2.6)*n),ly(this.filter,Z.back(X(e,2.6,3))*n),this.show(this.filterL,X(e,2.8,3.2)*n),this.filter.rotation.y=t;let r=this.path[0].clone().add(cy(0,.6,0)),i=Z.io(X(e,3,4)),a=[cy(-2.2,2.2,1.4),r,...this.path],o;if(e<4)o=a[0].clone().lerp(a[1],i);else{let t=Math.min(2.999,X(e,4,6.4)*3),n=Math.floor(t);o=a[1+n].clone().lerp(a[2+n],Z.io(t-n))}this.star.position.copy(o),this.star.rotation.y=t*3,ly(this.star,X(e,2.9,3)*n*(1-X(e,9.5,9.8))),this.pathB.forEach((t,r)=>{let i=X(e,4+r*.8,4.8+r*.8);t.set(a[1+r],a[2+r],i*n)}),this.halo.forEach((r,i)=>{r.position.copy(this.knn[i].getWorldPosition(new U)),ly(r,Z.back(X(e,6.4+i*.2,6.9+i*.2))*n),r.rotation.z=t}),this.res.forEach((r,i)=>{ly(r,Z.back(X(e,7+i*.35,7.6+i*.35))*n),r.position.y=4-i*1.2+Math.sin(t+i)*.03}),this.show(this.resL,X(e,7.4,7.8)*n)}},_y=[[`SYSTEM`,jv],[`Answer ONLY from the context. Cite as [n].`,Mv],[``,``],[`CONTEXT`,jv],[`[1] acme_pa p.12 · 4.2 Provider shall submit`,Nv],[`    claims within ninety (90) days of DOS…`,Nv],[`[2] claims_policy p.7 · Timely filing: 90`,Nv],[`    calendar days from DOS…`,Nv],[`[3] acme_pa p.13 · 4.4 Out-of-network claims…`,Nv],[``,``],[`USER`,jv],[`What’s the timely-filing limit for`,Mv],[`out-of-network claims?`,Mv]],vy=class extends B_{constructor(){super({loop:11,cam:{pos:[0,4.6,14.8],target:[0,2.5,0]}});let e=this.group;this.graph=Wv({layers:2,counts:[5,14],w:1.6,d:1,gap:.6,seed:5}),this.graph.position.set(-4.6,.4,.2),e.add(this.graph),this.gL=this.addLabel(`index`,`ghost`,[-4.6,1.5,.2]),this.retr=new W,this.retr.position.set(-2.6,0,.6),e.add(this.retr);let t=new K(new Ji(.45,.55,1.2,6),y_(4869976,.4,.6));t.position.y=.6,this.retr.add(t),this.magnet=new K(new To(.32,.09,10,32,Math.PI),Q(Y.lava,1.6)),this.magnet.position.y=1.55,this.magnet.rotation.z=Math.PI,this.retr.add(this.magnet),this.pick(this.retr,`retriever`,[.5,1.6,0]),this.retrL=this.addLabel(`Retriever = your code + similarity_search`,`tiny`,[0,2.05,0],this.retr),this.cards=[0,1,2].map(t=>{let n=Fv(1.1,.5,Hv(`rx_pc`+t,{title:`[${t+1}]`,parts:[[hy[t][2].slice(0,46),null,null]],w:200,h:90,accent:hy[t][3]}),{d:.03});return e.add(n),n}),this.prompt=Fv(3.3,3.5,Av(`rx_prompt`,_y,{w:380,h:300,title:`Assembled prompt`}),{d:.05}),this.prompt.position.set(.2,2.6,.2),e.add(this.prompt),this.pick(this.prompt,`promptPanel`,[1.65,1.75,.03]),this.llm=Iv(.7),this.llm.position.set(3.5,2.8,.2),e.add(this.llm),this.pick(this.llm.shell,`llm`,[.6,.6,0]),this.llmL=this.addLabel(`LLM endpoint · llama-3-3-70b-instruct`,`lava`,[3.5,3.95,.2]),this.beam=new Bv(Y.lava,.03),e.add(this.beam.mesh),this.ans=this.addLabel(`Out-of-network claims must be filed within <b>90 days</b> of the date of service [1][2].`,`bubble`,[4,1.25,1]),this.ansHit=this.hitBox(2.4,.9,.3,[4,1.25,1]),this.pick(this.ansHit,`answer`,[1.2,.4,0]),this.bigL=this.addLabel(`The LLM never searches. It only reads what the retriever pasted in.`,`big`,[0,5.25,0])}update(e,t){let n=1-X(e,10.6,11);ly(this.graph,Z.out(X(e,.1,.7))*n),this.show(this.gL,X(e,.4,.8)*n),ly(this.retr,Z.back(X(e,.4,1))*n),this.show(this.retrL,X(e,.8,1.2)*n),this.magnet.rotation.y=t,ly(this.prompt,Z.out(X(e,1,1.6))*n),this.cards.forEach((t,r)=>{let i=X(e,1.6+r*.6,2.4+r*.6),a=Z.io(i),o=cy(-4.6,1.4,.2),s=cy(-2.6,2.4,.8),c=cy(.6,3.05-r*.64,.35);t.position.copy(a<.5?o.clone().lerp(s,a*2):s.clone().lerp(c,(a-.5)*2)),ly(t,(i>0?1:.001)*(1-X(e,2.4+r*.6,2.7+r*.6))*n)}),ly(this.llm,Z.back(X(e,4,4.6))*n),this.show(this.llmL,X(e,4.4,4.8)*n),this.llm.rotation.y=t*.3,this.llm.heart.rotation.x=t,this.beam.set(cy(1.9,2.6,.2),cy(2.8,2.8,.2),X(e,4.8,5.4)*n),this.show(this.ans,X(e,6,6.5)*n),this.show(this.bigL,X(e,6.8,7.2)*n)}},yy=[[`mapVolume`,`Volume`,`PDF file · original bytes`,Y.amber],[`mapBronze`,`Bronze table`,`path · length · content BINARY`,9278107],[`mapSilver`,`Silver table`,`parsed text per element`,Y.mint],[`mapChunks`,`Chunks table`,`passages (+ vectors if self-managed)`,Y.mint],[`mapIndex`,`AI Search index`,`vectors + synced columns`,Y.cyan],[`mapModels`,`Model Serving`,`embed model + LLM · store no data`,Y.violet]],by=class extends B_{constructor(){super({loop:12,radius:7.4,cam:{pos:[0,6.6,14.6],target:[0,1.7,0]}});let e=this.group;this.nodes=yy.map(([t,n,r,i],a)=>{let o=-1.15+a*.46,s=new W;s.position.set(Math.sin(o)*5.6,0,Math.cos(o)*1.6-.6),e.add(s);let c=new K(new Ji(.75,.85,.22,32),$(3093307,.6));c.position.y=.11,s.add(c);let l=new K(new To(.8,.02,6,64),Q(i,1.4));l.rotation.x=Math.PI/2,l.position.y=.23,s.add(l);let u;if(a===0){u=Gv(.5,.7);let e=A_(0,.4,.52);e.position.set(0,.75,0),u.add(e),s.userData.spin=e}else if(a<=3){if(u=Uv(1,.7,a+1),a===3){let e=new K(new q(.16,.72,.72),v_(Y.cyan,.4));e.position.set(.6,.45,0),u.add(e)}}else if(a===4)u=Wv({layers:3,counts:[3,6,12],w:.9,d:.7,gap:.35,seed:3}),u.position.y=.2;else{u=new W;let e=Kv(3,.55);e.position.x=-.32,u.add(e);let t=Iv(.26);t.position.set(.36,.55,0),u.add(t),s.userData.core=t}return u.position.y+=.22,s.add(u),s.userData.lbl=this.addLabel(`<b>${n}</b><span class="lsub"><br>${r}</span>`,`big`,[0,1.9+a%2*1.05,0],s),this.pick(s,t,[.75,1.2,.4]),s});let t=this.nodes.map(e=>e.position.clone().add(cy(0,.9,0)));this.flow=new P_(new fa(t.slice(0,5)),50,Y.lava,.2,.12),e.add(this.flow.points),this.qflow=new P_(new fa([t[4],t[4].clone().lerp(t[5],.5).add(cy(0,.8,.6)),t[5]]),16,Y.cyan,.2,.3),e.add(this.qflow.points),this.dome=new K(new wo(6.6,48,16,0,Math.PI*2,0,Math.PI/2),v_(Y.mint,.05)),this.dome.scale.y=.72,e.add(this.dome),this.domeE=new Ni(new Do(new wo(6.6,18,6,0,Math.PI*2,0,Math.PI/2)),new xi({color:Y.mint,transparent:!0,opacity:.12})),this.domeE.scale.y=.72,e.add(this.domeE),this.uc=Lv(Y.mint,1.1),this.uc.position.set(0,5,-.6),e.add(this.uc),this.pick(this.uc,`mapUC`,[.6,.6,0]),this.ucL=this.addLabel(`Unity Catalog governs all six · main.provider_ops.*`,`lava`,[0,5.95,-.6]),this.keyL=this.addLabel(`<b>orange</b> = build path (offline) · <b>blue</b> = query path (per question)`,`tiny`,[0,-.4,2.4])}update(e,t){let n=1-X(e,11.6,12);this.nodes.forEach((r,i)=>{ly(r,Z.back(X(e,.3+i*.4,.9+i*.4))*n),this.show(r.userData.lbl,X(e,.8+i*.4,1.2+i*.4)*n),r.userData.spin&&(r.userData.spin.rotation.y=t*.6),r.userData.core&&(r.userData.core.rotation.y=t,r.userData.core.heart.rotation.x=t)}),this.flow.update(t,X(e,3,3.6)*n),this.qflow.update(t,X(e,4,4.6)*n);let r=Z.out(X(e,4.6,5.6))*n;this.dome.material.opacity=.1*r,this.domeE.material.opacity=.12*r,ly(this.uc,Z.back(X(e,5.2,5.8))*n),this.uc.rotation.y=Math.sin(t*.6)*.4,this.show(this.ucL,X(e,5.6,6)*n),this.show(this.keyL,X(e,4.2,4.6)*n)}},xy={rag:{id:`rag`,n:1,title:`Document Q&A with RAG`,steps:a_,phases:r_,deep:[...s_,...l_],objects:u_,classes:[W_,G_,q_,X_,av,ov,cv,dv,hv,_v]},inside:{id:`inside`,n:2,title:`Inside RAG: how a PDF becomes searchable vectors`,steps:bv,phases:vv,deep:Cv,objects:Tv,classes:[ny,ry,iy,oy,sy,py,my,gy,vy,by]}},Sy=`rag`,Cy=xy.rag,wy=Cy.steps,Ty=Cy.phases,Ey=Cy.deep,Dy=Cy.objects,Oy=10,ky=e=>document.querySelector(e),Ay=matchMedia(`(pointer:coarse)`).matches||innerWidth<820,jy=new URLSearchParams(location.search),My=e=>String(e).padStart(2,`0`),Ny=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);jy.get(`hs`)===`0`&&(B_.hotspots=!1);var Py=ky(`#gl`),Fy=new pd({canvas:Py,antialias:!1,powerPreference:`high-performance`});Fy.setPixelRatio(Math.min(devicePixelRatio,Ay?1.5:1.75)),Fy.setSize(innerWidth,innerHeight),Fy.toneMapping=7,Fy.toneMappingExposure=1,Fy.outputColorSpace=Le,Fy.localClippingEnabled=!0,Fy.shadowMap.enabled=!0,Fy.shadowMap.type=1;var Iy=new $g({element:ky(`#labels`)});Iy.setSize(innerWidth,innerHeight);var Ly=new yn,Ry=1382171;Ly.background=new G(Ry),Ly.fog=new vn(Ry,.011),Ly.environment=new wc(Fy).fromScene(new e_,.04).texture,Ly.environmentIntensity=.55;var zy=new ws(42,innerWidth/innerHeight,.1,600);Ly.add(new fs(14673648,2762274,.55));var By=new ks(16773600,2.3);By.castShadow=!0,By.shadow.mapSize.set(Ay?1024:2048,Ay?1024:2048),Object.assign(By.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:60}),By.shadow.bias=-4e-4,By.shadow.normalBias=.03,By.shadow.radius=4,Ly.add(By,By.target);var Vy=new ks(10466512,.7);Vy.position.set(-14,7,-10),Ly.add(Vy);var Hy=new jg(Fy,new Nt(innerWidth,innerHeight,{type:g,samples:Ay?2:4}));Hy.setPixelRatio(Fy.getPixelRatio()),Hy.addPass(new Mg(Ly,zy));var Uy=null;!Ay&&jy.get(`ao`)!==`0`&&(Uy=new Hg(Ly,zy,innerWidth,innerHeight),Uy.output=Hg.OUTPUT.Default,Uy.blendIntensity=.85,Uy.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.5,scale:1,samples:16}),Uy.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),Uy._overrideVisibility=function(){let e=this._visibilityCache;this.scene.traverse(t=>{if(!t.visible)return;let n=t.material,r=n&&!Array.isArray(n)&&(n.depthWrite===!1||n.transparent&&n.opacity<.6);(t.isPoints||t.isLine||t.isLine2||t.isSprite||t.isMesh&&r)&&(t.visible=!1,e.push(t))})},Hy.addPass(Uy));var Wy=new Wg(new H(innerWidth/2,innerHeight/2),.12,.4,.93);Hy.addPass(Wy),Hy.addPass(new Kg);var Gy=30,Ky=e=>new U(e*Gy,0,-Math.sin(e*.75)*8),qy=new K(new Co(900,400),new zo({color:1711136,roughness:.95,metalness:0}));qy.rotation.x=-Math.PI/2,qy.position.set(130,-1.6,0),qy.receiveShadow=!0,Ly.add(qy);var Jy=new Lo({transparent:!0,depthWrite:!1,vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vW;
    float line(float x, float w){ float f = abs(fract(x)-.5); float d = fwidth(x); return smoothstep(w+d, w, .5-f); }
    void main(){ vec2 p = vW.xz/2.5; float g = max(line(p.x,.01), line(p.y,.01));
      float d = length(vW.xz - cameraPosition.xz); float fade = exp(-d*0.03);
      gl_FragColor = vec4(vec3(.85,.84,.8), g*fade*.06); }`}),Yy=new K(new Co(900,400),Jy);Yy.rotation.x=-Math.PI/2,Yy.position.set(130,-1.595,0),Ly.add(Yy);var Xy=[new U(-40,-.55,6)];for(let e=0;e<Oy;e++){let t=Ky(e);if(Xy.push(new U(t.x,-.55,t.z)),e<9){let n=Ky(e+1);Xy.push(new U((t.x+n.x)/2,-.95,(t.z+n.z)/2+3))}}Xy.push(new U(310,-.55,0));var Zy=new fa(Xy);Ly.add(new K(new Eo(Zy,900,.035,8,!1),new zo({color:4869718,roughness:.35,metalness:.7})));var Qy=Ay?60:120,$y=new mi(new wo(.06,12,8),Q(Y.lava,1.2),Qy);$y.frustumCulled=!1,Ly.add($y);var eb=new It,tb=new U,nb=new ft,rb=new U(1,1,1),ib={};function ab(e){if(ib[e])return ib[e];let t=new W;t.name=`world-`+e,Ly.add(t);let n=xy[e].classes.map((e,n)=>{let r=new e;return r.group.position.copy(Ky(n)),t.add(r.group),r});return n.forEach(e=>e.group.traverse(e=>{!e.isMesh||e.userData.noShadow||e.userData.hit||(e.castShadow=(Array.isArray(e.material)?e.material:[e.material]).every(e=>!e.transparent&&!e.isShaderMaterial),e.receiveShadow=!0)})),ib[e]={grp:t,stations:n},ib[e]}var ob=ab(`rag`).stations,sb={pos:new U(-16,9,22),target:new U(34,1,-6)},cb={yaw:0,pitch:0,tyaw:0,tpitch:0,px:0,py:0},lb=null;function ub(e){let t=ob[e],n=t.group.position,r=zy.aspect,i=r<1?(1+(1-r)*2.15)*(t.cam.pk||1):r<1.4?1.3:1.18,a=new U(...t.cam.pos).sub(new U(...t.cam.target)).multiplyScalar(i),o=new U(...t.cam.target).add(n);return{pos:o.clone().add(a),target:o}}var db=()=>({pos:new U(-17,8.5,21),target:new U(30,1.5,-6)});function fb(e,t=2,n=!1){if(lb&&lb.kill(),n){sb.pos.copy(e.pos),sb.target.copy(e.target);return}let r=sb.pos.clone(),i=sb.target.clone(),a=Math.min(6,r.distanceTo(e.pos)*.12),o={p:0};lb=Sg.to(o,{p:1,duration:t,ease:`power3.inOut`,onUpdate:()=>{let t=o.p;sb.pos.lerpVectors(r,e.pos,t),sb.pos.y+=Math.sin(t*Math.PI)*a,sb.pos.z+=Math.sin(t*Math.PI)*a*.9,sb.target.lerpVectors(i,e.target,Z.io(Math.min(1,t*1.15)))}})}var pb=!1,mb={x:0,tx:0};function hb(){let e=innerWidth;return _b!==`case`||e<820?0:pb?Math.min(560,e*.42)*.5:-e*.13}function gb(e=!1){mb.tx=hb(),e&&(mb.x=mb.tx);let t=innerWidth,n=innerHeight;_b===`case`?t<820?zy.setViewOffset(t,n,0,n*.2,t,n):zy.setViewOffset(t,n,mb.x,n*.02,t,n):zy.clearViewOffset()}var _b=`home`,vb=0,yb=!1,bb=0,xb=!1,Sb=ky(`#grid`);n_.forEach((e,t)=>{let n=document.createElement(e.live?`button`:`div`);n.className=`tile `+(e.live?`live`:`locked`),n.innerHTML=`<div><div class="n">${My(e.n)}</div><h3>${e.t}</h3>${e.live?`<p class="sub">${e.sub}</p>`:``}</div>
    ${e.live?`<span class="go">Explore in 3D <b>→</b></span>`:`<div class="k"><span class="cat">${e.cat}</span><span class="soon">Coming soon</span></div>`}`,e.live&&(n.dataset.case=e.case,n.addEventListener(`click`,()=>Ub(e.case,0))),Sb.appendChild(n),setTimeout(()=>n.classList.add(`in`),250+t*30)});var Cb=ky(`#map`),wb=[];function Tb(){Cb.innerHTML=``,wb=[],Ty.forEach(e=>{let t=document.createElement(`div`);t.className=`phase-grp`,t.innerHTML=`<div class="phase-lbl">${e.name}</div><div class="phase-nodes"></div>`,e.steps.forEach(e=>{let n=wy[e],r=document.createElement(`button`);r.className=`node`,r.title=n.title,r.innerHTML=`<div class="nd"><svg viewBox="0 0 24 24">${n.icon}</svg></div><span>${n.short}</span>`,r.addEventListener(`click`,()=>Hb(e)),t.querySelector(`.phase-nodes`).appendChild(r),wb[e]=r}),Cb.appendChild(t)})}Tb();function Eb(e){if(xy[e]||(e=`rag`),e===Sy&&ib[e])return;for(let e in ib)ib[e].grp.visible=!1,ib[e].stations.forEach(e=>{Sg.killTweensOf(e),e.focus=0});let t=ab(e);t.grp.visible=!0,e!==Sy&&Fy.compile(Ly,zy),Sy=e,Cy=xy[e],wy=Cy.steps,Ty=Cy.phases,Ey=Cy.deep,Dy=Cy.objects,ob=t.stations,ob.forEach(e=>{e.focus=0}),Tb(),ky(`#ucNum`).textContent=My(Cy.n),ky(`#ucName`).textContent=Cy.title,ky(`#stepTot`).textContent=`/ `+My(9),document.body.dataset.case=e}function Db(e){let t=wy[e];ky(`#cStepIdx`).textContent=`STEP `+My(e),ky(`#cPhase`).textContent=t.phase.toUpperCase(),ky(`#cTitle`).textContent=t.title,t.split?ky(`#cRows`).innerHTML=`<div class="split">
      <div class="col need"><label>${t.split.labels?.[0]||`Business need`}</label><ul>${t.split.need.map(e=>`<li>${e}</li>`).join(``)}</ul></div>
      <div class="col sol"><label>${t.split.labels?.[1]||`Developer solution`}</label><ul>${t.split.solution.map(e=>`<li>${e}</li>`).join(``)}</ul></div></div>`:ky(`#cRows`).innerHTML=[[`what`,`What`,t.what],[`how`,`How`,t.how],[`why`,`Why`,t.why]].map(([e,t,n])=>`<div class="row"><i class="ico ${e}"></i><div><label>${t}</label><p>${n}</p></div></div>`).join(``),ky(`#cTags`).innerHTML=t.tags.map(([e,t])=>`<span class="tag ${t}">${e}</span>`).join(``),ky(`#stepNow`).textContent=My(e),wb.forEach((t,n)=>{t.classList.toggle(`on`,n===e),t.classList.toggle(`done`,n<e)}),wb[e].scrollIntoView({block:`nearest`,inline:`center`,behavior:`smooth`}),xb?Sg.set(`#card`,{opacity:1,y:0}):Sg.fromTo(`#card`,{opacity:0,y:12},{opacity:1,y:0,duration:.6,ease:`power3.out`,delay:.35})}var Ob={sql:new Set(`SELECT FROM WHERE CREATE OR REPLACE TABLE VOLUME AS AND INSERT INTO LATERAL ALTER SET TBLPROPERTIES GRANT ON TO USE CATALOG SCHEMA DESCRIBE HISTORY LIMIT ORDER BY GROUP JOIN STRING INT BIGINT NULL TRUE FALSE WITH IF NOT EXISTS DESC ASC IN IS CASE WHEN THEN ELSE END MERGE USING MATCHED UPDATE VALUES DISTINCT INTERVAL HOUR DAY ARRAY MAP STRUCT VARIANT BINARY TIMESTAMP DOUBLE FLOAT BOOLEAN FUNCTION RETURN RETURNS ROW FILTER MASK COLUMN CONSTRAINT PRIMARY KEY FOREIGN REFERENCES COMMENT METRICS LANGUAGE YAML VIEW STREAMING MATERIALIZED REFRESH STREAM EXPECT VIOLATION DROP ADD DATE DECIMAL BETWEEN ALL ILIKE LIKE ALTER`.split(` `)),py:new Set(`from import def return for in if else elif with as None True False lambda class not and or is try except raise while print`.split(` `)),sh:new Set(`pip install databricks fs cp agentbricks init dev deploy deployments logs get stop list export cd curl`.split(` `))};function kb(e,t){let n=RegExp(`(${t===`sql`?`--[^\\n]*`:`#[^\\n]*`})|("""[\\s\\S]*?"""|'(?:\\\\.|[^'\\\\\\n])*'|"(?:\\\\.|[^"\\\\\\n])*")|(\\b\\d+(?:\\.\\d+)?\\b)|([A-Za-z_]\\w*)(?=\\()|([A-Za-z_][\\w-]*)`,`g`),r=Ob[t]||new Set,i=``,a=0,o;for(;o=n.exec(e);){i+=Ny(e.slice(a,o.index)),a=o.index+o[0].length;let[n,s,c,l,u,d]=o;i+=s?`<span class="c">${Ny(s)}</span>`:c?`<span class="s">${Ny(c)}</span>`:l?`<span class="n">${l}</span>`:u?r.has(t===`sql`?u.toUpperCase():u)?`<span class="k">${u}</span>`:`<span class="f">${u}</span>`:d?r.has(t===`sql`?d.toUpperCase():d)?`<span class="k">${Ny(d)}</span>`:Ny(d):Ny(n)}return i+Ny(e.slice(a))}var Ab={sql:`SQL`,py:`Python`,sh:`Shell`};function jb(e){return!e||!e.length?``:`<div class="codebox">${e.length>1?`<div class="tabs" role="tablist">${e.map((e,t)=>`<button class="tab${t?``:` on`}" data-k="${t}">${Ny(e.label||Ab[e.lang])}</button>`).join(``)}</div>`:`<div class="code-cap">${Ny(e[0].label||Ab[e[0].lang])}</div>`}${e.map((e,t)=>`<div class="code-wrap${t?` hidden`:``}" data-k="${t}"><span class="lang">${Ab[e.lang]||``}</span><button class="copy" data-k="${t}">Copy</button><pre class="code"><code>${kb(e.src,e.lang)}</code></pre></div>`).join(``)}</div>`}function Mb(e){return`<figure class="tbl">${e.title?`<figcaption>${e.title}</figcaption>`:``}<div class="tscroll"><table><thead><tr>${e.cols.map(e=>`<th>${e}</th>`).join(``)}</tr></thead><tbody>${e.rows.map(e=>`<tr>${e.map(e=>`<td>${e}</td>`).join(``)}</tr>`).join(``)}</tbody></table></div>${e.note?`<p class="note">${e.note}</p>`:``}</figure>`}function Nb(e,t){return`<div class="chips">${e.filter(e=>Dy[e]).map(e=>`<button class="chip${e===t?` on`:``}" data-obj="${e}"><i></i>${Dy[e].title}</button>`).join(``)}</div>`}var Pb=ky(`#panel`),Fb=ky(`#pBody`),Ib=null;function Lb(e){pb=e,Pb.classList.toggle(`open`,e),document.body.classList.toggle(`panel-open`,e),gb()}function Rb(e=vb,t=0){let n=Ey[e],r=wy[e];Ib={type:`step`,i:e},ky(`#pKick`).innerHTML=`STEP ${My(e)} · ${r.phase.toUpperCase()}`,ky(`#pBack`).classList.add(`hidden`);let i=`<h2>${r.title}</h2><p class="lead">${n.lead}</p>`;i+=`<section><h3><span>1</span>What happens, technically</h3><ol class="steps">${n.happens.map(e=>`<li>${e}</li>`).join(``)}</ol></section>`,i+=`<section><h3><span>2</span>Concepts you need</h3><dl class="concepts">${n.concepts.map(e=>`<div><dt>${e.t}</dt><dd>${e.d}</dd></div>`).join(``)}</dl>${n.compare?Mb(n.compare):``}</section>`,n.code?.length&&(i+=`<section><h3><span>3</span>The actual code</h3>${jb(n.code)}</section>`),n.io?.length&&(i+=`<section><h3><span>4</span>Input → output</h3>${n.io.map(Mb).join(`<div class="io-arrow">↓</div>`)}</section>`),i+=`<section><h3><span>5</span>Why it matters</h3><p>${n.why}</p></section>`,n.pitfalls?.length&&(i+=`<section><h3><span>6</span>Pitfalls to avoid</h3><ul class="pitfalls">${n.pitfalls.map(e=>`<li>${e}</li>`).join(``)}</ul></section>`),n.objects?.length&&(i+=`<section><h3><span>7</span>Inspect the objects in this scene</h3>${Nb(n.objects)}</section>`),i+=`<div class="p-nav">${e>0?`<button class="pn" data-step="${e-1}">← ${My(e-1)} ${wy[e-1].short}</button>`:`<span></span>`}${e<9?`<button class="pn" data-step="${e+1}">${My(e+1)} ${wy[e+1].short} →</button>`:``}</div>`,Fb.innerHTML=i,Fb.scrollTop=t,Lb(!0)}function zb(e){let t=Dy[e];if(!t)return;Ib={type:`obj`,id:e,i:vb},ky(`#pKick`).innerHTML=`${Ny(t.kind).toUpperCase()} · STEP ${My(vb)}`,ky(`#pBack`).classList.remove(`hidden`);let n=`<h2>${t.title}</h2>`;n+=`<section><h3>What it is</h3><p>${t.what}</p></section>`,n+=`<section><h3>How it works</h3><p>${t.how}</p></section>`,n+=`<section class="here"><h3>Its job in this step</h3><p>${t.here}</p></section>`,t.facts?.length&&(n+=`<section><h3>Key facts</h3><dl class="facts">${t.facts.map(([e,t])=>`<div><dt>${e}</dt><dd>${t}</dd></div>`).join(``)}</dl></section>`),t.code&&(n+=`<section><h3>In code</h3>${jb([t.code])}</section>`);let r=(Ey[vb].objects||[]).filter(t=>t!==e);r.length&&(n+=`<section><h3>Other objects in this step</h3>${Nb(r)}</section>`),n+=`<button class="deep-btn ghost" data-deep="1">Read the full explanation of step ${My(vb)} →</button>`,Fb.innerHTML=n,Fb.scrollTop=0,Lb(!0)}function Bb(){Lb(!1),Ib=null}ky(`#pClose`).addEventListener(`click`,Bb),ky(`#pBack`).addEventListener(`click`,()=>Rb(vb)),ky(`#btnDeep`).addEventListener(`click`,()=>Rb(vb)),Pb.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.obj)zb(t.dataset.obj);else if(t.dataset.deep)Rb(vb);else if(t.dataset.step)Hb(+t.dataset.step),Rb(+t.dataset.step);else if(t.classList.contains(`tab`)){let e=t.closest(`.codebox`);e.querySelectorAll(`.tab`).forEach(e=>e.classList.toggle(`on`,e===t)),e.querySelectorAll(`.code-wrap`).forEach(e=>e.classList.toggle(`hidden`,e.dataset.k!==t.dataset.k))}else if(t.classList.contains(`copy`)){let e=t.parentElement.querySelector(`pre`);navigator.clipboard?.writeText(e.innerText).then(()=>{t.textContent=`Copied`,setTimeout(()=>t.textContent=`Copy`,1200)}).catch(()=>{})}}}),ky(`#labels`).addEventListener(`click`,e=>{let t=e.target.closest(`.hs`);t&&(e.stopPropagation(),zb(t.dataset.id))});function Vb(e){ob.forEach((t,n)=>Sg.to(t,{focus:+(n===e),duration:n===e?.8:.35,delay:n===e?1.2:0}))}function Hb(e,t={}){e=(e+Oy)%Oy;let n=Math.abs(e-vb);vb=e,bb=0;let r=!!t.instant;fb(ub(e),r?0:Math.min(2.6,1.5+n*.15),r),ob[e].reset(r?0:1.1),cb.tyaw=0,cb.tpitch=0,Vb(e),Db(e),tx(null),pb&&Ib&&(Ib.type===`step`?Rb(e):Bb()),history.replaceState(null,``,location.pathname+location.search+`#/`+Sy+`/`+e)}function Ub(e=`rag`,t=0,n=!1){Eb(e),_b=`case`,gb(!0),ky(`#hud`).classList.remove(`hidden`),n?(ky(`#home`).classList.add(`hidden`),ky(`#hud`).style.opacity=1):(Sg.to(`#home`,{opacity:0,duration:.5,onComplete:()=>ky(`#home`).classList.add(`hidden`)}),Sg.fromTo(`#hud`,{opacity:0},{opacity:1,duration:.8,delay:.3})),vb=-99,Hb(t,{instant:n})}function Wb(){Bb(),_b=`home`,Gb(!1),gb(!0),ob.forEach(e=>Sg.to(e,{focus:0,duration:.3})),ky(`#home`).classList.remove(`hidden`),Sg.to(`#home`,{opacity:1,duration:.6}),Sg.to(`#hud`,{opacity:0,duration:.3,onComplete:()=>ky(`#hud`).classList.add(`hidden`)}),fb(db(),2.2),history.replaceState(null,``,location.pathname+location.search+`#/`)}function Gb(e){yb=e,bb=0,ky(`#btnPlay`).classList.toggle(`on`,e)}ky(`#btnHome`).addEventListener(`click`,Wb),ky(`#btnNext`).addEventListener(`click`,()=>{xb=!1,Hb(vb+1)}),ky(`#btnPrev`).addEventListener(`click`,()=>Hb(vb-1)),ky(`#btnPlay`).addEventListener(`click`,()=>Gb(!yb)),addEventListener(`keydown`,e=>{_b===`case`?e.key===`Escape`?pb?Bb():Wb():e.target.closest&&e.target.closest(`#panel`)||(e.key===`ArrowRight`?Hb(vb+1):e.key===`ArrowLeft`?Hb(vb-1):e.key===` `&&(e.preventDefault(),Gb(!yb))):e.key===`Enter`&&Ub(`rag`,0)});var Kb=new Ys;Kb.layers.enableAll(),Kb.params.Line.threshold=.02,Kb.params.Points.threshold=.1;var qb=new H;function Jb(e,t){if(_b!==`case`||vb<0)return null;let n=ob[vb];if(n.focus<.5)return null;qb.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Kb.setFromCamera(qb,zy);let r=Kb.intersectObjects(n.picks.map(e=>e.obj),!0);for(let e of r){if(!R_(e.object))continue;let t=e.object;for(;t&&!t.userData.pickId;)t=t.parent;if(t&&Dy[t.userData.pickId])return{id:t.userData.pickId,obj:t}}return null}var Yb=(()=>{let e=.22,t=[];for(let n of[-.5,.5])for(let r of[-.5,.5])for(let i of[-.5,.5])t.push(n,r,i,n-Math.sign(n)*e,r,i,n,r,i,n,r-Math.sign(r)*e,i,n,r,i,n,r,i-Math.sign(i)*e);let n=new pr;n.setAttribute(`position`,new tr(t,3));let r=new Ni(n,new xi({color:15235148,transparent:!0,opacity:.95,depthTest:!1}));return r.renderOrder=999,r.visible=!1,r.frustumCulled=!1,Ly.add(r),r})(),Xb=new Pn,Zb=new U,Qb=new U,$b=null,ex=ky(`#tip`);function tx(e,t,n){$b=e,Py.style.cursor=e?`pointer`:rx?`grabbing`:`grab`,e?(ex.innerHTML=`<b>${Dy[e.id].title}</b><span>${Ay?`tap`:`click`} to inspect</span>`,ex.style.transform=`translate(${Math.min(t+16,innerWidth-260)}px, ${n+18}px)`,ex.classList.add(`on`)):(ex.classList.remove(`on`),Yb.visible=!1)}function nx(){$b&&(Xb.makeEmpty(),$b.obj.traverse(e=>{e.isMesh&&(e.visible||e.userData.hit)&&Xb.expandByObject(e,!1)}),Xb.isEmpty()?Yb.visible=!1:(Xb.getCenter(Zb),Xb.getSize(Qb),Qb.multiplyScalar(1.08).max(new U(.2,.2,.2)),Yb.position.copy(Zb),Yb.scale.copy(Qb),Yb.visible=!0))}var rx=null;Py.addEventListener(`pointerdown`,e=>{_b===`case`&&(rx={x:e.clientX,y:e.clientY,t:performance.now(),y0:cb.tyaw,p0:cb.tpitch,moved:0})}),addEventListener(`pointermove`,e=>{cb.px=e.clientX/innerWidth-.5,cb.py=e.clientY/innerHeight-.5,rx?(rx.moved=Math.max(rx.moved,Math.hypot(e.clientX-rx.x,e.clientY-rx.y)),rx.moved>6&&(cb.tyaw=Math.max(-1,Math.min(1,rx.y0-(e.clientX-rx.x)*.005)),cb.tpitch=Math.max(-.25,Math.min(.5,rx.p0+(e.clientY-rx.y)*.003)),tx(null))):e.pointerType===`mouse`&&e.target===Py?tx(Jb(e.clientX,e.clientY),e.clientX,e.clientY):e.target!==Py&&$b&&tx(null)}),addEventListener(`pointerup`,e=>{if(!rx)return;let t=e.clientX-rx.x,n=performance.now()-rx.t;if(rx.moved<8&&n<1500){let t=Jb(e.clientX,e.clientY);t&&(zb(t.id),e.pointerType!==`mouse`&&(tx(t,e.clientX,e.clientY),setTimeout(()=>tx(null),1400)))}else Ay&&Math.abs(t)>70&&n<350&&(cb.tyaw=rx.y0,Hb(vb+(t<0?1:-1)));rx=null});var ix=new Qs,ax=0,ox=new U,sx=new $s;function cx(){let e=Math.min(.05,ix.getDelta());ax+=e,cb.yaw+=(cb.tyaw-cb.yaw)*.08,cb.pitch+=(cb.tpitch-cb.pitch)*.08,Math.abs(mb.tx-mb.x)>.5&&(mb.x+=(mb.tx-mb.x)*.12,gb()),ox.copy(sb.pos).sub(sb.target),sx.setFromVector3(ox);let t=Ay||xb?0:1;sx.theta+=cb.yaw+(_b===`home`?Math.sin(ax*.08)*.12:cb.px*.05*t),sx.phi=Math.max(.35,Math.min(1.5,sx.phi-cb.pitch+cb.py*.03*t)),zy.position.copy(sb.target).add(ox.setFromSpherical(sx)),zy.lookAt(sb.target),By.target.position.set(sb.target.x,0,sb.target.z),By.position.set(sb.target.x+9,17,sb.target.z+11);for(let e=0;e<Qy;e++)Zy.getPointAt((e/Qy+ax*.004)%1,tb),eb.compose(tb,nb,rb),$y.setMatrixAt(e,eb);if($y.instanceMatrix.needsUpdate=!0,ob.forEach((t,n)=>{let r=_b===`home`?n<4:Math.abs(n-vb)<=1;t.group.visible=_b===`home`?n<6:Math.abs(n-vb)<=2,r?t.tick(e,ax,_b===`home`||n===vb&&!xb):t.group.visible&&t.tick(0,ax,!1)}),nx(),yb&&_b===`case`){bb+=e;let t=ob[vb].loop+1;ky(`#btnPlay`).style.setProperty(`--p`,Math.min(1,bb/t).toFixed(3)),bb>=t&&Hb(vb+1)}Hy.render(),Iy.render(Ly,zy),innerWidth<820&&_b===`case`&&ob[vb]&&ux(ob[vb]),requestAnimationFrame(cx)}var lx=new U;function ux(e){let t=innerWidth;for(let n of e.labels){let e=n.element;if(!n.visible||e.style.display===`none`){e._dx&&=(e.style.translate=``,0);continue}let r=e.offsetWidth;if(!r)continue;n.getWorldPosition(lx).project(zy);let i=(lx.x*.5+.5)*t-r*n.center.x,a=i+r,o=0;i<6?o=6-i:a>t-6&&(o=t-6-a),o=Math.round(o),o!==(e._dx||0)&&(e.style.translate=o?o+`px 0`:``,e._dx=o)}}function dx(){let e=innerWidth,t=innerHeight;zy.aspect=e/t,zy.fov=e/t<1?52:42,zy.updateProjectionMatrix(),Fy.setSize(e,t),Hy.setSize(e,t),Iy.setSize(e,t),Wy.resolution.set(e/2,t/2),gb(!0),_b===`case`&&fb(ub(vb),0,!0)}addEventListener(`resize`,dx),dx();var fx=location.hash.match(/#\/(rag|inside)\/(\d+)/),px=parseFloat(jy.get(`t`));xb=!isNaN(px)&&!!fx,Sg.ticker.lagSmoothing(xb?0:2e3,50),fx?(Ub(fx[1],Math.max(0,Math.min(9,parseInt(fx[2],10))),!0),isNaN(px)||(ob[vb].reset(0),ob[vb].local=px,Sg.killTweensOf(ob[vb]),ob[vb].focus=1),jy.get(`deep`)&&Rb(vb),jy.get(`obj`)&&zb(jy.get(`obj`)),pb&&gb(!0)):fb(db(),0,!0),Py.style.cursor=`grab`,Fy.compile(Ly,zy),requestAnimationFrame(cx),setTimeout(()=>{ky(`#loader`).style.opacity=0,setTimeout(()=>ky(`#loader`).remove(),900)},600),window.__app={go:Hb,openCase:Ub,openHome:Wb,openStep:Rb,openObject:zb,closePanel:Bb,setPlay:Gb,pickAt:Jb,camera:zy,get stations(){return ob},get caseId(){return Sy}};