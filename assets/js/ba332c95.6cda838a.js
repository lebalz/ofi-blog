"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56823],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(p,l(l({ref:t},s),{},{components:n})):r.createElement(p,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return O},Z:function(){return S}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),b=n(74322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,m.Z)(),a=r.useState("unchecked"),o=a[0],c=a[1],g=(0,p.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return g.loaded}),(function(e){e&&y(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&y(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:h(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(g.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(s.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(b.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},E=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(b.Z,null)})),w=n(83117),N=n(75552),_=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,w.Z)({model:t},e))):r.createElement(b.Z,null)})),x=n(47271),C=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(97762),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(C,{webKey:e.webKey}),"text"===e.type&&r.createElement(_,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(E,e)):r.createElement(b.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},u=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+u(n.size)+")",t.maxHeight=u(n.size),delete n.size),n.height&&(t.maxHeight=u(n.height),t.height=u(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+u(n.width)+")",t.width=u(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(s,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],u=i[1],d=e.caption&&"undefined"!==e.caption,f=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(s,e),f&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return u(!l)}},"@"),l&&r.createElement(c,e.bib)))}},91033:function(e,t,n){var r=n(86010),a=n(67294),i=n(96734),l=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,o=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "];t.Z=function(){var e=a.useState(""),t=e[0],n=e[1],c=a.useState(""),u=c[0],s=c[1],d=a.useState("text"),f=d[0],m=d[1];return a.useEffect((function(){if("text"===f&&0!==t.length){var e=t.split("").map((function(e){var t=o.indexOf(e),n=t%5;return""+(Math.floor(t/5)+1)+(n+1)}));s(e.join(" "))}}),[t]),a.useEffect((function(){if("cipher"===f&&0!==u.length){var e=u.split(" ").map((function(e){var t=e.split("").map((function(e){return Number.parseInt(e,10)-1})),n=t[0],r=t[1];return o[5*n+r]}));n(e.join(""))}}),[u]),a.createElement("div",{className:(0,r.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);m("text"),n(function(e){return e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(l,"")}(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,r.default)(i.Z.input),value:u,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);m("cipher"),s(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))}},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),u=n(51436),s=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),u=n(71217),s=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],p=t[1],b=r.useState(!1),g=b[0],h=b[1],v=r.useRef(null),y=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(h(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&g&&y.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,u?void 0:o),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&g&&y.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(f,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},42579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(91033),c=(n(82593),["components"]),u={title:"Polybios-Chiffre"},s="Polybios-Chiffre [^1]",d={unversionedId:"Kryptologie/Antike/Polybios",id:"version-24o/Kryptologie/Antike/Polybios",title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/versioned_docs/version-24o/06-Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/24o/Kryptologie/Antike/Polybios",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"24o",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"version-24o/sidebar",previous:{title:"Skytale",permalink:"/24o/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/24o/Kryptologie/Antike/Caesar"}},f={},m=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",level:2}],p={toc:m};function b(e){var t=e.components,u=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,i.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"undefined",options:{},isInline:!1,src:n(75885).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Die beiden Buchstaben ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,i.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,i.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,i.kt)("p",null,"So wird der Klartext ",(0,i.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,i.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,i.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,i.kt)(o.Z,{mdxType:"Polybios"}),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},75885:function(e,t,n){t.Z=n.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);