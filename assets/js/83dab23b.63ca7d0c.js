"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8708],{90203:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),i=n(46670),l=n(21314);const s=(0,i.Pi)((()=>(0,l.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",i="badge_oWqf",l="overlay_cqDg";var s=n(99603),c=n(59417);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&l)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(87462),r=n(67294),o=n(3024),i=n(95665),l=n.n(i),s=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),u=n(86010),p=n(46670),h=n(21314),y=n(72389);const g=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,p.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(8982),n.e(1086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,y.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(g,e)}));var f=n(52616);const w="brythonGraphicsResult_Zcg1",v="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var _=n(61212);const C=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),S=(e,t)=>{"root"===e.type?e.children.forEach((e=>{S(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},Z=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...Z(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${C(n)}>`),o.forEach((e=>{t.push(...Z(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${C(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${C(n)}>`),o.forEach((e=>{t.push(...Z(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${C(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${C(n)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${C(n)}>${i}</text>`);break;case"polygon":var l="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(l=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${C(n)} transform="translate(${s}) rotate(${l})"></polygon>`)}return t},k=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,l='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${l}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(k).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,_.Q)(e);return t&&S(n,t),Z(n).join("\n")})(`${l}${i}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),u=document.createElement("a");u.href=m,u.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(u),u.click(),document.body.removeChild(u)};var R=n(99603),B=n(59417),$=n(61193),P=n.n($);const L=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},K=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=(0,h.oR)("documentStore");return r.createElement(P(),{onStop:L,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:w},r.createElement("div",{className:v},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:B.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),T=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:B.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:B.q7m}))))})})),G=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var D=n(93024),M=n(68949);const I=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,u.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(R.G,{icon:t.executing?D.Bmx:B.zc,spin:t.executing}))})),A=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:i,noCompare:l,download:s}=e;const[c,d]=r.useState(!1),p=(0,h.oR)("documentStore").find(o);if(!p)return null;return r.useEffect((()=>{let e;const t=(0,M.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),r.createElement("div",{className:(0,u.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!p.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&r.createElement("span",{className:(0,u.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&r.createElement(R.G,{icon:B.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(R.G,{icon:B.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(R.G,{icon:B.X7o})),s&&!p.showRaw&&r.createElement("button",{className:(0,u.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":`.${i}`,r=n===i?p.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(R.G,{icon:B.q7m})),p.hasEdits&&!l&&r.createElement("button",{className:(0,u.default)(m.Z.showRawButton,m.Z.headerButton,p.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,M.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?r.createElement(R.G,{icon:B.w49}):r.createElement(R.G,{icon:B.rxY}))),"python"===i&&r.createElement(I,{webKey:o}))}));var H=n(56771);const O=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:B.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),V=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,M.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,H.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(A,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,u.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(T,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(O,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(K,{webKey:e.webKey})),r.createElement(G,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),j=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,M.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var z=n(90203),U=n(34805),W=n(4817),q=n.n(W),F=n(87410),J=n(84538);const Y=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:F.Z.highlight(e,F.Z.languages.python,"python")}})},X=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore"),n=(0,h.oR)("userStore"),a=t.find(e.webKey),[o,i]=r.useState(1),[l,s]=r.useState(!1);return r.useEffect((()=>(0,M.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(i(1),l&&t.find(e.webKey)?.loadVersions())}))),[]),a.versioned?r.createElement("div",{className:(0,u.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||a.loadVersions(),s(!l)},className:(0,u.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},a.versionsLoaded?`${a.versions.length} Versions`:"Load Versions"),r.createElement(R.G,{className:(0,u.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:B.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),a.loadVersions()}})),r.createElement("div",{className:(0,u.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,u.default)(m.Z.versionControl)},r.createElement(J.Z,{value:o,onChange:e=>{i(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,u.default)(m.Z.diffViewer)},a.versions.length>1&&r.createElement(q(),{leftTitle:a.versions[o-1].version,rightTitle:r.createElement("div",null,a.versions[o].version,a.versions[o].pasted&&n.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:a.versions[o-1].data.code,newValue:a.versions[o].data.code,renderContent:Y}))))):null})),Q=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore");(0,h.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,y.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,M.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,u.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(z.Z,null),r.createElement("div",{className:(0,u.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(j,{webKey:e.webKey}),r.createElement(V,e),r.createElement(X,{webKey:e.webKey}))):r.createElement(U.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){if(e.reference)return r.createElement(l(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let n=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===n&&(n="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),i=t.match(/\n###\s*PRE.*?\n/);let l="",s=t;i&&(l=t.slice(0,i.index||0),s=t.slice((i.index||0)+i[0].length));const d=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:d,readonly:!!e.readonly,lang:n,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:l,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||n}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function i(e){return a.createElement("div",{className:o.playgroundWrapper},a.createElement("div",{className:o.playgroundContainer},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},47447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o='import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\n\nalien = Actor("alien")\nalien.x = WIDTH / 2\nalien.vy = 0\nschwerkraft = 0.1\nboden = 550\nsprung = -5\n\nhintergrundfarbe = 0, 0, 0\n\ndef update():\n    alien.vy = alien.vy + schwerkraft\n    alien.y = alien.y + alien.vy\n    if alien.bottom > boden:\n        alien.vy = 0\n        alien.bottom = boden\n    if keyboard.space and alien.vy == 0:\n        alien.vy = sprung\n\n\ndef draw():\n    screen.fill(hintergrundfarbe)\n    alien.draw()\n\npgzrun.go()\n';var i=n(99882);const l={sidebar_custom_props:{id:"ad3056ce-cda7-4b36-8c15-66838e0524b8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Jump & Run",c={unversionedId:"Programmieren-1/PyGameZero/howto/jump/index",id:"version-26P/Programmieren-1/PyGameZero/howto/jump/index",title:"Jump & Run",description:"",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/9-howto/2-jump/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/9-howto/2-jump",slug:"/Programmieren-1/PyGameZero/howto/jump/",permalink:"/26P/Programmieren-1/PyGameZero/howto/jump/",draft:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"ad3056ce-cda7-4b36-8c15-66838e0524b8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26P/sidebar",previous:{title:"Tastatursteuerung",permalink:"/26P/Programmieren-1/PyGameZero/howto/keyboard-control/"},next:{title:"Parallax-Scrolling",permalink:"/26P/Programmieren-1/PyGameZero/howto/parallax/"}},d={},m=[],u=(p="Comment",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const h={toc:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"jump--run"},"Jump & Run"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)(i.Z,{language:"python",mdxType:"CodeBlock"},o))}g.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);