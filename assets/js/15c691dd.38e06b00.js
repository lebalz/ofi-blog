"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56236],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,p=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},685162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(667294),r=n(386010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(487462),r=n(667294),i=n(386010),l=n(972389),o=n(867392),s=n(707094),u=n(212466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,h=e.defaultValue,p=e.values,f=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),y=N.tabGroupChoices,E=N.setTabGroupChoices,x=(0,r.useState)(w),S=x[0],z=x[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=y[f];null!=T&&T!==S&&k.some((function(e){return e.value===T}))&&z(T)}var A=function(e){var t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==S&&(j(t),z(a),null!=f&&E(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=P.indexOf(e.currentTarget)+1;n=null!=(a=P[r])?a:P[0];break;case"ArrowLeft":var i,l=P.indexOf(e.currentTarget)-1;n=null!=(i=P[l])?i:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return P.push(e)},onKeyDown:_,onFocus:A,onClick:A},l,{className:(0,i.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function h(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},682593:function(e,t,n){n.d(t,{x:function(){return j},Z:function(){return T}});var a=n(667294),r=n(970804),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),s=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},c=n(592814),d=n(51436),m=n(168949),h=n(972389),p=n(121314),f=n(274322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},k=(0,o.Pi)((function(e){var t,n=(0,h.Z)(),r=a.useState("unchecked"),o=r[0],s=r[1],g=(0,p.oR)("documentStore").find(e.webKey),k=function(e){g.loaded&&(s("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return v(g.value)},className:(0,l.default)(i[o],i.checkButton)},a.createElement(c.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:w(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(f.Z,null)})),y=n(487462),E=n(575552),x=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,y.Z)({model:t},e))):a.createElement(f.Z,null)})),S=n(647271),z=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(697762),j=function(e){return e.replace(/\s+/g,"").toUpperCase()},T=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(N,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),o=n(121314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},285107:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(894578),r=n(667294),i=n(665488),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},274322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",o=n(471217),s=n(592814),u=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(386010),u=n(471217),c=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],p=t[1],f=a.useState(!1),g=f[0],b=f[1],k=a.useRef(null),v=e.model,w=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&g&&v.loaded?a.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,s.default)(i,e.monospace&&l,u?void 0:o),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(i)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(m,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},300007:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),l=(n(285107),n(685162),n(682593)),o=["components"],s={title:"Projekt"},u="Projekt: Partnerpraktikum",c={unversionedId:"Abschlussprojekt/projekt",id:"version-24i/Abschlussprojekt/projekt",title:"Projekt",description:"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert.",source:"@site/versioned_docs/version-24i/09-Abschlussprojekt/01-projekt.md",sourceDirName:"09-Abschlussprojekt",slug:"/Abschlussprojekt/projekt",permalink:"/24i/Abschlussprojekt/projekt",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/09-Abschlussprojekt/01-projekt.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"Projekt"},sidebar:"version-24i/sidebar",previous:{title:"5. Vektorgrafik",permalink:"/24i/Codes und Daten/Grafikformate/vector"},next:{title:"Podcast",permalink:"/24i/Abschlussprojekt/podcast"}},d={},m=[{value:"Ablauf",id:"ablauf",level:2},{value:"Beurteilung",id:"beurteilung",level:2},{value:"1. Themenwahl und Ideensuche",id:"1-themenwahl-und-ideensuche",level:3},{value:"2. Umsetzung des Projekts starten",id:"2-umsetzung-des-projekts-starten",level:3},{value:"3. Woche",id:"3-woche",level:3},{value:"4. Woche",id:"4-woche",level:3},{value:"5. Letzte Woche(n)",id:"5-letzte-wochen",level:3},{value:"Ideensammlung",id:"ideensammlung",level:2},{value:"Algorithmen",id:"algorithmen",level:3},{value:"Programmieren von zuf\xe4lligen Labyrinthen",id:"programmieren-von-zuf\xe4lligen-labyrinthen",level:4},{value:"Wie funktionieren Bitcoins?",id:"wie-funktionieren-bitcoins",level:4},{value:"Big Data / Data Mining",id:"big-data--data-mining",level:3},{value:"Was ist Big Data und wie beeinflusst es unser Leben?",id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben",level:4},{value:"Simulation",id:"simulation",level:3},{value:"Insightmaker",id:"insightmaker",level:4},{value:"Sensoren",id:"sensoren",level:3},{value:"Feuchtigkeits- und Temperaturanzeige",id:"feuchtigkeits--und-temperaturanzeige",level:4},{value:"Machine Learning",id:"machine-learning",level:3},{value:"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?",id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe",level:4},{value:"Wie funktionieren Suchvorschl\xe4ge auf Google?",id:"wie-funktionieren-suchvorschl\xe4ge-auf-google",level:4}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},p=h("Figure"),f=h("SourceRef"),g={toc:m};function b(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"projekt-partnerpraktikum"},"Projekt: Partnerpraktikum"),(0,i.kt)("p",null,"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert."),(0,i.kt)("h2",{id:"ablauf"},"Ablauf"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gruppengr\xf6sse"),": max. 2 Personen"),(0,i.kt)("p",null,"Suchen Sie sich ein Thema, in welches Sie sich innerhalb von 5 Doppellektionen einarbeiten k\xf6nnen. Ihr Projekt darf auch einen praktischen Teil beinhalten (muss aber nicht)."),(0,i.kt)("p",null,"Das Endprodukt ihres Projekts ist ein ",(0,i.kt)("strong",{parentName:"p"},"Podcast")," oder wenn Visualisierungen zwingend sind ein Videobeitrag. Zudem wird eine schriftliche Reflexion zum Arbeitsprozess und dem Projekt verfasst, der in die Beurteilung einfliesst."),(0,i.kt)("h2",{id:"beurteilung"},"Beurteilung"),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(256028).Z,width:"1040",height:"956"})),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(609893).Z,width:"1036",height:"1194"})),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"verf\xfcgbare-hardware-an-der-schule"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Verf\xfcgbare Hardware an der Schule")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Schule bietet begrenzte Hardware-St\xfcckzahlen, um sich z.B. im Rahmen eines Hardware-Projekts mit den M\xf6glichkeiten der folgenden Ger\xe4te","*"," auseinanderzusetzen."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Micro:Bit Platine"),(0,i.kt)("li",{parentName:"ul"},"Maqueen Roboter (Gesteuert \xfcber Micro:Bit)"),(0,i.kt)("li",{parentName:"ul"},"3D Drucker"),(0,i.kt)("li",{parentName:"ul"},"EV3 Roboter (k\xf6nnen nur an der Schule gebraucht werden)"),(0,i.kt)("li",{parentName:"ul"},"Arduinos inkl. mehrerer Sensoren, WLAN-Kompatibel"),(0,i.kt)("li",{parentName:"ul"},"Raspberry PI 3 (ohne WIFI)"),(0,i.kt)("li",{parentName:"ul"},"LoRaWan Modul (LILYGO\xae TTGO Meshtastic T-Beam V1.1 ESP32 LoRa 433/868/915/923Mhz Wireless Module WiFi GPS NEO-6M With OLED Display for Arduino)")),(0,i.kt)("p",{parentName:"div"},"*"," ",(0,i.kt)("em",{parentName:"p"},"Erfordert die R\xfccksprache mit Herrn Hofer, um die Verf\xfcgbarkeiten zu organisieren")))),(0,i.kt)("h3",{id:"1-themenwahl-und-ideensuche"},"1. Themenwahl und Ideensuche"),(0,i.kt)("p",null,"Informieren Sie sich \xfcber Themen, die Sie spannend finden. Tauschen Sie sich anschliessend mit den Klassenkamerad:innen aus und finden Sie eine Projektpartner:in, welche Ihre Interessen teilt. Entscheiden Sie sich f\xfcr ein Thema und schreiben Sie einen Projektantrag in folgender Vorlage:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:w:/g/personal/balthasar_hofer_gbsl_ch/EcKlfnWD2TtLspneUsiwOsMBQR7xaockSJxd3gWfmRBeXQ?e=rs2BeS",className:"button button--warning"},"Vorlage Herunterladen")),(0,i.kt)("p",null,"F\xfcllen Sie den Projektantrag aus und laden Sie den Antrag bis am Mittwoch, 11.05.2022 um 22:00 Uhr hoch:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/EngM_xyRiRtJrKMFIdUqLZYBBbeRRRhusbCxkwRb-x5PqA",className:"button button--success"},"Projektantrag Hochladen")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"333ae706-c77e-465f-9273-bef1881c0f7a",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"2-umsetzung-des-projekts-starten"},"2. Umsetzung des Projekts starten"),(0,i.kt)("p",null,"Projektantrag gem\xe4ss R\xfcckmeldung anpassen und mit der Umsetzung starten."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 2")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"ea52e8bd-853a-4485-9bf5-47975c622d95",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"3-woche"},"3. Woche"),(0,i.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"0955d986-daef-4df3-aa2b-c9f47dcde123",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"4-woche"},"4. Woche"),(0,i.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-4"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"0881427c-f098-4059-8727-813cebef5315",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"5-letzte-wochen"},"5. Letzte Woche(n)"),(0,i.kt)("p",null,"Vorbereitung und Aufnehmen der Podcasts"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-5"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"52a1172b-ae18-464d-8772-0a4d419b9bf8",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-6"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"(Arbeitstagebuch Woche 6)")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(l.Z,{type:"text",webKey:"55889af3-43f7-47cf-84fb-35c01fdcf28a",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"ideensammlung"},"Ideensammlung"),(0,i.kt)("p",null,"M\xf6gliche Ideen - Sie d\xfcrfen aber auch einen eigenen Projektvorschlag ausarbeiten."),(0,i.kt)("h3",{id:"algorithmen"},"Algorithmen"),(0,i.kt)("h4",{id:"programmieren-von-zuf\xe4lligen-labyrinthen"},"Programmieren von zuf\xe4lligen Labyrinthen"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/zRuVhq0Kgnw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("h4",{id:"wie-funktionieren-bitcoins"},"Wie funktionieren Bitcoins?"),(0,i.kt)("p",null,"Sie setzen sich mit dem Thema Blockchain und Bitcoins auseinander. "),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://www.leparisien.fr/resizer/pgNoLN8LeaWEP6mjBtM5JTPYJhE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/J5WMRGQC4NEZXAPJERTHG7MXBA.jpg",alt:"",title:""})),(0,i.kt)("h3",{id:"big-data--data-mining"},"Big Data / Data Mining"),(0,i.kt)("h4",{id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben"},"Was ist Big Data und wie beeinflusst es unser Leben?"),(0,i.kt)("p",null,"Sie lesen zum Beispiel das Buch von Hannah Fry",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," und beleuchten den kritisch den Einfluss der permanenten Datensammlung auf unsere Gesellschaft."),(0,i.kt)(p,{options:{width:"300px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--width=300px",src:n(231495).Z,width:"1695",height:"2610"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(f,{parentName:"figcaption",bib:{author:"Hannah Fry",source:"https://www.chbeck.de/fry-hello-world/product/26909221",licence:"C.H. Beck",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ef6zr_CP9kdNlGNj5ABP_DUBMkbxk7ptsspnIhkqVhNgtg?e=xIIKE2",className:"button button--warning"},"Herunterladen")),(0,i.kt)("h3",{id:"simulation"},"Simulation"),(0,i.kt)("p",null,"Mit Simulationen l\xe4sst sich die Wirklichkeit modellhaft abbilden und darin k\xf6nnen Theorien \xfcberpr\xfcft und getestet werden."),(0,i.kt)("h4",{id:"insightmaker"},"Insightmaker"),(0,i.kt)("p",null,"Sie arbeiten sich in ein Simulationsprogramm, bspw. ins kostenlose ",(0,i.kt)("a",{parentName:"p",href:"https://insightmaker.com"},"Insightmaker"),", ein und modellieren damit ein Ph\xe4nomen wie etwa eine R\xe4uber-Beute-Beziehung, eine Monte-Carlos Simulation oder das Game of Life."),(0,i.kt)("p",null,"Die beiden Seiten ",(0,i.kt)("a",{parentName:"p",href:"https://oinf.ch/kurs/simulationen"},"https://oinf.ch/kurs/simulationen")," und ",(0,i.kt)("a",{parentName:"p",href:"https://craft.dos/bwNrfufaSrdE3V"},"https://craft.dos/bwNrfufaSrdE3V")," geben einen guten \xdcberblick und Hilfestellungen f\xfcr das Vorgehen und entsprechende Simulationen."),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://insightmaker.com/images/diagram_slide.png",alt:"",title:""})),(0,i.kt)("h3",{id:"sensoren"},"Sensoren"),(0,i.kt)("h4",{id:"feuchtigkeits--und-temperaturanzeige"},"Feuchtigkeits- und Temperaturanzeige"),(0,i.kt)("p",null,"Sie schliessen einen Feuchtigkeitssensor sowie einen Temperatursensor an einen Arduino an. \xdcber die Arduino IDE werden die Sensorwerte eingelesen und auf einem Ausgabeger\xe4t angezeigt."),(0,i.kt)(p,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://www.circuitbasics.com/wp-content/uploads/2015/12/Arduino-DHT11-Humidity-and-Temperature-Sensor-With-LCD-Output.png",alt:"",title:""})),(0,i.kt)("h3",{id:"machine-learning"},"Machine Learning"),(0,i.kt)("h4",{id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe"},"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?"),(0,i.kt)("p",null,"Sie recherchieren \xfcber die Bedeutung der Modew\xf6rter AI, ML und DL und setzen diese in einen Kontext."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/"},"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/")),(0,i.kt)("h4",{id:"wie-funktionieren-suchvorschl\xe4ge-auf-google"},"Wie funktionieren Suchvorschl\xe4ge auf Google?"),(0,i.kt)("p",null,"Sie lesen sich ins Buch von Tommaso Teofili, ",(0,i.kt)("a",{parentName:"p",href:"https://www.manning.com/books/deep-learning-for-search"},"Deep Learning for Search_2019"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ein und berichten \xfcber die Funktionsweise von Suchalgorithmen."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A practical approach that shows you the state of the art in using neural networks, AI, and deep learning in the development of search engines.")),(0,i.kt)(p,{options:{width:"300px"},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://human-centered.ai/wordpress/wp-content/uploads/2017/11/Deep-Learning-subset-of-Machine-Learning-subset-of-Artificial-Intelligence.jpg",alt:"--width=300px",title:""})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ec6EDPPeV8ZFuZ137SimNOwBtbqfQDqe6nWwlzjNVWKkcQ?e=qjlZVW",className:"button button--warning"},"Herunterladen")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("em",{parentName:"li"},"Die Buchausschnitte sind urheberrechtlich gesch\xfctzt und d\xfcrfen ausschliesslich f\xfcr den schulischen Gebrauch verwendet werden. Die Weitergabe ist verboten."),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},609893:function(e,t,n){t.Z=n.p+"assets/images/beurteilung_praktisch-88e8e83d1b49f3bf350e3faebdcc9d84.png"},256028:function(e,t,n){t.Z=n.p+"assets/images/beurteilung_theorie-1b0dc0d820dbbec1f4710cce714b25d2.png"},231495:function(e,t,n){t.Z=n.p+"assets/images/book-cover_hannah-fry_hello-world-3f56445da0da4cd38e7c41fad1383c3c.jpeg"}}]);