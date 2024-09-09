"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[54499],{44804:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(74848),a=i(28453),t=i(44786);const r={sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},c="Hashfunktionen",l={id:"Kryptologie/Hashfunktionen/hash-funktionen",title:"Hashfunktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/versioned_docs/version-26e/11-Kryptologie/05-Hashfunktionen/04-hash-funktionen.md",sourceDirName:"11-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/hash-funktionen",permalink:"/26e/Kryptologie/Hashfunktionen/hash-funktionen",draft:!1,unlisted:!1,tags:[],version:"26e",sidebarPosition:4,frontMatter:{sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},sidebar:"sidebar",previous:{title:"Passw\xf6rter speichern",permalink:"/26e/Kryptologie/Hashfunktionen/save-passwords"},next:{title:"Asymmetrie umkehren",permalink:"/26e/Kryptologie/Digitale-Signaturen/Asymmetrie-Unkehren"}},d={},o=[{value:"Hashfunktion",id:"hashfunktion",level:2},{value:"Hashwert",id:"hashwert",level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",level:2}];function h(e){const n={admonition:"admonition",div:"div",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Answer:r,Comment:c,Figure:l,SourceRef:d}=n;return r||g("Answer",!0),c||g("Comment",!0),l||g("Figure",!0),d||g("SourceRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h1,{id:"hashfunktionen",children:"Hashfunktionen"}),(0,s.jsx)(c,{nr:0,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Hashfunktion",type:"info",children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"}),(0,s.jsx)(c,{nr:0,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]})}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Da eine ",(0,s.jsx)(n.strong,{children:"Eingabe beliebiger L\xe4nge"})," auf eine ",(0,s.jsx)(n.strong,{children:"Ausgabe mit fester L\xe4nge"})," abgebildet, ist Injektivit\xe4t unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte (also die Pr\xfcfsummen) eine fixe L\xe4nge haben."]}),(0,s.jsx)(c,{nr:1,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(l,{options:{width:"600px"},children:[(0,s.jsx)(n.img,{alt:"Hashfunktion",src:i(90603).A+"",width:"1172",height:"509"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("span",{style:{flexGrow:1}}),"Hashfunktion",(0,s.jsx)("span",{style:{flexGrow:1}}),(0,s.jsx)(d,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1}})]})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h2,{id:"hashfunktion",children:"Hashfunktion"}),(0,s.jsx)(c,{nr:1,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist nicht zu verhindern, dass Kollisionen auftreten."}),(0,s.jsx)(c,{nr:2,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Kollisionsresistenz",type:"info",children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."}),(0,s.jsx)(c,{nr:3,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]})}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h2,{id:"hashwert",children:"Hashwert"}),(0,s.jsx)(c,{nr:2,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsxs)(n.p,{children:["Die Ausgabe der Hashfunktion \u2013 also die Pr\xfcfsumme \u2013 wird ",(0,s.jsx)(n.strong,{children:"Hashwert"})," genannt."]}),(0,s.jsx)(c,{nr:4,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen."}),(0,s.jsx)(c,{nr:5,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]})]})}),(0,s.jsx)("div",{className:"item",style:{alignSelf:"end"},children:(0,s.jsx)("div",{className:"content",children:(0,s.jsxs)(l,{options:{width:"100px"},children:[(0,s.jsx)(n.img,{alt:"Ein Hashwert ist wie ein Fingerabdruck",src:i(55854).A+"",width:"150",height:"223"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("span",{style:{flexGrow:1}}),"Ein Hashwert ist wie ein Fingerabdruck",(0,s.jsx)("span",{style:{flexGrow:1}}),(0,s.jsx)(d,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1}})]})]})})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.h2,{id:"aktuelle-beispiele",children:"Aktuelle Beispiele"}),(0,s.jsx)(c,{nr:3,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."}),(0,s.jsx)(c,{nr:6,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n",(0,s.jsx)(t.A,{}),"\n",(0,s.jsxs)(n.admonition,{type:"aufgabe",children:[(0,s.jsx)(r,{type:"state",webKey:"3107459a-1598-4eec-b45d-4c2c539d721f"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."}),(0,s.jsx)(c,{nr:7,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen?"}),(0,s.jsx)(c,{nr:8,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,s.jsx)(r,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0})]}),"\n",(0,s.jsx)(n.admonition,{type:"finding",children:(0,s.jsxs)(n.div,{className:"commentable",children:[(0,s.jsx)(n.p,{children:"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit min. 50% der Hashwert-Bits \xe4ndern."}),(0,s.jsx)(c,{nr:9,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(n.p,{children:"."})})]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44786:(e,n,i)=>{i.d(n,{A:()=>l});var s=i(20053),a=i(96540),t=i(67712),r=i(71312),c=i(74848);const l=()=>{const[e,n]=a.useState(""),[i,l]=a.useState("");return a.useEffect((()=>{l((0,r.sha256)(e))}),[e]),(0,c.jsx)("div",{className:(0,s.default)("hero","shadow--lw",t.A.container),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("p",{className:"hero__subtitle",children:"SHA-2 Hash"}),(0,c.jsx)("h4",{children:"Input"}),(0,c.jsx)("textarea",{className:(0,s.default)(t.A.input),value:e,onChange:e=>{n(e.target.value)},rows:5,placeholder:"Text"}),(0,c.jsx)("h4",{children:"SHA-2 Hash"}),(0,c.jsx)("textarea",{className:(0,s.default)(t.A.input),value:i,readOnly:!0,placeholder:"SHA2-Hash"})]})})}},67712:(e,n,i)=>{i.d(n,{A:()=>s});const s={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},55854:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},90603:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"}}]);