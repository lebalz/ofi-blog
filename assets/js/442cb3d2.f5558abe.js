"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62867],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(667294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},163432:function(e,t,r){r.d(t,{ZP:function(){return b}});var n,l,o=r(487462),s=r(970804),i=r(894578),a=r(667294),c=r(592814),p=r(51436),u={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},d=r(386010),m=r(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(l||(l={}));var h=((n={})[l.Holiday]=p.skR,n[l.Event]=p.$nv,n[l.Test]=p.Xf_,n[l.Info]=p.YHc,n),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,r=e.icon,n=e.date,l=this.props.value;return n&&(l=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},m.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(n)),a.createElement("td",{align:t},l,r?" ":"",r)},t}(a.Component),y=function(e){var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var r=t.prototype;return r.icon=function(){if(this.props.type)return a.createElement(c.G,{icon:h[this.props.type]})},r.render=function(){var e=this,t=this.props,r=t.type,n=t.cells,l={className:[]};this.props.className&&l.className.push(this.props.className),r&&l.className.push(u[r]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=n[this.props.dateIndex];"string"==typeof c&&(i=function(e){var t=e.match((0,s.Z)(/(\d+)\.(\d+)\.(\d+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&y(new Date)===y(i)&&l.className.push(l.className+" "+u.currentWeek)}return a.createElement("tr",(0,o.Z)({},l,{className:d.default.apply(void 0,l.className)}),n.map((function(t,r){var n={value:t};return 0===r&&(n.icon=e.icon()),e.props.alignments&&e.props.alignments.length>r?n.align=e.props.alignments[r]:n.align="left",a.createElement(f,(0,o.Z)({},n,{key:r,date:e.props.dateIndex===r?i:void 0}))})))},t}(a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum"),r=this.props.order?this.props.order(this.props.rows):this.props.rows;return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,d.default)(u["ofi-table"],u[this.props.size],u[this.props.compact&&"compact"],u[this.props.celled&&"celled"],u[this.props.striped&&"striped"],u[this.props.collapsing&&"collapsing"],u[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,r){var n,l=((null==(n=e.props.alignments)?void 0:n.length)||0)>r?e.props.alignments[r]:"left";return a.createElement("th",{align:l,key:r},t)})))),a.createElement("tbody",null,r.map((function(r,n){return a.createElement(g,(0,o.Z)({alignments:e.props.alignments},r,{key:n,dateIndex:t}))}))))},t}(a.Component)},339801:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var n=r(487462),l=r(263366),o=(r(667294),r(603905)),s=r(163432),i=JSON.parse('[{"cells":["24.01.2022","Computer","Logische Schaltungen 1"]},{"cells":["31.01.2022","Computer","Logische Schaltungen 2"]},{"cells":["07.02.2022","Computer","Logische Schaltungen 2"]},{"cells":["14.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["21.02.2022","Computer","Video erstellen: Halbaddierer"]},{"cells":["28.02.2022","Computer","Video finalisieren&schneiden"]},{"cells":["07.03.2022","Computer","Video finalisieren&schneiden"]},{"cells":["13.03.2022","Videoabgabe",""],"type":"test"},{"cells":["14.03.2022","Computer","Rechnerarchitektur & Betriebssysteme"]},{"cells":["21.03.2022","Computer",""]},{"cells":["28.03.2022","Computer",""]},{"cells":["04.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["11.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["18.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["25.04.2022","Codes und Daten","Kompression"]},{"cells":["02.05.2022","Bilder","Urheberrecht & Grafikformate"]},{"cells":["09.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["16.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["23.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["30.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["06.06.2022","Pfingsten",""],"type":"holiday"},{"cells":["13.06.2022","Pr\xe4ventionswoche",""],"type":"holiday"},{"cells":["20.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["22.06.2022","Projektabgabe bis 20:00 Uhr",""],"type":"test"},{"cells":["27.06.2022","Projekt Austauschen",""]},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["04.07.2022","\ud83d\udea7",""]}]'),a=r(96921),c=["components"],p={sidebar_position:1},u="24i",d={unversionedId:"home",id:"version-24i/home",title:"24i",description:"<Table",source:"@site/versioned_docs/version-24i/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24i/home",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/home.mdx",tags:[],version:"24i",lastUpdatedAt:1651741308,formattedLastUpdatedAt:"5.5.2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24i/sidebar",next:{title:"BYOD Basics",permalink:"/24i/category/byod-basics"}},m={},h=[],f={toc:h};function y(e){var t=e.components,r=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"24i"},"24i"),(0,o.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:a.Fl,mdxType:"Table"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"3. Semester"),(0,o.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["17.08.2021","Netzwerk","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["24.08.2021","Netzwerk","Codierung, IP-Adresse"]},{cells:["31.08.2021","Netzwerk","Routing & DNS"]},{cells:["07.09.2021","Netzwerk","Protokolle, World Wide Web"]},{cells:["14.09.2021","Netzwerk","Workshop"]},{cells:["21.09.2021","Netzwerk","Test"],type:"test"},{cells:["28.09.2021","Umweltwoche",""],type:"holiday"},{cells:["05.10.2021","Herbstferien",""],type:"holiday"},{cells:["12.10.2021","Herbstferien",""],type:"holiday"},{cells:["19.10.2021","Herbstferien",""],type:"holiday"},{cells:["26.10.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["02.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["09.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["16.11.2021","Kryptologie","Hashfunktion"]},{cells:["23.11.2021","Kryptologie","Digitale Signaturen"]},{cells:["30.11.2021","Kryptologie","Kryptologie im Alltag"]},{cells:["07.12.2021","Kryptologie","Arbeitsauftrag"],type:"event"},{cells:["14.12.2021","Kryptologie","Test"],type:"test"},{cells:["21.12.2021","Kryptologie","Steganographie"]},{cells:["28.12.2021","Winterferien",""],type:"holiday"},{cells:["04.01.2022","Winterferien",""],type:"holiday"},{cells:["11.01.2022","Computer","Grundlagen"]},{cells:["18.01.2022","Notenschluss",""],type:"event"},{cells:["18.01.2022","Computer","Digitale Schaltungen"]},{cells:["25.01.2022","Computer",""]}],mdxType:"Table"})))}y.isMDXComponent=!0}}]);