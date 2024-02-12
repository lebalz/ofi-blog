"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[56979],{14430:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=r(85893),s=r(11151);const d={sidebar_custom_props:{id:"4ddf5e10-b449-4918-9880-8303f2be10fe"}},t="11. NAT",a={id:"Netzwerke/NAT/README",title:"11. NAT",description:"Network Address Translation",source:"@site/versioned_docs/version-24ef/02-Netzwerke/11-NAT/README.md",sourceDirName:"02-Netzwerke/11-NAT",slug:"/Netzwerke/NAT/",permalink:"/24ef/Netzwerke/NAT/",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"4ddf5e10-b449-4918-9880-8303f2be10fe"}},sidebar:"sidebar",previous:{title:"10. TCP/UDP Protokoll",permalink:"/24ef/Netzwerke/TCP/"},next:{title:"12. DNS",permalink:"/24ef/Netzwerke/DNS/"}},l={},c=[{value:"Network Address Translation",id:"network-address-translation",level:2},{value:"Warum NAT?",id:"warum-nat",level:2},{value:"Funktionsweise NAT",id:"funktionsweise-nat",level:2},{value:"Ablauf",id:"ablauf",level:3},{value:"DNAT - Destination Network Address Translation (Port-Forwarding)",id:"dnat---destination-network-address-translation-port-forwarding",level:3},{value:"Probleme durch NAT",id:"probleme-durch-nat",level:3},{value:"Beispiel VoIP",id:"beispiel-voip",level:4},{value:"NAT als Sicherheitsfeature?",id:"nat-als-sicherheitsfeature",level:3},{value:"Hole-Punching",id:"hole-punching",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components},{Answer:d,Comment:t,Details:a,Dl:l,Figure:c,Solution:h}=n;return d||m("Answer",!0),t||m("Comment",!0),a||m("Details",!0),l||m("Dl",!0),c||m("Figure",!0),h||m("Solution",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h1,{id:"11-nat",children:"11. NAT"}),(0,i.jsx)(t,{nr:0,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"Pr\xe4sentation"})}),(0,i.jsx)("iframe",{src:"/slides/tcp-nat-ef.html",style:{border:"0px",width:"100%",height:"500px"},allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"network-address-translation",children:"Network Address Translation"}),(0,i.jsx)(t,{nr:1,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"NAT (Network Address Translation) ist ein Verfahren, dass in IP-Routern eingesetzt wird, die lokale Netzwerke mit dem Internet verbinden. Weil Internet-Zug\xe4nge in der Regel nur \xfcber eine einzige \xf6ffentliche und damit routbare IPv4-Adresse verf\xfcgen, m\xfcssen sich alle anderen Hosts im lokalen Netzwerk mit privaten IPv4-Adressen begn\xfcgen. Private IP-Adressen d\xfcrfen zwar mehrfach verwendet werden, aber besitzen in \xf6ffentlichen Netzen keine G\xfcltigkeit. Hosts mit einer privaten IPv4-Adresse k\xf6nnen somit nicht mit Hosts ausserhalb des lokalen Netzwerks kommunizieren."}),(0,i.jsx)(t,{nr:0,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Damit trotzdem alle Computer mit privater IPv4-Adresse Zugang zum Internet bekommen k\xf6nnen, muss der Internet-Zugangs-Router in allen ausgehenden Datenpaketen die private IPv4-Adresse der lokalen Hosts durch seine eigene, \xf6ffentliche IPv4-Adresse ersetzen. Damit die eingehenden Datenpakete dem lokalen Host zugeordnet werden k\xf6nnen, speichert der Router zus\xe4tzliche die Port-Nummern der TCP-Verbindungen in einer sogenannten NAT-Tabelle."}),(0,i.jsx)(t,{nr:1,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"In Verbindung mit den privaten IPv4-Adressen wird NAT eingesetzt, damit \xfcber die Netzgrenzen hinweg Daten ausgetauscht, E-Mails verschickt und empfangen, sowie auf das World Wide Web (WWW) zugegriffen werden k\xf6nnen.\nNAT ist allerdings nur eine Notl\xf6sung, um die Adressknappheit von IPv4 zu umgehen. Um die damit einhergehenden Probleme zu l\xf6sen muss langfristig auf ein Internet-Protokoll mit einem gr\xf6sseren Adressraum umgestellt werden. IPv6 ist ein solches Protokoll."}),(0,i.jsx)(t,{nr:2,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"warum-nat",children:"Warum NAT?"}),(0,i.jsx)(t,{nr:2,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Die ersten IPv4-Netze waren anfangs eigenst\xe4ndige Netz ohne Verbindung nach aussen. Hier begn\xfcgte man sich mit IPv4-Adressen aus den privaten Adressbereichen. Parallel dazu kam es bereits Ende der 1990er Jahre zu Engp\xe4ssen bei \xf6ffentlichen IPv4-Adressen. Die steigende Anzahl der Einwahlzug\xe4nge \xfcber das Telefonnetz mussten mit IPv4-Adressen versorgt werden.\nBis heute bekommt ein Internet-Anschluss nur eine IPv4-Adresse f\xfcr ein Ger\xe4t. Damals war es undenkbar, dass an einem Internet-Anschluss ein ganzes Heimnetzwerk betrieben wird. Wenn ein Haushalt einen PC per Modem an das Telefonnetz angeschlossen und sich ins Internet eingew\xe4hlt hat, dann war das schon etwas besonderes."}),(0,i.jsx)(t,{nr:3,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Heute betreibt jeder Haushalt mit Internet-Zugang sein eigenes lokales Netzwerk, in dem jedes Endger\xe4t eine IPv4-Adresse braucht. In solchen F\xe4llen bekommen die Ger\xe4te IPv4-Adressen aus den privaten Adressr\xe4umen 10.0.0.0/8, 192.168.0.0/16 oder 172.16.0.0/12 zugeteilt, um die wenigen \xf6ffentlichen IPv4-Adressen einzusparen."}),(0,i.jsx)(t,{nr:4,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Allerdings sind private IPv4-Adressen nicht routbar. Das heisst, sie sind aus dem Internet nicht erreichbar und es kann keine direkte Verbindung zu Ger\xe4ten hinter einem NAT aufgebaut werden. Die Andere Richtung, aus dem privaten Netzwerk ins \xf6ffentliche Netzwerk, ist jedoch dank einem Austausch der privaten IP-Adresse mit der \xf6ffentlichen IP-Adresse des NAT's m\xf6glich. Diese Zuordnung wird in der ",(0,i.jsx)(n.strong,{children:"NAT-Tabelle"})," gespeichert, so dass beim Erhalt der Antwort die \xd6ffentliche Adresse wieder durch die Private ausgetauscht werden kann."]}),(0,i.jsx)(t,{nr:5,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h2,{id:"funktionsweise-nat",children:"Funktionsweise NAT"}),(0,i.jsx)(t,{nr:3,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Innerhalb des lokalen Netzwerks hat der Router die IP-Adresse ",(0,i.jsx)(n.code,{children:"192.168.0.1"}),", die f\xfcr den LAN-Port gilt und \xfcber die der Router im LAN direkt erreichbar und konfiguriert ist. Gleichzeitig handelt es sich dabei um die Adresse des Standard-Gateways und zum Beispiel des lokalen DNS-Servers. Der Router ist also das Standard-Gateway \xfcber das alle Verbindung laufen. Mit seiner \xf6ffentlichen IP-Adresse tritt der Router als Stellvertreter f\xfcr alle Stationen seines lokalen Netzwerks (LAN) auf."]}),(0,i.jsx)(t,{nr:6,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Wenn ein Datenpaket mit einer Ziel-Adresse ausserhalb des lokalen Netzwerks adressiert ist, dann ersetzt der Router die Quell-Adresse durch seine \xf6ffentliche IP-Adresse. Die Port-Nummer (TCP oder UDP) wird durch eine andere Port-Nummer ersetzt. Um sp\xe4ter die Antwortpakete der richtigen Station zuordnen zu k\xf6nnen f\xfchrt der Router eine Tabelle mit den ge\xe4nderten Quell-Adressen und den dazugeh\xf6rigen Port-Nummern. Wenn also Pakete mit einer bestimmten Port-Nummer zur\xfcckkommen, dann ersetzt NAT die Ziel-Adresse durch die richtige Adresse und Port-Nummer."}),(0,i.jsx)(t,{nr:7,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"In der NAT-Tabelle hat jeder Eintrag auch eine Zeitmarkierung. Nach einer bestimmten Zeit der Inaktivit\xe4t wird der betreffende Eintrag gel\xf6scht. Auf diese Weise wird sichergestellt, dass keine Ports offen bleiben.\nWeil dieses Verfahren die Absender-Adresse (Source) jedes ausgehenden Datenpakets \xe4ndert, nennt man dieses Verfahren Source NAT (SNAT). SNAT bezeichnet man in der Regel einfach als NAT."}),(0,i.jsx)(t,{nr:8,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"ablauf",children:"Ablauf"}),(0,i.jsx)(t,{nr:4,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(l,{children:[(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"WAN"})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:"Wide Area Network"})}),(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"LAN"})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:"Local Area Network"})})]}),(0,i.jsx)(t,{nr:9,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)("div",{className:"flex",style:{alignItems:"center"},children:[(0,i.jsx)("div",{className:"item",children:(0,i.jsx)("div",{className:"content",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Der Client schickt seine Datenpakete mit der IP-Adresse ",(0,i.jsx)("strong",{className:"boxed",children:"192.168.0.2"})," und dem TCP-Port ",(0,i.jsx)("strong",{className:"boxed",children:"10101"})," an sein Standard-Gateway, bei dem es sich um einen NAT-Router handelt."]}),(0,i.jsx)(t,{nr:10,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Der NAT-Router tauscht IP-Adresse (LAN-Adresse) und TCP-Port (LAN-Port) aus und speichert beides mit der getauschten Port-Nummer (WAN-Port) in der NAT-Tabelle."}),(0,i.jsx)(t,{nr:11,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Der Router leitet das Datenpaket mit der WAN-Adresse ",(0,i.jsx)("strong",{className:"boxed",children:"220.0.0.1"})," und der neuen TCP-Port ",(0,i.jsx)("strong",{className:"boxed",children:"20202"})," ins Internet weiter."]}),(0,i.jsx)(t,{nr:12,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Der Empf\xe4nger (Server) verarbeitet das Datenpaket und schickt seine Antwort zur\xfcck."}),(0,i.jsx)(t,{nr:13,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Der NAT-Router stellt nun anhand der Port-Nummer ",(0,i.jsx)("strong",{className:"boxed",children:"20202"})," (WAN-Port) fest, f\xfcr welche IP-Adresse (LAN-Adresse) das Paket im lokalen Netz gedacht ist."]}),(0,i.jsx)(t,{nr:14,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Er tauscht die IP-Adresse und die Port-Nummer wieder aus und leitet das Datenpaket ins lokale Netz weiter, wo es der Client entgegennimmt."}),(0,i.jsx)(t,{nr:15,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]})})}),(0,i.jsx)("div",{className:"item",style:{flexBasis:"250px"},children:(0,i.jsx)("div",{className:"content",children:(0,i.jsx)(c,{children:(0,i.jsx)(n.img,{src:r(49453).Z+"",width:"1572",height:"666"})})})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"\u2b50 D-NAT & Port-Forwarding"})}),(0,i.jsx)(n.h3,{id:"dnat---destination-network-address-translation-port-forwarding",children:"DNAT - Destination Network Address Translation (Port-Forwarding)"}),(0,i.jsx)(c,{children:(0,i.jsx)(n.img,{src:r(20741).Z+"",width:"1270",height:"306"})}),(0,i.jsx)(n.p,{children:"NAT setzt dynamisch eine \xf6ffentliche IP-Adresse auf mehrere private IP-Adressen um. Jede ausgehende Verbindung wird mit IP-Adresse und Portnummer festgehalten. Anhand der Portnummer kann NAT eingehende Datenpakete einer lokalen Station zuordnen. Diese Zuordnung ist allerdings nur f\xfcr kurze Zeit g\xfcltig. Das bedeutet, dass Verbindungen nur aus dem lokalen Netzwerk ins \xf6ffentliche Netz aufgebaut werden k\xf6nnen, nicht umgekehrt.\nWenn man doch einen Host innerhalb des lokalen Netzwerks dauerhaft aus dem \xf6ffentlichen Netz erreichbar machen will, dann ist das nur \xfcber einen Umweg m\xf6glich. Das Verfahren nennt sich Destination NAT (DNAT), allgemein als Port-Forwarding oder auch Port-Weiterleitung bekannt. Dabei wird in der Router-Konfiguration ein TCP-Port fest einer IP-Adresse zugeordnet. Daraufhin leitet der Router alle auf diesem Port eingehenden Datenpakete an diesen Host weiter.\nVorsicht ist beim Freischalten von TCP-Ports (Port-Forwarding) geboten. Wer keine Server-Dienste im Internet zur Verf\xfcgung stellt, sollte alle TCP-Ports des Routers (von 0 bis 1.023) sperren. Gut vorkonfigurierte Router haben das schon automatisch eingestellt.\nWer auf Port-Forwarding nicht verzichten kann, sollte aus Sicherheitsgr\xfcnden eine demilitarisierte Zone (DMZ) einrichten und so den Datenverkehr aus dem Internet aus dem lokalen Netzwerk heraus halten."})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"probleme-durch-nat",children:"Probleme durch NAT"}),(0,i.jsx)(t,{nr:5,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Ein Problem ist, dass die Anwendungen und Anwendungsprotokolle nichts davon wissen, wenn sie auf einem Host laufen, der nur eine private IPv4-Adresse hat. Solange Protokolle und Anwendungen nach dem Client-Server-Prinzip arbeiten stellt das noch kein Problem dar. Wenn jedoch eine Anwendung dem Ende-zu-Ende-Prinzip folgt, dann bedarf es Hilfskonstruktionen, damit Hosts mit privater IPv4-Adresse erreichbar sind.\nF\xfcr viele Protokolle existieren Umgehungsmechanismen f\xfcr NAT, die jedoch die Komplexit\xe4t und Fehleranf\xe4lligkeit steigern und viele Systeme und Anwendungen von deren Verf\xfcgbarkeit abh\xe4ngig machen. Dadurch werden viele Internet-Anwendungen und -Dienste komplizierter, was insgesamt auch zu mehr Sicherheitsl\xfccken f\xfchrt."}),(0,i.jsx)(t,{nr:16,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h4,{id:"beispiel-voip",children:"Beispiel VoIP"}),(0,i.jsx)(t,{nr:6,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Bei der Internet-Telefonie (VoIP) st keine direkte Verbindung zu einem VoIP-Telefon m\xf6glich, wenn dieses in einem privaten LAN ist. Hierbei bedarf es zentraler Gateways, an denen sich die VoIP-Telefone anmelden und regelm\xe4ssig Kontakt herstellen m\xfcssen, damit das Telefon durch NAT-Router erreichbar bleibt."}),(0,i.jsx)(t,{nr:17,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Probleme gibt es auch bei FTP, Messaging und Push Notifications. Auch hier wird vorausgesetzt, dass der Client direkt erreichbar ist, was er wegen der privaten IPv4-Adresse nicht ist."}),(0,i.jsx)(t,{nr:18,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Die Eintr\xe4ge in der NAT-Tabelle des Routers sind nur f\xfcr eine kurze Zeit g\xfcltig. F\xfcr eine Anwendung, die nur sehr unregelm\xe4ssig Daten austauscht, bedeutet das, dass st\xe4ndig die Verbindung abgebrochen wird und dadurch die Erreichbarkeit eingeschr\xe4nkt ist. Das hat zur Folge, dass diese Anwendung unter Umst\xe4nden in einer NAT-Umgebung nicht funktioniert. Und somit kann sich diese Anwendung im Internet nicht durchsetzen. Den die meisten Clients befinden sich typischerweise in einer NAT-Umgebung.\nUm dauerhaft ein Loch in den NAT-Router zu bekommen, wird mit Port-Forwarding (DNAT) gearbeitet. Das bedeutet, dass ein eingehendes Datenpaket mit einem bestimmten TCP-/UDP-Port an eine bestimmte IP-Adresse im lokalen Netzwerk geschickt wird."}),(0,i.jsx)(t,{nr:19,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Probleme mit NAT gibt es auch da, wo innerhalb des Protokolls die IPv4-Adresse des Hosts mitgeteilt wird. Wenn zum Beispiel bei verschl\xfcsselten IPv4-Paketen eine Checksumme \xfcber die IPv4-Adresse zur Integrit\xe4tskontrolle gebildet wird. Aber durch den Einsatz von NAT werden die Adressen im IPv4-Header ge\xe4ndert. Dadurch scheitern Protokoll, die darauf angewiesen sind, dass die Integrit\xe4t des IPv4-Headers erhalten bleibt. Zum Beispiel IPsec f\xfcr VPN."}),(0,i.jsx)(t,{nr:20,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Wegen den Auswirkungen durch NAT haben sich zentralistische Dienste wie Skype, YouTube und TikTok entwickelt, die die Inhalte aller Internet-Teilnehmer stellvertretend bereitstellen. Diese Dienste haben dadurch die Kontrolle \xfcber pers\xf6nliche Daten gewonnen und k\xf6nnen auf dieser Basis ihre \xe4usserst lukrativen Gesch\xe4ftsmodelle betreiben."}),(0,i.jsx)(t,{nr:21,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"nat-als-sicherheitsfeature",children:"NAT als Sicherheitsfeature?"}),(0,i.jsx)(t,{nr:7,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"NAT wird oft in Beschreibungen von Ger\xe4ten als Sicherheitsmerkmal bezeichnet. Damit ist der Mechanismus gemeint, der als Nebenprodukt verhindert, dass ein Host hinter einem NAT-Router von ausserhalb direkt ansprechbar ist. Die Systeme im NAT-Netzwerk sind von aussen nicht mehr anhand ihrer IPv4-Adresse voneinander zu unterscheiden. Weil alle dieselbe \xf6ffentliche IPv4-Adresse f\xfcr ihre externen Verbindungen vom NAT-Router bekommen. Das verschafft den Nutzern einen gewissen Grad an Privatsph\xe4re und Sicherheit."}),(0,i.jsx)(t,{nr:22,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:'Private IPv4-Adressen in Kombination mit NAT wirken in gewisser Weise wie eine eingebaute "Firewall". Denn von aussen initiierte Verbindungsversuche werden verworfen, wenn vorher keine ausgehende Verbindung bestanden hat. NAT wirkt wie eine rudiment\xe4re Firewall, die alle unberechtigten Zugriffe von aussen blockiert. Es handelt sich dabei um eine gewollte Schutzfunktion f\xfcr unberechtigten und unsicheren Datenverkehr.'}),(0,i.jsx)(t,{nr:23,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["NAT ist deshalb ",(0,i.jsx)(n.strong,{children:"durchaus ein Sicherheitsmerkmal"})," f\xfcr lokale Netzwerke. NAT ersetzt aber keinen Paketfilter und schon gar keine vollwertige Firewall. NAT verhindert nur Datenverbindungen, die nicht vom internen Netzwerk (LAN) aus initiiert wurden und somit kein vorhergehender Datenverkehr existiert hat.\nDie gr\xf6ssten Sicherheitsprobleme liegen meist auf der Anwendungsebene bzw. werden durch unsachgem\xe4sse Handhabung der Anwender ausgel\xf6st, was man mit NAT nicht verhindern kann - mit einer \u201eStateful Inspection\u201c Firewall schon."]}),(0,i.jsx)(t,{nr:24,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Aufbohren der NAT-Regeln / Firewall",type:"aufgabe",children:[(0,i.jsx)(d,{type:"state",webKey:"149f79b9-7336-4220-8a10-93c661d98cb9"}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Im Unterricht haben wir mit zwei Servern (einer in Deutschland, einer in Finnland) nachgestellt, wie die Sch\xfctzende Wirkung von NAT (oder auch von Firewalls) umgangen werden k\xf6nnen. Beschreiben Sie in eigenen Worten, was gemacht wurde, um eine UDP-Verbindung mit einem Server hinter einem NAT aufzubauen."}),(0,i.jsx)(t,{nr:25,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsxs)(n.p,{children:["Erstellen Sie dabei eine Situations\xfcbersicht (entweder per Hand oder mit ",(0,i.jsx)(n.a,{href:"https://excalidraw.com/",children:"\ud83d\udc49 Excalidraw"}),")"]}),(0,i.jsx)(t,{nr:26,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsx)(d,{type:"text",webKey:"9eaf1ceb-bb52-4400-8ca7-913dd9c37766"}),(0,i.jsxs)(h,{webKey:"cbbea909-5c59-4524-9dd2-ac2f8d385ee8",open:!0,children:[(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Ausgangslage: Maria und Reto sind in einem privaten Netzwerk und haben \xfcber eine Firewall (oder eine Firewall) Zugang zu einer \xf6ffentlichen IP-Adresse. Maria m\xf6chte mit Reto kommunizieren."}),(0,i.jsx)(t,{nr:27,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsx)(c,{children:(0,i.jsx)(n.img,{src:r(64507).Z+"",width:"616",height:"140"})}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.p,{children:"Damit Maria einen Facetime-Anruf an Reto starten kann, gibt es zwei M\xf6glichkeiten:"}),(0,i.jsxs)(l,{children:[(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"Relay-Server"})}),(0,i.jsx)("dd",{children:(0,i.jsxs)(n.p,{children:["Maria und Reto sind mit einem ",(0,i.jsx)("strong",{className:"boxed",children:"Relay-Server"})," verbunden, welcher die Datenpakete jeweils weiterleitet. Wenn Maria nun Reto anrufen m\xf6chte, leitet der ",(0,i.jsx)("strong",{className:"boxed",children:"Relay-Server"})," die Pakete an Reto weiter - es klingelt. Dies funktioniert, da die Firewall von Reto standardm\xe4ssig Verbindungen von innen nach aussen zul\xe4sst. Die Firewall von Maria ist nicht vorhanden, somit kann sie auch Verbindungen von aussen nach innen aufbauen. Die Voraussetzung hier also, dass Beide mit einem Relay-Server verbunden sind."]})}),(0,i.jsx)("dd",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nachteil"}),": Die Verbindung ist langsam, da die Datenpakete \xfcber den Relay-Server laufen m\xfcssen."]})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(c,{options:{width:"90%",margin:"0"},children:(0,i.jsx)(n.img,{src:r(84867).Z+"",width:"616",height:"343"})})})}),(0,i.jsx)("dt",{children:(0,i.jsx)(n.p,{children:"Hole-Punching"})}),(0,i.jsx)("dd",{children:(0,i.jsxs)(n.p,{children:["Der Verbindungsaufbau l\xe4uft wie oben, doch das eigentliche Telefonat soll nicht \xfcber den Relay-Server laufen; Die Datenpakete sollen den ",(0,i.jsx)(n.strong,{children:"direkten"})," Weg zwischen Maria und Reto nehmen. Wegen der Firewall kann aber keine direkte Verbindung von Maria zu Reto (oder umgekehrt) aufgebaut werden, da eingehende Verbindungen abgelehnt werden."]})}),(0,i.jsx)("dd",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(c,{options:{width:"90%",margin:"0"},children:(0,i.jsx)(n.img,{src:r(15105).Z+"",width:"616",height:"343"})})})})]}),(0,i.jsx)(t,{nr:28,type:"paragraph",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)(n.div,{className:"commentable",children:[(0,i.jsx)(n.h3,{id:"hole-punching",children:"Hole-Punching"}),(0,i.jsx)(t,{nr:8,type:"heading",pageId:"4ddf5e10-b449-4918-9880-8303f2be10fe",children:(0,i.jsx)(n.p,{children:"."})})]}),(0,i.jsxs)("div",{className:"flex-cards flex",children:[(0,i.jsx)("div",{className:"item card",style:{flexBasis:"450px"},children:(0,i.jsx)("div",{className:"card__image",children:(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{alt:"Maria erh\xe4lt vom Relay-Server die IP von Retos NAT/Firewall",src:r(73685).Z+"",width:"2302",height:"894"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Maria erh\xe4lt vom Relay-Server die IP von Retos NAT/Firewall",(0,i.jsx)("span",{style:{flexGrow:1}})]})]})})}),(0,i.jsx)("div",{className:"item card",style:{flexBasis:"450px"},children:(0,i.jsx)("div",{className:"card__image",children:(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{alt:"Maria \xf6ffnet ihre Firewall mit einem ping - es kommt keine Antwort zur\xfcck, da bei Reto kein UDP Dienst auf dem Port 53 verf\xfcgbar ist (dies ist immer so - Port 53 ist f\xfcr DNS reserviert!).",src:r(5323).Z+"",width:"2297",height:"814"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Maria \xf6ffnet ihre Firewall mit einem ping - es kommt keine Antwort zur\xfcck, da bei Reto kein UDP Dienst auf dem Port 53 verf\xfcgbar ist (dies ist immer so - Port 53 ist f\xfcr DNS reserviert!).",(0,i.jsx)("span",{style:{flexGrow:1}})]})]})})}),(0,i.jsx)("div",{className:"item card",style:{flexBasis:"450px"},children:(0,i.jsx)("div",{className:"card__image",children:(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{alt:"Maria Teilt Reto \xfcber den Relay Server mit, welche IP sie hat, und welcher Port offen ist",src:r(7324).Z+"",width:"2297",height:"900"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Maria Teilt Reto \xfcber den Relay Server mit, welche IP sie hat, und welcher Port offen ist",(0,i.jsx)("span",{style:{flexGrow:1}})]})]})})}),(0,i.jsx)("div",{className:"item card",style:{flexBasis:"450px"},children:(0,i.jsx)("div",{className:"card__image",children:(0,i.jsxs)(c,{children:[(0,i.jsx)(n.img,{alt:"Reto stellt eine Verbindung zu Maria her",src:r(9914).Z+"",width:"2297",height:"816"}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("span",{style:{flexGrow:1}}),"Reto stellt eine Verbindung zu Maria her",(0,i.jsx)("span",{style:{flexGrow:1}})]})]})})})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},20741:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/dnat-bae40ccd48c7c8d7aeb981f4b369042a.png"},73685:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-direct-lsg-00-a686636d13ebc21ca8d3dd35a705932b.png"},5323:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-direct-lsg-01-e3dbdaa2c9d1baa861ccbbee7f065cde.png"},7324:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-direct-lsg-02-9ff960ee39d198eb4dc8423dd649cdf2.png"},9914:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-direct-lsg-03-082690a3e77f9acc89131957e1f410e3.png"},15105:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-direct-f1e596d1bce9585616ddab6204ca52ce.svg"},84867:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/facetime-relay-server-35e16cea86ed2b8c95a5c15d05bba0b1.svg"},64507:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/network-situation-876be8be4471f0ebe28c0428dad9807c.svg"},49453:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/snat-ablauf-e25bdedc335913dbc1dbcdd4507ca510.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var i=r(67294);const s={},d=i.createContext(s);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);