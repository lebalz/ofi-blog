"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12510],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,p=m["".concat(o,".").concat(g)]||m[g]||d[g]||i;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52084:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return P}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),c=n(71217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),g=n(72389),p=n(21314),b=n(74322),f=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n,r,c=(0,g.Z)(),o=a.useState("unchecked"),f=o[0],v=o[1],h=(0,p.oR)("documentStore").find(e.webKey),I=function(t){!e.isLegacy&&h.loaded&&(v("unchecked"),h.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&N(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&N(h.value)}),[h,c]),c?h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return I(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=h.legacyData)?void 0:t.value:h.value,className:y(h.value),disabled:!h.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return I(e.target.value)},value:e.isLegacy?null==(n=h.legacyData)?void 0:n.value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(h.value)},className:(0,l.default)(i[f],i.checkButton)},a.createElement(u.G,{icon:(r=f,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(b.Z,null):a.createElement("div",null,"SSR")})),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),I=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},N=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:I(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(b.Z,null)})),k=n(83117),w=n(75552),E=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,k.Z)({model:t},e))):a.createElement(b.Z,null)})),C=n(47271),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},Z=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(46858),A=n(78982),M=n(97762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,A.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,A.cl)(e.id,t)}}}:function(){}},P=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||M.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,j(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(Z,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(b.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),c=n(21314),o=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),c=n(86010),o=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],s=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,c.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(u,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,c.default)(r.bib,l?r.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&a.createElement(o,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",c=n(71217),o=n(92814),s=n(51436),u=(0,c.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",o=n(86010),s=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],p=t[1],b=a.useState(!1),f=b[0],y=b[1],v=a.useRef(null),h=e.model,I=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(y(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",I))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",I)}}),[e]);return d&&f&&h.loaded?a.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,o.default)(r)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,o.default)(i,e.monospace&&l,s?void 0:c),value:h.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&h.canUpdate&&f&&h.setText(i)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},92633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),c=n(52084),o=["components"],s={},u="2. EVAS-Prinzip",d={unversionedId:"Computer/basics/EVAS",id:"Computer/basics/EVAS",title:"2. EVAS-Prinzip",description:"Das EVAS-Prinzip beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe Eingabe, Verarbeitung, Ausgabe und Speicherung ab.",source:"@site/docs/Computer/01-basics/02-EVAS.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/EVAS",permalink:"/Computer/basics/EVAS",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/02-EVAS.md",tags:[],version:"current",lastUpdatedAt:1641654572,formattedLastUpdatedAt:"1/8/2022",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"1. Computerkategorien",permalink:"/Computer/basics/kategorien"},next:{title:"3. Prozessor",permalink:"/Computer/basics/cpu"}},m={},g=[{value:"Ein- und Ausgabeger\xe4te",id:"ein--und-ausgabeger\xe4te",level:2}],p={toc:g};function b(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-evas-prinzip"},"2. EVAS-Prinzip"),(0,i.kt)("p",null,"Das ",(0,i.kt)("strong",{parentName:"p"},"EVAS-Prinzip")," beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe ",(0,i.kt)("strong",{parentName:"p"},"Eingabe"),", ",(0,i.kt)("strong",{parentName:"p"},"Verarbeitung"),", ",(0,i.kt)("strong",{parentName:"p"},"Ausgabe")," und ",(0,i.kt)("strong",{parentName:"p"},"Speicherung")," ab."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(72939).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Daten m\xfcssen zuerst in den Computer gelangen. Dazu ist ein ",(0,i.kt)("strong",{parentName:"p"},"Eingabeger\xe4t")," notwendig, welches Informationen aus der Umwelt in digitale Daten umwandelt. Diese Informationen k\xf6nnen Bewegungen oder Aktionen der Benutzer:innen, Messwerte oder digitale Nachrichten eines anderen Computers sein."),(0,i.kt)("p",null,"Im Ger\xe4t werden die Daten ",(0,i.kt)("strong",{parentName:"p"},"gespeichert")," und ",(0,i.kt)("strong",{parentName:"p"},"verarbeitet"),"."),(0,i.kt)("p",null,"Ein ",(0,i.kt)("strong",{parentName:"p"},"Ausgabeger\xe4t")," wandelt Daten wieder in Informationen f\xfcr die Umwelt um. Diese k\xf6nnen beispielsweise visuell oder akustisch sein, um die Sinne der Benutzer:innen anzusprechen. Es kann sich aber auch um digitale Nachrichten handeln, die an andere Computer weitergeleitet werden."),(0,i.kt)("h2",{id:"ein--und-ausgabeger\xe4te"},"Ein- und Ausgabeger\xe4te"),(0,i.kt)("p",null,"Typische Ein- und Ausgabeger\xe4te f\xfcr Computer sind:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Tanya Ferrera",author_uri:"https://pixabay.com/de/users/sthenostudio-875253/",licence:"CC0",licence_url:"https://pixabay.com/images/id-1409743/"},caption:"Tastatur",options:{},isInline:!1,src:n(74383).Z,alt:"Tastatur",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-160032/"},caption:"Maus",options:{},isInline:!1,src:n(95272).Z,alt:"Maus",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"KMJ",author_uri:"https://de.wikipedia.org/wiki/User:KMJ",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Webcam_Apple_iSight.jpg"},caption:"Webcam",options:{},isInline:!1,src:n(87675).Z,alt:"Webcam",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-159612/"},caption:"Drucker",options:{},isInline:!1,src:n(53046).Z,alt:"Drucker",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Clker-Free-Vector-Images",author_uri:"https://pixabay.com/de/users/clker-free-vector-images-3736/",licence:"CC0",licence_url:"https://pixabay.com/images/id-32872/"},caption:"Bildschirm",options:{},isInline:!1,src:n(11184).Z,alt:"Bildschirm",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Bruno",author_uri:"https://pixabay.com/de/users/bru-no-1161770/",licence:"CC0",licence_url:"https://pixabay.com/images/id-971968/"},caption:"Lautsprecher",options:{},isInline:!1,src:n(31436).Z,alt:"Lautsprecher",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten f\xfcr die Ein- und Ausgabe von Daten hat Ihr Smartphone? Versuchen Sie, m\xf6glichst alle aufzuschreiben. Bilden Sie dabei folgende Kategorien:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"nur Eingabeger\xe4t"),(0,i.kt)("li",{parentName:"ul"},"Ein- und Ausgabeger\xe4t"),(0,i.kt)("li",{parentName:"ul"},"nur Ausgabeger\xe4t")),(0,i.kt)("p",{parentName:"div"},"Hilfreiche App: ",(0,i.kt)("a",{parentName:"p",href:"https://phyphox.org/"},"PhyPhox")),(0,i.kt)(c.Z,{type:"text",webKey:"ddb7899f-aa03-4095-aa29-b5f053d46b14",mdxType:"Answer"}))))}b.isMDXComponent=!0},72939:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjE5MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iNDY0IiB5PSIxOC44MzUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTA0LjgxMXB4IiB5PSI0Ny44MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BdXNnYWJlPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IlNwZWljaGVydW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjEyOCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIyNjQuMDQzcHgiIHk9IjE1Ny4xNDJweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ1bmc8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iVmVyYXJiZWl0dW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjE2IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjI2My4xNjRweCIgeT0iNDQuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlZlcmFyYmVpdHVuZzwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJFaW5nYWJlIj4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTguODgxcHgiIHk9IjQ0Ljk4NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5FaW5nYWJlPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTIyOCwzNEwyNDAsNDBMMjI4LDQ2QzIzMSw0MyAyMzEsMzcgMjI4LDM0WiIvPgogICAgPHBhdGggZD0iTTE3Niw0MEwyMzAuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ1MiwzNEw0NjQsNDBMNDUyLDQ2QzQ1NSw0MyA0NTUsMzcgNDUyLDM0WiIvPgogICAgPHBhdGggZD0iTTQwMCw0MEw0NTQuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTMyNiw3NkwzMjAsNjRMMzE0LDc2QzMxNyw3MyAzMjMsNzMgMzI2LDc2WiIvPgogICAgPHBhdGggZD0iTTMyNiwxMTZMMzIwLDEyOEwzMTQsMTE2QzMxNywxMTkgMzIzLDExOSAzMjYsMTE2WiIvPgogICAgPHBhdGggZD0iTTMyMCw3My42TDMyMCwxMTguNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgo8L3N2Zz4K"},74383:function(e,t,n){t.Z=n.p+"assets/images/02-keyboard-1d67851dad91a191004eb43f3f797542.png"},11184:function(e,t,n){t.Z=n.p+"assets/images/02-monitor-f40d6a2e974480de4c1374898be628d4.png"},95272:function(e,t,n){t.Z=n.p+"assets/images/02-mouse-d8db9c200fb155ae86b149c64aabe146.png"},53046:function(e,t,n){t.Z=n.p+"assets/images/02-printer-4aaaa2cf18b042f1174eaf2d0e94b3fa.png"},31436:function(e,t,n){t.Z=n.p+"assets/images/02-speakers-7fc0a79dfb6949a9b9903585c9d660a3.png"},87675:function(e,t,n){t.Z=n.p+"assets/images/02-webcam-8773575869b6c62d5e51fcb0db7e2b27.png"}}]);