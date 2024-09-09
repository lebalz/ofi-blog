"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24074],{7698:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>A,metadata:()=>t,toc:()=>l});var r=i(74848),s=i(28453);const A={sidebar_custom_props:{id:"61458f7e-3f61-4ba0-8017-55f246edd942"}},a="Nachbarzellen kombinieren",t={id:"Programmieren/NumTrip/felder-aufdecken",title:"Nachbarzellen kombinieren",description:"Wenn die Spieler:in ein Feld ausw\xe4hlt, m\xfcssen alle Nachbarszellen \xfcberpr\xfcft werden, ob Sie dieselbe Zahl enthalten und dann allenfalls kombiniert werden. Falls eine Nachbarszelle dieselbe Zahl enth\xe4lt, so m\xfcssen auch dessen Nachbarszellen \xfcberpr\xfcft werden, ob diese diese Zahl enthalten, usw.",source:"@site/versioned_docs/version-24ef/01-Programmieren/10-NumTrip/07-felder-aufdecken.md",sourceDirName:"01-Programmieren/10-NumTrip",slug:"/Programmieren/NumTrip/felder-aufdecken",permalink:"/24ef/Programmieren/NumTrip/felder-aufdecken",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:7,frontMatter:{sidebar_custom_props:{id:"61458f7e-3f61-4ba0-8017-55f246edd942"}},sidebar:"sidebar",previous:{title:"Spielstart & Eingabe",permalink:"/24ef/Programmieren/NumTrip/user-input"},next:{title:"Felder Auff\xfcllen",permalink:"/24ef/Programmieren/NumTrip/felder-auffuellen"}},d={},l=[{value:"Fl\xe4chen f\xfcllen",id:"fl\xe4chen-f\xfcllen",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Answer:A,Comment:a,Figure:t,SourceRef:d}=n;return A||p("Answer",!0),a||p("Comment",!0),t||p("Figure",!0),d||p("SourceRef",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h1,{id:"nachbarzellen-kombinieren",children:"Nachbarzellen kombinieren"}),(0,r.jsx)(a,{nr:0,type:"heading",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Wenn die Spieler",":in"," ein Feld ausw\xe4hlt, m\xfcssen alle Nachbarszellen \xfcberpr\xfcft werden, ob Sie dieselbe Zahl enthalten und dann allenfalls kombiniert werden. Falls eine Nachbarszelle dieselbe Zahl enth\xe4lt, so m\xfcssen auch dessen Nachbarszellen \xfcberpr\xfcft werden, ob diese diese Zahl enthalten, usw."]}),(0,r.jsx)(a,{nr:0,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Das Aufdecken der Nachbarschaft endet dort, wo ein Feld aufgedeckt wird, das in seiner Nachbarschaft keine gleiche Zahl enth\xe4lt."}),(0,r.jsx)(a,{nr:1,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    1   2   3   4   5                           1   2   3   4   5  \n  ---------------------                       ---------------------\n1 | 2 | 4 | 1 | 8 | 8 |                     1 | 2 | 4 | 1 | 8 | 8 |\n  ---------------------                       ---------------------\n2 | 4 | 2 | 8 | 4 | 1 |        S2, Z5       2 |   | 2 | 8 |   | 1 |\n  ---------------------       --------\x3e       ---------------------\n3 | 4 | 4 | 4 | 4 | 2 |                     3 |   |   |   |   | 2 |\n  ---------------------                       ---------------------\n4 | 2 | 8 | 1 | 4 | 1 |                     4 | 2 | 8 | 1 |   | 1 |\n  ---------------------                       ---------------------\n5 | 2 | 4 | 4 | 4 | 4 |                     5 | 2 |   |   |   |   |\n  ---------------------                       ---------------------\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"fl\xe4chen-f\xfcllen",children:"Fl\xe4chen f\xfcllen"}),(0,r.jsx)(a,{nr:1,type:"heading",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Dieses Problem ist ein bekanntes Problem aus der Computergrafik. Es tritt zum Beispiel auf, wenn in einer Rastergrafik eine begrenzte Fl\xe4che mit einer bestimmten Farbe gef\xfcllt werden soll."}),(0,r.jsx)(a,{nr:2,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Gesucht ist also ein Algorithmus, welcher diese Problem l\xf6st.\nWir lernen dabei eine neue Form von Algorithmen kennen, die ",(0,r.jsx)(n.strong,{children:"Rekursion"}),"."]}),(0,r.jsx)(a,{nr:3,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)(n.img,{src:i(48291).A+"",width:"144",height:"144"}),(0,r.jsxs)("figcaption",{children:[(0,r.jsx)("span",{style:{flexGrow:1}}),(0,r.jsx)(d,{bib:{author:"Andr\xe9 Karwath",source:"https://de.wikipedia.org/wiki/Floodfill#/media/Datei:Recursive_Flood_Fill_4_(aka).gif",licence:"CC BY-SA 2.5",licence_url:"https://creativecommons.org/licenses/by-sa/2.5/",edited:!1}})]})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Die Grundidee ist folgende:"}),(0,r.jsx)(a,{nr:4,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:'Das grosse Problem "ganze Fl\xe4che mit beliebigen Grenzen einf\xe4rben" wird zun\xe4chst reduziert auf das kleinstm\xf6gliche Problem, einen "einzelnen Pixel einf\xe4rben". Daf\xfcr programmieren wir eine Funktion.'}),(0,r.jsx)(a,{nr:5,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Diese Funktion wird nun wie folgt erg\xe4nzt:\nIm Anschluss an das Einf\xe4rben des einen Pixels ruft sich die Funktion f\xfcr die Nachbarpixel selber wieder auf, so dass auch diese eingef\xe4rbt werden. Das geht immer so weiter, bis alle Pixel eingef\xe4rbt sind."}),(0,r.jsx)(a,{nr:6,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Diese sich selber Aufrufen wird als ",(0,r.jsx)(n.strong,{children:"Rekursion"})," bezeichnet."]}),(0,r.jsx)(a,{nr:7,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Ganz wichtig dabei ist, zu verstehen, dass der erste Aufruf der Funktion erst dann beendet ist, wenn alle weiteren Aufrufe von sich selber beendet sind. Es entsteht bei der Rekursion also so etwas wie eine Kette von h\xe4ngigen Funktionsaufrufen, welche sich erst dann aufl\xf6st, wenn am Ende die Funktion sich nicht weiter selber aufruft."}),(0,r.jsx)(a,{nr:8,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Es braucht in der Funktion also eine Entscheidung, ob weitere Aufrufe der Funktion n\xf6tig sind. Beim Einf\xe4rben der Pixel, ist dies der Fall, wenn wir auf einen Pixel stossen, der die Farbe des Randes tr\xe4gt und somit nicht eingef\xe4rbt werden muss."}),(0,r.jsx)(a,{nr:9,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Fehlt diese Abbruchbedingung, oder ist sie falsch formuliert, l\xe4uft die Rekursion immer weiter. Die Kette der h\xe4ngigen Funktionsaufrufe wird immer l\xe4nger, bis irgendwann der Speicher des Computers aufgebraucht ist. Das ist die grosse Gefahr der Rekursion."}),(0,r.jsx)(a,{nr:10,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Der hier skizziert Algorithmus heisst Floodfill-Algorithmus. Eine sch\xf6ne Beschreibung, inkl. Python-Implementierung finden Sie hier: \ud83d\udc49 ",(0,r.jsx)(n.a,{href:"https://de.wikipedia.org/wiki/Floodfill",children:"https://de.wikipedia.org/wiki/Floodfill"}),"."]}),(0,r.jsx)(a,{nr:11,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Aufgabe",type:"aufgabe",children:[(0,r.jsx)(A,{type:"state",webKey:"a712a5eb-ec5a-4f9c-80f4-0fa444a3dc91"}),(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:'Studieren Sie den Abschnitt "Rekursive Implementierung" im Artikel und entscheiden Sie, welche der beiden Varianten f\xfcr das NumTrip Spiel ben\xf6tigt wird. Passen Sie dann die vorgeschlagene Python-Implementierung auf Ihre Situation im NumTrip-Spiel an.'}),(0,r.jsx)(a,{nr:12,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]}),(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Wichtig"}),': Vorerst "l\xf6schen" wir nur den Zelleninhalt aller Zellen Nachbarszellen (und deren Nachbarszellen), die denselben Zahlenwert enthalten wie die ausgew\xe4hlte Zelle.']}),(0,r.jsx)(a,{nr:13,type:"paragraph",pageId:"61458f7e-3f61-4ba0-8017-55f246edd942",children:(0,r.jsx)(n.p,{children:"."})})]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},48291:(e,n,i)=>{i.d(n,{A:()=>r});const r="data:image/gif;base64,R0lGODlhkACQAKIAAOatc+bm5v/AgP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEyAAAACwAAAAAkACQAAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcikLOJ/QqHRKrT4x1qx260QFBuCwWOwcm8PlszmAVa+/bjI8Dmaf5vQ0faDPt/d8eHF9g16AgYeEbnYWgouOaoqRhoCSZ5Zrf3uYY5xklJuQl6KZF6Sdp3KJoHmpaK51mq2JsHysg7WeaLK4tKt3vpW5vI/Bm7fFwr+NxrOVyJG5w6bNvc/AytnH1NrO2ybS1YvE0eKT2KHml+Sj6qXg7qjLFeHdhXdc+fpdpvv+Wl7+CaSCZaBBKNDa2RvHLd3Cc/AeKvxGL56qaxEdavTT0P+bx3sZPyajSKHeRpAlTIqEWFHim3kkVFojOUHmSI4hZ65c11GnT4Y5b/5kWdLiK5gjbJbD2PKkUKApjdaZxsylPKYxpSLCWlOrrljodr7kKkHpRJxRrV6kWdYr1bROl7KNYHbsXBAH8zKip9dgwL4I+wEePCWhXbRF1R5VDDaoXMRdGW+Ny9PxWZSJKR8eWhmu2E7sNj99jDmp19BXNaeGLKIu6J6jL8d+55kz7cyf1+beFdb266qqdfv+1Hv276a7p54uThoq7uGLg/O2LJpoZOnKJe/Nqh21cOPfrbdeDjz5ZPPbTXeH3by9bPEhCF8RLL8+kvr7mHDHfr60/g7/roXX2X8eBBgdawRqYGB2dyXI3nsQ3uaggm4hNaF3B0LX2IUUavcWhxgyiB6IGyzYn3MkIqfhifClSFeFZLn4oocWygiBiV/ZYiNf+HFxX4/yFRQkcxGutmJ6ba1HnZHgZYhikvwhGR+MUYbI4oDqRYmjlTlKiReVIz5YHZbj0aikik1uuB96W4rJZIsf4NhmeUca9maRAkoIZZhL5nnnmHrOWCWRgP5pKHF0pqljn066VyiiaDp63JpHzhkpntPVpmiXH17HZ0pAEiakqPiEmsWophJE6KGNkikomzV+aWaDDsgZa5xg+vdqpbcWmOuTu27aaZla9tqArTHKWmyy5Q8gSyuAv8JZa7SuKgsrs9POiqC1vGJ7LLWBciussQw4uy2u2up6I7iTZnnts+WyCyml43obb7rAiiupn/N62i28JaZqBaoCR/FXwVIQjDA/jIpYp5v8thouussCrIC56lL87rnZVswxtPhK+23I1Wr878f3epyxryRP3PHGK4Oscr7NypspvftK3O6eJ8fMAcY0v9xz0DLDTHTKRov8s81q+luvxRkArfQCUpfM8sxTX8z0oprm7PDRVG/tZZwLJ0xf2QzvqPbabLft9ttwxy333HTXbffdeOet99589+3334DnkAAAIfkEBMgAAAAsQABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsQABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsQAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAscAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAscAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBMgAAAAscAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAOw=="},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var r=i(96540);const s={},A=r.createContext(s);function a(e){const n=r.useContext(A);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(A.Provider,{value:n},e.children)}}}]);