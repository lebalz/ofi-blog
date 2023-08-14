"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1350],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>N});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=d(t),k=r,N=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return t?a.createElement(N,o(o({ref:n},l),{},{components:t})):a.createElement(N,o({ref:n},l))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=k;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m[s]="string"==typeof e?e:r,o[1]=m;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},99600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_custom_props:{id:"eeea4e4a-d18d-45ff-b947-3eb2cfcd6bb8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},o="Aktor",m={unversionedId:"Programmieren-1/PyGameZero/actor/index",id:"version-26e/Programmieren-1/PyGameZero/actor/index",title:"Aktor",description:"---",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/3-actor/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/3-actor",slug:"/Programmieren-1/PyGameZero/actor/",permalink:"/26e/Programmieren-1/PyGameZero/actor/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"eeea4e4a-d18d-45ff-b947-3eb2cfcd6bb8",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Animation",permalink:"/26e/Programmieren-1/PyGameZero/animation/"},next:{title:"Tastatur",permalink:"/26e/Programmieren-1/PyGameZero/keyboard/"}},p={},d=[{value:"Grundlegendes",id:"grundlegendes",level:2},{value:"Position",id:"position",level:2},{value:"Kollision",id:"kollision",level:2},{value:"Messung",id:"messung",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},s=l("Comment"),c=l("Figure"),k={toc:d},N="wrapper";function u(e){let{components:n,...i}=e;return(0,r.kt)(N,(0,a.Z)({},k,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"aktor"},"Aktor"),(0,r.kt)(s,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grundlegendes"},"Grundlegendes"),(0,r.kt)(s,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo = Actor(bild)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"erstellt einen neuen Aktor. ",(0,r.kt)("inlineCode",{parentName:"p"},"bild")," ist der Name einer Bilddatei."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.draw()\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"zeichnet den Aktor ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," in das Fenster."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"position"},"Position"),(0,r.kt)(s,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Positionierung in Pygame Zero",src:t(99315).Z,width:"859",height:"485"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Positionierung in Pygame Zero",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(s,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.bottom\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die y-Koordinate des unteren Rands von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.left\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die x-Koordinate des linken Rands von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.right\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die x-Koordinate des rechten Rands von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.top\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die y-Koordinate des oberen Rands von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.x\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die x-Koordinate des Ankers von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.y\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die y-Koordinate des Ankers von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.angle\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ist die Rotation von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," in Grad im Gegenuhrzeigersinn."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"kollision"},"Kollision"),(0,r.kt)(s,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.collidepoint(x, y)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," mit dem Punkt mit den Koordinaten ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," kollidiert."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.collidepoint(pos)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," mit dem Punkt mit den Punkt ",(0,r.kt)("inlineCode",{parentName:"p"},"pos")," kollidiert. So kann beispielsweise \xfcberpr\xfcft werden, ob ein Aktor mit der Maus angeklickt wird:"),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def on_mouse_down(pos):\n    if nemo.collidepoint(pos):\n        print("Nemo mit Maus ber\xfchrt.")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.colliderect(dory)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," mit ",(0,r.kt)("inlineCode",{parentName:"p"},"dory")," kollidiert."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.collidelist(liste)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xfcberpr\xfcft, ob ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," mit einem Aktor in der Liste ",(0,r.kt)("inlineCode",{parentName:"p"},"liste")," kollidiert. In dem Fall wird der Index des kollidierenden Aktors in der Liste zur\xfcckgeliefert. Wenn kein Aktor der Liste mit ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," kollidiert, wird ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," zur\xfcckgeliefert."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"messung"},"Messung"),(0,r.kt)(s,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.distance_to(dory)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"misst die Distanz zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"dory"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"nemo.angle_to(dory)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"misst den Winkel von ",(0,r.kt)("inlineCode",{parentName:"p"},"nemo")," aus in Richtung ",(0,r.kt)("inlineCode",{parentName:"p"},"dory"),"."),(0,r.kt)(s,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))}u.isMDXComponent=!0},99315:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/actor-position-d4e9c8bfc9196ab76a7e42e716e77503.svg"}}]);