import{e as p,q as m,o as s,c as l,Y as I,k as i,J as f,R as U,S as d}from"./index-e7fb9abe.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{u as h}from"./use-message-450c0545.js";import{N as y}from"./Spin-ff46ac0b.js";import"./use-compitable-bbfa6a86.js";const g=["src"],v=p({__name:"CourseFrame",props:{courseURL:{type:String,required:!0},testUUID:{type:String,required:!0},testerUUID:{type:String,required:!0}},setup(o){const e=o,n=m(()=>`https://articulateusercontent.com/review/${e.courseURL}?testerUUID=${encodeURIComponent(e.testerUUID)}&testUUID=${encodeURIComponent(e.testUUID)}`);return(a,r)=>(s(),l("iframe",{allowfullscreen:"true",class:"player",src:n.value,scrolling:"no"},null,8,g))}});const L=D(v,[["__scopeId","data-v-061b19b3"]]),S={style:{height:"100vh"}},x=p({__name:"CourseView",props:{testUUID:{type:String,required:!0},testerUUID:{type:String,required:!0}},setup(o){const e=o,n=h(),a=I(),r=i(!0),c=i("");f(()=>{_(e.testUUID)});async function _(u){try{r.value=!0;const t=await a.getCourseLocation(u);c.value=t,await a.sendStartToLRS(e.testUUID,e.testerUUID,t)}catch(t){n.error(t instanceof Error?t.message:"Unknown error")}finally{r.value=!1}}return(u,t)=>(s(),l("main",S,[r.value?(s(),U(d(y),{key:0,style:{width:"100%","min-height":"50vh"}})):(s(),U(L,{key:c.value,testUUID:e.testUUID,testerUUID:e.testerUUID,courseURL:c.value},null,8,["testUUID","testerUUID","courseURL"]))]))}});export{x as default};