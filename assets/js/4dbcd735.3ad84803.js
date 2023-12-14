"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3849],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[m]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49192:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},o="Pr\xfcfung Robotik: Linus",d={type:"mdx",permalink:"/secure/vry3l6",source:"@site/src/pages/secure/vry3l6.md",title:"Pr\xfcfung Robotik: Linus",description:"Editor",frontMatter:{}},p=[],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},s=l("OnlyFor"),m=l("Solution"),c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pr\xfcfung-robotik-linus"},"Pr\xfcfung Robotik: Linus"),(0,r.kt)(s,{email:"Linus.Arnaschus@edu.gbsl.ch",mdxType:"OnlyFor"},(0,r.kt)("admonition",{title:"Aufgaben",type:"aufgabe"},(0,r.kt)(m,{webKey:"295fea23-e074-4471-b14e-7b39c5597357",title:"Robotik",open:!0,noWrap:!0,mdxType:"Solution"},(0,r.kt)("dl",{parentName:"admonition"},(0,r.kt)("dt",{parentName:"dl"},"Editor\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("a",{parentName:"dd",href:"https://python.microbit.org/v/3"},"\ud83d\udc49 https://python.microbit.org/v/3"))),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-1"},"Aufgabe 1"),(0,r.kt)("p",{parentName:"admonition"},"Setzen Sie das untenstehende Zustandsdiagramm auf dem Microbit um und \xfcberpr\xfcfen Sie, ob es funktioniert.\nHalten Sie den Microbit dabei am USB-Kabel vor sich und kippen Ihn nach Links oder Rechts."),(0,r.kt)("mermaid",{parentName:"admonition",value:"stateDiagram-v2 \n    classDef edgeLabel background:#ffffffdd\n    [*] --\x3e LEFT: /fill left\n    LEFT --\x3e RIGHT: acc_x < 0 /fill right\n    RIGHT --\x3e LEFT: acc_x > 0 /fill left"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from microbit import *\n\n# mit display.show(IMAGES['LEFT']) kann das Bild angezeigt werden\nIMAGES = {\n    'LEFT': Image('00999:00999:00999:00999:00999'),\n    'RIGHT': Image('99900:99900:99900:99900:99900'),\n    'FLAT': Image('00900:00900:00900:00900:00900'),\n}\n\nwhile True:\n    acc_x = accelerometer.get_x()\n\n")),(0,r.kt)("p",{parentName:"admonition"},"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=8d1044aa-8c39-40b7-9871-0aacd3c98b7c",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"8d1044aa-8c39-40b7-9871-0aacd3c98b7c"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-2"},"Aufgabe 2"),(0,r.kt)("p",{parentName:"admonition"},"Nun soll ein weiterer Zustand ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"FLAT")," hinzugef\xfcgt werden. Wenn man den Microbit in der Ebene flach h\xe4lt wird, soll das Bild ",(0,r.kt)("inlineCode",{parentName:"p"},"IMAGES['FLAT']")," angezeigt werden."),(0,r.kt)("p",{parentName:"admonition"},"Beachten Sie, dass die Sensorwerte nicht genau 0 sind, wenn der Microbit flach gehalten wird. Sie m\xfcssen also einen Bereich definieren, in dem der Microbit als flach gilt."),(0,r.kt)("admonition",{parentName:"admonition",title:"Tipp",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Werte des Sensors mit ",(0,r.kt)("inlineCode",{parentName:"p"},"print(acc_x)")," ausgeben und untersuchen, was sinnvolle Grenzen sind.")),(0,r.kt)("p",{parentName:"admonition"},"Probieren Sie, ob Ihr Programm funktioniert und ob die korrekten Bilder angezeigt wenn der Microbit hin- und hergekippt wird."),(0,r.kt)("p",{parentName:"admonition"},"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=e2db1685-9fad-4cb0-8534-376a4c1999e9",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"e2db1685-9fad-4cb0-8534-376a4c1999e9"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"aufgabe-3"},"Aufgabe 3"),(0,r.kt)("p",{parentName:"admonition"},"Wenn der Knopf A geklickt wurde (",(0,r.kt)("inlineCode",{parentName:"p"},"button_a.was_pressed()"),"), soll mit einem Pfeil die Richtung angezeigt werden, oder im Zustand ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"FLAT")," das Bild ",(0,r.kt)("inlineCode",{parentName:"p"},"Image.HEART"),".\nDas Bild soll solange angezeigt werden, bis sich der Zustand durch Kippen des Microbits \xe4ndert. (Es soll aber nebst dem ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," keine zus\xe4tzliche Variable verwendet werden)"),(0,r.kt)("dl",{parentName:"admonition"},(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"LEFT")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.Image.ARROW_E")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"RIGHT")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.Image.ARROW_W")),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dt",className:"underline"},"FLAT")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"Image.HEART"))),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=b4567103-bc33-4ec4-ba56-986c9a422391",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"b4567103-bc33-4ec4-ba56-986c9a422391"},"\n\n")),(0,r.kt)("h2",{parentName:"admonition",id:"-aufgabe-4-optionale-zusatzaufgabe"},"\u2b50 Aufgabe 4 (Optionale Zusatzaufgabe)"),(0,r.kt)("p",{parentName:"admonition"},"Solange der Knopf B gedr\xfcckt wird (",(0,r.kt)("inlineCode",{parentName:"p"},"button_b.is_pressed()"),"), sollen keine Transitionen zwischen den Zust\xe4nden stattfinden."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=7ebf11dd-b822-4531-93d7-859592e65dae",title:"Antwort1.sql",live_py:!0,versioned:!0,persist:!0,noDownload:!0,noCompare:!0,noHistory:!0,id:"7ebf11dd-b822-4531-93d7-859592e65dae"},"\n\n"))))))}f.isMDXComponent=!0}}]);