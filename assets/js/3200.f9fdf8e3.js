(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3200],{61382:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(10434)),o=n(r(42122)),l=n(r(38416)),f=n(r(70215)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),c=n(r(94184)),s=n(r(27712)),d=n(r(64137)),p=r(59602),v=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"];function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var b=i.forwardRef((function(e,t){var r,n,a=e.prefixCls,y=e.value,b=e.valueIndex,O=e.onStartMove,g=e.style,M=e.render,m=e.dragging,_=e.onOffsetChange,h=(0,f.default)(e,v),x=i.useContext(d.default),E=x.min,P=x.max,j=x.direction,w=x.disabled,S=x.keyboard,k=x.range,C=x.tabIndex,N=x.ariaLabelForHandle,I=x.ariaLabelledByForHandle,A=x.ariaValueTextFormatterForHandle,D="".concat(a,"-handle"),T=function(e){w||O(e,b)},R=(0,p.getDirectionStyle)(j,y,E,P),U=i.createElement("div",(0,u.default)({ref:t,className:(0,c.default)(D,(r={},(0,l.default)(r,"".concat(D,"-").concat(b+1),k),(0,l.default)(r,"".concat(D,"-dragging"),m),r)),style:(0,o.default)((0,o.default)({},R),g),onMouseDown:T,onTouchStart:T,onKeyDown:function(e){if(!w&&S){var t=null;switch(e.which||e.keyCode){case s.default.LEFT:t="ltr"===j||"btt"===j?-1:1;break;case s.default.RIGHT:t="ltr"===j||"btt"===j?1:-1;break;case s.default.UP:t="ttb"!==j?1:-1;break;case s.default.DOWN:t="ttb"!==j?-1:1;break;case s.default.HOME:t="min";break;case s.default.END:t="max";break;case s.default.PAGE_UP:t=2;break;case s.default.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),_(t,b))}},tabIndex:w?null:(0,p.getIndex)(C,b),role:"slider","aria-valuemin":E,"aria-valuemax":P,"aria-valuenow":y,"aria-disabled":w,"aria-label":(0,p.getIndex)(N,b),"aria-labelledby":(0,p.getIndex)(I,b),"aria-valuetext":null===(n=(0,p.getIndex)(A,b))||void 0===n?void 0:n(y)},h));return M&&(U=M(U,{index:b,prefixCls:a,value:y,dragging:m})),U}));t.default=b},79454:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(10434)),o=n(r(70215)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),f=n(r(61382)),i=r(59602),c=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"];function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var d=l.forwardRef((function(e,t){var r=e.prefixCls,n=e.style,a=e.onStartMove,s=e.onOffsetChange,d=e.values,p=e.handleRender,v=e.draggingIndex,y=(0,o.default)(e,c),b=l.useRef({});return l.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=b.current[e])||void 0===t||t.focus()}}})),l.createElement(l.Fragment,null,d.map((function(e,t){return l.createElement(f.default,(0,u.default)({ref:function(e){e?b.current[t]=e:delete b.current[t]},dragging:v===t,prefixCls:r,style:(0,i.getIndex)(n,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:s,render:p},y))})))}));t.default=d},19200:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.children,a=e.value,s=e.onClick,d=l.useContext(c.default),p=d.min,v=d.max,y=d.direction,b=d.includedStart,O=d.includedEnd,g=d.included,M="".concat(t,"-text"),m=(0,i.getDirectionStyle)(y,a,p,v);return l.createElement("span",{className:(0,f.default)(M,(0,o.default)({},"".concat(M,"-active"),g&&b<=a&&a<=O)),style:(0,u.default)((0,u.default)({},m),r),onMouseDown:function(e){e.stopPropagation()},onClick:function(){s(a)}},n)};var u=n(r(42122)),o=n(r(38416)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),f=n(r(94184)),i=r(59602),c=n(r(64137));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}},47792:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.marks,n=e.onClick,a="".concat(t,"-mark");if(!r.length)return null;return u.createElement("div",{className:a},r.map((function(e){var t=e.value,r=e.style,l=e.label;return u.createElement(o.default,{key:t,prefixCls:a,style:r,value:t,onClick:n},l)})))};var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var f=u?Object.getOwnPropertyDescriptor(e,o):null;f&&(f.get||f.set)?Object.defineProperty(n,o,f):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),o=n(r(19200));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}},12624:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);t.Z=void 0;var u=n(r(38416)),o=n(r(861)),l=n(r(27424)),f=n(r(18698)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),c=n(r(94184)),s=n(r(11102)),d=n(r(60869)),p=n(r(79454)),v=n(r(87480)),y=n(r(64137)),b=n(r(51984)),O=n(r(47792)),g=n(r(43091)),M=n(r(13626));n(r(45520));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var _=i.forwardRef((function(e,t){var r,n=e.prefixCls,a=void 0===n?"rc-slider":n,m=e.className,_=e.style,h=e.disabled,x=void 0!==h&&h,E=e.keyboard,P=void 0===E||E,j=e.autoFocus,w=e.onFocus,S=e.onBlur,k=e.min,C=void 0===k?0:k,N=e.max,I=void 0===N?100:N,A=e.step,D=void 0===A?1:A,T=e.value,R=e.defaultValue,U=e.range,W=e.count,L=e.onChange,F=e.onBeforeChange,H=e.onAfterChange,K=e.allowCross,B=void 0===K||K,G=e.pushable,Y=void 0!==G&&G,V=e.draggableTrack,X=e.reverse,Q=e.vertical,Z=e.included,z=void 0===Z||Z,J=e.startPoint,$=e.trackStyle,q=e.handleStyle,ee=e.railStyle,te=e.dotStyle,re=e.activeDotStyle,ne=e.marks,ae=e.dots,ue=e.handleRender,oe=e.tabIndex,le=void 0===oe?0:oe,fe=e.ariaLabelForHandle,ie=e.ariaLabelledByForHandle,ce=e.ariaValueTextFormatterForHandle,se=i.useRef(),de=i.useRef(),pe=i.useMemo((function(){return Q?X?"ttb":"btt":X?"rtl":"ltr"}),[X,Q]),ve=i.useMemo((function(){return isFinite(C)?C:0}),[C]),ye=i.useMemo((function(){return isFinite(I)?I:100}),[I]),be=i.useMemo((function(){return null!==D&&D<=0?1:D}),[D]),Oe=i.useMemo((function(){return!0===Y?be:Y>=0&&Y}),[Y,be]),ge=i.useMemo((function(){return Object.keys(ne||{}).map((function(e){var t=ne[e],r={value:Number(e)};return t&&"object"===(0,f.default)(t)&&!i.isValidElement(t)&&("label"in t||"style"in t)?(r.style=t.style,r.label=t.label):r.label=t,r})).filter((function(e){var t=e.label;return t||"number"==typeof t})).sort((function(e,t){return e.value-t.value}))}),[ne]),Me=(0,M.default)(ve,ye,be,ge,B,Oe),me=(0,l.default)(Me,2),_e=me[0],he=me[1],xe=(0,d.default)(R,{value:T}),Ee=(0,l.default)(xe,2),Pe=Ee[0],je=Ee[1],we=i.useMemo((function(){var e=null==Pe?[]:Array.isArray(Pe)?Pe:[Pe],t=(0,l.default)(e,1)[0],r=null===Pe?[]:[void 0===t?ve:t];if(U){if(r=(0,o.default)(e),W||void 0===Pe){var n=W>=0?W+1:2;for(r=r.slice(0,n);r.length<n;){var a;r.push(null!==(a=r[r.length-1])&&void 0!==a?a:ve)}}r.sort((function(e,t){return e-t}))}return r.forEach((function(e,t){r[t]=_e(e)})),r}),[Pe,U,ve,W,_e]),Se=i.useRef(we);Se.current=we;var ke=function(e){return U?e:e[0]},Ce=function(e){var t=(0,o.default)(e).sort((function(e,t){return e-t}));L&&!(0,s.default)(t,Se.current,!0)&&L(ke(t)),je(t)},Ne=function(e){if(!x){var t=0,r=ye-ve;we.forEach((function(n,a){var u=Math.abs(e-n);u<=r&&(r=u,t=a)}));var n=(0,o.default)(we);n[t]=e,U&&!we.length&&void 0===W&&n.push(e),null==F||F(ke(n)),Ce(n),null==H||H(ke(n))}},Ie=i.useState(null),Ae=(0,l.default)(Ie,2),De=Ae[0],Te=Ae[1];i.useEffect((function(){if(null!==De){var e=we.indexOf(De);e>=0&&se.current.focus(e)}Te(null)}),[De]);var Re=i.useMemo((function(){return(!V||null!==be)&&V}),[V,be]),Ue=(0,v.default)(de,pe,we,ve,ye,_e,Ce,(function(){null==H||H(ke(Se.current))}),he),We=(0,l.default)(Ue,4),Le=We[0],Fe=We[1],He=We[2],Ke=We[3],Be=function(e,t){Ke(e,t),null==F||F(ke(Se.current))},Ge=-1!==Le;i.useEffect((function(){if(!Ge){var e=we.lastIndexOf(Fe);se.current.focus(e)}}),[Ge]);var Ye=i.useMemo((function(){return(0,o.default)(He).sort((function(e,t){return e-t}))}),[He]),Ve=i.useMemo((function(){return U?[Ye[0],Ye[Ye.length-1]]:[ve,Ye[0]]}),[Ye,U,ve]),Xe=(0,l.default)(Ve,2),Qe=Xe[0],Ze=Xe[1];i.useImperativeHandle(t,(function(){return{focus:function(){se.current.focus(0)},blur:function(){var e=document.activeElement;de.current.contains(e)&&(null==e||e.blur())}}})),i.useEffect((function(){j&&se.current.focus(0)}),[]);var ze=i.useMemo((function(){return{min:ve,max:ye,direction:pe,disabled:x,keyboard:P,step:be,included:z,includedStart:Qe,includedEnd:Ze,range:U,tabIndex:le,ariaLabelForHandle:fe,ariaLabelledByForHandle:ie,ariaValueTextFormatterForHandle:ce}}),[ve,ye,pe,x,P,be,z,Qe,Ze,U,le,fe,ie,ce]);return i.createElement(y.default.Provider,{value:ze},i.createElement("div",{ref:de,className:(0,c.default)(a,m,(r={},(0,u.default)(r,"".concat(a,"-disabled"),x),(0,u.default)(r,"".concat(a,"-vertical"),Q),(0,u.default)(r,"".concat(a,"-horizontal"),!Q),(0,u.default)(r,"".concat(a,"-with-marks"),ge.length),r)),style:_,onMouseDown:function(e){e.preventDefault();var t,r=de.current.getBoundingClientRect(),n=r.width,a=r.height,u=r.left,o=r.top,l=r.bottom,f=r.right,i=e.clientX,c=e.clientY;switch(pe){case"btt":t=(l-c)/a;break;case"ttb":t=(c-o)/a;break;case"rtl":t=(f-i)/n;break;default:t=(i-u)/n}Ne(_e(ve+t*(ye-ve)))}},i.createElement("div",{className:"".concat(a,"-rail"),style:ee}),i.createElement(b.default,{prefixCls:a,style:$,values:Ye,startPoint:J,onStartMove:Re?Be:null}),i.createElement(g.default,{prefixCls:a,marks:ge,dots:ae,style:te,activeStyle:re}),i.createElement(p.default,{ref:se,prefixCls:a,style:q,values:He,draggingIndex:Le,onStartMove:Be,onOffsetChange:function(e,t){if(!x){var r=he(we,e,t);null==F||F(ke(we)),Ce(r.values),null==H||H(ke(r.values)),Te(r.value)}},onFocus:w,onBlur:S,handleRender:ue}),i.createElement(O.default,{prefixCls:a,marks:ge,onClick:Ne})))}));t.Z=_},12452:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.value,n=e.style,a=e.activeStyle,s=l.useContext(c.default),d=s.min,p=s.max,v=s.direction,y=s.included,b=s.includedStart,O=s.includedEnd,g="".concat(t,"-dot"),M=y&&b<=r&&r<=O,m=(0,o.default)((0,o.default)({},(0,i.getDirectionStyle)(v,r,d,p)),"function"==typeof n?n(r):n);M&&(m=(0,o.default)((0,o.default)({},m),"function"==typeof a?a(r):a));return l.createElement("span",{className:(0,f.default)(g,(0,u.default)({},"".concat(g,"-active"),M)),style:m})};var u=n(r(38416)),o=n(r(42122)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),f=n(r(94184)),i=r(59602),c=n(r(64137));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}},43091:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.marks,n=e.dots,a=e.style,f=e.activeStyle,i=u.useContext(o.default),c=i.min,s=i.max,d=i.step,p=u.useMemo((function(){var e=new Set;if(r.forEach((function(t){e.add(t.value)})),n&&null!==d)for(var t=c;t<=s;)e.add(t),t+=d;return Array.from(e)}),[c,s,d,n,r]);return u.createElement("div",{className:"".concat(t,"-step")},p.map((function(e){return u.createElement(l.default,{prefixCls:t,key:e,value:e,style:a,activeStyle:f})})))};var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),o=n(r(64137)),l=n(r(12452));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}},35044:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.start,a=e.end,c=e.index,s=e.onStartMove,d=o.useContext(f.default),p=d.direction,v=d.min,y=d.max,b=d.disabled,O=d.range,g="".concat(t,"-track"),M=(0,i.getOffset)(n,v,y),m=(0,i.getOffset)(a,v,y),_=function(e){!b&&s&&s(e,-1)},h={};switch(p){case"rtl":h.right="".concat(100*M,"%"),h.width="".concat(100*m-100*M,"%");break;case"btt":h.bottom="".concat(100*M,"%"),h.height="".concat(100*m-100*M,"%");break;case"ttb":h.top="".concat(100*M,"%"),h.height="".concat(100*m-100*M,"%");break;default:h.left="".concat(100*M,"%"),h.width="".concat(100*m-100*M,"%")}return o.createElement("div",{className:(0,l.default)(g,O&&"".concat(g,"-").concat(c+1)),style:(0,u.default)((0,u.default)({},h),r),onMouseDown:_,onTouchStart:_})};var u=n(r(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),l=n(r(94184)),f=n(r(64137)),i=r(59602);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}},51984:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.prefixCls,r=e.style,n=e.values,a=e.startPoint,i=e.onStartMove,c=u.useContext(o.default),s=c.included,d=c.range,p=c.min,v=u.useMemo((function(){if(!d){if(0===n.length)return[];var e=null!=a?a:p,t=n[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var r=[],u=0;u<n.length-1;u+=1)r.push({start:n[u],end:n[u+1]});return r}),[n,d,a,p]);return s?v.map((function(e,n){var a=e.start,o=e.end;return u.createElement(l.default,{index:n,prefixCls:t,style:(0,f.getIndex)(r,n),start:a,end:o,key:n,onStartMove:i})})):null};var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),o=n(r(64137)),l=n(r(35044)),f=r(59602);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}},64137:(e,t,r)=>{"use strict";var n=r(18698);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var f=o?Object.getOwnPropertyDescriptor(e,l):null;f&&(f.get||f.set)?Object.defineProperty(u,l,f):u[l]=e[l]}u.default=e,r&&r.set(e,u);return u}(r(67294)).createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});t.default=u},87480:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a,f,c,s,d){var p=l.useState(null),v=(0,o.default)(p,2),y=v[0],b=v[1],O=l.useState(-1),g=(0,o.default)(O,2),M=g[0],m=g[1],_=l.useState(r),h=(0,o.default)(_,2),x=h[0],E=h[1],P=l.useState(r),j=(0,o.default)(P,2),w=j[0],S=j[1],k=l.useRef(null),C=l.useRef(null);l.useEffect((function(){-1===M&&E(r)}),[r,M]),l.useEffect((function(){return function(){document.removeEventListener("mousemove",k.current),document.removeEventListener("mouseup",C.current),document.removeEventListener("touchmove",k.current),document.removeEventListener("touchend",C.current)}}),[]);var N=function(e,t){x.some((function(t,r){return t!==e[r]}))&&(void 0!==t&&b(t),E(e),c(e))},I=function(e,t){if(-1===e){var r=w[0],o=w[w.length-1],l=n-r,i=a-o,c=t*(a-n);c=Math.max(c,l),c=Math.min(c,i);var s=f(r+c);c=s-r;var p=w.map((function(e){return e+c}));N(p)}else{var v=(a-n)*t,y=(0,u.default)(x);y[e]=w[e];var b=d(y,v,e,"dist");N(b.values,b.value)}},A=l.useRef(I);A.current=I;var D=l.useMemo((function(){var e=(0,u.default)(r).sort((function(e,t){return e-t})),t=(0,u.default)(x).sort((function(e,t){return e-t}));return e.every((function(e,r){return e===t[r]}))?x:r}),[r,x]);return[M,y,D,function(n,a){n.stopPropagation();var u=r[a];m(a),b(u),S(r);var o=i(n),l=o.pageX,f=o.pageY,c=function(r){r.preventDefault();var n,u=i(r),o=u.pageX,c=u.pageY,s=o-l,d=c-f,p=e.current.getBoundingClientRect(),v=p.width,y=p.height;switch(t){case"btt":n=-d/y;break;case"ttb":n=d/y;break;case"rtl":n=-s/v;break;default:n=s/v}A.current(a,n)},d=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",c),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",c),k.current=null,C.current=null,m(-1),s()};document.addEventListener("mouseup",d),document.addEventListener("mousemove",c),document.addEventListener("touchend",d),document.addEventListener("touchmove",c),k.current=c,C.current=d}]};var u=n(r(861)),o=n(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function i(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}},13626:(e,t,r)=>{"use strict";var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,a,l){var f=o.useCallback((function(r){var n=isFinite(r)?r:e;return n=Math.min(t,r),n=Math.max(e,n)}),[e,t]),i=o.useCallback((function(n){if(null!==r){var a=e+Math.round((f(n)-e)/r)*r,u=function(e){return(String(e).split(".")[1]||"").length},o=Math.max(u(r),u(t),u(e)),l=Number(a.toFixed(o));return e<=l&&l<=t?l:null}return null}),[r,e,t,f]),c=o.useCallback((function(a){var u=f(a),o=n.map((function(e){return e.value}));null!==r&&o.push(i(a)),o.push(e,t);var l=o[0],c=t-e;return o.forEach((function(e){var t=Math.abs(u-e);t<=c&&(l=e,c=t)})),l}),[e,t,n,r,f,i]),s=function a(o,l,f){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof l){var s,d=o[f],p=d+l,v=[];n.forEach((function(e){v.push(e.value)})),v.push(e,t),v.push(i(d));var y=l>0?1:-1;"unit"===c?v.push(i(d+y*r)):v.push(i(p)),v=v.filter((function(e){return null!==e})).filter((function(e){return l<0?e<=d:e>=d})),"unit"===c&&(v=v.filter((function(e){return e!==d})));var b="unit"===c?d:p;s=v[0];var O=Math.abs(s-b);if(v.forEach((function(e){var t=Math.abs(e-b);t<O&&(s=e,O=t)})),void 0===s)return l<0?e:t;if("dist"===c)return s;if(Math.abs(l)>1){var g=(0,u.default)(o);return g[f]=s,a(g,l-y,f,c)}return s}return"min"===l?e:"max"===l?t:void 0},d=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[r],u=s(e,t,r,n);return{value:u,changed:u!==a}},p=function(e){return null===l&&0===e||"number"==typeof l&&e<l};return[c,function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",u=e.map(c),o=u[r],f=s(u,t,r,n);if(u[r]=f,!1===a){var i=l||0;r>0&&u[r-1]!==o&&(u[r]=Math.max(u[r],u[r-1]+i)),r<u.length-1&&u[r+1]!==o&&(u[r]=Math.min(u[r],u[r+1]-i))}else if("number"==typeof l||null===l){for(var v=r+1;v<u.length;v+=1)for(var y=!0;p(u[v]-u[v-1])&&y;){var b=d(u,1,v);u[v]=b.value,y=b.changed}for(var O=r;O>0;O-=1)for(var g=!0;p(u[O]-u[O-1])&&g;){var M=d(u,-1,O-1);u[O-1]=M.value,g=M.changed}for(var m=u.length-1;m>0;m-=1)for(var _=!0;p(u[m]-u[m-1])&&_;){var h=d(u,-1,m-1);u[m-1]=h.value,_=h.changed}for(var x=0;x<u.length-1;x+=1)for(var E=!0;p(u[x+1]-u[x])&&E;){var P=d(u,1,x+1);u[x+1]=P.value,E=P.changed}}return{value:u[r],values:u}}]};var u=n(r(861)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var f=u?Object.getOwnPropertyDescriptor(e,o):null;f&&(f.get||f.set)?Object.defineProperty(n,o,f):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}},59602:(e,t)=>{"use strict";function r(e,t,r){return(e-t)/(r-t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDirectionStyle=function(e,t,n,a){var u=r(t,n,a),o={};switch(e){case"rtl":o.right="".concat(100*u,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*u,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*u,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*u,"%"),o.transform="translateX(-50%)"}return o},t.getIndex=function(e,t){return Array.isArray(e)?e[t]:e},t.getOffset=r},19158:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},27712:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},n=r;t.default=n},18545:(e,t,r)=>{"use strict";var n=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.useRef();return t.current=e,a.useCallback((function(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(n))}),[])};var a=n(r(67294))},82546:(e,t,r)=>{"use strict";var n=r(64836).default,a=r(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var u=a(r(67294)),o=(0,n(r(19158)).default)()?u.useLayoutEffect:u.useEffect,l=o;t.default=l;t.useLayoutUpdateEffect=function(e,t){var r=u.useRef(!0);o((function(){if(!r.current)return e()}),t),o((function(){return r.current=!1,function(){r.current=!0}}),[])}},60869:(e,t,r)=>{"use strict";var n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t||{},n=r.defaultValue,i=r.value,c=r.onChange,s=r.postState,d=(0,l.default)((function(){return f(i)?i:f(n)?"function"==typeof n?n():n:"function"==typeof e?e():e})),p=(0,a.default)(d,2),v=p[0],y=p[1],b=void 0!==i?i:v,O=s?s(b):b,g=(0,u.default)(c),M=(0,l.default)([b]),m=(0,a.default)(M,2),_=m[0],h=m[1];(0,o.useLayoutUpdateEffect)((function(){var e=_[0];v!==e&&g(v,e)}),[_]),(0,o.useLayoutUpdateEffect)((function(){f(i)||y(i)}),[i]);var x=(0,u.default)((function(e,t){y(e,t),h([b],t)}));return[O,x]};var a=n(r(27424)),u=n(r(18545)),o=r(82546),l=n(r(78423));function f(e){return void 0!==e}},78423:(e,t,r)=>{"use strict";var n=r(75263).default,a=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.useRef(!1),r=o.useState(e),n=(0,u.default)(r,2),a=n[0],l=n[1];return o.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[a,function(e,r){if(r&&t.current)return;l(e)}]};var u=a(r(27424)),o=n(r(67294))},11102:(e,t,r)=>{"use strict";var n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(18698)),u=n(r(45520));var o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new Set;return function e(t,o){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,f=n.has(t);if((0,u.default)(!f,"Warning: There may be circular references"),f)return!1;if(t===o)return!0;if(r&&l>1)return!1;n.add(t);var i=l+1;if(Array.isArray(t)){if(!Array.isArray(o)||t.length!==o.length)return!1;for(var c=0;c<t.length;c++)if(!e(t[c],o[c],i))return!1;return!0}if(t&&o&&"object"===(0,a.default)(t)&&"object"===(0,a.default)(o)){var s=Object.keys(t);return s.length===Object.keys(o).length&&s.every((function(r){return e(t[r],o[r],i)}))}return!1}(e,t)};t.default=o},45520:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.call=f,t.default=void 0,t.note=o,t.noteOnce=c,t.preMessage=void 0,t.resetWarned=l,t.warning=u,t.warningOnce=i;var r={},n=[],a=function(e){n.push(e)};function u(e,t){}function o(e,t){}function l(){r={}}function f(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function i(e,t){f(u,e,t)}function c(e,t){f(o,e,t)}t.preMessage=a,i.preMessage=a,i.resetWarned=l,i.noteOnce=c;var s=i;t.default=s},73897:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},85372:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},63405:(e,t,r)=>{var n=r(73897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},38416:(e,t,r)=>{var n=r(64062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},10434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},64836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},75263:(e,t,r)=>{var n=r(18698).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var f=o?Object.getOwnPropertyDescriptor(e,l):null;f&&(f.get||f.set)?Object.defineProperty(u,l,f):u[l]=e[l]}return u.default=e,r&&r.set(e,u),u},e.exports.__esModule=!0,e.exports.default=e.exports},79498:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},68872:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,u,o,l=[],f=!0,i=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=u.call(r)).done)&&(l.push(n.value),l.length!==t);f=!0);}catch(c){i=!0,a=c}finally{try{if(!f&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(i)throw a}}return l}},e.exports.__esModule=!0,e.exports.default=e.exports},12218:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},42281:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},42122:(e,t,r)=>{var n=r(38416);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},70215:(e,t,r)=>{var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,a,u=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.__esModule=!0,e.exports.default=e.exports},7071:e=>{e.exports=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.__esModule=!0,e.exports.default=e.exports},27424:(e,t,r)=>{var n=r(85372),a=r(68872),u=r(86116),o=r(12218);e.exports=function(e,t){return n(e)||a(e,t)||u(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},861:(e,t,r)=>{var n=r(63405),a=r(79498),u=r(86116),o=r(42281);e.exports=function(e){return n(e)||a(e)||u(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},95036:(e,t,r)=>{var n=r(18698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},64062:(e,t,r)=>{var n=r(18698).default,a=r(95036);e.exports=function(e){var t=a(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},18698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},86116:(e,t,r)=>{var n=r(73897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);