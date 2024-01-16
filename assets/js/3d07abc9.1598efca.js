"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),o=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=o(r),u=a,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m[p]="string"==typeof e?e:a,s[1]=m;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47308:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const i={browserWindow:"browserWindow_yPfJ",browserWindowHeader:"browserWindowHeader_wZIS",buttons:"buttons_zwH1",dot:"dot_ZAty",browserWindowAddressBar:"browserWindowAddressBar_wTY6",browserType:"browserType_z_w8",spacer:"spacer_K9AZ",browserWindowMenuIcon:"browserWindowMenuIcon_pPcI",bar:"bar_zMS1",browserWindowBody:"browserWindowBody_fsGG"},s={chrome:"mdi-google-chrome",edge:"mdi-microsoft-edge",firefox:"mdi-firefox",safari:"mdi-apple-safari"},m={chrome:"blue",edge:"cyan",firefox:"orange",safari:"blue"},d={copied:"mdi-clipboard-check",error:"mdi-clipboard-text-off",spin:"mdi-loading"},o={copied:"green",error:"red",spin:"black"};function l(e){let{children:t,minHeight:r,copy:l,url:p="http://localhost:3000",browser:c}=e;const[u,h]=n.useState("none");n.useEffect((()=>{if(["none","spin","ready"].includes(u))return;const e=setTimeout((()=>h("none")),2e3);return()=>clearTimeout(e)}),[u]);return n.createElement("div",{className:i.browserWindow,style:{minHeight:r}},n.createElement("div",{className:i.browserWindowHeader},n.createElement("div",{className:i.buttons},n.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,a.default)(i.browserWindowAddressBar,"text--truncate")},c&&n.createElement("i",{className:(0,a.default)("mdi",s[c],m[c],i.browserType)}),n.createElement("a",{href:p,target:"_blank",onClick:e=>{if(l){e.preventDefault(),e.stopPropagation(),h("spin");try{navigator.clipboard.writeText(p).then((()=>{h("copied")})).catch((e=>{h("error"),console.warn(e)}))}catch(t){console.warn(t),h("error")}}}},p),"none"!==u&&n.createElement(n.Fragment,null,n.createElement("div",{className:i.spacer}),n.createElement("i",{className:(0,a.default)("mdi",d[u],o[u],i.copyState)}))),n.createElement("div",{className:i.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar})))),n.createElement("div",{className:i.browserWindowBody},t))}},17265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),i=r(47308);const s={sidebar_custom_props:{id:"c63ef328-1005-4edf-af1c-9129a62df28c",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/20"}}},m="1. Webserver mit Python",d={unversionedId:"Netzwerke/Server/webserver",id:"version-24ef/Netzwerke/Server/webserver",title:"1. Webserver mit Python",description:"Server, Client, Nachrichten, Prokolle - Die Grundlagen",source:"@site/versioned_docs/version-24ef/02-Netzwerke/01-Server/01-webserver.md",sourceDirName:"02-Netzwerke/01-Server",slug:"/Netzwerke/Server/webserver",permalink:"/24ef/Netzwerke/Server/webserver",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"c63ef328-1005-4edf-af1c-9129a62df28c",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/20"}}},sidebar:"version-24ef/sidebar",previous:{title:"1. Webserver und HTTP",permalink:"/24ef/Netzwerke/Server/"},next:{title:"2. HTML",permalink:"/24ef/Netzwerke/Server/html"}},o={},l=[{value:"Server, Client, Nachrichten, Prokolle - Die Grundlagen",id:"server-client-nachrichten-prokolle---die-grundlagen",level:2},{value:"Webserver mit Python",id:"webserver-mit-python",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=p("Comment"),u=p("Figure"),h=p("SourceRef"),k=p("Answer"),v={toc:l},b="wrapper";function f(e){let{components:t,...s}=e;return(0,a.kt)(b,(0,n.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"1-webserver-mit-python"},"1. Webserver mit Python"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:r(2190).Z,width:"1500",height:"844"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(h,{parentName:"figcaption",bib:{author:"Bala Priya C",source:"https://geekflare.com/python-web-servers/",licence:"Unknown",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"server-client-nachrichten-prokolle---die-grundlagen"},"Server, Client, Nachrichten, Prokolle - Die Grundlagen"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Ein Webserver ist ein Computer, der darauf wartet, dass \xfcber das Netzwerk Anfragen f\xfcr Webseiten eintreffen, welche auf dem Webserver gespeichert sind. Der Webserver sendet dann die angefragten Seiten als Antwort zur\xfcck an den Computer, von welchem die Anfrage stammt."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Server\n"),(0,a.kt)("dd",{parentName:"dl"},"Ein Computer, welcher auf Anfragen wartet und diese beantwortet."),(0,a.kt)("dt",{parentName:"dl"},"Client\n"),(0,a.kt)("dd",{parentName:"dl"},"Ein Computer, welcher Anfragen an einen Server sendet."),(0,a.kt)("dt",{parentName:"dl"},"Request\n"),(0,a.kt)("dd",{parentName:"dl"},"Eine Nachricht, welche vom Client an den Server gesendet wird."),(0,a.kt)("dt",{parentName:"dl"},"Response\n"),(0,a.kt)("dd",{parentName:"dl"},"Die Antwort auf einen Request, welche vom Server an den Client gesendet wird.")),(0,a.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Man spricht bei Request und Response auch von ",(0,a.kt)("strong",{parentName:"p"},"Nachrichten"),", welche zwischen Client und Server ausgetauscht werden."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Sowohl auf dem Client, wie auf dem Server braucht es Programme, welche die ausgetauschten Nachrichten verarbeiten k\xf6nnen. Im Fall vom Web sind das der ",(0,a.kt)("strong",{parentName:"p"},"Browser")," auf der Clientseite und das ",(0,a.kt)("strong",{parentName:"p"},"Webserver-Programm")," auf der Serverseite."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Webseiten sind Dateien, deren Inhalt in der Sprache ",(0,a.kt)("strong",{parentName:"p"},"HTML")," (Hypertext Markup Language) geschrieben ist. HTML dient dabei dazu die Darstellung der Webseite festzulegen (\xdcberschriften, Abschnitte Tabellen, Links auf andere Seiten, etc.)."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Damit sich Client und Server gegenseitig verstehen, m\xfcssen die Nachrichten in einer genau festgelegten Reihenfolge und mit genau definiertem Inhalt ausgetauscht werden. Diese Vorschriften nennt man ein ",(0,a.kt)("strong",{parentName:"p"},"Protokolle")," (siehe auch ",(0,a.kt)("a",{parentName:"p",href:"/24ef/Netzwerke/Protokolle/"},"\ud83d\udc49 2. Protokolle"),"). Im Falle des Webs heisst das Protokoll ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," (Hypertext Transfer Protocol)."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"HTTP\n"),(0,a.kt)("dd",{parentName:"dl"},"Hypertext Transfer Protocol")),(0,a.kt)(c,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Das folgende Sequenzdiagramm verdeutlicht diese Zusammenh\xe4nge. Es zeigt die Reihenfolge der ausgetauschten Nachrichten f\xfcr die Abfrage einer Webseite aus dem Browser heraus. Beachten Sie, dass der Browser nur ein Programm ist, welches auf dem Client-Computer l\xe4uft. Das entsprechende Programm auf der Serverseite ist nicht separat dargestellt. Statt dessen ist die Datei dargestellt, welche auf dem Server gespeichert ist und deren Inhalt zum Client zur\xfcckgesendet wird."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant B as Browser\n    participant C as Client (IP-Adresse 10.0.123.68)\n    participant S as Webserver (IP-Adresse 10.0.123.4)\n    participant F as HTML-Datei index.htm\n    B->>C: http://10.0.123.4/index.html\n    C-)S: HTTP-Request: GET /index.htm\n    S->>F: liest Datei\n    F->>S: Inhalt der Datei (HTML)\n    S-)C: HTTP-Response: 200 OK, HTML-Inhalt\n    C->>B: HTML-Inhalt"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"webserver-mit-python"},"Webserver mit Python"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Python stellt eine Library zur Verf\xfcgung, mit welcher man ein einfaches Webserver-Programm erstellen kann. Ein solches ist in folgendem Snippet enthalten. Dieses Programm empf\xe4ngt Requests f\xfcr HTML-Dateien und sendet den Inhalt dieser Dateien zur\xfcck. Im Moment ist die Seite ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.html")," die einzige Seite, welche vom Webserver zur\xfcckgeschickt werden kann."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Da auf einem Server gleichzeitig verschiedene ",(0,a.kt)("strong",{parentName:"p"},"Dienste")," angeboten werden k\xf6nnen (z.B. k\xf6nnte auch noch ein E-Mail-Server laufen), muss man f\xfcr jeden Dienst eine ",(0,a.kt)("strong",{parentName:"p"},"Port-Adresse")," festlegen, unter welcher der Dienst auf ankommende Anfragen horcht. F\xfcr unseren einfachen Webserver wird im Snippet der Port mit der Nummer ",(0,a.kt)("inlineCode",{parentName:"p"},"8000")," festgelegt."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"IP-Adresse\n"),(0,a.kt)("dd",{parentName:"dl"},"Die IP-Adresse ist eine eindeutige Adresse, welche jedem Computer (somit auch jedem Server) im Internet zugewiesen wird."),(0,a.kt)("dt",{parentName:"dl"},"Localhost\n"),(0,a.kt)("dd",{parentName:"dl"},"Lokale IP-Adresse, welche auf dem eigenen Computer verweist. Sie ist immer ",(0,a.kt)("inlineCode",{parentName:"dd"},"127.0.0.1"),"."),(0,a.kt)("dt",{parentName:"dl"},"Port\n"),(0,a.kt)("dd",{parentName:"dl"},"Ein Port ist eine Nummer, welche den Dienst auf einem Computer identifiziert. Dadurch kann ein Computer mehrere Dienste gleichzeitig anbieten."),(0,a.kt)("dt",{parentName:"dl"},"URL / URI\n"),(0,a.kt)("dd",{parentName:"dl"},"Universal Resource Locator / Universal Resource Identifier")),(0,a.kt)(c,{parentName:"div",type:"deflist",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Um von einem Browser aus die Seite ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.html")," anzeigen zu lassen, muss man im Browser folgende ",(0,a.kt)("strong",{parentName:"p"},"URL")," (Universal Resource Locator) eingeben:"),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,a.kt)(i.Z,{url:"http://Server-IP-Adresse:8000/Pfad/hello.html",mdxType:"BrowserWindow"},(0,a.kt)("h1",null,"Hello"),(0,a.kt)("p",null,"Wenn Sie dies sehen, so haben Sie eine erfolgreiche Abfrage auf den ",(0,a.kt)("b",null,"SimlpeWebServer"),"get\xe4tigt."),(0,a.kt)("img",{src:"https://www.gbsl.ch/wp-content/uploads/2020/07/Header-GBSL-1170x450.jpg",width:"400"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die IP-Adresse des Servers k\xf6nnte zum Beispiel ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.123.4")," sein."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Der Pfad entspricht der Ordnerreihenfolge, ausgehend vom Workspace in VSC, in dem die Datei ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.html")," gespeichert ist, z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"2258084"),"."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,a.kt)("admonition",{title:"Python Webserver",type:"aufgabe"},(0,a.kt)(k,{type:"state",webKey:"6a13422c-52ba-410a-a3f6-5bc362731241",mdxType:"Answer"}),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Ordner\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/docs/Netzwerke/webserver"))),(0,a.kt)(c,{parentName:"div",type:"deflist",nr:3,mdxType:"Comment"})),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Speichern Sie folgende Snippets in Ihrem Repository unter dem Ordner ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/Netzwerke/webserver")," ab."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("div",{parentName:"div"},(0,a.kt)("details",{parentName:"div"},(0,a.kt)("summary",{parentName:"details"},"Snippets"),(0,a.kt)("pre",{parentName:"details"},(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="SimpleWebServer.py"',reference:!0,title:'"SimpleWebServer.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/Netzwerke-ef/01-Server/snippets/simple-server.py\n")),(0,a.kt)("pre",{parentName:"details"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'reference title="hello.html"',reference:!0,title:'"hello.html"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/Netzwerke-ef/01-Server/snippets/hello.html\n")))),(0,a.kt)(c,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"\xd6ffnen Sie auf Ihrem Notebook einen Browser und versuchen Sie die Seite hello.html anzuzeigen. Dazu m\xfcssen Sie in Ihrem Browser die richtige URL eingeben. Weil Ihr Browser auf dem selben Computer l\xe4uft, wie der Webserver, k\xf6nnen Sie statt der IP-Adresse Ihres Computers auch ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," oder die lokale IP-Adresse ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," schreiben. Beim Pfad m\xfcssen Sie darauf achten, in welchen Ordner die Datei ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.html")," gespeichert ist."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Wenn Sie erfolgreich waren, machen Sie einen Screenshot von Ihrem Browser, in welchem man die URL und die Seite sieht und laden Sie diesen als Antwort hoch (die URL soll erkennbar sein)."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,a.kt)(k,{type:"text",webKey:"d24cea7c-6310-4d0b-bab7-ab4206c1b55f",mdxType:"Answer"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Nun ist dies wohl eine recht umst\xe4ndliche URL. Jenachdem aus welchem Ordner heraus das Python-Skript gestartet wurde, \xe4ndert sich die URL. Um diese m\xf6glichst kurz zu halten, kann man das Skript direkt im Ordner ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/Netzwerke/webserver")," ausf\xfchren. Dazu m\xfcssen Sie in VSC links in der Ordner\xfcbersicht auf den Ordner ",(0,a.kt)("strong",{parentName:"p",className:"underline"},"webserver")," rechtsklicken und dort ",(0,a.kt)("inlineCode",{parentName:"p"},"Open in Integrated Terminal")," ausw\xe4hlen. Nun \xf6ffnet sich ein Terminalfenster, welches sich im Ordner ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/Netzwerke/webserver")," befindet. In diesem Fenster k\xf6nnen Sie nun das Python-Skript mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 simple-server.py")," starten. Die URL wird nun wie folgt aussehen: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/hello.html"),"."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))))))}f.isMDXComponent=!0},2190:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/python-web-server-5a04ce7ac0ef2dfcc912e5ba97e815aa.webp"}}]);