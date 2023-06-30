import{g,j as l,x as u,u as f,e as b,l as y,ci as $,q as a,s as x,au as C,h as d,a7 as _}from"./index-e7fb9abe.js";const z=/^(\d|\.)+$/,m=/(\d|\.)+/;function R(e,{c:t=1,offset:r=0,attachPx:o=!0}={}){if(typeof e=="number"){const n=(e+r)*t;return n===0?"0":`${n}px`}else if(typeof e=="string")if(z.test(e)){const n=(Number(e)+r)*t;return o?n===0?"0":`${n}px`:`${n}`}else{const n=m.exec(e);return n?e.replace(m,String((Number(n[0])+r)*t)):e}return e}const N=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[u("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),u("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},f.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),j=b({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=y(e),o=f("Icon","-icon",N,$,e,t),n=a(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:p}=o.value;if(s!==void 0){const{color:h,[`opacity${s}Depth`]:v}=p;return{"--n-bezier":c,"--n-color":h,"--n-opacity":v}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),i=r?x("icon",a(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:a(()=>{const{size:s,color:c}=e;return{fontSize:R(s),color:c}}),cssVars:r?void 0:n,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:t,depth:r,mergedClsPrefix:o,component:n,onRender:i,themeClass:s}=this;return!((e=t?.$options)===null||e===void 0)&&e._n_icon__&&C("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),d("i",_(this.$attrs,{role:"img",class:[`${o}-icon`,s,{[`${o}-icon--depth`]:r,[`${o}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?d(n):this.$slots)}});export{j as N,R as f};
