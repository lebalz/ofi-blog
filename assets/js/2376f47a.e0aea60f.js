"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return r?l.createElement(h,s(s({ref:t},p),{},{components:r})):l.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71107:(e,t,r)=>{r.d(t,{ZP:()=>u});var l=r(87462),n=r(67294);const a={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var s=r(86010),o=r(96921);let i=function(e){return e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info",e}({});const c={[i.Holiday]:"mdi-island",[i.Event]:"mdi-calendar",[i.Test]:"mdi-school",[i.Info]:"mdi-information"};class p extends n.Component{render(){const{align:e,icon:t,date:r}=this.props;var l=this.props.value;return r&&(l=(e=>{const t=e.getDay();return n.createElement("span",{style:{fontFamily:"monospace"}},o.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(r)),n.createElement("td",{align:e},l,t?" ":"",t)}}const d=e=>{var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1};class m extends n.Component{icon(){return this.props.icon?n.createElement("i",{className:(0,s.default)(this.props.icon,"mdi")}):this.props.type?n.createElement("i",{className:(0,s.default)(c[this.props.type],"mdi")}):void 0}render(){const{type:e,cells:t}=this.props,r={className:[]};this.props.className&&r.className.push(this.props.className),e&&r.className.push(a[e]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(o=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(`${t.groups.y}-${t.groups.m}-${t.groups.d}`)})(e))&&d(new Date)===d(o)&&r.className.push(`${r.className} ${a.currentWeek}`)}return n.createElement("tr",(0,l.Z)({},r,{className:(0,s.default)(...r.className),style:{background:this.props.color}}),t.map(((e,t)=>{const r={value:e};return 0===t&&(r.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?r.align=this.props.alignments[t]:r.align="left",n.createElement(p,(0,l.Z)({},r,{key:t,date:this.props.dateIndex===t?o:void 0}))})))}}class u extends n.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return n.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,s.default)(a["ofi-table"],a[this.props.size],a[this.props.compact&&"compact"],a[this.props.celled&&"celled"],a[this.props.striped&&"striped"],a[this.props.collapsing&&"collapsing"],a[this.props.selectable&&"selectable"])},n.createElement("thead",null,this.props.header&&n.createElement("tr",null,this.props.header.map(((e,t)=>{const r=(this.props.alignments?.length||0)>t?this.props.alignments[t]:"left";return n.createElement("th",{align:r,key:t},e)})))),n.createElement("tbody",null,t.map(((t,r)=>n.createElement(m,(0,l.Z)({alignments:this.props.alignments},t,{key:r,dateIndex:e}))))))}}},50924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var l=r(87462),n=(r(67294),r(3905)),a=r(71107),s=r(96921);const o=JSON.parse('[{"cells":["10.02.2023","Codes und Daten","UTF-8, Dateien, Hexadezimal"]},{"cells":["17.02.2023","Sportwoche",""],"type":"holiday","icon":"mdi-ski"},{"cells":["24.02.2023","Codes und Daten","Auftrag: Kompression"]},{"cells":["03.03.2023","Codes und Daten","Grafikformate"]},{"cells":["10.03.2023","Codes und Daten","Anwendungen"]},{"cells":["17.03.2023","Codes und Daten","Wiederholung"]},{"cells":["24.03.2023","Codes und Daten","Test"],"type":"test"},{"cells":["31.03.2023","Codes und Daten","Anwendungen"]},{"cells":["07.04.2023","Sonderwoche","Skilager"],"type":"holiday","icon":"mdi-ski"},{"cells":["14.04.2023","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["21.04.2023","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["28.04.2023","Big Data",""]},{"cells":["05.05.2023","Big Data",""]},{"cells":["12.05.2023","Big Data",""]},{"cells":["19.05.2023","Auffahrt",""],"type":"holiday"},{"cells":["26.05.2023","Big Data",""]},{"cells":["02.06.2023","Big Data",""]},{"cells":["09.06.2023","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["16.06.2023","Big Data","Vortr\xe4ge"],"type":"test"},{"cells":["23.06.2023","Tabellenkalkulation",""]},{"cells":["29.06.2023","Notenschluss",""],"type":"event"},{"cells":["30.06.2023","Tabellenkalkulation",""]},{"cells":["08.07.2023","\ud83d\udea7",""]}]'),i=JSON.parse('[{"cells":["16.08.2022","Einstieg","ICT Einstieg"]},{"cells":["23.08.2022","ICT","BYOD Basics"]},{"cells":["30.08.2022","ICT","BYOD Basics"]},{"cells":["06.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["13.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["20.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["18.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["25.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["01.11.2022","ICT","Kurztest Office"],"type":"test"},{"cells":["08.11.2022","Informatik Biber","Wettbewerb"],"type":"event"},{"cells":["15.11.2022","Programmieren",""]},{"cells":["17.11.2022","Notenschluss Zwischenzeugnis",""],"type":"event"},{"cells":["22.11.2022","Programmieren",""]},{"cells":["29.11.2022","Programmieren",""]},{"cells":["06.12.2022","Kantonaler Fachschaftstag",""],"type":"holiday"},{"cells":["13.12.2022","Programmieren",""]},{"cells":["13.12.2022","Praktikum: A & B","Probe (schriftlich & praktisch)"],"type":"test"},{"cells":["20.12.2022","Programmieren",""]},{"cells":["27.12.2022","Winterferien",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien",""],"type":"holiday"},{"cells":["11.01.2023","Codes und Daten","Einstieg"]},{"cells":["18.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["25.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["01.02.2023","Codes und Daten","Zahlensysteme"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"},{"cells":["08.02.2023","Codes und Daten","UTF-8, Dateien, Hexadezimal"]},{"cells":["17.02.2023","Sportwoche",""],"type":"holiday","icon":"mdi-ski"}]'),c=JSON.parse('[{"cells":["16.08.2022","A","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["23.08.2022","B","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["30.08.2022","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["06.09.2022","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["13.09.2022","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["20.09.2022","Sonderwoche","",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien","",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["18.10.2022","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["25.10.2022","A","Programmieren 1","Unterprogramme und Fehler"]},{"cells":["01.11.2022","B","Programmieren 1","Unterprogramme und Fehler"]},{"cells":["08.11.2022","A","Programmieren 1","Parameter"]},{"cells":["15.11.2022","B","Programmieren 1","Parameter"]},{"cells":["22.11.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["29.11.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["06.12.2022","Kantonaler Fachschaftstag","",""],"type":"holiday"},{"cells":["13.12.2022","A & B","Programmieren","Probe (schriftlich & praktisch)"],"type":"test"},{"cells":["20.12.2022","Frei","",""],"type":"holiday"},{"cells":["27.12.2022","Winterferien","",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien","",""],"type":"holiday"},{"cells":["11.01.2023","A","Programmieren 1","Verzweigungen"]},{"cells":["18.01.2023","B","Programmieren 1","Verzweigungen"]},{"cells":["25.01.2023","A","Programmieren 1","Mini Projekt"]},{"cells":["01.02.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["25.01.2023","Notenschluss","",""],"type":"event"},{"cells":["03.02.2023","Semesterende","",""],"type":"event"}]'),p={sidebar_position:.1,sidebar_label:"26P",sidebar_custom_props:{id:"04d530dc-7809-476c-b133-7c23f7bdfae2"}},d="26P Informatik",m={unversionedId:"home",id:"version-26P/home",title:"26P Informatik",description:"<Table",source:"@site/versioned_docs/version-26P/home.md",sourceDirName:".",slug:"/home",permalink:"/26P/home",draft:!1,tags:[],version:"26P",lastUpdatedAt:1676930564,formattedLastUpdatedAt:"20. Feb. 2023",sidebarPosition:.1,frontMatter:{sidebar_position:.1,sidebar_label:"26P",sidebar_custom_props:{id:"04d530dc-7809-476c-b133-7c23f7bdfae2"}},sidebar:"version-26P/sidebar",next:{title:"Browser",permalink:"/26P/ICT-Grundlagen/Browser"}},u={},h=[],y=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=y("Comment"),f=y("Tabs"),b=y("TabItem"),v={toc:h},P="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(P,(0,l.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"26p-informatik"},"26P Informatik"),(0,n.kt)(g,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:(0,s.Fl)(),mdxType:"Table"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"1. Semester"),(0,n.kt)(f,{defaultValue:"theorie",values:[{label:"Einzellektion",value:"theorie"},{label:"Praktikum",value:"hk"}],mdxType:"Tabs"},(0,n.kt)(b,{value:"theorie",mdxType:"TabItem"},(0,n.kt)(a.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:(0,s.Fl)(),mdxType:"Table"})),(0,n.kt)(b,{value:"hk",mdxType:"TabItem"},(0,n.kt)(a.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:c,order:(0,s.Fl)(),mdxType:"Table"}))))),(0,n.kt)(g,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})))}k.isMDXComponent=!0}}]);