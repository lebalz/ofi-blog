"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[85287],{3239:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(71217),c=n(21314),s=(0,l.Pi)((function(){return(0,c.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return P}});var a=n(87462),r=n(67294),i=n(72389),l=n(71217),c=n(21314),s=n(78982),o=n(46858),u=r.createContext(void 0),d=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},m=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:d(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,o.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,s.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,s.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:d(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:d(t),type:t.type},n)},f=(0,l.Pi)((function(e){var t=(0,c.o)("documentStore"),n=r.useState(m(t,e))[0];return(0,i.Z)()?r.createElement(u.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),g=n(26528),b={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},h=n(86010),p=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){var t=e.value,n=t,a=void 0;if(p.test(t)){var i=function(e){if(p.test(e))return e.match(p).groups.klass}(t);a=b[i],n=""+t.replace(p,"")}return r.createElement("option",{value:t,className:a},n)},y=n(92814),k=n(51436),N=n(68949),E=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return b[function(e){if(E.test(e))return e.match(E).groups.klass}(e)]},x=(0,l.Pi)((function(e){var t,n=(0,i.Z)(),a=r.useState("unchecked"),l=a[0],c=a[1],s=r.useContext(u),o=function(e){c("unchecked"),s.setData({value:e,type:"string"})},d=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,N.U5)((function(){return s.loaded}),(function(e){e&&d(s.data.value)}))}),[]),r.useEffect((function(){s.loaded&&d(s.data.value)}),[n]),r.createElement("div",{className:b.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return o(e.target.value)},style:{width:e.width},value:s.data.value,className:w(s.data.value),disabled:!s.loaded},e.select.map((function(e,t){return r.createElement(v,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return o(e.target.value)},value:s.data.value,disabled:!s.loaded||s.isReadonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return d(s.data.value)},className:(0,h.default)(b[l],b.checkButton)},r.createElement(y.G,{icon:(t=l,"correct"===t?k.f8k:"wrong"===t?k.nYk:k.sph)})))})),z=(0,g.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),S=function(e){return b[function(e){if(z.test(e))return e.match(z).groups.klass}(e)]},F=(0,l.Pi)((function(e){var t=r.useContext(u),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return r.createElement("div",{className:b.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:S(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(v,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.isReadonly})})))})),_=void 0,A=[["bold","italic","underline"]],D=[].concat(A,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),C=(0,l.Pi)((function(e){var t=r.useState(!1),a=t[0],i=t[1],l=r.useState(!1),c=l[0],s=l[1],o=r.useRef(null),d=r.useContext(u),m=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(_)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){_=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(s(!0),o&&o.current&&o.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,o&&o.current&&o.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return _&&c?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(_,{ref:o,theme:"snow",readOnly:!d.loaded||d.isReadonly,className:(0,h.default)(b.quillAnswer,e.monospace&&b.monospace,a?void 0:"disable-toolbar"),value:d.loaded?d.data.value||"":"Laden...",onChange:function(e,t,n,a){var r,i;r=e,void 0===i&&(i=0),c&&d.setData({value:r,type:"text"})},modules:{toolbar:e.reduced?A:D,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),B=n(3239),Z=n(79265),I=(0,l.Pi)((function(){var e=r.useContext(u),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(u.Provider,{value:new Z.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(C,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(F,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),K=(0,l.Pi)((function(){return r.useContext(u).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,l.Pi)((function(e){var t=(0,c.o)("msalStore");return r.createElement(f,(0,a.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(B.Z,null),t.loggedIn&&r.createElement(I,null),t.loggedIn&&r.createElement(K,null),"text"===e.type&&r.createElement(C,e),"string"===e.type&&r.createElement(x,e),"array"===e.type&&r.createElement(F,e)))}))},92302:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(86010),r=n(67294),i="container_98FZ",l="A_9Eva",c="PUB_1HbS",s="B_1prs",o="MIXA_1niJ",u="MIXB_1j4K",d="PRIVA_3sJO",m="PRIVB_2AZJ",f="colorPicker_23q8",g="colorBucket_1uzl",b="mixed_1B_u",h="caption_2CJd",p=n(46910),v=n.n(p),y=n(90532),k=function(e){return"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase()},N=function(e,t,n){t/=100,n/=100;var a=(1-Math.abs(2*n-1))*t,r=a*(1-Math.abs(e/60%2-1)),i=n-a/2,l=0,c=0,s=0;0<=e&&e<60?(l=a,c=r,s=0):60<=e&&e<120?(l=r,c=a,s=0):120<=e&&e<180?(l=0,c=a,s=r):180<=e&&e<240?(l=0,c=r,s=a):240<=e&&e<300?(l=r,c=0,s=a):300<=e&&e<360&&(l=a,c=0,s=r);var o=Math.round(255*(l+i)).toString(16),u=Math.round(255*(c+i)).toString(16),d=Math.round(255*(s+i)).toString(16);return 1==o.length&&(o="0"+l),1==u.length&&(u="0"+c),1==d.length&&(d="0"+s),"#"+o+u+d},E=function(e){var t=r.useState(60),n=t[0],p=t[1],E=r.useState("#ffff00"),w=E[0],x=E[1],z=r.useState(230),S=z[0],F=z[1],_=r.useState("#ffff00"),A=_[0],D=_[1],C=r.useState(100),B=C[0],Z=C[1],I=r.useState("#ffff00"),K=I[0],L=I[1],P=r.useState("#ffff00"),M=P[0],V=P[1],O=r.useState("#ffff00"),H=O[0],j=O[1],G=r.useState("#ffff00"),R=G[0],W=G[1],J=r.useState("#ffff00"),T=J[0],U=J[1];return r.useEffect((function(){x(N(n,100,50))}),[n]),r.useEffect((function(){D(N(S,100,50))}),[S]),r.useEffect((function(){L(N(B,100,50))}),[B]),r.useEffect((function(){V("#"+v().mixColors([w,K]))}),[w,K]),r.useEffect((function(){j("#"+v().mixColors([A,K]))}),[A,K]),r.useEffect((function(){var e=v().mixColors([w,K,A]);W("#"+e),U("#"+e)}),[w,K,A]),r.createElement("div",{className:i},r.createElement("div",{className:(0,a.default)(l)},r.createElement(y.Z,{className:f,hue:n,onInput:function(e){return p(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(c)},r.createElement(y.Z,{className:f,hue:B,onInput:function(e){return Z(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:K,color:k(K)}},"\xd6ffentlich")," ","Farbe")),r.createElement("div",{className:(0,a.default)(s)},r.createElement(y.Z,{className:f,hue:S,onInput:function(e){return F(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(o,b)},r.createElement("div",{className:g,style:{background:M}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:K,color:k(K)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,a.default)(u,b)},r.createElement("div",{className:g,style:{background:H}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:K,color:k(K)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"))),r.createElement("div",{className:(0,a.default)(d,b)},r.createElement("div",{className:g,style:{background:R}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:H,color:k(H)}},"Mischung"))),r.createElement("div",{className:(0,a.default)(m,b)},r.createElement("div",{className:g,style:{background:T}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:k(M)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"))))}},21314:function(e,t,n){n.d(t,{o:function(){return i}});var a=n(67294),r=n(32930),i=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(o){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},6446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return b}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(84384),c=n(92302),s=n(77960),o=["components"],u={title:"Geheime Farbe"},d="Geheime Farbe [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"version-24i/Kryptologie/Asymmetrisch/secret-color",isDocsHomePage:!1,title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/24i/Kryptologie/Asymmetrisch/secret-color",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"24i",sidebarPosition:2,frontMatter:{title:"Geheime Farbe"},sidebar:"version-24i/sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/24i/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/24i/Kryptologie/Asymmetrisch/asymmetrie"}},f=[{value:"Alice und Bob",id:"alice-und-bob",children:[],level:2},{value:"Eve",id:"eve",children:[],level:2},{value:"Ausprobieren",id:"ausprobieren",children:[],level:2}],g={toc:f};function b(e){var t=e.components,u=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geheime-farbe-"},"Geheime Farbe ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,i.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,i.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,i.kt)("h2",{id:"alice-und-bob"},"Alice und Bob"),(0,i.kt)("p",null,"Sie haben eine Idee und gehen wie folgt vor:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,i.kt)("li",{parentName:"ol"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,i.kt)("h2",{id:"eve"},"Eve"),(0,i.kt)("p",null,"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,i.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,i.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,i.kt)(s.Z,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen kann?"),(0,i.kt)(s.Z,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,i.kt)(c.Z,{mdxType:"ColorExchange"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,i.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,i.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,i.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},caption:"digitales (links) und reales (rechts) Farbmodell",options:{},isInline:!1,src:n(28263).Z,alt:"digitales (links) und reales (rechts) Farbmodell",mdxType:"Image"})))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=242355"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},28263:function(e,t,n){t.Z=n.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);