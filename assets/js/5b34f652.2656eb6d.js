"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9957],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var I=i.createContext({}),M=function(e){var t=i.useContext(I),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=M(e.components);return i.createElement(I.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,I=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=M(a),p=n,s=c["".concat(I,".").concat(p)]||c[p]||N[p]||r;return a?i.createElement(s,l(l({ref:t},d),{},{components:a})):i.createElement(s,l({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var m={};for(var I in t)hasOwnProperty.call(t,I)&&(m[I]=t[I]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var M=2;M<r;M++)l[M]=a[M];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36126:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294);const n={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=a(86010);const l=e=>i.createElement("div",{className:n.step},e.code),m=e=>i.createElement("div",{className:(0,r.default)(n.call,n.step,n.bordered)},e.code),I=e=>i.createElement("div",{className:(0,r.default)(n.step,n.statement)},e.code),M=e=>i.createElement("div",{className:(0,r.default)(n.repeat,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(s,{program:e.block}))),d=e=>i.createElement("div",{className:(0,r.default)(n.def,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(s,{program:e.block}))),N=e=>i.createElement("div",{className:(0,r.default)(n.input,n.step)},e.code),c=e=>i.createElement("div",{className:(0,r.default)(n.if,n.step,n.indent)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(s,{program:e.block}))),p=e=>i.createElement("div",{className:(0,r.default)(n.else,n.step)},i.createElement("div",{className:n.header},e.code),i.createElement("div",{className:n.body},e.block&&i.createElement(s,{program:e.block}))),s=e=>i.createElement("div",{className:n.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return i.createElement(m,{key:t,code:e.code});case"def":return i.createElement(d,{key:t,code:e.code,block:e.block});case"repeat":return i.createElement(M,{key:t,code:e.code,block:e.block});case"step":return i.createElement(l,{key:t,code:e.code});case"statement":return i.createElement(I,{key:t,code:e.code});case"input":return i.createElement(N,{key:t,code:e.code});case"if":return i.createElement(c,{key:t,code:e.code,block:e.block});case"elif":case"else":return i.createElement(p,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),g=s},67896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>M,contentTitle:()=>m,default:()=>T,frontMatter:()=>l,metadata:()=>I,toc:()=>d});var i=a(83117),n=(a(67294),a(3905)),r=a(36126);const l={sidebar_custom_props:{id:"61b32e14-80db-449c-9244-548e2e4a7c10"}},m="Test 26e",I={unversionedId:"Programmieren-1/Testumgebung/26eP-test/ProbeE",id:"Programmieren-1/Testumgebung/26eP-test/ProbeE",title:"Test 26e",description:"Erlaubte Hilfsmittel",source:"@site/docs/Programmieren-1/04-Testumgebung/26eP-test/ProbeE.md",sourceDirName:"Programmieren-1/04-Testumgebung/26eP-test",slug:"/Programmieren-1/Testumgebung/26eP-test/ProbeE",permalink:"/Programmieren-1/Testumgebung/26eP-test/ProbeE",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/04-Testumgebung/26eP-test/ProbeE.md",tags:[],version:"current",lastUpdatedAt:1671715661,formattedLastUpdatedAt:"22. Dez. 2022",frontMatter:{sidebar_custom_props:{id:"61b32e14-80db-449c-9244-548e2e4a7c10"}},sidebar:"sidebar",previous:{title:"Test 25h",permalink:"/Programmieren-1/Testumgebung/25h-test/Probe"},next:{title:"Test 26P",permalink:"/Programmieren-1/Testumgebung/26eP-test/ProbeP"}},M={},d=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"\u2b50 5. Zusatzaufgabe",id:"-5-zusatzaufgabe",level:2}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=N("Comment"),p=N("Solution"),s=N("Figure"),g={toc:d};function T(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"test-26e"},"Test 26e"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("dl",{parentName:"div"},(0,n.kt)("dt",{parentName:"dl"},"Erlaubte Hilfsmittel\n"),(0,n.kt)("dd",{parentName:"dl"},"Unterrichtsmaterial"),(0,n.kt)("dd",{parentName:"dl"},"Eigene Skripts"),(0,n.kt)("dd",{parentName:"dl"},"Webseiten, Google"),(0,n.kt)("dt",{parentName:"dl"},"Verbotene Hilfsmittel\n"),(0,n.kt)("dd",{parentName:"dl"},"\u26a0\ufe0f Fremde Hilfe"),(0,n.kt)("dd",{parentName:"dl"},"\u26a0\ufe0f Chats / Kommunikation jeglicher Art")),(0,n.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,n.kt)(p,{webKey:"50619fbd-2a82-4608-bd1b-b04a251ef4f6",title:"Testfragen",open:!0,mdxType:"Solution"},(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-1"},"Aufgabe 1"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Das Programm zeichnet eine Sonne mit 13 Strahlen."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"\xc4ndern Sie das Programm so ab, dass es nun eine Sonne mit ",(0,n.kt)("inlineCode",{parentName:"p"},"19")," Strahlen zeichnet."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Setzen Sie die Stiftdicke auf ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," und die Stiftfarbe auf ",(0,n.kt)("strong",{parentName:"p"},"Rot"),"."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"F\xfcllen Sie die Sonne mit Ihrer Lieblingsfarbe (aber nicht mit Rot) aus."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe1.py id=bc26c5ea-c372-41ed-93bb-66b5059cb5c6 versioned",live_py:!0,title:"aufgabe1.py",id:"bc26c5ea-c372-41ed-93bb-66b5059cb5c6",versioned:!0},"from turtle import *\n\nspeed(0)\n\ndef bogen(distanz, drehung):\n    for i in range(20):\n        backward(distanz)\n        right(drehung)\n\ndef strahl():\n    bogen(3, 5)\n    left(90)\n    bogen(4, -10)\n    right(190)\n\nfor i in range(13):\n    strahl()\n    right(360 / 13)\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-2"},"Aufgabe 2"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(3 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"\xdcbersetzen Sie das untenstehende Struktogramm in Python Code"),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,n.kt)("div",{style:{maxWidth:"400px"},className:"flex flex-cards"},(0,n.kt)("div",{parentName:"div",style:{},className:"item card"},(0,n.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,n.kt)(r.Z,{program:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"90"),"\xb0 links")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"150")," Schritte vorw\xe4rts")},{type:"def",code:(0,n.kt)("span",null,"linie"),block:[{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 rechts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"50")," Schritte vorw\xe4rts")},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"30"),"\xb0 links")}]},{type:"def",code:(0,n.kt)("span",null,"dreieck"),block:[{type:"repeat",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"3")," mal wiederholen"),block:[{type:"call",code:"linie zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 links")}]}]},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"},{type:"step",code:(0,n.kt)("span",null,(0,n.kt)("u",null,"120"),"\xb0 rechts")},{type:"call",code:"dreieck zeichnen"}],mdxType:"Strukto"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe2.py versioned id=dcb14a5c-d510-40cf-ba1f-78a46e884742",live_py:!0,title:"aufgabe2.py",versioned:!0,id:"dcb14a5c-d510-40cf-ba1f-78a46e884742"},"")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-3"},"Aufgabe 3"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"(4 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Finden und korrigieren Sie alle Fehler, so dass die folgende Ausgabe entsteht. Es gibt sowohl Syntaxfehler wie auch Logikfehler."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(s,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"D\xe4nische Flagge",src:a(38804).Z,width:"210",height:"135"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"D\xe4nische Flagge",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe3.py id=94c8484d-c060-4c28-b489-9874f06cf0d8 versioned",live_py:!0,title:"aufgabe3.py",id:"94c8484d-c060-4c28-b489-9874f06cf0d8",versioned:!0},"from turtle import *\n\ndef ractangle(width, height):\n    begin_fill()\n    for i in() range(2)\n        forward('width')\n        left(90)\n        forward(heigt)\n        left(90)\n    end_fill\n\ncolor('blue')\nractangle(200, 120)\ngoto(0 50)\ncolor(gold)\n ractangle(200, 20)\npenup()\ngoto(50, 0)\npendown()\nractanle(20, 120)\n\nhide_turtle()\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgabe-4"},"Aufgabe 4"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(5 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"a) Schreiben Sie ein Programm, welches folgende Zeichnung erzeugt. ",(0,n.kt)("em",{parentName:"p"},"(2 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(s,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Figuren",src:a(75850).Z,width:"246",height:"92"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Figuren",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Die Diagonale einer Figur betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"100")," Einheiten, die kurze Seite ist ",(0,n.kt)("inlineCode",{parentName:"p"},"50")," Einheiten lang und der Innenwinkel der Figur betr\xe4gt ",(0,n.kt)("inlineCode",{parentName:"p"},"50\xb0"),". Eine Figur ist symmetrisch mit vertikaler Spiegelachse."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(s,{parentName:"div",options:{width:"200px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"Eine Figur --width=200px",src:a(79298).Z,width:"1396",height:"1297"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Eine Figur",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,n.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"b) Verwenden Sie Wiederholungen (min. an einem Ort) (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")"),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"c) Schreiben Sie f\xfcr das Zeichnen einer einzelnen Figur einen (selber definierten) Befehl ",(0,n.kt)("inlineCode",{parentName:"p"},"figur")," (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"d) Verwenden Sie einen Parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"size"),", so dass die Gr\xf6sse der Figur ver\xe4ndert werden kann. Erzeugen Sie so folgende Figuren mit den Gr\xf6ssen ",(0,n.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"40"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"50")," und ",(0,n.kt)("inlineCode",{parentName:"p"},"60")," ohne dabei Punkt (b) zu entfernen. (",(0,n.kt)("em",{parentName:"p"},"1 Punkt"),")"),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(s,{parentName:"div",options:{width:"800px"},mdxType:"Figure"},(0,n.kt)("img",{alt:"--width=800px",src:a(83229).Z,width:"222",height:"69"})),(0,n.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=aufgabe4.py versioned id=42125786-9de4-422b-b376-42c08fda7ed1 readonly",live_py:!0,title:"aufgabe4.py",versioned:!0,id:"42125786-9de4-422b-b376-42c08fda7ed1",readonly:!0},"from turtle import *\n")),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"-5-zusatzaufgabe"},"\u2b50 5. Zusatzaufgabe"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("em",{parentName:"p"},"(Wird f\xfcr das Erreichen der Note 6 nicht ben\xf6tigt, 2 Punkte)")),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Auf ",(0,n.kt)("a",{parentName:"p",href:"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/"},"https://de.acervolima.com/zeichnen-sie-herz-mit-turtle-graphics-in-python/")," finden Sie Python-Code, welcher ein Herz zeichnet."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"R\xe4umen Sie den Code auf und verwenden Sie wo m\xf6glich diese Schreibweise, die wir auch im Unterricht besprochen haben. (z.B. haben wir ",(0,n.kt)("inlineCode",{parentName:"p"},"pen = turtle.Turtle()")," nie angeschaut...)"),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Schreiben Sie Ihren eigenen Namen in das Herz"),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Machen Sie den Rand einen Stift der Breite ",(0,n.kt)("inlineCode",{parentName:"p"},"10")," "),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zusatzaufgabe.py id=69f6f8dd-b21e-45df-bde9-6d0acd9baa65 versioned",live_py:!0,title:"zusatzaufgabe.py",id:"69f6f8dd-b21e-45df-bde9-6d0acd9baa65",versioned:!0},""))))}T.isMDXComponent=!0},75850:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV84YzFkOWE0MF9jYWZkXzQ3NTNfODA0ZV8yOTYwMWEyNTRlMmFfc3ZnIiB3aWR0aD0iMjQ1LjY3MjU2MTY0NTUwNzgiIGhlaWdodD0iOTEuNjA0NDQ2NDExMTMyODEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMjQ0Ljk5OTk4NDc0MTIxMDk0LDE2OC4zOTU1MzgzMzAwNzgxMiwyNDUuNjcyNTYxNjQ1NTA3OCw5MS42MDQ0NDY0MTExMzI4MSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjY0LjI3ODc2MDk2ODY1Mzk0IiB5Mj0iLTc2LjYwNDQ0NDMxMTg5NzgxIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNjQuMjc4NzYwOTY4NjUzOTQiIHkxPSItNzYuNjA0NDQ0MzExODk3ODEiIHgyPSIxNC4yNzg3NjA5Njg2NTM5NDEiIHkyPSItNzYuNjA0NDQ0MzExODk3ODEiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNC4yNzg3NjA5Njg2NTM5NDEiIHkxPSItNzYuNjA0NDQ0MzExODk3ODEiIHgyPSI3OC41NTc1MjE5MzczMDc4NyIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3OC41NTc1MjE5MzczMDc4NyIgeTE9IjAiIHgyPSIxNDIuODM2MjgyOTA1OTYxOCIgeTI9Ii03Ni42MDQ0NDQzMTE4OTc3OCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjE0Mi44MzYyODI5MDU5NjE4IiB5MT0iLTc2LjYwNDQ0NDMxMTg5Nzc4IiB4Mj0iOTIuODM2MjgyOTA1OTYxODEiIHkyPSItNzYuNjA0NDQ0MzExODk3OCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjkyLjgzNjI4MjkwNTk2MTgxIiB5MT0iLTc2LjYwNDQ0NDMxMTg5NzgiIHgyPSIxNTcuMTE1MDQzODc0NjE1NzYiIHkyPSItMi44NDIxNzA5NDMwNDA0MDFlLTE0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTU3LjExNTA0Mzg3NDYxNTc2IiB5MT0iLTIuODQyMTcwOTQzMDQwNDAxZS0xNCIgeDI9IjIyMS4zOTM4MDQ4NDMyNjk2NiIgeTI9Ii03Ni42MDQ0NDQzMTE4OTc4NSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjIyMS4zOTM4MDQ4NDMyNjk2NiIgeTE9Ii03Ni42MDQ0NDQzMTE4OTc4NSIgeDI9IjE3MS4zOTM4MDQ4NDMyNjk2NiIgeTI9Ii03Ni42MDQ0NDQzMTE4OTc4OCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjE3MS4zOTM4MDQ4NDMyNjk2NiIgeTE9Ii03Ni42MDQ0NDQzMTE4OTc4OCIgeDI9IjIzNS42NzI1NjU4MTE5MjM2MiIgeTI9Ii04LjUyNjUxMjgyOTEyMTIwMmUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMzUuNjcyNTY1ODExOTIzNjIiIHkxPSItOC41MjY1MTI4MjkxMjEyMDJlLTE0IiB4Mj0iMjM1LjY3MjU2NTgxMTkyMzYyIiB5Mj0iLTguNTI2NTEyODI5MTIxMjAyZS0xNCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNS42NzI1NjU4MTE5MjM2MiwtOC41MjY1MTI4MjkxMjEyMDJlLTE0KSByb3RhdGUoLTExNzAuMCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+PC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="},79298:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ghost-dimensions-527e2af40c911dd3f88362b94ab62aa9.png"},83229:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV84YzFkOWE0MF9jYWZkXzQ3NTNfODA0ZV8yOTYwMWEyNTRlMmFfc3ZnIiB3aWR0aD0iMjIyLjEwNTMzMTQyMDg5ODQ0IiBoZWlnaHQ9IjY4LjYyMzEwNzkxMDE1NjI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI0NC45OTk5ODQ3NDEyMTA5NCwxOTEuMzc2ODc2ODMxMDU0NywyMjIuMTA1MzMxNDIwODk4NDQsNjguNjIzMTA3OTEwMTU2MjUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIxMi44NTU3NTIxOTM3MzA3ODciIHkyPSItMTUuMzIwODg4ODYyMzc5NTYiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMi44NTU3NTIxOTM3MzA3ODciIHkxPSItMTUuMzIwODg4ODYyMzc5NTYiIHgyPSIyLjg1NTc1MjE5MzczMDc4NyIgeTI9Ii0xNS4zMjA4ODg4NjIzNzk1NjIiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyLjg1NTc1MjE5MzczMDc4NyIgeTE9Ii0xNS4zMjA4ODg4NjIzNzk1NjIiIHgyPSIxNS43MTE1MDQzODc0NjE1NzIiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTUuNzExNTA0Mzg3NDYxNTcyIiB5MT0iMCIgeDI9IjM0Ljk5NTEzMjY3ODA1Nzc2IiB5Mj0iLTIyLjk4MTMzMzI5MzU2OTMzNSIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjM0Ljk5NTEzMjY3ODA1Nzc2IiB5MT0iLTIyLjk4MTMzMzI5MzU2OTMzNSIgeDI9IjE5Ljk5NTEzMjY3ODA1Nzc1NyIgeTI9Ii0yMi45ODEzMzMyOTM1NjkzNDIiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxOS45OTUxMzI2NzgwNTc3NTciIHkxPSItMjIuOTgxMzMzMjkzNTY5MzQyIiB4Mj0iMzkuMjc4NzYwOTY4NjUzOTUiIHkyPSItMS4wNjU4MTQxMDM2NDAxNTAzZS0xNCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjM5LjI3ODc2MDk2ODY1Mzk1IiB5MT0iLTEuMDY1ODE0MTAzNjQwMTUwM2UtMTQiIHgyPSI2NC45OTAyNjUzNTYxMTU1MSIgeTI9Ii0zMC42NDE3Nzc3MjQ3NTkxNCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjY0Ljk5MDI2NTM1NjExNTUxIiB5MT0iLTMwLjY0MTc3NzcyNDc1OTE0IiB4Mj0iNDQuOTkwMjY1MzU2MTE1NTE1IiB5Mj0iLTMwLjY0MTc3NzcyNDc1OTE1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNDQuOTkwMjY1MzU2MTE1NTE1IiB5MT0iLTMwLjY0MTc3NzcyNDc1OTE1IiB4Mj0iNzAuNzAxNzY5NzQzNTc3MSIgeTI9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3MC43MDE3Njk3NDM1NzcxIiB5MT0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNCIgeDI9IjEwMi44NDExNTAyMjc5MDQxNCIgeTI9Ii0zOC4zMDIyMjIxNTU5NDg4OCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjEwMi44NDExNTAyMjc5MDQxNCIgeTE9Ii0zOC4zMDIyMjIxNTU5NDg4OCIgeDI9Ijc3Ljg0MTE1MDIyNzkwNDE0IiB5Mj0iLTM4LjMwMjIyMjE1NTk0ODkwNCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ijc3Ljg0MTE1MDIyNzkwNDE0IiB5MT0iLTM4LjMwMjIyMjE1NTk0ODkwNCIgeDI9IjEwOS45ODA1MzA3MTIyMzExMSIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMDkuOTgwNTMwNzEyMjMxMTEiIHkxPSIwIiB4Mj0iMTQ4LjU0Nzc4NzI5MzQyMzU3IiB5Mj0iLTQ1Ljk2MjY2NjU4NzEzODYxIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTQ4LjU0Nzc4NzI5MzQyMzU3IiB5MT0iLTQ1Ljk2MjY2NjU4NzEzODYxIiB4Mj0iMTE4LjU0Nzc4NzI5MzQyMzU3IiB5Mj0iLTQ1Ljk2MjY2NjU4NzEzODY0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTE4LjU0Nzc4NzI5MzQyMzU3IiB5MT0iLTQ1Ljk2MjY2NjU4NzEzODY0IiB4Mj0iMTU3LjExNTA0Mzg3NDYxNTkiIHkyPSI0LjI2MzI1NjQxNDU2MDYwMWUtMTQiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNTcuMTE1MDQzODc0NjE1OSIgeTE9IjQuMjYzMjU2NDE0NTYwNjAxZS0xNCIgeDI9IjIwMi4xMTAxNzY1NTI2NzM1OCIgeTI9Ii01My42MjMxMTEwMTgzMjg0OCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjIwMi4xMTAxNzY1NTI2NzM1OCIgeTE9Ii01My42MjMxMTEwMTgzMjg0OCIgeDI9IjE2Ny4xMTAxNzY1NTI2NzM1OCIgeTI9Ii01My42MjMxMTEwMTgzMjg0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMTY3LjExMDE3NjU1MjY3MzU4IiB5MT0iLTUzLjYyMzExMTAxODMyODQiIHgyPSIyMTIuMTA1MzA5MjMwNzMxMSIgeTI9IjIuNDE1ODQ1MzAxNTg0MzQwNmUtMTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMTIuMTA1MzA5MjMwNzMxMSIgeTE9IjIuNDE1ODQ1MzAxNTg0MzQwNmUtMTMiIHgyPSIyMTIuMTA1MzA5MjMwNzMxMSIgeTI9IjIuNDE1ODQ1MzAxNTg0MzQwNmUtMTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTIuMTA1MzA5MjMwNzMxMSwyLjQxNTg0NTMwMTU4NDM0MDZlLTEzKSByb3RhdGUoLTIyNTAuMCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+PC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="},38804:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV8xNDdlNmU1Yl9hNjU2XzRmY2JfOGE3OF81MDY3MWU5ZGMyZDdfc3ZnIiB3aWR0aD0iMjEwIiBoZWlnaHQ9IjEzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIyNDUsMTI1LDIxMCwxMzUiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIyMDAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibHVlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMDAiIHkxPSIwIiB4Mj0iMjAwIiB5Mj0iLTEyMCIgc3R5bGU9InN0cm9rZTogYmx1ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjAwIiB5MT0iLTEyMCIgeDI9IjAiIHkyPSItMTIwLjAwMDAwMDAwMDAwMDAzIiBzdHlsZT0ic3Ryb2tlOiBibHVlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iLTEyMC4wMDAwMDAwMDAwMDAwMyIgeDI9Ii0yLjIwNDM2NDIzODQ2NTIzNTVlLTE0IiB5Mj0iLTIuODQyMTcwOTQzMDQwNDAxZS0xNCIgc3R5bGU9InN0cm9rZTogYmx1ZTsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAuMCwtMC4wIDIwMC4wLC0wLjAgMjAwLjAsLTEyMC4wIDAuMCwtMTIwLjAwMDAwMDAwMDAwMDAzIC0yLjIwNDM2NDIzODQ2NTIzNTVlLTE0LC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogYmx1ZTsgc3Ryb2tlOiBibHVlOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItMi4yMDQzNjQyMzg0NjUyMzU1ZS0xNCIgeTE9Ii0yLjg0MjE3MDk0MzA0MDQwMWUtMTQiIHgyPSIwIiB5Mj0iLTUwIiBzdHlsZT0ic3Ryb2tlOiBibHVlOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iLTUwIiB4Mj0iMjAwIiB5Mj0iLTQ5Ljk5OTk5OTk5OTk5OTk1IiBzdHlsZT0ic3Ryb2tlOiBnb2xkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyMDAiIHkxPSItNDkuOTk5OTk5OTk5OTk5OTUiIHgyPSIyMDAiIHkyPSItNjkuOTk5OTk5OTk5OTk5OTQiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjIwMCIgeTE9Ii02OS45OTk5OTk5OTk5OTk5NCIgeDI9IjAiIHkyPSItNzAuMDAwMDAwMDAwMDAwMDEiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjAiIHkxPSItNzAuMDAwMDAwMDAwMDAwMDEiIHgyPSItOC41NzI1Mjc1OTQwMzE0NzNlLTE1IiB5Mj0iLTUwLjAwMDAwMDAwMDAwMDAxNCIgc3R5bGU9InN0cm9rZTogZ29sZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9IjAsLTUwIDIwMC4wLC00OS45OTk5OTk5OTk5OTk5NSAyMDAuMCwtNjkuOTk5OTk5OTk5OTk5OTQgMC4wLC03MC4wMDAwMDAwMDAwMDAwMSAtOC41NzI1Mjc1OTQwMzE0NzNlLTE1LC01MC4wMDAwMDAwMDAwMDAwMTQiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogZ29sZDsgc3Ryb2tlOiBnb2xkOyBzdHJva2Utd2lkdGg6IDE7IiBkaXNwbGF5PSJibG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCwwLDApIj48L3BvbHlnb24+CjxsaW5lIHgxPSItOC41NzI1Mjc1OTQwMzE0NzNlLTE1IiB5MT0iLTUwLjAwMDAwMDAwMDAwMDAxNCIgeDI9IjUwIiB5Mj0iLTUwLjAwMDAwMDAwMDAwMDAxNCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogZ29sZDsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNTAiIHkxPSIwIiB4Mj0iNzAiIHkyPSI5Ljc5NzE3NDM5MzE3ODgyNmUtMTUiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjcwIiB5MT0iOS43OTcxNzQzOTMxNzg4MjZlLTE1IiB4Mj0iNzAuMDAwMDAwMDAwMDAwMDciIHkyPSItMTE5Ljk5OTk5OTk5OTk5OTk5IiBzdHlsZT0ic3Ryb2tlOiBnb2xkOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI3MC4wMDAwMDAwMDAwMDAwNyIgeTE9Ii0xMTkuOTk5OTk5OTk5OTk5OTkiIHgyPSI1MC4wMDAwMDAwMDAwMDAwNyIgeTI9Ii0xMjAiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjUwLjAwMDAwMDAwMDAwMDA3IiB5MT0iLTEyMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDIwNiIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPHBvbHlnb24gcG9pbnRzPSI1MCwwIDcwLjAsOS43OTcxNzQzOTMxNzg4MjZlLTE1IDcwLjAwMDAwMDAwMDAwMDA3LC0xMTkuOTk5OTk5OTk5OTk5OTkgNTAuMDAwMDAwMDAwMDAwMDcsLTEyMC4wIDUwLjAwMDAwMDAwMDAwMDIwNiwtMC4wIiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IGdvbGQ7IHN0cm9rZTogZ29sZDsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iNTAuMDAwMDAwMDAwMDAwMjA2IiB5MT0iMCIgeDI9IjUwLjAwMDAwMDAwMDAwMDIwNiIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGdvbGQ7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iZ29sZCIgZmlsbD0iZ29sZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC4wMDAwMDAwMDAwMDAyMDYsLTAuMCkgcm90YXRlKC0xMTcwLjAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PjwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"}}]);