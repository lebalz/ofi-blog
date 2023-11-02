"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=d(t),u=i,g=l["".concat(m,".").concat(u)]||l[u]||c[u]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_position:4,sidebar_custom_props:{id:"57115045-f2e5-4d0a-b843-ccd322d072ae",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Coroutinen-und-asyncio"}}},s="Coroutinen und asyncio",o={unversionedId:"Robotik/asyncio/index",id:"version-24ef/Robotik/asyncio/index",title:"Coroutinen und asyncio",description:"K\xf6nnen Computer mehrere Dinge gleichzeitig tun? Die Antwort lautet unterschiedlich, je nach dem, was mit gleichzeitig gemeint ist.",source:"@site/versioned_docs/version-24ef/04-Robotik/asyncio/index.md",sourceDirName:"04-Robotik/asyncio",slug:"/Robotik/asyncio/",permalink:"/24ef/Robotik/asyncio/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_custom_props:{id:"57115045-f2e5-4d0a-b843-ccd322d072ae",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/wikis/Robotik/Coroutinen-und-asyncio"}}},sidebar:"version-24ef/sidebar",previous:{title:"Zustandsmaschinen",permalink:"/24ef/Robotik/zustandsmaschinen/"},next:{title:"IOT Workshop 2023",permalink:"/24ef/IoT-Workshop/"}},m={},d=[{value:"Multitasking",id:"multitasking",level:2},{value:"Coroutinen",id:"coroutinen",level:2},{value:"<code>asyncio</code>",id:"asyncio",level:3}],p=(l="Comment",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var l;const c={toc:d},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"coroutinen-und-asyncio"},"Coroutinen und asyncio"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Computer mehrere Dinge ",(0,i.kt)("strong",{parentName:"p"},"gleichzeitig")," tun? Die Antwort lautet unterschiedlich, je nach dem, was mit ",(0,i.kt)("em",{parentName:"p"},"gleichzeitig")," gemeint ist."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das Herz des Computers ist der ",(0,i.kt)("strong",{parentName:"p"},"Prozessor"),". Er f\xfchrt Programme aus. Programme bestehen aus einzelnen Anweisungen, sogenannten ",(0,i.kt)("strong",{parentName:"p"},"Maschinenbefehlen"),", welche vom Prozessor einer nach dem anderen ausgef\xfchrt werden. Ein einfacher Prozessor mit einem ",(0,i.kt)("strong",{parentName:"p"},"Kern")," kann also nur eine einzige Aufgabe, man spricht von ",(0,i.kt)("strong",{parentName:"p"},"Tasks"),", auf's mal bearbeiten."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Heutige Prozessoren verf\xfcgen praktisch immer \xfcber ",(0,i.kt)("strong",{parentName:"p"},"mehrere Kerne"),". Jeder Kern f\xfcr sich ist ein eigener Prozessor. Computer mit solchen Prozessoren k\xf6nnen also so viele Tasks ",(0,i.kt)("strong",{parentName:"p"},"parallel")," ausf\xfchren, wie ihr Prozessor Kerne hat."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wenn ein Prozessor nur einen Kern hat, oder die Anzahl der zu bearbeitenden Tasks die Anzahl der verf\xfcgbaren Kerne ",(0,i.kt)("strong",{parentName:"p"},"\xfcbersteigt"),', so kann dennoch eine Form von "Gleichzeitigkeit" bei der Bearbeitung der Tasks erreicht werden. Man spricht von ',(0,i.kt)("strong",{parentName:"p"},"Concurrency")," (eigentlich Nebenl\xe4ufigkeit). Wie das gel\xf6st wird steht im folgenden Abschnitt."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"multitasking"},"Multitasking"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beim Multtasking werden die Tasks von einem ",(0,i.kt)("strong",{parentName:"p"},"Scheduler")," (engl. f\xfcr Planer, Disponent) auf die einzelnen Kerne ",(0,i.kt)("strong",{parentName:"p"},"verteilt"),". Der Scheduler ist Teil des Betriebssystems (welches ja auch nur ein Programm ist). Er ist verantwortlich, dass alle zu bearbeitenden Tasks m\xf6glichst ",(0,i.kt)("strong",{parentName:"p"},"gleich viel Bearbeitungszeit")," auf den Kernen zugeteilt erhalten und das alle Kerne m\xf6glichst gut ausgelastet sind."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Dabei gibt es ",(0,i.kt)("strong",{parentName:"p"},"zwei")," Verfahren, wie der Scheduler und die Tasks zusammenarbeiten:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Der Scheduler teilt den Tasks feste ",(0,i.kt)("strong",{parentName:"p"},"Bearbeitungszeitschlitze")," auf den zur Verf\xfcgung stehenden Kernen zu. Nach Ablauf der zugeteilten Zeit ",(0,i.kt)("strong",{parentName:"p"},"unterbricht")," der Scheduler den Task und teilt den Kern einem anderen Tasks zu, welcher am warten ist. Der unterbrochene Task muss selber warten, bis er wieder vom Scheduler aktiviert wird. Der Scheduler ist also der Meister und sagt, was geht. Diese Art von Multitasking nennt man ",(0,i.kt)("strong",{parentName:"p"},"pr\xe4emptives Multitasking")," (pr\xe4emptiv = zuvorkommend, pr\xe4ventiv, unterbrechend). Der grosse Vorteil dieser Vorgehensweise ist, dass ein Task den Computer ",(0,i.kt)("strong",{parentName:"p"},"nicht blockieren")," kann. Ein Nachteil ist, dass ein Task grunds\xe4tzlich an ",(0,i.kt)("strong",{parentName:"p"},"jeder beliebigen")," Stelle unterbrochen werden kann, was bei der Programmierung ber\xfccksichtigt werden muss. Alle g\xe4ngigen heutigen Betriebssysteme funktionieren auf diese Weise.   "),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein aktiver Task besetzt seinen zugeteilten Kern so lange, bis er entweder fertig ist, oder von sich aus beschliesst eine Pause zu machen, weil er zum Beispiel auf eine Eingabe vom Benutzer wartet. Er informiert dann den Scheduler, dass er den Kern freigibt und der Scheduler teilt diesen einem wartenden Task zu. Diese Art von Multitasking nennt man ",(0,i.kt)("strong",{parentName:"p"},"kooperatives Multitasking"),", weil hier die Tasks und der Scheduler zusammenarbeiten m\xfcssen. Besetzt ein Task seinen Kern zu lange, oder f\xfcr immer, z.B. weil er sich in einer unendlichen Schleife befindet, bekommen andere Tasks und auch der Scheduler keine Chance, um ihrerseits aktiv zu werden. Das System kann ",(0,i.kt)("strong",{parentName:"p"},"blockiert")," sein. ",(0,i.kt)("strong",{parentName:"p"},"Fr\xfche")," Versionen von Windows und MacOS verwendeten kooperatives Multitasking, weil es viel ",(0,i.kt)("strong",{parentName:"p"},"einfacher")," zu implementieren ist. Heute findet man es oft in ",(0,i.kt)("strong",{parentName:"p"},"eingebetteten Systemen"),", weil es viel weniger Overhead mit sich bringt und weniger Speicherressourcen ben\xf6tigt. Ausserdem gewinnt es zunehmend an Bedeutung innerhalb von Programmen, welche auf sogenannten ",(0,i.kt)("strong",{parentName:"p"},"Coroutinen")," aufbauen. "),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"coroutinen"},"Coroutinen"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Eine Coroutine ist eine Funktion, welche an bestimmten Stellen ihre Ausf\xfchrung ",(0,i.kt)("strong",{parentName:"p"},"unterbricht")," und sp\xe4ter an dieser Stelle wieder aufnehmen kann. In der Zwischenzeit erhalten andere Coroutinen die Gelegenheit selber aktiv zu werden, bis auch sie ihre Arbeit wieder unterbrechen. Coroutinen sind \xfcberall dort sinnvoll, wo ein Programm auf bestimmte ",(0,i.kt)("strong",{parentName:"p"},"Ereignisse")," warten muss, gleichzeitig aber andere Aufgaben ",(0,i.kt)("strong",{parentName:"p"},"nicht blockiert")," werden d\xfcrfen. Dies ist beispielsweise der Fall in Programmen, welche einerseits auf Eingaben durch den Benutzer warten und andererseits auf Nachrichten reagieren m\xfcssen, welche \xfcber das Netzwerk ankommen."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"asyncio"},(0,i.kt)("inlineCode",{parentName:"h3"},"asyncio")),(0,i.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"asyncio")," heisst die Python-Bibliothek, welche es zur Programmierung von Coroutinen braucht. In Micro-Python heisst die Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"uasyncio"),". "),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Beispiel, wie man mit ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio")," Coroutinen programmieren kann, ist in folgendem Snippet zu finden"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="asyncio_demo.py"',reference:!0,title:'"asyncio_demo.py"'},"https://github.com/lebalz/ofi-blog/blob/71289c73782c7270a65de75bd63e5ea8c0e02f18/docs/EF-Robotik/asyncio/scripts/demo.py\n")))}g.isMDXComponent=!0}}]);