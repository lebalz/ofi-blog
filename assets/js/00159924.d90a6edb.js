"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[44768],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_HSVn",i=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return L}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},s=n(92814),d=n(51436),f=n(68949),p=n(72389),m=n(21314),g=n(74322),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),c=a.useState("unchecked"),h=c[0],v=c[1],y=(0,m.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},E=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,f.U5)((function(){return y.loaded}),(function(e){e&&E(y.value)}))}),[y]),a.useEffect((function(){y.loaded&&E(y.value)}),[y,o]),o?y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:b(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return E(y.value)},className:(0,l.default)(i[h],i.checkButton)},a.createElement(s.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t,n=(0,m.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),w=n(83117),_=n(75552),N=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(_.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),C=n(3239),S=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,f.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},x=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(N,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(E,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),P=(0,o.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(46858),D=n(78982),K=n(97762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,Z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},L=(0,o.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,m.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(x,e),n.loggedIn&&a.createElement(P,{webKey:e.webKey}),"text"===e.type&&a.createElement(N,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(E,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},91033:function(e,t,n){var a=n(86010),r=n(67294),i=n(96734),l=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,o=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "];t.Z=function(){var e=r.useState(""),t=e[0],n=e[1],c=r.useState(""),u=c[0],s=c[1],d=r.useState("text"),f=d[0],p=d[1];return r.useEffect((function(){if("text"===f&&0!==t.length){var e=t.split("").map((function(e){var t=o.indexOf(e),n=t%5;return""+(Math.floor(t/5)+1)+(n+1)}));s(e.join(" "))}}),[t]),r.useEffect((function(){if("cipher"===f&&0!==u.length){var e=u.split(" ").map((function(e){var t=e.split("").map((function(e){return Number.parseInt(e,10)-1})),n=t[0],a=t[1];return o[5*n+a]}));n(e.join(""))}}),[u]),r.createElement("div",{className:(0,a.default)("hero","shadow--lw",i.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),r.createElement("h4",null,"Klartext"),r.createElement("textarea",{className:(0,a.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("text"),n(function(e){return e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(l,"")}(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),r.createElement("h4",null,"Geheimtext"),r.createElement("textarea",{className:(0,a.default)(i.Z.input),value:u,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);p("cipher"),s(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),u=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},m=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],m=t[1],g=a.useState(!1),h=g[0],b=g[1],v=a.useRef(null),y=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&h&&y.loaded?a.createElement("div",{onFocus:function(){return!u&&m(!0)},className:(0,c.default)(r)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:y.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&h&&y.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(f,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},18556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(91033),c=(n(52084),["components"]),u={title:"Polybios-Chiffre"},s="Polybios-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Polybios",id:"Kryptologie/Antike/Polybios",title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/docs/Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/Kryptologie/Antike/Polybios",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"current",lastUpdatedAt:1635104316,formattedLastUpdatedAt:"10/24/2021",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"sidebar",previous:{title:"Skytale",permalink:"/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/Kryptologie/Antike/Caesar"}},f=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",children:[],level:2}],p={toc:f};function m(e){var t=e.components,u=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(20536).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)("p",null,"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(o.Z,{mdxType:"Polybios"}),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},20536:function(e,t,n){t.Z=n.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);