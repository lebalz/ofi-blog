"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[48660],{29770:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var r=i(85893),s=i(11151);const d={},t="Pr\xfcfung Robotik: Valentin",a={type:"mdx",permalink:"/secure/qm91o4j",source:"@site/src/pages/secure/qm91o4j.md",title:"Pr\xfcfung Robotik: Valentin",description:"Editor",frontMatter:{},unlisted:!1},o={},l=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"\u2b50 Aufgabe 4 (Optionale Zusatzaufgabe)",id:"-aufgabe-4-optionale-zusatzaufgabe",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Dl:i,OnlyFor:d,Solution:t}=n;return i||u("Dl",!0),d||u("OnlyFor",!0),t||u("Solution",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pr\xfcfung-robotik-valentin",children:"Pr\xfcfung Robotik: Valentin"}),"\n",(0,r.jsx)(d,{email:"Valentin.Kuendig@edu.gbsl.ch",children:(0,r.jsx)(n.admonition,{title:"Aufgaben",type:"aufgabe",children:(0,r.jsxs)(t,{webKey:"295fea23-e074-4471-b14e-7b39c5597357",title:"Robotik",open:!0,noWrap:!0,children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Editor"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://python.microbit.org/v/3",children:"\ud83d\udc49 https://python.microbit.org/v/3"})})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Hilfsmittel"})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:"Alles erlaubt, ohne Kommunikation untereinander oder mit Chatbots."})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:"Paradigma"})}),(0,r.jsx)("dd",{children:(0,r.jsxs)(n.p,{children:["F\xfcr das L\xf6sen der Aufgaben sollen Zustandsmaschinen verwendet werden. Ausserhalb der ",(0,r.jsx)(n.code,{children:"while True"}),"-Schleife sollen nebst der ",(0,r.jsx)(n.code,{children:"state"}),"-Variable keine anderen (selbst hinzugef\xfcgte) Variablen verwendet werden."]})})]}),(0,r.jsx)(n.h2,{id:"aufgabe-1",children:"Aufgabe 1"}),(0,r.jsx)(n.p,{children:"Setzen Sie das untenstehende Zustandsdiagramm auf dem Microbit um und \xfcberpr\xfcfen Sie, ob es funktioniert.\nHalten Sie den Microbit dabei am USB-Kabel vor sich und kippen Ihn nach Links oder Rechts."}),(0,r.jsx)(n.mermaid,{value:"stateDiagram-v2 \n    classDef edgeLabel background:#ffffffdd\n    [*] --\x3e RIGHT: /show right\n    RIGHT --\x3e LEFT: acc_x > 0 /show left\n    LEFT --\x3e RIGHT: acc_x < 0 /show right"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from microbit import *\n\n# mit display.show(IMAGES['RIGHT']) kann das Bild angezeigt werden\nIMAGES = {\n    'RIGHT': Image('99900:99900:99900:99900:99900'),\n    'LEFT': Image('00999:00999:00999:00999:00999'),\n    'FLAT': Image('00900:00900:00900:00900:00900'),\n}\n\nwhile True:\n    acc_x = accelerometer.get_x()\n\n"})}),(0,r.jsx)(n.p,{children:"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=8d1044aa-8c39-40b7-9871-0aacd3c98b7c",children:"\n\n"})}),(0,r.jsx)(n.h2,{id:"aufgabe-2",children:"Aufgabe 2"}),(0,r.jsxs)(n.p,{children:["Nun soll ein weiterer Zustand ",(0,r.jsx)("strong",{className:"boxed",children:"FLAT"})," hinzugef\xfcgt werden. Wenn man den Microbit in der Ebene flach h\xe4lt, soll das Bild ",(0,r.jsx)(n.code,{children:"IMAGES['FLAT']"})," angezeigt werden."]}),(0,r.jsx)(n.p,{children:"Beachten Sie, dass die Sensorwerte nicht genau 0 sind, wenn der Microbit flach gehalten wird. Sie m\xfcssen also einen Bereich definieren, in dem der Microbit als flach gilt."}),(0,r.jsx)(n.admonition,{title:"Tip",type:"info",children:(0,r.jsxs)(n.p,{children:["Sie k\xf6nnen die Werte des Sensors mit ",(0,r.jsx)(n.code,{children:"print(acc_x)"})," ausgeben und untersuchen, was sinnvolle Grenzen sind."]})}),(0,r.jsx)(n.p,{children:"Probieren Sie, ob Ihr Programm funktioniert und ob die korrekten Bilder angezeigt wenn der Microbit hin- und hergekippt wird."}),(0,r.jsx)(n.p,{children:"Halten Sie Ihre Antwort zu dieser Aufgabe unten fest."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=e2db1685-9fad-4cb0-8534-376a4c1999e9",children:"\n\n"})}),(0,r.jsx)(n.h2,{id:"aufgabe-3",children:"Aufgabe 3"}),(0,r.jsxs)(n.p,{children:["Wenn der Knopf A geklickt wurde (",(0,r.jsx)(n.code,{children:"button_a.was_pressed()"}),"), soll mit einem Pfeil die Richtung angezeigt werden, oder im Zustand ",(0,r.jsx)("strong",{className:"boxed",children:"FLAT"})," das Bild ",(0,r.jsx)(n.code,{children:"Image.PACMAN"}),".\nDas Bild soll solange angezeigt werden, bis sich der Zustand durch Kippen des Microbits \xe4ndert. (Es soll aber nebst dem ",(0,r.jsx)(n.code,{children:"state"})," keine zus\xe4tzliche Variable verwendet werden)"]}),(0,r.jsxs)(i,{children:[(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"RIGHT"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Image.Image.ARROW_W"})})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"LEFT"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Image.Image.ARROW_E"})})}),(0,r.jsx)("dt",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)("strong",{className:"boxed",children:"FLAT"})})}),(0,r.jsx)("dd",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Image.PACMAN"})})})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=b4567103-bc33-4ec4-ba56-986c9a422391",children:"\n\n"})}),(0,r.jsx)(n.h2,{id:"-aufgabe-4-optionale-zusatzaufgabe",children:"\u2b50 Aufgabe 4 (Optionale Zusatzaufgabe)"}),(0,r.jsxs)(n.p,{children:["Solange der Knopf B gedr\xfcckt wird (",(0,r.jsx)(n.code,{children:"button_b.is_pressed()"}),"), sollen keine Transitionen zwischen den Zust\xe4nden stattfinden."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"title=Antwort1.sql live_py versioned persist noDownload noCompare noHistory id=7ebf11dd-b822-4531-93d7-859592e65dae",children:"\n\n"})})]})})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>t});var r=i(67294);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);