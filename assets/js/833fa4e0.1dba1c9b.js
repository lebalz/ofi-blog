"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[67089],{3239:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),a="noLoginAlert_boZc",i=t(73727),l=t(71217),o=t(21314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,n,t){t.d(n,{x:function(){return Z},Z:function(){return V}});var r=t(67294),a=t(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},l=t(86010),o=t(71217),u=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),s=function(e){var n=e.value,t=n,a=void 0;if(u.test(n)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(n);a=i[l],t=""+n.replace(u,"")}return r.createElement("option",{value:n,className:a},t)},c=t(92814),d=t(51436),m=t(68949),g=t(72389),p=t(21314),f=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},h=(0,o.Pi)((function(e){var n,t,a,o=(0,g.Z)(),u=r.useState("unchecked"),f=u[0],h=u[1],y=(0,p.oR)("documentStore").find(e.webKey),b=function(n){!e.isLegacy&&y.loaded&&(h("unchecked"),y.setData({value:n,type:"string"}))},k=function(n){if(e.checker)return h(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};h(t(n)===t(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&k(y.data.value)}))}),[]),r.useEffect((function(){y.loaded&&k(y.data.value)}),[o]),y.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.data.value,className:v(y.data.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(s,{value:e,key:n})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.data.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(y.data.value)},className:(0,l.default)(i[f],i.checkButton)},r.createElement(c.G,{icon:(a=f,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement("div",null,"Loading...")})),y=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,o.Pi)((function(e){var n,t=(0,p.oR)("documentStore").find(e.webKey),a=function(n,r){if(void 0===r&&(r=0),!e.isLegacy&&t.loaded){var a=[].concat(t.data.value.slice(0,r),[n],t.data.value.slice(r+1));t.setData(Object.assign({},t.data,{value:a}))}};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(n=t.legacyData)?void 0:n.value)||[]:t.data.value).map((function(n,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:n,className:b(n),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(s,{value:e,key:n})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:n,disabled:!t.loaded||t.readonly})}))):r.createElement("div",null,"Loading...")})),w=void 0,N=[["bold","italic","underline"]],E=[].concat(N,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),S=(0,o.Pi)((function(e){var n=r.useState(!1),a=n[0],o=n[1],u=r.useState(!1),s=u[0],c=u[1],d=r.useRef(null),g=(0,p.oR)("documentStore").find(e.webKey),f=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(w)return e();Promise.all([Promise.all([t.e(82930),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940)),Promise.all([t.e(40532),t.e(37617)]).then(t.bind(t,37617))]).then((function(n){w=n[0].default;var t=n[1].default,r=n[2].default;t.register("modules/imageCompress",r),e()}))}((function(){e&&(c(!0),d&&d.current&&d.current.editor.getModule("toolbar").container.addEventListener("mousedown",f))})),function(){e=!1,d&&d.current&&d.current.editor.getModule("toolbar").container.removeEventListener("mousedown",f)}}),[]);return w&&s&&g.loaded?r.createElement("div",{onFocus:function(){return!a&&o(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(w,{ref:d,theme:"snow",readOnly:e.isLegacy||g.readonly,className:(0,l.default)(i.quillAnswer,e.monospace&&i.monospace,a?void 0:"disable-toolbar"),value:e.isLegacy?g.legacyData.value:g.value||"",onChange:function(n,t,r,a){var i,l;i=n,void 0===l&&(l=0),!e.isLegacy&&g.loaded&&s&&(0,m.z)((function(){g.value=i}))},modules:{toolbar:e.reduced?N:E,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),x=t(3239),D=function(e,n){"code"!==n.type&&"tdoc"!==n.type&&("use_legacy"===e?(n.setData(n.legacyData),n.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()}))}))):(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()})))},C=(0,o.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===n.type&&r.createElement(S,{type:"text",webKey:n.webKey,isLegacy:!0}),"string"===n.type&&r.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===n.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:n.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",n)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",n)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),K=t(46858),_=t(78982),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var n=function(){try{return(0,K.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,_.rV)(e.id,n);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,n)}}}:function(){}},V=(0,o.Pi)((function(e){var n=(0,p.oR)("documentStore"),t=(0,p.oR)("msalStore"),a=n.find(e.webKey),i=(0,g.Z)();return(0,p.ky)(function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||"",type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e),e.type,e.webKey,!0,L(e)),a&&i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),t.loggedIn&&r.createElement(C,e),t.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(k,e)):r.createElement("div",null,"Loading...")}))},21314:function(e,n,t){t.d(n,{oR:function(){return l},ky:function(){return o}});var r=t(68949),a=t(67294),i=t(93812),l=function(e){return a.useContext(i.Nx)[e]},o=function(e,n,t,l,o,u){a.useEffect((function(){i.Ux.documentStore.provideDocument(e,n,t,l,o,u)}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){r&&i.Ux.documentStore.provideDocument(e,n,t,l,o,u)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){r||i.Ux.documentStore.provideDocument(e,n,t,l,o,u)}))}),[])}},46858:function(e,n,t){t.d(n,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,n,t){t.d(n,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,n,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&o()}catch(n){return}}(),n){var a=localStorage.getItem(n);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?t:l}return t}}var u=localStorage.getItem(e);return u?JSON.parse(u):t}catch(s){return t}},l=function(e,n){try{if(n){var t=i(n,void 0,{expiry:Date.now()+a});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(n,JSON.stringify(t))}localStorage.removeItem(e)}catch(r){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(n){var t=i(n,void 0,{expiry:e+a});t.expiry&&t.expiry>e&&localStorage.removeItem(n)})),localStorage.setItem("last_cleanup",""+e)}catch(n){return}}},57674:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=t(52084),o=["components"],u={title:"Umwandlung ins Bin\xe4rsystem"},s="Umwandlung ins Bin\xe4rsystem [^1]",c={unversionedId:"Kryptologie/Symmetrisch/binaer",id:"version-24o/Kryptologie/Symmetrisch/binaer",isDocsHomePage:!1,title:"Umwandlung ins Bin\xe4rsystem",description:"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden.",source:"@site/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/01-binaer.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/binaer",permalink:"/24o/Kryptologie/Symmetrisch/binaer",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/01-binaer.md",tags:[],version:"24o",sidebarPosition:1,frontMatter:{title:"Umwandlung ins Bin\xe4rsystem"},sidebar:"version-24o/sidebar",previous:{title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",permalink:"/24o/Kryptologie/Antike/python-tools"},next:{title:"Codierung",permalink:"/24o/Kryptologie/Symmetrisch/codierung"}},d=[{value:"Prozess der Verschl\xfcsselung",id:"prozess-der-verschl\xfcsselung",children:[],level:2},{value:"Ein grosser Vorteil",id:"ein-grosser-vorteil",children:[],level:2},{value:"Codierung",id:"codierung",children:[],level:2}],m={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umwandlung-ins-bin\xe4rsystem-"},"Umwandlung ins Bin\xe4rsystem ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden."),(0,i.kt)("h2",{id:"prozess-der-verschl\xfcsselung"},"Prozess der Verschl\xfcsselung"),(0,i.kt)("p",null,"Das Verfahren wird etwas umst\xe4ndlicher, da jeweils in die bin\xe4re Computersprache \xfcbersetzt werden muss:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Geheimtext wird in eine Folge von bin\xe4ren Zahlen codiert (Klartext \u2192 bin\xe4rer Klartext)"),(0,i.kt)("li",{parentName:"ol"},"Verschl\xfcsselung dieser Zahlenfolge (bin\xe4rer Klartext \u2192 bin\xe4rer Geheimtext)"),(0,i.kt)("li",{parentName:"ol"},"... (Versand, Abspeichern, ...)"),(0,i.kt)("li",{parentName:"ol"},"Decodierung des bin\xe4ren Geheimtextes (bin\xe4rer Geheimtext \u2192 Geheimtext)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"unterschied-codierung-und-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Unterschied \xabCodierung\xbb und \xabVerschl\xfcsselung\xbb")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es ist wichtig, dass die Begriffe ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," und ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," unterschieden werden:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," ist eine Umwandlung in eine andere Darstellungsform (z.B. Text \u2192 Zahlen, Bild \u2192 Text, Zahlen \u2192 bin\xe4re Zahlen, ...). Eine Codierung hat das ",(0,i.kt)("strong",{parentName:"p"},"Ziel"),", eine Information in ein bestimmtes ",(0,i.kt)("strong",{parentName:"p"},"Datenformat umzuwandeln"),", sie bietet keine Sicherheit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," oder ",(0,i.kt)("em",{parentName:"p"},"Chiffre")," hat das Ziel zu ",(0,i.kt)("strong",{parentName:"p"},"verhindern"),", dass Aussenstehende an eine bestimmte ",(0,i.kt)("strong",{parentName:"p"},"Information gelangen"),", indem Daten mithilfe eines Schl\xfcssels so ver\xe4ndert werden, dass ohne Kenntnis des Schl\xfcssels nicht mehr auf die urspr\xfcngliche Form geschlossen werden kann."))))),(0,i.kt)("h2",{id:"ein-grosser-vorteil"},"Ein grosser Vorteil"),(0,i.kt)("p",null,"Die vorg\xe4ngige Codierung bedeutet zwar beim Erarbeiten einen Mehraufwand, bietet jedoch einen erheblichen Vorteil: Alles, was sich in bin\xe4rer Form darstellen l\xe4sst, kann ohne weitere Anpassung des Verfahrens verschl\xfcsselt werden!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Texte (unabh\xe4ngig von der Sprache resp. den verwendeten Schriftzeichen)"),(0,i.kt)("li",{parentName:"ul"},"Bilder"),(0,i.kt)("li",{parentName:"ul"},"Ton"),(0,i.kt)("li",{parentName:"ul"},"Videos")),(0,i.kt)("p",null,"Dies war in der Antike nicht n\xf6tig, heute ist es allerdings unumg\xe4nglich."),(0,i.kt)("h2",{id:"codierung"},"Codierung"),(0,i.kt)("p",null,"Wie im Kapitel \xabCodes und Daten\xbb besprochen, gibt es dazu eine Vielzahl von Codierungen. Beispielsweise k\xf6nnte dazu die ASCII-Codierung verwendet werden."),(0,i.kt)("p",null,"F\xfcr die folgenden Beispiele verwenden wir den etwas k\xfcrzeren Pentacode."),(0,i.kt)(l.Z,{type:"text",webKey:"e1cd3339-5234-42b3-90cd-9e777d74a88e",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=4464"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);