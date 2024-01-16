"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),s=a(16550),m=a(91980),l=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,m._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[m,l]=g({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=m??c;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),f(e)}),[l,f,i]),tabValues:i}}var k=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:s,selectValue:m,tabValues:l}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=l[a].value;n!==s&&(c(t),m(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},o,{className:(0,i.default)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.default)("tabs-container",b.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(74866);const i={mac:"macOS",osx:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},o=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:i[e],value:e}))))},e.children);var a}},38995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(85107);const o={sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},s="Git 2.37.1",m={unversionedId:"Programmieren/Infrastruktur/Git-install/index",id:"version-24ef/Programmieren/Infrastruktur/Git-install/index",title:"Git 2.37.1",description:"\ud83d\udc49 https://git-scm.com/downloads",source:"@site/versioned_docs/version-24ef/01-Programmieren/02-Infrastruktur/03-Git-install/index.md",sourceDirName:"01-Programmieren/02-Infrastruktur/03-Git-install",slug:"/Programmieren/Infrastruktur/Git-install/",permalink:"/24ef/Programmieren/Infrastruktur/Git-install/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},sidebar:"version-24ef/sidebar",previous:{title:"Git Grundlagen",permalink:"/24ef/Programmieren/Infrastruktur/git"},next:{title:"GitHub",permalink:"/24ef/Programmieren/Infrastruktur/github"}},l={},p=[{value:"Git einrichten",id:"git-einrichten",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Comment"),u=c("TabItem"),g=c("GTabs"),f=c("Figure"),k={toc:p},b="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(b,(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"git-2371"},"Git 2.37.1"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)(i.Z,{os:["win","mac"],mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)(g,{getLabel:e=>`${e+1}.`,highlighted:[2,4,5,10,12],mdxType:"GTabs"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(37051).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Standardoption ist ok",src:a(70775).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Standardoption ist ok",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Praktische Option (optional)",src:a(8224).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Praktische Option (optional)",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(11809).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:":mdi-flash-triangle--orange: VS Code Ausw\xe4hlen!",src:a(52891).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," VS Code Ausw\xe4hlen!",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:":mdi-flash-triangle--orange: `main` als Standardname ausw\xe4hlen.",src:a(82749).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," ",(0,r.kt)("inlineCode",{parentName:"figcaption"},"main")," als Standardname ausw\xe4hlen.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(75144).Z,width:"499",height:"391"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(85250).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(75165).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(52418).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Die Windows Konsole ist ausreichend.",src:a(77167).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Die Windows Konsole ist ausreichend.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(80364).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Wir brauchen den Credential Manager nicht",src:a(3760).Z,width:"499",height:"392"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Wir brauchen den Credential Manager nicht",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(91666).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(69359).Z,width:"499",height:"392"})),(0,r.kt)(d,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Installieren Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew"),", wenn es nicht bereits installiert ist"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen: \xd6ffnen Sie ein Terminal (suchen Sie nach ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," bei Spotlight)"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie die Version von ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," - wird eine angezeigt, haben Sie's installiert:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew --version\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn keine Version angezeigt (bzw. sowas wie ",(0,r.kt)("inlineCode",{parentName:"p"},"zsh command not found"),"), installieren Sie ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"\ud83d\udc49 homebrew")),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Geben Sie ins Terminal "),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ein."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie, ob alles geklappt hat, indem Sie"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"in einem Terminal eintippen - wird eine Version angezeigt, war alles erfolgreich."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"git-einrichten"},"Git einrichten"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit die Einrichtung von Git abgeschlossen ist, m\xfcssen wir den Namen und die Email-Adresse, welche f\xfcr die Kennzeichnung von Commits verwendet wird, konfigurieren. Dies k\xf6nnen wir in einer Git-Shell konfigurieren (auf Mac: im ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal"),", auf Windows: in ",(0,r.kt)("inlineCode",{parentName:"p"},"Git Bash"),")."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dort tippen Sie folgende Kommandos ein (wobei Sie nat\xfcrlich Ihren Namen (oder Github-Nickname) anstatt ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBar")," verwenden, ebenso bei der Mail...)"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name FooBar\ngit config --global user.email foo@bar.ch\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen obs geklappt hat:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name\ngit config --global user.email\n")))}h.isMDXComponent=!0},37051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-1-bc65976691f66167e398f2bddb02e326.png"},52418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-10-c113d2389688b68da0a23609ae266540.png"},77167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-11-7eaefa3e98592fd9d32c32b2f09cffca.png"},80364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-12-0af9f0d09f65c6128ffb26c9bb5e889f.png"},3760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-13-bb61d9abd50c90fdec8d060b2ab1f146.png"},91666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-14-a74eb6a9df0d6d54142f3e3992c89c6d.png"},69359:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-15-84e130f820c20edbd85b2add3408a3d5.png"},70775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-2-6db1653791a3924a36b682fad38a7063.png"},8224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-3-02cff0c236c4f1a503523f78ad8e0497.png"},11809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-4-1bd334eef1bd726d453c6bb578e08f0d.png"},52891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-5-1b6fd80ce517112f5b81e81a2d31b07f.png"},82749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-6-8de0ef12266d3b27afe678111d1ca559.png"},75144:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-7-f568da28f268eb710059ff47c342fdfc.png"},85250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-8-06138241a826c53bcad38321825b41fc.png"},75165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-9-05c8c039ee93a49115a7487d3f7329c3.png"}}]);