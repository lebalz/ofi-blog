"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3699],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>h});var r=l(67294);function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,s=function(e,t){if(null==e)return{};var l,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(s[l]=e[l]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(s[l]=e[l])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(l),h=s,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||n;return l?r.createElement(u,a(a({ref:t},p),{},{components:l})):r.createElement(u,a({ref:t},p))}));function h(e,t){var l=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=l.length,a=new Array(n);a[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<n;c++)a[c]=l[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},71107:(e,t,l)=>{l.d(t,{ZP:()=>h});var r=l(83117),s=l(67294);const n={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var a=l(86010),o=l(96921);let i;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(i||(i={}));const c={[i.Holiday]:"mdi-island",[i.Event]:"mdi-calendar",[i.Test]:"mdi-school",[i.Info]:"mdi-information"};class p extends s.Component{render(){const{align:e,icon:t,date:l}=this.props;var r=this.props.value;return l&&(r=(e=>{const t=e.getDay();return s.createElement("span",{style:{fontFamily:"monospace"}},o.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(l)),s.createElement("td",{align:e},r,t?" ":"",t)}}const d=e=>{var t=new Date(e.getFullYear(),0,1),l=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(l/7)+1};class m extends s.Component{icon(){return this.props.icon?s.createElement("i",{className:(0,a.default)(this.props.icon,"mdi")}):this.props.type?s.createElement("i",{className:(0,a.default)(c[this.props.type],"mdi")}):void 0}render(){const{type:e,cells:t}=this.props,l={className:[]};this.props.className&&l.className.push(this.props.className),e&&l.className.push(n[e]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(o=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&d(new Date)===d(o)&&l.className.push(l.className+" "+n.currentWeek)}return s.createElement("tr",(0,r.Z)({},l,{className:(0,a.default)(...l.className),style:{background:this.props.color}}),t.map(((e,t)=>{const l={value:e};return 0===t&&(l.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?l.align=this.props.alignments[t]:l.align="left",s.createElement(p,(0,r.Z)({},l,{key:t,date:this.props.dateIndex===t?o:void 0}))})))}}class h extends s.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return s.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,a.default)(n["ofi-table"],n[this.props.size],n[this.props.compact&&"compact"],n[this.props.celled&&"celled"],n[this.props.striped&&"striped"],n[this.props.collapsing&&"collapsing"],n[this.props.selectable&&"selectable"])},s.createElement("thead",null,this.props.header&&s.createElement("tr",null,this.props.header.map(((e,t)=>{var l;const r=((null==(l=this.props.alignments)?void 0:l.length)||0)>t?this.props.alignments[t]:"left";return s.createElement("th",{align:r,key:t},e)})))),s.createElement("tbody",null,t.map(((t,l)=>s.createElement(m,(0,r.Z)({alignments:this.props.alignments},t,{key:l,dateIndex:e}))))))}}},55618:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=l(83117),s=(l(67294),l(3905)),n=l(71107),a=l(96921);const o=JSON.parse('[{"cells":["04.02.2022","Codes und Daten","Textcodierung"]},{"cells":["11.02.2022","Codes und Daten","Farbdarstellung"]},{"cells":["18.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["25.02.2022","Codes und Daten","Grafikformate"]},{"cells":["04.03.2022","Codes und Daten","Kompression"]},{"cells":["11.03.2022","Codes und Daten","Anwendungen"]},{"cells":["18.03.2022","Codes und Daten","Wiederholung"]},{"cells":["25.03.2022","Codes und Daten","Test"],"type":"test"},{"cells":["01.04.2022","Codes und Daten","QR Codes"]},{"cells":["08.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["15.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["22.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["29.04.2022","Big Data","Gesellschaft"]},{"cells":["06.05.2022","Big Data","Pr\xe4sentieren"]},{"cells":["13.05.2022","Big Data","Gesellschaft - Gruppendiskussion"]},{"cells":["20.05.2022","Big Data","Gesellschaft"]},{"cells":["27.05.2022","Auffahrt",""],"type":"holiday"},{"cells":["03.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["10.06.2022","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["17.06.2022","Sportwoche",""],"type":"holiday"},{"cells":["24.06.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Tabellenkalkulation",""]},{"cells":["01.07.2022","Filmanlass",""],"type":"event"},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["08.07.2022","Schulschluss",""],"type":"holiday"}]'),i=JSON.parse('[{"cells":["17.08.2022","Netzwerke","Schichtenmodell, TCP/IP"]},{"cells":["24.08.2022","Netzwerke","Routing, IP-Adresse, Codierung"]},{"cells":["31.08.2022","Netzwerke","Routing & DNS"]},{"cells":["07.09.2022","Netzwerke","Protokolle, World Wide Web"]},{"cells":["14.09.2022","Netzwerke","Workshop"]},{"cells":["21.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["28.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["05.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["12.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["19.10.2022","Netzwerke","Wiederholung"]},{"cells":["26.10.2022","Netzwerke","Test"],"type":"test"},{"cells":["02.11.2022","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{"cells":["09.11.2022","Informatik Biber","Wettbewerb"],"type":"event"},{"cells":["09.11.2022","Kryptologie","Symmetrische Verschl\xfcsselung"]},{"cells":["16.11.2022","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{"cells":["23.11.2022","Kryptologie","Hashfunktion"]},{"cells":["30.11.2022","Kryptologie","Digitale Signaturen"]},{"cells":["07.12.2022","Kryptologie","Kryptologie im Alltag"]},{"cells":["14.12.2022","Kryptologie","Test"],"type":"test"},{"cells":["21.12.2022","Kryptologie","Steganographie"]},{"cells":["28.12.2022","Winterferien",""],"type":"holiday"},{"cells":["05.01.2023","Winterferien",""],"type":"holiday"},{"cells":["12.01.2023","Programmieren 2","Listen & Game"]},{"cells":["19.01.2023","Programmieren 2","Game"]},{"cells":["26.01.2023","Programmieren 2","Game"]},{"cells":["02.02.2023","Programmieren 2","Game"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]'),c={sidebar_position:1,sidebar_custom_props:{id:"faa81cc5-916a-4b17-a706-0859599cad86"}},p="25h",d={unversionedId:"home",id:"version-25h/home",title:"25h",description:"<Table",source:"@site/versioned_docs/version-25h/home.mdx",sourceDirName:".",slug:"/home",permalink:"/25h/home",draft:!1,tags:[],version:"25h",lastUpdatedAt:1672661320,formattedLastUpdatedAt:"2. Jan. 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_custom_props:{id:"faa81cc5-916a-4b17-a706-0859599cad86"}},sidebar:"version-25h/sidebar",next:{title:"BYOD v25",permalink:"/25h/category/byod-v25"}},m={},h=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},y=u("Comment"),g=u("Tabs"),f=u("TabItem"),b={toc:h};function v(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,r.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h1",{parentName:"div",id:"25h"},"25h"),(0,s.kt)(y,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,s.kt)(n.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:(0,a.Fl)(),mdxType:"Table"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("div",{parentName:"div"},(0,s.kt)("details",{parentName:"div"},(0,s.kt)("summary",{parentName:"details"},"1. Semester"),(0,s.kt)(g,{defaultValue:"theorie",values:[{label:"Einzellektion",value:"theorie"},{label:"Praktikum",value:"hk"}],mdxType:"Tabs"},(0,s.kt)(f,{value:"theorie",mdxType:"TabItem"},(0,s.kt)(n.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["20.08.2021","Einstieg","ICT Einstieg"]},{cells:["27.08.2021","ICT","BYOD-Basics"]},{cells:["03.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["10.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["17.09.2021","ICT","Office: Layout und Gliederung"]},{cells:["24.09.2021","ICT","Kurztest Office"],type:"test"},{cells:["01.10.2021","Klassenwoche Leukerbad",""],type:"holiday"},{cells:["08.10.2021","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["29.10.2021","Codes und Daten","Zahlensysteme"]},{cells:["05.11.2021","Codes und Daten","Zahlensysteme"]},{cells:["12.11.2021","Codes und Daten","Farbdarstellung"]},{cells:["19.11.2021","Codes und Daten","Textcodierung"]},{cells:["03.12.2021","Codes und Daten","Textcodierung"]},{cells:["10.12.2021","Codes und Daten","QR Codes"]},{cells:["17.12.2021","Codes und Daten","Grafikformate"]},{cells:["24.12.2021","Winterferien",""],type:"holiday"},{cells:["31.12.2021","Winterferien",""],type:"holiday"},{cells:["07.01.2022","Winterferien",""],type:"holiday"},{cells:["14.01.2022","Codes und Daten","Anwendungen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["21.01.2022","Codes und Daten","Anwendungen"]},{cells:["28.01.2022","Codes und Daten","Test (schriftlich)"],type:"test"}],mdxType:"Table"})),(0,s.kt)(f,{value:"hk",mdxType:"TabItem"},(0,s.kt)(n.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","","Erster Schultag",""],type:"holiday"},{cells:["23.08.2021","A","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["30.08.2021","B","Programmieren 1","Algorithmen & RoboZZle"]},{cells:["06.09.2021","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["13.09.2021","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{cells:["20.09.2021","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.10.2021","","Klassenwoche",""],type:"holiday"},{cells:["08.10.2021","","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","","Start BYOD Pr\xfcfungen",""],type:"test"},{cells:["25.10.2021","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{cells:["01.11.2021","A","Programmieren 1","Unterprogramme"]},{cells:["08.11.2021","B","Programmieren 1","Unterprogramme"]},{cells:["15.11.2021","A","Programmieren 1","Parameter"]},{cells:["22.11.2021","B","Programmieren 1","Parameter"]},{cells:["29.11.2021","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["06.12.2021","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{cells:["13.12.2021","A & B","Test Biologie",""],type:"event"},{cells:["20.12.2021","A & B","Test Programmieren 1","Schriftlich & Praktisch"],type:"test"},{cells:["24.12.2021","","Winterferien",""],type:"holiday"},{cells:["31.12.2021","","Winterferien",""],type:"holiday"},{cells:["03.01.2022","","Winterferien",""],type:"holiday"},{cells:["10.01.2022","A","\ud83d\udea7",""]},{cells:["17.01.2022","B","\ud83d\udea7",""]},{cells:["19.01.2022","","Notenschluss",""],type:"event"},{cells:["24.01.2022","A","\ud83d\udea7",""]}],mdxType:"Table"}))))),(0,s.kt)(y,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("div",{parentName:"div"},(0,s.kt)("details",{parentName:"div"},(0,s.kt)("summary",{parentName:"details"},"2. Semester"),(0,s.kt)(n.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:(0,a.Fl)(),mdxType:"Table"}))),(0,s.kt)(y,{parentName:"div",type:"detailsWrapper",nr:1,mdxType:"Comment"})))}v.isMDXComponent=!0}}]);