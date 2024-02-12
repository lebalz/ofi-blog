/*! For license information please see ad4985ae.914fed8e.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[81647],{33861:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>_,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var s=i(85893),r=i(11151),n=i(86010),a=i(67294),h=i(96734),o=i(72023);const c=()=>{const[e,t]=a.useState(""),[i,r]=a.useState("");return a.useEffect((()=>{r((0,o.sha256)(e))}),[e]),(0,s.jsx)("div",{className:(0,n.default)("hero","shadow--lw",h.Z.container),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("p",{className:"hero__subtitle",children:"SHA-2 Hash"}),(0,s.jsx)("h4",{children:"Input"}),(0,s.jsx)("textarea",{className:(0,n.default)(h.Z.input),value:e,onChange:e=>{t(e.target.value)},rows:5,placeholder:"Text"}),(0,s.jsx)("h4",{children:"SHA-2 Hash"}),(0,s.jsx)("textarea",{className:(0,n.default)(h.Z.input),value:i,readOnly:!0,placeholder:"SHA2-Hash"})]})})},l={sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},d="Hashfunktionen",p={id:"Netzwerke/Protokolle/hash-funktionen",title:"Hashfunktionen",description:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb",source:"@site/versioned_docs/version-24ef/02-Netzwerke/02-Protokolle/03-hash-funktionen.md",sourceDirName:"02-Netzwerke/02-Protokolle",slug:"/Netzwerke/Protokolle/hash-funktionen",permalink:"/24ef/Netzwerke/Protokolle/hash-funktionen",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"79c8cca9-e452-4e59-9445-e5c06cb23b90",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=103784"}}},sidebar:"sidebar",previous:{title:"Aufgabe",permalink:"/24ef/Netzwerke/Protokolle/aufgabe"},next:{title:"3. Vom LAN zum Internet",permalink:"/24ef/Netzwerke/LAN/"}},u={},f=[{value:"Hashfunktion",id:"hashfunktion",level:2},{value:"Hashwert",id:"hashwert",level:2},{value:"Aktuelle Beispiele",id:"aktuelle-beispiele",level:2}];function H(e){const t={admonition:"admonition",div:"div",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components},{Answer:n,Comment:a,Figure:h,SourceRef:o}=t;return n||b("Answer",!0),a||b("Comment",!0),h||b("Figure",!0),o||b("SourceRef",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.h1,{id:"hashfunktionen",children:"Hashfunktionen"}),(0,s.jsx)(a,{nr:0,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Hashfunktion",type:"info",children:(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"\xabEine Hashfunktion ist eine Abbildung, die eine grosse Eingabemenge auf eine kleinere Zielmenge abbildet.\xbb"}),(0,s.jsx)(a,{nr:0,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]})}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsxs)(t.p,{children:["Da eine ",(0,s.jsx)(t.strong,{children:"Eingabe beliebiger L\xe4nge"})," auf eine ",(0,s.jsx)(t.strong,{children:"Ausgabe mit fester L\xe4nge"}),' abgebildet wird, ist die Umkehrung (vom Ausgabewert auf den  Eingabewert zu schliessen... wird auch "Injektivit\xe4t" genannt) unm\xf6glich. Die Eingabemenge ist folglich unendlich gross (Texte, Videos und Tonaufnahmen beliebiger L\xe4nge, Bilder beliebiger Gr\xf6sse, ...). Die Ausgabemenge ist allerdings endlich, da die Hashwerte eine fixe L\xe4nge haben.']}),(0,s.jsx)(a,{nr:1,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsxs)(h,{options:{width:"600px"},children:[(0,s.jsx)(t.img,{alt:"Hashfunktion",src:i(85837).Z+"",width:"1172",height:"509"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("span",{style:{flexGrow:1}}),"Hashfunktion",(0,s.jsx)("span",{style:{flexGrow:1}}),(0,s.jsx)(o,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1}})]})]}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.h2,{id:"hashfunktion",children:"Hashfunktion"}),(0,s.jsx)(a,{nr:1,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"In der Abbildung oben sieht man, dass die Menge der Passw\xf6rter nur eine Teilmenge aller theoretisch m\xf6glichen Eingaben darstellt. Es ist im Beispiel Oben nicht zu verhindern, dass Kollisionen auftreten."}),(0,s.jsx)(a,{nr:2,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Kollisionsresistenz",type:"info",children:(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Um gen\xfcgend Sicherheit zu bieten, soll eine gute kryptographische Hashfunktion folglich kollisionsresistent sein. Das heisst, es soll praktisch unm\xf6glich sein, Kollisionen zu finden."}),(0,s.jsx)(a,{nr:3,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]})}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.h2,{id:"hashwert",children:"Hashwert"}),(0,s.jsx)(a,{nr:2,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"item",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsxs)(t.p,{children:["Die Ausgabe der Hashfunktion wird ",(0,s.jsx)(t.strong,{children:"Hashwert"})," genannt."]}),(0,s.jsx)(a,{nr:4,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Man kann einen Hashwert mit einem Fingerabdruck vergleichen, weil er gewissermassen eindeutig zu einem Passwort passt wie ein Fingerabdruck zu einem Menschen. So wie mit einem Fingerabdruck nicht auf die Pers\xf6nlichkeit/Charakter einer Person geschlossen werden kann, l\xe4sst sich auch nicht von einem Hashwert auf das Passwort schliessen."}),(0,s.jsx)(a,{nr:5,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]})]})}),(0,s.jsx)("div",{className:"item",style:{alignSelf:"end"},children:(0,s.jsx)("div",{className:"content",children:(0,s.jsxs)(h,{options:{width:"100px"},children:[(0,s.jsx)(t.img,{alt:"Ein Hashwert ist wie ein Fingerabdruck",src:i(32595).Z+"",width:"150",height:"223"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("span",{style:{flexGrow:1}}),"Ein Hashwert ist wie ein Fingerabdruck",(0,s.jsx)("span",{style:{flexGrow:1}}),(0,s.jsx)(o,{bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=103784",licence:"Creative Commons",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1}})]})]})})})]}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.h2,{id:"aktuelle-beispiele",children:"Aktuelle Beispiele"}),(0,s.jsx)(a,{nr:3,type:"heading",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Es gibt verschiedene aktuelle Hashfunktionen. Nachfolgend ein Tool, welches SHA-2 Hashes (Secure Hash Algorithm Version 2) berechnet."}),(0,s.jsx)(a,{nr:6,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsxs)(t.admonition,{type:"aufgabe",children:[(0,s.jsx)(n,{type:"state",webKey:"3107459a-1598-4eec-b45d-4c2c539d721f"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Halten Sie den SHA-2 Hash ihres Namens und ihrer E-Mail Adresse fest."}),(0,s.jsx)(a,{nr:7,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Wie viele Buchstaben \xe4ndern sich, wenn Sie einen einzigen Tippfehler machen?"}),(0,s.jsx)(a,{nr:8,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]}),"\n"]}),"\n"]}),(0,s.jsx)(n,{type:"text",webKey:"34f7ade1-bd99-46ef-a2f2-883c02573eb1",placeholder:"Notizen...",monospace:!0})]}),"\n",(0,s.jsx)(t.admonition,{type:"finding",children:(0,s.jsxs)(t.div,{className:"commentable",children:[(0,s.jsx)(t.p,{children:"Die letzten beiden Beispiele zeigen, dass bereits kleinste \xc4nderungen zu komplett anderen Hashwerten f\xfchren. Kryptographische Hashfunktion sind so konstruiert, dass bei einer \xc4nderung an einem Bit min. 50% der Hashwert-Bits \xe4ndern."}),(0,s.jsx)(a,{nr:9,type:"paragraph",pageId:"79c8cca9-e452-4e59-9445-e5c06cb23b90",children:(0,s.jsx)(t.p,{children:"."})})]})})]})}function _(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(H,{...e})}):H(e)}function b(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72023:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(i){return new Sha256(t,!0).update(i)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var i=0;i<OUTPUT_TYPES.length;++i){var s=OUTPUT_TYPES[i];t[s]=createOutputMethod(s,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(i,s){return new HmacSha256(i,t,!0).update(s)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,i){return t.create(e).update(i)};for(var i=0;i<OUTPUT_TYPES.length;++i){var s=OUTPUT_TYPES[i];t[s]=createHmacOutputMethod(s,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,i){var s,r=typeof e;if("string"===r){var n,a=[],h=e.length,o=0;for(s=0;s<h;++s)(n=e.charCodeAt(s))<128?a[o++]=n:n<2048?(a[o++]=192|n>>6,a[o++]=128|63&n):n<55296||n>=57344?(a[o++]=224|n>>12,a[o++]=128|n>>6&63,a[o++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++s)),a[o++]=240|n>>18,a[o++]=128|n>>12&63,a[o++]=128|n>>6&63,a[o++]=128|63&n);e=a}else{if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var c=[],l=[];for(s=0;s<64;++s){var d=e[s]||0;c[s]=92^d,l[s]=54^d}Sha256.call(this,t,i),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=i}Sha256.prototype.update=function(e){if(!this.finalized){var t,i=typeof e;if("string"!==i){if("object"!==i)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var s,r,n=0,a=e.length,h=this.blocks;n<a;){if(this.hashed&&(this.hashed=!1,h[0]=this.block,h[16]=h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=0),t)for(r=this.start;n<a&&r<64;++n)h[r>>2]|=e[n]<<SHIFT[3&r++];else for(r=this.start;n<a&&r<64;++n)(s=e.charCodeAt(n))<128?h[r>>2]|=s<<SHIFT[3&r++]:s<2048?(h[r>>2]|=(192|s>>6)<<SHIFT[3&r++],h[r>>2]|=(128|63&s)<<SHIFT[3&r++]):s<55296||s>=57344?(h[r>>2]|=(224|s>>12)<<SHIFT[3&r++],h[r>>2]|=(128|s>>6&63)<<SHIFT[3&r++],h[r>>2]|=(128|63&s)<<SHIFT[3&r++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++n)),h[r>>2]|=(240|s>>18)<<SHIFT[3&r++],h[r>>2]|=(128|s>>12&63)<<SHIFT[3&r++],h[r>>2]|=(128|s>>6&63)<<SHIFT[3&r++],h[r>>2]|=(128|63&s)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=h[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,i,s,r,n,a,h,o,c=this.h0,l=this.h1,d=this.h2,p=this.h3,u=this.h4,f=this.h5,H=this.h6,_=this.h7,b=this.blocks;for(e=16;e<64;++e)t=((r=b[e-15])>>>7|r<<25)^(r>>>18|r<<14)^r>>>3,i=((r=b[e-2])>>>17|r<<15)^(r>>>19|r<<13)^r>>>10,b[e]=b[e-16]+t+b[e-7]+i<<0;for(o=l&d,e=0;e<64;e+=4)this.first?(this.is224?(n=300032,_=(r=b[0]-1413257819)-150054599<<0,p=r+24177077<<0):(n=704751109,_=(r=b[0]-210244248)-1521486534<<0,p=r+143694565<<0),this.first=!1):(t=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),s=(n=c&l)^c&d^o,_=p+(r=_+(i=(u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&f^~u&H)+K[e]+b[e])<<0,p=r+(t+s)<<0),t=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),s=(a=p&c)^p&l^n,H=d+(r=H+(i=(_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&u^~_&f)+K[e+1]+b[e+1])<<0,t=((d=r+(t+s)<<0)>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),s=(h=d&p)^d&c^a,f=l+(r=f+(i=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7))+(H&_^~H&u)+K[e+2]+b[e+2])<<0,t=((l=r+(t+s)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),s=(o=l&d)^l&p^h,u=c+(r=u+(i=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&H^~f&_)+K[e+3]+b[e+3])<<0,c=r+(t+s)<<0;this.h0=this.h0+c<<0,this.h1=this.h1+l<<0,this.h2=this.h2+d<<0,this.h3=this.h3+p<<0,this.h4=this.h4+u<<0,this.h5=this.h5+f<<0,this.h6=this.h6+H<<0,this.h7=this.h7+_<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,s=this.h3,r=this.h4,n=this.h5,a=this.h6,h=this.h7,o=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a];return this.is224||(o+=HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]),o},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,s=this.h3,r=this.h4,n=this.h5,a=this.h6,h=this.h7,o=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,a>>24&255,a>>16&255,a>>8&255,255&a];return this.is224||o.push(h>>24&255,h>>16&255,h>>8&255,255&h),o},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},96734:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},32595:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=i.p+"assets/images/fingerprint-a0056ce91808487f15eca01da74aa18e.png"},85837:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=i.p+"assets/images/hash-function-7fcae9ea95088edbe69e654f73d95c7d.png"},11151:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h,a:()=>a});var s=i(67294);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);