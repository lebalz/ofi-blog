"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[89789],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7488:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(83117),r=a(67294),l=a(86010),i=a(36162),s="details_BAp3";function o(e){var t=Object.assign({},e);return r.createElement(i.PO,(0,n.Z)({},t,{className:(0,l.default)("alert alert--info",s,t.className)}))}},52084:function(e,t,a){a.d(t,{x:function(){return K},Z:function(){return z}});var n=a(67294),r=a(3435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=a(86010),s=a(71217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(o.test(t)){var i=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=l[i],a=""+t.replace(o,"")}return n.createElement("option",{value:t,className:r},a)},m=a(92814),u=a(51436),d=a(68949),p=a(72389),f=a(21314),g=a(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,a,r,s=(0,p.Z)(),o=n.useState("unchecked"),h=o[0],N=o[1],v=(0,f.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},b=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};N(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,d.U5)((function(){return v.loaded}),(function(e){e&&b(v.value)}))}),[v]),n.useEffect((function(){v.loaded&&b(v.value)}),[v,s]),s?v.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:k(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(a=v.legacyData)?void 0:a.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return b(v.value)},className:(0,i.default)(l[h],l.checkButton)},n.createElement(m.G,{icon:(r=h,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):n.createElement(g.Z,null):n.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return l[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},b=(0,s.Pi)((function(e){var t,a=(0,f.oR)("documentStore").find(e.webKey),r=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var r=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:r}))}};return a.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,l){return e.select?n.createElement("select",{key:l,onChange:function(e){return r(e.target.value,l)},value:t,className:y(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:l,type:"text",onChange:function(e){return r(e.target.value,l)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(g.Z,null)})),w=a(83117),E=a(75552),x=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(E.Z,(0,w.Z)({model:t},e))):n.createElement(g.Z,null)})),S=a(47271),O=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,d.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},R=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(b,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return O("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return O("use_current",t)}},"Nein (verwerfen)"))):null})),C=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=a(46858),P=a(78982),Z=a(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=function(e){if(!e.id)return function(){};var t=function(){try{return(0,_.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,P.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,P.cl)(e.id,t)}}}:function(){}},z=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),a=(0,f.oR)("msalStore"),r=t.find(e.webKey),l=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,L(e)),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(S.Z,null),a.loggedIn&&n.createElement(R,e),a.loggedIn&&n.createElement(C,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(b,e)):n.createElement(g.Z,null):n.createElement("div",null,"SSR")}))},47271:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r="noLoginAlert_HRfh",l=a(39960),i=a(71217),s=a(21314),o=(0,i.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))}))},61014:function(e,t,a){var n=a(72389),r=a(71217),l=a(67294),i=a(21314),s=a(74322),o=a(7488),c=a(86010),m=a(86720),u=a(92814),d=a(51436),p=function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},l.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,r.Pi)((function(e){return l.createElement("span",{className:(0,c.default)(m.Z.policy,"badge","badge--"+e.color)},e.name," ",l.createElement(u.G,{icon:d.nYk,onClick:e.onRemove}))})),g=(0,r.Pi)((function(e){var t=l.useState(""),a=t[0],n=t[1],r=l.useState(""),s=r[0],o=r[1],p=l.useState(""),g=p[0],h=p[1],k=(0,i.oR)("policyStore"),N=(0,i.oR)("userStore"),v=k.findPolicy(e.webKey);return v?l.createElement("div",{className:(0,c.default)(m.Z.configContainer)},l.createElement("div",{className:(0,c.default)(m.Z.showControl)},l.createElement(u.G,{icon:v.isConfigOpen?d.nYk:d.cNd,onClick:function(){v.showConfig(!v.isConfigOpen)}})),v.isConfigOpen&&l.createElement("div",{className:(0,c.default)(m.Z.config)},l.createElement("div",{className:(0,c.default)(m.Z.permissions)},Array.from(v.klasses).map((function(e,t){return l.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"class")},color:"success"})})),Array.from(v.groups).map((function(e,t){return l.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"group")},color:"danger"})})),Array.from(v.users).map((function(e,t){return l.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"user")},color:"primary"})}))),l.createElement("div",{className:(0,c.default)(m.Z.update)},l.createElement("input",{type:"text",placeholder:"Klasse",value:a,onChange:function(e){return n(e.target.value)},disabled:v.locked,list:"solution-policy-for-classes"}),l.createElement("datalist",{id:"solution-policy-for-classes"},N.klasses.map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(a,"class"),n("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:s,onChange:function(e){return o(e.target.value)},disabled:v.locked,list:"solution-policy-for-groups"}),l.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(N.groups,k.groups))).map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(s,"group"),o("")}},"Add"),l.createElement("input",{type:"email",placeholder:"User",value:g,onChange:function(e){return h(e.target.value)},disabled:v.locked,list:"solution-policy-for-users"}),l.createElement("datalist",{id:"solution-policy-for-users"},N.users.map((function(e,t){return l.createElement("option",{key:t,value:e.email})}))),l.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(g,"user"),h("")}},"Add")))):null})),h=(0,r.Pi)((function(e){var t,a,r=(0,i.oR)("policyStore"),u=(0,i.oR)("userStore"),d=(0,n.Z)();if((0,i.aV)(e.webKey),!d)return l.createElement("div",null,"SSR");var f=r.find(e.webKey);return f?l.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(m.Z.wrapper,"solution-wrapper")},f.show||null!=(t=u.current)&&t.admin?l.createElement(o.Z,{summary:l.createElement("summary",null,e.title||"L\xf6sung"," ",l.createElement(p,null),!f.show&&l.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",m.Z.solution),open:e.open},(null==(a=u.current)?void 0:a.admin)&&l.createElement(g,{webKey:f.webKey}),e.children):l.createElement("div",{className:(0,c.default)("alert",m.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",l.createElement(p,null))):l.createElement(s.Z,null)}));t.Z=h},74322:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(86010),l="loader_FEpR",i="badge_oWqf",s=a(71217),o=a(92814),c=a(51436),m=(0,s.Pi)((function(){return n.createElement("div",{className:(0,r.default)(l)},n.createElement(o.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",s="disableToolbar_bRdP",o=a(86010),c=a(71217),m=a(74322),u=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=n.useState(!1),c=t[0],f=t[1],g=n.useState(!1),h=g[0],k=g[1],N=n.useRef(null),v=e.model,y=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){u=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}a.register("modules/imageCompress",n),e()}))}((function(){t&&(k(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return u&&h&&v.loaded?n.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,o.default)(r)},n.createElement(u,{ref:N,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,o.default)(l,e.monospace&&i,c?void 0:s),value:v.text||"",onChange:function(t,a,n,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&v.canUpdate&&h&&v.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(d,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(m.Z,null)}))},46858:function(e,t,a){a.d(t,{Vj:function(){return n},Vx:function(){return r},ly:function(){return l}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{cl:function(){return i},rV:function(){return l}});var n=864e5,r=2592e6,l=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var l=JSON.parse(r);if("object"==typeof l){var i=l[e];return void 0===i?a:i}return a}}var o=localStorage.getItem(e);return o?JSON.parse(o):a}catch(c){return a}},i=function(e,t){try{if(t){var a=l(t,void 0,{expiry:Date.now()+r});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=l(t,void 0,{expiry:e+r});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},2248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(52084),s=a(61014),o=["components"],c={title:"XOR-Verschl\xfcsselung"},m="XOR-Verschl\xfcsselung [^1]",u={unversionedId:"Kryptologie/Symmetrisch/xor",id:"version-24o/Kryptologie/Symmetrisch/xor",title:"XOR-Verschl\xfcsselung",description:"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen 0 und 1 zur Verf\xfcgung stehen.",source:"@site/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/03-xor.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/xor",permalink:"/24o/Kryptologie/Symmetrisch/xor",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/03-xor.md",tags:[],version:"24o",sidebarPosition:3,frontMatter:{title:"XOR-Verschl\xfcsselung"},sidebar:"version-24o/sidebar",previous:{title:"Codierung",permalink:"/24o/Kryptologie/Symmetrisch/codierung"},next:{title:"Blockchiffre",permalink:"/24o/Kryptologie/Symmetrisch/blockchiffre"}},d={},p=[],f={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xor-verschl\xfcsselung-"},"XOR-Verschl\xfcsselung ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," zur Verf\xfcgung stehen."),(0,l.kt)("p",null,"Nebst den bekannten Operationen,  ",(0,l.kt)("em",{parentName:"p"},"Addition, SUbtraktion, Multiplikation und Division"),", kann ein Computer auch noch weitere Operationen auf zwei Bin\xe4rzahlen anwenden. Eine solche Operation ist das ",(0,l.kt)("strong",{parentName:"p"},"XOR")," (",(0,l.kt)("em",{parentName:"p"},"Exclusive OR"),"):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Exclusive or or exclusive disjunction is a logical operation that is 1 if and only if its arguments differ (one is 1, the other is 0).",(0,l.kt)("sup",{parentName:"p",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,l.kt)("p",null,"XOR kann auch zur Verschl\xfcsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schl\xfcssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes."),(0,l.kt)("p",null,"Die Wahrheitstabelle sieht folgendermassen aus:"),(0,l.kt)("div",{style:{},className:"flex flex-cards"},(0,l.kt)("div",{parentName:"div",style:{flexBasis:"13em",className:"slim-table;normal-header"},className:"item card slim-table normal-header"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("h3",{parentName:"div",id:"verschl\xfcsselung"},"Verschl\xfcsselung"),(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"p")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"k")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"c")," = ",(0,l.kt)("em",{parentName:"th"},"p")," ",(0,l.kt)("strong",{parentName:"th"},"XOR")," ",(0,l.kt)("em",{parentName:"th"},"k")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},"p"),": ",(0,l.kt)("em",{parentName:"p"},"plain text")," (Klartext) ",(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"k"),": ",(0,l.kt)("em",{parentName:"p"},"key")," (Schl\xfcssel) ",(0,l.kt)("br",null),"\n",(0,l.kt)("em",{parentName:"p"},"c"),": ",(0,l.kt)("em",{parentName:"p"},"cipher")," (Verschl\xfcsselt)"))),(0,l.kt)("div",{parentName:"div",style:{flexBasis:"13em",className:"slim-table;normal-header"},className:"item card slim-table normal-header"},(0,l.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,l.kt)("h3",{parentName:"div",id:"entschl\xfcsselung"},"Entschl\xfcsselung"),(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"c")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"k")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("em",{parentName:"th"},"p")," = ",(0,l.kt)("em",{parentName:"th"},"c")," ",(0,l.kt)("strong",{parentName:"th"},"XOR")," ",(0,l.kt)("em",{parentName:"th"},"k")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"))))))),(0,l.kt)("p",null,"Analog zu ROT13 gilt auch hier: Die Verschl\xfcsselung ist identisch mit der Entschl\xfcsselung, da Folgendes gilt:"),(0,l.kt)("div",{className:"math math-display"},(0,l.kt)("span",{parentName:"div",className:"katex-display"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,l.kt)("mi",{parentName:"mrow"},"c"),(0,l.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow"},"="),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"p"),(0,l.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,l.kt)("mtext",{parentName:"mrow"},"\xa0XOR\xa0"),(0,l.kt)("mi",{parentName:"mrow"},"k"),(0,l.kt)("mo",{parentName:"mrow"},"="),(0,l.kt)("mi",{parentName:"mrow"},"p")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\ c \\text{ XOR } k = (p \\text{ XOR } k) \\text{ XOR } k = p")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,l.kt)("span",{parentName:"span",className:"mspace"},"\xa0"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,l.kt)("span",{parentName:"span",className:"mord text"},(0,l.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"="),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,l.kt)("span",{parentName:"span",className:"mord text"},(0,l.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"),(0,l.kt)("span",{parentName:"span",className:"mord text"},(0,l.kt)("span",{parentName:"span",className:"mord"},"\xa0XOR\xa0")),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"="),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,l.kt)("p",null,"Dies k\xf6nnen Sie mit den Tabellen oben leicht \xfcberpr\xfcfen."),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-xor-verschl\xfcsselung"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Verschl\xfcsselung")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie die Bitfolge mit dem angegebenen Schl\xfcssel"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"10100 11101 10110")," (Bitfolge des Klartexts)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"00101 01010 11100")," (Bitfolge des Schl\xfcssels)")),(0,l.kt)("h3",{parentName:"div",id:"bitfolge-des-geheimtexts"},"Bitfolge des Geheimtexts"),(0,l.kt)(i.Z,{type:"string",webKey:"79c55c56-7d5f-4c7f-95d3-38aed13e16ad",solution:"100011011101010",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-textverschl\xfcsselung-mit-xor"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Textverschl\xfcsselung mit XOR")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Sie erhalten von einer Kollegin folgende verschl\xfcsselte Nachricht:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"01010 00100 01010 11011 00000\n")),(0,l.kt)("p",{parentName:"div"},"Als Schl\xfcssel haben Sie das Wort ",(0,l.kt)("inlineCode",{parentName:"p"},"MACHT")," abgemacht."),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Mit Pentacode codierter Schl\xfcssel  "),(0,l.kt)(i.Z,{type:"string",webKey:"4159b846-71e5-4205-9907-975e3092c00c",solution:"01101 00001 00011 01000 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bin\xe4r entschl\xfcsselte Nachricht"),(0,l.kt)(i.Z,{type:"string",webKey:"c4e4f353-6f68-454a-b0ee-ac23695e61c5",solution:"00111 00101 01001 10011 10100",sanitizer:function(e){return e.replace(/\s/g,"")},mdxType:"Answer"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Klartext (bin\xe4r entschl\xfcsselte Bitfolge mit Pentacode zur\xfcckverwandeln)"),(0,l.kt)(i.Z,{type:"string",webKey:"bd96e44e-96a7-404e-8d55-ed7007e1309a",solution:"GEIST",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-bildverschl\xfcsselung-mit-xor"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Bildverschl\xfcsselung mit XOR")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Zeichnen Sie ein 5x5-Pixel-Bild (mit Hilfe des interaktiven Tools auf der vorherigen Seite: Kopieren Sie das Bild und f\xfcgen es unten ein. Halten Sie auch die Bitfolge fest)"),(0,l.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie die Bitfolge mit dem Schl\xfcssel ",(0,l.kt)("inlineCode",{parentName:"li"},"ABCDE"),"."),(0,l.kt)("li",{parentName:"ol"},"Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest)."),(0,l.kt)("li",{parentName:"ol"},"Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?")),(0,l.kt)(i.Z,{type:"text",webKey:"87a642b5-0a0b-4da3-a808-a4629294f359",mdxType:"Answer"}),(0,l.kt)(s.Z,{webKey:"e445b1ac-3c01-4268-9f57-796c401258a8",mdxType:"Solution"},(0,l.kt)("p",{parentName:"div"},"Wichtige Punkte:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Auch Bilder (im allgemeinen jegliche Bin\xe4r-Daten) lassen sich digital verschl\xfcsseln"),(0,l.kt)("li",{parentName:"ul"},"Vom verschl\xfcsselten Bild kann ",(0,l.kt)("strong",{parentName:"li"},"nicht")," auf das Original geschlossen werden - sowohl die Anzahl schwarzer/weisser Felder wie auch deren Anordnung ist wild durchmischt. "))))),(0,l.kt)(i.Z,{type:"text",webKey:"b978535b-b455-4a60-aa44-8a32aac4a899",placeholder:"Notizen...",mdxType:"Answer"}),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=353789"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"http://mathworld.wolfram.com/XOR.html"},"Germundsson, Roger; Weisstein, Eric"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);