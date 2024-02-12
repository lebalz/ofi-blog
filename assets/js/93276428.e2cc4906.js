"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8380],{34673:(e,s,o)=>{o.d(s,{Z:()=>b});var a=o(67294),l=o(36905),i=o(788),t=o(28138),n=o(72389),r=o(86043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=o(85893);function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function p(e,s){return!!e&&(e===s||p(e.parentElement,s))}function h(e){let{summary:s,children:o,...l}=e;(0,t.Z)().collectAnchor(l.id);const h=(0,n.Z)(),m=(0,a.useRef)(null),{collapsed:f,setCollapsed:b}=(0,r.u)({initialState:!l.open}),[g,x]=(0,a.useState)(l.open),j=a.isValidElement(s)?s:(0,d.jsx)("summary",{children:s??"Details"});return(0,d.jsxs)("details",{...l,ref:m,open:g,"data-collapsed":f,className:(0,i.Z)(c.details,h&&c.isBrowser,l.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const s=e.target;u(s)&&p(s,m.current)&&(e.preventDefault(),f?(b(!1),x(!0)):b(!0))},children:[j,(0,d.jsx)(r.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),x(!e)},children:(0,d.jsx)("div",{className:c.collapsibleContent,children:o})})]})}const m={details:"details_b_Ee"},f="alert alert--info";function b(e){let{...s}=e;return(0,d.jsx)(h,{...s,className:(0,l.Z)(f,m.details,s.className)})}},20552:(e,s,o)=>{o.d(s,{Z:()=>c});o(67294);var a=o(86010);const l="container_DI4d",i="card_Dxen",t="fullscreen_Vq4o";var n=o(85893);const r=e=>(0,n.jsxs)("div",{className:(0,a.default)(i,"card"),children:[(0,n.jsx)("iframe",{src:e.url,className:(0,a.default)("card__image")}),(0,n.jsx)("div",{className:"card__footer",children:(0,n.jsxs)("a",{target:"_blank",href:e.url,className:(0,a.default)("button","button--primary","button--block"),children:["\ud83d\udc49 ",e.url]})})]}),c=e=>{const s=e.shuffle?e.urls.slice().sort((()=>Math.random()-.5)):e.urls;return(0,n.jsx)("div",{className:(0,a.default)(l,e.full&&t),children:s.map(((e,s)=>(0,n.jsx)(r,{url:e},s)))})}},61014:(e,s,o)=>{o.d(s,{Z:()=>g});var a=o(72389),l=o(46670),i=o(67294),t=o(21314),n=o(74322),r=o(34673),c=o(86010),d=o(86720),u=o(99603),p=o(59417),h=o(85893);const m=()=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512",children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})}),f=(0,l.Pi)((e=>(0,h.jsxs)("span",{className:(0,c.default)(d.Z.policy,"badge",`badge--${e.color}`),children:[e.name," ",(0,h.jsx)(u.G,{icon:p.nYk,onClick:e.onRemove})]}))),b=(0,l.Pi)((e=>{const[s,o]=i.useState(""),[a,l]=i.useState(""),[n,r]=i.useState(""),m=(0,t.oR)("policyStore"),b=(0,t.oR)("adminStore"),g=(0,t.oR)("userStore"),x=m.findPolicy(e.webKey);return x?(0,h.jsxs)("div",{className:(0,c.default)(d.Z.configContainer),children:[(0,h.jsx)("div",{className:(0,c.default)(d.Z.showControl),children:(0,h.jsx)(u.G,{icon:b.showAdminElement("policy_opts")?p.nYk:p.cNd,onClick:()=>{b.toggleAdminElements("policy_opts")}})}),b.showAdminElement("policy_opts")&&(0,h.jsxs)("div",{className:(0,c.default)(d.Z.config),children:[(0,h.jsxs)("div",{className:(0,c.default)(d.Z.permissions),children:[Array.from(x.klasses).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>x.removePermission(e,"class"),color:"success"},s))),Array.from(x.groups).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>x.removePermission(e,"group"),color:"danger"},s))),Array.from(x.users).map(((e,s)=>(0,h.jsx)(f,{name:e,onRemove:()=>x.removePermission(e,"user"),color:"primary"},s)))]}),(0,h.jsxs)("div",{className:(0,c.default)(d.Z.update),children:[(0,h.jsx)("input",{type:"text",placeholder:"Klasse",value:s,onChange:e=>o(e.target.value),disabled:x.locked,list:"solution-policy-for-classes"}),(0,h.jsx)("datalist",{id:"solution-policy-for-classes",children:g.klasses.map(((e,s)=>(0,h.jsx)("option",{value:e},s)))}),(0,h.jsx)("button",{disabled:x.locked,onClick:()=>{x.addPermission(s,"class"),o("")},children:"Add"}),(0,h.jsx)("input",{type:"text",placeholder:"Gruppe",value:a,onChange:e=>l(e.target.value),disabled:x.locked,list:"solution-policy-for-groups"}),(0,h.jsx)("datalist",{id:"solution-policy-for-groups",children:Array.from(new Set([...g.groups,...m.groups])).map(((e,s)=>(0,h.jsx)("option",{value:e},s)))}),(0,h.jsx)("button",{disabled:x.locked,onClick:()=>{x.addPermission(a,"group"),l("")},children:"Add"}),(0,h.jsx)("input",{type:"email",placeholder:"User",value:n,onChange:e=>r(e.target.value),disabled:x.locked,list:"solution-policy-for-users"}),(0,h.jsx)("datalist",{id:"solution-policy-for-users",children:g.users.map(((e,s)=>(0,h.jsx)("option",{value:e.email},s)))}),(0,h.jsx)("button",{disabled:x.locked,onClick:()=>{x.addPermission(n,"user"),r("")},children:"Add"})]})]})]}):null})),g=(0,l.Pi)((e=>{const s=(0,t.oR)("policyStore"),o=(0,t.oR)("userStore"),l=(0,t.oR)("adminStore"),i=(0,a.Z)();if((0,t.aV)(e.webKey),!i)return(0,h.jsx)("div",{children:"SSR"});const u=s.find(e.webKey);return u?(0,h.jsx)("div",{"data--web-key":e.webKey,className:(0,c.default)(d.Z.wrapper,!e.noWrap&&d.Z.alignInAlert,!e.noWrap&&"solution-wrapper"),children:u.show||o.current?.admin?(0,h.jsxs)(r.Z,{summary:(0,h.jsxs)("summary",{children:[e.title||"L\xf6sung"," ",(0,h.jsx)(m,{}),!u.show&&(0,h.jsx)("span",{className:"badge badge--secondary",children:"Hidden"})]}),className:(0,c.default)("alert alert--success",d.Z.solution),open:e.open||l.showSolutions,children:[o.current?.admin&&(0,h.jsx)(b,{webKey:u.webKey}),(0,h.jsx)("div",{className:(0,c.default)(e.className),children:e.children})]},`poly-${e.open||l.showSolutions}`):(0,h.jsxs)("div",{className:(0,c.default)("alert",d.Z.disabled),children:[e.title||"L\xf6sung"," (nicht freigeschaltet) ",(0,h.jsx)(m,{})]})}):(0,h.jsx)(n.Z,{})}))},74322:(e,s,o)=>{o.d(s,{Z:()=>d});o(67294);var a=o(86010);const l="loader_FEpR",i="badge_oWqf",t="overlay_cqDg";var n=o(99603),r=o(59417),c=o(85893);const d=e=>(0,c.jsxs)("div",{className:(0,a.default)(l,e.overlay&&t),children:[(0,c.jsx)(n.G,{icon:r.IJ7,spin:!0}),(0,c.jsx)("span",{className:(0,a.default)("badge",i),children:e.caption||"Laden..."})]})},31579:(e,s,o)=>{o.r(s),o.d(s,{default:()=>t});o(67294);var a=o(20552),l=o(61014),i=o(85893);const t=()=>(0,i.jsxs)("div",{style:{margin:"16px",padding:"16px"},children:[(0,i.jsx)("h1",{children:"EF Webseiten 2024"}),(0,i.jsx)(l.Z,{webKey:"0ba77b9b-e0c6-4b78-9a59-fa030b216c1b",title:"Websites",open:!0,children:(0,i.jsx)(a.Z,{urls:["https://GabrielMariethoz.github.io/EF-Informatik","https://Valayar.github.io/EF_Informatik","https://TheTahm.github.io/EF-Informatik","https://timonj0.github.io/EF_Informatik","https://jodokfehlmann.github.io/EF-Informatik","https://GraficPixelTDSM.github.io/EF-Informatik","https://Grashaum.github.io/EF-Informatik","https://Liloubrandi.github.io/EF_Informatik","https://arraky.github.io/EF-Info","https://No0ne155.github.io/ef_info","https://luiscarlosgarzacisneros.github.io/EFInformatik","https://Gerhard-69.github.io/EF-Informatik","https://mcdelarosa.github.io/EF-Informatik","https://marioschoch.github.io/EF-Info","https://gaeschpu.github.io/Ef-Info/docs/about-me","https://Malouu3.github.io/EF-Informatik"],full:!0})})]})},86720:(e,s,o)=>{o.d(s,{Z:()=>a});const a={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",alignInAlert:"alignInAlert_Ngq3",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);