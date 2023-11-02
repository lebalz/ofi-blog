"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9218],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=d(t),k=r,c=p["".concat(o,".").concat(k)]||p[k]||u[k]||i;return t?a.createElement(c,s(s({ref:n},l),{},{components:t})):a.createElement(c,s({ref:n},l))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=k;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m[p]="string"==typeof e?e:r,s[1]=m;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},73621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:3,sidebar_custom_props:{id:"8841080c-3f96-4ff7-8417-b9ed97f6cae5",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Coroutinen-und-asyncio"}}},s="Zustandsmaschinen",m={unversionedId:"Robotik/zustandsmaschinen/index",id:"version-24ef/Robotik/zustandsmaschinen/index",title:"Zustandsmaschinen",description:"Einleitung",source:"@site/versioned_docs/version-24ef/04-Robotik/zustandsmaschinen/index.md",sourceDirName:"04-Robotik/zustandsmaschinen",slug:"/Robotik/zustandsmaschinen/",permalink:"/24ef/Robotik/zustandsmaschinen/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_custom_props:{id:"8841080c-3f96-4ff7-8417-b9ed97f6cae5",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Coroutinen-und-asyncio"}}},sidebar:"version-24ef/sidebar",previous:{title:"Pendelbus mit Blinker",permalink:"/24ef/Robotik/EV3/Pendelbus-Blink/"},next:{title:"Coroutinen und asyncio",permalink:"/24ef/Robotik/asyncio/"}},o={},d=[{value:"Einleitung",id:"einleitung",level:2},{value:"Zust\xe4nde und Ereignisse",id:"zust\xe4nde-und-ereignisse",level:2},{value:"Ereignisse",id:"ereignisse",level:3},{value:"Zust\xe4nde",id:"zust\xe4nde",level:3},{value:"State-Event-Tabellen",id:"state-event-tabellen",level:2},{value:"Zustandsdiagramme",id:"zustandsdiagramme",level:2},{value:"Umsetzung im Programm",id:"umsetzung-im-programm",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},p=l("Comment"),u=l("Figure"),k=l("SourceRef"),c={toc:d},g="wrapper";function f(e){let{components:n,...i}=e;return(0,r.kt)(g,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"zustandsmaschinen"},"Zustandsmaschinen"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"einleitung"},"Einleitung"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Roboter sind Maschinen, welche ",(0,r.kt)("strong",{parentName:"p"},"autonom")," eine bestimmte Aufgabe l\xf6sen. Roboter verf\xfcgen \xfcber ",(0,r.kt)("strong",{parentName:"p"},"Sensoren"),", um ihre Umgebung zu erfassen und \xfcber ",(0,r.kt)("strong",{parentName:"p"},"Aktoren")," um zu handeln. In der Mitte sitzt ein ",(0,r.kt)("strong",{parentName:"p"},"Embedded System"),", ein eingebettes Computersystem, welches den Roboter steuert. Es muss die Signale der Sensoren verarbeiten und daraus Steuersignale f\xfcr die Aktoren erzeugen. Man spricht auch vom ",(0,r.kt)("strong",{parentName:"p"},"Kontroller"),"."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Embedded System",src:t(93856).Z,width:"696",height:"432"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Embedded System",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(k,{parentName:"figcaption",bib:{author:"sdg",source:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Zustandsmaschinen",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Roboter k\xf6nnen ganz unterschiedliche Grade von ",(0,r.kt)("strong",{parentName:"p"},"Intelligenz")," aufweisen. Das geht vom Schweissroboter in der Automobilherstellung, welcher immer genau die gleichen Abl\xe4ufe durchf\xfchrt, dies aber mit grosser Geschwindigkeit und Pr\xe4zision, bis zum autonomen Roboter, welcher in einem Tr\xfcmmerhaufen nach Verletzten suchen kann."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein enstcheidender Faktor f\xfcr den Grad der Intelligenz ist die ",(0,r.kt)("strong",{parentName:"p"},"Software")," im Kontroller. Diese kann von einfachen ",(0,r.kt)("strong",{parentName:"p"},"Steuerprogrammen")," bis zu lernf\xe4higen Systemen mittels ",(0,r.kt)("strong",{parentName:"p"},"neuronalen Netzen")," und Deep-Learning gehen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine klassische Form von Steuerprogrammen beruht auf sogenannten ",(0,r.kt)("strong",{parentName:"p"},"Zustandsmaschinen"),", oder endlichen Automaten. Sie sind gut f\xfcr Aufgaben geeignet, wo eine ",(0,r.kt)("strong",{parentName:"p"},"endliche")," Zahl von ",(0,r.kt)("strong",{parentName:"p"},"Ereignissen")," verarbeitet werden muss und wo die ",(0,r.kt)("strong",{parentName:"p"},"Aktion"),", welche auf ein bestimmtes Ereignis erfolgt, ",(0,r.kt)("strong",{parentName:"p"},"zustandsabh\xe4ngig")," ist."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein gutes Beispiel ist die ",(0,r.kt)("strong",{parentName:"p"},"Steuerung eines Liftes"),". Die Sensoren umfassen die verschiedenen Kn\xf6pfe, um den Lift zu bestellen, Schalter, welche feststellen, ob die T\xfcren offen oder geschlossen sind, oder ob sich eine Person im Lift befindet, oder wo sich der Lift gerade befindet. Die Aktoren sind die verschiedenen Motoren f\xfcr die Kabine und die T\xfcren. Die Zustandsmaschine muss nun sicherstellen, dass beispielsweise die T\xfcren nur dann ge\xf6ffnet werden k\xf6nnen, wenn der Lift bei einer T\xfcre still steht, usw."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"zust\xe4nde-und-ereignisse"},"Zust\xe4nde und Ereignisse"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beim Entwurf einer Zustandsmaschine muss man sich \xfcberlegen, welche ",(0,r.kt)("strong",{parentName:"p"},"Ereignisse")," im System vorkommen und in welchen ",(0,r.kt)("strong",{parentName:"p"},"unterscheidbaren Zust\xe4nden")," das System sein kann. Das ist nicht immer ganz einfach."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"ereignisse"},"Ereignisse"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ereignisse beruhen auf den ",(0,r.kt)("strong",{parentName:"p"},"Signalen"),", welche die Sensoren liefern. Diese Signale k\xf6nnen sowohl zeitlich, wie auch wertem\xe4ssig ",(0,r.kt)("strong",{parentName:"p"},"kontinuierlich")," anfallen. Zum Beispiel misst ein Beschleunigungssensor die Beschleunigung andauernd und liefert fein aufgel\xf6ste Werte im Bereich der Messgenauigkeit des Sensors."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr eine Zustandsmaschine brauchen wir aber klar definiert Ereignisse. D.h. die Sensorwerte m\xfcssen laufend verarbeitet und daraus dann die interessierenden Ereignisse erzeugt werden. Im einfachsten Fall k\xf6nnte man \xfcberpr\xfcfen, ob der gemessene Wert einen ",(0,r.kt)("strong",{parentName:"p"},"Schwellwert")," \xfcbersteigt oder unterschreitet, zum Beispiel, ob die Beschleunigung gr\xf6sser oder kleiner als 1g ist."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"zust\xe4nde"},"Zust\xe4nde"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zust\xe4nde lassen sich am einfachsten finden, wenn man sich \xfcberlegt, auf welche Ereignisse das Sytem in einem bestimmten Zustand ",(0,r.kt)("strong",{parentName:"p"},"reagieren")," muss. Zum Beispiel muss ein Lift im Zustand ",(0,r.kt)("inlineCode",{parentName:"p"},"fahren")," nicht auf Tastendrucke auf die T\xfcrkn\xf6pfe reagieren. Daf\xfcr muss er aber anhalten, wenn der Stockwerksensor das richtige Stockwerk meldet, oder wenn die Nothalttaste gedr\xfcckt wird. Wichtig ist, dass Zust\xe4nde immer \xfcber eine bestimmt Zeit andauern, bis die Zustandsmaschine auf Grund eines Ereignisses in einen anderen Zustand wechselt. Diese \xdcbergang nennt man ",(0,r.kt)("strong",{parentName:"p"},"Transition"),"."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"state-event-tabellen"},"State-Event-Tabellen"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn man die Ereignisse und die Zust\xe4nde einer Zustandsmaschine kennt so kann man diese in einer Tabelle eintragen, der sogenannten ",(0,r.kt)("strong",{parentName:"p"},"State-Event-Tabelle"),". In den einzelnen Zellen der Tabelle tr\xe4gt man ein, was im betreffenden Zustand beim entsprechenden Ereignis passieren muss und welches der nachfolgende Zustand ist."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unvollst\xe4ndiges Beispiel f\xfcr einen Lift (Zust\xe4nde horizontal, Ereignise vertikal):"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Stockwerk 2, T\xfcre offen"),(0,r.kt)("th",{parentName:"tr",align:null},"Stockwerk 2, T\xfcre zu"),(0,r.kt)("th",{parentName:"tr",align:null},"fahren aufw\xe4rts"),(0,r.kt)("th",{parentName:"tr",align:null},"fahren abw\xe4rts"),(0,r.kt)("th",{parentName:"tr",align:null},"..."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"T\xfcre auf gedr\xfcckt")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"T\xfcre \xf6ffnen --\x3e Stockwerk 2, T\xfcre offen"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"T\xfcre zu gedr\xfcckt")),(0,r.kt)("td",{parentName:"tr",align:null},"T\xfcre schliessen --\x3e Stockwerk 2, T\xfcre zu"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Stockwerk 1 gedr\xfcckt")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Motor abw\xe4rts ein --\x3e fahren abw\xe4rts"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Stockwerk 3 gedr\xfcckt")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Motor aufw\xe4rts ein --\x3e fahren aufw\xe4rts"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Stockwerk 1 erreicht")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Motor aus, T\xfcre \xf6ffnen --\x3e Stockwerk 1, T\xfcre auf"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Stockwerk 3 erreicht")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Motor aus, T\xfcre \xf6ffnen --\x3e Stockwerk 3, T\xfcre auf"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"...")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)(p,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dieses Beispiel zeigt, dass in bestimmten Zust\xe4nden gewisse Ereignisse ignoriert werden. Die entsprechenden Zellen sind dann leer. Es k\xf6nte auch vorkommen, dass die Zustandsmaschine bei einem bestimmten Ereignis zwar eine Aktion durchf\xfchrt, den Zustand aber nicht wechselt. Die Zelle w\xe4re dann nicht leer, aber der Folgezustand w\xe4re derselbe."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"zustandsdiagramme"},"Zustandsdiagramme"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schliesslich treffen wir einen alten Bekannten an. Zustandsmaschinen k\xf6nnen auch durch ",(0,r.kt)("strong",{parentName:"p"},"Zustandsdiagramme")," dargestellt werden. Obiges Lift-Beispiel w\xfcrde als Zustandsdiagramm so aussehen:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("mermaid",{value:"stateDiagram-v2\n    s1: Stockwerk 2, T\xfcre zu\n    s2: Stockwerk 2, T\xfcre offen\n    s3: fahren abw\xe4rts\n    s4: fahren aufw\xe4rts\n    s5: Stockwerk 1, T\xfcre offen\n    s6: Stockwerk 3, T\xfcre offen\n    s1 --\x3e s2: T\xfcre auf gedr\xfcckt / T\xfcre \xf6ffnen\n    s2 --\x3e s1: T\xfcre zu gedr\xfcckt / T\xfcre schliessen\n    s1 --\x3e s3: Stockwerk 1 gedr\xfcckt / Motor abw\xe4rts ein\n    s1 --\x3e s4: Stockwerk 3 gedr\xfcckt / Motor aufw\xe4rts ein\n    s3 --\x3e s5: Stockwerk 1 erreicht / Motor aus, T\xfcre \xf6ffnen\n    s4 --\x3e s6: Stockwerk 3 erreicht / Motor aus, T\xfcre \xf6ffnen"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"umsetzung-im-programm"},"Umsetzung im Programm"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Implementation von Zustandsmaschinen sieht im Grund immer gleich aus: Eine ",(0,r.kt)("strong",{parentName:"p"},"zweifache Verschachtellung")," von ",(0,r.kt)("strong",{parentName:"p"},"if-elif-else-Anweisungen")," in einer Endlosschleife."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr das Lift-Beispiel k\xf6nnte das in Python so aussehen:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'floor_states = {\n    "floor1": "Stockwerk 1, T\xfcre offen",\n    "floor3": "Stockwerk 3, T\xfcre offen"\n}\n\nstate = "..."\nwhile True:\n    if state == "Stockwerk 2, T\xfcre zu":\n        if door_open_pressed() == True:\n            open_door()\n            state = "Stockwerk 2, T\xfcre offen"\n        elif floor1_pressed() == True:\n            floor = "floor1"\n            motor_down_on()\n            state = "fahren abw\xe4rts"\n        elif floor3_pressed() == True:\n            floor = "floor3"\n            motor_up_on()\n            state = "fahren aufw\xe4rts"\n    elif state == "Stockwerk 2, T\xfcre offen":\n        if door_closed_pressed() == True:\n            close_door()\n            state = "Stockwerk 2, T\xfcre zu"\n    elif state == "fahren abw\xe4rts":\n        if floor_position() == floor:\n            motor_off()\n            open_door()\n            state == floor_state[floor]\n    elif state == "fahren aufw\xe4rts":\n        if floor_position() == floor:\n            motor_off()\n            open_door()\n            state == floor_state[floor]\n...\n')),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Beispiel zeigt, dass in der Umsetzung im Programm teilweise ",(0,r.kt)("strong",{parentName:"p"},"Hilfsvariablen")," (",(0,r.kt)("inlineCode",{parentName:"p"},"floor"),", Zielstockwerk, das angefahren werden soll), ",(0,r.kt)("strong",{parentName:"p"},"Funktionen")," und weitere Python-Elemente, wie ",(0,r.kt)("strong",{parentName:"p"},"Listen")," und ",(0,r.kt)("strong",{parentName:"p"},"Dictionaries")," (",(0,r.kt)("inlineCode",{parentName:"p"},"floor_states"),", bildet Zielstockwerk auf den Zustand ab, welcher bei Erreichung eingenommen werden muss) ben\xf6tigt werden."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Man kann daran auch erkennen, dass die State-Event-Tabelle und das Zustandsdiagramm die Situation nicht ganz korrekt (oder zu stark vereinfacht) beschreiben. Zum Beispiel m\xfcssten ohne die Hilfsvariable ",(0,r.kt)("inlineCode",{parentName:"p"},"floor")," die Zust\xe4nde ",(0,r.kt)("inlineCode",{parentName:"p"},"fahren abw\xe4rts")," in die Zust\xe4nde ",(0,r.kt)("inlineCode",{parentName:"p"},"fahren abw\xe4rts zu Stockwerk 1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fahren abw\xe4rts zu Stockwerk 2"),", etc. und analog f\xfcr ",(0,r.kt)("inlineCode",{parentName:"p"},"fahren aufw\xe4rts")," aufgeteilt werden. Das w\xfcrde aber zu einer Explosion der Zust\xe4nde f\xfchren."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))}f.isMDXComponent=!0},93856:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/embedded_system-52804d41d5e6a46d87adaea7d011bcce.png"}}]);