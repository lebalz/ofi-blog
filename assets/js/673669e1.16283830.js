"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[25749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,m(m({ref:t},s),{},{components:n})):a.createElement(g,m({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var l=2;l<i;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"da6756be-0507-4125-be9d-0066337f69e6"}},m="Game Loop",o={unversionedId:"Programmieren/NumTrip/gameloop",id:"version-24ef/Programmieren/NumTrip/gameloop",title:"Game Loop",description:"Wir sind fast fertig mit der Implementation des NumTrip-Spiels. Was bleibt ist, dass die Spieler:in nicht nur einen Zug machen kann, sondern so viele, wie n\xf6tig sind, bis das Spiel fertig ist.",source:"@site/versioned_docs/version-24ef/01-Programmieren/10-NumTrip/08-gameloop.md",sourceDirName:"01-Programmieren/10-NumTrip",slug:"/Programmieren/NumTrip/gameloop",permalink:"/24ef/Programmieren/NumTrip/gameloop",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:8,frontMatter:{sidebar_custom_props:{id:"da6756be-0507-4125-be9d-0066337f69e6"}},sidebar:"version-24ef/sidebar",previous:{title:"Felder Auff\xfcllen",permalink:"/24ef/Programmieren/NumTrip/felder-auffuellen"},next:{title:"\u2b50 Daten speichern & laden",permalink:"/24ef/Programmieren/NumTrip/load-data"}},p={},l=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=s("Comment"),c=s("Answer"),u={toc:l};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"game-loop"},"Game Loop"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir sind fast fertig mit der Implementation des NumTrip-Spiels. Was bleibt ist, dass die Spieler:in nicht nur einen Zug machen kann, sondern so viele, wie n\xf6tig sind, bis das Spiel fertig ist."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In der Spielentwicklung spricht man vom ",(0,r.kt)("strong",{parentName:"p"},"Game-Loop"),". Wie der Name sagt ist dies eine Schleife, welche in der Regel folgende Form hat:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wiederhole bis Spielende erreicht:\n    Eingabe von Benutzer:in\n    Eingabe verarbeiten\n    Neuen Spielstand anzeigen\n")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(c,{type:"state",webKey:"69c57cbf-4ea6-4b8e-8623-d379c4d38839",mdxType:"Answer"}),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erg\xe4nzen Sie die Hauptfunktion Ihres Spiels mit einer Game-Loop, wobei vorerst unendlich viele Runden gespielt werden k\xf6nnen. ",(0,r.kt)("i",{parentName:"p",className:"mdi-arrow-right mdi "})," ",(0,r.kt)("strong",{parentName:"p"},"commit")),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcgen Sie eine \xdcberpr\xfcfung hinzu, ob das Spiel gewonnen oder verloren wurde:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Gewonnen"),": Eine von Ihnen festgelegte Zahl (bspw. ",(0,r.kt)("em",{parentName:"p"},"1024"),") wurde erreicht"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Verloren"),": Es gibt keine weitere M\xf6glichkeit, einen Zug zu machen. (Wenn es min. ein Feld mit einem gleichwertigen Nachbarsfeld gibt, so gibt es noch eine M\xf6glichkeit...)"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Anschluss soll dann die Spieler:in mitgeteilt werden, ob das Spiel gewonnen oder verloren wurde."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"-zusatz-score"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\u2b50 Zusatz: Score"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(c,{type:"state",webKey:"1c1e526c-45bb-47c1-b9b6-2b5418785203",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcgen Sie einen Score hinzu, der angibt, wie viele Z\xfcge man gebraucht hat, um das Endziel (",(0,r.kt)("em",{parentName:"p"},"1024"),") zu erreichen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))))}g.isMDXComponent=!0}}]);