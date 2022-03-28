"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[51359],{42142:function(e,M,N){N.r(M),N.d(M,{assets:function(){return L},contentTitle:function(){return g},default:function(){return D},frontMatter:function(){return n},metadata:function(){return s},toc:function(){return r}});var i=N(83117),T=N(80102),t=(N(67294),N(3905)),j=N(84384),I=["components"],n={label:"12. \u2b50 Rekursion",title:"12. \u2b50 Rekursion"},g="12. \u2b50 Rekursion",s={unversionedId:"Programmieren-1/Turtlegrafik/koch",id:"Programmieren-1/Turtlegrafik/koch",title:"12. \u2b50 Rekursion",description:"Ein Unterprogramm kann sich selber aufrufen. Das ergibt im Normalfall eine unendliche Wiederholung, so dass das Programm abst\xfcrzt. Wird das Unterprogramm jedoch jedesmal mit einem ver\xe4nderten Parameter aufgerufen, so kann eine Abbruchbedingung erstellt werden, welche angibt, ob das Unterprogramm erneut aufgerufen werden soll oder nicht.",source:"@site/docs/Programmieren-1/02-Turtlegrafik/052-koch.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/koch",permalink:"/Programmieren-1/Turtlegrafik/koch",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/052-koch.md",tags:[],version:"current",lastUpdatedAt:1643355164,formattedLastUpdatedAt:"1/28/2022",sidebarPosition:52,frontMatter:{label:"12. \u2b50 Rekursion",title:"12. \u2b50 Rekursion"},sidebar:"sidebar",previous:{title:"11. Mini-Projekte",permalink:"/Programmieren-1/Turtlegrafik/art"},next:{title:"Nosync - Unterprogramme",permalink:"/Programmieren-1/Turtlegrafik/examples.nosync"}},L={},r=[{value:"Beispiel",id:"beispiel",level:2},{value:"Koch Kurve",id:"koch-kurve",level:2}],u={toc:r};function D(e){var M=e.components,n=(0,T.Z)(e,I);return(0,t.kt)("wrapper",(0,i.Z)({},u,n,{components:M,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"12--rekursion"},"12. \u2b50 Rekursion"),(0,t.kt)("p",null,"Ein Unterprogramm kann sich selber aufrufen. Das ergibt im Normalfall eine unendliche Wiederholung, so dass das Programm abst\xfcrzt. Wird das Unterprogramm jedoch jedesmal mit einem ver\xe4nderten Parameter aufgerufen, so kann eine ",(0,t.kt)("strong",{parentName:"p"},"Abbruchbedingung")," erstellt werden, welche angibt, ob das Unterprogramm erneut aufgerufen werden soll oder nicht."),(0,t.kt)("h2",{id:"beispiel"},"Beispiel"),(0,t.kt)("p",null,"Im folgenden Programm wird ein einfacher bin\xe4rer Baum gezeichnet:"),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(j.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:N(43383).Z,mdxType:"Image"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nleft(90)\ndef baum(gr\xf6sse):\n    forward(gr\xf6sse)\n    left(45)\n    forward(gr\xf6sse / 2)\n    backward(gr\xf6sse / 2)\n    right(90)\n    forward(gr\xf6sse / 2)\n    backward(gr\xf6sse / 2)\n    left(45)\nbaum(40)\n")),(0,t.kt)("p",null,"Diesen Baum k\xf6nnen wir nun so umbauen, dass jeder Ast auch wieder ein bin\xe4rer Baum ist:"),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(j.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:N(69386).Z,mdxType:"Image"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nleft(90)\ndef baum(gr\xf6sse):\n    if gr\xf6sse < 5:\n        forward(gr\xf6sse)\n    else:\n        forward(gr\xf6sse)\n        left(45)\n        baum(gr\xf6sse / 2)\n        backward(gr\xf6sse / 2)\n        right(90)\n        baum(gr\xf6sse / 2)\n        backward(gr\xf6sse / 2)\n        left(45)\nbaum(100) \n")),(0,t.kt)("p",null,"Bemerken Sie, dass eine Abbruchbedingung eingef\xfcgt wurde - falls die gr\xf6sse kleiner als 5 ist, wird nur eine Strecke gezeichnet, andernfalls ein ganzer Baum."),(0,t.kt)("h2",{id:"koch-kurve"},"Koch Kurve"),(0,t.kt)("p",null,"Eine Koch-Kurve ist wie folgt aufgebaut:"),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(j.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:N(78245).Z,mdxType:"Image"})),(0,t.kt)("p",null,"wobei ein einzelnes Element wie folgt aussieht:"),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(j.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:N(1694).Z,mdxType:"Image"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=koch.py id=16486559-3037-48b9-958f-96dc44c50173",live_py:!0,title:"koch.py",id:"16486559-3037-48b9-958f-96dc44c50173"},"from turtle import *\n\n\n")),(0,t.kt)("p",null,"Zusatz: Zeichnen Sie ein Sechseck bestehend aus 6 Koch-Kurven."))}D.isMDXComponent=!0},1694:function(e,M,N){M.Z=N.p+"assets/images/52-koch-angles-f5aa7003e2258b954e6586fcac335da1.jpg"},78245:function(e,M){M.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgIHZlcnNpb249IjEuMSIgaWQ9IiYjeDMwRUM7JiN4MzBBNDsmI3gzMEU0OyYjeDMwRkM7XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MDAiIGhlaWdodD0iMjUwIj4NCjxnIHN0eWxlPSJmaWxsOiNDRDE3MUM7c3Ryb2tlOiNDRDE3MUM7Ij4NCgk8cGF0aCBkPSJNNjEwLjg0Myw3My4yNTljLTAuNTYxLDEuODU3LTEuMDc3LDMuMDY0LTEuNjc2LDQuNTU0aDUuNjY2Yy0wLjI1My0wLjUzMy0xLjExMy0yLjY5Ny0xLjY3NC00LjU1NCxjLTAuNjAyLTEuOTg3LTEuMDEyLTMuNzktMS4xNTktNC45NThDNjExLjg1Myw2OS40Nyw2MTEuNDQyLDcxLjI3Miw2MTAuODQzLDczLjI1OXoiLz4NCgk8cGF0aCBkPSJNMTczLjkwOSwzMy44MDRjLTEuNDk3LDQuOTYtMi44NzcsOC4xODQtNC40NzcsMTIuMTYzaDE1LjEzNWMtMC42NzctMS40MjQtMi45NzctNy4yMDMtNC40NzQtMTIuMTYzLGMtMS42MDUtNS4zMDktMi43MDEtMTAuMTIyLTMuMDk0LTEzLjI0NEMxNzYuNjA3LDIzLjY4MiwxNzUuNTEyLDI4LjQ5NiwxNzMuOTA5LDMzLjgwNHoiLz4NCgk8cGF0aCBkPSJNNDMwLjg0Myw3My4yNTljLTAuNTYxLDEuODU3LTEuMDc3LDMuMDY0LTEuNjc2LDQuNTU0aDUuNjY2Yy0wLjI1My0wLjUzMy0xLjExMy0yLjY5Ny0xLjY3NC00LjU1NCxjLTAuNjAyLTEuOTg3LTEuMDEyLTMuNzktMS4xNTktNC45NThDNDMxLjg1Myw2OS40Nyw0MzEuNDQyLDcxLjI3Miw0MzAuODQzLDczLjI1OXoiLz4NCgk8cGF0aCBkPSJNNTY3Ljg1LDQ3LjEwMWMtMS44OSwwLjQ0NC0zLjE5MiwwLjU5OS00Ljc4MSwwLjgyNWwyLjgzMiw0LjkwOGMwLjMzNS0wLjQ4NSwxLjc3OS0yLjMxMywzLjEwNy0zLjcyNyxjMS40Mi0xLjUxNSwyLjc3NS0yLjc3MSwzLjcxNC0zLjQ4M0M1NzEuNjM2LDQ2LjA4MSw1NjkuODcxLDQ2LjYyNSw1NjcuODUsNDcuMTAxeiIvPg0KCTxwYXRoIGQ9Ik00NzQuOTkzLDQ5LjEwNWMxLjMyOCwxLjQxNCwyLjExNSwyLjQ2NSwzLjEwNiwzLjcyOGwyLjgzMy00LjkwN2MtMC41ODktMC4wNDctMi44OTMtMC4zODQtNC43ODEtMC44MjgsYy0yLjAyMi0wLjQ3My0zLjc4OC0xLjAxOS00Ljg3NC0xLjQ3NUM0NzIuMjE2LDQ2LjMzNiw0NzMuNTcxLDQ3LjU5Miw0NzQuOTkzLDQ5LjEwNXoiLz4NCjwvZz4NCjxnIHN0eWxlPSJzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7Ij4NCgk8ZyBzdHlsZT0iZmlsbDojQ0QxNzFDO3N0cm9rZTojQ0QxNzFDOyI+DQoJCTxsaW5lIHgxPSI2MTEuOTkzIiB5MT0iOTAuODkiIHgyPSI2MTEuOTkzIiB5Mj0iNzUuOTEzIi8+DQoJCTxsaW5lIHgxPSIxNzYuOTgyIiB5MT0iODAuODkiIHgyPSIxNzYuOTgyIiB5Mj0iNDAuODkiLz4NCgkJPGxpbmUgeDE9IjQzMS45OTMiIHkxPSI5MC44OSIgeDI9IjQzMS45OTMiIHkyPSI3NS45MTMiLz4NCgkJPGxpbmUgeDE9IjU1My4xNTUiIHkxPSI1Ni45MTMiIHgyPSI1NjYuMTI3IiB5Mj0iNDkuNDI0Ii8+DQoJCTxsaW5lIHgxPSI0OTAuODM3IiB5MT0iNTYuOTI0IiB4Mj0iNDc3Ljg2NiIgeTI9IjQ5LjQzNiIvPg0KCTwvZz4NCgk8ZyBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwOyI+DQoJCTxwYXRoIGQ9Ik00MTcsMjE3Ljg5aC0xMCBNNDA3LDIxNy44OWwtNS04LjY2IE0zOTcsMjE3Ljg5aC0xMCBNNDAyLDIwOS4yMjlsLTUsOC42NiBNNjU3LDIxNy44OWgtMTAgTTY0NywyMTcuODlsLTUtOC42NiBNNjM3LDIxNy44OWgtMTAgTTY0MiwyMDkuMjI5bC01LDguNjYgTTU5NywyMTcuODloLTEwIE01ODcsMjE3Ljg5bC01LTguNjYgTTU3NywyMTcuODloLTEwIE01ODIsMjA5LjIyOWwtNSw4LjY2IE00NzcsMjE3Ljg5aC0xMCBNNDY3LDIxNy44OWwtNS04LjY2IE00NTcsMjE3Ljg5aC0xMCBNNDYyLDIwOS4yMjlsLTUsOC42NiBNNTA3LDE2NS45MjdoLTEwIE00OTcsMTY1LjkyN2wtNS04LjY2IE00ODcsMTY1LjkyN2gtMTAgTTQ5MiwxNTcuMjY3bC01LDguNjYgTTU2Ni45OTksMTY1LjkyOWgtMTAgTTU1Ni45OTksMTY1LjkyOWwtNS04LjY2IE01NDYuOTk5LDE2NS45MjloLTEwIE01NTEuOTk5LDE1Ny4yNjlsLTUsOC42NiBNNDc3LDE2NS45MjlsNSw4LjY2IE00ODIsMTc0LjU4OWwtNSw4LjY2IE00ODcsMTgzLjI0OWw0Ljk5OSw4LjY1OCBNNDc3LDE4My4yNDloMTAgTTUzNywxNjUuOTI5bC01LTguNjYgTTUzMiwxNTcuMjY5bDUtOC42NiBNNTI3LDE0OC42MDhsLTUtOC42NiBNNTM3LDE0OC42MDhoLTEwIE02MjcsMjE3Ljg5bC01LTguNjYgTTYyMiwyMDkuMjI5bDUtOC42NiBNNjE3LDIwMC41NjlsLTUtOC42NiBNNjI3LDIwMC41NjloLTEwIE01NTEuOTk5LDE5MS45MDlsNS04LjY2IE01NTYuOTk5LDE4My4yNDlsOS45OTktMC4wMDIgTTU2MS45OTksMTc0LjU4OWw1LTguNjYgTTU2Ni45OTgsMTgzLjI0N2wtNC45OTktOC42NTggTTUyMiwxMzkuOTQ2bC01LDguNjYgTTUxNywxNDguNjA2aC0xMCBNNTEyLDE1Ny4yNjdsLTUsOC42NiBNNTA3LDE0OC42MDZsNSw4LjY2IE02MTIsMTkxLjkwOWwtNSw4LjY2IE02MDcsMjAwLjU2OWgtMTAgTTYwMiwyMDkuMjI5bC01LDguNjYgTTU5NywyMDAuNTY5bDUsOC42NiBNNDkyLDE5MS45MDlsLTUsOC42NiBNNDg3LDIwMC41NjloLTEwIE00ODIsMjA5LjIyOWwtNSw4LjY2IE00NzcsMjAwLjU2OWw1LDguNjYgTTU2NywyMTcuODlsLTUtOC42NiBNNTYyLDIwOS4yMjlsNS04LjY2IE01NTcsMjAwLjU2OWwtNS04LjY2IE01NjcsMjAwLjU2OWgtMTAgTTQ0NywyMTcuODlsLTUtOC42NiBNNDQyLDIwOS4yMjlsNS04LjY2IE00MzcsMjAwLjU2OWwtNS04LjY2IE00NDcsMjAwLjU2OWgtMTAgTTQzMiwxOTEuOTA5bC01LDguNjYgTTQyNywyMDAuNTY5aC0xMCBNNDIyLDIwOS4yMjlsLTUsOC42NiBNNDE3LDIwMC41NjlsNSw4LjY2Ii8+DQoJCTxwYXRoIGQ9Ik04NywxOTEuOTA5bDE1LDI1Ljk4IE0xMDIsMjE3Ljg5aDMwIE03MiwyMTcuODlsMTUtMjUuOTggTTQyLDIxNy44OWgzMCBNMjY3LDE5MS45MDlsMTUsMjUuOTggTTI4MiwyMTcuODloMzAgTTI1MiwyMTcuODlsMTUtMjUuOTggTTIyMiwyMTcuODloMzAgTTIyMiwxNjUuOTI5bC0xNSwyNS45OCBNMjA3LDE5MS45MDlsMTUsMjUuOTggTTE5MiwxNjUuOTI5aDMwIE0xNzcsMTM5Ljk0OGwxNSwyNS45OCBNMTMyLDE2NS45MjhoMzAgTTE2MiwxNjUuOTI4bDE1LTI1Ljk4IE0xNDcsMTkxLjkwOGwtMTUtMjUuOTggTTEzMiwyMTcuODlsMTUtMjUuOTgxIi8+DQoJCTxwYXRoIGQ9Ik01NjcsMTAwLjg5aDkwIE0zODcsMTAwLjg5aDkwIE01MjIsMjIuOTQ3bDQ0Ljk5OSw3Ny45NDMgTTQ3NywxMDAuODlsNDUtNzcuOTQyIi8+DQoJCTxsaW5lIHgxPSI0MiIgeTE9IjEwMC44OSIgeDI9IjMxMiIgeTI9IjEwMC44OSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"},43383:function(e,M){M.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9kYjMyNDM5OV9kZmQ5XzQ0NjJfOTBhN19hNWM0ZDk4ZDJmOThfc3ZnIiB3aWR0aD0iMzguMjg0Mjg2NDk5MDIzNDQiIGhlaWdodD0iNjQuMTQyMTM1NjIwMTE3MTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMjMwLjg1Nzg2NDM3OTg4MjgsMTkwLjg1Nzg2NDM3OTg4MjgsMzguMjg0Mjg2NDk5MDIzNDQsNjQuMTQyMTM1NjIwMTE3MTkiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIyLjQ0OTI5MzU5ODI5NDcwNjVlLTE1IiB5Mj0iLTQwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMi40NDkyOTM1OTgyOTQ3MDY1ZS0xNSIgeTE9Ii00MCIgeDI9Ii0xNC4xNDIxMzU2MjM3MzA5NDciIHkyPSItNTQuMTQyMTM1NjIzNzMwOTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTQuMTQyMTM1NjIzNzMwOTQ3IiB5MT0iLTU0LjE0MjEzNTYyMzczMDk1IiB4Mj0iMS43NzYzNTY4Mzk0MDAyNTA1ZS0xNSIgeTI9Ii00MCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjEuNzc2MzU2ODM5NDAwMjUwNWUtMTUiIHkxPSItNDAiIHgyPSIxNC4xNDIxMzU2MjM3MzA5NTMiIHkyPSItNTQuMTQyMTM1NjIzNzMwOTUiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxNC4xNDIxMzU2MjM3MzA5NTMiIHkxPSItNTQuMTQyMTM1NjIzNzMwOTUiIHgyPSIxLjc3NjM1NjgzOTQwMDI1MDVlLTE1IiB5Mj0iLTQwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPHBvbHlnb24gcG9pbnRzPSIwLDAgLC01LC05ICwwLC03ICw1LC05ICIgc3Ryb2tlPSJibGFjayIgZmlsbD0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43NzYzNTY4Mzk0MDAyNTA1ZS0xNSwtNDAuMCkgcm90YXRlKC0xODAsMCwwKSI+PC9wb2x5Z29uPgo8L2c+CjxtZXRhZGF0YT48cmF3PmZyb20gdHVydGxlIGltcG9ydCAqCgpsZWZ0KDkwKQpkZWYgYmF1bShncsO2c3NlKToKICAgIGZvcndhcmQoZ3LDtnNzZSkKICAgIGxlZnQoNDUpCiAgICBmb3J3YXJkKGdyw7Zzc2UgLyAyKQogICAgYmFja3dhcmQoZ3LDtnNzZSAvIDIpCiAgICByaWdodCg5MCkKICAgIGZvcndhcmQoZ3LDtnNzZSAvIDIpCiAgICBiYWNrd2FyZChncsO2c3NlIC8gMikKICAgIGxlZnQoNDUpCmJhdW0oNDApIDwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"},69386:function(e,M,N){M.Z=N.p+"assets/images/52-tree-n2-9b54ef3d34efa5ed9061a02723905694.svg"}}]);