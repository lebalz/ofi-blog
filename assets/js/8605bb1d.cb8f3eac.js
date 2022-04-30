"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[16163],{82593:function(e,t,n){n.d(t,{x:function(){return z},Z:function(){return _}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},o=n(86010),s=n(71217),l=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,r=void 0;if(l.test(t)){var o=function(e){if(l.test(e))return e.match(l).groups.klass}(t);r=i[o],n=""+t.replace(l,"")}return a.createElement("option",{value:t,className:r},n)},u=n(92814),m=n(51436),d=n(68949),p=n(72389),f=n(21314),h=n(74322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,p.Z)(),r=a.useState("unchecked"),s=r[0],l=r[1],g=(0,f.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(l("unchecked"),g.setData({value:e,type:"string"}))},b=function(t){if(e.checker)return l(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};l(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,d.U5)((function(){return g.loaded}),(function(e){e&&b(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&b(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:y(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return b(g.value)},className:(0,o.default)(i[s],i.checkButton)},a.createElement(u.G,{icon:(t=s,"correct"===t?m.f8k:"wrong"===t?m.nYk:m.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),b=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:k(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(c,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(h.Z,null)})),w=n(83117),E=n(75552),x=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(h.Z,null)})),A=n(47271),S=(0,s.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(97762),z=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=(0,s.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(A.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(N,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),o=n(71217),s=n(21314),l=(0,o.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},99938:function(e,t,n){n.d(t,{Z:function(){return ne}});var a=n(51436),r=n(92814),i=n(86010),o=n(67294),s=function(e){if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;for(var t=Math.floor(Math.sqrt(e)),n=5;n<=t;n+=6)if(e%n==0||e%(n+2)==0)return!1;return!0},l=function(e,t){if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);var n=(t=Math.floor(t))-e+1,a=Math.floor(Math.random()*n)+e;if(s(a))return a;for(var r=a-1,i=a+1;r>=e&&i<=t;){if(s(r))return r;if(s(i))return i;r-=1,i+=1}for(;r>=e;){if(s(r))return r;r-=1}for(;i<=t;){if(s(i))return i;i+=1}return null},c=n(96734),u=n(90896),m=n(18446),d=n.n(m),p=n(23560),f=n.n(p),h=n(14293),g=n.n(h),y=n(74524),v=n(94184),b=n.n(v),k=n(48710),N=n(2763),w=n(52017),E=n(47523),x=function(){return null};x.displayName="ZAxis",x.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var A=n(33508),S=n(36353),P=n(86641),z=n(43815),_=n(69055),C=n(77718),K=n(79896);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=B(e);if(t){var r=B(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,a,r=D(i);function i(){var e;T(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,_.EL)("recharts-scatter-"),e}return t=i,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return o.isValidElement(e)?n=o.cloneElement(e,t):f()(e)?n=e(t):"string"==typeof e&&(n=o.createElement(S.v,Z({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,a=n.shape,r=n.activeShape,s=n.activeIndex,l=(0,K.L6)(this.props);return e.map((function(e,n){var c=I(I({key:"symbol-".concat(n)},l),e);return o.createElement(k.m,Z({className:"recharts-scatter-symbol"},(0,K.bw)(t.props,e,n),{key:"symbol-".concat(n)}),i.renderSymbolItem(s===n?r:a,c))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,a=t.isAnimationActive,r=t.animationBegin,i=t.animationDuration,s=t.animationEasing,l=t.animationId,c=this.state.prevPoints;return o.createElement(y.ZP,{begin:r,duration:i,isActive:a,easing:s,from:{t:0},to:{t:1},key:"pie-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var a=t.t,r=n.map((function(e,t){var n=c&&c[t];if(n){var r=(0,_.k4)(n.cx,e.cx),i=(0,_.k4)(n.cy,e.cy),o=(0,_.k4)(n.size,e.size);return I(I({},e),{},{cx:r(a),cy:i(a),size:o(a)})}var s=(0,_.k4)(0,e.size);return I(I({},e),{},{size:s(a)})}));return o.createElement(k.m,null,e.renderSymbolsStatically(r))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,a=this.state.prevPoints;return!(n&&t&&t.length)||a&&d()(a,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,a=e.yAxis,r=e.children,i=(0,w.NN)(r,P.W.displayName);if(!i)return null;function s(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,C.F$)(e,t)}}function l(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,C.F$)(e,t)}}return i.map((function(e,r){var i=e.props.direction;return o.cloneElement(e,{key:r,data:t,xAxis:n,yAxis:a,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:"x"===i?l:s})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,a=n.points,r=n.line,i=n.lineType,s=n.lineJointType,l=(0,K.L6)(this.props),c=(0,K.L6)(r);if("joint"===i)e=a.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===i){var u=(0,_.wr)(a),m=u.xmin,d=u.xmax,p=u.a,h=u.b,g=function(e){return p*e+h};e=[{x:m,y:g(m)},{x:d,y:g(d)}]}var y=I(I(I({},l),{},{fill:"none",stroke:l&&l.fill},c),{},{points:e});return t=o.isValidElement(r)?o.cloneElement(r,y):f()(r)?r(y):o.createElement(A.H,Z({},y,{type:s})),o.createElement(k.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,a=e.line,r=e.className,i=e.xAxis,s=e.yAxis,l=e.left,c=e.top,u=e.width,m=e.height,d=e.id,p=e.isAnimationActive;if(t||!n||!n.length)return null;var f=this.state.isAnimationFinished,h=b()("recharts-scatter",r),y=i&&i.allowDataOverflow||s&&s.allowDataOverflow,v=g()(d)?this.id:d;return o.createElement(k.m,{className:h,clipPath:y?"url(#clipPath-".concat(v,")"):null},y?o.createElement("defs",null,o.createElement("clipPath",{id:"clipPath-".concat(v)},o.createElement("rect",{x:l,y:c,width:u,height:m}))):null,a&&this.renderLine(),this.renderErrorBar(),o.createElement(k.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!p||f)&&N.e.renderCallByParent(this.props,n))}}])&&R(t.prototype,n),a&&R(t,a),i}(o.PureComponent);V.displayName="Scatter",V.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!E.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},V.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,a=e.zAxis,r=e.item,i=e.displayedData,o=e.xAxisTicks,s=e.yAxisTicks,l=e.offset,c=r.props.tooltipType,u=(0,w.NN)(r.props.children,z.b.displayName),m=g()(t.dataKey)?r.props.dataKey:t.dataKey,d=g()(n.dataKey)?r.props.dataKey:n.dataKey,p=a&&a.dataKey,f=a?a.range:x.defaultProps.range,h=f&&f[0],y=t.scale.bandwidth?t.scale.bandwidth():0,v=n.scale.bandwidth?n.scale.bandwidth():0,b=i.map((function(e,i){var l=(0,C.F$)(e,m),f=(0,C.F$)(e,d),b=!g()(p)&&(0,C.F$)(e,p)||"-",k=[{name:g()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:l,payload:e,dataKey:m,type:c},{name:g()(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:f,payload:e,dataKey:d,type:c}];"-"!==b&&k.push({name:a.name||a.dataKey,unit:a.unit||"",value:b,payload:e,dataKey:p,type:c});var N=(0,C.Hv)({axis:t,ticks:o,bandSize:y,entry:e,index:i,dataKey:m}),w=(0,C.Hv)({axis:n,ticks:s,bandSize:v,entry:e,index:i,dataKey:d}),E="-"!==b?a.scale(b):h,x=Math.sqrt(Math.max(E,0)/Math.PI);return I(I({},e),{},{cx:N,cy:w,x:N-x,y:w-x,xAxis:t,yAxis:n,zAxis:a,width:2*x,height:2*x,size:E,node:{x:l,y:f,z:b},tooltipPayload:k,tooltipPosition:{x:N,y:w},payload:e},u&&u[i]&&u[i].props)}));return I({points:b},l)};var q=n(3023),H=n(75358),G=n(97187),W=(0,u.z)({chartName:"ScatterChart",GraphicalChild:V,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:q.K},{axisType:"yAxis",AxisComp:H.B},{axisType:"zAxis",AxisComp:x}],formatAxisMap:G.t9}),J=n(29009),$=n(14195),U=n(14888),Y=n(63437),Q=function(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.default)(c.Z.stage)},o.createElement("h4",null,e.label),o.createElement("span",{style:{flexGrow:1}}),o.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},o.createElement(r.G,{icon:a.zc,color:"white"}))),o.createElement("div",{className:(0,i.default)(c.Z.result)},e.result.calculations.map((function(e,t){return o.createElement("span",{className:(0,i.default)("badge","badge--secondary",c.Z.badge),key:t},e)})),o.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&o.createElement("span",{className:(0,i.default)("badge","badge--success",c.Z.badge)},o.createElement(r.G,{icon:a.SZw})," ",e.result.time_ms.toFixed(1)," ms")))},X=function(e){return e.toLocaleString().replace(/[\.,]/g,"'")},ee={calculations:[]},te=function(e){if(e<1e3)return e;var t=(""+e).length-1,n=(""+e).replace(/0*$/,""),a=n.slice(0,1),r=n.slice(1);return"1"===a?"10^"+t:r?n.slice(0,1)+"."+n.slice(1)+"\xb710^"+t:n.slice(0,1)+"\xb710^"+t},ne=function(){var e=o.useState(6),t=e[0],n=e[1],a=o.useState([0,0]),r=a[0],s=a[1],u=o.useState(0),m=u[0],d=u[1],p=o.useState(0),f=p[0],h=p[1],g=o.useState(0),y=g[0],v=g[1],b=o.useState(-1),k=b[0],N=b[1],w=o.useState([]),E=w[0],x=w[1],A=o.useState(0),S=A[0],P=A[1],z=o.useState(-1),_=z[0],C=z[1],K=o.useState(-1),M=K[0],Z=K[1],O=o.useState(0),I=O[0],j=O[1],T=o.useState(0),R=T[0],L=T[1],D=o.useState(!1);D[0],D[1],o.useRef(null);o.useEffect((function(){d(0),t<8?s([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("5".padEnd(t+1,"0"),10)]):8===t&&s([Number.parseInt("5".padEnd(t,"0"),10),Number.parseInt("1".padEnd(t+1,"0"),10)])}),[t]),o.useEffect((function(){3===m&&x([].concat(E,[{product:S,time:M}]))}),[m]);return o.createElement("div",{className:(0,i.default)("hero","shadow--lw",c.Z.container,c.Z.factorization)},o.createElement("div",{className:"container"},o.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",o.createElement("div",{className:(0,i.default)("button-group",c.Z.digits)},o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",6===t&&"button--active"),onClick:function(){return n(6)}},"6"),o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",7===t&&"button--active"),onClick:function(){return n(7)}},"7"),o.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",8===t&&"button--active"),onClick:function(){return n(8)}},"8")),"Stellen",o.createElement(Q,{onStage:function(){var e=window.performance.now(),t=l(r[0],r[1]),n=l(r[0],r[1]);h(Math.min(t,n)),v(Math.max(t,n));var a=window.performance.now()-e;N(a),d(1)},label:"Zwei Primzahlen zwische "+X(r[0])+" und "+X(r[1])+" w\xe4hlen",result:m>0?{calculations:[X(f),X(y)],time_ms:k}:ee}),m>0&&o.createElement(Q,{onStage:function(){var e=window.performance.now();P(f*y);var t=window.performance.now()-e;C(t),d(2)},label:"Primzahlprodukt berechnen: "+X(f)+" * "+X(y),result:m>1?{calculations:[X(S)],time_ms:_}:ee}),m>1&&o.createElement(Q,{onStage:function(){Z(-1);for(var e=window.performance.now(),t=2;t<S;){var n=S/t;if(n%1==0){j(t),L(n);break}2===t?t++:t+=2}var a=window.performance.now()-e;Z(a),d(3)},label:"Primzahlen faktorisieren",result:m>2?{calculations:[X(I),X(R)],time_ms:M}:ee}),E.length>0&&o.createElement("div",{style:{width:"100%",overflow:"auto"}},o.createElement(Y.Z,null,o.createElement(J.h,{width:"100%",height:400},o.createElement(W,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},o.createElement($.q,null),o.createElement(q.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:te,angle:40,textAnchor:"start"}),o.createElement(H.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),o.createElement(U.u,{cursor:{strokeDasharray:"3 3"}}),o.createElement(V,{name:"Mesurements",data:E,fill:"#8884d8"})))))))}},63437:function(e,t,n){var a=n(51436),r=n(92814),i=n(86010),o=n(14842),s=n(67294),l={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},c={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"};t.Z=function(e){var t=e.children,n=e.options,a=s.useState(void 0),u=a[0],m=a[1],d=s.useState("none"),p=d[0],f=d[1],h=s.useRef(null);return s.useEffect((function(){if(!["none","spin","ready"].includes(p)){var e=setTimeout((function(){return f("copied"===p?"ready":"none")}),2e3);return function(){return clearTimeout(e)}}}),[p]),s.useEffect((function(){"none"!==p&&f("none")}),[t]),s.createElement(s.Fragment,null,s.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",c[p]),disabled:"spin"===p,onClick:function(){if(null!==h.current){if("none"===p)return f("spin"),(0,o.SE)(h.current,n).then((function(e){m(e),f("ready")}));if("ready"===p)try{var e;navigator.clipboard.write([new ClipboardItem((e={},e["image/png"]=u,e))]).then((function(){f("copied")})).catch((function(e){f("error"),console.warn(e)}))}catch(t){console.warn(t),f("error")}}}},s.createElement(r.G,{icon:l[p]})),s.createElement("div",{ref:h,className:"copy-container"},t))}},74322:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(86010),i="loader_FEpR",o="badge_oWqf",s=n(71217),l=n(92814),c=n(51436),u=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(l.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",o)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",o="monospace_usc_",s="disableToolbar_bRdP",l=n(86010),c=n(71217),u=n(74322),m=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=a.useState(!1),c=t[0],f=t[1],h=a.useState(!1),g=h[0],y=h[1],v=a.useRef(null),b=e.model,k=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(y(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return m&&g&&b.loaded?a.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,l.default)(r)},a.createElement(m,{ref:v,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,l.default)(i,e.monospace&&o,c?void 0:s),value:b.text||"",onChange:function(t,n,a,r){var i,o;i=t,void 0===o&&(o=0),!e.readonly&&b.canUpdate&&g&&b.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(d,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(u.Z,null)}))},48107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(99938),s=n(82593),l=["components"],c={title:"Asymmetrie"},u="Asymmetrie [^1]",m={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"version-24o/Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/24o/Kryptologie/Asymmetrisch/asymmetrie",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/06-Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"24o",sidebarPosition:3,frontMatter:{title:"Asymmetrie"},sidebar:"version-24o/sidebar",previous:{title:"Geheime Farbe",permalink:"/24o/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/24o/Kryptologie/Asymmetrisch/asymm-encryption"}},d={},p=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asymmetrie-"},"Asymmetrie ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,i.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,i.kt)("p",null,"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,i.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."))),(0,i.kt)("h2",{id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,i.kt)("p",null,"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,i.kt)("p",null,"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"multiplizieren-vs-faktorisieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Multiplizieren vs. Faktorisieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Berechnen Sie ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"41"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"83")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,i.kt)("li",{parentName:"ol"},"Schaffen Sie es, die Zahl ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3397")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1117")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?")))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen einige (>3) Messungen vor."),(0,i.kt)("li",{parentName:"ol"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,i.kt)("li",{parentName:"ol"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?")),(0,i.kt)(s.Z,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,i.kt)(o.Z,{mdxType:"PrimfactorizationTiming"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=792141"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);