"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[95078],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=i,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84384:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(92814),l=t(51436),o=t(86010),s=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:l.Xjp}))))},d=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},u=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+d(t.size)+")",n.maxHeight=d(t.size),delete t.size),t.height&&(n.maxHeight=d(t.height),n.height=d(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+d(t.width)+")",n.width=d(t.width),delete t.width),n=Object.assign({},n,t),r.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},p=function(e){if(e.isInline)return r.createElement(u,e);var n=r.useState(!1),t=(n[0],n[1]),a=r.useState(!1),l=a[0],d=a[1],p=e.caption&&"undefined"!==e.caption,m=e.bib||p;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,r,i,a,l;n=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=n.left<=r&&n.right>=r,l=n.top<=i&&n.bottom>=i,a&&l||t(!1)}},r.createElement(u,e),m&&r.createElement("figcaption",null,p&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,l?i.visible:void 0),onClick:function(){return d(!l)}},"@"),l&&r.createElement(s,e.bib)))}},93542:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=t(84384),o=(t(44996),["components"]),s={},d="Game-Runner",u={unversionedId:"Programmieren-1/Aufgaben/game_runner",id:"version-24L/Programmieren-1/Aufgaben/game_runner",title:"Game-Runner",description:"Auf https://game.gbsl.website lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden.",source:"@site/versioned_docs/version-24L/04-Programmieren-1/Aufgaben/14_game_runner.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/game_runner",permalink:"/24L/Programmieren-1/Aufgaben/game_runner",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/04-Programmieren-1/Aufgaben/14_game_runner.md",tags:[],version:"24L",sidebarPosition:14,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"Game Basics - Sterne Fangen",permalink:"/24L/Programmieren-1/Aufgaben/game_basics"},next:{title:"Turtles",permalink:"/24L/category/turtles"}},p={},m=[{value:"Game Hochladen",id:"game-hochladen",level:2},{value:"Anzeigebild hinzuf\xfcgen",id:"anzeigebild-hinzuf\xfcgen",level:2},{value:"Spieloptimierungen",id:"spieloptimierungen",level:2},{value:"Codeoptimierung",id:"codeoptimierung",level:3},{value:"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47",id:"wettbewerb-",level:2}],c={toc:m};function g(e){var n=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"game-runner"},"Game-Runner"),(0,a.kt)("p",null,"Auf ",(0,a.kt)("a",{parentName:"p",href:"https://game.gbsl.website"},"https://game.gbsl.website")," lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden."),(0,a.kt)("p",null,"Im erstellten Spiel wurde (in den meisten F\xe4llen","*",") eine Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"set_score")," definiert, \xfcber welche jeweils der neue Score aktualisiert wurde. Um den Score nun auch im Scoreboard zu registrieren, muss dort ",(0,a.kt)("inlineCode",{parentName:"p"},"device.report(new_score)")," aufgerufen werden. Sofern der aktuelle Wert einen neuen Punkte-H\xf6chststand ist, wird er ans Scoreboard geschickt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def set_score(new_score):\n    global score\n    score = new_score\n    if score > 10 and level == 1:\n        level_2()\n    elif score < 20 and level == 2:\n        level_1()\n    device.update_text(\n        id='score',\n        text=f'Score: {score}'\n    )\n    device.report(score)\n")),(0,a.kt)("p",null,"*"," Falls keine ",(0,a.kt)("inlineCode",{parentName:"p"},"set_score")," Funktion verwendet wurde, muss \xfcberall dort, wo der ",(0,a.kt)("inlineCode",{parentName:"p"},"score")," ver\xe4ndert wird das ",(0,a.kt)("inlineCode",{parentName:"p"},"device.set_score(score)")," aufgerufen werden."),(0,a.kt)("h2",{id:"game-hochladen"},"Game Hochladen"),(0,a.kt)("p",null,"Ein Game kann als ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," Ordner hochgeladen werden. Der komprimierte Ordner enth\xe4lt genau ein Python-Programm (z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"game.py"),") und falls das Spiel Bilder und oder Sound enth\xe4lt, auch diese Ordner."),(0,a.kt)("p",null,"Die Ordnerstruktur k\xf6nnte also in etwa wie folgt aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,a.kt)("h2",{id:"anzeigebild-hinzuf\xfcgen"},"Anzeigebild hinzuf\xfcgen"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(13694).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Es kann ein Anzeigebild f\xfcr das Game hochgeladen werden. Dazu wird dem Zip-Ordner ein Vorschaubild mit dem Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," (z.b. ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.png"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.jpg")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.gif"),") hinzugef\xfcgt. Die Ordnerstruktur sieht dann wie folgt aus:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wichtig"),": Das Vorschaubild muss exakt den Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," haben, sonst wird es nicht verwendet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 preview.png\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,a.kt)("h2",{id:"spieloptimierungen"},"Spieloptimierungen"),(0,a.kt)("p",null,"Damit das Spiel schneller l\xe4dt, gibt es ein paar Tricks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"entfernen von allen nicht verwendeten Bildern und Sound-Tracks aus den Bilder/Sound Ordnern"),(0,a.kt)("li",{parentName:"ul"},"Die Bildergr\xf6sse verringern, indem die Aufl\xf6sung des Bildes heruntergesetzt wird (bspw. f\xfcr Hintergr\xfcnde auf eine Breite von ",(0,a.kt)("inlineCode",{parentName:"li"},"500px"),", f\xfcr kleine Objekte auf eine Breite von ",(0,a.kt)("inlineCode",{parentName:"li"},"200px"),"). ",(0,a.kt)("strong",{parentName:"li"},"Achtung"),": Durch die Reduktion der Aufl\xf6sung gehen Informationen verloren und das Bild kann u.U. verpixelt werden.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.maclife.de/ratgeber/aendern-bildgroesse-vorschau-app-10080447.html"},"Mac OSX: Vorschau App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Fotos-verkleinern-in-Windows-10-so-geht-s-4114478.html#Fotos%20mit%20Paint%203D%20verkleinern"},"Windows 10: Paint 3D")))),(0,a.kt)("li",{parentName:"ul"},"Die Dateigr\xf6sse von Sound-Dateien reduzieren. Auch hier geht Soundqualit\xe4t verloren. Oft ist dies aber kaum sp\xfcrbar bei Smartphone/Laptop Lautsprechern. Diese Reduktion der Dateigr\xf6sse heisst ",(0,a.kt)("em",{parentName:"li"},"Komprimierung")," und kann bspw. mit einem Onlinetool gemacht werden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mp3smaller.com/"},"mp3smaller")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Small File Size (MP3 Bitrate 32Kbps)")," w\xe4hlen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.onlineconverter.com/compress-mp3"},"compress-mp3")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Quality: Best Compression")," w\xe4hlen")))),(0,a.kt)("h3",{id:"codeoptimierung"},"Codeoptimierung"),(0,a.kt)("p",null,"Wenn im Spiel mehrfach (daher auch an einem anderen Ort als ganz am Anfang) ",(0,a.kt)("inlineCode",{parentName:"p"},"device.clear_playground()")," steht, so k\xf6nnen bis auf den ersten Aufruf die Befehle zu ",(0,a.kt)("inlineCode",{parentName:"p"},"device.clean_playground()")," (mit einem ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," statt einem ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," am Ende) verwendet werden. Dies bewirkt, das die Bilder und Sound-Dateien nicht gel\xf6scht werden und somit nicht erneut hochgeladen werden m\xfcssen. Dazu m\xfcssen aber auch alle ",(0,a.kt)("inlineCode",{parentName:"p"},"device.configure_playground()")," Befehle (ausser der Erste!) angepasst werden und die ",(0,a.kt)("inlineCode",{parentName:"p"},"images=")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"audio_tracks=")," Optionen entfernt werden. (Bemerke: Die Option ",(0,a.kt)("inlineCode",{parentName:"p"},"image=")," kann dennoch gesetzt werden.)"),(0,a.kt)("h2",{id:"wettbewerb-"},"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47"),(0,a.kt)("p",null,"In jeder Klasse werden Spiele und SpielerInnen pr\xe4miert:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Das am besten bewertete Spiel der Klasse"),(0,a.kt)("li",{parentName:"ul"},"Das am meisten gespielte Spiel der Klasse"),(0,a.kt)("li",{parentName:"ul"},"Die Spielerin/Der Spieler mit dem Highscore beim (gesamthaft) am besten bewerteten Spiel")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Zeitraum"),": Montag 25.01.2021 bis Sonntag 31.01.2021"))}g.isMDXComponent=!0},13694:function(e,n,t){n.Z=t.p+"assets/images/preview-image-7d61877964bd2574386f9e0a28c406ed.png"}}]);