"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62432],{3905:(e,i,M)=>{M.d(i,{Zo:()=>c,kt:()=>d});var t=M(67294);function n(e,i,M){return i in e?Object.defineProperty(e,i,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[i]=M,e}function a(e,i){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),M.push.apply(M,t)}return M}function l(e){for(var i=1;i<arguments.length;i++){var M=null!=arguments[i]?arguments[i]:{};i%2?a(Object(M),!0).forEach((function(i){n(e,i,M[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):a(Object(M)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(M,i))}))}return e}function r(e,i){if(null==e)return{};var M,t,n=function(e,i){if(null==e)return{};var M,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)M=a[t],i.indexOf(M)>=0||(n[M]=e[M]);return n}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)M=a[t],i.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(n[M]=e[M])}return n}var I=t.createContext({}),w=function(e){var i=t.useContext(I),M=i;return e&&(M="function"==typeof e?e(i):l(l({},i),e)),M},c=function(e){var i=w(e.components);return t.createElement(I.Provider,{value:i},e.children)},T="mdxType",s={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},o=t.forwardRef((function(e,i){var M=e.components,n=e.mdxType,a=e.originalType,I=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),T=w(M),o=n,d=T["".concat(I,".").concat(o)]||T[o]||s[o]||a;return M?t.createElement(d,l(l({ref:i},c),{},{components:M})):t.createElement(d,l({ref:i},c))}));function d(e,i){var M=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var a=M.length,l=new Array(a);l[0]=o;var r={};for(var I in i)hasOwnProperty.call(i,I)&&(r[I]=i[I]);r.originalType=e,r[T]="string"==typeof e?e:n,l[1]=r;for(var w=2;w<a;w++)l[w]=M[w];return t.createElement.apply(null,l)}return t.createElement.apply(null,M)}o.displayName="MDXCreateElement"},36126:(e,i,M)=>{M.d(i,{Z:()=>m});var t=M(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var a=M(86010);const l=e=>t.createElement("div",{className:n.step},e.code),r=e=>t.createElement("div",{className:(0,a.default)(n.call,n.step,n.bordered)},e.code),I=e=>t.createElement("div",{className:(0,a.default)(n.step,n.statement)},e.code),w=e=>t.createElement("div",{className:(0,a.default)(n.repeat,n.step,n.indent)},t.createElement("div",{className:n.header},e.code),t.createElement("div",{className:n.body},e.block&&t.createElement(d,{program:e.block}))),c=e=>t.createElement("div",{className:(0,a.default)(n.def,n.step,n.indent)},t.createElement("div",{className:n.header},e.code),t.createElement("div",{className:n.body},e.block&&t.createElement(d,{program:e.block}))),T=e=>t.createElement("div",{className:(0,a.default)(n.input,n.step)},e.code),s=e=>t.createElement("div",{className:(0,a.default)(n.if,n.step,n.indent)},t.createElement("div",{className:n.header},e.code),t.createElement("div",{className:n.body},e.block&&t.createElement(d,{program:e.block}))),o=e=>t.createElement("div",{className:(0,a.default)(n.else,n.step)},t.createElement("div",{className:n.header},e.code),t.createElement("div",{className:n.body},e.block&&t.createElement(d,{program:e.block}))),d=e=>t.createElement("div",{className:n.strukto},e.program.map(((e,i)=>{switch(e.type){case"call":return t.createElement(r,{key:i,code:e.code});case"def":return t.createElement(c,{key:i,code:e.code,block:e.block});case"repeat":return t.createElement(w,{key:i,code:e.code,block:e.block});case"step":return t.createElement(l,{key:i,code:e.code});case"statement":return t.createElement(I,{key:i,code:e.code});case"input":return t.createElement(T,{key:i,code:e.code});case"if":return t.createElement(s,{key:i,code:e.code,block:e.block});case"elif":case"else":return t.createElement(o,{key:i,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),m=d},91224:(e,i,M)=>{M.r(i),M.d(i,{assets:()=>I,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>w});var t=M(87462),n=(M(67294),M(3905));M(36126);const a={sidebar_custom_props:{id:"e8c03446-aabe-48c1-8dd9-be2786d932cd"}},l="Nosync - Unterprogramme",r={unversionedId:"Programmieren-1/Turtlegrafik/examples.nosync",id:"Programmieren-1/Turtlegrafik/examples.nosync",title:"Nosync - Unterprogramme",description:"Weitere Beispiele...",source:"@site/docs/Programmieren-1/02-Turtlegrafik/090-examples.nosync.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/examples.nosync",permalink:"/Programmieren-1/Turtlegrafik/examples.nosync",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/090-examples.nosync.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:90,frontMatter:{sidebar_custom_props:{id:"e8c03446-aabe-48c1-8dd9-be2786d932cd"}},sidebar:"sidebar",previous:{title:"Weihnachtskarten",permalink:"/Programmieren-1/Turtlegrafik/xmas"},next:{title:"Turtle Befehle",permalink:"/Programmieren-1/Turtlegrafik/turtle-commands"}},I={},w=[{value:"Ratespiel",id:"ratespiel",level:4}],c=e=>function(i){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",i)},T=c("Comment"),s=c("Figure"),o={toc:w},d="wrapper";function m(e){let{components:i,...a}=e;return(0,n.kt)(d,(0,t.Z)({},o,a,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"nosync---unterprogramme"},"Nosync - Unterprogramme"),(0,n.kt)(T,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Weitere Beispiele..."),(0,n.kt)(T,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{style:{},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,n.kt)("pre",{parentName:"div"},(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nspeed(5)\npenup()\ngoto(50, -30)\npendown()\n\nfillcolor('red')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\npenup()\ngoto(-100, 30)\npendown()\n\nfillcolor('green')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\npenup()\ngoto(-25, 150)\npendown()\n\nfillcolor('blue')\nbegin_fill()\nfor i in range(3):\n    forward(50)\n    left(120)\nend_fill()\n\n\npenup()\ngoto(-150, -120)\npendown()\n\nfillcolor('black')\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill()\n\npenup()\ngoto(-15, -120)\npendown()\n\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill()\n\npenup()\ngoto(135, -120)\npendown()\n\nbegin_fill()\nfor i in range(4):\n    forward(30)\n    left(90)\nend_fill() \n")))),(0,n.kt)("div",{parentName:"div",style:{flexBasis:"250px",alignSelf:"center"},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)(s,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{src:M(13573).Z,width:"325",height:"328"})),(0,n.kt)(T,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h4",{parentName:"div",id:"ratespiel"},"Ratespiel"),(0,n.kt)(T,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from random import randint\nfrom browser import alert\n\ngeheim = randint(0, 100)\n\nfor i in range(10):\n    zahl = int(input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.'))\n    if zahl == geheim:\n        alert(f'Gewonnen!!! Die gesuchte Zahl {geheim} wurde in {i + 1} Versuchen gefunden :)')\n        break\n    elif zahl < geheim:\n        alert(f'{zahl} ist zu klein')\n    else:\n        alert(f'{zahl} ist zu gross')\n\nif zahl != geheim:\n    alert(f'verloren :(, die gesuchte Zahl war {geheim}')\n")))}m.isMDXComponent=!0},13573:(e,i,M)=>{M.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV8yZjUxZDNkOF80MDM3XzRlZDFfYjQwMl8xYzMzZjg1Zjk0Y2Ffc3ZnIiB3aWR0aD0iMzI1IiBoZWlnaHQ9IjMyOC4zMDEyNjk1MzEyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSI5NSw1MS42OTg3MzA0Njg3NSwzMjUsMzI4LjMwMTI2OTUzMTI1Ij4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iNTAiIHkyPSIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAiIHkxPSIzMCIgeDI9IjEwMCIgeTI9IjMwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTAwIiB5MT0iMzAiIHgyPSI3NS4wMDAwMDAwMDAwMDAwMSIgeTI9Ii0xMy4zMDEyNzAxODkyMjE5MzgiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3NS4wMDAwMDAwMDAwMDAwMSIgeTE9Ii0xMy4zMDEyNzAxODkyMjE5MzgiIHgyPSI0OS45OTk5OTk5OTk5OTk5OSIgeTI9IjI5Ljk5OTk5OTk5OTk5OTk4NiIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1MCwzMCAxMDAuMCwzMC4wIDc1LjAwMDAwMDAwMDAwMDAxLC0xMy4zMDEyNzAxODkyMjE5MzggNDkuOTk5OTk5OTk5OTk5OTksMjkuOTk5OTk5OTk5OTk5OTg2IiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IHJlZDsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNDkuOTk5OTk5OTk5OTk5OTkiIHkxPSIyOS45OTk5OTk5OTk5OTk5ODYiIHgyPSItMTAwIiB5Mj0iMjkuOTk5OTk5OTk5OTk5OTg2IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTEwMCIgeTE9Ii0zMCIgeDI9Ii01MCIgeTI9Ii0yOS45OTk5OTk5OTk5OTk5OSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii01MCIgeTE9Ii0yOS45OTk5OTk5OTk5OTk5OSIgeDI9Ii03NC45OTk5OTk5OTk5OTk5NiIgeTI9Ii03My4zMDEyNzAxODkyMjE5NSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii03NC45OTk5OTk5OTk5OTk5NiIgeTE9Ii03My4zMDEyNzAxODkyMjE5NSIgeDI9Ii05OS45OTk5OTk5OTk5OTk5NCIgeTI9Ii0zMC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iLTEwMCwtMzAgLTUwLjAsLTI5Ljk5OTk5OTk5OTk5OTk5IC03NC45OTk5OTk5OTk5OTk5NiwtNzMuMzAxMjcwMTg5MjIxOTUgLTk5Ljk5OTk5OTk5OTk5OTk0LC0zMC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogZ3JlZW47IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9Ii05OS45OTk5OTk5OTk5OTk5NCIgeTE9Ii0zMC4wMDAwMDAwMDAwMDAwMTQiIHgyPSItMjUiIHkyPSItMzAuMDAwMDAwMDAwMDAwMDE0IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTI1IiB5MT0iLTE1MCIgeDI9IjI1IiB5Mj0iLTE0OS45OTk5OTk5OTk5OTk5NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjI1IiB5MT0iLTE0OS45OTk5OTk5OTk5OTk5NyIgeDI9Ii0yLjg0MjE3MDk0MzA0MDQwMWUtMTQiIHkyPSItMTkzLjMwMTI3MDE4OTIyMTkiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMi44NDIxNzA5NDMwNDA0MDFlLTE0IiB5MT0iLTE5My4zMDEyNzAxODkyMjE5IiB4Mj0iLTI1LjAwMDAwMDAwMDAwMDEwNyIgeTI9Ii0xNTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iLTI1LC0xNTAgMjUuMCwtMTQ5Ljk5OTk5OTk5OTk5OTk3IC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsLTE5My4zMDEyNzAxODkyMjE5IC0yNS4wMDAwMDAwMDAwMDAxMDcsLTE1MC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsdWU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPGxpbmUgeDE9Ii0yNS4wMDAwMDAwMDAwMDAxMDciIHkxPSItMTUwIiB4Mj0iLTE1MCIgeTI9Ii0xNTAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUwIiB5MT0iMTIwIiB4Mj0iLTEyMCIgeTI9IjEyMC4wMDAwMDAwMDAwMDAwMyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii0xMjAiIHkxPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTIwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iOTAuMDAwMDAwMDAwMDAwMDMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTIwLjAwMDAwMDAwMDAwMDAzIiB5MT0iOTAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTUwLjAwMDAwMDAwMDAwMDAzIiB5Mj0iOTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUwLjAwMDAwMDAwMDAwMDAzIiB5MT0iOTAiIHgyPSItMTUwIiB5Mj0iMTIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9Ii0xNTAsMTIwIC0xMjAuMCwxMjAuMDAwMDAwMDAwMDAwMDMgLTEyMC4wMDAwMDAwMDAwMDAwMyw5MC4wMDAwMDAwMDAwMDAwMyAtMTUwLjAwMDAwMDAwMDAwMDAzLDkwLjAgLTE1MC4wLDEyMC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsYWNrOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMTUwIiB5MT0iMTIwIiB4Mj0iLTE1IiB5Mj0iMTIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTE1IiB5MT0iMTIwIiB4Mj0iMTUiIHkyPSIxMjAuMDAwMDAwMDAwMDAwMDMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNSIgeTE9IjEyMC4wMDAwMDAwMDAwMDAwMyIgeDI9IjE0Ljk5OTk5OTk5OTk5OTk3OSIgeTI9IjkwLjAwMDAwMDAwMDAwMDAzIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTQuOTk5OTk5OTk5OTk5OTc5IiB5MT0iOTAuMDAwMDAwMDAwMDAwMDMiIHgyPSItMTUuMDAwMDAwMDAwMDAwMDIxIiB5Mj0iOTAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTUuMDAwMDAwMDAwMDAwMDIxIiB5MT0iOTAiIHgyPSItMTUuMDAwMDAwMDAwMDAwMDA0IiB5Mj0iMTIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9Ii0xNSwxMjAgMTUuMCwxMjAuMDAwMDAwMDAwMDAwMDMgMTQuOTk5OTk5OTk5OTk5OTc5LDkwLjAwMDAwMDAwMDAwMDAzIC0xNS4wMDAwMDAwMDAwMDAwMjEsOTAuMCAtMTUuMDAwMDAwMDAwMDAwMDA0LDEyMC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGJsYWNrOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMTUuMDAwMDAwMDAwMDAwMDA0IiB5MT0iMTIwIiB4Mj0iMTM1IiB5Mj0iMTIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTM1IiB5MT0iMTIwIiB4Mj0iMTY1IiB5Mj0iMTIwLjAwMDAwMDAwMDAwMDA0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTY1IiB5MT0iMTIwLjAwMDAwMDAwMDAwMDA0IiB4Mj0iMTY0Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iOTAuMDAwMDAwMDAwMDAwMDQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNjQuOTk5OTk5OTk5OTk5OTciIHkxPSI5MC4wMDAwMDAwMDAwMDAwNCIgeDI9IjEzNC45OTk5OTk5OTk5OTk5NyIgeTI9IjkwLjAwMDAwMDAwMDAwMDExIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTM0Ljk5OTk5OTk5OTk5OTk3IiB5MT0iOTAuMDAwMDAwMDAwMDAwMTEiIHgyPSIxMzQuOTk5OTk5OTk5OTk5OSIgeTI9IjEyMC4wMDAwMDAwMDAwMDAxMSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSIxMzUsMTIwIDE2NS4wLDEyMC4wMDAwMDAwMDAwMDAwNCAxNjQuOTk5OTk5OTk5OTk5OTcsOTAuMDAwMDAwMDAwMDAwMDQgMTM0Ljk5OTk5OTk5OTk5OTk3LDkwLjAwMDAwMDAwMDAwMDExIDEzNC45OTk5OTk5OTk5OTk5LDEyMC4wMDAwMDAwMDAwMDAxMSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBmaWxsOiBibGFjazsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJibGFjayIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM0Ljk5OTk5OTk5OTk5OTksMTIwLjAwMDAwMDAwMDAwMDExKSByb3RhdGUoLTIyNTAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PmZyb20gdHVydGxlIGltcG9ydCAqCnNwZWVkKDEwMCkKcGVudXAoKQpnb3RvKDUwLCAtMzApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdyZWQnKQpiZWdpbl9maWxsKCkKZm9yIGkgaW4gcmFuZ2UoMyk6CiAgICBmb3J3YXJkKDUwKQogICAgbGVmdCgxMjApCmVuZF9maWxsKCkKCnBlbnVwKCkKZ290bygtMTAwLCAzMCkKcGVuZG93bigpCgpmaWxsY29sb3IoJ2dyZWVuJykKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg1MCkKICAgIGxlZnQoMTIwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oLTI1LCAxNTApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdibHVlJykKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg1MCkKICAgIGxlZnQoMTIwKQplbmRfZmlsbCgpCgoKcGVudXAoKQpnb3RvKC0xNTAsIC0xMjApCnBlbmRvd24oKQoKZmlsbGNvbG9yKCdibGFjaycpCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oLTE1LCAtMTIwKQpwZW5kb3duKCkKCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpCgpwZW51cCgpCmdvdG8oMTM1LCAtMTIwKQpwZW5kb3duKCkKCmJlZ2luX2ZpbGwoKQpmb3IgaSBpbiByYW5nZSg0KToKICAgIGZvcndhcmQoMzApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpIDwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"}}]);