import{i as u,bq as D,aP as m,x as d,g as i,j as a,v as n,aA as I,aB as M,e as c,l as S,V as O,u as v,p as E,z as L,q as N,s as V,h as s,f as H,br as T,k as F,t as K,o as q,c as A,b as G}from"./index-554f3ce5.js";function oe(){const e=u(D,null);return e===null&&m("use-dialog","No outer <n-dialog-provider /> founded."),e}const J=d([i("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[a("show-divider",[i("list-item",[d("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),a("clickable",[i("list-item",`
 cursor: pointer;
 `)]),a("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),a("hoverable",[i("list-item",`
 border-radius: var(--n-border-radius);
 `,[d("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),a("bordered, hoverable",[i("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[d("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),i("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),I(i("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),M(i("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Q=Object.assign(Object.assign({},v.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),h=H("n-list"),re=c({name:"List",props:Q,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:l}=S(e),p=O("List",l,o),f=v("List","-list",J,T,e,o);E(h,{showDividerRef:L(e,"showDivider"),mergedClsPrefixRef:o});const b=N(()=>{const{common:{cubicBezierEaseInOut:g},self:{fontSize:x,textColor:_,color:w,colorModal:z,colorPopover:C,borderColor:$,borderColorModal:k,borderColorPopover:R,borderRadius:B,colorHover:j,colorHoverModal:P,colorHoverPopover:y}}=f.value;return{"--n-font-size":x,"--n-bezier":g,"--n-text-color":_,"--n-color":w,"--n-border-radius":B,"--n-border-color":$,"--n-border-color-modal":k,"--n-border-color-popover":R,"--n-color-modal":z,"--n-color-popover":C,"--n-color-hover":j,"--n-color-hover-modal":P,"--n-color-hover-popover":y}}),t=r?V("list",void 0,b,e):void 0;return{mergedClsPrefix:o,rtlEnabled:p,cssVars:r?void 0:b,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:l}=this;return l?.(),s("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?s("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?s("div",{class:`${r}-list__footer`},o.footer()):null)}}),le=c({name:"ListItem",setup(){const e=u(h,null);return e||m("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return s("li",{class:`${o}-list-item`},e.prefix?s("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?s("div",{class:`${o}-list-item__main`},e):null,e.suffix?s("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&s("div",{class:`${o}-list-item__divider`}))}}),U=Object.assign(Object.assign({},v.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),W=c({name:"Scrollbar",props:U,setup(){const e=F(null);return Object.assign(Object.assign({},{scrollTo:(...r)=>{var l;(l=e.value)===null||l===void 0||l.scrollTo(r[0],r[1])},scrollBy:(...r)=>{var l;(l=e.value)===null||l===void 0||l.scrollBy(r[0],r[1])}}),{scrollbarInstRef:e})},render(){return s(K,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),se=W,X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Y=G("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"},null,-1),Z=[Y],ie=c({name:"DeleteFilled",render:function(o,r){return q(),A("svg",X,Z)}});export{ie as D,le as N,re as a,se as b,oe as u};
