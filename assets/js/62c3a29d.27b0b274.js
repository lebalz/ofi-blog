"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[35213],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(p,l(l({ref:t},s),{},{components:n})):a.createElement(p,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},685162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(667294),r=n(386010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(487462),r=n(667294),i=n(386010),l=n(972389),o=n(867392),u=n(707094),c=n(212466),s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,f=e.defaultValue,p=e.values,g=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,E=w.setTabGroupChoices,x=(0,r.useState)(y),S=x[0],Z=x[1],O=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=N[g];null!=P&&P!==S&&b.some((function(e){return e.value===P}))&&Z(P)}var _=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==S&&(T(t),Z(a),null!=g&&E(g,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;n=null!=(i=O[l])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":m},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:_,onClick:_},l,{className:(0,i.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function f(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},682593:function(e,t,n){n.d(t,{x:function(){return T},Z:function(){return P}});var a=n(667294),r=n(970804),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),u=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);r=i[l],n=""+t.replace(u,"")}return a.createElement("option",{value:t,className:r},n)},s=n(592814),d=n(51436),m=n(168949),f=n(972389),p=n(121314),g=n(274322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,f.Z)(),r=a.useState("unchecked"),o=r[0],u=r[1],h=(0,p.oR)("documentStore").find(e.webKey),b=function(e){h.loaded&&(u("unchecked"),h.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return u(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};u(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&k(h.value)}))}),[h]),a.useEffect((function(){h.loaded&&k(h.value)}),[h,n]),n?h.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:h.value,className:v(h.value),disabled:!h.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(h.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(s.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:y(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(g.Z,null)})),N=n(487462),E=n(575552),x=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,N.Z)({model:t},e))):a.createElement(g.Z,null)})),S=n(647271),Z=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),O=n(697762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||O.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(Z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(b,e),"array"===e.type&&a.createElement(w,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},285107:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(894578),r=n(667294),i=n(665488),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},274322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),u=n(592814),c=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(u.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",u=n(386010),c=n(471217),s=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],p=t[1],g=a.useState(!1),h=g[0],v=g[1],b=a.useRef(null),k=e.model,y=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(v(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&k.loaded?a.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,u.default)(r)},a.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,u.default)(i,e.monospace&&l,c?void 0:o),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&h&&k.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},660075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),l=n(285107),o=n(685162),u=n(682593),c=["components"],s={title:"4. \xdcbung",label:"4. \xdcbung"},d="Rastergrafik praktisch",m={unversionedId:"Codes und Daten/Grafikformate/uebung",id:"version-24i/Codes und Daten/Grafikformate/uebung",title:"4. \xdcbung",description:"1. Machen Sie ein Portr\xe4t-Foto (mit der Kamera-App!)",source:"@site/versioned_docs/version-24i/08-Codes und Daten/02-Grafikformate/04-uebung.md",sourceDirName:"08-Codes und Daten/02-Grafikformate",slug:"/Codes und Daten/Grafikformate/uebung",permalink:"/24i/Codes und Daten/Grafikformate/uebung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/08-Codes und Daten/02-Grafikformate/04-uebung.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"4. \xdcbung",label:"4. \xdcbung"},sidebar:"version-24i/sidebar",previous:{title:"3. Rastergrafik",permalink:"/24i/Codes und Daten/Grafikformate/raster"},next:{title:"5. Vektorgrafik",permalink:"/24i/Codes und Daten/Grafikformate/vector"}},f={},p=[],g=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=g("Figure"),v=g("SourceRef"),b={toc:p};function k(e){var t=e.components,s=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rastergrafik-praktisch"},"Rastergrafik praktisch"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"1-signaltelegramthreemawhatsapp"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Signal/Telegram/Threema/WhatsApp")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Machen Sie ein Portr\xe4t-Foto (mit der Kamera-App!)"),(0,i.kt)("li",{parentName:"ol"},"Untersuchen Sie das Foto:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Erkennen Sie einzelne Wimpern auf dem Foto?"),(0,i.kt)("li",{parentName:"ul"},"Wie viel Speicherplatz braucht das Foto?"),(0,i.kt)("li",{parentName:"ul"},"In welchem Format ist es abgespeichert?"))),(0,i.kt)("li",{parentName:"ol"},"Schicken Sie das Foto der Pultnachbar:in und beantworten Sie die Frage (2) mit dem empfangenen Bild erneut. Welche Unterschiede stellen Sie fest?"),(0,i.kt)("li",{parentName:"ol"},"Versuchen Sie unterschiedliche Messenger-Apps (Signal, Threema, Telegram, WhatsApp) aus: gibt es Unterschiede bei den Bildgr\xf6ssen?")),(0,i.kt)(u.Z,{type:"text",webKey:"952e52df-458b-493b-95fd-e4a636af4ae8",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"2-jpeg-format-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. JPEG-Format ",(0,i.kt)("sup",{parentName:"h5",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Das folgende Foto hat im Original eine Aufl\xf6sung von ",(0,i.kt)("inlineCode",{parentName:"p"},"6016\xd74016")," Pixel mit einer Farbtiefe von 3 Byte."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Berechnen Sie die theoretische Speichergr\xf6sse in Megabyte.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Laden Sie das Originalbild unter dem folgenden Link herunter:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{target:"_blank",href:n(157275).Z},"Originalbild"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finden Sie heraus, wie gross der tats\xe4chliche Speicherbedarf des Bildes in Megabyte ist. Notieren Sie diese Zahl.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xd6ffnen Sie das Bild in einer Foto-App (unter ",(0,i.kt)("strong",{parentName:"p"},"Mac"),": in der Vorschau).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualit\xe4ten 90%, 80%, 50% und 10%. Vergleichen Sie die Bilder und die Dateigr\xf6ssen. Was stellen Sie fest?"))),(0,i.kt)(l.Z,{mdxType:"OsTabs"},(0,i.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"div"},"Im Foto App \xf6ffnen und als Kopie exportieren:"),(0,i.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(758019).Z,width:"800",height:"533"})),"  "),(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",{parentName:"div"},"Mac: ",(0,i.kt)("inlineCode",{parentName:"p"},"Ablage > Exportieren"),", als Dateiformat ",(0,i.kt)("inlineCode",{parentName:"p"},"JPEG")," w\xe4hlen, die Qualit\xe4t muss auf dem Slider abgesch\xe4tzt werden."),(0,i.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(276204).Z,width:"1338",height:"962"})),(0,i.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(18404).Z,width:"1514",height:"1124"})),"  ")),(0,i.kt)("ol",{parentName:"div",start:6},(0,i.kt)("li",{parentName:"ol"},"Kann die Qualit\xe4t wiederhergestellt werden? \xd6ffnen Sie das zuvor mit der Qualit\xe4t von 10% exportierte Bild und exportieren Sie es erneut mit einer Qualit\xe4t von 100%. Was stellen Sie fest? Wie widerspiegelt sich dies in der Dateigr\xf6sse und der Bildqualit\xe4t beim Betrachten?")),(0,i.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Island",src:n(322303).Z,width:"600",height:"400"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Island",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(v,{parentName:"figcaption",bib:{author_name:"Nico Gr\xfctter",author_uri:"https://pixabay.com/de/users/nicos_fotowelt-2354795/",licence:"Pixabay",source_name:"Pixabay",source_uri:"https://pixabay.com/images/id-5104370/"},mdxType:"SourceRef"}))),(0,i.kt)(u.Z,{type:"text",webKey:"2e1c4773-da2e-42da-b506-f158fa968916",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=922802"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},157275:function(e,t,n){t.Z=n.p+"assets/files/iceland-0647a0c203282b3fd2b30061efda42d8.jpg"},322303:function(e,t,n){t.Z=n.p+"assets/images/iceland-9ba07fe6a39fe5bbe88a2d922f434b48.jpg"},276204:function(e,t,n){t.Z=n.p+"assets/images/jpeg-quality-1-osx-ef6d2789dcea529aa5408dbfd55f55f8.png"},18404:function(e,t,n){t.Z=n.p+"assets/images/jpeg-quality-2-osx-ffe9c6611b8ff2cb61b741ebfdbf7b97.png"},758019:function(e,t,n){t.Z=n.p+"assets/images/jpeg-quality-windows-fe883868b26976cf6a10d443077748df.gif"}}]);