import{_ as u,a6 as f,i as h,h as a,N as g,a as c,r as l,o as d,c as w,b as i,w as T,F as k,e as b,L as C}from"./index-96555aa1.js";import{N,R as y}from"./RemoveRedEyeFilled-90220f0c.js";import{N as D}from"./headers-50bcb4c0.js";import{u as I}from"./use-message-88ff6297.js";import{N as v}from"./Input-5b7f551f.js";import"./Icon-5b18e85f.js";import"./use-compitable-84d7e7e6.js";import"./Dropdown-ea137d15.js";function o(e,t,n="medium"){return a(v,{bordered:!1,type:e,size:n,style:"margin-right: 6px"},{default:()=>t})}const A=e=>{const t=new Date,n=e.startAt?new Date(e.startAt):null,s=e.endAt?new Date(e.endAt):null;return n?n>t?o("warning","Planned"):!s||s>t?o("info","Active"):o("success","Completed"):null};function P(e){const t=["Unknown","I/O Test","I/O Evaluation","Timed retency","Feedback","Live comments"];return e<0||e>=t.length?t[0]:t[e]}const $=e=>e.modules?e.modules.map(t=>o("default",P(t),"tiny")):null,E=({viewDetail:e})=>[{title:"Test name",key:"name",ellipsis:!0},{title:"State",key:"state",width:160,render(t){return A(t)}},{title:"Course",key:"courseView",align:"center",width:80,render(t){return a(g,{circle:!0,quaternary:!0,size:"small",class:"btn-less-visible",renderIcon:()=>a(y),onClick:n=>{n.stopPropagation(),e(t)}})}},{title:"Modules",key:"modules",render(t){return $(t)}}],R=(await u(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{NDataTable:N,NH2:D},setup(){const e=f(),t=I(),n=h("API");return{MSG:t,API:n,columns:E({viewDetail(s){e.push({name:"courseDetail",params:{courseUUID:s.courseUUID}})}})}},mounted(){this.API.getTestList().then(e=>{this.loading=!1,this.tests=e}).catch(e=>{this.loading=!1,this.MSG.error(e.message)})},data(){return{loading:!0,tests:[],rowProps:e=>({style:"cursor: pointer",onClick:()=>this.handleRowClick(e)})}},methods:{handleRowClick(e){console.log(e.testUUID)}},computed:{isEmpty(){return this.tests.length===0}}});function U(e,t,n,s,m,p){const r=l("n-h2"),_=l("n-data-table");return d(),w(k,null,[i(r,null,{default:T(()=>[b("List of tests")]),_:1}),i(_,{columns:e.columns,data:e.tests,bordered:!1,loading:e.loading,"row-props":e.rowProps},null,8,["columns","data","loading","row-props"])],64)}const L=c(R,[["render",U]]),M=(await u(()=>import("./vue.runtime.esm-bundler-7bc2f961.js"),["assets/vue.runtime.esm-bundler-7bc2f961.js","assets/index-96555aa1.js","assets/index-7cb7eea5.css"])).defineComponent({components:{TestTable:L}});function V(e,t,n,s,m,p){const r=l("TestTable");return d(),C(r)}const z=c(M,[["render",V]]);export{z as default};
