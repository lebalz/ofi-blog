"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,u=d["".concat(l,".").concat(k)]||d[k]||c[k]||p;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<p;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},11865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const p={sidebar_custom_props:{id:"39138d1d-af75-42d8-9b2c-a389cf4738e6"}},i="Simple SQL Injection Example",s={unversionedId:"Datenbanken/sql-injection/snippets/README",id:"version-24ef/Datenbanken/sql-injection/snippets/README",title:"Simple SQL Injection Example",description:"Vorbereitung",source:"@site/versioned_docs/version-24ef/03-Datenbanken/04-sql-injection/snippets/README.md",sourceDirName:"03-Datenbanken/04-sql-injection/snippets",slug:"/Datenbanken/sql-injection/snippets/",permalink:"/24ef/Datenbanken/sql-injection/snippets/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"39138d1d-af75-42d8-9b2c-a389cf4738e6"}},sidebar:"version-24ef/sidebar",previous:{title:"SQL Injection",permalink:"/24ef/Datenbanken/sql-injection/"},next:{title:"Robotik",permalink:"/24ef/Robotik/"}},l={},m=[{value:"Vorbereitung",id:"vorbereitung",level:2},{value:"Flask starten",id:"flask-starten",level:2},{value:"WebApp",id:"webapp",level:2}],o=(d="Comment",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const c={toc:m},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"simple-sql-injection-example"},"Simple SQL Injection Example"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"vorbereitung"},"Vorbereitung"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"psycopg2 installieren f\xfcr die Verbindung zur Datenbank"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install psycopg2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"flask installieren f\xfcr den Webserver"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install flask\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"flask-starten"},"Flask starten"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um die Web Applikation zu starten, muss zuerst Flask gesagt werden, wo die Applikation zu finden ist (die Datei ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"webapp.py")," in diesem Fall) mit der Umgebungsvariable ",(0,r.kt)("inlineCode",{parentName:"p"},"FLASK_APP"),":"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FLASK_APP=webapp\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit wir die Applikation im Entwicklungsmodus starten k\xf6nnen, muss die Umgebungsvariable ",(0,r.kt)("inlineCode",{parentName:"p"},"FLASK_ENV")," gesetzt werden:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FLASK_ENV=development\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zuletzt kann die Applikation mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"flask run")," gestartet werden:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flask run\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"oder alles in einem:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"FLASK_APP=webapp FLASK_ENV=development flask run\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn die Applikation gestartet ist, kann sie im Browser unter der Adresse ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000/"},"http://127.0.0.1:5000/")," aufgerufen werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Output\n * Serving Flask app "hello" (lazy loading)\n * Environment: development\n * Debug mode: on\n * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)\n')),(0,r.kt)("admonition",{title:"Hinweis Schul-WLAN",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Schul-WLAN sind h\xf6here Ports gesperrt, weshalb keine Verbindung zur Datenbank aufgebaut werden kann. \xdcber einen Hotspot funktioniert es aber..."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"webapp"},"WebApp"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"webapp.py"),(0,r.kt)("pre",{parentName:"details"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="webapp.py"',reference:!0,title:'"webapp.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/Datenbanken-ef/04-sql-injection/snippets/webapp.py\n")))),(0,r.kt)(o,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"static/style.css"),(0,r.kt)("pre",{parentName:"details"},(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'reference title="static/style.css"',reference:!0,title:'"static/style.css"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/Datenbanken-ef/04-sql-injection/snippets/static/style.css\n")))),(0,r.kt)(o,{parentName:"div",type:"detailsWrapper",nr:1,mdxType:"Comment"})))}u.isMDXComponent=!0}}]);