"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const o={sidebar_custom_props:{id:"3d84e698-d8ff-428e-b565-d2b962446e6c"}},i="Python Scopes",p={unversionedId:"EF-Python/Python/scopes",id:"EF-Python/Python/scopes",title:"Python Scopes",description:"Ausgangslage",source:"@site/docs/EF-Python/03-Python/12-scopes.md",sourceDirName:"EF-Python/03-Python",slug:"/EF-Python/Python/scopes",permalink:"/EF-Python/Python/scopes",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/03-Python/12-scopes.md",tags:[],version:"current",lastUpdatedAt:1667565302,formattedLastUpdatedAt:"4. Nov. 2022",sidebarPosition:12,frontMatter:{sidebar_custom_props:{id:"3d84e698-d8ff-428e-b565-d2b962446e6c"}},sidebar:"sidebar",previous:{title:"Funktionen",permalink:"/EF-Python/Python/functions/"},next:{title:"Zuf\xe4llige Zahlen",permalink:"/EF-Python/Python/random"}},s={},l=[{value:"Ausgangslage",id:"ausgangslage",level:2},{value:"Pr\xe4sentation",id:"pr\xe4sentation",level:2},{value:"Notizen",id:"notizen",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("Comment"),m=c("Answer"),u={toc:l};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"python-scopes"},"Python Scopes"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"ausgangslage"},"Ausgangslage"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Wieso kann die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," auf Zeile 1 nicht ver\xe4ndert werden?"),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"word = 'test'\n\ndef reset():\n    word = 'hangman'\n    print(word)\n\ndef play():\n    print(word)\n    reset()\n    print(word)\nplay()\n")),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"pr\xe4sentation"},"Pr\xe4sentation"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("iframe",{src:"/slides/python-scopes.html",style:{border:"0px",width:"100%",height:"500px"},allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"notizen"},"Notizen"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,a.kt)(m,{type:"text",webKey:"01577bb7-a08d-47b0-8843-275c20c0fbab",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(m,{type:"state",webKey:"bca45923-7810-4b36-b72c-3a5fdc7b1e92",mdxType:"Answer"}),(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Quizz-Aufgaben unter \ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://www.codequizzes.com/python/beginner-II/variable-scope"},"https://www.codequizzes.com/python/beginner-II/variable-scope"),' bearbeiten und Aufgabe als "erledigt" markieren.'),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)(m,{type:"text",webKey:"2add6536-2434-42e1-97f1-6d14692f3e9c",placeholder:"\u270d\ufe0f Notizen...",mdxType:"Answer"}))))}y.isMDXComponent=!0}}]);