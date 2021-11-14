"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57028],{3239:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),o=n(71217),c=n(21314),l=(0,o.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return P},Z:function(){return R}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},o=n(86010),c=n(71217),l=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(l.test(t)){var o=function(e){if(l.test(e))return e.match(l).groups.klass}(t);r=i[o],n=""+t.replace(l,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),s=n(51436),f=n(68949),m=n(72389),p=n(21314),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,c.Pi)((function(e){var t,n,r,c=(0,m.Z)(),l=a.useState("unchecked"),g=l[0],h=l[1],y=(0,p.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(h("unchecked"),y.setData({value:t,type:"string"}))},w=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return y.loaded}),(function(e){e&&w(y.data.value)}))}),[]),a.useEffect((function(){y.loaded&&w(y.data.value)}),[c]),y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.data.value,className:v(y.data.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.data.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return w(y.data.value)},className:(0,o.default)(i[g],i.checkButton)},a.createElement(d.G,{icon:(r=g,"correct"===r?s.f8k:"wrong"===r?s.nYk:s.sph)}))):a.createElement("div",null,"Loading...")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),k=void 0,N=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),S=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},E=(0,c.Pi)((function(e){var t=a.useState(!1),r=t[0],c=t[1],l=a.useState(!1),u=l[0],d=l[1],s=a.useRef(null),m=(0,p.oR)("documentStore").find(e.webKey),g=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(k)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){k=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(d(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",g))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",g)}}),[]);return k&&u&&m.loaded?a.createElement("div",{onFocus:function(){return!r&&c(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(k,{ref:s,theme:"snow",readOnly:e.isLegacy||m.readonly,className:(0,o.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?m.legacyData.value:m.value||"",onChange:function(t,n,a,r){var i,o;i=t,void 0===o&&(o=0),!e.isLegacy&&m.loaded&&u&&(0,f.z)((function(){m.value=i}))},modules:{toolbar:e.toolbar?S(e.toolbar):N,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),D=n(3239),x=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(w,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),L=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),_=n(78982),C=n(97762),P=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},R=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return r&&i?((0,p.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,K(e)),a.createElement("div",{"data--web-key":e.webKey},a.createElement(D.Z,null),n.loggedIn&&a.createElement(z,e),n.loggedIn&&a.createElement(L,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(w,e))):a.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return o},ky:function(){return c}});var a=n(68949),r=n(67294),i=n(93812),o=function(e){return r.useContext(i.Nx)[e]},c=function(e,t,n,o,c,l){var u=r.useState(!1),d=u[0],s=u[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,o,c,l).finally((function(){s(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){d&&a&&!i.Ux.userStore.isMyView&&i.Ux.documentStore.provideDocument(e,t,n,o,c,l)}))}),[d]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){d&&!a&&i.Ux.documentStore.provideDocument(e,t,n,o,c,l)}))}),[d])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(u){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},72497:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(52084),c=["components"],l={title:"DNS Attacken"},u="\u2b50\ufe0f DNS Attacken",d={unversionedId:"Netzwerke-of/Sicherheit/DNS-Attacken",id:"Netzwerke-of/Sicherheit/DNS-Attacken",isDocsHomePage:!1,title:"DNS Attacken",description:"Was ist das Prinzip der DNS Cache Poisioning Attacke?",source:"@site/docs/Netzwerke-of/005-Sicherheit/02-DNS-Attacken.md",sourceDirName:"Netzwerke-of/005-Sicherheit",slug:"/Netzwerke-of/Sicherheit/DNS-Attacken",permalink:"/Netzwerke-of/Sicherheit/DNS-Attacken",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/005-Sicherheit/02-DNS-Attacken.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:2,frontMatter:{title:"DNS Attacken"},sidebar:"sidebar",previous:{title:"WIFI Sniffing",permalink:"/Netzwerke-of/Sicherheit/WIFI-Sniffing"},next:{title:"Internet",permalink:"/Netzwerke-of/Begriffe/internet"}},s=[{value:"\u2b50\ufe0f ARP and DNS Spoofing",id:"\ufe0f-arp-and-dns-spoofing",children:[],level:2}],f={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-dns-attacken"},"\u2b50\ufe0f DNS Attacken"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/czKHFxaO56c?start=1&end=3:00",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"cache-poisioning"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Cache Poisioning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was ist das Prinzip der DNS Cache Poisioning Attacke?"),(0,i.kt)(o.Z,{type:"text",id:"q1",webKey:"307634c6-4014-425d-832d-eca3269ad79f",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"\ufe0f-arp-and-dns-spoofing"},"\u2b50\ufe0f ARP and DNS Spoofing"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/SHkdWNo7SC8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arp-und-dns-spoofing"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"ARP und DNS Spoofing")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie verl\xe4uft eine ARP/DNS-Spoofing Attacke?"),(0,i.kt)(o.Z,{type:"text",id:"q2",webKey:"832e9fad-b764-42dc-a9c7-b6ea964a8cd0",mdxType:"Answer"}))))}m.isMDXComponent=!0}}]);