"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[85790],{3239:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(67294),s="noLoginAlert_boZc",r=t(73727),l=t(71217),m=t(21314),i=(0,l.Pi)((function(){return(0,m.oR)("msalStore").loggedIn?null:n.createElement("div",{className:s},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,a,t){t.d(a,{x:function(){return Z},Z:function(){return A}});var n=t(67294),s=t(3435),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=t(86010),m=t(71217),i=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),p=function(e){var a=e.value,t=a,s=void 0;if(i.test(a)){var l=function(e){if(i.test(e))return e.match(i).groups.klass}(a);s=r[l],t=""+a.replace(i,"")}return n.createElement("option",{value:a,className:s},t)},c=t(92814),o=t(51436),u=t(68949),N=t(72389),d=t(21314),h=t(74322),k=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,m.Pi)((function(e){var a,t,s,m=(0,N.Z)(),i=n.useState("unchecked"),k=i[0],y=i[1],f=(0,d.oR)("documentStore").find(e.webKey),b=function(a){!e.isLegacy&&f.loaded&&(y("unchecked"),f.setData({value:a,type:"string"}))},w=function(a){if(e.checker)return y(e.checker(a)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};y(t(a)===t(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,u.U5)((function(){return f.loaded}),(function(e){e&&w(f.value)}))}),[f]),n.useEffect((function(){f.loaded&&w(f.value)}),[f,m]),m?f.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(a=f.legacyData)?void 0:a.value:f.value,className:g(f.value),disabled:!f.loaded||e.isLegacy},e.select.map((function(e,a){return n.createElement(p,{value:e,key:a})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(t=f.legacyData)?void 0:t.value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return w(f.value)},className:(0,l.default)(r[k],r.checkButton)},n.createElement(c.G,{icon:(s=k,"correct"===s?o.f8k:"wrong"===s?o.nYk:o.sph)}))):n.createElement(h.Z,null):n.createElement("div",null,"SSR")})),f=(0,s.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},w=(0,m.Pi)((function(e){var a,t=(0,d.oR)("documentStore").find(e.webKey),s=function(a,n){if(void 0===n&&(n=0),!e.isLegacy&&t.loaded){var s=[].concat(t.data.value.slice(0,n),[a],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:s}))}};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(a=t.legacyData)?void 0:a.value)||[]:t.data.value).map((function(a,r){return e.select?n.createElement("select",{key:r,onChange:function(e){return s(e.target.value,r)},value:a,className:b(a),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,a){return n.createElement(p,{value:e,key:a})}))):n.createElement("input",{key:r,type:"text",onChange:function(e){return s(e.target.value,r)},value:a,disabled:!t.loaded||t.readonly})}))):n.createElement(h.Z,null)})),v=t(83117),M=t(75552),x=(0,m.Pi)((function(e){var a=(0,d.oR)("documentStore").find(e.webKey);return a.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(M.Z,(0,v.Z)({model:a},e))):n.createElement(h.Z,null)})),E=t(3239),L=function(e,a){"code"!==a.type&&("use_legacy"===e?(a.setData(a.legacyData),a.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,u.z)((function(){a.legacyData=void 0,a.legacyCleanup&&a.legacyCleanup()}))}))):(0,u.z)((function(){a.legacyData=void 0,a.legacyCleanup&&a.legacyCleanup()})))},D=(0,m.Pi)((function(e){var a=(0,d.oR)("documentStore").find(e.webKey);return a.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===a.type&&n.createElement(x,{type:"text",webKey:a.webKey,isLegacy:!0}),"string"===a.type&&n.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===a.type&&n.createElement(w,{type:"array",webKey:e.webKey,size:a.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return L("use_legacy",a)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return L("use_current",a)}},"Nein (verwerfen)"))):null})),I=(0,m.Pi)((function(e){return(0,d.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=t(46858),S=t(78982),T=t(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=function(e){if(!e.id)return function(){};var a=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,S.rV)(e.id,a);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,S.cl)(e.id,a)}}}:function(){}},A=(0,m.Pi)((function(e){var a=(0,d.oR)("documentStore"),t=(0,d.oR)("msalStore"),s=a.find(e.webKey),r=(0,N.Z)();return(0,d.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||T.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,j(e)),r?s?n.createElement("div",{"data--web-key":e.webKey},n.createElement(E.Z,null),t.loggedIn&&n.createElement(D,e),t.loggedIn&&n.createElement(I,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(y,e),"array"===e.type&&n.createElement(w,e)):n.createElement(h.Z,null):n.createElement("div",null,"SSR")}))},61014:function(e,a,t){var n=t(72389),s=t(71217),r=t(67294),l=t(21314),m=t(74322),i=t(31173),p=t(86010),c=t(86720),o=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},r.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},u=(0,s.Pi)((function(e){var a=(0,l.oR)("policyStore"),t=(0,l.oR)("userStore"),s=(0,n.Z)();if((0,l.aV)(e.webKey),!s)return r.createElement("div",null,"SSR");var u=a.find(e.webKey);return u?r.createElement("div",{"data--web-key":e.webKey,className:(0,p.default)(c.Z.wrapper,"solution-wrapper")},u.show||t.current.admin?r.createElement(i.Z,{summary:r.createElement("summary",null,e.title||"L\xf6sung"," ",r.createElement(o,null),!u.show&&r.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,p.default)("alert alert--success",c.Z.solution),open:e.open},e.children):r.createElement("div",{className:(0,p.default)("alert",c.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",r.createElement(o,null))):r.createElement(m.Z,null)}));a.Z=u},74322:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(67294),s=t(86010),r="loader_2rVr",l="badge_2s0E",m=t(71217),i=t(92814),p=t(51436),c=(0,m.Pi)((function(){return n.createElement("div",{className:(0,s.default)(r)},n.createElement(i.G,{icon:p.IJ7,spin:!0}),n.createElement("span",{className:(0,s.default)("badge",l)},"Laden..."))}))},75552:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(67294),s="quillEditor_1XRF",r="quillAnswer_oQOS",l="monospace_3rFN",m="disableToolbar_gntN",i=t(86010),p=t(71217),c=t(74322),o=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),N=function(e){var a=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),a.push(t)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),a.push(n)}if(e.color||e.background){var s=[];e.color&&s.push({color:[]}),e.background&&s.push({background:[]}),a.push(s)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),a.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),a.push(l)}return e.code&&a.push(["code-block"]),a},d=(0,p.Pi)((function(e){var a=n.useState(!1),p=a[0],d=a[1],h=n.useState(!1),k=h[0],g=h[1],y=n.useRef(null),f=e.model,b=function(e){e.preventDefault()};n.useEffect((function(){var a=!0;return function(e,a){if(void 0===a&&(a={}),o)return e();var n=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940))],s={"react-quill":0,quill:1,"react-image-compress":2};a.formula&&!window.katex&&(s.katex=n.length,n.push(t.e(41008).then(t.bind(t,41008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,49115)))),Promise.all(n).then((function(a){o=a[s["react-quill"]].default;var t=a[s.quill].default,n=a[s["react-image-compress"]].default;if("katex"in s){var r=a[s.katex].default;window.katex=r}t.register("modules/imageCompress",n),e()}))}((function(){a&&(g(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){a=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return o&&k&&f.loaded?n.createElement("div",{onFocus:function(){return!p&&d(!0)},className:(0,i.default)(s)},n.createElement(o,{ref:y,theme:"snow",readOnly:e.readonly||f.readonly,className:(0,i.default)(r,e.monospace&&l,p?void 0:m),value:f.text||"",onChange:function(a,t,n,s){var r,l;r=a,void 0===l&&(l=0),!e.readonly&&f.canUpdate&&k&&f.setText(r)},modules:{toolbar:e.toolbar?N(e.toolbar):[].concat(u,N(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(c.Z,null)}))},46858:function(e,a,t){t.d(a,{Vx:function(){return s},Vj:function(){return n},ly:function(){return r}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},s=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,a,t){t.d(a,{rV:function(){return r},cl:function(){return l}});var n=864e5,s=2592e6,r=function(e,a,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&m()}catch(a){return}}(),a){var s=localStorage.getItem(a);if(s){var r=JSON.parse(s);if("object"==typeof r){var l=r[e];return void 0===l?t:l}return t}}var i=localStorage.getItem(e);return i?JSON.parse(i):t}catch(p){return t}},l=function(e,a){try{if(a){var t=r(a,void 0,{expiry:Date.now()+s});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(a,JSON.stringify(t))}localStorage.removeItem(e)}catch(n){return}},m=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(a){var t=r(a,void 0,{expiry:e+s});t.expiry&&t.expiry>e&&localStorage.removeItem(a)})),localStorage.setItem("last_cleanup",""+e)}catch(a){return}}},20879:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return N},default:function(){return h}});var n=t(83117),s=t(80102),r=(t(67294),t(3905)),l=t(84384),m=t(52084),i=t(61014),p=["components"],c={title:"Begriffe"},o="Begriffe",u={unversionedId:"Kryptologie/Antike/Begriff",id:"version-24i/Kryptologie/Antike/Begriff",title:"Begriffe",description:"Kryptologie",source:"@site/versioned_docs/version-24i/06-Kryptologie/02-Antike/05-Begriff.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Begriff",permalink:"/24i/Kryptologie/Antike/Begriff",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/02-Antike/05-Begriff.md",tags:[],version:"24i",sidebarPosition:5,frontMatter:{title:"Begriffe"},sidebar:"version-24i/sidebar",previous:{title:"Substitution",permalink:"/24i/Kryptologie/Antike/substitution"},next:{title:"H\xe4ufigkeitsanalyse",permalink:"/24i/Kryptologie/Antike/frequency-analysis"}},N=[{value:"Kryptologie",id:"kryptologie",children:[],level:2},{value:"Kryptographie und Kryptoanalyse",id:"kryptographie-und-kryptoanalyse",children:[],level:2},{value:"Klartext, Geheimtext und Schl\xfcssel",id:"klartext-geheimtext-und-schl\xfcssel",children:[],level:2},{value:"Verschl\xfcsselungsverfahren",id:"verschl\xfcsselungsverfahren",children:[],level:2},{value:"Schl\xfcsselraum",id:"schl\xfcsselraum",children:[],level:2}],d={toc:N};function h(e){var a=e.components,c=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,c,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"begriffe"},"Begriffe"),(0,r.kt)("h2",{id:"kryptologie"},"Kryptologie"),(0,r.kt)("p",null,"Der Begriff ",(0,r.kt)("strong",{parentName:"p"},"Kryptologie")," setzt sich zusammen aus dem altgriechischen ",(0,r.kt)("em",{parentName:"p"},"\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2")," (also ",(0,r.kt)("em",{parentName:"p"},"krypt\xf3s"),"), was ",(0,r.kt)("strong",{parentName:"p"},"verborgen")," bedeutet, und ",(0,r.kt)("em",{parentName:"p"},"\u03bb\u03cc\u03b3\u03bf\u03c2")," (also ",(0,r.kt)("em",{parentName:"p"},"l\xf3gos"),"), was ",(0,r.kt)("strong",{parentName:"p"},"Lehre"),", ",(0,r.kt)("strong",{parentName:"p"},"Kunde")," bedeutet. Kryptologie bezeichnet die Wissenschaft, die sich mit der Ver- und Entschl\xfcsselung von Informationen (also mit ",(0,r.kt)("strong",{parentName:"p"},"Informationssicherheit"),") besch\xe4ftigt."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Kryptologie, Kryptographie und Kryptoanalyse",options:{},isInline:!1,src:t(57828).Z,alt:"Kryptologie, Kryptographie und Kryptoanalyse",mdxType:"Image"})),(0,r.kt)("h2",{id:"kryptographie-und-kryptoanalyse"},"Kryptographie und Kryptoanalyse"),(0,r.kt)("p",null,"Die Kryptologie kann grob in zwei Teilbereiche unterteilt werden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"die Kryptographie (",(0,r.kt)("em",{parentName:"li"},"\u03b3\u03c1\u03ac\u03c6\u03b5\u03b9\u03bd"),", also ",(0,r.kt)("em",{parentName:"li"},"gr\xe1phein"),", was ",(0,r.kt)("strong",{parentName:"li"},"schreiben")," bedeutet) und"),(0,r.kt)("li",{parentName:"ul"},"die ",(0,r.kt)("strong",{parentName:"li"},"Kryptoanalyse"),".")),(0,r.kt)("p",null,"W\xe4hrend sich die Kryptographie mit dem Finden von sicheren Verschl\xfcsselungsverfahren besch\xe4ftigt, liegt der Fokus der Kryptoanalyse beim \xabBrechen\xbb oder \xabKnacken\xbb solcher Verfahren."),(0,r.kt)("h2",{id:"klartext-geheimtext-und-schl\xfcssel"},"Klartext, Geheimtext und Schl\xfcssel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:"left"},"deutscher Begriff"),(0,r.kt)("th",{parentName:"tr",align:"left"},"englischer Begriff"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Klartext")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"plaintext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"unverschl\xfcsselte Nachricht")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"c")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"c")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Geheimtext")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"ciphertext")),(0,r.kt)("td",{parentName:"tr",align:"left"},"verschl\xfcsselte Nachricht")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"k")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Schl\xfcssel")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Information, welche ben\xf6tigt wird, um den Klartext zu ver- bzw. den Geheimtext zu entschl\xfcsseln")))),(0,r.kt)("h2",{id:"verschl\xfcsselungsverfahren"},"Verschl\xfcsselungsverfahren"),(0,r.kt)("p",null,"Ein ",(0,r.kt)("strong",{parentName:"p"},"Verschl\xfcsselungsverfahren")," ist ein Algorithmus, welcher einen Klartext unter Verwendung eines Schl\xfcssels in einen Geheimtext \xfcberf\xfchrt oder umgekehrt."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=796759",licence:"CC 4.0  ",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",options:{},isInline:!1,src:t(80835).Z,alt:"Zusammenhang zwischen Klartext, Geheimtext und Schl\xfcssel",mdxType:"Image"})),(0,r.kt)("h2",{id:"schl\xfcsselraum"},"Schl\xfcsselraum"),(0,r.kt)("p",null,"Der Begriff ",(0,r.kt)("em",{parentName:"p"},"Schl\xfcsselraum")," bezeichnet die Anzahl m\xf6glicher Schl\xfcssel f\xfcr ein bestimmtes Verschl\xfcsselungsverfahren. Die Sicherheit eines Verschl\xfcsselungsverfahrens h\xe4ngt stark von der Gr\xf6sse des Schl\xfcsselraums ab."),(0,r.kt)("p",null,"Die Gr\xf6sse des Schl\xfcsselraums wird in bit (d.h. als bin\xe4rer Logarithmus) angegeben. Bei zwei m\xf6glichen Schl\xfcsseln (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"1"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))))))),") spricht man von 1 bit, bei 1024 m\xf6glichen Schl\xfcsseln (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"10"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=2^{10}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))))))))))),") von 10 bit."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"schl\xfcsselr\xe4ume"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schl\xfcsselr\xe4ume")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Geben Sie die Gr\xf6sse des Schl\xfcsselraumes f\xfcr die folgenden Verschl\xfcsselungsverfahren an:"),(0,r.kt)("h4",{parentName:"div",id:"skytale"},"Skytale"),(0,r.kt)(m.Z,{type:"text",id:"q1",webKey:"0b1ab3e2-40ff-4209-8451-b53acf3ff24f",mdxType:"Answer"}),(0,r.kt)("h4",{parentName:"div",id:"caesar"},"Caesar"),(0,r.kt)(m.Z,{type:"text",id:"q2",webKey:"fa51f7d3-35fa-4d7f-beb9-b089012eeec2",mdxType:"Answer"}),(0,r.kt)("h4",{parentName:"div",id:"rot13"},"ROT13"),(0,r.kt)(m.Z,{type:"text",id:"q3",webKey:"e10e6d11-13d4-47b3-b940-7bb7860fdaf6",mdxType:"Answer"}),(0,r.kt)("h4",{parentName:"div",id:"substitution"},"Substitution"),(0,r.kt)("p",{parentName:"div"},"allgemeine monoalphabetische Substitution"),(0,r.kt)(m.Z,{type:"text",id:"q4",webKey:"87f42c57-7331-42b6-a77c-e7aa23d4cebe",mdxType:"Answer"}),(0,r.kt)(i.Z,{webKey:"2b2b5bad-9f90-4aa2-8cba-71c4e8f2dab0",mdxType:"Solution"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Skytale: ein, zwei Dutzend"),(0,r.kt)("li",{parentName:"ul"},"Caesar","*",": ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"26")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"26")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"6")))))),(0,r.kt)("li",{parentName:"ul"},"ROT13: ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,r.kt)("li",{parentName:"ul"},"Monoalphabetische Substitution: ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"26"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,r.kt)("mo",{parentName:"mrow"},">"),(0,r.kt)("mn",{parentName:"mrow"},"4"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"0"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mn",{parentName:"mrow"},"6")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"26! > 4*10^26")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.73354em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"6"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},">"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mord"},"6")))))),(0,r.kt)("li",{parentName:"ul"},"Polybios: ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"25"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,r.kt)("mo",{parentName:"mrow"},">"),(0,r.kt)("mn",{parentName:"mrow"},"1.5"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"0"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mn",{parentName:"mrow"},"5")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"25! > 1.5*10^25")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.73354em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},">"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mord"},"5"))))))),(0,r.kt)("p",{parentName:"div"},"*"," auch wenn die Verschiebung ",(0,r.kt)("inlineCode",{parentName:"p"},"A -> A")," auf den ersten Blick keinen Sinn ergibt, werden bei der Angabe des Schl\xfcsselraums immer jegliche, grunds\xe4tzlich m\xf6gliche Varianten angegeben. Bei der monoalphabetischen Substitution w\xfcrden anderenfalls viele M\xf6glichkeiten vorweg ausgeschlossen, so dass das Verfahren einfacher zu knacken w\xe4re.")))),(0,r.kt)("hr",null))}h.isMDXComponent=!0},86720:function(e,a){a.Z={wrapper:"wrapper_1t86",disabled:"disabled_1w22",hint:"hint_VeYI",solution:"solution_30mD"}},57828:function(e,a){a.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQwMHB4IiBoZWlnaHQ9IjE1MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNMjY0LDIzLjg4QzI2NCwxOS40NjUgMjYwLjQxNSwxNS44OCAyNTYsMTUuODhMMTQ0LDE1Ljg4QzEzOS41ODUsMTUuODggMTM2LDE5LjQ2NSAxMzYsMjMuODhMMTM2LDM5Ljg4QzEzNiw0NC4yOTYgMTM5LjU4NSw0Ny44OCAxNDQsNDcuODhMMjU2LDQ3Ljg4QzI2MC40MTUsNDcuODggMjY0LDQ0LjI5NiAyNjQsMzkuODhMMjY0LDIzLjg4WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjE2OS43OTJweCIgeT0iMzQuOTEzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9sb2dpZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0xNDUuODA5LDExMC4xMkMxNDUuODA5LDEwNS43MDQgMTQyLjIyNCwxMDIuMTIgMTM3LjgwOSwxMDIuMTJMMjUuODA5LDEwMi4xMkMyMS4zOTMsMTAyLjEyIDE3LjgwOSwxMDUuNzA0IDE3LjgwOSwxMTAuMTJMMTcuODA5LDEyNi4xMkMxNy44MDksMTMwLjUzNSAyMS4zOTMsMTM0LjEyIDI1LjgwOSwxMzQuMTJMMTM3LjgwOSwxMzQuMTJDMTQyLjIyNCwxMzQuMTIgMTQ1LjgwOSwxMzAuNTM1IDE0NS44MDksMTI2LjEyTDE0NS44MDksMTEwLjEyWiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDx0ZXh0IHg9IjQ0LjI2MnB4IiB5PSIxMjEuMTUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LcnlwdG9ncmFwaGllPC90ZXh0PgogICAgPHBhdGggZD0iTTM4Mi4xOTEsMTEwLjEyQzM4Mi4xOTEsMTA1LjcwNCAzNzguNjA3LDEwMi4xMiAzNzQuMTkxLDEwMi4xMkwyNjIuMTkxLDEwMi4xMkMyNTcuNzc2LDEwMi4xMiAyNTQuMTkxLDEwNS43MDQgMjU0LjE5MSwxMTAuMTJMMjU0LjE5MSwxMjYuMTJDMjU0LjE5MSwxMzAuNTM1IDI1Ny43NzYsMTM0LjEyIDI2Mi4xOTEsMTM0LjEyTDM3NC4xOTEsMTM0LjEyQzM3OC42MDcsMTM0LjEyIDM4Mi4xOTEsMTMwLjUzNSAzODIuMTkxLDEyNi4xMkwzODIuMTkxLDExMC4xMloiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIyNzkuOThweCIgeT0iMTIxLjE1MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+S3J5cHRvYW5hbHlzZTwvdGV4dD4KICAgIDxwYXRoIGQ9Ik0yMDAsNDcuODhMODEuODA5LDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgogICAgPHBhdGggZD0iTTIwMCw0Ny44OEwzMTguMTkxLDEwMi4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjEuNXB4OyIvPgo8L3N2Zz4K"},80835:function(e,a,t){a.Z=t.p+"assets/images/symmetric-cryptosystem-c7b53ba8f9d7e2e0c03614b4dacdcf54.svg"}}]);