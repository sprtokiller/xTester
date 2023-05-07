import{i as B,M as ne,O as Y,P as ie,f as k,E as V,G as U,Q as F,m as H,S as se,h as i,T as ae,U as le,V as K,j as J,W as L,y as z,z as f,A as M,B as v,X as ce,Y as de,p as ue,I as me,K as Q,l as pe,s as he,Z as ge,F as G,o as g,c as R,d as D,_ as X,N as Z,a as ee,r as d,$ as W,L as I,w as l,b as m,a0 as fe,a1 as q,a2 as j,e as E,a3 as T,a4 as O,a5 as ve}from"./index-96555aa1.js";import{g as be,N as _e}from"./headers-50bcb4c0.js";import{N as ye,a as xe,b as Ce}from"./Input-5b7f551f.js";import{N as we,a as $e}from"./Icon-5b18e85f.js";import{N as te}from"./Spin-3bf3f323.js";import{u as re}from"./use-message-88ff6297.js";import"./use-compitable-84d7e7e6.js";function Ie(){const e=B(ne,null);return e===null&&Y("use-dialog","No outer <n-dialog-provider /> founded."),e}const Se={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},De=()=>Se,ze={name:"Space",self:De},ke=ze;let A;const Ee=()=>{if(!ie)return!0;if(A===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),A=t}return A},Ue=Object.assign(Object.assign({},U.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Te=k({name:"Space",props:Ue,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=V(e),o=U("Space","-space",void 0,ke,e,t),p=F("Space",r,t);return{useGap:Ee(),rtlEnabled:p,mergedClsPrefix:t,margin:H(()=>{const{size:s}=e;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[ae("gap",s)]:h}}=o.value,{row:c,col:a}=le(h);return{horizontal:K(a),vertical:K(c)}})}},render(){const{vertical:e,align:t,inline:r,justify:o,itemStyle:p,margin:s,wrap:h,mergedClsPrefix:c,rtlEnabled:a,useGap:u,wrapItem:n,internalUseGap:_}=this,b=se(be(this));if(!b.length)return null;const y=`${s.horizontal}px`,w=`${s.horizontal/2}px`,N=`${s.vertical}px`,C=`${s.vertical/2}px`,$=b.length-1,S=o.startsWith("space-");return i("div",{role:"none",class:[`${c}-space`,a&&`${c}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!h||e?"nowrap":"wrap",marginTop:u||e?"":`-${C}`,marginBottom:u||e?"":`-${C}`,alignItems:t,gap:u?`${s.vertical}px ${s.horizontal}px`:""}},!n&&(u||_)?b:b.map((P,x)=>i("div",{role:"none",style:[p,{maxWidth:"100%"},u?"":e?{marginBottom:x!==$?N:""}:a?{marginLeft:S?o==="space-between"&&x===$?"":w:x!==$?y:"",marginRight:S?o==="space-between"&&x===0?"":w:"",paddingTop:C,paddingBottom:C}:{marginRight:S?o==="space-between"&&x===$?"":w:x!==$?y:"",marginLeft:S?o==="space-between"&&x===0?"":w:"",paddingTop:C,paddingBottom:C}]},P)))}}),Re=e=>{const{textColor2:t,cardColor:r,modalColor:o,popoverColor:p,dividerColor:s,borderRadius:h,fontSize:c,hoverColor:a}=e;return{textColor:t,color:r,colorHover:a,colorModal:o,colorHoverModal:L(o,a),colorPopover:p,colorHoverPopover:L(p,a),borderColor:s,borderColorModal:L(o,s),borderColorPopover:L(p,s),borderRadius:h,fontSize:c}},Ne={name:"List",common:J,self:Re},Pe=Ne,Me=e=>{const{textColor1:t,textColor2:r,fontWeightStrong:o,fontSize:p}=e;return{fontSize:p,titleTextColor:t,textColor:r,titleFontWeight:o}},Oe={name:"Thing",common:J,self:Me},Le=Oe,Be=z([f("list",`
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
 `,[M("show-divider",[f("list-item",[z("&:not(:last-child)",[v("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),M("clickable",[f("list-item",`
 cursor: pointer;
 `)]),M("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),M("hoverable",[f("list-item",`
 border-radius: var(--n-border-radius);
 `,[z("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[v("divider",`
 background-color: transparent;
 `)])])]),M("bordered, hoverable",[f("list-item",`
 padding: 12px 20px;
 `),v("header, footer",`
 padding: 12px 20px;
 `)]),v("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[z("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("prefix",`
 margin-right: 20px;
 flex: 0;
 `),v("suffix",`
 margin-left: 20px;
 flex: 0;
 `),v("main",`
 flex: 1;
 `),v("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),ce(f("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),de(f("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),je=Object.assign(Object.assign({},U.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),oe=pe("n-list"),Ae=k({name:"List",props:je,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:o}=V(e),p=F("List",o,t),s=U("List","-list",Be,Pe,e,t);ue(oe,{showDividerRef:me(e,"showDivider"),mergedClsPrefixRef:t});const h=H(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:u,textColor:n,color:_,colorModal:b,colorPopover:y,borderColor:w,borderColorModal:N,borderColorPopover:C,borderRadius:$,colorHover:S,colorHoverModal:P,colorHoverPopover:x}}=s.value;return{"--n-font-size":u,"--n-bezier":a,"--n-text-color":n,"--n-color":_,"--n-border-radius":$,"--n-border-color":w,"--n-border-color-modal":N,"--n-border-color-popover":C,"--n-color-modal":b,"--n-color-popover":y,"--n-color-hover":S,"--n-color-hover-modal":P,"--n-color-hover-popover":x}}),c=r?Q("list",void 0,h,e):void 0;return{mergedClsPrefix:t,rtlEnabled:p,cssVars:r?void 0:h,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:r,onRender:o}=this;return o?.(),i("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},t.header?i("div",{class:`${r}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?i("div",{class:`${r}-list__footer`},t.footer()):null)}}),Ge=k({name:"ListItem",setup(){const e=B(oe,null);return e||Y("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return i("li",{class:`${t}-list-item`},e.prefix?i("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?i("div",{class:`${t}-list-item__main`},e):null,e.suffix?i("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&i("div",{class:`${t}-list-item__divider`}))}}),Ve=Object.assign(Object.assign({},U.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),Fe=k({name:"Scrollbar",props:Ve,setup(){const e=he(null);return Object.assign(Object.assign({},{scrollTo:(...r)=>{var o;(o=e.value)===null||o===void 0||o.scrollTo(r[0],r[1])},scrollBy:(...r)=>{var o;(o=e.value)===null||o===void 0||o.scrollBy(r[0],r[1])}}),{scrollbarInstRef:e})},render(){return i(ge,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),He=Fe,Ke=f("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[f("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),f("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[f("thing-header-wrapper",`
 flex: 1;
 `)]),f("thing-main",`
 flex-grow: 1;
 `,[f("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[z("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[z("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[z("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[z("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),We=Object.assign(Object.assign({},U.props),{title:String,titleExtra:String,description:String,descriptionStyle:[String,Object],content:String,contentStyle:[String,Object],contentIndented:Boolean}),qe=k({name:"Thing",props:We,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:p}=V(e),s=U("Thing","-thing",Ke,Le,e,r),h=F("Thing",p,r),c=H(()=>{const{self:{titleTextColor:u,textColor:n,titleFontWeight:_,fontSize:b},common:{cubicBezierEaseInOut:y}}=s.value;return{"--n-bezier":y,"--n-font-size":b,"--n-text-color":n,"--n-title-font-weight":_,"--n-title-text-color":u}}),a=o?Q("thing",void 0,c,e):void 0;return()=>{var u;const{value:n}=r,_=h?h.value:!1;return(u=a?.onRender)===null||u===void 0||u.call(a),i("div",{class:[`${n}-thing`,a?.themeClass,_&&`${n}-thing--rtl`],style:o?void 0:c.value},t.avatar&&e.contentIndented?i("div",{class:`${n}-thing-avatar`},t.avatar()):null,i("div",{class:`${n}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},t.avatar?i("div",{class:`${n}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},t.header||e.title?i("div",{class:`${n}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${n}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?i("div",{class:`${n}-thing-main__description`,style:e.descriptionStyle},t.description?t.description():e.description):null):null):i(G,null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${n}-thing-header`},t.header||e.title?i("div",{class:`${n}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${n}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?i("div",{class:`${n}-thing-main__description`,style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?i("div",{class:`${n}-thing-main__content`,style:e.contentStyle},t.default?t.default():e.content):null,t.footer?i("div",{class:`${n}-thing-main__footer`},t.footer()):null,t.action?i("div",{class:`${n}-thing-main__action`},t.action()):null))}}}),Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Je=D("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"},null,-1),Qe=[Je],Xe=k({name:"DeleteFilled",render:function(t,r){return g(),R("svg",Ye,Qe)}}),Ze={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},et=D("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z",fill:"currentColor"},null,-1),tt=[et],rt=k({name:"EditFilled",render:function(t,r){return g(),R("svg",Ze,tt)}}),ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},nt=D("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1),it=[nt],st=k({name:"InfoOutlined",render:function(t,r){return g(),R("svg",ot,it)}}),at={mounted(e,t){e.clickOutsideEvent=function(r){e==r.target||e.contains(r.target)||(r.stopPropagation(),t.value())},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},lt={mounted(e){const t=e.querySelector("input");t.focus(),t.click()}},ct=(await X(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{NListItem:Ge,NThing:qe,NSpace:Te,NTag:ye,NButton:Z,NPopover:we,InfoOutlined:st,NIcon:$e,EditFilled:rt,DeleteFilled:Xe,NInput:xe,NSpin:te},directives:{clickOutside:at,focus:lt},setup(){const e=Ie(),t=re(),r=B("API");return{DLG:e,MSG:t,API:r}},data(){return{courseNameInput:this.course.name,inputIsSaving:!1,courseIsDeleting:!1}},emits:["editSelect","deleteCourse","renameCourse"],methods:{openDetail(){this.$router.push({name:"courseDetail",params:{courseUUID:this.course.courseUUID}})},editCourse(){this.$emit("editSelect",this.course.courseUUID)},handleClickOutside(){this.inEditMode&&this.renameCourse()},deleteCourse(){var e="Are you sure you want to delete this course?";const t=this.course.tests.length;t&&(e+=` This will also delete ${t} test${t==1?"":"s"}.`),this.DLG.warning({title:"Confirm",content:e,positiveText:"Delete",negativeText:"Cancel",onPositiveClick:async()=>{try{this.courseIsDeleting=!0,await this.API.deleteCourse(this.course.courseUUID),this.MSG.success("Course deleted successfully"),this.$emit("deleteCourse",this.course.courseUUID)}catch(r){this.MSG.error(r instanceof Error?r.message:"Unknown error")}finally{this.courseIsDeleting=!1}}})},handleKeyUp(e){e.key==="Enter"?this.renameCourse():e.key==="Escape"&&(this.courseNameInput=this.course.name,this.$emit("editSelect",""))},async renameCourse(){if(this.courseNameInput=this.courseNameInput.trim(),this.courseNameInput===this.course.name){this.$emit("editSelect","");return}try{this.inputIsSaving=!0,await this.API.renameCourse(this.course.courseUUID,this.courseNameInput),this.$emit("renameCourse",this.course.courseUUID,this.courseNameInput),this.MSG.success("Course name changed successfully")}catch(e){this.MSG.error(e instanceof Error?e.message:"Unknown error")}finally{this.inputIsSaving=!1,this.$emit("editSelect","")}}},props:{editUUID:{type:String,required:!1},course:{type:Object,required:!0}},computed:{inEditMode(){return this.editUUID===this.course.courseUUID},plannedTests(){const e=new Date;return this.course.tests.filter(t=>t.startAt&&new Date(t.startAt)>e).length},activeTests(){const e=new Date;return this.course.tests.filter(t=>t.startAt&&new Date(t.startAt)<=e&&(!t.endAt||new Date(t.endAt)>e)).length},completedTests(){const e=new Date;return this.course.tests.filter(t=>t.endAt&&new Date(t.endAt)<=e).length},bgImageStyle(){return{"background-image":`url('${this.imageURL}')`}},imageURL(){switch(this.course.contentType){case"RISE":return"/rise.svg";case"STORYLINE":return"/storyline.svg";case"STUDIO":return"/studio.svg";case"OTHER":default:return"/unknown.svg"}}}});const dt={key:1},ut={class:"large-text"},mt={style:{"white-space":"nowrap"}};function pt(e,t,r,o,p,s){const h=d("n-input"),c=d("InfoOutlined"),a=d("n-icon"),u=d("n-popover"),n=d("n-tag"),_=d("n-space"),b=d("n-thing"),y=d("EditFilled"),w=d("n-button"),N=d("DeleteFilled"),C=d("n-list-item"),$=d("n-spin"),S=W("focus"),P=W("click-outside");return g(),I($,{show:e.courseIsDeleting},{default:l(()=>[m(C,{onClick:e.openDetail},{prefix:l(()=>[D("div",{class:"course-avatar",style:fe(e.bgImageStyle)},null,4)]),suffix:l(()=>[D("div",mt,[q((g(),I(w,{onClick:j(e.editCourse,["stop"]),class:"btn-course-action",size:"small",quaternary:"",circle:"",type:"success"},{icon:l(()=>[m(a,{class:"icon-no-align"},{default:l(()=>[m(y)]),_:1})]),_:1},8,["onClick"])),[[P,e.handleClickOutside]]),m(w,{onClick:j(e.deleteCourse,["stop"]),class:"btn-course-action",size:"small",quaternary:"",circle:"",type:"error"},{icon:l(()=>[m(a,{class:"icon-no-align"},{default:l(()=>[m(N)]),_:1})]),_:1},8,["onClick"])])]),default:l(()=>[m(b,null,{header:l(()=>[e.inEditMode?q((g(),I(h,{key:0,ref:"courseNameInputRef",class:"course-name-input",placeholder:"Course name",value:e.courseNameInput,"onUpdate:value":t[0]||(t[0]=x=>e.courseNameInput=x),onClick:t[1]||(t[1]=j(()=>{},["stop"])),autosize:"","passively-activated":!0,loading:e.inputIsSaving,disabled:e.inputIsSaving,onKeyup:e.handleKeyUp},null,8,["value","loading","disabled","onKeyup"])),[[S]]):(g(),R("div",dt,[E(T(e.course.name)+" ",1),m(u,{placement:"right-start",trigger:"hover"},{trigger:l(()=>[m(a,{size:"tiny",depth:"3",style:{"margin-left":"0.3rem"}},{default:l(()=>[m(c)]),_:1})]),default:l(()=>[D("div",ut,[D("div",null,"Author: "+T(e.course.author),1),D("div",null,"Version "+T(e.course.version),1)])]),_:1})]))]),description:l(()=>[m(_,{size:"small",style:{"margin-top":"4px"}},{default:l(()=>[e.activeTests||e.completedTests||e.plannedTests?O("",!0):(g(),I(n,{key:0,class:"tag-chip",bordered:!1,type:"default",size:"small"},{default:l(()=>[E(" No tests ")]),_:1})),e.plannedTests?(g(),I(n,{key:1,class:"tag-chip",bordered:!1,type:"warning",size:"small"},{default:l(()=>[E(" Planned: "+T(e.plannedTests),1)]),_:1})):O("",!0),e.activeTests?(g(),I(n,{key:2,class:"tag-chip",bordered:!1,type:"info",size:"small"},{default:l(()=>[E(" Active: "+T(e.activeTests),1)]),_:1})):O("",!0),e.completedTests?(g(),I(n,{key:3,class:"tag-chip",bordered:!1,type:"success",size:"small"},{default:l(()=>[E(" Completed: "+T(e.completedTests),1)]),_:1})):O("",!0)]),_:1})]),_:1})]),_:1},8,["onClick"])]),_:1},8,["show"])}const ht=ee(ct,[["render",pt],["__scopeId","data-v-bd266a74"]]),gt=(await X(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{NList:Ae,NSpin:te,NScrollbar:He,NEmpty:Ce,NButton:Z,NH2:_e,CourseItem:ht},setup(){const e=re(),t=B("API");return{MSG:e,API:t}},async mounted(){try{this.loading=!0;const e=await this.API.getCourseList();this.courses=e}catch(e){this.MSG.error(e instanceof Error?e.message:"Unknown error")}finally{this.loading=!1}},data(){return{loading:!0,courses:[],editUUID:""}},computed:{isEmpty(){return this.courses.length===0}},methods:{editSelect(e){this.editUUID=e},deleteCourse(e){this.courses=this.courses.filter(t=>t.courseUUID!==e)},renameCourse(e,t){this.courses=this.courses.map(r=>(r.courseUUID===e&&(r.name=t),r))}}});function ft(e,t,r,o,p,s){const h=d("n-h2"),c=d("CourseItem"),a=d("n-list"),u=d("n-button"),n=d("n-empty"),_=d("n-spin"),b=d("n-scrollbar");return g(),R(G,null,[m(h,null,{default:l(()=>[E("List of courses")]),_:1}),m(b,null,{default:l(()=>[m(_,{show:e.loading,style:{"min-height":"200px"}},{default:l(()=>[m(a,{hoverable:"",clickable:""},{default:l(()=>[(g(!0),R(G,null,ve(e.courses,y=>(g(),I(c,{course:y,editUUID:e.editUUID,key:y.courseUUID,onEditSelect:e.editSelect,onDeleteCourse:e.deleteCourse,onRenameCourse:e.renameCourse},null,8,["course","editUUID","onEditSelect","onDeleteCourse","onRenameCourse"]))),128))]),_:1}),!e.loading&&e.isEmpty?(g(),I(n,{key:0,description:"No e-learning courses found :("},{extra:l(()=>[m(u,{size:"small"},{default:l(()=>[E(" Start by adding a course! ")]),_:1})]),_:1})):O("",!0)]),_:1},8,["show"])]),_:1})],64)}const $t=ee(gt,[["render",ft]]);export{$t as default};
