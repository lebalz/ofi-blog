"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[74538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,u=c["".concat(m,".").concat(k)]||c[k]||l[k]||i;return n?a.createElement(u,d(d({ref:t},s),{},{components:n})):a.createElement(u,d({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const i={image:"./images/preview.png",sidebar_label:"Installation",sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},d="Vorbereitung auf den IOT-Workshop 2023",o={unversionedId:"EF-IOT-Workshop/node-red/installation/index",id:"EF-IOT-Workshop/node-red/installation/index",title:"Vorbereitung auf den IOT-Workshop 2023",description:"Verwendete Dienste",source:"@site/docs/EF-IOT-Workshop/01-node-red/01-installation/index.md",sourceDirName:"EF-IOT-Workshop/01-node-red/01-installation",slug:"/EF-IOT-Workshop/node-red/installation/",permalink:"/EF-IOT-Workshop/node-red/installation/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-IOT-Workshop/01-node-red/01-installation/index.md",tags:[],version:"current",lastUpdatedAt:1676720199,formattedLastUpdatedAt:"18. Feb. 2023",frontMatter:{image:"./images/preview.png",sidebar_label:"Installation",sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},sidebar:"sidebar",previous:{title:"Node-RED",permalink:"/EF-IOT-Workshop/node-red/"},next:{title:"Flows",permalink:"/EF-IOT-Workshop/node-red/flows/"}},m={image:n(13557).Z},p=[{value:"Verwendete Dienste",id:"verwendete-dienste",level:2},{value:"1. Datenbank auf ElephantSQL.com erstellen",id:"1-datenbank-auf-elephantsqlcom-erstellen",level:2},{value:"2. Node-RED auf Render.com installieren",id:"2-node-red-auf-rendercom-installieren",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},l=s("Comment"),c=s("Figure"),k={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"vorbereitung-auf-den-iot-workshop-2023"},"Vorbereitung auf den IOT-Workshop 2023"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"verwendete-dienste"},"Verwendete Dienste"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Datenbank\n"),(0,r.kt)("dd",{parentName:"dl"},"PostgreSQL von ",(0,r.kt)("a",{parentName:"dd",href:"https://www.elephantsql.com/"},"ElephantSQL.com")),(0,r.kt)("dt",{parentName:"dl"},"Hosting Server\n"),(0,r.kt)("dd",{parentName:"dl"},"Plattform as a Service (PaaS) von ",(0,r.kt)("a",{parentName:"dd",href:"https://render.com/"},"Render.com"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir verwenden kostenlose Dienste, um Node-RED zu installieren. Diese Dienste bieten eine gewisse Anzahl von Ressourcen (z.B. Speicherplatz, Datenbanken, ...) kostenlos an. Sobald diese Ressourcen aufgebraucht sind, m\xfcssen Sie entweder auf eine kostenpflichtige Version upgraden oder auf einen anderen Anbieter ausweichen. Damit Node-RED durchgehend laufen kann, konfigurieren wir die Datenbank nicht bei render.com (dort wird sie nach 3 Monaten automatisch wieder abgeschalten), sondern bei ElephantSQL.com, wo eine Datenbank kostenlos zur Verf\xfcgung steht."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"1-datenbank-auf-elephantsqlcom-erstellen"},"1. Datenbank auf ElephantSQL.com erstellen"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie sich einen kostenlosen Account bei ",(0,r.kt)("a",{parentName:"p",href:"https://www.elephantsql.com/"},"ElephantSQL.com")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcber ",(0,r.kt)("strong",{parentName:"p",className:"underline"},(0,r.kt)("i",{parentName:"strong",className:"mdi-plus mdi "})," Create New Instance")," eine neue Datenbank erstellen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Step ",(0,r.kt)("i",{parentName:"dt",className:"mdi-numeric-1-box mdi orange"})," Plan\n"),(0,r.kt)("dd",{parentName:"dl"},"Name: ",(0,r.kt)("strong",{parentName:"dd",className:"underline"},"node-red")),(0,r.kt)("dt",{parentName:"dl"},"Step ",(0,r.kt)("i",{parentName:"dt",className:"mdi-numeric-1-box mdi orange"})," Plan\n"),(0,r.kt)("dd",{parentName:"dl"},"Plan: ",(0,r.kt)("strong",{parentName:"dd",className:"underline"},"Tiny Turtle (Free)")),(0,r.kt)("dt",{parentName:"dl"},"Step ",(0,r.kt)("i",{parentName:"dt",className:"mdi-numeric-2-box mdi green"})," Datacenter\n"),(0,r.kt)("dd",{parentName:"dl"},"Region: ",(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EU-West-1 (Ireland)"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In der \xdcbersicht der ebene erstellen Datenbank die URL ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres://...@....db.elephantsql.com...")," kopieren - wir brauchen sie sp\xe4ter beim erstellen von Node RED."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(80785).Z,width:"2191",height:"805"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"2-node-red-auf-rendercom-installieren"},"2. Node-RED auf Render.com installieren"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie sich einen kostenlosen Account bei ",(0,r.kt)("a",{parentName:"p",href:"https://render.com/"},"Render.com")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine Node-RED Instanz mit einem kostenlosen Server von ",(0,r.kt)("a",{parentName:"p",href:"https://render.com"},"Render")," erzeugen, indem Sie auf den untenstehenden Knopf ",(0,r.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/bh0fer/node-red-render-efin"},(0,r.kt)("strong",{parentName:"a",className:"underline"},"\ud83d\udc49 DEPLOY TO RENDER"))," klicken und dann die drei Felder ausf\xfcllen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/bh0fer/node-red-render-efin"},(0,r.kt)("div",{parentName:"a",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{parentName:"Figure",src:"https://render.com/images/deploy-to-render-button.svg",alt:"",title:""})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"DATABASE_URL\n"),(0,r.kt)("dd",{parentName:"dl"},"Die Datenbank URL, die Sie in der vorherigen Anleitung kopiert haben. Sie sieht ungef\xe4hr so aus: `postgres://",(0,r.kt)("a",{parentName:"dd",href:"mailto:...@....db.elephantsql.com.."},"...@....db.elephantsql.com.."),"."),(0,r.kt)("dt",{parentName:"dl"},"NODE_RED_USERNAME\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"admin")),(0,r.kt)("dt",{parentName:"dl"},"NODE_RED_PASSWORD\n"),(0,r.kt)("dd",{parentName:"dl"},"Ein ",(0,r.kt)("strong",{parentName:"dd"},"sicheres")," Password - Sie brauchen es jedesmal, wenn Sie auf Node-RED zugreifen wollen. ",(0,r.kt)("strong",{parentName:"dd"},"Achtung:")," Das Passwort muss mindestens 8 Zeichen lang sein und Zahlen sowie Sonderzeichen enthalten.")),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(32545).Z,width:"1984",height:"1170"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auf ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Apply")," klicken. ",(0,r.kt)("strong",{parentName:"p"},"Das wars vorerst")," \ud83e\udd73 - im Hintergrund wird jetzt der Node-RED Server aufgesetzt. Dies dauert eine Weile; Dass die Seite nicht sofort verf\xfcgbar ist oder Fehlermeldungen anzeigt, ist normal. Das werden wir am EF-IOT-Workshop 2023 gemeinsam l\xf6sen."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))))}u.isMDXComponent=!0},80785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elephant-db-10e8b6b1ba8d89bef3248bf4d15cea1d.png"},32545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-red-install-01-0ffeb293862a30d4713327b1687d84a8.png"},13557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-0629a7b0c824e538bd27508b996f868f.png"}}]);