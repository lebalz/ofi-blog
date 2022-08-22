"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,b=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),i=a(86010),s=a(72389),o=a(67392),l=a(7094),m=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:s,block:c,defaultValue:u,values:b,groupId:v,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,o.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===u?u:null!=(t=null!=u?u:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,l.U)(),[w,T]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,m.o5)();if(null!=v){const e=N[v];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==w&&(E(t),T(n),null!=v&&x(v,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;a=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;a=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":c},h)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:C,onClick:C},s,{className:(0,i.default)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(65488);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},s=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:i[e],value:e}))))},e.children);var a}},65648:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(91189),r=a(67294),i=a(92814);const s="videoComponent_YfiL",o="headerClosed_s_Of",l="headerOpen_AzNA",m="minimize_pBQC",p="description_p2GN",d="title_YxV5",c="cardOpen_IEP6";var u=a(51436),b=a(86010);class v extends r.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",r.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:a}=e,{innerHeight:n}=window;t<n&&a>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:a,children:n}=this.props;return r.createElement("div",{ref:this.videoRef,className:s},this.state.open?r.createElement("div",{className:c},r.createElement("div",{className:l},e&&r.createElement("h5",{className:d},e),!this.props.expanded&&r.createElement("button",{className:(0,b.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},r.createElement(i.G,{icon:u.IQi})),n&&r.createElement("div",{className:p},n)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:u.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:o},r.createElement("div",{className:d},e||"Video"),n&&r.createElement("div",{className:p},n)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:u.IJ7,spin:!0}))))}}},77949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(83117),r=(a(67294),a(3905)),i=a(85107),s=(a(92814),a(44996)),o=a(65648);const l={sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},m="Betriebssystem",p={unversionedId:"BYOD/betriebssystem",id:"version-26P/BYOD/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-26P/02-BYOD/003-betriebssystem.md",sourceDirName:"02-BYOD",slug:"/BYOD/betriebssystem",permalink:"/26P/BYOD/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-26P/02-BYOD/003-betriebssystem.md",tags:[],version:"26P",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},sidebar:"version-26P/sidebar",previous:{title:"BYOD Basics",permalink:"/26P/BYOD/"},next:{title:"Dateiexplorer",permalink:"/26P/BYOD/dateiexplorer"}},d={},c=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},b=u("Comment"),v=u("TabItem"),h=u("Figure"),y={toc:c};function f(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(v,{value:"win11",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(h,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(51654).Z,width:"1507",height:"1577"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)(v,{value:"win10",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auf die Lupe ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-magnify mdi "}))," klicken und Suchanfrage starten."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(h,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(66901).Z,width:"1641",height:"1294"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,r.kt)(v,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Spotlight")," mit ",(0,r.kt)("kbd",{parentName:"p"},"Cmd"),"+",(0,r.kt)("kbd",{parentName:"p"},"Leertaste")," \xf6ffnen und direkt mit Tippen beginnen."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(h,{parentName:"div",options:{maxWidth:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=400px",src:a(29021).Z,width:"1383",height:"890"})),(0,r.kt)(b,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(v,{value:"win11",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/win11/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(v,{value:"win10",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(v,{value:"mac",mdxType:"TabItem"},(0,r.kt)(o.Z,{src:(0,s.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}f.isMDXComponent=!0},29021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"},51654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global-search-2bbfae0f4a0dbbf785974cef9c3e2f98.png"}}]);