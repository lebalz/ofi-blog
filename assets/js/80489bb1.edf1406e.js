"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[19229],{3239:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r="noLoginAlert_boZc",s=a(73727),i=a(71217),l=a(21314),c=(0,i.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(s.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return Z},Z:function(){return C}});var n=a(67294),r=a(26528),s={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},i=a(86010),l=a(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),m=function(e){var t=e.value,a=t,r=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=s[i],a=""+t.replace(c,"")}return n.createElement("option",{value:t,className:r},a)},o=a(92814),u=a(51436),p=a(68949),d=a(72389),g=a(21314),h=a(74322),N=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return s[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},f=(0,l.Pi)((function(e){var t,a,r,l=(0,d.Z)(),c=n.useState("unchecked"),N=c[0],f=c[1],y=(0,g.oR)("documentStore").find(e.webKey),v=function(t){!e.isLegacy&&y.loaded&&(f("unchecked"),y.setData({value:t,type:"string"}))},b=function(t){if(e.checker)return f(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};f(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,p.U5)((function(){return y.loaded}),(function(e){e&&b(y.value)}))}),[y]),n.useEffect((function(){y.loaded&&b(y.value)}),[y,l]),l?y.loaded?n.createElement("div",{className:s.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:k(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(m,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:e.isLegacy?null==(a=y.legacyData)?void 0:a.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return b(y.value)},className:(0,i.default)(s[N],s.checkButton)},n.createElement(o.G,{icon:(r=N,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(h.Z,null):n.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return s[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},b=(0,l.Pi)((function(e){var t,a=(0,g.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:s.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,s){return e.select?n.createElement("select",{key:s,onChange:function(e){return r(e.target.value,s)},value:t,className:v(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(m,{value:e,key:t})}))):n.createElement("input",{key:s,type:"text",onChange:function(e){return r(e.target.value,s)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(h.Z,null)})),w=a(87462),M=a(75552),x=(0,l.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(M.Z,(0,w.Z)({model:t},e))):n.createElement(h.Z,null)})),E=a(3239),D=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,p.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},L=(0,l.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(f,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(b,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",t)}},"Nein (verwerfen)"))):null})),I=(0,l.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=a(46858),T=a(78982),z=a(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=function(e){if(!e.id)return function(){};var t=function(){try{return(0,S.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,T.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,T.cl)(e.id,t)}}}:function(){}},C=(0,l.Pi)((function(e){var t=(0,g.oR)("documentStore"),a=(0,g.oR)("msalStore"),r=t.find(e.webKey),s=(0,d.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,j(e)),s?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(E.Z,null),a.loggedIn&&n.createElement(L,e),a.loggedIn&&n.createElement(I,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(b,e)):n.createElement(h.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(86010),s="loader_2rVr",i=a(71217),l=a(92814),c=a(51436),m=(0,i.Pi)((function(){return n.createElement("div",{className:(0,r.default)(s)},n.createElement(l.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge")},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r="quillAnswer_oQOS",s="monospace_3rFN",i=a(86010),l=a(71217),c=a(74322),m=void 0,o=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),u=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var s=[];e.ol&&s.push({list:"ordered"}),e.ul&&s.push({list:"bullet"}),t.push(s)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return t},p=(0,l.Pi)((function(e){var t=n.useState(!1),l=t[0],p=t[1],d=n.useState(!1),g=d[0],h=d[1],N=n.useRef(null),k=e.model,f=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var n=[Promise.all([a.e(97762),a.e(82930),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){m=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var s=t[r.katex].default;window.katex=s}a.register("modules/imageCompress",n),e()}))}((function(){t&&(h(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))}),e.toolbar),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[e]);return m&&g&&k.loaded?n.createElement("div",{onFocus:function(){return!l&&p(!0)}},n.createElement(m,{ref:N,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,i.default)(r,e.monospace&&s,l?void 0:"disable-toolbar"),value:k.text||"",onChange:function(t,a,n,r){var s,i;s=t,void 0===i&&(i=0),!e.readonly&&k.canUpdate&&g&&k.setText(s)},modules:{toolbar:e.toolbar?u(e.toolbar):o,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(c.Z,null)}))},21314:function(e,t,a){a.d(t,{oR:function(){return i},ky:function(){return l},RN:function(){return c}});var n=a(68949),r=a(67294),s=a(52182),i=function(e){return r.useContext(s.Nx)[e]},l=function(e,t,a,i,l,c){var m=r.useState(!1),o=m[0],u=m[1];r.useEffect((function(){s.Ux.documentStore.provideDocument(e(),t,a,i,l,c).finally((function(){u(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return s.Ux.userStore.currentView}),(function(n){o&&n&&s.Ux.documentStore.provideDocument(e(),t,a,i,l,c,!0)}))}),[o]),r.useEffect((function(){return(0,n.U5)((function(){return s.Ux.msalStore.isApiOffline}),(function(n){o&&!n&&s.Ux.documentStore.provideDocument(e(),t,a,i,l,c,!0)}))}),[o])},c=function(e){var t=r.useState(!1),a=t[0],i=t[1];r.useEffect((function(){s.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){i(!0)}))}),[]),r.useEffect((function(){return(0,n.U5)((function(){return s.Ux.userStore.currentView}),(function(t,n){a&&t&&s.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a]),r.useEffect((function(){return(0,n.U5)((function(){return s.Ux.msalStore.isApiOffline}),(function(t,n){a&&!t&&n&&s.Ux.timedTopicStore.provideTopic(e,!0)}))}),[a])}},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return s}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},s=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return s},cl:function(){return i}});var n=864e5,r=2592e6,s=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&l()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var s=JSON.parse(r);if("object"==typeof s){var i=s[e];return void 0===i?a:i}return a}}var c=localStorage.getItem(e);return c?JSON.parse(c):a}catch(m){return a}},i=function(e,t){try{if(t){var a=s(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},l=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=s(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},68130:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(84384),l=a(52084),c=["components"],m={title:"Begriffe"},o="Begriffe",u={unversionedId:"Kryptologie/Anitke/Begriff",id:"version-24K/Kryptologie/Anitke/Begriff",isDocsHomePage:!1,title:"Begriffe",description:"Kryptologie",source:"@site/versioned_docs/version-24K/06-Kryptologie/02-Anitke/05-Begriff.md",sourceDirName:"06-Kryptologie/02-Anitke",slug:"/Kryptologie/Anitke/Begriff",permalink:"/24K/Kryptologie/Anitke/Begriff",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/06-Kryptologie/02-Anitke/05-Begriff.md",tags:[],version:"24K",sidebarPosition:5,frontMatter:{title:"Begriffe"},sidebar:"version-24K/sidebar",previous:{title:"Substitution",permalink:"/24K/Kryptologie/Anitke/substitution"},next:{title:"H\xe4ufigkeitsanalyse",permalink:"/24K/Kryptologie/Anitke/frequency-analysis"}},p=[{value:"Kryptologie",id:"kryptologie",children:[],level:2},{value:"Kryptographie und Kryptoanalyse",id:"kryptographie-und-kryptoanalyse",children:[],level:2},{value:"Klartext, Geheimtext und Schl\xfcssel",id:"klartext-geheimtext-und-schl\xfcssel",children:[],level:2},{value:"Verschl\xfcsselungsverfahren",id:"verschl\xfcsselungsverfahren",children:[],level:2},{value:"Schl\xfcsselraum",id:"schl\xfcsselraum",children:[],level:2}],d={toc:p};function g(e){var t=e.components,m=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},d,m,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"begriffe"},"Begriffe"),(0,s.kt)("h2",{id:"kryptologie"},"Kryptologie"),(0,s.kt)("p",null,"Der Begriff ",(0,s.kt)("strong",{parentName:"p"},"Kryptologie")," setzt sich zusammen aus dem altgriechischen ",(0,s.kt)("em",{parentName:"p"},"\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2")," (also ",(0,s.kt)("em",{parentName:"p"},"krypt\xf3s"),"), was ",(0,s.kt)("strong",{parentName:"p"},"verborgen")," bedeutet, und ",(0,s.kt)("em",{parentName:"p"},"\u03bb\u03cc\u03b3\u03bf\u03c2")," (also ",(0,s.kt)("em",{parentName:"p"},"l\xf3gos"),"), was ",(0,s.kt)("strong",{parentName:"p"},"Lehre"),", ",(0,s.kt)("strong",{parentName:"p"},"Kunde")," bedeutet. Kryptologie bezeichnet die Wissenschaft, die sich mit der Ver- und Entschl\xfcsselung von Informationen (also mit ",(0,s.kt)("strong",{parentName:"p"},"Informationssicherheit"),") besch\xe4ftigt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(i.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Kryptologie, Kryptographie und Kryptoanalyse",options:{},isInline:!1,src:a(28490).Z,alt:"Kryptologie, Kryptographie und Kryptoanalyse",mdxType:"Image"})),(0,s.kt)("h2",{id:"kryptographie-und-kryptoanalyse"},"Kryptographie und Kryptoanalyse"),(0,s.kt)("p",null,"Die Kryptologie kann grob in zwei Teilbereiche unterteilt werden:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"die Kryptographie (",(0,s.kt)("em",{parentName:"li"},"\u03b3\u03c1\u03ac\u03c6\u03b5\u03b9\u03bd"),", also ",(0,s.kt)("em",{parentName:"li"},"gr\xe1phein"),", was ",(0,s.kt)("strong",{parentName:"li"},"schreiben")," bedeutet) und"),(0,s.kt)("li",{parentName:"ul"},"die ",(0,s.kt)("strong",{parentName:"li"},"Kryptoanalyse"),".")),(0,s.kt)("p",null,"W\xe4hrend sich die Kryptographie mit dem Finden von sicheren Verschl\xfcsselungsverfahren besch\xe4ftigt, liegt der Fokus der Kryptoanalyse beim \xabBrechen\xbb oder \xabKnacken\xbb solcher Verfahren."),(0,s.kt)("h2",{id:"klartext-geheimtext-und-schl\xfcssel"},"Klartext, Geheimtext und Schl\xfcssel"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Symbol"),(0,s.kt)("th",{parentName:"tr",align:"left"},"deutscher Begriff"),(0,s.kt)("th",{parentName:"tr",align:"left"},"englischer Begriff"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Klartext")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"plaintext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"unverschl\xfcsselte Nachricht")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Geheimtext")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"ciphertext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"verschl\xfcsselte Nachricht")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("span",{parentName:"td",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Schl\xfcssel")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"key")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Information, welche ben\xf6tigt wird, um den Klartext zu ver- bzw. den Geheimtext zu entschl\xfcsseln")))),(0,s.kt)("h2",{id:"verschl\xfcsselungsverfahren"},"Verschl\xfcsselungsverfahren"),(0,s.kt)("p",null,"Ein ",(0,s.kt)("strong",{parentName:"p"},"Verschl\xfcsselungsverfahren")," ist ein Algorithmus, welcher einen Klartext unter Verwendung eines Schl\xfcssels in einen Geheimtext \xfcberf\xfchrt oder umgekehrt."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(i.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0  ",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",options:{},isInline:!1,src:a(11840).Z,alt:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",mdxType:"Image"})),(0,s.kt)("h2",{id:"schl\xfcsselraum"},"Schl\xfcsselraum"),(0,s.kt)("p",null,"Der Begriff ",(0,s.kt)("em",{parentName:"p"},"Schl\xfcsselraum")," bezeichnet die Anzahl m\xf6glicher Schl\xfcssel f\xfcr ein bestimmtes Verschl\xfcsselungsverfahren. Die Sicherheit eines Verschl\xfcsselungsverfahrens h\xe4ngt stark von der Gr\xf6sse des Schl\xfcsselraums ab."),(0,s.kt)("p",null,"Die Gr\xf6sse des Schl\xfcsselraums wird in bit (d.h. als bin\xe4rer Logarithmus) angegeben. Bei zwei m\xf6glichen Schl\xfcsseln (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"1"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))))))),") spricht man von 1 bit, bei 1024 m\xf6glichen Schl\xfcsseln (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))))))))))),") von 10 bit."),(0,s.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"schl\xfcsselr\xe4ume"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,s.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselr\xe4ume")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Geben Sie die Gr\xf6sse des Schl\xfcsselraumes f\xfcr die folgenden Verschl\xfcsselungsverfahren an:"),(0,s.kt)("h4",{parentName:"div",id:"skytale"},"Skytale"),(0,s.kt)(l.Z,{type:"text",id:"q1",webKey:"0b1ab3e2-40ff-4209-8451-b53acf3ff24f",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"caesar"},"Caesar"),(0,s.kt)(l.Z,{type:"text",id:"q2",webKey:"fa51f7d3-35fa-4d7f-beb9-b089012eeec2",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"rot13"},"ROT13"),(0,s.kt)(l.Z,{type:"text",id:"q3",webKey:"e10e6d11-13d4-47b3-b940-7bb7860fdaf6",mdxType:"Answer"}),(0,s.kt)("h4",{parentName:"div",id:"substitution"},"Substitution"),(0,s.kt)("p",{parentName:"div"},"allgemeine monoalphabetische Substitution"),(0,s.kt)(l.Z,{type:"text",id:"q4",webKey:"87f42c57-7331-42b6-a77c-e7aa23d4cebe",mdxType:"Answer"}))),(0,s.kt)("hr",null))}g.isMDXComponent=!0},28490:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQwMHB4IiBoZWlnaHQ9IjE1MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNMjY0LDIzLjg4QzI2NCwxOS40NjUgMjYwLjQxNSwxNS44OCAyNTYsMTUuODhMMTQ0LDE1Ljg4QzEzOS41ODUsMTUuODggMTM2LDE5LjQ2NSAxMzYsMjMuODhMMTM2LDM5Ljg4QzEzNiw0NC4yOTYgMTM5LjU4NSw0Ny44OCAxNDQsNDcuODhMMjU2LDQ3Ljg4QzI2MC40MTUsNDcuODggMjY0LDQ0LjI5NiAyNjQsMzkuODhMMjY0LDIzLjg4WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjE2OS43OTJweCIgeT0iMzQuOTEzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9sb2dpZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0xNDUuODA5LDExMC4xMkMxNDUuODA5LDEwNS43MDQgMTQyLjIyNCwxMDIuMTIgMTM3LjgwOSwxMDIuMTJMMjUuODA5LDEwMi4xMkMyMS4zOTMsMTAyLjEyIDE3LjgwOSwxMDUuNzA0IDE3LjgwOSwxMTAuMTJMMTcuODA5LDEyNi4xMkMxNy44MDksMTMwLjUzNSAyMS4zOTMsMTM0LjEyIDI1LjgwOSwxMzQuMTJMMTM3LjgwOSwxMzQuMTJDMTQyLjIyNCwxMzQuMTIgMTQ1LjgwOSwxMzAuNTM1IDE0NS44MDksMTI2LjEyTDE0NS44MDksMTEwLjEyWiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjQ0LjI2MnB4IiB5PSIxMjEuMTUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9ncmFwaGllPC90ZXh0PgogICAgPHBhdGggZD0iTTM4Mi4xOTEsMTEwLjEyQzM4Mi4xOTEsMTA1LjcwNCAzNzguNjA3LDEwMi4xMiAzNzQuMTkxLDEwMi4xMkwyNjIuMTkxLDEwMi4xMkMyNTcuNzc2LDEwMi4xMiAyNTQuMTkxLDEwNS43MDQgMjU0LjE5MSwxMTAuMTJMMjU0LjE5MSwxMjYuMTJDMjU0LjE5MSwxMzAuNTM1IDI1Ny43NzYsMTM0LjEyIDI2Mi4xOTEsMTM0LjEyTDM3NC4xOTEsMTM0LjEyQzM3OC42MDcsMTM0LjEyIDM4Mi4xOTEsMTMwLjUzNSAzODIuMTkxLDEyNi4xMkwzODIuMTkxLDExMC4xMloiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIyNzkuOThweCIgeT0iMTIxLjE1MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+S3J5cHRvYW5hbHlzZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0yMDAsNDcuODhMODEuODA5LDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgogICAgPHBhdGggZD0iTTIwMCw0Ny44OEwzMTguMTkxLDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgo8L3N2Zz4K"},11840:function(e,t,a){t.Z=a.p+"assets/images/symmetric-cryptosystem-c7b53ba8f9d7e2e0c03614b4dacdcf54.svg"}}]);