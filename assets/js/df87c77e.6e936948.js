"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[94266],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,p=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},934673:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(487462),a=n(667294),i=n(386010),l=n(263366),s=n(972389),o=n(986043),c="details_lb9f",u="isBrowser_bmU9",m="collapsibleContent_i85q",d=["summary","children"];function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function f(e){var t=e.summary,n=e.children,f=(0,l.Z)(e,d),g=(0,s.Z)(),y=(0,a.useRef)(null),b=(0,o.u)({initialState:!f.open}),v=b.collapsed,k=b.setCollapsed,w=(0,a.useState)(f.open),N=w[0],E=w[1];return a.createElement("details",(0,r.Z)({},f,{ref:y,open:N,"data-collapsed":v,className:(0,i.default)(c,g&&u,f.className),onMouseDown:function(e){h(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;h(t)&&p(t,y.current)&&(e.preventDefault(),v?(k(!1),E(!0)):k(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(o.z,{lazy:!1,collapsed:v,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),E(!e)}},a.createElement("div",{className:m},n)))}var g="details_b_Ee";function y(e){var t=Object.assign({},e);return a.createElement(f,(0,r.Z)({},t,{className:(0,i.default)("alert alert--info",g,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return Z},Z:function(){return C}});var r=n(667294),a=n(970804),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=i[l],n=""+t.replace(o,"")}return r.createElement("option",{value:t,className:a},n)},u=n(592814),m=n(51436),d=n(168949),h=n(972389),p=n(121314),f=n(274322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},b=(0,s.Pi)((function(e){var t,n=(0,h.Z)(),a=r.useState("unchecked"),s=a[0],o=a[1],g=(0,p.oR)("documentStore").find(e.webKey),b=function(e){g.loaded&&(o("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,d.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:g.value,className:y(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return v(g.value)},className:(0,l.default)(i[s],i.checkButton)},r.createElement(u.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):r.createElement(f.Z,null):r.createElement("div",null,"SSR")})),v=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},w=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(f.Z,null)})),N=n(487462),E=n(575552),S=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,N.Z)({model:t},e))):r.createElement(f.Z,null)})),x=n(647271),z=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),V=n(697762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},C=(0,s.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||V.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(b,e),"array"===e.type&&r.createElement(w,e)):r.createElement(f.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(667294),a="noLoginAlert_HRfh",i=n(239960),l=n(471217),s=n(121314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},61014:function(e,t,n){var r=n(972389),a=n(471217),i=n(667294),l=n(121314),s=n(274322),o=n(934673),c=n(386010),u=n(386720),m=n(592814),d=n(51436),h=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},p=(0,a.Pi)((function(e){return i.createElement("span",{className:(0,c.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(m.G,{icon:d.nYk,onClick:e.onRemove}))})),f=(0,a.Pi)((function(e){var t=i.useState(""),n=t[0],r=t[1],a=i.useState(""),s=a[0],o=a[1],h=i.useState(""),f=h[0],g=h[1],y=(0,l.oR)("policyStore"),b=(0,l.oR)("userStore"),v=y.findPolicy(e.webKey);return v?i.createElement("div",{className:(0,c.default)(u.Z.configContainer)},i.createElement("div",{className:(0,c.default)(u.Z.showControl)},i.createElement(m.G,{icon:v.isConfigOpen?d.nYk:d.cNd,onClick:function(){v.showConfig(!v.isConfigOpen)}})),v.isConfigOpen&&i.createElement("div",{className:(0,c.default)(u.Z.config)},i.createElement("div",{className:(0,c.default)(u.Z.permissions)},Array.from(v.klasses).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return v.removePermission(e,"class")},color:"success"})})),Array.from(v.groups).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return v.removePermission(e,"group")},color:"danger"})})),Array.from(v.users).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return v.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,c.default)(u.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return r(e.target.value)},disabled:v.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},b.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(n,"class"),r("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:s,onChange:function(e){return o(e.target.value)},disabled:v.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(b.groups,y.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(s,"group"),o("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:f,onChange:function(e){return g(e.target.value)},disabled:v.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},b.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(f,"user"),g("")}},"Add")))):null})),g=(0,a.Pi)((function(e){var t,n,a=(0,l.oR)("policyStore"),m=(0,l.oR)("userStore"),d=(0,r.Z)();if((0,l.aV)(e.webKey),!d)return i.createElement("div",null,"SSR");var p=a.find(e.webKey);return p?i.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(u.Z.wrapper,"solution-wrapper")},p.show||null!=(t=m.current)&&t.admin?i.createElement(o.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(h,null),!p.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=m.current)?void 0:n.admin)&&i.createElement(f,{webKey:p.webKey}),e.children):i.createElement("div",{className:(0,c.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(h,null))):i.createElement(s.Z,null)}));t.Z=g},274322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a=n(386010),i="loader_FEpR",l="badge_oWqf",s=n(471217),o=n(592814),c=n(51436),u=(0,s.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(667294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=n(386010),c=n(471217),u=n(274322),m=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],p=t[1],f=r.useState(!1),g=f[0],y=f[1],b=r.useRef(null),v=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){m=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(y(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return m&&g&&v.loaded?r.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,o.default)(a)},r.createElement(m,{ref:b,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,o.default)(i,e.monospace&&l,c?void 0:s),value:v.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(i)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(d,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},599793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return h}});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),l=n(682593),s=n(61014),o=["components"],c={title:"Kombinierte Verfahren"},u="Kombinierte Verfahren [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/kombiniert",id:"version-24o/Kryptologie/Asymmetrisch/kombiniert",title:"Kombinierte Verfahren",description:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",source:"@site/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/kombiniert",permalink:"/24o/Kryptologie/Asymmetrisch/kombiniert",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/05-kombiniert.md",tags:[],version:"24o",sidebarPosition:5,frontMatter:{title:"Kombinierte Verfahren"},sidebar:"version-24o/sidebar",previous:{title:"Asymm. Verschl\xfcsselung",permalink:"/24o/Kryptologie/Asymmetrisch/asymm-encryption"},next:{title:"Hashfunktionen",permalink:"/24o/category/hashfunktionen"}},d={},h=[{value:"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung",id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung",level:2},{value:"Beide Verfahren kombinieren",id:"beide-verfahren-kombinieren",level:2},{value:"Symmetrische Verfahren zur Verschl\xfcsselung der Daten",id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten",level:2},{value:"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung",id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung",level:2},{value:"Zus\xe4tzlicher Vorteil",id:"zus\xe4tzlicher-vorteil",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=p("Figure"),g=p("SourceRef"),y={toc:h};function b(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},y,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kombinierte-verfahren-"},"Kombinierte Verfahren ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"vergleich-symmetrischer-und-asymmetrischer-verschl\xfcsselung"},"Vergleich symmetrischer und asymmetrischer Verschl\xfcsselung"),(0,i.kt)("p",null,"Wir haben in der letzten Aufgabe gesehen, dass asymmetrische Verschl\xfcsselung auch Nachteile hat. Wir wollen die Vor- und Nachteile einander gegen\xfcberstellen."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Symmetrische Verschl\xfcsselung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Asymmetrische Verschl\xfcsselung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 sehr schnell"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 ~ 1'000x langsamer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 1 Nachricht f\xfcr alle"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 1 Nachricht pro Person")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2718 geheimen Schl\xfcssel austauschen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2714 Public Key ist \xf6ffentlich")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2192 nur 1 gemeinsamer Schl\xfcssel"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2192 1 Schl\xfcsselpaar pro Person")))),(0,i.kt)("h2",{id:"beide-verfahren-kombinieren"},"Beide Verfahren kombinieren"),(0,i.kt)("p",null,"In kryptographischen Verfahren, die heutzutage eingesetzt werden, ist das Ziel, die Vorteile beider Verfahren zu nutzen und die Nachteile zu eliminieren. Daher werden zur Verschl\xfcsselung von Daten beide Verfahren eingesetzt:"),(0,i.kt)(f,{options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",src:n(128616).Z,width:"840",height:"360"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(g,{parentName:"figcaption",bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,i.kt)("h2",{id:"symmetrische-verfahren-zur-verschl\xfcsselung-der-daten"},"Symmetrische Verfahren zur Verschl\xfcsselung der Daten"),(0,i.kt)("p",null,"Da asymmetrische Verfahren ca. 1'000x langsamer sind als symmetrische Verfahren, werden zur Verschl\xfcsselung der Daten symmetrische Verfahren eingesetzt. Denn kryptographische Verfahren werden nicht nur zur Verschl\xfcsselung kurzer Nachrichten (wie z.B. Textnachrichten) eingesetzt, h\xe4ufig m\xfcssen auch grosse Datenmengen (z.B. hochaufl\xf6sende Bilder, Tondokumente, Videos, ...) verschl\xfcsselt werden, folglich spielt die Geschwindigkeit eine zentrale Rolle."),(0,i.kt)("p",null,"Zudem ist bei symmetrischer Verschl\xfcsselung praktisch, dass die Daten f\xfcr s\xe4mtliche Empf\xe4nger gleich verschl\xfcsselt sind und somit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nicht mehrmals verschl\xfcsselt werden m\xfcssen (Zeitbedarf) und"),(0,i.kt)("li",{parentName:"ul"},"in derselben Nachricht an alle Empf\xe4nger verschickt werden k\xf6nnen, ohne dass die Nachricht unn\xf6tig ein Mehrfaches ihrer urspr\xfcnglichen L\xe4nge erreicht (Platzbedarf).")),(0,i.kt)("h2",{id:"asymmetrische-verfahren-zur-sicheren-schl\xfcssel\xfcbertragung"},"Asymmetrische Verfahren zur sicheren Schl\xfcssel\xfcbertragung"),(0,i.kt)("p",null,"Asymmetrische Verfahren sind langsamer, aber zur ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung des symmetrischen Schl\xfcssels")," perfekt geeignet, da dieser sehr kurz ist und im Vergleich zu den Daten Geschwindigkeit keine Rolle spielt."),(0,i.kt)("p",null,"Zudem ist auch der verschl\xfcsselte symmetrische Schl\xfcssel sehr kurz, so dass die Nachricht nur unwesentlich l\xe4nger wird, wenn diese f\xfcr mehrere Personen verfasst wird."),(0,i.kt)("h2",{id:"zus\xe4tzlicher-vorteil"},"Zus\xe4tzlicher Vorteil"),(0,i.kt)("p",null,"Der symmetrische Schl\xfcssel kann so vom Computer gew\xe4hlt werden. Dies hat zwei Vorteile:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Schl\xfcssel ist wirklich zuf\xe4llig und gleichverteilt im gesamten Schl\xfcsselraum (ein Passwort, das von einer Person gew\xe4hlt wird, schafft dies nicht)."),(0,i.kt)("li",{parentName:"ol"},"Der Schl\xfcssel kann f\xfcr jede Nachricht neu gew\xe4hlt werden. Somit erh\xe4lt jede Nachricht einen eigenen Schl\xfcssel.")),(0,i.kt)("p",null,"Man spricht daher von einem ",(0,i.kt)("strong",{parentName:"p"},"Sitzungsschl\xfcssel")," (engl. session key) f\xfcr die symmetrische Verschl\xfcsselung. Die folgende \xdcbersicht stellt prinzipiell dasselbe dar wie die Abbildung oben, allerdings mit einem anderem Fokus."),(0,i.kt)(f,{options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",src:n(807639).Z,width:"2375",height:"1792"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Symmetrische und asymmetrische Verschl\xfcsselung kombiniert",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(g,{parentName:"figcaption",bib:{author:"T. Jampen, S. Rothe remixed by B. Hofer",source:"https://rothe.io/?b=crypto&p=559732",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},mdxType:"SourceRef"}))),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"auch-symmetrische-verfahren-sind-sicher"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Auch symmetrische Verfahren sind sicher!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Asymmetrische Verfahren sind also nicht besser als symmetrische! Sie erf\xfcllen einen anderen Zweck und werden gleichzeitig mit symmetrischen Verfahren eingesetzt. Symmetrische Verfahren sind also nicht unsicher, einzig die Erstellung des Schl\xfcssels und der Schl\xfcsselaustausch sind ein Problem."))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"kombinierte-entschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Kombinierte Entschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Stellen Sie dar, wie die Umkehrung \u2013 also die Entschl\xfcsselung \u2013 funktioniert, wenn symmetrische und asymmetrische Verfahren kombiniert verwendet werden."),(0,i.kt)(l.Z,{type:"text",webKey:"4a33b602-eb5f-427d-ba5e-725756b5f112",mdxType:"Answer"}),(0,i.kt)(s.Z,{webKey:"1f2cf2b5-9a49-48e7-9b45-6bca55560abf",mdxType:"Solution"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Symmetrische und asymmetrische Entschl\xfcsselung kombiniert",src:n(374775).Z,width:"2375",height:"1792"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Symmetrische und asymmetrische Entschl\xfcsselung kombiniert",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(g,{parentName:"figcaption",bib:{author:"Macrovector, remixed by T. Jampen, S. Rothe",source:"https://rothe.io/?b=crypto&p=280524",licence:"Freepik Licence",licence_url:"https://www.freepik.com/free-vector/office-worker-set_1539145.htm",edited:!1},mdxType:"SourceRef"})))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559732"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},374775:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-decryption-binary-cee23aa478157464604c7652a1c6b61f.svg"},807639:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-binary-ba7dbdb6e184e37b434e13bebe3a3687.svg"},128616:function(e,t,n){t.Z=n.p+"assets/images/symm-asymm-encryption-ca8b9f6a8855055369b66ca053a9e97c.svg"}}]);