"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[35723],{3239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r="noLoginAlert_boZc",i=a(73727),l=a(71217),s=a(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return _},Z:function(){return V}});var n=a(67294),r=a(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=a(86010),s=a(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],a=""+t.replace(o,"")}return n.createElement("option",{value:t,className:r},a)},m=a(92814),u=a(51436),p=a(68949),d=a(72389),f=a(21314),g=a(74322),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,a,r,s=(0,d.Z)(),o=n.useState("unchecked"),k=o[0],N=o[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};N(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,p.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),n.useEffect((function(){v.loaded&&y(v.value)}),[v,s]),s?v.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(a=v.legacyData)?void 0:a.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(i[k],i.checkButton)},n.createElement(m.G,{icon:(r=k,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(g.Z,null):n.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t,a=(0,f.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(g.Z,null)})),w=a(87462),x=a(75552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(x.Z,(0,w.Z)({model:t},e))):n.createElement(g.Z,null)})),S=a(3239),R=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},K=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return R("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return R("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=a(46858),O=a(78982),C=a(97762),_=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,O.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,O.cl)(e.id,t)}}}:function(){}},V=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),a=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,d.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,L(e)),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(S.Z,null),a.loggedIn&&n.createElement(K,e),a.loggedIn&&n.createElement(z,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(y,e)):n.createElement(g.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),i="loader_2rVr",l=a(71217),s=a(92814),o=a(51436),c=(0,l.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(s.G,{icon:o.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge")},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r="quillAnswer_oQOS",i="monospace_3rFN",l=a(86010),s=a(71217),o=a(74322),c=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),u=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return t},p=(0,s.Pi)((function(e){var t=n.useState(!1),s=t[0],p=t[1],d=n.useState(!1),f=d[0],g=d[1],k=n.useRef(null),h=e.model,N=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),c)return e();var n=[Promise.all([a.e(97762),a.e(82930),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){c=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}a.register("modules/imageCompress",n),e()}))}((function(){t&&(g(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),e.toolbar),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return c&&f&&h.loaded?n.createElement("div",{onFocus:function(){return!s&&p(!0)}},n.createElement(c,{ref:k,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,l.default)(r,e.monospace&&i,s?void 0:"disable-toolbar"),value:h.text||"",onChange:function(t,a,n,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&h.canUpdate&&f&&h.setText(i)},modules:{toolbar:e.toolbar?u(e.toolbar):m,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(o.Z,null)}))},21314:function(e,t,a){a.d(t,{oR:function(){return l},ky:function(){return s},RN:function(){return o}});var n=a(68949),r=a(67294),i=a(52182),l=function(e){return r.useContext(i.Nx)[e]},s=function(e,t,a,l,s,o){var c=r.useState(!1),m=c[0],u=c[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e(),t,a,l,s,o).finally((function(){u(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.userStore.currentView}),(function(n){m&&n&&i.Ux.documentStore.provideDocument(e(),t,a,l,s,o,!0)}))}),[m]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(n){m&&!n&&i.Ux.documentStore.provideDocument(e(),t,a,l,s,o,!0)}))}),[m])},o=function(e){var t=r.useState(!1),a=t[0],l=t[1];r.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.userStore.currentView}),(function(t,n){a&&t&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a]),r.useEffect((function(){return(0,n.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(t,n){a&&!t&&n&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a])}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return i}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return i},cl:function(){return l}});var n=864e5,r=2592e6,i=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?a:l}return a}}var o=localStorage.getItem(e);return o?JSON.parse(o):a}catch(c){return a}},l=function(e,t){try{if(t){var a=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=i(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},95700:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(52084),s=["components"],o={title:"XOR-Verschl\xfcsselung"},c="XOR-Verschl\xfcsselung [^1]",m={unversionedId:"Kryptologie/Symmetrisch/xor",id:"version-24K/Kryptologie/Symmetrisch/xor",isDocsHomePage:!1,title:"XOR-Verschl\xfcsselung",description:"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen 0 und 1 zur Verf\xfcgung stehen.",source:"@site/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/03-xor.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/xor",permalink:"/24K/Kryptologie/Symmetrisch/xor",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/03-Symmetrisch/03-xor.md",tags:[],version:"24K",sidebarPosition:3,frontMatter:{title:"XOR-Verschl\xfcsselung"},sidebar:"version-24K/sidebar",previous:{title:"Codierung",permalink:"/24K/Kryptologie/Symmetrisch/codierung"},next:{title:"Blockchiffre",permalink:"/24K/Kryptologie/Symmetrisch/blockchiffre"}},u=[],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xor-verschl\xfcsselung-"},"XOR-Verschl\xfcsselung ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," zur Verf\xfcgung stehen."),(0,i.kt)("p",null,"Nebst den bekannten Operationen,  ",(0,i.kt)("em",{parentName:"p"},"Addition, SUbtraktion, Multiplikation und Division"),", kann ein Computer auch noch weitere Operationen auf zwei Bin\xe4rzahlen anwenden. Eine solche Operation ist das ",(0,i.kt)("strong",{parentName:"p"},"XOR")," (",(0,i.kt)("em",{parentName:"p"},"Exclusive OR"),"):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Exclusive or or exclusive disjunction is a logical operation that is 1 if and only if its arguments differ (one is 1, the other is 0).",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("p",null,"XOR kann auch zur Verschl\xfcsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schl\xfcssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes."),(0,i.kt)("p",null,"Die Wahrheitstabelle sieht folgendermassen aus:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"13em",className:"slim-table;normal-header",classes:["slim-table","normal-header"]},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h3",{parentName:"div",id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"p")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"k")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"c")," = ",(0,i.kt)("em",{parentName:"th"},"p")," ",(0,i.kt)("strong",{parentName:"th"},"XOR")," ",(0,i.kt)("em",{parentName:"th"},"k")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"p"),": ",(0,i.kt)("em",{parentName:"p"},"plain text")," (Klartext) ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"k"),": ",(0,i.kt)("em",{parentName:"p"},"key")," (Schl\xfcssel) ",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"c"),": ",(0,i.kt)("em",{parentName:"p"},"cipher")," (Verschl\xfcsselt)"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"13em",className:"slim-table;normal-header",classes:["slim-table","normal-header"]},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h3",{parentName:"div",id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"c")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"k")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("em",{parentName:"th"},"p")," = ",(0,i.kt)("em",{parentName:"th"},"c")," ",(0,i.kt)("strong",{parentName:"th"},"XOR")," ",(0,i.kt)("em",{parentName:"th"},"k")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1"))))))),(0,i.kt)("p",null,"Analog zu ROT13 gilt auch hier: Die Verschl\xfcsselung ist identisch mit der Entschl\xfcsselung, da Folgendes gilt:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"c"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"p"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,i.kt)("mi",{parentName:"mrow"},"k"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ c \\text{ XOR } k = (p \\text{ XOR } k) \\text{ XOR } k = p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"),(0,i.kt)("span",{parentName:"span",className:"mord text"},(0,i.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,i.kt)("p",null,"Dies k\xf6nnen Sie mit den Tabellen oben leicht \xfcberpr\xfcfen."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-xor-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie die Bitfolge mit dem angegebenen Schl\xfcssel"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"10100 11101 10110")," (Bitfolge des Klartexts)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"00101 01010 11100")," (Bitfolge des Schl\xfcssels)")),(0,i.kt)("h3",{parentName:"div",id:"bitfolge-des-geheimtexts"},"Bitfolge des Geheimtexts"),(0,i.kt)(l.Z,{type:"string",webKey:"79c55c56-7d5f-4c7f-95d3-38aed13e16ad",solution:"100011011101010",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-textverschl\xfcsselung-mit-xor"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Textverschl\xfcsselung mit XOR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sie erhalten von einer Kollegin folgende verschl\xfcsselte Nachricht:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"01010 00100 01010 11011 00000\n")),(0,i.kt)("p",{parentName:"div"},"Als Schl\xfcssel haben Sie das Wort ",(0,i.kt)("inlineCode",{parentName:"p"},"MACHT")," abgemacht."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mit Pentacode codierter Schl\xfcssel  "),(0,i.kt)(l.Z,{type:"string",webKey:"4159b846-71e5-4205-9907-975e3092c00c",solution:"01101 00001 00011 01000 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bin\xe4r entschl\xfcsselte Nachricht"),(0,i.kt)(l.Z,{type:"string",webKey:"c4e4f353-6f68-454a-b0ee-ac23695e61c5",solution:"00111 00101 01001 10011 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Klartext (bin\xe4r entschl\xfcsselte Bitfolge mit Pentacode zur\xfcckverwandeln)"),(0,i.kt)(l.Z,{type:"string",webKey:"bd96e44e-96a7-404e-8d55-ed7007e1309a",solution:"GEIST",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-bildverschl\xfcsselung-mit-xor"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Bildverschl\xfcsselung mit XOR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Zeichnen Sie ein 5x5-Pixel-Bild (mit Hilfe des interaktiven Tools auf der vorherigen Seite: Kopieren Sie das Bild und f\xfcgen es unten ein. Halten Sie auch die Bitfolge fest)"),(0,i.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie die Bitfolge mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"li"},"ABCDE"),"."),(0,i.kt)("li",{parentName:"ol"},"Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest)."),(0,i.kt)("li",{parentName:"ol"},"Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?")),(0,i.kt)(l.Z,{type:"text",webKey:"87a642b5-0a0b-4da3-a808-a4629294f359",mdxType:"Answer"}))),(0,i.kt)(l.Z,{type:"text",webKey:"b978535b-b455-4a60-aa44-8a32aac4a899",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=353789"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"http://mathworld.wolfram.com/XOR.html"},"Germundsson, Roger; Weisstein, Eric"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);