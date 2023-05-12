"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),m=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,m]=h({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??p;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),b(e)}),[m,b,i]),tabValues:i}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:m}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=m[n].value;a!==l&&(p(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":n},t)},m.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:u},o,{className:(0,i.default)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,i.default)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(74866);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},o=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(n=e.os||t,n.map((e=>({label:i[e],value:e}))))},e.children);var n}},92040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(85107);const o={sidebar_label:"Podcast",sidebar_custom_props:{id:"65e7a7a2-2aee-44cd-854f-63d81861499b"}},l="Erstellen eines Podcast",s={unversionedId:"OFI-Projekt/podcast",id:"OFI-Projekt/podcast",title:"Erstellen eines Podcast",description:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/",source:"@site/docs/OFI-Projekt/02-podcast.md",sourceDirName:"OFI-Projekt",slug:"/OFI-Projekt/podcast",permalink:"/OFI-Projekt/podcast",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/OFI-Projekt/02-podcast.md",tags:[],version:"current",lastUpdatedAt:1675911179,formattedLastUpdatedAt:"9. Feb. 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Podcast",sidebar_custom_props:{id:"65e7a7a2-2aee-44cd-854f-63d81861499b"}},sidebar:"sidebar",previous:{title:"Projekt",permalink:"/OFI-Projekt/"},next:{title:"Wiedereinstieg",permalink:"/Programmieren-2/intro/"}},m={},d=[{value:"Audiodateien Zusammenschneiden",id:"audiodateien-zusammenschneiden",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Comment"),c=p("TabItem"),h={toc:d},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"erstellen-eines-podcast"},"Erstellen eines Podcast"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/"},"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nach der Recherche sollten Sie soweit sein, dass Sie ein Script f\xfcr Ihren Podcast erstellen k\xf6nnen. Dabei geht es in einem ersten Schritt darum, eine ",(0,r.kt)("strong",{parentName:"p"},"Gliederung")," in einzelne Abschnitte festzulegen. Es sollte sich ein ",(0,r.kt)("strong",{parentName:"p"},"logischer")," und f\xfcr die H\xf6rerinnen und H\xf6rer packender, nachvollziehbarer ",(0,r.kt)("strong",{parentName:"p"},"Ablauf")," ergeben."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Artikel ",(0,r.kt)("a",{parentName:"p",href:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/"},'"Der Aufbau einer Podcast-Episode"')," lesen Sie wie ein professioneller Podcast gegliedert werden kann."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen Sie den Artikel und erstellen Sie anschliessend in einem Word-Dokument Ihre eigene Gliederung. Schreiben Sie bei jedem Abschnitt stichwortartig auf, was Sie dort behandeln werden. Teilen Sie das Dokument in Ihrem Team."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ihre Stichworte sollen mindestens so detailliert sein, dass Sie w\xe4hrend der Aufnahme frei sprechen k\xf6nnen. Alternativ k\xf6nnen Sie auch einen vollst\xe4ndigen Text erstellen, denn Sie dann in der Aufnahme lesen."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Aber Achtung"),": Denken Sie daran, dass abgelesene Text oft eint\xf6nig klingen und wenn Sie einen Text erstellen, welcher kopierte Bausteine aus einer anderen Quelle enth\xe4lt, m\xfcssen Sie diese f\xfcr den H\xf6rer erkennbar und korrekt zitieren."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"audiodateien-zusammenschneiden"},"Audiodateien Zusammenschneiden"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Audacity",type:"success"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um einen Podcast zu erstellen, k\xf6nnen Sie im einfachsten Fall Ihre Stimme mit dem Handy aufnehmen und fertig."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie k\xf6nnen aber auch Ihren Text mit Musik oder Ger\xe4uschen untermalen. Dabei k\xf6nnen Sie eigene Aufnahmen oder Material aus dem Internet verwenden. Bei letzterem m\xfcssen Sie allerdings darauf achten, dass Sie keine Urheberrechte verletzten."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr das Zusammenmischen von verschiedenem Tonmaterial eignet sich die Software Audacity sehr gut."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter den folgenden Links finden Sie Information zu Audacity und m\xf6glichen Quellen von freier Musik."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("admonition",{parentName:"admonition",title:"ACHTUNG: Virenverseuchte Versionen im Umlauf",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn man in Google nach Audacity sucht, wird man auf die Seite ","[audacity.de]"," gelockt. Diese Seite bietet eine ",(0,r.kt)("strong",{parentName:"p"},"VIRENVERSEUCHTE")," Version von Audicity an."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"!! NICHT HERUNTERLADEN !!"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie Audacity nur mit dem nachfolgenden Link herunter."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.audacityteam.org/download/",className:"button button--warning"},"Download Audacity.org")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://freemusicarchive.org/home",className:"button button--primary"},"Free Music Archive")),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/Vn7HYyopGXk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("admonition",{parentName:"admonition",type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},".M4A"),"-Dateien"),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Dateiformat ",(0,r.kt)("inlineCode",{parentName:"p"},".M4A")," enth\xe4lt auch Audiodateien, die mit Audacity allerdings nur mit einer zus\xe4tzlichen Bibliothek, ffmpeg, eingelesen werden kann."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(c,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie ffmpeg ",(0,r.kt)("a",{parentName:"p",href:"https://lame.buanzo.org/ffmpeg64audacity.php"},"hier https://lame.buanzo.org/ffmpeg64audacity.php")," herunter und installieren Sie es (nicht den Link im Video verwenden!)."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube.com/embed/JAjb0aLj_yw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),(0,r.kt)(c,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube.com/embed/E9EF6QYJTrI",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))))}f.isMDXComponent=!0}}]);