"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56388],{22356:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=s(74848),i=s(28453),d=s(9165),t=s(85996),l=s.n(t);const o={image:"./images/node-red-elephantsql.png",sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},a="Vorbereitung auf den IOT-Workshop 2023",c={type:"mdx",permalink:"/software-installation/node-red/v3.0/",source:"@site/src/pages/software-installation/node-red/v3.0/index.md",title:"Vorbereitung auf den IOT-Workshop 2023",description:"Verwendete Dienste",frontMatter:{image:"./images/node-red-elephantsql.png",sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},unlisted:!1},h={image:s(6373).A},p=[{value:"Verwendete Dienste",id:"verwendete-dienste",level:2},{value:"1. Datenbank auf ElephantSQL.com erstellen",id:"1-datenbank-auf-elephantsqlcom-erstellen",level:2},{value:"2. Node-RED auf Render.com installieren",id:"2-node-red-auf-rendercom-installieren",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Dl:t,Figure:o}=n;return t||u("Dl",!0),o||u("Figure",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vorbereitung-auf-den-iot-workshop-2023",children:"Vorbereitung auf den IOT-Workshop 2023"}),"\n",(0,r.jsx)(n.h2,{id:"verwendete-dienste",children:"Verwendete Dienste"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Datenbank"})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["PostgreSQL von ",(0,r.jsx)(n.a,{href:"https://www.elephantsql.com/",children:"ElephantSQL.com"})]})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Hosting Server"})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["Plattform as a Service (PaaS) von ",(0,r.jsx)(n.a,{href:"https://render.com/",children:"Render.com"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Wir verwenden kostenlose Dienste, um Node-RED zu installieren. Diese Dienste bieten eine gewisse Anzahl von Ressourcen (z.B. Speicherplatz, Datenbanken, ...) kostenlos an. Sobald diese Ressourcen aufgebraucht sind, m\xfcssen Sie entweder auf eine kostenpflichtige Version upgraden oder auf einen anderen Anbieter ausweichen. Damit Node-RED durchgehend laufen kann, konfigurieren wir die Datenbank nicht bei render.com (dort wird sie nach 3 Monaten automatisch wieder abgeschalten), sondern bei ElephantSQL.com, wo eine Datenbank kostenlos zur Verf\xfcgung steht."}),"\n",(0,r.jsx)(n.h2,{id:"1-datenbank-auf-elephantsqlcom-erstellen",children:"1. Datenbank auf ElephantSQL.com erstellen"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstellen Sie sich einen kostenlosen Account bei ",(0,r.jsx)(n.a,{href:"https://www.elephantsql.com/",children:"ElephantSQL.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcber ",(0,r.jsxs)("strong",{className:"boxed",children:[(0,r.jsx)(l(),{path:d.mdiPlus,size:"1.25em",className:"mdi-icon"})," Create New Instance"]})," eine neue Datenbank erstellen:"]}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("dt",{children:(0,r.jsxs)(n.p,{children:["Step ",(0,r.jsx)(l(),{path:d.mdiNumeric1Box,className:"mdi-icon orange",size:"1.25em"})," Plan"]})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["Name: ",(0,r.jsx)("strong",{className:"boxed",children:"node-red"})]})}),(0,r.jsx)("dt",{children:(0,r.jsxs)(n.p,{children:["Step ",(0,r.jsx)(l(),{path:d.mdiNumeric1Box,className:"mdi-icon orange",size:"1.25em"})," Plan"]})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["Plan: ",(0,r.jsx)("strong",{className:"boxed",children:"Tiny Turtle (Free)"})]})}),(0,r.jsx)("dt",{children:(0,r.jsxs)(n.p,{children:["Step ",(0,r.jsx)(l(),{path:d.mdiNumeric2Box,className:"mdi-icon green",size:"1.25em"})," Datacenter"]})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["Region: ",(0,r.jsx)("strong",{className:"boxed",children:"EU-West-1 (Ireland)"})]})})]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["In der \xdcbersicht der ebene erstellen Datenbank die URL ",(0,r.jsx)(n.code,{children:"postgres://...@....db.elephantsql.com..."})," kopieren - wir brauchen sie sp\xe4ter beim erstellen von Node RED."]}),"\n"]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(n.img,{src:s(35695).A+"",width:"2191",height:"805"})}),"\n",(0,r.jsx)(n.h2,{id:"2-node-red-auf-rendercom-installieren",children:"2. Node-RED auf Render.com installieren"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Erstellen Sie sich einen kostenlosen Account bei ",(0,r.jsx)(n.a,{href:"https://render.com/",children:"Render.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["Eine Node-RED Instanz mit einem kostenlosen Server von ",(0,r.jsx)(n.a,{href:"https://render.com",children:"Render"})," erzeugen, indem Sie auf den untenstehenden Knopf ",(0,r.jsx)(n.a,{href:"https://render.com/deploy?repo=https://github.com/bh0fer/node-red-render-efin",children:(0,r.jsx)("strong",{className:"boxed",children:"\ud83d\udc49 DEPLOY TO RENDER"})})," klicken und dann die drei Felder ausf\xfcllen:"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://render.com/deploy?repo=https://github.com/bh0fer/node-red-render-efin",children:(0,r.jsx)(o,{children:(0,r.jsx)(n.img,{src:"https://render.com/images/deploy-to-render-button.svg",alt:""})})})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"DATABASE_URL"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:"Die Datenbank URL, die Sie in der vorherigen Anleitung kopiert haben. Sie sieht ungef\xe4hr so aus: `postgres://...@....db.elephantsql.com..."})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"NODE_RED_USERNAME"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"admin"})})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"NODE_RED_PASSWORD"})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["Ein ",(0,r.jsx)(n.strong,{children:"sicheres"})," Password - Sie brauchen es jedesmal, wenn Sie auf Node-RED zugreifen wollen. ",(0,r.jsx)(n.strong,{children:"Achtung:"})," Das Passwort muss mindestens 8 Zeichen lang sein und Zahlen sowie Sonderzeichen enthalten."]})})]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(n.img,{src:s(48034).A+"",width:"1984",height:"1170"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Auf ",(0,r.jsx)("strong",{className:"boxed",children:"Apply"})," klicken. ",(0,r.jsx)(n.strong,{children:"Das wars vorerst"})," \ud83e\udd73 - im Hintergrund wird jetzt der Node-RED Server aufgesetzt. Dies dauert eine Weile; Dass die Seite nicht sofort verf\xfcgbar ist oder Fehlermeldungen anzeigt, ist normal. Das werden wir am EF-IOT-Workshop 2023 gemeinsam l\xf6sen."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6373:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/node-red-elephantsql-0629a7b0c824e538bd27508b996f868f.png"},35695:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/elephant-db-10e8b6b1ba8d89bef3248bf4d15cea1d.png"},48034:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/node-red-install-01-0ffeb293862a30d4713327b1687d84a8.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const i={},d=r.createContext(i);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);