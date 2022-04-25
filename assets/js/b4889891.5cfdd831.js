"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[95916],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52084:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return I}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),s=n(71217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),u=n(51436),p=n(68949),m=n(72389),f=n(21314),g=n(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},k=(0,s.Pi)((function(e){var t,n,r,s=(0,m.Z)(),o=a.useState("unchecked"),h=o[0],k=o[1],v=(0,f.oR)("documentStore").find(e.webKey),N=function(t){!e.isLegacy&&v.loaded&&(k("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return k(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};k(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,p.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&y(v.value)}),[v,s]),s?v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return N(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:b(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return N(e.target.value)},value:e.isLegacy?null==(n=v.legacyData)?void 0:n.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(i[h],i.checkButton)},a.createElement(d.G,{icon:(r=h,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:N(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),w=n(83117),E=n(75552),x=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),S=n(47271),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(k,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(46858),D=n(78982),P=n(97762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=function(e){if(!e.id)return function(){};var t=function(){try{return(0,Z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},I=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,O(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(_,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),s=n(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),s=n(86010),o=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],c=i[1],u=e.caption&&"undefined"!==e.caption,p=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),p&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(r.bib,l?r.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&a.createElement(o,e.bib)))}},61387:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(86010),r=n(97566),i=n(67294),l=n(3435),s=function(e){var t=e.match((0,l.Z)(/^(1{1,4}0)/,{control:1}));return t?t.groups.control.length-1:0},o=function(e){var t=e.replace(/[^01]/g,"");t.length%8!=0&&(t=t.padStart(8*Math.floor(t.length/8)+8,"0"));var n=function(e,t){if(t<=0)throw"Invalid chunk size";for(var n=[],a=0,r=e.length;a<r;a+=t)n.push(e.slice(a,a+t));return n}(t.split(""),8).map((function(e){return e.join("")})),a=[],r=[],i=0;return n.forEach((function(e){0===i?i=s(e):i>0&&(e.startsWith("10")||(console.warn("invalid sequence, expected to start with 10",e),i=s(e))),console.log(e,i);var t=e.replace(/^1{1,4}0/,"");r.push(t),(i-=1)<=0&&(a.push(r.join("")),r.splice(0))})),console.log("--\x3e",a),a.map((function(e){return function(e,t){e=e.trim().replace(/^0+/,""),t&&e.length>t&&(e=e.slice(e.length-t));try{var n=parseInt(e,2);return String.fromCodePoint(n)}catch(a){return}}(e)})).join("")},c=function(e){var t=i.useState(""),n=t[0],l=t[1],s=i.useState(""),c=s[0],d=s[1];return i.useEffect((function(){var e=n.split("\n").map((function(e){return o(e)})).join("\n");console.log(e),d(e)}),[n]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin\xe4r Decodierer"),i.createElement("div",{className:(0,a.default)()},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,a.default)(r.Z.input),rows:n.split("\n").length,value:n,onChange:function(e){return l(e.target.value)}})),i.createElement("div",{className:(0,a.default)()},i.createElement("textarea",{placeholder:"Text",className:(0,a.default)(r.Z.input),rows:c.split("\n").length,value:c,disabled:!0}))))}},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",s=n(71217),o=n(92814),c=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(86010),c=n(71217),d=n(74322),u=void 0,p=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],g=a.useState(!1),h=g[0],b=g[1],k=a.useRef(null),v=e.model,N=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return u&&h&&v.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(r)},a.createElement(u,{ref:k,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&h&&v.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(p,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},12745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),s=n(52084),o=n(61387),c=["components"],d={title:"3. Fehlerkorrektur"},u="3. Fehlerkorrektur",p={unversionedId:"Codes-and-Data/Anwendungen/fehlerkorrektur",id:"Codes-and-Data/Anwendungen/fehlerkorrektur",title:"3. Fehlerkorrektur",description:"--width=250",source:"@site/docs/Codes-and-Data/04-Anwendungen/03-fehlerkorrektur.md",sourceDirName:"Codes-and-Data/04-Anwendungen",slug:"/Codes-and-Data/Anwendungen/fehlerkorrektur",permalink:"/Codes-and-Data/Anwendungen/fehlerkorrektur",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/04-Anwendungen/03-fehlerkorrektur.md",tags:[],version:"current",lastUpdatedAt:1647610333,formattedLastUpdatedAt:"3/18/2022",sidebarPosition:3,frontMatter:{title:"3. Fehlerkorrektur"},sidebar:"sidebar",previous:{title:"2. QR Code",permalink:"/Codes-and-Data/Anwendungen/qr-code"},next:{title:"3D Schl\xfcsselanh\xe4nger",permalink:"/Codes-and-Data/QR-Codes/qr"}},m={},f=[{value:"Parit\xe4tspr\xfcfung (Parit\xe4tsbit)",id:"parit\xe4tspr\xfcfung-parit\xe4tsbit",level:2},{value:"Beispiel",id:"beispiel",level:3},{value:"EAN-13",id:"ean-13",level:2}],g={toc:f};function h(e){var t=e.components,d=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-fehlerkorrektur"},"3. Fehlerkorrektur"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Berchtold",source:"https://lehrerfortbildung-bw.de/u_matnatech/imp/gym/bp2016/fb1/1_i1_duc/2_kopiervorlagen/2_xo/",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/3.0/de/",edited:!1},caption:"",options:{width:"250"},isInline:!1,src:n(83773).Z,alt:"--width=250",mdxType:"Image"})),(0,i.kt)("p",null,"Im Unterricht haben Sie gesehen, wie die umgedrehte Karte sofort entdeckt wurde - ",(0,i.kt)("em",{parentName:"p"},"Zauberei!?!?")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgaben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgaben")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Beschreiben Sie, nach welchem Prinzip Herr Hofer das ",(0,i.kt)("inlineCode",{parentName:"p"},"5x5"),"-Muster zu einem ",(0,i.kt)("inlineCode",{parentName:"p"},"6x6"),"-Muster erg\xe4nzt hat."),(0,i.kt)(s.Z,{type:"text",webKey:"18145a45-4a97-47aa-9905-aeb5c332a7da",mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spielen Sie das ",(0,i.kt)("inlineCode",{parentName:"p"},"XO"),"-Spiel",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," mit verschiedenen Mustern durch. Jede Spieler:in darf zweimal \u201eraten\u201c."))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Von nun an soll das gelegte ",(0,i.kt)("inlineCode",{parentName:"strong"},"6x6"),"-Muster nicht mehr ge\xe4ndert werden.")),(0,i.kt)("ol",{parentName:"div",start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xdcberpr\xfcfen Sie, ob es eine Position in diesen ",(0,i.kt)("inlineCode",{parentName:"p"},"6x6"),"-Muster gibt, bei der die Drehung einer Karte nicht erkannt wird.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Zwei nebeneinander liegende K\xe4rtchen werden umgedreht. \xdcberpr\xfcfen Sie, ob der Fehler erkannt werden kann. Wenn ja, k\xf6nnen Sie den Fehler auch korrigieren?"),(0,i.kt)(s.Z,{type:"text",webKey:"9c67d9c3-6abc-4c3d-bd9e-f4f23fd97023",mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Nun werden zwei beliebige K\xe4rtchen umgedreht. \xdcberpr\xfcfen Sie wieder, ob der Fehler erkannt und korrigiert werden kann.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Geben Sie an, wie viele M\xf6glichkeiten zur Korrektur gefunden werden k\xf6nnen. Markieren Sie farbig (zusammengeh\xf6rende K\xe4rtchenpaare jeweils in einer Farbe) in den abgegebenen leeren ",(0,i.kt)("inlineCode",{parentName:"p"},"6x6"),"-Raster diejenigen Positionen von K\xe4rtchen, welche zur Korrektur in Frage kommen. Wiederholen Sie Aufgabe 5 noch zwei bis drei weitere Male und erg\xe4nzen Sie die K\xe4stchen. Halten Sie Ihre Erkenntnisse mit einem Bild unten fest."),(0,i.kt)(s.Z,{type:"text",webKey:"f0e8b85a-0552-4f87-84a4-8590a57ba25b",mdxType:"Answer"}))))),(0,i.kt)("h2",{id:"parit\xe4tspr\xfcfung-parit\xe4tsbit"},"Parit\xe4tspr\xfcfung (Parit\xe4tsbit)"),(0,i.kt)("p",null,"Eine Information soll bin\xe4r codiert und anschliessend \xfcbertragen werden. Dabei soll erkannt werden, ob diese fehlerfrei \xfcbertragen wurde. Eine sehr einfache Methode zur Fehlererkennung bei bin\xe4r codierten Informationen ist die Parit\xe4tspr\xfcfung."),(0,i.kt)("p",null,"Dabei wird die Anzahl der Einsen der bin\xe4r codierten Information gez\xe4hlt:"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Ist sie ungerade, wird an die Bitfolge eine \u201e1\u201c angeh\xe4ngt, so dass die Anzahl der \u201eEinsen\u201c gerade wird."),(0,i.kt)("li",{parentName:"ul"},"Ist sie gerade, wird an die Bitfolge eine \u201e0\u201c angeh\xe4ngt, so dass die Anzahl der Einsen gerade bleibt."))),(0,i.kt)("p",null,"Man spricht hierbei von einer geraden Parit\xe4t. Das angeh\xe4ngte Bit wird Parit\xe4tsbit genannt."),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,"Bin\xe4r codierte Information (7 Bit lang): ",(0,i.kt)("inlineCode",{parentName:"p"},"100110")),(0,i.kt)("p",null,"Zu \xfcbertragender Code mit Parit\xe4tsbit (7+1 Bit lang): ",(0,i.kt)("inlineCode",{parentName:"p"},"1001101")),(0,i.kt)("p",null,"Das Parit\xe4tsbit ist hier 1."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"parit\xe4tsbit"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Parit\xe4tsbit")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie mit Parit\xe4tsbit:"),(0,i.kt)(s.Z,{type:"string",webKey:"cbe3446d-5d38-4720-9548-5c0e937ca7a1",solution:"1011010",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"101101")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"101101")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,i.kt)(s.Z,{type:"string",webKey:"7be93021-5e4a-45e5-a897-be2051d54151",solution:"10101010100010",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1010101010001")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1010101010001")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,i.kt)("p",{parentName:"div"},"Sie erhalten 10 Bit-Sequenzen, wobei jede Sequenz mit einem Parit\xe4tsbit abgeschlossen ist."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"10110100\n11000011\n11101011\n01000011\n11100001\n11001010\n11100100\n01110011\n11001010\n11010010\n")),(0,i.kt)(s.Z,{type:"string",webKey:"d52350db-9392-45f9-b547-95f47170c3e6",solution:"10",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},"Wie viele zus\xe4tzliche Bits waren f\xfcr die Fehlererkennung n\xf6tig?")),(0,i.kt)(s.Z,{type:"string",webKey:"1c50aa68-bb3e-4421-99e3-272ffc16cc5f",solution:"2",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},"Wie viele zus\xe4tzliche Bits Sequenzen sind kaputt?")),(0,i.kt)("p",{parentName:"div"},"Entfernen die fehlerhaft \xfcbertragenen Sequenzen und entfernen Sie alle Parit\xe4ts-Bits. Welche Nachricht wird angezeigt?"),(0,i.kt)(o.Z,{mdxType:"Bin2Text"}),(0,i.kt)(s.Z,{type:"text",webKey:"3600db39-dc95-4a5b-beb4-752509e5567a",mdxType:"Answer"}),(0,i.kt)("p",{parentName:"div"},"Wieso wird ein ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," statt der Buchstabe ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," angezeigt? (",(0,i.kt)("inlineCode",{parentName:"p"},"b")," ist bin\xe4r ",(0,i.kt)("inlineCode",{parentName:"p"},"1100010"),"). Weshalb wurde dies nicht als Fehler erkannt? "),(0,i.kt)(s.Z,{type:"text",webKey:"d217e695-dd2f-437c-92f4-eeb4e9c982b4",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"ean-13"},"EAN-13"),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("p",{parentName:"div"},"Letzthin beim Vorbereiten im Kaffee nebenan, wollte ich eine Packung Kaffee kaufen - doch das Einscannen des Codes ging nicht, so dass der Strichcode einer anderen Packung eingelesen werden musste..."),(0,i.kt)("p",{parentName:"div"},"Doch wie funktioniert das? Weshalb wurde erkannt, dass der Code kaputt war?"),(0,i.kt)("p",{parentName:"div"},"Nach einer kurzen Recherche: Die Strichcodes auf Verpackungen sind sog. ",(0,i.kt)("strong",{parentName:"p"},"EAN-13-Codes")," (EAN = European Article Number). Doch wie funktionieren diese?")),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"EAN 13",options:{width:"250px"},isInline:!1,src:n(35755).Z,alt:"EAN 13 --width=250px",mdxType:"Image"})))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Was k\xf6nnte passieren, wenn ein Strichcode verdreckt oder besch\xe4digt ist?"),(0,i.kt)(s.Z,{type:"text",webKey:"a54b9818-5715-4442-a836-9a639ea4e649",mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die ersten 12 Stellen des (richtigen) EAN-13 Codes der Baslercaf\xe9 Verpackung lautet: ",(0,i.kt)("inlineCode",{parentName:"p"},"7610 4430 0204"),". Wie berechnet sich daraus nun die letzte Stelle, die Pr\xfcfziffer? Erkennen Sie das System? (Einfachheitshalber wurde eine weitere EAN-Nummer abgedruckt ",(0,i.kt)("inlineCode",{parentName:"p"},"4260 0806 8005"),")."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F\xfchren Sie zu diesen Codierungen die beiden untenstehende Rechnungen aus und halten Sie die Ergebnisse fest."),(0,i.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(16496).Z,mdxType:"Image"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ermitteln Sie anhand der beiden Beispiele, wie die letzte Ziffer mit der Rechnung zusammenh\xe4ngt und beschreiben Sie das gefundene Verfahren."),(0,i.kt)(s.Z,{type:"text",webKey:"611e1a17-f69d-4cc9-9c47-d1777d17a333",mdxType:"Answer"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Berechnen Sie auch f\xfcr die folgenden Strichcodes die Pr\xfcfziffer:"),(0,i.kt)("div",{parentName:"li",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(6247).Z,mdxType:"Image"})))),(0,i.kt)(s.Z,{type:"string",webKey:"f6bb3360-2bae-4ebd-81a4-00d9b61dbbaa",solution:"2",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},"401035527731")),(0,i.kt)(s.Z,{type:"string",webKey:"3a0d5a1c-4eac-4dea-874d-c6ca5d9c4200",solution:"7",mdxType:"Answer"},(0,i.kt)("p",{parentName:"div"},"400781730180")))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Inspirationsquelle: ",(0,i.kt)("a",{parentName:"li",href:"https://lehrerfortbildung-bw.de/u_matnatech/imp/gym/bp2016/fb1/1_i1_duc/2_kopiervorlagen/2_xo/"},"lehrerfortbildung-bw.de"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},97566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},35755:function(e,t,n){t.Z=n.p+"assets/images/ean13-blaser-9cde588e872de841580c887c690da8b7.jpg"},6247:function(e,t,n){t.Z=n.p+"assets/images/ean13-exercise-150ca29f0517a1e44ba38f0cac21eb43.png"},16496:function(e,t,n){t.Z=n.p+"assets/images/ean13-rechnung-52b758136ce0c2ccafd39f3609d8b115.png"},83773:function(e,t,n){t.Z=n.p+"assets/images/xo-game-0eb7cf82a04cde21612fef9c9907f7ff.png"}}]);