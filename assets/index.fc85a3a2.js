import{r as u,o as a,c as f,a as l,b as p,d as m,e as _,f as v,g as h,h as $}from"./vendor.5c6c1582.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};y();var i=(n,r)=>{for(const[o,c]of r)n[o]=c;return n};const g={};function N(n,r){const o=u("router-view");return a(),f(o)}var b=i(g,[["render",N]]);const x={name:"Navbar"},w=p("p",null,[m("Ticket"),p("span",{class:"text-green-500"},"o")],-1),L=[w];function O(n,r,o,c,e,t){return a(),l("header",null,L)}var k=i(x,[["render",O]]);const A={name:"DefaultLayout",components:{Navbar:k}};function B(n,r,o,c,e,t){const s=u("Navbar"),d=u("router-view");return a(),l("div",null,[_(s),_(d)])}var P=i(A,[["render",B]]);const V={name:"OverviewPage"};function D(n,r,o,c,e,t){return a(),l("h1",null,"test")}var E=i(V,[["render",D]]);const T=[{path:"/",component:P,children:[{path:"/",component:E}]}],j=v({history:h("/"),routes:T});$(b).use(j).mount("#app");
