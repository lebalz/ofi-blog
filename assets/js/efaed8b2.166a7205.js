"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[28214],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,b=m["".concat(c,".").concat(g)]||m[g]||d[g]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return A}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),m=n(68949),g=n(72389),b=n(21314),p=n(74322),h=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),f=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,g.Z)(),a=r.useState("unchecked"),o=a[0],c=a[1],h=(0,b.oR)("documentStore").find(e.webKey),v=function(e){h.loaded&&(c("unchecked"),h.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&y(h.value)}))}),[h]),r.useEffect((function(){h.loaded&&y(h.value)}),[h,n]),n?h.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:h.value,className:f(h.value),disabled:!h.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(h.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(s.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(p.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),I=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:I(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(p.Z,null)})),w=n(83117),E=n(75552),N=(0,o.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,w.Z)({model:t},e))):r.createElement(p.Z,null)})),C=n(47271),Z=(0,o.Pi)((function(e){return(0,b.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),x=n(97762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,o.Pi)((function(e){var t=(0,b.oR)("documentStore"),n=(0,b.oR)("msalStore"),a=t.find(e.webKey),i=(0,g.Z)();return(0,b.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),n.loggedIn&&r.createElement(Z,{webKey:e.webKey}),"text"===e.type&&r.createElement(N,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement(p.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(s,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],u=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(s,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&r.createElement(c,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),u=n(51436),s=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),u=n(71217),s=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},b=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],b=t[1],p=r.useState(!1),h=p[0],f=p[1],v=r.useRef(null),y=e.model,I=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(f(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",I))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",I)}}),[e]);return d&&h&&y.loaded?r.createElement("div",{onFocus:function(){return!u&&b(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&h&&y.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},19827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(82593),c=["components"],u={title:"9. Ebenen"},s="9. Ebenen",d={unversionedId:"Computer/basics/Ebenen",id:"Computer/basics/Ebenen",title:"9. Ebenen",description:"Wie die Netzwerke kann auch der Computer selber auf verschiedenen Ebenen betrachtet werden.",source:"@site/docs/Computer/01-basics/09-Ebenen.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Ebenen",permalink:"/Computer/basics/Ebenen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/09-Ebenen.md",tags:[],version:"current",lastUpdatedAt:1642365528,formattedLastUpdatedAt:"1/16/2022",sidebarPosition:9,frontMatter:{title:"9. Ebenen"},sidebar:"sidebar",previous:{title:"8. Stromversorgung",permalink:"/Computer/basics/Stromversorgung"},next:{title:"2. Logische Gatter",permalink:"/Computer/gates/"}},m={},g=[{value:"Elektronik",id:"elektronik",level:2},{value:"Digitale Logik",id:"digitale-logik",level:2},{value:"Rechnerarchitektur",id:"rechnerarchitektur",level:2},{value:"Betriebssystem",id:"betriebssystem",level:2},{value:"Anwendungen",id:"anwendungen",level:2}],b={toc:g};function p(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"9-ebenen"},"9. Ebenen"),(0,i.kt)("p",null,"Wie die Netzwerke kann auch der Computer selber auf verschiedenen ",(0,i.kt)("strong",{parentName:"p"},"Ebenen")," betrachtet werden."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Thomas Jampen",source:"https://gitlab.gymkirchenfeld.ch/teach/computer/-/blob/main/1-basics/9-layers/layers.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Hardware-Ebenen",options:{},isInline:!1,src:n(60666).Z,alt:"Hardware-Ebenen",mdxType:"Image"})),(0,i.kt)("h2",{id:"elektronik"},"Elektronik"),(0,i.kt)("p",null,"Auf der Ebene der ",(0,i.kt)("strong",{parentName:"p"},"Elektronik")," werden die Zust\xe4nde 0 und 1 durch unterschiedliche Spannungen dargestellt. Das grundlegende Bauelement f\xfcr digitale Schaltungen ist der ",(0,i.kt)("strong",{parentName:"p"},"Transistor"),"."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5wIRJN3DN_8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"transistoren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Transistoren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sehen Sie sich das obige Video an. Und beschreiben Sie in eigenen Worten:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"welche Analogie aus dem Alltag passt zum Transistor?"),(0,i.kt)("li",{parentName:"ul"},"wozu wird ein Transistor bei Computern eingesetzt?")),(0,i.kt)(o.Z,{type:"text",webKey:"77218889-54e7-4ff2-ac32-10a2de6cb927",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"digitale-logik"},"Digitale Logik"),(0,i.kt)("p",null,"In der ",(0,i.kt)("strong",{parentName:"p"},"digitalen Logik")," werden aus den Grundelementen (",(0,i.kt)("strong",{parentName:"p"},"logische Gatter"),") komplexe Schaltungen aufgebaut, welche z.B. Zahlen addieren oder Werte speichern k\xf6nnen."),(0,i.kt)("h2",{id:"rechnerarchitektur"},"Rechnerarchitektur"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Rechnerarchitektur")," legt fest, wie verschiedene Bauelemente (wie z.B. Rechenwerk und Speicher) miteinander verkn\xfcpft werden und in welcher zeitlichen Abfolge Daten untereinander ausgetauscht werden. Daraus ergeben sich die grundlegenden Befehle (",(0,i.kt)("strong",{parentName:"p"},"Maschinencode"),"), welche der Computer versteht."),(0,i.kt)("h2",{id:"betriebssystem"},"Betriebssystem"),(0,i.kt)("p",null,"Das ",(0,i.kt)("strong",{parentName:"p"},"Betriebssystem")," kontrolliert und koordiniert den Zugriff auf die Hardware f\xfcr die verschiedenen Anwendungen, welche auf dem Computer ausgef\xfchrt werden. Es stellt grundlegende Funktionen wie die Dateiverwaltung und Netzwerkkommunikation zu Verf\xfcgung. Das Betriebssystem enth\xe4lt viel Programmcode, der speziell f\xfcr die eingesetzte Rechnerarchitektur und -hardware geschrieben ist."),(0,i.kt)("h2",{id:"anwendungen"},"Anwendungen"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Anwendungen")," unterst\xfctzen den/die Benutzer/in in der t\xe4glichen Arbeit. Sie werden in ",(0,i.kt)("strong",{parentName:"p"},"h\xf6heren Programmiersprachen")," geschrieben, d.h. sie brauchen sich dank des Betriebssystems nicht um die eingesetzte Hardware zu k\xfcmmern. Solche Programme k\xf6nnen vom Prozessor nicht direkt ausgef\xfchrt, sondern m\xfcssen zuerst noch von einem Compiler in Maschinencode \xfcbersetzt werden. Dies erleichtert uns Menschen die Arbeit beim Programmieren, da der Programmcode nicht an bestimmte Hardware und Architektur gebunden und damit allgemeing\xfcltiger und einfacher ist."))}p.isMDXComponent=!0},60666:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjUyOHB4IiBoZWlnaHQ9IjI3MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMjA4IiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjI0LDIyNCwyMjQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEzMi4zOThweCIgeT0iMjM3LjE3NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+RWxla3Ryb25payAoU3Bhbm51bmcsIFN0cm9tKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNjAiIHdpZHRoPSI0OTYiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTc3LjQ0N3B4IiB5PSIxODkuMTc2cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5EaWdpdGFsZSBMb2dpayAoQml0cyk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTEyIiB3aWR0aD0iNDk2IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMjM5LDE1NCwxNTQpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9Ijk5LjYxcHgiIHk9IjE0MS4xNzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPlJlY2huZXJhcmNoaXRla3R1ciAoTWFzY2hpbmVuY29kZSk8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTIiIHdpZHRoPSI0OTYiIGhlaWdodD0iMTAwIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjEyMi42MzNweCIgeT0iNDUuNTYxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij5BbndlbmR1bmdlbiAoUHJvZ3JhbW1jb2RlKTwvdGV4dD4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjE5MiIgeT0iNjQiIHdpZHRoPSIzMjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjI0LDEzMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjgzLjU1OHB4IiB5PSI5My4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkJldHJpZWJzc3lzdGVtPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K"}}]);