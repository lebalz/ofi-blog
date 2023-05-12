"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[50464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),c=l(a),N=s,h=c["".concat(p,".").concat(N)]||c[N]||d[N]||r;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=N;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:s,i[1]=m;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},35130:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(21314),s=a(86010),r=a(96486),i=a(68949),m=a(46670),p=a(67294),l=a(38134);const o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],c=e=>e.toUpperCase().replace(/\s+/g," "),d=(0,m.Pi)((()=>{const[e,t]=p.useState(""),[a,m]=p.useState(o.join("")),[d,N]=p.useState(o),[h,k]=p.useState(o),[u,g]=p.useState(""),[b,f]=p.useState("text"),v=(0,n.oR)("viewStore");return p.useEffect((()=>{t(v.substitution?.text||""),g(v.substitution?.cipher||""),m(v.substitution?.key||o.join("")),f(v.substitution?.source||"text")}),[]),p.useEffect((()=>(0,i.aD)((()=>{v.substitution={text:e,cipher:u,key:a,source:b}}))),[a,e,u,b]),p.useEffect((()=>{N((0,r.differenceWith)(o,a.split(""),r.isEqual))}),[a]),p.useEffect((()=>{if("text"!==b||0===e.length)return;if(a.length!==o.length)return;const t=e.split("").map((e=>o.includes(e)?a[o.indexOf(e)]:e));g(t.join(""))}),[e,a,d]),p.useEffect((()=>{if("cipher"!==b||0===u.length)return;if(a.length!==o.length)return;const e=u.split("").map((e=>o.includes(e)?o[a.split("").indexOf(e)]:e));t(e.join(""))}),[u,a,d]),p.useEffect((()=>{const e=a.split("");(0,r.uniq)(a.split("")).forEach((t=>{e.splice(e.indexOf(t),1)})),k((0,r.uniq)(e))}),[d]),p.createElement("div",{className:(0,s.default)("hero","shadow--lw",l.Z.container)},p.createElement("div",{className:"container"},p.createElement("p",{className:"hero__subtitle"},"Substitutions-Chiffre"),p.createElement("h4",null,"Klartext"),p.createElement("div",{className:l.Z.inputContainer},p.createElement("textarea",{className:(0,s.default)(l.Z.input),value:e,onChange:e=>{const a=Math.max(e.target.selectionStart,e.target.selectionEnd);f("text"),t(c(e.target.value)),setTimeout((()=>e.target.setSelectionRange(a,a)),0)},onClick:()=>f("text"),rows:5,placeholder:"Klartext"}),"text"===b&&p.createElement("div",{className:l.Z.active})),p.createElement("div",{className:l.Z.stringInputContainer},p.createElement("h4",null,p.createElement("label",{htmlFor:"subs-key"},"Schl\xfcssel")),p.createElement("div",{className:(0,s.default)(l.Z.iv,"button-group")},p.createElement("input",{id:"subs-key",type:"text",placeholder:"Ein vollst\xe4ndiges Aplhabet",value:a,autoComplete:"off",className:(0,s.default)(a.length!==o.length&&l.Z.invalid),onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);m((e=>e.toUpperCase().replace(/[^A-Z ]/g,""))(e.target.value)),setTimeout((()=>{e.target.setSelectionRange(t,t)}),0)}}),p.createElement("button",{className:(0,s.default)("button","button--primary","button--sm"),onClick:()=>{m((0,r.shuffle)(o).join(""))}},"Zuf\xe4llig Setzen")),d.length>0&&p.createElement("div",null,p.createElement("span",null,"Im Schl\xfcssel fehlende Buchstaben:"),d.map((e=>p.createElement("span",{className:(0,s.default)("badge","badge--danger"),key:e},e)))),h.length>0&&p.createElement("div",null,p.createElement("span",null,"Im Schl\xfcssel doppelt vorhandene Buchstaben:"),h.map((e=>p.createElement("span",{className:(0,s.default)("badge","badge--warning"),key:e},e))))),p.createElement("h4",null,"Geheimtext"),p.createElement("div",{className:l.Z.inputContainer},p.createElement("textarea",{className:(0,s.default)(l.Z.input),value:u,onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);f("cipher"),g(c(e.target.value)),setTimeout((()=>e.target.setSelectionRange(t,t)),0)},onClick:()=>f("cipher"),rows:5,placeholder:"Monoalphabetisch verschl\xfcsselter Geheimtext"}),"cipher"===b&&p.createElement("div",{className:l.Z.active}))))}))},6657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),s=(a(67294),a(3905)),r=a(35130);const i={sidebar_label:"Substitution",sidebar_custom_props:{id:"5acac9b9-dd0f-4475-b4a3-f0d14ebcfe62",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=481987"}}},m="Monoalphabetische Substitution",p={unversionedId:"Kryptologie/Antike/substitution",id:"version-25h/Kryptologie/Antike/substitution",title:"Monoalphabetische Substitution",description:"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine monoalphabetische Substitution genannt.",source:"@site/versioned_docs/version-25h/08-Kryptologie/02-Antike/04-substitution.md",sourceDirName:"08-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/substitution",permalink:"/25h/Kryptologie/Antike/substitution",draft:!1,tags:[],version:"25h",sidebarPosition:4,frontMatter:{sidebar_label:"Substitution",sidebar_custom_props:{id:"5acac9b9-dd0f-4475-b4a3-f0d14ebcfe62",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=481987"}}},sidebar:"version-25h/sidebar",previous:{title:"Caesar-Chiffre",permalink:"/25h/Kryptologie/Antike/Caesar"},next:{title:"H\xe4ufigkeitsanalyse",permalink:"/25h/Kryptologie/Antike/frequency-analysis"}},l={},o=[{value:"Substitutions-Chiffre ausprobieren",id:"substitutions-chiffre-ausprobieren",level:2}],c=(d="Comment",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var d;const N={toc:o},h="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h1",{parentName:"div",id:"monoalphabetische-substitution"},"Monoalphabetische Substitution"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine ",(0,s.kt)("strong",{parentName:"p"},"monoalphabetische Substitution")," genannt."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Das Verfahren wird \xabmonoalphabetisch\xbb genannt, weil zum Verschl\xfcsseln eines Textes nur ",(0,s.kt)("strong",{parentName:"p"},"ein Alphabet")," zum Einsatz kommt. Im Gegensatz dazu werden bei \xabpolyalphabetischen\xbb Verfahren f\xfcr die Verschl\xfcsselung eines einzigen Textes mehrere verschiedene Alphabete verwendet (siehe z.B. Vigen\xe8re)."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,s.kt)("div",{className:"overflow-x"},(0,s.kt)("div",{className:"commentable"},(0,s.kt)("table",{parentName:"div"},(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Monoalphabetische Substitution"),(0,s.kt)("th",{parentName:"tr",align:"left"}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Klartextalphabet"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"A")," ",(0,s.kt)("inlineCode",{parentName:"td"},"B")," ",(0,s.kt)("inlineCode",{parentName:"td"},"C")," ",(0,s.kt)("inlineCode",{parentName:"td"},"D")," ",(0,s.kt)("inlineCode",{parentName:"td"},"E")," ",(0,s.kt)("inlineCode",{parentName:"td"},"F")," ",(0,s.kt)("inlineCode",{parentName:"td"},"G")," ",(0,s.kt)("inlineCode",{parentName:"td"},"H")," ",(0,s.kt)("inlineCode",{parentName:"td"},"I")," ",(0,s.kt)("inlineCode",{parentName:"td"},"J")," ",(0,s.kt)("inlineCode",{parentName:"td"},"K")," ",(0,s.kt)("inlineCode",{parentName:"td"},"L")," ",(0,s.kt)("inlineCode",{parentName:"td"},"M")," ",(0,s.kt)("inlineCode",{parentName:"td"},"N")," ",(0,s.kt)("inlineCode",{parentName:"td"},"O")," ",(0,s.kt)("inlineCode",{parentName:"td"},"P")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,s.kt)("inlineCode",{parentName:"td"},"R")," ",(0,s.kt)("inlineCode",{parentName:"td"},"S")," ",(0,s.kt)("inlineCode",{parentName:"td"},"T")," ",(0,s.kt)("inlineCode",{parentName:"td"},"U")," ",(0,s.kt)("inlineCode",{parentName:"td"},"V")," ",(0,s.kt)("inlineCode",{parentName:"td"},"W")," ",(0,s.kt)("inlineCode",{parentName:"td"},"X")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Z"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Geheimtextalphabet"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"M")," ",(0,s.kt)("inlineCode",{parentName:"td"},"B")," ",(0,s.kt)("inlineCode",{parentName:"td"},"T")," ",(0,s.kt)("inlineCode",{parentName:"td"},"C")," ",(0,s.kt)("inlineCode",{parentName:"td"},"H")," ",(0,s.kt)("inlineCode",{parentName:"td"},"J")," ",(0,s.kt)("inlineCode",{parentName:"td"},"F")," ",(0,s.kt)("inlineCode",{parentName:"td"},"S")," ",(0,s.kt)("inlineCode",{parentName:"td"},"A")," ",(0,s.kt)("inlineCode",{parentName:"td"},"E")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,s.kt)("inlineCode",{parentName:"td"},"O")," ",(0,s.kt)("inlineCode",{parentName:"td"},"R")," ",(0,s.kt)("inlineCode",{parentName:"td"},"D")," ",(0,s.kt)("inlineCode",{parentName:"td"},"N")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Z")," ",(0,s.kt)("inlineCode",{parentName:"td"},"W")," ",(0,s.kt)("inlineCode",{parentName:"td"},"I")," ",(0,s.kt)("inlineCode",{parentName:"td"},"U")," ",(0,s.kt)("inlineCode",{parentName:"td"},"P")," ",(0,s.kt)("inlineCode",{parentName:"td"},"G")," ",(0,s.kt)("inlineCode",{parentName:"td"},"X")," ",(0,s.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,s.kt)("inlineCode",{parentName:"td"},"K")," ",(0,s.kt)("inlineCode",{parentName:"td"},"L")," ",(0,s.kt)("inlineCode",{parentName:"td"},"V"))))),(0,s.kt)(c,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Es ist ersichtlich, dass eine Entschl\xfcsselung nun viel aufw\xe4ndiger ist, da keine Alphabet-Verschiebung mehr stattfindet, sondern eine wilde Vertauschung (= Substitution) der Buchstaben."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Die Nachricht ",(0,s.kt)("inlineCode",{parentName:"p"},"EIN KLEINER RABE FLIEGT AM TAGE")," wird verschl\xfcsselt zu ",(0,s.kt)("inlineCode",{parentName:"p"},"HAD YOHADHI IMBH JOAHFP MR PMFH"),"."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("div",{parentName:"admonition",className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Die Tatsache, dass der Buchstabe ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," im obigen Beispiel \xabnicht\xbb verschl\xfcsselt wird (also auch im Geheimtext ein ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," ist), stellt \xfcberhaupt kein Problem dar \u2013 im Gegenteil, es w\xfcrde die Anzahl M\xf6glichkeiten einschr\xe4nken, wenn es verboten w\xe4re, dass einzelne Buchstaben auch unver\xe4ndert bleiben d\xfcrfen."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Bei dieser Substitution h\xe4ngt die Anzahl m\xf6glicher Verschl\xfcsselungen von der Gr\xf6sse des zugrundeliegenden Zeichensatzes ab. Wenn ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," Zeichen verwendet werden, gibt es ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!")))))," unterschiedliche Verschl\xfcsselungen. ",(0,s.kt)("em",{parentName:"p"},"(",(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!"))))),' bedeutet "n Fakult\xe4t" und ist das Produkt aller nat\xfcrlicher Zahlen bis zur angegebenen Zahl, Beispiel: ',(0,s.kt)("span",{parentName:"em",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"24")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"))))),")"),"."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h2",{parentName:"div",id:"substitutions-chiffre-ausprobieren"},"Substitutions-Chiffre ausprobieren"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,s.kt)(r.Z,{mdxType:"Substitution"}))}k.isMDXComponent=!0},38134:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);