"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[34826],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,p=m["".concat(o,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},685162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(667294),i=n(386010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(r,l),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(487462),i=n(667294),r=n(386010),l=n(972389),s=n(867392),o=n(707094),c=n(212466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,h=e.defaultValue,p=e.values,f=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),y=N.tabGroupChoices,S=N.setTabGroupChoices,x=(0,i.useState)(w),z=x[0],T=x[1],P=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=y[f];null!=C&&C!==z&&g.some((function(e){return e.value===C}))&&T(C)}var D=function(e){var t=e.currentTarget,n=P.indexOf(t),a=g[n].value;a!==z&&(O(t),T(a),null!=f&&S(f,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=P.indexOf(e.currentTarget)+1;n=null!=(a=P[i])?a:P[0];break;case"ArrowLeft":var r,l=P.indexOf(e.currentTarget)-1;n=null!=(r=P[l])?r:P[P.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":m},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,r.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(k.filter((function(e){return e.props.value===z}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==z})}))))}function h(e){var t=(0,l.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},287913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var a=n(487462),i=n(263366),r=(n(667294),n(603905)),l=n(665488),s=n(685162),o=["components"],c={sidebar_label:"Schichtenmodell",sidebar_position:1},u="Schichtenmodell [^1]",d={unversionedId:"Netzwerke/Schichtenmodell/0a-Schichtenmodell",id:"version-24o/Netzwerke/Schichtenmodell/0a-Schichtenmodell",title:"Schichtenmodell [^1]",description:"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden.",source:"@site/versioned_docs/version-24o/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/0a-Schichtenmodell",permalink:"/24o/Netzwerke/Schichtenmodell/0a-Schichtenmodell",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",tags:[],version:"24o",sidebarPosition:1,frontMatter:{sidebar_label:"Schichtenmodell",sidebar_position:1},sidebar:"version-24o/sidebar",previous:{title:"Schichtenmodell",permalink:"/24o/category/schichtenmodell"},next:{title:"TCP/IP-Schichtenmodell",permalink:"/24o/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell"}},m={},h=[{value:"Vorteile des Schichtenmodells",id:"vorteile-des-schichtenmodells",level:2},{value:"Aufbau auf bestehendem",id:"aufbau-auf-bestehendem",level:3},{value:"Austauschbare Schichten",id:"austauschbare-schichten",level:3},{value:"Andere Schichtenmondelle",id:"andere-schichtenmondelle",level:2},{value:"Informatik",id:"informatik",level:3},{value:"Andere Wissenschaften",id:"andere-wissenschaften",level:3},{value:"Weitere...",id:"weitere",level:3}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},f=p("Figure"),v=p("SourceRef"),k={toc:h};function g(e){var t=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schichtenmodell-"},"Schichtenmodell ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden."),(0,r.kt)("p",null,"Wir wollen die Vorteile des Schichtenmodell an Hand eines Beispiels versuchen zu verstehen:"),(0,r.kt)("h1",{id:"beispiel-schule"},'Beispiel "Schule"'),(0,r.kt)("p",null,"Die Schule Madretsch feiert 100-j\xe4hriges Jubil\xe4um und braucht f\xfcr ihr Fest zus\xe4tzliche Schulpulte. Wir m\xf6chten helfen und einige Pulte schicken."),(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Pulte zum Verschicken",src:n(856801).Z,width:"409",height:"209"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Pulte zum Verschicken",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wie funktioniert dies?"),(0,r.kt)("li",{parentName:"ul"},"Wer ist alles involviert?")),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{defaultValue:"step-1",values:[{label:"Details 1",value:"step-1"},{label:"Details 2",value:"step-2"},{label:"Details 3",value:"step-3"},{label:"Details 4",value:"step-4"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"step-1",mdxType:"TabItem"},(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(2555).Z,width:"924",height:"128"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/1-application/layer-4.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Den Sch\xfcler:innen ist egal, wie die Pulte in die Schule kommen. Sie freuen sich einfach \xfcber die zus\xe4tzlichen Schulpulte.")),(0,r.kt)(s.Z,{value:"step-2",mdxType:"TabItem"},(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(747674).Z,width:"970",height:"332"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/2-transport/layer-3.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Da die Pulte zu sperrig sind, werden diese vom GBSL-Hausdienst zerlegt und in einzelne Pakete verpackt.\nWenn die Pakete ankommen, kann der Madretsch-Hausdienst die Pakete auspacken und die Pulte wieder zusammensetzen.  ")),(0,r.kt)(s.Z,{value:"step-3",mdxType:"TabItem"},(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(604193).Z,width:"994",height:"480"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/3-network/layer-2.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Der Hausdienst tr\xe4gt diese Pakete aber nicht selber zur Schule Madretsch.\nNein, die Pakete werden an die Post \xfcbergeben.\nDiese ist f\xfcr den Transport zust\xe4ndig.\nDie Pakete machen auch einen Zwischenstopp im Verteilzentrum H\xe4rkingen.")),(0,r.kt)(s.Z,{value:"step-4",mdxType:"TabItem"},(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(628904).Z,width:"1056",height:"720"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/4-physical/layer-1.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Die Post verwendet nun f\xfcr den eigentlichen Transport verschiedene Fahrzeuge.\nIm Verteilzentrum wird der Inhalt entladen und gem\xe4ss Adresse weitergeleitet.")))),(0,r.kt)("h2",{id:"vorteile-des-schichtenmodells"},"Vorteile des Schichtenmodells"),(0,r.kt)("h3",{id:"aufbau-auf-bestehendem"},"Aufbau auf bestehendem"),(0,r.kt)("p",null,"Ohne Probleme liesse sich das obenstehende Beispiel verwenden, um andere Inhalte zu transportieren. So k\xf6nnten statt Pulten auch St\xfchle \u2013 oder z.B. auch Esswaren transportiert werden."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So funktioniert auch unser Postsystem: Bis auf wenige Ausnahmen transportiert die Post alles."),(0,r.kt)("li",{parentName:"ul"},"Die \xdcbertragung von E-Mails und die einer Webseite unterscheidet sich nur in der obersten Schicht. Beide bauen auf den 3 identischen unteren Schichten auf")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufbau-auf-bestehendem"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufbau auf bestehendem")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Was k\xf6nnte noch \xdcbertragen werden, wobei die unteren Schichten verwendet werden?"))),(0,r.kt)("h3",{id:"austauschbare-schichten"},"Austauschbare Schichten"),(0,r.kt)("p",null,"Die Schichten k\xf6nnen ausgetauscht werden, solange sie ihre Aufgabe erf\xfcllen und die Schnittstelle zwischen der dar\xfcber- und der darunterliegenden Schicht erf\xfcllt wird."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Post kann auch mit dem Flugzeug oder dem Zug transportiert werden. (Daten k\xf6nnen Kabelgebunden oder per Funk \xfcbertragen werden)"),(0,r.kt)("li",{parentName:"ul"},"Statt der Post kann man einen privaten Transportservice engagieren. (Swisscom- oder UPC-Anschluss f\xfcrs Internet zu Hause)"),(0,r.kt)("li",{parentName:"ul"},"Statt des Hauswartes k\xf6nnen Sch\xfcler*innen die Pulte auseinanderschrauben und wieder zusammensetzen.")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"schichten-austauschen"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichten austauschen")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sehen Sie andere Optionen zum Austauschen einer Schicht?"))),(0,r.kt)("h2",{id:"andere-schichtenmondelle"},"Andere Schichtenmondelle"),(0,r.kt)("h3",{id:"informatik"},"Informatik"),(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(679102).Z,width:"250",height:"370"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Golftheman",source:"https://commons.wikimedia.org/wiki/File:Operating_system_placement-de.svg",licence:"Creative Commons 3.0",licence_url:"https://creativecommons.org/licenses/by-sa/3.0/",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)("h3",{id:"andere-wissenschaften"},"Andere Wissenschaften"),(0,r.kt)(f,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Naturwissenschaften als Schichtenmodell @",src:n(979377).Z,width:"3000",height:"2000"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Naturwissenschaften als Schichtenmodell @",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(v,{parentName:"figcaption",bib:{author:"Golftheman",source:"https://oinf.ch/konzept/schichtenmodell/",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Verschiedene Naturwissenschaften bauen aufeinander auf und bilden so eine Art Schichtenmodell, um die ungeheure Komplexit\xe4t der Natur in den Griff zu bekommen. Somit kann man sich z.B. auf sehr verschiedenen Abstraktionsebenen mit dem Organismus \xabSchwan\xbb auseinandersetzen (K\xf6rperbau? Verhalten? DNA?) und kann die jeweils anderen Ebenen gr\xf6sstenteils ausblenden."),(0,r.kt)("h3",{id:"weitere"},"Weitere..."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"schichtenmodelle-finden"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichtenmodelle finden")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Finden Sie weitere Schichtenmodelle?"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/01.schichtenmodell.html#beispiel-%C2%ABpaketversand%C2%BB"},"mygymer.ch"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},979377:function(e,t,n){t.Z=n.p+"assets/images/0a-Schichtenmodell-Wissenschaft-ed96a0fa69c4c3caaf6cac7dc8737a00.png"},679102:function(e,t,n){t.Z=n.p+"assets/images/0a-os-structure-f2e1ec5100d5e2f8578db65034aac9fc.svg"},856801:function(e,t,n){t.Z=n.p+"assets/images/0a-pulte-af22b48fa4ecbe2a1b45dd0771e2467f.png"},628904:function(e,t,n){t.Z=n.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"},604193:function(e,t,n){t.Z=n.p+"assets/images/2-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"},747674:function(e,t,n){t.Z=n.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"},2555:function(e,t,n){t.Z=n.p+"assets/images/4-school-example-fbef75aead28316ece5916b9ee068869.svg"}}]);