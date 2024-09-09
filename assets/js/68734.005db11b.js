"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[68734],{68734:(e,n,t)=>{t.d(n,{A:()=>L});var r=t(89379),a=t(64467),u=t(38339),o=t(80641),c=t(82284),l=t(46942),i=t.n(l),s=t(82571),f=t(68210);const d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;return function e(n,a){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=r.has(n);if((0,f.Ay)(!o,"Warning: There may be circular references"),o)return!1;if(n===a)return!0;if(t&&u>1)return!1;r.add(n);var l=u+1;if(Array.isArray(n)){if(!Array.isArray(a)||n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(!e(n[i],a[i],l))return!1;return!0}if(n&&a&&"object"===(0,c.A)(n)&&"object"===(0,c.A)(a)){var s=Object.keys(n);return s.length===Object.keys(a).length&&s.every((function(t){return e(n[t],a[t],l)}))}return!1}(e,n)};var v=t(96540),m=t(58168),E=t(80045);function h(e,n,t){return(e-n)/(t-n)}function A(e,n,t,r){var a=h(n,t,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function g(e,n){return Array.isArray(e)?e[n]:e}var b={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=b.F1&&n<=b.F12)return!1;switch(n){case b.ALT:case b.CAPS_LOCK:case b.CONTEXT_MENU:case b.CTRL:case b.DOWN:case b.END:case b.ESC:case b.HOME:case b.INSERT:case b.LEFT:case b.MAC_FF_META:case b.META:case b.NUMLOCK:case b.NUM_CENTER:case b.PAGE_DOWN:case b.PAGE_UP:case b.PAUSE:case b.PRINT_SCREEN:case b.RIGHT:case b.SHIFT:case b.UP:case b.WIN_KEY:case b.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=b.ZERO&&e<=b.NINE)return!0;if(e>=b.NUM_ZERO&&e<=b.NUM_MULTIPLY)return!0;if(e>=b.A&&e<=b.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case b.SPACE:case b.QUESTION_MARK:case b.NUM_PLUS:case b.NUM_MINUS:case b.NUM_PERIOD:case b.NUM_DIVISION:case b.SEMICOLON:case b.DASH:case b.EQUALS:case b.COMMA:case b.PERIOD:case b.SLASH:case b.APOSTROPHE:case b.SINGLE_QUOTE:case b.OPEN_SQUARE_BRACKET:case b.BACKSLASH:case b.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const C=b;const M=v.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}});var y=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"];const p=v.forwardRef((function(e,n){var t,u=e.prefixCls,o=e.value,c=e.valueIndex,l=e.onStartMove,s=e.style,f=e.render,d=e.dragging,h=e.onOffsetChange,b=e.onChangeComplete,p=e.onFocus,N=e.onMouseEnter,S=(0,E.A)(e,y),x=v.useContext(M),O=x.min,I=x.max,_=x.direction,k=x.disabled,R=x.keyboard,T=x.range,U=x.tabIndex,F=x.ariaLabelForHandle,L=x.ariaLabelledByForHandle,P=x.ariaValueTextFormatterForHandle,H=x.styles,w=x.classNames,D="".concat(u,"-handle"),K=function(e){k||l(e,c)},G=A(_,o,O,I),W={};null!==c&&(W={tabIndex:k?null:g(U,c),role:"slider","aria-valuemin":O,"aria-valuemax":I,"aria-valuenow":o,"aria-disabled":k,"aria-label":g(F,c),"aria-labelledby":g(L,c),"aria-valuetext":null===(t=g(P,c))||void 0===t?void 0:t(o),"aria-orientation":"ltr"===_||"rtl"===_?"horizontal":"vertical",onMouseDown:K,onTouchStart:K,onFocus:function(e){null==p||p(e,c)},onMouseEnter:function(e){N(e,c)},onKeyDown:function(e){if(!k&&R){var n=null;switch(e.which||e.keyCode){case C.LEFT:n="ltr"===_||"btt"===_?-1:1;break;case C.RIGHT:n="ltr"===_||"btt"===_?1:-1;break;case C.UP:n="ttb"!==_?1:-1;break;case C.DOWN:n="ttb"!==_?-1:1;break;case C.HOME:n="min";break;case C.END:n="max";break;case C.PAGE_UP:n=2;break;case C.PAGE_DOWN:n=-2}null!==n&&(e.preventDefault(),h(n,c))}},onKeyUp:function(e){switch(e.which||e.keyCode){case C.LEFT:case C.RIGHT:case C.UP:case C.DOWN:case C.HOME:case C.END:case C.PAGE_UP:case C.PAGE_DOWN:null==b||b()}}});var B=v.createElement("div",(0,m.A)({ref:n,className:i()(D,(0,a.A)((0,a.A)({},"".concat(D,"-").concat(c+1),null!==c&&T),"".concat(D,"-dragging"),d),w.handle),style:(0,r.A)((0,r.A)((0,r.A)({},G),s),H.handle)},W,S));return f&&(B=f(B,{index:c,prefixCls:u,value:o,dragging:d})),B}));var N=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","onFocus"];const S=v.forwardRef((function(e,n){var t=e.prefixCls,a=e.style,u=e.onStartMove,c=e.onOffsetChange,l=e.values,i=e.handleRender,s=e.activeHandleRender,f=e.draggingIndex,d=e.onFocus,h=(0,E.A)(e,N),A=v.useRef({});v.useImperativeHandle(n,(function(){return{focus:function(e){var n;null===(n=A.current[e])||void 0===n||n.focus()}}}));var b=v.useState(-1),C=(0,o.A)(b,2),M=C[0],y=C[1],S=(0,r.A)({prefixCls:t,onStartMove:u,onOffsetChange:c,render:i,onFocus:function(e,n){y(n),null==d||d(e)},onMouseEnter:function(e,n){y(n)}},h);return v.createElement(v.Fragment,null,l.map((function(e,n){return v.createElement(p,(0,m.A)({ref:function(e){e?A.current[n]=e:delete A.current[n]},dragging:f===n,style:g(a,n),key:n,value:e,valueIndex:n},S))})),s&&v.createElement(p,(0,m.A)({key:"a11y"},S,{value:l[M],valueIndex:null,dragging:-1!==f,render:s,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}));const x=function(e){var n=e.prefixCls,t=e.style,u=e.children,o=e.value,c=e.onClick,l=v.useContext(M),s=l.min,f=l.max,d=l.direction,m=l.includedStart,E=l.includedEnd,h=l.included,g="".concat(n,"-text"),b=A(d,o,s,f);return v.createElement("span",{className:i()(g,(0,a.A)({},"".concat(g,"-active"),h&&m<=o&&o<=E)),style:(0,r.A)((0,r.A)({},b),t),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(o)}},u)};const O=function(e){var n=e.prefixCls,t=e.marks,r=e.onClick,a="".concat(n,"-mark");return t.length?v.createElement("div",{className:a},t.map((function(e){var n=e.value,t=e.style,u=e.label;return v.createElement(x,{key:n,prefixCls:a,style:t,value:n,onClick:r},u)}))):null};const I=function(e){var n=e.prefixCls,t=e.value,u=e.style,o=e.activeStyle,c=v.useContext(M),l=c.min,s=c.max,f=c.direction,d=c.included,m=c.includedStart,E=c.includedEnd,h="".concat(n,"-dot"),g=d&&m<=t&&t<=E,b=(0,r.A)((0,r.A)({},A(f,t,l,s)),"function"==typeof u?u(t):u);return g&&(b=(0,r.A)((0,r.A)({},b),"function"==typeof o?o(t):o)),v.createElement("span",{className:i()(h,(0,a.A)({},"".concat(h,"-active"),g)),style:b})};const _=function(e){var n=e.prefixCls,t=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=v.useContext(M),c=o.min,l=o.max,i=o.step,s=v.useMemo((function(){var e=new Set;if(t.forEach((function(n){e.add(n.value)})),r&&null!==i)for(var n=c;n<=l;)e.add(n),n+=i;return Array.from(e)}),[c,l,i,r,t]);return v.createElement("div",{className:"".concat(n,"-step")},s.map((function(e){return v.createElement(I,{prefixCls:n,key:e,value:e,style:a,activeStyle:u})})))};const k=function(e){var n=e.prefixCls,t=e.style,u=e.start,o=e.end,c=e.index,l=e.onStartMove,s=e.replaceCls,f=v.useContext(M),d=f.direction,m=f.min,E=f.max,A=f.disabled,g=f.range,b=f.classNames,C="".concat(n,"-track"),y=h(u,m,E),p=h(o,m,E),N=function(e){!A&&l&&l(e,-1)},S={};switch(d){case"rtl":S.right="".concat(100*y,"%"),S.width="".concat(100*p-100*y,"%");break;case"btt":S.bottom="".concat(100*y,"%"),S.height="".concat(100*p-100*y,"%");break;case"ttb":S.top="".concat(100*y,"%"),S.height="".concat(100*p-100*y,"%");break;default:S.left="".concat(100*y,"%"),S.width="".concat(100*p-100*y,"%")}var x=s||i()(C,(0,a.A)((0,a.A)({},"".concat(C,"-").concat(c+1),null!==c&&g),"".concat(n,"-track-draggable"),l),b.track);return v.createElement("div",{className:x,style:(0,r.A)((0,r.A)({},S),t),onMouseDown:N,onTouchStart:N})};const R=function(e){var n=e.prefixCls,t=e.style,a=e.values,u=e.startPoint,o=e.onStartMove,c=v.useContext(M),l=c.included,s=c.range,f=c.min,d=c.styles,m=c.classNames,E=v.useMemo((function(){if(!s){if(0===a.length)return[];var e=null!=u?u:f,n=a[0];return[{start:Math.min(e,n),end:Math.max(e,n)}]}for(var t=[],r=0;r<a.length-1;r+=1)t.push({start:a[r],end:a[r+1]});return t}),[a,s,u,f]);if(!l)return null;var h=m.tracks||d.tracks?v.createElement(k,{index:null,prefixCls:n,start:E[0].start,end:E[E.length-1].end,replaceCls:i()(m.tracks,"".concat(n,"-tracks")),style:d.tracks}):null;return v.createElement(v.Fragment,null,h,E.map((function(e,a){var u=e.start,c=e.end;return v.createElement(k,{index:a,prefixCls:n,style:(0,r.A)((0,r.A)({},g(t,a)),d.track),start:u,end:c,key:a,onStartMove:o})})))};var T=t(63272);function U(e){var n="touches"in e?e.touches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}const F=function(e,n,t,r,a,c,l,i,s){var f=v.useState(null),d=(0,o.A)(f,2),m=d[0],E=d[1],h=v.useState(-1),A=(0,o.A)(h,2),g=A[0],b=A[1],C=v.useState(t),M=(0,o.A)(C,2),y=M[0],p=M[1],N=v.useState(t),S=(0,o.A)(N,2),x=S[0],O=S[1],I=v.useRef(null),_=v.useRef(null);v.useLayoutEffect((function(){-1===g&&p(t)}),[t,g]),v.useEffect((function(){return function(){document.removeEventListener("mousemove",I.current),document.removeEventListener("mouseup",_.current),document.removeEventListener("touchmove",I.current),document.removeEventListener("touchend",_.current)}}),[]);var k=function(e,n){y.some((function(n,t){return n!==e[t]}))&&(void 0!==n&&E(n),p(e),l(e))},R=(0,T.useEvent)((function(e,n){if(-1===e){var t=x[0],o=x[x.length-1],l=r-t,i=a-o,f=n*(a-r);f=Math.max(f,l),f=Math.min(f,i);var d=c(t+f);f=d-t;var v=x.map((function(e){return e+f}));k(v)}else{var m=(a-r)*n,E=(0,u.A)(y);E[e]=x[e];var h=s(E,m,e,"dist");k(h.values,h.value)}})),F=v.useMemo((function(){var e=(0,u.A)(t).sort((function(e,n){return e-n})),n=(0,u.A)(y).sort((function(e,n){return e-n}));return e.every((function(e,t){return e===n[t]}))?y:t}),[t,y]);return[g,m,F,function(r,a,u){r.stopPropagation();var o=u||t,c=o[a];b(a),E(c),O(o);var l=U(r),s=l.pageX,f=l.pageY,d=function(t){t.preventDefault();var r,u=U(t),o=u.pageX,c=u.pageY,l=o-s,i=c-f,d=e.current.getBoundingClientRect(),v=d.width,m=d.height;switch(n){case"btt":r=-i/m;break;case"ttb":r=i/m;break;case"rtl":r=-l/v;break;default:r=l/v}R(a,r)},v=function e(n){n.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",d),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",d),I.current=null,_.current=null,b(-1),i()};document.addEventListener("mouseup",v),document.addEventListener("mousemove",d),document.addEventListener("touchend",v),document.addEventListener("touchmove",d),I.current=d,_.current=v}]};const L=v.forwardRef((function(e,n){var t=e.prefixCls,l=void 0===t?"rc-slider":t,m=e.className,E=e.style,h=e.classNames,A=e.styles,g=e.disabled,b=void 0!==g&&g,C=e.keyboard,y=void 0===C||C,p=e.autoFocus,N=e.onFocus,x=e.onBlur,I=e.min,k=void 0===I?0:I,T=e.max,U=void 0===T?100:T,L=e.step,P=void 0===L?1:L,H=e.value,w=e.defaultValue,D=e.range,K=e.count,G=e.onChange,W=e.onBeforeChange,B=e.onAfterChange,Y=e.onChangeComplete,V=e.allowCross,X=void 0===V||V,Q=e.pushable,j=void 0!==Q&&Q,Z=e.draggableTrack,z=e.reverse,J=e.vertical,q=e.included,$=void 0===q||q,ee=e.startPoint,ne=e.trackStyle,te=e.handleStyle,re=e.railStyle,ae=e.dotStyle,ue=e.activeDotStyle,oe=e.marks,ce=e.dots,le=e.handleRender,ie=e.activeHandleRender,se=e.tabIndex,fe=void 0===se?0:se,de=e.ariaLabelForHandle,ve=e.ariaLabelledByForHandle,me=e.ariaValueTextFormatterForHandle,Ee=v.useRef(null),he=v.useRef(null),Ae=v.useMemo((function(){return J?z?"ttb":"btt":z?"rtl":"ltr"}),[z,J]),ge=v.useMemo((function(){return isFinite(k)?k:0}),[k]),be=v.useMemo((function(){return isFinite(U)?U:100}),[U]),Ce=v.useMemo((function(){return null!==P&&P<=0?1:P}),[P]),Me=v.useMemo((function(){return"boolean"==typeof j?!!j&&Ce:j>=0&&j}),[j,Ce]),ye=v.useMemo((function(){return Object.keys(oe||{}).map((function(e){var n=oe[e],t={value:Number(e)};return n&&"object"===(0,c.A)(n)&&!v.isValidElement(n)&&("label"in n||"style"in n)?(t.style=n.style,t.label=n.label):t.label=n,t})).filter((function(e){var n=e.label;return n||"number"==typeof n})).sort((function(e,n){return e.value-n.value}))}),[oe]),pe=function(e,n,t,r,a,o){var c=v.useCallback((function(t){return Math.max(e,Math.min(n,t))}),[e,n]),l=v.useCallback((function(r){if(null!==t){var a=e+Math.round((c(r)-e)/t)*t,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(t),u(n),u(e)),l=Number(a.toFixed(o));return e<=l&&l<=n?l:null}return null}),[t,e,n,c]),i=v.useCallback((function(a){var u=c(a),o=r.map((function(e){return e.value}));null!==t&&o.push(l(a)),o.push(e,n);var i=o[0],s=n-e;return o.forEach((function(e){var n=Math.abs(u-e);n<=s&&(i=e,s=n)})),i}),[e,n,r,t,c,l]),s=function a(o,c,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof c){var f,d=o[i],v=d+c,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,n),m.push(l(d));var E=c>0?1:-1;"unit"===s?m.push(l(d+E*t)):m.push(l(v)),m=m.filter((function(e){return null!==e})).filter((function(e){return c<0?e<=d:e>=d})),"unit"===s&&(m=m.filter((function(e){return e!==d})));var h="unit"===s?d:v;f=m[0];var A=Math.abs(f-h);if(m.forEach((function(e){var n=Math.abs(e-h);n<A&&(f=e,A=n)})),void 0===f)return c<0?e:n;if("dist"===s)return f;if(Math.abs(c)>1){var g=(0,u.A)(o);return g[i]=f,a(g,c-E,i,s)}return f}return"min"===c?e:"max"===c?n:void 0},f=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[t],u=s(e,n,t,r);return{value:u,changed:u!==a}},d=function(e){return null===o&&0===e||"number"==typeof o&&e<o};return[i,function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",u=e.map(i),c=u[t],l=s(u,n,t,r);if(u[t]=l,!1===a){var v=o||0;t>0&&u[t-1]!==c&&(u[t]=Math.max(u[t],u[t-1]+v)),t<u.length-1&&u[t+1]!==c&&(u[t]=Math.min(u[t],u[t+1]-v))}else if("number"==typeof o||null===o){for(var m=t+1;m<u.length;m+=1)for(var E=!0;d(u[m]-u[m-1])&&E;){var h=f(u,1,m);u[m]=h.value,E=h.changed}for(var A=t;A>0;A-=1)for(var g=!0;d(u[A]-u[A-1])&&g;){var b=f(u,-1,A-1);u[A-1]=b.value,g=b.changed}for(var C=u.length-1;C>0;C-=1)for(var M=!0;d(u[C]-u[C-1])&&M;){var y=f(u,-1,C-1);u[C-1]=y.value,M=y.changed}for(var p=0;p<u.length-1;p+=1)for(var N=!0;d(u[p+1]-u[p])&&N;){var S=f(u,1,p+1);u[p+1]=S.value,N=S.changed}}return{value:u[t],values:u}}]}(ge,be,Ce,ye,X,Me),Ne=(0,o.A)(pe,2),Se=Ne[0],xe=Ne[1],Oe=(0,s.A)(w,{value:H}),Ie=(0,o.A)(Oe,2),_e=Ie[0],ke=Ie[1],Re=v.useMemo((function(){var e=null==_e?[]:Array.isArray(_e)?_e:[_e],n=(0,o.A)(e,1)[0],t=null===_e?[]:[void 0===n?ge:n];if(D){if(t=(0,u.A)(e),K||void 0===_e){var r=K>=0?K+1:2;for(t=t.slice(0,r);t.length<r;){var a;t.push(null!==(a=t[t.length-1])&&void 0!==a?a:ge)}}t.sort((function(e,n){return e-n}))}return t.forEach((function(e,n){t[n]=Se(e)})),t}),[_e,D,ge,K,Se]),Te=v.useRef(Re);Te.current=Re;var Ue=function(e){return D?e:e[0]},Fe=function(e){var n=(0,u.A)(e).sort((function(e,n){return e-n}));G&&!d(n,Te.current,!0)&&G(Ue(n)),ke(n)},Le=function(){var e=Ue(Te.current);null==B||B(e),(0,f.Ay)(!B,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==Y||Y(e)},Pe=F(he,Ae,Re,ge,be,Se,Fe,Le,xe),He=(0,o.A)(Pe,4),we=He[0],De=He[1],Ke=He[2],Ge=He[3],We=function(e,n){if(!b){var t=0,r=be-ge;Re.forEach((function(n,a){var u=Math.abs(e-n);u<=r&&(r=u,t=a)}));var a,o,c=(0,u.A)(Re);if(c[t]=e,D&&!Re.length&&void 0===K&&c.push(e),null==W||W(Ue(c)),Fe(c),n)null===(a=document.activeElement)||void 0===a||null===(o=a.blur)||void 0===o||o.call(a),Ee.current.focus(t),Ge(n,t,c)}},Be=v.useState(null),Ye=(0,o.A)(Be,2),Ve=Ye[0],Xe=Ye[1];v.useEffect((function(){if(null!==Ve){var e=Re.indexOf(Ve);e>=0&&Ee.current.focus(e)}Xe(null)}),[Ve]);var Qe=v.useMemo((function(){return(!Z||null!==Ce)&&Z}),[Z,Ce]),je=function(e,n){Ge(e,n),null==W||W(Ue(Te.current))},Ze=-1!==we;v.useEffect((function(){if(!Ze){var e=Re.lastIndexOf(De);Ee.current.focus(e)}}),[Ze]);var ze=v.useMemo((function(){return(0,u.A)(Ke).sort((function(e,n){return e-n}))}),[Ke]),Je=v.useMemo((function(){return D?[ze[0],ze[ze.length-1]]:[ge,ze[0]]}),[ze,D,ge]),qe=(0,o.A)(Je,2),$e=qe[0],en=qe[1];v.useImperativeHandle(n,(function(){return{focus:function(){Ee.current.focus(0)},blur:function(){var e,n=document.activeElement;null!==(e=he.current)&&void 0!==e&&e.contains(n)&&(null==n||n.blur())}}})),v.useEffect((function(){p&&Ee.current.focus(0)}),[]);var nn=v.useMemo((function(){return{min:ge,max:be,direction:Ae,disabled:b,keyboard:y,step:Ce,included:$,includedStart:$e,includedEnd:en,range:D,tabIndex:fe,ariaLabelForHandle:de,ariaLabelledByForHandle:ve,ariaValueTextFormatterForHandle:me,styles:A||{},classNames:h||{}}}),[ge,be,Ae,b,y,Ce,$,$e,en,D,fe,de,ve,me,A,h]);return v.createElement(M.Provider,{value:nn},v.createElement("div",{ref:he,className:i()(l,m,(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(l,"-disabled"),b),"".concat(l,"-vertical"),J),"".concat(l,"-horizontal"),!J),"".concat(l,"-with-marks"),ye.length)),style:E,onMouseDown:function(e){e.preventDefault();var n,t=he.current.getBoundingClientRect(),r=t.width,a=t.height,u=t.left,o=t.top,c=t.bottom,l=t.right,i=e.clientX,s=e.clientY;switch(Ae){case"btt":n=(c-s)/a;break;case"ttb":n=(s-o)/a;break;case"rtl":n=(l-i)/r;break;default:n=(i-u)/r}We(Se(ge+n*(be-ge)),e)}},v.createElement("div",{className:i()("".concat(l,"-rail"),null==h?void 0:h.rail),style:(0,r.A)((0,r.A)({},re),null==A?void 0:A.rail)}),v.createElement(R,{prefixCls:l,style:ne,values:ze,startPoint:ee,onStartMove:Qe?je:void 0}),v.createElement(_,{prefixCls:l,marks:ye,dots:ce,style:ae,activeStyle:ue}),v.createElement(S,{ref:Ee,prefixCls:l,style:te,values:Ke,draggingIndex:we,onStartMove:je,onOffsetChange:function(e,n){if(!b){var t=xe(Re,e,n);null==W||W(Ue(Re)),Fe(t.values),Xe(t.value)}},onFocus:N,onBlur:x,handleRender:le,activeHandleRender:ie,onChangeComplete:Le}),v.createElement(O,{prefixCls:l,marks:ye,onClick:We})))}))},80045:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(98587);function a(e,n){if(null==e)return{};var t,a,u=(0,r.A)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}}}]);