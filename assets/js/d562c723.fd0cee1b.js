"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[27381],{3239:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),s=n(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return K},Z:function(){return C}});var a=n(67294),r=n(28900),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),s=n(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),f=n(21314),h=n(74322),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},k=(0,s.Pi)((function(e){var t,n,r,s=(0,p.Z)(),o=a.useState("unchecked"),g=o[0],k=o[1],b=(0,f.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&b.loaded&&(k("unchecked"),b.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return k(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};k(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&y(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&y(b.value)}),[b,s]),s?b.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:v(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(b.value)},className:(0,l.default)(i[g],i.checkButton)},a.createElement(u.G,{icon:(r=g,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(h.Z,null)})),N=n(83117),z=n(75552),S=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(z.Z,(0,N.Z)({model:t},e))):a.createElement(h.Z,null)})),E=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},L=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(k,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(46858),_=n(78982),W=n(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},B=function(e){if(!e.id)return function(){};var t=function(){try{return(0,Z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,_.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},C=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||W.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,B(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(E.Z,null),n.loggedIn&&a.createElement(L,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(y,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_2rVr",l="badge_2s0E",s=n(71217),o=n(92814),c=n(51436),u=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",s="disableToolbar_gntN",o=n(86010),c=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],h=a.useState(!1),g=h[0],v=h[1],k=a.useRef(null),b=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&g&&b.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(r)},a.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&g&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var o=localStorage.getItem(e);return o?JSON.parse(o):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},92686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),s=n(52084),o=["components"],c={title:"Browserzertifikate"},u="Browserzertifikate [^1]",d={unversionedId:"Kryptologie/Alltag/browser-zertifikate",id:"version-24L/Kryptologie/Alltag/browser-zertifikate",title:"Browserzertifikate",description:"W\xe4hrend fr\xfcher s\xe4mtliche Informationen im Internet unverschl\xfcsselt \xfcbertragen worden sind, werden die meisten Verbindungen heutzutage mit kryptographischen Mitteln gesch\xfctzt.",source:"@site/versioned_docs/version-24L/06-Kryptologie/07-Alltag/02-browser-zertifikate.md",sourceDirName:"06-Kryptologie/07-Alltag",slug:"/Kryptologie/Alltag/browser-zertifikate",permalink:"/24L/Kryptologie/Alltag/browser-zertifikate",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/07-Alltag/02-browser-zertifikate.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"Browserzertifikate"},sidebar:"version-24L/sidebar",previous:{title:"Ziele der Kryptologie",permalink:"/24L/Kryptologie/Alltag/konzepte"},next:{title:"WhatsApp-Verschl\xfcsselung",permalink:"/24L/Kryptologie/Alltag/whatsapp"}},m=[{value:"Symmetrische und asymmetrische Verschl\xfcsselung",id:"symmetrische-und-asymmetrische-verschl\xfcsselung",children:[],level:2},{value:"Achtung vor falscher Sicherheit",id:"achtung-vor-falscher-sicherheit",children:[],level:2}],p={toc:m};function f(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"browserzertifikate-"},"Browserzertifikate ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"W\xe4hrend fr\xfcher s\xe4mtliche Informationen im Internet unverschl\xfcsselt \xfcbertragen worden sind, werden die meisten Verbindungen heutzutage mit kryptographischen Mitteln gesch\xfctzt."),(0,i.kt)("p",null,"Insbesondere nutzen momentan (",(0,i.kt)("em",{parentName:"p"},"M\xe4rz 2021"),") gem\xe4ss W3Techs",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \xfcber 70% aller Webseiten ",(0,i.kt)("strong",{parentName:"p"},"HTTPS"),". HTTPS ist eine Erweiterung des HyperText Transfer Protocols, der Buchstabe \xabS\xbb steht f\xfcr Secure."),(0,i.kt)("p",null,"Damit wird der Datenverkehr in ",(0,i.kt)("strong",{parentName:"p"},"beiden Richtungen")," verschl\xfcsselt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alle Daten, die vom Webserver zum Browser \xfcbertragen werden (also der Inhalt der Seite wie z.B. Text, Bilder, Videos, heruntergeladene Dateien, ...)"),(0,i.kt)("li",{parentName:"ul"},"alle Daten, die vom Browser zu Webserver \xfcbertragen werden (also ausgef\xfcllte Formulare wie z.B. Benutzernamen und Passw\xf6rter, aber auch alle Texte, die wir eingeben sowie s\xe4mtliche hochgeladenen Dateien, ...)")),(0,i.kt)("h2",{id:"symmetrische-und-asymmetrische-verschl\xfcsselung"},"Symmetrische und asymmetrische Verschl\xfcsselung"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Daten werden symmetrisch")," verschl\xfcsselt, der ",(0,i.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel asymmetrisch"),"."),(0,i.kt)("p",null,"Da die Browser nicht jeden einzelnen \xf6ffentlichen Schl\xfcssel der Webseiten (dies sind gem\xe4ss internet live stats hunderte Millionen",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),") kennen k\xf6nnen, vertrauen sie ausgew\xe4hlten ",(0,i.kt)("strong",{parentName:"p"},"Zertifizierungsstellen"),". Der \xf6ffentliche Schl\xfcssel einer Webseite wird von einer Zertifizierungsstelle digital signiert. Das so entstandene Zertifikat wird beim Verbindungsaufbau \xfcbertragen und kann vom Browser \xfcberpr\xfcft werden."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Webseitenzertifikate",options:{width:"400px"},isInline:!1,src:n(6142).Z,alt:"Webseitenzertifikate --width=400px",mdxType:"Image"})),(0,i.kt)("p",null,"Das Schloss vor der URL zeigt die Verwendung von HTTPS (und Webseitenzertifikaten) an.\nBeim Klicken auf das Schloss k\xf6nnen \xabWeitere Informationen\xbb zur Verbindung angezeigt werden (unter Firefox):"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Informationen zur Webseite",options:{},isInline:!1,src:n(82675).Z,alt:"Informationen zur Webseite",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"webseitenzertifikat"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Webseitenzertifikat")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was finden Sie alles \xfcber die Zertifikate der Webseite des Gymnasiums Biel-Seeland heraus?"),(0,i.kt)(s.Z,{type:"text",webKey:"e39bd1c8-631e-4b4c-b2de-5569e50937d5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"kryptographische-details"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kryptographische Details")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im Screenshot oben sehen Sie die technische Angabe ",(0,i.kt)("inlineCode",{parentName:"p"},"TLS_AES_128_GCM_SHA256, 128-Bit Schl\xfcssel, TLS 1.3"),". Finden Sie heraus, was die einzelnen Teile aussagen?"),(0,i.kt)(s.Z,{type:"text",webKey:"ab1dae9c-54af-48bf-a390-fdccd9bd6471",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"zertifizierungsstellen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Zertifizierungsstellen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finden Sie die im Browser gespeicherten \xabvertrauensw\xfcrdigen Zertifizierungsstellen\xbb?"),(0,i.kt)(s.Z,{type:"text",webKey:"caf647b0-ba95-4cf3-8824-150558348c45",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"zertifikatswarnungen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Zertifikatswarnungen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Besuchen Sie die Webseite ",(0,i.kt)("a",{parentName:"p",href:"https://badssl.com/"},"BadSSL")," und testen Sie mit verschiedenen Browsern verschiedene Konfigurationen. So lernen Sie die m\xf6gliche Zertifikatswarnungen kennen."),(0,i.kt)(s.Z,{type:"text",webKey:"893cdb6f-75bd-4bfd-8009-0f84ea0360af",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"achtung-vor-falscher-sicherheit"},"Achtung vor falscher Sicherheit"),(0,i.kt)("p",null,"Die Tatsache, dass bei einer bestimmten Webseite das Schloss angezeigt wird, heisst noch lange nicht, dass die Webseite sicher ist. Denn das Wort ",(0,i.kt)("strong",{parentName:"p"},"sicher")," hat mehrere Bedeutungen."),(0,i.kt)("p",null,"Was genau sagt das Schloss also aus? Worauf k\xf6nnen wir vertrauen? Was hingegen kann trotzdem noch schiefgehen?"),(0,i.kt)("p",null,"Was bedeutet ",(0,i.kt)("strong",{parentName:"p"},"sicher")," in diesem Zusammenhang?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Die Verbindung ist vertraulich \u2013 niemand unterwegs kann mitlesen."),(0,i.kt)("li",{parentName:"ol"},"Wir k\xf6nnen sicher sein, dass wir mit dem genannten Server (resp. mit der angegebenen Webseite) kommunizieren."),(0,i.kt)("li",{parentName:"ol"},"Die \xfcbertragenen Inhalte sind vor Manipulation gesch\xfctzt.")),(0,i.kt)("p",null,"Wo ist trotzdem Vorsicht geboten?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die URL (also die Webseitenadresse) muss ganz genau kontrolliert werden. Es n\xfctzt nichts, wenn die Verbindung verschl\xfcsselt ist und der Server \xfcberpr\xfcft wurde, wenn wir mit dem falschen Server sprechen, weil wir zu wenig genau auf die URL achten."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#"},"www.bekb.com.evil.com/login")," ist keine g\xfcltige Webseite von ",(0,i.kt)("strong",{parentName:"p"},"BEKB"),", sondern eine Unterseite (Subdomain) von ",(0,i.kt)("a",{parentName:"p",href:"#"},"evil.com"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#www.vaIiant.ch"},"www.vaIiant.ch")," ist nicht dasselbe wie ",(0,i.kt)("a",{parentName:"p",href:"#www.valiant.ch"},"www.valiant.ch")," \u2013 auch wenn es fast identisch aussieht (achten Sie genau auf das \xabL\xbb). In einer anderen Schriftart sieht man den Fehler besser: ",(0,i.kt)("inlineCode",{parentName:"p"},"www.vaIiant.ch"),"  "),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"absicherung-mit-passwortmanager"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Absicherung mit Passwortmanager")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Plugins von Passwortmanagern erkennen diese kaum sichtbaren details, so dass bei solchen Seiten kein Vorschlag zum automatischen Ausf\xfcllen angezeigt wird.")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die Webseite kann z.B. Malware verbreiten resp. gehackt worden sein. D.h. der \xabInhalt\xbb wird nicht \xfcberpr\xfcft."))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=351437"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://w3techs.com/technologies/details/ce-httpsdefault"},"W3Techs"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.internetlivestats.com/total-number-of-websites/"},"internet live stats"),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},82675:function(e,t,n){t.Z=n.p+"assets/images/certs-ofi.gbsl.website-fede0fc3bed8564c3a5bdb85eac7ff47.png"},6142:function(e,t,n){t.Z=n.p+"assets/images/https-gbsl.ch-94b534677d2131f5c8c9728052fbab23.png"}}]);