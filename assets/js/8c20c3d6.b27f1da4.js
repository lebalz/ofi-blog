"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[20519],{3239:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),d=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return P},Z:function(){return U}});var a=n(67294),r=n(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=n(86010),o=n(71217),d=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(d.test(t)){var l=function(e){if(d.test(e))return e.match(d).groups.klass}(t);r=i[l],n=""+t.replace(d,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),m=n(51436),s=n(68949),p=n(72389),g=n(21314),f=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),d=a.useState("unchecked"),f=d[0],N=d[1],h=(0,g.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&h.loaded&&(N("unchecked"),h.setData({value:t,type:"string"}))},b=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};N(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,s.U5)((function(){return h.loaded}),(function(e){e&&b(h.data.value)}))}),[]),a.useEffect((function(){h.loaded&&b(h.data.value)}),[o]),h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=h.legacyData)?void 0:t.value:h.data.value,className:k(h.data.value),disabled:!h.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=h.legacyData)?void 0:n.value:h.data.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(h.data.value)},className:(0,l.default)(i[f],i.checkButton)},a.createElement(u.G,{icon:(r=f,"correct"===r?m.f8k:"wrong"===r?m.nYk:m.sph)}))):a.createElement("div",null,"Loading...")})),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,g.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement("div",null,"Loading...")})),v=void 0,E=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),C=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}return t},w=(0,o.Pi)((function(e){var t=a.useState(!1),r=t[0],o=t[1],d=a.useState(!1),c=d[0],u=d[1],m=a.useRef(null),p=(0,g.oR)("documentStore").find(e.webKey),f=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(v)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){v=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(u(!0),m&&m.current&&m.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))})),function(){e=!1,m&&m.current&&m.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[]);return v&&c&&p.loaded?a.createElement("div",{onFocus:function(){return!r&&o(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(v,{ref:m,theme:"snow",readOnly:e.isLegacy||p.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,r?void 0:"disable-toolbar"),value:e.isLegacy?p.legacyData.value:p.value||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.isLegacy&&p.loaded&&c&&(0,s.z)((function(){p.value=i}))},modules:{toolbar:e.toolbar?C(e.toolbar):E,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),x=n(3239),S=function(e,t){"code"!==t.type&&"tdoc"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(w,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(b,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,o.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=n(46858),L=n(78982),z=n(97762),P=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,K.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},U=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return r&&i?((0,g.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,Z(e)),a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(_,e),n.loggedIn&&a.createElement(D,{webKey:e.webKey}),"text"===e.type&&a.createElement(w,e),"string"===e.type&&a.createElement(N,e),"array"===e.type&&a.createElement(b,e))):a.createElement("div",null,"Loading...")}))},67460:function(e,t,n){var a=n(51436),r=n(92814),i=n(86010),l=n(14842),o=n(67294),d={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},c={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=o.useState(void 0),u=a[0],m=a[1],s=o.useState("none"),p=s[0],g=s[1],f=o.useRef(null);return o.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return g("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),o.useEffect((function(){"none"!==p&&g("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",c[p]),disabled:"spin"===p,onClick:function(){if(null!==f.current){if("none"===p)return g("spin"),(0,l.SE)(f.current,n).then((function(e){m(e),g("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=u,e))]).then((function(){g("copied")})).catch((function(e){g("error"),console.warn(e)}))}catch(t){console.warn(t),g("error")}}}},o.createElement(r.G,{icon:d[p]})),o.createElement("div",{ref:f,className:"copy-container"},t))}},54416:function(e,t,n){n.d(t,{Vc:function(){return y},bF:function(){return E},H4:function(){return v},g7:function(){return h}});var a,r=n(86010),i=n(67294),l=n(67460),o="container_KevJ",d="input_1x8s",c="inputContainer_5LHV",u="active_3I31",m="interactive_RFFA",s="pixelEditor_2B_Y",p="row_1-gl",g="cell_JXwZ",f="off_2s44",k="on_1Vxn",N="actions_1bhD",h=function(e){return e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,"")},y=((a={})[" "]="00000",a.A="00001",a.B="00010",a.C="00011",a.D="00100",a.E="00101",a.F="00110",a.G="00111",a.H="01000",a.I="01001",a.J="01010",a.K="01011",a.L="01100",a.M="01101",a.N="01110",a.O="01111",a.P="10000",a.Q="10001",a.R="10010",a.S="10011",a.T="10100",a.U="10101",a.V="10110",a.W="10111",a.X="11000",a.Y="11001",a.Z="11010",a[","]="11011",a["-"]="11100",a["."]="11101",a["?"]="11110",a["@"]="11111",a["00000"]=" ",a["00001"]="A",a["00010"]="B",a["00011"]="C",a["00100"]="D",a["00101"]="E",a["00110"]="F",a["00111"]="G",a["01000"]="H",a["01001"]="I",a["01010"]="J",a["01011"]="K",a["01100"]="L",a["01101"]="M",a["01110"]="N",a["01111"]="O",a[1e4]="P",a[10001]="Q",a[10010]="R",a[10011]="S",a[10100]="T",a[10101]="U",a[10110]="V",a[10111]="W",a[11e3]="X",a[11001]="Y",a[11010]="Z",a[11011]=",",a[11100]="-",a[11101]=".",a[11110]="?",a[11111]="@",a),b=function(e,t){void 0===t&&(t=!0);for(var n=[],a=e.replace(/\s/g,"");a.length>0&&(!(a.length<5)||t);)n.push(a.slice(0,5)),a=a.slice(5);return n},v=function(){var e=i.useState(""),t=e[0],n=e[1],a=i.useState(""),l=a[0],m=a[1],s=i.useState("text"),p=s[0],g=s[1];return i.useEffect((function(){"text"===p&&m(function(e){return e.toUpperCase().split("").map((function(e){return y[e]||e}))}(t).join(" "))}),[t]),i.useEffect((function(){"penta"===p&&n(function(e){return b(e).map((function(e){return y[e]||e}))}(l).join(""))}),[l]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",o)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pentacode"),i.createElement("h4",null,"Klartext"),i.createElement("div",{className:c},i.createElement("textarea",{onFocus:function(){return g("text")},placeholder:"Klartext eingeben",className:(0,r.default)(d),value:t,onChange:function(e){return n(e.target.value.toUpperCase())},rows:5}),"text"===p&&i.createElement("div",{className:u})),i.createElement("h4",null,"Pentacode"),i.createElement("div",{className:c},i.createElement("textarea",{onFocus:function(){return g("penta")},placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(d),value:l,onChange:function(e){return m(e.target.value.replace(/[^01\s]/g,""))},rows:5}),"penta"===p&&i.createElement("div",{className:u}))))},E=function(){var e=i.useState("00000 00000 00000 00000 00000"),t=e[0],n=e[1],a=i.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),c=a[0],u=a[1],h=i.useState(""),y=h[0],v=h[1];return i.useEffect((function(){"cell"!==y?(v("editor"),u(b(t,!1).map((function(e){return e.split("").map((function(e){return Number.parseInt(e,2)}))})))):v("")}),[t]),i.useEffect((function(){"editor"!==y?(v("cell"),n(c.map((function(e){return e.join("")})).join(" "))):v("")}),[c]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",o)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),i.createElement("div",{className:m},i.createElement("div",{className:(0,r.default)(s)},i.createElement(l.Z,{options:{backgroundColor:"white",canvasWidth:50,canvasHeight:10*c.length}},i.createElement(i.Fragment,null,c.map((function(e,t){return i.createElement("div",{className:(0,r.default)(p),key:t},e.map((function(e,n){return i.createElement("span",{className:(0,r.default)(g,0===e?f:k),key:n,onClick:function(){var e,a=(e=[],c.forEach((function(t){var n=[];e.push(n),t.forEach((function(e){n.push(e)}))})),e);a[t][n]=1-a[t][n],u(a)}})})))})))),i.createElement("div",{className:N},i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return u([].concat(c,[[0,0,0,0,0]]))}},"+"),i.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:function(){return u([].concat(c.slice(0,-1)))}},"\uff0d"))),i.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(d),value:t,onChange:function(e){return n(e.target.value.replace(/[^01\s]/g,""))},rows:c.length}))))}},21314:function(e,t,n){n.d(t,{oR:function(){return l},ky:function(){return o}});var a=n(68949),r=n(67294),i=n(93812),l=function(e){return r.useContext(i.Nx)[e]},o=function(e,t,n,l,o,d){var c=r.useState(!1),u=c[0],m=c[1];r.useEffect((function(){i.Ux.documentStore.provideDocument(e,t,n,l,o,d).finally((function(){m(!0)}))}),[]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.userStore.currentView}),(function(a){u&&a&&!i.Ux.userStore.isMyView&&i.Ux.documentStore.provideDocument(e,t,n,l,o,d)}))}),[u]),r.useEffect((function(){return(0,a.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(a){u&&!a&&i.Ux.documentStore.provideDocument(e,t,n,l,o,d)}))}),[u])}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var d=localStorage.getItem(e);return d?JSON.parse(d):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},34210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return s},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(52084),o=n(54416),d=["components"],c={title:"Codierung"},u="Codierung",m={unversionedId:"Kryptologie/Symmetrisch/codierung",id:"version-24i/Kryptologie/Symmetrisch/codierung",isDocsHomePage:!1,title:"Codierung",description:"Pentacode",source:"@site/versioned_docs/version-24i/06-Kryptologie/03-Symmetrisch/02-codierung.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/codierung",permalink:"/24i/Kryptologie/Symmetrisch/codierung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/03-Symmetrisch/02-codierung.md",tags:[],version:"24i",sidebarPosition:2,frontMatter:{title:"Codierung"},sidebar:"version-24i/sidebar",previous:{title:"Umwandlung ins Bin\xe4rsystem",permalink:"/24i/Kryptologie/Symmetrisch/binaer"},next:{title:"XOR-Verschl\xfcsselung",permalink:"/24i/Kryptologie/Symmetrisch/xor"}},s=[{value:"Pentacode",id:"pentacode",children:[],level:2},{value:"Albhabet",id:"albhabet",children:[],level:2},{value:"Editor",id:"editor",children:[],level:2},{value:"Schwarzweiss-Bild",id:"schwarzweiss-bild",children:[],level:2}],p={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"codierung"},"Codierung"),(0,i.kt)("h2",{id:"pentacode"},"Pentacode"),(0,i.kt)("p",null,"Der Pentacode ist keine offizielle Codierung. Sie wurde von ",(0,i.kt)("a",{parentName:"p",href:"https://rothe.io/?b=crypto&p=1349"},"Stefan Rothe und Tom Jampen")," f\xfcr den Unterricht entwickelt, um erstens ein kurzes Alphabet ohne unn\xf6tige Zeichen zu verwenden und zweitens einen m\xf6glichst kurzen Bin\xe4rcode zu erhalten."),(0,i.kt)("h2",{id:"albhabet"},"Albhabet"),(0,i.kt)("div",{style:{gap:"2em"},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 2em))",className:"slim-table",classes:["slim-table"]},className:"item"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zahl"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bin\xe4r"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Leerschlag")),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"B")),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"D")),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E")),(0,i.kt)("td",{parentName:"tr",align:"right"},"5"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"F")),(0,i.kt)("td",{parentName:"tr",align:"right"},"6"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"G")),(0,i.kt)("td",{parentName:"tr",align:"right"},"7"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"00111"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"H")),(0,i.kt)("td",{parentName:"tr",align:"right"},"8"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"I")),(0,i.kt)("td",{parentName:"tr",align:"right"},"9"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"J")),(0,i.kt)("td",{parentName:"tr",align:"right"},"10"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"right"},"11"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"L")),(0,i.kt)("td",{parentName:"tr",align:"right"},"12"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"M")),(0,i.kt)("td",{parentName:"tr",align:"right"},"13"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N")),(0,i.kt)("td",{parentName:"tr",align:"right"},"14"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O")),(0,i.kt)("td",{parentName:"tr",align:"right"},"15"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01111")))))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 2em))",className:"slim-table",classes:["slim-table"]},className:"item"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Zahl"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bin\xe4r"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"right"},"16"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Q")),(0,i.kt)("td",{parentName:"tr",align:"right"},"17"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"R")),(0,i.kt)("td",{parentName:"tr",align:"right"},"18"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"right"},"19"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"right"},"20"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"U")),(0,i.kt)("td",{parentName:"tr",align:"right"},"21"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"V")),(0,i.kt)("td",{parentName:"tr",align:"right"},"22"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"W")),(0,i.kt)("td",{parentName:"tr",align:"right"},"23"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"10111"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"X")),(0,i.kt)("td",{parentName:"tr",align:"right"},"24"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Y")),(0,i.kt)("td",{parentName:"tr",align:"right"},"25"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Z")),(0,i.kt)("td",{parentName:"tr",align:"right"},"26"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},",")),(0,i.kt)("td",{parentName:"tr",align:"right"},"27"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"right"},"28"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".")),(0,i.kt)("td",{parentName:"tr",align:"right"},"29"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11101"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"?")),(0,i.kt)("td",{parentName:"tr",align:"right"},"30"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11110"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@")),(0,i.kt)("td",{parentName:"tr",align:"right"},"31"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11111"))))))),(0,i.kt)(l.Z,{type:"text",webKey:"fc6f5120-4883-4ac2-b7c4-528919c0ff87",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("h2",{id:"editor"},"Editor"),(0,i.kt)(o.H4,{mdxType:"TextEditor"}),(0,i.kt)("h2",{id:"schwarzweiss-bild"},"Schwarzweiss-Bild"),(0,i.kt)(o.bF,{mdxType:"PixelEditor"}),(0,i.kt)(l.Z,{type:"text",webKey:"7bd8c2e9-3ae4-4601-814f-2d2128040cdd",mdxType:"Answer"}))}g.isMDXComponent=!0}}]);