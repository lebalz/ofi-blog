"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59771],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=o(t),h=i,p=m["".concat(c,".").concat(h)]||m[h]||u[h]||r;return t?a.createElement(p,l(l({ref:n},d),{},{components:t})):a.createElement(p,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(83117),i=t(67294),r=t(72389),l=t(36162),s=t(86010),c="tabItem_LplD";function o(e){var n,t,r,o=e.lazy,d=e.block,u=e.defaultValue,m=e.values,h=e.groupId,p=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,i.useState)(g),S=N[0],z=N[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=y[h];null!=T&&T!==S&&b.some((function(e){return e.value===T}))&&z(T)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==S&&(E(n),z(a),null!=h&&w(h,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":d},p)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:P,onClick:P},r,{className:(0,s.default)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function d(e){var n=(0,r.Z)();return i.createElement(o,(0,a.Z)({key:String(n)},e))}},84384:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=t(92814),l=t(51436),s=t(86010),c=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(r.G,{icon:l.Xjp}))))},o=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},d=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+o(t.size)+")",n.maxHeight=o(t.size),delete t.size),t.height&&(n.maxHeight=o(t.height),n.height=o(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+o(t.width)+")",n.width=o(t.width),delete t.width),n=Object.assign({},n,t),a.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var n=a.useState(!1),t=(n[0],n[1]),r=a.useState(!1),l=r[0],o=r[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,a,i,r,l;n=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=n.left<=a&&n.right>=a,l=n.top<=i&&n.bottom>=i,r&&l||t(!1)}},a.createElement(d,e),m&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(i.bib,l?i.visible:void 0),onClick:function(){return o(!l)}},"@"),l&&a.createElement(c,e.bib)))}},62604:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),l=t(84384),s=t(9877),c=t(58215),o=["components"],d={sidebar_label:"Schichtenmodell",sidebar_position:1},u="Schichtenmodell [^1]",m={unversionedId:"Netzwerke/Schichtenmodell/0a-Schichtenmodell",id:"version-24L/Netzwerke/Schichtenmodell/0a-Schichtenmodell",title:"Schichtenmodell [^1]",description:"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden.",source:"@site/versioned_docs/version-24L/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/0a-Schichtenmodell",permalink:"/24L/Netzwerke/Schichtenmodell/0a-Schichtenmodell",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",tags:[],version:"24L",sidebarPosition:1,frontMatter:{sidebar_label:"Schichtenmodell",sidebar_position:1},sidebar:"version-24L/sidebar",previous:{title:"Schichtenmodell",permalink:"/24L/category/schichtenmodell"},next:{title:"TCP/IP-Schichtenmodell",permalink:"/24L/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell"}},h={},p=[{value:"Vorteile des Schichtenmodells",id:"vorteile-des-schichtenmodells",level:2},{value:"Aufbau auf bestehendem",id:"aufbau-auf-bestehendem",level:3},{value:"Austauschbare Schichten",id:"austauschbare-schichten",level:3},{value:"Andere Schichtenmondelle",id:"andere-schichtenmondelle",level:2},{value:"Informatik",id:"informatik",level:3},{value:"Andere Wissenschaften",id:"andere-wissenschaften",level:3},{value:"Weitere...",id:"weitere",level:3}],f={toc:p};function b(e){var n=e.components,d=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,d,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schichtenmodell-"},"Schichtenmodell ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden."),(0,r.kt)("p",null,"Wir wollen die Vorteile des Schichtenmodell an Hand eines Beispiels versuchen zu verstehen:"),(0,r.kt)("h1",{id:"beispiel-schule"},'Beispiel "Schule"'),(0,r.kt)("p",null,"Die Schule Madretsch feiert 100-j\xe4hriges Jubil\xe4um und braucht f\xfcr ihr Fest zus\xe4tzliche Schulpulte. Wir m\xf6chten helfen und einige Pulte schicken."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Pulte zum Verschicken",options:{},isInline:!1,src:t(57033).Z,alt:"Pulte zum Verschicken",mdxType:"Image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wie funktioniert dies?"),(0,r.kt)("li",{parentName:"ul"},"Wer ist alles involviert?")),(0,r.kt)("blockquote",null,(0,r.kt)(s.Z,{defaultValue:"step-1",values:[{label:"Details 1",value:"step-1"},{label:"Details 2",value:"step-2"},{label:"Details 3",value:"step-3"},{label:"Details 4",value:"step-4"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"step-1",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/1-application/layer-4.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(85560).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Den Sch\xfcler:innen ist egal, wie die Pulte in die Schule kommen. Sie freuen sich einfach \xfcber die zus\xe4tzlichen Schulpulte.")),(0,r.kt)(c.Z,{value:"step-2",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/2-transport/layer-3.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(96863).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Da die Pulte zu sperrig sind, werden diese vom GBSL-Hausdienst zerlegt und in einzelne Pakete verpackt.\nWenn die Pakete ankommen, kann der Madretsch-Hausdienst die Pakete auspacken und die Pulte wieder zusammensetzen.  ")),(0,r.kt)(c.Z,{value:"step-3",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/3-network/layer-2.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(45601).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Der Hausdienst tr\xe4gt diese Pakete aber nicht selber zur Schule Madretsch.\nNein, die Pakete werden an die Post \xfcbergeben.\nDiese ist f\xfcr den Transport zust\xe4ndig.\nDie Pakete machen auch einen Zwischenstopp im Verteilzentrum H\xe4rkingen.")),(0,r.kt)(c.Z,{value:"step-4",mdxType:"TabItem"},(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/4-physical/layer-1.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:t(38379).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Die Post verwendet nun f\xfcr den eigentlichen Transport verschiedene Fahrzeuge.\nIm Verteilzentrum wird der Inhalt entladen und gem\xe4ss Adresse weitergeleitet.")))),(0,r.kt)("h2",{id:"vorteile-des-schichtenmodells"},"Vorteile des Schichtenmodells"),(0,r.kt)("h3",{id:"aufbau-auf-bestehendem"},"Aufbau auf bestehendem"),(0,r.kt)("p",null,"Ohne Probleme liesse sich das obenstehende Beispiel verwenden, um andere Inhalte zu transportieren. So k\xf6nnten statt Pulten auch St\xfchle \u2013 oder z.B. auch Esswaren transportiert werden."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So funktioniert auch unser Postsystem: Bis auf wenige Ausnahmen transportiert die Post alles."),(0,r.kt)("li",{parentName:"ul"},"Die \xdcbertragung von E-Mails und die einer Webseite unterscheidet sich nur in der obersten Schicht. Beide bauen auf den 3 identischen unteren Schichten auf")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufbau-auf-bestehendem"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufbau auf bestehendem")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Was k\xf6nnte noch \xdcbertragen werden, wobei die unteren Schichten verwendet werden?"))),(0,r.kt)("h3",{id:"austauschbare-schichten"},"Austauschbare Schichten"),(0,r.kt)("p",null,"Die Schichten k\xf6nnen ausgetauscht werden, solange sie ihre Aufgabe erf\xfcllen und die Schnittstelle zwischen der dar\xfcber- und der darunterliegenden Schicht erf\xfcllt wird."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Post kann auch mit dem Flugzeug oder dem Zug transportiert werden. (Daten k\xf6nnen Kabelgebunden oder per Funk \xfcbertragen werden)"),(0,r.kt)("li",{parentName:"ul"},"Statt der Post kann man einen privaten Transportservice engagieren. (Swisscom- oder UPC-Anschluss f\xfcrs Internet zu Hause)"),(0,r.kt)("li",{parentName:"ul"},"Statt des Hauswartes k\xf6nnen Sch\xfcler*innen die Pulte auseinanderschrauben und wieder zusammensetzen.")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"schichten-austauschen"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichten austauschen")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sehen Sie andere Optionen zum Austauschen einer Schicht?"))),(0,r.kt)("h2",{id:"andere-schichtenmondelle"},"Andere Schichtenmondelle"),(0,r.kt)("h3",{id:"informatik"},"Informatik"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Golftheman",source:"https://commons.wikimedia.org/wiki/File:Operating_system_placement-de.svg",licence:"Creative Commons 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(60191).Z,mdxType:"Image"})),(0,r.kt)("h3",{id:"andere-wissenschaften"},"Andere Wissenschaften"),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Golftheman",source:"https://oinf.ch/konzept/schichtenmodell/",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Naturwissenschaften als Schichtenmodell @",options:{},isInline:!1,src:t(94268).Z,alt:"Naturwissenschaften als Schichtenmodell @",mdxType:"Image"})),(0,r.kt)("p",null,"Verschiedene Naturwissenschaften bauen aufeinander auf und bilden so eine Art Schichtenmodell, um die ungeheure Komplexit\xe4t der Natur in den Griff zu bekommen. Somit kann man sich z.B. auf sehr verschiedenen Abstraktionsebenen mit dem Organismus \xabSchwan\xbb auseinandersetzen (K\xf6rperbau? Verhalten? DNA?) und kann die jeweils anderen Ebenen gr\xf6sstenteils ausblenden."),(0,r.kt)("h3",{id:"weitere"},"Weitere..."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"schichtenmodelle-finden"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichtenmodelle finden")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Finden Sie weitere Schichtenmodelle?"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/01.schichtenmodell.html#beispiel-%C2%ABpaketversand%C2%BB"},"mygymer.ch"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},94268:function(e,n,t){n.Z=t.p+"assets/images/0a-Schichtenmodell-Wissenschaft-ed96a0fa69c4c3caaf6cac7dc8737a00.png"},60191:function(e,n,t){n.Z=t.p+"assets/images/0a-os-structure-f2e1ec5100d5e2f8578db65034aac9fc.svg"},57033:function(e,n,t){n.Z=t.p+"assets/images/0a-pulte-af22b48fa4ecbe2a1b45dd0771e2467f.png"},38379:function(e,n,t){n.Z=t.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"},45601:function(e,n,t){n.Z=t.p+"assets/images/2-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"},96863:function(e,n,t){n.Z=t.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"},85560:function(e,n,t){n.Z=t.p+"assets/images/4-school-example-fbef75aead28316ece5916b9ee068869.svg"}}]);