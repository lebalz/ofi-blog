"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2523],{90203:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),i=n(46670),l=n(21314);const s=(0,i.Pi)((()=>(0,l.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",i="badge_oWqf",l="overlay_cqDg";var s=n(99603),c=n(59417);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&l)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(87462),r=n(67294),o=n(3024),i=n(95665),l=n.n(i),s=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),p=n(86010),u=n(46670),g=n(21314),h=n(72389);const y=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,u.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(8982),n.e(1086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,h.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(y,e)}));var f=n(52616);const v="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var k=n(61212);const C=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${C(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${C(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${C(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${C(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${C(n)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${C(n)}>${i}</text>`);break;case"polygon":var l="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(l=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${C(n)} transform="translate(${s}) rotate(${l})"></polygon>`)}return t},Z=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},x=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,l='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${l}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(Z).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,k.Q)(e);return t&&_(n,t),S(n).join("\n")})(`${l}${i}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var B=n(99603),R=n(59417),A=n(61193),$=n.n(A);const L=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},K=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=(0,g.oR)("documentStore");return r.createElement($(),{onStop:L,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:w},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),T=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&x(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.q7m}))))})})),P=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var M=n(93024),D=n(68949);const G=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(B.G,{icon:t.executing?M.Bmx:R.zc,spin:t.executing}))})),I=(0,u.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:i,noCompare:l,download:s}=e;const[c,d]=r.useState(!1),u=(0,g.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,D.U5)((()=>u.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(B.G,{icon:R.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(B.G,{icon:R.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(B.G,{icon:R.X7o})),s&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":`.${i}`,r=n===i?u.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(B.G,{icon:R.q7m})),u.hasEdits&&!l&&r.createElement("button",{className:(0,p.default)(m.Z.showRawButton,m.Z.headerButton,u.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,D.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(B.G,{icon:R.w49}):r.createElement(B.G,{icon:R.rxY}))),"python"===i&&r.createElement(G,{webKey:o}))}));var U=n(56771);const H=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),O=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,D.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,U.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(I,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(T,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(H,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(K,{webKey:e.webKey})),r.createElement(P,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),z=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,D.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var V=n(90203),j=n(34805),q=n(4817),W=n.n(q),F=n(87410),Y=n(84538);const X=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:F.Z.highlight(e,F.Z.languages.python,"python")}})},J=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=(0,g.oR)("userStore"),a=t.find(e.webKey),[o,i]=r.useState(1),[l,s]=r.useState(!1);return r.useEffect((()=>(0,D.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(i(1),l&&t.find(e.webKey)?.loadVersions())}))),[]),a.versioned?r.createElement("div",{className:(0,p.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||a.loadVersions(),s(!l)},className:(0,p.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},a.versionsLoaded?`${a.versions.length} Versions`:"Load Versions"),r.createElement(B.G,{className:(0,p.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:R.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),a.loadVersions()}})),r.createElement("div",{className:(0,p.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(m.Z.versionControl)},r.createElement(Y.Z,{value:o,onChange:e=>{i(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,p.default)(m.Z.diffViewer)},a.versions.length>1&&r.createElement(W(),{leftTitle:a.versions[o-1].version,rightTitle:r.createElement("div",null,a.versions[o].version,a.versions[o].pasted&&n.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:a.versions[o-1].data.code,newValue:a.versions[o].data.code,renderContent:X}))))):null})),Q=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,h.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,D.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,p.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(V.Z,null),r.createElement("div",{className:(0,p.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(z,{webKey:e.webKey}),r.createElement(O,e),r.createElement(J,{webKey:e.webKey}))):r.createElement(j.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){if(e.reference)return r.createElement(l(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let n=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===n&&(n="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),i=t.match(/\n###\s*PRE.*?\n/);let l="",s=t;i&&(l=t.slice(0,i.index||0),s=t.slice((i.index||0)+i[0].length));const d=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:d,readonly:!!e.readonly,lang:n,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:l,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||n}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function i(e){return a.createElement("div",{className:o.playgroundWrapper},a.createElement("div",{className:o.playgroundContainer},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},15447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o='import pgzrun\n\nnemo = Actor("fisch_rot_rechts")\n\ndef aendere_nemo():\n    nemo.image = "fisch_rot_links"\n\ndef update():\n    if keyboard.space:\n        clock.schedule(aendere_nemo, 1.5)\n\ndef draw():\n    screen.clear()\n    nemo.draw()\n\npgzrun.go()\n ';var i=n(99882);const l={sidebar_custom_props:{id:"90d2952c-ca8b-4617-8b4d-806c1a6dcb1f",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Aufrufe planen",c={unversionedId:"Programmieren-1/PyGameZero/clock/index",id:"version-26e/Programmieren-1/PyGameZero/clock/index",title:"Aufrufe planen",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/7-clock/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/7-clock",slug:"/Programmieren-1/PyGameZero/clock/",permalink:"/26e/Programmieren-1/PyGameZero/clock/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"90d2952c-ca8b-4617-8b4d-806c1a6dcb1f",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Zeichnen",permalink:"/26e/Programmieren-1/PyGameZero/draw/"},next:{title:"Musik und Soundeffekte",permalink:"/26e/Programmieren-1/PyGameZero/sound/"}},d={},m=[{value:"Beispiel",id:"beispiel",level:2}],p=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const g={toc:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"aufrufe-planen"},"Aufrufe planen"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um eine Aktion erst nach einer bestimmten Zeit auszul\xf6sen, k\xf6nnen mit dem ",(0,r.kt)("inlineCode",{parentName:"p"},"clock"),"-Objekt zuk\xfcnftige Aufrufe von Unterprogrammen geplant werden."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"clock.schedule_unique(u, s)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"plant den einmaligen Aufruf des Unterprogramms ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," Sekunden. Nachdem diese Zeit verstrichen ist, wird das Unterprogramm ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," aufgerufen. Alle anderen geplanten Aufrufe des gleichen Unterprogramms werden abgebrochen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"clock.schedule(u, s)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"plant den einmaligen Aufruf des Unterprogramms ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," Sekunden. Nachdem diese Zeit verstrichen ist, wird das Unterprogramm ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," aufgerufen. Andere geplante Aufrufe des gleichen Unterprogramms werden nicht beeinflusst."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"clock.schedule_interval(u, s)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"plant den regelm\xe4ssigen Aufruf des Unterprogramms ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," alle ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," Sekunden. Andere geplante Aufrufe des gleichen Unterprogramms werden nicht beeinflusst."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"clock.unschedule(u)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"bricht alle geplanten Aufrufe des Unterprogramms ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," ab."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beispiel"},"Beispiel"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im folgenden Beispiel \xe4ndert das Aussehen des Fisches 1.5 Sekunden, nachdem die ","[Space]","-Taste gedr\xfcckt wurde."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr die gew\xfcnschte Aktion wird das Unterprogramm ",(0,r.kt)("inlineCode",{parentName:"p"},"aendere_nemo")," definiert. Der Name des Unterprogramms kann frei gew\xe4hlt werden. Mit der Anweisung ",(0,r.kt)("inlineCode",{parentName:"p"},"clock.schedule()")," wird der Aufruf geplant. Dabei werden in Klammern das aufzurufende Unterprogramm und die Verz\xf6gerung in Sekunden angegeben:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)(i.Z,{language:"python",mdxType:"CodeBlock"},o))}y.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);