"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[96538],{90203:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),i=n(71217),l=n(21314);const s=(0,i.Pi)((()=>(0,l.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",i="badge_oWqf",l="overlay_cqDg";var s=n(92814),c=n(51436);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&l)},a.createElement(s.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(83117),r=n(67294),o=n(3024),i=n(95665),l=n.n(i),s=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),u=n(86010),p=n(71217),h=n(21314),g=n(72389);const b=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),y=(0,p.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(16606),n.e(91086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,g.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(b,e)}));var f=n(52616);const v="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var k=n(61212);const _=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),C=(e,t)=>{"root"===e.type?e.children.forEach((e=>{C(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${_(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${_(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${_(n)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${_(n)}>${i}</text>`);break;case"polygon":var l="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(l=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${_(n)} transform="translate(${s}) rotate(${l})"></polygon>`)}return t},x=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},B=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,l='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${l}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(x).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,k.Q)(e);return t&&C(n,t),S(n).join("\n")})(`${l}${i}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),u=document.createElement("a");u.href=m,u.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(u),u.click(),document.body.removeChild(u)};var R=n(92814),Z=n(51436),T=n(61193),$=n.n(T);const L=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},K=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=(0,h.oR)("documentStore");return r.createElement($(),{onStop:L,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:w},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),H=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&B(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&B(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.q7m}))))})})),D=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var I=n(51417),M=n(68949);const A=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,u.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(R.G,{icon:t.executing?I.Bmx:Z.zc,spin:t.executing}))})),G=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:i,noCompare:l,download:s}=e;const[c,d]=r.useState(!1),p=(0,h.oR)("documentStore").find(o);if(!p)return null;return r.useEffect((()=>{let e;const t=(0,M.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),r.createElement("div",{className:(0,u.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!p.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&r.createElement("span",{className:(0,u.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&r.createElement(R.G,{icon:Z.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(R.G,{icon:Z.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(R.G,{icon:Z.X7o})),s&&!p.showRaw&&r.createElement("button",{className:(0,u.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":`.${i}`,r=n===i?p.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(R.G,{icon:Z.q7m})),p.hasEdits&&!l&&r.createElement("button",{className:(0,u.default)(m.Z.showRawButton,m.Z.headerButton,p.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,M.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?r.createElement(R.G,{icon:Z.w49}):r.createElement(R.G,{icon:Z.rxY}))),"python"===i&&r.createElement(A,{webKey:o}))}));var z=n(56771);const P=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(R.G,{icon:Z.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),j=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,M.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,z.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(G,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,u.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(H,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(P,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(K,{webKey:e.webKey})),r.createElement(D,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),O=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,M.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var V=n(90203),U=n(34805),W=n(4817),q=n.n(W),F=n(87410),J=n(35926);const Y=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:F.Z.highlight(e,F.Z.languages.python,"python")}})},X=(0,p.Pi)((e=>{var t;const n=(0,h.oR)("documentStore"),a=(0,h.oR)("userStore"),o=n.find(e.webKey),[i,l]=r.useState(1),[s,c]=r.useState(!1);return r.useEffect((()=>(0,M.U5)((()=>{var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(t=>{var a;t&&t>0&&(l(1),s&&(null==(a=n.find(e.webKey))||a.loadVersions()))}))),[]),o.versioned?r.createElement("div",{className:(0,u.default)(m.Z.codeHistory)},r.createElement("details",{open:s,onClick:e=>{e.preventDefault(),e.stopPropagation(),s||o.loadVersions(),c(!s)},className:(0,u.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},o.versionsLoaded?`${o.versions.length} Versions`:"Load Versions"),r.createElement(R.G,{className:(0,u.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===o.versionsLoaded,icon:Z.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),o.loadVersions()}})),r.createElement("div",{className:(0,u.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,u.default)(m.Z.versionControl)},r.createElement(J.Z,{value:i,onChange:e=>{l(e)},min:1,max:o.versions.length-1,dots:o.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",i)),r.createElement("div",{className:(0,u.default)(m.Z.diffViewer)},o.versions.length>1&&r.createElement(q(),{leftTitle:o.versions[i-1].version,rightTitle:r.createElement("div",null,o.versions[i].version,o.versions[i].pasted&&(null==(t=a.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:o.versions[i-1].data.code,newValue:o.versions[i].data.code,renderContent:Y}))))):null})),Q=(0,p.Pi)((e=>{const t=(0,h.oR)("documentStore");(0,h.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,g.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,M.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,u.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(V.Z,null),r.createElement("div",{className:(0,u.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(O,{webKey:e.webKey}),r.createElement(j,e),r.createElement(X,{webKey:e.webKey}))):r.createElement(U.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){var t,n;if(e.reference)return r.createElement(l(),e);const i=(e.className||"").match(/language-(?<lang>\w*)/);let d=(null==i||null==(t=i.groups)||null==(n=t.lang)?void 0:n.toLocaleLowerCase())??"";if("py"===d&&(d="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),n=t.match(/\n###\s*PRE.*?\n/);let i="",l=t;n&&(i=t.slice(0,n.index||0),l=t.slice((n.index||0)+n[0].length));const s=re(e.title,l),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:l,codeId:s,readonly:!!e.readonly,lang:d,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:i,showLineNumbers:!(e.slim&&!/\n/.test(l)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||d}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86390);const o="playgroundWrapper_ADS_",i="playgroundContainer_J_zN";function l(e){return a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},13129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));var o=n(99882);const i={sidebar_custom_props:{id:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},l="Tastatursteuerung",s={unversionedId:"pgzero/howto/keyboard-control/index",id:"pgzero/howto/keyboard-control/index",title:"Tastatursteuerung",description:"---",source:"@site/docs/pgzero/9-howto/1-keyboard-control/index.md",sourceDirName:"pgzero/9-howto/1-keyboard-control",slug:"/pgzero/howto/keyboard-control/",permalink:"/pgzero/howto/keyboard-control/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/pgzero/9-howto/1-keyboard-control/index.md",tags:[],version:"current",lastUpdatedAt:1674074136,formattedLastUpdatedAt:"18. Jan. 2023",frontMatter:{sidebar_custom_props:{id:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"How-To",permalink:"/pgzero/howto/"},next:{title:"Jump & Run",permalink:"/pgzero/howto/jump/"}},c={},d=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Programm",id:"programm",level:2}],m=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"tastatursteuerung"},"Tastatursteuerung"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beschreibung"},"Beschreibung"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Einfaches Beispiel, wie eine Figur mit der Tastatur gesteuert wird."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)(o.Z,{language:"python",mdxType:"CodeBlock"},'import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\nhintergrund = 0, 150, 220\n\nnemo = Actor("fisch_rot_rechts")\nnemo.x = WIDTH / 2\nnemo.y = HEIGHT / 2\n\n\ndef kollision_rand(objekt):\n    if objekt.left < 0:\n        objekt.left = 0\n    if objekt.right >= WIDTH:\n        objekt.right = WIDTH - 1\n    if objekt.top < 0:\n        objekt.top = 0\n    if objekt.bottom >= HEIGHT:\n        objekt.bottom = HEIGHT - 1\n\n\ndef update():\n    if keyboard.left:\n        nemo.x = nemo.x - 3\n        nemo.image = "fisch_rot_links"\n    if keyboard.right:\n        nemo.x = nemo.x + 3\n        nemo.image = "fisch_rot_rechts"\n    if keyboard.up:\n        nemo.y = nemo.y - 3\n    if keyboard.down:\n        nemo.y = nemo.y + 3\n    kollision_rand(nemo)\n\n\ndef draw():\n    screen.fill(hintergrund)\n    nemo.draw()\n\n\npgzrun.go()\n'))}h.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);