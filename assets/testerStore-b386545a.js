import{e as de,ba as pt,a2 as ze,bC as Kt,aj as qt,q as B,k as T,C as De,al as tt,h as d,a7 as Gt,at,ap as Ne,Q as lt,aX as Yt,bD as st,am as mt,i as wt,B as xe,y as Xt,aD as yt,g as P,v as j,j as ne,x as re,H as nt,ay as xt,u as Ce,z as Z,bE as Qt,ax as Se,p as dt,s as it,aa as Jt,ar as Zt,t as en,a9 as tn,ad as ge,ac as Xe,bF as nn,J as on,bG as ln,F as rn,l as an,aQ as sn,aS as dn,Z as un,bg as cn,aT as ut,bH as fn,aV as hn,aU as vn,A as ie,a6 as gn,Y as bn}from"./index-554f3ce5.js";import{e as St,f as Le,b as pn,i as rt,h as mn,N as wn,u as ct,d as ot,V as yn,a as xn,c as Sn}from"./Popover-0480f102.js";import{a as Cn,c as Tn,N as Qe,u as Fn}from"./Suffix-b5c91ab1.js";import{u as Rn}from"./use-compitable-659eb371.js";import{a as On,h as Ve,c as Mn}from"./create-aae2c7cf.js";function kn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Je(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(r=>{r&&r(o)})}}function ft(e){return e&-e}class zn{constructor(n,o){this.l=n,this.min=o;const r=new Array(n+1);for(let s=0;s<n+1;++s)r[s]=0;this.ft=r}add(n,o){if(o===0)return;const{l:r,ft:s}=this;for(n+=1;n<=r;)s[n]+=o,n+=ft(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:r,l:s}=this;if(n>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let h=n*r;for(;n>0;)h+=o[n],n-=ft(n);return h}getBound(n){let o=0,r=this.l;for(;r>o;){const s=Math.floor((o+r)/2),h=this.sum(s);if(h>n){r=s;continue}else if(h<n){if(o===s)return this.sum(o+1)<=n?o+1:s;o=s}else return s}return o}}let Ee;function Pn(){return Ee===void 0&&("matchMedia"in window?Ee=window.matchMedia("(pointer:coarse)").matches:Ee=!1),Ee}let Ze;function ht(){return Ze===void 0&&(Ze="chrome"in window?window.devicePixelRatio:1),Ze}const In=Le(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Le("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Le("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Bn=de({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=pt();In.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:St,ssr:n}),ze(()=>{const{defaultScrollIndex:f,defaultScrollKey:v}=e;f!=null?p({index:f}):v!=null&&p({key:v})});let o=!1,r=!1;Kt(()=>{if(o=!1,!r){r=!0;return}p({top:_.value,left:C})}),qt(()=>{o=!0,r||(r=!0)});const s=B(()=>{const f=new Map,{keyField:v}=e;return e.items.forEach((k,V)=>{f.set(k[v],V)}),f}),h=T(null),b=T(void 0),l=new Map,y=B(()=>{const{items:f,itemSize:v,keyField:k}=e,V=new zn(f.length,v);return f.forEach((W,D)=>{const I=W[k],H=l.get(I);H!==void 0&&V.add(D,H)}),V}),m=T(0);let C=0;const _=T(0),$=De(()=>Math.max(y.value.getBound(_.value-tt(e.paddingTop))-1,0)),A=B(()=>{const{value:f}=b;if(f===void 0)return[];const{items:v,itemSize:k}=e,V=$.value,W=Math.min(V+Math.ceil(f/k+1),v.length-1),D=[];for(let I=V;I<=W;++I)D.push(v[I]);return D}),p=(f,v)=>{if(typeof f=="number"){w(f,v,"auto");return}const{left:k,top:V,index:W,key:D,position:I,behavior:H,debounce:i=!0}=f;if(k!==void 0||V!==void 0)w(k,V,H);else if(W!==void 0)S(W,H,i);else if(D!==void 0){const c=s.value.get(D);c!==void 0&&S(c,H,i)}else I==="bottom"?w(0,Number.MAX_SAFE_INTEGER,H):I==="top"&&w(0,0,H)};let F,L=null;function S(f,v,k){const{value:V}=y,W=V.sum(f)+tt(e.paddingTop);if(!k)h.value.scrollTo({left:0,top:W,behavior:v});else{F=f,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{F=void 0,L=null},16);const{scrollTop:D,offsetHeight:I}=h.value;if(W>D){const H=V.get(f);W+H<=D+I||h.value.scrollTo({left:0,top:W+H-I,behavior:v})}else h.value.scrollTo({left:0,top:W,behavior:v})}}function w(f,v,k){h.value.scrollTo({left:f,top:v,behavior:k})}function K(f,v){var k,V,W;if(o||e.ignoreItemResize||ee(v.target))return;const{value:D}=y,I=s.value.get(f),H=D.get(I),i=(W=(V=(k=v.borderBoxSize)===null||k===void 0?void 0:k[0])===null||V===void 0?void 0:V.blockSize)!==null&&W!==void 0?W:v.contentRect.height;if(i===H)return;i-e.itemSize===0?l.delete(f):l.set(f,i-e.itemSize);const N=i-H;if(N===0)return;D.add(I,N);const Q=h.value;if(Q!=null){if(F===void 0){const ae=D.sum(I);Q.scrollTop>ae&&Q.scrollBy(0,N)}else if(I<F)Q.scrollBy(0,N);else if(I===F){const ae=D.sum(I);i+ae>Q.scrollTop+Q.offsetHeight&&Q.scrollBy(0,N)}le()}m.value++}const Y=!Pn();let q=!1;function E(f){var v;(v=e.onScroll)===null||v===void 0||v.call(e,f),(!Y||!q)&&le()}function G(f){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,f),Y){const k=h.value;if(k!=null){if(f.deltaX===0&&(k.scrollTop===0&&f.deltaY<=0||k.scrollTop+k.offsetHeight>=k.scrollHeight&&f.deltaY>=0))return;f.preventDefault(),k.scrollTop+=f.deltaY/ht(),k.scrollLeft+=f.deltaX/ht(),le(),q=!0,pn(()=>{q=!1})}}}function J(f){if(o||ee(f.target)||f.contentRect.height===b.value)return;b.value=f.contentRect.height;const{onResize:v}=e;v!==void 0&&v(f)}function le(){const{value:f}=h;f!=null&&(_.value=f.scrollTop,C=f.scrollLeft)}function ee(f){let v=f;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:b,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:B(()=>{const{itemResizable:f}=e,v=Ne(y.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":v,minHeight:f?v:"",paddingTop:Ne(e.paddingTop),paddingBottom:Ne(e.paddingBottom)}]}),visibleItemsStyle:B(()=>(m.value,{transform:`translateY(${Ne(y.value.sum($.value))})`})),viewportItems:A,listElRef:h,itemsElRef:T(null),scrollTo:p,handleListResize:J,handleListScroll:E,handleListWheel:G,handleItemResize:K}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:r}=this;return d(at,{onResize:this.handleListResize},{default:()=>{var s,h;return d("div",Gt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(b=>{const l=b[n],y=o.get(l),m=this.$slots.default({item:b,index:y})[0];return e?d(at,{key:l,onResize:C=>this.handleItemResize(l,C)},{default:()=>m}):(m.key=l,m)})})]):(h=(s=this.$slots).empty)===null||h===void 0?void 0:h.call(s)])}})}}),ve="v-hidden",_n=Le("[v-hidden]",{display:"none!important"}),vt=de({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const o=T(null),r=T(null);function s(){const{value:b}=o,{getCounter:l,getTail:y}=e;let m;if(l!==void 0?m=l():m=r.value,!b||!m)return;m.hasAttribute(ve)&&m.removeAttribute(ve);const{children:C}=b,_=b.offsetWidth,$=[],A=n.tail?y?.():null;let p=A?A.offsetWidth:0,F=!1;const L=b.children.length-(n.tail?1:0);for(let w=0;w<L-1;++w){if(w<0)continue;const K=C[w];if(F){K.hasAttribute(ve)||K.setAttribute(ve,"");continue}else K.hasAttribute(ve)&&K.removeAttribute(ve);const Y=K.offsetWidth;if(p+=Y,$[w]=Y,p>_){const{updateCounter:q}=e;for(let E=w;E>=0;--E){const G=L-1-E;q!==void 0?q(G):m.textContent=`${G}`;const J=m.offsetWidth;if(p-=$[E],p+J<=_||E===0){F=!0,w=E-1,A&&(w===-1?(A.style.maxWidth=`${_-J}px`,A.style.boxSizing="border-box"):A.style.maxWidth="");break}}}}const{onUpdateOverflow:S}=e;F?S!==void 0&&S(!0):(S!==void 0&&S(!1),m.setAttribute(ve,""))}const h=pt();return _n.mount({id:"vueuc/overflow",head:!0,anchorMetaName:St,ssr:h}),ze(s),{selfRef:o,counterRef:r,sync:s}},render(){const{$slots:e}=this;return lt(this.sync),d("div",{class:"v-overflow",ref:"selfRef"},[Yt(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Ct(e,n){n&&(ze(()=>{const{value:o}=e;o&&st.registerHandler(o,n)}),mt(()=>{const{value:o}=e;o&&st.unregisterHandler(o)}))}const $n=de({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),An=de({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Nn(e,n){return d(yt,{name:"fade-in-scale-up-transition"},{default:()=>e?d(Xt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d($n)}):null})}const gt=de({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:r,valueSetRef:s,renderLabelRef:h,renderOptionRef:b,labelFieldRef:l,valueFieldRef:y,showCheckmarkRef:m,nodePropsRef:C,handleOptionClick:_,handleOptionMouseEnter:$}=wt(rt),A=De(()=>{const{value:S}=o;return S?e.tmNode.key===S.key:!1});function p(S){const{tmNode:w}=e;w.disabled||_(S,w)}function F(S){const{tmNode:w}=e;w.disabled||$(S,w)}function L(S){const{tmNode:w}=e,{value:K}=A;w.disabled||K||$(S,w)}return{multiple:r,isGrouped:De(()=>{const{tmNode:S}=e,{parent:w}=S;return w&&w.rawNode.type==="group"}),showCheckmark:m,nodeProps:C,isPending:A,isSelected:De(()=>{const{value:S}=n,{value:w}=r;if(S===null)return!1;const K=e.tmNode.rawNode[y.value];if(w){const{value:Y}=s;return Y.has(K)}else return S===K}),labelField:l,renderLabel:h,renderOption:b,handleMouseMove:L,handleMouseEnter:F,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:r,isGrouped:s,showCheckmark:h,nodeProps:b,renderOption:l,renderLabel:y,handleClick:m,handleMouseEnter:C,handleMouseMove:_}=this,$=Nn(o,e),A=y?[y(n,o),h&&$]:[xe(n[this.labelField],n,o),h&&$],p=b?.(n),F=d("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p?.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:h}],style:[p?.style||"",n.style||""],onClick:Je([m,p?.onClick]),onMouseenter:Je([C,p?.onMouseenter]),onMousemove:Je([_,p?.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},A));return n.render?n.render({node:F,option:n,selected:o}):l?l({node:F,option:n,selected:o}):F}}),bt=de({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:r}=wt(rt);return{labelField:o,nodeProps:r,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:r,tmNode:{rawNode:s}}=this,h=r?.(s),b=n?n(s,!1):xe(s[this.labelField],s,!1),l=d("div",Object.assign({},h,{class:[`${e}-base-select-group-header`,h?.class]}),b);return s.render?s.render({node:l,option:s}):o?o({node:l,option:s,selected:!1}):l}}),En=P("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[P("scrollbar",`
 max-height: var(--n-height);
 `),P("virtual-list",`
 max-height: var(--n-height);
 `),P("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),P("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),P("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),P("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ne("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),re("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),re("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ne("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ne("pending",[re("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ne("selected",`
 color: var(--n-option-text-color-active);
 `,[re("&::before",`
 background-color: var(--n-option-color-active);
 `),ne("pending",[re("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ne("disabled",`
 cursor: not-allowed;
 `,[nt("selected",`
 color: var(--n-option-text-color-disabled);
 `),ne("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[xt({enterScale:"0.5"})])])]),Dn=de({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=Ce("InternalSelectMenu","-internal-select-menu",En,Qt,e,Z(e,"clsPrefix")),o=T(null),r=T(null),s=T(null),h=B(()=>e.treeMate.getFlattenedNodes()),b=B(()=>On(h.value)),l=T(null);function y(){const{treeMate:i}=e;let c=null;const{value:N}=e;N===null?c=i.getFirstAvailableNode():(e.multiple?c=i.getNode((N||[])[(N||[]).length-1]):c=i.getNode(N),(!c||c.disabled)&&(c=i.getFirstAvailableNode())),f(c||null)}function m(){const{value:i}=l;i&&!e.treeMate.getNode(i.key)&&(l.value=null)}let C;Se(()=>e.show,i=>{i?C=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():m(),lt(v)):m()},{immediate:!0}):C?.()},{immediate:!0}),mt(()=>{C?.()});const _=B(()=>tt(n.value.self[ge("optionHeight",e.size)])),$=B(()=>Xe(n.value.self[ge("padding",e.size)])),A=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=B(()=>{const i=h.value;return i&&i.length===0});function F(i){const{onToggle:c}=e;c&&c(i)}function L(i){const{onScroll:c}=e;c&&c(i)}function S(i){var c;(c=s.value)===null||c===void 0||c.sync(),L(i)}function w(){var i;(i=s.value)===null||i===void 0||i.sync()}function K(){const{value:i}=l;return i||null}function Y(i,c){c.disabled||f(c,!1)}function q(i,c){c.disabled||F(c)}function E(i){var c;Ve(i,"action")||(c=e.onKeyup)===null||c===void 0||c.call(e,i)}function G(i){var c;Ve(i,"action")||(c=e.onKeydown)===null||c===void 0||c.call(e,i)}function J(i){var c;(c=e.onMousedown)===null||c===void 0||c.call(e,i),!e.focusable&&i.preventDefault()}function le(){const{value:i}=l;i&&f(i.getNext({loop:!0}),!0)}function ee(){const{value:i}=l;i&&f(i.getPrev({loop:!0}),!0)}function f(i,c=!1){l.value=i,c&&v()}function v(){var i,c;const N=l.value;if(!N)return;const Q=b.value(N.key);Q!==null&&(e.virtualScroll?(i=r.value)===null||i===void 0||i.scrollTo({index:Q}):(c=s.value)===null||c===void 0||c.scrollTo({index:Q,elSize:_.value}))}function k(i){var c,N;!((c=o.value)===null||c===void 0)&&c.contains(i.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,i))}function V(i){var c,N;!((c=o.value)===null||c===void 0)&&c.contains(i.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,i)}dt(rt,{handleOptionMouseEnter:Y,handleOptionClick:q,valueSetRef:A,pendingTmNodeRef:l,nodePropsRef:Z(e,"nodeProps"),showCheckmarkRef:Z(e,"showCheckmark"),multipleRef:Z(e,"multiple"),valueRef:Z(e,"value"),renderLabelRef:Z(e,"renderLabel"),renderOptionRef:Z(e,"renderOption"),labelFieldRef:Z(e,"labelField"),valueFieldRef:Z(e,"valueField")}),dt(mn,o),ze(()=>{const{value:i}=s;i&&i.sync()});const W=B(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:c},self:{height:N,borderRadius:Q,color:ae,groupHeaderTextColor:Te,actionDividerColor:Fe,optionTextColorPressed:be,optionTextColor:pe,optionTextColorDisabled:se,optionTextColorActive:te,optionOpacityDisabled:me,optionCheckColor:ue,actionTextColor:Re,optionColorPending:fe,optionColorActive:he,loadingColor:Oe,loadingSize:Me,optionColorActivePending:ke,[ge("optionFontSize",i)]:we,[ge("optionHeight",i)]:ye,[ge("optionPadding",i)]:oe}}=n.value;return{"--n-height":N,"--n-action-divider-color":Fe,"--n-action-text-color":Re,"--n-bezier":c,"--n-border-radius":Q,"--n-color":ae,"--n-option-font-size":we,"--n-group-header-text-color":Te,"--n-option-check-color":ue,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":ke,"--n-option-height":ye,"--n-option-opacity-disabled":me,"--n-option-text-color":pe,"--n-option-text-color-active":te,"--n-option-text-color-disabled":se,"--n-option-text-color-pressed":be,"--n-option-padding":oe,"--n-option-padding-left":Xe(oe,"left"),"--n-option-padding-right":Xe(oe,"right"),"--n-loading-color":Oe,"--n-loading-size":Me}}),{inlineThemeDisabled:D}=e,I=D?it("internal-select-menu",B(()=>e.size[0]),W,e):void 0,H={selfRef:o,next:le,prev:ee,getPendingTmNode:K};return Ct(o,e.onResize),Object.assign({mergedTheme:n,virtualListRef:r,scrollbarRef:s,itemSize:_,padding:$,flattenedNodes:h,empty:p,virtualListContainer(){const{value:i}=r;return i?.listElRef},virtualListContent(){const{value:i}=r;return i?.itemsElRef},doScroll:L,handleFocusin:k,handleFocusout:V,handleKeyUp:E,handleKeyDown:G,handleMouseDown:J,handleVirtualListResize:w,handleVirtualListScroll:S,cssVars:D?void 0:W,themeClass:I?.themeClass,onRender:I?.onRender},H)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:r,themeClass:s,onRender:h}=this;return h?.(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,s,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?d("div",{class:`${o}-base-select-menu__loading`},d(Zt,{clsPrefix:o,strokeWidth:20})):this.empty?d("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},tn(e.empty,()=>[d(Cn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):d(en,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(Bn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:b})=>b.isGroup?d(bt,{key:b.key,clsPrefix:o,tmNode:b}):b.ignored?null:d(gt,{clsPrefix:o,key:b.key,tmNode:b})}):d("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(b=>b.isGroup?d(bt,{key:b.key,clsPrefix:o,tmNode:b}):d(gt,{clsPrefix:o,key:b.key,tmNode:b})))}),Jt(e.action,b=>b&&[d("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},b),d(An,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ln=re([P("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[P("base-loading",`
 color: var(--n-loading-color);
 `),P("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),P("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),P("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),P("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[P("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),nt("disabled",[re("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),P("base-selection-label","background-color: var(--n-color-active);"),P("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),P("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[P("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),P("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),P("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),P("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),nt("disabled",[re("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),P("base-selection-label",`background-color: var(--n-color-active-${e});`),P("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),P("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),P("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),P("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Vn=de({name:"InternalSelection",props:Object.assign(Object.assign({},Ce.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=T(null),o=T(null),r=T(null),s=T(null),h=T(null),b=T(null),l=T(null),y=T(null),m=T(null),C=T(null),_=T(!1),$=T(!1),A=T(!1),p=Ce("InternalSelection","-internal-selection",Ln,nn,e,Z(e,"clsPrefix")),F=B(()=>e.clearable&&!e.disabled&&(A.value||e.active)),L=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):xe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=B(()=>{const a=e.selectedOption;if(a)return a[e.labelField]}),w=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var a;const{value:g}=n;if(g){const{value:U}=o;U&&(U.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((a=m.value)===null||a===void 0||a.sync()))}}function Y(){const{value:a}=C;a&&(a.style.display="none")}function q(){const{value:a}=C;a&&(a.style.display="inline-block")}Se(Z(e,"active"),a=>{a||Y()}),Se(Z(e,"pattern"),()=>{e.multiple&&lt(K)});function E(a){const{onFocus:g}=e;g&&g(a)}function G(a){const{onBlur:g}=e;g&&g(a)}function J(a){const{onDeleteOption:g}=e;g&&g(a)}function le(a){const{onClear:g}=e;g&&g(a)}function ee(a){const{onPatternInput:g}=e;g&&g(a)}function f(a){var g;(!a.relatedTarget||!(!((g=r.value)===null||g===void 0)&&g.contains(a.relatedTarget)))&&E(a)}function v(a){var g;!((g=r.value)===null||g===void 0)&&g.contains(a.relatedTarget)||G(a)}function k(a){le(a)}function V(){A.value=!0}function W(){A.value=!1}function D(a){!e.active||!e.filterable||a.target!==o.value&&a.preventDefault()}function I(a){J(a)}function H(a){if(a.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:g}=e;g?.length&&I(g[g.length-1])}}const i=T(!1);let c=null;function N(a){const{value:g}=n;if(g){const U=a.target.value;g.textContent=U,K()}e.ignoreComposition&&i.value?c=a:ee(a)}function Q(){i.value=!0}function ae(){i.value=!1,e.ignoreComposition&&ee(c),c=null}function Te(a){var g;$.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,a)}function Fe(a){var g;$.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,a)}function be(){var a,g;if(e.filterable)$.value=!1,(a=b.value)===null||a===void 0||a.blur(),(g=o.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:U}=s;U?.blur()}else{const{value:U}=h;U?.blur()}}function pe(){var a,g,U;e.filterable?($.value=!1,(a=b.value)===null||a===void 0||a.focus()):e.multiple?(g=s.value)===null||g===void 0||g.focus():(U=h.value)===null||U===void 0||U.focus()}function se(){const{value:a}=o;a&&(q(),a.focus())}function te(){const{value:a}=o;a&&a.blur()}function me(a){const{value:g}=l;g&&g.setTextContent(`+${a}`)}function ue(){const{value:a}=y;return a}function Re(){return o.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function Oe(){e.disabled||e.active||(he(),fe=window.setTimeout(()=>{w.value&&(_.value=!0)},100))}function Me(){he()}function ke(a){a||(he(),_.value=!1)}Se(w,a=>{a||(_.value=!1)}),ze(()=>{on(()=>{const a=b.value;a&&(a.tabIndex=e.disabled||$.value?-1:0)})}),Ct(r,e.onResize);const{inlineThemeDisabled:we}=e,ye=B(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:g},self:{borderRadius:U,color:Pe,placeholderColor:je,textColor:He,paddingSingle:Ue,paddingMultiple:Ke,caretColor:Ie,colorDisabled:Be,textColorDisabled:_e,placeholderColorDisabled:qe,colorActive:Ge,boxShadowFocus:$e,boxShadowActive:ce,boxShadowHover:t,border:u,borderFocus:x,borderHover:z,borderActive:R,arrowColor:M,arrowColorDisabled:O,loadingColor:X,colorActiveWarning:Ae,boxShadowFocusWarning:Ye,boxShadowActiveWarning:Ft,boxShadowHoverWarning:Rt,borderWarning:Ot,borderFocusWarning:Mt,borderHoverWarning:kt,borderActiveWarning:zt,colorActiveError:Pt,boxShadowFocusError:It,boxShadowActiveError:Bt,boxShadowHoverError:_t,borderError:$t,borderFocusError:At,borderHoverError:Nt,borderActiveError:Et,clearColor:Dt,clearColorHover:Lt,clearColorPressed:Vt,clearSize:Wt,arrowSize:jt,[ge("height",a)]:Ht,[ge("fontSize",a)]:Ut}}=p.value;return{"--n-bezier":g,"--n-border":u,"--n-border-active":R,"--n-border-focus":x,"--n-border-hover":z,"--n-border-radius":U,"--n-box-shadow-active":ce,"--n-box-shadow-focus":$e,"--n-box-shadow-hover":t,"--n-caret-color":Ie,"--n-color":Pe,"--n-color-active":Ge,"--n-color-disabled":Be,"--n-font-size":Ut,"--n-height":Ht,"--n-padding-single":Ue,"--n-padding-multiple":Ke,"--n-placeholder-color":je,"--n-placeholder-color-disabled":qe,"--n-text-color":He,"--n-text-color-disabled":_e,"--n-arrow-color":M,"--n-arrow-color-disabled":O,"--n-loading-color":X,"--n-color-active-warning":Ae,"--n-box-shadow-focus-warning":Ye,"--n-box-shadow-active-warning":Ft,"--n-box-shadow-hover-warning":Rt,"--n-border-warning":Ot,"--n-border-focus-warning":Mt,"--n-border-hover-warning":kt,"--n-border-active-warning":zt,"--n-color-active-error":Pt,"--n-box-shadow-focus-error":It,"--n-box-shadow-active-error":Bt,"--n-box-shadow-hover-error":_t,"--n-border-error":$t,"--n-border-focus-error":At,"--n-border-hover-error":Nt,"--n-border-active-error":Et,"--n-clear-size":Wt,"--n-clear-color":Dt,"--n-clear-color-hover":Lt,"--n-clear-color-pressed":Vt,"--n-arrow-size":jt}}),oe=we?it("internal-selection",B(()=>e.size[0]),ye,e):void 0;return{mergedTheme:p,mergedClearable:F,patternInputFocused:$,filterablePlaceholder:L,label:S,selected:w,showTagsPanel:_,isComposing:i,counterRef:l,counterWrapperRef:y,patternInputMirrorRef:n,patternInputRef:o,selfRef:r,multipleElRef:s,singleElRef:h,patternInputWrapperRef:b,overflowRef:m,inputTagElRef:C,handleMouseDown:D,handleFocusin:f,handleClear:k,handleMouseEnter:V,handleMouseLeave:W,handleDeleteOption:I,handlePatternKeyDown:H,handlePatternInputInput:N,handlePatternInputBlur:Fe,handlePatternInputFocus:Te,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Me,handleFocusout:v,handleCompositionEnd:ae,handleCompositionStart:Q,onPopoverUpdateShow:ke,focus:pe,focusInput:se,blur:be,blurInput:te,updateCounter:me,getCounter:ue,getTail:Re,renderLabel:e.renderLabel,cssVars:we?void 0:ye,themeClass:oe?.themeClass,onRender:oe?.onRender}},render(){const{status:e,multiple:n,size:o,disabled:r,filterable:s,maxTagCount:h,bordered:b,clsPrefix:l,onRender:y,renderTag:m,renderLabel:C}=this;y?.();const _=h==="responsive",$=typeof h=="number",A=_||$,p=d(ln,null,{default:()=>d(Tn,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var L,S;return(S=(L=this.$slots).arrow)===null||S===void 0?void 0:S.call(L)}})});let F;if(n){const{labelField:L}=this,S=v=>d("div",{class:`${l}-base-selection-tag-wrapper`,key:v.value},m?m({option:v,handleClose:()=>this.handleDeleteOption(v)}):d(Qe,{size:o,closable:!v.disabled,disabled:r,onClose:()=>this.handleDeleteOption(v),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>C?C(v,!0):xe(v[L],v,!0)})),w=()=>($?this.selectedOptions.slice(0,h):this.selectedOptions).map(S),K=s?d("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,Y=_?()=>d("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(Qe,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let q;if($){const v=this.selectedOptions.length-h;v>0&&(q=d("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},d(Qe,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${v}`})))}const E=_?s?d(vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:Y,tail:()=>K}):d(vt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:Y}):$?w().concat(q):w(),G=A?()=>d("div",{class:`${l}-base-selection-popover`},_?w():this.selectedOptions.map(S)):void 0,J=A?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},d("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,f=s?d("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},E,_?null:K,p):d("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:r?void 0:0},E,p);F=d(rn,null,A?d(wn,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>f,default:G}):f,ee)}else if(s){const L=this.pattern||this.isComposing,S=this.active?!L:!this.selected,w=this.active?!1:this.selected;F=d("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w?d("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},d("div",{class:`${l}-base-selection-overlay__wrapper`},m?m({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):null,S?d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else F=d("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${l}-base-selection-input`,title:kn(this.label),key:"input"},d("div",{class:`${l}-base-selection-input__content`},m?m({option:this.selectedOption,handleClose:()=>{}}):C?C(this.selectedOption,!0):xe(this.label,this.selectedOption,!0))):d("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),p);return d("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,b?d("div",{class:`${l}-base-selection__border`}):null,b?d("div",{class:`${l}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Tt(e){return e.type==="ignored"}function et(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Wn(e,n){return{getIsGroup:We,getIgnored:Tt,getKey(r){return We(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[n]}}}function jn(e,n,o,r){if(!n)return e;function s(h){if(!Array.isArray(h))return[];const b=[];for(const l of h)if(We(l)){const y=s(l[r]);y.length&&b.push(Object.assign({},l,{[r]:y}))}else{if(Tt(l))continue;n(o,l)&&b.push(l)}return b}return s(e)}function Hn(e,n,o){const r=new Map;return e.forEach(s=>{We(s)?s[o].forEach(h=>{r.set(h[n],h)}):r.set(s[n],s)}),r}const Un=re([P("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),P("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[xt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Kn=Object.assign(Object.assign({},Ce.props),{to:ot.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Jn=de({name:"Select",props:Kn,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:r,inlineThemeDisabled:s}=an(e),h=Ce("Select","-select",Un,fn,e,n),b=T(e.defaultValue),l=Z(e,"value"),y=ct(l,b),m=T(!1),C=T(""),_=B(()=>{const{valueField:t,childrenField:u}=e,x=Wn(t,u);return Mn(v.value,x)}),$=B(()=>Hn(ee.value,e.valueField,e.childrenField)),A=T(!1),p=ct(Z(e,"show"),A),F=T(null),L=T(null),S=T(null),{localeRef:w}=Fn("Select"),K=B(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:w.value.placeholder}),Y=Rn(e,["items","options"]),q=[],E=T([]),G=T([]),J=T(new Map),le=B(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:x}=e;return z=>({[u]:String(z),[x]:z})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),ee=B(()=>G.value.concat(E.value).concat(Y.value)),f=B(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:x}=e;return(z,R)=>{if(!R)return!1;const M=R[u];if(typeof M=="string")return et(z,M);const O=R[x];return typeof O=="string"?et(z,O):typeof O=="number"?et(z,String(O)):!1}}),v=B(()=>{if(e.remote)return Y.value;{const{value:t}=ee,{value:u}=C;return!u.length||!e.filterable?t:jn(t,f.value,u,e.childrenField)}});function k(t){const u=e.remote,{value:x}=J,{value:z}=$,{value:R}=le,M=[];return t.forEach(O=>{if(z.has(O))M.push(z.get(O));else if(u&&x.has(O))M.push(x.get(O));else if(R){const X=R(O);X&&M.push(X)}}),M}const V=B(()=>{if(e.multiple){const{value:t}=y;return Array.isArray(t)?k(t):[]}return null}),W=B(()=>{const{value:t}=y;return!e.multiple&&!Array.isArray(t)?t===null?null:k([t])[0]||null:null}),D=sn(e),{mergedSizeRef:I,mergedDisabledRef:H,mergedStatusRef:i}=D;function c(t,u){const{onChange:x,"onUpdate:value":z,onUpdateValue:R}=e,{nTriggerFormChange:M,nTriggerFormInput:O}=D;x&&ie(x,t,u),R&&ie(R,t,u),z&&ie(z,t,u),b.value=t,M(),O()}function N(t){const{onBlur:u}=e,{nTriggerFormBlur:x}=D;u&&ie(u,t),x()}function Q(){const{onClear:t}=e;t&&ie(t)}function ae(t){const{onFocus:u,showOnFocus:x}=e,{nTriggerFormFocus:z}=D;u&&ie(u,t),z(),x&&se()}function Te(t){const{onSearch:u}=e;u&&ie(u,t)}function Fe(t){const{onScroll:u}=e;u&&ie(u,t)}function be(){var t;const{remote:u,multiple:x}=e;if(u){const{value:z}=J;if(x){const{valueField:R}=e;(t=V.value)===null||t===void 0||t.forEach(M=>{z.set(M[R],M)})}else{const R=W.value;R&&z.set(R[e.valueField],R)}}}function pe(t){const{onUpdateShow:u,"onUpdate:show":x}=e;u&&ie(u,t),x&&ie(x,t),A.value=t}function se(){H.value||(pe(!0),A.value=!0,e.filterable&&_e())}function te(){pe(!1)}function me(){C.value="",G.value=q}const ue=T(!1);function Re(){e.filterable&&(ue.value=!0)}function fe(){e.filterable&&(ue.value=!1,p.value||me())}function he(){H.value||(p.value?e.filterable?_e():te():se())}function Oe(t){var u,x;!((x=(u=S.value)===null||u===void 0?void 0:u.selfRef)===null||x===void 0)&&x.contains(t.relatedTarget)||(m.value=!1,N(t),te())}function Me(t){ae(t),m.value=!0}function ke(t){m.value=!0}function we(t){var u;!((u=F.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(m.value=!1,N(t),te())}function ye(){var t;(t=F.value)===null||t===void 0||t.focus(),te()}function oe(t){var u;p.value&&(!((u=F.value)===null||u===void 0)&&u.$el.contains(hn(t))||te())}function a(t){if(!Array.isArray(t))return[];if(le.value)return Array.from(t);{const{remote:u}=e,{value:x}=$;if(u){const{value:z}=J;return t.filter(R=>x.has(R)||z.has(R))}else return t.filter(z=>x.has(z))}}function g(t){U(t.rawNode)}function U(t){if(H.value)return;const{tag:u,remote:x,clearFilterAfterSelect:z,valueField:R}=e;if(u&&!x){const{value:M}=G,O=M[0]||null;if(O){const X=E.value;X.length?X.push(O):E.value=[O],G.value=q}}if(x&&J.value.set(t[R],t),e.multiple){const M=a(y.value),O=M.findIndex(X=>X===t[R]);if(~O){if(M.splice(O,1),u&&!x){const X=Pe(t[R]);~X&&(E.value.splice(X,1),z&&(C.value=""))}}else M.push(t[R]),z&&(C.value="");c(M,k(M))}else{if(u&&!x){const M=Pe(t[R]);~M?E.value=[E.value[M]]:E.value=q}Be(),te(),c(t[R],t)}}function Pe(t){return E.value.findIndex(x=>x[e.valueField]===t)}function je(t){p.value||se();const{value:u}=t.target;C.value=u;const{tag:x,remote:z}=e;if(Te(u),x&&!z){if(!u){G.value=q;return}const{onCreate:R}=e,M=R?R(u):{[e.labelField]:u,[e.valueField]:u},{valueField:O}=e;Y.value.some(X=>X[O]===M[O])||E.value.some(X=>X[O]===M[O])?G.value=q:G.value=[M]}}function He(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&te(),Q(),u?c([],[]):c(null,null)}function Ue(t){!Ve(t,"action")&&!Ve(t,"empty")&&t.preventDefault()}function Ke(t){Fe(t)}function Ie(t){var u,x,z,R,M;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=F.value)===null||u===void 0)&&u.isComposing)){if(p.value){const O=(x=S.value)===null||x===void 0?void 0:x.getPendingTmNode();O?g(O):e.filterable||(te(),Be())}else if(se(),e.tag&&ue.value){const O=G.value[0];if(O){const X=O[e.valueField],{value:Ae}=y;e.multiple&&Array.isArray(Ae)&&Ae.some(Ye=>Ye===X)||U(O)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((z=S.value)===null||z===void 0||z.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(R=S.value)===null||R===void 0||R.next():se();break;case"Escape":p.value&&(vn(t),te()),(M=F.value)===null||M===void 0||M.focus();break}}function Be(){var t;(t=F.value)===null||t===void 0||t.focus()}function _e(){var t;(t=F.value)===null||t===void 0||t.focusInput()}function qe(){var t;p.value&&((t=L.value)===null||t===void 0||t.syncPosition())}be(),Se(Z(e,"options"),be);const Ge={focus:()=>{var t;(t=F.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=F.value)===null||t===void 0||t.blur()}},$e=B(()=>{const{self:{menuBoxShadow:t}}=h.value;return{"--n-menu-box-shadow":t}}),ce=s?it("select",void 0,$e,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:i,mergedClsPrefix:n,mergedBordered:o,namespace:r,treeMate:_,isMounted:dn(),triggerRef:F,menuRef:S,pattern:C,uncontrolledShow:A,mergedShow:p,adjustedTo:ot(e),uncontrolledValue:b,mergedValue:y,followerRef:L,localizedPlaceholder:K,selectedOption:W,selectedOptions:V,mergedSize:I,mergedDisabled:H,focused:m,activeWithoutMenuOpen:ue,inlineThemeDisabled:s,onTriggerInputFocus:Re,onTriggerInputBlur:fe,handleTriggerOrMenuResize:qe,handleMenuFocus:ke,handleMenuBlur:we,handleMenuTabOut:ye,handleTriggerClick:he,handleToggle:g,handleDeleteOption:U,handlePatternInput:je,handleClear:He,handleTriggerBlur:Oe,handleTriggerFocus:Me,handleKeydown:Ie,handleMenuAfterLeave:me,handleMenuClickOutside:oe,handleMenuScroll:Ke,handleMenuKeydown:Ie,handleMenuMousedown:Ue,mergedTheme:h,cssVars:s?void 0:$e,themeClass:ce?.themeClass,onRender:ce?.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(yn,null,{default:()=>[d(xn,null,{default:()=>d(Vn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(Sn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ot.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(yt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),un(d(Dn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,s;return[(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)]},action:()=>{var r,s;return[(s=(r=this.$slots).action)===null||s===void 0?void 0:s.call(r)]}}),this.displayDirective==="show"?[[cn,this.mergedShow],[ut,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ut,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Zn=gn("testerStore",()=>{const e=bn(),n=T([]),o=B(()=>n.value.length===0);async function r(l,y,m){const C=await e.addTester(l,y,m),_={firstname:l!=""?l:void 0,lastname:y!=""?y:void 0,email:m!=""?m:void 0,testerUUID:C};n.value.push(_)}async function s(l){await e.deleteTester(l),n.value=n.value.filter(y=>y.testerUUID!==l)}async function h(){n.value=await e.getTesterList()}function b(l){return n.value.find(y=>y.testerUUID===l)}return{testers:n,isEmpty:o,addTester:r,deleteTester:s,fetchTesters:h,readDetails:b}});export{An as F,Jn as N,Bn as V,Dn as a,Wn as c,kn as g,Je as m,Zn as u};
