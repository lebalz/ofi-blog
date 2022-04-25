"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[84459],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),l=n(51436),o=n(86010),s=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:l.Xjp}))))},d=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+d(n.size)+")",t.maxHeight=d(n.size),delete n.size),n.height&&(t.maxHeight=d(n.height),t.height=d(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+d(n.width)+")",t.width=d(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(c,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),l=a[0],d=a[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,l=t.top<=i&&t.bottom>=i,a&&l||n(!1)}},r.createElement(c,e),m&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,l?i.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&r.createElement(s,e.bib)))}},48895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),l=n(84384),o=["components"],s={},d="Sieb des Eratosthenes",c={unversionedId:"Programmieren-1/v24/Aufgaben/grid",id:"Programmieren-1/v24/Aufgaben/grid",title:"Sieb des Eratosthenes",description:"09grid.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/09_grid.md",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/grid",permalink:"/Programmieren-1/v24/Aufgaben/grid",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/09_grid.md",tags:[],version:"current",lastUpdatedAt:1628611162,formattedLastUpdatedAt:"8/10/2021",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"Zufallszahl",permalink:"/Programmieren-1/v24/Aufgaben/zufalls_zahl"},next:{title:"Name",permalink:"/Programmieren-1/v24/Aufgaben/name"}},u={},m=[{value:"Aufgaben",id:"aufgaben",level:2}],p={toc:m};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sieb-des-eratosthenes"},"Sieb des Eratosthenes"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(78570).Z},"09_grid.zip")),(0,a.kt)("p",null,"Mit folgendem Programm wird auf ",(0,a.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_grid"},"https://io.gbsl.website/color_grid")," ein Gitternetz mit nummerierten Feldern erzeugt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from smartphone_connector import Connector\n\ndevice = Connector('https://io.gbsl.website', 'FooBar')\ndevice.setup_grid(10, 15, enumerate=True)\n\n# verbindung mit dem Ger\xe4t beenden\ndevice.disconnect()\n")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(76955).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},'device.set_grid_at(cell_number=1, color="red")')," kann die Farbe des ersten Feldes auf rot gesetzt werden. Als Farbe sind alle englischen Farb-Namen erlaubt."),(0,a.kt)("p",null,"Weiter kann mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"device.get_grid_at(cell_number=1)")," die aktuelle Farbe des ersten Feldes abgefragt werden."),(0,a.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Zeichnen Sie ein ",(0,a.kt)("inlineCode",{parentName:"p"},"10x10")," grosses Gitternetz und f\xe4rben Sie folgenden Felder rot ein:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"alle Felder der 2er Reihe, ausser die 2 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 3er Reihe, ausser die 3 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 5er Reihe, ausser die 5 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 7er Reihe, ausser die 7 selbst")),(0,a.kt)("p",{parentName:"li"},"Was f\xe4llt Ihnen auf? Was f\xfcr Zahlen sind auf den noch weissen feldern abgebildet?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Dieser Algorithmus zum Auffinden von Primzahlen wurde schon viele Jahrhunderte vor Christus entdeckt, es war aber Eratosthenes welcher ca. 300 v. Chr. dieses Verfahren "Zahlensieb" nannte, weshalb es bis heute noch "Sieb des Eratosthenes" genannt wird.'),(0,a.kt)("p",{parentName:"li"},"Der eigentliche Algorithmus funktioniert wie folgt:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Starte bei der Zahl 2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ist das Ende des Gitters erreicht, springe zu Punkt 4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ist das Feld rot, fahre mit Schritt 3 weiter."),(0,a.kt)("li",{parentName:"ul"},"Ist das aktuelle Feld noch nicht rot, so ist es eine Primzahl und wird ",(0,a.kt)("em",{parentName:"li"},"nicht")," rot gef\xe4rbt. Alle Vielfachen dieser Zahl bis zum Ende des Gitters werden rot gef\xe4rbt."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehe zum n\xe4chsten Feld und fahre mit Schritt 2 weiter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ende"))),(0,a.kt)("p",{parentName:"li"},"Implementieren Sie diesen Algorithmus und pr\xfcfen Sie ihn mit einem ",(0,a.kt)("inlineCode",{parentName:"p"},"20x20")," Gitter."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Zusatz"),": Eigentlich m\xfcssen nicht ganz alle Felder \xfcberpr\xfcft werden. Optimieren Sie ihr Programm, indem Sie nur soviele Felder \xfcberpr\xfcfen, wie minimal n\xf6tig sind."))))}f.isMDXComponent=!0},78570:function(e,t,n){t.Z=n.p+"assets/files/09_grid-bd77570506806e9323706d31cd9d9e2d.zip"},76955:function(e,t,n){t.Z=n.p+"assets/images/grid-73bfaaa3f2cb98f8f88e10258aab8821.png"}}]);