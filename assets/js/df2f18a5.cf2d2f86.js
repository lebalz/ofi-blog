"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[27877],{23669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(85893),r=n(11151);const o='import pgzrun\nimport random\n\nWIDTH = 800\nHEIGHT = 800\n\ngreen = 60, 180, 60\nball = Actor("ball_blau")\nball.radius = ball.width / 2\nball.score = 0\n\nloch = Actor("hole")\n\n\ndef kollision_rand(objekt):\n    if objekt.left < 0:\n        objekt.left = 0\n    if objekt.right >= WIDTH:\n        objekt.right = WIDTH - 1\n    if objekt.top < 0:\n        objekt.top = 0\n    if objekt.bottom >= HEIGHT:\n        objekt.bottom = HEIGHT - 1\n\n\ndef setze_ball():\n    ball.x = WIDTH / 2\n    ball.y = HEIGHT / 2\n\n\ndef setze_loch():\n    loch.x = random.randint(0, WIDTH)\n    loch.y = random.randint(0, HEIGHT)\n    dauer = random.randint(3, 7)\n    kollision_rand(loch)\n    clock.schedule_unique(setze_loch, dauer)\n\n\ndef on_mouse_move(pos):\n    d = ball.distance_to(pos)\n    if d < ball.radius:\n        stoss_laenge = ball.radius - d\n        ball.x = ball.x + (ball.x - pos[0]) * stoss_laenge\n        ball.y = ball.y + (ball.y - pos[1]) * stoss_laenge\n    kollision_rand(ball)\n\n\ndef update():\n    if ball.distance_to(loch) < 10:\n        ball.score = ball.score + 1\n        setze_ball()\n        setze_loch()\n\n\ndef draw():\n    screen.fill(green)\n    loch.draw()\n    ball.draw()\n    screen.draw.text("Score: " + str(ball.score), (10, 10), fontsize=60)\n\n\nsetze_ball()\nsetze_loch()\npgzrun.go()';var s=n(30107);const i={sidebar_custom_props:{id:"573133eb-bef6-4a55-b855-0d47f007aaf3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},l="Push to Hole",d={id:"Programmieren-1/PyGameZero/A-examples/push-to-hole/index",title:"Push to Hole",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/A-examples/4-push-to-hole/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/A-examples/4-push-to-hole",slug:"/Programmieren-1/PyGameZero/A-examples/push-to-hole/",permalink:"/26P/Programmieren-1/PyGameZero/A-examples/push-to-hole/",draft:!1,unlisted:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"573133eb-bef6-4a55-b855-0d47f007aaf3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"Tippspiel",permalink:"/26P/Programmieren-1/PyGameZero/A-examples/typing/"},next:{title:"Asteroids",permalink:"/26P/Programmieren-1/PyGameZero/A-examples/asteroids/"}},c={},u=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}];function m(e){const t={div:"div",h1:"h1",h2:"h2",hr:"hr",img:"img",p:"p",...(0,r.a)(),...e.components},{Comment:i,Figure:l}=t;return i||p("Comment",!0),l||p("Figure",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h1,{id:"push-to-hole",children:"Push to Hole"}),(0,a.jsx)(i,{nr:0,type:"heading",pageId:"573133eb-bef6-4a55-b855-0d47f007aaf3",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"beschreibung",children:"Beschreibung"}),(0,a.jsx)(i,{nr:1,type:"heading",pageId:"573133eb-bef6-4a55-b855-0d47f007aaf3",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"Ein Ball muss mit der Maus in ein Loch geschoben werden. Das Loch \xe4ndert alle paar Sekunden seine Position."}),(0,a.jsx)(i,{nr:0,type:"paragraph",pageId:"573133eb-bef6-4a55-b855-0d47f007aaf3",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)(t.img,{src:n(48182).Z+"",width:"800",height:"824"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"grafiken",children:"Grafiken"}),(0,a.jsx)(i,{nr:2,type:"heading",pageId:"573133eb-bef6-4a55-b855-0d47f007aaf3",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)(t.img,{src:n(46329).Z+"",width:"64",height:"64"})}),"\n",(0,a.jsx)(l,{children:(0,a.jsx)(t.img,{src:n(15184).Z+"",width:"64",height:"64"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"programm",children:"Programm"}),(0,a.jsx)(i,{nr:3,type:"heading",pageId:"573133eb-bef6-4a55-b855-0d47f007aaf3",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(s.Z,{language:"python",children:o})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47271:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);const a="noLoginAlert_HRfh";var r=n(33692),o=n(46670),s=n(21314),i=n(85893);const l=(0,o.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"\u26a0\ufe0f Nicht Eingeloggt"})," Speichern nur mit GBSL-Login m\xf6glich. ",(0,i.jsx)(r.Z,{to:"/login",children:"Login"})]})))},74322:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(86010);const r="loader_FEpR",o="badge_oWqf",s="overlay_cqDg";var i=n(99603),l=n(59417),d=n(85893);const c=e=>(0,d.jsxs)("div",{className:(0,a.default)(r,e.overlay&&s),children:[(0,d.jsx)(i.G,{icon:l.IJ7,spin:!0}),(0,d.jsx)("span",{className:(0,a.default)("badge",o),children:e.caption||"Laden..."})]})},30107:(e,t,n)=>{n.d(t,{Z:()=>ie});var a=n(67294),r=n(94285),o=n(95665),s=n.n(o),i=n(10412),l=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var c=n(28137),u=n(86010),m=n(46670),h=n(21314),p=n(72389),b=n(85893);const g=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return(0,b.jsx)("pre",{children:(0,b.jsx)("code",{children:t.data.code})})})),y=(0,m.Pi)((e=>{const[t,r]=a.useState();return a.useEffect((()=>{Promise.all([n.e(88982),n.e(64714)]).then(n.bind(n,64714)).then((e=>{r(e)}))}),[]),(0,p.Z)()?t?(0,b.jsx)(t.default,{...e}):(0,b.jsx)("div",{}):(0,b.jsx)(g,{...e})}));var x=n(52616);const f="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",j="spacer_VytD",v="slimStrippedButton__QpN";var A=n(61212);const N=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),B=(e,t)=>{"root"===e.type?e.children.forEach((e=>{B(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${N(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${N(n)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${N(n)}>`),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${N(n)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${N(n)}></circle>`);break;case"text":var s="";o.forEach((e=>{switch(e.type){case"text":s=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${N(n)}>${s}</text>`);break;case"polygon":var i="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push(`<polygon ${N(n)} transform="translate(${l}) rotate(${i})"></polygon>`)}return t},C=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},R=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var s=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let d=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),l.innerHTML=`${i}\r\n${t.outerHTML}`,d=Array.from(t.querySelectorAll("animate")).map(C).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,A.Q)(e);return t&&B(n,t),S(n).join("\n")})(`${i}${s}`,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var c=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),u=URL.createObjectURL(c),m=document.createElement("a");m.href=u,m.download=d>0?`${t}__${(Math.round(10*d)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(m),m.click(),document.body.removeChild(m)};var E=n(99603),I=n(59417),Z=n(61193),k=n.n(Z);const G=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},D=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=(0,h.oR)("documentStore");return(0,b.jsx)(k(),{onStop:G,positionOffset:{x:0,y:"-50%"},children:(0,b.jsxs)("div",{className:f,children:[(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("span",{children:"Output"}),(0,b.jsx)("span",{className:j}),e.controls,(0,b.jsx)("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:v,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:I.NBC})})})]}),(0,b.jsx)("div",{id:x.h5.graphicsResult(t.codeId),className:"brython-graphics-result",children:e.main})]})})})),L=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return(0,b.jsx)(D,{webKey:e.webKey,controls:(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)("button",{"aria-label":"Download Animated SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(x.h5.turtleSvgContainer(t.codeId));e&&R(e,`${t.codeId}`,t.executedScriptSource,!0)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:I.Bxq})})}),(0,b.jsx)("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(x.h5.turtleSvgContainer(t.codeId));e&&R(e,`${t.codeId}`,t.executedScriptSource)},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:I.q7m})})})]})})})),P=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const r=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return(0,b.jsx)("div",{className:c.Z.brythonOut,children:(0,b.jsx)(ie,{metastring:`{${n.join(",")}}`,children:r.join("")})})}));var K=n(93024),T=n(68949);const H=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return(0,b.jsx)("button",{onClick:()=>t.execScript(window.__BRYTHON__),className:(0,u.default)(c.Z.playButton,c.Z.headerButton),title:`Code Ausf\xfchren ${e.webKey} ${t.codeId}`,children:(0,b.jsx)(E.G,{icon:t.executing?K.Bmx:I.zc,spin:t.executing})})})),M=(0,m.Pi)((e=>{let{slim:t,title:n,resettable:r,webKey:o,lang:s,noCompare:i,download:l}=e;const[d,m]=a.useState(!1),p=(0,h.oR)("documentStore").find(o);if(!p)return null;return a.useEffect((()=>{let e;const t=(0,T.U5)((()=>p.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(m(!0),e=setTimeout((()=>{m(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[p]),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.brythonCodeBlockHeader,c.Z.brythonCodeBlockHeader,c.Z.controls),children:[!t&&(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)("div",{className:c.Z.title,children:n}),!p.loaded&&(0,b.jsx)("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden.",children:"Laden"}),p.saveService.isOffline&&(0,b.jsx)("span",{className:(0,u.default)("badge","badge--danger",c.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!",children:"\u26a0\ufe0f Offline"}),(0,b.jsx)("div",{className:c.Z.spacer}),(0,b.jsxs)("span",{style:{minWidth:"1em"},children:["save"===p.saveService.state&&(0,b.jsx)(E.G,{icon:I.UO1,style:{color:"#3578e5"},spin:!0}),d&&(0,b.jsx)(E.G,{icon:I.f8k,style:{color:"var(--ifm-color-success)"}})]}),p.hasEdits&&!p.showRaw&&r&&(0,b.jsx)("button",{onClick:()=>{if(!r)return;if(p.readonly)return void p.setData({code:p.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&p.setData({code:p.rawScript})},className:c.Z.headerButton,title:"\xc4nderungen Verwerfen",children:(0,b.jsx)(E.G,{icon:I.X7o})}),l&&!p.showRaw&&(0,b.jsx)("button",{className:(0,u.default)(c.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([p.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===s?".py":`.${s}`,r=n===s?p.webKey:n,o=r.endsWith(a)?r:`${r}${a}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download",children:(0,b.jsx)(E.G,{icon:I.q7m})}),p.hasEdits&&!i&&(0,b.jsx)("button",{className:(0,u.default)(c.Z.showRawButton,c.Z.headerButton,p.showRaw?c.Z.showRawButtonDisabled:void 0),onClick:(0,T.aD)((()=>p.showRaw=!p.showRaw)),title:p.showRaw?"Mein Code Anzeigen":"Original Anzeigen",children:p.showRaw?(0,b.jsx)(E.G,{icon:I.w49}):(0,b.jsx)(E.G,{icon:I.rxY})})]}),"python"===s&&(0,b.jsx)(H,{webKey:o})]})})),V=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return(0,b.jsx)(D,{webKey:e.webKey,controls:(0,b.jsx)("button",{"aria-label":"Download SVG",type:"button",className:v,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(x.h5.canvasContainer(t.codeId))},children:(0,b.jsx)("span",{"aria-hidden":"true",children:(0,b.jsx)(E.G,{icon:I.q7m})})}),main:(0,b.jsx)("canvas",{id:x.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),U=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore"),n=t.find(e.webKey);return(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(M,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),(0,b.jsx)(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&(0,b.jsxs)("div",{className:(0,u.default)(c.Z.result),children:[t.opendGraphicsModalWebKey===n.webKey&&(0,b.jsxs)(a.Fragment,{children:[n.hasTurtleOutput&&(0,b.jsx)(L,{webKey:e.webKey}),n.hasCanvasOutput&&(0,b.jsx)(V,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&(0,b.jsx)(D,{webKey:e.webKey})]}),(0,b.jsx)(P,{webKey:e.webKey}),(0,b.jsx)("div",{id:x.h5.outputDiv(n.codeId)})]})]})})),W=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),n=a.useCallback((e=>{if(e.detail){const n=e.detail;switch(n.type){case"start":t.clearLogMessages(),t.setExecuting(!0);break;case"done":t.setExecuting(!1);break;default:t.addLogMessage(n)}}}),[t]),r=((e,t)=>{const n=a.useRef(null);return a.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(x.jS,n)}),(e=>{e.removeEventListener(x.jS,n)}));return(0,b.jsx)("div",{id:x.h5.communicator(t.codeId),ref:r})}));var z=n(47271),F=n(74322),_=n(4817),O=n.n(_),Y=n(14965),J=n(84538);const q=e=>{if(e)return(0,b.jsx)("span",{dangerouslySetInnerHTML:{__html:Y.p1.highlight(e,Y.p1.languages.python,"python")}})},Q=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore"),n=(0,h.oR)("userStore"),r=t.find(e.webKey),[o,s]=a.useState(1),[i,l]=a.useState(!1);return a.useEffect((()=>(0,T.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(s(1),i&&t.find(e.webKey)?.loadVersions())}))),[]),r.versioned?(0,b.jsx)("div",{className:(0,u.default)(c.Z.codeHistory),children:(0,b.jsxs)("details",{open:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||r.loadVersions(),l(!i)},className:(0,u.default)("alert alert--info",c.Z.historyDetails),children:[(0,b.jsxs)("summary",{children:[(0,b.jsx)("span",{className:"badge badge--secondary",children:r.versionsLoaded?`${r.versions.length} Versions`:"Load Versions"}),(0,b.jsx)(E.G,{className:(0,u.default)(c.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===r.versionsLoaded,icon:I.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),r.loadVersions()}})]}),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,b.jsxs)("div",{className:(0,u.default)(c.Z.versionControl),children:[(0,b.jsx)(J.Z,{value:o,onChange:e=>{s(e)},min:1,max:r.versions.length-1,dots:r.versions.length<50}),(0,b.jsxs)("span",{className:"badge badge--primary",children:["V",o]})]}),(0,b.jsx)("div",{className:(0,u.default)(c.Z.diffViewer),children:r.versions.length>1&&(0,b.jsx)(O(),{leftTitle:r.versions[o-1].version,rightTitle:(0,b.jsxs)("div",{children:[r.versions[o].version,r.versions[o].pasted&&n.current?.admin&&(0,b.jsx)("span",{style:{float:"right"},className:"badge badge--danger",children:"Pasted"})]}),splitView:!0,oldValue:r.versions[o-1].data.code,newValue:r.versions[o].data.code,renderContent:q})})]})]})}):null})),X=(0,m.Pi)((e=>{const t=(0,h.oR)("documentStore");(0,h.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),r=(0,p.Z)();return a.useEffect((()=>{n&&n.precode!==e.precode&&(0,T.z)((()=>{n.precode=e.precode}))}),[n]),r?n?(0,b.jsxs)("div",{className:(0,u.default)(c.Z.wrapper,"notranslate"),children:[!e.slim&&(0,b.jsx)(z.Z,{}),(0,b.jsxs)("div",{className:(0,u.default)(c.Z.playgroundContainer,e.slim?c.Z.containerSlim:c.Z.containerBig,"live_py"),children:["python"===e.lang&&(0,b.jsx)(W,{webKey:e.webKey}),(0,b.jsx)(U,{...e}),!e.noHistory&&(0,b.jsx)(Q,{webKey:e.webKey})]})]}):(0,b.jsx)(F.Z,{}):(0,b.jsx)("div",{children:"SSR"})}));var $=n(25934),ee=n(54616);const te={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function ne(e){return(0,b.jsx)("div",{className:te.playgroundWrapper,children:(0,b.jsx)("div",{className:te.playgroundContainer,children:(0,b.jsx)(ee.Z,{...e})})})}var ae=n(38985);const re=e=>(e?.metastring||"").replace(/\s*=\s*/g,"=").split(/\s+/).map((e=>e.trim().split("="))).reduce(((e,t)=>{let[n,a]=t;const r="true"===a||"false"!==a&&(Number.isNaN(Number(a))?a||!0:Number(a));return e[n]=r,e}),{});const oe={},se=(e,t)=>{const n=function(){try{return(0,l.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();oe[n]||(oe[n]={});const a=d(t);oe[n][a]||(oe[n][a]=Object.keys(oe[n]).length+1);return e?(0,l.Vx)(e):`${oe[n][a]}`};function ie(e){const t=re(e);if(t.reference)return(0,b.jsx)(s(),{...e});const n=(e.className||"").match(/language-(?<lang>\w*)/);let o=n?.groups?.lang?.toLocaleLowerCase()??"";if("py"===o&&(o="python"),t.live_jsx)return(0,b.jsx)(ne,{scope:ae.Z,...e});if(t.live_py&&i.Z.canUseDOM){if(!t.id&&!t.slim)return(0,b.jsx)(r.default,{...e});const n=e.title||t.title,s=(e.children||"").replace(/\s*\n$/,""),i=s.match(/\n###\s*PRE.*?\n/);let d="",c=s;i&&(d=s.slice(0,i.index||0),c=s.slice((i.index||0)+i[0].length));const u=se(n,c),[m]=a.useState(t.id||(0,$.Z)());return(0,b.jsx)(X,{...e,...t,maxLines:t.maxLines&&Number.parseInt(t.maxLines,10),webKey:m,code:c,codeId:u,readonly:!!t.readonly,lang:o,resettable:!t.persist,download:!t.versioned&&!t.noDownload,slim:!!t.slim,precode:d,showLineNumbers:!(t.slim&&!/\n/.test(c)),versioned:!!t.versioned,noHistory:!!t.noHistory,noCompare:!!t.noCompare,title:(0,l.Vj)(n)||o})}return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(r.default,{...e})})}},28137:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},46329:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},15184:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAq8wAAKvMBGOVqiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANSSURBVHic5dvNb1RVHMbxz9wibUFAMApBTUxarOAfAJHAihUbjAmw819wISTqwrAigbjRnSYmShemUEJcC9EEwkY2bkQTCqEJb6kaanlpWgkuzkymbWacl957z5253+RJM+ksnufcc+fe8zu/U5E9b2Nv9e8oRvASXsSG6nfm8BgPMYUb+ANX8Rue5+AzNdbiEL7HA8H8avQnJnEYwznm6Jg38SX+tvrQzTSLr/FWPpHaYxTjWJRd8JV6hnPYlUO+pgzjBJ7KL/hKLeIL9d+S3Ngj/FjFCr5S09ifaeIqFRzDQo7hOpkNn1Q9ZsIgJgoQtJXOYyjt8BtxqQDh2tVPVc+phb9WgFCd6loagzCot658o5nQ9e1Q0Rv3fCtNIulmAI4XwHxa+rjT8LsV81HXrRaxr93ww4r1kpOWpoUV6DIGGgzAZ3iv3dHqITZhDS7+35dGxX23z1oLWiygxgtgMmtNNAv/hv764Wumfy2pJyx9Ph7HC81Gp48YwEe1D7WV01rcxcsxHEXgH2zD09oMOKg84QlrhIPUb4Gj8bxE4zDhFqjgPl6Naid/ZrA1wZjyhYdXMJYImxZlZW8i7NiUlbFEeP0tK6OJsFdXVkYSbIntIiKbE6yP7SIi6yvCAqgMa4BGLHRVLOwnEjyJbSIijxI8iu0iIo8ToaGhrPyV4GZsFxGZSoQSeFmZSvB7bBcRuZ4IrWhl5UqtIDKjXCUxuIftiVAq/jmulyj8SL0m2HSzoI+ZoF4WHxLqgpui2cmXGbyGxdoMmMfZeH5y54ywZb6MEWHbKPbWVdaaF64+lm+NTeFCu0PYw3yHO83++Y7+3iCdw+utRuh0AYxmpWOtwhPaSKYLYDZt/aqDytc++ba/Z6057Gw3fI1PC2A8LX3QaXjCE+J8AcyvVp93E77GkNBuGjtEtxqXQvt8rzZL/yDFcv9GvTUTvhV6AlNlUGg8jh2ulU7J8NRIRTiWUsRH5CyOZBV8JfsV62XpF+zINHED1gnH5ua7NJ2GHuJDjXuec2OXUF15Jr/gT4RTqttyyNc2O/CVcFWyCn4XJxW8qWsI7wuzIo3D07fxDQ7IYKpn9rhYwk68KzRjjagfn99Q1XNhg3ZWmD03qrqOy7iVpbn/AJcv+BtUCoBoAAAAAElFTkSuQmCC"},48182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-push-to-hole-8803abf422bc75c522bb3876e3bc1c81.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);