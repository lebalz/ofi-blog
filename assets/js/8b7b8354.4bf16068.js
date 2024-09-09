"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[70838],{69278:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=s(74848),t=s(28453),r=(s(82908),s(1673));const a={sidebar_custom_props:{id:"106dd131-0dd1-454d-a369-1e44e466737a",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=685616"}}},d="Verkettung von Bl\xf6cken",l={id:"Kryptologie/Symmetrisch/block-chaining",title:"Verkettung von Bl\xf6cken",description:"Im letzten Kapitel wurde der Geheimtext zur Ver- bzw. Entschl\xfcsselung in Bl\xf6cke aufgeteilt, die exakt so lang sind wie der Schl\xfcssel. Die Bl\xf6cke werden anschliessend einzeln durch die XOR-Funktion mit dem Schl\xfcssel ver- bzw. entschl\xfcsselt.",source:"@site/versioned_docs/version-26P/11-Kryptologie/03-Symmetrisch/05-block-chaining.md",sourceDirName:"11-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/block-chaining",permalink:"/26P/Kryptologie/Symmetrisch/block-chaining",draft:!1,unlisted:!1,tags:[],version:"26P",sidebarPosition:5,frontMatter:{sidebar_custom_props:{id:"106dd131-0dd1-454d-a369-1e44e466737a",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=685616"}}},sidebar:"sidebar",previous:{title:"Blockchiffre",permalink:"/26P/Kryptologie/Symmetrisch/blockchiffre"},next:{title:"\xdcbungen",permalink:"/26P/Kryptologie/Symmetrisch/uebungen"}},c={},h=[{value:"Der Betriebsmodus \xabElectronic Code Book\xbb (ECB)",id:"der-betriebsmodus-electronic-code-book-ecb",level:2},{value:"Tool",id:"tool",level:3},{value:"Der Betriebsmodus \xabCipher Block Chaining\xbb (CBC)",id:"der-betriebsmodus-cipher-block-chaining-cbc",level:2},{value:"Beispiel CBC",id:"beispiel-cbc",level:3}];function o(e){const n={admonition:"admonition",br:"br",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components},{Answer:a,Comment:d,Dl:l,Figure:c,Hint:h,SourceRef:o}=n;return a||u("Answer",!0),d||u("Comment",!0),l||u("Dl",!0),c||u("Figure",!0),h||u("Hint",!0),o||u("SourceRef",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h1,{id:"verkettung-von-bl\xf6cken",children:"Verkettung von Bl\xf6cken"}),(0,i.jsx)(d,{nr:0,type:"heading",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Im letzten Kapitel wurde der Geheimtext zur Ver- bzw. Entschl\xfcsselung in Bl\xf6cke aufgeteilt, die exakt so lang sind wie der Schl\xfcssel. Die Bl\xf6cke werden anschliessend einzeln durch die XOR-Funktion mit dem Schl\xfcssel ver- bzw. entschl\xfcsselt."}),(0,i.jsx)(d,{nr:0,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Allgemeine Blockchiffre",type:"info",children:(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Prinzipiell kann anstelle der XOR-Funktion jede beliebige mathematische Funktion (resp. Verkettung von Funktionen) zur Verschl\xfcsselung verwendet werden (in den unten aufgef\xfchrten Grafiken daher mit dem allgemeinen Begriff ",(0,i.jsx)(n.em,{children:"block cipher encryption"})," bezeichnet). Wir beschr\xe4nken uns hier allerdings auf die einfache und gut verst\xe4ndliche XOR-Verschl\xfcsselung."]}),(0,i.jsx)(d,{nr:1,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]})}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"der-betriebsmodus-electronic-code-book-ecb",children:"Der Betriebsmodus \xabElectronic Code Book\xbb (ECB)"}),(0,i.jsx)(d,{nr:1,type:"heading",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Falls jeder Block mit dem immer gleichen Schl\xfcssel verschl\xfcsselt wird, spricht man vom \xabElectronic Code Book\xbb (",(0,i.jsx)(n.strong,{children:"ECB"}),") Betriebsmodus. Schematisch dargestellt sieht dieser wie folgt aus:"]}),(0,i.jsx)(d,{nr:2,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{src:s(7571).A+"",width:"601",height:"242"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),(0,i.jsx)(o,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:ECB_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1}})]})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["In der Abbildung wird deutlich, dass ECB kein eigenes Verschl\xfcsselungsverfahren ist, sondern nur ein ",(0,i.jsx)(n.strong,{children:"Modus"})," ist. Er definiert, wie die einzelnen Bl\xf6cke verwendet werden. Die konkrete Verschl\xfcsselungsfunktion ist in dieser Darstellung nicht genauer angegeben \u2013 wir verwenden der Einfachheit halber hier die XOR-Funktion."]}),(0,i.jsx)(d,{nr:3,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Die Entschl\xfcsselung funktioniert analog: Der Geheimtext wird wiederum in Bl\xf6cke aufgeteilt, welche separat mit dem Schl\xfcssel entschl\xfcsselt werden. Die dabei entstandenen Klartext-Bl\xf6cke ergeben aneinander gereiht den gesamten Klartext."}),(0,i.jsx)(d,{nr:4,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{src:s(96827).A+"",width:"601",height:"242"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),(0,i.jsx)(o,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:ECB_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1}})]})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"tool",children:"Tool"}),(0,i.jsx)(d,{nr:2,type:"heading",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(r.A,{}),"\n",(0,i.jsxs)(n.admonition,{title:"Aufgabe ECB-Modus",type:"aufgabe",children:[(0,i.jsx)(a,{type:"state",webKey:"22dc5535-c021-4afa-88ab-679bfa753bf7"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Verschl\xfcsseln Sie den Text ",(0,i.jsx)(n.code,{children:"EINE SEHR KLEINE SENSATION"})," mit dem Schl\xfcssel ",(0,i.jsx)(n.code,{children:"ZUSE"}),"."]}),(0,i.jsx)(d,{nr:5,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,i.jsx)(a,{type:"string",webKey:"52638af8-d4af-4f19-ab55-8de24a8bac94",solution:"@-. ZFVMHUXI@-. ZFVKITGLU,",sanitizer:e=>e.trim().toUpperCase(),width:"400px"}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Schauen Sie sich den Klartext und den Geheimtext genau an. Gibt es Schwachstellen im ECB-Modus? Was ist verd\xe4chtig?"}),(0,i.jsx)(d,{nr:6,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,i.jsx)(a,{type:"text",webKey:"11762cec-7a10-48f4-ab40-648addaca855"}),(0,i.jsx)(h,{children:(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"\xdcberlegen Sie sich, was passiert, wenn zwei Bl\xf6cke identisch sind (z.B. weil eine bestimmte Passage des Textes erneut vorkommt). Welche Auswirkung hat dies auf den Geheimtext?"}),(0,i.jsx)(d,{nr:7,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"der-betriebsmodus-cipher-block-chaining-cbc",children:"Der Betriebsmodus \xabCipher Block Chaining\xbb (CBC)"}),(0,i.jsx)(d,{nr:3,type:"heading",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Im CBC-Modus werden die Bl\xf6cke nicht mehr getrennt voneinander verarbeitet. Wie in der folgenden Abbildung ersichtlich ist, dient jeder Geheimtext-Block (ausser der letzte) im nachfolgenden Schritt zus\xe4tzlich als Input. So werden gleiche Klartext-Bl\xf6cke trotz identischem Schl\xfcssel zu unterschiedlichen Geheimtextbl\xf6cken verschl\xfcsselt."}),(0,i.jsx)(d,{nr:8,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Das Plus-Zeichen ich Kreis steht hier ebenfalls f\xfcr die XOR-Operation. Diese ist gegeben, w\xe4hrend die Verschl\xfcsselung im grossen Rechteck mit der Bezeichnung ",(0,i.jsx)(n.em,{children:"block cipher encryption"})," frei gew\xe4hlt werden kann (also bspw. auch ein aktuell sicheres Verfahren). Es wird also in unseren Beispielen sowohl f\xfcr die Verrechnung des Klartextblocks mit dem vorherigen Geheimtextblock wie auch f\xfcr eigentliche Verschl\xfcsselung die XOR-Operation verwendet."]}),(0,i.jsx)(d,{nr:9,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Da bei der Verarbeitung des ersten Blocks noch kein Geheimtext-Block zur Verf\xfcgung steht, wird ein sogenannter \xabInitialisierungsvektor\xbb (",(0,i.jsx)(n.strong,{children:"IV"}),") verwendet."]}),(0,i.jsx)(d,{nr:10,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{src:s(82591).A+"",width:"601",height:"242"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),(0,i.jsx)(o,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1}})]})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"\xc4ndert man 1 Bit im IV, f\xfchrt dies zu \xc4nderungen im gesamten Geheimtext. \xc4ndert man 1 Bit im Klartext, so \xe4ndern sich auch s\xe4mtliche darauffolgenden Bl\xf6cke im Geheimtext."}),(0,i.jsx)(d,{nr:11,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"beispiel-cbc",children:"Beispiel CBC"}),(0,i.jsx)(d,{nr:4,type:"heading",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(l,{children:[(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"p"})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:"HEY"})}),(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"iv"})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:"U"})}),(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"k"})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:"Z"})})]}),(0,i.jsx)(d,{nr:12,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(c,{children:(0,i.jsx)(n.img,{src:s(55283).A+"",width:"2660",height:"1120"})}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Beachten Sie, dass der IV nur beim ersten Block verwendet wird und die Blockl\xe4nge hier genau ein Buchstabe ist. Die XOR-Operation ist hier mit ",(0,i.jsx)(n.code,{children:"+"}),' dargestellt und auch bei der "Block-Cipher-Encryption" wird XOR verwendet.']}),(0,i.jsx)(d,{nr:13,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Ein Nachteil des CBC-Modus ist allerdings, dass die ",(0,i.jsx)(n.strong,{children:"Verschl\xfcsselung"})," der verschiedenen Bl\xf6cke nicht gleichzeitig (also parallel) berechnet werden k\xf6nnen, da das Resultat des vorherigen Blocks f\xfcr die Verschl\xfcsselung des aktuellen Blocks ben\xf6tigt wird. D.h. ein bestimmter Klartext-Block kann erst verschl\xfcsselt werden, wenn s\xe4mtliche vorherigen Bl\xf6cke bereits verschl\xfcsselt sind."]}),(0,i.jsx)(d,{nr:14,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Bei der ",(0,i.jsx)(n.strong,{children:"Entschl\xfcsselung"})," sieht es anders aus. Da sofort s\xe4mtliche Geheimtextbl\xf6cke vorliegen, kann die Entschl\xfcsselung problemlos parallelisiert werden, wie Sie in der folgenden Abbildung nachvollziehen k\xf6nnen:"]}),(0,i.jsx)(d,{nr:15,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{src:s(84567).A+"",width:"601",height:"242"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),(0,i.jsx)(o,{bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1}})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Bemerkenswert",type:"info",children:(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Auf den ersten Blick erstaunlich ist die Tatsache, dass die Entschl\xfcsselung mit falschem IV nur dazu f\xfchrt, dass der erste Klartext-Block unleserlich ist, w\xe4hrend die restlichen Bl\xf6cke korrekt entschl\xfcsselt werden."}),(0,i.jsx)(d,{nr:16,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]})}),"\n",(0,i.jsxs)(n.admonition,{title:"Aufgabe CBC-Modus",type:"aufgabe",children:[(0,i.jsx)(a,{type:"state",webKey:"786a67c7-3cb6-44f0-a620-24267aa6185b"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(l,{children:[(0,i.jsx)("dt",{children:(0,i.jsxs)(n.p,{children:["Verschl\xfcsseln Sie nochmals denselben Text, diesmal allerdings im CBC-Modus:",(0,i.jsx)(n.br,{}),"\n","Klartext"]})}),(0,i.jsx)("dd",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EINE SEHR KLEINE SENSATION"}),(0,i.jsx)(n.br,{}),"\n","Schl\xfcssel"]})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ZUSE"})})})]}),(0,i.jsx)(d,{nr:17,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Achten Sie wiederum auf die Bl\xf6cke, die im Klartext \xfcbereinstimmen. Was passiert jetzt?"}),(0,i.jsx)(d,{nr:18,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"W\xe4hlen Sie verschiedene Initialisierungsvektoren. Wie unterscheiden sich die Resultate?"}),(0,i.jsx)(d,{nr:19,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,i.jsx)(a,{type:"text",webKey:"d98093d9-0718-4b04-9ac3-f2ea9617153b",monospace:!0})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Aufgabe Initialisierungsvektor",type:"aufgabe",children:[(0,i.jsx)(a,{type:"state",webKey:"c53914e3-b496-4643-8453-4451ba5e9f18"}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["\xdcberlegen Sie sich zusammen mit Ihrer Pultnachbar",":in",", mit welcher einfachen Massnahme man darauf verzichten k\xf6nnte, neben dem Schl\xfcssel auch den Initialisierungsvektor mit der Kommunikationspartner",":in"," abzusprechen."]}),(0,i.jsx)(d,{nr:20,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsx)(a,{type:"text",webKey:"f33e61bc-140f-4f48-a027-abccae18ec05"})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Aufgabe Angriff auf die XOR-Blockchiffre",type:"aufgabe",children:[(0,i.jsx)(a,{type:"state",webKey:"fa533a99-efc9-4659-9c63-737a041075b2"}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Setzen Sie sich in Dreiergruppen zusammen und diskutieren Sie folgende Fragen:"}),(0,i.jsx)(d,{nr:21,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Welche Faktoren beeinflussen die Sicherheit unserer XOR-Blockchiffre?"}),(0,i.jsx)(d,{nr:22,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Stellen Sie zu jedem Faktor eine Aussage auf, die aufzeigt, wie eine m\xf6glichst hohe Sicherheit erreicht werden kann."}),(0,i.jsx)(d,{nr:23,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Wie sicher ist die Verwendung von XOR (\xabblock cipher encryption/decryption\xbb) im Vergleich zu Blockchiffren-Verfahren (ECB)?"}),(0,i.jsx)(d,{nr:24,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,i.jsx)(a,{type:"text",webKey:"941b53f7-db87-43d1-99e9-a91012309cf1"})]}),"\n",(0,i.jsxs)(n.admonition,{title:"XOR-Blockchiffre",type:"info",children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Selbstverst\xe4ndlich ist XOR als Verschl\xfcsselungsfunktion aus kryptologischer Sicht nicht ideal \u2013 daf\xfcr aber f\xfcr uns gut verst\xe4ndlich, \xfcberschaubar und einfach anzuwenden."}),(0,i.jsx)(d,{nr:25,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"In der Realit\xe4t ist es besonders wichtig, dass die Verschl\xfcsselungsfunktion s\xe4mtliche Bits des aktuellen Blocks stark \xabvermischt\xbb. Damit ist gemeint, dass eine winzige \xc4nderung an einer bestimmten Stelle im Klartextblock nicht nur zu einer kleinen \xc4nderung an derselben Stelle im Geheimtextblock f\xfchrt (wie dies bei XOR wegen der bitweisen Verarbeitung der Fall), sondern dass durch die kleine \xc4nderung viele Bits \xfcberall im Block ver\xe4ndert werden."}),(0,i.jsx)(d,{nr:26,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Aus diesem Grund arbeiten aktuelle Verschl\xfcsselungsfunktionen von Blockchiffren in ",(0,i.jsx)(n.strong,{children:"mehreren Runden"}),"."]}),(0,i.jsx)(d,{nr:27,type:"paragraph",pageId:"106dd131-0dd1-454d-a369-1e44e466737a",children:(0,i.jsx)(n.p,{children:"."})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41622:(e,n,s)=>{s.d(n,{A:()=>x});var i=s(96540),t=s(18215),r=s(15066),a=s(63427),d=s(92303),l=s(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var h=s(74848);function o(e){return!!e&&("SUMMARY"===e.tagName||o(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function u(e){let{summary:n,children:s,...t}=e;(0,a.A)().collectAnchor(t.id);const u=(0,d.A)(),m=(0,i.useRef)(null),{collapsed:g,setCollapsed:x}=(0,l.u)({initialState:!t.open}),[j,b]=(0,i.useState)(t.open),f=i.isValidElement(n)?n:(0,h.jsx)("summary",{children:n??"Details"});return(0,h.jsxs)("details",{...t,ref:m,open:j,"data-collapsed":g,className:(0,r.A)(c.details,u&&c.isBrowser,t.className),onMouseDown:e=>{o(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;o(n)&&p(n,m.current)&&(e.preventDefault(),g?(x(!1),b(!0)):x(!0))},children:[f,(0,h.jsx)(l.N,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),b(!e)},children:(0,h.jsx)("div",{className:c.collapsibleContent,children:s})})]})}const m={details:"details_b_Ee"},g="alert alert--info";function x(e){let{...n}=e;return(0,h.jsx)(u,{...n,className:(0,t.A)(g,m.details,n.className)})}},82908:(e,n,s)=>{s.d(n,{A:()=>d});s(96540);var i=s(41622);const t="finding_HjUo";var r=s(20053),a=s(74848);const d=e=>(0,a.jsx)(i.A,{summary:(0,a.jsxs)("summary",{children:[e.title||"Gewonnene Erkenntnisse",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})]}),className:(0,r.default)("alert alert--warning",t),children:e.children})},1673:(e,n,s)=>{s.d(n,{A:()=>o});var i=s(20053),t=s(2543),r=s(96540),a=s(4844),d=s(67712),l=s(74848);const c=e=>(0,a.r2)(e).split("").map((e=>Number.parseInt(a.Ap[e],2))),h=e=>e.map((e=>a.Ap[e.toString(2).padStart(5,"0")])).join(""),o=()=>{const[e,n]=r.useState(""),[s,o]=r.useState(""),[p,u]=r.useState(""),[m,g]=r.useState("ECB"),[x,j]=r.useState(""),[b,f]=r.useState("text");return r.useEffect((()=>{const i=p.length;if(0===i||"CBC"===m&&x.length!==p.length)return;const t=c(p);if("ECB"===m)switch(b){case"cipher":const r=c(s);let a=h(r.map(((e,n)=>e^t[n%i])));return n(a);case"text":const d=c(e),l=h(d.map(((e,n)=>e^t[n%i])));return o(l)}const r=c(x);switch(b){case"cipher":const a=c(s),d=h(a.map(((e,n)=>{const s=n%i,a=e^t[s]^r[s];return r[s]=e,a})));return n(d);case"text":const l=c(e),p=h(l.map(((e,n)=>{const s=n%i,a=e^r[s]^t[s];return r[s]=a,a})));return o(p)}}),[e,s,p,m,x]),(0,l.jsx)("div",{className:(0,i.default)("hero","shadow--lw",d.A.container),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("p",{className:"hero__subtitle",children:"XOR Blockchiffre"}),(0,l.jsx)("h4",{children:"Modus"}),(0,l.jsxs)("div",{className:(0,i.default)("buttongroup",d.A.modes),children:[(0,l.jsx)("button",{className:(0,i.default)("button","button--sm","button--primary","button--outline","ECB"===m&&"button--active"),onClick:()=>g("ECB"),children:"ECB"}),(0,l.jsx)("button",{className:(0,i.default)("button","button--sm","button--primary","button--outline","CBC"===m&&"button--active"),onClick:()=>g("CBC"),children:"CBC"})]}),(0,l.jsx)("h4",{children:"Klartext"}),(0,l.jsxs)("div",{className:d.A.inputContainer,children:[(0,l.jsx)("textarea",{className:(0,i.default)(d.A.input),value:e,onFocus:()=>f("text"),onChange:e=>{f("text");const s=Math.max(e.target.selectionStart,e.target.selectionEnd);n((0,a.r2)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(s,s)),0)},rows:5,placeholder:"Klartext"}),"text"===b&&(0,l.jsx)("div",{className:d.A.active})]}),(0,l.jsxs)("div",{className:d.A.stringInputContainer,children:[(0,l.jsx)("h4",{children:(0,l.jsx)("label",{htmlFor:"block-chain-key",children:"Schl\xfcssel"})}),(0,l.jsx)("input",{id:"block-chain-key",type:"text",placeholder:"Schl\xfcssel",value:p,onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);u((0,a.r2)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(n,n)),0)}})]}),"CBC"===m&&(0,l.jsxs)("div",{className:d.A.stringInputContainer,children:[(0,l.jsx)("h4",{children:(0,l.jsx)("label",{htmlFor:"cbc-iv",children:"Initialisierungs Vektor (IV)"})}),(0,l.jsxs)("div",{className:(0,i.default)(d.A.iv,"button-group"),children:[(0,l.jsx)("input",{id:"cbc-iv",type:"text",placeholder:"Der IV muss die gleiche L\xe4nge haben wie der Schl\xfcssel",value:x,className:(0,i.default)(x.length!==p.length&&d.A.invalid),onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);j((0,a.r2)(e.target.value)),setTimeout((()=>{e.target.setSelectionRange(n,n)}),0)}}),x.length!==p.length&&(0,l.jsx)("span",{className:(0,i.default)("badge","badge--danger",d.A.errorBadge),title:"Der IV muss die gleiche L\xe4nge haben wie der Schl\xfcssel",children:"L\xe4nge"}),(0,l.jsx)("button",{className:(0,i.default)("button","button--primary","button--sm"),onClick:()=>{if(0===p.length)return j("");const e=Object.keys(a.Ap).filter((e=>1===e.length)),n=(0,t.shuffle)(Array(Math.floor(p.length/e.length)+2).fill("").reduce(((n,s)=>[...n,...e]),[]));j(n.slice(0,p.length).join(""))},children:"Zuf\xe4llig Setzen"})]})]}),(0,l.jsx)("h4",{children:"Geheimtext"}),(0,l.jsxs)("div",{className:d.A.inputContainer,children:[(0,l.jsx)("textarea",{className:(0,i.default)(d.A.input),value:s,onFocus:()=>f("cipher"),onChange:e=>{f("cipher");const n=Math.max(e.target.selectionStart,e.target.selectionEnd);o((0,a.r2)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:5,placeholder:"XOR Verschl\xfcsselter Geheimtext"}),"cipher"===b&&(0,l.jsx)("span",{className:d.A.active})]})]})})}},4844:(e,n,s)=>{s.d(n,{Ap:()=>w,St:()=>C,tp:()=>B,r2:()=>k});var i=s(19760),t=s(20053),r=s(27813),a=s(36277),d=s(96540),l=s(32273);const c="container_zVtl",h="input_tYix",o="inputContainer_mEEr",p="active_fzzJ",u="interactive_Yfi1",m="pixelEditor_B1ri",g="row_yRws",x="cell_gJPc",j="off_TP1h",b="on_DXrb",f="actions_N7O9";var v=s(74848);const k=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),w={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},y=function(e,n){void 0===n&&(n=!0);const s=[];let i=e.replace(/\s/g,"");for(;i.length>0&&(!(i.length<5)||n);)s.push(i.slice(0,5)),i=i.slice(5);return s},B=(0,a.PA)((()=>{const[e,n]=d.useState(""),[s,a]=d.useState(""),[l,u]=d.useState("text"),m=(0,i.Pj)("viewStore");return d.useEffect((()=>{n(m.penta?.text||"")}),[]),d.useEffect((()=>(0,r.XI)((()=>{m.penta={text:e}}))),[e]),d.useEffect((()=>{"text"===l&&a((e=>e.toUpperCase().split("").map((e=>w[e]||e)))(e).join(" "))}),[e]),d.useEffect((()=>{"penta"===l&&n((e=>y(e).map((e=>w[e]||e)))(s).join(""))}),[s]),(0,v.jsx)("div",{className:(0,t.default)("hero","shadow--lw",c),children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("p",{className:"hero__subtitle",children:"Pentacode"}),(0,v.jsx)("h4",{children:"Klartext"}),(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("textarea",{onFocus:()=>u("text"),placeholder:"Klartext eingeben",className:(0,t.default)(h),value:e,onChange:e=>{const s=Math.max(e.target.selectionStart,e.target.selectionEnd);n(e.target.value.toUpperCase()),setTimeout((()=>e.target.setSelectionRange(s,s)),0)},rows:5}),"text"===l&&(0,v.jsx)("div",{className:p})]}),(0,v.jsx)("h4",{children:"Pentacode"}),(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("textarea",{onFocus:()=>u("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,t.default)(h),value:s,onChange:e=>a(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===l&&(0,v.jsx)("div",{className:p})]})]})})})),C=(0,a.PA)((()=>{const[e,n]=d.useState("00000 00000 00000 00000 00000"),[s,a]=d.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[o,p]=d.useState("editor"),k=(0,i.Pj)("viewStore");return d.useEffect((()=>{n(k.pentaPixel.penta||"00000 00000 00000 00000 00000")}),[]),d.useEffect((()=>(0,r.XI)((()=>{k.pentaPixel={penta:e}}))),[e]),d.useEffect((()=>{"cell"!==o?(p("editor"),a(y(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):p("")}),[e]),d.useEffect((()=>{"editor"!==o?(p("cell"),n(s.map((e=>e.join(""))).join(" "))):p("")}),[s]),(0,v.jsx)("div",{className:(0,t.default)("hero","shadow--lw",c),children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("p",{className:"hero__subtitle",children:"Pixel-Editor"}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsxs)("div",{className:(0,t.default)(m),children:[(0,v.jsx)(l.A,{options:{backgroundColor:"white",canvasWidth:150,canvasHeight:30*s.length},children:(0,v.jsx)(v.Fragment,{children:s.map(((e,n)=>(0,v.jsx)("div",{className:(0,t.default)(g),children:e.map(((e,i)=>(0,v.jsx)("span",{className:(0,t.default)(x,0===e?j:b),onClick:()=>{const e=(e=>{const n=[];return e.forEach((e=>{const s=[];n.push(s),e.forEach((e=>{s.push(e)}))})),n})(s);e[n][i]=1-e[n][i],a(e)}},i)))},n)))})}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("button",{className:"button button--outline button--secondary button--sm",onClick:()=>a([...s,[0,0,0,0,0]]),children:"+"}),(0,v.jsx)("button",{className:"button button--outline button--secondary button--sm",onClick:()=>a([...s.slice(0,-1)]),children:"-"})]})]}),(0,v.jsx)("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,t.default)(h),value:e,onChange:e=>{const s=Math.max(e.target.selectionStart,e.target.selectionEnd);n(e.target.value.replace(/[^01\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(s,s)),0)},rows:s.length})]})]})})}))},32273:(e,n,s)=>{s.d(n,{A:()=>o});var i=s(66188),t=s(83914),r=s(20053),a=s(88781),d=s(96540),l=s(74848);const c={none:i.vHW,copied:i.Iae,error:i.s0Q,spin:i.s4k,ready:i.KTq},h={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},o=e=>{let{children:n,options:s}=e;const[i,o]=d.useState(void 0),[p,u]=d.useState("none"),m=d.useRef(null);return d.useEffect((()=>{if(["none","spin","ready"].includes(p))return;const e=setTimeout((()=>u("copied"===p?"ready":"none")),2e3);return()=>clearTimeout(e)}),[p]),d.useEffect((()=>{"none"!==p&&u("none")}),[n]),(0,l.jsxs)(d.Fragment,{children:[(0,l.jsx)("button",{className:(0,r.default)("button","button--outline","button--sm",h[p]),disabled:"spin"===p,onClick:()=>{if(null!==m.current){if("none"===p)return u("spin"),(0,a.ZR)(m.current,s).then((e=>{o(e),u("ready")}));if("ready"===p)try{navigator.clipboard.write([new ClipboardItem({"image/png":i})]).then((()=>{u("copied")})).catch((e=>{u("error"),console.warn(e)}))}catch(e){console.warn(e),u("error")}}},children:(0,l.jsx)(t.g,{icon:c[p]})}),(0,l.jsx)("div",{ref:m,className:"copy-container",children:n})]})}},67712:(e,n,s)=>{s.d(n,{A:()=>i});const i={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},84567:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/CBC_decryption-e5affac8b24b593a703baa57e51c9bcc.svg"},82591:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/CBC_encryption-db55ceaa296438e01ffdad954f44699c.svg"},96827:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/ECB_decryption-38cc13f65a8d38849913c5e5de708bfe.svg"},7571:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/ECB_encryption-9f6dd0853639b63daa894d220317e0ba.svg"},55283:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/cbc-example-0f0f39db33180b5ba19404b097dc3e33.png"}}]);