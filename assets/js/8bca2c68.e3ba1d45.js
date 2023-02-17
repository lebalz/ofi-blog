"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[28874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(b,s(s({ref:t},c),{},{components:a})):n.createElement(b,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(83117),r=a(67294),i=a(86010),s=a(12466),o=a(76775),l=a(91980),m=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,m]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),v=(()=>{const e=l??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),h(e)}),[m,h,i]),tabValues:i}}var v=a(72389);const f="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=m[a].value;n!==o&&(p(t),l(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},s,{className:(0,i.default)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.default)("tabs-container",f)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(74866);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},s=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:i[e],value:e}))))},e.children);var a}},93183:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(91189),r=a(67294),i=a(92814);const s="videoComponent_YfiL",o="wrapButton_r5TZ",l="headerClosed_s_Of",m="headerOpen_AzNA",c="minimize_pBQC",p="description_p2GN",u="title_YxV5",d="cardOpen_IEP6";var b=a(51436),h=a(86010);class v extends r.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",r.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:a}=e,{innerHeight:n}=window;t<n&&a>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:a,children:n}=this.props;return r.createElement("div",{ref:this.videoRef,className:s},this.state.open?r.createElement("div",{className:d},r.createElement("div",{className:m},e&&r.createElement("h5",{className:u},e),!this.props.expanded&&r.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",c),onClick:this.onClick},r.createElement(i.G,{icon:b.IQi})),n&&r.createElement("div",{className:p},n)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:`video/${a||"mp4"}`})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:b.IJ7,spin:!0}))):r.createElement("button",{className:(0,h.default)("button button--block button--outline button--secondary",o),onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:l},r.createElement("div",{className:u},e||"Video"),n&&r.createElement("div",{className:p},n)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:`video/${a||"mp4"}`})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:b.IJ7,spin:!0}))))}}},77949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),i=a(85107),s=(a(92814),a(44996)),o=a(93183);const l={sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},m="Betriebssystem",c={unversionedId:"BYOD/betriebssystem",id:"version-26P/BYOD/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-26P/02-BYOD/003-betriebssystem.md",sourceDirName:"02-BYOD",slug:"/BYOD/betriebssystem",permalink:"/26P/BYOD/betriebssystem",draft:!1,tags:[],version:"26P",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},sidebar:"version-26P/sidebar",previous:{title:"BYOD Basics",permalink:"/26P/BYOD/"},next:{title:"Dateiexplorer",permalink:"/26P/BYOD/dateiexplorer"}},p={},u=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},b=d("Comment"),h=d("TabItem"),v=d("Figure"),f={toc:u};function y(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(h,{value:"win11",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(v,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(51654).Z,width:"1507",height:"1577"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)(h,{value:"win10",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auf die Lupe ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-magnify mdi "}))," klicken und Suchanfrage starten."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(v,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(66901).Z,width:"1641",height:"1294"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,r.kt)(h,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Spotlight")," mit ",(0,r.kt)("kbd",{parentName:"p"},"Cmd"),"+",(0,r.kt)("kbd",{parentName:"p"},"Leertaste")," \xf6ffnen und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(v,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(29021).Z,width:"1383",height:"890"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(h,{value:"win11",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/win11/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(h,{value:"win10",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(h,{value:"mac",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}y.isMDXComponent=!0},29021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"},51654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global-search-2bbfae0f4a0dbbf785974cef9c3e2f98.png"}}]);