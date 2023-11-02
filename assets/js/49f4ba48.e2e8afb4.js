"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(b,o(o({ref:n},c),{},{components:t})):r.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={sidebar_custom_props:{id:"5bb1278f-fd22-4c41-86c3-7c85915881e8",source:{name:"sdg",ref:"https://gitlab.gbsl.website/ev3/pendelbusmitblinker"}}},o="Pendelbus mit Blinker",s={unversionedId:"Robotik/EV3/Pendelbus-Blink/index",id:"version-24ef/Robotik/EV3/Pendelbus-Blink/index",title:"Pendelbus mit Blinker",description:"Musterl\xf6sung",source:"@site/versioned_docs/version-24ef/04-Robotik/EV3/Pendelbus-Blink/index.md",sourceDirName:"04-Robotik/EV3/Pendelbus-Blink",slug:"/Robotik/EV3/Pendelbus-Blink/",permalink:"/24ef/Robotik/EV3/Pendelbus-Blink/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"5bb1278f-fd22-4c41-86c3-7c85915881e8",source:{name:"sdg",ref:"https://gitlab.gbsl.website/ev3/pendelbusmitblinker"}}},sidebar:"version-24ef/sidebar",previous:{title:"Pendelbus",permalink:"/24ef/Robotik/EV3/Pendelbus/"},next:{title:"Zustandsmaschinen",permalink:"/24ef/Robotik/zustandsmaschinen/"}},l={},d=[],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},u=c("Comment"),p=c("Solution"),m={toc:d},b="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(b,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"pendelbus-mit-blinker"},"Pendelbus mit Blinker"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Musterl\xf6sung"),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("hr",null),(0,i.kt)(p,{webKey:"09e896f4-fa67-4d55-a0d8-92f2284bd2f0",open:!0,noWrap:!0,mdxType:"Solution"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das Programm verf\xfcgt \xfcber zwei Loops, einen f\xfcr den Blinker, einen f\xfcr die Zustandsmaschine. Damit beide Loops nebeneinander ausgef\xfchrt werden, m\xfcssen diese in Coroutinen verpackt und als Tasks gestartet werden.\nWichtig ist, dass beide Coroutinen regelm\xe4ssig mit await die Kontrolle an den Scheduler zur\xfcckgeben, so dass die jeweils andere Coroutine eine Chance zum Laufen erh\xe4lt. Der Blinker legt dabei Pausen von einer Sekunde ein wait asyncio.sleep(1), in welchen die Zustandsmaschine (aufgerufen durch den Scheduler) arbeitet. Diese gibt aber vor jedem Schleifendurchlauf dem Scheduler die M\xf6glichkeit eine andere Coroutine zuerst auszuf\xfchren (await.asyncio.sleep(0)).\nBeobachtung: Immer dann, wenn aus der Zustandsmaschine eine EV3-Funktion aufgerufen wird, welche l\xe4nger dauert (z.B. Sprachausgabe, oder Motorbefehle wie run_angle()). stockt der Blinker. Dies passiert, weil diese EV3-Befehle blockeiernd sind. D.h. das Programm f\xe4hrt an dieser Stelle erst dann weiter, wenn die Befehle vollst\xe4ndig ausgef\xfchrt sind. Dadurch verz\xf6gert sich der Schleifendurchgang des Zustandsmaschinen-Loops und der Blinker erh\xe4lt erst dann wiedcer die Chance zum Laufen, wenn dieser Schleifendurchgang vollst\xe4ndig ausgef\xfchrt worden ist.\nEs ist also wichtig, dass die Coroutinen m\xf6glichst kurze Ausf\xfchrungszeiten haben. Blockierende EV3-Befehle m\xfcssen unter Umst\xe4nden in kleinere Teilbefehle aufgetrennt werden, zwischen welchen mit await asyncio.sleep(0) kurz dem Scheduler die Kontrolle \xfcbergeben wird."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="main.py"',reference:!0,title:'"main.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Robotik/EV3/Pendelbus-Blink/assets/pendelblink.py\n"))))}f.isMDXComponent=!0}}]);