(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12353],{46994:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var s=n(72389);const a={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",pdfPage:"pdfPage_I2kr",scroll:"scroll_u4Il",controls:"controls_xr2C"};var o=n(86010),i=n(67294),r=n(71493),l=n(99603),d=n(59417);const c=e=>{const[t,n]=(0,i.useState)(null),[c,u]=(0,i.useState)(-1),[m,b]=(0,i.useState)(e.width),[p,f]=(0,i.useState)(150),g=(0,s.Z)(),[v,k]=(0,i.useState)(!1);i.useEffect((()=>(window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const w=i.useRef(null),h=()=>{if(!w.current)return;const e=w.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;f(t)}},N=()=>{if(!w.current)return;const t=.98*w.current.getBoundingClientRect().width;h();let n=t,s=!1;e.width&&e.scale?n=Math.min(e.width*e.scale,t):e.width?n=Math.min(e.width,t):e.scale&&(n=e.scale*t),e.minWidth&&n<e.minWidth&&(n=e.minWidth,s=!0),s!==v&&k(s),b(n)},y=e=>{const{scrollX:n,scrollY:s}=window;u(c+e>t?1:c+e<1?t:c+e),setTimeout((()=>{window.scrollTo(n,s)}),0)};return g?i.createElement("div",{className:(0,o.default)(a.pdfWrapper,v&&a.overflowing,e.scroll&&a.scroll,(t<=1||void 0!==e.page)&&a.singlepage),ref:w},i.createElement("div",{style:{height:`${p+8}px`}},i.createElement(r.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:s}=t;n(s),c<0&&u(e.page||1),N()},className:(0,o.default)(a.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},e.scroll&&Array.from({length:t},((e,t)=>i.createElement(r.T3,{className:(0,o.default)(a.pdfPage),pageNumber:t+1,width:m,onLoadSuccess:h,key:t}))),!e.scroll&&c>0&&i.createElement(r.T3,{pageNumber:c,width:m,onLoadSuccess:h}),!e.noDownload&&i.createElement("a",{href:e.file,className:(0,o.default)(a.download,"button","button--secondary","button--sm"),download:e.name},i.createElement(l.G,{icon:d.q7m})))),!e.scroll&&i.createElement("div",{className:(0,o.default)(a.controls)},t>1&&void 0===e.page&&i.createElement("div",{className:(0,o.default)("button-group")},i.createElement("button",{className:(0,o.default)("button","button--secondary","button--sm"),onClick:()=>{y(-1)}},i.createElement(l.G,{icon:d.nP8})),i.createElement("button",{className:(0,o.default)("button","button--secondary","button--sm"),disabled:!0},c||(t?1:"--")," / ",t||"--"),i.createElement("button",{className:(0,o.default)("button","button--secondary","button--sm"),onClick:()=>{y(1)}},i.createElement(l.G,{icon:d.JYN}))))):i.createElement("div",null,"Loading...")}},69652:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(87462),a=(n(67294),n(3905)),o=n(46994);const i={sidebar_custom_props:{id:"fd1f6ea0-fb41-4037-9204-cb9eabcb1f32"}},r="\xdcbungsblatt Subnetzmasken",l={unversionedId:"Netzwerke/Filius/uebungsblatt-subnetze",id:"version-24ef/Netzwerke/Filius/uebungsblatt-subnetze",title:"\xdcbungsblatt Subnetzmasken",description:"@pdf",source:"@site/versioned_docs/version-24ef/02-Netzwerke/09-Filius/02-uebungsblatt-subnetze.md",sourceDirName:"02-Netzwerke/09-Filius",slug:"/Netzwerke/Filius/uebungsblatt-subnetze",permalink:"/24ef/Netzwerke/Filius/uebungsblatt-subnetze",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"fd1f6ea0-fb41-4037-9204-cb9eabcb1f32"}},sidebar:"version-24ef/sidebar",previous:{title:"Routing",permalink:"/24ef/Netzwerke/Filius/routing"},next:{title:"IP-Adressen/Subnetzmasken",permalink:"/24ef/Netzwerke/Filius/subnetzmasken"}},d={},c=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("Comment"),b=u("Solution"),p=u("Figure"),f={toc:c},g="wrapper";function v(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,s.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"\xfcbungsblatt-subnetzmasken"},"\xdcbungsblatt Subnetzmasken"),(0,a.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{file:n(69610).Z,name:"Subnetzmasken.pdf",scroll:void 0,page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,a.kt)(b,{webKey:"9d85bea0-a966-4de1-b906-9ae8c39f1995",mdxType:"Solution"},(0,a.kt)("div",{className:"commentable"},(0,a.kt)(p,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(37907).Z,width:"1171",height:"1138"})),(0,a.kt)(m,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(p,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(69238).Z,width:"865",height:"1096"})),(0,a.kt)(m,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))))}v.isMDXComponent=!0},69610:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/files/Subnetzmasken-9a172a9d8a40eacc0116cd66e10ce8e7.pdf"},37907:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/images/lsg-1-1b822d619387ad7b9916a196c2d21434.png"},69238:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/images/lsg-2-5ea3c5280d02645e69e79655d2566926.png"},93414:()=>{},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);