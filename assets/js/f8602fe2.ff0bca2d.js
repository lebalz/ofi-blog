"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78137],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return j}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},o=n(86010),l=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var o=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[o],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),p=n(72389),m=n(21314),g=n(74322),v=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},h=(0,l.Pi)((function(e){var t,n,a,l=(0,p.Z)(),c=r.useState("unchecked"),v=c[0],h=c[1],b=(0,m.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&b.loaded&&(h("unchecked"),b.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&k(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&k(b.value)}),[b,l]),l?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:y(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(b.value)},className:(0,o.default)(i[v],i.checkButton)},r.createElement(s.G,{icon:(a=v,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),N=n(83117),E=n(75552),S=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,N.Z)({model:t},e))):r.createElement(g.Z,null)})),x=n(47271),D=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},O=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",t)}},"Nein (verwerfen)"))):null})),P=(0,l.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=n(46858),_=n(78982),z=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,L.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},j=(0,l.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,m.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,A(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(O,e),n.loggedIn&&r.createElement(P,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(k,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),i="loader_FEpR",o="badge_oWqf",l=n(71217),c=n(92814),u=n(51436),s=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",o)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",o="monospace_usc_",l="disableToolbar_bRdP",c=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return e.code&&t.push(["code-block"]),t},m=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],m=t[1],g=r.useState(!1),v=g[0],y=g[1],h=r.useRef(null),b=e.model,w=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(y(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&v&&b.loaded?r.createElement("div",{onFocus:function(){return!u&&m(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&o,u?void 0:l),value:b.text||"",onChange:function(t,n,r,a){var i,o;i=t,void 0===o&&(o=0),!e.readonly&&b.canUpdate&&v&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(f,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return r},Vx:function(){return a},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return o},rV:function(){return i}});var r=864e5,a=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&l()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var i=JSON.parse(a);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},1942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(52084),l=["components"],c={title:"DNS Attacken"},u="\u2b50\ufe0f DNS Attacken",s={unversionedId:"Netzwerke/Sicherheit/DNS-Attacken",id:"version-24L/Netzwerke/Sicherheit/DNS-Attacken",title:"DNS Attacken",description:"Was ist das Prinzip der DNS Cache Poisioning Attacke?",source:"@site/versioned_docs/version-24L/05-Netzwerke/006-Sicherheit/02-DNS-Attacken.md",sourceDirName:"05-Netzwerke/006-Sicherheit",slug:"/Netzwerke/Sicherheit/DNS-Attacken",permalink:"/24L/Netzwerke/Sicherheit/DNS-Attacken",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/05-Netzwerke/006-Sicherheit/02-DNS-Attacken.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"DNS Attacken"},sidebar:"version-24L/sidebar",previous:{title:"WIFI Sniffing",permalink:"/24L/Netzwerke/Sicherheit/WIFI-Sniffing"},next:{title:"Begriffe",permalink:"/24L/category/begriffe"}},d={},f=[{value:"\u2b50\ufe0f ARP and DNS Spoofing",id:"\ufe0f-arp-and-dns-spoofing",level:2}],p={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-dns-attacken"},"\u2b50\ufe0f DNS Attacken"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/czKHFxaO56c?start=1&end=3:00",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"cache-poisioning"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Cache Poisioning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was ist das Prinzip der DNS Cache Poisioning Attacke?"),(0,i.kt)(o.Z,{type:"text",id:"q1",webKey:"307634c6-4014-425d-832d-eca3269ad79f",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"\ufe0f-arp-and-dns-spoofing"},"\u2b50\ufe0f ARP and DNS Spoofing"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/SHkdWNo7SC8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arp-und-dns-spoofing"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"ARP und DNS Spoofing")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie verl\xe4uft eine ARP/DNS-Spoofing Attacke?"),(0,i.kt)(o.Z,{type:"text",id:"q2",webKey:"832e9fad-b764-42dc-a9c7-b6ea964a8cd0",mdxType:"Answer"}))))}m.isMDXComponent=!0}}]);