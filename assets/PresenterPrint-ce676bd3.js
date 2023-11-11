import{d as _,u as d,a as h,c as m,b as p,r as u,e as s,f as t,t as o,g as r,F as f,h as g,n as v,i as x,o as n,j as b,k as y,l as N,m as k,_ as P}from"./index-453f3b1c.js";import{N as w}from"./NoteDisplay-32f8b7f7.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>u.map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(n(),s("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",L,[t("h1",S,o(r(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(i.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(r(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),s("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/home/easonjan/pagesbuild/teacher/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
