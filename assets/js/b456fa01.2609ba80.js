"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2253],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(b,i(i({ref:n},l),{},{components:t})):a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72324:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Pr\xfcfung Robotik: Marie-Louise",d={type:"mdx",permalink:"/secure/hv1uoa",source:"@site/src/pages/secure/hv1uoa.md",title:"Pr\xfcfung Robotik: Marie-Louise",description:"Editor",frontMatter:{}},p=[],s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},l=s("OnlyFor"),m=s("Solution"),c={toc:p},u="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pr\xfcfung-robotik-marie-louise"},"Pr\xfcfung Robotik: Marie-Louise"),(0,r.kt)(l,{email:"Marie-Louise.Zesiger@edu.gbsl.ch",mdxType:"OnlyFor"},(0,r.kt)("admonition",{title:"Aufgaben",type:"aufgabe"},(0,r.kt)(m,{webKey:"295fea23-e074-4471-b14e-7b39c5597357",title:"Robotik",open:!0,noWrap:!0,mdxType:"Solution"},(0,r.kt)("dl",{parentName:"admonition"},(0,r.kt)("dt",{parentName:"dl"},"Editor\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("a",{parentName:"dd",href:"https://python.microbit.org/v/3"},"\ud83d\udc49 https://python.microbit.org/v/3"))),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-1"},"Aufgabe 1"),(0,r.kt)("p",{parentName:"admonition"},"Setzen Sie das untenstehende Zustandsdiagramm auf dem Microbit um und \xfcberpr\xfcfen Sie, ob es funktioniert.\nHalten Sie den Microbit dabei am USB-Kabel vor sich und kippen Ihn nach Vorne oder Hinten."),(0,r.kt)("mermaid",{parentName:"admonition",value:"stateDiagram-v2 \n    classDef edgeLabel background:#ffffffdd\n    [*] --\x3e BACK: /show back\n    BACK --\x3e FRONT: acc_y > 0 /show front\n    FRONT --\x3e BACK: acc_y < 0 /show back"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from microbit import *\n\n# mit display.show(IMAGES['BACK']) kann das Bild angezeigt werden\nIMAGES = {\n    'BACK': Image('99999:99999:99999:00000:00000'),\n    'FRONT': Image('00000:00000:99999:99999:99999'),\n    'FLAT': Image('00000:00000:99999:00000:00000'),\n}\n\nwhile True:\n    acc_y = accelerometer.get_y()\n\n")),(0,r.kt)("p",{parentName:"admonition"},"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=8d1044aa-8c39-40b7-9871-0aacd3c98b7c",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"8d1044aa-8c39-40b7-9871-0aacd3c98b7c"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-2"},"Aufgabe 2"),(0,r.kt)("p",{parentName:"admonition"},"Nun soll ein weiterer Zustand ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"FLAT")," hinzugef\xfcgt werden. Wenn man den Microbit in der Ebene flach h\xe4lt, soll das Bild ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGES['FLAT']")," angezeigt werden."),(0,r.kt)("p",{parentName:"admonition"},"Beachten Sie, dass die Sensorwerte nicht genau 0 sind, wenn der Microbit flach gehalten wird. Sie m\xfcssen also einen Bereich definieren, in dem der Microbit als flach gilt."),(0,r.kt)("admonition",{parentName:"admonition",title:"Tipp",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Werte des Sensors mit ",(0,r.kt)("inlineCode",{parentName:"p"},"print(acc_y)")," ausgeben und untersuchen, was sinnvolle Grenzen sind.")),(0,r.kt)("p",{parentName:"admonition"},"Probieren Sie, ob Ihr Programm funktioniert und ob die korrekten Bilder angezeigt wenn der Microbit hin- und hergekippt wird."),(0,r.kt)("p",{parentName:"admonition"},"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=e2db1685-9fad-4cb0-8534-376a4c1999e9",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"e2db1685-9fad-4cb0-8534-376a4c1999e9"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-3"},"Aufgabe 3"),(0,r.kt)("p",{parentName:"admonition"},"Wenn der Knopf A geklickt wurde (",(0,r.kt)("inlineCode",{parentName:"p"},"button_a.was_pressed()"),"), soll mit einem Pfeil die Richtung angezeigt werden, oder im Zustand ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"FLAT")," das Bild ",(0,r.kt)("inlineCode",{parentName:"p"},"Image.SKULL"),".\nDas Bild soll solange angezeigt werden, bis sich der Zustand durch Kippen des Microbits \xe4ndert. (Es soll aber nebst dem ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," keine zus\xe4tzliche Variable verwendet werden)"),(0,r.kt)("dl",{parentName:"admonition"},(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"BACK")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.Image.ARROW_N")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"FRONT")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.Image.ARROW_S")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"FLAT")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.SKULL"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=b4567103-bc33-4ec4-ba56-986c9a422391",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"b4567103-bc33-4ec4-ba56-986c9a422391"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"-aufgabe-4-optionale-zusatzaufgabe"},"\u2b50 Aufgabe 4 (Optionale Zusatzaufgabe)"),(0,r.kt)("p",{parentName:"admonition"},"Solange der Knopf B gedr\xfcckt wird (",(0,r.kt)("inlineCode",{parentName:"p"},"button_b.is_pressed()"),"), sollen keine Transitionen zwischen den Zust\xe4nden stattfinden."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=7ebf11dd-b822-4531-93d7-859592e65dae",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"7ebf11dd-b822-4531-93d7-859592e65dae"},"\n\n"))))))}b.isMDXComponent=!0}}]);