"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=s.createContext({}),u=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,y=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?s.createElement(y,o(o({ref:t},l),{},{components:n})):s.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34738:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(4942),r=n(67294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},i.apply(this,arguments)}var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},a=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=i({},o,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(e.stringsElement.children),r=s.length;if(r)for(var a=0;a<r;a+=1)e.strings.push(s[a].innerHTML.trim())}for(var p in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[p]=p;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},e}()),p=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substring(t).charAt(0);if("<"===s||"&"===s){var r;for(r="<"===s?">":";";e.substring(t+1).charAt(0)!==r&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substring(t).charAt(0);if(">"===s||";"===s){var r;for(r=">"===s?"<":"&";e.substring(t-1).charAt(0)!==r&&!(--t<0););t--}return t},e}()),u=function(){function e(e,t){a.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)},t.typewrite=function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=p.typeHtmlChars(e,t,n);var s=0,i=e.substring(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substring(t+r).charAt(0)&&(r++,!(t+r>e.length)););var a=e.substring(0,t),u=e.substring(a.length+1,t+r),l=e.substring(t+r+1);e=a+u+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=e.substring(0,t+=n);this.replaceText(s),this.typewrite(e,t)},t.doneTyping=function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))},t.backspace=function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=p.backSpaceHtmlChars(e,t,n);var s=e.substring(0,t);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&s===r.substring(0,t)?t:0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),s)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const l={anchorWithStickyNavbar:"anchorWithStickyNavbar_Dzzx",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_kB3g"};var c=n(86010);class d extends r.Component{constructor(){super(...arguments),(0,s.Z)(this,"typed",void 0),(0,s.Z)(this,"typedRef",r.createRef())}componentDidMount(){const{strings:e}=this.props,t={strings:e,typeSpeed:50,backSpeed:50,loop:!0};this.typed=new u(this.typedRef.current,t)}componentWillUnmount(){this.typed.destroy()}render(){const e=r.createElement("span",{ref:this.typedRef,style:{whiteSpace:"pre"},key:"1"}),t="h1"===this.props.type?(0,c.default)("type-wrap",l.h1Heading):"type-wrap",n=r.createElement(this.props.type,{className:t,children:[e]});return r.createElement("div",{className:"wrap"},n)}}const h=d},99831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var s=n(87462),r=(n(67294),n(3905)),i=n(34738);const o={title:"",sidebar_label:"BYOD Basics",sidebar_custom_props:{id:"bf43eff5-6c74-47a3-be14-b131f89bc270"}},a=void 0,p={unversionedId:"BYOD/index",id:"version-26e/BYOD/index",title:"",description:'<TypedText type="h1" strings={[',source:"@site/versioned_docs/version-26e/02-BYOD/index.md",sourceDirName:"02-BYOD",slug:"/BYOD/",permalink:"/26e/BYOD/",draft:!1,tags:[],version:"26e",frontMatter:{title:"",sidebar_label:"BYOD Basics",sidebar_custom_props:{id:"bf43eff5-6c74-47a3-be14-b131f89bc270"}},sidebar:"version-26e/sidebar",previous:{title:"Schadsoftware",permalink:"/26e/ICT-Grundlagen/Sicherheit/Schadsoftware"},next:{title:"Betriebssystem",permalink:"/26e/BYOD/betriebssystem"}},u={},l=[],c=(d="Comment",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const h={toc:l},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{type:"h1",strings:['<span style="color: lime">B</span><span style="color: springgreen">Y</span><span style="color: aquamarine">O</span><span style="color: turquoise">D</span>','<span style="color: lime">Bring </span><span style="color: springgreen">Y</span><span style="color: aquamarine">O</span><span style="color: turquoise">D</span>','<span style="color: lime">Bring </span><span style="color: springgreen">Your </span><span style="color: aquamarine">O</span><span style="color: turquoise">D</span>','<span style="color: lime">Bring </span><span style="color: springgreen">Your </span><span style="color: aquamarine">Own </span><span style="color: turquoise">D</span>','<span style="color: lime">Bring </span><span style="color: springgreen">Your </span><span style="color: aquamarine">Own </span><span style="color: turquoise">Device</span>','<span style="color: lime">Bring </span><span style="color: springgreen">Your </span><span style="color: aquamarine">Own </span><span style="color: turquoise">\ud83d\udcf1 \ud83d\udcbb \ud83d\udda5 </span>','<span style="color: deepskyblue">B</span><span style="color: dodgerblue">Y</span><span style="color: royalblue">O</span><span style="color: mediumblue">D</span>','<span style="color: deepskyblue">Bring </span><span style="color: dodgerblue">Y</span><span style="color: royalblue">O</span><span style="color: mediumblue">D</span>','<span style="color: deepskyblue">Bring </span><span style="color: dodgerblue">Dis </span><span style="color: royalblue">O</span><span style="color: mediumblue">D</span>','<span style="color: deepskyblue">Bring </span><span style="color: dodgerblue">Dis </span><span style="color: royalblue">Eiget\xe4 </span><span style="color: mediumblue">D</span>','<span style="color: deepskyblue">Bring </span><span style="color: dodgerblue">Dis </span><span style="color: royalblue">Eiget\xe4 </span><span style="color: mediumblue">Gr\xe4t</span>','<span style="color: deepskyblue">Bring </span><span style="color: dodgerblue">Dis </span><span style="color: royalblue">Eiget\xe4 </span><span style="color: mediumblue">\ud83d\udcf1 \ud83d\udcbb \ud83d\udda5 </span>'],mdxType:"TypedText"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Zeit ",(0,r.kt)("i",{parentName:"dt",className:"mdi-clock mdi blue"})),(0,r.kt)("dd",{parentName:"dl"},"5 Minuten Vorbereitung, 5 Minuten Pr\xfcfung"),(0,r.kt)("dt",{parentName:"dl"},"Szenarien ",(0,r.kt)("i",{parentName:"dt",className:"mdi-file-document-multiple mdi blue"})),(0,r.kt)("dd",{parentName:"dl"},"10 Szenarien aus den ",(0,r.kt)("a",{parentName:"dd",href:"/26e/BYOD/pruefungsfragen"},"Pr\xfcfungsfragen")),(0,r.kt)("dt",{parentName:"dl"},"Note ",(0,r.kt)("i",{parentName:"dt",className:"mdi-certificate mdi blue"})),(0,r.kt)("dd",{parentName:"dl"},"Halb z\xe4hlende Note")),(0,r.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Seit dem Sommer 2020 bringen alle Sch\xfcler:innen ihre eigenen Laptops mit in den Unterricht (",(0,r.kt)("em",{parentName:"p"},"BYOD - Bring Your Own Device"),"). Den gr\xf6ssten Nutzen bringt das pers\xf6nliche Ger\xe4t, wenn es im Unterricht ",(0,r.kt)("strong",{parentName:"p"},"effizient als Mittel zum Zweck")," eingesetzt werden kann. Dies erfordert die Beherrschung der Grundlegenden Funktionen des Ger\xe4ts - ",(0,r.kt)("em",{parentName:"p"},"Dokumente erstellen, speichern, teilen, wiederfinden, ...")," - sowie das Wissen, wie gewisse Abl\xe4ufe effizient gestaltet werden k\xf6nnen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In diesem Abschnitt geht es darum, Ihr Ger\xe4t genauer kennen zu lernen und sich die wichtigsten Abl\xe4ufe - auch unter Zeitdruck - anzueignen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die BYOD-Basics werden gepr\xfcft, indem Sie 10 Szenarien innerhalb von 5 Minuten durchf\xfchren sollen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))}m.isMDXComponent=!0}}]);