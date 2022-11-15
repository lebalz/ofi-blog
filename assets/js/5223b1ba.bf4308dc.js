"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3663],{20869:(e,t,a)=>{a.d(t,{RN:()=>o,T0:()=>c,ZP:()=>u,ZV:()=>p});var n=a(67294),i=a(92956),l=a(71217),r=a(21314),s=a(34805),d=a(86010),m=a(76177);const c={checked:"mdi-checkbox-marked-outline",unset:"mdi-checkbox-blank-outline",question:"mdi-account-question-outline",star:"mdi-star","star-half":"mdi-star-half-full","star-empty":"mdi-star-outline"},o={checked:"--ifm-color-success",unset:"--ifm-color-secondary",question:"--ifm-color-warning",star:"--ifm-color-primary","star-empty":"--ifm-color-primary","star-half":"--ifm-color-primary"},p={checked:"white",unset:"black",question:"white",star:"gold","star-empty":"gold","star-half":"gold"},u=(0,l.Pi)((e=>{const t=(0,r.oR)("documentStore").find(e.webKey),a=n.useRef(null);n.useEffect((()=>{a.current&&t&&t.setWindowPositionY(a.current.getBoundingClientRect().top)}),[t,a]);return t.loaded?n.createElement(n.Fragment,null,n.createElement("div",{ref:a,className:(0,d.default)(i.Z.state,"state-component",(e.noHeader||e.children)&&"no-header","no-comments"),id:"state-"+t.webKey},n.createElement("div",{className:(0,d.default)(i.Z.state,i.Z.checkbox),style:{backgroundColor:"var("+o[t.data.value]+")"},onClick:()=>{const a=e.states.indexOf(t.value);t.setValue(e.states[(a+1)%e.states.length])}},n.createElement("i",{className:(0,d.default)("mdi",c[t.value]),style:{color:""+p[t.data.value]}})),n.createElement("div",null,e.children)),n.createElement(m.l,{webKey:e.webKey})):n.createElement(s.Z,null)}))},76177:(e,t,a)=>{a.d(t,{c:()=>u,l:()=>p});var n=a(21314),i=a(86010),l=a(71217),r=a(67294),s=a(92956),d=a(38684),m=a(20869),c=a(96486),o=a.n(c);const p=(0,l.Pi)((e=>{const t=(0,n.oR)("adminStore"),{sidebar_custom_props:a}=(0,d.Z)(),[l,c]=r.useState();r.useEffect((()=>{c(window.location.pathname.replace("/","").split("/")[0])}),[]);const{viewGroupFilter:o}=t;return r.createElement(r.Fragment,null,t.isAdmin&&t.showTaskStates&&l&&r.createElement("div",{className:(0,i.default)(s.Z.admin)},t.findByWebKey(l,null==a?void 0:a.id,e.webKey).map(((e,a)=>{const n=t.getUser(e.user_id);return!n||o&&!n.groups.includes(o)?null:r.createElement("div",{className:(0,i.default)(s.Z.box),key:a},r.createElement("div",{className:(0,i.default)(s.Z.state),style:{backgroundColor:"var("+m.RN[e.data.value]+")"},onClick:()=>{t.setView(e.user_id)}},r.createElement("i",{className:(0,i.default)("mdi",m.T0[e.data.value]),style:{color:""+m.ZV[e.data.value]}})),r.createElement("div",{className:(0,i.default)(s.Z.nameWrapper)},r.createElement("div",{className:(0,i.default)(s.Z.name)},n.name||"Name")))}))))})),u=(0,l.Pi)((()=>{const e=(0,n.oR)("adminStore"),{sidebar_custom_props:t}=(0,d.Z)(),[a,l]=r.useState(),{viewGroupFilter:c}=e;r.useEffect((()=>{l(window.location.pathname.replace("/","").split("/")[0])}),[]);let p=e.filteredBy(a,null==t?void 0:t.id,"state");c&&(p=p.filter((t=>{const a=e.getUser(t.user_id);return null==a?void 0:a.groups.includes(c)})));const u=o().groupBy(p,(t=>{var a;return(null==(a=e.getUser(t.user_id))?void 0:a.name)||"Name"}));return r.createElement(r.Fragment,null,e.isAdmin&&e.showTaskStateSummary&&a&&r.createElement("div",{className:(0,i.default)(s.Z.admin,s.Z.summary)},Object.keys(u).sort().map(((t,a)=>r.createElement("div",{className:(0,i.default)(s.Z.box,s.Z.overviewBox),key:a},u[t].map(((t,a)=>r.createElement("div",{key:a,className:(0,i.default)(s.Z.state),style:{backgroundColor:"var("+m.RN[t.data.value]+")"}},r.createElement("a",{className:(0,i.default)("mdi",m.T0[t.data.value]),style:{color:""+m.ZV[t.data.value]},href:"#state-"+t.web_key,onClick:()=>{setTimeout((()=>{e.setView(t.user_id),e.showTaskStates||e.toggleAdminElements("task_state")}),0)}})))),r.createElement("div",{className:(0,i.default)(s.Z.nameWrapper)},r.createElement("div",{className:(0,i.default)(s.Z.name)},t)))))))}))},78042:(e,t,a)=>{a.d(t,{x:()=>T,Z:()=>_});var n=a(83117),i=a(67294);const l={answer:"answer_rKAQ",option:"option_CENc",empty:"empty_rgdf",arrayAnswer:"arrayAnswer_LBzS",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",string:"string_bQ7O",solution:"solution_PBIM",dropdown:"dropdown_v9No",current:"current_jPR7",active:"active_Vst5",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",dropdownMenu:"dropdownMenu_UYca"};var r=a(86010),s=a(71217),d=a(68949),m=a(72389),c=a(21314),o=a(34805);const p=(0,s.Pi)((e=>{const[t,a]=i.useState(e.value?e.items.findIndex((t=>t.value===e.value)):0),n=e.items[t];return i.createElement("div",{className:(0,r.default)("dropdown",l.dropdown,e.className)},i.createElement("div",{className:(0,r.default)(l.current,l.option,!n.color&&l.empty,n.className,e.disabled&&l.disabled),"data-toggle":"dropdown",onClick:t=>{if(e.disabled)return;const a=t.currentTarget,n=a.parentElement;function i(){a.classList.remove("button--active"),n.classList.remove("dropdown--show"),document.removeEventListener("click",i)}n.classList.contains("dropdown--show")||(a.classList.add("button--active"),n.classList.add("dropdown--show"),setTimeout((()=>{document.addEventListener("click",i)}),0))}},n.label||n.value),i.createElement("div",{className:(0,r.default)(l.dropdownMenu,"dropdown__menu")},e.items.map(((n,s)=>i.createElement("div",{key:s,onClick:()=>((t,n)=>{a(n),e.onChange(t)})(n.value,s),className:(0,r.default)(l.option,n.className,!n.color&&l.empty,t===s&&l.active)},i.createElement("span",null,n.label||n.value))))))})),u=/--(?<klass>\w+)$/,b=e=>{if(u.test(e))return e.match(u).groups.klass},v=e=>l[b(e)],y=(0,s.Pi)((e=>{const t=(0,m.Z)(),[a,n]=i.useState("unchecked"),s=(0,c.oR)("documentStore").find(e.webKey),u=e=>{s.loaded&&(n("unchecked"),s.setData({value:e,type:"string"}))},y=t=>{if(e.checker)return n(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;n(a(t)===a(e.solution)?"correct":"wrong")};if(i.useEffect((()=>(0,d.U5)((()=>s.loaded),(e=>{e&&y(s.value)}))),[s]),i.useEffect((()=>{s.loaded&&y(s.value)}),[s,t]),!t)return i.createElement("div",null,"SSR");if(!s.loaded)return i.createElement(o.Z,null);const h=e.solution||e.checker;return i.createElement("div",{className:(0,r.default)(l.answer,l.string,"notranslate")},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement(p,{onChange:u,items:e.select.map(((e,t)=>({value:e,label:b(e),className:v(e)}))),value:s.value,className:(0,r.default)(v(s.value),h&&l.solution),disabled:!s.loaded}):i.createElement("input",{type:"text",style:{width:e.width},spellCheck:!1,onChange:e=>u(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),h&&i.createElement("button",{onClick:()=>y(s.value),className:(0,r.default)(l[a],l.checkButton)},i.createElement("i",{className:(0,r.default)("mdi",(f=a,"correct"===f?"mdi-check-circle":"wrong"===f?"mdi-close-circle":"mdi-help-circle-outline"))})));var f})),h=/--(?<klass>\w+)$/,f=e=>l[(e=>{if(h.test(e))return e.match(h).groups.klass})(e)],k=(0,s.Pi)((e=>{const t=(0,c.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?i.createElement("div",{className:l.answer},e.label&&i.createElement("label",null,e.label),i.createElement("div",{className:l.arrayAnswer},t.data.value.map(((n,l)=>e.select?i.createElement(p,{value:n,onChange:e=>a(e,l),items:e.select.map(((e,t)=>{const a=e.replace(h,"");return{value:e,label:a||e,className:f(e)}}))}):i.createElement("input",{key:l,type:"text",onChange:e=>a(e.target.value,l),value:n,disabled:!t.loaded||t.readonly}))))):i.createElement(o.Z,null)}));var N=a(31288);const g=(0,s.Pi)((e=>{const t=(0,c.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",{className:"notranslate"},e.label&&i.createElement("h6",null,e.label),i.createElement(N.Z,(0,n.Z)({model:t},e))):i.createElement(o.Z,null)}));var w=a(90203);const x=(0,s.Pi)((e=>(0,c.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var E=a(97762),C=a(20869);const T=e=>e.replace(/\s+/g,"").toUpperCase(),_=(0,s.Pi)((e=>{const t=(0,c.oR)("documentStore"),a=(0,c.oR)("msalStore"),l=t.find(e.webKey),s=(0,m.Z)();return(0,c.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||E.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size};case"state":return{type:"state",value:"unset"}}})(e)),e.type,e.webKey,!0),s?l?i.createElement("div",{"data--web-key":e.webKey,className:(0,r.default)("answer",e.type)},i.createElement(w.Z,null),a.loggedIn&&i.createElement(x,{webKey:e.webKey}),"text"===e.type&&i.createElement(g,e),"string"===e.type&&i.createElement(y,e),"array"===e.type&&i.createElement(k,e),"state"===e.type&&i.createElement(C.ZP,(0,n.Z)({states:["unset","checked","question"]},e))):i.createElement(o.Z,null):i.createElement("div",{style:{height:"1em"}})}))},90203:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294);const i="noLoginAlert_HRfh";var l=a(39960),r=a(71217),s=a(21314);const d=(0,r.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:i},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},15226:(e,t,a)=>{a.d(t,{Vc:()=>g,bF:()=>E,H4:()=>x,g7:()=>N});var n=a(21314),i=a(86010),l=a(68949),r=a(71217),s=a(67294),d=a(63437);const m="container_zVtl",c="input_tYix",o="inputContainer_mEEr",p="active_fzzJ",u="interactive_Yfi1",b="pixelEditor_B1ri",v="row_yRws",y="cell_gJPc",h="off_TP1h",f="on_DXrb",k="actions_N7O9",N=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),g={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},w=function(e,t){void 0===t&&(t=!0);const a=[];let n=e.replace(/\s/g,"");for(;n.length>0&&(!(n.length<5)||t);)a.push(n.slice(0,5)),n=n.slice(5);return a},x=(0,r.Pi)((()=>{const[e,t]=s.useState(""),[a,r]=s.useState(""),[d,u]=s.useState("text"),b=(0,n.oR)("viewStore");return s.useEffect((()=>{var e;t((null==(e=b.penta)?void 0:e.text)||"")}),[]),s.useEffect((()=>(0,l.aD)((()=>{b.penta={text:e}}))),[e]),s.useEffect((()=>{"text"===d&&r((e=>e.toUpperCase().split("").map((e=>g[e]||e)))(e).join(" "))}),[e]),s.useEffect((()=>{"penta"===d&&t((e=>w(e).map((e=>g[e]||e)))(a).join(""))}),[a]),s.createElement("div",{className:(0,i.default)("hero","shadow--lw",m)},s.createElement("div",{className:"container"},s.createElement("p",{className:"hero__subtitle"},"Pentacode"),s.createElement("h4",null,"Klartext"),s.createElement("div",{className:o},s.createElement("textarea",{onFocus:()=>u("text"),placeholder:"Klartext eingeben",className:(0,i.default)(c),value:e,onChange:e=>{const a=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.toUpperCase()),setTimeout((()=>e.target.setSelectionRange(a,a)),0)},rows:5}),"text"===d&&s.createElement("div",{className:p})),s.createElement("h4",null,"Pentacode"),s.createElement("div",{className:o},s.createElement("textarea",{onFocus:()=>u("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(c),value:a,onChange:e=>r(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===d&&s.createElement("div",{className:p}))))})),E=(0,r.Pi)((()=>{const[e,t]=s.useState("00000 00000 00000 00000 00000"),[a,r]=s.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[o,p]=s.useState("editor"),N=(0,n.oR)("viewStore");return s.useEffect((()=>{t(N.pentaPixel.penta||"00000 00000 00000 00000 00000")}),[]),s.useEffect((()=>(0,l.aD)((()=>{N.pentaPixel={penta:e}}))),[e]),s.useEffect((()=>{"cell"!==o?(p("editor"),r(w(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):p("")}),[e]),s.useEffect((()=>{"editor"!==o?(p("cell"),t(a.map((e=>e.join(""))).join(" "))):p("")}),[a]),s.createElement("div",{className:(0,i.default)("hero","shadow--lw",m)},s.createElement("div",{className:"container"},s.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),s.createElement("div",{className:u},s.createElement("div",{className:(0,i.default)(b)},s.createElement(d.Z,{options:{backgroundColor:"white",canvasWidth:150,canvasHeight:30*a.length}},s.createElement(s.Fragment,null,a.map(((e,t)=>s.createElement("div",{className:(0,i.default)(v),key:t},e.map(((e,n)=>s.createElement("span",{className:(0,i.default)(y,0===e?h:f),key:n,onClick:()=>{const e=(e=>{const t=[];return e.forEach((e=>{const a=[];t.push(a),e.forEach((e=>{a.push(e)}))})),t})(a);e[t][n]=1-e[t][n],r(e)}})))))))),s.createElement("div",{className:k},s.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>r([...a,[0,0,0,0,0]])},"+"),s.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>r([...a.slice(0,-1)])},"-"))),s.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(c),value:e,onChange:e=>{const a=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.replace(/[^01\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(a,a)),0)},rows:a.length}))))}))},63437:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(51436),i=a(92814),l=a(86010),r=a(14842),s=a(67294);const d={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},m={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},c=e=>{let{children:t,options:a}=e;const[n,c]=s.useState(void 0),[o,p]=s.useState("none"),u=s.useRef(null);return s.useEffect((()=>{if(["none","spin","ready"].includes(o))return;const e=setTimeout((()=>p("copied"===o?"ready":"none")),2e3);return()=>clearTimeout(e)}),[o]),s.useEffect((()=>{"none"!==o&&p("none")}),[t]),s.createElement(s.Fragment,null,s.createElement("button",{className:(0,l.default)("button","button--outline","button--sm",m[o]),disabled:"spin"===o,onClick:()=>{if(null!==u.current){if("none"===o)return p("spin"),(0,r.SE)(u.current,a).then((e=>{c(e),p("ready")}));if("ready"===o)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{p("copied")})).catch((e=>{p("error"),console.warn(e)}))}catch(e){console.warn(e),p("error")}}}},s.createElement(i.G,{icon:d[o]})),s.createElement("div",{ref:u,className:"copy-container"},t))}},34805:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),i=a(86010);const l="loader_FEpR",r="badge_oWqf",s="overlay_cqDg";var d=a(92814),m=a(51436);const c=e=>n.createElement("div",{className:(0,i.default)(l,e.overlay&&s)},n.createElement(d.G,{icon:m.IJ7,spin:!0}),n.createElement("span",{className:(0,i.default)("badge",r)},e.caption||"Laden..."))},31288:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(72389),i=a(71217),l=a(67294);const r=(0,i.Pi)((e=>{const[t,i]=l.useState();return l.useEffect((()=>{Promise.all([a.e(40532),a.e(73160),a.e(61897),a.e(98267)]).then(a.bind(a,98267)).then((e=>{i(e)}))}),[]),(0,n.Z)()?t?l.createElement(t.default,e):l.createElement("div",null):l.createElement("div",null,e.model.text)}))},82025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),l=a(78042),r=a(15226);const s={sidebar_custom_props:{id:"1a04affb-3d17-4f2f-ad01-8423c3bb8732"}},d="\xdcbungen",m={unversionedId:"Kryptologie/Symmetrisch/uebungen",id:"Kryptologie/Symmetrisch/uebungen",title:"\xdcbungen",description:"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel).",source:"@site/docs/Kryptologie/03-Symmetrisch/06-uebungen.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/uebungen",permalink:"/Kryptologie/Symmetrisch/uebungen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/06-uebungen.md",tags:[],version:"current",lastUpdatedAt:1668526179,formattedLastUpdatedAt:"15. Nov. 2022",sidebarPosition:6,frontMatter:{sidebar_custom_props:{id:"1a04affb-3d17-4f2f-ad01-8423c3bb8732"}},sidebar:"sidebar",previous:{title:"Verkettung von Bl\xf6cken",permalink:"/Kryptologie/Symmetrisch/block-chaining"},next:{title:"Kerckhoffs' Prinzip",permalink:"/Kryptologie/Symmetrisch/kerckhoffs"}},c={},o=[{value:"ECB Modus",id:"ecb-modus",level:2},{value:"CBC Modus",id:"cbc-modus",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("Comment"),b=p("Answer"),v=p("Figure"),y=p("SourceRef"),h={toc:o};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"\xfcbungen"},"\xdcbungen"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"L\xf6sen Sie die \xdcbungen von Hand (daher nur mit dem Pentacode-Editor als Hilfsmittel)."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"ecb-modus"},"ECB Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)(r.H4,{mdxType:"TextEditor"}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"1-xor-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. XOR Verschl\xfcsselung"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"BUCHSTABENSPIELE")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"AKRONYM")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"a30ab42b-0e2a-4452-a7a4-f34c96e8a4cd",monospace:!0,mdxType:"Answer"}),(0,i.kt)(b,{label:"Text (nicht bin\xe4r)",type:"string",webKey:"b680e137-905a-4bc5-a05a-fe65bc1684ee",solution:"C?QG.MLCN--?PHMN",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"2-xor-entschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. XOR Entschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"XWVJZWEKK,XWVJIK")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"VVXKZ")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"f0c2bc43-cc15-4f58-8466-19f2f3374d2e",monospace:!0,mdxType:"Answer"}),(0,i.kt)(b,{label:"Text (nicht bin\xe4r)",type:"string",webKey:"f877bdef-a2e9-4b82-a6cc-1b61109970c7",solution:"NANA ASS ANANAS.",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"cbc-modus"},"CBC Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"hinweis-cbc-modus"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hinweis CBC-Modus"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Jeder Block hat genau so viele Bits wie der Schl\xfcssel. (Hier werden also meist 2 Buchstaben (=",(0,i.kt)("inlineCode",{parentName:"p"},"10")," bits) pro Antwort in einem Block verwendet.)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"c1")," ist ein Zwischenresultat, damit wird weitergearbeitet..."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"3-cbc-modus-verschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. CBC-Modus: Verschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"CBC: Verschl\xfcsseln",src:a(83549).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"CBC: Verschl\xfcsseln",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(y,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"WINTER")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"NY")," und dem IV ",(0,i.kt)("inlineCode",{parentName:"p"},"AZ"),"."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"aeaf6634-df2d-427f-9daa-970ff225f105",monospace:!0,mdxType:"Answer"}),(0,i.kt)("br",null),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",style:{rows:"3",fontFamily:"monospace"},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 1")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"9f33bc0e-1475-49ee-8201-f389920f3da7",solution:"10111 01001",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"576d141c-99d1-41dd-9cb6-2536b5eefc61",solution:"00001 11010",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"6280885d-6427-4403-a09a-144b04f76716",solution:"10110 10011",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",solution:"01110 11001",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"029d1f0e-f597-4eb4-bac5-7c9ef6d8e849",solution:"11000 01010",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 2")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)(b,{label:"p",type:"string",width:"12em",labelWidth:"3em",webKey:"55c93903-3bdb-4189-8f80-68bb19f4cbd1",solution:"01110 10100",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",type:"string",width:"12em",labelWidth:"3em",webKey:"4fd15699-160c-4738-8288-b9d2a3ac40d3",solution:"11000 01010",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"52dc90fe-224a-4739-b277-1181fb41c265",solution:"10110 11110",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"2bbfd220-5673-488a-a903-528ef7324885",solution:"11000 00111",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 3")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)(b,{width:"12em",labelWidth:"3em",label:"p",type:"string",webKey:"8e2339e3-d4d9-4339-9709-bbbaf28e4e05",solution:"00101 10010",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{width:"12em",labelWidth:"3em",label:"IV",type:"string",webKey:"8db5f43f-0bcd-4d11-8bca-a72286778e65",solution:"11000 00111",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"3a7ac8ec-b6c6-4acd-b123-f1ca84d99fad",solution:"11101 10101",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"53ff56be-1a4b-4ad0-86fb-a98590d83d50",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"a44a611e-6cff-41ea-9277-4b0859ea6249",solution:"10011 01100",sanitizer:l.x,mdxType:"Answer"})))),(0,i.kt)(b,{label:"Text (nicht bin\xe4r)",type:"string",webKey:"dabff993-1dc5-43c8-bfca-f944c8dc3f96",solution:"XJXGSL",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"4-cbc-modus-entschl\xfcsseln"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. CBC-Modus: Entschl\xfcsseln"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"CBC Entschl\xfcsseln",src:a(89318).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"CBC Entschl\xfcsseln",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(y,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"NNHDFBA")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"BE")," und beliebigem IV."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)(b,{type:"text",webKey:"1d46518d-94df-4d09-8d12-ae6f28df2b67",monospace:!0,mdxType:"Answer"}),(0,i.kt)("br",null),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"(Antworten als Penta-Bin\xe4rcode)"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",style:{rows:"4",fontFamily:"monospace"},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 1")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"150519fd-560b-42e6-acec-58407af94ada",solution:"01110 01110",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",solution:"00010 00101",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel "),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"92338241-0b77-4195-b65b-c4cf64bf6734",solution:"01100 01011",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"aa136c52-c970-437f-b9ff-270468514137",checker:e=>{var t;return 10===(null==(t=(0,l.x)(e))?void 0:t.length)},mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"14beb904-594a-43ff-a67c-88b9ce93cb3c",checker:e=>{var t;return 10===(null==(t=(0,l.x)(e))?void 0:t.length)},mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 2")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",type:"string",width:"12em",labelWidth:"3em",webKey:"97948788-feeb-4c72-94fe-5e176283218a",solution:"01000 00100",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",type:"string",width:"12em",labelWidth:"3em",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"b4afd242-e054-4f3c-b865-2d14cc206057",solution:"01010 00001",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"d9ff2b83-e6de-490b-be42-11d4d4676da7",solution:"01110 01110",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"00ac07c4-7f1f-4d9a-a908-7f41f20621b0",solution:"00100 01111",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 3")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"b99355ce-bc59-4ac6-8183-cada8a706b27",solution:"00110 00010",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"dc3049f2-5006-4507-8dd5-8759b7c24465",solution:"00100 00111",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"e33acd9e-ccbf-4d39-aea2-9ee51b665fb2",solution:"01000 00100",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"1bcc452d-3099-4ab4-b24d-b24407a63c41",solution:"01100 00011",sanitizer:l.x,mdxType:"Answer"}))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Block 4")),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,i.kt)(b,{label:"c",width:"12em",labelWidth:"3em",type:"string",webKey:"30d7f06d-2d98-4649-b585-c3e0e11841fc",solution:"00001",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"k",width:"12em",labelWidth:"3em",type:"string",webKey:"f20e9df7-4811-4856-a487-02e2ed6b883b",disabled:!0,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit Schl\xfcssel"),(0,i.kt)(b,{label:"c1",width:"12em",labelWidth:"3em",type:"string",webKey:"69af84b4-3d3a-4377-adbb-6870b71cb9c7",solution:"00011",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)(b,{label:"IV",width:"12em",labelWidth:"3em",type:"string",webKey:"791d6b06-0ab1-4cb7-82d2-388ed8cd7626",solution:"00110",sanitizer:l.x,mdxType:"Answer"}),(0,i.kt)("i",null,"Nach XOR mit IV "),(0,i.kt)(b,{label:"p",width:"12em",labelWidth:"3em",type:"string",webKey:"d0fbef85-346d-4d70-bb60-972205240d36",solution:"00101",sanitizer:l.x,mdxType:"Answer"})))),(0,i.kt)(b,{label:"Text (nicht bin\xe4r)",type:"string",webKey:"4ce989c5-27ad-4146-bdf6-adb7b5908b55",solution:"DOLCE",sanitizer:e=>{var t;return 7===(null==(t=(0,l.x)(e))?void 0:t.length)?(0,l.x)(e).slice(2):(0,l.x)(e)},mdxType:"Answer"}))))}f.isMDXComponent=!0},92956:(e,t,a)=>{a.d(t,{Z:()=>n});const n={state:"state_xAV3",checkbox:"checkbox_HXMO",admin:"admin_yhn5",summary:"summary_r2i8",box:"box_nEnD",nameWrapper:"nameWrapper_q6u9",name:"name_FE1M",overviewBox:"overviewBox_dFeA"}},89318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CBC_decryption-e5affac8b24b593a703baa57e51c9bcc.svg"},83549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CBC_encryption-db55ceaa296438e01ffdad954f44699c.svg"}}]);