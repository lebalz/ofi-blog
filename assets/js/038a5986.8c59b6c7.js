"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[99243],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return D},Z:function(){return B}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),s=n(71217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=i[l],n=""+t.replace(o,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),u=n(51436),m=n(68949),p=n(72389),f=n(21314),h=n(74322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),s=r[0],o=r[1],g=(0,f.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(o("unchecked"),g.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&k(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&k(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(g.value)},className:(0,l.default)(i[s],i.checkButton)},a.createElement(d.G,{icon:(t=s,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:w(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(h.Z,null)})),y=n(83117),z=n(75552),E=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(z.Z,(0,y.Z)({model:t},e))):a.createElement(h.Z,null)})),x=n(47271),S=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(97762),D=function(e){return e.replace(/\s+/g,"").toUpperCase()},B=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),s=n(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),s=n(86010),o=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,s.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return a.createElement(d,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],c=i[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,s.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(d,e),m&&a.createElement("figcaption",null,u&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,s.default)(r.bib,l?r.visible:void 0),onClick:function(){return c(!l)}},"@"),l&&a.createElement(o,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",s=n(71217),o=n(92814),c=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(o.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(86010),c=n(71217),d=n(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],h=a.useState(!1),g=h[0],b=h[1],v=a.useRef(null),k=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return u&&g&&k.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(r)},a.createElement(u,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&g&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},40255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),s=n(82593),o=["components"],c={title:"Browserzertifikate"},d="Browserzertifikate [^1]",u={unversionedId:"Kryptologie/Alltag/browser-zertifikate",id:"Kryptologie/Alltag/browser-zertifikate",title:"Browserzertifikate",description:"W\xe4hrend fr\xfcher s\xe4mtliche Informationen im Internet unverschl\xfcsselt \xfcbertragen worden sind, werden die meisten Verbindungen heutzutage mit kryptographischen Mitteln gesch\xfctzt.",source:"@site/docs/Kryptologie/07-Alltag/02-browser-zertifikate.md",sourceDirName:"Kryptologie/07-Alltag",slug:"/Kryptologie/Alltag/browser-zertifikate",permalink:"/Kryptologie/Alltag/browser-zertifikate",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/07-Alltag/02-browser-zertifikate.md",tags:[],version:"current",lastUpdatedAt:1638266081,formattedLastUpdatedAt:"11/30/2021",sidebarPosition:2,frontMatter:{title:"Browserzertifikate"},sidebar:"sidebar",previous:{title:"Ziele der Kryptologie",permalink:"/Kryptologie/Alltag/konzepte"},next:{title:"WhatsApp-Verschl\xfcsselung",permalink:"/Kryptologie/Alltag/whatsapp"}},m={},p=[{value:"Symmetrische und asymmetrische Verschl\xfcsselung",id:"symmetrische-und-asymmetrische-verschl\xfcsselung",level:2},{value:"Achtung vor falscher Sicherheit",id:"achtung-vor-falscher-sicherheit",level:2}],f={toc:p};function h(e){var t=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"browserzertifikate-"},"Browserzertifikate ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"W\xe4hrend fr\xfcher s\xe4mtliche Informationen im Internet unverschl\xfcsselt \xfcbertragen worden sind, werden die meisten Verbindungen heutzutage mit kryptographischen Mitteln gesch\xfctzt."),(0,i.kt)("p",null,"Insbesondere nutzen momentan (",(0,i.kt)("em",{parentName:"p"},"M\xe4rz 2021"),") gem\xe4ss W3Techs",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \xfcber 70% aller Webseiten ",(0,i.kt)("strong",{parentName:"p"},"HTTPS"),". HTTPS ist eine Erweiterung des HyperText Transfer Protocols, der Buchstabe \xabS\xbb steht f\xfcr Secure."),(0,i.kt)("p",null,"Damit wird der Datenverkehr in ",(0,i.kt)("strong",{parentName:"p"},"beiden Richtungen")," verschl\xfcsselt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"alle Daten, die vom Webserver zum Browser \xfcbertragen werden (also der Inhalt der Seite wie z.B. Text, Bilder, Videos, heruntergeladene Dateien, ...)"),(0,i.kt)("li",{parentName:"ul"},"alle Daten, die vom Browser zu Webserver \xfcbertragen werden (also ausgef\xfcllte Formulare wie z.B. Benutzernamen und Passw\xf6rter, aber auch alle Texte, die wir eingeben sowie s\xe4mtliche hochgeladenen Dateien, ...)")),(0,i.kt)("h2",{id:"symmetrische-und-asymmetrische-verschl\xfcsselung"},"Symmetrische und asymmetrische Verschl\xfcsselung"),(0,i.kt)("p",null,"Die ",(0,i.kt)("strong",{parentName:"p"},"Daten werden symmetrisch")," verschl\xfcsselt, der ",(0,i.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel asymmetrisch"),"."),(0,i.kt)("p",null,"Da die Browser nicht jeden einzelnen \xf6ffentlichen Schl\xfcssel der Webseiten (dies sind gem\xe4ss internet live stats hunderte Millionen",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),") kennen k\xf6nnen, vertrauen sie ausgew\xe4hlten ",(0,i.kt)("strong",{parentName:"p"},"Zertifizierungsstellen"),". Der \xf6ffentliche Schl\xfcssel einer Webseite wird von einer Zertifizierungsstelle digital signiert. Das so entstandene Zertifikat wird beim Verbindungsaufbau \xfcbertragen und kann vom Browser \xfcberpr\xfcft werden."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Webseitenzertifikate",options:{width:"400px"},isInline:!1,src:n(22753).Z,alt:"Webseitenzertifikate --width=400px",mdxType:"Image"})),(0,i.kt)("p",null,"Das Schloss vor der URL zeigt die Verwendung von HTTPS (und Webseitenzertifikaten) an.\nBeim Klicken auf das Schloss k\xf6nnen \xabWeitere Informationen\xbb zur Verbindung angezeigt werden (unter Firefox):"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Informationen zur Webseite",options:{},isInline:!1,src:n(68982).Z,alt:"Informationen zur Webseite",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"webseitenzertifikat"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Webseitenzertifikat")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was finden Sie alles \xfcber die Zertifikate der Webseite des Gymnasiums Biel-Seeland heraus?"),(0,i.kt)(s.Z,{type:"text",webKey:"e39bd1c8-631e-4b4c-b2de-5569e50937d5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"kryptographische-details"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kryptographische Details")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im Screenshot oben sehen Sie die technische Angabe ",(0,i.kt)("inlineCode",{parentName:"p"},"TLS_AES_128_GCM_SHA256, 128-Bit Schl\xfcssel, TLS 1.3"),". Finden Sie heraus, was die einzelnen Teile aussagen?"),(0,i.kt)(s.Z,{type:"text",webKey:"ab1dae9c-54af-48bf-a390-fdccd9bd6471",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"zertifizierungsstellen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Zertifizierungsstellen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finden Sie die im Browser gespeicherten \xabvertrauensw\xfcrdigen Zertifizierungsstellen\xbb?"),(0,i.kt)(s.Z,{type:"text",webKey:"caf647b0-ba95-4cf3-8824-150558348c45",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"zertifikatswarnungen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Zertifikatswarnungen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Besuchen Sie die Webseite ",(0,i.kt)("a",{parentName:"p",href:"https://badssl.com/"},"BadSSL")," und testen Sie mit verschiedenen Browsern verschiedene Konfigurationen. So lernen Sie die m\xf6gliche Zertifikatswarnungen kennen."),(0,i.kt)(s.Z,{type:"text",webKey:"893cdb6f-75bd-4bfd-8009-0f84ea0360af",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"achtung-vor-falscher-sicherheit"},"Achtung vor falscher Sicherheit"),(0,i.kt)("p",null,"Die Tatsache, dass bei einer bestimmten Webseite das Schloss angezeigt wird, heisst noch lange nicht, dass die Webseite sicher ist. Denn das Wort ",(0,i.kt)("strong",{parentName:"p"},"sicher")," hat mehrere Bedeutungen."),(0,i.kt)("p",null,"Was genau sagt das Schloss also aus? Worauf k\xf6nnen wir vertrauen? Was hingegen kann trotzdem noch schiefgehen?"),(0,i.kt)("p",null,"Was bedeutet ",(0,i.kt)("strong",{parentName:"p"},"sicher")," in diesem Zusammenhang?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Die Verbindung ist vertraulich \u2013 niemand unterwegs kann mitlesen."),(0,i.kt)("li",{parentName:"ol"},"Wir k\xf6nnen sicher sein, dass wir mit dem genannten Server (resp. mit der angegebenen Webseite) kommunizieren."),(0,i.kt)("li",{parentName:"ol"},"Die \xfcbertragenen Inhalte sind vor Manipulation gesch\xfctzt.")),(0,i.kt)("p",null,"Wo ist trotzdem Vorsicht geboten?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die URL (also die Webseitenadresse) muss ganz genau kontrolliert werden. Es n\xfctzt nichts, wenn die Verbindung verschl\xfcsselt ist und der Server \xfcberpr\xfcft wurde, wenn wir mit dem falschen Server sprechen, weil wir zu wenig genau auf die URL achten."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#"},"www.bekb.com.evil.com/login")," ist keine g\xfcltige Webseite von ",(0,i.kt)("strong",{parentName:"p"},"BEKB"),", sondern eine Unterseite (Subdomain) von ",(0,i.kt)("a",{parentName:"p",href:"#"},"evil.com"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#www.vaIiant.ch"},"www.vaIiant.ch")," ist nicht dasselbe wie ",(0,i.kt)("a",{parentName:"p",href:"#www.valiant.ch"},"www.valiant.ch")," \u2013 auch wenn es fast identisch aussieht (achten Sie genau auf das \xabL\xbb). In einer anderen Schriftart sieht man den Fehler besser: ",(0,i.kt)("inlineCode",{parentName:"p"},"www.vaIiant.ch"),"  "),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"absicherung-mit-passwortmanager"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Absicherung mit Passwortmanager")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Plugins von Passwortmanagern erkennen diese kaum sichtbaren details, so dass bei solchen Seiten kein Vorschlag zum automatischen Ausf\xfcllen angezeigt wird.")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Die Webseite kann z.B. Malware verbreiten resp. gehackt worden sein. D.h. der \xabInhalt\xbb wird nicht \xfcberpr\xfcft."))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=351437"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://w3techs.com/technologies/details/ce-httpsdefault"},"W3Techs"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://www.internetlivestats.com/total-number-of-websites/"},"internet live stats"),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},68982:function(e,t,n){t.Z=n.p+"assets/images/certs-ofi.gbsl.website-fede0fc3bed8564c3a5bdb85eac7ff47.png"},22753:function(e,t,n){t.Z=n.p+"assets/images/https-gbsl.ch-94b534677d2131f5c8c9728052fbab23.png"}}]);