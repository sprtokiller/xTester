import{ae as ze,am as se,a$ as Lt,ap as Z,m as H,l as ct,i as K,aQ as ht,aR as pt,aP as vt,s as B,ay as Q,aG as U,u as ae,f as ne,p as oe,a_ as Ft,b0 as Ht,a1 as me,b1 as Xe,b2 as Wt,ad as Xt,I as V,aA as gt,h as M,b3 as mt,b4 as Kt,aj as kt,b5 as be,b6 as we,b7 as Yt,b8 as Gt,b9 as De,ba as Ut,bb as k,bc as bt,bd as Ne,be as Vt,bf as re,bg as wt,bh as Ee,bi as Ke,bj as jt,bk as ke,bl as Ye,bm as he,bn as qt,bo as Ge,bp as Jt,bq as Zt,br as Qt,bs as Rt,bt as en,bu as tn,bv as nn,j as yt,y as z,z as D,C as $e,B as xe,A as ee,bw as rn,E as $t,G as le,H as xt,aB as on,K as Mt,ab as an,aC as Ue,aD as Ve,bx as je,by as sn,ah as St,ar as Me,F as ln,aS as un,bz as qe,bA as dn,e as fn,v as cn,J as ue,aI as hn}from"./index-96555aa1.js";import{u as pn}from"./use-compitable-84d7e7e6.js";let ve=[];const At=new WeakMap;function vn(){ve.forEach(e=>e(...At.get(e))),ve=[]}function gn(e,...t){At.set(e,t),!ve.includes(e)&&ve.push(e)===1&&requestAnimationFrame(vn)}const mn=/^(\d|\.)+$/,Je=/(\d|\.)+/;function pe(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(mn.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=Je.exec(e);return o?e.replace(Je,String((Number(o[0])+n)*t)):e}return e}let Se;function bn(){return Se===void 0&&(Se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Se}let R,ie;const wn=()=>{var e,t;R=Lt?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,ie=!1,R!==void 0?R.then(()=>{ie=!0}):ie=!0};wn();function yn(e){if(ie)return;let t=!1;ze(()=>{ie||R?.then(()=>{t||e()})}),se(()=>{t=!0})}function $n(e,t){return Z(e,n=>{n!==void 0&&(t.value=n)}),H(()=>e.value===void 0?t.value:e.value)}const Lo=ct("n-internal-select-menu"),xn=ct("n-internal-select-menu-body"),Ot="__disabled__";function te(e){const t=K(ht,null),n=K(pt,null),r=K(vt,null),o=K(xn,null),i=B();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};ze(()=>{Q("fullscreenchange",document,a)}),se(()=>{U("fullscreenchange",document,a)})}return ae(()=>{var a;const{to:s}=e;return s!==void 0?s===!1?Ot:s===!0?i.value||"body":s:t?.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n?.value?n.value:r?.value?r.value:o?.value?o.value:s??(i.value||"body")})}te.tdkey=Ot;te.propTo={type:[String,Object,Boolean],default:void 0};let X=null;function Ct(){if(X===null&&(X=document.getElementById("v-binder-view-measurer"),X===null)){X=document.createElement("div"),X.id="v-binder-view-measurer";const{style:e}=X;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(X)}return X.getBoundingClientRect()}function Mn(e,t){const n=Ct();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Ae(e){const t=e.getBoundingClientRect(),n=Ct();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Sn(e){return e.nodeType===9?null:e.parentNode}function _t(e){if(e===null)return null;const t=Sn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return _t(t)}const An=ne({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;oe("VBinder",(t=Ft())===null||t===void 0?void 0:t.proxy);const n=K("VBinder",null),r=B(null),o=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let i=[];const a=()=>{let f=r.value;for(;f=_t(f),f!==null;)i.push(f);for(const $ of i)Q("scroll",$,b,!0)},s=()=>{for(const f of i)U("scroll",f,b,!0);i=[]},l=new Set,c=f=>{l.size===0&&a(),l.has(f)||l.add(f)},v=f=>{l.has(f)&&l.delete(f),l.size===0&&s()},b=()=>{gn(u)},u=()=>{l.forEach(f=>f())},h=new Set,g=f=>{h.size===0&&Q("resize",window,y),h.has(f)||h.add(f)},d=f=>{h.has(f)&&h.delete(f),h.size===0&&U("resize",window,y)},y=()=>{h.forEach(f=>f())};return se(()=>{U("resize",window,y),s()}),{targetRef:r,setTargetRef:o,addScrollListener:c,removeScrollListener:v,addResizeListener:g,removeResizeListener:d}},render(){return Ht("binder",this.$slots)}}),On=An,Cn=ne({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=K("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?me(Xe("follower",this.$slots),[[t]]):Xe("follower",this.$slots)}}),J="@@mmoContext",_n={mounted(e,{value:t}){e[J]={handler:void 0},typeof t=="function"&&(e[J].handler=t,Q("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[J];typeof t=="function"?n.handler?n.handler!==t&&(U("mousemoveoutside",e,n.handler),n.handler=t,Q("mousemoveoutside",e,t)):(e[J].handler=t,Q("mousemoveoutside",e,t)):n.handler&&(U("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[J];t&&U("mousemoveoutside",e,t),e[J].handler=void 0}},En=_n,{c:de}=Wt(),Pn="vueuc-style",fe={top:"bottom",bottom:"top",left:"right",right:"left"},Ze={start:"end",center:"center",end:"start"},Oe={top:"height",bottom:"height",left:"width",right:"width"},Bn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Tn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},In={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Qe={top:!0,bottom:!1,left:!0,right:!1},Re={top:"end",bottom:"start",left:"end",right:"start"};function zn(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[a,s]=e.split("-");let l=s??"center",c={top:0,left:0};const v=(h,g,d)=>{let y=0,f=0;const $=n[h]-t[g]-t[h];return $>0&&r&&(d?f=Qe[g]?$:-$:y=Qe[g]?$:-$),{left:y,top:f}},b=a==="left"||a==="right";if(l!=="center"){const h=In[e],g=fe[h],d=Oe[h];if(n[d]>t[d]){if(t[h]+t[d]<n[d]){const y=(n[d]-t[d])/2;t[h]<y||t[g]<y?t[h]<t[g]?(l=Ze[s],c=v(d,g,b)):c=v(d,h,b):l="center"}}else n[d]<t[d]&&t[g]<0&&t[h]>t[g]&&(l=Ze[s])}else{const h=a==="bottom"||a==="top"?"left":"top",g=fe[h],d=Oe[h],y=(n[d]-t[d])/2;(t[h]<y||t[g]<y)&&(t[h]>t[g]?(l=Re[h],c=v(d,h,b)):(l=Re[g],c=v(d,g,b)))}let u=a;return t[a]<n[Oe[a]]&&t[a]<t[fe[a]]&&(u=fe[a]),{placement:l!=="center"?`${u}-${l}`:u,left:c.left,top:c.top}}function Dn(e,t){return t?Tn[e]:Bn[e]}function Nn(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const Ln=de([de(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),de(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[de("> *",{pointerEvents:"all"})])]),Fn=ne({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=K("VBinder"),n=ae(()=>e.enabled!==void 0?e.enabled:e.show),r=B(null),o=B(null),i=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(l),u.includes("resize")&&t.addResizeListener(l)},a=()=>{t.removeScrollListener(l),t.removeResizeListener(l)};ze(()=>{n.value&&(l(),i())});const s=Xt();Ln.mount({id:"vueuc/binder",head:!0,anchorMetaName:Pn,ssr:s}),se(()=>{a()}),yn(()=>{n.value&&l()});const l=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const h=t.targetRef,{x:g,y:d,overlap:y}=e,f=g!==void 0&&d!==void 0?Mn(g,d):Ae(h);u.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:I,placement:_,internalShift:E,flip:Y}=e;u.setAttribute("v-placement",_),y?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:m}=u;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",I==="target"?m.minWidth=`${f.width}px`:I!==void 0?m.minWidth=I:m.minWidth="";const A=Ae(u),O=Ae(o.value),{left:w,top:W,placement:N}=zn(_,f,A,E,Y,y),T=Dn(N,y),{left:p,top:x,transform:C}=Nn(N,O,f,W,w,y);u.setAttribute("v-placement",N),u.style.setProperty("--v-offset-left",`${Math.round(w)}px`),u.style.setProperty("--v-offset-top",`${Math.round(W)}px`),u.style.transform=`translateX(${p}) translateY(${x}) ${C}`,u.style.setProperty("--v-transform-origin",T),u.style.transformOrigin=T};Z(n,u=>{u?(i(),c()):a()});const c=()=>{kt().then(l).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{Z(V(e,u),l)}),["teleportDisabled"].forEach(u=>{Z(V(e,u),c)}),Z(V(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(l):t.removeResizeListener(l),u.includes("scroll")?t.addScrollListener(l):t.removeScrollListener(l)});const v=gt(),b=ae(()=>{const{to:u}=e;if(u!==void 0)return u;v.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:b,syncPosition:l}},render(){return M(Kt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=M("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[M("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?me(n,[[mt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var Hn=be(we,"WeakMap");const Pe=Hn;var Wn=Yt(Object.keys,Object);const Xn=Wn;var Kn=Object.prototype,kn=Kn.hasOwnProperty;function Yn(e){if(!Gt(e))return Xn(e);var t=[];for(var n in Object(e))kn.call(e,n)&&n!="constructor"&&t.push(n);return t}function Le(e){return De(e)?Ut(e):Yn(e)}var Gn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Un=/^\w*$/;function Fe(e,t){if(k(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||bt(e)?!0:Un.test(e)||!Gn.test(e)||t!=null&&e in Object(t)}var Vn="Expected a function";function He(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Vn);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(He.Cache||Ne),n}He.Cache=Ne;var jn=500;function qn(e){var t=He(e,function(r){return n.size===jn&&n.clear(),r}),n=t.cache;return t}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zn=/\\(\\)?/g,Qn=qn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Jn,function(n,r,o,i){t.push(o?i.replace(Zn,"$1"):r||n)}),t});const Rn=Qn;function Et(e,t){return k(e)?e:Fe(e,t)?[e]:Rn(Vt(e))}var er=1/0;function ye(e){if(typeof e=="string"||bt(e))return e;var t=e+"";return t=="0"&&1/e==-er?"-0":t}function Pt(e,t){t=Et(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ye(t[n++])];return n&&n==r?e:void 0}function tr(e,t,n){var r=e==null?void 0:Pt(e,t);return r===void 0?n:r}function nr(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function rr(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function or(){return[]}var ir=Object.prototype,ar=ir.propertyIsEnumerable,et=Object.getOwnPropertySymbols,sr=et?function(e){return e==null?[]:(e=Object(e),rr(et(e),function(t){return ar.call(e,t)}))}:or;const lr=sr;function ur(e,t,n){var r=t(e);return k(e)?r:nr(r,n(e))}function tt(e){return ur(e,Le,lr)}var dr=be(we,"DataView");const Be=dr;var fr=be(we,"Promise");const Te=fr;var cr=be(we,"Set");const Ie=cr;var nt="[object Map]",hr="[object Object]",rt="[object Promise]",ot="[object Set]",it="[object WeakMap]",at="[object DataView]",pr=re(Be),vr=re(Ee),gr=re(Te),mr=re(Ie),br=re(Pe),G=wt;(Be&&G(new Be(new ArrayBuffer(1)))!=at||Ee&&G(new Ee)!=nt||Te&&G(Te.resolve())!=rt||Ie&&G(new Ie)!=ot||Pe&&G(new Pe)!=it)&&(G=function(e){var t=wt(e),n=t==hr?e.constructor:void 0,r=n?re(n):"";if(r)switch(r){case pr:return at;case vr:return nt;case gr:return rt;case mr:return ot;case br:return it}return t});const st=G;var wr="__lodash_hash_undefined__";function yr(e){return this.__data__.set(e,wr),this}function $r(e){return this.__data__.has(e)}function ge(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ne;++t<n;)this.add(e[t])}ge.prototype.add=ge.prototype.push=yr;ge.prototype.has=$r;function xr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Mr(e,t){return e.has(t)}var Sr=1,Ar=2;function Bt(e,t,n,r,o,i){var a=n&Sr,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),v=i.get(t);if(c&&v)return c==t&&v==e;var b=-1,u=!0,h=n&Ar?new ge:void 0;for(i.set(e,t),i.set(t,e);++b<s;){var g=e[b],d=t[b];if(r)var y=a?r(d,g,b,t,e,i):r(g,d,b,e,t,i);if(y!==void 0){if(y)continue;u=!1;break}if(h){if(!xr(t,function(f,$){if(!Mr(h,$)&&(g===f||o(g,f,n,r,i)))return h.push($)})){u=!1;break}}else if(!(g===d||o(g,d,n,r,i))){u=!1;break}}return i.delete(e),i.delete(t),u}function Or(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Cr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var _r=1,Er=2,Pr="[object Boolean]",Br="[object Date]",Tr="[object Error]",Ir="[object Map]",zr="[object Number]",Dr="[object RegExp]",Nr="[object Set]",Lr="[object String]",Fr="[object Symbol]",Hr="[object ArrayBuffer]",Wr="[object DataView]",lt=Ke?Ke.prototype:void 0,Ce=lt?lt.valueOf:void 0;function Xr(e,t,n,r,o,i,a){switch(n){case Wr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Hr:return!(e.byteLength!=t.byteLength||!i(new ke(e),new ke(t)));case Pr:case Br:case zr:return jt(+e,+t);case Tr:return e.name==t.name&&e.message==t.message;case Dr:case Lr:return e==t+"";case Ir:var s=Or;case Nr:var l=r&_r;if(s||(s=Cr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=Er,a.set(e,t);var v=Bt(s(e),s(t),r,o,i,a);return a.delete(e),v;case Fr:if(Ce)return Ce.call(e)==Ce.call(t)}return!1}var Kr=1,kr=Object.prototype,Yr=kr.hasOwnProperty;function Gr(e,t,n,r,o,i){var a=n&Kr,s=tt(e),l=s.length,c=tt(t),v=c.length;if(l!=v&&!a)return!1;for(var b=l;b--;){var u=s[b];if(!(a?u in t:Yr.call(t,u)))return!1}var h=i.get(e),g=i.get(t);if(h&&g)return h==t&&g==e;var d=!0;i.set(e,t),i.set(t,e);for(var y=a;++b<l;){u=s[b];var f=e[u],$=t[u];if(r)var I=a?r($,f,u,t,e,i):r(f,$,u,e,t,i);if(!(I===void 0?f===$||o(f,$,n,r,i):I)){d=!1;break}y||(y=u=="constructor")}if(d&&!y){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!(typeof _=="function"&&_ instanceof _&&typeof E=="function"&&E instanceof E)&&(d=!1)}return i.delete(e),i.delete(t),d}var Ur=1,ut="[object Arguments]",dt="[object Array]",ce="[object Object]",Vr=Object.prototype,ft=Vr.hasOwnProperty;function jr(e,t,n,r,o,i){var a=k(e),s=k(t),l=a?dt:st(e),c=s?dt:st(t);l=l==ut?ce:l,c=c==ut?ce:c;var v=l==ce,b=c==ce,u=l==c;if(u&&Ye(e)){if(!Ye(t))return!1;a=!0,v=!1}if(u&&!v)return i||(i=new he),a||qt(e)?Bt(e,t,n,r,o,i):Xr(e,t,l,n,r,o,i);if(!(n&Ur)){var h=v&&ft.call(e,"__wrapped__"),g=b&&ft.call(t,"__wrapped__");if(h||g){var d=h?e.value():e,y=g?t.value():t;return i||(i=new he),o(d,y,n,r,i)}}return u?(i||(i=new he),Gr(e,t,n,r,o,i)):!1}function We(e,t,n,r,o){return e===t?!0:e==null||t==null||!Ge(e)&&!Ge(t)?e!==e&&t!==t:jr(e,t,n,r,We,o)}var qr=1,Jr=2;function Zr(e,t,n,r){var o=n.length,i=o,a=!r;if(e==null)return!i;for(e=Object(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){s=n[o];var l=s[0],c=e[l],v=s[1];if(a&&s[2]){if(c===void 0&&!(l in e))return!1}else{var b=new he;if(r)var u=r(c,v,l,e,t,b);if(!(u===void 0?We(v,c,qr|Jr,r,b):u))return!1}}return!0}function Tt(e){return e===e&&!Jt(e)}function Qr(e){for(var t=Le(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Tt(o)]}return t}function It(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Rr(e){var t=Qr(e);return t.length==1&&t[0][2]?It(t[0][0],t[0][1]):function(n){return n===e||Zr(n,e,t)}}function eo(e,t){return e!=null&&t in Object(e)}function to(e,t,n){t=Et(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=ye(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&Zt(o)&&Qt(a,o)&&(k(e)||Rt(e)))}function no(e,t){return e!=null&&to(e,t,eo)}var ro=1,oo=2;function io(e,t){return Fe(e)&&Tt(t)?It(ye(e),t):function(n){var r=tr(n,e);return r===void 0&&r===t?no(n,e):We(t,r,ro|oo)}}function ao(e){return function(t){return t?.[e]}}function so(e){return function(t){return Pt(t,e)}}function lo(e){return Fe(e)?ao(ye(e)):so(e)}function uo(e){return typeof e=="function"?e:e==null?en:typeof e=="object"?k(e)?io(e[0],e[1]):Rr(e):lo(e)}function fo(e,t){return e&&tn(e,t,Le)}function co(e,t){return function(n,r){if(n==null)return n;if(!De(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}var ho=co(fo);const po=ho;function vo(e,t){var n=-1,r=De(e)?Array(e.length):[];return po(e,function(o,i,a){r[++n]=t(o,i,a)}),r}function go(e,t){var n=k(e)?nn:vo;return n(e,uo(t))}const mo={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},bo=e=>{const{boxShadow2:t,popoverColor:n,textColor2:r,borderRadius:o,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},mo),{fontSize:i,borderRadius:o,color:n,dividerColor:a,textColor:r,boxShadow:t})},wo={name:"Popover",common:yt,self:bo},yo=wo,_e={top:"bottom",bottom:"top",left:"right",right:"left"},S="var(--n-arrow-height) * 1.414",$o=z([D("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[z(">",[D("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),$e("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[$e("scrollable",[$e("show-header-or-footer","padding: var(--n-padding);")])]),xe("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),xe("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ee("scrollable, show-header-or-footer",[xe("content",`
 padding: var(--n-padding);
 `)])]),D("popover-shared",`
 transform-origin: inherit;
 `,[D("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[D("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${S});
 height: calc(${S});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),z("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),z("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),z("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),z("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${S} / -2);
 left: calc(${F("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${S} / -2);
 right: calc(${F("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${S} / -2);
 left: calc(${F("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${S} / -2);
 transform: translateX(calc(${S} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${S} / -2);
 right: calc(${F("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${S} / -2);
 top: calc(${F("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${S} / -2);
 bottom: calc(${F("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${S} / -2);
 top: calc(${F("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${S} / -2);
 transform: translateY(calc(${S} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${S} / -2);
 bottom: calc(${F("right-end")} + var(--v-offset-top));
 `),...go({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${r}, 0px)`} - ${S}) / 2)`,l=F(o);return z(`[v-placement="${o}"] >`,[D("popover-shared",[ee("center-arrow",[D("popover-arrow",`${t}: calc(max(${s}, ${l}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function F(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return z(`[v-placement="${e}"] >`,[D("popover-shared",`
 margin-${_e[n]}: var(--n-space);
 `,[ee("show-arrow",`
 margin-${_e[n]}: var(--n-space-arrow);
 `),ee("overlap",`
 margin: 0;
 `),rn("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${_e[n]}: auto;
 ${r}
 `,[D("popover-arrow",t)])])])}const zt=Object.assign(Object.assign({},le.props),{to:te.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),xo=({arrowStyle:e,clsPrefix:t})=>M("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},M("div",{class:`${t}-popover-arrow`,style:e})),Mo=ne({name:"PopoverBody",inheritAttrs:!1,props:zt,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=$t(e),a=le("Popover","-popover",$o,yo,e,o),s=B(null),l=K("NPopover"),c=B(null),v=B(e.show),b=B(!1);xt(()=>{const{show:m}=e;m&&!bn()&&!e.internalDeactivateImmediately&&(b.value=!0)});const u=H(()=>{const{trigger:m,onClickoutside:A}=e,O=[],{positionManuallyRef:{value:w}}=l;return w||(m==="click"&&!A&&O.push([Ue,_,void 0,{capture:!0}]),m==="hover"&&O.push([En,I])),A&&O.push([Ue,_,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&b.value)&&O.push([on,e.show]),O}),h=H(()=>{const m=e.width==="trigger"?void 0:pe(e.width),A=[];m&&A.push({width:m});const{maxWidth:O,minWidth:w}=e;return O&&A.push({maxWidth:pe(O)}),w&&A.push({maxWidth:pe(w)}),i||A.push(g.value),A}),g=H(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:A,cubicBezierEaseOut:O},self:{space:w,spaceArrow:W,padding:N,fontSize:T,textColor:p,dividerColor:x,color:C,boxShadow:j,borderRadius:q,arrowHeight:L,arrowOffset:Dt,arrowOffsetVertical:Nt}}=a.value;return{"--n-box-shadow":j,"--n-bezier":m,"--n-bezier-ease-in":A,"--n-bezier-ease-out":O,"--n-font-size":T,"--n-text-color":p,"--n-color":C,"--n-divider-color":x,"--n-border-radius":q,"--n-arrow-height":L,"--n-arrow-offset":Dt,"--n-arrow-offset-vertical":Nt,"--n-padding":N,"--n-space":w,"--n-space-arrow":W}}),d=i?Mt("popover",void 0,g,e):void 0;l.setBodyInstance({syncPosition:y}),se(()=>{l.setBodyInstance(null)}),Z(V(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=s.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&l.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&l.handleMouseLeave(m)}function I(m){e.trigger==="hover"&&!E().contains(Ve(m))&&l.handleMouseMoveOutside(m)}function _(m){(e.trigger==="click"&&!E().contains(Ve(m))||e.onClickoutside)&&l.handleClickOutside(m)}function E(){return l.getTriggerElement()}oe(vt,c),oe(pt,null),oe(ht,null);function Y(){if(d?.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&b.value))return null;let A;const O=l.internalRenderBodyRef.value,{value:w}=o;if(O)A=O([`${w}-popover-shared`,d?.themeClass.value,e.overlap&&`${w}-popover-shared--overlap`,e.showArrow&&`${w}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${w}-popover-shared--center-arrow`],c,h.value,f,$);else{const{value:W}=l.extraClassRef,{internalTrapFocus:N}=e,T=!je(t.header)||!je(t.footer),p=()=>{var x;const C=T?M(ln,null,Me(t.header,L=>L?M("div",{class:`${w}-popover__header`,style:e.headerStyle},L):null),Me(t.default,L=>L?M("div",{class:`${w}-popover__content`,style:e.contentStyle},t):null),Me(t.footer,L=>L?M("div",{class:`${w}-popover__footer`,style:e.footerStyle},L):null)):e.scrollable?(x=t.default)===null||x===void 0?void 0:x.call(t):M("div",{class:`${w}-popover__content`,style:e.contentStyle},t),j=e.scrollable?M(un,{contentClass:T?void 0:`${w}-popover__content`,contentStyle:T?void 0:e.contentStyle},{default:()=>C}):C,q=e.showArrow?xo({arrowStyle:e.arrowStyle,clsPrefix:w}):null;return[j,q]};A=M("div",St({class:[`${w}-popover`,`${w}-popover-shared`,d?.themeClass.value,W.map(x=>`${w}-${x}`),{[`${w}-popover--scrollable`]:e.scrollable,[`${w}-popover--show-header-or-footer`]:T,[`${w}-popover--raw`]:e.raw,[`${w}-popover-shared--overlap`]:e.overlap,[`${w}-popover-shared--show-arrow`]:e.showArrow,[`${w}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:h.value,onKeydown:l.handleKeydown,onMouseenter:f,onMouseleave:$},n),N?M(sn,{active:e.show,autoFocus:!0},{default:p}):p())}return me(A,u.value)}return{displayed:b,namespace:r,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:s,adjustedTo:te(e),followerEnabled:v,renderContentNode:Y}},render(){return M(Fn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===te.tdkey},{default:()=>this.animated?M(an,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),So=Object.keys(zt),Ao={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Oo(e,t,n){Ao[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...a)=>{o(...a),i(...a)}:e.props[r]=i})}const Co=fn("").type,_o={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:te.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Eo=Object.assign(Object.assign(Object.assign({},le.props),_o),{internalOnAfterLeave:Function,internalRenderBody:Function}),Fo=ne({name:"Popover",inheritAttrs:!1,props:Eo,__popover__:!0,setup(e){const t=gt(),n=B(null),r=H(()=>e.show),o=B(e.defaultShow),i=$n(r,o),a=ae(()=>e.disabled?!1:i.value),s=()=>{if(e.disabled)return!0;const{getDisabled:p}=e;return!!p?.()},l=()=>s()?!1:i.value,c=pn(e,["arrow","showArrow"]),v=H(()=>e.overlap?!1:c.value);let b=null;const u=B(null),h=B(null),g=ae(()=>e.x!==void 0&&e.y!==void 0);function d(p){const{"onUpdate:show":x,onUpdateShow:C,onShow:j,onHide:q}=e;o.value=p,x&&ue(x,p),C&&ue(C,p),p&&j&&ue(j,!0),p&&q&&ue(q,!1)}function y(){b&&b.syncPosition()}function f(){const{value:p}=u;p&&(window.clearTimeout(p),u.value=null)}function $(){const{value:p}=h;p&&(window.clearTimeout(p),h.value=null)}function I(){const p=s();if(e.trigger==="focus"&&!p){if(l())return;d(!0)}}function _(){const p=s();if(e.trigger==="focus"&&!p){if(!l())return;d(!1)}}function E(){const p=s();if(e.trigger==="hover"&&!p){if($(),u.value!==null||l())return;const x=()=>{d(!0),u.value=null},{delay:C}=e;C===0?x():u.value=window.setTimeout(x,C)}}function Y(){const p=s();if(e.trigger==="hover"&&!p){if(f(),h.value!==null||!l())return;const x=()=>{d(!1),h.value=null},{duration:C}=e;C===0?x():h.value=window.setTimeout(x,C)}}function m(){Y()}function A(p){var x;l()&&(e.trigger==="click"&&(f(),$(),d(!1)),(x=e.onClickoutside)===null||x===void 0||x.call(e,p))}function O(){if(e.trigger==="click"&&!s()){f(),$();const p=!l();d(p)}}function w(p){e.internalTrapFocus&&p.key==="Escape"&&(f(),$(),d(!1))}function W(p){o.value=p}function N(){var p;return(p=n.value)===null||p===void 0?void 0:p.targetRef}function T(p){b=p}return oe("NPopover",{getTriggerElement:N,handleKeydown:w,handleMouseEnter:E,handleMouseLeave:Y,handleClickOutside:A,handleMouseMoveOutside:m,setBodyInstance:T,positionManuallyRef:g,isMountedRef:t,zIndexRef:V(e,"zIndex"),extraClassRef:V(e,"internalExtraClass"),internalRenderBodyRef:V(e,"internalRenderBody")}),xt(()=>{i.value&&s()&&d(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:o,mergedShowArrow:v,getMergedShow:l,setShow:W,handleClick:O,handleMouseEnter:E,handleMouseLeave:Y,handleFocus:I,handleBlur:_,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=qe(n,"activator"):r=qe(n,"trigger"),r)){r=dn(r),r=r.type===Co?M("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,s=[i,...a],l={onBlur:c=>{s.forEach(v=>{v.onBlur(c)})},onFocus:c=>{s.forEach(v=>{v.onFocus(c)})},onClick:c=>{s.forEach(v=>{v.onClick(c)})},onMouseenter:c=>{s.forEach(v=>{v.onMouseenter(c)})},onMouseleave:c=>{s.forEach(v=>{v.onMouseleave(c)})}};Oo(r,a?"nested":t?"manual":this.trigger,l)}}return M(On,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?me(M("div",{style:{position:"fixed",inset:0}}),[[mt,{enabled:i,zIndex:this.zIndex}]]):null,t?null:M(Cn,null,{default:()=>r}),M(Mo,cn(this.$props,So,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,s;return(s=(a=this.$slots).default)===null||s===void 0?void 0:s.call(a)},header:()=>{var a,s;return(s=(a=this.$slots).header)===null||s===void 0?void 0:s.call(a)},footer:()=>{var a,s;return(s=(a=this.$slots).footer)===null||s===void 0?void 0:s.call(a)}})]}})}}),Po=e=>{const{textColorBase:t,opacity1:n,opacity2:r,opacity3:o,opacity4:i,opacity5:a}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:o,opacity4Depth:i,opacity5Depth:a}},Bo={name:"Icon",common:yt,self:Po},To=Bo,Io=D("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ee("color-transition",{transition:"color .3s var(--n-bezier)"}),ee("depth",{color:"var(--n-color)"},[z("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),z("svg",{height:"1em",width:"1em"})]),zo=Object.assign(Object.assign({},le.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Ho=ne({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:zo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=$t(e),r=le("Icon","-icon",Io,To,e,t),o=H(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=r.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:v}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":v}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=n?Mt("icon",H(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:H(()=>{const{size:a,color:s}=e;return{fontSize:pe(a),color:s}}),cssVars:n?void 0:o,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:i,themeClass:a}=this;return!((e=t?.$options)===null||e===void 0)&&e._n_icon__&&hn("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),M("i",St(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?M(o):this.$slots)}});export{Fo as N,On as V,Ho as a,de as b,Pn as c,gn as d,xn as e,_o as f,te as g,Cn as h,Lo as i,Fn as j,pe as k,tr as l,yo as p,xo as r,$n as u};