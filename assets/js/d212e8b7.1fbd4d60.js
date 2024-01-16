"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[92704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.default)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,o.default)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(74866);const o={mac:"macOS",osx:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},i=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(n=e.os||t,n.map((e=>({label:o[e],value:e}))))},e.children);var n}},89523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(85107);const i={sidebar_position:1,sidebar_custom_props:{id:"ef5213ce-fcd5-4e1f-a4f3-1d3c57a3fd3d"}},l="VS Code Autocompletion",s={unversionedId:"Robotik/EV3/autocompletion",id:"version-24ef/Robotik/EV3/autocompletion",title:"VS Code Autocompletion",description:"Da auf Ihrem Laptop keine physischen Motoren und Sensoren angeschlossen sind, lassen sich die Programme nicht direkt auf Ihrem Computer ausf\xfchren. Die Bibliothek pybrichs kann entsprechend nicht installiert werden und VS Code kann somit auch keine Autovervollst\xe4ndigung f\xfcr die Klassen der Motoren und Sensoren anbieten. Aus diesem Grund wird die Autovervollst\xe4ndigung standardm\xe4ssig f\xfcr EV3-Projekte deaktiviert.",source:"@site/versioned_docs/version-24ef/04-Robotik/EV3/autocompletion.md",sourceDirName:"04-Robotik/EV3",slug:"/Robotik/EV3/autocompletion",permalink:"/24ef/Robotik/EV3/autocompletion",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_custom_props:{id:"ef5213ce-fcd5-4e1f-a4f3-1d3c57a3fd3d"}},sidebar:"version-24ef/sidebar",previous:{title:"Lernziele",permalink:"/24ef/Robotik/lernziele"},next:{title:"Pendelbus",permalink:"/24ef/Robotik/EV3/Pendelbus/"}},u={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("Comment"),m=p("TabItem"),f=p("Figure"),b={toc:c},v="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(v,(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"vs-code-autocompletion"},"VS Code Autocompletion"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Da auf Ihrem Laptop keine physischen Motoren und Sensoren angeschlossen sind, lassen sich die Programme nicht direkt auf Ihrem Computer ausf\xfchren. Die Bibliothek ",(0,a.kt)("inlineCode",{parentName:"p"},"pybrichs")," kann entsprechend nicht installiert werden und VS Code kann somit auch keine Autovervollst\xe4ndigung f\xfcr die Klassen der Motoren und Sensoren anbieten. Aus diesem Grund wird die Autovervollst\xe4ndigung standardm\xe4ssig f\xfcr EV3-Projekte ",(0,a.kt)("strong",{parentName:"p"},"deaktiviert"),"."),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Mit einem Trick kann man dennoch die Autovervollst\xe4ndigung hinzuf\xfcgen."),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Installation der Typ-Definitionen der ",(0,a.kt)("inlineCode",{parentName:"p"},"pybricks"),"-Bibliothek"),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)(o.Z,{mdxType:"OsTabs"},(0,a.kt)(m,{value:"win",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install git+https://github.com/pybricks/pybricks-api@master\n"))),(0,a.kt)(m,{value:"mac",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install git+https://github.com/pybricks/pybricks-api@master\n")))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"In den Einstellungen von VS Code ",(0,a.kt)("strong",{parentName:"p",className:"underline"},(0,a.kt)("i",{parentName:"strong",className:"mdi-cog mdi "})," Settings > ",(0,a.kt)("i",{parentName:"strong",className:"mdi-magnify mdi "}))," suchen Sie nach ",(0,a.kt)("inlineCode",{parentName:"p"},"python.languageServer")," und w\xe4hlen dort ",(0,a.kt)("inlineCode",{parentName:"p"},"PyLance")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"Default")," aus."),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)(f,{parentName:"div",options:{width:"450px"},mdxType:"Figure"},(0,a.kt)("img",{alt:"--width=450px",src:n(79846).Z,width:"921",height:"346"})),(0,a.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Nach einem neu-\xf6ffnen von ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py")," sollte die Autovervollst\xe4ndigung nun funktionieren:"),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(f,{parentName:"div",options:{width:"400px"},mdxType:"Figure"},(0,a.kt)("img",{alt:"--width=400px",src:n(23205).Z,width:"840",height:"628"})),(0,a.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))}h.isMDXComponent=!0},23205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ev3-autocomplete-eed4a541475aff27553db45910c8d178.png"},79846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ev3-lsp-2be11bf911f43395f02491bd4cf3875b.png"}}]);