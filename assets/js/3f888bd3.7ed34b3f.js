"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[36620],{3239:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r="noLoginAlert_boZc",l=a(73727),i=a(71217),o=a(21314),c=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return T},Z:function(){return P}});var n=a(67294),r=a(3435),l={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},i=a(86010),o=a(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var t=e.value,a=t,r=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=l[i],a=""+t.replace(c,"")}return n.createElement("option",{value:t,className:r},a)},d=a(92814),u=a(51436),m=a(68949),p=a(72389),f=a(21314),k=a(74322),g=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),h=function(e){return l[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,a,r,o=(0,p.Z)(),c=n.useState("unchecked"),g=c[0],N=c[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};N(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),n.useEffect((function(){v.loaded&&y(v.value)}),[v,o]),o?v.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(s,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(a=v.legacyData)?void 0:a.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return y(v.value)},className:(0,i.default)(l[g],l.checkButton)},n.createElement(d.G,{icon:(r=g,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(k.Z,null):n.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return l[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,a=(0,f.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,l){return e.select?n.createElement("select",{key:l,onChange:function(e){return r(e.target.value,l)},value:t,className:b(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(s,{value:e,key:t})}))):n.createElement("input",{key:l,type:"text",onChange:function(e){return r(e.target.value,l)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(k.Z,null)})),w=a(83117),E=a(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(E.Z,(0,w.Z)({model:t},e))):n.createElement(k.Z,null)})),S=a(3239),C=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},B=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return C("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return C("use_current",t)}},"Nein (verwerfen)"))):null})),K=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=a(46858),_=a(78982),z=a(97762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,_.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,t)}}}:function(){}},P=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),a=(0,f.oR)("msalStore"),r=t.find(e.webKey),l=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,L(e)),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(S.Z,null),a.loggedIn&&n.createElement(B,e),a.loggedIn&&n.createElement(K,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(y,e)):n.createElement(k.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(86010),l="loader_2rVr",i="badge_2s0E",o=a(71217),c=a(92814),s=a(51436),d=(0,o.Pi)((function(){return n.createElement("div",{className:(0,r.default)(l)},n.createElement(c.G,{icon:s.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r="quillEditor_1XRF",l="quillAnswer_oQOS",i="monospace_3rFN",o="disableToolbar_gntN",c=a(86010),s=a(71217),d=a(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((function(e){var t=n.useState(!1),s=t[0],f=t[1],k=n.useState(!1),g=k[0],h=k[1],N=n.useRef(null),v=e.model,b=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,49115)))),Promise.all(n).then((function(t){u=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}a.register("modules/imageCompress",n),e()}))}((function(){t&&(h(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&g&&v.loaded?n.createElement("div",{onFocus:function(){return!s&&f(!0)},className:(0,c.default)(r)},n.createElement(u,{ref:N,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,c.default)(l,e.monospace&&i,s?void 0:o),value:v.text||"",onChange:function(t,a,n,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&v.canUpdate&&g&&v.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(d.Z,null)}))},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return l}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return l},cl:function(){return i}});var n=864e5,r=2592e6,l=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?a:i}return a}}var c=localStorage.getItem(e);return c?JSON.parse(c):a}catch(s){return a}},i=function(e,t){try{if(t){var a=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=l(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},93601:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(52084),o=["components"],c={title:"Blockchiffre"},s="Blockchiffre [^1]",d={unversionedId:"Kryptologie/Symmetrisch/blockchiffre",id:"Kryptologie/Symmetrisch/blockchiffre",title:"Blockchiffre",description:"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden Blockchiffren erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in Bl\xf6cken verschl\xfcsselt wird.",source:"@site/docs/Kryptologie/03-Symmetrisch/04-blockchiffre.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/blockchiffre",permalink:"/Kryptologie/Symmetrisch/blockchiffre",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/04-blockchiffre.md",tags:[],version:"current",lastUpdatedAt:1636412769,formattedLastUpdatedAt:"11/8/2021",sidebarPosition:4,frontMatter:{title:"Blockchiffre"},sidebar:"sidebar",previous:{title:"XOR-Verschl\xfcsselung",permalink:"/Kryptologie/Symmetrisch/xor"},next:{title:"Verkettung von Bl\xf6cken",permalink:"/Kryptologie/Symmetrisch/block-chaining"}},u=[{value:"Blockl\xe4nge",id:"blockl\xe4nge",children:[],level:2},{value:"Verschl\xfcsselung in Bl\xf6cken",id:"verschl\xfcsselung-in-bl\xf6cken",children:[],level:2}],m={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchiffre-"},"Blockchiffre ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden ",(0,l.kt)("strong",{parentName:"p"},"Blockchiffren")," erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in ",(0,l.kt)("strong",{parentName:"p"},"Bl\xf6cken")," verschl\xfcsselt wird."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aktuelle-verschl\xfcsselungsverfahren"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aktuelle Verschl\xfcsselungsverfahren")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Aktuelle Verschl\xfcsselungsverfahren sind so komplex, dass wir sie unm\xf6glich verstehen k\xf6nnen. Daher werden wir viele der nachfolgend erw\xe4hnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen."),(0,l.kt)("p",{parentName:"div"},"Beim Thema Blockchiffren wollen wir aber kurz eintauchen und uns anhand einer einfachen Verschl\xfcsselung (XOR) anschauen, wie moderne Verschl\xfcsselung funktioniert."))),(0,l.kt)("h2",{id:"blockl\xe4nge"},"Blockl\xe4nge"),(0,l.kt)("p",null,"Da der Klartext dreimal so lange ist wie der Schl\xfcssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschl\xfcsseln. Die Blockl\xe4nge entspricht also der Schl\xfcssell\xe4nge:"),(0,l.kt)("div",{style:{},className:"flex flex-flex"},(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em"},className:"item slim-table"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Klartext"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEIMESTREFFEN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"00111 00101 01000 00101 01001 01101 00101 10011 10100 10010 00101 00110 00110 00101 01110")))))),(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em"},className:"item slim-table"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"10000 00101 01110 10100 00001"))))))),(0,l.kt)("h2",{id:"verschl\xfcsselung-in-bl\xf6cken"},"Verschl\xfcsselung in Bl\xf6cken"),(0,l.kt)("p",null,"Im folgenden Beispiel wird der oben bereits erw\xe4hnte Klartext mit dem Schl\xfcssel bitweise mit XOR verschl\xfcsselt:"),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEI")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00111 00101 01000 00101 01001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"W FQH")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10111 00000 00110 10001 01000"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"MESTR")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"01101 00101 10011 10100 10010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},". . S")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"11101 00000 11101 00000 10011"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EFFEN")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00101 00110 00110 00101 01110"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UCHQO")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10101 00011 01000 10001 01111")))))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-xor-blockchiffre"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Blockchiffre")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den folgenden Text mit der XOR-Blockchiffre:"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Text"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PAKET ZUGESTELLT")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Schl\xfcssel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BETA")),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Codieren Sie zuerst den Text mit Pentacode (verwenden Sie das ",(0,l.kt)("a",{parentName:"li",href:"/Kryptologie/Symmetrisch/codierung#pentacode"},"interaktiven Tool"),")."),(0,l.kt)("li",{parentName:"ol"},"Codierenn Sie anschliessend den Schl\xfcssel mit Pentacode."),(0,l.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie den bin\xe4r dargestellten Text anschliessend mit dem bin\xe4r dargestellten Schl\xfcssel mittels XOR-Blockchiffre."),(0,l.kt)("li",{parentName:"ol"},"Decodieren Sie diesen wiederum mit Pentacode und \xfcberpr\xfcfen Sie die L\xf6sung.")),(0,l.kt)("h3",{parentName:"div",id:"vorgehenseweise"},"Vorgehenseweise"),(0,l.kt)(i.Z,{type:"text",webKey:"3bce79ec-5813-4d29-a7c5-3fec156bd472",monospace:!0,mdxType:"Answer"}),(0,l.kt)("h3",{parentName:"div",id:"l\xf6sung"},"L\xf6sung"),(0,l.kt)(i.Z,{type:"string",webKey:"773c8965-eecf-43fa-801f-d079fb81ad20",solution:"RD@DVENTE GUGIXU",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))),(0,l.kt)(i.Z,{type:"text",webKey:"bcdeeca1-2a54-4cf3-9187-849376053664",placeholder:"Notizen...",mdxType:"Answer"}),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=894637"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);