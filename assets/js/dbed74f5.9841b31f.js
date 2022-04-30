"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21459],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82593:function(e,t,n){n.d(t,{x:function(){return O},Z:function(){return P}});var r=n(67294),a=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),s=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);a=i[l],n=""+t.replace(s,"")}return r.createElement("option",{value:t,className:a},n)},c=n(92814),d=n(51436),m=n(68949),p=n(72389),f=n(21314),h=n(74322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),a=r.useState("unchecked"),o=a[0],s=a[1],g=(0,f.oR)("documentStore").find(e.webKey),b=function(e){g.loaded&&(s("unchecked"),g.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&k(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&k(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:g.value,className:v(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(g.value)},className:(0,l.default)(i[o],i.checkButton)},r.createElement(c.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),k=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:y(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),E=n(83117),N=n(75552),x=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(h.Z,null)})),S=n(47271),Z=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=n(97762),O=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),a=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(S.Z,null),n.loggedIn&&r.createElement(Z,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(b,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),s=n(92814),u=n(51436),c=(0,o.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(s.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(86010),u=n(71217),c=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],f=t[1],h=r.useState(!1),g=h[0],v=h[1],b=r.useRef(null),k=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var i=t[a.katex].default;window.katex=i}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&g&&k.loaded?r.createElement("div",{onFocus:function(){return!u&&f(!0)},className:(0,s.default)(a)},r.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,u?void 0:o),value:k.text||"",onChange:function(t,n,r,a){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&g&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},54745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(82593),o=["components"],s={title:"Umwandlung ins Bin\xe4rsystem"},u="Umwandlung ins Bin\xe4rsystem [^1]",c={unversionedId:"Kryptologie/Symmetrisch/binaer",id:"Kryptologie/Symmetrisch/binaer",title:"Umwandlung ins Bin\xe4rsystem",description:"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden.",source:"@site/docs/Kryptologie/03-Symmetrisch/01-binaer.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/binaer",permalink:"/Kryptologie/Symmetrisch/binaer",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/01-binaer.md",tags:[],version:"current",lastUpdatedAt:1635717936,formattedLastUpdatedAt:"10/31/2021",sidebarPosition:1,frontMatter:{title:"Umwandlung ins Bin\xe4rsystem"},sidebar:"sidebar",previous:{title:"Symmetrisch",permalink:"/category/symmetrisch"},next:{title:"Codierung",permalink:"/Kryptologie/Symmetrisch/codierung"}},d={},m=[{value:"Prozess der Verschl\xfcsselung",id:"prozess-der-verschl\xfcsselung",level:2},{value:"Ein grosser Vorteil",id:"ein-grosser-vorteil",level:2},{value:"Codierung",id:"codierung",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umwandlung-ins-bin\xe4rsystem-"},"Umwandlung ins Bin\xe4rsystem ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"In diesem Kapitel dringen wir in unsere Zeit vor. Wir verwenden Computer, die mit bin\xe4ren Zahlen arbeiten. Somit muss der Klartext vor der Verschl\xfcsselung in bin\xe4re Zahlen umgewandelt werden."),(0,i.kt)("h2",{id:"prozess-der-verschl\xfcsselung"},"Prozess der Verschl\xfcsselung"),(0,i.kt)("p",null,"Das Verfahren wird etwas umst\xe4ndlicher, da jeweils in die bin\xe4re Computersprache \xfcbersetzt werden muss:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Geheimtext wird in eine Folge von bin\xe4ren Zahlen codiert (Klartext \u2192 bin\xe4rer Klartext)"),(0,i.kt)("li",{parentName:"ol"},"Verschl\xfcsselung dieser Zahlenfolge (bin\xe4rer Klartext \u2192 bin\xe4rer Geheimtext)"),(0,i.kt)("li",{parentName:"ol"},"... (Versand, Abspeichern, ...)"),(0,i.kt)("li",{parentName:"ol"},"Decodierung des bin\xe4ren Geheimtextes (bin\xe4rer Geheimtext \u2192 Geheimtext)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"unterschied-codierung-und-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Unterschied \xabCodierung\xbb und \xabVerschl\xfcsselung\xbb")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Es ist wichtig, dass die Begriffe ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," und ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," unterschieden werden:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Codierung")," ist eine Umwandlung in eine andere Darstellungsform (z.B. Text \u2192 Zahlen, Bild \u2192 Text, Zahlen \u2192 bin\xe4re Zahlen, ...). Eine Codierung hat das ",(0,i.kt)("strong",{parentName:"p"},"Ziel"),", eine Information in ein bestimmtes ",(0,i.kt)("strong",{parentName:"p"},"Datenformat umzuwandeln"),", sie bietet keine Sicherheit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Eine ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," oder ",(0,i.kt)("em",{parentName:"p"},"Chiffre")," hat das Ziel zu ",(0,i.kt)("strong",{parentName:"p"},"verhindern"),", dass Aussenstehende an eine bestimmte ",(0,i.kt)("strong",{parentName:"p"},"Information gelangen"),", indem Daten mithilfe eines Schl\xfcssels so ver\xe4ndert werden, dass ohne Kenntnis des Schl\xfcssels nicht mehr auf die urspr\xfcngliche Form geschlossen werden kann."))))),(0,i.kt)("h2",{id:"ein-grosser-vorteil"},"Ein grosser Vorteil"),(0,i.kt)("p",null,"Die vorg\xe4ngige Codierung bedeutet zwar beim Erarbeiten einen Mehraufwand, bietet jedoch einen erheblichen Vorteil: Alles, was sich in bin\xe4rer Form darstellen l\xe4sst, kann ohne weitere Anpassung des Verfahrens verschl\xfcsselt werden!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Texte (unabh\xe4ngig von der Sprache resp. den verwendeten Schriftzeichen)"),(0,i.kt)("li",{parentName:"ul"},"Bilder"),(0,i.kt)("li",{parentName:"ul"},"Ton"),(0,i.kt)("li",{parentName:"ul"},"Videos")),(0,i.kt)("p",null,"Dies war in der Antike nicht n\xf6tig, heute ist es allerdings unumg\xe4nglich."),(0,i.kt)("h2",{id:"codierung"},"Codierung"),(0,i.kt)("p",null,"Wie im Kapitel \xabCodes und Daten\xbb besprochen, gibt es dazu eine Vielzahl von Codierungen. Beispielsweise k\xf6nnte dazu die ASCII-Codierung verwendet werden."),(0,i.kt)("p",null,"F\xfcr die folgenden Beispiele verwenden wir den etwas k\xfcrzeren Pentacode."),(0,i.kt)(l.Z,{type:"text",webKey:"e1cd3339-5234-42b3-90cd-9e777d74a88e",placeholder:"Notizen...",mdxType:"Answer"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=4464"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);