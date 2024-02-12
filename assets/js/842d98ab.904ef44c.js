"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[23704],{25895:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var s=d(85893),a=d(11151);const r={sidebar_custom_props:{id:"e50cdb95-82e3-4287-9726-ab9e63aeb557"}},i="Aggregierte Abfragen",l={id:"Datenbanken/sql/aggregation",title:"Aggregierte Abfragen",description:"Oft sollen ergebnisse in einer zusammengefassten Form ausgegeben werden. So interessiert einem bspw. oft, wie viele Datens\xe4tze in einer Tabelle vorhanden sind, oder wie hoch der Durchschnittswert einer Spalte ist. Hierf\xfcr gibt es die sogenannten Aggregatfunktionen.",source:"@site/versioned_docs/version-26e/09-Datenbanken/01-sql/02-aggregation.md",sourceDirName:"09-Datenbanken/01-sql",slug:"/Datenbanken/sql/aggregation",permalink:"/26e/Datenbanken/sql/aggregation",draft:!1,unlisted:!1,tags:[],version:"26e",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"e50cdb95-82e3-4287-9726-ab9e63aeb557"}},sidebar:"sidebar",previous:{title:"Einstieg SQL",permalink:"/26e/Datenbanken/sql/einstieg"},next:{title:"Murder Mystery",permalink:"/26e/Datenbanken/sql/murder-mystery"}},c={},t=[{value:"<code>COUNT(*)</code>",id:"count",level:3},{value:"<code>SUM()</code>",id:"sum",level:3},{value:"<code>AVG()</code>",id:"avg",level:3},{value:"<code>MAX()</code>",id:"max",level:3},{value:"<code>MIN()</code>",id:"min",level:3},{value:"<code>STRING_AGG(column, delimiter [ORDER BY column [ASC|DESC]])</code>",id:"string_aggcolumn-delimiter-order-by-column-ascdesc",level:3},{value:"Group By",id:"group-by",level:2},{value:"<code>GROUP BY</code>",id:"group-by-1",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Answer:d,Comment:r,DefBox:i,DefContent:l,DefHeading:c,Dl:t,Solution:h}=n;return d||g("Answer",!0),r||g("Comment",!0),i||g("DefBox",!0),l||g("DefContent",!0),c||g("DefHeading",!0),t||g("Dl",!0),h||g("Solution",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h1,{id:"aggregierte-abfragen",children:"Aggregierte Abfragen"}),(0,s.jsx)(r,{nr:0,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Oft sollen ergebnisse in einer zusammengefassten Form ausgegeben werden. So interessiert einem bspw. oft, wie viele Datens\xe4tze in einer Tabelle vorhanden sind, oder wie hoch der Durchschnittswert einer Spalte ist. Hierf\xfcr gibt es die sogenannten ",(0,s.jsx)("strong",{className:"boxed",children:"Aggregatfunktionen"}),"."]}),(0,s.jsx)(r,{nr:0,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"count",children:(0,s.jsx)(n.code,{children:"COUNT(*)"})}),(0,s.jsx)(r,{nr:1,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Z\xe4hlt die Anzahl der Datens\xe4tze in einer Tabelle."}),(0,s.jsx)(r,{nr:1,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM legodudes;\n/* count \n  -------\n      7   */\n"})})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"sum",children:(0,s.jsx)(n.code,{children:"SUM()"})}),(0,s.jsx)(r,{nr:2,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Addiert die Werte einer Spalte."}),(0,s.jsx)(r,{nr:2,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT SUM(lieblingszahl) FROM legodudes;\n/*  sum \n   -----\n    651 */\n"})})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"avg",children:(0,s.jsx)(n.code,{children:"AVG()"})}),(0,s.jsx)(r,{nr:3,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Berechnet den Mittelwert der Werte einer Spalte."}),(0,s.jsx)(r,{nr:3,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT AVG(lieblingszahl) FROM legodudes;\n/*  avg \n   ------\n    93.0  */\n"})})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"max",children:(0,s.jsx)(n.code,{children:"MAX()"})}),(0,s.jsx)(r,{nr:4,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Gibt den maximalen Wert einer Spalte zur\xfcck."}),(0,s.jsx)(r,{nr:4,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT MAX(lieblingszahl) FROM legodudes;\n/*  max \n   ------\n    420  */\n"})})]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"min",children:(0,s.jsx)(n.code,{children:"MIN()"})}),(0,s.jsx)(r,{nr:5,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Gibt den minimalen Wert einer Spalte zur\xfcck."}),(0,s.jsx)(r,{nr:5,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT MIN(lieblingszahl) FROM legodudes;\n/*  min \n   -----\n     1  */\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Damit lassen sich nun auch bspw. alle Legodudes ausgeben, die die h\xf6chste Lieblingszahl haben, wobei die ",(0,s.jsx)(n.code,{children:"MAX()"}),"-Funktion in einer verschachtelten Unterabfrage verwendet wird."]}),(0,s.jsx)(r,{nr:6,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM legodudes \nWHERE lieblingszahl = (SELECT MAX(lieblingszahl) FROM legodudes);\n"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"string_aggcolumn-delimiter-order-by-column-ascdesc",children:(0,s.jsx)(n.code,{children:"STRING_AGG(column, delimiter [ORDER BY column [ASC|DESC]])"})}),(0,s.jsx)(r,{nr:6,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Mit ",(0,s.jsx)(n.code,{children:"STRING_AGG"})," lassen sich Texte aus mehreren Zeilen zu einem Text zusammenf\xfcgen. Der ",(0,s.jsx)(n.code,{children:"delimiter"})," ist das Trennzeichen, das zwischen den einzelnen Texten eingef\xfcgt wird."]}),(0,s.jsx)(r,{nr:7,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT string_agg(name, ', ') FROM legodudes;\n/*                                        string_agg                                                 \n--------------------------------------------------------------------------------------------------\n Litty Feuerwehr, Crazy Lego Dude, Elon Marsk, Larry der St\xfcrmer, A$AP Geerky, Wigwam Tipi, Botot  */\n"})}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"oder mit Reihenfolge"}),(0,s.jsx)(r,{nr:8,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT string_agg(name, ', ' ORDER BY name) FROM legodudes;\n/*                                        string_agg                                                 \n--------------------------------------------------------------------------------------------------\n A$AP Geerky, Botot, Crazy Lego Dude, Elon Marsk, Larry der St\xfcrmer, Litty Feuerwehr, Wigwam Tipi  */\n"})})]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"1. \xc4ltester Legodude",type:"aufgabe",children:[(0,s.jsx)(d,{type:"state",webKey:"5c502b3e-547a-4aab-929e-bedc944e8a1f"}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(n.p,{children:"Datenbank"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)("strong",{className:"boxed",children:"legomania"})})}),(0,s.jsx)("dd",{children:(0,s.jsxs)(n.p,{children:["\ud83d\udc49 ",(0,s.jsx)(n.a,{href:"https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania",children:"https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania"})]})})]}),(0,s.jsx)(r,{nr:9,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Geben Sie den j\xfcngsten Legodude aus, indem Sie eine verschachtelte Unterabfrage verwenden."}),(0,s.jsx)(r,{nr:10,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(d,{type:"text",webKey:"55a6f5b1-4ce1-4c8a-82f9-3e0247272352",monospace:!0}),(0,s.jsx)(h,{webKey:"44077255-cf6b-4d5f-a152-de6c3cf6e37e",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM legodudes \nWHERE alter = (SELECT MIN(alter) FROM legodudes);\n"})})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h2,{id:"group-by",children:"Group By"}),(0,s.jsx)(r,{nr:7,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Oft interessiert aber nicht nur die Anzahl der Datens\xe4tze, sondern die Anzahl der Datens\xe4tze pro Kategorie. Hierf\xfcr gibt es den ",(0,s.jsx)(n.code,{children:"GROUP BY"}),"-Befehl."]}),(0,s.jsx)(r,{nr:11,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(c,{children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h3,{id:"group-by-1",children:(0,s.jsx)(n.code,{children:"GROUP BY"})}),(0,s.jsx)(r,{nr:8,type:"heading",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})}),(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Mit ",(0,s.jsx)(n.code,{children:"GROUP BY"})," lassen sich Datens\xe4tze nach einer oder mehrerer Spalten gruppieren. Die Aggregatfunktionen werden dann auf die einzelnen Gruppen angewendet."]}),(0,s.jsx)(r,{nr:12,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT land, COUNT(*) \nFROM legodudes \nGROUP BY land;\n/*  land      | count \n  ------------+-------\n   Irland     |     1 \n   \xd6sterreich |     1 \n   Schweden   |     1 \n   USA        |     3 \n   Schweiz    |     1  */\n"})}),(0,s.jsx)(n.admonition,{title:"Wichtig",type:"warning",children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["F\xfcr jede Spalte, die nicht in der ",(0,s.jsx)(n.code,{children:"GROUP BY"}),"-Klausel steht, muss eine Aggregatfunktion verwendet werden!"]}),(0,s.jsx)(r,{nr:13,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]})})]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"2. Namen nach L\xe4ndern gruppiert",type:"aufgabe",children:[(0,s.jsx)(d,{type:"state",webKey:"fbbb07f6-cd07-4efe-90db-6138295f49ac"}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("dt",{children:(0,s.jsx)(n.p,{children:"Datenbank"})}),(0,s.jsx)("dd",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)("strong",{className:"boxed",children:"legomania"})})}),(0,s.jsx)("dd",{children:(0,s.jsxs)(n.p,{children:["\ud83d\udc49 ",(0,s.jsx)(n.a,{href:"https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania",children:"https://db-sql.ch/connections/6750d31f-6978-4e24-b044-e2dd9763bd4f/legomania"})]})})]}),(0,s.jsx)(r,{nr:14,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Erstellen Sie die folgende Tabelle (beachten Sie die Reihenfolge der L\xe4nder):"}),(0,s.jsx)(r,{nr:15,type:"paragraph",pageId:"e50cdb95-82e3-4287-9726-ab9e63aeb557",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  Land      |              Namen                   \n------------+--------------------------------------\n Irland     | Larry der St\xfcrmer                    \n \xd6sterreich | Crazy Lego Dude                      \n Schweden   | Litty Feuerwehr                      \n Schweiz    | Botot                                \n USA        | Elon Marsk, A$AP Geerky, Wigwam Tipi \n"})}),(0,s.jsx)(d,{type:"text",webKey:"77d74a75-a953-460d-bf21-09b81af0c8e5"}),(0,s.jsx)(h,{webKey:"cec19b30-2764-41f8-aaf5-58082370ed20",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SELECT land as "Land", string_agg(name, \', \') as "Namen"\nFROM legodudes\nGROUP BY land\nORDER BY land\n'})})})]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>i});var s=d(67294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);