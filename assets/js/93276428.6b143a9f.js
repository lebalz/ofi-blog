"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[65250],{41622:(e,s,a)=>{a.d(s,{A:()=>g});var o=a(96540),l=a(18215),t=a(15066),i=a(63427),n=a(92303),r=a(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=a(74848);function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function p(e,s){return!!e&&(e===s||p(e.parentElement,s))}function h(e){let{summary:s,children:a,...l}=e;(0,i.A)().collectAnchor(l.id);const h=(0,n.A)(),m=(0,o.useRef)(null),{collapsed:f,setCollapsed:g}=(0,r.u)({initialState:!l.open}),[b,j]=(0,o.useState)(l.open),x=o.isValidElement(s)?s:(0,d.jsx)("summary",{children:s??"Details"});return(0,d.jsxs)("details",{...l,ref:m,open:b,"data-collapsed":f,className:(0,t.A)(c.details,h&&c.isBrowser,l.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const s=e.target;u(s)&&p(s,m.current)&&(e.preventDefault(),f?(g(!1),j(!0)):g(!0))},children:[x,(0,d.jsx)(r.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),j(!e)},children:(0,d.jsx)("div",{className:c.collapsibleContent,children:a})})]})}const m={details:"details_b_Ee"},f="alert alert--info";function g(e){let{...s}=e;return(0,d.jsx)(h,{...s,className:(0,l.A)(f,m.details,s.className)})}},30047:(e,s,a)=>{a.d(s,{A:()=>c});a(96540);var o=a(20053);const l="container_DI4d",t="card_Dxen",i="fullscreen_Vq4o";var n=a(74848);const r=e=>(0,n.jsxs)("div",{className:(0,o.default)(t,"card"),children:[(0,n.jsx)("iframe",{src:e.url,className:(0,o.default)("card__image")}),(0,n.jsx)("div",{className:"card__footer",children:(0,n.jsxs)("a",{target:"_blank",href:e.url,className:(0,o.default)("button","button--primary","button--block"),children:["\ud83d\udc49 ",e.url]})})]}),c=e=>{const s=e.shuffle?e.urls.slice().sort((()=>Math.random()-.5)):e.urls;return(0,n.jsx)("div",{className:(0,o.default)(l,e.full&&i),children:s.map(((e,s)=>(0,n.jsx)(r,{url:e},s)))})}},53744:(e,s,a)=>{a.d(s,{A:()=>b});var o=a(92303),l=a(36277),t=a(96540),i=a(19760),n=a(11795),r=a(41622),c=a(20053),d=a(98150),u=a(83914),p=a(66188),h=a(74848);const m=()=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})}),f=(0,l.PA)((e=>(0,h.jsxs)("span",{className:(0,c.default)(d.A.policy,"badge",`badge--${e.color}`),children:[e.name," ",(0,h.jsx)(u.g,{icon:p.s0Q,onClick:e.onRemove})]}))),g=(0,l.PA)((e=>{const[s,a]=t.useState(""),[o,l]=t.useState(""),[n,r]=t.useState(""),m=(0,i.Pj)("policyStore"),g=(0,i.Pj)("adminStore"),b=(0,i.Pj)("userStore"),j=m.findPolicy(e.webKey);return j?(0,h.jsxs)("div",{className:(0,c.default)(d.A.configContainer),children:[(0,h.jsx)("div",{className:(0,c.default)(d.A.showControl),children:(0,h.jsx)(u.g,{icon:g.showAdminElement("policy_opts")?p.s0Q:p.vHW,onClick:()=>{g.toggleAdminElements("policy_opts")}})}),g.showAdminElement("policy_opts")&&(0,h.jsxs)("div",{className:(0,c.default)(d.A.config),children:[(0,h.jsxs)("div",{className:(0,c.default)(d.A.permissions),children:[Array.from(j.klasses).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>j.removePermission(e,"class"),color:"success"},s))),Array.from(j.groups).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>j.removePermission(e,"group"),color:"danger"},s))),Array.from(j.users).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>j.removePermission(e,"user"),color:"primary"},s)))]}),(0,h.jsxs)("div",{className:(0,c.default)(d.A.update),children:[(0,h.jsx)("input",{type:"text",placeholder:"Klasse",value:s,onChange:e=>a(e.target.value),disabled:j.locked,list:"solution-policy-for-classes"}),(0,h.jsx)("datalist",{id:"solution-policy-for-classes",children:b.klasses.map(((e,s)=>(0,h.jsx)("option",{value:e},s)))}),(0,h.jsx)("button",{disabled:j.locked,onClick:()=>{j.addPermission(s,"class"),a("")},children:"Add"}),(0,h.jsx)("input",{type:"text",placeholder:"Gruppe",value:o,onChange:e=>l(e.target.value),disabled:j.locked,list:"solution-policy-for-groups"}),(0,h.jsx)("datalist",{id:"solution-policy-for-groups",children:Array.from(new Set([...b.groups,...m.groups])).map(((e,s)=>(0,h.jsx)("option",{value:e},s)))}),(0,h.jsx)("button",{disabled:j.locked,onClick:()=>{j.addPermission(o,"group"),l("")},children:"Add"}),(0,h.jsx)("input",{type:"email",placeholder:"User",value:n,onChange:e=>r(e.target.value),disabled:j.locked,list:"solution-policy-for-users"}),(0,h.jsx)("datalist",{id:"solution-policy-for-users",children:b.users.map(((e,s)=>(0,h.jsx)("option",{value:e.email},s)))}),(0,h.jsx)("button",{disabled:j.locked,onClick:()=>{j.addPermission(n,"user"),r("")},children:"Add"})]})]})]}):null})),b=(0,l.PA)((e=>{const s=(0,i.Pj)("policyStore"),a=(0,i.Pj)("userStore"),l=(0,i.Pj)("adminStore"),t=(0,o.A)();if((0,i.D6)(e.webKey),!t)return(0,h.jsx)("div",{children:"SSR"});const u=s.find(e.webKey);return u?(0,h.jsx)("div",{"data--web-key":e.webKey,className:(0,c.default)(d.A.wrapper,!e.noWrap&&d.A.alignInAlert,!e.noWrap&&"solution-wrapper"),children:u.show||a.current?.admin?(0,h.jsxs)(r.A,{summary:(0,h.jsxs)("summary",{children:[e.title||"L\xf6sung"," ",(0,h.jsx)(m,{}),!u.show&&(0,h.jsx)("span",{className:"badge badge--secondary",children:"Hidden"})]}),className:(0,c.default)("alert alert--success",d.A.solution),open:e.open||l.showSolutions,children:[a.current?.admin&&(0,h.jsx)(g,{webKey:u.webKey}),(0,h.jsx)("div",{className:(0,c.default)(e.className),children:e.children})]},`poly-${e.open||l.showSolutions}`):(0,h.jsxs)("div",{className:(0,c.default)("alert",d.A.disabled),children:[e.title||"L\xf6sung"," (nicht freigeschaltet) ",(0,h.jsx)(m,{})]})}):(0,h.jsx)(n.A,{})}))},11795:(e,s,a)=>{a.d(s,{A:()=>d});a(96540);var o=a(20053);const l="loader_FEpR",t="badge_oWqf",i="overlay_cqDg";var n=a(83914),r=a(66188),c=a(74848);const d=e=>(0,c.jsxs)("div",{className:(0,o.default)(l,e.overlay&&i),children:[(0,c.jsx)(n.g,{icon:r.s4k,spin:!0}),(0,c.jsx)("span",{className:(0,o.default)("badge",t),children:e.caption||"Laden..."})]})},82590:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});a(96540);var o=a(30047),l=a(53744),t=a(74848);const i=()=>(0,t.jsxs)("div",{style:{margin:"16px",padding:"16px"},children:[(0,t.jsx)("h1",{children:"EF Webseiten 2024"}),(0,t.jsx)(l.A,{webKey:"0ba77b9b-e0c6-4b78-9a59-fa030b216c1b",title:"Websites",open:!0,children:(0,t.jsx)(o.A,{urls:["https://GabrielMariethoz.github.io/EF-Informatik","https://Valayar.github.io/EF_Informatik","https://TheTahm.github.io/EF-Informatik","https://timonj0.github.io/EF_Informatik","https://jodokfehlmann.github.io/EF-Informatik","https://GraficPixelTDSM.github.io/EF-Informatik","https://Grashaum.github.io/EF-Informatik","https://Liloubrandi.github.io/EF_Informatik","https://arraky.github.io/EF-Info","https://No0ne155.github.io/ef_info","https://luiscarlosgarzacisneros.github.io/EFInformatik","https://Gerhard-69.github.io/EF-Informatik","https://mcdelarosa.github.io/EF-Informatik","https://marioschoch.github.io/EF-Info","https://gaeschpu.github.io/Ef-Info/docs/about-me","https://Malouu3.github.io/EF-Informatik"],full:!0})})]})},98150:(e,s,a)=>{a.d(s,{A:()=>o});const o={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",alignInAlert:"alignInAlert_Ngq3",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);