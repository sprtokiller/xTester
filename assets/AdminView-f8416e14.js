import{f as M,h as m,g as be,j as ye,k as U,l as D,i as T,m as g,p as $,n as O,F as we,q as Ae,s as W,u as J,t as He,v as q,x as Q,y as C,z as p,A as b,B as v,C as B,D as Se,E as Re,G as se,H as ne,I as ie,J as N,K as Pe,_ as ve,R as Ne,a as me,r as Z,o as ue,L as _e,c as Te,d as F,b as le}from"./index-96555aa1.js";import{t as Me,d as ke,N as Ee,a as Fe,c as Oe}from"./Dropdown-ea137d15.js";import{u as ae}from"./Icon-5b18e85f.js";import{u as Le}from"./use-compitable-84d7e7e6.js";const $e=M({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Ke(e,i,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const je=e=>{const{borderRadius:i,textColor3:o,primaryColor:n,textColor2:l,textColor1:a,fontSize:c,dividerColor:s,hoverColor:d,primaryColorHover:z}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:o,itemColorHover:d,itemColorActive:U(n,{alpha:.1}),itemColorActiveHover:U(n,{alpha:.1}),itemColorActiveCollapsed:U(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:z,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:z,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:s},Ke("#BBB",n,"#FFF","#AAA"))},Be=be({name:"Menu",common:ye,peers:{Tooltip:Me,Dropdown:ke},self:je}),Ve=Be,De=D("n-layout-sider"),K=D("n-menu"),X=D("n-submenu"),Y=D("n-menu-item-group"),V=8;function ee(e){const i=T(K),{props:o,mergedCollapsedRef:n}=i,l=T(X,null),a=T(Y,null),c=g(()=>o.mode==="horizontal"),s=g(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=g(()=>{var u;return Math.max((u=o.collapsedIconSize)!==null&&u!==void 0?u:o.iconSize,o.iconSize)}),z=g(()=>{var u;return!c.value&&e.root&&n.value&&(u=o.collapsedIconSize)!==null&&u!==void 0?u:o.iconSize}),S=g(()=>{if(c.value)return;const{collapsedWidth:u,indent:w,rootIndent:H}=o,{root:A,isGroup:R}=e,P=H===void 0?w:H;if(A)return n.value?u/2-d.value/2:P;if(a)return w/2+a.paddingLeftRef.value;if(l)return(R?w/2:w)+l.paddingLeftRef.value}),y=g(()=>{const{collapsedWidth:u,indent:w,rootIndent:H}=o,{value:A}=d,{root:R}=e;return c.value||!R||!n.value?V:(H===void 0?w:H)+A+V-(u+A)/2});return{dropdownPlacement:s,activeIconSize:z,maxIconSize:d,paddingLeft:S,iconMarginRight:y,NMenu:i,NSubmenu:l}}const oe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},he=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ge=M({name:"MenuOptionGroup",props:he,setup(e){$(X,null);const i=ee(e);$(Y,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:o,props:n}=T(K);return function(){const{value:l}=o,a=i.paddingLeft.value,{nodeProps:c}=n,s=c?.(e.tmNode.rawNode);return m("div",{class:`${l}-menu-item-group`,role:"group"},m("div",Object.assign({},s,{class:[`${l}-menu-item-group-title`,s?.class],style:[s?.style||"",a!==void 0?`padding-left: ${a}px;`:""]}),O(e.title),e.extra?m(we,null," ",O(e.extra)):null),m("div",null,e.tmNodes.map(d=>te(d,n))))}}}),pe=M({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=T(K);return{menuProps:i,style:g(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:g(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:o,renderLabel:n,renderExtra:l,expandIcon:a}}=this,c=o?o(i.rawNode):O(this.icon);return m("div",{onClick:s=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):O(this.title),this.extra||l?m("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):O(this.extra)):null),this.showArrow?m(Ae,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):m($e,null)}):null)}}),fe=Object.assign(Object.assign({},oe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ue=M({name:"Submenu",props:fe,setup(e){const i=ee(e),{NMenu:o,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=o,s=g(()=>{const{disabled:u}=e;return n?.mergedDisabledRef.value||l.disabled?!0:u}),d=W(!1);$(X,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:s}),$(Y,null);function z(){const{onClick:u}=e;u&&u()}function S(){s.value||(a.value||o.toggleExpand(e.internalKey),z())}function y(u){d.value=u}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:d,paddingLeft:i.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:J(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:g(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:g(()=>!s.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:y,handleClick:S}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:o,renderLabel:n}}=this,l=()=>{const{isHorizontal:c,paddingLeft:s,collapsed:d,mergedDisabled:z,maxIconSize:S,activeIconSize:y,title:u,childActive:w,icon:H,handleClick:A,menuProps:{nodeProps:R},dropdownShow:P,iconMarginRight:G,tmNode:L,mergedClsPrefix:j}=this,k=R?.(L.rawNode);return m("div",Object.assign({},k,{class:[`${j}-menu-item`,k?.class],role:"menuitem"}),m(pe,{tmNode:L,paddingLeft:s,collapsed:d,disabled:z,iconMarginRight:G,maxIconSize:S,activeIconSize:y,title:u,extra:this.extra,showArrow:!c,childActive:w,clsPrefix:j,icon:H,hover:P,onClick:A}))},a=()=>m(He,null,{default:()=>{const{tmNodes:c,collapsed:s}=this;return s?null:m("div",{class:`${i}-submenu-children`,role:"menu"},c.map(d=>te(d,this.menuProps)))}});return this.root?m(Ee,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>m("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):m("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),Ce=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),qe=M({name:"MenuOption",props:Ce,setup(e){const i=ee(e),{NSubmenu:o,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:c}=n,s=o?o.mergedDisabledRef:{value:!1},d=g(()=>s.value||e.disabled);function z(y){const{onClick:u}=e;u&&u(y)}function S(y){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),z(y))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:J(()=>e.root&&c.value&&l.mode!=="horizontal"&&!d.value),selected:J(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:S}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:o,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l?.(o.rawNode);return m("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a?.class]}),m(Fe,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):O(this.title),trigger:()=>m(pe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),We=M({name:"MenuDivider",setup(){const e=T(K),{mergedClsPrefixRef:i,isHorizontalRef:o}=e;return()=>o.value?null:m("div",{class:`${i.value}-menu-divider`})}}),Je=Q(he),Ze=Q(Ce),Qe=Q(fe);function xe(e){return e.type==="divider"||e.type==="render"}function Xe(e){return e.type==="divider"}function te(e,i){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(xe(o))return Xe(o)?m(We,Object.assign({key:e.key},o.props)):null;const{labelField:l}=i,{key:a,level:c,isGroup:s}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:c,root:c===0,isGroup:s});return e.children?e.isGroup?m(Ge,q(d,Je,{tmNode:e,tmNodes:e.children,key:a})):m(Ue,q(d,Qe,{key:a,rawNodes:o[i.childrenField],tmNodes:e.children,tmNode:e})):m(qe,q(d,Ze,{key:a,tmNode:e}))}const ce=[C("&::before","background-color: var(--n-item-color-hover);"),v("arrow",`
 color: var(--n-arrow-color-hover);
 `),v("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),v("extra",`
 color: var(--n-item-text-color-hover);
 `)])],de=[v("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ye=C([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[b("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),b("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[b("selected",[v("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),v("extra","color: var(--n-item-text-color-active-horizontal);")])]),b("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),v("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),v("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),B("disabled",[B("selected, child-active",[C("&:focus-within",de)]),b("selected",[_(null,[v("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),b("child-active",[_(null,[v("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),v("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),_("border-bottom: 2px solid var(--n-border-color-horizontal);",de)]),p("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),b("collapsed",[p("menu-item-content",[b("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),v("arrow","opacity: 0;"),v("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),b("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),b("collapsed",[v("arrow","transform: rotate(0);")]),b("selected",[C("&::before","background-color: var(--n-item-color-active);"),v("arrow","color: var(--n-arrow-color-active);"),v("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),v("extra","color: var(--n-item-text-color-active);")])]),b("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),v("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),v("arrow",`
 color: var(--n-arrow-color-child-active);
 `),v("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),B("disabled",[B("selected, child-active",[C("&:focus-within",ce)]),b("selected",[_(null,[v("arrow","color: var(--n-arrow-color-active-hover);"),v("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),v("extra","color: var(--n-item-text-color-active-hover);")])])]),b("child-active",[_(null,[v("arrow","color: var(--n-arrow-color-child-active-hover);"),v("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),v("extra","color: var(--n-item-text-color-child-active-hover);")])])]),b("selected",[_(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),_(null,ce)]),v("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),v("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Se({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function _(e,i){return[b("hover",e,i),C("&:hover",e,i)]}const eo=Object.assign(Object.assign({},se.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),oo=M({name:"Menu",props:eo,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=Re(e),n=se("Menu","-menu",Ye,Ve,e,i),l=T(De,null),a=g(()=>{var h;const{collapsed:x}=e;if(x!==void 0)return x;if(l){const{collapseModeRef:t,collapsedRef:f}=l;if(t.value==="width")return(h=f.value)!==null&&h!==void 0?h:!1}return!1}),c=g(()=>{const{keyField:h,childrenField:x,disabledField:t}=e;return Oe(e.items||e.options,{getIgnored(f){return xe(f)},getChildren(f){return f[x]},getDisabled(f){return f[t]},getKey(f){var I;return(I=f[h])!==null&&I!==void 0?I:f.name}})}),s=g(()=>new Set(c.value.treeNodes.map(h=>h.key))),{watchProps:d}=e,z=W(null);d?.includes("defaultValue")?ne(()=>{z.value=e.defaultValue}):z.value=e.defaultValue;const S=ie(e,"value"),y=ae(S,z),u=W([]),w=()=>{u.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(y.value,{includeSelf:!1}).keyPath};d?.includes("defaultExpandedKeys")?ne(w):w();const H=Le(e,["expandedNames","expandedKeys"]),A=ae(H,u),R=g(()=>c.value.treeNodes),P=g(()=>c.value.getPath(y.value).keyPath);$(K,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:y,mergedExpandedKeysRef:A,activePathRef:P,mergedClsPrefixRef:i,isHorizontalRef:g(()=>e.mode==="horizontal"),invertedRef:ie(e,"inverted"),doSelect:G,toggleExpand:j});function G(h,x){const{"onUpdate:value":t,onUpdateValue:f,onSelect:I}=e;f&&N(f,h,x),t&&N(t,h,x),I&&N(I,h,x),z.value=h}function L(h){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:t,onExpandedNamesChange:f,onOpenNamesChange:I}=e;x&&N(x,h),t&&N(t,h),f&&N(f,h),I&&N(I,h),u.value=h}function j(h){const x=Array.from(A.value),t=x.findIndex(f=>f===h);if(~t)x.splice(t,1);else{if(e.accordion&&s.value.has(h)){const f=x.findIndex(I=>s.value.has(I));f>-1&&x.splice(f,1)}x.push(h)}L(x)}const k=h=>{const x=c.value.getPath(h??y.value,{includeSelf:!1}).keyPath;if(!x.length)return;const t=Array.from(A.value),f=new Set([...t,...x]);e.accordion&&s.value.forEach(I=>{f.has(I)&&!x.includes(I)&&f.delete(I)}),L(Array.from(f))},re=g(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:x},self:t}=n.value,{borderRadius:f,borderColorHorizontal:I,fontSize:ge,itemHeight:Ie,dividerColor:ze}=t,r={"--n-divider-color":ze,"--n-bezier":x,"--n-font-size":ge,"--n-border-color-horizontal":I,"--n-border-radius":f,"--n-item-height":Ie};return h?(r["--n-group-text-color"]=t.groupTextColorInverted,r["--n-color"]=t.colorInverted,r["--n-item-text-color"]=t.itemTextColorInverted,r["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,r["--n-item-text-color-active"]=t.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=t.itemIconColorInverted,r["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=t.arrowColorInverted,r["--n-arrow-color-hover"]=t.arrowColorHoverInverted,r["--n-arrow-color-active"]=t.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=t.itemColorHoverInverted,r["--n-item-color-active"]=t.itemColorActiveInverted,r["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=t.groupTextColor,r["--n-color"]=t.color,r["--n-item-text-color"]=t.itemTextColor,r["--n-item-text-color-hover"]=t.itemTextColorHover,r["--n-item-text-color-active"]=t.itemTextColorActive,r["--n-item-text-color-child-active"]=t.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,r["--n-item-icon-color"]=t.itemIconColor,r["--n-item-icon-color-hover"]=t.itemIconColorHover,r["--n-item-icon-color-active"]=t.itemIconColorActive,r["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=t.arrowColor,r["--n-arrow-color-hover"]=t.arrowColorHover,r["--n-arrow-color-active"]=t.arrowColorActive,r["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,r["--n-arrow-color-child-active"]=t.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,r["--n-item-color-hover"]=t.itemColorHover,r["--n-item-color-active"]=t.itemColorActive,r["--n-item-color-active-hover"]=t.itemColorActiveHover,r["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),r}),E=o?Pe("menu",g(()=>e.inverted?"a":"b"),re,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:H,uncontrolledExpanededKeys:u,mergedExpandedKeys:A,uncontrolledValue:z,mergedValue:y,activePath:P,tmNodes:R,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:re,themeClass:E?.themeClass,onRender:E?.onRender,showOption:k}},render(){const{mergedClsPrefix:e,mode:i,themeClass:o,onRender:n}=this;return n?.(),m("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>te(l,this.$props)))}});function to(e,i){return m(Ne,{to:{name:e}},{default:()=>i})}const ro=(await ve(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{NMenu:oo},watch:{$route:{handler(e){this.$nextTick(()=>{this.onRouteChange(e)})},immediate:!0}},data(){return{pathGroups:["dashboard","course","test","user","module"],menuOptions:[["dashboard","Home"],[],["courses","Courses"],["tests","Tests"],["users","Users"],["modules","Modules"]].map((o,n)=>o.length===2?{label:()=>to(o[0],o[1]),key:o[0]}:{key:"divider-"+n,type:"divider"})}},methods:{onRouteChange(e){const i=e.name,o=this.pathGroups.findIndex(l=>i.includes(l)),n=document.querySelectorAll(".n-menu-item-content")[o];n&&n.click()}}});function no(e,i,o,n,l,a){const c=Z("n-menu");return ue(),_e(c,{options:e.menuOptions},null,8,["options"])}const io=me(ro,[["render",no]]),lo=(await ve(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{AdminMenu:io}});const ao={class:"d-flex vw-100 vh-100"},co={id:"admin-menu",class:"h-100"},so={class:"flex-fill h-100 py-4"},vo={class:"h-100"},mo={class:"d-flex align-items-center justify-content-center"},uo={class:"container"};function ho(e,i,o,n,l,a){const c=Z("AdminMenu"),s=Z("router-view");return ue(),Te("div",ao,[F("div",co,[F("nav",null,[le(c)])]),F("div",so,[F("main",vo,[F("div",mo,[F("div",uo,[le(s)])])])])])}const go=me(lo,[["render",ho],["__scopeId","data-v-ccfc9f9c"]]);export{go as default};
