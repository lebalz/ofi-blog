"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[48622],{3036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(85893),a=n(11151);const o='import pgzrun\n\nWIDTH = 800\nHEIGHT = 600\nhintergrund = 0, 150, 220\n\nnemo = Actor("fisch_rot_rechts")\nnemo.x = WIDTH / 2\nnemo.y = HEIGHT / 2\n\n\ndef kollision_rand(objekt):\n    if objekt.left < 0:\n        objekt.left = 0\n    if objekt.right >= WIDTH:\n        objekt.right = WIDTH - 1\n    if objekt.top < 0:\n        objekt.top = 0\n    if objekt.bottom >= HEIGHT:\n        objekt.bottom = HEIGHT - 1\n\n\ndef update():\n    if keyboard.left:\n        nemo.x = nemo.x - 3\n        nemo.image = "fisch_rot_links"\n    if keyboard.right:\n        nemo.x = nemo.x + 3\n        nemo.image = "fisch_rot_rechts"\n    if keyboard.up:\n        nemo.y = nemo.y - 3\n    if keyboard.down:\n        nemo.y = nemo.y + 3\n    kollision_rand(nemo)\n\n\ndef draw():\n    screen.fill(hintergrund)\n    nemo.draw()\n\n\npgzrun.go()\n';var s=n(30107);const i={sidebar_custom_props:{id:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},l="Tastatursteuerung",d={id:"Programmieren-1/PyGameZero/howto/keyboard-control/index",title:"Tastatursteuerung",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/9-howto/1-keyboard-control/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/9-howto/1-keyboard-control",slug:"/Programmieren-1/PyGameZero/howto/keyboard-control/",permalink:"/26P/Programmieren-1/PyGameZero/howto/keyboard-control/",draft:!1,unlisted:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"How-To",permalink:"/26P/Programmieren-1/PyGameZero/howto/"},next:{title:"Jump & Run",permalink:"/26P/Programmieren-1/PyGameZero/howto/jump/"}},c={},u=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Programm",id:"programm",level:2}];function m(e){const t={div:"div",h1:"h1",h2:"h2",hr:"hr",p:"p",...(0,a.a)(),...e.components},{Comment:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Comment",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.div,{className:"commentable",children:[(0,r.jsx)(t.h1,{id:"tastatursteuerung",children:"Tastatursteuerung"}),(0,r.jsx)(n,{nr:0,type:"heading",pageId:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",children:(0,r.jsx)(t.p,{children:"."})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.div,{className:"commentable",children:[(0,r.jsx)(t.h2,{id:"beschreibung",children:"Beschreibung"}),(0,r.jsx)(n,{nr:1,type:"heading",pageId:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",children:(0,r.jsx)(t.p,{children:"."})})]}),"\n",(0,r.jsxs)(t.div,{className:"commentable",children:[(0,r.jsx)(t.p,{children:"Einfaches Beispiel, wie eine Figur mit der Tastatur gesteuert wird."}),(0,r.jsx)(n,{nr:0,type:"paragraph",pageId:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",children:(0,r.jsx)(t.p,{children:"."})})]}),"\n",(0,r.jsxs)(t.div,{className:"commentable",children:[(0,r.jsx)(t.h2,{id:"programm",children:"Programm"}),(0,r.jsx)(n,{nr:2,type:"heading",pageId:"ffa2f0c9-8168-403e-9f48-632b9ab6d0e8",children:(0,r.jsx)(t.p,{children:"."})})]}),"\n",(0,r.jsx)(s.Z,{language:"python",children:o})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},47271:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);const r="noLoginAlert_HRfh";var a=n(33692),o=n(46670),s=n(21314),i=n(85893);const l=(0,o.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"\u26a0\ufe0f Nicht Eingeloggt"})," Speichern nur mit GBSL-Login m\xf6glich. ",(0,i.jsx)(a.Z,{to:"/login",children:"Login"})]})))},74322:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(86010);const a="loader_FEpR",o="badge_oWqf",s="overlay_cqDg";var i=n(99603),l=n(59417),d=n(85893);const c=e=>(0,d.jsxs)("div",{className:(0,r.default)(a,e.overlay&&s),children:[(0,d.jsx)(i.G,{icon:l.IJ7,spin:!0}),(0,d.jsx)("span",{className:(0,r.default)("badge",o),children:e.caption||"Laden..."})]})},30107:(e,t,n)=>{n.d(t,{Z:()=>ie});var r=n(67294),a=n(94285),o=n(95665),s=n.n(o),i=n(10412),l=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,r=1103547991^t;for(let a,o=0;o<e.length;o++)a=e.charCodeAt(o),n=Math.imul(n^a,2654435761),r=Math.imul(r^a,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(r>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var c=n(28137),u=n(86010),m=n(46670),p=n(21314),h=n(72389),b=n(85893);const g=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return(0,b.jsx)("pre",{children:(0,b.jsx)("code",{children:t.data.code})})})),y=(0,m.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(88982),n.e(64714)]).then(n.bind(n,64714)).then((e=>{a(e)}))}),[]),(0,h.Z)()?t?(0,b.jsx)(t.default,{...e}):(0,b.jsx)("div",{}):(0,b.jsx)(g,{...e})}));var f=n(52616);const x="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",v="spacer_VytD",j="slimStrippedButton__QpN";var N=n(61212);const _=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),C=(e,t)=>{"root"===e.type?e.children.forEach((e=>{C(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:r,type:a,children:o}=e;switch("root"===a&&o.forEach((e=>{t.push(...S(e))})),r){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${_(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${_(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${_(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${_(n)}></circle>`);break;case"text":var s="";o.forEach((e=>{switch(e.type){case"text":s=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${_(n)}>${s}</text>`);break;case"polygon":var i="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push(`<polygon ${_(n)} transform="translate(${l}) rotate(${i})"></polygon>`)}return t},k=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},B=(e,t,n,r)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const a=e.getBBox(),o={viewBox:`${a.x-5},${a.y-5},${a.width+10},${a.height+10}`,width:a.width+10,height:a.height+10};var s=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let d=0;if(r||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),r=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(r.length>0){const e=r[r.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),l.innerHTML=`${i}\r\n${t.outerHTML}`,d=Array.from(t.querySelectorAll("animate")).map(k).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,N.Q)(e);return t&&C(n,t),S(n).join("\n")})(`${i}${s}`,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),r=document.createElement("raw");r.innerHTML=n||"",t.appendChild(r),e.appendChild(t)}var c=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),u=URL.createObjectURL(c),m=document.createElement("a");m.href=u,m.download=d>0?`${t}__${(Math.round(10*d)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(m),m.click(),document.body.removeChild(m)};var E=n(99603),R=n(59417),Z=n(61193),$=n.n(Z);const L=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},T=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=(0,p.oR)("documentStore");return(0,b.jsx)($(),{onStop:L,positionOffset:{x:0,y:"-50%"},children:(0,b.jsxs)("div",{className:x,children:[(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("span",{children:"Output"}),(0,b.jsx)("span",{className:v}),e.controls,(0,b.jsx)("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:j,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:R.NBC})})})]}),(0,b.jsx)("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result",children:e.main})]})})})),P=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return(0,b.jsx)(T,{webKey:e.webKey,controls:(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)("button",{"aria-label":"Download Animated SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&B(e,`${t.codeId}`,t.executedScriptSource,!0)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:R.Bxq})})}),(0,b.jsx)("button",{"aria-label":"Download SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&B(e,`${t.codeId}`,t.executedScriptSource)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:R.q7m})})})]})})})),K=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let r=1;const a=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${r}-${r+t}`),r+=t,e.output}));return(0,b.jsx)("div",{className:c.Z.brythonOut,children:(0,b.jsx)(ie,{metastring:`{${n.join(",")}}`,children:a.join("")})})}));var I=n(93024),G=n(68949);const H=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return(0,b.jsx)("button",{onClick:()=>t.execScript(window.__BRYTHON__),className:(0,u.default)(c.Z.playButton,c.Z.headerButton),title:`Code Ausf\xfchren ${e.webKey} ${t.codeId}`,children:(0,b.jsx)(E.G,{icon:t.executing?I.Bmx:R.zc,spin:t.executing})})})),M=(0,m.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:s,noCompare:i,download:l}=e;const[d,m]=r.useState(!1),h=(0,p.oR)("documentStore").find(o);if(!h)return null;return r.useEffect((()=>{let e;const t=(0,G.U5)((()=>h.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(m(!0),e=setTimeout((()=>{m(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[h]),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.brythonCodeBlockHeader,c.Z.brythonCodeBlockHeader,c.Z.controls),children:[!t&&(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)("div",{className:c.Z.title,children:n}),!h.loaded&&(0,b.jsx)("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden.",children:"Laden"}),h.saveService.isOffline&&(0,b.jsx)("span",{className:(0,u.default)("badge","badge--danger",c.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!",children:"\u26a0\ufe0f Offline"}),(0,b.jsx)("div",{className:c.Z.spacer}),(0,b.jsxs)("span",{style:{minWidth:"1em"},children:["save"===h.saveService.state&&(0,b.jsx)(E.G,{icon:R.UO1,style:{color:"#3578e5"},spin:!0}),d&&(0,b.jsx)(E.G,{icon:R.f8k,style:{color:"var(--ifm-color-success)"}})]}),h.hasEdits&&!h.showRaw&&a&&(0,b.jsx)("button",{onClick:()=>{if(!a)return;if(h.readonly)return void h.setData({code:h.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&h.setData({code:h.rawScript})},className:c.Z.headerButton,title:"\xc4nderungen Verwerfen",children:(0,b.jsx)(E.G,{icon:R.X7o})}),l&&!h.showRaw&&(0,b.jsx)("button",{className:(0,u.default)(c.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([h.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const r="python"===s?".py":`.${s}`,a=n===s?h.webKey:n,o=a.endsWith(r)?a:`${a}${r}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download",children:(0,b.jsx)(E.G,{icon:R.q7m})}),h.hasEdits&&!i&&(0,b.jsx)("button",{className:(0,u.default)(c.Z.showRawButton,c.Z.headerButton,h.showRaw?c.Z.showRawButtonDisabled:void 0),onClick:(0,G.aD)((()=>h.showRaw=!h.showRaw)),title:h.showRaw?"Mein Code Anzeigen":"Original Anzeigen",children:h.showRaw?(0,b.jsx)(E.G,{icon:R.w49}):(0,b.jsx)(E.G,{icon:R.rxY})})]}),"python"===s&&(0,b.jsx)(H,{webKey:o})]})})),A=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return(0,b.jsx)(T,{webKey:e.webKey,controls:(0,b.jsx)("button",{"aria-label":"Download SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var r=document.createElement("a");r.href=n,r.download=`${e}.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}})(f.h5.canvasContainer(t.codeId))},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:R.q7m})})}),main:(0,b.jsx)("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),D=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=t.find(e.webKey);return(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)(M,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),(0,b.jsx)(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&(0,b.jsxs)("div",{className:(0,u.default)(c.Z.result),children:[t.opendGraphicsModalWebKey===n.webKey&&(0,b.jsxs)(r.Fragment,{children:[n.hasTurtleOutput&&(0,b.jsx)(P,{webKey:e.webKey}),n.hasCanvasOutput&&(0,b.jsx)(A,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&(0,b.jsx)(T,{webKey:e.webKey})]}),(0,b.jsx)(K,{webKey:e.webKey}),(0,b.jsx)("div",{id:f.h5.outputDiv(n.codeId)})]})]})})),O=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;switch(n.type){case"start":t.clearLogMessages(),t.setExecuting(!0);break;case"done":t.setExecuting(!1);break;default:t.addLogMessage(n)}}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((r=>{n.current&&t(n.current),n.current=r,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return(0,b.jsx)("div",{id:f.h5.communicator(t.codeId),ref:a})}));var V=n(47271),z=n(74322),W=n(4817),U=n.n(W),q=n(14965),F=n(84538);const J=e=>{if(e)return(0,b.jsx)("span",{dangerouslySetInnerHTML:{__html:q.p1.highlight(e,q.p1.languages.python,"python")}})},Y=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=(0,p.oR)("userStore"),a=t.find(e.webKey),[o,s]=r.useState(1),[i,l]=r.useState(!1);return r.useEffect((()=>(0,G.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(s(1),i&&t.find(e.webKey)?.loadVersions())}))),[]),a.versioned?(0,b.jsx)("div",{className:(0,u.default)(c.Z.codeHistory),children:(0,b.jsxs)("details",{open:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||a.loadVersions(),l(!i)},className:(0,u.default)("alert alert--info",c.Z.historyDetails),children:[(0,b.jsxs)("summary",{children:[(0,b.jsx)("span",{className:"badge badge--secondary",children:a.versionsLoaded?`${a.versions.length} Versions`:"Load Versions"}),(0,b.jsx)(E.G,{className:(0,u.default)(c.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===a.versionsLoaded,icon:R.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),a.loadVersions()}})]}),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,b.jsxs)("div",{className:(0,u.default)(c.Z.versionControl),children:[(0,b.jsx)(F.Z,{value:o,onChange:e=>{s(e)},min:1,max:a.versions.length-1,dots:a.versions.length<50}),(0,b.jsxs)("span",{className:"badge badge--primary",children:["V",o]})]}),(0,b.jsx)("div",{className:(0,u.default)(c.Z.diffViewer),children:a.versions.length>1&&(0,b.jsx)(U(),{leftTitle:a.versions[o-1].version,rightTitle:(0,b.jsxs)("div",{children:[a.versions[o].version,a.versions[o].pasted&&n.current?.admin&&(0,b.jsx)("span",{style:{float:"right"},className:"badge badge--danger",children:"Pasted"})]}),splitView:!0,oldValue:a.versions[o-1].data.code,newValue:a.versions[o].data.code,renderContent:J})})]})]})}):null})),Q=(0,m.Pi)((e=>{const t=(0,p.oR)("documentStore");(0,p.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,h.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,G.z)((()=>{n.precode=e.precode}))}),[n]),a?n?(0,b.jsxs)("div",{className:(0,u.default)(c.Z.wrapper,"notranslate"),children:[!e.slim&&(0,b.jsx)(V.Z,{}),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.playgroundContainer,e.slim?c.Z.containerSlim:c.Z.containerBig,"live_py"),children:["python"===e.lang&&(0,b.jsx)(O,{webKey:e.webKey}),(0,b.jsx)(D,{...e}),!e.noHistory&&(0,b.jsx)(Y,{webKey:e.webKey})]})]}):(0,b.jsx)(z.Z,{}):(0,b.jsx)("div",{children:"SSR"})}));var X=n(25934),ee=n(54616);const te={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function ne(e){return(0,b.jsx)("div",{className:te.playgroundWrapper,children:(0,b.jsx)("div",{className:te.playgroundContainer,children:(0,b.jsx)(ee.Z,{...e})})})}var re=n(38985);const ae=e=>(e?.metastring||"").replace(/\s*=\s*/g,"=").split(/\s+/).map((e=>e.trim().split("="))).reduce(((e,t)=>{let[n,r]=t;const a="true"===r||"false"!==r&&(Number.isNaN(Number(r))?r||!0:Number(r));return e[n]=a,e}),{});const oe={},se=(e,t)=>{const n=function(){try{return(0,l.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();oe[n]||(oe[n]={});const r=d(t);oe[n][r]||(oe[n][r]=Object.keys(oe[n]).length+1);return e?(0,l.Vx)(e):`${oe[n][r]}`};function ie(e){const t=ae(e);if(t.reference)return(0,b.jsx)(s(),{...e});const n=(e.className||"").match(/language-(?<lang>\w*)/);let o=n?.groups?.lang?.toLocaleLowerCase()??"";if("py"===o&&(o="python"),t.live_jsx)return(0,b.jsx)(ne,{scope:re.Z,...e});if(t.live_py&&i.Z.canUseDOM){if(!t.id&&!t.slim)return(0,b.jsx)(a.default,{...e});const n=e.title||t.title,s=(e.children||"").replace(/\s*\n$/,""),i=s.match(/\n###\s*PRE.*?\n/);let d="",c=s;i&&(d=s.slice(0,i.index||0),c=s.slice((i.index||0)+i[0].length));const u=se(n,c),[m]=r.useState(t.id||(0,X.Z)());return(0,b.jsx)(Q,{...e,...t,maxLines:t.maxLines&&Number.parseInt(t.maxLines,10),webKey:m,code:c,codeId:u,readonly:!!t.readonly,lang:o,resettable:!t.persist,download:!t.versioned&&!t.noDownload,slim:!!t.slim,precode:d,showLineNumbers:!(t.slim&&!/\n/.test(c)),versioned:!!t.versioned,noHistory:!!t.noHistory,noCompare:!!t.noCompare,title:(0,l.Vj)(n)||o})}return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(a.default,{...e})})}},28137:(e,t,n)=>{n.d(t,{Z:()=>r});const r={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);