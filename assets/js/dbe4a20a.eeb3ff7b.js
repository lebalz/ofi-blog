"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79763],{90203:(e,A,t)=>{t.d(A,{Z:()=>I});var g=t(67294);const a="noLoginAlert_HRfh";var n=t(39960),C=t(71217),r=t(21314);const I=(0,C.Pi)((()=>(0,r.oR)("msalStore").loggedIn?null:g.createElement("div",{className:a},g.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",g.createElement(n.Z,{to:"/login"},"Login"))))},34805:(e,A,t)=>{t.d(A,{Z:()=>i});var g=t(67294),a=t(86010);const n="loader_FEpR",C="badge_oWqf",r="overlay_cqDg";var I=t(92814),o=t(51436);const i=e=>g.createElement("div",{className:(0,a.default)(n,e.overlay&&r)},g.createElement(I.G,{icon:o.IJ7,spin:!0}),g.createElement("span",{className:(0,a.default)("badge",C)},e.caption||"Laden..."))},99882:(e,A,t)=>{t.d(A,{Z:()=>ne});var g=t(83117),a=t(67294),n=t(3024),C=t(95665),r=t.n(C),I=t(10412),o=t(46858);const i=function(e,A){void 0===A&&(A=0);let t=3735928559^A,g=1103547991^A;for(let a,n=0;n<e.length;n++)a=e.charCodeAt(n),t=Math.imul(t^a,2654435761),g=Math.imul(g^a,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(g^g>>>13,3266489909),g=Math.imul(g^g>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),(g>>>0).toString(16).padStart(8,"0")+(t>>>0).toString(16).padStart(8,"0")};var s=t(6645),l=t(86010),c=t(71217),d=t(21314),m=t(72389);const p=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey);return a.createElement("pre",null,a.createElement("code",null,A.data.code))})),u=(0,c.Pi)((e=>{const[A,g]=a.useState();return a.useEffect((()=>{Promise.all([t.e(16606),t.e(91086)]).then(t.bind(t,91086)).then((e=>{g(e)}))}),[]),(0,m.Z)()?A?a.createElement(A.default,e):a.createElement("div",null):a.createElement(p,e)}));var w=t(52616);const h="brythonGraphicsResult_Zcg1",b="brythonGraphicsResultHead_Te8f",y="spacer_VytD",B="slimStrippedButton__QpN";var v=t(61212);const E=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),G=(e,A)=>{"root"===e.type?e.children.forEach((e=>{G(e,A)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...A})},M=e=>{const A=[],{properties:t,tagName:g,type:a,children:n}=e;switch("root"===a&&n.forEach((e=>{A.push(...M(e))})),g){case"svg":e.metadata&&A.push(e.metadata),A.push(`<svg ${E(t)}>`),n.forEach((e=>{A.push(...M(e))})),A.push("</svg>");break;case"rect":n.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const A=e.properties;if(!("to"in A)||!("attributeName"in A))return;"display"===A.attributeName&&"CSS"===A.attributeType&&(t.style=t.style.replace(/display:\s*\b\w+\b;/g,`display: ${A.to};`)),t[A.attributeName]=A.to}})),A.push(`<rect ${E(t)}></rect>`);break;case"g":if(0===(n||[]).length)return A;A.push(`<g ${E(t)}>`),n.forEach((e=>{A.push(...M(e))})),A.push("</g>");break;case"line":n.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const A=e.properties;if(!("to"in A)||!("attributeName"in A))return;t[A.attributeName]=A.to}})),A.push(`<line ${E(t)}></line>`);break;case"circle":n.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const A=e.properties;if(!("to"in A)||!("attributeName"in A))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(t.style=t.style.replace(/display:\s*\b\w+\b;/g,`display: ${A.to}`))}})),t.style&&/\s*display:\s*none;\s*/.test(t.style)&&(t.style=t.style.replace(/\s*display:\s*none;\s*/g,"")),A.push(`<circle ${E(t)}></circle>`);break;case"text":var C="";n.forEach((e=>{switch(e.type){case"text":C=e.value;break;case"element":const A=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in A)||!("attributeName"in A))return;"display"===A.attributeName&&"CSS"===A.attributeType&&(t.style=t.style.replace(/display:\s*\b\w+\b;/g,`display: ${A.to};`)),t[A.attributeName]=A.to}})),A.push(`<text ${E(t)}>${C}</text>`);break;case"polygon":var r="0,0,0",I="0,0";n.forEach((e=>{const A=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in A)||!("attributeName"in A))return;"display"===A.attributeName&&"CSS"===A.attributeType&&(t.style=t.style.replace(/display:\s*\b\w+\b;/g,`display: ${A.to};`)),t[A.attributeName]=A.to;break;case"animateTransform":"rotate"===e.properties.type&&(r=e.properties.to);break;case"animateMotion":"to"in e.properties&&(I=e.properties.to)}})),A.push(`<polygon ${E(t)} transform="translate(${I}) rotate(${r})"></polygon>`)}return A},f=e=>{const A=e.getAttribute("dur");return/ms$/.test(A)?Number.parseFloat(A)/1e3||0:/s$/.test(A)&&Number.parseFloat(A)||0},D=(e,A,t,g)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const a=e.getBBox(),n={viewBox:`${a.x-5},${a.y-5},${a.width+10},${a.height+10}`,width:a.width+10,height:a.height+10};var C=e.outerHTML,r='<?xml version="1.0" standalone="no"?>';const I=document.createElement("div");let o=0;if(g||window.__KEEP_TURTLE_ANIMATIONS__){const A=e.cloneNode(!0),t=A.querySelectorAll("animate"),g=Array.from(t).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,A)=>e>A?1:-1));if(g.length>0){const e=g[g.length-1],t=A.getElementById("animation_frame0");if(t){const A=document.createElement("rect");A.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,t.parentElement.insertBefore(A,t),t.setAttribute("begin","looper_animation.end"),t.setAttribute("width",`${n.width}`)}}A.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${n.width}`),e.setAttribute("to",`${n.width}`)})),A.setAttribute("viewBox",n.viewBox),A.setAttribute("height",`${n.height}`),A.setAttribute("width",`${n.width}`),I.innerHTML=`${r}\r\n${A.outerHTML}`,o=Array.from(A.querySelectorAll("animate")).map(f).reduce(((e,A)=>e+A),0)}else{const e=((e,A)=>{const t=(0,v.Q)(e);return A&&G(t,A),M(t).join("\n")})(`${r}${C}`,n);I.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=I.querySelector("svg"),A=document.createElement("metadata"),g=document.createElement("raw");g.innerHTML=t||"",A.appendChild(g),e.appendChild(A)}var i=new Blob([I.innerHTML],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(i),l=document.createElement("a");l.href=s,l.download=o>0?`${A}__${(Math.round(10*o)/10).toString().replace(".","_")}s.svg`:`${A}.svg`,document.body.appendChild(l),l.click(),document.body.removeChild(l)};var Y=t(92814),N=t(51436),Z=t(61193),L=t.n(Z);const k=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var A=e.target;if(A){for(;"button"!==A.tagName.toLowerCase()&&(A=A.parentNode)&&A.tagName;)if("div"===A.tagName.toLowerCase()&&A.classList.contains("react-draggable")){A=null;break}A&&setTimeout((()=>A.click()),1)}}},x=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey),t=(0,d.oR)("documentStore");return a.createElement(L(),{onStop:k,positionOffset:{x:0,y:"-50%"}},a.createElement("div",{className:h},a.createElement("div",{className:b},a.createElement("span",null,"Output"),a.createElement("span",{className:y}),e.controls,a.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:B,onClick:()=>{t.setOpendTurtleModal(void 0),A.stopScript(document)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(Y.G,{icon:N.NBC})))),a.createElement("div",{id:w.h5.graphicsResult(A.codeId),className:"brython-graphics-result"},e.main)))})),S=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey);return a.createElement(x,{webKey:e.webKey,controls:a.createElement(a.Fragment,null,a.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:B,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(w.h5.turtleSvgContainer(A.codeId));e&&D(e,`${A.codeId}`,A.executedScriptSource,!0)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(Y.G,{icon:N.Bxq}))),a.createElement("button",{"aria-label":"Download SVG",type:"button",className:B,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(w.h5.turtleSvgContainer(A.codeId));e&&D(e,`${A.codeId}`,A.executedScriptSource)}},a.createElement("span",{"aria-hidden":"true"},a.createElement(Y.G,{icon:N.q7m}))))})})),R=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey);if(0===A.logMessages.length||/^\s*$/.test(A.logMessages.map((e=>e.output)).join("")))return null;const t=[];let g=1;const n=A.logMessages.map((e=>{const A=(e.output||"").split("\n").length-1;return"stderr"===e.type&&t.push(`${g}-${g+A}`),g+=A,e.output}));return a.createElement("div",{className:s.Z.brythonOut},a.createElement(ne,{metastring:`{${t.join(",")}}`},n.join("")))}));var T=t(51417),F=t(68949);const W=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey);return a.createElement("button",{onClick:()=>A.execScript(document),className:(0,l.default)(s.Z.playButton,s.Z.headerButton),title:"Code Ausf\xfchren"},a.createElement(Y.G,{icon:A.executing?T.Bmx:N.zc,spin:A.executing}))})),V=(0,c.Pi)((e=>{let{slim:A,title:t,resettable:g,webKey:n,lang:C,noCompare:r,download:I}=e;const[o,i]=a.useState(!1),c=(0,d.oR)("documentStore").find(n);if(!c)return null;return a.useEffect((()=>{let e;const A=(0,F.U5)((()=>c.saveService.state),((A,t)=>{"save"===t&&"done"===A&&(i(!0),e=setTimeout((()=>{i(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),A()}}),[c]),a.createElement("div",{className:(0,l.default)(s.Z.brythonCodeBlockHeader,s.Z.brythonCodeBlockHeader,s.Z.controls)},!A&&a.createElement(a.Fragment,null,a.createElement("div",{className:s.Z.title},t),!c.loaded&&a.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),c.saveService.isOffline&&a.createElement("span",{className:(0,l.default)("badge","badge--danger",s.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),a.createElement("div",{className:s.Z.spacer}),a.createElement("span",{style:{minWidth:"1em"}},"save"===c.saveService.state&&a.createElement(Y.G,{icon:N.UO1,style:{color:"#3578e5"},spin:!0}),o&&a.createElement(Y.G,{icon:N.f8k,style:{color:"var(--ifm-color-success)"}})),c.hasEdits&&!c.showRaw&&g&&a.createElement("button",{onClick:()=>{if(!g)return;if(c.readonly)return void c.setData({code:c.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&c.setData({code:c.rawScript})},className:s.Z.headerButton,title:"\xc4nderungen Verwerfen"},a.createElement(Y.G,{icon:N.X7o})),I&&!c.showRaw&&a.createElement("button",{className:(0,l.default)(s.Z.headerButton),onClick:()=>{const e=document.createElement("a"),A=new Blob([c.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(A);const g="python"===C?".py":`.${C}`,a=t===C?c.webKey:t,n=a.endsWith(g)?a:`${a}${g}`;e.download=n,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},a.createElement(Y.G,{icon:N.q7m})),c.hasEdits&&!r&&a.createElement("button",{className:(0,l.default)(s.Z.showRawButton,s.Z.headerButton,c.showRaw?s.Z.showRawButtonDisabled:void 0),onClick:(0,F.aD)((()=>c.showRaw=!c.showRaw)),title:c.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},c.showRaw?a.createElement(Y.G,{icon:N.w49}):a.createElement(Y.G,{icon:N.rxY}))),"python"===C&&a.createElement(W,{webKey:n}))}));var Q=t(56771);const j=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey);return a.createElement(x,{webKey:e.webKey,controls:a.createElement("button",{"aria-label":"Download SVG",type:"button",className:B,style:{zIndex:1e3},onClick:()=>{(e=>{const A=document.getElementById(e);if(A){var t=A.toDataURL("image/png");t=(t=t.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var g=document.createElement("a");g.href=t,g.download=`${e}.png`,document.body.appendChild(g),g.click(),document.body.removeChild(g)}})(w.h5.canvasContainer(A.codeId))}},a.createElement("span",{"aria-hidden":"true"},a.createElement(Y.G,{icon:N.q7m}))),main:a.createElement("canvas",{id:w.h5.canvasContainer(A.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),U=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore"),t=A.find(e.webKey);return a.useEffect((()=>(0,F.U5)((()=>t.execCounter),(A=>{"python"===e.lang&&A>0&&(t.clearLogMessages(),(0,Q.m)("script-exec",{type:t.isDummy?"read-only":"editable",webKey:t.webKey}),window.brython(1,{ids:[w.h5.scriptSource(t.codeId)]}))}))),[t]),a.createElement(a.Fragment,null,a.createElement(V,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),a.createElement(u,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&a.createElement("div",{className:(0,l.default)(s.Z.result)},A.opendGraphicsModalWebKey===t.webKey&&a.createElement(a.Fragment,null,t.hasTurtleOutput&&a.createElement(S,{webKey:e.webKey}),t.hasCanvasOutput&&a.createElement(j,{webKey:e.webKey}),!t.hasCanvasOutput&&!t.hasTurtleOutput&&a.createElement(x,{webKey:e.webKey})),a.createElement(R,{webKey:e.webKey}),a.createElement("div",{id:w.h5.outputDiv(t.codeId)})))})),z=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore").find(e.webKey),t=a.useCallback((e=>{if(e.detail){const t=e.detail;if("done"===t.type)return(0,F.z)((()=>A.executing=!1));A.addLogMessage(t)}}),[A]),g=((e,A)=>{const t=a.useRef(null);return a.useCallback((g=>{t.current&&A(t.current),t.current=g,t.current&&e(t.current)}),[e,A])})((e=>{e.addEventListener(w.jS,t)}),(e=>{e.removeEventListener(w.jS,t)}));return a.createElement("div",{id:w.h5.component(A.codeId),ref:g})}));var O=t(90203),_=t(34805),K=t(4817),P=t.n(K),H=t(87410),$=t(35926);const J=e=>{if(e)return a.createElement("span",{dangerouslySetInnerHTML:{__html:H.Z.highlight(e,H.Z.languages.python,"python")}})},X=(0,c.Pi)((e=>{var A;const t=(0,d.oR)("documentStore"),g=(0,d.oR)("userStore"),n=t.find(e.webKey),[C,r]=a.useState(1),[I,o]=a.useState(!1);return a.useEffect((()=>(0,F.U5)((()=>{var A;return null==(A=t.find(e.webKey))?void 0:A.id}),(A=>{var g;A&&A>0&&(r(1),I&&(null==(g=t.find(e.webKey))||g.loadVersions()))}))),[]),n.versioned?a.createElement("div",{className:(0,l.default)(s.Z.codeHistory)},a.createElement("details",{open:I,onClick:e=>{e.preventDefault(),e.stopPropagation(),I||n.loadVersions(),o(!I)},className:(0,l.default)("alert alert--info",s.Z.historyDetails)},a.createElement("summary",null,a.createElement("span",{className:"badge badge--secondary"},n.versionsLoaded?`${n.versions.length} Versions`:"Load Versions"),a.createElement(Y.G,{className:(0,l.default)(s.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===n.versionsLoaded,icon:N.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),n.loadVersions()}})),a.createElement("div",{className:(0,l.default)(s.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},a.createElement("div",{className:(0,l.default)(s.Z.versionControl)},a.createElement($.Z,{value:C,onChange:e=>{r(e)},min:1,max:n.versions.length-1,dots:n.versions.length<50}),a.createElement("span",{className:"badge badge--primary"},"V",C)),a.createElement("div",{className:(0,l.default)(s.Z.diffViewer)},n.versions.length>1&&a.createElement(P(),{leftTitle:n.versions[C-1].version,rightTitle:a.createElement("div",null,n.versions[C].version,n.versions[C].pasted&&(null==(A=g.current)?void 0:A.admin)&&a.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:n.versions[C-1].data.code,newValue:n.versions[C].data.code,renderContent:J}))))):null})),q=(0,c.Pi)((e=>{const A=(0,d.oR)("documentStore");(0,d.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const t=A.find(e.webKey),g=(0,m.Z)();return a.useEffect((()=>{t&&t.precode!==e.precode&&(0,F.z)((()=>{t.precode=e.precode}))}),[t]),g?t?a.createElement("div",{className:(0,l.default)(s.Z.wrapper,"notranslate")},!e.slim&&a.createElement(O.Z,null),a.createElement("div",{className:(0,l.default)(s.Z.playgroundContainer,e.slim?s.Z.containerSlim:s.Z.containerBig,"live_py")},"python"===e.lang&&a.createElement(z,{webKey:e.webKey}),a.createElement(U,e),a.createElement(X,{webKey:e.webKey}))):a.createElement(_.Z,null):a.createElement("div",null,"SSR")}));var ee=t(25934),Ae=t(81570),te=t(38985);const ge={},ae=(e,A)=>{const t=function(){try{return(0,o.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ge[t]||(ge[t]={});const g=i(A);ge[t][g]||(ge[t][g]=Object.keys(ge[t]).length+1);return e?(0,o.Vx)(e):`${ge[t][g]}`};function ne(e){var A,t;if(e.reference)return a.createElement(r(),e);const C=(e.className||"").match(/language-(?<lang>\w*)/);let i=(null==C||null==(A=C.groups)||null==(t=A.lang)?void 0:t.toLocaleLowerCase())??"";if("py"===i&&(i="python"),e.live_jsx)return a.createElement(Ae.Z,(0,g.Z)({scope:te.Z},e));if(e.live_py&&I.Z.canUseDOM){if(!e.id&&!e.slim)return a.createElement(n.Z,e);const A=e.children.replace(/\s*\n$/,""),t=A.match(/\n###\s*PRE.*?\n/);let C="",r=A;t&&(C=A.slice(0,t.index||0),r=A.slice((t.index||0)+t[0].length));const I=ae(e.title,r),[s]=a.useState(e.id||(0,ee.Z)());return a.createElement(q,(0,g.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:s,code:r,codeId:I,readonly:!!e.readonly,lang:i,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:C,showLineNumbers:!(e.slim&&!/\n/.test(r)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,o.Vj)(e.title)||i}))}return a.createElement(a.Fragment,null,a.createElement(n.Z,e))}},81570:(e,A,t)=>{t.d(A,{Z:()=>r});var g=t(67294),a=t(86390);const n="playgroundWrapper_ADS_",C="playgroundContainer_J_zN";function r(e){return g.createElement("div",{className:n},g.createElement("div",{className:C},g.createElement(a.Z,e)))}},46858:(e,A,t)=>{t.d(A,{Vj:()=>g,Vx:()=>a,ly:()=>n});const g=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},n=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},9135:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>C,metadata:()=>I,toc:()=>i});var g=t(83117),a=(t(67294),t(3905));var n=t(99882);const C={sidebar_custom_props:{id:"af21833c-ea74-44fc-a7f8-3a51ad52277e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},r="Parallax-Scrolling",I={unversionedId:"Programmieren-1/PyGameZero/howto/parallax/index",id:"version-26e/Programmieren-1/PyGameZero/howto/parallax/index",title:"Parallax-Scrolling",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/9-howto/3-parallax/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/9-howto/3-parallax",slug:"/Programmieren-1/PyGameZero/howto/parallax/",permalink:"/26e/Programmieren-1/PyGameZero/howto/parallax/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"af21833c-ea74-44fc-a7f8-3a51ad52277e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Jump & Run",permalink:"/26e/Programmieren-1/PyGameZero/howto/jump/"},next:{title:"Geschoss",permalink:"/26e/Programmieren-1/PyGameZero/howto/bullet/"}},o={},i=[{value:"Bilder",id:"bilder",level:2},{value:"Code",id:"code",level:2}],s=e=>function(A){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",A)},l=s("Comment"),c=s("Figure"),d={toc:i};function m(e){let{components:A,...C}=e;return(0,a.kt)("wrapper",(0,g.Z)({},d,C,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"parallax-scrolling"},"Parallax-Scrolling"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"bilder"},"Bilder"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(21738).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(58280).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(27033).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(57524).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(92574).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(96492).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:t(99e3).Z,width:"800",height:"450"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Bildquelle: ",(0,a.kt)("a",{parentName:"p",href:"https://opengameart.org/content/fairy-tale-2d-backgrounds"},"Craftpix.net, OpenGameArt"),", Lizenz: OGA"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"code"},"Code"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)(n.Z,{language:"python",mdxType:"CodeBlock"},'import pgzrun\n\nWIDTH = 800\nHEIGHT = 450\n\nebenen = []\n\nfor i in range(7):\n    name = "hintergrund" + str(i)\n    ebene = Actor(name)\n    ebene.geschwindigkeit = 0.2 * i\n    ebenen.append(ebene)\n\ndef update():\n    for ebene in ebenen:\n        ebene.x = ebene.x - ebene.geschwindigkeit\n        if ebene.right < 0:\n            ebene.x = ebene.x + ebene.width\n\ndef draw():\n    screen.clear()\n    for ebene in ebenen:\n        ebene.draw()\n        ebene.x = ebene.x + ebene.width\n        ebene.draw()\n        ebene.x = ebene.x - ebene.width\n\npgzrun.go()'))}m.isMDXComponent=!0},6645:(e,A,t)=>{t.d(A,{Z:()=>g});const g={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},21738:(e,A,t)=>{t.d(A,{Z:()=>g});const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAHCCAIAAACYATqfAAABdXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarVRZcsMgDP3nFD2CFizgOMQJM71Bj19JgGN7knTaVB6w/CRre9jh9vXZwoeJpBzikrIUEVCJJRaqqmToYvpFF+m6digLTEEovrsE9eEBHwwrdQ3piM871lOgOLLj5WiYOOVTIOo3tgSqYxyBylCQFX6QWUpOEO/PdSRoo0VJS5ScliBXIQJmurHoop6NgZELV91Rd+KsPuBI5Oy7BfJgmj1pRTAqYnudWCdV0AwT9wZ4TH6Heyoz6LAsVji3AtQN83kjg4/4JGNK8PJYQd4Fk8fMvCImvGLG29oNOsah0RFfVsCwL6+1a27t5h6xRtEDKuOEzeZx+OkxjTxsfoW7+t71y0BbLe8G+oeKWlttJGgftLGUnWsyWgg9EGN3UxZw2Y32udThHfHOM4Rn3sNZtppeSYYStug/V2K02x9q9QPcW7J+gJtWVLUdTPbhrPCOhD++ZwehhG++UBPaVIM0egAAD0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIgogICBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTkyMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEwODAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIgogICB4bXA6Q3JlYXRlRGF0ZT0iMjAxNy0xMi0wN1QwMToyNzoxMSswNTowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMTctMTItMDhUMDQ6MDA6NTMrMDU6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDE3LTEyLTA4VDA0OjAwOjUzKzA1OjAwIgogICB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmMzNDVhNDkzLTNlMWEtNzY0Zi04ZDYzLTUzZGVjZjdlMGRmOSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzllMjljNi03OGVlLTM5NGYtOWJkNC1lNTUwMzFjODcxOWQiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzQ1YTQ5My0zZTFhLTc2NGYtOGQ2My01M2RlY2Y3ZTBkZjkiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMzNDVhNDkzLTNlMWEtNzY0Zi04ZDYzLTUzZGVjZjdlMGRmOSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDE3LTEyLTA3VDAxOjI3OjExKzA1OjAwIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzOWUyOWM2LTc4ZWUtMzk0Zi05YmQ0LWU1NTAzMWM4NzE5ZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDE3LTEyLTA4VDA0OjAwOjUzKzA1OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PtDBl7sAAAADc0JJVAgICNvhT+AAAAajSURBVHja7dYxDQBACMDA54VjFxMMmCBhuZPQqZHVDwCAPV8CAACDBQBgsAAADBYAAAYLAMBgAQAYLAAADBYAgMECADBYAAAYLAAAgwUAYLAAAAwWAAAGCwDAYAEAGCwAAAwWAIDBAgAwWAAAGCwAAIMFAGCwAAAwWAAABgsAwGABABgsAAAMFgCAwQIAMFgAABgsAACDBQBgsAAAMFgAAAYLAMBgAQBgsAAADBYAgMECADBYAAAYLAAAgwUAYLAAADBYAAAGCwDAYAEAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAGCwAAAwWAAABgsAwGABAGCwAAAMFgCAwQIAwGABABgsAACDBQBgsAAAMFgAAAYLAMBgAQBgsAAADBYAgMECAMBgAQAYLAAAgwUAgMECADBYAAAGCwDAYAEAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAIDBAgAwWAAABgsAAIMFAGCwAAAMFgCAwQIAwGABABgsAACDBQCAwQIAMFgAAAYLAACDBQBgsAAADBYAAAYLAMBgAQAYLAAAgwUAgMECADBYAAAGCwAAgwUAYLAAAAwWAAAGCwDAYAEAGCwAAIMFAIDBAgAwWAAABgsAAIMFAGCwAAAMFgAABgsAwGABABgsAAAMFgCAwQIAMFgAAAYLAACDBQBgsAAADBYAAAYLAMBgAQAYLAAADBYAgMECADBYAAAYLAAAgwUAYLAAAAwWAAAGCwDAYAEAGCwAAAwWAIDBAgAwWAAAGCwAAIMFAGCwAAAwWAAABgsAwGABABgsAAAMFgCAwQIAMFgAABgsAACDBQBgsAAAMFgAAAYLAMBgAQAYLAAADBYAgMECADBYAAAYLAAAgwUAYLAAADBYAAAGCwDAYAEAYLAAAAwWAIDBAgAwWAAAGCwAAIMFAGCwAAAwWAAABgsAwGABAGCwAAAMFgCAwQIAwGABABgsAACDBQBgsAAAMFgAAAYLAMBgAQBgsAAADBYAgMECAMBgAQAYLAAAgwUAgMECADBYAAAGCwDAYAEAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAIDBAgAwWAAABgsAwGABAGCwAAAMFgCAwQIAwGABABgsAACDBQCAwQIAMFgAAAYLAACDBQBgsAAADBYAgMECAMBgAQAYLAAAgwUAgMECADBYAAAGCwAAgwUAYLAAAAwWAAAGCwDAYAEAGCwAAIMFAIDBAgAwWAAABgsAAIMFAGCwAAAMFgAABgsAwGABABgsAAAMFgCAwQIAMFgAAAYLAACDBQBgsAAADBYAAAYLAMBgAQAYLAAADBYAgMECADBYAAAGSwIAAIMFAGCwAAAMFgAABgsAwGABABgsAAAMFgCAwQIAMFgAABgsAACDBQBgsAAADBYAAAYLAMBgAQAYLAAADBYAgMECADBYAAAYLAAAgwUAYLAAADBYAAAGCwDAYAEAGCwAAAwWAIDBAgAwWAAAGCwAAIMFAGCwAAAwWAAABgsAwGABAGCwAAAMFgCAwQIAMFgAABgsAACDBQBgsAAAMFgAAAYLAMBgAQBgsAAADBYAgMECAMBgAQAYLAAAgwUAYLAAADBYAAAGCwDAYAEAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAGCwAAAwWAAABgsAwGABAGCwAAAMFgCAwQIAwGABABgsAACDBQCAwQIAMFgAAAYLAMBgAQBgsAAADBYAgMECAMBgAQAYLAAAgwUAgMECADBYAAAGCwAAgwUAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAIDBAgAwWAAABgsAAIMFAGCwAAAMFgAABgsAwGABABgsAACDBQCAwQIAMFgAAAYLAACDBQBgsAAADBYAAAYLAMBgAQAYLAAAgwUAgMECADBYAAAGCwAAgwUAYLAAAAwWAAAGCwDAYAEAGCwAAAwWAIDBAgAwWAAABgsAAIMFAGCwAAAMFgAABgsAwGABABgsAAAMFgCAwQIAMFgAABgsAACDBQBgsAAADBYAAAYLAMBgAQAYLAAADBYAgMECADBYAAAYLAAAgwUAYLAAADBYAAAGCwDAYAEAGCwAAAwWAIDBAgAwWAAAGCwAAIMFAGCwAAAwWAAABgsAwGABABgsAAAMFgCAwQIAMFgAABgsAACDBQBgsAAAMFgAAAYLAMBgAQBgsAAADBYAgMECADBYAAAYLAAAgwUAYLAAADBYAAAGCwDAYAEAYLAAAAwWAIDBAgDAYAEAGCwAAIMFAGCwAAAwWAAABgsAwGABAGCwAAAuDYUxBeV5j+91AAAAAElFTkSuQmCC"},58280:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund1-0ad63bb6b6a085c5133a6f4bcd7d8dad.png"},27033:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund2-9e59782867ba981745efa0dd240c1068.png"},57524:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund3-66aca53c29a70179494710f0eed46f8e.png"},92574:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund4-c531016a982802dc75a0682de20040b1.png"},96492:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund5-ad37a791fe6d23fe83c92f21c1e47f44.png"},99e3:(e,A,t)=>{t.d(A,{Z:()=>g});const g=t.p+"assets/images/hintergrund6-56644c2a5fa25f53624b55d0c9fd6722.png"}}]);