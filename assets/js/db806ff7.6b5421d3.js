"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[94770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47308:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const i={browserWindow:"browserWindow_yPfJ",browserWindowHeader:"browserWindowHeader_wZIS",buttons:"buttons_zwH1",dot:"dot_ZAty",browserWindowAddressBar:"browserWindowAddressBar_wTY6",browserType:"browserType_z_w8",spacer:"spacer_K9AZ",browserWindowMenuIcon:"browserWindowMenuIcon_pPcI",bar:"bar_zMS1",browserWindowBody:"browserWindowBody_fsGG"},o={chrome:"mdi-google-chrome",edge:"mdi-microsoft-edge",firefox:"mdi-firefox",safari:"mdi-apple-safari"},d={chrome:"blue",edge:"cyan",firefox:"orange",safari:"blue"},l={copied:"mdi-clipboard-check",error:"mdi-clipboard-text-off",spin:"mdi-loading"},m={copied:"green",error:"red",spin:"black"};function s(e){let{children:t,minHeight:n,copy:s,url:p="http://localhost:3000",browser:c}=e;const[u,k]=r.useState("none");r.useEffect((()=>{if(["none","spin","ready"].includes(u))return;const e=setTimeout((()=>k("none")),2e3);return()=>clearTimeout(e)}),[u]);return r.createElement("div",{className:i.browserWindow,style:{minHeight:n}},r.createElement("div",{className:i.browserWindowHeader},r.createElement("div",{className:i.buttons},r.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.default)(i.browserWindowAddressBar,"text--truncate")},c&&r.createElement("i",{className:(0,a.default)("mdi",o[c],d[c],i.browserType)}),r.createElement("a",{href:p,target:"_blank",onClick:e=>{if(s){e.preventDefault(),e.stopPropagation(),k("spin");try{navigator.clipboard.writeText(p).then((()=>{k("copied")})).catch((e=>{k("error"),console.warn(e)}))}catch(t){console.warn(t),k("error")}}}},p),"none"!==u&&r.createElement(r.Fragment,null,r.createElement("div",{className:i.spacer}),r.createElement("i",{className:(0,a.default)("mdi",l[u],m[u],i.copyState)}))),r.createElement("div",{className:i.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:i.bar}),r.createElement("span",{className:i.bar}),r.createElement("span",{className:i.bar})))),r.createElement("div",{className:i.browserWindowBody},t))}},97153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=n(83117),a=(n(67294),n(3905));n(47308);const i={sidebar_custom_props:{id:"877f8d0c-cc46-4cdd-9b49-81969386097a"}},o="Slicen",d={unversionedId:"IoT-Workshop/printing/Slicing/index",id:"version-24ef/IoT-Workshop/printing/Slicing/index",title:"Slicen",description:"Aus dem STL-Modell soll nun ein konkreter Druck-Ablaufplan erzeugt werden, welcher Schicht-f\xfcr-Schicht vorgibt, wo sich der Druck-Kopf durchbewegen soll.",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/03-printing/02-Slicing/index.md",sourceDirName:"10-IoT-Workshop/03-printing/02-Slicing",slug:"/IoT-Workshop/printing/Slicing/",permalink:"/24ef/IoT-Workshop/printing/Slicing/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"877f8d0c-cc46-4cdd-9b49-81969386097a"}},sidebar:"version-24ef/sidebar",previous:{title:"OpenSCAD",permalink:"/24ef/IoT-Workshop/printing/OpenScad/"},next:{title:"Micro Python",permalink:"/24ef/IoT-Workshop/micropython/"}},l={},m=[{value:"Einstellungen",id:"einstellungen",level:2},{value:"Drucken",id:"drucken",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=s("Comment"),c=s("Figure"),u={toc:m};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"slicen"},"Slicen"),(0,a.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Aus dem STL-Modell soll nun ein konkreter ",(0,a.kt)("strong",{parentName:"p"},"Druck-Ablaufplan")," erzeugt werden, welcher Schicht-f\xfcr-Schicht vorgibt, wo sich der Druck-Kopf durchbewegen soll."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://www.prusa3d.com/page/prusaslicer_424/"},"\ud83d\udc49 Prusa Slicer")," herunterladen und installieren."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die Standard-Einstellungen sind grunds\xe4tzlich gut - f\xfcr die Drucker w\xe4hlen Sie ",(0,a.kt)("strong",{parentName:"p"},"folgende Modelle")," aus:"),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p",className:"underline"},"Original Prusa i3 MK3S & MK3S+")," (0.4mm nozzle)"),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p",className:"underline"},"Original Prusa i3 MK3S & MK3S+ MMU2S")," (0.4mm nozzle)"),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Mit dem Slicer kann nun das heruntergeladene STL-File f\xfcr den Druck vorbereitet werden."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("admonition",{title:"Grundlagen",type:"aufgabe"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Lesen Sie die kurze Einf\xfchrung zum Prusa Slicer ",(0,a.kt)("a",{parentName:"p",href:"https://help.prusa3d.com/article/first-print-with-prusaslicer_1753"},"\ud83d\udc49 hier")),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"einstellungen"},"Einstellungen"),(0,a.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Druckeinstellungen\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"0.30mm DRAFT")),(0,a.kt)("dt",{parentName:"dl"},"Filament\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"Prusament PLA")),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"Prusament PETG")),(0,a.kt)("dt",{parentName:"dl"},"Drucker\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"Original Prusa i3 MK3S & MK3S+")," (0.4mm nozzle)"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"Original Prusa i3 MK3S & MK3S+ MMU2S")," (0.4mm nozzle)"),(0,a.kt)("dt",{parentName:"dl"},"St\xfctzen\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"Keine")),(0,a.kt)("dt",{parentName:"dl"},"Infill\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"20%"))),(0,a.kt)(p,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Je nach Farb-Wunsch (schauen Sie bei den 3 Druckern, was es f\xfcr Farben gibt - beim ",(0,a.kt)("strong",{parentName:"p",className:"underline"},"MMU2S")," zudem, welchen Kanal) w\xe4hlen Sie oben die korrekten Einstellungen. Insbesondere muss beim Mehrfarben-Drucker beim Modell die korrekte Farbe gew\xe4hlt werden."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(93076).Z,width:"1377",height:"925"})),(0,a.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Enth\xe4lt das Modell \xfcberh\xe4ngende Konstruktionen, so m\xfcssen f\xfcr diese St\xfctzen generiert werden (diese k\xf6nnen sp\xe4ter leicht abgel\xf6st werden). Die Option ",(0,a.kt)("strong",{parentName:"p",className:"underline"},"St\xfctzen nur auf dem Druckbett")," sollte f\xfcr die meisten Modelle ausreichen."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,a.kt)("admonition",{title:"Keine Modelle mit mehreren Farben",type:"warn"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Aus Zeitg\xfcnden und weil es oft komplikationen gibt, verzichten wir heute auf mehrfarbige Drucke. Entscheiden Sie sich also f\xfcr eine Farbe und drucke Sie damit das ganze Modell."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"drucken"},"Drucken"),(0,a.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Klicken Sie unten links auf ",(0,a.kt)("strong",{parentName:"p",className:"underline"},"Jetzt Slicen")," und speichern Sie die erzeugte ",(0,a.kt)("inlineCode",{parentName:"p"},".gcode"),"-Datei auf der SD-Karte. Mit dieser Karte gehen Sie zum entsprechenden Drucker und starten den Druck."),(0,a.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))}k.isMDXComponent=!0},93076:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-color-b064c337d55c835500cacf920ae47765.png"}}]);