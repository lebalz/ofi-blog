"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[71769],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},934673:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(487462),r=n(667294),i=n(386010),l=n(263366),o=n(972389),c=n(986043),s="details_lb9f",d="isBrowser_bmU9",u="collapsibleContent_i85q",m=["summary","children"];function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function g(e){var t=e.summary,n=e.children,g=(0,l.Z)(e,m),h=(0,o.Z)(),v=(0,r.useRef)(null),k=(0,c.u)({initialState:!g.open}),b=k.collapsed,w=k.setCollapsed,y=(0,r.useState)(g.open),N=y[0],E=y[1];return r.createElement("details",(0,a.Z)({},g,{ref:v,open:N,"data-collapsed":b,className:(0,i.default)(s,h&&d,g.className),onMouseDown:function(e){p(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;p(t)&&f(t,v.current)&&(e.preventDefault(),b?(w(!1),E(!0)):w(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(c.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){w(e),E(!e)}},r.createElement("div",{className:u},n)))}var h="details_b_Ee";function v(e){var t=Object.assign({},e);return r.createElement(g,(0,a.Z)({},t,{className:(0,i.default)("alert alert--info",h,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return P}});var a=n(667294),r=n(970804),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(592814),u=n(51436),m=n(168949),p=n(972389),f=n(121314),g=n(274322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),o=r[0],c=r[1],h=(0,f.oR)("documentStore").find(e.webKey),k=function(e){h.loaded&&(c("unchecked"),h.setData({value:e,type:"string"}))},b=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&b(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&b(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:h.value,className:v(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(h.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(d.G,{icon:(t=o,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:w(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(s,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),N=n(487462),E=n(575552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),z=n(647271),S=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(697762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(z.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},61014:function(e,t,n){var a=n(972389),r=n(471217),i=n(667294),l=n(121314),o=n(274322),c=n(934673),s=n(386010),d=n(386720),u=n(592814),m=n(51436),p=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,r.Pi)((function(e){return i.createElement("span",{className:(0,s.default)(d.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(u.G,{icon:m.nYk,onClick:e.onRemove}))})),g=(0,r.Pi)((function(e){var t=i.useState(""),n=t[0],a=t[1],r=i.useState(""),o=r[0],c=r[1],p=i.useState(""),g=p[0],h=p[1],v=(0,l.oR)("policyStore"),k=(0,l.oR)("userStore"),b=v.findPolicy(e.webKey);return b?i.createElement("div",{className:(0,s.default)(d.Z.configContainer)},i.createElement("div",{className:(0,s.default)(d.Z.showControl)},i.createElement(u.G,{icon:b.isConfigOpen?m.nYk:m.cNd,onClick:function(){b.showConfig(!b.isConfigOpen)}})),b.isConfigOpen&&i.createElement("div",{className:(0,s.default)(d.Z.config)},i.createElement("div",{className:(0,s.default)(d.Z.permissions)},Array.from(b.klasses).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"class")},color:"success"})})),Array.from(b.groups).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"group")},color:"danger"})})),Array.from(b.users).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return b.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,s.default)(d.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:b.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},k.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(n,"class"),a("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return c(e.target.value)},disabled:b.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(k.groups,v.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(o,"group"),c("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:g,onChange:function(e){return h(e.target.value)},disabled:b.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},k.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(g,"user"),h("")}},"Add")))):null})),h=(0,r.Pi)((function(e){var t,n,r=(0,l.oR)("policyStore"),u=(0,l.oR)("userStore"),m=(0,a.Z)();if((0,l.aV)(e.webKey),!m)return i.createElement("div",null,"SSR");var f=r.find(e.webKey);return f?i.createElement("div",{"data--web-key":e.webKey,className:(0,s.default)(d.Z.wrapper,"solution-wrapper")},f.show||null!=(t=u.current)&&t.admin?i.createElement(c.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(p,null),!f.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,s.default)("alert alert--success",d.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&i.createElement(g,{webKey:f.webKey}),e.children):i.createElement("div",{className:(0,s.default)("alert",d.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(p,null))):i.createElement(o.Z,null)}));t.Z=h},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),c=n(592814),s=n(51436),d=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:s.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(386010),s=n(471217),d=n(274322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((function(e){var t=a.useState(!1),s=t[0],f=t[1],g=a.useState(!1),h=g[0],v=g[1],k=a.useRef(null),b=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return u&&h&&b.loaded?a.createElement("div",{onFocus:function(){return!s&&f(!0)},className:(0,c.default)(r)},a.createElement(u,{ref:k,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(i,e.monospace&&l,s?void 0:o),value:b.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&h&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},130592:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(667294),r={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},i=n(386010),l=function(e){return a.createElement("div",{className:r.step},e.code)},o=function(e){return a.createElement("div",{className:(0,i.default)(r.call,r.step,r.bordered)},e.code)},c=function(e){return a.createElement("div",{className:(0,i.default)(r.step,r.statement)},e.code)},s=function(e){return a.createElement("div",{className:(0,i.default)(r.repeat,r.step,r.indent)},a.createElement("div",{className:r.header},e.code),a.createElement("div",{className:r.body},e.block&&a.createElement(f,{program:e.block})))},d=function(e){return a.createElement("div",{className:(0,i.default)(r.def,r.step,r.indent)},a.createElement("div",{className:r.header},e.code),a.createElement("div",{className:r.body},e.block&&a.createElement(f,{program:e.block})))},u=function(e){return a.createElement("div",{className:(0,i.default)(r.input,r.step)},e.code)},m=function(e){return a.createElement("div",{className:(0,i.default)(r.if,r.step,r.indent)},a.createElement("div",{className:r.header},e.code),a.createElement("div",{className:r.body},e.block&&a.createElement(f,{program:e.block})))},p=function(e){return a.createElement("div",{className:(0,i.default)(r.else,r.step)},a.createElement("div",{className:r.header},e.code),a.createElement("div",{className:r.body},e.block&&a.createElement(f,{program:e.block})))},f=function(e){return a.createElement("div",{className:r.strukto},e.program.map((function(e,t){switch(e.type){case"call":return a.createElement(o,{key:t,code:e.code});case"def":return a.createElement(d,{key:t,code:e.code,block:e.block});case"repeat":return a.createElement(s,{key:t,code:e.code,block:e.block});case"step":return a.createElement(l,{key:t,code:e.code});case"statement":return a.createElement(c,{key:t,code:e.code});case"input":return a.createElement(u,{key:t,code:e.code});case"if":return a.createElement(m,{key:t,code:e.code,block:e.block});case"elif":case"else":return a.createElement(p,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},g=f},856900:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),l=n(130592),o=n(682593),c=n(61014),s=["components"],d={title:"9. \u2b50\ufe0f While"},u=void 0,m={unversionedId:"Programmieren-1/Turtlegrafik/while",id:"version-25h/Programmieren-1/Turtlegrafik/while",title:"9. \u2b50\ufe0f While",description:'Wiederholen, solange die Frage mit "Ja"  beantwortet wird',source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/009-while.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/while",permalink:"/25h/Programmieren-1/Turtlegrafik/while",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/009-while.md",tags:[],version:"25h",sidebarPosition:9,frontMatter:{title:"9. \u2b50\ufe0f While"},sidebar:"version-25h/sidebar",previous:{title:"8. Verzweigungen",permalink:"/25h/Programmieren-1/Turtlegrafik/verzweigung"},next:{title:"10. Repetition",permalink:"/25h/Programmieren-1/Turtlegrafik/repetition"}},p={},f=[{value:"Wiederholen, solange die Frage mit &quot;Ja&quot;  beantwortet wird",id:"wiederholen-solange-die-frage-mit-ja--beantwortet-wird",level:2},{value:"Wiederholungen mit der <code>while</code>-Schleife",id:"wiederholungen-mit-der-while-schleife",level:2},{value:"Anwendung",id:"anwendung",level:2}],g={toc:f};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wiederholen-solange-die-frage-mit-ja--beantwortet-wird"},'Wiederholen, solange die Frage mit "Ja"  beantwortet wird'),(0,i.kt)("p",null,'Eine Wiederholung mit einer Frage f\xfchrt einen Codeblock so lange aus, bis die Frage nicht mehr mit "Ja" beantwortet wird.\nIm folgenden Beispiel wird solange eine Spirale gezeichnet, bis die Distanz der Turtle vom Zentrum mehr als ',(0,i.kt)("inlineCode",{parentName:"p"},"200px")," betr\xe4gt."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"unendliche-schleife"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Unendliche Schleife")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Diese Art von Wiederholung kann dazu f\xfchren, dass eine Frage immer mit "Ja" beantwortet wird und das Programm also nie endet.'),(0,i.kt)("p",{parentName:"div"},"Oft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das Programm zu Dies gelingt:\nOft ist dies nicht gewollt, doch einmal gestartet, ist es dann in der Browser-Version von Python schwierig, das Programm zu stoppen und die ganze Seite reagiert nicht mehr. Um das laufende Programm zu stoppen, muss:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"der ganze Tab geschlossen und die Seite in einem neuen Tab ge\xf6ffnet werden. (",(0,i.kt)("em",{parentName:"li"},"Tipp"),": Die URL zuerst kopieren...)"),(0,i.kt)("li",{parentName:"ul"},"(den ganzen Browser \xfcber den Taskmanager schliessen)")))),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)(l.Z,{program:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"winkel")," = 20 setzen")},{type:"repeat",code:(0,i.kt)("span",null,"Ist der Abstand zum Zentrum kleiner als 200px?"),block:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"5")," Schritte vorw\xe4rts")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"winkel"),"\xb0 nach links")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"winkel")," auf 99% des aktuellen Werts setzen")}]}],mdxType:"Strukto"})),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nwinkel = 20\nwhile distance(0, 0) < 200:\n    forward(5)\n    left(winkel)\n    winkel = winkel * 0.99\n")))),(0,i.kt)("p",null,"Oft k\xf6nnte man dies auch mit einer for-Schleife erreichen. Jedoch m\xfcsste man dann zuerst berechnen, wie viele Schritte n\xf6tig sind, bis dies der Fall ist. Im obigen Beispiel kann etwa der Schrumpf-Faktor (",(0,i.kt)("inlineCode",{parentName:"p"},"0.99"),") ver\xe4ndern, ohne die Frage (weniger als ",(0,i.kt)("inlineCode",{parentName:"p"},"200px")," Abstand zum Zentrum?) zu \xe4ndern."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Probieren Sie es aus und spielen Sie mit dem Schrumpf-Faktor ",(0,i.kt)("inlineCode",{parentName:"p"},"0.99")," im obigen Bispiel."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Spirale.py id=a9d06428-a918-450e-accc-99c81b5d07c7",live_py:!0,title:"Spirale.py",id:"a9d06428-a918-450e-accc-99c81b5d07c7"},"from turtle import *\n\nwinkel = 20\nwhile distance(0, 0) < 200:\n    forward(5)\n    left(winkel)\n    winkel = winkel * 0.99\n")),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Wann gibt es mehr/weniger Windungen?"),(0,i.kt)("li",{parentName:"ol"},"Wann entsteht eine unendliche Schleife?")),(0,i.kt)(o.Z,{type:"text",webKey:"e1247ee5-d13f-495b-b340-7a425b71d08d",toolbarAdd:{code:1},mdxType:"Answer"}))),(0,i.kt)("h2",{id:"wiederholungen-mit-der-while-schleife"},"Wiederholungen mit der ",(0,i.kt)("inlineCode",{parentName:"h2"},"while"),"-Schleife"),(0,i.kt)("p",null,"Mit der ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife k\xf6nnen alle Wiederholungen, die mit der ",(0,i.kt)("inlineCode",{parentName:"p"},"for i in range(...):")," Syntax erzeugt wurden, ebenfalls erzeugt werden. Dabei muss aber jeweils eine Variable, z.B. ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", verwendet werden, welche sich die Anzahl Wiederholungen merkt. Nat\xfcrlich muss diese Variable dann bei jeder Wiederholung um eins hochgez\xe4hlt werden. Eine solche Variable, die bei jeder Wiederholung erh\xf6ht wird, wird ",(0,i.kt)("strong",{parentName:"p"},"Schleifenz\xe4hler")," oder ",(0,i.kt)("strong",{parentName:"p"},"Laufvariable")," genannt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ni = 0\nwhile i < 4:\n    forward(100)\n    left(90)\n    i = i + 1\n")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"for-zu-while"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"for")," zu ",(0,i.kt)("inlineCode",{parentName:"h5"},"while"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie das untenstehende Programm so um, dass nur noch ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," Schleifen verwendet werden."),(0,i.kt)("div",{parentName:"div",style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(30)\nleft(60)\n\nfor i in range(5):\n    forward(100)\n    left(72)\n    backward(20) \n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to-while.py id=2f288418-a751-4955-91e6-44ef58a2844b",live_py:!0,title:"to-while.py",id:"2f288418-a751-4955-91e6-44ef58a2844b"},"from turtle import *\n")))),(0,i.kt)(c.Z,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nforward(30)\nleft(60)\ni = 0\nwhile i < 5:\n    forward(100)\n    left(72)\n    backward(20)\n    i = i + 1\n"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"while-zu-for"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"while")," zu ",(0,i.kt)("inlineCode",{parentName:"h5"},"for"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie das untenstehende Programm so um, dass nur noch ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," Schleifen verwendet werden."),(0,i.kt)("div",{parentName:"div",style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nspeed(10)\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\ndef quadrat():\n    i = 0\n    while i < 4:\n        forward(20)\n        left(90)\n        i = i + 1\n\nzeile = 0\nwhile zeile < 5:\n    spalte = 0\n    while spalte < 3:\n        move(zeile * 20, spalte * 20)\n        quadrat()\n        spalte = spalte + 1\n    zeile = zeile + 1\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(200px, 50% - calc(1 * 0.4em))"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to-while.py id=729af77c-0c3b-46f9-b95a-35d86be96cde",live_py:!0,title:"to-while.py",id:"729af77c-0c3b-46f9-b95a-35d86be96cde"},"from turtle import *\n")))),(0,i.kt)(c.Z,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nspeed(10)\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\ndef quadrat():\n    for i in range(4):\n        forward(20)\n        left(90)\n\nfor zeile in range(5):\n    for spalte in range(3):\n        move(zeile * 20, spalte * 20)\n        quadrat()\n"))))),(0,i.kt)("h2",{id:"anwendung"},"Anwendung"),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife kommt oft bei Benutzerinteraktionen, Simulationen oder bei sich dynamisch \xe4ndernden Daten vor. Sonstige Wiederholungen lassen sich normalerweise einfacher mit einer ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife umsetzen."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"ratespiel"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Ratespiel")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xc4ndern Sie das Ratespiel aus dem Kapitel ",(0,i.kt)("a",{parentName:"p",href:"/25h/Programmieren-1/Turtlegrafik/verzweigung#ratespiel"},"Verzweigungen")," so ab, dass die Spieler:in unendlich viele Versuche hat um die Zahl zu finden."),(0,i.kt)("p",{parentName:"div"},"Wurde die gesuchte Zahl gefunden, soll die Anzahl Versuche zur\xfcckgemeldet werden."),(0,i.kt)(c.Z,{webKey:"1a34bc16-5fb1-4e2e-bf0e-9a08455e7579",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nfrom random import randint \n\nzahl = randint(0, 100)\ngeraten = -1\ni = 0\nwhile geraten != zahl:\n    i = i + 1\n    geraten = input(f'{i} Versuch: Gib eine ganze Zahl zwischen 0 und 100 ein.')\n    geraten = int(geraten)\n    \n    if geraten == zahl:\n        break\n    elif geraten > zahl:\n        alert(f'Die eingegebene Zahl {geraten} ist zu gross')\n    else:\n        alert(f'Die eingegebene Zahl {geraten} ist zu klein')\n\nalert(f'Du hast insgesamt {i} Versuche gebraucht um die Zahl {zahl} zu finden.')\n"))))))}h.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);