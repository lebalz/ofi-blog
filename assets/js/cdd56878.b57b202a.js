"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78492],{90203:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),i=n(71217),s=n(21314);const l=(0,i.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",i="badge_oWqf",s="overlay_cqDg";var l=n(92814),c=n(51436);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&s)},a.createElement(l.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(83117),r=n(67294),o=n(3024),i=n(95665),s=n.n(i),l=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),u=n(86010),p=n(71217),y=n(21314),g=n(72389);const h=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,p.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(16606),n.e(91086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,g.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(h,e)}));var f=n(52616);const v="brythonGraphicsResult_Zcg1",E="brythonGraphicsResultHead_Te8f",w="spacer_VytD",k="slimStrippedButton__QpN";var N=n(61212);const C=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${C(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${C(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${C(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${C(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${C(n)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${C(n)}>${i}</text>`);break;case"polygon":var s="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push(`<polygon ${C(n)} transform="translate(${l}) rotate(${s})"></polygon>`)}return t},x=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},Z=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,s='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),l.innerHTML=`${s}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(x).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,N.Q)(e);return t&&_(n,t),S(n).join("\n")})(`${s}${i}`,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),u=document.createElement("a");u.href=m,u.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(u),u.click(),document.body.removeChild(u)};var B=n(92814),R=n(51436),L=n(61193),A=n.n(L);const K=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},T=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey),n=(0,y.oR)("documentStore");return r.createElement(A(),{onStop:K,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:E},r.createElement("span",null,"Output"),r.createElement("span",{className:w}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:k,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),P=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey);return r.createElement(T,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:k,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&Z(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:k,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&Z(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.q7m}))))})})),$=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${n.join(",")}}`},o.join("")))}));var M=n(51417),G=n(68949);const I=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,u.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(B.G,{icon:t.executing?M.Bmx:R.zc,spin:t.executing}))})),D=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:i,noCompare:s,download:l}=e;const[c,d]=r.useState(!1),p=(0,y.oR)("documentStore").find(o);if(!p)return null;return r.useEffect((()=>{let e;const t=(0,G.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),r.createElement("div",{className:(0,u.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!p.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),p.saveService.isOffline&&r.createElement("span",{className:(0,u.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===p.saveService.state&&r.createElement(B.G,{icon:R.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(B.G,{icon:R.f8k,style:{color:"var(--ifm-color-success)"}})),p.hasEdits&&!p.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(B.G,{icon:R.X7o})),l&&!p.showRaw&&r.createElement("button",{className:(0,u.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":`.${i}`,r=n===i?p.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(B.G,{icon:R.q7m})),p.hasEdits&&!s&&r.createElement("button",{className:(0,u.default)(m.Z.showRawButton,m.Z.headerButton,p.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,G.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},p.showRaw?r.createElement(B.G,{icon:R.w49}):r.createElement(B.G,{icon:R.rxY}))),"python"===i&&r.createElement(I,{webKey:o}))}));var H=n(56771);const O=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey);return r.createElement(T,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:k,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(B.G,{icon:R.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),z=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,G.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,H.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[f.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(D,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,u.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(P,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(O,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(T,{webKey:e.webKey})),r.createElement($,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(n.codeId)})))})),V=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,G.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:a})}));var U=n(90203),W=n(34805),j=n(4817),q=n.n(j),F=n(87410),Y=n(35926);const X=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:F.Z.highlight(e,F.Z.languages.python,"python")}})},J=(0,p.Pi)((e=>{var t;const n=(0,y.oR)("documentStore"),a=(0,y.oR)("userStore"),o=n.find(e.webKey),[i,s]=r.useState(1),[l,c]=r.useState(!1);return r.useEffect((()=>(0,G.U5)((()=>{var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(t=>{var a;t&&t>0&&(s(1),l&&(null==(a=n.find(e.webKey))||a.loadVersions()))}))),[]),o.versioned?r.createElement("div",{className:(0,u.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||o.loadVersions(),c(!l)},className:(0,u.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},o.versionsLoaded?`${o.versions.length} Versions`:"Load Versions"),r.createElement(B.G,{className:(0,u.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===o.versionsLoaded,icon:R.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),o.loadVersions()}})),r.createElement("div",{className:(0,u.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,u.default)(m.Z.versionControl)},r.createElement(Y.Z,{value:i,onChange:e=>{s(e)},min:1,max:o.versions.length-1,dots:o.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",i)),r.createElement("div",{className:(0,u.default)(m.Z.diffViewer)},o.versions.length>1&&r.createElement(q(),{leftTitle:o.versions[i-1].version,rightTitle:r.createElement("div",null,o.versions[i].version,o.versions[i].pasted&&(null==(t=a.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:o.versions[i-1].data.code,newValue:o.versions[i].data.code,renderContent:X}))))):null})),Q=(0,p.Pi)((e=>{const t=(0,y.oR)("documentStore");(0,y.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,g.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,G.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,u.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(U.Z,null),r.createElement("div",{className:(0,u.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(V,{webKey:e.webKey}),r.createElement(z,e),r.createElement(J,{webKey:e.webKey}))):r.createElement(W.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):`${ae[n][a]}`};function oe(e){var t,n;if(e.reference)return r.createElement(s(),e);const i=(e.className||"").match(/language-(?<lang>\w*)/);let d=(null==i||null==(t=i.groups)||null==(n=t.lang)?void 0:n.toLocaleLowerCase())??"";if("py"===d&&(d="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&l.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),n=t.match(/\n###\s*PRE.*?\n/);let i="",s=t;n&&(i=t.slice(0,n.index||0),s=t.slice((n.index||0)+n[0].length));const l=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:l,readonly:!!e.readonly,lang:d,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:i,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||d}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86390);const o="playgroundWrapper_ADS_",i="playgroundContainer_J_zN";function s(e){return a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},13225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));var o=n(99882);const i={sidebar_custom_props:{id:"e8fabd30-0220-47e4-a94b-6b5d11d22940",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Tippspiel",l={unversionedId:"Programmieren-1/PyGameZero/A-examples/typing/index",id:"version-26e/Programmieren-1/PyGameZero/A-examples/typing/index",title:"Tippspiel",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/A-examples/3-typing/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/A-examples/3-typing",slug:"/Programmieren-1/PyGameZero/A-examples/typing/",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/typing/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"e8fabd30-0220-47e4-a94b-6b5d11d22940",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Zeichenprogramm",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/paint/"},next:{title:"Push to Hole",permalink:"/26e/Programmieren-1/PyGameZero/A-examples/push-to-hole/"}},c={},d=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Programm",id:"programm",level:2}],m=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const p={toc:d};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"tippspiel"},"Tippspiel"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beschreibung"},"Beschreibung"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Spiel, bei welchem man W\xf6rter richtig abtippen muss, bevor die Zeit abl\xe4uft."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)(o.Z,{language:"python",mdxType:"CodeBlock"},'import pgzrun\nimport random\n\n\nTITLE = "Typing Game"\nWIDTH = 640\nHEIGHT = 360\nBG_COLOUR = (255, 255, 255)\nBLACK = (0, 0, 0)\n\nKEYMAP = {\n    keys.A: "a",\n    keys.B: "b",\n    keys.C: "c",\n    keys.D: "d",\n    keys.E: "e",\n    keys.F: "f",\n    keys.G: "g",\n    keys.H: "h",\n    keys.I: "i",\n    keys.J: "j",\n    keys.K: "k",\n    keys.L: "l",\n    keys.M: "m",\n    keys.N: "n",\n    keys.O: "o",\n    keys.P: "p",\n    keys.Q: "q",\n    keys.R: "r",\n    keys.S: "s",\n    keys.T: "t",\n    keys.U: "u",\n    keys.V: "v",\n    keys.W: "w",\n    keys.X: "x",\n    keys.Y: "y",\n    keys.Z: "z",\n    keys.QUOTE: "\xe4",\n    keys.SEMICOLON: "\xf6",\n    keys.LEFTBRACKET: "\xfc",\n    keys.SPACE: " "\n}\n\nwords = []\nfile = open("wordlist.txt", "r", -1, "utf-8")\nfor line in file:\n    # Newline am Zeilenende abschneiden\n    line = line.rstrip("\\n")\n    # Wort zur Liste hinzuf\xfcgen\n    words.append(line)\nfile.close()\n\ngame = Actor("alien")\ngame.level = 0\ngame.text = ""\ngame.time = 5\nMAX_TIME = 10\n\n\ndef update(dt):\n    game.time = game.time - dt\n\n\ndef draw():\n    screen.fill(BG_COLOUR)\n    if game.time < 0:\n        screen.draw.text(\n            "GAME OVER", centerx=WIDTH / 2, centery=HEIGHT / 2, fontsize=60, color=BLACK\n        )\n        return\n    screen.draw.text(words[game.level], left=20, top=80, fontsize=60, color=BLACK)\n    screen.draw.text(game.text, left=20, top=160, fontsize=60, color=(255, 0, 0))\n    width = WIDTH * game.time / MAX_TIME\n    screen.draw.filled_rect(Rect((0, 10), (width, 50)), BLACK)\n\n\ndef on_key_down(key):\n    print(key)\n    if game.time < 0:\n        return\n    if key in KEYMAP:\n        char = KEYMAP[key]\n        if keyboard.lshift or keyboard.rshift:\n            char = char.upper()\n        game.text = game.text + char\n    if key == keys.BACKSPACE:\n        game.text = game.text[:-1]\n    if game.text == words[game.level]:\n        game.level = game.level + 1\n        game.time = game.time + 0.3 * len(game.text)\n        game.text = ""\n\npgzrun.go()\n'))}y.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);