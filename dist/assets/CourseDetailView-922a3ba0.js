import{f as k,o as i,c as _,d as o,_ as y,N as f,a as $,r as n,b as t,w as s,e as w,a6 as D,i as I,h as v,L,a3 as R}from"./index-96555aa1.js";import{a as B}from"./headers-50bcb4c0.js";import{a as A}from"./Icon-5b18e85f.js";import{N as V}from"./Spin-3bf3f323.js";import{N,R as U}from"./RemoveRedEyeFilled-90220f0c.js";import{u as z}from"./use-message-88ff6297.js";import"./use-compitable-84d7e7e6.js";import"./Input-5b7f551f.js";import"./Dropdown-ea137d15.js";const E={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},F=o("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z",fill:"currentColor"},null,-1),H=[F],P=k({name:"AddRound",render:function(r,a){return i(),_("svg",E,H)}}),M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},S=o("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z",fill:"currentColor"},null,-1),q=[S],b=k({name:"ArrowBackFilled",render:function(r,a){return i(),_("svg",M,q)}}),T=(await y(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{NButton:f,NIcon:A,NH3:B,NSpin:V,ArrowBackFilled:b},methods:{handleBack(){this.$router.back()}}}),O={class:"d-flex align-items-center"};function G(e,r,a,u,g,c){const m=n("ArrowBackFilled"),h=n("n-icon"),l=n("n-button"),d=n("n-h3"),p=n("n-spin");return i(),_("div",null,[o("div",O,[t(l,{size:"large",onClick:e.handleBack,quaternary:"",circle:""},{icon:s(()=>[t(h,{class:"icon-no-align"},{default:s(()=>[t(m)]),_:1})]),_:1},8,["onClick"]),t(d,{class:"h3-item-name"},{default:s(()=>[w("Loading...")]),_:1})]),t(p,{class:"w-100",style:{"min-height":"200px"}})])}const j=$(T,[["render",G]]),J=(await y(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({setup(){const e=D(),r=z(),a=I("API");function u(c){e.push({name:"courseDetail",params:{courseUUID:c}})}return{router:e,MSG:r,API:a,columns:[{title:"Other versions",key:"name",ellipsis:!0},{title:"Ver.",key:"version",align:"center",width:50},{title:"View",key:"courseView",align:"center",width:80,render(c){return v(f,{circle:!0,quaternary:!0,size:"small",class:"btn-less-visible",renderIcon:()=>v(U),onClick:()=>u(c.courseUUID)})}}]}},data(){return{loading:!0,course:{}}},components:{NButton:f,NIcon:A,ArrowBackFilled:b,NH3:B,NDataTable:N,AddRound:P,LoadingHeader:j},props:{courseUUID:{type:String,required:!0}},watch:{courseUUID:{handler(e){this.fetchDetail(e)},immediate:!0}},methods:{async fetchDetail(e){try{this.loading=!0,this.course=await this.API.getCourseDetail(e)}catch(r){this.MSG.error(r instanceof Error?r.message:"Unknown error")}finally{this.loading=!1}},handleBack(){this.router.back()}},computed:{getURL(){if(this.course)return`https://articulateusercontent.com/review/${this.course.courseLocation}`}}});const K={key:1},Q={class:"row"},W={class:"col-9"},X={class:"d-flex align-items-center"},Y={class:"col-3"},Z={class:"iframe-container"},ee=["src"];function te(e,r,a,u,g,c){const m=n("LoadingHeader"),h=n("ArrowBackFilled"),l=n("n-icon"),d=n("n-button"),p=n("n-h3"),x=n("AddRound"),C=n("n-data-table");return e.loading?(i(),L(m,{key:0})):(i(),_("div",K,[o("div",Q,[o("div",W,[o("div",X,[t(d,{size:"large",onClick:e.handleBack,quaternary:"",circle:""},{icon:s(()=>[t(l,{class:"icon-no-align"},{default:s(()=>[t(h)]),_:1})]),_:1},8,["onClick"]),t(p,{class:"h3-item-name"},{default:s(()=>[w(R(e.course.name),1)]),_:1}),t(d,{size:"large",type:"primary",secondary:"",class:"button-add-test"},{icon:s(()=>[t(l,{class:"icon-no-align"},{default:s(()=>[t(x)]),_:1})]),default:s(()=>[w("Add test ")]),_:1})])]),o("div",Y,[o("div",Z,[o("iframe",{allowfullscreen:"true",class:"player",src:e.getURL,scrolling:"no",style:{width:"100%",height:"100%"}},null,8,ee)]),t(C,{columns:e.columns,data:e.course.otherVersions,"single-line":!0,size:"small"},null,8,["columns","data"])])])]))}const _e=$(J,[["render",te],["__scopeId","data-v-a9348bf9"]]);export{_e as default};