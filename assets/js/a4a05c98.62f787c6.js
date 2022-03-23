"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[63302],{58215:function(a,e,t){t.d(e,{Z:function(){return s}});var n=t(67294);function s(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},9877:function(a,e,t){t.d(e,{Z:function(){return N}});var n=t(83117),s=t(67294),m=t(72389),p=t(5522),r=t(86010),l="tabItem_LplD";function i(a){var e,t,m,i=a.lazy,N=a.block,o=a.defaultValue,c=a.values,k=a.groupId,d=a.className,h=s.Children.map(a.children,(function(a){if((0,s.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),u=null!=c?c:h.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,p.lx)(u,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===o?o:null!=(e=null!=o?o:null==(t=h.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(m=h[0])?void 0:m.props.value;if(null!==v&&!u.some((function(a){return a.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+u.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,p.UB)(),f=w.tabGroupChoices,b=w.setTabGroupChoices,y=(0,s.useState)(v),x=y[0],D=y[1],M=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var C=f[k];null!=C&&C!==x&&u.some((function(a){return a.value===C}))&&D(C)}var z=function(a){var e=a.currentTarget,t=M.indexOf(e),n=u[t].value;n!==x&&(T(e),D(n),null!=k&&b(k,n))},S=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=M.indexOf(a.currentTarget)+1;t=M[n]||M[0];break;case"ArrowLeft":var s=M.indexOf(a.currentTarget)-1;t=M[s]||M[M.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":N},d)},u.map((function(a){var e=a.value,t=a.label,m=a.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(a){return M.push(a)},onKeyDown:S,onFocus:z,onClick:z},m,{className:(0,r.default)("tabs__item",l,null==m?void 0:m.className,{"tabs__item--active":x===e})}),null!=t?t:e)}))),i?(0,s.cloneElement)(h.filter((function(a){return a.props.value===x}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map((function(a,e){return(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})}))))}function N(a){var e=(0,m.Z)();return s.createElement(i,(0,n.Z)({key:String(e)},a))}},66051:function(a,e,t){t.d(e,{Z:function(){return p}});var n=t(21073),s=t(67294),m=t(9877),p=function(a){function e(){return a.apply(this,arguments)||this}return(0,n.Z)(e,a),e.prototype.render=function(){return s.createElement(m.Z,{groupId:"taschenrechner",defaultValue:"ti30",values:[{label:"TI-30 eco RS",value:"ti30"},{label:"TI-30X IIS",value:"ti30X"}]},this.props.children)},e}(s.Component)},35656:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return N},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return k},toc:function(){return d},default:function(){return u}});var n=t(83117),s=t(80102),m=(t(67294),t(3905)),p=t(84384),r=t(66051),l=t(58215),i=["components"],N={title:"Taschenrechner"},o=void 0,c={unversionedId:"Math/Taschenrechner/index",id:"version-25h/Math/Taschenrechner/index",title:"Taschenrechner",description:"Erlaubte Taschenrechner",source:"@site/versioned_docs/version-25h/Math/Taschenrechner/index.md",sourceDirName:"Math/Taschenrechner",slug:"/Math/Taschenrechner/",permalink:"/25h/Math/Taschenrechner/",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/Math/Taschenrechner/index.md",tags:[],version:"25h",frontMatter:{title:"Taschenrechner"},sidebar:"version-25h/sidebar",previous:{title:"Black Box",permalink:"/25h/Math/BlackBox/"}},k={},d=[{value:"Winkel",id:"winkel",level:2},{value:"Umrechnung mit Minuten/Sekunden",id:"umrechnung-mit-minutensekunden",level:3},{value:"<code>DD\u25baDMS</code>",id:"dddms",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd",level:4},{value:"<code>DD\u25baDMS</code>",id:"dddms-1",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd-1",level:4}],h={toc:d};function u(a){var e=a.components,N=(0,s.Z)(a,i);return(0,m.kt)("wrapper",(0,n.Z)({},h,N,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Erlaubte Taschenrechner"),(0,m.kt)("div",{style:{},className:"flex flex-cards"},(0,m.kt)("div",{parentName:"div",style:{},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,m.kt)(p.Z,{bib:void 0,caption:"TI-30 eco RS",options:{},isInline:!1,src:t(12863).Z,alt:"TI-30 eco RS",mdxType:"Image"})))),(0,m.kt)("div",{parentName:"div",style:{},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,m.kt)(p.Z,{bib:void 0,caption:"TI-30X IIS",options:{},isInline:!1,src:t(84196).Z,alt:"TI-30X IIS",mdxType:"Image"}))))),(0,m.kt)("h2",{id:"winkel"},"Winkel"),(0,m.kt)("h3",{id:"umrechnung-mit-minutensekunden"},"Umrechnung mit Minuten/Sekunden"),(0,m.kt)("p",null,"Diese Umrechnung ist gedacht f\xfcr Winkeleinheiten (Dezimal zu Grad ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0"),", Minuten ",(0,m.kt)("inlineCode",{parentName:"p"},"'"),", Sekunden ",(0,m.kt)("inlineCode",{parentName:"p"},"''")," und umgekehrt)."),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"DD")," steht f\xfcr die Dezimaleinheit (Decimal Degree), ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS")," f\xfcr Grad, Minuten, Sekunden (Degree, Minutes, Seconds)."),(0,m.kt)(r.Z,{mdxType:"TRTabs"},(0,m.kt)(l.Z,{value:"ti30",mdxType:"TabItem"},(0,m.kt)("h4",{id:"dddms"},(0,m.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2.66"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"6"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DD\u25baDMS")),(0,m.kt)("h4",{id:"dmsdd"},(0,m.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"4"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2.84")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.5024")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")),(0,m.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Danger")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Minuten und Sekunden m\xfcssen in obiger Schreibweise immer zwei Stellen aufweisen! ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"8"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3\xb0 8' 9''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),"  muss also als ",(0,m.kt)("inlineCode",{parentName:"p"},"3.0809")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")," eingegeben werden. ")))),(0,m.kt)(l.Z,{value:"ti30X",mdxType:"TabItem"},(0,m.kt)("h4",{id:"dddms-1"},(0,m.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2.66"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"9"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"6"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0 ' ''")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\u25baDMS")),(0,m.kt)("h4",{id:"dmsdd-1"},(0,m.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,m.kt)("p",null,"Beispiel: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"4"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,m.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"2.84")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"4"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,m.kt)("p",null,"Eingabe: ",(0,m.kt)("inlineCode",{parentName:"p"},"2")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"\xb0")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"50")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"'")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"24")," > ",(0,m.kt)("inlineCode",{parentName:"p"},"''")))))}u.isMDXComponent=!0},12863:function(a,e,t){e.Z=t.p+"assets/images/TI-30-576feff68058d9fb4bc334570a233fb9.jpg"},84196:function(a,e,t){e.Z=t.p+"assets/images/TI-30XIIS-d1d1fd0126bba0cefd758c9ab68c85e8.jpg"}}]);