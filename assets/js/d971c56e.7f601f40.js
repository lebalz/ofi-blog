"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[72566],{52084:function(e,t,n){n.d(t,{x:function(){return C},Z:function(){return Z}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),c=n(71217),s=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),d=n(51436),m=n(68949),f=n(72389),g=n(21314),b=n(74322),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),p=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,n,r,c=(0,f.Z)(),s=a.useState("unchecked"),h=s[0],v=s[1],y=(0,g.oR)("documentStore").find(e.webKey),k=function(t){!e.isLegacy&&y.loaded&&(v("unchecked"),y.setData({value:t,type:"string"}))},E=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};v(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return y.loaded}),(function(e){e&&E(y.value)}))}),[y]),a.useEffect((function(){y.loaded&&E(y.value)}),[y,c]),c?y.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=y.legacyData)?void 0:t.value:y.value,className:p(y.value),disabled:!y.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(n=y.legacyData)?void 0:n.value:y.value,disabled:!y.loaded||y.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return E(y.value)},className:(0,l.default)(i[h],i.checkButton)},a.createElement(u.G,{icon:(r=h,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(b.Z,null):a.createElement("div",null,"SSR")})),y=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},E=(0,c.Pi)((function(e){var t,n=(0,g.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:k(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(b.Z,null)})),N=n(83117),w=n(75552),S=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,N.Z)({model:t},e))):a.createElement(b.Z,null)})),x=n(47271),_=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},z=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(S,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(E,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return _("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return _("use_current",t)}},"Nein (verwerfen)"))):null})),F=(0,c.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=n(46858),L=n(78982),D=n(97762),C=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,A.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},Z=(0,c.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||D.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(z,e),n.loggedIn&&a.createElement(F,{webKey:e.webKey}),"text"===e.type&&a.createElement(S,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(E,e)):a.createElement(b.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),c=n(21314),s=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},84384:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(92814),l=n(51436),c=n(86010),s=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,c.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,c.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},o=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+o(n.size)+")",t.maxHeight=o(n.size),delete n.size),n.height&&(t.maxHeight=o(n.height),t.height=o(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+o(n.width)+")",t.width=o(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),i=a.useState(!1),l=i[0],o=i[1],d=e.caption&&"undefined"!==e.caption,m=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,c.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,r,i,l;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=t.left<=a&&t.right>=a,l=t.top<=r&&t.bottom>=r,i&&l||n(!1)}},a.createElement(u,e),m&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,c.default)(r.bib,l?r.visible:void 0),onClick:function(){return o(!l)}},"@"),l&&a.createElement(s,e.bib)))}},92302:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(86010),r=n(67294),i="container_GwNw",l="A_T38E",c="PUB_yjj_",s="B_c62f",o="MIXA_Gd8i",u="MIXB_CGO5",d="PRIVA_myYZ",m="PRIVB_yZfW",f="colorPicker_gndF",g="colorBucket_vssC",b="mixed_mKvb",h="caption__7Oz",p=n(46910),v=n.n(p),y=n(90532),k=function(e){return"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase()},E=function(e,t,n){t/=100,n/=100;var a=(1-Math.abs(2*n-1))*t,r=a*(1-Math.abs(e/60%2-1)),i=n-a/2,l=0,c=0,s=0;0<=e&&e<60?(l=a,c=r,s=0):60<=e&&e<120?(l=r,c=a,s=0):120<=e&&e<180?(l=0,c=a,s=r):180<=e&&e<240?(l=0,c=r,s=a):240<=e&&e<300?(l=r,c=0,s=a):300<=e&&e<360&&(l=a,c=0,s=r);var o=Math.round(255*(l+i)).toString(16),u=Math.round(255*(c+i)).toString(16),d=Math.round(255*(s+i)).toString(16);return 1==o.length&&(o="0"+l),1==u.length&&(u="0"+c),1==d.length&&(d="0"+s),"#"+o+u+d},N=function(e){var t=r.useState(60),n=t[0],p=t[1],N=r.useState("#ffff00"),w=N[0],S=N[1],x=r.useState(230),_=x[0],z=x[1],F=r.useState("#ffff00"),A=F[0],L=F[1],D=r.useState(100),C=D[0],I=D[1],Z=r.useState("#ffff00"),B=Z[0],K=Z[1],M=r.useState("#ffff00"),P=M[0],V=M[1],O=r.useState("#ffff00"),R=O[0],j=O[1],G=r.useState("#ffff00"),H=G[0],W=G[1],T=r.useState("#ffff00"),q=T[0],J=T[1];return r.useEffect((function(){S(E(n,100,50))}),[n]),r.useEffect((function(){L(E(_,100,50))}),[_]),r.useEffect((function(){K(E(C,100,50))}),[C]),r.useEffect((function(){V("#"+v().mixColors([w,B]))}),[w,B]),r.useEffect((function(){j("#"+v().mixColors([A,B]))}),[A,B]),r.useEffect((function(){var e=v().mixColors([w,B,A]);W("#"+e),J("#"+e)}),[w,B,A]),r.createElement("div",{className:i},r.createElement("div",{className:(0,a.default)(l)},r.createElement(y.Z,{className:(0,a.default)(f,"umami--click--color-exchange-colorpicker"),hue:n,onInput:function(e){return p(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(c)},r.createElement(y.Z,{className:f,hue:C,onInput:function(e){return I(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:B,color:k(B)}},"\xd6ffentlich")," ","Eve \ud83d\udd76")),r.createElement("div",{className:(0,a.default)(s)},r.createElement(y.Z,{className:f,hue:_,onInput:function(e){return z(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(o,b)},r.createElement("div",{className:g,style:{background:P}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:B,color:k(B)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,a.default)(u,b)},r.createElement("div",{className:g,style:{background:R}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:B,color:k(B)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"))),r.createElement("div",{className:(0,a.default)(d,b)},r.createElement("div",{className:g,style:{background:H}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:k(w)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:R,color:k(R)}},"Mischung"))),r.createElement("div",{className:(0,a.default)(m,b)},r.createElement("div",{className:g,style:{background:q}}),r.createElement("div",{className:(0,a.default)(h)},r.createElement("span",{className:"badge badge--secondary",style:{background:P,color:k(P)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:k(A)}},"Bob"))))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",c=n(71217),s=n(92814),o=n(51436),u=(0,c.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",c="disableToolbar_bRdP",s=n(86010),o=n(71217),u=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],g=t[1],b=a.useState(!1),h=b[0],p=b[1],v=a.useRef(null),y=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(p(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&h&&y.loaded?a.createElement("div",{onFocus:function(){return!o&&g(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(i,e.monospace&&l,o?void 0:c),value:y.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&y.canUpdate&&h&&y.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&c()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(o){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},20694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return g}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),c=n(92302),s=n(52084),o=["components"],u={title:"Geheime Farbe"},d="Geheime Farbe [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"version-24L/Kryptologie/Asymmetrisch/secret-color",title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/versioned_docs/version-24L/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/24L/Kryptologie/Asymmetrisch/secret-color",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"Geheime Farbe"},sidebar:"version-24L/sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/24L/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/24L/Kryptologie/Asymmetrisch/asymmetrie"}},f={},g=[{value:"Alice und Bob",id:"alice-und-bob",level:2},{value:"Eve",id:"eve",level:2},{value:"Ausprobieren",id:"ausprobieren",level:2}],b={toc:g};function h(e){var t=e.components,u=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geheime-farbe-"},"Geheime Farbe ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,i.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,i.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,i.kt)("h2",{id:"alice-und-bob"},"Alice und Bob"),(0,i.kt)("p",null,"Sie haben eine Idee und gehen wie folgt vor:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,i.kt)("li",{parentName:"ol"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,i.kt)("h2",{id:"eve"},"Eve"),(0,i.kt)("p",null,"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,i.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,i.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,i.kt)(s.Z,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,i.kt)(s.Z,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,i.kt)(c.Z,{mdxType:"ColorExchange"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,i.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,i.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,i.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},caption:"digitales (links) und reales (rechts) Farbmodell",options:{},isInline:!1,src:n(11711).Z,alt:"digitales (links) und reales (rechts) Farbmodell",mdxType:"Image"})))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=242355"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},11711:function(e,t,n){t.Z=n.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);