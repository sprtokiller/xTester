import{g as w,x as h,j as c,e as z,l as $,u as l,cj as T,q as f,ad as i,s as H,h as R}from"./index-ecfabf3d.js";const B=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),a=r=>z({name:`H${r}`,props:P,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=$(e),n=l("Typography","-h",B,T,e,o),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[i("headerPrefixWidth",r)]:u,[i("headerFontSize",r)]:x,[i("headerMargin",r)]:C,[i("headerBarWidth",r)]:v,[i("headerBarColor",g)]:y}}=n.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=s?H(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:d,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e;const{prefix:o,alignText:s,mergedClsPrefix:n,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),R(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:s}],style:d},t)}});a("1");const j=a("2"),N=a("3"),S=a("4");a("5");a("6");export{j as N,N as a,S as b};
