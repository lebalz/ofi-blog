"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[48624],{5808:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(59417),r=a(99603),s=a(86010),i=a(67294);const m=e=>{if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;const t=Math.floor(Math.sqrt(e));for(let a=5;a<=t;a+=6)if(e%a==0||e%(a+2)==0)return!1;return!0},o=(e,t)=>{if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);const a=(t=Math.floor(t))-e+1,n=Math.floor(Math.random()*a)+e;if(m(n))return n;let r=n-1,s=n+1;for(;r>=e&&s<=t;){if(m(r))return r;if(m(s))return s;r-=1,s+=1}for(;r>=e;){if(m(r))return r;r-=1}for(;s<=t;){if(m(s))return s;s+=1}return null};var l=a(38134),p=a(9253),c=a(57478),d=a(14195),u=a(3023),h=a(75358),N=a(14888),k=a(74008),g=a(63437);const b=e=>i.createElement(i.Fragment,null,i.createElement("div",{className:(0,s.default)(l.Z.stage)},i.createElement("h4",null,e.label),i.createElement("span",{style:{flexGrow:1}}),i.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},i.createElement(r.G,{icon:n.zc,color:"white"}))),i.createElement("div",{className:(0,s.default)(l.Z.result)},e.result.calculations.map(((e,t)=>i.createElement("span",{className:(0,s.default)("badge","badge--secondary",l.Z.badge),key:t},e))),i.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&i.createElement("span",{className:(0,s.default)("badge","badge--success",l.Z.badge)},i.createElement(r.G,{icon:n.SZw})," ",e.result.time_ms.toFixed(1)," ms"))),f=e=>e.toLocaleString().replace(/[\.,]/g,"'"),y={calculations:[]},v=e=>{if(e<1e3)return e;const t=`${e}`.length-1,a=`${e}`.replace(/0*$/,""),n=a.slice(0,1),r=a.slice(1);return"1"===n?`10^${t}`:r?`${a.slice(0,1)}.${a.slice(1)}\xb710^${t}`:`${a.slice(0,1)}\xb710^${t}`},w=()=>{const[e,t]=i.useState(6),[a,n]=i.useState([0,0]),[r,m]=i.useState(0),[w,E]=i.useState(0),[x,S]=i.useState(0),[C,_]=i.useState(-1),[z,A]=i.useState([]),[M,T]=i.useState(0),[P,Z]=i.useState(-1),[I,K]=i.useState(-1),[F,$]=i.useState(0),[V,R]=i.useState(0),[D,B]=i.useState(!1);i.useRef(null);i.useEffect((()=>{m(0),e<8?n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("5".padEnd(e+1,"0"),10)]):8===e&&n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("1".padEnd(e+1,"0"),10)])}),[e]),i.useEffect((()=>{3===r&&A([...z,{product:M,time:I}])}),[r]);return i.createElement("div",{className:(0,s.default)("hero","shadow--lw",l.Z.container,l.Z.factorization)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",i.createElement("div",{className:(0,s.default)("button-group",l.Z.digits)},i.createElement("button",{className:(0,s.default)("button","button--sm","button--outline","button--primary",6===e&&"button--active"),onClick:()=>t(6)},"6"),i.createElement("button",{className:(0,s.default)("button","button--sm","button--outline","button--primary",7===e&&"button--active"),onClick:()=>t(7)},"7"),i.createElement("button",{className:(0,s.default)("button","button--sm","button--outline","button--primary",8===e&&"button--active"),onClick:()=>t(8)},"8")),"Stellen",i.createElement(b,{onStage:()=>{const e=window.performance.now(),t=o(a[0],a[1]),n=o(a[0],a[1]);E(Math.min(t,n)),S(Math.max(t,n));const r=window.performance.now()-e;_(r),m(1)},label:`Zwei Primzahlen zwische ${f(a[0])} und ${f(a[1])} w\xe4hlen`,result:r>0?{calculations:[f(w),f(x)],time_ms:C}:y}),r>0&&i.createElement(b,{onStage:()=>{const e=window.performance.now();T(w*x);const t=window.performance.now()-e;Z(t),m(2)},label:`Primzahlprodukt berechnen: ${f(w)} * ${f(x)}`,result:r>1?{calculations:[f(M)],time_ms:P}:y}),r>1&&i.createElement(b,{onStage:()=>{K(-1);const e=window.performance.now();let t=2;for(;t<M;){const e=M/t;if(e%1==0){$(t),R(e);break}2===t?t++:t+=2}const a=window.performance.now()-e;K(a),m(3)},label:"Primzahlen faktorisieren",result:r>2?{calculations:[f(F),f(V)],time_ms:I}:y}),z.length>0&&i.createElement("div",{style:{width:"100%",overflow:"auto"}},i.createElement(g.Z,null,i.createElement(p.h,{width:"100%",height:400},i.createElement(c.G,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},i.createElement(d.q,null),i.createElement(u.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:v,angle:40,textAnchor:"start"}),i.createElement(h.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),i.createElement(N.u,{cursor:{strokeDasharray:"3 3"}}),i.createElement(k.b,{name:"Mesurements",data:z,fill:"#8884d8"})))))))}},63437:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(59417),r=a(99603),s=a(86010),i=a(46293),m=a(67294);const o={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},l={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},p=e=>{let{children:t,options:a}=e;const[n,p]=m.useState(void 0),[c,d]=m.useState("none"),u=m.useRef(null);return m.useEffect((()=>{if(["none","spin","ready"].includes(c))return;const e=setTimeout((()=>d("copied"===c?"ready":"none")),2e3);return()=>clearTimeout(e)}),[c]),m.useEffect((()=>{"none"!==c&&d("none")}),[t]),m.createElement(m.Fragment,null,m.createElement("button",{className:(0,s.default)("button","button--outline","button--sm",l[c]),disabled:"spin"===c,onClick:()=>{if(null!==u.current){if("none"===c)return d("spin"),(0,i.SE)(u.current,a).then((e=>{p(e),d("ready")}));if("ready"===c)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{d("copied")})).catch((e=>{d("error"),console.warn(e)}))}catch(e){console.warn(e),d("error")}}}},m.createElement(r.G,{icon:o[c]})),m.createElement("div",{ref:u,className:"copy-container"},t))}},43753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),s=a(5808);const i={sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=792141"}}},m="Asymmetrie",o={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"version-26P/Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Abschnitten gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/versioned_docs/version-26P/11-Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"11-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/26P/Kryptologie/Asymmetrisch/asymmetrie",draft:!1,tags:[],version:"26P",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=792141"}}},sidebar:"version-26P/sidebar",previous:{title:"Geheime Farbe",permalink:"/26P/Kryptologie/Asymmetrisch/secret-color"}},l={},p=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Comment"),u=c("Answer"),h={toc:p},N="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"asymmetrie"},"Asymmetrie"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir haben in den beiden vorherigen Abschnitten gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,r.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,r.kt)(d,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Asymmetrische Verschl\xfcsselung",type:"finding"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Multiplizieren vs. Faktorisieren",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"e9065f77-e507-475e-bd4c-d6104da9180f",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Berechnen Sie ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"41"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mn",{parentName:"mrow"},"83")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"8"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schaffen Sie es, die Zahl ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3397")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mord"},"9"),(0,r.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1117")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))),(0,r.kt)(u,{type:"text",webKey:"e6e532b0-a0e6-4932-a4d3-2d6e161aed47",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"Aufwand f\xfcr den Computer",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"f77269d9-0b36-4221-b7e3-fbb11eccf2f7",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," Stellen einige (>3) Messungen vor."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,r.kt)(u,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"})),(0,r.kt)(s.Z,{mdxType:"PrimfactorizationTiming"}))}k.isMDXComponent=!0},38134:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);