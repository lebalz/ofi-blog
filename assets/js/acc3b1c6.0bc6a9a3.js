"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21075],{63432:function(e,t,l){l.d(t,{ZP:function(){return v}});var s,n,o=l(83117),r=l(3435),i=l(21073),a=l(67294),c=l(92814),p=l(51436),d={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},u=l(86010),h=l(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(n||(n={}));var m=((s={})[n.Holiday]=p.skR,s[n.Event]=p.$nv,s[n.Test]=p.Xf_,s[n.Info]=p.YHc,s),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,l=e.icon,s=e.date,n=this.props.value;return s&&(n=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},h.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(s)),a.createElement("td",{align:t},n,l?" ":"",l)},t}(a.Component),g=function(e){var t=new Date(e.getFullYear(),0,1),l=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(l/7)+1},f=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var l=t.prototype;return l.icon=function(){if(this.props.type)return a.createElement(c.G,{icon:m[this.props.type]})},l.render=function(){var e=this,t=this.props,l=t.type,s=t.cells,n={className:[]};this.props.className&&n.className.push(this.props.className),l&&n.className.push(d[l]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=s[this.props.dateIndex];"string"==typeof c&&(i=function(e){var t=e.match((0,r.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&g(new Date)===g(i)&&n.className.push(n.className+" "+d.currentWeek)}return a.createElement("tr",(0,o.Z)({},n,{className:u.default.apply(void 0,n.className)}),s.map((function(t,l){var s={value:t};return 0===l&&(s.icon=e.icon()),e.props.alignments&&e.props.alignments.length>l?s.align=e.props.alignments[l]:s.align="left",a.createElement(y,(0,o.Z)({},s,{key:l,date:e.props.dateIndex===l?i:void 0}))})))},t}(a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,u.default)(d["ofi-table"],d[this.props.size],d[this.props.compact&&"compact"],d[this.props.celled&&"celled"],d[this.props.striped&&"striped"],d[this.props.collapsing&&"collapsing"],d[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,l){var s,n=((null==(s=e.props.alignments)?void 0:s.length)||0)>l?e.props.alignments[l]:"left";return a.createElement("th",{align:n,key:l},t)})))),a.createElement("tbody",null,this.props.rows.map((function(l,s){return a.createElement(f,(0,o.Z)({alignments:e.props.alignments},l,{key:s,dateIndex:t}))}))))},t}(a.Component)},82570:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var s=l(83117),n=l(80102),o=(l(67294),l(3905)),r=l(63432),i=["components"],a={sidebar_position:1},c="24o",p={unversionedId:"home",id:"version-24o/home",title:"24o",description:"<Table",source:"@site/versioned_docs/version-24o/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24o/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/home.mdx",tags:[],version:"24o",lastUpdatedAt:1643460448,formattedLastUpdatedAt:"1/29/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24o/sidebar",next:{title:"BYOD Basics",permalink:"/24o/category/byod-basics"}},d=[],u={toc:d};function h(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"24o"},"24o"),(0,o.kt)(r.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["31.01.2022","",""]},{cells:["07.02.2022","",""]},{cells:["14.02.2022","Sportwoche",""],type:"holiday"},{cells:["21.02.2022","",""]},{cells:["28.02.2022","",""]},{cells:["07.03.2022","",""]},{cells:["14.03.2022","",""]},{cells:["21.03.2022","",""]},{cells:["28.03.2022","",""]},{cells:["04.04.2022","Sonderwoche",""],type:"holiday"},{cells:["11.04.2022","Fr\xfchlingsferien",""],type:"holiday"},{cells:["18.04.2022","Fr\xfchlingsferien",""],type:"holiday"},{cells:["25.04.2022","",""]},{cells:["02.05.2022","",""]},{cells:["09.05.2022","",""]},{cells:["16.05.2022","",""]},{cells:["23.05.2022","",""]},{cells:["30.05.2022","",""]},{cells:["06.06.2022","Pfingsten",""],type:"holiday"},{cells:["13.06.2022","Pr\xe4ventionswoche",""],type:"holiday"},{cells:["20.06.2022","",""]},{cells:["27.06.2022","",""]},{cells:["30.06.2022","Notenschluss",""],type:"event"},{cells:["04.07.2022","",""]}],mdxType:"Table"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"3. Semester"),(0,o.kt)(r.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["23.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["30.08.2021","Netzwerke","Routing & DNS"]},{cells:["06.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["13.09.2021","Netzwerke","Workshop"]},{cells:["20.09.2021","Netzwerke","Test"],type:"test"},{cells:["27.09.2021","Umweltwoche",""],type:"holiday"},{cells:["04.10.2021","Herbstferien",""],type:"holiday"},{cells:["11.10.2021","Herbstferien",""],type:"holiday"},{cells:["18.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["01.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["08.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["15.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["22.11.2021","Kryptologie","Hashfunktion"]},{cells:["29.11.2021","Kryptologie","Digitale Signaturen"]},{cells:["06.12.2021","Kryptologie","Kryptologie im Alltag"]},{cells:["13.12.2021","Kryptologie","Test"],type:"test"},{cells:["20.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["27.12.2021","Winterferien",""],type:"holiday"},{cells:["03.01.2022","Winterferien",""],type:"holiday"},{cells:["10.01.2022","Computer","Grundlagen"]},{cells:["17.01.2022","Computer","Digitale Schaltungen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["24.01.2022","Computer",""]}],mdxType:"Table"})))}h.isMDXComponent=!0}}]);