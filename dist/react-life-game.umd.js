var H=Object.defineProperty;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var E=(a,s,c)=>s in a?H(a,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[s]=c,C=(a,s)=>{for(var c in s||(s={}))J.call(s,c)&&E(a,c,s[c]);if(S)for(var c of S(s))Y.call(s,c)&&E(a,c,s[c]);return a};(function(a,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],s):(a=typeof globalThis!="undefined"?globalThis:a||self,s(a.ReactLifeGame={},a.React))})(this,function(a,s){"use strict";function c(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var j=c(s);const x=()=>{const e=s.useCallback(()=>{var r,o;return{width:(r=window==null?void 0:window.innerWidth)!=null?r:0,height:(o=window==null?void 0:window.innerHeight)!=null?o:0}},[]),[t,n]=s.useState(e());return s.useEffect(()=>{const r=()=>{n(e())};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e]),t},b=12,N=()=>{const{width:e,height:t}=x(),n=s.useMemo(()=>Math.ceil(t/b),[t]),r=s.useMemo(()=>Math.ceil(e/b),[e]);return{rows:n,columns:r}},L=(e,t,n=!1)=>[...Array(e)].map(r=>Array(t).fill(n)),R=(e,t,n)=>L(e,t).map(o=>o.map(l=>Math.random()>1-n)),k=(e,t,n)=>{var r,o,l,i,u,h,f,m;return Number(!!((r=e[t-1])==null?void 0:r[n-1]))+Number(!!((o=e[t-1])==null?void 0:o[n]))+Number(!!((l=e[t-1])==null?void 0:l[n+1]))+Number(!!((i=e[t])==null?void 0:i[n-1]))+Number(!!((u=e[t])==null?void 0:u[n+1]))+Number(!!((h=e[t+1])==null?void 0:h[n-1]))+Number(!!((f=e[t+1])==null?void 0:f[n]))+Number(!!((m=e[t+1])==null?void 0:m[n+1]))},z=e=>{const t=[...e];return e.forEach((n,r)=>{n.forEach((o,l)=>{const i=k(e,r,l);t[r][l]=o&&i===2||i===3})}),t};function P({width:e,height:t,interval:n=1e3,initialAliveRatio:r=.1}={}){const{rows:o,columns:l}=N(),[i,u]=s.useState(R(o,l,r)),h=s.useCallback((f,m)=>{const y=[...i];y[f][m]=!y[f][m],u(y)},[i]);return s.useEffect(()=>{const f=setInterval(()=>{u(z(i))},n);return()=>clearInterval(f)},[i]),{cells:i,setCells:u,handleClickCell:h}}var w={exports:{}},d={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var v=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function A(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function M(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(l){return t[l]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(l){o[l]=l}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}M();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=j.default,g=60103;if(d.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var O=Symbol.for;g=O("react.element"),d.Fragment=O("react.fragment")}var D=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F=Object.prototype.hasOwnProperty,G={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)F.call(t,r)&&!G.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:g,type:e,key:l,ref:i,props:o,_owner:D.current}}d.jsx=_,d.jsxs=_,w.exports=d;const p=w.exports.jsx,U=s.memo(({isAlive:e,onClick:t,aliveColor:n="#1e3a8a",deadColor:r="#0f172b"})=>p("div",{style:C({width:"12px",height:"12px",flexShrink:0},{backgroundColor:e?n:r}),onClick:t})),K=()=>{const{cells:e,handleClickCell:t}=P();return p("div",{style:{overflow:"hidden"},children:e.map((n,r)=>p("div",{style:{display:"flex",flexDirection:"row"},children:n.map((o,l)=>p(U,{isAlive:o,onClick:()=>t(r,l)},l))},r))})},B=()=>{const[e,t]=s.useState(window.innerWidth);return s.useEffect(()=>{const n=()=>t(window.innerWidth);return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),{key:e}};a.LifeGameField=K,a.useKeyOnResize=B,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"});
