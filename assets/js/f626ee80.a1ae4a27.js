"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[89291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),a=n(67294),i=n(86010),l=n(36162),o="details_BAp3";function c(e){var t=Object.assign({},e);return a.createElement(l.PO,(0,r.Z)({},t,{className:(0,i.default)("alert alert--info",o,t.className)}))}},82593:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return A}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=i[l],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:a},n)},u=n(92814),d=n(51436),f=n(68949),m=n(72389),p=n(21314),h=n(74322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,m.Z)(),a=r.useState("unchecked"),o=a[0],c=a[1],g=(0,p.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return g.loaded}),(function(e){e&&y(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&y(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(g.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(u.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:k(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),E=n(83117),N=n(75552),S=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(h.Z,null)})),Z=n(47271),z=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),x=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),i=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(Z.Z,null),n.loggedIn&&r.createElement(z,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),o=n(86010),c=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:l.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),l=i[0],s=i[1],d=e.caption&&"undefined"!==e.caption,f=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,l;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,l=t.top<=a&&t.bottom>=a,i&&l||n(!1)}},r.createElement(u,e),f&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,l?a.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&r.createElement(c,e.bib)))}},61014:function(e,t,n){var r=n(72389),a=n(71217),i=n(67294),l=n(21314),o=n(74322),c=n(7488),s=n(86010),u=n(86720),d=n(92814),f=n(51436),m=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},p=(0,a.Pi)((function(e){return i.createElement("span",{className:(0,s.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(d.G,{icon:f.nYk,onClick:e.onRemove}))})),h=(0,a.Pi)((function(e){var t=i.useState(""),n=t[0],r=t[1],a=i.useState(""),o=a[0],c=a[1],m=i.useState(""),h=m[0],g=m[1],b=(0,l.oR)("policyStore"),v=(0,l.oR)("userStore"),y=b.findPolicy(e.webKey);return y?i.createElement("div",{className:(0,s.default)(u.Z.configContainer)},i.createElement("div",{className:(0,s.default)(u.Z.showControl)},i.createElement(d.G,{icon:y.isConfigOpen?f.nYk:f.cNd,onClick:function(){y.showConfig(!y.isConfigOpen)}})),y.isConfigOpen&&i.createElement("div",{className:(0,s.default)(u.Z.config)},i.createElement("div",{className:(0,s.default)(u.Z.permissions)},Array.from(y.klasses).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"class")},color:"success"})})),Array.from(y.groups).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"group")},color:"danger"})})),Array.from(y.users).map((function(e,t){return i.createElement(p,{key:t,name:e,onRemove:function(){return y.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,s.default)(u.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return r(e.target.value)},disabled:y.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},v.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(n,"class"),r("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return c(e.target.value)},disabled:y.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(v.groups,b.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(o,"group"),c("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:h,onChange:function(e){return g(e.target.value)},disabled:y.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},v.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:y.locked,onClick:function(){y.addPermission(h,"user"),g("")}},"Add")))):null})),g=(0,a.Pi)((function(e){var t,n,a=(0,l.oR)("policyStore"),d=(0,l.oR)("userStore"),f=(0,r.Z)();if((0,l.aV)(e.webKey),!f)return i.createElement("div",null,"SSR");var p=a.find(e.webKey);return p?i.createElement("div",{"data--web-key":e.webKey,className:(0,s.default)(u.Z.wrapper,"solution-wrapper")},p.show||null!=(t=d.current)&&t.admin?i.createElement(c.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(m,null),!p.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,s.default)("alert alert--success",u.Z.solution),open:e.open},(null==(n=d.current)?void 0:n.admin)&&i.createElement(h,{webKey:p.webKey}),e.children):i.createElement("div",{className:(0,s.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(m,null))):i.createElement(o.Z,null)}));t.Z=g},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),s=n(51436),u=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(c.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),s=n(71217),u=n(74322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],h=r.useState(!1),g=h[0],b=h[1],v=r.useRef(null),y=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&g&&y.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,c.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:y.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&g&&y.setText(i)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(f,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},98730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(82593),c=n(61014),s=["components"],u={title:"Zertifizierungsstellen"},d="Zertifizierungsstellen [^1]",f={unversionedId:"Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",id:"version-24o/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",title:"Zertifizierungsstellen",description:"\xdcbertragung \xf6ffentlicher Schl\xfcssel",source:"@site/versioned_docs/version-24o/06-Kryptologie/06-Digitale-Signaturen/04-Zertifizierungsstellen.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",permalink:"/24o/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/06-Digitale-Signaturen/04-Zertifizierungsstellen.md",tags:[],version:"24o",sidebarPosition:4,frontMatter:{title:"Zertifizierungsstellen"},sidebar:"version-24o/sidebar",previous:{title:"Verfahren kombinieren",permalink:"/24o/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren"},next:{title:"Zusammenfassung",permalink:"/24o/Kryptologie/Digitale-Signaturen/the-big-picture"}},m={},p=[{value:"\xdcbertragung \xf6ffentlicher Schl\xfcssel",id:"\xfcbertragung-\xf6ffentlicher-schl\xfcssel",level:2},{value:"Schutz gegen Man-in-the-Middle-Attacken",id:"schutz-gegen-man-in-the-middle-attacken",level:2},{value:"Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?",id:"wieso-kann-sich-mallory-nicht-zwischen-trent-und-bob-einschleichen",level:2}],h={toc:p};function g(e){var t=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zertifizierungsstellen-"},"Zertifizierungsstellen ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("h2",{id:"\xfcbertragung-\xf6ffentlicher-schl\xfcssel"},"\xdcbertragung \xf6ffentlicher Schl\xfcssel"),(0,i.kt)("p",null,"\xd6ffentliche Schl\xfcssel enthalten keine geheime Information, k\xf6nnen also problemlos \xfcber einen offenen Kanal \xfcbertragen werden. Oder?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Angriff auf den \xf6ffentlichen Schl\xfcssel",options:{},isInline:!1,src:n(34660).Z,alt:"Angriff auf den \xf6ffentlichen Schl\xfcssel",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-angriff-auf-den-\xf6ffentlichen-schl\xfcssel"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Angriff auf den \xf6ffentlichen Schl\xfcssel")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alice schickt ihren \xf6ffentlichen Schl\xfcssel (also ihr Vorh\xe4ngeschloss) per Post an Bob. \xdcberlege dir, was der b\xf6sartige Mallory anstellen k\xf6nnte, um Alice und Bob zu \xfcberlisten."),(0,i.kt)(o.Z,{type:"text",webKey:"5b4c5a94-b1fc-4dd6-9c99-65c907b258d4",mdxType:"Answer"}),(0,i.kt)(c.Z,{webKey:"c6892ee0-018c-498f-9bbd-185f0e3038d2",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Da der \xf6ffentliche Schl\xfcssel nur aus Zahlen besteht, ist es f\xfcr Bob nicht erkennbar, ob er den richtigen Schl\xfcssel erhalten hat."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Man-in-the-middle-Attacke",options:{},isInline:!1,src:n(82803).Z,alt:"Man-in-the-middle-Attacke",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"schutz-gegen-man-in-the-middle-attacken"},"Schutz gegen Man-in-the-Middle-Attacken"),(0,i.kt)("p",null,"Wie k\xf6nnen wir uns vor Man-in-the-Middle-Attacken sch\xfctzen? Kann uns Trent helfen?"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=848484",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Die Rolle von Trent",options:{},isInline:!1,src:n(57308).Z,alt:"Die Rolle von Trent",mdxType:"Image"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-zertifizierungsstellen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe Zertifizierungsstellen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wie k\xf6nnte Trent daf\xfcr sorgen, dass die \xf6ffentlichen Schl\xfcssel besser \xfcberpr\xfcfbar sind?"),(0,i.kt)(o.Z,{type:"text",webKey:"a2ef63f4-8f01-4e78-8135-1eb43e4a09ed",mdxType:"Answer"}),(0,i.kt)(c.Z,{webKey:"c6892ee0-018c-498f-9bbd-185f0e3038d2",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Trent ist bekannt und akzeptiert als Zertifizierungsstelle, alle kennen seinen \xf6ffentlichen Schl\xfcssel. Wenn Trent die Kunden gut \xfcberpr\xfcft und deren ",(0,i.kt)("strong",{parentName:"p"},"\xf6ffentliche Schl\xfcssel")," (\u26a0\ufe0f die privaten Schl\xfcssel der Kunden kennt auch Trent nicht!) signiert, kann Bob sicher sein, den richtigen Schl\xfcssel zu verwenden. Er akzeptiert folglich keine unsignierten Schl\xfcssel mehr."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=848484",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Schutz vor Man-in-the-Middle-Attacken",options:{},isInline:!1,src:n(30024).Z,alt:"Schutz vor Man-in-the-Middle-Attacken",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"wieso-kann-sich-mallory-nicht-zwischen-trent-und-bob-einschleichen"},"Wieso kann sich Mallory nicht zwischen Trent und Bob einschleichen?"),(0,i.kt)("p",null,"Da im Internet nicht offensichtlich ist, mit wem man kommuniziert, k\xf6nnte sich Mallory als Alice ausgeben. Trent wird nur ben\xf6tigt, um eine Absicherung zu erhalten, dass Alice's \xf6ffentlicher Schl\xfcssel auch wirklich ihr geh\xf6rt. Bei der \xdcbermittlung des \xf6ffentlichen Schl\xfcssels wird HTTPS verwendet, so dass sich Mallory nicht dazwischenschleichen kann. Auch Alice und Bob k\xf6nnten HTTPS verwenden, doch dann weiss Bob immer noch nicht, ob er nicht f\xe4lschlicherweise eine Verbindung mit Mallory statt Alice aufgebaut hat..."),(0,i.kt)("p",null,"Das Aufbauen einer HTTPS Verbindung verwendet \xfcbrigens auch die Integrit\xe4tspr\xfcfung. Durch eine signierte Nachricht wird die IP Adresse des Servers \xfcberpr\xfcft. Aufgrund der Signatur kann die Nachricht nicht von Mallory stammen. Anschliessend wird gem\xe4ss dem Farbmischprinzip ein gemeinsamer Sitzungsschl\xfcssel f\xfcr die Verschl\xfcsselung der Verbindung erzeugt. So ist es f\xfcr Mallory unm\xf6glich, sich zwischen Trent und Bob zu stellen - sofern Bob die richtige IP-Adresse zu Trent besitzt."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=848484"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},57308:function(e,t,n){t.Z=n.p+"assets/images/certificates-task-0f98ec55655f87372b247f51f581173e.svg"},30024:function(e,t,n){t.Z=n.p+"assets/images/certificates-ee9ae7c1d4b32ec3faccc1a793df47d2.svg"},34660:function(e,t,n){t.Z=n.p+"assets/images/public-key-attack-1-7777f417dfcb3c24fcc79955faa0e137.svg"},82803:function(e,t,n){t.Z=n.p+"assets/images/public-key-attack-2-61efaa9b75204b38683dfe36179924a0.svg"}}]);