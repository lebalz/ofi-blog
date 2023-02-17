"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[71027],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,d=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?n.createElement(d,r(r({ref:e},N),{},{components:t})):n.createElement(d,r({ref:e},N))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74866:(a,e,t)=>{t.d(e,{Z:()=>w});var n=t(83117),s=t(67294),m=t(86010),r=t(12466),p=t(76775),l=t(91980),i=t(67392),N=t(50012);function o(a){return function(a){return s.Children.map(a,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:s}}=a;return{value:e,label:t,attributes:n,default:s}}))}function c(a){const{values:e,children:t}=a;return(0,s.useMemo)((()=>{const a=e??o(t);return function(a){const e=(0,i.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function k(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function d(a){let{queryString:e=!1,groupId:t}=a;const n=(0,p.k6)(),m=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._X)(m),(0,s.useCallback)((a=>{if(!m)return;const e=new URLSearchParams(n.location.search);e.set(m,a),n.replace({...n.location,search:e.toString()})}),[m,n])]}function u(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,m=c(a),[r,p]=(0,s.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:m}))),[l,i]=d({queryString:t,groupId:n}),[o,u]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,m]=(0,N.Nk)(t);return[n,(0,s.useCallback)((a=>{t&&m.set(a)}),[t,m])]}({groupId:n}),h=(()=>{const a=l??o;return k({value:a,tabValues:m})?a:null})();(0,s.useLayoutEffect)((()=>{h&&p(h)}),[h]);return{selectedValue:r,selectValue:(0,s.useCallback)((a=>{if(!k({value:a,tabValues:m}))throw new Error(`Can't select invalid tab value=${a}`);p(a),i(a),u(a)}),[i,u,m]),tabValues:m}}var h=t(72389);const g="tabList__CuJ",v="tabItem_LNqP";function y(a){let{className:e,block:t,selectedValue:p,selectValue:l,tabValues:i}=a;const N=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),c=a=>{const e=a.currentTarget,t=N.indexOf(e),n=i[t].value;n!==p&&(o(e),l(n))},k=a=>{var e;let t=null;switch(a.key){case"Enter":c(a);break;case"ArrowRight":{const e=N.indexOf(a.currentTarget)+1;t=N[e]??N[0];break}case"ArrowLeft":{const e=N.indexOf(a.currentTarget)-1;t=N[e]??N[N.length-1];break}}null==(e=t)||e.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.default)("tabs",{"tabs--block":t},e)},i.map((a=>{let{value:e,label:t,attributes:r}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,key:e,ref:a=>N.push(a),onKeyDown:k,onClick:c},r,{className:(0,m.default)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":p===e})}),t??e)})))}function b(a){let{lazy:e,children:t,selectedValue:n}=a;if(t=Array.isArray(t)?t:[t],e){const a=t.find((a=>a.props.value===n));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},t.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function f(a){const e=u(a);return s.createElement("div",{className:(0,m.default)("tabs-container",g)},s.createElement(y,(0,n.Z)({},a,e)),s.createElement(b,(0,n.Z)({},a,e)))}function w(a){const e=(0,h.Z)();return s.createElement(f,(0,n.Z)({key:String(e)},a))}},66051:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(67294),s=t(74866);class m extends n.Component{render(){return n.createElement(s.Z,{groupId:"taschenrechner",defaultValue:"ti30",values:[{label:"TI-30 eco RS",value:"ti30"},{label:"TI-30X IIS",value:"ti30X"}]},this.props.children)}}},22398:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>N});var n=t(83117),s=(t(67294),t(3905)),m=t(66051);const r={sidebar_custom_props:{id:"ad525a57-dcbe-4ecf-a668-37b40c0ab41c"}},p="Taschenrechner",l={unversionedId:"Math/Taschenrechner/index",id:"Math/Taschenrechner/index",title:"Taschenrechner",description:"Erlaubte Taschenrechner",source:"@site/docs/Math/Taschenrechner/index.md",sourceDirName:"Math/Taschenrechner",slug:"/Math/Taschenrechner/",permalink:"/Math/Taschenrechner/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Math/Taschenrechner/index.md",tags:[],version:"current",lastUpdatedAt:1659946037,formattedLastUpdatedAt:"8. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"ad525a57-dcbe-4ecf-a668-37b40c0ab41c"}},sidebar:"sidebar",previous:{title:"Black Box",permalink:"/Math/BlackBox/"},next:{title:"1. Webserver und HTTP",permalink:"/Netzwerke-ef/Server/"}},i={},N=[{value:"Winkel",id:"winkel",level:2},{value:"Umrechnung mit Minuten/Sekunden",id:"umrechnung-mit-minutensekunden",level:3},{value:"<code>DD\u25baDMS</code>",id:"dddms",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd",level:4},{value:"<code>DD\u25baDMS</code>",id:"dddms-1",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd-1",level:4}],o=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=o("Comment"),k=o("Figure"),d=o("TabItem"),u={toc:N};function h(a){let{components:e,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h1",{parentName:"div",id:"taschenrechner"},"Taschenrechner"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Erlaubte Taschenrechner"),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{style:{},className:"flex flex-cards"},(0,s.kt)("div",{parentName:"div",style:{},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",className:"commentable"},(0,s.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"TI-30 eco RS",src:t(76769).Z,width:"850",height:"1570"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"TI-30 eco RS",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,s.kt)("div",{parentName:"div",style:{},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",className:"commentable"},(0,s.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"TI-30X IIS",src:t(42842).Z,width:"853",height:"1570"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"TI-30X IIS",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h2",{parentName:"div",id:"winkel"},"Winkel"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h3",{parentName:"div",id:"umrechnung-mit-minutensekunden"},"Umrechnung mit Minuten/Sekunden"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Diese Umrechnung ist gedacht f\xfcr Winkeleinheiten (Dezimal zu Grad ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0"),", Minuten ",(0,s.kt)("inlineCode",{parentName:"p"},"'"),", Sekunden ",(0,s.kt)("inlineCode",{parentName:"p"},"''")," und umgekehrt)."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"DD")," steht f\xfcr die Dezimaleinheit (Decimal Degree), ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS")," f\xfcr Grad, Minuten, Sekunden (Degree, Minutes, Seconds)."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,s.kt)(m.Z,{mdxType:"TRTabs"},(0,s.kt)(d,{value:"ti30",mdxType:"TabItem"},(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dddms"},(0,s.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2.66"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"6"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dmsdd"},(0,s.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2.84")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.5024")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("div",{parentName:"admonition",className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Minuten und Sekunden m\xfcssen in obiger Schreibweise immer zwei Stellen aufweisen! ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"8"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3\xb0 8' 9''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),"  muss also als ",(0,s.kt)("inlineCode",{parentName:"p"},"3.0809")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")," eingegeben werden. "),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))),(0,s.kt)(d,{value:"ti30X",mdxType:"TabItem"},(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dddms-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2.66"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"6"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0 ' ''")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dmsdd-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2.84")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"50")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"'")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"24")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"''")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))))}h.isMDXComponent=!0},76769:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/TI-30-576feff68058d9fb4bc334570a233fb9.jpg"},42842:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/TI-30XIIS-d1d1fd0126bba0cefd758c9ab68c85e8.jpg"}}]);