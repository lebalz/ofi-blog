"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[58369],{90203:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const r="noLoginAlert_HRfh";var o=a(39960),i=a(46670),s=a(21314);const l=(0,i.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),r=a(86010);const o="loader_FEpR",i="badge_oWqf",s="overlay_cqDg";var l=a(99603),d=a(59417);const m=e=>n.createElement("div",{className:(0,r.default)(o,e.overlay&&s)},n.createElement(l.G,{icon:d.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,a)=>{a.d(t,{Z:()=>oe});var n=a(87462),r=a(67294),o=a(3024),i=a(95665),s=a.n(i),l=a(10412),d=a(46858);const m=function(e,t){void 0===t&&(t=0);let a=3735928559^t,n=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),a=Math.imul(a^r,2654435761),n=Math.imul(n^r,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var c=a(6645),p=a(86010),u=a(46670),g=a(21314),y=a(72389);const h=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,u.Pi)((e=>{const[t,n]=r.useState();return r.useEffect((()=>{Promise.all([a.e(16606),a.e(91086)]).then(a.bind(a,91086)).then((e=>{n(e)}))}),[]),(0,y.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(h,e)}));var v=a(52616);const f="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var k=a(61212);const C=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),S=(e,t)=>{"root"===e.type?e.children.forEach((e=>{S(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},Z=e=>{const t=[],{properties:a,tagName:n,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...Z(e))})),n){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${C(a)}>`),o.forEach((e=>{t.push(...Z(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<rect ${C(a)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${C(a)}>`),o.forEach((e=>{t.push(...Z(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push(`<line ${C(a)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${C(a)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<text ${C(a)}>${i}</text>`);break;case"polygon":var s="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push(`<polygon ${C(a)} transform="translate(${l}) rotate(${s})"></polygon>`)}return t},_=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,a,n)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,s='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let d=0;if(n||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),n=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(n.length>0){const e=n[n.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),l.innerHTML=`${s}\r\n${t.outerHTML}`,d=Array.from(t.querySelectorAll("animate")).map(_).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,k.Q)(e);return t&&S(a,t),Z(a).join("\n")})(`${s}${i}`,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),n=document.createElement("raw");n.innerHTML=a||"",t.appendChild(n),e.appendChild(t)}var m=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),c=URL.createObjectURL(m),p=document.createElement("a");p.href=c,p.download=d>0?`${t}__${(Math.round(10*d)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var P=a(99603),T=a(59417),R=a(61193),B=a.n(R);const L=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},$=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=(0,g.oR)("documentStore");return r.createElement(B(),{onStop:L,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:f},r.createElement("div",{className:w},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{a.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(P.G,{icon:T.NBC})))),r.createElement("div",{id:v.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),A=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement($,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(v.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(P.G,{icon:T.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(v.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(P.G,{icon:T.q7m}))))})})),D=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const a=[];let n=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&a.push(`${n}-${n+t}`),n+=t,e.output}));return r.createElement("div",{className:c.Z.brythonOut},r.createElement(oe,{metastring:`{${a.join(",")}}`},o.join("")))}));var K=a(93024),M=a(68949);const z=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(c.Z.playButton,c.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(P.G,{icon:t.executing?K.Bmx:T.zc,spin:t.executing}))})),G=(0,u.Pi)((e=>{let{slim:t,title:a,resettable:n,webKey:o,lang:i,noCompare:s,download:l}=e;const[d,m]=r.useState(!1),u=(0,g.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,M.U5)((()=>u.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(m(!0),e=setTimeout((()=>{m(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(c.Z.brythonCodeBlockHeader,c.Z.brythonCodeBlockHeader,c.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:c.Z.title},a),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",c.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:c.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(P.G,{icon:T.UO1,style:{color:"#3578e5"},spin:!0}),d&&r.createElement(P.G,{icon:T.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&n&&r.createElement("button",{onClick:()=>{if(!n)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:c.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(P.G,{icon:T.X7o})),l&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(c.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const n="python"===i?".py":`.${i}`,r=a===i?u.webKey:a,o=r.endsWith(n)?r:`${r}${n}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(P.G,{icon:T.q7m})),u.hasEdits&&!s&&r.createElement("button",{className:(0,p.default)(c.Z.showRawButton,c.Z.headerButton,u.showRaw?c.Z.showRawButtonDisabled:void 0),onClick:(0,M.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(P.G,{icon:T.w49}):r.createElement(P.G,{icon:T.rxY}))),"python"===i&&r.createElement(z,{webKey:o}))}));var I=a(56771);const H=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement($,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var a=t.toDataURL("image/png");a=(a=a.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var n=document.createElement("a");n.href=a,n.download=`${e}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})(v.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(P.G,{icon:T.q7m}))),main:r.createElement("canvas",{id:v.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),V=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=t.find(e.webKey);return r.useEffect((()=>(0,M.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,I.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[v.h5.scriptSource(a.codeId)]}))}))),[a]),r.createElement(r.Fragment,null,r.createElement(G,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(c.Z.result)},t.opendGraphicsModalWebKey===a.webKey&&r.createElement(r.Fragment,null,a.hasTurtleOutput&&r.createElement(A,{webKey:e.webKey}),a.hasCanvasOutput&&r.createElement(H,{webKey:e.webKey}),!a.hasCanvasOutput&&!a.hasTurtleOutput&&r.createElement($,{webKey:e.webKey})),r.createElement(D,{webKey:e.webKey}),r.createElement("div",{id:v.h5.outputDiv(a.codeId)})))})),O=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=r.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,M.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),n=((e,t)=>{const a=r.useRef(null);return r.useCallback((n=>{a.current&&t(a.current),a.current=n,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(v.jS,a)}),(e=>{e.removeEventListener(v.jS,a)}));return r.createElement("div",{id:v.h5.component(t.codeId),ref:n})}));var F=a(90203),U=a(34805),W=a(4817),j=a.n(W),q=a(87410),Y=a(84538);const X=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:q.Z.highlight(e,q.Z.languages.python,"python")}})},J=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=(0,g.oR)("userStore"),n=t.find(e.webKey),[o,i]=r.useState(1),[s,l]=r.useState(!1);return r.useEffect((()=>(0,M.U5)((()=>t.find(e.webKey)?.id),(a=>{a&&a>0&&(i(1),s&&t.find(e.webKey)?.loadVersions())}))),[]),n.versioned?r.createElement("div",{className:(0,p.default)(c.Z.codeHistory)},r.createElement("details",{open:s,onClick:e=>{e.preventDefault(),e.stopPropagation(),s||n.loadVersions(),l(!s)},className:(0,p.default)("alert alert--info",c.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},n.versionsLoaded?`${n.versions.length} Versions`:"Load Versions"),r.createElement(P.G,{className:(0,p.default)(c.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===n.versionsLoaded,icon:T.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),n.loadVersions()}})),r.createElement("div",{className:(0,p.default)(c.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(c.Z.versionControl)},r.createElement(Y.Z,{value:o,onChange:e=>{i(e)},min:1,max:n.versions.length-1,dots:n.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,p.default)(c.Z.diffViewer)},n.versions.length>1&&r.createElement(j(),{leftTitle:n.versions[o-1].version,rightTitle:r.createElement("div",null,n.versions[o].version,n.versions[o].pasted&&a.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:n.versions[o-1].data.code,newValue:n.versions[o].data.code,renderContent:X}))))):null})),Q=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey),n=(0,y.Z)();return r.useEffect((()=>{a&&a.precode!==e.precode&&(0,M.z)((()=>{a.precode=e.precode}))}),[a]),n?a?r.createElement("div",{className:(0,p.default)(c.Z.wrapper,"notranslate")},!e.slim&&r.createElement(F.Z,null),r.createElement("div",{className:(0,p.default)(c.Z.playgroundContainer,e.slim?c.Z.containerSlim:c.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(O,{webKey:e.webKey}),r.createElement(V,e),r.createElement(J,{webKey:e.webKey}))):r.createElement(U.Z,null):r.createElement("div",null,"SSR")}));var ee=a(25934),te=a(81570),ae=a(38985);const ne={},re=(e,t)=>{const a=function(){try{return(0,d.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ne[a]||(ne[a]={});const n=m(t);ne[a][n]||(ne[a][n]=Object.keys(ne[a]).length+1);return e?(0,d.Vx)(e):`${ne[a][n]}`};function oe(e){if(e.reference)return r.createElement(s(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let a=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===a&&(a="python"),e.live_jsx)return r.createElement(te.Z,(0,n.Z)({scope:ae.Z},e));if(e.live_py&&l.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),i=t.match(/\n###\s*PRE.*?\n/);let s="",l=t;i&&(s=t.slice(0,i.index||0),l=t.slice((i.index||0)+i[0].length));const m=re(e.title,l),[c]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,n.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:c,code:l,codeId:m,readonly:!!e.readonly,lang:a,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:s,showLineNumbers:!(e.slim&&!/\n/.test(l)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,d.Vj)(e.title)||a}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function i(e){return n.createElement("div",{className:o.playgroundWrapper},n.createElement("div",{className:o.playgroundContainer},n.createElement(r.Z,e)))}},46858:(e,t,a)=>{a.d(t,{Vj:()=>n,Vx:()=>r,ly:()=>o});const n=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},45528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o='import pgzrun\n\nnemo = Actor("fisch_rot_rechts")\n\ndef update():\n    nemo.x = nemo.x + 1\n\n\ndef draw():\n    screen.clear()\n    nemo.draw()\n\npgzrun.go()\n';var i=a(99882);const s={sidebar_custom_props:{id:"346e757e-9778-4a58-b0d1-a5f186d9680e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},l="Animation",d={unversionedId:"Programmieren-1/PyGameZero/animation/index",id:"version-26P/Programmieren-1/PyGameZero/animation/index",title:"Animation",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/2-animation/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/2-animation",slug:"/Programmieren-1/PyGameZero/animation/",permalink:"/26P/Programmieren-1/PyGameZero/animation/",draft:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"346e757e-9778-4a58-b0d1-a5f186d9680e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26P/sidebar",previous:{title:"Fenster",permalink:"/26P/Programmieren-1/PyGameZero/window/"},next:{title:"Aktor",permalink:"/26P/Programmieren-1/PyGameZero/actor/"}},m={},c=[{value:"Start von Pygame Zero",id:"start-von-pygame-zero",level:2},{value:"Funktionsweise von Pygame Zero ohne Animation",id:"funktionsweise-von-pygame-zero-ohne-animation",level:2},{value:"Funktionsweise von Pygame Zero mit Animation",id:"funktionsweise-von-pygame-zero-mit-animation",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Comment"),g=p("Figure"),y={toc:c},h="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,n.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"animation"},"Animation"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def draw():\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wird von Pygame Zero aufgerufen. Hier wird gezeichnet."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def update():\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"wird von Pygame Zero aufgerufen. Hier wird der n\xe4chste Animationsschritt berechnet."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"start-von-pygame-zero"},"Start von Pygame Zero"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Pygame Zero-Modus des Mu Editors wird Pygame Zero automatisch gestartet, sobald das eigene Skript fertig abgearbeitet worden ist."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In einem anderen Editor muss Pygame Zero durch einen Befehl am Ende des eigenen Skripts gestartet werden. Dazu muss das Modul ",(0,r.kt)("inlineCode",{parentName:"p"},"pgzrun")," importiert werden:"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import pgzrun\n\n# Eigene Befehle ...\n\npgzrun.go()\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"funktionsweise-von-pygame-zero-ohne-animation"},"Funktionsweise von Pygame Zero ohne Animation"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Hauptprogramm von Pygame Zero wird erst gestartet, nachdem das ganze Skript abgearbeitet worden ist. Daf\xfcr sorgt der spezielle Modus des Mu-Editors."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Pygame Zero erstellt zun\xe4chst ein Fenster. Dazu werden die aktuellen Angaben in den Variablen ",(0,r.kt)("inlineCode",{parentName:"p"},"WIDTH")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"HEIGHT")," verwendet. Anschliessend ruft Pygame Zero das Unterprogramm ",(0,r.kt)("inlineCode",{parentName:"p"},"draw()")," auf, welches im eignen Skript definiert worden ist."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(16050).Z,width:"949",height:"349"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import pgzrun\n\nWEISS = (255, 255, 255)\nSCHWARZ = (0, 0, 0)\n\ndef draw():\n    screen.fill(WEISS)\n    screen.draw.text("Hallo Welt", top=10, left=10, color=SCHWARZ)\n\npgzrun.go()\n')),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"funktionsweise-von-pygame-zero-mit-animation"},"Funktionsweise von Pygame Zero mit Animation"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Falls im eigenen Skript ein Unterprogramm mit dem Namem ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," definiert wird, geht Pygame Zero davon aus, dass es sich um eine Animation handelt. Die Funktionsweise von Pygame Zero \xe4ndert sich entsprechend:"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Pygame Zero erstellt zun\xe4chst ein Fenster. Dazu werden die aktuellen Angaben in den Variablen ",(0,r.kt)("inlineCode",{parentName:"p"},"TITLE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WIDTH")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"HEIGHT")," verwendet."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Anschliessend startet Pygame Zero den sogenannten ",(0,r.kt)("em",{parentName:"p"},"Game Loop"),". Dabei wird erst das Unterprogramm ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," aufgerufen und anschliessend ",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),". Dies wird so lange wiederholt, bis das Programm abgebrochen wird."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(38710).Z,width:"856",height:"483"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{language:"python",mdxType:"CodeBlock"},o))}b.isMDXComponent=!0},6645:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},38710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flowchart-animation-ee0bc02c75277e9528ae6a41ad933a56.svg"},16050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flowchart-draw-77b324b66250089e29b672b03b579a89.svg"}}]);