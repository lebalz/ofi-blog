"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=d(r),f=o,u=c["".concat(s,".").concat(f)]||c[f]||l[f]||a;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_custom_props:{id:"6d09f425-1381-45aa-a8f6-b272d49fa173"}},i="1. Display",p={unversionedId:"IoT-Workshop/micropython/display/index",id:"version-24ef/IoT-Workshop/micropython/display/index",title:"1. Display",description:"Material",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/05-micropython/01-display/index.md",sourceDirName:"10-IoT-Workshop/05-micropython/01-display",slug:"/IoT-Workshop/micropython/display/",permalink:"/24ef/IoT-Workshop/micropython/display/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"6d09f425-1381-45aa-a8f6-b272d49fa173"}},sidebar:"version-24ef/sidebar",previous:{title:"Micro Python",permalink:"/24ef/IoT-Workshop/micropython/"},next:{title:"2. Sensoren",permalink:"/24ef/IoT-Workshop/micropython/sensoren/"}},s={},d=[],m=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const l={toc:d},f="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h1",{parentName:"div",id:"1-display"},"1. Display"),(0,o.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,o.kt)("admonition",{title:"OLED-Display",type:"aufgabe"},(0,o.kt)("div",{parentName:"admonition",className:"commentable"},(0,o.kt)("dl",{parentName:"div"},(0,o.kt)("dt",{parentName:"dl"},"Material\n"),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("a",{target:"_blank",href:r(82240).Z},"\ud83d\udc49 Display-Projekt"))),(0,o.kt)(m,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,o.kt)("div",{parentName:"admonition",className:"commentable"},(0,o.kt)("p",{parentName:"div"},"Laden Sie das Beispiel-Projekt herunter und untersuchen Sie dieses genauer."),(0,o.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,o.kt)("div",{parentName:"admonition",className:"commentable"},(0,o.kt)("p",{parentName:"div"},"Studieren Sie zudem die Dokumentation der Display-Bibliothek: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.micropython.org/en/latest/esp8266/tutorial/ssd1306.html"},"\ud83d\udc49 SSD1306")),(0,o.kt)(m,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,o.kt)("div",{parentName:"admonition",className:"commentable"},(0,o.kt)("p",{parentName:"div"},"Versuchen Sie, ein kleines Strichm\xe4nnchen/frauchen auf dem Display zu zeichnen."),(0,o.kt)(m,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))))}u.isMDXComponent=!0},82240:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/display-assets-d3d3e14d8e77d05ff37404b2a2ac3035.zip"}}]);