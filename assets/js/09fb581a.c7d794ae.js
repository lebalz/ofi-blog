"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[77298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(m,".").concat(u)]||c[u]||l[u]||i;return n?r.createElement(k,d(d({ref:t},p),{},{components:n})):r.createElement(k,d({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var s=2;s<i;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_custom_props:{id:"88196782-dbfc-4928-94bd-c5885ae07255"}},d="Flows",o={unversionedId:"EF-IOT-Workshop/node-red/flows/index",id:"EF-IOT-Workshop/node-red/flows/index",title:"Flows",description:"---",source:"@site/docs/EF-IOT-Workshop/01-node-red/02-flows/index.md",sourceDirName:"EF-IOT-Workshop/01-node-red/02-flows",slug:"/EF-IOT-Workshop/node-red/flows/",permalink:"/EF-IOT-Workshop/node-red/flows/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-IOT-Workshop/01-node-red/02-flows/index.md",tags:[],version:"current",lastUpdatedAt:1676720199,formattedLastUpdatedAt:"18. Feb. 2023",frontMatter:{sidebar_custom_props:{id:"88196782-dbfc-4928-94bd-c5885ae07255"}},sidebar:"sidebar",previous:{title:"Installation",permalink:"/EF-IOT-Workshop/node-red/installation/"},next:{title:"Chuck Norris",permalink:"/EF-IOT-Workshop/node-red/flows/chuck-norris"}},m={},s=[{value:"Node RED Starten",id:"node-red-starten",level:2},{value:"Installation \xdcberpr\xfcfen",id:"installation-\xfcberpr\xfcfen",level:2},{value:"Immer Online",id:"immer-online",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=p("Comment"),c=p("Figure"),u=p("Answer"),k={toc:s};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"flows"},"Flows"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"Node, Connection, Flow",type:"info"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Node\n"),(0,a.kt)("dd",{parentName:"dl"},"Ein K\xe4stchen mit einer Funktion"),(0,a.kt)("dt",{parentName:"dl"},"Verbindung\n"),(0,a.kt)("dd",{parentName:"dl"},"Verbindet zwei Nodes miteinander"),(0,a.kt)("dt",{parentName:"dl"},"Flow\n"),(0,a.kt)("dd",{parentName:"dl"},"Alle Nodes die (auch indirekt) miteinander verbunden sind")),(0,a.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"}))),(0,a.kt)("admonition",{title:"Nodes",type:"info"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Jede Node kann ein, zwei oder drei Funktionalit\xe4ten zur Verf\xfcgung stellen:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Input\n"),(0,a.kt)("dd",{parentName:"dl"},"Sobald eine Nachricht \xfcber die Verbindung eintrifft, wird die Node ausgef\xfchrt"),(0,a.kt)("dt",{parentName:"dl"},"Verarbeitung\n"),(0,a.kt)("dd",{parentName:"dl"},"Der Inhalt der empfangenen Nachricht verarbeiten, anzeigen, speichern, ... "),(0,a.kt)("dt",{parentName:"dl"},"Output\n"),(0,a.kt)("dd",{parentName:"dl"},"Eine neue Nachricht kann an alle verbundenen Nodes weitergegeben werden.")),(0,a.kt)(l,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"}))),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"node-red-starten"},"Node RED Starten"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Auf ",(0,a.kt)("a",{parentName:"p",href:"https://render.com"},"\ud83d\udc49 render.com")," kann im Dashboard beim Web Service ",(0,a.kt)("strong",{parentName:"p",className:"underline"},"node-red")," die URL, unter welcher Ihr pers\xf6nlicher Node-RED Dienst verf\xfcgbar ist, nachgeschaut werden:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(40990).Z,width:"1894",height:"691"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Navigieren Sie auf diese Seite - es wird relativ lange dauern (ca. 2-3 Minuten), bis die Seite geladen hat. Wieso? Um Rechenzeit und somit auch Kosten zu sparen, werden inaktive Server (nur kostenlose) in einen Ruhezustand versetzt. Ein Server gilt als inaktiv, wenn er l\xe4nger als 15 Minuten keine Webseite mehr anzeigen musste. Wenn Sie nun zum erste Mal nach einiger Zeit den Dienst aufrufen, dauert es einen Moment, bis die Seite wieder online ist."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Hat alles geklappt, k\xf6nnen Sie sich mit den bei der Installation gew\xe4hlten Login-Daten (",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_RED_USERNAME")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_RED_PASSWORD"),") einloggen (Username: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),", Passwort: ",(0,a.kt)("inlineCode",{parentName:"p"},"WasSieGesetztHaben"),")):"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{width:"350px"},mdxType:"Figure"},(0,a.kt)("img",{alt:"--width=350px",src:n(42177).Z,width:"895",height:"480"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"installation-\xfcberpr\xfcfen"},"Installation \xdcberpr\xfcfen"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("admonition",{title:"Erster Flow erzeugen",type:"aufgabe"},(0,a.kt)(u,{type:"state",webKey:"5e83c82b-90cc-4cdf-819d-ad9bdffd3b99",mdxType:"Answer"}),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Erstellen Sie Ihren ersten Flow und \xdcberpr\xfcfen Sie, das alles genau so funktioniert wie im Video:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,a.kt)("video",{style:{maxWidth:"100%"},controls:!0},(0,a.kt)("source",{src:n(55360).Z})))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"immer-online"},"Immer Online"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Damit unsere Flows st\xe4ndig aktiv bleiben, m\xfcssen wir sicherstellen, dass Render.com unsere Server nicht inaktiv setzt. Dazu erzeugen wir einen Flow, welcher alle 5 Minuten die Startseite aufruft und somit verhindert, dass Node-RED in den Ruhezustand versetzt wird."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("admonition",{title:"KeepAlive umsetzen",type:"aufgabe"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Erzeugen Sie einen eigenen ",(0,a.kt)("inlineCode",{parentName:"p"},"KeepAlive")," Flow und deployen sie diesen:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,a.kt)("video",{style:{maxWidth:"100%"},controls:!0},(0,a.kt)("source",{src:n(34086).Z})))))}f.isMDXComponent=!0},55360:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/flow-1-7df421f6ecddbd022fc00e2efaded85f.mp4"},34086:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/node-red-keep-running-7d77abcdd040c0651b1e6e01cbbd49bb.mp4"},40990:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-red-install-03-df2735e00971e335a90bcd12f9b1a310.png"},42177:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-red-login-screen-4eb3a5a540ad00000feafe40381efdab.png"}}]);