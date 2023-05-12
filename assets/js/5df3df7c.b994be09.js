"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57939],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),p=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(m.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,f=c["".concat(m,".").concat(u)]||c[u]||s[u]||l;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63949:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const l={sidebar_custom_props:{id:"21e9e5c5-1c63-408f-bc11-d11b13720a8d"}},i="Felder Auff\xfcllen",o={unversionedId:"Programmieren/NumTrip/felder-auffuellen",id:"version-24ef/Programmieren/NumTrip/felder-auffuellen",title:"Felder Auff\xfcllen",description:"Im vorherigen Schritt wurden alle gleichzahligen Nachbarszellen (und deren Nachbarszellen) mit einem leeren Wert ersetzt. Nun sollen die leeren Zellen zusammengeschoben werden.",source:"@site/versioned_docs/version-24ef/01-Programmieren/10-NumTrip/08-felder-auffuellen.md",sourceDirName:"01-Programmieren/10-NumTrip",slug:"/Programmieren/NumTrip/felder-auffuellen",permalink:"/24ef/Programmieren/NumTrip/felder-auffuellen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:8,frontMatter:{sidebar_custom_props:{id:"21e9e5c5-1c63-408f-bc11-d11b13720a8d"}},sidebar:"version-24ef/sidebar",previous:{title:"Nachbarzellen kombinieren",permalink:"/24ef/Programmieren/NumTrip/felder-aufdecken"},next:{title:"Game Loop",permalink:"/24ef/Programmieren/NumTrip/gameloop"}},m={},p=[],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},c=d("Comment"),s=d("GTabs"),u=d("Answer"),f={toc:p},g="wrapper";function b(e){let{components:n,...r}=e;return(0,a.kt)(g,(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"felder-auff\xfcllen"},"Felder Auff\xfcllen"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Im vorherigen Schritt wurden alle gleichzahligen Nachbarszellen (und deren Nachbarszellen) mit einem leeren Wert ersetzt. Nun sollen die leeren Zellen zusammengeschoben werden."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"An der Stelle der ausgew\xe4hlten Zelle wird der urspr\xfcngliche Wert verdoppelt."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Spalte 2, Zeile 3 ausgew\xe4hlt (Zahl 4)\n\n    1   2   3   4   5                  1   2   3   4   5  \n---------------------              ---------------------\n1 | 2 | 4 | 1 | 8 | 8 |            1 | 2 | 4 | 1 | 8 | 8 |\n---------------------              ---------------------\n2 |   | 2 | 8 |   | 1 |            2 |   | 2 | 8 |   | 1 |\n---------------------              ---------------------\n3 |   |[4]|   |   | 2 |     ---\x3e   3 |   | 8 |   |   | 2 |\n---------------------              ---------------------\n4 | 2 | 8 | 1 |   | 1 |            4 | 2 | 8 | 1 |   | 1 |\n---------------------              ---------------------\n5 | 2 |   |   |   |   |            5 | 2 |   |   |   |   |\n---------------------              ---------------------\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Jede Spalte wird von unten her durchgegangen. Ist die Zelle leer, wird der Wert mit der n\xe4chstm\xf6glichen, nichtleeren Zelle derselben Spalte getauscht."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,a.kt)(s,{getLabel:e=>["Beispiel 1","Beispiel 2","Zeilen 4-1"][e],mdxType:"GTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"         1   2   3   4   5        |         1   2                                 1   2    \n     ---------------------        |     -----------                           -----------\n     1 | 2 | 4 | 1 | 8 | 8 |      |     1 | 2 | 4 |                           1 | 2 | 4 |\n     ---------------------        |     -----------                           -----------\n     2 |   | 2 | 8 |   | 1 |      |     2 |   | 2 |                           2 |   | 2 |\n     ---------------------        |     -----------                           -----------\n     3 |   | 8 |   |   | 2 |      |     3 |   | 8 |               ---\x3e        3 |   | 8 |\n     ---------------------        |     -----------                           -----------\n     4 | 2 | 8 | 1 |   | 1 |      |     4 | 2 | 8 | <-- oberhalb leer? Nein   4 | 2 |   | <-- Werte vertauscht\n     ---------------------        |     -----------       /                   -----------       /\n--\x3e  5 | 2 |   |   |   |   |      |     5 | 2 |   |    <-'                    5 | 2 | 8 |    <-' \n     ---------------------        |     -----------                           -----------\n             ^                    |             ^                                     ^   \n             |                    |             |                                     |   \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"         1   2   3   4   5        |       ...  3   4                                   ...  3   4    \n     ---------------------        |      -...---------                                -...---------\n     1 | 2 | 4 | 1 | 8 | 8 |      |    1 |...| 1 | 8 | <--.   oberhalb leer? Nein   1 |...| 1 |   | <--.\n     ---------------------        |      -...---------     \\                          -...---------     \\\n     2 |   | 2 | 8 |   | 1 |      |    2 |...| 8 |   | <--  | oberhalb leer? Ja     2 |...| 8 |   |      |\n     ---------------------        |      -...---------      |                         -...---------      |\n     3 |   | 8 |   |   | 2 |      |    3 |...|   |   | <--  | oberhalb leer? Ja     3 |...|   |   |      |\n     ---------------------        |      -...---------      |                         -...---------      |\n     4 | 2 |   |   |   | 1 |      |    4 |...|   |   | <--  | oberhalb leer? Ja     4 |...|   |   |      |\n     ---------------------        |      -...---------     /                          -...---------     /  Werte vertauscht\n--\x3e  5 | 2 | 8 | 1 |   |   |      |    5 |...| 1 |   |  <-'                         5 |...| 1 | 8 |  <-' \n     ---------------------        |      -...---------                                -...---------\n                     ^            |                ^                                         ^   \n                     |            |                |                                         |   \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Zeile 4                        Zeile 3                       Zeile 2                       Zeile 1\n         1   2   3   4   5             1   2   3   4   5             1   2   3   4   5             1   2   3   4   5    \n       ---------------------         ---------------------         ---------------------         ---------------------  \n     1 | 2 | 4 | 1 |   | 8 |       1 | 2 | 4 | 1 |   | 8 |       1 |   | 4 |   |   | 8 |  --\x3e  1 |   |   |   |   |   |  \n       ---------------------         ---------------------         ---------------------         ---------------------  \n     2 |   | 2 | 8 |   | 1 |       2 |   | 2 |   |   | 1 |  --\x3e  2 |   |   |   |   |   |       2 | 2 | 4 | 1 |   | 8 |  \n       ---------------------         ---------------------         ---------------------         ---------------------  \n     3 |   | 8 |   |   | 2 |  --\x3e  3 |   |   |   |   |   |       3 | 2 | 2 | 1 |   | 1 |       3 | 2 | 2 | 1 |   | 1 |  \n       ---------------------         ---------------------         ---------------------         ---------------------  \n--\x3e  4 | 2 |   |   |   |   |       4 | 2 | 8 | 8 |   | 2 |       4 | 2 | 8 | 8 |   | 2 |       4 | 2 | 8 | 8 |   | 2 |  \n       ---------------------         ---------------------         ---------------------         ---------------------  \n     5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |       5 | 2 | 8 | 1 | 8 | 1 |  \n       ---------------------         ---------------------         ---------------------         ---------------------  \n"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Alle Zellen werden erneut durchgegangen. Ist eine Zelle leer, so wird eine zuf\xe4llige ganze Zahl oder 1 als Zellenwert festgelegt. Es kommen also die Zahlen ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 4]"),", evtl. auch noch die ",(0,a.kt)("inlineCode",{parentName:"p"},"8")," in Frage. Lesen Sie unter ",(0,a.kt)("a",{parentName:"p",href:"/24ef/Programmieren/Python/random"},"\ud83d\udc49 Zuf\xe4llige Zahlen")," nach, welche M\xf6glichkeiten zum Erzeugen von zuf\xe4lligen Zahlen es unter Python gibt."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,a.kt)("admonition",{title:"Aufgabe",type:"aufgabe"},(0,a.kt)(u,{type:"state",webKey:"7c436f14-0f29-4795-af02-4e2002e590f4",mdxType:"Answer"}),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Setzen Sie obigen Algorithmus um. Markieren Sie die Aufgabe anschliessend als erledigt."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))}b.isMDXComponent=!0}}]);