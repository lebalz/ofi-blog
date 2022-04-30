"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21794],{3905:function(e,t,i){i.d(t,{Zo:function(){return o},kt:function(){return p}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},o=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=d(i),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return i?n.createElement(g,l(l({ref:t},o),{},{components:i})):n.createElement(g,l({ref:t},o))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},82593:function(e,t,i){i.d(t,{x:function(){return A},Z:function(){return x}});var n=i(67294),a=i(3435),r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=i(86010),s=i(71217),c=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var t=e.value,i=t,a=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);a=r[l],i=""+t.replace(c,"")}return n.createElement("option",{value:t,className:a},i)},o=i(92814),m=i(51436),u=i(68949),p=i(72389),g=i(21314),h=i(74322),f=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},I=(0,s.Pi)((function(e){var t,i=(0,p.Z)(),a=n.useState("unchecked"),s=a[0],c=a[1],f=(0,g.oR)("documentStore").find(e.webKey),I=function(e){f.loaded&&(c("unchecked"),f.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var i=e.sanitizer?e.sanitizer:function(e){return e};c(i(t)===i(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,u.U5)((function(){return f.loaded}),(function(e){e&&k(f.value)}))}),[f]),n.useEffect((function(){f.loaded&&k(f.value)}),[f,i]),i?f.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return I(e.target.value)},style:{width:e.width},value:f.value,className:b(f.value),disabled:!f.loaded},e.select.map((function(e,t){return n.createElement(d,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return I(e.target.value)},value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return k(f.value)},className:(0,l.default)(r[s],r.checkButton)},n.createElement(o.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):n.createElement(h.Z,null):n.createElement("div",null,"SSR")})),k=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey),i=function(e,i){void 0===i&&(i=0);var n=[].concat(t.data.value.slice(0,i),[e],t.data.value.slice(i+1));t.setData(Object.assign({},t.data,{value:n}))};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(a,r){return e.select?n.createElement("select",{key:r,onChange:function(e){return i(e.target.value,r)},value:a,className:v(a),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(d,{value:e,key:t})}))):n.createElement("input",{key:r,type:"text",onChange:function(e){return i(e.target.value,r)},value:a,disabled:!t.loaded||t.readonly})}))):n.createElement(h.Z,null)})),y=i(83117),w=i(75552),D=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,y.Z)({model:t},e))):n.createElement(h.Z,null)})),C=i(47271),Z=(0,s.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=i(97762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},x=(0,s.Pi)((function(e){var t=(0,g.oR)("documentStore"),i=(0,g.oR)("msalStore"),a=t.find(e.webKey),r=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),r?a?n.createElement("div",{"data--web-key":e.webKey},n.createElement(C.Z,null),i.loggedIn&&n.createElement(Z,{webKey:e.webKey}),"text"===e.type&&n.createElement(D,e),"string"===e.type&&n.createElement(I,e),"array"===e.type&&n.createElement(N,e)):n.createElement(h.Z,null):n.createElement("div",null,"SSR")}))},47271:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(67294),a="noLoginAlert_HRfh",r=i(39960),l=i(71217),s=i(21314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:a},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.Z,{to:"/login"},"Login"))}))},84384:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(67294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=i(92814),l=i(51436),s=i(86010),c=function(e){return n.createElement("span",{className:a.details},n.createElement("span",{className:(0,s.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),n.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},n.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&n.createElement("span",{className:(0,s.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),n.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},n.createElement("span",{className:(0,s.default)("badge badge--secondary")},n.createElement(r.G,{icon:l.Xjp}))))},d=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},o=function(e){var t={},i=Object.assign({},e.options);return i.noMargins&&delete i.noMargins,i.size&&(t.maxWidth="min(90vw, "+d(i.size)+")",t.maxHeight=d(i.size),delete i.size),i.height&&(t.maxHeight=d(i.height),t.height=d(i.height),delete i.height),i.width&&(t.maxWidth="min(90vw, "+d(i.width)+")",t.width=d(i.width),delete i.width),t=Object.assign({},t,i),n.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return n.createElement(o,e);var t=n.useState(!1),i=(t[0],t[1]),r=n.useState(!1),l=r[0],d=r[1],m=e.caption&&"undefined"!==e.caption,u=e.bib||m;return e.options.noMargins&&!0,n.createElement("figure",{className:(0,s.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return i(!0)},onMouseOut:function(e){var t,n,a,r,l;t=e.currentTarget.getBoundingClientRect(),n=e.clientX,a=e.clientY,r=t.left<=n&&t.right>=n,l=t.top<=a&&t.bottom>=a,r&&l||i(!1)}},n.createElement(o,e),u&&n.createElement("figcaption",null,m&&n.createElement("span",null,e.caption),e.bib&&n.createElement("span",{className:(0,s.default)(a.bib,l?a.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&n.createElement(c,e.bib)))}},74322:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(67294),a=i(86010),r="loader_FEpR",l="badge_oWqf",s=i(71217),c=i(92814),d=i(51436),o=(0,s.Pi)((function(){return n.createElement("div",{className:(0,a.default)(r)},n.createElement(c.G,{icon:d.IJ7,spin:!0}),n.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,i){i.d(t,{Z:function(){return g}});var n=i(67294),a="quillEditor_NxYB",r="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",c=i(86010),d=i(71217),o=i(74322),m=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var i=[];e.bold&&i.push("bold"),e.italic&&i.push("italic"),e.underline&&i.push("underline"),t.push(i)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,d.Pi)((function(e){var t=n.useState(!1),d=t[0],g=t[1],h=n.useState(!1),f=h[0],b=h[1],I=n.useRef(null),k=e.model,v=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var n=[Promise.all([i.e(97762),i.e(18446),i.e(80324),i.e(76095),i.e(71167)]).then(i.t.bind(i,44290,23)),i.e(76095).then(i.t.bind(i,76095,23)),i.e(17891).then(i.t.bind(i,17891,23)),Promise.all([i.e(40532),i.e(11940)]).then(i.bind(i,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=n.length,n.push(i.e(41008).then(i.bind(i,41008)),Promise.all([i.e(40532),i.e(50037)]).then(i.bind(i,50037)))),Promise.all(n).then((function(t){m=t[a["react-quill"]].default;var i=t[a.quill].default,n=t[a["react-image-compress"]].default;if("katex"in a){var r=t[a.katex].default;window.katex=r}i.register("modules/imageCompress",n),e()}))}((function(){t&&(b(!0),I&&I.current&&I.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,I&&I.current&&I.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return m&&f&&k.loaded?n.createElement("div",{onFocus:function(){return!d&&g(!0)},className:(0,c.default)(a)},n.createElement(m,{ref:I,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,c.default)(r,e.monospace&&l,d?void 0:s),value:k.text||"",onChange:function(t,i,n,a){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&f&&k.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(u,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(o.Z,null)}))},60675:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var n=i(83117),a=i(80102),r=(i(67294),i(3905)),l=i(84384),s=i(82593),c=["components"],d={title:"4. Speicher"},o="4. Speicher",m={unversionedId:"Computer/basics/Speicher",id:"version-24f/Computer/basics/Speicher",title:"4. Speicher",description:"Datenspeicher speichern Daten \xfcblicherweise in bin\xe4rer Form. Ein Datenspeicher besteht aus einem Speichermedium, auf welchem die Bits physikalisch repr\xe4sentiert werden.",source:"@site/versioned_docs/version-24f/07-Computer/01-basics/04-Speicher.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/Speicher",permalink:"/24f/Computer/basics/Speicher",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/07-Computer/01-basics/04-Speicher.md",tags:[],version:"24f",sidebarPosition:4,frontMatter:{title:"4. Speicher"},sidebar:"version-24f/sidebar",previous:{title:"3. Prozessor",permalink:"/24f/Computer/basics/cpu"},next:{title:"5. Grafikkarte",permalink:"/24f/Computer/basics/Grafikkarte"}},u={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Arbeitsspeicher (RAM)",id:"arbeitsspeicher-ram",level:2},{value:"Festplatten",id:"festplatten",level:2},{value:"Harddisk (HDD)",id:"harddisk-hdd",level:3},{value:"Solid State Disk (SSD)",id:"solid-state-disk-ssd",level:3},{value:"Anschlusskabel",id:"anschlusskabel",level:3},{value:"Speicherhierarchie",id:"speicherhierarchie",level:2}],g={toc:p};function h(e){var t=e.components,d=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-speicher"},"4. Speicher"),(0,r.kt)("p",null,"Datenspeicher speichern Daten \xfcblicherweise in bin\xe4rer Form. Ein Datenspeicher besteht aus einem Speichermedium, auf welchem die Bits physikalisch repr\xe4sentiert werden."),(0,r.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,r.kt)("p",null,"F\xfcr Speicher gibt es drei wichtige Kenngr\xf6ssen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Speicherkapazit\xe4t")," ist die Datenmenge, welcher der Speicher maximal aufnehmen kann. Sie wird in Byte angegeben."),(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("strong",{parentName:"li"},"Zugriffszeit")," ist die Zeit, die ben\xf6tigt wird, um eine Dateneinheit (z.B. ein Byte) aus dem Speicher auszulesen. Die Zugriffszeit f\xfcr das Speichern von Daten ist oft gr\xf6sser als die Zugriffszeit f\xfcr das Laden."),(0,r.kt)("li",{parentName:"ul"},"Aus der Zugriffszeit kann die ",(0,r.kt)("strong",{parentName:"li"},"Daten\xfcbertragungsrate")," berechnet werden, also die Datenmenge, die innerhalb einer bestimmten Zeit geladen oder gespeichert werden kann. Die Daten\xfcbertragungsrate wird in Byte pro Sekunde angegeben.")),(0,r.kt)("h2",{id:"arbeitsspeicher-ram"},"Arbeitsspeicher (RAM)"),(0,r.kt)("p",null,"Der Arbeitsspeicher oder das RAM (engl. ",(0,r.kt)("em",{parentName:"p"},"random access memory"),") enth\xe4lt die Befehle und Daten der aktuell ge\xf6ffneten Programme oder Apps. Der Prozessor muss m\xf6glichst schnell auf diese Daten zugreifen k\xf6nnen. Der Arbeitsspeicher muss also eine m\xf6glichst kleine Zugriffszeit haben."),(0,r.kt)("p",null,"Daf\xfcr werden Nachteile in Kauf genommen. So ist die Speicherkapazit\xe4t von Arbeitsspeicher eher klein. Ausserdem ist Arbeitsspeicher ",(0,r.kt)("strong",{parentName:"p"},"fl\xfcchtig"),". Dies bedeutet, dass die Daten verloren gehen, sobald der Speicher nicht mehr mit Strom versorgt wird."),(0,r.kt)("p",null,"Heute wird in Computern normalerweise sogenanntes DDR-SDRAM",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," eingesetzt. Es zeichnet sich dadurch aus, dass die Daten alle paar Millisekunden wieder neu geschrieben werden m\xfcssen (",(0,r.kt)("em",{parentName:"p"},"Refresh"),")."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"W-sky",author_uri:"https://en.wikipedia.org/wiki/de:User:W-sky",licence:"CC-BY-SA-2.0",licence_url:"https://commons.wikimedia.org/wiki/File:DDR-SDRAM-Module.jpg"},caption:"DDR SDRAM",options:{},isInline:!1,src:i(43654).Z,alt:"DDR SDRAM",mdxType:"Image"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"ram-in-meinem-smartphonelaptop"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"RAM in meinem Smartphone/Laptop")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wie viel Arbeitsspeicher besitzt Ihr Smartphone, ihr Laptop?"),(0,r.kt)(s.Z,{type:"text",webKey:"98675ca4-1e32-4d92-99fc-2fef6b5faefc",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"hinweis"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hinweis")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dies kann in den Systemeinstellungen oder im (unter Windows) im Taskmanager nachgeschaut werden. "))))),(0,r.kt)("h2",{id:"festplatten"},"Festplatten"),(0,r.kt)("p",null,"Der Festplatten- oder ",(0,r.kt)("strong",{parentName:"p"},"Massenspeicher")," erf\xfcllt ganz andere Anforderungen als der Arbeitsspeicher. Wichtig ist hier, dass Daten in grossen Mengen permanent gespeichert k\xf6nnen, ohne dass eine durchgehende Stromzufuhr n\xf6tig ist. Dass die Daten\xfcbertragungsrate deutlich langsamer als beim Arbeitsspeicher ist, spielt deshalb eine untergeordnete Rolle. Er wird \u2013 im Gegensatz zum Arbeitsspeicher \u2013 nicht direkt auf das Mainboard gesteckt, sondern mittels Strom- und Datenkabel angeschlossen."),(0,r.kt)("p",null,"Heute gibt des den Festplattenspeicher in zwei Ausf\xfchrungen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"herk\xf6mmliche Harddisks oder HDD (engl. ",(0,r.kt)("em",{parentName:"li"},"hard disk drive"),")"),(0,r.kt)("li",{parentName:"ul"},"SSDs (engl. ",(0,r.kt)("em",{parentName:"li"},"solid state disk"),")")),(0,r.kt)("h3",{id:"harddisk-hdd"},"Harddisk (HDD)"),(0,r.kt)("p",null,"Der Aufbau einer ",(0,r.kt)("strong",{parentName:"p"},"herk\xf6mmlichen Harddisk")," gleicht einem Plattenspieler. Im Innern der Harddisk drehen sich mehrere Platten, auf denen durch ",(0,r.kt)("strong",{parentName:"p"},"Magnetisierung")," einzelner Bereiche Daten gespeichert werden. Auf dem nachfolgenden Bild (rechts) sieht man den Arm zum Auslesen resp. Schreiben der Daten (er befindet sich momentan in der Parkposition neben den Scheiben). Dieser Speicher wird heute noch eingesetzt, um grosse Datenmengen g\xfcnstig zu speichern. Er ist relativ langsam und anf\xe4llig auf Transportsch\xe4den, da es sich um einen mechanischen Speicher mit beweglichen Teilen handelt. Die Drehgeschwindigkeit der Platten ist beschr\xe4nkt, sie bestimmt Lese-/Schreibgeschwindigkeit. Zudem muss vor dem effektiven Zugriff stets noch gewartet werden, bis sich der Arm an der richtigen Position befindet."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/de/photo/1136478"},caption:"Harddisk",options:{},isInline:!1,src:i(2381).Z,alt:"Harddisk",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/de/photo/1387054"},caption:"ge\xf6fffnete Harddisk",options:{},isInline:!1,src:i(71701).Z,alt:"ge\xf6fffnete Harddisk",mdxType:"Image"}))))),(0,r.kt)("h3",{id:"solid-state-disk-ssd"},"Solid State Disk (SSD)"),(0,r.kt)("p",null,"Der Aufbau einer ",(0,r.kt)("strong",{parentName:"p"},"SSD")," gleicht in keiner Weise demjenigen einer HDD. Wie der Name schon sagt, enth\xe4lt sie keine beweglichen Teile und ist daher robuster, schneller, leichter und verbraucht weniger Strom. Allerdings gibt es zwei gewichtige Nachteile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSDs kosten ein Mehrfaches im Vergleich zu herk\xf6mmlichen HDDs."),(0,r.kt)("li",{parentName:"ul"},"Auf dem Markt sind nicht so grosse (in Bezug auf die Speicherkapazit\xe4t) SSDs erh\xe4ltlich wie HDDs.")),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Arshane88",author_uri:"https://commons.wikimedia.org/w/index.php?title=User:Arshane88&action=edit&redlink=1",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Samsung_860_SATA_III.jpg"},caption:"SSD",options:{},isInline:!1,src:i(62529).Z,alt:"SSD",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"MatteX",author_uri:"https://commons.wikimedia.org/w/index.php?title=User:MatteX&action=edit&redlink=1",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:Samsung_SSD_840_120GB_MZ-7TD120--3_BOTTOM_LID_REMOVED.JPG"},caption:"ge\xf6fffnete SSD",options:{},isInline:!1,src:i(1899).Z,alt:"ge\xf6fffnete SSD",mdxType:"Image"}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"hddssd-in-meinem-smartphonelaptop"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"HDD/SSD in meinem Smartphone/Laptop")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Wie viel Speicherplatz besitzt Ihr Smartphone, ihr Laptop?"),(0,r.kt)("li",{parentName:"ul"},"Wie viel davon ist noch frei?"),(0,r.kt)("li",{parentName:"ul"},"Speicher erweitern: Besitzt Ihr Laptop/Smartphone einen Kartenslot f\xfcr SD/microSD Karten?")),(0,r.kt)(s.Z,{type:"text",webKey:"27d447fa-82af-4969-9564-edc896e5bdde",mdxType:"Answer"}))),(0,r.kt)("h3",{id:"anschlusskabel"},"Anschlusskabel"),(0,r.kt)("p",null,"Festplatten werden mit sogenannten SATA-Kabeln angeschlossen. Die Abk\xfcrzung SATA steht f\xfcr ",(0,r.kt)("em",{parentName:"p"},"serial at attachment"),". Das schmalere Kabel dient zur Daten\xfcbertragung, das breitere f\xfcr die Stromzufuhr."),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Berkut",author_uri:"https://en.wikipedia.org/wiki/User:Berkut",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:SATA_ports.jpg"},caption:"SATA-Kabel ",options:{},isInline:!1,src:i(2428).Z,alt:"SATA-Kabel ",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Afrank99",author_uri:"https://commons.wikimedia.org/wiki/User:Afrank99",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:SATA_Power_Plug.jpg"},caption:"SATA-Stromanschluss ",options:{},isInline:!1,src:i(84776).Z,alt:"SATA-Stromanschluss ",mdxType:"Image"}))))),(0,r.kt)("h2",{id:"speicherhierarchie"},"Speicherhierarchie"),(0,r.kt)("p",null,"Aus technischen Gr\xfcnden sind schnelle Speicher viel teurer als langsame Speicher. Ausserdem sind schnelle Speicher ",(0,r.kt)("strong",{parentName:"p"},"fl\xfcchtig"),", sie ben\xf6tigen eine Stromzufuhr, um den Speicherinhalt bewahren zu k\xf6nnen."),(0,r.kt)("p",null,"Das f\xfchrt dazu, dass schneller Speicher in viel kleineren Mengen und nur wo unbedingt n\xf6tig eingesetzt wird. Es ergibt sich in Computersystemen eine Hierarchie von verschiedenen Speichern. Je n\xe4her der Speicher beim Prozessor ist, desto schneller muss er sein."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Speicherhierarchie",options:{},isInline:!1,src:i(20479).Z,alt:"Speicherhierarchie",mdxType:"Image"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"speicher"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Speicher")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Wieso enth\xe4lt ein Computer so viele verschiedene Speicherarten?"),(0,r.kt)("li",{parentName:"ol"},"\xdcberlegen Sie sich, welche Daten auf den einzelnen Ebenen der oben abgebildeten Speicherhierarchie gespeichert werden."),(0,r.kt)("li",{parentName:"ol"},"Wieso kann eine Datei auf einer Festplatte viel schneller gel\xf6scht als gespeichert werden?")),(0,r.kt)(s.Z,{type:"text",webKey:"074b934c-5b70-45c6-8034-4e99e77d850b",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"speicherkosten-und-datendurchsatz"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Speicherkosten und Datendurchsatz")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"F\xfchren Sie auf ",(0,r.kt)("a",{parentName:"p",href:"https://digitec.ch"},"Digitec")," eine Recherche zu den Speicherpreisen und dem Datendurchsatz durch. Bestimmen Sie jeweils"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"den ",(0,r.kt)("strong",{parentName:"li"},"Preis pro GB")," (selber berechnen) und"),(0,r.kt)("li",{parentName:"ul"},"den ",(0,r.kt)("strong",{parentName:"li"},"Datendurchsatz")," f\xfcrs ",(0,r.kt)("em",{parentName:"li"},"Schreiben")," und ",(0,r.kt)("em",{parentName:"li"},"Lesen"),".\nf\xfcr ein Modell im mittleren Preissegment.")),(0,r.kt)("p",{parentName:"div"},"SSD, Mobile SSD, HDD, Externe HDD, USB-Stick, SD/microSD Karte "),(0,r.kt)(s.Z,{type:"text",webKey:"1e665ad1-531f-4d31-a9b5-a3a4c4dc80ff",mdxType:"Answer"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"DDR-SDRAM: engl. ",(0,r.kt)("em",{parentName:"li"},"Double Data Rate Synchronous Dynamic Random Access Memory"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},43654:function(e,t,i){t.Z=i.p+"assets/images/04-ddr-sdram-524985ba1c1c53c0f7115a5195bdf778.jpg"},71701:function(e,t,i){t.Z=i.p+"assets/images/04-harddisk-open-a98de5dfdb040f1199ed165887bba311.jpg"},2381:function(e,t,i){t.Z=i.p+"assets/images/04-harddisk-607a6e250e30b57d8dc88f211180fb7c.jpg"},84776:function(e,t,i){t.Z=i.p+"assets/images/04-sata-power-f51a200377294d419beaa2009659075d.jpg"},2428:function(e,t,i){t.Z=i.p+"assets/images/04-sata-05bd057c3c64541defbacc636ff64942.jpg"},1899:function(e,t,i){t.Z=i.p+"assets/images/04-ssd-open-12a2f8c087afc3fe39556ecb1dd58461.jpg"},62529:function(e,t,i){t.Z=i.p+"assets/images/04-ssd-117a29c057a63d24443a27dc8f1032f4.jpg"},20479:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjM2MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iZXh0ZXJuIj4KICAgICAgICA8cmVjdCB4PSI0MDAiIHk9IjIwOCIgd2lkdGg9IjM4NCIgaGVpZ2h0PSI5NiIgc3R5bGU9ImZpbGw6cmdiKDE4NywyMjIsMjUxKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDYzMy4yNDQsMjE1LjcxNykiPgogICAgICAgICAgICA8dGV4dCB4PSIzNi43NDJweCIgeT0iMzcuMjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+YXVzc2VyaGFsYjwvdGV4dD4KICAgICAgICAgICAgPHRleHQgeD0iMzYuNzQycHgiIHk9IjU3LjI4cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPmRlcyBHZXLDpHRzPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJHZXLDpHQiPgogICAgICAgIDxyZWN0IHg9IjQwMCIgeT0iMTEyIiB3aWR0aD0iMzg0IiBoZWlnaHQ9Ijk2IiBzdHlsZT0iZmlsbDpyZ2IoMjAwLDIzMCwyMDEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjcxNy41MzVweCIgeT0iMTY3LjE2OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5HZXLDpHQ8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29yIj4KICAgICAgICA8cmVjdCB4PSI0MDAiIHk9IjE2IiB3aWR0aD0iMzg0IiBoZWlnaHQ9Ijk2IiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxNzgpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjY3Ny4yOTFweCIgeT0iNzAuOTczcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlByb3plc3NvcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJwZXJzaXN0ZW50Ij4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTYwIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE0NCIgc3R5bGU9ImZpbGw6cmdiKDE4OSwxODksMTg5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMC44NDhweCIgeT0iMjM3LjA4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5wZXJzaXN0ZW50PC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9ImZsw7xjaHRpZyI+CiAgICAgICAgPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjE0NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDUsMjEwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMS43MjdweCIgeT0iOTMuMDYzcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPu+sgsO8Y2h0aWc8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQ2xvdWRzcGVpY2hlciI+CiAgICAgICAgPHJlY3QgeD0iMTQ0IiB5PSIyNTYiIHdpZHRoPSI1MTIiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzM1Ljc1MnB4IiB5PSIyODUuMjgzcHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkNsb3Vkc3BlaWNoZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iV2VjaHNlbGRhdGVudHLDpGdlciI+CiAgICAgICAgPHJlY3QgeD0iMTc2IiB5PSIyMDgiIHdpZHRoPSI0NDgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzEwLjQ0NHB4IiB5PSIyMzYuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPldlY2hzZWxkYXRlbnRyw6RnZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iTWFzc2Vuc3BlaWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjIwOCIgeT0iMTYwIiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjMyNi41NjdweCIgeT0iMTg5LjExMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5NYXNzZW5zcGVpY2hlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJBcmJlaXRzc3BlaWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjI0MCIgeT0iMTEyIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjMzMi44MDNweCIgeT0iMTQxLjExMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcmJlaXRzc3BlaWNoZXI8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29yY2FjaGUiPgogICAgICAgIDxyZWN0IHg9IjI3MiIgeT0iNjQiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzI3Ljg4MXB4IiB5PSI5NC45OTdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29yY2FjaGU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iUHJvemVzc29ycmVnaXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjMwNCIgeT0iMTYiIHdpZHRoPSIxOTIiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzIwLjkwM3B4IiB5PSI0NC45NjFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29ycmVnaXN0ZXI8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);