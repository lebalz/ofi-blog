"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24345],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return O},Z:function(){return P}});var a=n(67294),r=n(3435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var i=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=l[i],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(92814),m=n(51436),u=n(68949),p=n(72389),f=n(21314),k=n(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),g=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],h=(0,f.oR)("documentStore").find(e.webKey),N=function(e){h.loaded&&(c("unchecked"),h.setData({value:e,type:"string"}))},b=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,u.U5)((function(){return h.loaded}),(function(e){e&&b(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&b(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return N(e.target.value)},style:{width:e.width},value:h.value,className:g(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return N(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(h.value)},className:(0,i.default)(l[o],l.checkButton)},a.createElement(d.G,{icon:(t=o,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):a.createElement(k.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return l[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,l){return e.select?a.createElement("select",{key:l,onChange:function(e){return n(e.target.value,l)},value:r,className:v(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:l,type:"text",onChange:function(e){return n(e.target.value,l)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(k.Z,null)})),w=n(83117),E=n(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(k.Z,null)})),S=n(47271),C=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),B=n(97762),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),l=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||B.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),l?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(C,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(N,e),"array"===e.type&&a.createElement(y,e)):a.createElement(k.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_HRfh",l=n(39960),i=n(71217),o=n(21314),c=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(l.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(86010),l="loader_FEpR",i="badge_oWqf",o=n(71217),c=n(92814),s=n(51436),d=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(l)},a.createElement(c.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),s=n(71217),d=n(74322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],f=t[1],k=a.useState(!1),h=k[0],g=k[1],N=a.useRef(null),b=e.model,v=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}n.register("modules/imageCompress",a),e()}))}((function(){t&&(g(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return m&&h&&b.loaded?a.createElement("div",{onFocus:function(){return!s&&f(!0)},className:(0,c.default)(r)},a.createElement(m,{ref:N,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(l,e.monospace&&i,s?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&b.canUpdate&&h&&b.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(u,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},99694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(82593),o=["components"],c={title:"Blockchiffre"},s="Blockchiffre [^1]",d={unversionedId:"Kryptologie/Symmetrisch/blockchiffre",id:"version-24o/Kryptologie/Symmetrisch/blockchiffre",title:"Blockchiffre",description:"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden Blockchiffren erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in Bl\xf6cken verschl\xfcsselt wird.",source:"@site/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/blockchiffre",permalink:"/24o/Kryptologie/Symmetrisch/blockchiffre",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/03-Symmetrisch/04-blockchiffre.md",tags:[],version:"24o",sidebarPosition:4,frontMatter:{title:"Blockchiffre"},sidebar:"version-24o/sidebar",previous:{title:"XOR-Verschl\xfcsselung",permalink:"/24o/Kryptologie/Symmetrisch/xor"},next:{title:"Verkettung von Bl\xf6cken",permalink:"/24o/Kryptologie/Symmetrisch/block-chaining"}},m={},u=[{value:"Blockl\xe4nge",id:"blockl\xe4nge",level:2},{value:"Verschl\xfcsselung in Bl\xf6cken",id:"verschl\xfcsselung-in-bl\xf6cken",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchiffre-"},"Blockchiffre ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden ",(0,l.kt)("strong",{parentName:"p"},"Blockchiffren")," erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in ",(0,l.kt)("strong",{parentName:"p"},"Bl\xf6cken")," verschl\xfcsselt wird."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aktuelle-verschl\xfcsselungsverfahren"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aktuelle Verschl\xfcsselungsverfahren")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Aktuelle Verschl\xfcsselungsverfahren sind so komplex, dass wir sie unm\xf6glich verstehen k\xf6nnen. Daher werden wir viele der nachfolgend erw\xe4hnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen."),(0,l.kt)("p",{parentName:"div"},"Beim Thema Blockchiffren wollen wir aber kurz eintauchen und uns anhand einer einfachen Verschl\xfcsselung (XOR) anschauen, wie moderne Verschl\xfcsselung funktioniert."))),(0,l.kt)("h2",{id:"blockl\xe4nge"},"Blockl\xe4nge"),(0,l.kt)("p",null,"Da der Klartext dreimal so lange ist wie der Schl\xfcssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschl\xfcsseln. Die Blockl\xe4nge entspricht also der Schl\xfcssell\xe4nge:"),(0,l.kt)("div",{style:{},className:"flex flex-flex"},(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em"},className:"item slim-table"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Klartext"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEIMESTREFFEN"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"00111 00101 01000 00101 01001 01101 00101 10011 10100 10010 00101 00110 00110 00101 01110")))))),(0,l.kt)("div",{parentName:"div",style:{className:"slim-table",flexBasis:"13em"},className:"item slim-table"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Buchstaben"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pentacode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("span",{className:"monospace"},"10000 00101 01110 10100 00001"))))))),(0,l.kt)("h2",{id:"verschl\xfcsselung-in-bl\xf6cken"},"Verschl\xfcsselung in Bl\xf6cken"),(0,l.kt)("p",null,"Im folgenden Beispiel wird der oben bereits erw\xe4hnte Klartext mit dem Schl\xfcssel bitweise mit XOR verschl\xfcsselt:"),(0,l.kt)("div",{className:"slim-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GEHEI")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00111 00101 01000 00101 01001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"W FQH")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10111 00000 00110 10001 01000"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"MESTR")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"01101 00101 10011 10100 10010"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},". . S")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"11101 00000 11101 00000 10011"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Verschl\xfcsselung"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pentacode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Klartext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EFFEN")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"00101 00110 00110 00101 01110"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Schl\xfcssel"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Geheimtext Block 3"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UCHQO")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"10101 00011 01000 10001 01111")))))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-xor-blockchiffre"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe XOR-Blockchiffre")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den folgenden Text mit der XOR-Blockchiffre:"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Text"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"PAKET ZUGESTELLT")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Schl\xfcssel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BETA")),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"Codieren Sie zuerst den Text mit Pentacode (verwenden Sie das ",(0,l.kt)("a",{parentName:"li",href:"/24o/Kryptologie/Symmetrisch/codierung#pentacode"},"interaktiven Tool"),")."),(0,l.kt)("li",{parentName:"ol"},"Codierenn Sie anschliessend den Schl\xfcssel mit Pentacode."),(0,l.kt)("li",{parentName:"ol"},"Verschl\xfcsseln Sie den bin\xe4r dargestellten Text anschliessend mit dem bin\xe4r dargestellten Schl\xfcssel mittels XOR-Blockchiffre."),(0,l.kt)("li",{parentName:"ol"},"Decodieren Sie diesen wiederum mit Pentacode und \xfcberpr\xfcfen Sie die L\xf6sung.")),(0,l.kt)("h3",{parentName:"div",id:"vorgehenseweise"},"Vorgehenseweise"),(0,l.kt)(i.Z,{type:"text",webKey:"3bce79ec-5813-4d29-a7c5-3fec156bd472",monospace:!0,mdxType:"Answer"}),(0,l.kt)("h3",{parentName:"div",id:"l\xf6sung"},"L\xf6sung"),(0,l.kt)(i.Z,{type:"string",webKey:"773c8965-eecf-43fa-801f-d079fb81ad20",solution:"RD@DVENTE GUGIXU",sanitizer:function(e){return e.trim().toUpperCase()},mdxType:"Answer"}))),(0,l.kt)(i.Z,{type:"text",webKey:"bcdeeca1-2a54-4cf3-9187-849376053664",placeholder:"Notizen...",mdxType:"Answer"}),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=894637"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);