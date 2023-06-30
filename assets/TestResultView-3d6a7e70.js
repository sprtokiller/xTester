import{_ as jt,a as Ut}from"./LoadingHeader.vue_vue_type_script_setup_true_lang-044d8db9.js";import{b0 as Ft,e as U,k as E,ba as Ot,h as c,bb as Ht,bc as re,bd as Mt,g as s,j as z,v as S,x as I,I as Vt,l as Z,q as k,u as J,p as xe,V as qe,s as ye,f as we,be as Xt,A as q,bf as qt,z as X,Z as Ke,D as Kt,bg as Ye,aC as Yt,C as Gt,i as oe,aP as Ce,bh as Ee,bi as Jt,y as Ge,a7 as Zt,F as he,B as Qt,a8 as en,bj as tn,H as nn,b1 as ce,ax as de,J as Je,aa as ie,at as ke,bk as an,Q as fe,ad as B,bl as rn,bm as on,bn as ln,a9 as Ae,Y as sn,o as K,R as ne,c as ue,b as M,a as L,w as j,d as De,S as D,a0 as cn,a3 as Be,a1 as dn}from"./index-e7fb9abe.js";import{u as fn,N as Le}from"./testerStore-c87dd1df.js";import{f as un}from"./Icon-6e576580.js";import{e as bn,f as Ne,u as Ze,o as pn}from"./Popover-045cd7c7.js";import{C as mn}from"./ChevronRight-dc671563.js";import{A as vn}from"./Add-402bf828.js";import{u as We}from"./use-compitable-bbfa6a86.js";import{u as hn}from"./use-message-450c0545.js";import{a as gn}from"./headers-de3dd4d5.js";import"./Spin-ff46ac0b.js";import"./Suffix-92a8883e.js";import"./create-aae2c7cf.js";let je=!1;function xn(){if(Ft&&window.CSS&&!je&&(je=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const yn=Ne(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ne("&::-webkit-scrollbar",{width:0,height:0})]),wn=U({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const l=Ot();return yn.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:bn,ssr:l}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var f;(f=e.value)===null||f===void 0||f.scrollTo(...r)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Cn=/\s/;function zn(e){for(var t=e.length;t--&&Cn.test(e.charAt(t)););return t}var Sn=/^\s+/;function Rn(e){return e&&e.slice(0,zn(e)+1).replace(Sn,"")}var Ue=0/0,$n=/^[-+]0x[0-9a-f]+$/i,Tn=/^0b[01]+$/i,_n=/^0o[0-7]+$/i,Pn=parseInt;function Fe(e){if(typeof e=="number")return e;if(Ht(e))return Ue;if(re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Rn(e);var l=Tn.test(e);return l||_n.test(e)?Pn(e.slice(2),l?2:8):$n.test(e)?Ue:+e}var In=function(){return Mt.Date.now()};const be=In;var En="Expected a function",kn=Math.max,An=Math.min;function Dn(e,t,l){var d,r,f,b,p,m,x=0,y=!1,h=!1,C=!0;if(typeof e!="function")throw new TypeError(En);t=Fe(t)||0,re(l)&&(y=!!l.leading,h="maxWait"in l,f=h?kn(Fe(l.maxWait)||0,t):f,C="trailing"in l?!!l.trailing:C);function R(T){var N=d,F=r;return d=r=void 0,x=T,b=e.apply(F,N),b}function $(T){return x=T,p=setTimeout(_,t),y?R(T):b}function P(T){var N=T-m,F=T-x,O=t-N;return h?An(O,f-F):O}function v(T){var N=T-m,F=T-x;return m===void 0||N>=t||N<0||h&&F>=f}function _(){var T=be();if(v(T))return a(T);p=setTimeout(_,P(T))}function a(T){return p=void 0,C&&d?R(T):(d=r=void 0,b)}function i(){p!==void 0&&clearTimeout(p),x=0,d=m=r=p=void 0}function u(){return p===void 0?b:a(be())}function A(){var T=be(),N=v(T);if(d=arguments,r=this,m=T,N){if(p===void 0)return $(m);if(h)return clearTimeout(p),p=setTimeout(_,t),R(m)}return p===void 0&&(p=setTimeout(_,t)),b}return A.cancel=i,A.flush=u,A}var Bn="Expected a function";function pe(e,t,l){var d=!0,r=!0;if(typeof e!="function")throw new TypeError(Bn);return re(l)&&(d="leading"in l?!!l.leading:d,r="trailing"in l?!!l.trailing:r),Dn(e,t,{leading:d,maxWait:t,trailing:r})}const Ln=U({name:"ChevronLeft",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Nn=s("collapse","width: 100%;",[s("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[z("disabled",[S("header","cursor: not-allowed;",[S("header-main",`
 color: var(--n-title-text-color-disabled);
 `),s("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),s("collapse-item","margin-left: 32px;"),I("&:first-child","margin-top: 0;"),I("&:first-child >",[S("header","padding-top: 0;")]),z("left-arrow-placement",[S("header",[s("collapse-item-arrow","margin-right: 4px;")])]),z("right-arrow-placement",[S("header",[s("collapse-item-arrow","margin-left: 4px;")])]),S("content-wrapper",[S("content-inner","padding-top: 16px;"),Vt({duration:"0.15s"})]),z("active",[S("header",[z("active",[s("collapse-item-arrow","transform: rotate(90deg);")])])]),I("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),S("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[S("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),S("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),s("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),Wn=Object.assign(Object.assign({},J.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Qe=we("n-collapse"),jn=U({name:"Collapse",props:Wn,setup(e,{slots:t}){const{mergedClsPrefixRef:l,inlineThemeDisabled:d,mergedRtlRef:r}=Z(e),f=E(e.defaultExpandedNames),b=k(()=>e.expandedNames),p=Ze(b,f),m=J("Collapse","-collapse",Nn,Xt,e,l);function x(P){const{"onUpdate:expandedNames":v,onUpdateExpandedNames:_,onExpandedNamesChange:a}=e;_&&q(_,P),v&&q(v,P),a&&q(a,P),f.value=P}function y(P){const{onItemHeaderClick:v}=e;v&&q(v,P)}function h(P,v,_){const{accordion:a}=e,{value:i}=p;if(a)P?(x([v]),y({name:v,expanded:!0,event:_})):(x([]),y({name:v,expanded:!1,event:_}));else if(!Array.isArray(i))x([v]),y({name:v,expanded:!0,event:_});else{const u=i.slice(),A=u.findIndex(T=>v===T);~A?(u.splice(A,1),x(u),y({name:v,expanded:!1,event:_})):(u.push(v),x(u),y({name:v,expanded:!0,event:_}))}}xe(Qe,{props:e,mergedClsPrefixRef:l,expandedNamesRef:p,slots:t,toggleItem:h});const C=qe("Collapse",r,l),R=k(()=>{const{common:{cubicBezierEaseInOut:P},self:{titleFontWeight:v,dividerColor:_,titleTextColor:a,titleTextColorDisabled:i,textColor:u,arrowColor:A,fontSize:T,titleFontSize:N,arrowColorDisabled:F,itemMargin:O}}=m.value;return{"--n-font-size":T,"--n-bezier":P,"--n-text-color":u,"--n-divider-color":_,"--n-title-font-size":N,"--n-title-text-color":a,"--n-title-text-color-disabled":i,"--n-title-font-weight":v,"--n-arrow-color":A,"--n-arrow-color-disabled":F,"--n-item-margin":O}}),$=d?ye("collapse",void 0,R,e):void 0;return{rtlEnabled:C,mergedTheme:m,mergedClsPrefix:l,cssVars:d?void 0:R,themeClass:$?.themeClass,onRender:$?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Un=U({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:qt(X(e,"show"))}},render(){return c(Kt,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:l,clsPrefix:d}=this,r=t==="show"&&l,f=c("div",{class:`${d}-collapse-item__content-wrapper`},c("div",{class:`${d}-collapse-item__content-inner`},this.$slots));return r?Ke(f,[[Ye,e]]):e?f:null}})}}),Fn={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},On=U({name:"CollapseItem",props:Fn,setup(e){const{mergedRtlRef:t}=Z(e),l=Yt(),d=Gt(()=>{var h;return(h=e.name)!==null&&h!==void 0?h:l}),r=oe(Qe);r||Ce("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:f,props:b,mergedClsPrefixRef:p,slots:m}=r,x=k(()=>{const{value:h}=f;if(Array.isArray(h)){const{value:C}=d;return!~h.findIndex(R=>R===C)}else if(h){const{value:C}=d;return C!==h}return!0});return{rtlEnabled:qe("Collapse",t,p),collapseSlots:m,randomName:l,mergedClsPrefix:p,collapsed:x,mergedDisplayDirective:k(()=>{const{displayDirective:h}=e;return h||b.displayDirective}),arrowPlacement:k(()=>b.arrowPlacement),handleClick(h){r&&!e.disabled&&r.toggleItem(x.value,d.value,h)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:l,collapsed:d,mergedDisplayDirective:r,mergedClsPrefix:f,disabled:b}=this,p=Ee(t.header,{collapsed:d},()=>[this.title]),m=t["header-extra"]||e["header-extra"],x=t.arrow||e.arrow;return c("div",{class:[`${f}-collapse-item`,`${f}-collapse-item--${l}-arrow-placement`,b&&`${f}-collapse-item--disabled`,!d&&`${f}-collapse-item--active`]},c("div",{class:[`${f}-collapse-item__header`,!d&&`${f}-collapse-item__header--active`]},c("div",{class:`${f}-collapse-item__header-main`,onClick:this.handleClick},l==="right"&&p,c("div",{class:`${f}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Ee(x,{collapsed:d},()=>{var y;return[c(Ge,{clsPrefix:f},{default:(y=e.expandIcon)!==null&&y!==void 0?y:()=>this.rtlEnabled?c(Ln,null):c(mn,null)})]})),l==="left"&&p),Jt(m,{collapsed:d},y=>c("div",{class:`${f}-collapse-item__header-extra`,onClick:this.handleClick},y))),c(Un,{clsPrefix:f,displayDirective:r,show:!d},t))}}),ze=we("n-tabs"),et={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},me=U({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:et,setup(e){const t=oe(ze,null);return t||Ce("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Hn=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},tn(et,["displayDirective"])),ge=U({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Hn,setup(e){const{mergedClsPrefixRef:t,valueRef:l,typeRef:d,closableRef:r,tabStyleRef:f,tabChangeIdRef:b,onBeforeLeaveRef:p,triggerRef:m,handleAdd:x,activateTab:y,handleClose:h}=oe(ze);return{trigger:m,mergedClosable:k(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?r.value:C}),style:f,clsPrefix:t,value:l,type:d,handleClose(C){C.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:C}=e,R=++b.id;if(C!==l.value){const{value:$}=p;$?Promise.resolve($(e.name,l.value)).then(P=>{P&&b.id===R&&y(C)}):y(C)}}}},render(){const{internalAddable:e,clsPrefix:t,name:l,disabled:d,label:r,tab:f,value:b,mergedClosable:p,style:m,trigger:x,$slots:{default:y}}=this,h=r??f;return c("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${t}-tabs-tab-pad`}):null,c("div",Object.assign({key:l,"data-name":l,"data-disabled":d?!0:void 0},Zt({class:[`${t}-tabs-tab`,b===l&&`${t}-tabs-tab--active`,d&&`${t}-tabs-tab--disabled`,p&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${t}-tabs-tab__label`},e?c(he,null,c("div",{class:`${t}-tabs-tab__height-placeholder`}," "),c(Ge,{clsPrefix:t},{default:()=>c(vn,null)})):y?y():typeof h=="object"?h:Qt(h??l)),p&&this.type==="card"?c(en,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:d}):null))}}),Mn=s("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[z("segment-type",[s("tabs-rail",[I("&.transition-disabled","color: red;",[s("tabs-tab",`
 transition: none;
 `)])])]),z("left, right",`
 flex-direction: row;
 `,[s("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),s("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),z("right",`
 flex-direction: row-reverse;
 `,[s("tabs-bar",`
 left: 0;
 `)]),z("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[s("tabs-bar",`
 top: 0;
 `)]),s("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[s("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[s("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),I("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),z("flex",[s("tabs-nav",{width:"100%"},[s("tabs-wrapper",{width:"100%"},[s("tabs-tab",{marginRight:0})])])]),s("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[S("prefix, suffix",`
 display: flex;
 align-items: center;
 `),S("prefix","padding-right: 16px;"),S("suffix","padding-left: 16px;")]),s("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[z("shadow-before",[I("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),z("shadow-after",[I("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[I("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),I("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),I("&::before",`
 left: 0;
 `),I("&::after",`
 right: 0;
 `)]),s("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),s("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),s("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),s("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("disabled",{cursor:"not-allowed"}),S("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),S("label",`
 display: flex;
 align-items: center;
 `)]),s("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[I("&.transition-disabled",`
 transition: none;
 `),z("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),s("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),s("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[I("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),I("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),I("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),I("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),I("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),s("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),z("line-type, bar-type",[s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[I("&:hover",{color:"var(--n-tab-text-color-hover)"}),z("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),z("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),s("tabs-nav",[z("line-type",[S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),z("card-type",[S("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),s("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[z("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[S("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),nn("disabled",[I("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),z("closable","padding-right: 6px;"),z("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),z("disabled","color: var(--n-tab-text-color-disabled);")]),s("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),z("left, right",[s("tabs-wrapper",`
 flex-direction: column;
 `,[s("tabs-tab-wrapper",`
 flex-direction: column;
 `,[s("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),s("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),z("left",[s("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),z("right",[s("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),z("bottom",[s("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),Vn=Object.assign(Object.assign({},J.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Xn=U({name:"Tabs",props:Vn,setup(e,{slots:t}){var l,d,r,f;const{mergedClsPrefixRef:b,inlineThemeDisabled:p}=Z(e),m=J("Tabs","-tabs",Mn,an,e,b),x=E(null),y=E(null),h=E(null),C=E(null),R=E(null),$=E(!0),P=E(!0),v=We(e,["labelSize","size"]),_=We(e,["activeName","value"]),a=E((d=(l=_.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&d!==void 0?d:t.default?(f=(r=ce(t.default())[0])===null||r===void 0?void 0:r.props)===null||f===void 0?void 0:f.name:null),i=Ze(_,a),u={id:0},A=k(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});de(i,()=>{u.id=0,O(),Se()});function T(){var n;const{value:o}=i;return o===null?null:(n=x.value)===null||n===void 0?void 0:n.querySelector(`[data-name="${o}"]`)}function N(n){if(e.type==="card")return;const{value:o}=y;if(o&&n){const g=`${b.value}-tabs-bar--disabled`,{barWidth:w,placement:H}=e;if(n.dataset.disabled==="true"?o.classList.add(g):o.classList.remove(g),["top","bottom"].includes(H)){if(F(["top","maxHeight","height"]),typeof w=="number"&&n.offsetWidth>=w){const W=Math.floor((n.offsetWidth-w)/2)+n.offsetLeft;o.style.left=`${W}px`,o.style.maxWidth=`${w}px`}else o.style.left=`${n.offsetLeft}px`,o.style.maxWidth=`${n.offsetWidth}px`;o.style.width="8192px",o.offsetWidth}else{if(F(["left","maxWidth","width"]),typeof w=="number"&&n.offsetHeight>=w){const W=Math.floor((n.offsetHeight-w)/2)+n.offsetTop;o.style.top=`${W}px`,o.style.maxHeight=`${w}px`}else o.style.top=`${n.offsetTop}px`,o.style.maxHeight=`${n.offsetHeight}px`;o.style.height="8192px",o.offsetHeight}}}function F(n){const{value:o}=y;if(o)for(const g of n)o.style[g]=""}function O(){if(e.type==="card")return;const n=T();n&&N(n)}function Se(n){var o;const g=(o=R.value)===null||o===void 0?void 0:o.$el;if(!g)return;const w=T();if(!w)return;const{scrollLeft:H,offsetWidth:W}=g,{offsetLeft:G,offsetWidth:te}=w;H>G?g.scrollTo({top:0,left:G,behavior:"smooth"}):G+te>H+W&&g.scrollTo({top:0,left:G+te-W,behavior:"smooth"})}const Q=E(null);let le=0,V=null;function nt(n){const o=Q.value;if(o){le=n.getBoundingClientRect().height;const g=`${le}px`,w=()=>{o.style.height=g,o.style.maxHeight=g};V?(w(),V(),V=null):V=w}}function at(n){const o=Q.value;if(o){const g=n.getBoundingClientRect().height,w=()=>{document.body.offsetHeight,o.style.maxHeight=`${g}px`,o.style.height=`${Math.max(le,g)}px`};V?(V(),V=null,w()):V=w}}function rt(){const n=Q.value;n&&(n.style.maxHeight="",n.style.height="")}const Re={value:[]},$e=E("next");function it(n){const o=i.value;let g="next";for(const w of Re.value){if(w===o)break;if(w===n){g="prev";break}}$e.value=g,ot(n)}function ot(n){const{onActiveNameChange:o,onUpdateValue:g,"onUpdate:value":w}=e;o&&q(o,n),g&&q(g,n),w&&q(w,n),a.value=n}function lt(n){const{onClose:o}=e;o&&q(o,n)}function Te(){const{value:n}=y;if(!n)return;const o="transition-disabled";n.classList.add(o),O(),n.classList.remove(o)}let _e=0;function st(n){var o;if(n.contentRect.width===0&&n.contentRect.height===0||_e===n.contentRect.width)return;_e=n.contentRect.width;const{type:g}=e;(g==="line"||g==="bar")&&Te(),g!=="segment"&&se((o=R.value)===null||o===void 0?void 0:o.$el)}const ct=pe(st,64);de([()=>e.justifyContent,()=>e.size],()=>{fe(()=>{const{type:n}=e;(n==="line"||n==="bar")&&Te()})});const ee=E(!1);function dt(n){var o;const{target:g,contentRect:{width:w}}=n,H=g.parentElement.offsetWidth;if(!ee.value)H<w&&(ee.value=!0);else{const{value:W}=C;if(!W)return;H-w>W.$el.offsetWidth&&(ee.value=!1)}se((o=R.value)===null||o===void 0?void 0:o.$el)}const ft=pe(dt,64);function ut(){const{onAdd:n}=e;n&&n(),fe(()=>{const o=T(),{value:g}=R;!o||!g||g.scrollTo({left:o.offsetLeft,top:0,behavior:"smooth"})})}function se(n){if(!n)return;const{scrollLeft:o,scrollWidth:g,offsetWidth:w}=n;$.value=o<=0,P.value=o+w>=g}const bt=pe(n=>{se(n.target)},64);xe(ze,{triggerRef:X(e,"trigger"),tabStyleRef:X(e,"tabStyle"),paneClassRef:X(e,"paneClass"),paneStyleRef:X(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:X(e,"type"),closableRef:X(e,"closable"),valueRef:i,tabChangeIdRef:u,onBeforeLeaveRef:X(e,"onBeforeLeave"),activateTab:it,handleClose:lt,handleAdd:ut}),pn(()=>{O(),Se()}),Je(()=>{const{value:n}=h;if(!n||["left","right"].includes(e.placement))return;const{value:o}=b,g=`${o}-tabs-nav-scroll-wrapper--shadow-before`,w=`${o}-tabs-nav-scroll-wrapper--shadow-after`;$.value?n.classList.remove(g):n.classList.add(g),P.value?n.classList.remove(w):n.classList.add(w)});const Pe=E(null);de(i,()=>{if(e.type==="segment"){const n=Pe.value;n&&fe(()=>{n.classList.add("transition-disabled"),n.offsetWidth,n.classList.remove("transition-disabled")})}});const pt={syncBarPosition:()=>{O()}},Ie=k(()=>{const{value:n}=v,{type:o}=e,g={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[o],w=`${n}${g}`,{self:{barColor:H,closeIconColor:W,closeIconColorHover:G,closeIconColorPressed:te,tabColor:mt,tabBorderColor:vt,paneTextColor:ht,tabFontWeight:gt,tabBorderRadius:xt,tabFontWeightActive:yt,colorSegment:wt,fontWeightStrong:Ct,tabColorSegment:zt,closeSize:St,closeIconSize:Rt,closeColorHover:$t,closeColorPressed:Tt,closeBorderRadius:_t,[B("panePadding",n)]:Pt,[B("tabPadding",w)]:It,[B("tabPaddingVertical",w)]:Et,[B("tabGap",w)]:kt,[B("tabTextColor",o)]:At,[B("tabTextColorActive",o)]:Dt,[B("tabTextColorHover",o)]:Bt,[B("tabTextColorDisabled",o)]:Lt,[B("tabFontSize",n)]:Nt},common:{cubicBezierEaseInOut:Wt}}=m.value;return{"--n-bezier":Wt,"--n-color-segment":wt,"--n-bar-color":H,"--n-tab-font-size":Nt,"--n-tab-text-color":At,"--n-tab-text-color-active":Dt,"--n-tab-text-color-disabled":Lt,"--n-tab-text-color-hover":Bt,"--n-pane-text-color":ht,"--n-tab-border-color":vt,"--n-tab-border-radius":xt,"--n-close-size":St,"--n-close-icon-size":Rt,"--n-close-color-hover":$t,"--n-close-color-pressed":Tt,"--n-close-border-radius":_t,"--n-close-icon-color":W,"--n-close-icon-color-hover":G,"--n-close-icon-color-pressed":te,"--n-tab-color":mt,"--n-tab-font-weight":gt,"--n-tab-font-weight-active":yt,"--n-tab-padding":It,"--n-tab-padding-vertical":Et,"--n-tab-gap":kt,"--n-pane-padding":Pt,"--n-font-weight-strong":Ct,"--n-tab-color-segment":zt}}),Y=p?ye("tabs",k(()=>`${v.value[0]}${e.type[0]}`),Ie,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:i,renderedNames:new Set,tabsRailElRef:Pe,tabsPaneWrapperRef:Q,tabsElRef:x,barElRef:y,addTabInstRef:C,xScrollInstRef:R,scrollWrapperElRef:h,addTabFixed:ee,tabWrapperStyle:A,handleNavResize:ct,mergedSize:v,handleScroll:bt,handleTabsResize:ft,cssVars:p?void 0:Ie,themeClass:Y?.themeClass,animationDirection:$e,renderNameListRef:Re,onAnimationBeforeLeave:nt,onAnimationEnter:at,onAnimationAfterEnter:rt,onRender:Y?.onRender},pt)},render(){const{mergedClsPrefix:e,type:t,placement:l,addTabFixed:d,addable:r,mergedSize:f,renderNameListRef:b,onRender:p,$slots:{default:m,prefix:x,suffix:y}}=this;p?.();const h=m?ce(m()).filter(a=>a.type.__TAB_PANE__===!0):[],C=m?ce(m()).filter(a=>a.type.__TAB__===!0):[],R=!C.length,$=t==="card",P=t==="segment",v=!$&&!P&&this.justifyContent;b.value=[];const _=()=>{const a=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},v?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),R?h.map((i,u)=>(b.value.push(i.props.name),ve(c(ge,Object.assign({},i.props,{internalCreatedByPane:!0,internalLeftPadded:u!==0&&(!v||v==="center"||v==="start"||v==="end")}),i.children?{default:i.children.tab}:void 0)))):C.map((i,u)=>(b.value.push(i.props.name),ve(u!==0&&!v?Me(i):i))),!d&&r&&$?He(r,(R?h.length:C.length)!==0):null,v?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&r?c(ke,{onResize:this.handleTabsResize},{default:()=>a}):a,$?c("div",{class:`${e}-tabs-pad`}):null,$?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${f}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${l}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${l}`,`${e}-tabs-nav`]},ie(x,a=>a&&c("div",{class:`${e}-tabs-nav__prefix`},a)),P?c("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},R?h.map((a,i)=>(b.value.push(a.props.name),c(ge,Object.assign({},a.props,{internalCreatedByPane:!0,internalLeftPadded:i!==0}),a.children?{default:a.children.tab}:void 0))):C.map((a,i)=>(b.value.push(a.props.name),i===0?a:Me(a)))):c(ke,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(l)?c(wn,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:_}):c("div",{class:`${e}-tabs-nav-y-scroll`},_()))}),d&&r&&$?He(r,!0):null,ie(y,a=>a&&c("div",{class:`${e}-tabs-nav__suffix`},a))),R&&(this.animated?c("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Oe(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Oe(h,this.mergedValue,this.renderedNames)))}});function Oe(e,t,l,d,r,f,b){const p=[];return e.forEach(m=>{const{name:x,displayDirective:y,"display-directive":h}=m.props,C=$=>y===$||h===$,R=t===x;if(m.key!==void 0&&(m.key=x),R||C("show")||C("show:lazy")&&l.has(x)){l.has(x)||l.add(x);const $=!C("if");p.push($?Ke(m,[[Ye,R]]):m)}}),b?c(rn,{name:`${b}-transition`,onBeforeLeave:d,onEnter:r,onAfterEnter:f},{default:()=>p}):p}function He(e,t){return c(ge,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Me(e){const t=on(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ve(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Ve=1.25,qn=s("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Ve};
`,[z("horizontal",`
 flex-direction: row;
 `,[I(">",[s("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[z("dashed-line-type",[I(">",[s("timeline-item-timeline",[S("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),I(">",[s("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[I(">",[S("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),s("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[S("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),z("right-placement",[s("timeline-item",[s("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),z("left-placement",[s("timeline-item",[s("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 left: 0;
 `)])]),s("timeline-item",`
 position: relative;
 `,[I("&:last-child",[s("timeline-item-timeline",[S("line",`
 display: none;
 `)]),s("timeline-item-content",[S("meta",`
 margin-bottom: 0;
 `)])]),s("timeline-item-content",[S("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),S("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),S("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),z("dashed-line-type",[s("timeline-item-timeline",[S("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),s("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Ve} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[S("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),S("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),S("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),Kn=Object.assign(Object.assign({},J.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),tt=we("n-timeline"),Xe=U({name:"Timeline",props:Kn,setup(e,{slots:t}){const{mergedClsPrefixRef:l}=Z(e),d=J("Timeline","-timeline",qn,ln,e,l);return xe(tt,{props:e,mergedThemeRef:d,mergedClsPrefixRef:l}),()=>{const{value:r}=l;return c("div",{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},t)}}}),Yn={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ae=U({name:"TimelineItem",props:Yn,setup(e){const t=oe(tt);t||Ce("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),xn();const{inlineThemeDisabled:l}=Z(),d=k(()=>{const{props:{size:f,iconSize:b},mergedThemeRef:p}=t,{type:m}=e,{self:{titleTextColor:x,contentTextColor:y,metaTextColor:h,lineColor:C,titleFontWeight:R,contentFontSize:$,[B("iconSize",f)]:P,[B("titleMargin",f)]:v,[B("titleFontSize",f)]:_,[B("circleBorder",m)]:a,[B("iconColor",m)]:i},common:{cubicBezierEaseInOut:u}}=p.value;return{"--n-bezier":u,"--n-circle-border":a,"--n-icon-color":i,"--n-content-font-size":$,"--n-content-text-color":y,"--n-line-color":C,"--n-meta-text-color":h,"--n-title-font-size":_,"--n-title-font-weight":R,"--n-title-margin":v,"--n-title-text-color":x,"--n-icon-size":un(b)||P}}),r=l?ye("timeline-item",k(()=>{const{props:{size:f,iconSize:b}}=t,{type:p}=e;return`${f[0]}${b||"a"}${p[0]}`}),d,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:l?void 0:d,themeClass:r?.themeClass,onRender:r?.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:l,$slots:d}=this;return l?.(),c("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},c("div",{class:`${e}-timeline-item-timeline`},c("div",{class:`${e}-timeline-item-timeline__line`}),ie(d.icon,r=>r?c("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},r):c("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),c("div",{class:`${e}-timeline-item-content`},ie(d.header,r=>r||this.title?c("div",{class:`${e}-timeline-item-content__title`},r||this.title):null),c("div",{class:`${e}-timeline-item-content__content`},Ae(d.default,()=>[this.content])),c("div",{class:`${e}-timeline-item-content__meta`},Ae(d.footer,()=>[this.time]))))}}),Gn={key:1},Jn={class:"row"},Zn={class:"col-12"},Qn={class:"d-flex align-items-center"},ea={class:"row"},ta=M("span",{style:{color:"var(--gray-2)","margin-right":"1.5rem"}}," View results as: ",-1),na={class:"row"},aa={class:"col-8"},ra={class:"col-4"},ga=U({__name:"TestResultView",props:{testUUID:{type:String,required:!0}},setup(e){const t=e,l=hn(),d=sn(),r=fn(),f=E(!0),b=E([]),p=E(""),m=E(0);Je(()=>{x(t.testUUID)});async function x(a){try{f.value=!0;const[,i]=await Promise.all([r.fetchTesters(),d.getTestResult(a)]);b.value=i,R.value.length>0&&(p.value=R.value[0])}catch(i){l.error(i instanceof Error?i.message:"Unknown error")}finally{f.value=!1}}function y(a){return a.completion||a.duration||a.response||a.scoreRaw||a.scoreScaled||a.success?"info":"default"}const h=k(()=>{if(b.value.length===0)return[];const a=[];for(let i=0;i<v.value[m.value].length;i++){const u=v.value[m.value][i];if(i>0&&u.verb.verbID===v.value[m.value][i-1].verb.verbID&&u.object.objectID===v.value[m.value][i-1].object.objectID){const A=[v.value[m.value][i-1],u];for(;i+1<v.value[m.value].length&&u.verb.verbID===v.value[m.value][i+1].verb.verbID&&u.object.objectID===v.value[m.value][i+1].object.objectID;)A.push(v.value[m.value][++i]);a.pop(),a.push(A)}else a.push(u)}return a}),C=k(()=>b.value.length===0?[]:b.value.filter(a=>a.testerUUID===p.value).sort((a,i)=>new Date(a.timestamp).getTime()-new Date(i.timestamp).getTime())),R=k(()=>{if(b.value.length===0)return[];const a=b.value.map(i=>i.testerUUID);return[...new Set(a)]}),$=k(()=>{if(b.value.length===0)return[];var a=1;return R.value.map(i=>r.readDetails(i)??{testerUUID:i,firstname:"Anonymous",lastname:"Tester"+a++})}),P=k(()=>b.value.length===0?[]:$.value.map(a=>({label:a.firstname+" "+a.lastname,value:a.testerUUID}))),v=k(()=>{if(b.value.length===0)return[];const a=[];let i=[];return C.value.map(u=>{u.verb.display==="Started"&&u.object.name==="Course"?i.length>0&&(a.push(i),i=[]):i.push(u)}),i.length>0&&a.push(i),a}),_=k(()=>{if(b.value.length===0)return[];const a=[];return v.value.map((i,u)=>{a.push({label:`Session #${u+1}: ${new Date(i[0].timestamp).toLocaleString()} (${i.length} record${i.length>1?"s":""})`,value:u})}),a});return(a,i)=>f.value?(K(),ne(Ut,{key:0})):(K(),ue("div",Gn,[M("div",Jn,[M("div",Zn,[M("div",Qn,[L(jt),L(D(gn),{class:"h3-item-name"},{default:j(()=>[De("Test results")]),_:1})])])]),M("div",ea,[L(D(Xn),{type:"line",animated:"",placement:"top",style:{width:"100%"}},{prefix:j(()=>[ta]),default:j(()=>[L(D(me),{name:"raw",tab:"Raw"},{default:j(()=>[M("pre",null,cn(JSON.stringify(h.value,null,2)),1)]),_:1}),L(D(me),{name:"master-flow",tab:"Master Flow"},{default:j(()=>[De(" Master flow ")]),_:1}),L(D(me),{name:"tester-timeline",tab:"Tester timeline"},{default:j(()=>[M("div",na,[M("div",aa,[L(D(Xe),null,{default:j(()=>[L(D(ae),{type:"success",title:"START"}),(K(!0),ue(he,null,Be(h.value,u=>(K(),ne(D(ae),{key:"recordUUID"in u?u.recordUUID:u[0].recordUUID,type:"recordUUID"in u?y(u):"warning",title:"recordUUID"in u?u.verb.display+": "+u.object.name:u[0].verb.display+": "+u[0].object.name,time:"recordUUID"in u?new Date(u.timestamp).toLocaleString():void 0},{default:j(()=>[Array.isArray(u)?(K(),ne(D(jn),{key:0,"arrow-placement":"right"},{default:j(()=>[L(D(On),{title:"Total "+u.length+"x times",name:"1"},{default:j(()=>[L(D(Xe),null,{default:j(()=>[(K(!0),ue(he,null,Be(u,A=>(K(),ne(D(ae),{key:A.recordUUID,type:y(A),time:new Date(A.timestamp).toLocaleString()},null,8,["type","time"]))),128))]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)):dn("",!0)]),_:2},1032,["type","title","time"]))),128)),L(D(ae),{type:"error",title:"END"})]),_:1})]),M("div",ra,[L(D(Le),{value:p.value,"onUpdate:value":i[0]||(i[0]=u=>p.value=u),filterable:"",placeholder:"Please select a tester",options:P.value},null,8,["value","options"]),L(D(Le),{value:m.value,"onUpdate:value":i[1]||(i[1]=u=>m.value=u),filterable:"",placeholder:"Please select a session",options:_.value},null,8,["value","options"])])])]),_:1})]),_:1})])]))}});export{ga as default};
