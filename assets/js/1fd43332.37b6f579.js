"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[33130],{3239:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(67294),l="noLoginAlert_boZc",a=n(73727),c=n(71217),r=n(21314),g=(0,c.Pi)((function(){return(0,r.oR)("msalStore").loggedIn?null:i.createElement("div",{className:l},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(a.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return H},Z:function(){return z}});var i=n(67294),l=n(3435),a={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},c=n(86010),r=n(71217),g=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),I=function(e){var t=e.value,n=t,l=void 0;if(g.test(t)){var c=function(e){if(g.test(e))return e.match(g).groups.klass}(t);l=a[c],n=""+t.replace(g,"")}return i.createElement("option",{value:t,className:l},n)},o=n(92814),d=n(51436),u=n(68949),s=n(72389),C=n(21314),m=n(74322),A=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return a[function(e){if(A.test(e))return e.match(A).groups.klass}(e)]},N=(0,r.Pi)((function(e){var t,n,l,r=(0,s.Z)(),g=i.useState("unchecked"),A=g[0],N=g[1],y=(0,C.oR)("documentStore").find(e.webKey),D=function(t){!e.isLegacy&&y.loaded&&(N("unchecked"),y.setData({value:t,type:"string"}))},h=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};N(n(t)===n(e.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,u.U5)((function(){return y.loaded}),(function(e){e&&h(y.value)}))}),[y]),i.useEffect((function(){y.loaded&&h(y.value)}),[y,r]),r?y.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement("select",{onChange:function(e){return D(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:b(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(I,{value:e,key:t})}))):i.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return D(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&i.createElement("button",{onClick:function(){return h(y.value)},className:(0,c.default)(a[A],a.checkButton)},i.createElement(o.G,{icon:(l=A,"correct"===l?d.f8k:"wrong"===l?d.nYk:d.sph)}))):i.createElement(m.Z,null):i.createElement("div",null,"SSR")})),y=(0,l.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),D=function(e){return a[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},h=(0,r.Pi)((function(e){var t,n=(0,C.oR)("documentStore").find(e.webKey),l=function(t,i){if(void 0===i&&(i=0),!e.isLegacy&&n.loaded){var l=[].concat(n.data.value.slice(0,i),[t],n.data.value.slice(i+1));n.setData(Object.assign({},n.data,{value:l}))}};return n.loaded?i.createElement("div",{className:a.answer},e.label&&i.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,a){return e.select?i.createElement("select",{key:a,onChange:function(e){return l(e.target.value,a)},value:t,className:D(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return i.createElement(I,{value:e,key:t})}))):i.createElement("input",{key:a,type:"text",onChange:function(e){return l(e.target.value,a)},value:t,disabled:!n.loaded||n.readonly})}))):i.createElement(m.Z,null)})),p=n(83117),M=n(75552),w=(0,r.Pi)((function(e){var t=(0,C.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",null,e.label&&i.createElement("h6",null,e.label),i.createElement(M.Z,(0,p.Z)({model:t},e))):i.createElement(m.Z,null)})),v=n(3239),Z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,u.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,u.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},L=(0,r.Pi)((function(e){var t=(0,C.oR)("documentStore").find(e.webKey);return t.legacyData?i.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",i.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",i.createElement("div",null,"text"===t.type&&i.createElement(w,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&i.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&i.createElement(h,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),i.createElement("div",null,i.createElement("button",{className:"button button--primary",onClick:function(){return Z("use_legacy",t)}},"Ja"),i.createElement("button",{className:"button button--info",onClick:function(){return Z("use_current",t)}},"Nein (verwerfen)"))):null})),T=(0,r.Pi)((function(e){return(0,C.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,c.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),f=n(46858),j=n(78982),x=n(97762),H=function(e){return e.replace(/\s+/g,"").toUpperCase()},k=function(e){if(!e.id)return function(){};var t=function(){try{return(0,f.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,j.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,j.cl)(e.id,t)}}}:function(){}},z=(0,r.Pi)((function(e){var t=(0,C.oR)("documentStore"),n=(0,C.oR)("msalStore"),l=t.find(e.webKey),a=(0,s.Z)();return(0,C.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,k(e)),a?l?i.createElement("div",{"data--web-key":e.webKey},i.createElement(v.Z,null),n.loggedIn&&i.createElement(L,e),n.loggedIn&&i.createElement(T,{webKey:e.webKey}),"text"===e.type&&i.createElement(w,e),"string"===e.type&&i.createElement(N,e),"array"===e.type&&i.createElement(h,e)):i.createElement(m.Z,null):i.createElement("div",null,"SSR")}))},61014:function(e,t,n){var i=n(72389),l=n(71217),a=n(67294),c=n(21314),r=n(74322),g=n(31173),I=n(86010),o=n(86720),d=function(){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},a.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},u=(0,l.Pi)((function(e){var t,n=(0,c.oR)("policyStore"),l=(0,c.oR)("userStore"),u=(0,i.Z)();if((0,c.aV)(e.webKey),!u)return a.createElement("div",null,"SSR");var s=n.find(e.webKey);return s?a.createElement("div",{"data--web-key":e.webKey,className:(0,I.default)(o.Z.wrapper,"solution-wrapper")},s.show||null!=(t=l.current)&&t.admin?a.createElement(g.Z,{summary:a.createElement("summary",null,e.title||"L\xf6sung"," ",a.createElement(d,null),!s.show&&a.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,I.default)("alert alert--success",o.Z.solution),open:e.open},e.children):a.createElement("div",{className:(0,I.default)("alert",o.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",a.createElement(d,null))):a.createElement(r.Z,null)}));t.Z=u},74322:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294),l=n(86010),a="loader_2rVr",c="badge_2s0E",r=n(71217),g=n(92814),I=n(51436),o=(0,r.Pi)((function(){return i.createElement("div",{className:(0,l.default)(a)},i.createElement(g.G,{icon:I.IJ7,spin:!0}),i.createElement("span",{className:(0,l.default)("badge",c)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return C}});var i=n(67294),l="quillEditor_1XRF",a="quillAnswer_oQOS",c="monospace_3rFN",r="disableToolbar_gntN",g=n(86010),I=n(71217),o=n(74322),d=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),s=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var i=[];e.h1&&i.push(1),e.h2&&i.push(2),e.h3&&i.push(3),i.push(!1),t.push(i)}if(e.color||e.background){var l=[];e.color&&l.push({color:[]}),e.background&&l.push({background:[]}),t.push(l)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var c=[];e.formula&&c.push("formula"),e.image&&c.push("image"),t.push(c)}return e.code&&t.push(["code-block"]),t},C=(0,I.Pi)((function(e){var t=i.useState(!1),I=t[0],C=t[1],m=i.useState(!1),A=m[0],b=m[1],N=i.useRef(null),y=e.model,D=function(e){e.preventDefault()};i.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var i=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],l={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(l.katex=i.length,i.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(i).then((function(t){d=t[l["react-quill"]].default;var n=t[l.quill].default,i=t[l["react-image-compress"]].default;if("katex"in l){var a=t[l.katex].default;window.katex=a}n.register("modules/imageCompress",i),e()}))}((function(){t&&(b(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",D))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",D)}}),[e]);return d&&A&&y.loaded?i.createElement("div",{onFocus:function(){return!I&&C(!0)},className:(0,g.default)(l)},i.createElement(d,{ref:N,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,g.default)(a,e.monospace&&c,I?void 0:r),value:y.text||"",onChange:function(t,n,i,l){var a,c;a=t,void 0===c&&(c=0),!e.readonly&&y.canUpdate&&A&&y.setText(a)},modules:{toolbar:e.toolbar?s(e.toolbar):[].concat(u,s(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(o.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return l},Vj:function(){return i},ly:function(){return a}});var i=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},l=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},a=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return a},cl:function(){return c}});var i=864e5,l=2592e6,a=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>i&&r()}catch(t){return}}(),t){var l=localStorage.getItem(t);if(l){var a=JSON.parse(l);if("object"==typeof a){var c=a[e];return void 0===c?n:c}return n}}var g=localStorage.getItem(e);return g?JSON.parse(g):n}catch(I){return n}},c=function(e,t){try{if(t){var n=a(t,void 0,{expiry:Date.now()+l});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(i){return}},r=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=a(t,void 0,{expiry:e+l});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},80467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var i=n(83117),l=n(80102),a=(n(67294),n(3905)),c=n(84384),r=n(52084),g=n(61014),I=["components"],o={title:"Verfahren kombinieren"},d="Verfahren kombinieren [^1]",u={unversionedId:"Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",id:"version-24K/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",title:"Verfahren kombinieren",description:"F\xfcr uns ist Wichtig:",source:"@site/versioned_docs/version-24K/06-Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",permalink:"/24K/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"Verfahren kombinieren"},sidebar:"version-24K/sidebar",previous:{title:"Integrit\xe4t",permalink:"/24K/Kryptologie/Digitale-Signaturen/Integritaet"},next:{title:"Zertifizierungsstellen",permalink:"/24K/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen"}},s=[{value:"Hashwerte",id:"hashwerte",children:[],level:2},{value:"Digitale Signaturen richtig verwenden",id:"digitale-signaturen-richtig-verwenden",children:[],level:2}],C={toc:s};function m(e){var t=e.components,o=(0,l.Z)(e,I);return(0,a.kt)("wrapper",(0,i.Z)({},C,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verfahren-kombinieren-"},"Verfahren kombinieren ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"F\xfcr uns ist Wichtig:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Dokumente sind stets lesbar und trotzdem vor Manipulationen gesch\xfctzt."),(0,a.kt)("li",{parentName:"ul"},"Asymmetrische Verfahren sollen eingesetzt werden, aber nicht zum Verschl\xfcsseln des ganzen Dokuments, weil dies langsam ist.")),(0,a.kt)("p",null,"Aus diesem Grund m\xfcssen wir \u2013 \xe4hnlich wie bei der asymmetrischen Verschl\xfcsselung \u2013 auch bei den digitalen Signaturen \xabnachbessern\xbb, wenn es um den konkreten Einsatz im Alltag geht."),(0,a.kt)("h2",{id:"hashwerte"},"Hashwerte"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hashwerte")," derselben Hashfunktion haben stets ",(0,a.kt)("strong",{parentName:"p"},"dieselbe L\xe4nge"),". Sie sind im Vergleich zum eingegebenen Text sehr kurz (wie der Fingerabdruck eines Menschen sehr klein ist im Vergleich zu all dem, was den Menschen mit diesem Fingerabdruck ausmacht)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Anstelle des gesamten Textes signieren wir nur den Hashwert, das beseitigt die beiden obengenannten Nachteile.")),(0,a.kt)("h2",{id:"digitale-signaturen-richtig-verwenden"},"Digitale Signaturen richtig verwenden"),(0,a.kt)("p",null,"Wir versuchen, mehrere Verfahren zu kombinieren und deren Vorteile zu nutzen. Einerseits berechnen wir den Hashwert eines Dokuments, andererseits \xabverschl\xfcsseln\xbb wir nur diesen Hashwert asymmetrisch. Somit reduziert sich der Einsatz von asymmetrischer Verschl\xfcsselung wiederum auf ganz kurze Werte. Zudem bleibt das Dokument intakt und stets lesbar."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(c.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(68767).Z,alt:"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",mdxType:"Image"})),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"digitale-signaturen-\xfcberpr\xfcfen"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Digitale Signaturen \xfcberpr\xfcfen")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich, wie man eine solche digital signierte Nachricht \xfcberpr\xfcfen kann. Zeichnen Sie die ben\xf6tigten Schritte auf."),(0,a.kt)(r.Z,{type:"text",webKey:"99cd9f5a-6715-44a8-89cf-c79770c0740b",mdxType:"Answer"}),(0,a.kt)(g.Z,{webKey:"5bacd9c8-2222-47c2-bc1d-e90116caf1d0",mdxType:"Solution"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(c.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Digitale Signatur \xfcberpr\xfcfen",options:{},isInline:!1,src:n(65217).Z,alt:"Digitale Signatur \xfcberpr\xfcfen",mdxType:"Image"}))))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559733"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_1t86",disabled:"disabled_1w22",hint:"hint_VeYI",solution:"solution_30mD"}},68767:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjU5MHB4IiBoZWlnaHQ9IjI4MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQ2FscXVlLTEiIHNlcmlmOmlkPSJDYWxxdWUgMSI+CiAgICAgICAgPGcgaWQ9IktsYXJ0ZXh0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMTM5LjY0OSIgeT0iMzYuMjYiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMTM0LjEyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw1MC4wMTU2LC01MC4yODM3KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxMTguNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMDAxMDAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEzNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTExMTA8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxNjYuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMTAxMTAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE4Mi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAxMTE8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIyMTQuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjEwMTAwMTAxPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE2MS45MDVweCIgeT0iMjYuMDUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LbGFydGV4dDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlNpdHp1bmdzc2NobMO8c3NlbCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjMwMS4wNDUiIHk9IjIyMS4zMTEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIzMDUuNjM2cHgiIHk9IjIzNy41NjZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjAxMTAwMDExPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIyOTUuMzAycHgiIHk9IjI2Mi4zOTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDsiPnByaXZhdGVyIFNjaGzDvHNzZWw8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgPGcgaWQ9InN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJzeW1tLiBHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ2OS40NzQiIHk9IjM2LjI2IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjEzNC4xMjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDM3OS44NDEsLTUwLjI4MzcpIj4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTE4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAwMTAwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTM0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTExMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTY2LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTEwMTEwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTgyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDExMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMjE0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDEwMDEwMTwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjQ3NC4wMDVweCIgeT0iMjYuMTk5cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5TaWduaWVydGVyIDx0c3BhbiB4PSI1MjguNDhweCA1MzQuNDhweCA1NDEuMTU0cHggIiB5PSIyNi4xOTlweCAyNi4xOTlweCAyNi4xOTlweCAiPlRleDwvdHNwYW4+dDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iYXN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSI0NjkuNDc0IiB5PSIxNzMuNzM3IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjIyLjcwNCIgc3R5bGU9ImZpbGw6cmdiKDExNiwxOTEsNjEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNDc0LjA2NXB4IiB5PSIxODkuNzAzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAxMDExMDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCB4PSI0NjQuNTgzIiB5PSIzMC45OTMiIHdpZHRoPSI5NS43NjgiIGhlaWdodD0iMTcxLjAyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTEyNy42NDksMTc4LjgwMUwxMzkuNjQ5LDE4NC44MDFMMTI3LjY0OSwxOTAuODAxQzEzMC42NDksMTg3LjgwMSAxMzAuNjQ5LDE4MS44MDEgMTI3LjY0OSwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik03Ni40OTksMTg0LjgwMUwxMzAuMDQ5LDE4NC44MDEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSw3NC4yMjVMMTM5LjY0OSw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTQ1Ny40NzQsMTc4LjczNEw0NjkuNDc0LDE4NC43MzRMNDU3LjQ3NCwxOTAuNzM0QzQ2MC40NzQsMTg3LjczNCA0NjAuNDc0LDE4MS43MzQgNDU3LjQ3NCwxNzguNzM0WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zOTMuMzQ2LDE4NC43MzRMNDU5Ljg3NCwxODQuNzM0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00NTcuNDc0LDY4LjIyNUw0NjkuNDc0LDc0LjIyNUw0NTcuNDc0LDgwLjIyNUM0NjAuNDc0LDc3LjIyNSA0NjAuNDc0LDcxLjIyNSA0NTcuNDc0LDY4LjIyNVoiLz4KICAgICAgICA8cGF0aCBkPSJNMjI1LjYzNCw3NC4yMjVMNDU5Ljg3NCw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTI4NC40NDgsMTc4LjgwMUwyOTYuNDQ4LDE4NC44MDFMMjg0LjQ0OCwxOTAuODAxQzI4Ny40NDgsMTg3LjgwMSAyODcuNDQ4LDE4MS44MDEgMjg0LjQ0OCwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjUuNjM0LDE4NC44MDFMMjg2Ljg0OCwxODQuODAxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMzcuNjQ2LDIxMi4wMTlMMzQzLjY0NiwyMDAuMDE5TDM0OS42NDYsMjEyLjAxOUMzNDYuNjQ2LDIwOS4wMTkgMzQwLjY0NiwyMDkuMDE5IDMzNy42NDYsMjEyLjAxOVoiLz4KICAgICAgICA8cGF0aCBkPSJNMzQzLjY0NiwyMjEuMzExTDM0My42NDYsMjA5LjYxOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzAuNDk5LDEwMS40M0w3Ni40OTksMTEzLjQzTDgyLjQ5OSwxMDEuNDNDNzkuNDk5LDEwNC40MyA3My40OTksMTA0LjQzIDcwLjQ5OSwxMDEuNDNaIi8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSwxMDMuODNMNzYuNDk5LDc0LjIyNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzYuNDk5LDE4NC44MDFMNzYuNDk5LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8ZyBpZD0ic3ltbS4tVmVyc2NobMO8c3NlbHVuZyIgc2VyaWY6aWQ9InN5bW0uIFZlcnNjaGzDvHNzZWx1bmciPgogICAgICAgICAgICA8cmVjdCB4PSIyOC4wNSIgeT0iMTEzLjQzIiB3aWR0aD0iOTYuODk4IiBoZWlnaHQ9IjMwLjU3IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNDEuNDFweCIgeT0iMTMzLjAxM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+SGFzaGZ1bmt0aW9uPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iYXN5bW0uLVZlcnNjaGzDvHNzZWx1bmciIHNlcmlmOmlkPSJhc3ltbS4gVmVyc2NobMO8c3NlbHVuZyI+CiAgICAgICAgICAgIDxyZWN0IHg9IjI5NS4xOTciIHk9IjE2OS40NDkiIHdpZHRoPSI5Ni44OTgiIGhlaWdodD0iMzAuNTciIHN0eWxlPSJmaWxsOnJnYigxMTYsMTkxLDYxKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwzNS4wMDQ0LDc5LjA2KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIyNjguNjc0cHgiIHk9IjEwMi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+YXN5bW1ldHJpc2NoZTwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI2NS4zMjNweCIgeT0iMTE0LjkwM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+Vjx0c3BhbiB4PSIyNzIuNjY1cHggMjc5LjMzOXB4ICIgeT0iMTE0LjkwM3B4IDExNC45MDNweCAiPmVyPC90c3Bhbj5zY2hsw7xzc2VsdW5nPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJhc3ltbS4tR2VoZWltdGV4dDEiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjEzOS42NDkiIHk9IjE3My4xNjEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iMTQ0LjIzOXB4IiB5PSIxODkuMTI3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTExMDExMTwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0ibGF5ZXIxIj4KICAgIDwvZz4KPC9zdmc+Cg=="},65217:function(e,t,n){t.Z=n.p+"assets/images/hash-asymm-signature-verification-binary-cfadbaf94840ded97cee996d7fb8ec16.svg"}}]);