"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[46649],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return M},Z:function(){return A}});var a=n(67294),r=n(28900),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),s=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),p=n(72389),f=n(21314),g=n(74322),h=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),b=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),s=a.useState("unchecked"),h=s[0],v=s[1],k=(0,f.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&k.loaded&&(v("unchecked"),k.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&y(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&y(k.value)}),[k,o]),o?k.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:b(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(k.value)},className:(0,l.default)(i[h],i.checkButton)},a.createElement(u.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),N=n(83117),S=n(75552),E=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(S.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),C=n(3239),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),_=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),I=n(46858),D=n(78982),B=n(97762),M=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,I.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},A=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||B.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(z,e),n.loggedIn&&a.createElement(_,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_2rVr",l="badge_2s0E",o=n(71217),s=n(92814),c=n(51436),u=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_1XRF",i="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",s=n(86010),c=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],g=a.useState(!1),h=g[0],b=g[1],v=a.useRef(null),k=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),e.toolbar),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&h&&k.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,c?void 0:o),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):m,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(c){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},3711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),s=["components"],c={title:"7. Hauptplatine"},u="7. Hauptplatine",d={unversionedId:"Computer/basics/Mainboard",id:"Computer/basics/Mainboard",title:"7. Hauptplatine",description:"Der Grundbestandteil eines jeden Computers ist seine Hauptplatine (engl. mainbaord oder auch motherboard genannt). Die Elektronik auf der Hauptplatine verbindet Prozessor, RAM, etliche weitere verbaute Chips und s\xe4mtliche Peripherie, die \xfcber die zahlreichen Anschl\xfcssen mit dem Computer verbunden werden kann.",source:"@site/docs/Computer/01-basics/07-Mainboard.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/Mainboard",permalink:"/Computer/basics/Mainboard",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/07-Mainboard.md",tags:[],version:"current",lastUpdatedAt:1641728387,formattedLastUpdatedAt:"1/9/2022",sidebarPosition:7,frontMatter:{title:"7. Hauptplatine"},sidebar:"sidebar",previous:{title:"6. Netzwerkkarte",permalink:"/Computer/basics/Netzwerkkarte"},next:{title:"8. Stromversorgung",permalink:"/Computer/basics/Stromversorgung"}},m=[{value:"Aufbau",id:"aufbau",children:[],level:2},{value:"BIOS",id:"bios",children:[],level:2}],p={toc:m};function f(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"7-hauptplatine"},"7. Hauptplatine"),(0,i.kt)("p",null,"Der Grundbestandteil eines jeden Computers ist seine Hauptplatine (engl. ",(0,i.kt)("em",{parentName:"p"},"mainbaord")," oder auch ",(0,i.kt)("em",{parentName:"p"},"motherboard")," genannt). Die Elektronik auf der Hauptplatine verbindet Prozessor, RAM, etliche weitere verbaute Chips und s\xe4mtliche Peripherie, die \xfcber die zahlreichen Anschl\xfcssen mit dem Computer verbunden werden kann."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/de/photo/1387047"},caption:"ASRock Mainboard",options:{},isInline:!1,src:n(12879).Z,alt:"ASRock Mainboard",mdxType:"Image"})),(0,i.kt)("h2",{id:"aufbau"},"Aufbau"),(0,i.kt)("p",null,"Hauptplatinen von modernen Computern sind stets \xe4hnlich aufgebaut, sie bestehen aus den beiden wichtigen Komponenten ",(0,i.kt)("strong",{parentName:"p"},"Northbridge")," und ",(0,i.kt)("strong",{parentName:"p"},"Southbridge"),", die gemeinsam als ",(0,i.kt)("strong",{parentName:"p"},"Chipsatz")," bezeichnet werden."),(0,i.kt)("p",null,"Im nachfolgenden Schema sieht man gut, dass \xfcber die Northbridge diejenigen Computerkomponenten verbunden sind, die besonders schnell miteinander kommunizieren m\xfcssen: Prozessor, RAM und allenfalls schnelle Grafikkarten."),(0,i.kt)("p",null,"\xdcber die Southbridge werden die restlichen Komponenten verbunden, so zum Beispiel Festplatten, Erweiterungskarten (wie z.B. Grafik- oder Netzwerkkarten) und das BIOS (",(0,i.kt)("em",{parentName:"p"},"basic input and output system"),")."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Moxfyre",author_uri:"https://en.wikipedia.org/wiki/User:Moxfyre",licence:"CC-BY-SA-3.0",licence_url:"https://de.wikipedia.org/wiki/Datei:Motherboard_diagram.svg"},caption:"Schema einer Hauptplatine",options:{},isInline:!1,src:n(49894).Z,alt:"Schema einer Hauptplatine",mdxType:"Image"})),(0,i.kt)("p",null,"In modernen Systemen wird die Northbridge oft auch direkt im Prozessor integriert, zudem enth\xe4lt die Southbridge meist einen Netzwerk- und Grafikkontroller, so dass die grundlegende Ausgabe- und Netzwerkfunktionalit\xe4t bereits gegeben ist. "),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-hauptplatine"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Hauptplatine")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Betrachten Sie das ASRock Mainboard. Wo werden die folgenden Komponenten eingesteckt?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Prozessor"),(0,i.kt)("li",{parentName:"ul"},"RAM"),(0,i.kt)("li",{parentName:"ul"},"Festplatten"),(0,i.kt)("li",{parentName:"ul"},"allenfalls ben\xf6tigte zus\xe4tzliche Grafik- und Netzwerkkarten"))),(0,i.kt)("li",{parentName:"ol"},"Wie wird die Hauptplatine mit Strom versorgt?"),(0,i.kt)("li",{parentName:"ol"},"Welche externen Anschl\xfcsse (f\xfcr Peripherie wie Bildschirm, Maus, ...) gibt es auf dieser Hauptplatine?"),(0,i.kt)("li",{parentName:"ol"},"Finden Sie auf dem ASRock Mainboard die North- und die Southbridge. Womit werden die beiden Chips verdeckt? Begr\xfcnden Sie!")),(0,i.kt)(o.Z,{type:"text",webKey:"b13a6003-0e80-48b2-af80-5f6965c3bf26",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"bios"},"BIOS"),(0,i.kt)("p",null,"Beim Starten des Computers wird als erstes das BIOS (engl. ",(0,i.kt)("em",{parentName:"p"},"basic input and output system"),") aktiv. Das BIOS erkennt und \xfcberpr\xfcft die vorhandene Hardware und sorgt daf\xfcr, dass ein Betriebssystem gestartet werden kann. Basierend auf der gespeicherten Konfiguration entscheidet das BIOS, welcher Datentr\xe4ger als Grundlage f\xfcr den Startvorgang dient. Dies ist in der Regel eine eingebaute Festplatte, kann aber auch eine CD/DVD oder ein USB-Stick sein."),(0,i.kt)("p",null,"Um die BIOS-Konfiguration zu \xe4ndern, muss kurz nach dem Start eine bestimmte Taste gedr\xfcckt werden. In der Regel wird dies kurz auf dem Bildschirm eingeblendet. Die h\xe4ufigsten Tasten sind: ",(0,i.kt)("inlineCode",{parentName:"p"},"F1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"F2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Del")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),", bei Mac sind es die Wahltaste (",(0,i.kt)("inlineCode",{parentName:"p"},"\u2325"),") oder ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"windows-schnellstart"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Windows Schnellstart")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Da heutige Laptops die vorhandene Hardware bereits in Sekundenbruchteilen \xfcberpr\xfcft hat, oder f\xfcr einen schnelleren Start bei einem sog. "Fastboot" nicht alle Komponenten neu \xfcberpr\xfcft, bleibt zu wenig Zeit um die richtige Taste zu dr\xfccken. Um dennoch ins BIOS zu kommen, muss der Computer speziell \xfcber den "Erweiterten Start" neu gestartet werden. Dann gelangt man automatisch ins BIOS:'),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.pc-magazin.de/ratgeber/bios-uefi-starten-windows-10-3201227.html"},"https://www.pc-magazin.de/ratgeber/bios-uefi-starten-windows-10-3201227.html")))),(0,i.kt)("p",null,"Je nach Konfiguration muss noch ein Passwort eingegeben werden, bevor die BIOS-Einstellungen angezeigt oder ver\xe4ndert werden k\xf6nnen."),(0,i.kt)("p",null,"Es gibt verschiedene BIOS-Hersteller. Die Oberfl\xe4che ist sehr schlicht und einfach gestaltet. Man navigiert mit den ",(0,i.kt)("strong",{parentName:"p"},"Pfeiltasten"),", w\xe4hlt mit ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," einen Eintrag aus und beendet ein Men\xfc mit Hilfe von ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc"),". Nachfolgend zwei Beispiele:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Richard Masoner / Cyclelicious",author_uri:"https://www.flickr.com/photos/bike/",licence:"CC-BY-SA-2.0",licence_url:"https://www.flickr.com/photos/bike/189646022/"},caption:"AMI BIOS",options:{},isInline:!1,src:n(75967).Z,alt:"AMI BIOS",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Kephir",author_uri:"https://en.wikipedia.org/wiki/User:Kephir",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:Award_BIOS_setup_utility.png"},caption:"Award BIOS",options:{},isInline:!1,src:n(54674).Z,alt:"Award BIOS",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"uefi"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"UEFI")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Der grafisch aufgepeppte Nachfolger von BIOS ist ",(0,i.kt)("strong",{parentName:"p"},"UEFI")," (",(0,i.kt)("em",{parentName:"p"},"Unified Extensible Firmware Interface"),"). Es kann im Gegensatz zum BIOS auch per Maus gesteuert werden, erf\xfcllt aber dieselbe Aufgabe wie das oben beschriebene BIOS."))))}f.isMDXComponent=!0},75967:function(e,t,n){t.Z=n.p+"assets/images/07-bios-ami-1b37f9b17d463cf867f1049fecfcec4a.jpg"},54674:function(e,t,n){t.Z=n.p+"assets/images/07-bios-award-4aa24e9482e19fff6cb0cc6e24a929f8.png"},49894:function(e,t,n){t.Z=n.p+"assets/images/07-mainboard-diagram-298f5dd3e0fda9179ff8a89ba893d3c8.svg"},12879:function(e,t,n){t.Z=n.p+"assets/images/07-mainboard-f267dae7e7fbe933ce7d05d1bbc209f6.jpg"}}]);