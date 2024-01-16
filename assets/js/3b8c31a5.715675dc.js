"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=s(a),u=r,k=l["".concat(o,".").concat(u)]||l[u]||c[u]||i;return a?n.createElement(k,m(m({ref:t},p),{},{components:a})):n.createElement(k,m({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[l]="string"==typeof e?e:r,m[1]=d;for(var s=2;s<i;s++)m[s]=a[s];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_custom_props:{id:"59815221-768e-4e0e-902b-641afb268e87"}},m="2. Code f\xfcr Micro:Bit",d={unversionedId:"Robotik/zustandsmaschinen/count-zeros",id:"version-24ef/Robotik/zustandsmaschinen/count-zeros",title:"2. Code f\xfcr Micro:Bit",description:"Material",source:"@site/versioned_docs/version-24ef/04-Robotik/zustandsmaschinen/02-count-zeros.md",sourceDirName:"04-Robotik/zustandsmaschinen",slug:"/Robotik/zustandsmaschinen/count-zeros",permalink:"/24ef/Robotik/zustandsmaschinen/count-zeros",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"59815221-768e-4e0e-902b-641afb268e87"}},sidebar:"version-24ef/sidebar",previous:{title:"1. Pong",permalink:"/24ef/Robotik/zustandsmaschinen/pong"},next:{title:"3. Event-State Tabelle",permalink:"/24ef/Robotik/zustandsmaschinen/binary"}},o={},s=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},l=p("Comment"),c=p("Answer"),u=p("Solution"),k={toc:s},N="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"2-code-f\xfcr-microbit"},"2. Code f\xfcr Micro:Bit"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Material\n"),(0,r.kt)("dd",{parentName:"dl"},"Micro:Bit"),(0,r.kt)("dd",{parentName:"dl"},"mit USB-Kabel an den Computer angeschlossen"),(0,r.kt)("dt",{parentName:"dl"},"Editor\n"),(0,r.kt)("dd",{parentName:"dl"},"Online-Editor ",(0,r.kt)("a",{parentName:"dd",href:"https://python.microbit.org/"},"\ud83d\udc49 python.microbit.org"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from microbit import *\nimport music\n\nFULL_SCREEN = Image('99999:99999:99999:99999:99999')\n\nstate = 'EVEN'\nmusic.set_tempo(bpm=420)\n\nwhile True:\n    current = state\n    if button_a.was_pressed():\n        if state == 'EVEN':\n            music.play(['f', 'c'])\n            state = 'ODD'\n        elif state == 'ODD':\n            music.play(['c', 'a'])\n            state = 'EVEN'\n    elif button_b.was_pressed():\n        display.show(FULL_SCREEN)\n        music.play(['c', 'd', 'c'])\n    elif state == 'EVEN':\n        display.show(Image.HAPPY)\n    elif state == 'ODD':\n        display.show(Image.ANGRY)\n")),(0,r.kt)("admonition",{type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"6a5de7d0-90cf-406a-a269-c3413e24c95c",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beschreiben Sie in eigenen Worten, was das Programm macht. Probieren Sie das Programm anschliessend auf dem Micro:Bit aus und \xfcberpr\xfcfen Sie Ihre Vermutung."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"36b195ab-12da-4fb0-8b9d-50152f3995ae",mdxType:"Answer"}),(0,r.kt)(u,{webKey:"6bf8ab78-782a-4b23-973a-7815c626e946",mdxType:"Solution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es wird angezeigt, ob die gesamte Anzahl von Tasteneingaben eine gerade Anzahl an Tasteneingaben ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"A")," enth\xe4lt. Ist die Anzahl Tastendr\xfccke ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"A")," gerade: Happy, sonst Angry."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Diese Zustandsmaschine kann bspw. beim Empfangen von Bin\xe4rzahlen mit einem Parit\xe4tsbit zur Fehlerkontrolle verwendet werden. Mit einem Parit\xe4tsbit wird immer ein zus\xe4tzliches bit hinzugef\xfcgt (das nat\xfcrlich nach dem Empfang wieder entfernt wird), und zwar so, dass die Anzahl der Nullen in der Bin\xe4rzahl eine gerade Anzahl aufweisen. Ist die Anzahl der Einsen in der Bin\xe4rzahl ungerade, so wurde ein Fehler \xfcbertragen."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)("admonition",{title:"Zustandsdiagramm",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"bdd1d61d-46f9-441b-97a5-0ed78f21231c",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberf\xfchren Sie das Programm in ein Zustandsdiagramm und halten Sie Ihre L\xf6sung unten fest. Achten Sie darauf, dass Sie die Transitionen mit ihren Ereignissen und Aktionen korrekt benennen."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"39ec39f2-671d-4d55-9ced-8d07f0a8e674",mdxType:"Answer"}),(0,r.kt)(u,{webKey:"6bf8ab78-782a-4b23-973a-7815c626e946",mdxType:"Solution"},(0,r.kt)("mermaid",{parentName:"admonition",value:"stateDiagram-v2 \n    direction LR\n    classDef edgeLabel background:#ffffffdd\n    [*] --\x3e EVEN\n    EVEN --\x3e ODD: A geklickt /Musik F,C\n    ODD --\x3e EVEN: A geklickt /Musik C,A\n    EVEN --\x3e EVEN: timer /Happy\n    EVEN --\x3e EVEN: B geklickt /Musik C,D,C\n    ODD --\x3e ODD: timer /ANGRY\n    ODD --\x3e ODD: B geklickt /Musik C,D,C"}))),(0,r.kt)("admonition",{title:"Event-State Tabelle",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"49cefe33-f72e-41af-b838-2e890083573c",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberf\xfchren Sie das Programm in eine Event-State Tabelle und halten Sie Ihre L\xf6sung unten fest."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"ac030e31-1af2-4ee7-a29e-8559f0159834",mdxType:"Answer"}),(0,r.kt)(u,{webKey:"6bf8ab78-782a-4b23-973a-7815c626e946",mdxType:"Solution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("span",{style:{float:"right"}},"Zustand ",(0,r.kt)("i",{parentName:"th",className:"mdi-arrow-right mdi "})),(0,r.kt)("br",null),"Ereignis ",(0,r.kt)("i",{parentName:"th",className:"mdi-arrow-down mdi "})),(0,r.kt)("th",{parentName:"tr",align:"left"},"EVEN"),(0,r.kt)("th",{parentName:"tr",align:"left"},"ODD"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Button A")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-music mdi "})," ",(0,r.kt)("em",{parentName:"td"},"f,c")," ",(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"ODD")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-music mdi "})," ",(0,r.kt)("em",{parentName:"td"},"c,a"),(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"EVEN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Button B")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-music mdi "})," ",(0,r.kt)("em",{parentName:"td"},"c,d,c")," ",(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"EVEN")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-music mdi "})," ",(0,r.kt)("em",{parentName:"td"},"c,d,c")," ",(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"ODD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Timer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HAPPY ",(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"EVEN")),(0,r.kt)("td",{parentName:"tr",align:"left"},"ANGRY ",(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"td",className:"underline"},"ODD"))))),(0,r.kt)(l,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})))))}b.isMDXComponent=!0}}]);