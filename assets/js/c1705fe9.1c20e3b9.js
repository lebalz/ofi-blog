(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7397],{46994:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(72389);const i={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",pdfPage:"pdfPage_I2kr",scroll:"scroll_u4Il",controls:"controls_xr2C"};var r=a(86010),d=a(67294),s=a(51692),o=a(99603),l=a(59417);const m=e=>{const[t,a]=(0,d.useState)(null),[m,c]=(0,d.useState)(-1),[p,u]=(0,d.useState)(e.width),[v,k]=(0,d.useState)(150),N=(0,n.Z)(),[f,h]=(0,d.useState)(!1);d.useEffect((()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]);const g=d.useRef(null),b=()=>{if(!g.current)return;const e=g.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;k(t)}},y=()=>{if(!g.current)return;const t=.98*g.current.getBoundingClientRect().width;b();let a=t,n=!1;e.width&&e.scale?a=Math.min(e.width*e.scale,t):e.width?a=Math.min(e.width,t):e.scale&&(a=e.scale*t),e.minWidth&&a<e.minWidth&&(a=e.minWidth,n=!0),n!==f&&h(n),u(a)},w=e=>{const{scrollX:a,scrollY:n}=window;c(m+e>t?1:m+e<1?t:m+e),setTimeout((()=>{window.scrollTo(a,n)}),0)};return N?d.createElement("div",{className:(0,r.default)(i.pdfWrapper,f&&i.overflowing,e.scroll&&i.scroll,(t<=1||void 0!==e.page)&&i.singlepage),ref:g},d.createElement("div",{style:{height:`${v+8}px`}},d.createElement(s.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:n}=t;a(n),m<0&&c(e.page||1),y()},className:(0,r.default)(i.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},e.scroll&&Array.from({length:t},((e,t)=>d.createElement(s.T3,{className:(0,r.default)(i.pdfPage),pageNumber:t+1,width:p,onLoadSuccess:b,key:t}))),!e.scroll&&m>0&&d.createElement(s.T3,{pageNumber:m,width:p,onLoadSuccess:b}),!e.noDownload&&d.createElement("a",{href:e.file,className:(0,r.default)(i.download,"button","button--secondary","button--sm"),download:e.name},d.createElement(o.G,{icon:l.q7m})))),!e.scroll&&d.createElement("div",{className:(0,r.default)(i.controls)},t>1&&void 0===e.page&&d.createElement("div",{className:(0,r.default)("button-group")},d.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),onClick:()=>{w(-1)}},d.createElement(o.G,{icon:l.nP8})),d.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),disabled:!0},m||(t?1:"--")," / ",t||"--"),d.createElement("button",{className:(0,r.default)("button","button--secondary","button--sm"),onClick:()=>{w(1)}},d.createElement(o.G,{icon:l.JYN}))))):d.createElement("div",null,"Loading...")}},58556:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>N,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),r=a(46994);const d={sidebar_custom_props:{id:"be5f9367-fe84-426b-82a6-043414616bcc"}},s="L\xf6ten",o={unversionedId:"IoT-Workshop/soldering/index",id:"version-24ef/IoT-Workshop/soldering/index",title:"L\xf6ten",description:"--width=120px",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/02-soldering/index.md",sourceDirName:"10-IoT-Workshop/02-soldering",slug:"/IoT-Workshop/soldering/",permalink:"/24ef/IoT-Workshop/soldering/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"be5f9367-fe84-426b-82a6-043414616bcc"}},sidebar:"version-24ef/sidebar",previous:{title:"Dashboard",permalink:"/24ef/IoT-Workshop/node-red/flows/dashboard"},next:{title:"1. Leuchtk\xe4fer",permalink:"/24ef/IoT-Workshop/soldering/bug/"}},l={},m=[{value:"L\xf6ten einfach gemacht... ",id:"l\xf6ten-einfach-gemacht-",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=c("Comment"),u=c("Figure"),v={toc:m},k="wrapper";function N(e){let{components:t,...d}=e;return(0,i.kt)(k,(0,n.Z)({},v,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"l\xf6ten"},"L\xf6ten"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{width:"120px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--width=120px",src:a(44120).Z,width:"369",height:"1304"})),(0,i.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beide Fl\xe4chen erhitzen"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"m\xf6glichst etwas unterhalb der Spitze"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("i",{parentName:"p",className:"mdi-flash-triangle-outline mdi red"})," L\xf6tzinn ",(0,i.kt)("strong",{parentName:"p"},"nicht")," direkt an die Spitze halten"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("i",{parentName:"p",className:"mdi-flash-triangle-outline mdi red"})," ",(0,i.kt)("strong",{parentName:"p"},"nicht")," mit unsauberer Spitze l\xf6ten"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(96338).Z,width:"1464",height:"661"})),(0,i.kt)(p,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dt",{parentName:"dl"},"A\n"),(0,i.kt)("dd",{parentName:"dl"},"So w\xfcnschen wir es uns"),(0,i.kt)("dt",{parentName:"dl"},"B, C, D, E\n"),(0,i.kt)("dd",{parentName:"dl"},"Mist - insbesondere bei ",(0,i.kt)("strong",{parentName:"dd"},"D")," kann es zu Kurzschl\xfcssen kommen")),(0,i.kt)(p,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"}))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"l\xf6ten-einfach-gemacht-"},"L\xf6ten einfach gemacht... ",(0,i.kt)("i",{parentName:"h2",className:"mdi-thought-bubble-outline mdi "})),(0,i.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{style:{maxWidth:"600px"}},(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(r.Z,{file:a(37232).Z,name:"SolderComic.pdf",scroll:void 0,page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"}))))}N.isMDXComponent=!0},37232:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/SolderComic-b3f13e5359101d8bd850d9646ce30782.pdf"},44120:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/solder-tip01-532052bd20ebd1e4ab1574a5e464b626.jpg"},96338:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/solder-tip02-6a367acd987ca6ce5d8566eb655649bf.jpg"},93414:()=>{},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);