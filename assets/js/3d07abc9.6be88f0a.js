"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86774],{7269:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=n(85893),i=n(11151),d=n(6787);const a={sidebar_custom_props:{id:"c63ef328-1005-4edf-af1c-9129a62df28c",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/20"}}},t="1. Webserver mit Python",c={id:"Netzwerke/Server/webserver",title:"1. Webserver mit Python",description:"Server, Client, Nachrichten, Prokolle - Die Grundlagen",source:"@site/versioned_docs/version-24ef/02-Netzwerke/01-Server/01-webserver.md",sourceDirName:"02-Netzwerke/01-Server",slug:"/Netzwerke/Server/webserver",permalink:"/24ef/Netzwerke/Server/webserver",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"c63ef328-1005-4edf-af1c-9129a62df28c",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/20"}}},sidebar:"sidebar",previous:{title:"1. Webserver und HTTP",permalink:"/24ef/Netzwerke/Server/"},next:{title:"2. HTML",permalink:"/24ef/Netzwerke/Server/html"}},l={},h=[{value:"Server, Client, Nachrichten, Prokolle - Die Grundlagen",id:"server-client-nachrichten-prokolle---die-grundlagen",level:2},{value:"Webserver mit Python",id:"webserver-mit-python",level:2}];function o(e){const r={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Answer:a,Comment:t,Details:c,Dl:l,Figure:h,SourceRef:o}=r;return a||m("Answer",!0),t||m("Comment",!0),c||m("Details",!0),l||m("Dl",!0),h||m("Figure",!0),o||m("SourceRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.h1,{id:"1-webserver-mit-python",children:"1. Webserver mit Python"}),(0,s.jsx)(t,{nr:0,type:"heading",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(h,{children:[(0,s.jsx)(r.img,{src:n(2190).Z+"",width:"1500",height:"844"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("span",{style:{flexGrow:1}}),(0,s.jsx)(o,{bib:{author:"Bala Priya C",source:"https://geekflare.com/python-web-servers/",licence:"Unknown",licence_url:"",edited:!1}})]})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.h2,{id:"server-client-nachrichten-prokolle---die-grundlagen",children:"Server, Client, Nachrichten, Prokolle - Die Grundlagen"}),(0,s.jsx)(t,{nr:1,type:"heading",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.p,{children:"Ein Webserver ist ein Computer, der darauf wartet, dass \xfcber das Netzwerk Anfragen f\xfcr Webseiten eintreffen, welche auf dem Webserver gespeichert sind. Der Webserver sendet dann die angefragten Seiten als Antwort zur\xfcck an den Computer, von welchem die Anfrage stammt."}),(0,s.jsx)(t,{nr:0,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Server"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Ein Computer, welcher auf Anfragen wartet und diese beantwortet."})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Client"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Ein Computer, welcher Anfragen an einen Server sendet."})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Request"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Eine Nachricht, welche vom Client an den Server gesendet wird."})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Response"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Die Antwort auf einen Request, welche vom Server an den Client gesendet wird."})})]}),(0,s.jsx)(t,{nr:1,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Man spricht bei Request und Response auch von ",(0,s.jsx)(r.strong,{children:"Nachrichten"}),", welche zwischen Client und Server ausgetauscht werden."]}),(0,s.jsx)(t,{nr:2,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Sowohl auf dem Client, wie auf dem Server braucht es Programme, welche die ausgetauschten Nachrichten verarbeiten k\xf6nnen. Im Fall vom Web sind das der ",(0,s.jsx)(r.strong,{children:"Browser"})," auf der Clientseite und das ",(0,s.jsx)(r.strong,{children:"Webserver-Programm"})," auf der Serverseite."]}),(0,s.jsx)(t,{nr:3,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Webseiten sind Dateien, deren Inhalt in der Sprache ",(0,s.jsx)(r.strong,{children:"HTML"})," (Hypertext Markup Language) geschrieben ist. HTML dient dabei dazu die Darstellung der Webseite festzulegen (\xdcberschriften, Abschnitte Tabellen, Links auf andere Seiten, etc.)."]}),(0,s.jsx)(t,{nr:4,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Damit sich Client und Server gegenseitig verstehen, m\xfcssen die Nachrichten in einer genau festgelegten Reihenfolge und mit genau definiertem Inhalt ausgetauscht werden. Diese Vorschriften nennt man ein ",(0,s.jsx)(r.strong,{children:"Protokolle"})," (siehe auch ",(0,s.jsx)(r.a,{href:"/24ef/Netzwerke/Protokolle/",children:"\ud83d\udc49 2. Protokolle"}),"). Im Falle des Webs heisst das Protokoll ",(0,s.jsx)(r.strong,{children:"HTTP"})," (Hypertext Transfer Protocol)."]}),(0,s.jsx)(t,{nr:5,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"HTTP"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Hypertext Transfer Protocol"})})]}),(0,s.jsx)(t,{nr:6,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.p,{children:"Das folgende Sequenzdiagramm verdeutlicht diese Zusammenh\xe4nge. Es zeigt die Reihenfolge der ausgetauschten Nachrichten f\xfcr die Abfrage einer Webseite aus dem Browser heraus. Beachten Sie, dass der Browser nur ein Programm ist, welches auf dem Client-Computer l\xe4uft. Das entsprechende Programm auf der Serverseite ist nicht separat dargestellt. Statt dessen ist die Datei dargestellt, welche auf dem Server gespeichert ist und deren Inhalt zum Client zur\xfcckgesendet wird."}),(0,s.jsx)(t,{nr:7,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsx)(r.mermaid,{value:"sequenceDiagram\n    participant B as Browser\n    participant C as Client (IP-Adresse 10.0.123.68)\n    participant S as Webserver (IP-Adresse 10.0.123.4)\n    participant F as HTML-Datei index.htm\n    B->>C: http://10.0.123.4/index.html\n    C-)S: HTTP-Request: GET /index.htm\n    S->>F: liest Datei\n    F->>S: Inhalt der Datei (HTML)\n    S-)C: HTTP-Response: 200 OK, HTML-Inhalt\n    C->>B: HTML-Inhalt"}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.h2,{id:"webserver-mit-python",children:"Webserver mit Python"}),(0,s.jsx)(t,{nr:2,type:"heading",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Python stellt eine Library zur Verf\xfcgung, mit welcher man ein einfaches Webserver-Programm erstellen kann. Ein solches ist in folgendem Snippet enthalten. Dieses Programm empf\xe4ngt Requests f\xfcr HTML-Dateien und sendet den Inhalt dieser Dateien zur\xfcck. Im Moment ist die Seite ",(0,s.jsx)(r.code,{children:"hello.html"})," die einzige Seite, welche vom Webserver zur\xfcckgeschickt werden kann."]}),(0,s.jsx)(t,{nr:8,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Da auf einem Server gleichzeitig verschiedene ",(0,s.jsx)(r.strong,{children:"Dienste"})," angeboten werden k\xf6nnen (z.B. k\xf6nnte auch noch ein E-Mail-Server laufen), muss man f\xfcr jeden Dienst eine ",(0,s.jsx)(r.strong,{children:"Port-Adresse"})," festlegen, unter welcher der Dienst auf ankommende Anfragen horcht. F\xfcr unseren einfachen Webserver wird im Snippet der Port mit der Nummer ",(0,s.jsx)(r.code,{children:"8000"})," festgelegt."]}),(0,s.jsx)(t,{nr:9,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"IP-Adresse"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Die IP-Adresse ist eine eindeutige Adresse, welche jedem Computer (somit auch jedem Server) im Internet zugewiesen wird."})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Localhost"})}),(0,s.jsx)("dd",{children:(0,s.jsxs)(r.p,{children:["Lokale IP-Adresse, welche auf dem eigenen Computer verweist. Sie ist immer ",(0,s.jsx)(r.code,{children:"127.0.0.1"}),"."]})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Port"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Ein Port ist eine Nummer, welche den Dienst auf einem Computer identifiziert. Dadurch kann ein Computer mehrere Dienste gleichzeitig anbieten."})}),(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"URL / URI"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:"Universal Resource Locator / Universal Resource Identifier"})})]}),(0,s.jsx)(t,{nr:10,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Um von einem Browser aus die Seite ",(0,s.jsx)(r.code,{children:"hello.html"})," anzeigen zu lassen, muss man im Browser folgende ",(0,s.jsx)(r.strong,{children:"URL"})," (Universal Resource Locator) eingeben:"]}),(0,s.jsx)(t,{nr:11,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(d.Z,{url:"http://Server-IP-Adresse:8000/Pfad/hello.html",children:[(0,s.jsx)("h1",{children:"Hello"}),(0,s.jsxs)("p",{children:["Wenn Sie dies sehen, so haben Sie eine erfolgreiche Abfrage auf den ",(0,s.jsx)("b",{children:"SimlpeWebServer"}),"\nget\xe4tigt."]}),(0,s.jsx)("img",{src:"https://www.gbsl.ch/wp-content/uploads/2020/07/Header-GBSL-1170x450.jpg",width:"400"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Die IP-Adresse des Servers k\xf6nnte zum Beispiel ",(0,s.jsx)(r.code,{children:"10.0.123.4"})," sein."]}),(0,s.jsx)(t,{nr:12,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Der Pfad entspricht der Ordnerreihenfolge, ausgehend vom Workspace in VSC, in dem die Datei ",(0,s.jsx)(r.code,{children:"hello.html"})," gespeichert ist, z.B. ",(0,s.jsx)(r.code,{children:"2258084"}),"."]}),(0,s.jsx)(t,{nr:13,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.admonition,{title:"Python Webserver",type:"aufgabe",children:[(0,s.jsx)(a,{type:"state",webKey:"6a13422c-52ba-410a-a3f6-5bc362731241"}),(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(r.p,{children:"Ordner"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)("strong",{className:"boxed",children:"EF-Informatik/docs/Netzwerke/webserver"})})})]}),(0,s.jsx)(t,{nr:14,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Speichern Sie folgende Snippets in Ihrem Repository unter dem Ordner ",(0,s.jsx)(r.code,{children:"docs/Netzwerke/webserver"})," ab."]}),(0,s.jsx)(t,{nr:15,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(r.p,{children:"Snippets"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-py",metastring:'reference title="SimpleWebServer.py"',children:"https://github.com/lebalz/ofi-blog/blob/main/docs/Netzwerke-ef/01-Server/snippets/simple-server.py\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",metastring:'reference title="hello.html"',children:"https://github.com/lebalz/ofi-blog/blob/main/docs/Netzwerke-ef/01-Server/snippets/hello.html\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["\xd6ffnen Sie auf Ihrem Notebook einen Browser und versuchen Sie die Seite hello.html anzuzeigen. Dazu m\xfcssen Sie in Ihrem Browser die richtige URL eingeben. Weil Ihr Browser auf dem selben Computer l\xe4uft, wie der Webserver, k\xf6nnen Sie statt der IP-Adresse Ihres Computers auch ",(0,s.jsx)(r.code,{children:"localhost"})," oder die lokale IP-Adresse ",(0,s.jsx)(r.code,{children:"127.0.0.1"})," schreiben. Beim Pfad m\xfcssen Sie darauf achten, in welchen Ordner die Datei ",(0,s.jsx)(r.code,{children:"hello.html"})," gespeichert ist."]}),(0,s.jsx)(t,{nr:16,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsx)(r.p,{children:"Wenn Sie erfolgreich waren, machen Sie einen Screenshot von Ihrem Browser, in welchem man die URL und die Seite sieht und laden Sie diesen als Antwort hoch (die URL soll erkennbar sein)."}),(0,s.jsx)(t,{nr:17,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n",(0,s.jsx)(a,{type:"text",webKey:"d24cea7c-6310-4d0b-bab7-ab4206c1b55f"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.div,{className:"commentable",children:[(0,s.jsxs)(r.p,{children:["Nun ist dies wohl eine recht umst\xe4ndliche URL. Jenachdem aus welchem Ordner heraus das Python-Skript gestartet wurde, \xe4ndert sich die URL. Um diese m\xf6glichst kurz zu halten, kann man das Skript direkt im Ordner ",(0,s.jsx)(r.code,{children:"docs/Netzwerke/webserver"})," ausf\xfchren. Dazu m\xfcssen Sie in VSC links in der Ordner\xfcbersicht auf den Ordner ",(0,s.jsx)("strong",{className:"boxed",children:"webserver"})," rechtsklicken und dort ",(0,s.jsx)(r.code,{children:"Open in Integrated Terminal"})," ausw\xe4hlen. Nun \xf6ffnet sich ein Terminalfenster, welches sich im Ordner ",(0,s.jsx)(r.code,{children:"docs/Netzwerke/webserver"})," befindet. In diesem Fenster k\xf6nnen Sie nun das Python-Skript mit dem Befehl ",(0,s.jsx)(r.code,{children:"python3 simple-server.py"})," starten. Die URL wird nun wie folgt aussehen: ",(0,s.jsx)(r.code,{children:"http://localhost:8000/hello.html"}),"."]}),(0,s.jsx)(t,{nr:18,type:"paragraph",pageId:"c63ef328-1005-4edf-af1c-9129a62df28c",children:(0,s.jsx)(r.p,{children:"."})})]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function m(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6787:(e,r,n)=>{n.d(r,{Z:()=>o});var s=n(67294),i=n(86010);const d={browserWindow:"browserWindow_yPfJ",browserWindowHeader:"browserWindowHeader_wZIS",buttons:"buttons_zwH1",dot:"dot_ZAty",browserWindowAddressBar:"browserWindowAddressBar_wTY6",browserType:"browserType_z_w8",spacer:"spacer_K9AZ",browserWindowMenuIcon:"browserWindowMenuIcon_pPcI",bar:"bar_zMS1",browserWindowBody:"browserWindowBody_fsGG"};var a=n(85893);const t={chrome:"mdi-google-chrome",edge:"mdi-microsoft-edge",firefox:"mdi-firefox",safari:"mdi-apple-safari"},c={chrome:"blue",edge:"cyan",firefox:"orange",safari:"blue"},l={copied:"mdi-clipboard-check",error:"mdi-clipboard-text-off",spin:"mdi-loading"},h={copied:"green",error:"red",spin:"black"};function o(e){let{children:r,minHeight:n,copy:o,url:p="http://localhost:3000",browser:m}=e;const[f,x]=s.useState("none");s.useEffect((()=>{if(["none","spin","ready"].includes(f))return;const e=setTimeout((()=>x("none")),2e3);return()=>clearTimeout(e)}),[f]);return(0,a.jsxs)("div",{className:d.browserWindow,style:{minHeight:n},children:[(0,a.jsxs)("div",{className:d.browserWindowHeader,children:[(0,a.jsxs)("div",{className:d.buttons,children:[(0,a.jsx)("span",{className:d.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:d.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:d.dot,style:{background:"#58cb42"}})]}),(0,a.jsxs)("div",{className:(0,i.default)(d.browserWindowAddressBar,"text--truncate"),children:[m&&(0,a.jsx)("i",{className:(0,i.default)("mdi",t[m],c[m],d.browserType)}),(0,a.jsx)("a",{href:p,target:"_blank",onClick:e=>{if(o){e.preventDefault(),e.stopPropagation(),x("spin");try{navigator.clipboard.writeText(p).then((()=>{x("copied")})).catch((e=>{x("error"),console.warn(e)}))}catch(r){console.warn(r),x("error")}}},children:p}),"none"!==f&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:d.spacer}),(0,a.jsx)("i",{className:(0,i.default)("mdi",l[f],h[f],d.copyState)})]})]}),(0,a.jsx)("div",{className:d.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:d.bar}),(0,a.jsx)("span",{className:d.bar}),(0,a.jsx)("span",{className:d.bar})]})})]}),(0,a.jsx)("div",{className:d.browserWindowBody,children:r})]})}},2190:(e,r,n)=>{n.d(r,{Z:()=>s});const s=n.p+"assets/images/python-web-server-5a04ce7ac0ef2dfcc912e5ba97e815aa.webp"},11151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>a});var s=n(67294);const i={},d=s.createContext(i);function a(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);