"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[47863],{90203:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),l=n(46670),i=n(21314);const s=(0,l.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",l="badge_oWqf",i="overlay_cqDg";var s=n(99603),c=n(59417);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&i)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(87462),r=n(67294),o=n(3024),l=n(95665),i=n.n(l),s=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),u=n(86010),p=n(46670),g=n(21314),h=n(72389);const b=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),y=(0,p.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(16606),n.e(91086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,h.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(b,e)}));var f=n(52616);const v="brythonGraphicsResult_Zcg1",E="brythonGraphicsResultHead_Te8f",w="spacer_VytD",N="slimStrippedButton__QpN";var A=n(61212);const C=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),k=(e,t)=>{"root"===e.type?e.children.forEach((e=>{k(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},B=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...B(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${C(n)}>`),o.forEach((e=>{t.push(...B(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${C(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${C(n)}>`),o.forEach((e=>{t.push(...B(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${C(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${C(n)}></circle>`);break;case"text":var l="";o.forEach((e=>{switch(e.type){case"text":l=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${C(n)}>${l}</text>`);break;case"polygon":var i="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${C(n)} transform="translate(${s}) rotate(${i})"></polygon>`)}return t},S=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var l=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${i}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(S).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,A.Q)(e);return t&&k(n,t),B(n).join("\n")})(`${i}${l}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),u=document.createElement("a");u.href=m,u.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(u),u.click(),document.body.removeChild(u)};var R=n(99603),Z=n(59417),D=n(61193),T=n.n(D);const I=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},G=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=(0,g.oR)("documentStore");return r.createElement(T(),{onStop:I,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:E},r.createElement("span",null,"Output"),r.createElement("span",{className:w}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),K=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(G,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.q7m}))))})})),L=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var P=n(93024),M=n(68949);const _=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,u.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(R.G,{icon:t.executing?P.Bmx:Z.zc,spin:t.executing}))})),H=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:l,noCompare:i,download:s}=e;const[c,d]=r.useState(!1),p=(0,g.oR)("documentStore").find(o);if(!p)return null;return r.useEffect((()=>{let e;const t=(0,M.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),r.createElement("div",{className:(0,u.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!p.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&r.createElement("span",{className:(0,u.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&r.createElement(R.G,{icon:Z.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(R.G,{icon:Z.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(R.G,{icon:Z.X7o})),s&&!p.showRaw&&r.createElement("button",{className:(0,u.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===l?".py":`.${l}`,r=n===l?p.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(R.G,{icon:Z.q7m})),p.hasEdits&&!i&&r.createElement("button",{className:(0,u.default)(m.Z.showRawButton,m.Z.headerButton,p.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,M.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?r.createElement(R.G,{icon:Z.w49}):r.createElement(R.G,{icon:Z.rxY}))),"python"===l&&r.createElement(_,{webKey:o}))}));var U=n(56771);const V=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(G,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),W=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,M.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,U.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(H,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,u.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(K,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(V,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(G,{webKey:e.webKey})),r.createElement(L,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),z=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,M.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var j=n(90203),F=n(34805),O=n(4817),Y=n.n(O),q=n(87410),Q=n(84538);const J=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:q.Z.highlight(e,q.Z.languages.python,"python")}})},X=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=(0,g.oR)("userStore"),a=t.find(e.webKey),[o,l]=r.useState(1),[i,s]=r.useState(!1);return r.useEffect((()=>(0,M.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(l(1),i&&t.find(e.webKey)?.loadVersions())}))),[]),a.versioned?r.createElement("div",{className:(0,u.default)(m.Z.codeHistory)},r.createElement("details",{open:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||a.loadVersions(),s(!i)},className:(0,u.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},a.versionsLoaded?`${a.versions.length} Versions`:"Load Versions"),r.createElement(R.G,{className:(0,u.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:Z.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),a.loadVersions()}})),r.createElement("div",{className:(0,u.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,u.default)(m.Z.versionControl)},r.createElement(Q.Z,{value:o,onChange:e=>{l(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,u.default)(m.Z.diffViewer)},a.versions.length>1&&r.createElement(Y(),{leftTitle:a.versions[o-1].version,rightTitle:r.createElement("div",null,a.versions[o].version,a.versions[o].pasted&&n.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:a.versions[o-1].data.code,newValue:a.versions[o].data.code,renderContent:J}))))):null})),$=(0,p.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,h.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,M.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,u.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(j.Z,null),r.createElement("div",{className:(0,u.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(z,{webKey:e.webKey}),r.createElement(W,e),r.createElement(X,{webKey:e.webKey}))):r.createElement(F.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){if(e.reference)return r.createElement(i(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let n=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===n&&(n="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),l=t.match(/\n###\s*PRE.*?\n/);let i="",s=t;l&&(i=t.slice(0,l.index||0),s=t.slice((l.index||0)+l[0].length));const d=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement($,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:d,readonly:!!e.readonly,lang:n,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:i,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||n}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function l(e){return a.createElement("div",{className:o.playgroundWrapper},a.createElement("div",{className:o.playgroundContainer},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},97944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o='import pgzrun\nimport random\n\nWIDTH = 800\nHEIGHT = 800\n\ngreen = 60, 180, 60\nball = Actor("ball_blau")\nball.radius = ball.width / 2\nball.score = 0\n\nloch = Actor("hole")\n\n\ndef kollision_rand(objekt):\n    if objekt.left < 0:\n        objekt.left = 0\n    if objekt.right >= WIDTH:\n        objekt.right = WIDTH - 1\n    if objekt.top < 0:\n        objekt.top = 0\n    if objekt.bottom >= HEIGHT:\n        objekt.bottom = HEIGHT - 1\n\n\ndef setze_ball():\n    ball.x = WIDTH / 2\n    ball.y = HEIGHT / 2\n\n\ndef setze_loch():\n    loch.x = random.randint(0, WIDTH)\n    loch.y = random.randint(0, HEIGHT)\n    dauer = random.randint(3, 7)\n    kollision_rand(loch)\n    clock.schedule_unique(setze_loch, dauer)\n\n\ndef on_mouse_move(pos):\n    d = ball.distance_to(pos)\n    if d < ball.radius:\n        stoss_laenge = ball.radius - d\n        ball.x = ball.x + (ball.x - pos[0]) * stoss_laenge\n        ball.y = ball.y + (ball.y - pos[1]) * stoss_laenge\n    kollision_rand(ball)\n\n\ndef update():\n    if ball.distance_to(loch) < 10:\n        ball.score = ball.score + 1\n        setze_ball()\n        setze_loch()\n\n\ndef draw():\n    screen.fill(green)\n    loch.draw()\n    ball.draw()\n    screen.draw.text("Score: " + str(ball.score), (10, 10), fontsize=60)\n\n\nsetze_ball()\nsetze_loch()\npgzrun.go()';var l=n(99882);const i={sidebar_custom_props:{id:"573133eb-bef6-4a55-b855-0d47f007aaf3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Push to Hole",c={unversionedId:"Programmieren-1/PyGameZero/A-examples/push-to-hole/index",id:"version-26e/Programmieren-1/PyGameZero/A-examples/push-to-hole/index",title:"Push to Hole",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/A-examples/4-push-to-hole/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/A-examples/4-push-to-hole",slug:"/Programmieren-1/PyGameZero/A-examples/push-to-hole/",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/push-to-hole/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"573133eb-bef6-4a55-b855-0d47f007aaf3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Tippspiel",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/typing/"},next:{title:"Asteroids",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/asteroids/"}},d={},m=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("Comment"),g=u("Figure"),h={toc:m},b="wrapper";function y(e){let{components:t,...i}=e;return(0,r.kt)(b,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"push-to-hole"},"Push to Hole"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beschreibung"},"Beschreibung"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Ball muss mit der Maus in ein Loch geschoben werden. Das Loch \xe4ndert alle paar Sekunden seine Position."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(2735).Z,width:"800",height:"824"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grafiken"},"Grafiken"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(14821).Z,width:"64",height:"64"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)(l.Z,{language:"python",mdxType:"CodeBlock"},o))}y.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},14821:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2735:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-push-to-hole-8803abf422bc75c522bb3876e3bc1c81.png"}}]);