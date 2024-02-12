"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21635],{18254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>b});var i=s(85893),d=s(11151),r=s(55317),a=s(8849),t=s.n(a);const l={sidebar_custom_props:{id:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Netzwerke/Routing"}}},c="7. Routing",o={id:"Netzwerke/Routing/index",title:"7. Routing",description:"---",source:"@site/versioned_docs/version-24ef/02-Netzwerke/07-Routing/index.md",sourceDirName:"02-Netzwerke/07-Routing",slug:"/Netzwerke/Routing/",permalink:"/24ef/Netzwerke/Routing/",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Netzwerke/Routing"}}},sidebar:"sidebar",previous:{title:"6. Netzwerkzugangsschicht",permalink:"/24ef/Netzwerke/Netzzugangsschicht/"},next:{title:"8. \xdcbersicht",permalink:"/24ef/Netzwerke/Zusammenfassung/"}},h={},b=[{value:"Routingtabellen",id:"routingtabellen",level:2},{value:"Beispiele",id:"beispiele",level:3}];function p(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components},{Answer:a,Comment:l,Figure:c}=n;return a||g("Answer",!0),l||g("Comment",!0),c||g("Figure",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h1,{id:"7-routing",children:"7. Routing"}),(0,i.jsx)(l,{nr:0,type:"heading",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(a,{type:"state",webKey:"8fcef783-5f7d-44aa-903f-ea4e74d5a385",label:"Gesehen?"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/AzXys5kxpAM",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(a,{type:"state",webKey:"b6955d87-a06c-4db4-856b-961edf82d1d8",label:"Gesehen?"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/Ep-x_6kggKA",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(a,{type:"state",webKey:"4d499f34-45bb-4613-8f02-2260af713cf2",label:"Gesehen?"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/zmxLg4jV0ts",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Eine der wichtigsten Aufgaben der Internetschicht ist, das ",(0,i.jsx)(n.strong,{children:"Vermitteln"})," von Paketen duch die verbundenen Netzwerke hindurch und zwar vom ",(0,i.jsx)(n.strong,{children:"Augangsort"})," bis zum ",(0,i.jsx)(n.strong,{children:"Ziel"}),".\nJedes Ger\xe4t, egal ob Computer oder Router, muss dies tun, wenn es ein Paket senden will. Man spricht vom ",(0,i.jsx)(n.strong,{children:"Routing"}),"."]}),(0,i.jsx)(l,{nr:0,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Der ",(0,i.jsx)(n.strong,{children:"Ablauf"}),", den das Ger\xe4t dabei im wesentlichen befolgt, umfasst folgende Schritte:"]}),(0,i.jsx)(l,{nr:1,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n  id0([IP-Paket mit Ziel-IP])\n  id1{Liegt<br/>Ziel-IP in <b>eigenem</b><br/>Netzwerk<br/>?}\n  id2{Ist<br/><b>MAC-Adresse</b> von<br/><b>Ziel-Ger\xe4t</b><br/>bekannt<br/>?}\n  id3[Sende ARP-Broadcast f\xfcr<br/>MAC-Adresse des Zielger\xe4tes]\n  id4[Lies MAC-Adresse des Zielger\xe4tes<br/>aus ARP-Response]\n  id5[Verpacke IP-Paket in Frame<br/>und sende es an an <b>Ziel-MAC</b>]\n  id7[IP-Adresse des <b>Gateways</b><br/>zu Zielnetz bestimmen]\n  id8{Ist<br/><b>MAC-Adresse</b> von<br/><b>Gateway</b><br/>bekannt<br/>?}\n  id9[Sende ARP-Broadcast f\xfcr<br/>MAC-Adresse des Gateways]\n  id10[Lies MAC-Adresse des<br/>Gateways aus ARP-Response]\n  id11[Verpacke IP-Paket in Frame<br/>und sende es an an <b>Gateway-MAC</b>]\n  \n  id0--\x3eid1\n  id1--ja--\x3eid2\n  id1--nein--\x3eid7\n  id2--nein--\x3eid3\n  id2--ja--\x3eid5\n  id3--\x3eid4\n  id4--\x3eid5\n  id8--nein--\x3eid9\n  id8--ja--\x3eid11\n  id9--\x3eid10\n  id10--\x3eid11\n  id7--\x3eid8"}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Um diese Schritte durchzuf\xfchren, braucht jedes Ger\xe4t Informationen, welche in der ",(0,i.jsx)(n.strong,{children:"Routingtabelle"})," des Ger\xe4tes zu finden sind."]}),(0,i.jsx)(l,{nr:2,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"routingtabellen",children:"Routingtabellen"}),(0,i.jsx)(l,{nr:1,type:"heading",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Alle Routingtabellen sind im Grunde genommen gleich aufgebaut:"}),(0,i.jsx)(l,{nr:3,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Jede Zeile darin entspricht einer ",(0,i.jsx)(n.strong,{children:"Route"})," \xfcber welche ein Paket weitergeleitet werden kann. Eine Zeile muss dehalb folgende Informationen enthalten:"]}),(0,i.jsx)(l,{nr:4,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Routenziel"}),", welches \xfcber diese Route erreicht werden kann"]}),(0,i.jsx)(l,{nr:5,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Falls das Routenziel ",(0,i.jsx)(n.strong,{children:"nicht"})," im eigenen Netzwerk liegt, die IP-Adresse des ",(0,i.jsx)(n.strong,{children:"Gateways"})," \xfcber welchen man aus dem eigenen Netzwerk herauskommt"]}),(0,i.jsx)(l,{nr:6,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Identifikation des ",(0,i.jsx)(n.strong,{children:"Netzwerkadapters"})," (Schnittstelle) am eigenen Ger\xe4t, \xfcber welchen das IP-Paket entweder direkt an das Routenziel (wenn dieses im eigenen Netzwerk liegt), oder an den Gateway gesendet werden kann"]}),(0,i.jsx)(l,{nr:7,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Weil es m\xf6glich ist mehrere Routen zum selben Ziel zu haben, wird jede Route noch mit einer ",(0,i.jsx)(n.strong,{children:"Metrik"})," versehen, anhand welcher dann entschieden wird, welches die optimale (z.B. schnellste) Route zum Ziel ist."]}),(0,i.jsx)(l,{nr:8,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["F\xfcr das Ziel einer Route hat man ",(0,i.jsx)(n.strong,{children:"mehrere"})," M\xf6glichkeiten:"]}),(0,i.jsx)(l,{nr:9,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Das Routenziel ist eine ",(0,i.jsx)(n.strong,{children:"Host-Adresse"}),", also ein ganz bestimmtes Ger\xe4t irgendwo im Internet (eigenes LAN, oder auch ein fremdes LAN)."]}),(0,i.jsx)(l,{nr:10,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Das Routenziel ist eine ",(0,i.jsx)(n.strong,{children:"Netzwerk-Adresse"}),". Eine solche Route kann gebraucht werden, damit man nicht f\xfcr alle Ger\xe4te in einem bestimmten Netzwerk eine eigene Route mit Host-Adresse einrichten muss."]}),(0,i.jsx)(l,{nr:11,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.strong,{children:"Standardroute"})," (Default-Route), markiert durch die IP-Adresse ",(0,i.jsx)(n.code,{children:"0.0.0.0"}),". Diese Route wird verwendet, wenn f\xfcr ein bestimmtes Ziel keine passendere Route gefunden wird."]}),(0,i.jsx)(l,{nr:12,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Wichtig:"}),"\nUm beim Routenziel zu wissen, ob es sich um eine Netzwerk- oder Host-Adresse handelt, muss man auch die ",(0,i.jsx)(n.strong,{children:"Netzmaske"})," kennen. Im ersten Fall ist das eine herk\xf6mmliche Netzmaske mit einer Reihe 0 am Ende. Im zweiten Fall ist das die Netzmaske ",(0,i.jsx)(n.code,{children:"255.255.255.255"})," (also lauter 1 und keine 0)."]}),(0,i.jsx)(l,{nr:13,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"beispiele",children:"Beispiele"}),(0,i.jsx)(l,{nr:2,type:"heading",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Routing-Tabelle eines Raspberry-Pi (Linux ",(0,i.jsx)(t(),{path:r.mdiPenguin,size:"1.25em",className:"mdi-icon"}),"):"]}),(0,i.jsx)(l,{nr:14,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# sudo apt install net-tools\nroute -n\n"})}),"\n",(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{alt:"Routingtabelle Raspberry PI penguin",src:s(48861).Z+"",width:"661",height:"146"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Routingtabelle Raspberry PI penguin",(0,i.jsx)("span",{style:{flexGrow:1}})]})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Routing-Tabelle eines Windows-Notebooks:"}),(0,i.jsx)(l,{nr:15,type:"paragraph",pageId:"c1bfbbd0-99ed-45a1-a206-d21ff39c8ad8",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"# Powershell\nroute PRINT\n"})}),"\n",(0,i.jsxs)(c,{options:{width:"500px"},children:[(0,i.jsx)(n.img,{alt:"Routingtabelle Windows powershell",src:s(37977).Z+"",width:"799",height:"845"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Routingtabelle Windows powershell",(0,i.jsx)("span",{style:{flexGrow:1}})]})]})]})}function m(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},48861:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/RoutingtableRaspy-af5358e9bb4ca799ac88402bf810761c.png"},37977:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/RoutingtableWindows-53bb447feb70ab7736453ac87f9c6141.png"}}]);