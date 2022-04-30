"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[93923],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,p=m["".concat(c,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return K}});var r=n(67294),i=n(3435),a={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},o=n(86010),l=n(71217),c=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,i=void 0;if(c.test(t)){var o=function(e){if(c.test(e))return e.match(c).groups.klass}(t);i=a[o],n=""+t.replace(c,"")}return r.createElement("option",{value:t,className:i},n)},u=n(92814),d=n(51436),m=n(68949),f=n(72389),p=n(21314),h=n(74322),g=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return a[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,n=(0,f.Z)(),i=r.useState("unchecked"),l=i[0],c=i[1],g=(0,p.oR)("documentStore").find(e.webKey),k=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return v(g.value)},className:(0,o.default)(a[l],a.checkButton)},r.createElement(u.G,{icon:(t=l,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),v=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return a[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},w=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(i,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return n(e.target.value,a)},value:i,className:y(i),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return n(e.target.value,a)},value:i,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),E=n(83117),N=n(75552),S=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(h.Z,null)})),x=n(47271),_=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},K=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),a=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(_,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(k,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),i="noLoginAlert_HRfh",a=n(39960),o=n(71217),l=n(21314),c=(0,o.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(92814),o=n(51436),l=n(86010),c=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,l.default)("badge badge--secondary")},r.createElement(a.G,{icon:o.Xjp}))))},s=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+s(n.size)+")",t.maxHeight=s(n.size),delete n.size),n.height&&(t.maxHeight=s(n.height),t.height=s(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+s(n.width)+")",t.width=s(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(u,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),o=a[0],s=a[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,l.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,o;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,o=t.top<=i&&t.bottom>=i,a&&o||n(!1)}},r.createElement(u,e),m&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,l.default)(i.bib,o?i.visible:void 0),onClick:function(){return s(!o)}},"@"),o&&r.createElement(c,e.bib)))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i=n(86010),a="loader_FEpR",o="badge_oWqf",l=n(71217),c=n(92814),s=n(51436),u=(0,l.Pi)((function(){return r.createElement("div",{className:(0,i.default)(a)},r.createElement(c.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,i.default)("badge",o)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),i="quillEditor_NxYB",a="quillAnswer_J46I",o="monospace_usc_",l="disableToolbar_bRdP",c=n(86010),s=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return e.code&&t.push(["code-block"]),t},p=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],p=t[1],h=r.useState(!1),g=h[0],b=h[1],k=r.useRef(null),v=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,r=t[i["react-image-compress"]].default;if("katex"in i){var a=t[i.katex].default;window.katex=a}n.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&g&&v.loaded?r.createElement("div",{onFocus:function(){return!s&&p(!0)},className:(0,c.default)(i)},r.createElement(d,{ref:k,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,c.default)(a,e.monospace&&o,s?void 0:l),value:v.text||"",onChange:function(t,n,r,i){var a,o;a=t,void 0===o&&(o=0),!e.readonly&&v.canUpdate&&g&&v.setText(a)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(u.Z,null)}))},50864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(84384),l=n(82593),c=["components"],s={title:"Kerckhoffs' Prinzip"},u="Kerckhoffs' Prinzip",d={unversionedId:"Kryptologie/Symmetrisch/kerckhoffs",id:"version-24i/Kryptologie/Symmetrisch/kerckhoffs",title:"Kerckhoffs' Prinzip",description:"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden.",source:"@site/versioned_docs/version-24i/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",sourceDirName:"06-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/kerckhoffs",permalink:"/24i/Kryptologie/Symmetrisch/kerckhoffs",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/03-Symmetrisch/08-kerckhoffs.md",tags:[],version:"24i",sidebarPosition:8,frontMatter:{title:"Kerckhoffs' Prinzip"},sidebar:"version-24i/sidebar",previous:{title:"Krypto-Familie",permalink:"/24i/Kryptologie/Symmetrisch/krypto-family"},next:{title:"Asymmetrisch",permalink:"/24i/category/asymmetrisch"}},m={},f=[{value:"Das Prinzip von Kerckhoffs",id:"das-prinzip-von-kerckhoffs",level:2},{value:"Formulierung von Claude Shannon",id:"formulierung-von-claude-shannon",level:2},{value:"Erkl\xe4rung von Bruce Schneier",id:"erkl\xe4rung-von-bruce-schneier",level:2}],p={toc:f};function h(e){var t=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kerckhoffs-prinzip"},"Kerckhoffs' Prinzip"),(0,a.kt)("p",null,"In der Kryptologie ist der wichtigste Punkt stets die Sicherheit. Dabei ist es wichtig, Sicherheit von Schein-Sicherheit zu unterscheiden."),(0,a.kt)("h2",{id:"das-prinzip-von-kerckhoffs"},"Das Prinzip von Kerckhoffs"),(0,a.kt)("p",null,"Eines der wichtigsten Prinzipien in der Kryptologie stammt von August Kerckhoffs:"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabDie Sicherheit eines Kryptosystems darf nicht von der Geheimhaltung des Algorithmus abh\xe4ngen."),(0,a.kt)("p",{parentName:"blockquote"},"Die Sicherheit gr\xfcndet sich nur auf die Geheimhaltung des Schl\xfcssels.\xbb\n\u2013 Auguste Kerckhoffs (1835 - 1903)"))),(0,a.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:Auguste_Kerckhoffs.jpg",licence:"Public Domain",licence_url:"https://en.wikipedia.org/wiki/public_domain",edited:!1},caption:"Auguste Kerckhoffs",options:{width:"10em",noMargins:!0},isInline:!1,src:n(83278).Z,alt:"Auguste Kerckhoffs --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)("h2",{id:"formulierung-von-claude-shannon"},"Formulierung von Claude Shannon"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("p",{parentName:"div"},"Claude Shannon hat dasselbe kurz und pr\xe4gnant ausgedr\xfcckt:"),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabThe enemy knows the system!\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Claude Shannon (1916 - 2001)"))),(0,a.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Unkown",source:"https://commons.wikimedia.org/wiki/File:ClaudeShannon_MFO3807.jpg",licence:"CC-SA 2.0",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/de/deed.en",edited:!1},caption:"Claude Shannon",options:{width:"10em",noMargins:!0},isInline:!1,src:n(43736).Z,alt:"Claude Shannon --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)("h2",{id:"erkl\xe4rung-von-bruce-schneier"},"Erkl\xe4rung von Bruce Schneier"),(0,a.kt)("p",null,"Der renommierte Kryptologe Bruce Schneier erkl\xe4rt das Prinzip von Kerckhoffs' mit einer kurzen Geschichte ",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,a.kt)("div",{style:{justifyContent:"space-between",gap:"3em"},className:"flex flex-flex"},(0,a.kt)("div",{parentName:"div",style:{},className:"item"},(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabMan unterscheidet zwei Arten von Verschl\xfcsselung: Verschl\xfcsselung, die deine kleine Schwester daran hindert, deine Dateien zu lesen, und die Verschl\xfcsselung, die bedeutende Regierungen daran hindert, sie zu lesen.\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier")),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"\xabWenn ich einen Brief in einen Safe einschliesse, diesen irgendwo in New York verstecke und dir dann sage, du sollst den Brief lesen, hat dies nichts mit Sicherheit zu tun."),(0,a.kt)("p",{parentName:"blockquote"},"Das ist ",(0,a.kt)("strong",{parentName:"p"},"Verschleierung"),"."),(0,a.kt)("p",{parentName:"blockquote"},"Angenommen, ich schliesse einen Brief in einen Safe ein, \xfcbergebe dir den Safe mitsamt Bauplan, hundert weiteren, identischen Safes und deren geheimer Kombination, so dass du und die besten Codeknacker den Schliessmechanismus studieren k\xf6nnen."),(0,a.kt)("p",{parentName:"blockquote"},"Wenn du den Brief trotzdem nicht lesen kannst, ",(0,a.kt)("strong",{parentName:"p"},"dann spricht man von Sicherheit"),".\xbb"),(0,a.kt)("p",{parentName:"blockquote"},"\u2013 Bruce Schneier"))),(0,a.kt)("div",{parentName:"div",style:{},className:"item noFlex"},(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Rama",source:"https://commons.wikimedia.org/wiki/File:Bruce_Schneier_at_CoPS2013-IMG_9055.jpg",licence:"CC-BY-SA",licence_url:"https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",edited:!1},caption:"Bruce Schneier",options:{width:"10em",noMargins:!0},isInline:!1,src:n(57501).Z,alt:"Bruce Schneier --no-margins --width=10em",mdxType:"Image"})))),(0,a.kt)(l.Z,{type:"text",webKey:"8db592e4-1a5c-44eb-8974-cccda9dd2af1",placeholder:"Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://www.schneier.com/books/applied-cryptography-2preface/"},"Applied Cryptography"),", Bruce Schneier, Vorwort",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},83278:function(e,t,n){t.Z=n.p+"assets/images/auguste_kerckhoffs-ae48ee0de6e8bbbee1e3bb1cd86bc4f0.jpg"},57501:function(e,t,n){t.Z=n.p+"assets/images/bruce_schneier-6f0cabe3a5af1dc7e571a7986ba25c85.jpg"},43736:function(e,t,n){t.Z=n.p+"assets/images/claude_shannon-06065251902711206036fb35df664804.jpg"}}]);