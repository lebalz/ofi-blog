"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[44485],{3239:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),o=n(71217),s=n(21314),l=(0,o.Pi)((function(){return(0,s.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},77960:function(e,t,n){n.d(t,{x:function(){return I},Z:function(){return L}});var a=n(87462),r=n(67294),i=n(72389),o=n(71217),s=n(21314),l=n(78982),c=n(46858),u=r.createContext(void 0),m=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},d=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:m(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,l.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,l.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:m(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:m(t),type:t.type},n)},p=(0,o.Pi)((function(e){var t=(0,s.o)("documentStore"),n=r.useState(d(t,e))[0];return(0,i.Z)()?r.createElement(u.Provider,{value:n},e.children):r.createElement("div",null,"Loading")})),f=n(26528),h={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6",monospace:"monospace_1oqD"},y=n(86010),g=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),v=function(e){var t=e.value,n=t,a=void 0;if(g.test(t)){var i=function(e){if(g.test(e))return e.match(g).groups.klass}(t);a=h[i],n=""+t.replace(g,"")}return r.createElement("option",{value:t,className:a},n)},b=n(92814),k=n(51436),N=n(68949),w=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return h[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},x=(0,o.Pi)((function(e){var t,n=(0,i.Z)(),a=r.useState("unchecked"),o=a[0],s=a[1],l=r.useContext(u),c=function(e){s("unchecked"),l.setData({value:e,type:"string"})},m=function(t){if(e.checker)return s(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};s(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,N.U5)((function(){return l.loaded}),(function(e){e&&m(l.data.value)}))}),[]),r.useEffect((function(){l.loaded&&m(l.data.value)}),[n]),r.createElement("div",{className:h.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return c(e.target.value)},style:{width:e.width},value:l.data.value,className:E(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return r.createElement(v,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return c(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return m(l.data.value)},className:(0,y.default)(h[o],h.checkButton)},r.createElement(b.G,{icon:(t=o,"correct"===t?k.f8k:"wrong"===t?k.nYk:k.sph)})))})),S=(0,f.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),A=function(e){return h[function(e){if(S.test(e))return e.match(S).groups.klass}(e)]},z=(0,o.Pi)((function(e){var t=r.useContext(u),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return r.createElement("div",{className:h.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:a,className:A(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(v,{value:e,key:t})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:a,disabled:!t.loaded||t.isReadonly})})))})),P=void 0,_=[["bold","italic","underline"]],C=[].concat(_,[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),O=(0,o.Pi)((function(e){var t=r.useState(!1),a=t[0],i=t[1],o=r.useState(!1),s=o[0],l=o[1],c=r.useRef(null),m=r.useContext(u),d=function(e){e.preventDefault()};r.useEffect((function(){var e=!0;return function(e){if(P)return e();Promise.all([Promise.all([n.e(82930),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940)),Promise.all([n.e(40532),n.e(37617)]).then(n.bind(n,37617))]).then((function(t){P=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(l(!0),c&&c.current&&c.current.editor.getModule("toolbar").container.addEventListener("mousedown",d))})),function(){e=!1,c&&c.current&&c.current.editor.getModule("toolbar").container.removeEventListener("mousedown",d)}}),[]);return P&&s?r.createElement("div",{onFocus:function(){return!a&&i(!0)}},e.label&&r.createElement("h6",null,e.label),r.createElement(P,{ref:c,theme:"snow",readOnly:!m.loaded||m.isReadonly,className:(0,y.default)(h.quillAnswer,e.monospace&&h.monospace,a?void 0:"disable-toolbar"),value:m.loaded?m.data.value||"":"Laden...",onChange:function(e,t,n,a){var r,i;r=e,void 0===i&&(i=0),s&&m.setData({value:r,type:"text"})},modules:{toolbar:e.reduced?_:C,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")})),K=n(3239),D=n(79265),M=(0,o.Pi)((function(){var e=r.useContext(u),t=e.legacyData;return t?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement(u.Provider,{value:new D.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&r.createElement(O,{type:"text",webKey:e.webKey}),"string"===e.data.type&&r.createElement(x,{type:"string",webKey:e.webKey}),"array"===e.data.type&&r.createElement(z,{type:"array",webKey:e.webKey,size:e.data.size})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),Z=(0,o.Pi)((function(){return r.useContext(u).isOffline?r.createElement("div",null,r.createElement("span",{className:(0,y.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),I=function(e){return e.replace(/\s+/g,"").toUpperCase()},L=(0,o.Pi)((function(e){var t=(0,s.o)("msalStore");return r.createElement(p,(0,a.Z)({},e,{childNodes:e.children}),r.createElement("div",{"data--web-key":e.webKey},r.createElement(K.Z,null),t.loggedIn&&r.createElement(M,null),t.loggedIn&&r.createElement(Z,null),"text"===e.type&&r.createElement(O,e),"string"===e.type&&r.createElement(x,e),"array"===e.type&&r.createElement(z,e)))}))},67460:function(e,t,n){var a=n(51436),r=n(92814),i=n(86010),o=n(14842),s=n(67294),l={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},c={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=s.useState(void 0),u=a[0],m=a[1],d=s.useState("none"),p=d[0],f=d[1],h=s.useRef(null);return s.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return f("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),s.useEffect((function(){"none"!==p&&f("none")}),[t]),s.createElement(s.Fragment,null,s.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",c[p]),disabled:"spin"===p,onClick:function(){if(null!==h.current){if("none"===p)return f("spin"),(0,o.SE)(h.current,n).then((function(e){m(e),f("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=u,e))]).then((function(){f("copied")})).catch((function(e){f("error"),console.warn(e)}))}catch(t){console.warn(t),f("error")}}}},s.createElement(r.G,{icon:l[p]})),s.createElement("div",{ref:h,className:"copy-container"},t))}},99938:function(e,t,n){n.d(t,{Z:function(){return ne}});var a=n(51436),r=n(92814),i=n(86010),o=n(67294),s=function(e){if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;for(var t=Math.floor(Math.sqrt(e)),n=5;n<=t;n+=6)if(e%n==0||e%(n+2)==0)return!1;return!0},l=function(e,t){if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);var n=(t=Math.floor(t))-e+1,a=Math.floor(Math.random()*n)+e;if(s(a))return a;for(var r=a-1,i=a+1;r>=e&&i<=t;){if(s(r))return r;if(s(i))return i;r-=1,i+=1}for(;r>=e;){if(s(r))return r;r-=1}for(;i<=t;){if(s(i))return i;i+=1}return null},c=n(96734),u=n(90896),m=n(18446),d=n.n(m),p=n(23560),f=n.n(p),h=n(14293),y=n.n(h),g=n(74524),v=n(94184),b=n.n(v),k=n(48710),N=n(2763),w=n(52017),E=n(47523),x=function(){return null};x.displayName="ZAxis",x.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var S=n(33508),A=n(36353),z=n(86641),P=n(43815),_=n(69055),C=n(77718),O=n(79896);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=B(e);if(t){var r=B(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,a,r=V(i);function i(){var e;L(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,_.EL)("recharts-scatter-"),e}return t=i,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return o.isValidElement(e)?n=o.cloneElement(e,t):f()(e)?n=e(t):"string"==typeof e&&(n=o.createElement(A.v,D({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,a=n.shape,r=n.activeShape,s=n.activeIndex,l=(0,O.L6)(this.props);return e.map((function(e,n){var c=Z(Z({key:"symbol-".concat(n)},l),e);return o.createElement(k.m,D({className:"recharts-scatter-symbol"},(0,O.bw)(t.props,e,n),{key:"symbol-".concat(n)}),i.renderSymbolItem(s===n?r:a,c))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,a=t.isAnimationActive,r=t.animationBegin,i=t.animationDuration,s=t.animationEasing,l=t.animationId,c=this.state.prevPoints;return o.createElement(g.ZP,{begin:r,duration:i,isActive:a,easing:s,from:{t:0},to:{t:1},key:"pie-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var a=t.t,r=n.map((function(e,t){var n=c&&c[t];if(n){var r=(0,_.k4)(n.cx,e.cx),i=(0,_.k4)(n.cy,e.cy),o=(0,_.k4)(n.size,e.size);return Z(Z({},e),{},{cx:r(a),cy:i(a),size:o(a)})}var s=(0,_.k4)(0,e.size);return Z(Z({},e),{},{size:s(a)})}));return o.createElement(k.m,null,e.renderSymbolsStatically(r))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,a=this.state.prevPoints;return!(n&&t&&t.length)||a&&d()(a,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,a=e.yAxis,r=e.children,i=(0,w.NN)(r,z.W.displayName);if(!i)return null;function s(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,C.F$)(e,t)}}function l(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,C.F$)(e,t)}}return i.map((function(e,r){var i=e.props.direction;return o.cloneElement(e,{key:r,data:t,xAxis:n,yAxis:a,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:"x"===i?l:s})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,a=n.points,r=n.line,i=n.lineType,s=n.lineJointType,l=(0,O.L6)(this.props),c=(0,O.L6)(r);if("joint"===i)e=a.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===i){var u=(0,_.wr)(a),m=u.xmin,d=u.xmax,p=u.a,h=u.b,y=function(e){return p*e+h};e=[{x:m,y:y(m)},{x:d,y:y(d)}]}var g=Z(Z(Z({},l),{},{fill:"none",stroke:l&&l.fill},c),{},{points:e});return t=o.isValidElement(r)?o.cloneElement(r,g):f()(r)?r(g):o.createElement(S.H,D({},g,{type:s})),o.createElement(k.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,a=e.line,r=e.className,i=e.xAxis,s=e.yAxis,l=e.left,c=e.top,u=e.width,m=e.height,d=e.id,p=e.isAnimationActive;if(t||!n||!n.length)return null;var f=this.state.isAnimationFinished,h=b()("recharts-scatter",r),g=i&&i.allowDataOverflow||s&&s.allowDataOverflow,v=y()(d)?this.id:d;return o.createElement(k.m,{className:h,clipPath:g?"url(#clipPath-".concat(v,")"):null},g?o.createElement("defs",null,o.createElement("clipPath",{id:"clipPath-".concat(v)},o.createElement("rect",{x:l,y:c,width:u,height:m}))):null,a&&this.renderLine(),this.renderErrorBar(),o.createElement(k.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!p||f)&&N.e.renderCallByParent(this.props,n))}}])&&j(t.prototype,n),a&&j(t,a),i}(o.PureComponent);R.displayName="Scatter",R.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!E.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},R.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,a=e.zAxis,r=e.item,i=e.displayedData,o=e.xAxisTicks,s=e.yAxisTicks,l=e.offset,c=r.props.tooltipType,u=(0,w.NN)(r.props.children,P.b.displayName),m=y()(t.dataKey)?r.props.dataKey:t.dataKey,d=y()(n.dataKey)?r.props.dataKey:n.dataKey,p=a&&a.dataKey,f=a?a.range:x.defaultProps.range,h=f&&f[0],g=t.scale.bandwidth?t.scale.bandwidth():0,v=n.scale.bandwidth?n.scale.bandwidth():0,b=i.map((function(e,i){var l=(0,C.F$)(e,m),f=(0,C.F$)(e,d),b=!y()(p)&&(0,C.F$)(e,p)||"-",k=[{name:y()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:l,payload:e,dataKey:m,type:c},{name:y()(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:f,payload:e,dataKey:d,type:c}];"-"!==b&&k.push({name:a.name||a.dataKey,unit:a.unit||"",value:b,payload:e,dataKey:p,type:c});var N=(0,C.Hv)({axis:t,ticks:o,bandSize:g,entry:e,index:i,dataKey:m}),w=(0,C.Hv)({axis:n,ticks:s,bandSize:v,entry:e,index:i,dataKey:d}),E="-"!==b?a.scale(b):h,x=Math.sqrt(Math.max(E,0)/Math.PI);return Z(Z({},e),{},{cx:N,cy:w,x:N-x,y:w-x,xAxis:t,yAxis:n,zAxis:a,width:2*x,height:2*x,size:E,node:{x:l,y:f,z:b},tooltipPayload:k,tooltipPosition:{x:N,y:w},payload:e},u&&u[i]&&u[i].props)}));return Z({points:b},l)};var H=n(3023),W=n(75358),G=n(97187),J=(0,u.z)({chartName:"ScatterChart",GraphicalChild:R,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:H.K},{axisType:"yAxis",AxisComp:W.B},{axisType:"zAxis",AxisComp:x}],formatAxisMap:G.t9}),q=n(29009),U=n(14195),$=n(14888),Y=n(67460),X=function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.default)(c.Z.stage)},o.createElement("h4",null,e.label),o.createElement("span",{style:{flexGrow:1}}),o.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},o.createElement(r.G,{icon:a.zc,color:"white"}))),o.createElement("div",{className:(0,i.default)(c.Z.result)},e.result.calculations.map((function(e,t){return o.createElement("span",{className:(0,i.default)("badge","badge--secondary",c.Z.badge),key:t},e)})),o.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&o.createElement("span",{className:(0,i.default)("badge","badge--success",c.Z.badge)},o.createElement(r.G,{icon:a.SZw})," ",e.result.time_ms.toFixed(1)," ms")))},Q=function(e){return e.toLocaleString().replace(/[\.,]/g,"'")},ee={calculations:[]},te=function(e){if(e<1e3)return e;var t=(""+e).length-1,n=(""+e).replace(/0*$/,""),a=n.slice(0,1),r=n.slice(1);return"1"===a?"10^"+t:r?n.slice(0,1)+"."+n.slice(1)+"\xb710^"+t:n.slice(0,1)+"\xb710^"+t},ne=function(){var e=o.useState(6),t=e[0],n=e[1],a=o.useState([0,0]),r=a[0],s=a[1],u=o.useState(0),m=u[0],d=u[1],p=o.useState(0),f=p[0],h=p[1],y=o.useState(0),g=y[0],v=y[1],b=o.useState(-1),k=b[0],N=b[1],w=o.useState([]),E=w[0],x=w[1],S=o.useState(0),A=S[0],z=S[1],P=o.useState(-1),_=P[0],C=P[1],O=o.useState(-1),K=O[0],D=O[1],M=o.useState(0),Z=M[0],I=M[1],L=o.useState(0),j=L[0],T=L[1],V=o.useState(!1);V[0],V[1],o.useRef(null);o.useEffect((function(){d(0),t<8?s([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("5".padEnd(t+1,"0"),10)]):8===t&&s([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("1".padEnd(t+1,"0"),10)])}),[t]),o.useEffect((function(){3===m&&x([].concat(E,[{product:A,time:K}]))}),[m]);return o.createElement("div",{className:(0,i.default)("hero","shadow--lw",c.Z.container,c.Z.factorization)},o.createElement("div",{className:"container"},o.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",o.createElement("div",{className:(0,i.default)("button-group",c.Z.digits)},o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",6===t&&"button--active"),onClick:function(){return n(6)}},"6"),o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",7===t&&"button--active"),onClick:function(){return n(7)}},"7"),o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",8===t&&"button--active"),onClick:function(){return n(8)}},"8")),"Stellen",o.createElement(X,{onStage:function(){var e=window.performance.now(),t=l(r[0],r[1]),n=l(r[0],r[1]);h(Math.min(t,n)),v(Math.max(t,n));var a=window.performance.now()-e;N(a),d(1)},label:"Zwei Primzahlen zwische "+Q(r[0])+" und "+Q(r[1])+" w\xe4hlen",result:m>0?{calculations:[Q(f),Q(g)],time_ms:k}:ee}),m>0&&o.createElement(X,{onStage:function(){var e=window.performance.now();z(f*g);var t=window.performance.now()-e;C(t),d(2)},label:"Primzahlprodukt berechnen: "+Q(f)+" * "+Q(g),result:m>1?{calculations:[Q(A)],time_ms:_}:ee}),m>1&&o.createElement(X,{onStage:function(){D(-1);for(var e=window.performance.now(),t=2;t<A;){var n=A/t;if(n%1==0){I(t),T(n);break}2===t?t++:t+=2}var a=window.performance.now()-e;D(a),d(3)},label:"Primzahlen faktorisieren",result:m>2?{calculations:[Q(Z),Q(j)],time_ms:K}:ee}),E.length>0&&o.createElement("div",{style:{width:"100%",overflow:"auto"}},o.createElement(Y.Z,null,o.createElement(q.h,{width:"100%",height:400},o.createElement(J,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},o.createElement(U.q,null),o.createElement(H.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:te,angle:40,textAnchor:"start"}),o.createElement(W.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),o.createElement($.u,{cursor:{strokeDasharray:"3 3"}}),o.createElement(R,{name:"Mesurements",data:E,fill:"#8884d8"})))))))}},21314:function(e,t,n){n.d(t,{o:function(){return i}});var a=n(67294),r=n(32930),i=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return o}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&s()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var l=localStorage.getItem(e);return l?JSON.parse(l):n}catch(c){return n}},o=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},47474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(99938),s=n(77960),l=["components"],c={title:"Asymmetrie"},u="Asymmetrie [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"version-24i/Kryptologie/Asymmetrisch/asymmetrie",isDocsHomePage:!1,title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/24i/Kryptologie/Asymmetrisch/asymmetrie",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/06-Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"24i",sidebarPosition:3,frontMatter:{title:"Asymmetrie"},sidebar:"version-24i/sidebar",previous:{title:"Geheime Farbe",permalink:"/24i/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/24i/Kryptologie/Asymmetrisch/asymm-encryption"}},d=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asymmetrie-"},"Asymmetrie ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,i.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,i.kt)("p",null,"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,i.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."))),(0,i.kt)("h2",{id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,i.kt)("p",null,"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,i.kt)("p",null,"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"multiplizieren-vs-faktorisieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Multiplizieren vs. Faktorisieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Berechnen Sie ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"41"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"83")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,i.kt)("li",{parentName:"ol"},"Schaffen Sie es, die Zahl ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3397")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1117")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?")))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen einige (>3) Messungen vor."),(0,i.kt)("li",{parentName:"ol"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,i.kt)("li",{parentName:"ol"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?")),(0,i.kt)(s.Z,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,i.kt)(o.Z,{mdxType:"PrimfactorizationTiming"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=792141"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}}}]);