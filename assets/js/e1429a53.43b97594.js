"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[29879],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82593:function(e,t,a){a.d(t,{x:function(){return F},Z:function(){return _}});var n=a(67294),r=a(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=a(86010),o=a(71217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var t=e.value,a=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],a=""+t.replace(c,"")}return n.createElement("option",{value:t,className:r},a)},s=a(92814),u=a(51436),m=a(68949),p=a(72389),f=a(21314),b=a(74322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,a=(0,p.Z)(),r=n.useState("unchecked"),o=r[0],c=r[1],g=(0,f.oR)("documentStore").find(e.webKey),h=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},w=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};c(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&w(g.value)}))}),[g]),n.useEffect((function(){g.loaded&&w(g.value)}),[g,a]),a?g.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:g.value,className:v(g.value),disabled:!g.loaded},e.select.map((function(e,t){return n.createElement(d,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return w(g.value)},className:(0,l.default)(i[o],i.checkButton)},n.createElement(s.G,{icon:(t=o,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR")})),w=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return t.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:r,className:k(r),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(d,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):n.createElement(b.Z,null)})),N=a(83117),z=a(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(z.Z,(0,N.Z)({model:t},e))):n.createElement(b.Z,null)})),Z=a(47271),E=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=a(97762),F=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),a=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(Z.Z,null),a.loggedIn&&n.createElement(E,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(y,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},47271:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r="noLoginAlert_HRfh",i=a(39960),l=a(71217),o=a(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=a(92814),l=a(51436),o=a(86010),c=function(e){return n.createElement("span",{className:r.details},n.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),n.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},n.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&n.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),n.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},n.createElement("span",{className:(0,o.default)("badge badge--secondary")},n.createElement(i.G,{icon:l.Xjp}))))},d=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},a=Object.assign({},e.options);return a.noMargins&&delete a.noMargins,a.size&&(t.maxWidth="min(90vw, "+d(a.size)+")",t.maxHeight=d(a.size),delete a.size),a.height&&(t.maxHeight=d(a.height),t.height=d(a.height),delete a.height),a.width&&(t.maxWidth="min(90vw, "+d(a.width)+")",t.width=d(a.width),delete a.width),t=Object.assign({},t,a),n.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return n.createElement(s,e);var t=n.useState(!1),a=(t[0],t[1]),i=n.useState(!1),l=i[0],d=i[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,n.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return a(!0)},onMouseOut:function(e){var t,n,r,i,l;t=e.currentTarget.getBoundingClientRect(),n=e.clientX,r=e.clientY,i=t.left<=n&&t.right>=n,l=t.top<=r&&t.bottom>=r,i&&l||a(!1)}},n.createElement(s,e),m&&n.createElement("figcaption",null,u&&n.createElement("span",null,e.caption),e.bib&&n.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&n.createElement(c,e.bib)))}},74322:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),i="loader_FEpR",l="badge_oWqf",o=a(71217),c=a(92814),d=a(51436),s=(0,o.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(c.G,{icon:d.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=a(86010),d=a(71217),s=a(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,d.Pi)((function(e){var t=n.useState(!1),d=t[0],f=t[1],b=n.useState(!1),g=b[0],v=b[1],h=n.useRef(null),w=e.model,k=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,50037)))),Promise.all(n).then((function(t){u=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}a.register("modules/imageCompress",n),e()}))}((function(){t&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return u&&g&&w.loaded?n.createElement("div",{onFocus:function(){return!d&&f(!0)},className:(0,c.default)(r)},n.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||w.readonly,className:(0,c.default)(i,e.monospace&&l,d?void 0:o),value:w.text||"",onChange:function(t,a,n,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&w.canUpdate&&g&&w.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(s.Z,null)}))},30220:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(84384),o=a(82593),c=["components"],d={title:"RoboZZle"},s="RoboZZle",u={unversionedId:"Programmieren-1/Algorithmen/Uebungen/robozzle",id:"Programmieren-1/Algorithmen/Uebungen/robozzle",title:"RoboZZle",description:"Puzzle 1",source:"@site/docs/Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",sourceDirName:"Programmieren-1/01-Algorithmen/100-Uebungen",slug:"/Programmieren-1/Algorithmen/Uebungen/robozzle",permalink:"/Programmieren-1/Algorithmen/Uebungen/robozzle",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:1,frontMatter:{title:"RoboZZle"},sidebar:"sidebar",previous:{title:"Uebungen",permalink:"/category/uebungen"},next:{title:"Struktos",permalink:"/Programmieren-1/Algorithmen/struktos.nosync"}},m={},p=[],f={toc:p};function b(e){var t=e.components,d=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"robozzle"},"RoboZZle"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/MmqBVWi_Pc0?start=21",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12419"},"Puzzle 1")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(78258).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a1",webKey:"49f55f64-13b9-4f15-b138-1335c09281b5",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2741"},"Puzzle 2")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(78515).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a2",webKey:"2b9029cf-9593-4ab8-a49a-eec034c27b0c",label:"L\xf6sung F1",size:3,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10858"},"Puzzle 3")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(17018).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a3",webKey:"f8f87665-1d2b-4559-b3ba-fbd604061d2a",label:"L\xf6sung F1",size:7,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-4"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12511"},"Puzzle 4")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(53299).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a4",webKey:"d3b5b747-6a4d-4658-a05f-0026e20ce326",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-5"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10895"},"Puzzle 5")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(39337).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a5",webKey:"13b53721-50de-4630-abe7-7f1cd5f4ea8e",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-6"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 6.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10048"},"Puzzle 6")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(54035).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a6a",webKey:"ef5632a1-8885-415d-a1dc-50b810b19ba2",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a6b",webKey:"49c1b7a8-b457-437a-a147-a5ad75c7f2fe",label:"L\xf6sung F2",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-7"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 7.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2748"},"Puzzle 7")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(36727).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a7",webKey:"1f50b198-7ef4-48b6-bbdc-68452baa7952",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-8"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 8.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=140"},"Puzzle 8")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(23273).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a8",webKey:"59c65a0b-5ae1-4287-b25f-567b598a67a4",label:"L\xf6sung F1",size:6,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-9"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 9.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=1040"},"Puzzle 9")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(13566).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a9",webKey:"a290e5cd-caae-4dc5-acfb-e435f072645c",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufgabe-10"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 10.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=87"},"Puzzle 10")),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(69340).Z,mdxType:"Image"})),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a10a",webKey:"2d443973-fd5e-4432-90a3-45dd0c6932fd",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(o.Z,{type:"array",id:"robozzle_a10b",webKey:"14b2fdbd-cb85-4175-9016-bf43e252fcf0",label:"L\xf6sung F2",size:3,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))))}b.isMDXComponent=!0},78258:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a1-9f88e1913a1251d499bdfb0a2c7fb2b7.png"},69340:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a10-c715bd3fb509c1d38ff2f9fd71177302.png"},78515:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a2-b543492edbe8b6375cf700f5988d3ee5.png"},17018:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a3-161aca72f309f94bd52b0b113745717b.png"},53299:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a4-4409a04081e5d33f9e8a364227172666.png"},39337:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a5-152d08fb7bcd5be8b0342534e1465859.png"},54035:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a6-874c825cfa7a6ce99aec0506367ab2c3.png"},36727:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a7-04e86296810da925b2665cd89167c460.png"},23273:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a8-02d9e336651d2befe3b2f5178908c732.png"},13566:function(e,t,a){t.Z=a.p+"assets/images/RoboZZle_a9-12892684d0b832904433762ae750c699.png"}}]);