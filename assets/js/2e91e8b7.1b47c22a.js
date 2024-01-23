"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[95913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(n),b=r,f=c["".concat(p,".").concat(b)]||c[b]||m[b]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"0acd82f5-e6b6-44b1-b146-3fbbc3e1b88d"}},l="\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",s={unversionedId:"Kryptologie/Antike/python-tools",id:"version-26P/Kryptologie/Antike/python-tools",title:"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python",description:"Skytale",source:"@site/versioned_docs/version-26P/11-Kryptologie/02-Antike/08-python-tools.md",sourceDirName:"11-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/python-tools",permalink:"/26P/Kryptologie/Antike/python-tools",draft:!1,tags:[],version:"26P",sidebarPosition:8,frontMatter:{sidebar_custom_props:{id:"0acd82f5-e6b6-44b1-b146-3fbbc3e1b88d"}},sidebar:"version-26P/sidebar",previous:{title:"Vign\xe8re-Chiffre",permalink:"/26P/Kryptologie/Antike/Vignere"},next:{title:"Symmetrische Verschl\xfcsselung",permalink:"/26P/Kryptologie/Symmetrisch/"}},p={},o=[{value:"Skytale",id:"skytale",level:2},{value:"Polybios",id:"polybios",level:2},{value:"Caesar-Chiffre",id:"caesar-chiffre",level:2},{value:"Substitutions-Chiffre",id:"substitutions-chiffre",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("Comment"),m=d("Answer"),b={toc:o},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"\ufe0f-antike-verschl\xfcsselung-mit-python"},"\u2b50\ufe0f Antike Verschl\xfcsselung mit Python"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"skytale"},"Skytale"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__skytale.py id=401ae4f3-626c-4f6f-95a0-bf366b9ae1c3",live_py:!0,title:"to__skytale.py",id:"401ae4f3-626c-4f6f-95a0-bf366b9ae1c3"},"klartext = 'Skytale'\nschl\xfcssel = 3\n\nzeilen = []\n\n# f\xfcge f\xfcr jede Zeile einen leeren Text ein\nfor i in range(schl\xfcssel):\n    zeilen.append('')\n\n# verteile die Buchstaben auf die Zeilen\nnr = 0\nfor buchstabe in klartext:\n    zeilen[nr] = zeilen[nr] + buchstabe\n    nr = nr + 1\n    if nr == schl\xfcssel:\n        nr = 0\n# alle Zeilen mit einer neuen Zeile verkn\xfcpfen\nverschl\xfcsselt = '\\n'.join(zeilen)\n\nprint(verschl\xfcsselt)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__skytale.py id=b53eb042-3589-4bab-b504-36243f65af67",live_py:!0,title:"from__skytale.py",id:"b53eb042-3589-4bab-b504-36243f65af67"},"verschl\xfcsselt = '''\\\nSte\nka\nyl'''\n\nzeilen = verschl\xfcsselt.splitlines()\n# die erste Zeile gibt vor, wie viele Spalten es gibt\nspalten = len(zeilen[0])\n\nklartext = ''\n\n# f\xfcr jede Spalte...\nfor spalte in range(spalten):\n    # wird in jeder Zeile...\n    for zeile in zeilen:\n        if len(zeile) > spalte:\n            # der Buchstabe in dieser Spalte dem Text hinzugef\xfcgt\n            klartext = klartext + zeile[spalte]\n\nprint(klartext)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"polybios"},"Polybios"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__polybios.py id=7de16f01-3830-43dc-9ce6-6cf0b0161e9a",live_py:!0,title:"to__polybios.py",id:"7de16f01-3830-43dc-9ce6-6cf0b0161e9a"},"QUADRAT = [\n    'A', 'B', 'C', 'D', 'E',\n    'F', 'G', 'H', 'I', 'K',\n    'L', 'M', 'N', 'O', 'P',\n    'Q', 'R', 'S', 'T', 'U',\n    'E', 'X', 'Y', 'Z', ' '\n]\nklartext = 'Hallo'\n\nklartext = klartext.upper().replace('J', 'I').replace('V', 'U')\nverschl\xfcsselt = ''\nfor buchstabe in klartext:\n    index = QUADRAT.index(buchstabe)\n    spalte = index % 5 # berechnet den ganzzahligen Rest bei einer Division durch 5\n    zeile = index // 5 # berechnet die ganzzahlige Division durch 5\n    verschl\xfcsselt = verschl\xfcsselt + f'{zeile + 1}{spalte + 1} '\n\nprint(verschl\xfcsselt.strip()) # strip entfernt Leerzeichen an den R\xe4ndern\n")),(0,r.kt)("admonition",{type:"aufgabe"},(0,r.kt)(m,{type:"state",webKey:"574b699f-8924-4874-9569-1c8a073b3b7b",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen Sie das Programm durch und versuchen Sie, jede Zeile zu verstehen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Flicken Sie den Code, so dass der verschl\xfcsselte Text lesbar wird."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__polybios.py id=2a72f129-612f-45f5-9972-ac82561bc97e",live_py:!0,title:"from__polybios.py",id:"2a72f129-612f-45f5-9972-ac82561bc97e"},"QUADRAT = [\n    'A', 'B', 'C', 'D', 'E',\n    'F', 'G', 'H', 'I', 'K',\n    'L', 'M', 'N', 'O', 'P',\n    'Q', 'R', 'S', 'T', 'U',\n    'E', 'X', 'Y', 'Z', ' '\n]\n\nverschl\xfcsselt = '35 34 31 53 12 24 34 43'\nklartext = ''\nzahlen = verschl\xfcsselt.split(' ')\nfor zahl in zahlen:\n    zeile = int(zahl[0])\n    spalte = int(zahl[1])\n    index = 0\n    klartext = klartext + QUADRAT[index]\n\nprint(klartext)\n")),(0,r.kt)("admonition",{parentName:"admonition",title:"Zugriff auf eine Liste",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wie Sie bemerkt haben, werden in Python Listen mit eckigen Klammern erzeugt - und der Zugriff erfolgt unter Angabe der Position in der Liste, auch wieder mit eckigen Klammern:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Positionen in der Liste beginnen bei 0. Das heisst, das erste Element hat die Position 0, das zweite die Position 1, usw."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"liste = ['A', 'B', 'C', 'D', 'E']\nprint(liste[0]) # gibt 'A' aus\nprint(liste[4]) # gibt 'E' aus\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"caesar-chiffre"},"Caesar-Chiffre"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__caesar.py id=4f0f7d8d-a2d3-4c2f-b05f-ed9bd6b52b33",live_py:!0,title:"to__caesar.py",id:"4f0f7d8d-a2d3-4c2f-b05f-ed9bd6b52b33"},"ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\nSCHL\xdcSSEL = 'D'\nROT = ALPHABET.index(SCHL\xdcSSEL) # gibt die Position des Schl\xfcsselbuchstabens im Alphabet zur\xfcck\n                                # A -> 0, B -> 1, C -> 2, D -> 3, ...\nklartext = 'CAESAR'\n\nklartext = klartext.upper() # sicherstellen, dass nur Grossbuchstaben verwendet werden\nverschl\xfcsselt = ''\nfor buchstabe in klartext:\n    index = ALPHABET.index(buchstabe) + ROT\n    index = index % 26 # ganzzahliger Rest bei Division durch 26\n    verschl\xfcsselt = verschl\xfcsselt + ALPHABET[index]\n\nprint(verschl\xfcsselt)\n")),(0,r.kt)("admonition",{type:"aufgabe"},(0,r.kt)(m,{type:"state",webKey:"735176ce-b1c6-46c2-864a-151c63610dd7",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie den Code so ab, dass der verschl\xfcsselte Text wieder entschl\xfcsselt werden kann."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__caesar.py id=ebc928b8-7ff6-4566-9438-475718cedc03",live_py:!0,title:"from__caesar.py",id:"ebc928b8-7ff6-4566-9438-475718cedc03"},"ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\nSCHL\xdcSSEL = 'D'\nROT = ALPHABET.index(SCHL\xdcSSEL)\n\nverschl\xfcsselt = 'JDLXV'\n\nklartext = ''\nverschl\xfcsselt = verschl\xfcsselt.upper()\nfor buchstabe in verschl\xfcsselt:\n    index = 0\n    klartext = klartext + ALPHABET[index]\n\nprint(klartext)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2b50\ufe0f Zusatz"),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie haben eine geheime Nachricht abgefangen, kennen aber den Schl\xfcssel nicht. Sie wissen aber, dass ",(0,r.kt)("inlineCode",{parentName:"p"},"ALCZLJ")," ein sinnvolles Wort ergeben muss. Schreiben Sie ein Programm, das alle m\xf6glichen Schl\xfcssel durchprobiert und jeweils den entschl\xfcsselten Text ausdruckt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verwenden Sie die Ausgangslage aus dem obigen Programm."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hack__caesar.py id=a99f0b6f-07cd-4498-b0d7-69af7aed70dd",live_py:!0,title:"hack__caesar.py",id:"a99f0b6f-07cd-4498-b0d7-69af7aed70dd"},"verschl\xfcsselt = 'ALCZLJ'\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"substitutions-chiffre"},"Substitutions-Chiffre"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=to__substitution.py id=db63b078-a82a-4f00-90df-729ed1901f07",live_py:!0,title:"to__substitution.py",id:"db63b078-a82a-4f00-90df-729ed1901f07"},"ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nSCHL\xdcSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')\n\nklartext = 'HEUTE GEHE ICH IM WALD JOGGEN'\nklartext = klartext.upper()\nverschl\xfcsselt = ''\n\nfor buchstabe in klartext:\n    if buchstabe in ALPHABET:\n        index = ALPHABET.index(buchstabe)\n        verschl\xfcsselt = verschl\xfcsselt + SCHL\xdcSSEL[index]\n    else:\n        verschl\xfcsselt = verschl\xfcsselt + buchstabe\n\nprint(verschl\xfcsselt)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=from__substitution.py id=25d474c6-eef5-485f-b721-b6338cfc8889",live_py:!0,title:"from__substitution.py",id:"25d474c6-eef5-485f-b721-b6338cfc8889"},"ALPHABET = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nSCHL\xdcSSEL = 'I S X D L Y A V E B F G C W M Z N K O R H Q J P U T'.split(' ')\n\nverschl\xfcsselt = 'EXV SEFL QMW CIAAGEWALW WIXV SELG'\nverschl\xfcsselt = verschl\xfcsselt.upper()\nklartext = ''\n\nfor buchstabe in verschl\xfcsselt:\n    if buchstabe in SCHL\xdcSSEL:\n        index = SCHL\xdcSSEL.index(buchstabe)\n        klartext = klartext + ALPHABET[index]\n    else:\n        klartext = klartext + buchstabe\n\nprint(klartext)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=schl\xfcssel.py id=94fcf1be-7efe-4ebd-98a6-1c2a4fa43957",live_py:!0,title:"schl\xfcssel.py",id:"94fcf1be-7efe-4ebd-98a6-1c2a4fa43957"},"from random import shuffle\nschl\xfcssel='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')\nshuffle(schl\xfcssel)\nprint(' '.join(schl\xfcssel))\n")))}y.isMDXComponent=!0}}]);