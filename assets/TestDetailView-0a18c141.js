import{_ as y,a as g}from"./LoadingHeader.vue_vue_type_script_setup_true_lang-1248f0de.js";import{e as k,Y as C,k as U,J as T,o as s,c as o,R,a as c,w as m,d as b,a0 as n,S as d,b as e,F as p,a3 as f,a4 as S,aF as w,aG as x}from"./index-554f3ce5.js";import{u as N}from"./use-message-a381c60e.js";import{a as V}from"./headers-d439fa5b.js";import{N as B}from"./Table-18631634.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-a02f3bd4.js";import"./Spin-610ccfce.js";import"./use-compitable-659eb371.js";const F=l=>(w("data-v-be263e04"),l=l(),x(),l),A={key:1,class:"d-flex align-items-center",style:{"margin-bottom":"1rem"}},L=F(()=>e("thead",null,[e("tr",null,[e("th",null,"Link"),e("th",null,"Firstname"),e("th",null,"Lastname"),e("th",null,"Email")])],-1)),G=["href"],M={colspan:4},$=["href"],u="http://localhost/course/",q=k({__name:"TestDetailView",props:{testUUID:{type:String,required:!0}},setup(l){const h=l,I=N(),D=C(),i=U(!0),a=U({});T(()=>{v(h.testUUID)});function v(_){i.value=!0,D.getTestDetail(_).then(r=>{a.value=r}).catch(r=>{I.error(r.message)}).finally(()=>{i.value=!1})}return(_,r)=>(s(),o(p,null,[i.value?(s(),R(g,{key:0})):(s(),o("div",A,[c(y),c(d(V),{class:"h3-item-name"},{default:m(()=>[b(n(a.value.name),1)]),_:1})])),c(d(S),{style:{"margin-bottom":"0.75rem"}},{default:m(()=>[c(d(B),{striped:""},{default:m(()=>[L,e("tbody",null,[(s(!0),o(p,null,f(a.value.testers,t=>(s(),o("tr",{key:t.testerUUID},[e("td",null,[e("a",{class:"link",href:u+encodeURIComponent(a.value.testUUID)+"/"+encodeURIComponent(t.testerUUID)},n(u+encodeURIComponent(a.value.testUUID)+"/"+encodeURIComponent(t.testerUUID)),9,G)]),e("td",null,n(t.firstname),1),e("td",null,n(t.lastname),1),e("td",null,n(t.email),1)]))),128)),(s(!0),o(p,null,f(a.value.anonymousTesters,t=>(s(),o("tr",{key:t.anonymousTesterUUID},[e("td",M,[e("a",{class:"link",href:u+encodeURIComponent(a.value.testUUID)+"/"+encodeURIComponent(t.anonymousTesterUUID)},n(u+encodeURIComponent(a.value.testUUID)+"/"+encodeURIComponent(t.anonymousTesterUUID)),9,$)])]))),128))])]),_:1})]),_:1})],64))}});const W=E(q,[["__scopeId","data-v-be263e04"]]);export{W as default};
