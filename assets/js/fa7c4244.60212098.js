"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[63480],{3239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r="noLoginAlert_boZc",i=a(73727),l=a(71217),s=a(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return B},Z:function(){return A}});var n=a(67294),r=a(3435),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=a(86010),s=a(71217),o=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],a=""+t.replace(o,"")}return n.createElement("option",{value:t,className:r},a)},d=a(92814),u=a(51436),m=a(68949),p=a(72389),g=a(21314),f=a(74322),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},h=(0,s.Pi)((function(e){var t,a,r,s=(0,p.Z)(),o=n.useState("unchecked"),k=o[0],h=o[1],y=(0,g.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&y.loaded&&(h("unchecked"),y.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};h(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&N(y.value)}))}),[y]),n.useEffect((function(){y.loaded&&N(y.value)}),[y,s]),s?y.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:v(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(a=y.legacyData)?void 0:a.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return N(y.value)},className:(0,l.default)(i[k],i.checkButton)},n.createElement(d.G,{icon:(r=k,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(f.Z,null):n.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,a=(0,g.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(f.Z,null)})),w=a(83117),x=a(75552),E=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(x.Z,(0,w.Z)({model:t},e))):n.createElement(f.Z,null)})),_=a(3239),D=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return D("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return D("use_current",t)}},"Nein (verwerfen)"))):null})),S=(0,s.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=a(46858),G=a(78982),Z=a(97762),B=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,G.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,G.cl)(e.id,t)}}}:function(){}},A=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore"),a=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(_.Z,null),a.loggedIn&&n.createElement(z,e),a.loggedIn&&n.createElement(S,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(N,e)):n.createElement(f.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(86010),i="loader_2rVr",l="badge_2s0E",s=a(71217),o=a(92814),c=a(51436),d=(0,s.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(o.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",s="disableToolbar_gntN",o=a(86010),c=a(71217),d=a(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,c.Pi)((function(e){var t=n.useState(!1),c=t[0],g=t[1],f=n.useState(!1),k=f[0],v=f[1],h=n.useRef(null),y=e.model,b=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,49115)))),Promise.all(n).then((function(t){u=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}a.register("modules/imageCompress",n),e()}))}((function(){t&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&k&&y.loaded?n.createElement("div",{onFocus:function(){return!c&&g(!0)},className:(0,o.default)(r)},n.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:y.text||"",onChange:function(t,a,n,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&k&&y.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(d.Z,null)}))},46858:function(e,t,a){a.d(t,{Vx:function(){return r},Vj:function(){return n},ly:function(){return i}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return i},cl:function(){return l}});var n=864e5,r=2592e6,i=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?a:l}return a}}var o=localStorage.getItem(e);return o?JSON.parse(o):a}catch(c){return a}},l=function(e,t){try{if(t){var a=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=i(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},13001:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(84384),s=a(52084),o=["components"],c={title:"5. Grafikkarte"},d="5. Grafikkarte",u={unversionedId:"Computer/Grundlagen/Grafikkarte",id:"version-24K/Computer/Grundlagen/Grafikkarte",title:"5. Grafikkarte",description:"Die Grafikkarte ist neben dem Prozessor die zweite wichtige Komponente, welche im Computer f\xfcr die Verarbeitung von Daten zust\xe4ndig ist. Grafikkarten haben folgende Aufgaben:",source:"@site/versioned_docs/version-24K/07-Computer/01-Grundlagen/05-Grafikkarte.md",sourceDirName:"07-Computer/01-Grundlagen",slug:"/Computer/Grundlagen/Grafikkarte",permalink:"/24K/Computer/Grundlagen/Grafikkarte",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/07-Computer/01-Grundlagen/05-Grafikkarte.md",tags:[],version:"24K",sidebarPosition:5,frontMatter:{title:"5. Grafikkarte"},sidebar:"version-24K/sidebar",previous:{title:"4. Speicher",permalink:"/24K/Computer/Grundlagen/Speicher"},next:{title:"6. Netzwerkkarte",permalink:"/24K/Computer/Grundlagen/Netzwerkkarte"}},m=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",children:[{value:"Steuerung des Bildschirms",id:"steuerung-des-bildschirms",children:[],level:3}],level:2}],p={toc:m};function g(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"5-grafikkarte"},"5. Grafikkarte"),(0,i.kt)("p",null,"Die Grafikkarte ist neben dem Prozessor die zweite wichtige Komponente, welche im Computer f\xfcr die ",(0,i.kt)("strong",{parentName:"p"},"Verarbeitung")," von Daten zust\xe4ndig ist. Grafikkarten haben folgende Aufgaben:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Erzeugen einer Pixelgrafik aus einer anderen Darstellungsform,"),(0,i.kt)("li",{parentName:"ul"},"Speichern dieser Pixelgrafik, des ",(0,i.kt)("strong",{parentName:"li"},"Bildschirminhalts"),","),(0,i.kt)("li",{parentName:"ul"},"Steuerung des Bildschirms, damit er den Bildschirminhalt anzeigt.")),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr Grafikkarten gibt es drei wichtige Kenngr\xf6ssen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die maximale ",(0,i.kt)("strong",{parentName:"li"},"Aufl\xf6sung"),", also die Anzahl der Bildpunkte (z.B. 7680\xd74320)."),(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Taktfrequenz")," gibt an, wie schnell der Prozessor Berechnungen durchf\xfchren kann. Sie wird in der Einheit ",(0,i.kt)("strong",{parentName:"li"},"Hertz")," angegeben, was \xabpro Sekunde\xbb bedeutet. Die Grafikakrte hat also auch einen eigenen leistungsf\xe4higen Prozessor."),(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Speicherkapazit\xe4t")," ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben. Die Grafikkarte besitzt also auch einen eigenen Arbeitsspeicher.")),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Konstantin Lanzet",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:KL_Hercules_HGC.png"},caption:"Hercules-Grafikkarte",options:{},isInline:!1,src:a(681).Z,alt:"Hercules-Grafikkarte",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"hercules-graphics-card"},"Hercules Graphics Card"),(0,i.kt)("p",{parentName:"div"},"Hochaufl\xf6sende monochrome Grafikkarte (720\xd7348 Pixel, 1 Bit Farbe) mit 64 KB Video-RAM aus dem Jahr ",(0,i.kt)("strong",{parentName:"p"},"1982"),"."))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"NVIDIA RTX 3080 Ti Trinity-Grafikkarte",options:{},isInline:!1,src:a(23484).Z,alt:"NVIDIA RTX 3080 Ti Trinity-Grafikkarte",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("h4",{parentName:"div",id:"nvidia-rtx-3080-ti-trinity"},"NVIDIA RTX 3080 Ti Trinity"),(0,i.kt)("p",{parentName:"div"},"Aktuelle Grafikkarte aus dem Jahr ",(0,i.kt)("strong",{parentName:"p"},"2022")," mit einer maximalen Aufl\xf6sung von ",(0,i.kt)("inlineCode",{parentName:"p"},"7680\xd74320")," Pixel pro Bildschirm, ",(0,i.kt)("inlineCode",{parentName:"p"},"12")," GB Video-RAM und Unterst\xfctzung von Echtzeit-Raytracing.")))),(0,i.kt)("p",null,"Fr\xfche Grafikkarten konnten nur aus Text selbst\xe4ndig eine Pixelgrafik erzeugen. Um etwas anderes auf dem Bildschirm darzustellen, mussten Programme oder das Betriebssystem die Grafik selbst berechnen und pixelweise an die Grafikkarte \xfcbermitteln."),(0,i.kt)("p",null,"Mit der Zeit konnten neuere Grafikkarten immer mehr Funktionen der Bilderzeugung \xfcbernehmen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2D-Rasterung:")," Zeichnen von Linien, Rechtecken und Kreisen,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3D-Rasterung:")," Verdeckungsberechnung und Lichtsimulation,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"3D-Raytracing:")," fotorealistische Berechnung basierend auf der Simulation von Lichtstrahlen.")),(0,i.kt)("p",null,"Ausserdem werden heute Grafikkarten auch f\xfcr aufw\xe4ndige Berechnungen in anderen Bereichen eingesetzt, z.B. f\xfcr ",(0,i.kt)("strong",{parentName:"p"},"neuronale Netze")," oder f\xfcr das Mining von ",(0,i.kt)("strong",{parentName:"p"},"Kryptow\xe4hrungen"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-raytracing"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Raytracing")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was ist Raytracing und was bringt es mir?"),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/vy8kHdw9gCI?start=66",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),(0,i.kt)("h3",{id:"steuerung-des-bildschirms"},"Steuerung des Bildschirms"),(0,i.kt)("p",null,"F\xfcr die Steuerung des Bildschirms gibt es vier aktuelle Technologien."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Belkin",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Displayport-cable.jpg"},caption:"Display Port (DP)",options:{},isInline:!1,src:a(77805).Z,alt:"Display Port (DP)",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:Dvi-cable.jpg"},caption:"Digital Visual Interface (DVI)",options:{},isInline:!1,src:a(76686).Z,alt:"Digital Visual Interface (DVI)",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg"},caption:"High-Definition Multimedia Interface (HDMI)",options:{},isInline:!1,src:a(51546).Z,alt:"High-Definition Multimedia Interface (HDMI)",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Evan-Amos",author_uri:"https://commons.wikimedia.org/wiki/User:Evan-Amos",licence:"PD",licence_url:"https://commons.wikimedia.org/wiki/File:Vga-cable.jpg"},caption:"Video Graphics Array (VGA)",options:{},isInline:!1,src:a(96075).Z,alt:"Video Graphics Array (VGA)",mdxType:"Image"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"usb-c"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"USB-C")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Heutige Laptops haben oft keine separaten Ausg\xe4nge f\xfcr Bildschirme - dank USB-C. Die verwendete Technologie sowie die Protokolle bleiben aber dieselben, weshalb ohne weiteres Adapter f\xfcr entsprechende Technologien (DP, DVI, HDMI, VGA) angeschlossen werden k\xf6nnen."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"USB-C Displayadapter",options:{width:"300px"},isInline:!1,src:a(58472).Z,alt:"USB-C Displayadapter --width=300px",mdxType:"Image"})))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-grafikkarte-rendering"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Grafikkarte: Rendering")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Recherchieren Sie den Begriff "Rendering".'),(0,i.kt)(s.Z,{type:"text",webKey:"30ee181c-fe31-4362-8274-68fd87478824",mdxType:"Answer"}),(0,i.kt)("p",{parentName:"div"},"Welche Aufgaben erfordern eine hohe Rendering-Leistung? F\xfcr welche Zielgruppen nebst Gamern sind gute Grafikkarten essenziell?"),(0,i.kt)(s.Z,{type:"text",webKey:"bdf478bd-68f0-4980-b98e-74fd2be9065b",mdxType:"Answer"}))))}g.isMDXComponent=!0},77805:function(e,t,a){t.Z=a.p+"assets/images/05-dp-2b2b2c9db755a5e6d745426ee6b69296.png"},76686:function(e,t,a){t.Z=a.p+"assets/images/05-dvi-48063d2d6b70a9dcd36a663d278fd0a0.png"},51546:function(e,t,a){t.Z=a.p+"assets/images/05-hdmi-73f7e572dabfedaa37144261c4d539c8.png"},681:function(e,t,a){t.Z=a.p+"assets/images/05-hercules-0a3f6b7f25e3544a60c31badef085c5b.png"},23484:function(e,t,a){t.Z=a.p+"assets/images/05-nvidia-rtx-3080-trinity-0c17a34def9e07e1d7251e5300171b7f.jpg"},58472:function(e,t,a){t.Z=a.p+"assets/images/05-usbc-adapter-436a8cc4334334be3f5287c3d01cf29e.jpg"},96075:function(e,t,a){t.Z=a.p+"assets/images/05-vga-abc5e3a8d9501c53a7b252d5866e2a9d.png"}}]);