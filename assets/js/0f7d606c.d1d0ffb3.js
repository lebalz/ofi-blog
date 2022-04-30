"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[73836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return O}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),s=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);a=i[l],n=""+t.replace(s,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),f=n(21314),g=n(74322),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),a=r.useState("unchecked"),o=a[0],s=a[1],b=(0,f.oR)("documentStore").find(e.webKey),h=function(e){b.loaded&&(s("unchecked"),b.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&k(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&k(b.value)}),[b,n]),n?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:b.value,className:v(b.value),disabled:!b.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(b.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(u.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),k=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:y(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(g.Z,null)})),w=n(83117),E=n(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,w.Z)({model:t},e))):r.createElement(g.Z,null)})),_=n(47271),S=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(97762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(_.Z,null),n.loggedIn&&r.createElement(S,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(N,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),s=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],c=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&r.createElement(s,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),s=n(92814),c=n(51436),u=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(s.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(86010),c=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],f=t[1],g=r.useState(!1),b=g[0],v=g[1],h=r.useRef(null),k=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&b&&k.loaded?r.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,s.default)(a)},r.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,c?void 0:o),value:k.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&b&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},12628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(82593),s=["components"],c={title:"8. Stromversorgung"},u="8. Stromversorgung",d={unversionedId:"Computer/basics/Stromversorgung",id:"Computer/basics/Stromversorgung",title:"8. Stromversorgung",description:"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil.",source:"@site/docs/Computer/01-basics/08-Stromversorgung.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Stromversorgung",permalink:"/Computer/basics/Stromversorgung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/08-Stromversorgung.md",tags:[],version:"current",lastUpdatedAt:1641728387,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:8,frontMatter:{title:"8. Stromversorgung"},sidebar:"sidebar",previous:{title:"7. Hauptplatine",permalink:"/Computer/basics/Mainboard"},next:{title:"9. Ebenen",permalink:"/Computer/basics/Ebenen"}},m={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Leistung und W\xe4rme",id:"leistung-und-w\xe4rme",level:2}],f={toc:p};function g(e){var t=e.components,c=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-stromversorgung"},"8. Stromversorgung"),(0,i.kt)("p",null,"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil."),(0,i.kt)("p",null,"Das Netzteil eines Desktop-Computers ist stets eingebaut. Bei einem Notebook hingegen \xfcbernimmt ein externes Netzteil die Stromtransformation, da im Innern des Notebooks nicht gen\xfcgend Platz daf\xfcr vorhanden ist."),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr das Netzteil gibt es die folgende wichtige Kenngr\xf6sse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Leistung")," gibt an, wie viel Energie das Netzteil in einer bestimmten Zeit den Komponenten maximal zur Verf\xfcgung stellen kann. Die Leistung wird gemessen in ",(0,i.kt)("strong",{parentName:"li"},"Watt"),".")),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Smial",author_uri:"https://de.wikipedia.org/wiki/User:Smial",licence:"CC-BY-SA-2.0",licence_url:"https://commons.wikimedia.org/wiki/File:ATX-Netzteil.jpg"},caption:"ATX-Netzteil",options:{},isInline:!1,src:n(83551).Z,alt:"ATX-Netzteil",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/en/photo/1136740"},caption:"Notebook-Netzteil",options:{},isInline:!1,src:n(35185).Z,alt:"Notebook-Netzteil",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"leistung-und-w\xe4rme"},"Leistung und W\xe4rme"),(0,i.kt)("p",null,"Die meiste Leistung verpufft als Abw\xe4rme, darum brauchen Desktop-PCs (und leistungsf\xe4hige Grafikkarten) eine aktive Prozessork\xfchlung, d.h. einen K\xfchlk\xf6rper mit grosser Oberfl\xe4che und dar\xfcber einen starken L\xfcfter, um die W\xe4rme vom Prozessor wegzubringen."),(0,i.kt)("p",null,"Notebooks verwenden stromsparendere Prozessoren, daher reicht dort ein kleinerer L\xfcfter aus, oder sie haben gar nur eine passive K\xfchlung ohne aktiven L\xfcfter."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Qurren",author_uri:"https://commons.wikimedia.org/wiki/User:Qurren",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:AMD_Athlon_II_X4_630_heatsink-fan.jpg"},caption:"K\xfchlk\xf6rper und Ventilator",options:{},isInline:!1,src:n(86024).Z,alt:"K\xfchlk\xf6rper und Ventilator",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Acer_TravelMate_P253-M-32344G50Maks_-_motherboard_Q5WV1_LA-7912P_-0219.jpg"},caption:"Notebook-Mainboard mit Prozessork\xfchler",options:{},isInline:!1,src:n(39188).Z,alt:"Notebook-Mainboard mit Prozessork\xfchler",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"stromversorgung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Stromversorgung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Recherchieren Sie im Internet und finden Sie heraus, wie viel Leistung (Watt) folgende Ger\xe4te typischerweise im Betrieb beziehen:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Staubsauger"),(0,i.kt)("li",{parentName:"ul"},"Desktop-PC-Netzteil"),(0,i.kt)("li",{parentName:"ul"},"Notebook-Netzteil"),(0,i.kt)("li",{parentName:"ul"},"Smartphone-Ladeger\xe4t"),(0,i.kt)("li",{parentName:"ul"},"LED-Lampe")))),(0,i.kt)(o.Z,{type:"text",webKey:"3a105b6b-5da9-455a-a654-ef1d86be9d0d",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"Wie beurteilen Sie folgende Aussagen? Ist das erw\xe4hnte Ger\xe4t neu oder alt?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ein Notebook verbraucht zum Bearbeiten eines Textdokuments oder Surfen im Internet ca. 7W."),(0,i.kt)("li",{parentName:"ul"},"Ein Desktopcomputer braucht ein 1500W-Netzteil."),(0,i.kt)("li",{parentName:"ul"},"Eine Stereoanlage verbraucht im Standbyzustand knapp 15W."),(0,i.kt)("li",{parentName:"ul"},"Ein Beamer hat einen Standbystromverbrauch von ca. 0.5W.")))),(0,i.kt)(o.Z,{type:"text",webKey:"99af8549-e30f-4fbf-b52a-084c320e5c53",mdxType:"Answer"}))))}g.isMDXComponent=!0},83551:function(e,t,n){t.Z=n.p+"assets/images/08-atx-39957fdb29b464ceafc88c0f7b75a0d0.jpg"},86024:function(e,t,n){t.Z=n.p+"assets/images/08-heatsink-fan-8d9a30bf8d816020a88b9956fef5fc70.jpg"},39188:function(e,t,n){t.Z=n.p+"assets/images/08-notebook-cooling-458f71ca55bc193cdd4f154fdd45b063.jpg"},35185:function(e,t,n){t.Z=n.p+"assets/images/08-power-supply-a130edca0a9da97bee5848c9b6d46e4f.jpg"}}]);