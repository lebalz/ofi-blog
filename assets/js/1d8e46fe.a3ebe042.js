"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7858],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,N=d["".concat(l,".").concat(k)]||d[k]||c[k]||m;return t?n.createElement(N,i(i({ref:a},o),{},{components:t})):n.createElement(N,i({ref:a},o))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,i=new Array(m);i[0]=k;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<m;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},81788:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(67294),r=t(86010);const m=()=>{const[e,a]=n.useState(0);return n.useEffect((()=>{if(e<=0)return;const a=Math.floor(100*Math.random());let t=-1;for(let e=1;e<11;e++){const n=prompt(`${e}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.`);if(null===n)break;if(t=Number.parseInt(n,10),Number.isNaN(t)&&(t=-1),t===a){alert(`Yay, du hast die Zahl ${a} in ${e} Versuchen gefunden!`);break}t<a?alert(`Die eingegebene Zahl ${t} ist zu klein`):alert(`Die eingegebene Zahl ${t} ist zu gross`)}t!==a&&alert(`:( du hast verloren, die gesuchte Zahl war ${a}`)}),[e]),n.createElement("button",{className:(0,r.default)("button","button--success"),onClick:()=>a(e+1)},"Ratespiel Starten")}},36126:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(67294);const r={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var m=t(86010);const i=e=>n.createElement("div",{className:r.step},e.code),s=e=>n.createElement("div",{className:(0,m.default)(r.call,r.step,r.bordered)},e.code),l=e=>n.createElement("div",{className:(0,m.default)(r.step,r.statement)},e.code),p=e=>n.createElement("div",{className:(0,m.default)(r.repeat,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),o=e=>n.createElement("div",{className:(0,m.default)(r.def,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),d=e=>n.createElement("div",{className:(0,m.default)(r.input,r.step)},e.code),c=e=>n.createElement("div",{className:(0,m.default)(r.if,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),k=e=>n.createElement("div",{className:(0,m.default)(r.else,r.step)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),N=e=>n.createElement("div",{className:r.strukto},e.program.map(((e,a)=>{switch(e.type){case"call":return n.createElement(s,{key:a,code:e.code});case"def":return n.createElement(o,{key:a,code:e.code,block:e.block});case"repeat":return n.createElement(p,{key:a,code:e.code,block:e.block});case"step":return n.createElement(i,{key:a,code:e.code});case"statement":return n.createElement(l,{key:a,code:e.code});case"input":return n.createElement(d,{key:a,code:e.code});case"if":return n.createElement(c,{key:a,code:e.code,block:e.block});case"elif":case"else":return n.createElement(k,{key:a,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),h=N},61007:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=t(87462),r=(t(67294),t(3905)),m=t(36126),i=t(81788);const s={sidebar_label:"8. Verzweigungen \u2442",sidebar_custom_props:{id:"3170b4a4-73fd-4460-9518-9bc9cab7c5a9"}},l="8. Bedingte Ausf\xfchrung \u2442",p={unversionedId:"Programmieren/Turtle-Repetition/verzweigung",id:"version-24ef/Programmieren/Turtle-Repetition/verzweigung",title:"8. Bedingte Ausf\xfchrung \u2442",description:"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist.",source:"@site/versioned_docs/version-24ef/01-Programmieren/03-Turtle-Repetition/008-verzweigung.md",sourceDirName:"01-Programmieren/03-Turtle-Repetition",slug:"/Programmieren/Turtle-Repetition/verzweigung",permalink:"/24ef/Programmieren/Turtle-Repetition/verzweigung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:8,frontMatter:{sidebar_label:"8. Verzweigungen \u2442",sidebar_custom_props:{id:"3170b4a4-73fd-4460-9518-9bc9cab7c5a9"}},sidebar:"version-24ef/sidebar",previous:{title:"7. Variablen",permalink:"/24ef/Programmieren/Turtle-Repetition/variablen"},next:{title:"9. \u2b50\ufe0f While",permalink:"/24ef/Programmieren/Turtle-Repetition/while"}},o={},d=[{value:"Vergleichen",id:"vergleichen",level:2},{value:"Ausgabefenster",id:"ausgabefenster",level:2},{value:"Zufallszahlen erraten",id:"zufallszahlen-erraten",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},k=c("Comment"),N=c("Answer"),h=c("Hint"),g=c("Solution"),u={toc:d},b="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"8-bedingte-ausf\xfchrung-"},"8. Bedingte Ausf\xfchrung \u2442"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Programmen m\xf6chten wir w\xe4hrend der Ausf\xfchrung des Programms entscheiden k\xf6nnen, ob Befehle ausgef\xfchrt werden oder nicht. Auch m\xf6chten wir entscheiden k\xf6nnen, ob eine Wiederholung abgebrochen werden soll. "),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"vergleichen"},"Vergleichen"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Um zu entscheiden, ob Befehle ausgef\xfchrt werden sollen, wird immer eine eine Frage gestellt, die eindeutig mit "Ja" oder "Nein" beantwortet werden kann. Wird die Frage mit "Ja" beantwortet, so ist diese Aussage ',(0,r.kt)("strong",{parentName:"p"},"Wahr")," und die Bedingung ist ",(0,r.kt)("strong",{parentName:"p"},"erf\xfcllt"),". Andernfalls ist die Aussage ",(0,r.kt)("strong",{parentName:"p"},"Falsch")," und die Bedingung ist ",(0,r.kt)("strong",{parentName:"p"},"nicht erf\xfcllt"),"."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Frage kann als ",(0,r.kt)("strong",{parentName:"p"},"Vergleich"),' geschrieben werden. Beispielsweise wird die Frage "Ist 4 kleiner als 2?" als ',(0,r.kt)("inlineCode",{parentName:"p"},"4 < 2"),' aufgeschrieben. Die offensichtliche Antwort ist "Nein" und entspricht in Python dem Wert ',(0,r.kt)("inlineCode",{parentName:"p"},"False"),'.\nSpannender sind vergleiche, wenn diese mit Variablen durchgef\xfchrt werden, da man nicht schon im Voraus weiss, welcher Wert in einer Variable enthalten ist.\nDie Frage von "Ist x kleiner als 2" (',(0,r.kt)("inlineCode",{parentName:"p"},"x < 2"),") h\xe4ngt also davon ab, welcher Wert ",(0,r.kt)("strong",{parentName:"p"},"zur Zeit")," in der Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," gespeichert ist."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)(m.Z,{program:[{type:"input",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"alter")," = Wie alt bist du?")},{type:"if",code:(0,r.kt)("span",null,"Ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 14?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Velo fahren")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 16?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst T\xf6ffli fahren")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 18?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Roller fahren")},{type:"else"},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Auto fahren")}]}],mdxType:"Strukto"})),(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"alter = int(input('Wie alt bist du?'))\n\nif alter < 14:\n    print('Du darfst Velo fahren')\nelif alter < 16:\n    print('Du darfst T\xf6ffli fahren')\nelif alter < 18:\n    print('Du darfst Roller fahren')\nelse:\n    print('Du darfst Auto fahren')\n\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Python k\xf6nnen alle \xfcblichen Fragen als Vergleiche von zwei Werten geschrieben werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mathematisch"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Python"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"<")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},">")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\gt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},">")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2264")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\leq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2264")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2265")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\geq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gleich"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow"},"=")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"==")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"=="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ungleich"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\neq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mord vbox"},(0,r.kt)("span",{parentName:"span",className:"thinbox"},(0,r.kt)("span",{parentName:"span",className:"rlap"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"inner"},(0,r.kt)("span",{parentName:"span",className:"mrel"},"\ue020")),(0,r.kt)("span",{parentName:"span",className:"fix"}))))),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"!="))))),(0,r.kt)(k,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,r.kt)("admonition",{title:"Achtung",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei der \xdcberpr\xfcfung auf Gleichheit werden zwei Gleichheitszeichen ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," geschrieben."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ausgabefenster"},"Ausgabefenster"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Python lassen sich Ausgaben nicht nur mit ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," sondern auch mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"alert()")," (aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"browser"),") in einer Ausgabebox anzeigen. ",(0,r.kt)("em",{parentName:"p"},"Die Ausgabe mit ",(0,r.kt)("inlineCode",{parentName:"em"},"alert")," wird hier verwendet, weil die Online-Version von Python die Ausgaben mit ",(0,r.kt)("inlineCode",{parentName:"em"},"print")," erst am Ende des Programms anzeigt wird"),"."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"alert"},(0,r.kt)("inlineCode",{parentName:"h3"},"alert")),(0,r.kt)(k,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"browser")," k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"Ausgabeboxen")," erzeugt werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nalert('Hello!')\n"))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"zufallszahlen-erraten"},"Zufallszahlen erraten"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Ratespiel",type:"aufgabe"},(0,r.kt)(N,{type:"state",webKey:"9bdbe552-f197-41dd-8709-b7f034597405",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Probieren Sie das Ratespiel aus:"),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"Ratespiel"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beschreiben Sie in eigenen Worten, wie das Ratespiel funktioniert."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,r.kt)(N,{type:"text",webKey:"44979bbe-f85a-45ff-badf-76e910710000",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeichnen Sie mit ihrer Pultnachbar:in ein Struktogramm f\xfcr das Programm."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie gem\xe4ss dem Struktogramm das Ratespiel in Python. "),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=ratespiel.py id=fd00137d-92d8-4572-ba48-60c20aeca5f0",live_py:!0,title:"ratespiel.py",id:"fd00137d-92d8-4572-ba48-60c20aeca5f0"},"from browser import alert\nfrom random import randint\n\n")),(0,r.kt)(h,{mdxType:"Hint"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn die Zahl gefunden wurde, soll die Spieler:in nicht mehr nach einer Eingabe gefragt werden. Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," kann die Wiederholung abgebrochen werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)(h,{title:(0,r.kt)("span",null,(0,r.kt)("code",null,"break")),mdxType:"Hint"},(0,r.kt)("admonition",{parentName:"admonition",type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"break"},(0,r.kt)("inlineCode",{parentName:"h3"},"break")),(0,r.kt)(k,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," kann eine Wiederholter Codeblock beendet werden. Die Ausf\xfchrung geht mit der n\xe4chsten Zeile nach dem Codeblock weiter."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Beispiel")),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(10):\n    print('Zahl', i)\n    if i == 4:\n        break\nprint('Ende')\n")),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Bemerke"),": Bei ",(0,r.kt)("inlineCode",{parentName:"p"},"i == 4")," wird ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," aufgerufen und das Programm f\xfchrt als n\xe4chstes die Zeile 5 aus."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})))),(0,r.kt)(g,{webKey:"fcf61032-e9fd-460a-a5d2-cf19c5a782e8",mdxType:"Solution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"struktogramm"},"Struktogramm"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)(m.Z,{program:[{type:"step",code:(0,r.kt)("span",null,"Eine zuf\xe4llige ganze Zahl zwischen ",(0,r.kt)("u",null,"0")," und ",(0,r.kt)("u",null,"100")," in ",(0,r.kt)("span",{className:"var"},"zahl")," speichern.")},{type:"repeat",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"10")," mal wiederholen:"),block:[{type:"input",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"geraten")," = Zahl zwischen ",(0,r.kt)("u",null,"0")," und ",(0,r.kt)("u",null,"100"))},{type:"if",code:(0,r.kt)("span",null,"Ist die ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl gleich wie die zuf\xe4llig ",(0,r.kt)("span",{className:"var"},"zahl"),"?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Yay, gewonnen!")},{type:"step",code:(0,r.kt)("span",null,"Wiederholungen beenden")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl gr\xf6sser als die zuf\xe4llige ",(0,r.kt)("span",{className:"var"},"zahl"),"?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Die eingegebene Zahl ist zu gross.")},{type:"else",code:(0,r.kt)("span",null,"Ausgabe: Die eingegebene Zahl ist zu klein.")}]}]},{type:"if",code:(0,r.kt)("span",null,"Ist die ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl ungleich der zuf\xe4lligen ",(0,r.kt)("span",{className:"var"},"zahl"),"?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du hast verloren.")}]}],mdxType:"Strukto"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nfrom random import randint \n\nzahl = randint(0, 100)\n\nfor i in range(10):\n    geraten = input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.')\n    geraten = int(geraten)\n    \n    if geraten == zahl:\n        alert(f'Yay, du hast die Zahl {zahl} in {i + 1} Versuchen gefunden!')\n        break\n    elif geraten > zahl:\n        alert(f'Die eingegebene Zahl {geraten} ist zu gross')\n    else:\n        alert(f'Die eingegebene Zahl {geraten} ist zu klein')\n\nif zahl != geraten:\n    alert(f':( du hast verloren, die gesuchte Zahl war {zahl}')\n")))))}f.isMDXComponent=!0}}]);