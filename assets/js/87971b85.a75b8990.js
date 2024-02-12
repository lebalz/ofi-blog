"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[88215],{15662:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>h,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var t=n(85893),l=n(11151),i=n(55317),r=n(8849),a=n.n(r),c=n(15361);const d={sidebar_custom_props:{id:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=353789"}}},h="XOR-Verschl\xfcsselung",o={id:"Kryptologie/Symmetrisch/xor",title:"XOR-Verschl\xfcsselung",description:"Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen 0 und 1 zur Verf\xfcgung stehen.",source:"@site/versioned_docs/version-26P/11-Kryptologie/03-Symmetrisch/03-xor.md",sourceDirName:"11-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/xor",permalink:"/26P/Kryptologie/Symmetrisch/xor",draft:!1,unlisted:!1,tags:[],version:"26P",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=353789"}}},sidebar:"sidebar",previous:{title:"Pentacode",permalink:"/26P/Kryptologie/Symmetrisch/codierung"},next:{title:"Blockchiffre",permalink:"/26P/Kryptologie/Symmetrisch/blockchiffre"}},x={},m=[{value:"Verschl\xfcsselung",id:"verschl\xfcsselung",level:3},{value:"Entschl\xfcsselung",id:"entschl\xfcsselung",level:3},{value:"Bitfolge des Geheimtexts",id:"bitfolge-des-geheimtexts",level:3}];function p(e){const s={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",mtext:"mtext",ol:"ol",p:"p",pre:"pre",section:"section",semantics:"semantics",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{Answer:n,Comment:r,Solution:d}=s;return n||b("Answer",!0),r||b("Comment",!0),d||b("Solution",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.h1,{id:"xor-verschl\xfcsselung",children:"XOR-Verschl\xfcsselung"}),(0,t.jsx)(r,{nr:0,type:"heading",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Da wir nun mit Bits arbeiten und nicht mehr mit Buchstaben, m\xfcssen wir nach anderen M\xf6glichkeiten zur Verschl\xfcsselung suchen. Alphabetverschiebungen wie bei Caesar und Substitutionen sind nicht mehr geeignete Mittel, wenn nur die Zahlen ",(0,t.jsx)(s.code,{children:"0"})," und ",(0,t.jsx)(s.code,{children:"1"})," zur Verf\xfcgung stehen."]}),(0,t.jsx)(r,{nr:0,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Nebst den bekannten Operationen, ",(0,t.jsx)(s.em,{children:"Addition, Subtraktion, Multiplikation und Division"}),", kann ein Computer auch noch weitere Operationen auf zwei Bin\xe4rzahlen anwenden. Eine solche Operation ist das ",(0,t.jsx)(s.strong,{children:"XOR"})," (",(0,t.jsx)(s.em,{children:"Exklusives Oder"}),", ",(0,t.jsx)(s.em,{children:"Exclusive OR"}),"):"]}),(0,t.jsx)(r,{nr:1,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Exclusive or exclusive disjunction is a logical operation that is 1 if, and only if its arguments differ (one is 1, the other is 0).",(0,t.jsx)(s.sup,{children:(0,t.jsx)(s.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),(0,t.jsx)(r,{nr:2,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"XOR kann auch zur Verschl\xfcsselung verwendet werden. Dabei wird jeweils 1 Bit des Klartextes mit einem Bit des Schl\xfcssels verrechnet. Das Ergebnis ist 1 Bit des Geheimtextes."}),(0,t.jsx)(r,{nr:3,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Die Wahrheitstabelle sieht folgendermassen aus:"}),(0,t.jsx)(r,{nr:4,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)("div",{className:"flex-cards flex",children:[(0,t.jsx)("div",{className:"item card slim-table normal-header no-comments",style:{flexBasis:"13em"},children:(0,t.jsxs)("div",{className:"card__body",children:[(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.h3,{id:"verschl\xfcsselung",children:"Verschl\xfcsselung"}),(0,t.jsx)(r,{nr:1,type:"heading",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.em,{children:"p"})}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.em,{children:"k"})}),(0,t.jsxs)(s.th,{style:{textAlign:"center"},children:[(0,t.jsx)(s.em,{children:"c"})," = ",(0,t.jsx)(s.em,{children:"p"})," ",(0,t.jsx)(s.strong,{children:"XOR"})," ",(0,t.jsx)(s.em,{children:"k"})]})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"})]})]})]}),(0,t.jsx)(r,{nr:0,type:"table",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"p\n: ",(0,t.jsx)(s.em,{children:"plain text"})," (Klartext) ",(0,t.jsx)("br",{}),"\nk\n: ",(0,t.jsx)(s.em,{children:"key"})," (Schl\xfcssel) ",(0,t.jsx)("br",{}),"\nc\n: ",(0,t.jsx)(s.em,{children:"cipher"})," (Verschl\xfcsselt)"]})}),(0,t.jsx)("div",{className:"item card slim-table normal-header no-comments",style:{flexBasis:"13em"},children:(0,t.jsxs)("div",{className:"card__body",children:[(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.h3,{id:"entschl\xfcsselung",children:"Entschl\xfcsselung"}),(0,t.jsx)(r,{nr:2,type:"heading",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.em,{children:"c"})}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.em,{children:"k"})}),(0,t.jsxs)(s.th,{style:{textAlign:"center"},children:[(0,t.jsx)(s.em,{children:"p"})," = ",(0,t.jsx)(s.em,{children:"c"})," ",(0,t.jsx)(s.strong,{children:"XOR"})," ",(0,t.jsx)(s.em,{children:"k"})]})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"0"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"1"})]})]})]}),(0,t.jsx)(r,{nr:1,type:"table",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]})]})})]}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Analog zu ROT13 gilt auch hier: Die Verschl\xfcsselung ist identisch mit der Entschl\xfcsselung, da Folgendes gilt:"}),(0,t.jsx)(r,{nr:5,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsx)(s.span,{className:"katex-display",children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mtext,{children:"\xa0XOR\xa0"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mtext,{children:"\xa0XOR\xa0"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mtext,{children:"\xa0XOR\xa0"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mi,{children:"p"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"c \\text{ XOR } k = (p \\text{ XOR } k) \\text{ XOR } k = p"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"\xa0XOR\xa0"})}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"\xa0XOR\xa0"})}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mord text",children:(0,t.jsx)(s.span,{className:"mord",children:"\xa0XOR\xa0"})}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"})]})]})]})}),"\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Dies k\xf6nnen Sie mit den Tabellen oben leicht \xfcberpr\xfcfen."}),(0,t.jsx)(r,{nr:6,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsxs)(s.admonition,{title:"Aufgabe XOR-Verschl\xfcsselung",type:"aufgabe",children:[(0,t.jsx)(n,{type:"state",webKey:"7fdee690-f7a7-4a62-9df7-da7df1001feb"}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Verschl\xfcsseln Sie die Bitfolge mit dem angegebenen Schl\xfcssel"}),(0,t.jsx)(r,{nr:7,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"10100 11101 10110"})," (Bitfolge des Klartexts)"]}),(0,t.jsx)(r,{nr:8,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"00101 01010 11100"})," (Bitfolge des Schl\xfcssels)"]}),(0,t.jsx)(r,{nr:9,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.h3,{id:"bitfolge-des-geheimtexts",children:"Bitfolge des Geheimtexts"}),(0,t.jsx)(r,{nr:3,type:"heading",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsx)(n,{type:"string",webKey:"79c55c56-7d5f-4c7f-95d3-38aed13e16ad",solution:"100011011101010",sanitizer:e=>e.replace(/\s/g,"")})]}),"\n",(0,t.jsxs)(s.admonition,{title:"Aufgabe Textverschl\xfcsselung mit XOR",type:"aufgabe",children:[(0,t.jsx)(n,{type:"state",webKey:"e5288ce5-f8f6-4de0-be2b-81eb90e8346d"}),(0,t.jsx)(c.H4,{}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Sie erhalten von einer Kollegin folgende verschl\xfcsselte Nachricht:"}),(0,t.jsx)(r,{nr:10,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"01010 00100 01010 11011 00000\n"})}),(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Als Schl\xfcssel haben Sie das Wort ",(0,t.jsx)(s.code,{children:"MACHT"})," abgemacht."]}),(0,t.jsx)(r,{nr:11,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Codieren Sie den Schl\xfcssel mit Pentacode"}),(0,t.jsx)(r,{nr:12,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(n,{type:"string",webKey:"4159b846-71e5-4205-9907-975e3092c00c",solution:"01101 00001 00011 01000 10100",sanitizer:e=>e.replace(/\s/g,""),width:"100%"}),(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Entschl\xfcsseln Sie die bin\xe4re Nachricht (XOR)"}),(0,t.jsx)(r,{nr:13,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(n,{type:"string",webKey:"c4e4f353-6f68-454a-b0ee-ac23695e61c5",solution:"00111 00101 01001 10011 10100",sanitizer:e=>e.replace(/\s/g,""),width:"100%"}),(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Klartext (entschl\xfcsselte Bitfolge mit Pentacode zur\xfcckverwandeln)"}),(0,t.jsx)(r,{nr:14,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(n,{type:"string",webKey:"bd96e44e-96a7-404e-8d55-ed7007e1309a",solution:"GEIST",sanitizer:e=>e.trim().toUpperCase(),width:"100%"})]}),"\n",(0,t.jsxs)(s.admonition,{title:"Aufgabe Bildverschl\xfcsselung mit XOR",type:"aufgabe",children:[(0,t.jsx)(n,{type:"state",webKey:"2eedbeb5-6506-4b11-ac66-c74b3945de75"}),(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Zeichnen Sie ein ",(0,t.jsx)(s.code,{children:"5x5"}),"-Pixel-Bild, kopieren Sie es unten in die Antwort (_Optionen _",(0,t.jsx)(a(),{path:i.mdiDotsHorizontalCircleOutline,size:"1.25em",className:"mdi-icon"})," > Kopieren ",(0,t.jsx)(a(),{path:i.mdiClipboard,size:"1.25em",className:"mdi-icon"}),"__):"]}),(0,t.jsx)(r,{nr:15,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(c.bF,{}),(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Verschl\xfcsseln Sie die Bitfolge mit dem Schl\xfcssel ",(0,t.jsx)(s.code,{children:"ABCDE"}),"."]}),(0,t.jsx)(r,{nr:16,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(c.H4,{}),(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Wandeln Sie die resultierende Bitfolge wieder in ein Bild um (halten Sie das Bild fest)."}),(0,t.jsx)(r,{nr:17,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Wie viele weisse Felder hatte das Original bzw. das verschl\xfcsselte Bild?"}),(0,t.jsx)(r,{nr:18,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Was geschieht, wenn Sie daraus mit Pentacode einen Text erstellen?"}),(0,t.jsx)(r,{nr:19,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,t.jsx)(n,{type:"text",webKey:"87a642b5-0a0b-4da3-a808-a4629294f359"}),(0,t.jsxs)(d,{webKey:"e445b1ac-3c01-4268-9f57-796c401258a8",children:[(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Wichtige Punkte:"}),(0,t.jsx)(r,{nr:20,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsx)(s.p,{children:"Auch Bilder (im allgemeinen jegliche Bin\xe4r-Daten) lassen sich digital verschl\xfcsseln"}),(0,t.jsx)(r,{nr:21,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Vom verschl\xfcsselten Bild kann ",(0,t.jsx)(s.strong,{children:"nicht"})," auf das Original geschlossen werden - sowohl die Anzahl schwarzer/weisser Felder wie auch deren Anordnung ist wild durchmischt."]}),(0,t.jsx)(r,{nr:22,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n"]}),"\n"]})]})]}),"\n",(0,t.jsxs)(s.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(s.div,{className:"commentable",children:[(0,t.jsxs)(s.p,{children:["Quelle: ",(0,t.jsx)(s.a,{href:"http://mathworld.wolfram.com/XOR.html",children:"Germundsson, Roger; Weisstein, Eric"})]}),(0,t.jsx)(r,{nr:23,type:"paragraph",pageId:"38b6e2ac-d4e7-42bd-b2b0-f757577f5a82",children:(0,t.jsx)(s.p,{children:"."})})]}),"\n",(0,t.jsx)(s.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function b(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15361:(e,s,n)=>{n.d(s,{Vc:()=>N,bF:()=>A,H4:()=>k,g7:()=>v});var t=n(21314),l=n(86010),i=n(68949),r=n(46670),a=n(67294),c=n(63437);const d="container_zVtl",h="input_tYix",o="inputContainer_mEEr",x="active_fzzJ",m="interactive_Yfi1",p="pixelEditor_B1ri",j="row_yRws",b="cell_gJPc",g="off_TP1h",u="on_DXrb",f="actions_N7O9";var y=n(85893);const v=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),N={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},w=function(e,s){void 0===s&&(s=!0);const n=[];let t=e.replace(/\s/g,"");for(;t.length>0&&(!(t.length<5)||s);)n.push(t.slice(0,5)),t=t.slice(5);return n},k=(0,r.Pi)((()=>{const[e,s]=a.useState(""),[n,r]=a.useState(""),[c,m]=a.useState("text"),p=(0,t.oR)("viewStore");return a.useEffect((()=>{s(p.penta?.text||"")}),[]),a.useEffect((()=>(0,i.aD)((()=>{p.penta={text:e}}))),[e]),a.useEffect((()=>{"text"===c&&r((e=>e.toUpperCase().split("").map((e=>N[e]||e)))(e).join(" "))}),[e]),a.useEffect((()=>{"penta"===c&&s((e=>w(e).map((e=>N[e]||e)))(n).join(""))}),[n]),(0,y.jsx)("div",{className:(0,l.default)("hero","shadow--lw",d),children:(0,y.jsxs)("div",{className:"container",children:[(0,y.jsx)("p",{className:"hero__subtitle",children:"Pentacode"}),(0,y.jsx)("h4",{children:"Klartext"}),(0,y.jsxs)("div",{className:o,children:[(0,y.jsx)("textarea",{onFocus:()=>m("text"),placeholder:"Klartext eingeben",className:(0,l.default)(h),value:e,onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);s(e.target.value.toUpperCase()),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:5}),"text"===c&&(0,y.jsx)("div",{className:x})]}),(0,y.jsx)("h4",{children:"Pentacode"}),(0,y.jsxs)("div",{className:o,children:[(0,y.jsx)("textarea",{onFocus:()=>m("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,l.default)(h),value:n,onChange:e=>r(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===c&&(0,y.jsx)("div",{className:x})]})]})})})),A=(0,r.Pi)((()=>{const[e,s]=a.useState("00000 00000 00000 00000 00000"),[n,r]=a.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[o,x]=a.useState("editor"),v=(0,t.oR)("viewStore");return a.useEffect((()=>{s(v.pentaPixel.penta||"00000 00000 00000 00000 00000")}),[]),a.useEffect((()=>(0,i.aD)((()=>{v.pentaPixel={penta:e}}))),[e]),a.useEffect((()=>{"cell"!==o?(x("editor"),r(w(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):x("")}),[e]),a.useEffect((()=>{"editor"!==o?(x("cell"),s(n.map((e=>e.join(""))).join(" "))):x("")}),[n]),(0,y.jsx)("div",{className:(0,l.default)("hero","shadow--lw",d),children:(0,y.jsxs)("div",{className:"container",children:[(0,y.jsx)("p",{className:"hero__subtitle",children:"Pixel-Editor"}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsxs)("div",{className:(0,l.default)(p),children:[(0,y.jsx)(c.Z,{options:{backgroundColor:"white",canvasWidth:150,canvasHeight:30*n.length},children:(0,y.jsx)(y.Fragment,{children:n.map(((e,s)=>(0,y.jsx)("div",{className:(0,l.default)(j),children:e.map(((e,t)=>(0,y.jsx)("span",{className:(0,l.default)(b,0===e?g:u),onClick:()=>{const e=(e=>{const s=[];return e.forEach((e=>{const n=[];s.push(n),e.forEach((e=>{n.push(e)}))})),s})(n);e[s][t]=1-e[s][t],r(e)}},t)))},s)))})}),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)("button",{className:"button button--outline button--secondary button--sm",onClick:()=>r([...n,[0,0,0,0,0]]),children:"+"}),(0,y.jsx)("button",{className:"button button--outline button--secondary button--sm",onClick:()=>r([...n.slice(0,-1)]),children:"-"})]})]}),(0,y.jsx)("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,l.default)(h),value:e,onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);s(e.target.value.replace(/[^01\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:n.length})]})]})})}))},63437:(e,s,n)=>{n.d(s,{Z:()=>o});var t=n(59417),l=n(99603),i=n(86010),r=n(46293),a=n(67294),c=n(85893);const d={none:t.cNd,copied:t.E9T,error:t.nYk,spin:t.IJ7,ready:t.Yjj},h={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},o=e=>{let{children:s,options:n}=e;const[t,o]=a.useState(void 0),[x,m]=a.useState("none"),p=a.useRef(null);return a.useEffect((()=>{if(["none","spin","ready"].includes(x))return;const e=setTimeout((()=>m("copied"===x?"ready":"none")),2e3);return()=>clearTimeout(e)}),[x]),a.useEffect((()=>{"none"!==x&&m("none")}),[s]),(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("button",{className:(0,i.default)("button","button--outline","button--sm",h[x]),disabled:"spin"===x,onClick:()=>{if(null!==p.current){if("none"===x)return m("spin"),(0,r.SE)(p.current,n).then((e=>{o(e),m("ready")}));if("ready"===x)try{navigator.clipboard.write([new ClipboardItem({"image/png":t})]).then((()=>{m("copied")})).catch((e=>{m("error"),console.warn(e)}))}catch(e){console.warn(e),m("error")}}},children:(0,c.jsx)(l.G,{icon:d[x]})}),(0,c.jsx)("div",{ref:p,className:"copy-container",children:s})]})}}}]);