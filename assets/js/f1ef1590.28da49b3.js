"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[15257],{98915:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var i=r(85893),a=r(11151);const s={sidebar_custom_props:{id:"0509a9e7-4000-4709-8cce-3c1a77090a8c"}},c="Random Walk",t={id:"Programmieren-1/random-walk",title:"Random Walk",description:"Die Random-Walk-Theorie wurde zun\xe4chst von der franz\xf6sischen Mathematikerin Louise Bachelier entworfen, die glaubte, dass Aktienkursentwicklungen wie die Schritte eines Betrunkenen seien: unberechenbar.",source:"@site/versioned_docs/version-26e/03-Programmieren-1/04-random-walk.md",sourceDirName:"03-Programmieren-1",slug:"/Programmieren-1/random-walk",permalink:"/26e/Programmieren-1/random-walk",draft:!1,unlisted:!1,tags:[],version:"26e",sidebarPosition:4,frontMatter:{sidebar_custom_props:{id:"0509a9e7-4000-4709-8cce-3c1a77090a8c"}},sidebar:"sidebar",previous:{title:"Gr\xfcfnisch",permalink:"/26e/Programmieren-1/gruefnisch"},next:{title:"Pygame Zero",permalink:"/26e/Programmieren-1/PyGameZero/"}},d={},l=[];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,a.a)(),...e.components},{Answer:s,Comment:c,Figure:t,Hint:d,Solution:l,SourceRef:o}=n;return s||p("Answer",!0),c||p("Comment",!0),t||p("Figure",!0),d||p("Hint",!0),l||p("Solution",!0),o||p("SourceRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h1,{id:"random-walk",children:"Random Walk"}),(0,i.jsx)(c,{nr:0,type:"heading",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Die Random-Walk-Theorie wurde zun\xe4chst von der franz\xf6sischen Mathematikerin Louise Bachelier entworfen, die glaubte, dass Aktienkursentwicklungen wie die Schritte eines Betrunkenen seien: unberechenbar. ",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,i.jsx)(c,{nr:0,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.img,{src:r(62935).Z+"",width:"934",height:"600"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),(0,i.jsx)(o,{bib:{author:"prakhartechviz",source:"https://medium.com/swlh/random-walk-a-comprehensive-illustration-aa13373830d1",licence:"CC0",licence_url:"",edited:!1}})]})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Betrachten wir den vermeintlich zuf\xe4lligen Weg einer Ameise, die jeweils nach einer unbekannten Anzahl Schritten die Richtung wechselt. Wir schauen uns die ersten 20 Richtungswechsel an und \xfcberlegen uns, ob die Ameise von einer runden Tischplatte mit 100 cm Radius herunterfallen w\xfcrde."}),(0,i.jsx)(c,{nr:1,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(n.img,{src:r(50900).Z+"",width:"266",height:"210"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Ameise.py",type:"aufgabe",children:[(0,i.jsx)(s,{type:"state",webKey:"15ab7fbf-1cb8-4614-a1c3-4508dd131d6a"}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Simulieren Sie den zuf\xe4lligen Weg einer Ameise, die ",(0,i.jsx)(n.strong,{children:"20"})," mal die Richtung wechselt."]}),(0,i.jsx)(c,{nr:2,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Folgende Annahmen werden getroffen:"}),(0,i.jsx)(c,{nr:3,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["die Ameise macht mindestens ",(0,i.jsx)(n.strong,{children:"4"}),", aber maximal ",(0,i.jsx)(n.strong,{children:"20"})," Schritte in dieselbe Richtung"]}),(0,i.jsx)(c,{nr:4,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["die Ameise dreht sich jeweils zwischen ",(0,i.jsx)(n.strong,{children:"0"})," und ",(0,i.jsx)(n.strong,{children:"360"})," Grad"]}),(0,i.jsx)(c,{nr:5,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:"title=ameise.py live_py id=9f60410a-dc94-4b45-9142-db25ea604d13",children:"from turtle import *\nfrom random import randint\n\n# Tischplatte zeichnen\npencolor('red')\npenup()\ngoto(0, -100)\npendown()\ncircle(100)\npencolor('black')\n\n# Random walk\n"})}),(0,i.jsxs)(d,{children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Mit ",(0,i.jsx)(n.code,{children:"randint(start, ende)"})," k\xf6nnen Sie einen zuf\xe4lligen Wert im Bereich zwischen ",(0,i.jsx)(n.code,{children:"start"})," und ",(0,i.jsx)(n.code,{children:"ende"})," erzeugen."]}),(0,i.jsx)(c,{nr:6,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:"live_py slim",children:"from random import randint\n\nprint('Zufallszahl [0, 2]', randint(0, 2))\nprint('Zufallszahl [10, 20]', randint(10, 20))\nprint('Zufallszahl [-20, 5]', randint(-20, 5))\n"})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Zusatz 1:"})}),(0,i.jsx)(c,{nr:7,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Simulieren Sie 30 Ameisen - wie viele fallen vom Tisch?"}),(0,i.jsx)(c,{nr:8,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Zusatz 2:"})}),(0,i.jsx)(c,{nr:9,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Mit ",(0,i.jsx)(n.code,{children:"distance(0, 0)"})," kann die Distanz zum Ursprung ausgegeben werden - zeigen Sie jeweils die Distanz zum Ursprung mit an."]}),(0,i.jsx)(c,{nr:10,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsx)(l,{webKey:"1c9975fe-be2e-499f-b907-fb648fb5e3a1",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",metastring:"live_py slim",children:"from turtle import *\nfrom random import randint\n\n# Tischplatte zeichnen\nspeed(0)\ncolor('red')\npenup()\ngoto(0, -100)\npendown()\ncircle(100)\npencolor('black')\n\n# Random walk...\ndef step():\n    winkel = randint(0, 360)\n    step = randint(1, 20)\n    left(winkel)\n    forward(step)\n\nfor versuch in range(30):\n    penup()\n    home()\n    pendown()\n    for i in range(20):\n        step()\n    print(versuch + 1, distance(0, 0) > 100, distance(0, 0))\n"})})})]}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Quelle: ",(0,i.jsx)(n.a,{href:"https://www.ig.com/ch/trading-glossar/random-walk-theory-definition",children:"Gloassar"})]}),(0,i.jsx)(c,{nr:11,type:"paragraph",pageId:"0509a9e7-4000-4709-8cce-3c1a77090a8c",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50900:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/ameise-6ab4d83cb2deca48ba5b3a31ccb87dcd.svg"},62935:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/random-walk-5c3eb560f0f648d216f708414a1fe15f.webp"},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>c});var i=r(67294);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);