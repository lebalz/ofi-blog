"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[58369],{92574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(85893),r=n(11151);const s='import pgzrun\n\nnemo = Actor("fisch_rot_rechts")\n\ndef update():\n    nemo.x = nemo.x + 1\n\n\ndef draw():\n    screen.clear()\n    nemo.draw()\n\npgzrun.go()\n';var i=n(30107);const o={sidebar_custom_props:{id:"346e757e-9778-4a58-b0d1-a5f186d9680e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},d="Animation",l={id:"Programmieren-1/PyGameZero/animation/index",title:"Animation",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/2-animation/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/2-animation",slug:"/Programmieren-1/PyGameZero/animation/",permalink:"/26P/Programmieren-1/PyGameZero/animation/",draft:!1,unlisted:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"346e757e-9778-4a58-b0d1-a5f186d9680e",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"Fenster",permalink:"/26P/Programmieren-1/PyGameZero/window/"},next:{title:"Aktor",permalink:"/26P/Programmieren-1/PyGameZero/actor/"}},c={},m=[{value:"Start von Pygame Zero",id:"start-von-pygame-zero",level:2},{value:"Funktionsweise von Pygame Zero ohne Animation",id:"funktionsweise-von-pygame-zero-ohne-animation",level:2},{value:"Funktionsweise von Pygame Zero mit Animation",id:"funktionsweise-von-pygame-zero-mit-animation",level:2}];function p(e){const t={code:"code",div:"div",em:"em",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Comment:o,Figure:d}=t;return o||h("Comment",!0),d||h("Figure",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h1,{id:"animation",children:"Animation"}),(0,a.jsx)(o,{nr:0,type:"heading",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"def draw():\n"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"wird von Pygame Zero aufgerufen. Hier wird gezeichnet."}),(0,a.jsx)(o,{nr:0,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"def update():\n"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"wird von Pygame Zero aufgerufen. Hier wird der n\xe4chste Animationsschritt berechnet."}),(0,a.jsx)(o,{nr:1,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"start-von-pygame-zero",children:"Start von Pygame Zero"}),(0,a.jsx)(o,{nr:1,type:"heading",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"Im Pygame Zero-Modus des Mu Editors wird Pygame Zero automatisch gestartet, sobald das eigene Skript fertig abgearbeitet worden ist."}),(0,a.jsx)(o,{nr:2,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["In einem anderen Editor muss Pygame Zero durch einen Befehl am Ende des eigenen Skripts gestartet werden. Dazu muss das Modul ",(0,a.jsx)(t.code,{children:"pgzrun"})," importiert werden:"]}),(0,a.jsx)(o,{nr:3,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"import pgzrun\n\n# Eigene Befehle ...\n\npgzrun.go()\n"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"funktionsweise-von-pygame-zero-ohne-animation",children:"Funktionsweise von Pygame Zero ohne Animation"}),(0,a.jsx)(o,{nr:2,type:"heading",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"Das Hauptprogramm von Pygame Zero wird erst gestartet, nachdem das ganze Skript abgearbeitet worden ist. Daf\xfcr sorgt der spezielle Modus des Mu-Editors."}),(0,a.jsx)(o,{nr:4,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Pygame Zero erstellt zun\xe4chst ein Fenster. Dazu werden die aktuellen Angaben in den Variablen ",(0,a.jsx)(t.code,{children:"WIDTH"})," und ",(0,a.jsx)(t.code,{children:"HEIGHT"})," verwendet. Anschliessend ruft Pygame Zero das Unterprogramm ",(0,a.jsx)(t.code,{children:"draw()"})," auf, welches im eignen Skript definiert worden ist."]}),(0,a.jsx)(o,{nr:5,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(16050).Z+"",width:"949",height:"349"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import pgzrun\n\nWEISS = (255, 255, 255)\nSCHWARZ = (0, 0, 0)\n\ndef draw():\n    screen.fill(WEISS)\n    screen.draw.text("Hallo Welt", top=10, left=10, color=SCHWARZ)\n\npgzrun.go()\n'})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"funktionsweise-von-pygame-zero-mit-animation",children:"Funktionsweise von Pygame Zero mit Animation"}),(0,a.jsx)(o,{nr:3,type:"heading",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Falls im eigenen Skript ein Unterprogramm mit dem Namem ",(0,a.jsx)(t.code,{children:"update"})," definiert wird, geht Pygame Zero davon aus, dass es sich um eine Animation handelt. Die Funktionsweise von Pygame Zero \xe4ndert sich entsprechend:"]}),(0,a.jsx)(o,{nr:6,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Pygame Zero erstellt zun\xe4chst ein Fenster. Dazu werden die aktuellen Angaben in den Variablen ",(0,a.jsx)(t.code,{children:"TITLE"}),", ",(0,a.jsx)(t.code,{children:"WIDTH"})," und ",(0,a.jsx)(t.code,{children:"HEIGHT"})," verwendet."]}),(0,a.jsx)(o,{nr:7,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Anschliessend startet Pygame Zero den sogenannten ",(0,a.jsx)(t.em,{children:"Game Loop"}),". Dabei wird erst das Unterprogramm ",(0,a.jsx)(t.code,{children:"update"})," aufgerufen und anschliessend ",(0,a.jsx)(t.code,{children:"draw"}),". Dies wird so lange wiederholt, bis das Programm abgebrochen wird."]}),(0,a.jsx)(o,{nr:8,type:"paragraph",pageId:"346e757e-9778-4a58-b0d1-a5f186d9680e",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(38710).Z+"",width:"856",height:"483"})}),"\n",(0,a.jsx)(i.Z,{language:"python",children:s})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47271:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);const a="noLoginAlert_HRfh";var r=n(33692),s=n(46670),i=n(21314),o=n(85893);const d=(0,s.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("span",{className:"badge badge--danger",children:"\u26a0\ufe0f Nicht Eingeloggt"})," Speichern nur mit GBSL-Login m\xf6glich. ",(0,o.jsx)(r.Z,{to:"/login",children:"Login"})]})))},74322:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(86010);const r="loader_FEpR",s="badge_oWqf",i="overlay_cqDg";var o=n(99603),d=n(59417),l=n(85893);const c=e=>(0,l.jsxs)("div",{className:(0,a.default)(r,e.overlay&&i),children:[(0,l.jsx)(o.G,{icon:d.IJ7,spin:!0}),(0,l.jsx)("span",{className:(0,a.default)("badge",s),children:e.caption||"Laden..."})]})},30107:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(67294),r=n(94285),s=n(95665),i=n.n(s),o=n(10412),d=n(46858);const l=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,s=0;s<e.length;s++)r=e.charCodeAt(s),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var c=n(28137),m=n(86010),p=n(46670),u=n(21314),h=n(72389),g=n(85893);const y=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)("pre",{children:(0,g.jsx)("code",{children:t.data.code})})})),b=(0,p.Pi)((e=>{const[t,r]=a.useState();return a.useEffect((()=>{Promise.all([n.e(88982),n.e(64714)]).then(n.bind(n,64714)).then((e=>{r(e)}))}),[]),(0,h.Z)()?t?(0,g.jsx)(t.default,{...e}):(0,g.jsx)("div",{}):(0,g.jsx)(y,{...e})}));var x=n(52616);const f="brythonGraphicsResult_Zcg1",j="brythonGraphicsResultHead_Te8f",w="spacer_VytD",v="slimStrippedButton__QpN";var N=n(61212);const S=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},Z=e=>{const t=[],{properties:n,tagName:a,type:r,children:s}=e;switch("root"===r&&s.forEach((e=>{t.push(...Z(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${S(n)}>`),s.forEach((e=>{t.push(...Z(e))})),t.push("</svg>");break;case"rect":s.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${S(n)}></rect>`);break;case"g":if(0===(s||[]).length)return t;t.push(`<g ${S(n)}>`),s.forEach((e=>{t.push(...Z(e))})),t.push("</g>");break;case"line":s.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${S(n)}></line>`);break;case"circle":s.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${S(n)}></circle>`);break;case"text":var i="";s.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${S(n)}>${i}</text>`);break;case"polygon":var o="0,0,0",d="0,0";s.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(o=e.properties.to);break;case"animateMotion":"to"in e.properties&&(d=e.properties.to)}})),t.push(`<polygon ${S(n)} transform="translate(${d}) rotate(${o})"></polygon>`)}return t},C=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},k=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),s={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,o='<?xml version="1.0" standalone="no"?>';const d=document.createElement("div");let l=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${s.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${s.width}`),e.setAttribute("to",`${s.width}`)})),t.setAttribute("viewBox",s.viewBox),t.setAttribute("height",`${s.height}`),t.setAttribute("width",`${s.width}`),d.innerHTML=`${o}\r\n${t.outerHTML}`,l=Array.from(t.querySelectorAll("animate")).map(C).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,N.Q)(e);return t&&_(n,t),Z(n).join("\n")})(`${o}${i}`,s);d.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=d.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var c=new Blob([d.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(c),p=document.createElement("a");p.href=m,p.download=l>0?`${t}__${(Math.round(10*l)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var P=n(99603),E=n(59417),B=n(61193),R=n.n(B);const I=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},$=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),n=(0,u.oR)("documentStore");return(0,g.jsx)(R(),{onStop:I,positionOffset:{x:0,y:"-50%"},children:(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"Output"}),(0,g.jsx)("span",{className:w}),e.controls,(0,g.jsx)("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:v,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(P.G,{icon:E.NBC})})})]}),(0,g.jsx)("div",{id:x.h5.graphicsResult(t.codeId),className:"brython-graphics-result",children:e.main})]})})})),A=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)($,{webKey:e.webKey,controls:(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("button",{"aria-label":"Download Animated SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(x.h5.turtleSvgContainer(t.codeId));e&&k(e,`${t.codeId}`,t.executedScriptSource,!0)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(P.G,{icon:E.Bxq})})}),(0,g.jsx)("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(x.h5.turtleSvgContainer(t.codeId));e&&k(e,`${t.codeId}`,t.executedScriptSource)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(P.G,{icon:E.q7m})})})]})})})),L=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const r=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return(0,g.jsx)("div",{className:c.Z.brythonOut,children:(0,g.jsx)(oe,{metastring:`{${n.join(",")}}`,children:r.join("")})})}));var K=n(93024),z=n(68949);const D=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)("button",{onClick:()=>t.execScript(window.__BRYTHON__),className:(0,m.default)(c.Z.playButton,c.Z.headerButton),title:`Code Ausf\xfchren ${e.webKey} ${t.codeId}`,children:(0,g.jsx)(P.G,{icon:t.executing?K.Bmx:E.zc,spin:t.executing})})})),G=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:r,webKey:s,lang:i,noCompare:o,download:d}=e;const[l,p]=a.useState(!1),h=(0,u.oR)("documentStore").find(s);if(!h)return null;return a.useEffect((()=>{let e;const t=(0,z.U5)((()=>h.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(p(!0),e=setTimeout((()=>{p(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[h]),(0,g.jsxs)("div",{className:(0,m.default)(c.Z.brythonCodeBlockHeader,c.Z.brythonCodeBlockHeader,c.Z.controls),children:[!t&&(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("div",{className:c.Z.title,children:n}),!h.loaded&&(0,g.jsx)("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden.",children:"Laden"}),h.saveService.isOffline&&(0,g.jsx)("span",{className:(0,m.default)("badge","badge--danger",c.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!",children:"\u26a0\ufe0f Offline"}),(0,g.jsx)("div",{className:c.Z.spacer}),(0,g.jsxs)("span",{style:{minWidth:"1em"},children:["save"===h.saveService.state&&(0,g.jsx)(P.G,{icon:E.UO1,style:{color:"#3578e5"},spin:!0}),l&&(0,g.jsx)(P.G,{icon:E.f8k,style:{color:"var(--ifm-color-success)"}})]}),h.hasEdits&&!h.showRaw&&r&&(0,g.jsx)("button",{onClick:()=>{if(!r)return;if(h.readonly)return void h.setData({code:h.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&h.setData({code:h.rawScript})},className:c.Z.headerButton,title:"\xc4nderungen Verwerfen",children:(0,g.jsx)(P.G,{icon:E.X7o})}),d&&!h.showRaw&&(0,g.jsx)("button",{className:(0,m.default)(c.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([h.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":`.${i}`,r=n===i?h.webKey:n,s=r.endsWith(a)?r:`${r}${a}`;e.download=s,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download",children:(0,g.jsx)(P.G,{icon:E.q7m})}),h.hasEdits&&!o&&(0,g.jsx)("button",{className:(0,m.default)(c.Z.showRawButton,c.Z.headerButton,h.showRaw?c.Z.showRawButtonDisabled:void 0),onClick:(0,z.aD)((()=>h.showRaw=!h.showRaw)),title:h.showRaw?"Mein Code Anzeigen":"Original Anzeigen",children:h.showRaw?(0,g.jsx)(P.G,{icon:E.w49}):(0,g.jsx)(P.G,{icon:E.rxY})})]}),"python"===i&&(0,g.jsx)(D,{webKey:s})]})})),H=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)($,{webKey:e.webKey,controls:(0,g.jsx)("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(x.h5.canvasContainer(t.codeId))},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(P.G,{icon:E.q7m})})}),main:(0,g.jsx)("canvas",{id:x.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),M=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore"),n=t.find(e.webKey);return(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(G,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),(0,g.jsx)(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&(0,g.jsxs)("div",{className:(0,m.default)(c.Z.result),children:[t.opendGraphicsModalWebKey===n.webKey&&(0,g.jsxs)(a.Fragment,{children:[n.hasTurtleOutput&&(0,g.jsx)(A,{webKey:e.webKey}),n.hasCanvasOutput&&(0,g.jsx)(H,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&(0,g.jsx)($,{webKey:e.webKey})]}),(0,g.jsx)(L,{webKey:e.webKey}),(0,g.jsx)("div",{id:x.h5.outputDiv(n.codeId)})]})]})})),T=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),n=a.useCallback((e=>{if(e.detail){const n=e.detail;switch(n.type){case"start":t.clearLogMessages(),t.setExecuting(!0);break;case"done":t.setExecuting(!1);break;default:t.addLogMessage(n)}}}),[t]),r=((e,t)=>{const n=a.useRef(null);return a.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(x.jS,n)}),(e=>{e.removeEventListener(x.jS,n)}));return(0,g.jsx)("div",{id:x.h5.communicator(t.codeId),ref:r})}));var O=n(47271),V=n(74322),F=n(4817),W=n.n(F),U=n(14965),q=n(84538);const Y=e=>{if(e)return(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:U.p1.highlight(e,U.p1.languages.python,"python")}})},J=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore"),n=(0,u.oR)("userStore"),r=t.find(e.webKey),[s,i]=a.useState(1),[o,d]=a.useState(!1);return a.useEffect((()=>(0,z.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(i(1),o&&t.find(e.webKey)?.loadVersions())}))),[]),r.versioned?(0,g.jsx)("div",{className:(0,m.default)(c.Z.codeHistory),children:(0,g.jsxs)("details",{open:o,onClick:e=>{e.preventDefault(),e.stopPropagation(),o||r.loadVersions(),d(!o)},className:(0,m.default)("alert alert--info",c.Z.historyDetails),children:[(0,g.jsxs)("summary",{children:[(0,g.jsx)("span",{className:"badge badge--secondary",children:r.versionsLoaded?`${r.versions.length} Versions`:"Load Versions"}),(0,g.jsx)(P.G,{className:(0,m.default)(c.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===r.versionsLoaded,icon:E.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),r.loadVersions()}})]}),(0,g.jsxs)("div",{className:(0,m.default)(c.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,g.jsxs)("div",{className:(0,m.default)(c.Z.versionControl),children:[(0,g.jsx)(q.Z,{value:s,onChange:e=>{i(e)},min:1,max:r.versions.length-1,dots:r.versions.length<50}),(0,g.jsxs)("span",{className:"badge badge--primary",children:["V",s]})]}),(0,g.jsx)("div",{className:(0,m.default)(c.Z.diffViewer),children:r.versions.length>1&&(0,g.jsx)(W(),{leftTitle:r.versions[s-1].version,rightTitle:(0,g.jsxs)("div",{children:[r.versions[s].version,r.versions[s].pasted&&n.current?.admin&&(0,g.jsx)("span",{style:{float:"right"},className:"badge badge--danger",children:"Pasted"})]}),splitView:!0,oldValue:r.versions[s-1].data.code,newValue:r.versions[s].data.code,renderContent:Y})})]})]})}):null})),Q=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore");(0,u.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),r=(0,h.Z)();return a.useEffect((()=>{n&&n.precode!==e.precode&&(0,z.z)((()=>{n.precode=e.precode}))}),[n]),r?n?(0,g.jsxs)("div",{className:(0,m.default)(c.Z.wrapper,"notranslate"),children:[!e.slim&&(0,g.jsx)(O.Z,{}),(0,g.jsxs)("div",{className:(0,m.default)(c.Z.playgroundContainer,e.slim?c.Z.containerSlim:c.Z.containerBig,"live_py"),children:["python"===e.lang&&(0,g.jsx)(T,{webKey:e.webKey}),(0,g.jsx)(M,{...e}),!e.noHistory&&(0,g.jsx)(J,{webKey:e.webKey})]})]}):(0,g.jsx)(V.Z,{}):(0,g.jsx)("div",{children:"SSR"})}));var X=n(25934),ee=n(54616);const te={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function ne(e){return(0,g.jsx)("div",{className:te.playgroundWrapper,children:(0,g.jsx)("div",{className:te.playgroundContainer,children:(0,g.jsx)(ee.Z,{...e})})})}var ae=n(38985);const re=e=>(e?.metastring||"").replace(/\s*=\s*/g,"=").split(/\s+/).map((e=>e.trim().split("="))).reduce(((e,t)=>{let[n,a]=t;const r="true"===a||"false"!==a&&(Number.isNaN(Number(a))?a||!0:Number(a));return e[n]=r,e}),{});const se={},ie=(e,t)=>{const n=function(){try{return(0,d.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();se[n]||(se[n]={});const a=l(t);se[n][a]||(se[n][a]=Object.keys(se[n]).length+1);return e?(0,d.Vx)(e):`${se[n][a]}`};function oe(e){const t=re(e);if(t.reference)return(0,g.jsx)(i(),{...e});const n=(e.className||"").match(/language-(?<lang>\w*)/);let s=n?.groups?.lang?.toLocaleLowerCase()??"";if("py"===s&&(s="python"),t.live_jsx)return(0,g.jsx)(ne,{scope:ae.Z,...e});if(t.live_py&&o.Z.canUseDOM){if(!t.id&&!t.slim)return(0,g.jsx)(r.default,{...e});const n=e.title||t.title,i=(e.children||"").replace(/\s*\n$/,""),o=i.match(/\n###\s*PRE.*?\n/);let l="",c=i;o&&(l=i.slice(0,o.index||0),c=i.slice((o.index||0)+o[0].length));const m=ie(n,c),[p]=a.useState(t.id||(0,X.Z)());return(0,g.jsx)(Q,{...e,...t,maxLines:t.maxLines&&Number.parseInt(t.maxLines,10),webKey:p,code:c,codeId:m,readonly:!!t.readonly,lang:s,resettable:!t.persist,download:!t.versioned&&!t.noDownload,slim:!!t.slim,precode:l,showLineNumbers:!(t.slim&&!/\n/.test(c)),versioned:!!t.versioned,noHistory:!!t.noHistory,noCompare:!!t.noCompare,title:(0,d.Vj)(n)||s})}return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(r.default,{...e})})}},28137:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},38710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flowchart-animation-ee0bc02c75277e9528ae6a41ad933a56.svg"},16050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flowchart-draw-77b324b66250089e29b672b03b579a89.svg"}}]);