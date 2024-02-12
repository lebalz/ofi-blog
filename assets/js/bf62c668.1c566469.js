"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[84362],{41904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(85893),s=n(11151);const r='import math\nimport pgzrun\nimport random\n\nTITLE = "Asteroids"\nWIDTH = 1600\nHEIGHT = 1200\n\nACCELERATION = 0.2\nROTATION = 3\nSHOT_SPEED = 5\nSHOT_COOLDOWN = 0.2\nSHOT_DAMAGE = 10\nSHOT_MAX_AGE = 3\n\n\nbackground = Actor("weltraum")\nship = Actor("raumschiff")\nthrust = Actor("raumschiff2")\nthrust.on = False\nasteroids = []\nshots = []\n\n\ndef add_asteroid(parent=None):\n    if parent:\n        category = parent.category - 1\n    else:\n        category = 3\n    asteroid = Actor("asteroid-" + str(category))\n    if parent:\n        asteroid.x = parent.x\n        asteroid.y = parent.y\n    else:\n        asteroid.x = random.randint(0, WIDTH)\n        asteroid.y = random.randint(0, HEIGHT)\n    asteroid.vx = 0\n    asteroid.vy = 0\n    asteroid.category = category\n    asteroid.stability = 30 * category\n    acc = random.randint(1, 2)\n    dir = random.randint(0, 360)\n    accelerate(asteroid, acc, dir)\n    asteroids.append(asteroid)\n\n\ndef enable_shooting():\n    ship.can_shoot = True\n\n\ndef add_shot():\n    shot = Actor("laser")\n    shot.x = ship.x\n    shot.y = ship.y\n    shot.vx = 0\n    shot.vy = 0\n    shot.age = 0\n    shot.angle = ship.angle\n    accelerate(shot, SHOT_SPEED, shot.angle)\n    ship.can_shoot = False\n    clock.schedule_unique(enable_shooting, SHOT_COOLDOWN)\n    shots.append(shot)\n\n\ndef accelerate(actor, acc, dir):\n    a = math.radians(dir)\n    actor.vx = actor.vx + math.cos(a) * acc\n    actor.vy = actor.vy - math.sin(a) * acc\n\n\ndef move(actor):\n    actor.x = actor.x + actor.vx\n    actor.y = actor.y + actor.vy\n    if actor.x > WIDTH:\n        actor.x = 0\n    if actor.x < 0:\n        actor.x = WIDTH\n    if actor.y > HEIGHT:\n        actor.y = 0\n    if actor.y < 0:\n        actor.y = HEIGHT\n\n\ndef reset_game():\n    ship.x = WIDTH / 2\n    ship.y = HEIGHT / 2\n    ship.vx = 0\n    ship.vy = 0\n    ship.angle = 0\n    ship.speed = 0\n    ship.alive = True\n    ship.can_shoot = True\n    asteroids.clear()\n    for i in range(1, 3):\n        add_asteroid()\n\n\ndef update_asteroid(asteroid):\n    move(asteroid)\n    i = asteroid.collidelist(shots)\n    if i != -1:\n        del shots[i]\n        asteroid.stability = asteroid.stability - SHOT_DAMAGE\n    if asteroid.stability <= 0:\n        asteroids.remove(asteroid)\n        if asteroid.category > 1:\n            add_asteroid(asteroid)\n            add_asteroid(asteroid)\n\n\ndef update_shot(shot, dt):\n    move(shot)\n    shot.age = shot.age + dt\n    if shot.age > SHOT_MAX_AGE:\n        shots.remove(shot)\n\n\ndef update(dt):\n    thrust.on = keyboard.up\n    if keyboard.up:\n        accelerate(ship, ACCELERATION, ship.angle)\n    if keyboard.left:\n        ship.angle = ship.angle + ROTATION\n    if keyboard.right:\n        ship.angle = ship.angle - ROTATION\n    if keyboard.space and ship.can_shoot:\n        add_shot()\n    if keyboard.space and not ship.alive:\n        reset_game()\n    move(ship)\n    if ship.collidelist(asteroids) != -1:\n        ship.alive = False\n        ship.can_shoot = False\n    for asteroid in asteroids:\n        update_asteroid(asteroid)\n    for shot in shots:\n        update_shot(shot, dt)\n\n\ndef draw():\n    background.draw()\n    for asteroid in asteroids:\n        asteroid.draw()\n    for shot in shots:\n        shot.draw()\n    if ship.alive:\n        if thrust.on:\n            thrust.x = ship.x\n            thrust.y = ship.y\n            thrust.angle = ship.angle\n            thrust.draw()\n        ship.draw()\n    else:\n        screen.draw.text("GAME OVER", center=(WIDTH / 2, HEIGHT / 2), fontsize=100)\n        screen.draw.text(\n            "Press SPACE to start", center=(WIDTH / 2, HEIGHT / 2 + 60), fontsize=30\n        )\n\n\nreset_game()\npgzrun.go()\n';var o=n(30107);const i={sidebar_custom_props:{id:"ccbea56e-16af-4567-b6e2-10a1d90db44b",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},d="Asteroids",c={id:"Programmieren-1/PyGameZero/A-examples/asteroids/index",title:"Asteroids",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/A-examples/5-asteroids/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/A-examples/5-asteroids",slug:"/Programmieren-1/PyGameZero/A-examples/asteroids/",permalink:"/26P/Programmieren-1/PyGameZero/A-examples/asteroids/",draft:!1,unlisted:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"ccbea56e-16af-4567-b6e2-10a1d90db44b",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"Push to Hole",permalink:"/26P/Programmieren-1/PyGameZero/A-examples/push-to-hole/"},next:{title:"Weihnachtskarten",permalink:"/26P/Programmieren-1/weihnachten"}},l={},h=[{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}];function p(e){const t={a:"a",div:"div",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Comment:i,Figure:d}=t;return i||m("Comment",!0),d||m("Figure",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h1,{id:"asteroids",children:"Asteroids"}),(0,a.jsx)(i,{nr:0,type:"heading",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"grafiken",children:"Grafiken"}),(0,a.jsx)(i,{nr:1,type:"heading",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(78369).Z+"",width:"49",height:"41"})}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(85535).Z+"",width:"100",height:"83"})}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(27188).Z+"",width:"199",height:"165"})}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(2435).Z+"",width:"36",height:"20"})}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(22048).Z+"",width:"80",height:"87"})}),"\n",(0,a.jsx)(d,{children:(0,a.jsx)(t.img,{src:n(10594).Z+"",width:"190",height:"87"})}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.p,{children:"Quellen:"}),(0,a.jsx)(i,{nr:0,type:"paragraph",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Asteroid: ",(0,a.jsx)(t.a,{href:"https://opengameart.org/content/asteroid-tileset-01",children:"OhjiroChan, OpenGameArt"}),", Lizenz: CC0"]}),(0,a.jsx)(i,{nr:1,type:"paragraph",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Spaceship: ",(0,a.jsx)(t.a,{href:"https://opengameart.org/content/some-top-down-spaceships",children:"Rawdanitsu, OpenGameArt"}),", Lizenz: CC0"]}),(0,a.jsx)(i,{nr:2,type:"paragraph",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsxs)(t.p,{children:["Laser and Thrust: ",(0,a.jsx)(t.a,{href:"https://opengameart.org/content/lasers-and-beams",children:"Rawdanitsu, OpenGameArt"}),", Lizenz: CC0"]}),(0,a.jsx)(i,{nr:3,type:"paragraph",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.div,{className:"commentable",children:[(0,a.jsx)(t.h2,{id:"programm",children:"Programm"}),(0,a.jsx)(i,{nr:2,type:"heading",pageId:"ccbea56e-16af-4567-b6e2-10a1d90db44b",children:(0,a.jsx)(t.p,{children:"."})})]}),"\n",(0,a.jsx)(o.Z,{language:"python",children:r})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},47271:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);const a="noLoginAlert_HRfh";var s=n(33692),r=n(46670),o=n(21314),i=n(85893);const d=(0,r.Pi)((()=>(0,o.oR)("msalStore").loggedIn?null:(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"\u26a0\ufe0f Nicht Eingeloggt"})," Speichern nur mit GBSL-Login m\xf6glich. ",(0,i.jsx)(s.Z,{to:"/login",children:"Login"})]})))},74322:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var a=n(86010);const s="loader_FEpR",r="badge_oWqf",o="overlay_cqDg";var i=n(99603),d=n(59417),c=n(85893);const l=e=>(0,c.jsxs)("div",{className:(0,a.default)(s,e.overlay&&o),children:[(0,c.jsx)(i.G,{icon:d.IJ7,spin:!0}),(0,c.jsx)("span",{className:(0,a.default)("badge",r),children:e.caption||"Laden..."})]})},30107:(e,t,n)=>{n.d(t,{Z:()=>ie});var a=n(67294),s=n(94285),r=n(95665),o=n.n(r),i=n(10412),d=n(46858);const c=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let s,r=0;r<e.length;r++)s=e.charCodeAt(r),n=Math.imul(n^s,2654435761),a=Math.imul(a^s,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var l=n(28137),h=n(86010),p=n(46670),u=n(21314),m=n(72389),g=n(85893);const b=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)("pre",{children:(0,g.jsx)("code",{children:t.data.code})})})),y=(0,p.Pi)((e=>{const[t,s]=a.useState();return a.useEffect((()=>{Promise.all([n.e(88982),n.e(64714)]).then(n.bind(n,64714)).then((e=>{s(e)}))}),[]),(0,m.Z)()?t?(0,g.jsx)(t.default,{...e}):(0,g.jsx)("div",{}):(0,g.jsx)(b,{...e})}));var f=n(52616);const x="brythonGraphicsResult_Zcg1",v="brythonGraphicsResultHead_Te8f",w="spacer_VytD",j="slimStrippedButton__QpN";var A=n(61212);const N=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),C=(e,t)=>{"root"===e.type?e.children.forEach((e=>{C(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},_=e=>{const t=[],{properties:n,tagName:a,type:s,children:r}=e;switch("root"===s&&r.forEach((e=>{t.push(..._(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${N(n)}>`),r.forEach((e=>{t.push(..._(e))})),t.push("</svg>");break;case"rect":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${N(n)}></rect>`);break;case"g":if(0===(r||[]).length)return t;t.push(`<g ${N(n)}>`),r.forEach((e=>{t.push(..._(e))})),t.push("</g>");break;case"line":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${N(n)}></line>`);break;case"circle":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${N(n)}></circle>`);break;case"text":var o="";r.forEach((e=>{switch(e.type){case"text":o=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${N(n)}>${o}</text>`);break;case"polygon":var i="0,0,0",d="0,0";r.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(d=e.properties.to)}})),t.push(`<polygon ${N(n)} transform="translate(${d}) rotate(${i})"></polygon>`)}return t},S=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},E=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const s=e.getBBox(),r={viewBox:`${s.x-5},${s.y-5},${s.width+10},${s.height+10}`,width:s.width+10,height:s.height+10};var o=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const d=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",`${r.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${r.width}`),e.setAttribute("to",`${r.width}`)})),t.setAttribute("viewBox",r.viewBox),t.setAttribute("height",`${r.height}`),t.setAttribute("width",`${r.width}`),d.innerHTML=`${i}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(S).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,A.Q)(e);return t&&C(n,t),_(n).join("\n")})(`${i}${o}`,r);d.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=d.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var l=new Blob([d.innerHTML],{type:"image/svg+xml;charset=utf-8"}),h=URL.createObjectURL(l),p=document.createElement("a");p.href=h,p.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var T=n(99603),I=n(59417),Z=n(61193),k=n.n(Z);const R=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},O=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),n=(0,u.oR)("documentStore");return(0,g.jsx)(k(),{onStop:R,positionOffset:{x:0,y:"-50%"},children:(0,g.jsxs)("div",{className:x,children:[(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("span",{children:"Output"}),(0,g.jsx)("span",{className:w}),e.controls,(0,g.jsx)("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:j,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(T.G,{icon:I.NBC})})})]}),(0,g.jsx)("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result",children:e.main})]})})})),B=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)(O,{webKey:e.webKey,controls:(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("button",{"aria-label":"Download Animated SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&E(e,`${t.codeId}`,t.executedScriptSource,!0)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(T.G,{icon:I.Bxq})})}),(0,g.jsx)("button",{"aria-label":"Download SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&E(e,`${t.codeId}`,t.executedScriptSource)},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(T.G,{icon:I.q7m})})})]})})})),H=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const s=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(`${a}-${a+t}`),a+=t,e.output}));return(0,g.jsx)("div",{className:l.Z.brythonOut,children:(0,g.jsx)(ie,{metastring:`{${n.join(",")}}`,children:s.join("")})})}));var L=n(93024),D=n(68949);const K=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)("button",{onClick:()=>t.execScript(window.__BRYTHON__),className:(0,h.default)(l.Z.playButton,l.Z.headerButton),title:`Code Ausf\xfchren ${e.webKey} ${t.codeId}`,children:(0,g.jsx)(T.G,{icon:t.executing?L.Bmx:I.zc,spin:t.executing})})})),G=(0,p.Pi)((e=>{let{slim:t,title:n,resettable:s,webKey:r,lang:o,noCompare:i,download:d}=e;const[c,p]=a.useState(!1),m=(0,u.oR)("documentStore").find(r);if(!m)return null;return a.useEffect((()=>{let e;const t=(0,D.U5)((()=>m.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(p(!0),e=setTimeout((()=>{p(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[m]),(0,g.jsxs)("div",{className:(0,h.default)(l.Z.brythonCodeBlockHeader,l.Z.brythonCodeBlockHeader,l.Z.controls),children:[!t&&(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("div",{className:l.Z.title,children:n}),!m.loaded&&(0,g.jsx)("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden.",children:"Laden"}),m.saveService.isOffline&&(0,g.jsx)("span",{className:(0,h.default)("badge","badge--danger",l.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!",children:"\u26a0\ufe0f Offline"}),(0,g.jsx)("div",{className:l.Z.spacer}),(0,g.jsxs)("span",{style:{minWidth:"1em"},children:["save"===m.saveService.state&&(0,g.jsx)(T.G,{icon:I.UO1,style:{color:"#3578e5"},spin:!0}),c&&(0,g.jsx)(T.G,{icon:I.f8k,style:{color:"var(--ifm-color-success)"}})]}),m.hasEdits&&!m.showRaw&&s&&(0,g.jsx)("button",{onClick:()=>{if(!s)return;if(m.readonly)return void m.setData({code:m.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&m.setData({code:m.rawScript})},className:l.Z.headerButton,title:"\xc4nderungen Verwerfen",children:(0,g.jsx)(T.G,{icon:I.X7o})}),d&&!m.showRaw&&(0,g.jsx)("button",{className:(0,h.default)(l.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([m.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===o?".py":`.${o}`,s=n===o?m.webKey:n,r=s.endsWith(a)?s:`${s}${a}`;e.download=r,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download",children:(0,g.jsx)(T.G,{icon:I.q7m})}),m.hasEdits&&!i&&(0,g.jsx)("button",{className:(0,h.default)(l.Z.showRawButton,l.Z.headerButton,m.showRaw?l.Z.showRawButtonDisabled:void 0),onClick:(0,D.aD)((()=>m.showRaw=!m.showRaw)),title:m.showRaw?"Mein Code Anzeigen":"Original Anzeigen",children:m.showRaw?(0,g.jsx)(T.G,{icon:I.w49}):(0,g.jsx)(T.G,{icon:I.rxY})})]}),"python"===o&&(0,g.jsx)(K,{webKey:r})]})})),P=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return(0,g.jsx)(O,{webKey:e.webKey,controls:(0,g.jsx)("button",{"aria-label":"Download SVG",type:"button",className:j,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=`${e}.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(f.h5.canvasContainer(t.codeId))},children:(0,g.jsx)("span",{"aria-hidden":"true",children:(0,g.jsx)(T.G,{icon:I.q7m})})}),main:(0,g.jsx)("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),$=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore"),n=t.find(e.webKey);return(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(G,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),(0,g.jsx)(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&(0,g.jsxs)("div",{className:(0,h.default)(l.Z.result),children:[t.opendGraphicsModalWebKey===n.webKey&&(0,g.jsxs)(a.Fragment,{children:[n.hasTurtleOutput&&(0,g.jsx)(B,{webKey:e.webKey}),n.hasCanvasOutput&&(0,g.jsx)(P,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&(0,g.jsx)(O,{webKey:e.webKey})]}),(0,g.jsx)(H,{webKey:e.webKey}),(0,g.jsx)("div",{id:f.h5.outputDiv(n.codeId)})]})]})})),M=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),n=a.useCallback((e=>{if(e.detail){const n=e.detail;switch(n.type){case"start":t.clearLogMessages(),t.setExecuting(!0);break;case"done":t.setExecuting(!1);break;default:t.addLogMessage(n)}}}),[t]),s=((e,t)=>{const n=a.useRef(null);return a.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(f.jS,n)}),(e=>{e.removeEventListener(f.jS,n)}));return(0,g.jsx)("div",{id:f.h5.communicator(t.codeId),ref:s})}));var W=n(47271),z=n(74322),V=n(4817),F=n.n(V),U=n(14965),J=n(84538);const Q=e=>{if(e)return(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:U.p1.highlight(e,U.p1.languages.python,"python")}})},q=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore"),n=(0,u.oR)("userStore"),s=t.find(e.webKey),[r,o]=a.useState(1),[i,d]=a.useState(!1);return a.useEffect((()=>(0,D.U5)((()=>t.find(e.webKey)?.id),(n=>{n&&n>0&&(o(1),i&&t.find(e.webKey)?.loadVersions())}))),[]),s.versioned?(0,g.jsx)("div",{className:(0,h.default)(l.Z.codeHistory),children:(0,g.jsxs)("details",{open:i,onClick:e=>{e.preventDefault(),e.stopPropagation(),i||s.loadVersions(),d(!i)},className:(0,h.default)("alert alert--info",l.Z.historyDetails),children:[(0,g.jsxs)("summary",{children:[(0,g.jsx)("span",{className:"badge badge--secondary",children:s.versionsLoaded?`${s.versions.length} Versions`:"Load Versions"}),(0,g.jsx)(T.G,{className:(0,h.default)(l.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===s.versionsLoaded,icon:I.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),s.loadVersions()}})]}),(0,g.jsxs)("div",{className:(0,h.default)(l.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[(0,g.jsxs)("div",{className:(0,h.default)(l.Z.versionControl),children:[(0,g.jsx)(J.Z,{value:r,onChange:e=>{o(e)},min:1,max:s.versions.length-1,dots:s.versions.length<50}),(0,g.jsxs)("span",{className:"badge badge--primary",children:["V",r]})]}),(0,g.jsx)("div",{className:(0,h.default)(l.Z.diffViewer),children:s.versions.length>1&&(0,g.jsx)(F(),{leftTitle:s.versions[r-1].version,rightTitle:(0,g.jsxs)("div",{children:[s.versions[r].version,s.versions[r].pasted&&n.current?.admin&&(0,g.jsx)("span",{style:{float:"right"},className:"badge badge--danger",children:"Pasted"})]}),splitView:!0,oldValue:s.versions[r-1].data.code,newValue:s.versions[r].data.code,renderContent:Q})})]})]})}):null})),Y=(0,p.Pi)((e=>{const t=(0,u.oR)("documentStore");(0,u.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),s=(0,m.Z)();return a.useEffect((()=>{n&&n.precode!==e.precode&&(0,D.z)((()=>{n.precode=e.precode}))}),[n]),s?n?(0,g.jsxs)("div",{className:(0,h.default)(l.Z.wrapper,"notranslate"),children:[!e.slim&&(0,g.jsx)(W.Z,{}),(0,g.jsxs)("div",{className:(0,h.default)(l.Z.playgroundContainer,e.slim?l.Z.containerSlim:l.Z.containerBig,"live_py"),children:["python"===e.lang&&(0,g.jsx)(M,{webKey:e.webKey}),(0,g.jsx)($,{...e}),!e.noHistory&&(0,g.jsx)(q,{webKey:e.webKey})]})]}):(0,g.jsx)(z.Z,{}):(0,g.jsx)("div",{children:"SSR"})}));var X=n(25934),ee=n(54616);const te={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function ne(e){return(0,g.jsx)("div",{className:te.playgroundWrapper,children:(0,g.jsx)("div",{className:te.playgroundContainer,children:(0,g.jsx)(ee.Z,{...e})})})}var ae=n(38985);const se=e=>(e?.metastring||"").replace(/\s*=\s*/g,"=").split(/\s+/).map((e=>e.trim().split("="))).reduce(((e,t)=>{let[n,a]=t;const s="true"===a||"false"!==a&&(Number.isNaN(Number(a))?a||!0:Number(a));return e[n]=s,e}),{});const re={},oe=(e,t)=>{const n=function(){try{return(0,d.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();re[n]||(re[n]={});const a=c(t);re[n][a]||(re[n][a]=Object.keys(re[n]).length+1);return e?(0,d.Vx)(e):`${re[n][a]}`};function ie(e){const t=se(e);if(t.reference)return(0,g.jsx)(o(),{...e});const n=(e.className||"").match(/language-(?<lang>\w*)/);let r=n?.groups?.lang?.toLocaleLowerCase()??"";if("py"===r&&(r="python"),t.live_jsx)return(0,g.jsx)(ne,{scope:ae.Z,...e});if(t.live_py&&i.Z.canUseDOM){if(!t.id&&!t.slim)return(0,g.jsx)(s.default,{...e});const n=e.title||t.title,o=(e.children||"").replace(/\s*\n$/,""),i=o.match(/\n###\s*PRE.*?\n/);let c="",l=o;i&&(c=o.slice(0,i.index||0),l=o.slice((i.index||0)+i[0].length));const h=oe(n,l),[p]=a.useState(t.id||(0,X.Z)());return(0,g.jsx)(Y,{...e,...t,maxLines:t.maxLines&&Number.parseInt(t.maxLines,10),webKey:p,code:l,codeId:h,readonly:!!t.readonly,lang:r,resettable:!t.persist,download:!t.versioned&&!t.noDownload,slim:!!t.slim,precode:c,showLineNumbers:!(t.slim&&!/\n/.test(l)),versioned:!!t.versioned,noHistory:!!t.noHistory,noCompare:!!t.noCompare,title:(0,d.Vj)(n)||r})}return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s.default,{...e})})}},28137:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},78369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/asteroid-1-85b0a3aa9ecaceb774c2d252feb68e34.png"},85535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/asteroid-2-3d0d0f815ec06fd4bd1c5fbc5a99dfed.png"},27188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/asteroid-3-366f778127ee95283350516b2a3a8a32.png"},2435:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAYAAADlep81AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAArJJREFUSInNls1O20AQgD97nR/iJBUQFWgr2kupOPaKxI1HQhx4Ad6Ct8hzcEDqpYeKHlCBQktDfgyx3YNn8GTj0KoXOtJo7fVm99v5TZDzf0n43AC+RE98C4HAqP+OGX2x87nRzBv1+Umg0KiTNVbt9yooHyYTTYEH0aloKuseoXwgC1EDGkBTtAHUZT6SdYtgAgOjIPfABBjJmMjc1EJF3mahzDWAJaANdETbQEvg6rLOuq8KaCowE2AIDIBb4BdwJ2tn3FYFVJNDO8Ay0ANWgRXgBRALbI0yruwe+p4JzFgO/wlcy2UUOKV030KgSIDaArQObMjYM1ANZt1mx0AOSQzMlVxELacuTOylqmJILdQWq6wDb6nXNwmCdfJ8FeiQ50uAIwhC8hyCgJkxDFPieML29ojl5VsuLs45PY2YTNR9d6JuEZBayIlZW0CHKFphb+89h4cfWVuLcc6R5+XhaQphCFlWjKDvjlYrptuNiaIeZ2ev2N8f0++fy4U1OcJFQNbcZbbFcZODgw/s7nb5dwnY2mqxs9Oj39eSUZWhuQ9ki1WRIcPhmKOjT6TpEhsbMeDIsvmCqFaC0m3OwXSaMRgknJxccnz8mSJuNN21QOrZBKaXOYpA1WB+CbwG3gGbwBuKeFoBuhRmd1S3H82wIWVAnwNfgS8yfgO+U5SAkayfc5laZkIRcDdyMDL3Q2A0y2w7UVEra/0ZyO+uBOJSIIdiqdRYaQZIXWU30gxI5CaXAtOkIiC9vTTtR5Spf0NRi25lXl33JJBaSIvXg2x4TVFHGhQZsshdupcWvYSyUmuqDykKZuJbyMYQlNnl5NC6AKjWPBjfXQoDZR/T9pEYvadssillk50DUqjAHKqN1Kr/N6RK/E6vqhCZ0UepAnr89ge163wQ+1yl+CB/A/Qs8ht29gP0IS7iTgAAAABJRU5ErkJggg=="},22048:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raumschiff-d2833cb6feb435da241d7714ab08c48e.png"},10594:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raumschiff2-9e21d4a457ef3dacd2e0f691763a122d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(67294);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);