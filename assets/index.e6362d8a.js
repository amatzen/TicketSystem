import{r as u,c as g,o as c,a as l,b as s,t as d,F as $,d as x,e as k,w as T,f as S,g as O,h as M,i as B,n as j,j as N,k as L,l as A,m as F,p as D,q as p,s as E,u as I,v as P}from"./vendor.2b75ee31.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};U();var _=(e,t)=>{for(const[i,o]of t)e[i]=o;return e};const V={};function q(e,t){const i=u("router-view");return c(),g(i)}var z=_(V,[["render",q]]);const H={name:"NBUserSnippet",props:{name:{type:String,required:!0},position:{type:String,required:!0}}},K={class:"flex"},J={class:"font-semibold"},G={class:"text-gray-400 text-sm"};function R(e,t,i,o,n,r){return c(),l("div",K,[s("div",null,[s("p",J,d(i.name),1),s("p",G,d(i.position),1)])])}var W=_(H,[["render",R]]);const Q={name:"Navbar",components:{NBUserSnippet:W},data(){return{navElements:[{title:"Oversigt",to:"/"},{title:"Kundeadministration",to:"/crm"},{title:"Statistik",to:"/stats"}]}}},X={class:"py-4 mb-10 bg-white shadow-sm"},Y={class:"container mx-auto flex justify-between items-center"},Z=s("span",{class:"font-bold"},[S("Ticket"),s("span",{class:"text-tealish-500"},"o")],-1),tt={class:"flex items-center h-full"},et={class:"p-2 h-full inline-block"};function st(e,t,i,o,n,r){const a=u("router-link"),m=u("NBUserSnippet");return c(),l("header",X,[s("div",Y,[Z,s("nav",null,[s("ul",tt,[(c(!0),l($,null,x(n.navElements,f=>(c(),l("li",et,[k(a,{to:f.to,title:f.title,class:"font-semibold text-gray-500","exact-active-class":"text-indigo-800"},{default:T(()=>[S(d(f.title),1)]),_:2},1032,["to","title"])]))),256))])]),k(m,{name:"Dorte",position:"Kunder\xE5dgiver"})])])}var ot=_(Q,[["render",st]]);const nt={name:"DefaultLayout",components:{Navbar:ot}},it={class:"container mx-auto"};function rt(e,t,i,o,n,r){const a=u("Navbar"),m=u("router-view");return c(),l("div",null,[k(a),s("div",it,[k(m)])])}var ct=_(nt,[["render",rt]]);const at={name:"Modal",props:{dismiss:Function}},lt={role:"dialog",class:"min-w-screen h-screen fixed left-0 top-0 flex justifty-center items-center inset-0 z-10 outline-none focus:outline-none"},dt={class:"z-20 flex bg-white mx-auto my-auto rounded overflow-hidden shadow-md"};function ut(e,t,i,o,n,r){return c(),l("div",lt,[s("div",{onClick:t[0]||(t[0]=O(a=>e.$emit("dismiss"),["prevent"])),class:"absolute bg-black opacity-20 inset-0 z-0"}),s("div",dt,[M(e.$slots,"default")])])}var _t=_(at,[["render",ut]]);const b=B(()=>j(()=>({activeTicket:null,setActiveTicket(e){this.activeTicket=e},clearActiveTicket(){this.activeTicket=null},ticketColumns:[],addTicketColumn(e){this.ticketColumns=[...this.ticketColumns,e]},ticketsList:[],addTicket(e){return this.ticketsList=[...this.ticketsList,e],e.id},updateTicket(e,t){this.ticketsList.findIndex(i=>i.id===e)},removeTicket(e){this.ticketsList=this.ticketsList.filter(t=>t.id!==e)}}))),mt={name:"TicketModal",props:{ticket:Object},components:{Modal:_t},setup(e){const t=b();return{data:e.ticket,relativeTimeFormat:n=>A(n,{locale:F}),ticketStore:t}}},pt={class:"w-full"},ft={class:"bg-gray-100 p-6"},kt={class:"mr-2 font-semibold text-gray-500"},ht={class:"mr-2 font-semibold text-gray-500"},vt={class:"text-4xl mt-2 font-bold"},gt=s("div",{class:"bg-white p-6 grid"},[s("div",null,[s("div",null,[s("span",{class:"bg-tealish-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold"},"UH"),s("p",null,"Hej hej hej")])])],-1);function $t(e,t,i,o,n,r){const a=u("Modal");return o.data?(c(),g(a,{key:0,onDismiss:t[0]||(t[0]=m=>o.ticketStore.clearActiveTicket())},{default:T(()=>[s("div",pt,[s("div",ft,[s("p",null,[s("span",kt,"#"+d(o.data.id),1),s("span",{class:N(["mr-2 font-semibold",`text-${o.data.status.color}-500`])},d(o.data.status.title),3),s("span",ht,"Oprettet "+d(o.relativeTimeFormat(o.data.created_at))+" siden",1)]),s("h1",vt,d(o.data.title),1)]),gt])]),_:1})):L("",!0)}var bt=_(mt,[["render",$t]]);const yt={name:"TicketListItem",props:{ticket:Object},setup(e){return{ticketStore:b()}}},xt={class:"text-sm"},Tt={class:"font-bold text-lg my-2"},wt={class:"text-base font-semibold"};function St(e,t,i,o,n,r){return c(),l("div",{role:"cell",class:N(`w-full bg-${i.ticket.status.color}-500 text-white p-5 rounded mb-3 cursor-pointer transform scale-100 hover:scale-105 transition-transform select-none`),onClick:t[0]||(t[0]=a=>o.ticketStore.setActiveTicket(i.ticket))},[s("p",xt,"#"+d(i.ticket.id),1),s("h3",Tt,d(i.ticket.title),1),s("p",wt,d(i.ticket.customer.name),1)],2)}var Nt=_(yt,[["render",St]]);const Lt={name:"OverviewPage",components:{TicketListItem:Nt,TicketModal:bt,Observer:D},setup(e){const t=b();return{ticketStore:t,getTicketsByColumn:o=>t.value.ticketsList.filter(n=>JSON.stringify(o)===JSON.stringify(n.status))}}},Ct={class:"w-full grid grid-cols-4 gap-12"},Ot={class:"text-xl font-bold"},Mt={class:"text-gray-600 font-semibold mb-5"};function Bt(e,t,i,o,n,r){const a=u("TicketListItem"),m=u("TicketModal"),f=u("Observer");return c(),l($,null,[s("div",null,[s("section",Ct,[(c(!0),l($,null,x(o.ticketStore.ticketColumns,v=>(c(),l("div",{role:"row",key:v.title},[s("h2",Ot,d(v.title),1),s("p",Mt,d(o.getTicketsByColumn(v).length)+" sager",1),s("div",null,[(c(!0),l($,null,x(o.getTicketsByColumn(v),w=>(c(),g(a,{key:w.id,ticket:w},null,8,["ticket"]))),128))])]))),128))])]),k(f,null,{default:T(()=>[o.ticketStore.activeTicket!==null?(c(),g(m,{key:0,ticket:o.ticketStore.activeTicket},null,8,["ticket"])):L("",!0)]),_:1})],64)}var jt=_(Lt,[["render",Bt]]);const At={name:"NotFoundPage"},Ft=s("h1",null,"Der skete en fejl",-1),Dt=s("p",null,"Vi kunne ikke finde den efterspurgte side",-1),Et=[Ft,Dt];function It(e,t,i,o,n,r){return c(),l("div",null,Et)}var Pt=_(At,[["render",It]]);const Ut=[{path:"/",component:ct,children:[{path:"/",component:jt},{path:"/:pathMatch(.*)*",component:Pt}]}];let C={ticket:0,customer:0};const h=b().value,y=e=>{const t=p.name.findName();return{created_at:p.date.past(),customer:{name:t,created_at:p.date.past(),email:p.internet.email(t.split(" ")[0]),id:C.customer++},id:C.ticket++,status:e,title:p.random.words(Math.round(Math.random()*4+1)),updated_at:p.date.recent()}};function Vt(){const e=[{title:"Nye sager",color:"indigo"},{title:"Aktive sager",color:"crimson"},{title:"Afventer kunderespons",color:"yellowish"},{title:"F\xE6rdig",color:"tealish"}];e.forEach(t=>h.addTicketColumn(t));for(let t=0;t<6;t++)h.addTicket(y(e[0]));for(let t=0;t<2;t++)h.addTicket(y(e[1]));h.addTicket(y(e[2]));for(let t=0;t<14;t++)h.addTicket(y(e[3]))}const qt=E({history:I("/"),routes:Ut});Vt();P(z).use(qt).mount("#app");