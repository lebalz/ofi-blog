"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[52477],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=t.createContext({}),u=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(f.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(f,".").concat(p)]||d[p]||s[p]||i;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function p(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var f in r)hasOwnProperty.call(r,f)&&(l[f]=r[f]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70947:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return f},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var t=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},f="Ein Python Algorithmus",u={unversionedId:"Programmieren-1/Turtles/intro",id:"version-24i/Programmieren-1/Turtles/intro",title:"Ein Python Algorithmus",description:"- Was ist die Ausgabe des folgenden Algorithmus? Versuchen Sie die Ausgabe zu zeichnen.",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Turtles/001-intro.md",sourceDirName:"04-Programmieren-1/Turtles",slug:"/Programmieren-1/Turtles/intro",permalink:"/24i/Programmieren-1/Turtles/intro",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Turtles/001-intro.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Turtles",permalink:"/24i/category/turtles"},next:{title:"For Schleife",permalink:"/24i/Programmieren-1/Turtles/for-loop"}},c={},s=[],d={toc:s};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ein-python-algorithmus"},"Ein Python Algorithmus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Was ist die Ausgabe des folgenden Algorithmus? Versuchen Sie die Ausgabe zu zeichnen."),(0,i.kt)("li",{parentName:"ul"},"Halten Sie Abschnitte fest, die sich wiederholen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Ein-Turtle-Programm id=35e3d550-a77d-4f92-8f65-3a31a60cf3d2",live_py:!0,title:"Ein-Turtle-Programm",id:"35e3d550-a77d-4f92-8f65-3a31a60cf3d2"},"from turtle import *\n\nsetheading(0)\n\nforward(120)\nleft(90)\nforward(120)\nleft(90)\nforward(120)\nleft(90)\nforward(120)\nleft(90)\n\npenup()\ngoto(20, 90)\npendown()\n\nforward(20)\nleft(90)\nforward(20)\nleft(90)\nforward(20)\nleft(90)\nforward(20)\nleft(90)\n\npenup()\ngoto(80, 90)\npendown()\n\nforward(20)\nleft(90)\nforward(20)\nleft(90)\nforward(20)\nleft(90)\nforward(20)\nleft(90)\n\n\npenup()\ngoto(10, 50)\npendown()\n\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\n\nforward(20)\n\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\nforward(10)\nleft(90)\nforward(10)\nright(90)\n")))}p.isMDXComponent=!0}}]);