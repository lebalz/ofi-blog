"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8354],{90203:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),l=n(46670),i=n(21314);const s=(0,l.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",l="badge_oWqf",i="overlay_cqDg";var s=n(99603),c=n(59417);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(87462),r=n(67294),o=n(3024),l=n(95665),i=n.n(l),s=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),p=n(86010),u=n(46670),g=n(21314),b=n(72389);const h=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),y=(0,u.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(8982),n.e(1086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,b.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(h,e)}));var f=n(52616);const v="brythonGraphicsResult_Zcg1",E="brythonGraphicsResultHead_Te8f",w="spacer_VytD",N="slimStrippedButton__QpN";var k=n(61212);const _=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),A=(e,t)=>{"root"===e.type?e.children.forEach((e=>{A(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${_(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${_(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${_(n)}></circle>`);break;case"text":var l="";o.forEach((e=>{switch(e.type){case"text":l=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${_(n)}>${l}</text>`);break;case"polygon":var i="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${_(n)} transform="translate(${s}) rotate(${i})"></polygon>`)}return t},C=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var l=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${i}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(C).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,k.Q)(e);return t&&A(n,t),S(n).join("\n")})(`${i}${l}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var T=n(99603),Z=n(59417),B=n(61193),R=n.n(B);const G=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},H=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=(0,g.oR)("documentStore");return r.createElement(R(),{onStop:G,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:E},r.createElement("span",null,"Output"),r.createElement("span",{className:w}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:Z.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),P=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(H,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:Z.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:Z.q7m}))))})})),L=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var I=n(93024),K=n(68949);const D=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(T.G,{icon:t.executing?I.Bmx:Z.zc,spin:t.executing}))})),O=(0,u.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:l,noCompare:i,download:s}=e;const[c,d]=r.useState(!1),u=(0,g.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,K.U5)((()=>u.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(T.G,{icon:Z.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(T.G,{icon:Z.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(T.G,{icon:Z.X7o})),s&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===l?".py":`.${l}`,r=n===l?u.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(T.G,{icon:Z.q7m})),u.hasEdits&&!i&&r.createElement("button",{className:(0,p.default)(m.Z.showRawButton,m.Z.headerButton,u.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,K.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(T.G,{icon:Z.w49}):r.createElement(T.G,{icon:Z.rxY}))),"python"===l&&r.createElement(D,{webKey:o}))}));var V=n(56771);const M=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(H,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:Z.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),$=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,K.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,V.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(O,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(P,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(M,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(H,{webKey:e.webKey})),r.createElement(L,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),z=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,K.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var W=n(90203),U=n(34805),q=n(4817),Y=n.n(q),j=n(87410),F=n(84538);const J=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:j.Z.highlight(e,j.Z.languages.python,"python")}})},Q=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=(0,g.oR)("userStore"),a=t.find(e.webKey),[o,l]=r.useState(1),[i,s]=r.useState(!1);return r.useEffect((()=>(0,K.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(l(1),i&&t.find(e.webKey)?.loadVersions())}))),[]),a.versioned?r.createElement("div",{className:(0,p.default)(m.Z.codeHistory)},r.createElement("details",{open:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||a.loadVersions(),s(!i)},className:(0,p.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},a.versionsLoaded?`${a.versions.length} Versions`:"Load Versions"),r.createElement(T.G,{className:(0,p.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:Z.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),a.loadVersions()}})),r.createElement("div",{className:(0,p.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(m.Z.versionControl)},r.createElement(F.Z,{value:o,onChange:e=>{l(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,p.default)(m.Z.diffViewer)},a.versions.length>1&&r.createElement(Y(),{leftTitle:a.versions[o-1].version,rightTitle:r.createElement("div",null,a.versions[o].version,a.versions[o].pasted&&n.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:a.versions[o-1].data.code,newValue:a.versions[o].data.code,renderContent:J}))))):null})),X=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,b.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,K.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,p.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(W.Z,null),r.createElement("div",{className:(0,p.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(z,{webKey:e.webKey}),r.createElement($,e),r.createElement(Q,{webKey:e.webKey}))):r.createElement(U.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){if(e.reference)return r.createElement(i(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let n=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===n&&(n="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),l=t.match(/\n###\s*PRE.*?\n/);let i="",s=t;l&&(i=t.slice(0,l.index||0),s=t.slice((l.index||0)+l[0].length));const d=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(X,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:d,readonly:!!e.readonly,lang:n,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:i,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||n}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function l(e){return a.createElement("div",{className:o.playgroundWrapper},a.createElement("div",{className:o.playgroundContainer},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},90700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o='import pgzrun\n\nTITLE = "Pong"\nWIDTH = 1200\nHEIGHT = 800\n\nPLAYER_SPEED = 5\n\nspieler_links = Actor("schlaeger_blau")\nspieler_links.score = 0\nspieler_links.y = HEIGHT / 2\nspieler_links.left = 5\n\nspieler_rechts = Actor("schlaeger_rot")\nspieler_rechts.score = 0\nspieler_rechts.y = HEIGHT / 2\nspieler_rechts.right = WIDTH - 6\n\nball = Actor("ball_blau_klein")\nball.x = WIDTH / 2\nball.y = HEIGHT / 2\nball.vx = 5\nball.vy = 3\n\n\ndef bewege_spieler(spieler, up_key, down_key):\n    if up_key:\n        spieler.y = spieler.y - PLAYER_SPEED\n    if down_key:\n        spieler.y = spieler.y + PLAYER_SPEED\n    if spieler.bottom >= HEIGHT:\n        spieler.bottom = HEIGHT - 1\n    if spieler.top < 0:\n        spieler.top = 0\n\n\ndef bewege_ball():\n    # Ball bewegen\n    ball.x = ball.x + ball.vx\n    ball.y = ball.y + ball.vy\n    if ball.top < 0:\n        ball.top = 0\n        ball.vy = -ball.vy\n    if ball.bottom >= HEIGHT - 1:\n        ball.bottom = HEIGHT - 1\n        ball.vy = -ball.vy\n\n    # Abprallen am rechten Schl\xe4ger\n    if ball.right > spieler_rechts.left and ball.bottom > spieler_rechts.top and ball.top < spieler_rechts.bottom:\n        ball.right = spieler_rechts.left\n        ball.vx = -ball.vx\n\n    # Abprallen am linken Schl\xe4ger\n    if ball.left < spieler_links.right and ball.bottom > spieler_links.top and ball.top < spieler_links.bottom:\n        ball.left = spieler_links.right\n        ball.vx = -ball.vx\n\n    # Punkt f\xfcr linken Spieler\n    if ball.right >= WIDTH:\n        spieler_links.score = spieler_links.score + 1\n        ball.x = WIDTH / 2\n        ball.y = HEIGHT / 2\n\n    # Punkt f\xfcr rechten Spieler\n    if ball.left < 0:\n        spieler_rechts.score = spieler_rechts.score + 1\n        ball.x = WIDTH / 2\n        ball.y = HEIGHT / 2\n\n\ndef update():\n    # linken Schl\xe4ger bewegen\n    bewege_spieler(spieler_links, keyboard.q, keyboard.a)\n    # rechten Schl\xe4ger bewegen\n    bewege_spieler(spieler_rechts, keyboard.o, keyboard.l)\n    bewege_ball()\n\n\ndef zeichne_punktestand():\n    screen.draw.text(str(spieler_links.score), centerx=WIDTH / 2 - 80, top=20, fontsize=100)\n    screen.draw.text(str(spieler_rechts.score), centerx=WIDTH / 2 + 80, top=20, fontsize=100)\n\n\ndef draw():\n    screen.clear()\n    spieler_links.draw()\n    spieler_rechts.draw()\n    ball.draw()\n    zeichne_punktestand()\n\npgzrun.go()\n';var l=n(99882);const i={sidebar_custom_props:{id:"4d253253-5a6d-4d3d-ab4c-cc93edee9b66",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Pong",c={unversionedId:"Programmieren-1/PyGameZero/A-examples/pong/index",id:"version-26e/Programmieren-1/PyGameZero/A-examples/pong/index",title:"Pong",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/A-examples/1-pong/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/A-examples/1-pong",slug:"/Programmieren-1/PyGameZero/A-examples/pong/",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/pong/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"4d253253-5a6d-4d3d-ab4c-cc93edee9b66",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Beispiele",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/"},next:{title:"Zeichenprogramm",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/paint/"}},d={},m=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Comment"),g=p("Figure"),b={toc:m},h="wrapper";function y(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"pong"},"Pong"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beschreibung"},"Beschreibung"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Klassisches Pong-Spiel"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(65938).Z,width:"800",height:"549"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grafiken"},"Grafiken"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(69182).Z,width:"24",height:"24"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)(l.Z,{language:"python",mdxType:"CodeBlock"},o))}y.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},69182:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAIDQAACA0B3qlk6AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPtSURBVEiJnZbbb1RVFMZ/a58zZzodEJHp9EpbJg0QNZiQgKDBJphAfIFIKxgjmhDffTOG4JPR+Af4rL5oDLdEYoKYqAkXCYiJ+sJAsVN6oWlnsC10ZjrnspcPMzQttNPq93TOWnt9a+9vr73XFuqg/Wx+s1gOYtgvyiagueaaUCGHyo+ucm6oP5VdjkOWMnacnOwRRz4Gjiw3ZgEU4ZRaPTHanx5YMcHGM5NHQL4EEgAbk+bW7pQ33pYwsaRLHKBspTJWjIJfC37rSNFuqYWWEY6NHGr6dtkEnacLH6rop4B0Jk323UzCb3BkW73plyL946s7c2vGylEPoKJyfLg/9dkTCTpOT/SJmFOA7G3xLr/a4r0IxOqrMw//wrj/28UJ/2VAFd4e7Wv6Zj5BTfO/gMS+1vil3ubYnpUYXdGRdZ4ZtGp4EETPRcqG82NzVy/nw5eAska6bfRw+o4BqG1oorPRvd3bHNu1EnmDI9m2pLshGTO9az1625OOuiKTr7U3bG9JmEEgIa58AmDaz+Y3A4cBjma88mpkeabBTAGNC0xN6xPcBBqOZRLTAChvdJ8ubDViOQiYjUlzq9E1L6xEDiBSraaFcNQYgGRMtnck3AFAQuGAwbAfYGfKG1sNOUDJt8XHTHbG16ce/exMO6PVmeg+V5QMgFoiYAZYt1KCKV/3KPbiWs+0YjWcCpgpR3YXgCBTqhJV+el2gTSA62h6pBSOdSbdoiptKyWZ9vWVaT9aZFNlZLgUFGOGppqpxTxyGsQUQ569/SD0KlavAIuj6yOcC/XSndlwbSliq1Gq1QnWBSaATCXUUswTIiWVm41ScSN3N8RNbo1rUkY0w+KqAShaJTcbaqFQsT2+1fmzM2e1CKAw4SoMCWTygS2v8Zz56IrVrnvlqAsiRIhcYdIgRQCLJgNLCnh+qeXkK3auJlrOBbkAujc7HbVtSjpLjUcVJ1DSoKvSKzsTdlQD5QfjKucALVTs5rLVG6tiqINiqNfuV7QHsGr1nBnqT2URTgH8cs9/Gij9b3Zl9udxv7n6ydfzd5FaPQGU7/vac+N+8Cer1WIxoisF/+Z0oN0CD2O4HwHVchrtTw8I+g6gN2ei3dcLwbX/shJVKV6d9H8ffGh3AFZFjub61t+FOg1nfVz+3tvq/dNoZEc98lKo138a99PTgXYDVlXeH+1Pff7I/2TLPJt/E+ULai0zFTcDW9Y5Y2nPJOJO9SxUIkqTvi1nZ8KO2oYi8BDhreFDTd8v5FuyoW86M9UVEB4XeI+ajHVgQc44Jvhg6PXWoceddV8MbSfzW4zhQO3Z0gW01lzjoDlEzova74b7mgeX4/gXRaOyyOFyOtQAAAAASUVORK5CYII="},65938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-pong-7bcb971731ec6029df2545f4b472250e.png"}}]);