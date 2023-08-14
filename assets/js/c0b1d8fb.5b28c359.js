"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6847],{3905:(e,t,M)=>{M.d(t,{Zo:()=>c,kt:()=>d});var a=M(67294);function N(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function i(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,a)}return M}function I(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?i(Object(M),!0).forEach((function(t){N(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):i(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function g(e,t){if(null==e)return{};var M,a,N=function(e,t){if(null==e)return{};var M,a,N={},i=Object.keys(e);for(a=0;a<i.length;a++)M=i[a],t.indexOf(M)>=0||(N[M]=e[M]);return N}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)M=i[a],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(N[M]=e[M])}return N}var n=a.createContext({}),m=function(e){var t=a.useContext(n),M=t;return e&&(M="function"==typeof e?e(t):I(I({},t),e)),M},c=function(e){var t=m(e.components);return a.createElement(n.Provider,{value:t},e.children)},l="mdxType",D={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},r=a.forwardRef((function(e,t){var M=e.components,N=e.mdxType,i=e.originalType,n=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),l=m(M),r=N,d=l["".concat(n,".").concat(r)]||l[r]||D[r]||i;return M?a.createElement(d,I(I({ref:t},c),{},{components:M})):a.createElement(d,I({ref:t},c))}));function d(e,t){var M=arguments,N=t&&t.mdxType;if("string"==typeof e||N){var i=M.length,I=new Array(i);I[0]=r;var g={};for(var n in t)hasOwnProperty.call(t,n)&&(g[n]=t[n]);g.originalType=e,g[l]="string"==typeof e?e:N,I[1]=g;for(var m=2;m<i;m++)I[m]=M[m];return a.createElement.apply(null,I)}return a.createElement.apply(null,M)}r.displayName="MDXCreateElement"},67074:(e,t,M)=>{M.r(t),M.d(t,{assets:()=>n,contentTitle:()=>I,default:()=>j,frontMatter:()=>i,metadata:()=>g,toc:()=>m});var a=M(87462),N=(M(67294),M(3905));const i={sidebar_custom_props:{id:"0809a982-af24-41ce-bda7-6a92ae2eb41c",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},I="Zeichnen",g={unversionedId:"Programmieren-1/PyGameZero/draw/index",id:"version-26e/Programmieren-1/PyGameZero/draw/index",title:"Zeichnen",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/6-draw/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/6-draw",slug:"/Programmieren-1/PyGameZero/draw/",permalink:"/26e/Programmieren-1/PyGameZero/draw/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"0809a982-af24-41ce-bda7-6a92ae2eb41c",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Maus",permalink:"/26e/Programmieren-1/PyGameZero/mouse/"},next:{title:"Aufrufe planen",permalink:"/26e/Programmieren-1/PyGameZero/clock/"}},n={},m=[{value:"Kreise",id:"kreise",level:2},{value:"Rechtecke",id:"rechtecke",level:2},{value:"Linien",id:"linien",level:2},{value:"Text",id:"text",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,N.kt)("div",t)},l=c("Comment"),D=c("Figure"),r={toc:m},d="wrapper";function j(e){let{components:t,...i}=e;return(0,N.kt)(d,(0,a.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("h1",{parentName:"div",id:"zeichnen"},"Zeichnen"),(0,N.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,N.kt)("hr",null),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("h2",{parentName:"div",id:"kreise"},"Kreise"),(0,N.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.circle((x, y), r, farbe)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet eine Kreislinie mit dem Mittelpunkt ",(0,N.kt)("inlineCode",{parentName:"p"},"(x, y)")," und dem Radius ",(0,N.kt)("inlineCode",{parentName:"p"},"r")," in der angegebenen Farbe. ",(0,N.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.filled_circle((x, y), r, farbe)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet einen ausgef\xfcllten Kreis mit dem Mittelpunkt ",(0,N.kt)("inlineCode",{parentName:"p"},"(x, y)")," und dem Radius ",(0,N.kt)("inlineCode",{parentName:"p"},"r")," in der angegebenen Farbe. ",(0,N.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,N.kt)("img",{src:M(20125).Z,width:"737",height:"272"})),(0,N.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("h2",{parentName:"div",id:"rechtecke"},"Rechtecke"),(0,N.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"Rect(x, y, w, h)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"erstellt ein Rechteck-Objekt. Dabei sind ",(0,N.kt)("inlineCode",{parentName:"p"},"x")," und ",(0,N.kt)("inlineCode",{parentName:"p"},"y")," die Koordinaten der linken oberen Ecke, ",(0,N.kt)("inlineCode",{parentName:"p"},"w")," ist die Breite und ",(0,N.kt)("inlineCode",{parentName:"p"},"h")," die H\xf6he des Rechtecks."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.rect(rect, farbe)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet ein Rechteck in der angegebenen Farbe. Dabei ist ",(0,N.kt)("inlineCode",{parentName:"p"},"rect")," ein Rechteck-Objekt, ",(0,N.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.filled_rect(rect, farbe)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet ein ausgef\xfclltes Rechteck in der angegebenen Farbe. Dabei ist ",(0,N.kt)("inlineCode",{parentName:"p"},"rect")," ein Rechteck-Objekt, ",(0,N.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,N.kt)("img",{src:M(68603).Z,width:"737",height:"245"})),(0,N.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("h2",{parentName:"div",id:"linien"},"Linien"),(0,N.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.line((x1, y1), (x2, y2), farbe)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet eine Linie vom Punkt ",(0,N.kt)("inlineCode",{parentName:"p"},"(x1, y1)")," zum Punkt ",(0,N.kt)("inlineCode",{parentName:"p"},"(x2, y2)")," in der angegebenen Farbe. ",(0,N.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("h2",{parentName:"div",id:"text"},"Text"),(0,N.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},"screen.draw.text(text, left=x, top=y, fontsize=, fontname=, color=)\n")),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"zeichnet den Text ",(0,N.kt)("inlineCode",{parentName:"p"},"text")," an der angegebenen Position. Mit ",(0,N.kt)("inlineCode",{parentName:"p"},"fontsize=")," kann die Schriftgr\xf6sse festgelegt werden. Die horizontale Ausrichtung des Texts wird durch ",(0,N.kt)("inlineCode",{parentName:"p"},"left="),", ",(0,N.kt)("inlineCode",{parentName:"p"},"centerx=")," oder ",(0,N.kt)("inlineCode",{parentName:"p"},"right=")," angegeben, die vertikale Ausrichtung durch ",(0,N.kt)("inlineCode",{parentName:"p"},"top="),", ",(0,N.kt)("inlineCode",{parentName:"p"},"centery=")," oder ",(0,N.kt)("inlineCode",{parentName:"p"},"bottom="),":"),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,N.kt)("img",{src:M(94142).Z,width:"737",height:"219"})),(0,N.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"Mit ",(0,N.kt)("inlineCode",{parentName:"p"},"fontname=")," wird der Name einer Schriftart-Datei angegeben, welche im Unterverzeichnis ",(0,N.kt)("strong",{parentName:"p"},"fonts")," vorhanden sein muss. Mit ",(0,N.kt)("inlineCode",{parentName:"p"},"color=(r, g, b)")," wird die Farbe angegeben."),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,N.kt)("div",{className:"commentable"},(0,N.kt)("p",{parentName:"div"},"F\xfcr die Angabe der horizontalen und vertikalen Koordinate muss je einer der obenstehenden Namen verwendet werden. Die folgende Anweisung zeichnet beispielsweise den Text \xabHallo Welt\xbb so, dass sich der Punkt (100, 100) unten und horizontal in der Mitte des Texts befindet:"),(0,N.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-py"},'screen.draw.text("Hallo Welt", centerx=100, bottom=100, color=(255, 0, 0))\n')))}j.isMDXComponent=!0},20125:(e,t,M)=>{M.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTUzcHQiIGhlaWdodD0iMjA0cHQiIHZpZXdCb3g9IjAgMCA1NTMgMjA0IiB2ZXJzaW9uPSIxLjEiPgo8ZGVmcz4KPGc+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtMCI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gMC44NTkzNzUgMyBMIDAuODU5Mzc1IC0xMS45Mzc1IEwgOS4zMjgxMjUgLTExLjkzNzUgTCA5LjMyODEyNSAzIFogTSAxLjgxMjUgMi4wNDY4NzUgTCA4LjM5MDYyNSAyLjA0Njg3NSBMIDguMzkwNjI1IC0xMC45ODQzNzUgTCAxLjgxMjUgLTEwLjk4NDM3NSBaIE0gMS44MTI1IDIuMDQ2ODc1ICIvPgo8L3N5bWJvbD4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0xIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iTSA5LjI1IC05LjI2NTYyNSBMIDUuOTM3NSAtNC44MjgxMjUgTCA5LjU2MjUgMCBMIDcuODEyNSAwIEwgNS4wOTM3NSAtMy43MTg3NSBMIDIuMzkwNjI1IDAgTCAwLjYyNSAwIEwgNC4yNjU2MjUgLTQuODI4MTI1IEwgMC45NTMxMjUgLTkuMjY1NjI1IEwgMi42NDA2MjUgLTkuMjY1NjI1IEwgNS4wOTM3NSAtNS45MDYyNSBMIDcuNTMxMjUgLTkuMjY1NjI1IFogTSA5LjI1IC05LjI2NTYyNSAiLz4KPC9zeW1ib2w+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtMiI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gNy4wOTM3NSAtMi45ODQzNzUgQyA2Ljg0Mzc1IC0yLjMzNTkzOCA2LjUxOTUzMSAtMS40ODgyODEgNi4xMjUgLTAuNDM3NSBDIDUuNTgyMDMxIDEuMDE5NTMxIDUuMjE4NzUgMS45MTAxNTYgNS4wMzEyNSAyLjIzNDM3NSBDIDQuNzY5NTMxIDIuNjYwMTU2IDQuNDQ1MzEyIDIuOTc2NTYyIDQuMDYyNSAzLjE4NzUgQyAzLjY4NzUgMy40MDYyNSAzLjI1IDMuNTE1NjI1IDIuNzUgMy41MTU2MjUgTCAxLjUxNTYyNSAzLjUxNTYyNSBMIDEuNTE1NjI1IDIuMjUgTCAyLjQyMTg3NSAyLjI1IEMgMi44NjcxODggMi4yNSAzLjIxODc1IDIuMTE3MTg4IDMuNDY4NzUgMS44NTkzNzUgQyAzLjcyNjU2MiAxLjU5NzY1NiA0LjA1MDc4MSAwLjkyNTc4MSA0LjQzNzUgLTAuMTU2MjUgTCAwLjg1OTM3NSAtOS4yNjU2MjUgTCAyLjQ2ODc1IC05LjI2NTYyNSBMIDUuMjE4NzUgLTIuMDE1NjI1IEwgNy45MjE4NzUgLTkuMjY1NjI1IEwgOS41MzEyNSAtOS4yNjU2MjUgWiBNIDcuMDkzNzUgLTIuOTg0Mzc1ICIvPgo8L3N5bWJvbD4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0zIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iTSA5LjU0Njg3NSAtNy4zNTkzNzUgQyA5LjIyMjY1NiAtNy42MDkzNzUgOC44OTQ1MzEgLTcuNzg5MDYyIDguNTYyNSAtNy45MDYyNSBDIDguMjI2NTYyIC04LjAxOTUzMSA3Ljg1OTM3NSAtOC4wNzgxMjUgNy40NTMxMjUgLTguMDc4MTI1IEMgNi41MDM5MDYgLTguMDc4MTI1IDUuNzgxMjUgLTcuNzgxMjUgNS4yODEyNSAtNy4xODc1IEMgNC43ODEyNSAtNi41OTM3NSA0LjUzMTI1IC01LjczNDM3NSA0LjUzMTI1IC00LjYwOTM3NSBMIDQuNTMxMjUgMCBMIDMgMCBMIDMgLTkuMjY1NjI1IEwgNC41MzEyNSAtOS4yNjU2MjUgTCA0LjUzMTI1IC03LjQ1MzEyNSBDIDQuNzgxMjUgLTguMTA5Mzc1IDUuMTY0MDYyIC04LjYwOTM3NSA1LjY4NzUgLTguOTUzMTI1IEMgNi4yMTg3NSAtOS4zMDQ2ODggNi44NDM3NSAtOS40ODQzNzUgNy41NjI1IC05LjQ4NDM3NSBDIDcuOTM3NSAtOS40ODQzNzUgOC4yODUxNTYgLTkuNDM3NSA4LjYwOTM3NSAtOS4zNDM3NSBDIDguOTQxNDA2IC05LjI1IDkuMjUzOTA2IC05LjEwMTU2MiA5LjU0Njg3NSAtOC45MDYyNSBaIE0gOS41NDY4NzUgLTcuMzU5Mzc1ICIvPgo8L3N5bWJvbD4KPC9nPgo8L2RlZnM+CjxnIGlkPSJzdXJmYWNlMTczODQiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTUzIiBoZWlnaHQ9IjIwNCIgc3R5bGU9ImZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTsiLz4KPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4xO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDE2IDYuNSBDIDE2IDguNDMzMDA4IDE0LjQzMzAwOCAxMCAxMi41IDEwIEMgMTAuNTY2OTkyIDEwIDkgOC40MzMwMDggOSA2LjUgQyA5IDQuNTY2OTkyIDEwLjU2Njk5MiAzIDEyLjUgMyBDIDE0LjQzMzAwOCAzIDE2IDQuNTY2OTkyIDE2IDYuNSAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxnIHN0eWxlPSJmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7Ij4KICA8dXNlIHhsaW5rOmhyZWY9IiNnbHlwaDAtMSIgeD0iMjIiIHk9IjEyOC4wMTQ5MiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAxMi43IDYuNSBDIDEyLjcgNi43NjY2MDIgMTIuMyA2Ljc2NjYwMiAxMi4zIDYuNSBDIDEyLjMgNi4yMzMzOTggMTIuNyA2LjIzMzM5OCAxMi43IDYuNSAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMDU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMCA2LjUgTCAxMS44NjY2MDIgNi41ICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAxMi4yNDE2MDIgNi41IEwgMTEuNzQxNjAyIDYuNzUgTCAxMS44NjY2MDIgNi41IEwgMTEuNzQxNjAyIDYuMjUgWiBNIDEyLjI0MTYwMiA2LjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDEyLjUgMCBMIDEyLjUgNS45MTM4NjcgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDEyLjUgNi4yODg4NjcgTCAxMi4yNSA1Ljc4ODg2NyBMIDEyLjUgNS45MTM4NjcgTCAxMi43NSA1Ljc4ODg2NyBaIE0gMTIuNSA2LjI4ODg2NyAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxnIHN0eWxlPSJmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7Ij4KICA8dXNlIHhsaW5rOmhyZWY9IiNnbHlwaDAtMiIgeD0iMjYyIiB5PSIyNy44ODk5MiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMDU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMTIuNSA2LjUgTCAxNS42MTM4NjcgNi41ICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAxNS45ODg4NjcgNi41IEwgMTUuNDg4ODY3IDYuNzUgTCAxNS42MTM4NjcgNi41IEwgMTUuNDg4ODY3IDYuMjUgWiBNIDE1Ljk4ODg2NyA2LjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8ZyBzdHlsZT0iZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyI+CiAgPHVzZSB4bGluazpocmVmPSIjZ2x5cGgwLTMiIHg9IjI4MiIgeT0iMTQ3Ljg4OTkyIi8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MC4xO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMCBMIDI3LjUgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwIDAgTCAwIDEwICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPC9nPgo8L3N2Zz4K"},68603:(e,t,M)=>{M.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTUzcHQiIGhlaWdodD0iMTg0cHQiIHZpZXdCb3g9IjAgMCA1NTMgMTg0IiB2ZXJzaW9uPSIxLjEiPgo8ZGVmcz4KPGc+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtMCI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gMC44NTkzNzUgMyBMIDAuODU5Mzc1IC0xMS45Mzc1IEwgOS4zMjgxMjUgLTExLjkzNzUgTCA5LjMyODEyNSAzIFogTSAxLjgxMjUgMi4wNDY4NzUgTCA4LjM5MDYyNSAyLjA0Njg3NSBMIDguMzkwNjI1IC0xMC45ODQzNzUgTCAxLjgxMjUgLTEwLjk4NDM3NSBaIE0gMS44MTI1IDIuMDQ2ODc1ICIvPgo8L3N5bWJvbD4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0xIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iTSA5LjI1IC05LjI2NTYyNSBMIDUuOTM3NSAtNC44MjgxMjUgTCA5LjU2MjUgMCBMIDcuODEyNSAwIEwgNS4wOTM3NSAtMy43MTg3NSBMIDIuMzkwNjI1IDAgTCAwLjYyNSAwIEwgNC4yNjU2MjUgLTQuODI4MTI1IEwgMC45NTMxMjUgLTkuMjY1NjI1IEwgMi42NDA2MjUgLTkuMjY1NjI1IEwgNS4wOTM3NSAtNS45MDYyNSBMIDcuNTMxMjUgLTkuMjY1NjI1IFogTSA5LjI1IC05LjI2NTYyNSAiLz4KPC9zeW1ib2w+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtMiI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gNy4wOTM3NSAtMi45ODQzNzUgQyA2Ljg0Mzc1IC0yLjMzNTkzOCA2LjUxOTUzMSAtMS40ODgyODEgNi4xMjUgLTAuNDM3NSBDIDUuNTgyMDMxIDEuMDE5NTMxIDUuMjE4NzUgMS45MTAxNTYgNS4wMzEyNSAyLjIzNDM3NSBDIDQuNzY5NTMxIDIuNjYwMTU2IDQuNDQ1MzEyIDIuOTc2NTYyIDQuMDYyNSAzLjE4NzUgQyAzLjY4NzUgMy40MDYyNSAzLjI1IDMuNTE1NjI1IDIuNzUgMy41MTU2MjUgTCAxLjUxNTYyNSAzLjUxNTYyNSBMIDEuNTE1NjI1IDIuMjUgTCAyLjQyMTg3NSAyLjI1IEMgMi44NjcxODggMi4yNSAzLjIxODc1IDIuMTE3MTg4IDMuNDY4NzUgMS44NTkzNzUgQyAzLjcyNjU2MiAxLjU5NzY1NiA0LjA1MDc4MSAwLjkyNTc4MSA0LjQzNzUgLTAuMTU2MjUgTCAwLjg1OTM3NSAtOS4yNjU2MjUgTCAyLjQ2ODc1IC05LjI2NTYyNSBMIDUuMjE4NzUgLTIuMDE1NjI1IEwgNy45MjE4NzUgLTkuMjY1NjI1IEwgOS41MzEyNSAtOS4yNjU2MjUgWiBNIDcuMDkzNzUgLTIuOTg0Mzc1ICIvPgo8L3N5bWJvbD4KPHN5bWJvbCBvdmVyZmxvdz0idmlzaWJsZSIgaWQ9ImdseXBoMC0zIj4KPHBhdGggc3R5bGU9InN0cm9rZTpub25lOyIgZD0iTSA4LjY4NzUgLTUuNzM0Mzc1IEwgOC42ODc1IDAgTCA3LjE1NjI1IDAgTCA3LjE1NjI1IC01LjczNDM3NSBDIDcuMTU2MjUgLTYuNTY2NDA2IDcuMDA3ODEyIC03LjE3NTc4MSA2LjcxODc1IC03LjU2MjUgQyA2LjQyNTc4MSAtNy45NTcwMzEgNS45Njg3NSAtOC4xNTYyNSA1LjM0Mzc1IC04LjE1NjI1IEMgNC42MzI4MTIgLTguMTU2MjUgNC4wODU5MzggLTcuOTA2MjUgMy43MDMxMjUgLTcuNDA2MjUgQyAzLjMyODEyNSAtNi45MDYyNSAzLjE0MDYyNSAtNi4xNzk2ODggMy4xNDA2MjUgLTUuMjM0Mzc1IEwgMy4xNDA2MjUgMCBMIDEuNjA5Mzc1IDAgTCAxLjYwOTM3NSAtMTIuODc1IEwgMy4xNDA2MjUgLTEyLjg3NSBMIDMuMTQwNjI1IC03Ljg3NSBDIDMuNDEwMTU2IC04LjQwNjI1IDMuNzczNDM4IC04LjgwNDY4OCA0LjIzNDM3NSAtOS4wNzgxMjUgQyA0LjY5MTQwNiAtOS4zNDc2NTYgNS4yMzgyODEgLTkuNDg0Mzc1IDUuODc1IC05LjQ4NDM3NSBDIDYuODIwMzEyIC05LjQ4NDM3NSA3LjUyMzQzOCAtOS4xNzE4NzUgNy45ODQzNzUgLTguNTQ2ODc1IEMgOC40NTMxMjUgLTcuOTI5Njg4IDguNjg3NSAtNi45OTIxODggOC42ODc1IC01LjczNDM3NSBaIE0gOC42ODc1IC01LjczNDM3NSAiLz4KPC9zeW1ib2w+CjxzeW1ib2wgb3ZlcmZsb3c9InZpc2libGUiIGlkPSJnbHlwaDAtNCI+CjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZTsiIGQ9Ik0gMCAtOS4yNjU2MjUgTCAxLjUgLTkuMjY1NjI1IEwgMy4xMjUgLTEuNzgxMjUgTCA0LjQzNzUgLTYuNTYyNSBMIDUuNzM0Mzc1IC02LjU2MjUgTCA3LjA3ODEyNSAtMS43ODEyNSBMIDguNjg3NSAtOS4yNjU2MjUgTCAxMC4yMDMxMjUgLTkuMjY1NjI1IEwgOC4wMzEyNSAwIEwgNi41NzgxMjUgMCBMIDUuMDkzNzUgLTUuMDc4MTI1IEwgMy42MjUgMCBMIDIuMTcxODc1IDAgWiBNIDAgLTkuMjY1NjI1ICIvPgo8L3N5bWJvbD4KPC9nPgo8L2RlZnM+CjxnIGlkPSJzdXJmYWNlMjU4MzgiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTUzIiBoZWlnaHQ9IjE4NCIgc3R5bGU9ImZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTsiLz4KPGcgc3R5bGU9ImZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiPgogIDx1c2UgeGxpbms6aHJlZj0iI2dseXBoMC0xIiB4PSI2MiIgeT0iNzguMDE0OTIiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMyBMIDYuNjEzODY3IDMgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDYuOTg4ODY3IDMgTCA2LjQ4ODg2NyAzLjI1IEwgNi42MTM4NjcgMyBMIDYuNDg4ODY3IDIuNzUgWiBNIDYuOTg4ODY3IDMgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDcgMCBMIDcgMi42MTM4NjcgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjA1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDcgMi45ODg4NjcgTCA2Ljc1IDIuNDg4ODY3IEwgNyAyLjYxMzg2NyBMIDcuMjUgMi40ODg4NjcgWiBNIDcgMi45ODg4NjcgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8ZyBzdHlsZT0iZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyI+CiAgPHVzZSB4bGluazpocmVmPSIjZ2x5cGgwLTIiIHg9IjE2MiIgeT0iMjcuODg5OTIiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gNyAzIEwgMjEgMyBMIDIxIDkgTCA3IDkgWiBNIDcgMyAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMDU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMjAgMyBMIDIwIDguNjEzODY3ICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPHBhdGggc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAyMCA4Ljk4ODg2NyBMIDE5Ljc1IDguNDg4ODY3IEwgMjAgOC42MTM4NjcgTCAyMC4yNSA4LjQ4ODg2NyBaIE0gMjAgOC45ODg4NjcgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8ZyBzdHlsZT0iZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyI+CiAgPHVzZSB4bGluazpocmVmPSIjZ2x5cGgwLTMiIHg9IjM4MiIgeT0iMTI3Ljg4OTkyIi8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MC4wNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSA3IDggTCAyMC42MTM4NjcgOCAiIHRyYW5zZm9ybT0ibWF0cml4KDIwLDAsMCwyMCwyLDIpIi8+CjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMDU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMjAuOTg4ODY3IDggTCAyMC40ODg4NjcgOC4yNSBMIDIwLjYxMzg2NyA4IEwgMjAuNDg4ODY3IDcuNzUgWiBNIDIwLjk4ODg2NyA4ICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPGcgc3R5bGU9ImZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiPgogIDx1c2UgeGxpbms6aHJlZj0iI2dseXBoMC00IiB4PSIyODIiIHk9IjE1Ny44ODk5MiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwIDAgTCAyNy41IDAgIiB0cmFuc2Zvcm09Im1hdHJpeCgyMCwwLDAsMjAsMiwyKSIvPgo8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowLjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMCAwIEwgMCA5ICIgdHJhbnNmb3JtPSJtYXRyaXgoMjAsMCwwLDIwLDIsMikiLz4KPC9nPgo8L3N2Zz4K"},94142:(e,t,M)=>{M.d(t,{Z:()=>a});const a=M.p+"assets/images/draw-text-f357d2ba3f40ce0a03b6fea0dcb51ba2.svg"}}]);