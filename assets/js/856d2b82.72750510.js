"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[95411],{56332:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var r=s(85893),i=s(11151);const c={sidebar_custom_props:{id:"4b3fea32-c56f-4c49-9a78-19318215c777"}},a="OpenSCAD",l={id:"IoT-Workshop/printing/OpenScad/index",title:"OpenSCAD",description:"\ud83d\udc49 OpenSCAD herunterladen und installieren.",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/03-printing/01-OpenScad/index.md",sourceDirName:"10-IoT-Workshop/03-printing/01-OpenScad",slug:"/IoT-Workshop/printing/OpenScad/",permalink:"/24ef/IoT-Workshop/printing/OpenScad/",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"4b3fea32-c56f-4c49-9a78-19318215c777"}},sidebar:"sidebar",previous:{title:"3D Drucken",permalink:"/24ef/IoT-Workshop/printing/"},next:{title:"Slicen",permalink:"/24ef/IoT-Workshop/printing/Slicing/"}},d={},t=[{value:"Einf\xfchrung",id:"einf\xfchrung",level:2},{value:"Parameter und Schrift",id:"parameter-und-schrift",level:2},{value:"Sensor-Box",id:"sensor-box",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Comment:c,Details:a,Dl:l,Figure:d,Solution:t,SourceRef:o}=n;return c||p("Comment",!0),a||p("Details",!0),l||p("Dl",!0),d||p("Figure",!0),t||p("Solution",!0),o||p("SourceRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h1,{id:"openscad",children:"OpenSCAD"}),(0,r.jsx)(c,{nr:0,type:"heading",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.openscad.org/",children:"\ud83d\udc49 OpenSCAD"})," herunterladen und installieren."]}),(0,r.jsx)(c,{nr:0,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"einf\xfchrung",children:"Einf\xfchrung"}),(0,r.jsx)(c,{nr:1,type:"heading",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)("video",{style:{maxWidth:"100%"},controls:!0,children:(0,r.jsx)("source",{src:s(93492).Z})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"intro.scad"})})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scad",children:"module baustein() {\n    difference() {\n        union() {\n            cube([3, 1, 1]);\n            translate([1, 1, 0])\n                cube([1, 1, 1]);\n        }\n        translate([1.25,0.25,-0.01])\n            cube([0.5, 0.5, 1.02]);\n    }\n}\ntranslate([2, 2, 0])\n    rotate([90, 0, 0])\n        scale([0.5, 0.5, 1])\n            baustein();\n"})})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Knobelw\xfcrfel",type:"aufgabe",children:[(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(l,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Dateiname"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"EF-Info/docs/IOT-Day/knobelwuerfel.md"})})})]}),(0,r.jsx)(c,{nr:1,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Erstellen Sie ein 3D Modell mit den 7 Elementen eines Knobel-W\xfcrfels. Die Elemente sollen sich nicht ber\xfchren und sollen sich auch nicht gegenseitig \xfcberlappen. Eine W\xfcrfelseite soll dabei nicht gr\xf6sser als ",(0,r.jsx)(n.code,{children:"8"})," Einheiten sein."]}),(0,r.jsx)(c,{nr:2,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),(0,r.jsxs)(d,{children:[(0,r.jsx)(n.img,{src:s(17894).Z+"",width:"1600",height:"1200"}),(0,r.jsxs)("figcaption",{children:[(0,r.jsx)("span",{style:{flexGrow:1}}),(0,r.jsx)(o,{bib:{author:"Analia Gonzalez",source:"https://www.pinterest.ch/pin/345369865196179852",licence:"Unknown",licence_url:"",edited:!1}})]})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Exportieren Sie ein Bild ",(0,r.jsx)("strong",{className:"boxed",children:"Datei > Exportieren > Bild exportieren..."})]}),(0,r.jsx)(c,{nr:3,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["F\xfcgen Sie ein Dokument ",(0,r.jsx)("strong",{className:"boxed",children:"knobelwuerfel.md"})," mit der \xdcberschrift ",(0,r.jsx)(n.code,{children:"Knobelw\xfcrfel"})," zu Ihrem EF-Repository hinzu:"]}),(0,r.jsx)(c,{nr:4,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["\xdcberschrift: ",(0,r.jsx)(n.em,{children:"Knobelw\xfcrfel"})]}),(0,r.jsx)(c,{nr:5,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Das Bild"}),(0,r.jsx)(c,{nr:6,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Codeblock mit dem Modell ",(0,r.jsx)(n.code,{children:"```scad"})]}),(0,r.jsx)(c,{nr:7,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Commit & Push"})}),(0,r.jsx)(c,{nr:8,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,r.jsx)(t,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scad",metastring:"reference",children:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/03-printing/01-OpenScad/assets/magic-cube.scad\n"})})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"parameter-und-schrift",children:"Parameter und Schrift"}),(0,r.jsx)(c,{nr:2,type:"heading",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)("video",{style:{maxWidth:"100%"},controls:!0,children:(0,r.jsx)("source",{src:s(91837).Z})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"simple-box.scad"})})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scad",children:'\nBOX_X = 40;\nBOX_Y = 40;\nBOX_Z = 30;\nBOX_WALL = 1.2;\n\n// Interne Parameter\nBOX_INNER_X = BOX_X - 2*BOX_WALL;\nBOX_INNER_Y = BOX_Y - 2*BOX_WALL;\n\nmodule txt() {\n    translate([BOX_X / 2, 0.25 * BOX_WALL, BOX_Z / 2])\n    rotate([90, 0, 0])\n        linear_extrude(1)\n            text("EF INFO", size=3, halign="center", valign="center");\n}\n\nmodule box() {\n    difference() {\n        cube([BOX_X, BOX_Y, BOX_Z]);\n        translate([BOX_WALL, BOX_WALL, BOX_WALL])\n            cube([BOX_INNER_X , BOX_INNER_Y, BOX_Z]);\n        txt();\n    }\n}\n\nmodule deckel() {\n    union() {\n        cube([BOX_X, BOX_Y, BOX_WALL]);\n        translate([BOX_WALL, BOX_WALL, BOX_WALL])\n            cube([BOX_INNER_X, BOX_INNER_Y, BOX_WALL]);\n    }\n}\n\n\nbox();\ntranslate([BOX_X + 10, 0, 0])\n    deckel();\n'})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"sensor-box",children:"Sensor-Box"}),(0,r.jsx)(c,{nr:3,type:"heading",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Sensor-Box",type:"aufgabe",children:[(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Das Modell ",(0,r.jsx)("strong",{className:"boxed",children:"sensor-box.scad"})," enth\xe4lt das Grundger\xfcst f\xfcr unsere Sensorbox. Untersuchen Sie das Modell und f\xfcgen Sie einen Schriftzug bspw. mit Ihrem Namen hinzu."]}),(0,r.jsx)(c,{nr:9,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]}),(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"sensor-box.scad"})})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scad",metastring:"reference",children:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/03-printing/01-OpenScad/assets/sensor-box.scad\n"})})]}),(0,r.jsx)(n.admonition,{title:"Achtung \xfcberh\xe4ngende Teile",type:"danger",children:(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Achten Sie darauf, dass Sie keine (zus\xe4tzlichen) \xfcberh\xe4ngenden Teile hinzuf\xfcgen."}),(0,r.jsx)(c,{nr:10,type:"paragraph",pageId:"4b3fea32-c56f-4c49-9a78-19318215c777",children:(0,r.jsx)(n.p,{children:"."})})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93492:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/medias/intro-584e4d2759a2a9b00a060fb9d86ed63b.mp4"},91837:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/medias/params-and-text-5337f16310e210345b178af0df3de02a.mp4"},17894:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/knobel-wuerfel-cae3344ae1cf7e6f8481dd15f2951be0.jpg"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(67294);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);