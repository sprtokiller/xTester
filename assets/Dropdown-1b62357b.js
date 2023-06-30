import{N as ue,p as re,V as Se,a as Ne,c as Pe,r as Re,u as ke}from"./Popover-34c164ec.js";import{k as $,ax as ce,e as D,u as J,aH as Ke,q as m,h as a,f as ie,i as F,aI as pe,p as H,C as V,aD as Ie,a7 as fe,B as W,au as Oe,F as Ce,aJ as _e,aK as Te,aL as $e,g as x,ay as De,x as L,H as le,j as k,v as T,z as K,l as je,aM as ze,A as ne,ad as A,s as Ae,E as Fe}from"./index-ecfabf3d.js";import{N as Be}from"./Icon-07367168.js";import{C as Me}from"./ChevronRight-0b4f2ec1.js";import{h as ae,c as Ee}from"./create-aae2c7cf.js";import{u as Le}from"./use-keyboard-4a570dec.js";import{c as He}from"./create-ref-setter-f485918b.js";function Ue(e,o,i){if(!o)return e;const r=$(e.value);let t=null;return ce(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}const qe=Object.assign(Object.assign({},re),J.props),so=D({name:"Tooltip",props:qe,__popover__:!0,setup(e){const o=J("Tooltip","-tooltip",void 0,Ke,e),i=$(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(t){i.value.setShow(t)}}),{popoverRef:i,mergedTheme:o,popoverThemeOverrides:m(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return a(ue,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ve=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return a("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),de=ie("n-dropdown-menu"),X=ie("n-dropdown"),se=ie("n-dropdown-option");function te(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Ge(e){return e.type==="group"}function he(e){return e.type==="divider"}function Ve(e){return e.type==="render"}const be=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=F(X),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:P,nodePropsRef:O,menuPropsRef:B}=o,w=F(se,null),C=F(de),U=F(pe),Q=m(()=>e.tmNode.rawNode),q=m(()=>{const{value:l}=I;return te(e.tmNode.rawNode,l)}),Y=m(()=>{const{disabled:l}=e.tmNode;return l}),Z=m(()=>{if(!q.value)return!1;const{key:l,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=i,{value:j}=r,{value:oe}=t,{value:z}=n;return R!==null?z.includes(l):j!==null?z.includes(l)&&z[z.length-1]!==l:oe!==null?z.includes(l):!1}),ee=m(()=>r.value===null&&!f.value),G=Ue(Z,300,ee),M=m(()=>!!w?.enteringSubmenuRef.value),E=$(!1);H(se,{enteringSubmenuRef:E});function _(){E.value=!0}function d(){E.value=!1}function h(){const{parentKey:l,tmNode:b}=e;b.disabled||c.value&&(t.value=l,r.value=null,i.value=b.key)}function u(){const{tmNode:l}=e;l.disabled||c.value&&i.value!==l.key&&h()}function s(l){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=l;b&&!ae({target:b},"dropdownOption")&&!ae({target:b},"scrollbarRail")&&(i.value=null)}function y(){const{value:l}=q,{tmNode:b}=e;c.value&&!l&&!b.disabled&&(o.doSelect(b.key,b.rawNode),o.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:m(()=>G.value&&!M.value),rawNode:Q,hasSubmenu:q,pending:V(()=>{const{value:l}=n,{key:b}=e.tmNode;return l.includes(b)}),childActive:V(()=>{const{value:l}=p,{key:b}=e.tmNode,R=l.findIndex(j=>b===j);return R===-1?!1:R<l.length-1}),active:V(()=>{const{value:l}=p,{key:b}=e.tmNode,R=l.findIndex(j=>b===j);return R===-1?!1:R===l.length-1}),mergedDisabled:Y,renderOption:P,nodeProps:O,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:P}=this;let O=null;if(t){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);O=a(me,Object.assign({},U,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=N?.(r),C=a("div",Object.assign({class:[`${n}-dropdown-option`,w?.class],"data-dropdown-option":!0},w),a("div",fe(B,I),[a("div",{class:[`${n}-dropdown-option-body__prefix`,p&&`${n}-dropdown-option-body__prefix--show-icon`]},[S?S(r):W(r.icon)]),a("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},c?c(r):W((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),a("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,f&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?a(Be,null,{default:()=>a(Me,null)}):null)]),this.hasSubmenu?a(Se,null,{default:()=>[a(Ne,null,{default:()=>a("div",{class:`${n}-dropdown-offset-container`},a(Pe,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>a("div",{class:`${n}-dropdown-menu-wrapper`},i?a(Ie,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>O}):O)}))})]}):null);return g?g({node:C,option:r}):C}}),We=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=F(de),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=F(X);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:p}=this,{rawNode:f}=this.tmNode,c=a("div",Object.assign({class:`${o}-dropdown-option`},t?.(f)),a("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},a("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},W(f.icon)),a("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(f):W((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),a("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),Je=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return a(Ce,null,a(We,{clsPrefix:i,tmNode:e,key:e.key}),r?.map(t=>{const{rawNode:n}=t;return n.show===!1?null:he(n)?a(ve,{clsPrefix:i,key:t.key}):t.isGroup?(Oe("dropdown","`group` node is not allowed to be put in `group` node."),null):a(be,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),Xe=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return a("div",o,[e?.()])}}),me=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=F(X);H(de,{showIconRef:m(()=>{const t=o.value;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>t?t(c):c.icon);const{rawNode:f}=n;return t?t(f):f.icon})}),hasSubmenuRef:m(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var p;if(n.isGroup)return(p=n.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>te(c,t));const{rawNode:f}=n;return te(f,t)})})});const r=$(null);return H(_e,null),H(Te,null),H(pe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:Ve(n)?a(Xe,{tmNode:t,key:t.key}):he(n)?a(ve,{clsPrefix:o,key:t.key}):Ge(n)?a(Je,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):a(be,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return a("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?a($e,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Re({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Qe=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[De(),x("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),Ye={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ze=Object.keys(re),eo=Object.assign(Object.assign(Object.assign({},re),Ye),J.props),uo=D({name:"Dropdown",inheritAttrs:!1,props:eo,setup(e){const o=$(!1),i=ke(K(e,"show"),o),r=m(()=>{const{keyField:d,childrenField:h}=e;return Ee(e.options,{getKey(u){return u[d]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),t=m(()=>r.value.treeNodes),n=$(null),p=$(null),f=$(null),c=m(()=>{var d,h,u;return(u=(h=(d=n.value)!==null&&d!==void 0?d:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=m(()=>r.value.getPath(c.value).keyPath),g=m(()=>r.value.getPath(e.value).keyPath),N=V(()=>e.keyboard&&i.value);Le({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:Z},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:ee},Escape:U}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:P}=je(e),O=J("Dropdown","-dropdown",Qe,ze,e,I);H(X,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:i,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:w}),ce(i,d=>{!e.animated&&!d&&C()});function B(d,h){const{onSelect:u}=e;u&&ne(u,d,h)}function w(d){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&ne(h,d),u&&ne(u,d),o.value=d}function C(){n.value=null,p.value=null,f.value=null}function U(){w(!1)}function Q(){M("left")}function q(){M("right")}function Y(){M("up")}function Z(){M("down")}function ee(){const d=G();d?.isLeaf&&i.value&&(B(d.key,d.rawNode),w(!1))}function G(){var d;const{value:h}=r,{value:u}=c;return!h||u===null?null:(d=h.getNode(u))!==null&&d!==void 0?d:null}function M(d){const{value:h}=c,{value:{getFirstAvailableNode:u}}=r;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=G();if(y){let l;switch(d){case"down":l=y.getNext();break;case"up":l=y.getPrev();break;case"right":l=y.getChild();break;case"left":l=y.getParent();break}l&&(s=l.key)}}s!==null&&(n.value=null,p.value=s)}const E=m(()=>{const{size:d,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=O.value,{padding:y,dividerColor:l,borderRadius:b,optionOpacityDisabled:R,[A("optionIconSuffixWidth",d)]:j,[A("optionSuffixWidth",d)]:oe,[A("optionIconPrefixWidth",d)]:z,[A("optionPrefixWidth",d)]:we,[A("fontSize",d)]:ye,[A("optionHeight",d)]:ge,[A("optionIconSize",d)]:xe}=s,v={"--n-bezier":u,"--n-font-size":ye,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ge,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":z,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":j,"--n-option-icon-size":xe,"--n-divider-color":l,"--n-option-opacity-disabled":R};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),_=P?Ae("dropdown",m(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:I,mergedTheme:O,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&C()},doUpdateShow:w,cssVars:P?void 0:E,themeClass:_?.themeClass,onRender:_?.onRender}},render(){const e=(r,t,n,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=g?.(void 0,this.tmNodes.map(P=>P.rawNode))||{},I={ref:He(t),class:[r,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return a(me,fe(this.$attrs,I,N))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return a(ue,Object.assign({},Fe(this.$props,Ze),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{uo as N,so as a};
