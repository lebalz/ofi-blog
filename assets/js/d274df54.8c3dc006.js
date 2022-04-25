"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[82841],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84384:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),o={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(92814),i=t(51436),s=t(86010),l=function(e){return r.createElement("span",{className:o.details},r.createElement("span",{className:(0,s.default)("badge badge--secondary",o.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:o.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,s.default)("badge badge--secondary",o.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:o.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},r.createElement(a.G,{icon:i.Xjp}))))},c=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},p=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+c(t.size)+")",n.maxHeight=c(t.size),delete t.size),t.height&&(n.maxHeight=c(t.height),n.height=c(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+c(t.width)+")",n.width=c(t.width),delete t.width),n=Object.assign({},n,t),r.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(p,e);var n=r.useState(!1),t=(n[0],n[1]),a=r.useState(!1),i=a[0],c=a[1],u=e.caption&&"undefined"!==e.caption,d=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,s.default)(o.container,e.options.noMargins&&o.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,r,o,a,i;n=e.currentTarget.getBoundingClientRect(),r=e.clientX,o=e.clientY,a=n.left<=r&&n.right>=r,i=n.top<=o&&n.bottom>=o,a&&i||t(!1)}},r.createElement(p,e),d&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,s.default)(o.bib,i?o.visible:void 0),onClick:function(){return c(!i)}},"@"),i&&r.createElement(l,e.bib)))}},75101:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=t(84384),s=["components"],l={},c="Planeten mit Monden",p={unversionedId:"snippets/turtle-planets",id:"snippets/turtle-planets",title:"Planeten mit Monden",description:"",source:"@site/docs/snippets/turtle-planets.md",sourceDirName:"snippets",slug:"/snippets/turtle-planets",permalink:"/snippets/turtle-planets",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/turtle-planets.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Phaser",permalink:"/snippets/python-phaserjs"},next:{title:"1. Python",permalink:"/software-installation/python-3.9"}},u={},d=[],m={toc:d};function g(e){var n=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"planeten-mit-monden"},"Planeten mit Monden"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(i.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(73610).Z,mdxType:"Image"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=planeten.py id=877367b1-83df-418d-8f7b-1bc5534e0279",live_py:!0,title:"planeten.py",id:"877367b1-83df-418d-8f7b-1bc5534e0279"},"import turtle as t\nfrom math import sin, cos, pi\n\n# parameter\nRADIUS_earth_pos = [120, 100]\nRADIUS_MOON = [20, 25]\nRADIUS_MOON2 = [34, 28]\n\n# speed factor relative to the earth...\nMOON_SPEED = 14.3871\nMOON_SPEED2 = 18.913\nSTEPS = 400\nROUNDS = 2\nTURTLE_SPEED = 10\n\n# create turtles\nsun = t.Turtle('turtle')\nearth = t.Turtle('circle')\nmoon = t.Turtle()\nmoon2 = t.Turtle()\n\n# setup turtles\nsun.speed(-1) # max speed\nearth.speed(TURTLE_SPEED)\nmoon.speed(TURTLE_SPEED)\nmoon2.speed(TURTLE_SPEED)\n\n# set initial position, without drawing\nearth.penup()\nmoon.penup()\nmoon2.penup()\nearth.goto(RADIUS_earth_pos[0], 0)\nmoon.goto(RADIUS_earth_pos[0] + RADIUS_MOON[0], 0)\nmoon2.goto(RADIUS_earth_pos[0], -RADIUS_MOON2[1])\nmoon2.pendown()\nmoon.pendown()\n\ndef to_degree(rad):\n  return 360 * rad / 2.0 / pi\n\nfor step in range(STEPS * ROUNDS):\n  angle = 2 * pi * step / STEPS\n  sun.setheading(to_degree(angle) * 3)\n  earth_pos = [cos(angle) * RADIUS_earth_pos[0], sin(angle) * RADIUS_earth_pos[1]]\n  earth.goto(earth_pos[0], earth_pos[1])\n  earth.setheading(to_degree(angle) + 90)\n\n  angle_moon = angle * MOON_SPEED\n  rel_moon = [cos(angle_moon) * RADIUS_MOON[0], sin(angle_moon) * RADIUS_MOON[1]]\n  moon.goto(earth_pos[0] + rel_moon[0], earth_pos[1]  + rel_moon[1])\n  moon.setheading(to_degree(angle_moon) + 90)\n\n  angle_moon2 = angle * MOON_SPEED2\n  rel_moon2 = [sin(angle_moon2) * RADIUS_MOON2[0], cos(angle_moon2) * RADIUS_MOON2[1]]\n  moon2.goto(earth_pos[0] - rel_moon2[0], earth_pos[1]  - rel_moon2[1])\n  moon2.setheading(180 - to_degree(angle_moon2))\n\n# hide turtles\nsun.hideturtle()\nearth.hideturtle()\nmoon.hideturtle()\nmoon2.hideturtle()\n")))}g.isMDXComponent=!0},73610:function(e,n,t){n.Z=t.p+"assets/images/turtle-planets-dcb9ef5b63ba0c85a2e8ee85c61ca05a.svg"}}]);