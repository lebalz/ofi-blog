"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[52501],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(83117),i=n(67294),r=n(72389),o=n(36162),l=n(86010),s="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,I=y.setTabGroupChoices,w=(0,i.useState)(v),Z=w[0],x=w[1],E=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==Z&&h.some((function(e){return e.value===O}))&&x(O)}var T=function(e){var t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==Z&&(N(t),x(a),null!=m&&I(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var i=E.indexOf(e.currentTarget)-1;n=E[i]||E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":u},f)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:T,onClick:T},r,{className:(0,l.default)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function u(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},84384:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},r=n(92814),o=n(51436),l=n(86010),s=function(e){return a.createElement("span",{className:i.details},a.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,l.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},a.createElement("span",{className:(0,l.default)("badge badge--secondary")},a.createElement(r.G,{icon:o.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},u=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),a.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},p=function(e){if(e.isInline)return a.createElement(u,e);var t=a.useState(!1),n=(t[0],t[1]),r=a.useState(!1),o=r[0],c=r[1],p=e.caption&&"undefined"!==e.caption,d=e.bib||p;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,l.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,a,i,r,o;t=e.currentTarget.getBoundingClientRect(),a=e.clientX,i=e.clientY,r=t.left<=a&&t.right>=a,o=t.top<=i&&t.bottom>=i,r&&o||n(!1)}},a.createElement(u,e),d&&a.createElement("figcaption",null,p&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,l.default)(i.bib,o?i.visible:void 0),onClick:function(){return c(!o)}},"@"),o&&a.createElement(s,e.bib)))}},85107:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(21073),i=n(67294),r=n(9877),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},11817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(84384),l=n(85107),s=n(58215),c=["components"],u={title:"1. Python"},p="Python installieren",d={unversionedId:"Software/python",id:"version-24i/Software/python",title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/versioned_docs/version-24i/03-Software/01-python.mdx",sourceDirName:"03-Software",slug:"/Software/python",permalink:"/24i/Software/python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/03-Software/01-python.mdx",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"1. Python"},sidebar:"version-24i/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/24i/BYOD-Basics/pruefungsfragen"},next:{title:"2. VS Code",permalink:"/24i/Software/vscode"}},m={},f=[],b={toc:f};function h(e){var t=e.components,u=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unter ",(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,r.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,r.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,r.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,r.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,r.kt)(l.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(44067).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(77862).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: Falls die Option zum Entfernen des Pfadl\xe4ngenlimits angezeigt wird: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(92826).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(69794).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(32553).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(26175).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(21226).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(64831).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:n(32502).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:n(10238).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:n(90296).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,r.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 8.",options:{},isInline:!0,src:n(84060).Z,alt:"Installationsschritt 8.",mdxType:"Image"})),(0,r.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}h.isMDXComponent=!0},32553:function(e,t,n){t.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},26175:function(e,t,n){t.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},21226:function(e,t,n){t.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},64831:function(e,t,n){t.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},32502:function(e,t,n){t.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},10238:function(e,t,n){t.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},90296:function(e,t,n){t.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},84060:function(e,t,n){t.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},44067:function(e,t,n){t.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},77862:function(e,t,n){t.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},92826:function(e,t,n){t.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},69794:function(e,t,n){t.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);