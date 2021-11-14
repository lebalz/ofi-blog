"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[26387],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),c=n(71217),l=n(21314),o=(0,c.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return Z},Z:function(){return V}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},c=n(86010),l=n(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var c=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[c],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),f=n(72389),p=n(21314),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,l.Pi)((function(e){var t,n,r,l=(0,f.Z)(),o=a.useState("unchecked"),h=o[0],v=o[1],y=(0,p.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&k(y.data.value)}))}),[]),a.useEffect((function(){y.loaded&&k(y.data.value)}),[l]),y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.data.value,className:g(y.data.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.data.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(y.data.value)},className:(0,c.default)(i[h],i.checkButton)},a.createElement(u.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement("div",null,"Loading...")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),w=void 0,N=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),x=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},E=(0,l.Pi)((function(e){var t=a.useState(!1),r=t[0],l=t[1],o=a.useState(!1),s=o[0],u=o[1],d=a.useRef(null),f=(0,p.oR)("documentStore").find(e.webKey),h=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){w=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(u(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",h))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",h)}}),[]);return w&&s&&f.loaded?a.createElement("div",{onFocus:function(){return!r&&l(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||f.readonly,className:(0,c.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?f.legacyData.value:f.value||"",onChange:function(t,n,a,r){var i,c;i=t,void 0===c&&(c=0),!e.isLegacy&&f.loaded&&s&&(0,m.z)((function(){f.value=i}))},modules:{toolbar:e.toolbar?x(e.toolbar):N,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),S=n(3239),L=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return L("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return L("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,c.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),K=n(78982),C=n(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,K.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,K.cl)(e.id,t)}}}:function(){}},V=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return r&&i?((0,p.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,A(e)),a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(_,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(k,e))):a.createElement("div",null,"Loading...")}))},21314:function(e,t,n){n.d(t,{oR:function(){return c},ky:function(){return l}});var a=n(68949),r=n(67294),i=n(93812),c=function(e){return r.useContext(i.Nx)[e]},l=function(e,t,n,c,l,o){var s=r.useState(!1),u=s[0],d=s[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,c,l,o).finally((function(){d(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){u&&a&&!i.Ux.userStore.isMyView&&i.Ux.documentStore.provideDocument(e,t,n,c,l,o)}))}),[u]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){u&&!a&&i.Ux.documentStore.provideDocument(e,t,n,c,l,o)}))}),[u])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return c}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&l()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var c=i[e];return void 0===c?n:c}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(s){return n}},c=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},46223:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=n(84384),l=n(52084),o=["components"],s={title:"Schl\xfcsselaustausch"},u="Schl\xfcsselaustausch [^1]",d={unversionedId:"Kryptologie/Asymmetrisch/key-exchange",id:"version-24i/Kryptologie/Asymmetrisch/key-exchange",isDocsHomePage:!1,title:"Schl\xfcsselaustausch",description:"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/01-key-exchange.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/key-exchange",permalink:"/24i/Kryptologie/Asymmetrisch/key-exchange",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/01-key-exchange.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"Schl\xfcsselaustausch"},sidebar:"version-24i/sidebar",previous:{title:"Kerckhoffs' Prinzip",permalink:"/24i/Kryptologie/Symmetrisch/kerckhoffs"},next:{title:"Geheime Farbe",permalink:"/24i/Kryptologie/Asymmetrisch/secret-color"}},m=[],f={toc:m};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schl\xfcsselaustausch-"},"Schl\xfcsselaustausch ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob m\xf6chten sich geheime Unterlagen senden. Doch wie k\xf6nnen sie den Schl\xfcssel austauschen?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(c.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(37234).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("p",null,"Vielleicht hilft es, wenn wir uns in Erinnerung rufen, dass im Handel mehrere Schl\xf6sser mit unterschiedlichen Schl\xfcsseln zu kaufen sind:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(c.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"Schl\xfcsselaustausch",options:{},isInline:!1,src:n(9629).Z,alt:"Schl\xfcsselaustausch",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"schl\xfcsselaustausch"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselaustausch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Finden Sie eine M\xf6glichkeit, den Inhalt der Truhe sicher zu \xfcbertragen?")),(0,i.kt)("p",{parentName:"div"},"Versetzen Sie sich dabei in die Rollen der anderen Krypto-Charaktere!"),(0,i.kt)(l.Z,{type:"text",webKey:"fea4de63-dc0a-4000-8432-c6d676b8443a",mdxType:"Answer"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Hilfestellungen"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"variante-1-eigene-schl\xf6sser-verteilen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Variante 1: Eigene Schl\xf6sser Verteilen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(c.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(51786).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie kommt ein Schl\xfcsselaustausch zustande? Wo liegen allenfalls Probleme?"),(0,i.kt)(l.Z,{type:"text",webKey:"71166ff0-e7d6-4ff9-ab7c-a8695b004818",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"variante-2-schl\xf6sser-beim-vertrauensw\xfcrdigen-trent-beziehen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Variante 2: Schl\xf6sser beim vertrauensw\xfcrdigen Trent beziehen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(c.Z,{bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(62835).Z,mdxType:"Image"})),(0,i.kt)("p",{parentName:"div"},"Wie kommt ein Schl\xfcsselaustausch zustande? Wo liegen allenfalls Probleme?"),(0,i.kt)(l.Z,{type:"text",webKey:"caf33c6d-2642-40cd-99d1-74fca9959cf1",mdxType:"Answer"})))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=280524"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},51786:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-1-f7660c0fb12b7f2568cae2e6ed05bda0.svg"},62835:function(e,t,n){t.Z=n.p+"assets/images/asymm-encryption-2-179b7e61a985353a03498f7f9c07220c.svg"},9629:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-2-fe26cbf46a2c49e9b52d56b21776c690.svg"},37234:function(e,t,n){t.Z=n.p+"assets/images/key-exchange-9ee345dcc6df5359a1b0e4dd386260a3.svg"}}]);