"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7766],{90203:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294);const n="noLoginAlert_HRfh";var i=a(39960),l=a(46670),d=a(21314);const o=(0,l.Pi)((()=>(0,d.oR)("msalStore").loggedIn?null:r.createElement("div",{className:n},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))))},34805:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(86010);const i="loader_FEpR",l="badge_oWqf",d="overlay_cqDg";var o=a(99603),m=a(59417);const p=e=>r.createElement("div",{className:(0,n.default)(i,e.overlay&&d)},r.createElement(o.G,{icon:m.IJ7,spin:!0}),r.createElement("span",{className:(0,n.default)("badge",l)},e.caption||"Laden..."))},99882:(e,t,a)=>{a.d(t,{Z:()=>ie});var r=a(87462),n=a(67294),i=a(3024),l=a(95665),d=a.n(l),o=a(10412),m=a(46858);const p=function(e,t){void 0===t&&(t=0);let a=3735928559^t,r=1103547991^t;for(let n,i=0;i<e.length;i++)n=e.charCodeAt(i),a=Math.imul(a^n,2654435761),r=Math.imul(r^n,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(r>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var s=a(6645),c=a(86010),k=a(46670),g=a(21314),N=a(72389);const u=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return n.createElement("pre",null,n.createElement("code",null,t.data.code))})),b=(0,k.Pi)((e=>{const[t,r]=n.useState();return n.useEffect((()=>{Promise.all([a.e(88982),a.e(91086)]).then(a.bind(a,91086)).then((e=>{r(e)}))}),[]),(0,N.Z)()?t?n.createElement(t.default,e):n.createElement("div",null):n.createElement(u,e)}));var y=a(52616);const h="brythonGraphicsResult_Zcg1",f="brythonGraphicsResultHead_Te8f",C="spacer_VytD",v="slimStrippedButton__QpN";var w=a(61212);const E=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:a,tagName:r,type:n,children:i}=e;switch("root"===n&&i.forEach((e=>{t.push(...S(e))})),r){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${E(a)}>`),i.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":i.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<rect ${E(a)}></rect>`);break;case"g":if(0===(i||[]).length)return t;t.push(`<g ${E(a)}>`),i.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":i.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push(`<line ${E(a)}></line>`);break;case"circle":i.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${E(a)}></circle>`);break;case"text":var l="";i.forEach((e=>{switch(e.type){case"text":l=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<text ${E(a)}>${l}</text>`);break;case"polygon":var d="0,0,0",o="0,0";i.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(d=e.properties.to);break;case"animateMotion":"to"in e.properties&&(o=e.properties.to)}})),t.push(`<polygon ${E(a)} transform="translate(${o}) rotate(${d})"></polygon>`)}return t},Z=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,a,r)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=e.getBBox(),i={viewBox:`${n.x-5},${n.y-5},${n.width+10},${n.height+10}`,width:n.width+10,height:n.height+10};var l=e.outerHTML,d='<?xml version="1.0" standalone="no"?>';const o=document.createElement("div");let m=0;if(r||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),r=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(r.length>0){const e=r[r.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",`${i.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${i.width}`),e.setAttribute("to",`${i.width}`)})),t.setAttribute("viewBox",i.viewBox),t.setAttribute("height",`${i.height}`),t.setAttribute("width",`${i.width}`),o.innerHTML=`${d}\r\n${t.outerHTML}`,m=Array.from(t.querySelectorAll("animate")).map(Z).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,w.Q)(e);return t&&_(a,t),S(a).join("\n")})(`${d}${l}`,i);o.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=o.querySelector("svg"),t=document.createElement("metadata"),r=document.createElement("raw");r.innerHTML=a||"",t.appendChild(r),e.appendChild(t)}var p=new Blob([o.innerHTML],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(p),c=document.createElement("a");c.href=s,c.download=m>0?`${t}__${(Math.round(10*m)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(c),c.click(),document.body.removeChild(c)};var R=a(99603),T=a(59417),L=a(61193),B=a.n(L);const $=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},P=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=(0,g.oR)("documentStore");return n.createElement(B(),{onStop:$,positionOffset:{x:0,y:"-50%"}},n.createElement("div",{className:h},n.createElement("div",{className:f},n.createElement("span",null,"Output"),n.createElement("span",{className:C}),e.controls,n.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:v,onClick:()=>{a.setOpendTurtleModal(void 0),t.stopScript(document)}},n.createElement("span",{"aria-hidden":"true"},n.createElement(R.G,{icon:T.NBC})))),n.createElement("div",{id:y.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),K=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return n.createElement(P,{webKey:e.webKey,controls:n.createElement(n.Fragment,null,n.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(y.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},n.createElement("span",{"aria-hidden":"true"},n.createElement(R.G,{icon:T.Bxq}))),n.createElement("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(y.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},n.createElement("span",{"aria-hidden":"true"},n.createElement(R.G,{icon:T.q7m}))))})})),D=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const a=[];let r=1;const i=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&a.push(`${r}-${r+t}`),r+=t,e.output}));return n.createElement("div",{className:s.Z.brythonOut},n.createElement(ie,{metastring:`{${a.join(",")}}`},i.join("")))}));var G=a(93024),M=a(68949);const A=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return n.createElement("button",{onClick:()=>t.execScript(document),className:(0,c.default)(s.Z.playButton,s.Z.headerButton),title:"Code Ausf\xfchren"},n.createElement(R.G,{icon:t.executing?G.Bmx:T.zc,spin:t.executing}))})),I=(0,k.Pi)((e=>{let{slim:t,title:a,resettable:r,webKey:i,lang:l,noCompare:d,download:o}=e;const[m,p]=n.useState(!1),k=(0,g.oR)("documentStore").find(i);if(!k)return null;return n.useEffect((()=>{let e;const t=(0,M.U5)((()=>k.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(p(!0),e=setTimeout((()=>{p(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[k]),n.createElement("div",{className:(0,c.default)(s.Z.brythonCodeBlockHeader,s.Z.brythonCodeBlockHeader,s.Z.controls)},!t&&n.createElement(n.Fragment,null,n.createElement("div",{className:s.Z.title},a),!k.loaded&&n.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),k.saveService.isOffline&&n.createElement("span",{className:(0,c.default)("badge","badge--danger",s.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),n.createElement("div",{className:s.Z.spacer}),n.createElement("span",{style:{minWidth:"1em"}},"save"===k.saveService.state&&n.createElement(R.G,{icon:T.UO1,style:{color:"#3578e5"},spin:!0}),m&&n.createElement(R.G,{icon:T.f8k,style:{color:"var(--ifm-color-success)"}})),k.hasEdits&&!k.showRaw&&r&&n.createElement("button",{onClick:()=>{if(!r)return;if(k.readonly)return void k.setData({code:k.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&k.setData({code:k.rawScript})},className:s.Z.headerButton,title:"\xc4nderungen Verwerfen"},n.createElement(R.G,{icon:T.X7o})),o&&!k.showRaw&&n.createElement("button",{className:(0,c.default)(s.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([k.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const r="python"===l?".py":`.${l}`,n=a===l?k.webKey:a,i=n.endsWith(r)?n:`${n}${r}`;e.download=i,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},n.createElement(R.G,{icon:T.q7m})),k.hasEdits&&!d&&n.createElement("button",{className:(0,c.default)(s.Z.showRawButton,s.Z.headerButton,k.showRaw?s.Z.showRawButtonDisabled:void 0),onClick:(0,M.aD)((()=>k.showRaw=!k.showRaw)),title:k.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},k.showRaw?n.createElement(R.G,{icon:T.w49}):n.createElement(R.G,{icon:T.rxY}))),"python"===l&&n.createElement(A,{webKey:i}))}));var H=a(56771);const V=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return n.createElement(P,{webKey:e.webKey,controls:n.createElement("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var a=t.toDataURL("image/png");a=(a=a.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var r=document.createElement("a");r.href=a,r.download=`${e}.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}})(y.h5.canvasContainer(t.codeId))}},n.createElement("span",{"aria-hidden":"true"},n.createElement(R.G,{icon:T.q7m}))),main:n.createElement("canvas",{id:y.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),z=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=t.find(e.webKey);return n.useEffect((()=>(0,M.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,H.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[y.h5.scriptSource(a.codeId)]}))}))),[a]),n.createElement(n.Fragment,null,n.createElement(I,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),n.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&n.createElement("div",{className:(0,c.default)(s.Z.result)},t.opendGraphicsModalWebKey===a.webKey&&n.createElement(n.Fragment,null,a.hasTurtleOutput&&n.createElement(K,{webKey:e.webKey}),a.hasCanvasOutput&&n.createElement(V,{webKey:e.webKey}),!a.hasCanvasOutput&&!a.hasTurtleOutput&&n.createElement(P,{webKey:e.webKey})),n.createElement(D,{webKey:e.webKey}),n.createElement("div",{id:y.h5.outputDiv(a.codeId)})))})),O=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=n.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,M.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),r=((e,t)=>{const a=n.useRef(null);return n.useCallback((r=>{a.current&&t(a.current),a.current=r,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(y.jS,a)}),(e=>{e.removeEventListener(y.jS,a)}));return n.createElement("div",{id:y.h5.component(t.codeId),ref:r})}));var F=a(90203),U=a(34805),j=a(4817),W=a.n(j),q=a(87410),Y=a(84538);const X=e=>{if(e)return n.createElement("span",{dangerouslySetInnerHTML:{__html:q.Z.highlight(e,q.Z.languages.python,"python")}})},J=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=(0,g.oR)("userStore"),r=t.find(e.webKey),[i,l]=n.useState(1),[d,o]=n.useState(!1);return n.useEffect((()=>(0,M.U5)((()=>t.find(e.webKey)?.id),(a=>{a&&a>0&&(l(1),d&&t.find(e.webKey)?.loadVersions())}))),[]),r.versioned?n.createElement("div",{className:(0,c.default)(s.Z.codeHistory)},n.createElement("details",{open:d,onClick:e=>{e.preventDefault(),e.stopPropagation(),d||r.loadVersions(),o(!d)},className:(0,c.default)("alert alert--info",s.Z.historyDetails)},n.createElement("summary",null,n.createElement("span",{className:"badge badge--secondary"},r.versionsLoaded?`${r.versions.length} Versions`:"Load Versions"),n.createElement(R.G,{className:(0,c.default)(s.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===r.versionsLoaded,icon:T.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),r.loadVersions()}})),n.createElement("div",{className:(0,c.default)(s.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},n.createElement("div",{className:(0,c.default)(s.Z.versionControl)},n.createElement(Y.Z,{value:i,onChange:e=>{l(e)},min:1,max:r.versions.length-1,dots:r.versions.length<50}),n.createElement("span",{className:"badge badge--primary"},"V",i)),n.createElement("div",{className:(0,c.default)(s.Z.diffViewer)},r.versions.length>1&&n.createElement(W(),{leftTitle:r.versions[i-1].version,rightTitle:n.createElement("div",null,r.versions[i].version,r.versions[i].pasted&&a.current?.admin&&n.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:r.versions[i-1].data.code,newValue:r.versions[i].data.code,renderContent:X}))))):null})),Q=(0,k.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey),r=(0,N.Z)();return n.useEffect((()=>{a&&a.precode!==e.precode&&(0,M.z)((()=>{a.precode=e.precode}))}),[a]),r?a?n.createElement("div",{className:(0,c.default)(s.Z.wrapper,"notranslate")},!e.slim&&n.createElement(F.Z,null),n.createElement("div",{className:(0,c.default)(s.Z.playgroundContainer,e.slim?s.Z.containerSlim:s.Z.containerBig,"live_py")},"python"===e.lang&&n.createElement(O,{webKey:e.webKey}),n.createElement(z,e),!e.noHistory&&n.createElement(J,{webKey:e.webKey}))):n.createElement(U.Z,null):n.createElement("div",null,"SSR")}));var ee=a(25934),te=a(81570),ae=a(38985);const re={},ne=(e,t)=>{const a=function(){try{return(0,m.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();re[a]||(re[a]={});const r=p(t);re[a][r]||(re[a][r]=Object.keys(re[a]).length+1);return e?(0,m.Vx)(e):`${re[a][r]}`};function ie(e){if(e.reference)return n.createElement(d(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let a=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===a&&(a="python"),e.live_jsx)return n.createElement(te.Z,(0,r.Z)({scope:ae.Z},e));if(e.live_py&&o.Z.canUseDOM){if(!e.id&&!e.slim)return n.createElement(i.Z,e);const t=e.children.replace(/\s*\n$/,""),l=t.match(/\n###\s*PRE.*?\n/);let d="",o=t;l&&(d=t.slice(0,l.index||0),o=t.slice((l.index||0)+l[0].length));const p=ne(e.title,o),[s]=n.useState(e.id||(0,ee.Z)());return n.createElement(Q,(0,r.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:s,code:o,codeId:p,readonly:!!e.readonly,lang:a,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:d,showLineNumbers:!(e.slim&&!/\n/.test(o)),versioned:!!e.versioned,noHistory:!!e.noHistory,noCompare:!!e.noCompare,title:(0,m.Vj)(e.title)||a}))}return n.createElement(n.Fragment,null,n.createElement(i.Z,e))}},81570:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86390);const i={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function l(e){return r.createElement("div",{className:i.playgroundWrapper},r.createElement("div",{className:i.playgroundContainer},r.createElement(n.Z,e)))}},46858:(e,t,a)=>{a.d(t,{Vj:()=>r,Vx:()=>n,ly:()=>i});const r=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},n=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},71883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i='import pgzrun\n\ndef update():\n    if keyboard.a:\n        print("A wird gedr\xfcckt")\n    if keyboard.w:\n        print("W wird gedr\xfcckt")\n    if keyboard.s:\n        print("S wird gedr\xfcckt")\n    if keyboard.d:\n        print("D wird gedr\xfcckt")\n\npgzrun.go()\n';var l=a(99882);const d={sidebar_custom_props:{id:"74e85854-4d50-42eb-81a1-900e9c35fc04",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},o="Tastaturzustand",m={unversionedId:"Programmieren-1/PyGameZero/keyboard/state/index",id:"version-26P/Programmieren-1/PyGameZero/keyboard/state/index",title:"Tastaturzustand",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/4-keyboard/1-state/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/4-keyboard/1-state",slug:"/Programmieren-1/PyGameZero/keyboard/state/",permalink:"/26P/Programmieren-1/PyGameZero/keyboard/state/",draft:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"74e85854-4d50-42eb-81a1-900e9c35fc04",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26P/sidebar",previous:{title:"Tastatur",permalink:"/26P/Programmieren-1/PyGameZero/keyboard/"},next:{title:"Tastaturereignisse",permalink:"/26P/Programmieren-1/PyGameZero/keyboard/event/"}},p={},s=[{value:"Normale Tasten",id:"normale-tasten",level:2},{value:"Ziffernblock",id:"ziffernblock",level:2}],c=(k="Comment",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var k;const g={toc:s},N="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(N,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"tastaturzustand"},"Tastaturzustand"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("hr",null),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Das Objekt ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard")," repr\xe4sentiert die Tastatur. F\xfcr jede Taste gibt eine entsprechende Variable des ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard"),"-Objekts an, ob diese gerade gedr\xfcckt ist."),(0,n.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"normale-tasten"},"Normale Tasten"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("table",{parentName:"div"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Taste"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Taste"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Taste"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[A]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.a")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Y]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.y")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[0]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[B]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.b")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Z]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.z")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[1]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[C]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.c")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[\xe4]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.quote")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[2]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[D]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.d")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[\xf6]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.semicolon")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[3]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[E]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.e")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[\xfc]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.leftbracket")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[4]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[F]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f")),(0,n.kt)("td",{parentName:"tr",align:"right"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"[5]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[G]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.g")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[,]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.comma")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[6]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[H]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.h")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[.]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.period")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[7]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_7"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[I]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.i")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Space]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.space")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[8]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[J]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.j")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Tab]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.tab")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[9]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k_9"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[K]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.k")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Backspace]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.backspace")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F1]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[L]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.l")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Enter]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.return")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F2]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[M]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.m")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Esc]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.escape")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F3]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[N]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.n")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[CapsLock]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.capslock")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F4]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[O]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.o")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Linke ","[Shift]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.lshift")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F5]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[P]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.p")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rechte ","[Shift]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.rshift")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F6]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f6"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[Q]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.q")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Linke ","[Ctrl]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.lctrl")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F7]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f7"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[R]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.r")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rechte ","[Ctrl]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.rctrl")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F8]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[S]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.s")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Linke ","[Alt]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.lalt")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F9]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f9"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[T]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.t")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rechte ","[Alt Gr]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.ralt")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F10]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f10"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[U]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.u")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Up]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.up")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F11]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f11"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[V]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.v")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Left]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.left")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[F12]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.f12"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[W]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.w")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Down]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.down")),(0,n.kt)("td",{parentName:"tr",align:"right"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[X]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.x")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Right]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.right")),(0,n.kt)("td",{parentName:"tr",align:"right"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)(c,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"ziffernblock"},"Ziffernblock"),(0,n.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("table",{parentName:"div"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Taste"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Taste"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[0]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp0")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[9]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp9"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[1]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp1")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[.]"," / ","[Del]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_period"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[2]"," / ","[Down]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp2")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Enter]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_enter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[3]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp3")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[+]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_plus"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[4]"," / ","[Left]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp4")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[-]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_minus"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[5]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp5")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[*]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_multiply"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[6]"," / ","[Right]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp6")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[/]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp_divide"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[7]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp7")),(0,n.kt)("td",{parentName:"tr",align:"right"},"[Num]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.numlock"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"[8]"," / ","[Up]"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"keyboard.kp8")),(0,n.kt)("td",{parentName:"tr",align:"right"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)(c,{parentName:"div",type:"table",nr:1,mdxType:"Comment"})),(0,n.kt)(l.Z,{language:"python",mdxType:"CodeBlock"},i))}u.isMDXComponent=!0},6645:(e,t,a)=>{a.d(t,{Z:()=>r});const r={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);