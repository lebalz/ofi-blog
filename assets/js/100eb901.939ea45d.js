"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[30245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,u=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_custom_props:{id:"2dc7bae1-957e-4a45-815d-a1b4e9c99d7e"}},o="Tiefensuche",c={unversionedId:"Algorithmik/tiefensuche/index",id:"version-24ef/Algorithmik/tiefensuche/index",title:"Tiefensuche",description:"Die Tiefensuche (engl. Depth-First Search, DFS) ist in der Informatik ein Verfahren zum Suchen von Knoten in einem Graphen. Sie z\xe4hlt zu den uninformierten Suchalgorithmen. Im Gegensatz zur Breitensuche wird bei der Tiefensuche zun\xe4chst ein Pfad vollst\xe4ndig in die Tiefe beschritten, bevor abzweigende Pfade beschritten werden[1]. Dabei sollen alle erreichbaren Knoten des Graphen besucht werden. F\xfcr Graphen mit potenziell wenigen, langen Pfaden bietet sich die beschr\xe4nkte Tiefensuche an, bei der jeder Pfad nur bis zu einer bestimmten Tiefe beschritten wird.",source:"@site/versioned_docs/version-24ef/05-Algorithmik/07-tiefensuche/index.md",sourceDirName:"05-Algorithmik/07-tiefensuche",slug:"/Algorithmik/tiefensuche/",permalink:"/24ef/Algorithmik/tiefensuche/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"2dc7bae1-957e-4a45-815d-a1b4e9c99d7e"}},sidebar:"version-24ef/sidebar",previous:{title:"Breitensuche",permalink:"/24ef/Algorithmik/breitensuche/"},next:{title:"Dijkstra",permalink:"/24ef/Algorithmik/dijkstra/"}},s={},p=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=d("Comment"),l=d("Figure"),f=d("SourceRef"),u={toc:p},h="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"tiefensuche"},"Tiefensuche"),(0,i.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Tiefensuche (engl. ",(0,i.kt)("em",{parentName:"p"},"Depth-First Search"),", DFS) ist in der Informatik ein Verfahren zum Suchen von Knoten in einem Graphen. Sie z\xe4hlt zu den uninformierten Suchalgorithmen. Im Gegensatz zur Breitensuche wird bei der Tiefensuche zun\xe4chst ein Pfad vollst\xe4ndig in die Tiefe beschritten, bevor abzweigende Pfade beschritten werden","[1]",". Dabei sollen alle erreichbaren Knoten des Graphen besucht werden. F\xfcr Graphen mit potenziell wenigen, langen Pfaden bietet sich die beschr\xe4nkte Tiefensuche an, bei der jeder Pfad nur bis zu einer bestimmten Tiefe beschritten wird.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(l,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(65778).Z,width:"375",height:"375"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(f,{parentName:"figcaption",bib:{author:"Mre",source:"https://de.wikipedia.org/wiki/Tiefensuche#/media/Datei:Depth-First-Search.gif",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(m,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Quelle: ",(0,i.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Tiefensuche"},"Wikipedia")),(0,i.kt)(m,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}b.isMDXComponent=!0},65778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Depth-First-Search-48ac36e2124508dfb31bf8a61a01aa43.gif"}}]);