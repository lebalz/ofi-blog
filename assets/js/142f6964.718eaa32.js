"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,c=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(83117),r=n(67294),i=n(86010),l=n(72389),o=n(67392),s=n(7094),u=n(12466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:k,values:c,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=c?c:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===k?k:null!=(t=null!=k?k:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:z,setTabGroupChoices:y}=(0,s.U)(),[S,w]=(0,r.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=z[f];null!=e&&e!==S&&N.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=D.indexOf(t),a=N[n].value;a!==S&&(E(t),w(a),null!=f&&y(f,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=D.indexOf(e.currentTarget)+1;n=null!=(a=D[t])?a:D[0];break}case"ArrowLeft":{var r;const t=D.indexOf(e.currentTarget)-1;n=null!=(r=D[t])?r:D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":p},h)},N.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>D.push(e),onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,i.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function k(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(65488);class i extends a.Component{render(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},65648:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(91189),r=n(67294),i=n(92814);const l="videoComponent_YfiL",o="headerClosed_s_Of",s="headerOpen_AzNA",u="minimize_pBQC",m="description_p2GN",d="title_YxV5",p="cardOpen_IEP6";var k=n(51436),c=n(86010);class f extends r.Component{constructor(){super(...arguments),(0,a.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,a.Z)(this,"videoRef",r.createRef()),(0,a.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:n}=e,{innerHeight:a}=window;t<a&&n>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,a.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:n,children:a}=this.props;return r.createElement("div",{ref:this.videoRef,className:l},this.state.open?r.createElement("div",{className:p},r.createElement("div",{className:s},e&&r.createElement("h5",{className:d},e),!this.props.expanded&&r.createElement("button",{className:(0,c.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},r.createElement(i.G,{icon:k.IQi})),a&&r.createElement("div",{className:m},a)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:k.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:o},r.createElement("div",{className:d},e||"Video"),a&&r.createElement("div",{className:m},a)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:k.IJ7,spin:!0}))))}}},94040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),i=n(85107),l=(n(44996),n(65648),n(85162));n(92814);const o={},s="\u270d\ufe0f Pr\xfcfungsfragen",u={unversionedId:"byod-basics/v26/Skills/pruefungsfragen",id:"byod-basics/v26/Skills/pruefungsfragen",title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/docs/byod-basics/v26/Skills/009-pruefungsfragen.mdx",sourceDirName:"byod-basics/v26/Skills",slug:"/byod-basics/v26/Skills/pruefungsfragen",permalink:"/byod-basics/v26/Skills/pruefungsfragen",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v26/Skills/009-pruefungsfragen.mdx",tags:[],version:"current",lastUpdatedAt:1659444864,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"Software",permalink:"/byod-basics/v26/Skills/software"},next:{title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",permalink:"/byod-basics/v26/Skills/material_python"}},m={},d=[{value:"Vorbereitung",id:"vorbereitung",level:3},{value:"Pr\xfcfung",id:"pr\xfcfung",level:3},{value:"Szenario 1",id:"szenario-1",level:2},{value:"Szenario 2",id:"szenario-2",level:2},{value:"Szenario 3",id:"szenario-3",level:2},{value:"Szenario 4",id:"szenario-4",level:2},{value:"Szenario 5",id:"szenario-5",level:2},{value:"Szenario 6",id:"szenario-6",level:2},{value:"Szenario 7",id:"szenario-7",level:2},{value:"Szenario 8",id:"szenario-8",level:2},{value:"Szenario 9",id:"szenario-9",level:2},{value:"Szenario 10",id:"szenario-10",level:2},{value:"Szenario 11",id:"szenario-11",level:2},{value:"Szenario 12",id:"szenario-12",level:2},{value:"Szenario 13",id:"szenario-13",level:2},{value:"Szenario 14",id:"szenario-14",level:2},{value:"Szenario 15",id:"szenario-15",level:2},{value:"Szenario 16",id:"szenario-16",level:2},{value:"Szenario 17",id:"szenario-17",level:2},{value:"Szenario 18",id:"szenario-18",level:2},{value:"Szenario 19",id:"szenario-19",level:2},{value:"Szenario 20",id:"szenario-20",level:2},{value:"Szenario 21",id:"szenario-21",level:2},{value:"Szenario 22",id:"szenario-22",level:2},{value:"Szenario 23",id:"szenario-23",level:2},{value:"Szenario 24",id:"szenario-24",level:2},{value:"Szenario 25",id:"szenario-25",level:2},{value:"Szenario 26",id:"szenario-26",level:2},{value:"Szenario 27",id:"szenario-27",level:2},{value:"Szenario 28",id:"szenario-28",level:2},{value:"Szenario 29",id:"szenario-29",level:2},{value:"Szenario 30",id:"szenario-30",level:2}],p=(k="Figure",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var k;const c={toc:d};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,r.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,r.kt)("li",{parentName:"ul"},"Material ",(0,r.kt)("a",{target:"_blank",href:n(10687).Z},"material_byod.zip")," herunterladen"),(0,r.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,r.kt)("h3",{id:"pr\xfcfung"},"Pr\xfcfung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es werden Ihnen ",(0,r.kt)("strong",{parentName:"li"},"10")," der untenstehenden Szenarien zugelost"),(0,r.kt)("li",{parentName:"ul"},"Sie haben min. 2 Minuten Zeit, um die Fragen vorg\xe4ngig zu sortieren"),(0,r.kt)("li",{parentName:"ul"},"Die Pr\xfcfung beginnt mit einem leeren Desktop und ohne vorg\xe4ngig ge\xf6ffnete Programme.\nDie heruntergeladenen Dateien m\xfcssen im Original vorliegen und die Programme auf der Website m\xfcssen zur\xfcckgesetzt sein."),(0,r.kt)("li",{parentName:"ul"},"Sie haben ",(0,r.kt)("strong",{parentName:"li"},"5 Minuten")," Zeit, um die Szenarien vorzuzeigen"),(0,r.kt)("li",{parentName:"ul"},"F\xfcr jedes korrekt vorgezeigte Szenario erhalten Sie ",(0,r.kt)("strong",{parentName:"li"},"1 Punkt"),", f\xfcr teilweise korrekte Szenarien (bspw. Maus statt Tastatur verwendet) gibt es 0.5 Punkte.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Notenskala"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Punkte"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"))))),"\xa0",(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"szenario-1"},"Szenario 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,r.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,r.kt)("h2",{id:"szenario-2"},"Szenario 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,r.kt)("h2",{id:"szenario-3"},"Szenario 3"),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,r.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,r.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,r.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,r.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,r.kt)("h2",{id:"szenario-4"},"Szenario 4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,r.kt)("h2",{id:"szenario-5"},"Szenario 5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\xd6ffnen Sie das Bild "sonnenuntergang.jpg" und f\xfcgen Sie die Beschriftungen "Palme" und "Sonne" hinzu.')),(0,r.kt)(p,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Edited",src:n(11780).Z,width:"700",height:"495"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Edited",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Die Schriftfarbe & Gr\xf6sse kann frei gew\xe4hlt werden, sie muss aber lesbar sein.")),(0,r.kt)("h2",{id:"szenario-6"},"Szenario 6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,r.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,r.kt)("h2",{id:"szenario-7"},"Szenario 7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sonnenuntergang.docx")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"(ab jetzt nur mit der Tastatur und ohne Maus!)"),(0,r.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,r.kt)("li",{parentName:"ul"},"Den ganzen zweiten Absatz ausw\xe4hlen und l\xf6schen"),(0,r.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,r.kt)("h2",{id:"szenario-8"},"Szenario 8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datei-Explorer und das Mail-Programm \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,r.kt)("h2",{id:"szenario-9"},"Szenario 9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,r.kt)("h2",{id:"szenario-10"},"Szenario 10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen und den ganzen Code kopieren"),(0,r.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,r.kt)("h2",{id:"szenario-11"},"Szenario 11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,r.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,r.kt)("h2",{id:"szenario-12"},"Szenario 12"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,r.kt)("h2",{id:"szenario-13"},"Szenario 13"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,r.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,r.kt)("h2",{id:"szenario-14"},"Szenario 14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,r.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,r.kt)("h2",{id:"szenario-15"},"Szenario 15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen "),(0,r.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,r.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,r.kt)("li",{parentName:"ul"},"abspeichern"),(0,r.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,r.kt)("h2",{id:"szenario-16"},"Szenario 16"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,r.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,r.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,r.kt)("li",{parentName:"ul"},"abspeichern")),(0,r.kt)("h2",{id:"szenario-17"},"Szenario 17"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Nach der Zahl ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," suchen. Wie oft kommt es im Programm vor?")),(0,r.kt)("h2",{id:"szenario-18"},"Szenario 18"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,r.kt)("li",{parentName:"ul"},"Das Programm ausf\xfchren")),(0,r.kt)("h2",{id:"szenario-19"},"Szenario 19"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,r.kt)("li",{parentName:"ul"},"Programm ausf\xfchren")),(0,r.kt)("h2",{id:"szenario-20"},"Szenario 20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Absenzenheft unterschreiben lassen"')),(0,r.kt)("h2",{id:"szenario-21"},"Szenario 21"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,r.kt)("h2",{id:"szenario-22"},"Szenario 22"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,r.kt)("h2",{id:"szenario-23"},"Szenario 23"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,r.kt)("h2",{id:"szenario-24"},"Szenario 24"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,r.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2021 setzen"),(0,r.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,r.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,r.kt)("h2",{id:"szenario-25"},"Szenario 25"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,r.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,r.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,r.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,r.kt)("h2",{id:"szenario-26"},"Szenario 26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,r.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,r.kt)("h2",{id:"szenario-27"},"Szenario 27"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,r.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,r.kt)("h2",{id:"szenario-28"},"Szenario 28"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,r.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,r.kt)("h2",{id:"szenario-29"},"Szenario 29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,r.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,r.kt)("h2",{id:"szenario-30"},"Szenario 30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,r.kt)("li",{parentName:"ul"},'Online im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen'),(0,r.kt)("li",{parentName:"ul"},"\xdcberpr\xfcfen dass die Datei wieder auf Ihren Laptop synchronisiert wird.")))}f.isMDXComponent=!0},10687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/material_byod-385466718ccf495cab050182c5ea4920.zip"},11780:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sonnenuntergang_edited-4839412ca1802816f73a445aa4ad138b.jpg"}}]);