"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[37666],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,k=p["".concat(u,".").concat(c)]||p[c]||d[c]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),r=t(67294),i=t(72389),l=t(36162),o=t(86010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,m=e.block,d=e.defaultValue,p=e.values,c=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),N=b.tabGroupChoices,z=b.setTabGroupChoices,y=(0,r.useState)(v),S=y[0],D=y[1],E=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=N[c];null!=O&&O!==S&&h.some((function(e){return e.value===O}))&&D(O)}var P=function(e){var n=e.currentTarget,t=E.indexOf(n),a=h[t].value;a!==S&&(w(n),D(a),null!=c&&z(c,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":m},k)},h.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:P,onClick:P},i,{className:(0,o.default)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function m(e){var n=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},84384:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=t(92814),l=t(51436),o=t(86010),u=function(e){return a.createElement("span",{className:r.details},a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),a.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&a.createElement("span",{className:(0,o.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),a.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},a.createElement("span",{className:(0,o.default)("badge badge--secondary")},a.createElement(i.G,{icon:l.Xjp}))))},s=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},m=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+s(t.size)+")",n.maxHeight=s(t.size),delete t.size),t.height&&(n.maxHeight=s(t.height),n.height=s(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+s(t.width)+")",n.width=s(t.width),delete t.width),n=Object.assign({},n,t),a.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return a.createElement(m,e);var n=a.useState(!1),t=(n[0],n[1]),i=a.useState(!1),l=i[0],s=i[1],d=e.caption&&"undefined"!==e.caption,p=e.bib||d;return e.options.noMargins&&!0,a.createElement("figure",{className:(0,o.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,a,r,i,l;n=e.currentTarget.getBoundingClientRect(),a=e.clientX,r=e.clientY,i=n.left<=a&&n.right>=a,l=n.top<=r&&n.bottom>=r,i&&l||t(!1)}},a.createElement(m,e),p&&a.createElement("figcaption",null,d&&a.createElement("span",null,e.caption),e.bib&&a.createElement("span",{className:(0,o.default)(r.bib,l?r.visible:void 0),onClick:function(){return s(!l)}},"@"),l&&a.createElement(u,e.bib)))}},85107:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(21073),r=t(67294),i=t(9877),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,a.Z)(n,e),n.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},65648:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(44415),r=t(21073),i=t(91189),l=t(67294),o=t(92814),u="videoComponent_YfiL",s="headerClosed_s_Of",m="headerOpen_AzNA",d="minimize_pBQC",p="description_p2GN",c="title_YxV5",k="cardOpen_IEP6",f=t(51436),h=t(86010),g=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return n=e.call.apply(e,[this].concat(r))||this,(0,i.Z)((0,a.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,i.Z)((0,a.Z)(n),"videoRef",l.createRef()),(0,i.Z)((0,a.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),t=e.top,a=e.bottom;t<window.innerHeight&&a>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,i.Z)((0,a.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,r.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},t.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},t.render=function(){var e=this.props,n=e.title,t=e.src,a=e.type,r=e.children;return l.createElement("div",{ref:this.videoRef,className:u},this.state.open?l.createElement("div",{className:k},l.createElement("div",{className:m},n&&l.createElement("h5",{className:c},n),!this.props.expanded&&l.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},l.createElement(o.G,{icon:f.IQi})),r&&l.createElement("div",{className:p},r)),this.state.visible?l.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},l.createElement("source",{src:t,type:"video/"+(a||"mp4")})):l.createElement("div",{style:{height:"150px"}},l.createElement(o.G,{icon:f.IJ7,spin:!0}))):l.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},l.createElement("div",{className:s},l.createElement("div",{className:c},n||"Video"),r&&l.createElement("div",{className:p},r)),this.state.visible?l.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},l.createElement("source",{src:t,type:"video/"+(a||"mp4")})):l.createElement("div",{style:{height:"150px"}},l.createElement(o.G,{icon:f.IJ7,spin:!0}))))},n}(l.Component)},84340:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=t(84384),o=t(85107),u=(t(44996),t(65648),t(58215)),s=(t(92814),["components"]),m={},d="\u270d\ufe0f Pr\xfcfungsfragen",p={unversionedId:"BYOD-Basics/Skills/pruefungsfragen",id:"version-25h/BYOD-Basics/Skills/pruefungsfragen",title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/009-pruefungsfragen.mdx",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/pruefungsfragen",permalink:"/25h/BYOD-Basics/Skills/pruefungsfragen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/009-pruefungsfragen.mdx",tags:[],version:"25h",sidebarPosition:9,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"Software",permalink:"/25h/BYOD-Basics/Skills/software"},next:{title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",permalink:"/25h/BYOD-Basics/Skills/material_python"}},c={},k=[{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Pr\xfcfung",id:"pr\xfcfung",level:3},{value:"Szenario 1",id:"szenario-1",level:2},{value:"Szenario 2",id:"szenario-2",level:2},{value:"Szenario 3",id:"szenario-3",level:2},{value:"Szenario 4",id:"szenario-4",level:2},{value:"Szenario 5",id:"szenario-5",level:2},{value:"Szenario 6",id:"szenario-6",level:2},{value:"Szenario 7",id:"szenario-7",level:2},{value:"Szenario 8",id:"szenario-8",level:2},{value:"Szenario 9",id:"szenario-9",level:2},{value:"Szenario 10",id:"szenario-10",level:2},{value:"Szenario 11",id:"szenario-11",level:2},{value:"Szenario 12",id:"szenario-12",level:2},{value:"Szenario 13",id:"szenario-13",level:2},{value:"Szenario 14",id:"szenario-14",level:2},{value:"Szenario 15",id:"szenario-15",level:2},{value:"Szenario 16",id:"szenario-16",level:2},{value:"Szenario 17",id:"szenario-17",level:2},{value:"Szenario 18",id:"szenario-18",level:2},{value:"Szenario 19",id:"szenario-19",level:2},{value:"Szenario 20",id:"szenario-20",level:2},{value:"Szenario 21",id:"szenario-21",level:2},{value:"Szenario 22",id:"szenario-22",level:2},{value:"Szenario 23",id:"szenario-23",level:2},{value:"Szenario 24",id:"szenario-24",level:2},{value:"Szenario 25",id:"szenario-25",level:2},{value:"Szenario 26",id:"szenario-26",level:2},{value:"Szenario 27",id:"szenario-27",level:2},{value:"Szenario 28",id:"szenario-28",level:2},{value:"Szenario 29",id:"szenario-29",level:2},{value:"Szenario 30",id:"szenario-30",level:2}],f={toc:k};function h(e){var n=e.components,m=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,m,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,i.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,i.kt)("li",{parentName:"ul"},"Material ",(0,i.kt)("a",{target:"_blank",href:t(10687).Z},"material_byod.zip")," herunterladen"),(0,i.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,i.kt)("h3",{id:"pr\xfcfung"},"Pr\xfcfung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es werden Ihnen ",(0,i.kt)("strong",{parentName:"li"},"10")," der untenstehenden Szenarien zugelost"),(0,i.kt)("li",{parentName:"ul"},"Sie haben min. 2 Minuten Zeit, um die Fragen vorg\xe4ngig zu sortieren"),(0,i.kt)("li",{parentName:"ul"},"Die Pr\xfcfung beginnt mit einem leeren Desktop und ohne vorg\xe4ngig ge\xf6ffnete Programme.\nDie heruntergeladenen Dateien m\xfcssen im Original vorliegen und die Programme auf der Website m\xfcssen zur\xfcckgesetzt sein."),(0,i.kt)("li",{parentName:"ul"},"Sie haben ",(0,i.kt)("strong",{parentName:"li"},"5 Minuten")," Zeit, um die Szenarien vorzuzeigen"),(0,i.kt)("li",{parentName:"ul"},"F\xfcr jedes korrekt vorgezeigte Szenario erhalten Sie ",(0,i.kt)("strong",{parentName:"li"},"1 Punkt"),", f\xfcr teilweise korrekte Szenarien (bspw. Maus statt Tastatur verwendet) gibt es 0.5 Punkte.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Notenskala"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Punkte"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"9.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"7.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1"))))),"\xa0",(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"szenario-1"},"Szenario 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,i.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,i.kt)("h2",{id:"szenario-2"},"Szenario 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,i.kt)("h2",{id:"szenario-3"},"Szenario 3"),(0,i.kt)(o.Z,{mdxType:"OsTabs"},(0,i.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,i.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,i.kt)("h2",{id:"szenario-4"},"Szenario 4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,i.kt)("h2",{id:"szenario-5"},"Szenario 5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\xd6ffnen Sie das Bild "sonnenuntergang.jpg" und f\xfcgen Sie die Beschriftungen "Palme" und "Sonne" hinzu.')),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Edited",options:{},isInline:!1,src:t(11780).Z,alt:"Edited",mdxType:"Image"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Die Schriftfarbe & Gr\xf6sse kann frei gew\xe4hlt werden, sie muss aber lesbar sein.")),(0,i.kt)("h2",{id:"szenario-6"},"Szenario 6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,i.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,i.kt)("h2",{id:"szenario-7"},"Szenario 7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sonnenuntergang.docx")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur mit der Tastatur und ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},"Den ganzen zweiten Absatz ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,i.kt)("h2",{id:"szenario-8"},"Szenario 8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Datei-Explorer und das Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,i.kt)("h2",{id:"szenario-9"},"Szenario 9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,i.kt)("h2",{id:"szenario-10"},"Szenario 10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen und den ganzen Code kopieren"),(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-11"},"Szenario 11"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,i.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,i.kt)("h2",{id:"szenario-12"},"Szenario 12"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,i.kt)("h2",{id:"szenario-13"},"Szenario 13"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,i.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-14"},"Szenario 14"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,i.kt)("h2",{id:"szenario-15"},"Szenario 15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen "),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"abspeichern"),(0,i.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,i.kt)("h2",{id:"szenario-16"},"Szenario 16"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,i.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,i.kt)("li",{parentName:"ul"},"abspeichern")),(0,i.kt)("h2",{id:"szenario-17"},"Szenario 17"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Nach der Zahl ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," suchen. Wie oft kommt es im Programm vor?")),(0,i.kt)("h2",{id:"szenario-18"},"Szenario 18"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,i.kt)("li",{parentName:"ul"},"Das Programm ausf\xfchren")),(0,i.kt)("h2",{id:"szenario-19"},"Szenario 19"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,i.kt)("li",{parentName:"ul"},"Programm ausf\xfchren")),(0,i.kt)("h2",{id:"szenario-20"},"Szenario 20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Absenzenheft unterschreiben lassen"')),(0,i.kt)("h2",{id:"szenario-21"},"Szenario 21"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-22"},"Szenario 22"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-23"},"Szenario 23"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-24"},"Szenario 24"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,i.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2021 setzen"),(0,i.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,i.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-25"},"Szenario 25"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,i.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,i.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,i.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,i.kt)("h2",{id:"szenario-26"},"Szenario 26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,i.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,i.kt)("h2",{id:"szenario-27"},"Szenario 27"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,i.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,i.kt)("h2",{id:"szenario-28"},"Szenario 28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,i.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-29"},"Szenario 29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,i.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,i.kt)("h2",{id:"szenario-30"},"Szenario 30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},'Online im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen'),(0,i.kt)("li",{parentName:"ul"},"\xdcberpr\xfcfen dass die Datei wieder auf Ihren Laptop synchronisiert wird.")))}h.isMDXComponent=!0},10687:function(e,n,t){n.Z=t.p+"assets/files/material_byod-385466718ccf495cab050182c5ea4920.zip"},11780:function(e,n,t){n.Z=t.p+"assets/images/sonnenuntergang_edited-4839412ca1802816f73a445aa4ad138b.jpg"},44415:function(e,n,t){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return a}})}}]);