import{j as G,W as x,y as f,z as o,C as q,A as R,B as N,X as W,Y as K,f as H,E as X,G as U,m as O,K as Y,S as J,h as d,T,_ as Q,a6 as Z,i as ee,N as oe,a7 as te,a as re,r as S,o as ne,c as se,b,w as p,F as ie,e as v,a3 as P,d as ae,a8 as le}from"./index-96555aa1.js";import{u as de}from"./use-compitable-84d7e7e6.js";import{g as ce,a as pe}from"./headers-50bcb4c0.js";import{u as he}from"./use-message-88ff6297.js";import{N as be}from"./Spin-3bf3f323.js";function V(e,a="default",i=[]){const{children:l}=e;if(l!==null&&typeof l=="object"&&!Array.isArray(l)){const h=l[a];if(typeof h=="function")return h()}return i}const ue={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},ge=e=>{const{tableHeaderColor:a,textColor2:i,textColor1:l,cardColor:h,modalColor:c,popoverColor:s,dividerColor:n,borderRadius:u,fontWeightStrong:t,lineHeight:C,fontSizeSmall:g,fontSizeMedium:y,fontSizeLarge:z}=e;return Object.assign(Object.assign({},ue),{lineHeight:C,fontSizeSmall:g,fontSizeMedium:y,fontSizeLarge:z,titleTextColor:l,thColor:x(h,a),thColorModal:x(c,a),thColorPopover:x(s,a),thTextColor:l,thFontWeight:t,tdTextColor:i,tdColor:h,tdColorModal:c,tdColorPopover:s,borderColor:x(h,n),borderColorModal:x(c,n),borderColorPopover:x(s,n),borderRadius:u})},me={name:"Descriptions",common:G,self:ge},fe=me,F="DESCRIPTION_ITEM_FLAG";function ve(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[F]:!1}const Ce=f([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),q("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[f("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),R("left-label-placement",[o("descriptions-table-content",[f("> *",{verticalAlign:"top"})])]),R("left-label-align",[f("th",{textAlign:"left"})]),R("center-label-align",[f("th",{textAlign:"center"})]),R("right-label-align",[f("th",{textAlign:"right"})]),R("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[f("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),o("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[o("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[o("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[N("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),N("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),W(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),K(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ye=Object.assign(Object.assign({},U.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),we=H({name:"Descriptions",props:ye,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=X(e),l=U("Descriptions","-descriptions",Ce,fe,e,a),h=O(()=>{const{size:s,bordered:n}=e,{common:{cubicBezierEaseInOut:u},self:{titleTextColor:t,thColor:C,thColorModal:g,thColorPopover:y,thTextColor:z,thFontWeight:j,tdTextColor:B,tdColor:r,tdColorModal:$,tdColorPopover:D,borderColor:m,borderColorModal:w,borderColorPopover:k,borderRadius:I,lineHeight:_,[T("fontSize",s)]:A,[T(n?"thPaddingBordered":"thPadding",s)]:L,[T(n?"tdPaddingBordered":"tdPadding",s)]:M}}=l.value;return{"--n-title-text-color":t,"--n-th-padding":L,"--n-td-padding":M,"--n-font-size":A,"--n-bezier":u,"--n-th-font-weight":j,"--n-line-height":_,"--n-th-text-color":z,"--n-td-text-color":B,"--n-th-color":C,"--n-th-color-modal":g,"--n-th-color-popover":y,"--n-td-color":r,"--n-td-color-modal":$,"--n-td-color-popover":D,"--n-border-radius":I,"--n-border-color":m,"--n-border-color-modal":w,"--n-border-color-popover":k}}),c=i?Y("descriptions",O(()=>{let s="";const{size:n,bordered:u}=e;return u&&(s+="a"),s+=n[0],s}),h,e):void 0;return{mergedClsPrefix:a,cssVars:i?void 0:h,themeClass:c?.themeClass,onRender:c?.onRender,compitableColumn:de(e,["columns","column"]),inlineThemeDisabled:i}},render(){const e=this.$slots.default,a=e?J(e()):[];a.length;const{compitableColumn:i,labelPlacement:l,labelAlign:h,size:c,bordered:s,title:n,cssVars:u,mergedClsPrefix:t,separator:C,onRender:g}=this;g?.();const y=a.filter(r=>ve(r)),z={span:0,row:[],secondRow:[],rows:[]},B=y.reduce((r,$,D)=>{const m=$.props||{},w=y.length-1===D,k=["label"in m?m.label:V($,"label")],I=[V($)],_=m.span||1,A=r.span;r.span+=_;const L=m.labelStyle||m["label-style"]||this.labelStyle,M=m.contentStyle||m["content-style"]||this.contentStyle;if(l==="left")s?r.row.push(d("th",{class:`${t}-descriptions-table-header`,colspan:1,style:L},k),d("td",{class:`${t}-descriptions-table-content`,colspan:w?(i-A)*2+1:_*2-1,style:M},I)):r.row.push(d("td",{class:`${t}-descriptions-table-content`,colspan:w?(i-A)*2:_*2},d("span",{class:`${t}-descriptions-table-content__label`,style:L},[...k,C&&d("span",{class:`${t}-descriptions-separator`},C)]),d("span",{class:`${t}-descriptions-table-content__content`,style:M},I)));else{const E=w?(i-A)*2:_*2;r.row.push(d("th",{class:`${t}-descriptions-table-header`,colspan:E,style:L},k)),r.secondRow.push(d("td",{class:`${t}-descriptions-table-content`,colspan:E,style:M},I))}return(r.span>=i||w)&&(r.span=0,r.row.length&&(r.rows.push(r.row),r.row=[]),l!=="left"&&r.secondRow.length&&(r.rows.push(r.secondRow),r.secondRow=[])),r},z).rows.map(r=>d("tr",{class:`${t}-descriptions-table-row`},r));return d("div",{style:u,class:[`${t}-descriptions`,this.themeClass,`${t}-descriptions--${l}-label-placement`,`${t}-descriptions--${h}-label-align`,`${t}-descriptions--${c}-size`,s&&`${t}-descriptions--bordered`]},n||this.$slots.header?d("div",{class:`${t}-descriptions-header`},n||ce(this,"header")):null,d("div",{class:`${t}-descriptions-table-wrapper`},d("table",{class:`${t}-descriptions-table`},d("tbody",null,B))))}}),_e={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},xe=H({name:"DescriptionsItem",[F]:!0,props:_e,render(){return null}}),Se=(await Q(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({setup(){const e=Z(),a=he(),i=ee("API");return{router:e,MSG:a,API:i}},data(){return{checking:!0,uploading:!1}},components:{NButton:oe,NH3:pe,NCard:te,NDescriptions:we,NDescriptionsItem:xe,NSpin:be},props:{name:{type:String,required:!0},author:{type:String,required:!0},version:{type:String,required:!0},courseLocation:{type:String,required:!0},groupHash:{type:String,required:!0}},watch:{watchIDs:{handler(){this.checkAvailability()},immediate:!0,deep:!0}},computed:{watchIDs(){return{courseLocation:this.courseLocation,groupHash:this.groupHash}},loadingClass(){return{"dim-on-loading":this.checking||this.uploading}}},methods:{async checkAvailability(){try{this.checking=!0;const e=await this.API.checkCourseExists(this.courseLocation,this.groupHash);e&&this.$router.push({name:"courseDetail",params:{courseUUID:e}})}catch(e){this.MSG.error(e instanceof Error?e.message:"Unknown error")}finally{this.checking=!1}},cancel(){this.$router.push({name:"courses"})},async addCourse(){try{this.uploading=!0;const e=await this.API.addCourse(this.name,this.author,parseInt(this.version),this.groupHash,this.courseLocation);this.$router.push({name:"courseDetail",params:{courseUUID:e}})}catch(e){this.MSG.error(e instanceof Error?e.message:"Unknown error")}finally{this.uploading=!1}}}});const Pe={class:"d-flex justify-content-end"};function ze(e,a,i,l,h,c){const s=S("n-h3"),n=S("n-descriptions-item"),u=S("n-descriptions"),t=S("n-button"),C=S("n-card"),g=S("n-spin");return ne(),se(ie,null,[b(s,null,{default:p(()=>[v("Add a new course...")]),_:1}),b(g,{show:e.checking||e.uploading},{description:p(()=>[v(P(e.uploading?"Uploading the course...":"Checking if course is available..."),1)]),default:p(()=>[b(C,{style:{"max-width":"50rem","margin-left":"auto","margin-right":"auto","margin-top":"5%"}},{footer:p(()=>[ae("div",Pe,[b(t,{onClick:e.cancel,style:{"margin-right":"0.5rem"},ghost:""},{default:p(()=>[v("Cancel")]),_:1},8,["onClick"]),b(t,{onClick:e.addCourse,type:"primary"},{default:p(()=>[v("Add")]),_:1},8,["onClick"])])]),default:p(()=>[b(u,{class:le(e.loadingClass),title:"Details","label-placement":"left",bordered:"",size:"small"},{default:p(()=>[b(n,{label:"Name:"},{default:p(()=>[v(P(e.name),1)]),_:1}),b(n,{label:"Author:"},{default:p(()=>[v(P(e.author),1)]),_:1}),b(n,{label:"Version:"},{default:p(()=>[v(P(e.version),1)]),_:1}),b(n,{label:"Course location:"},{default:p(()=>[v(P(e.courseLocation),1)]),_:1}),b(n,{label:"Course URL:"},{default:p(()=>[v(P(e.groupHash),1)]),_:1})]),_:1},8,["class"])]),_:1})]),_:1},8,["show"])],64)}const Me=re(Se,[["render",ze],["__scopeId","data-v-3e580b59"]]);export{Me as default};
