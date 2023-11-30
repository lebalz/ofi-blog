"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(n),b=r,u=c["".concat(s,".").concat(b)]||c[b]||l[b]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},10819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"09b52e70-bacc-407b-bb1c-482abc896c63"}},o="3. Zustandsdiagramm",d={unversionedId:"Robotik/zustandsmaschinen/riddle",id:"version-24ef/Robotik/zustandsmaschinen/riddle",title:"3. Zustandsdiagramm",description:"Oben ist ein Zustandsdiagramm f\xfcr ein Spiel. Beschreiben Sie den Ablauf in eigenen Worten.",source:"@site/versioned_docs/version-24ef/04-Robotik/zustandsmaschinen/03-riddle.md",sourceDirName:"04-Robotik/zustandsmaschinen",slug:"/Robotik/zustandsmaschinen/riddle",permalink:"/24ef/Robotik/zustandsmaschinen/riddle",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"09b52e70-bacc-407b-bb1c-482abc896c63"}},sidebar:"version-24ef/sidebar",previous:{title:"2. Event-State Tabelle",permalink:"/24ef/Robotik/zustandsmaschinen/binary"},next:{title:"Coroutinen und asyncio",permalink:"/24ef/Robotik/asyncio/"}},s={},m=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Comment"),l=p("Answer"),b={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"3-zustandsdiagramm"},"3. Zustandsdiagramm"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("mermaid",{value:"stateDiagram-v2\n    [*] --\x3e START\n    START--\x3eA#1: /reset display\n    A#1--\x3eA#2: A/1\n    A#2--\x3eSHAKE#3: A/2\n    SHAKE#3--\x3eB#4: shake/3\n    B#4--\x3eA#5: B/4\n    A#5--\x3eWIN: A\n    WIN--\x3eEND: /Happy smile, play winner sound\n    A#1--\x3eLOST: not A\n    A#2--\x3eLOST: not A\n    SHAKE#3--\x3eLOST: not shake\n    B#4--\x3eLOST: not B\n    A#5--\x3eLOST: not A\n    LOST--\x3eEND: /Sad smile, play loser sound\n    END--\x3e[*]"}),(0,r.kt)("admonition",{type:"aufgabe"},(0,r.kt)(l,{type:"state",webKey:"ad01684f-a9b2-4f69-9938-d1093625abc8",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Oben ist ein Zustandsdiagramm f\xfcr ein Spiel. Beschreiben Sie den Ablauf in eigenen Worten."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)(l,{type:"text",webKey:"2a627285-08ed-4a7d-aae5-de72ed174597",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"Event-State Tabelle",type:"aufgabe"},(0,r.kt)(l,{type:"state",webKey:"aaafd952-3053-40ca-a8bc-24098702716f",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcbersetzen Sie das Zustandsiagramm in eine Event-State Tabelle und halten Sie Ihre L\xf6sung unten fest."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)(l,{type:"text",webKey:"07a94c07-3902-444c-9133-497e3ba0f97a",mdxType:"Answer"})),(0,r.kt)("admonition",{type:"aufgabe"},(0,r.kt)(l,{type:"state",webKey:"c237f407-e5e3-4363-99fe-681138a07ba7",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Material\n"),(0,r.kt)("dd",{parentName:"dl"},"Micro:Bit"),(0,r.kt)("dd",{parentName:"dl"},"mit USB-Kabel an den Computer angeschlossen"),(0,r.kt)("dt",{parentName:"dl"},"Editor\n"),(0,r.kt)("dd",{parentName:"dl"},"Online-Editor ",(0,r.kt)("a",{parentName:"dd",href:"https://python.microbit.org/"},"\ud83d\udc49 python.microbit.org"))),(0,r.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Programmieren Sie die Zustandsmaschine auf dem Micro:Bit. Verwenden Sie dazu ein neues Projekt im Online-Editor und halten Sie Ihre L\xf6sung unten fest."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-mpy",metastring:"live_py id=b478b867-6ac9-46cc-a11a-a611db9b0b8f title=riddle.mpy",live_py:!0,id:"b478b867-6ac9-46cc-a11a-a611db9b0b8f",title:"riddle.mpy"},""))))}f.isMDXComponent=!0}}]);