"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4261],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),o=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=o(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?i.createElement(m,s(s({ref:t},h),{},{components:n})):i.createElement(m,s({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<a;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),s=n(51436),c=n(86010),l=function(e){return i.createElement("span",{className:r.details},i.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,c.default)("badge badge--secondary")},i.createElement(a.G,{icon:s.Xjp}))))},o=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},h=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+o(n.size)+")",t.maxHeight=o(n.size),delete n.size),n.height&&(t.maxHeight=o(n.height),t.height=o(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+o(n.width)+")",t.width=o(n.width),delete n.width),t=Object.assign({},t,n),i.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return i.createElement(h,e);var t=i.useState(!1),n=(t[0],t[1]),a=i.useState(!1),s=a[0],o=a[1],d=e.caption&&"undefined"!==e.caption,u=e.bib||d;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,c.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,i,r,a,s;t=e.currentTarget.getBoundingClientRect(),i=e.clientX,r=e.clientY,a=t.left<=i&&t.right>=i,s=t.top<=r&&t.bottom>=r,a&&s||n(!1)}},i.createElement(h,e),u&&i.createElement("figcaption",null,d&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,c.default)(r.bib,s?r.visible:void 0),onClick:function(){return o(!s)}},"@"),s&&i.createElement(l,e.bib)))}},84918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return u}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),s=n(84384),c=["components"],l={sidebar_label:"1. Physikalische Schicht",sidebar_position:6},o="Schicht 1: Physikalische Schicht (Netzzugangsschicht) [^1]",h={unversionedId:"Netzwerke/Schichtenmodell/Physikalische-Schicht",id:"version-24K/Netzwerke/Schichtenmodell/Physikalische-Schicht",title:"Schicht 1: Physikalische Schicht (Netzzugangsschicht) [^1]",description:"Auf der phyikalischen Schicht geht es um das konkrete Transportmittel (Velokurier, Lastwagen, ... resp. WLAN, LAN, Mobilfunk, ...). Auch hier werden Adressen ben\xf6tigt, es sind weltweit eindeutige Adressen, die fix an das Ger\xe4t gekn\xfcpft sind.",source:"@site/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/1-Physikalische-Schicht.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/Physikalische-Schicht",permalink:"/24K/Netzwerke/Schichtenmodell/Physikalische-Schicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/1-Physikalische-Schicht.mdx",tags:[],version:"24K",sidebarPosition:6,frontMatter:{sidebar_label:"1. Physikalische Schicht",sidebar_position:6},sidebar:"version-24K/sidebar",previous:{title:"2. Vermittlungsschicht",permalink:"/24K/Netzwerke/Schichtenmodell/Vermittlungsschicht"},next:{title:"Schichten und Adressen",permalink:"/24K/Netzwerke/Schichtenmodell/Schichten-und-Adressen"}},d={},u=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-schule",level:2},{value:"Internet",id:"internet",level:2},{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",level:3}],p={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schicht-1-physikalische-schicht-netzzugangsschicht-"},"Schicht 1: Physikalische Schicht (Netzzugangsschicht) ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Auf der phyikalischen Schicht geht es um das konkrete Transportmittel (Velokurier, Lastwagen, ... resp. WLAN, LAN, Mobilfunk, ...). Auch hier werden Adressen ben\xf6tigt, es sind weltweit eindeutige Adressen, die fix an das Ger\xe4t gekn\xfcpft sind."),(0,a.kt)("h2",{id:"beispiel-schule"},"Beispiel \xabSchule\xbb"),(0,a.kt)("p",null,"Im Beispiel \xabSchule\xbb m\xfcssen die S\xe4cke, die die vielen Pakete enthalten, nun endlich transportiert werden. Dies \xfcbernehmen Speditionsangestellte, die die S\xe4cke mit Hilfe von Lastwagen an den n\xe4chsten Zielort (z.B. in ein Paketzentrum oder an die Lieferadresse) bringen. Die Spedition k\xfcmmert sich nur um den aktuellen Transportabschnitt."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/4-physical/layer-1.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(90136).Z,mdxType:"Image"})),(0,a.kt)("h2",{id:"internet"},"Internet"),(0,a.kt)("p",null,"Die physikalische Schicht besteht aus der Hardware, also den Kabeln und Ger\xe4ten (mit ihren physikalischen Adressen). Die physikalische Adresse wird MAC-Adresse genannt (siehe Begriff MAC-Adressen)."),(0,a.kt)("p",null,"Wieso braucht es zwei Adressen, logische Adressen (Vermittlungsschicht) und physikalische dieser Schicht? Innerhalb eines lokalen Netzwerks werden die physikalischen Adressen verwendet. Da es aber keine M\xf6glichkeit gibt, alle physikalischen Adressen auf der Welt zu kennen und zu wissen, wie man diese Ger\xe4t erreichen kann, braucht es logische Adressen, die zu einem bestimmten Netzwerk geh\xf6ren. Nur so ist es m\xf6glich, mit dem gleichen Ger\xe4t am Morgen zu Hause und sp\xe4ter an der Schule online zu sein."),(0,a.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/ZhEf7e4kopM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=783655"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},90136:function(e,t,n){t.Z=n.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"}}]);