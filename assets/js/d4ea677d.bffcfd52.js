"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[51734],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(83117),o=(t(67294),t(3905));const a={sidebar_custom_props:{id:"194c1e32-af2c-41fd-98fd-5c709094ad25"}},i="3D Turtle",p={unversionedId:"Programmieren-1/snippets/turtle_3d",id:"Programmieren-1/snippets/turtle_3d",title:"3D Turtle",description:"",source:"@site/docs/Programmieren-1/snippets/turtle_3d.md",sourceDirName:"Programmieren-1/snippets",slug:"/Programmieren-1/snippets/turtle_3d",permalink:"/Programmieren-1/snippets/turtle_3d",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/snippets/turtle_3d.md",tags:[],version:"current",lastUpdatedAt:1672934454,formattedLastUpdatedAt:"5. Jan. 2023",frontMatter:{sidebar_custom_props:{id:"194c1e32-af2c-41fd-98fd-5c709094ad25"}},sidebar:"sidebar",previous:{title:"Grid",permalink:"/Programmieren-1/snippets/Grid"},next:{title:"v24",permalink:"/category/v24"}},l={},c=[],s=(d="Comment",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"commentable"},(0,o.kt)("h1",{parentName:"div",id:"3d-turtle"},"3D Turtle"),(0,o.kt)(s,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle3d import *\nfrom turtle import *\n\nspeed(0)\nfor i in range(20):\n    for j in range(4):\n        forward(8)\n        left(90)\n    penup()\n    goto(0, -20)\n    pendown()\n    setheading(0)\n    for j in range(6):\n        forward(8)\n        left(360 / 5)\n    level_up()\n    penup()\n    goto(0,0)\n    pendown()\n    setheading(0)\n\nprint(gcode())\n")))}u.isMDXComponent=!0}}]);