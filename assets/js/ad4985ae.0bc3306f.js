"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[81647],{71656:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(86010),i=n(67294),r=n(38134),s=n(72023);const o=()=>{const[e,t]=i.useState(""),[n,o]=i.useState("");return i.useEffect((()=>{o((0,s.sha256)(e))}),[e]),i.createElement("div",{className:(0,a.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"SHA-2 Hash"),i.createElement("h4",null,"Input"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:e,onChange:e=>{t(e.target.value)},rows:5,placeholder:"Text"}),i.createElement("h4",null,"SHA-2 Hash"),i.createElement("textarea",{className:(0,a.default)(r.Z.input),value:n,readOnly:!0,placeholder:"SHA2-Hash"})))}},35733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(71656);const s={sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},o="Hashfunktionen",m={unversionedId:"Netzwerke/Protokolle/hash-funktionen",id:"version-24ef/Netzwerke/Protokolle/hash-funktionen",title:"Hashfunktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/versioned_docs/version-24ef/02-Netzwerke/02-Protokolle/03-hash-funktionen.md",sourceDirName:"02-Netzwerke/02-Protokolle",slug:"/Netzwerke/Protokolle/hash-funktionen",permalink:"/24ef/Netzwerke/Protokolle/hash-funktionen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},sidebar:"version-24ef/sidebar",previous:{title:"Aufgabe",permalink:"/24ef/Netzwerke/Protokolle/aufgabe"},next:{title:"3. Vom LAN zum Internet",permalink:"/24ef/Netzwerke/LAN/"}},d={},p=[{value:"Hashfunktion",id:"hashfunktion",level:2},{value:"Hashwert",id:"hashwert",level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("Comment"),h=l("Figure"),k=l("SourceRef"),u=l("Answer"),g={toc:p},f="wrapper";function b(e){let{components:t,...s}=e;return(0,i.kt)(f,(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"hashfunktionen"},"Hashfunktionen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("admonition",{title:"Hashfunktion",type:"info"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Da eine ",(0,i.kt)("strong",{parentName:"p"},"Eingabe beliebiger L\xe4nge")," auf eine ",(0,i.kt)("strong",{parentName:"p"},"Ausgabe mit fester L\xe4nge"),' abgebildet wird, ist die Umkehrung (vom Ausgabewert auf den  Eingabewert zu schliessen... wird auch "Injektivit\xe4t" genannt) unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte eine fixe L\xe4nge haben.'),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(h,{parentName:"div",options:{width:"600px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hashfunktion --width=600px",src:n(85837).Z,width:"1172",height:"509"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hashfunktion",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(k,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"hashfunktion"},"Hashfunktion"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist im Beispiel Oben nicht zu verhindern, dass Kollisionen auftreten."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("admonition",{title:"Kollisionsresistenz",type:"info"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"hashwert"},"Hashwert"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{},className:"item"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Ausgabe der Hashfunktion wird ",(0,i.kt)("strong",{parentName:"p"},"Hashwert")," genannt."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen. So wie mit einem Fingerabdruck nicht auf die Pers\xf6nlichkeit/Charakter einer Person geschlossen werden kann, l\xe4sst sich auch nicht von einem Hashwert auf das Passwort schliessen. "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",style:{alignSelf:"end"},className:"item"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(h,{parentName:"div",options:{width:"100px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Ein Hashwert ist wie ein Fingerabdruck --width=100px",src:n(32595).Z,width:"150",height:"223"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ein Hashwert ist wie ein Fingerabdruck",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(k,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"aktuelle-beispiele"},"Aktuelle Beispiele"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"HashSHA2"}),(0,i.kt)("admonition",{type:"aufgabe"},(0,i.kt)(u,{type:"state",webKey:"3107459a-1598-4eec-b45d-4c2c539d721f",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen? "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,i.kt)(u,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0,mdxType:"Answer"})),(0,i.kt)("admonition",{type:"finding"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit min. 50% der Hashwert-Bits \xe4ndern."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))))}b.isMDXComponent=!0},38134:(e,t,n)=>{n.d(t,{Z:()=>a});const a={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},32595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},85837:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);