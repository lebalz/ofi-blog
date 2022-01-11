"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3247],{3239:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n="noLoginAlert_boZc",l=a(73727),i=a(71217),o=a(21314),s=(0,i.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:n},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(l.rU,{to:"/login"},"Login"))}))},63432:function(e,t,a){a.d(t,{ZP:function(){return h}});var r,n,l=a(83117),i=a(3435),o=a(21073),s=a(67294),c=a(92814),d=a(51436),u={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},m=a(86010),p=a(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(n||(n={}));var f=((r={})[n.Holiday]=d.skR,r[n.Event]=d.$nv,r[n.Test]=d.Xf_,r[n.Info]=d.YHc,r),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,a=e.icon,r=e.date,n=this.props.value;return r&&(n=function(e){var t=e.getDay();return s.createElement("span",{style:{fontFamily:"monospace"}},p.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(r)),s.createElement("td",{align:t},n,a?" ":"",a)},t}(s.Component),v=function(e){var t=new Date(e.getFullYear(),0,1),a=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(a/7)+1},b=function(e){function t(){return e.apply(this,arguments)||this}(0,o.Z)(t,e);var a=t.prototype;return a.icon=function(){if(this.props.type)return s.createElement(c.G,{icon:f[this.props.type]})},a.render=function(){var e=this,t=this.props,a=t.type,r=t.cells,n={className:[]};this.props.className&&n.className.push(this.props.className),a&&n.className.push(u[a]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=r[this.props.dateIndex];"string"==typeof c&&(o=function(e){var t=e.match((0,i.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&v(new Date)===v(o)&&n.className.push(n.className+" "+u.currentWeek)}return s.createElement("tr",(0,l.Z)({},n,{className:m.default.apply(void 0,n.className)}),r.map((function(t,a){var r={value:t};return 0===a&&(r.icon=e.icon()),e.props.alignments&&e.props.alignments.length>a?r.align=e.props.alignments[a]:r.align="left",s.createElement(g,(0,l.Z)({},r,{key:a,date:e.props.dateIndex===a?o:void 0}))})))},t}(s.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return s.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,m.default)(u["ofi-table"],u[this.props.size],u[this.props.compact&&"compact"],u[this.props.celled&&"celled"],u[this.props.striped&&"striped"],u[this.props.collapsing&&"collapsing"],u[this.props.selectable&&"selectable"])},s.createElement("thead",null,this.props.header&&s.createElement("tr",null,this.props.header.map((function(t,a){var r,n=((null==(r=e.props.alignments)?void 0:r.length)||0)>a?e.props.alignments[a]:"left";return s.createElement("th",{align:n,key:a},t)})))),s.createElement("tbody",null,this.props.rows.map((function(a,r){return s.createElement(b,(0,l.Z)({alignments:e.props.alignments},a,{key:r,dateIndex:t}))}))))},t}(s.Component)},74322:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(86010),l="loader_2rVr",i="badge_2s0E",o=a(71217),s=a(92814),c=a(51436),d=(0,o.Pi)((function(){return r.createElement("div",{className:(0,n.default)(l)},r.createElement(s.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,n.default)("badge",i)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(67294),n="quillEditor_1XRF",l="quillAnswer_oQOS",i="monospace_3rFN",o="disableToolbar_gntN",s=a(86010),c=a(71217),d=a(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},f=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],f=t[1],g=r.useState(!1),v=g[0],b=g[1],h=r.useRef(null),y=e.model,E=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var r=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],n={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(n.katex=r.length,r.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,49115)))),Promise.all(r).then((function(t){u=t[n["react-quill"]].default;var a=t[n.quill].default,r=t[n["react-image-compress"]].default;if("katex"in n){var l=t[n.katex].default;window.katex=l}a.register("modules/imageCompress",r),e()}))}((function(){t&&(b(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",E))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",E)}}),[e]);return u&&v&&y.loaded?r.createElement("div",{onFocus:function(){return!c&&f(!0)},className:(0,s.default)(n)},r.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,s.default)(l,e.monospace&&i,c?void 0:o),value:y.text||"",onChange:function(t,a,r,n){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&y.canUpdate&&v&&y.setText(l)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(d.Z,null)}))},82360:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return G},default:function(){return F},frontMatter:function(){return L},metadata:function(){return W},toc:function(){return A}});var r=a(83117),n=a(80102),l=a(67294),i=a(3905),o=a(72389),s=a(86010),c={exercise:"exercise_2JKe",topicStats:"topicStats_3o_q",even:"even_3IVQ",odd:"odd_32j5",topic:"topic_27CE",controls:"controls_a9qo",orderControl:"orderControl_3npu",orderBadge:"orderBadge_JSCV",colBadge:"colBadge_3RYz",faIcon:"faIcon_1haV",faButton:"faButton_1qcZ",base:"base_xr4Z",time:"time_3S6I",labels:"labels_Ckyo",icon:"icon_H_kV",details:"details_3pHL",timeSpans:"timeSpans_1iWw",timeSpan:"timeSpan_KVl-",active:"active_lieS",tooLong:"tooLong_ah8x",timeText:"timeText_3EUu"},d=a(71217),u=a(21314),m=a(3239),p=a(68949),f=a(92814),g=a(51436),v=a(56024),b=a(96921),h=(0,d.Pi)((function(e){var t=e.timeSpan;if(1===t.exercise.timeSpans.length)return null;var a=t.timeSpentBefore,r=t.duration,n=t.timeSpentAfter;if(t.exercise.isRunning){var i=6e4-t.exercise.duration%6e4;n+=i,t.isRunning&&(r+=i,n=0)}return t?l.createElement("div",{className:(0,s.default)(c.timeSpan)},l.createElement("div",{className:(0,s.default)(c.spacer),style:{flexGrow:a}}),l.createElement("div",{className:(0,s.default)(c.time,t.isRunning&&c.active,t.tooLong&&c.tooLong),style:{flexGrow:r}},l.createElement("div",{className:(0,s.default)(c.timeText)},e.showDate&&t.fStartDate+" | ",(0,b.KL)(t.duration),t.tooLong&&" ("+(0,b.KL)(t.rawDuration)+")")),l.createElement("div",{className:(0,s.default)(c.spacer),style:{flexGrow:n}})):void 0})),y=a(75552),E={solved:g.f8k,fail:g.nYk,important:g.eHv,question:g.sph},k={solved:"var(--ifm-color-success)",fail:"var(--ifm-color-danger)",important:"var(--ifm-color-warning)",question:"var(--ifm-color-info)"},_=(0,d.Pi)((function(e){var t=l.useState(!1),a=t[0],r=t[1],n=((0,u.oR)("timedTopicStore"),l.useRef(null)),i=e.exercise;return l.createElement("div",{className:(0,s.default)(c.exercise)},l.createElement("div",{className:(0,s.default)(c.base)},l.createElement("input",{ref:n,type:"text",value:i.name,onChange:(0,p.aD)((function(e){i.name=e.target.value})),onFocus:function(){return i.setLockedSortOrder(!0)},onBlur:function(){return i.setLockedSortOrder(!1)},placeholder:"Aufgabe"}),l.createElement("span",{className:(0,s.default)("badge","badge--secondary",c.time),onClick:function(){return r(!a)}},(0,b.p6)(i.lastEdited)),l.createElement("div",{style:{flexGrow:1}}),l.createElement("div",{className:(0,s.default)(c.controls)},i.isRunning?l.createElement(f.G,{className:(0,s.default)(c.faButton),color:"var(--ifm-color-primary)",icon:g.Bg$,onClick:function(){return i.stop()}}):l.createElement(f.G,{className:(0,s.default)(c.faButton),color:"var(--ifm-color-success)",icon:g.zc,onClick:function(){return i.start()}}),l.createElement("span",{className:(0,s.default)("badge","badge--secondary",c.time),onClick:function(){return r(!a)}},(0,b.mr)(i.duration||0))),l.createElement("div",{style:{flexGrow:1}}),l.createElement("div",{className:(0,s.default)(c.labels)},l.createElement(f.G,{className:(0,s.default)(c.icon),color:"var(--ifm-color-primary)",icon:i.hasText?g.Mzg:v.Mz,onClick:function(){return r(!a)}}),["solved","fail","important","question"].map((function(e,t){var a=i.labels.includes(e);return l.createElement(f.G,{key:t,className:(0,s.default)(c.icon),color:a?k[e]:"gray",icon:E[e],onClick:function(){return i.toggleLabel(e)}})}))),l.createElement("div",{style:{flexGrow:1}}),l.createElement(f.G,{className:(0,s.default)(c.faButton),color:"red",icon:g.$aW,onClick:function(){confirm("Wirklich L\xf6schen?")&&i.delete()}})),a&&l.createElement("div",{className:(0,s.default)(c.details)},l.createElement("div",{className:(0,s.default)(c.timeSpans)},i.timeSpans.map((function(e,t){var a=t<i.timeSpans.length-1?i.timeSpans[t+1]:e,r=0===t?e:i.timeSpans[t-1],n=e.fStartDate!==r.fStartDate||e.fStartDate!==a.fStartDate;return l.createElement(h,{timeSpan:e,key:t,showDate:n})}))),l.createElement(y.Z,{model:i,placeholder:"\u270d\ufe0f Notizen",toolbar:{bold:!0,italic:!0,underline:!0,background:!0,formula:!0,ol:!0}})))})),N=a(6140),w=(0,d.Pi)((function(){var e=(0,u.oR)("timedTopicStore");return l.createElement("div",{className:(0,s.default)(c.orderControl)},l.createElement("span",{className:(0,s.default)("badge","badge--primary",c.orderBadge),onClick:function(){return e.toggleSortOrder()}},l.createElement(f.G,{className:c.faIcon,icon:"asc"===e.sortOrder?g.FPD:g.r5q})),l.createElement("div",{className:(0,s.default)(c.orderBadge,"dropdown","dropdown--hoverable")},l.createElement("button",{className:(0,s.default)("badge","badge--primary")},N.Dz[e.orderBy]),l.createElement("ul",{className:"dropdown__menu"},N.it.map((function(t,a){return l.createElement("li",{key:a,onClick:function(){return e.setOrderColumn(t)}},l.createElement("div",{className:(0,s.default)(c.colBadge,"badge","badge--secondary","dropdown__link")},N.Dz[t]))})))))})),x=(0,d.Pi)((function(e){var t=(0,u.oR)("timedTopicStore"),a=t.find(e.webKey);return l.createElement("div",{className:c.topic},l.createElement("div",{className:(0,s.default)(c.controls)},l.createElement(w,null),l.createElement("button",{className:(0,s.default)("button","button--sm","button--primary"),onClick:(0,p.aD)((function(){a.addExercise(),t.setSortOrder("desc"),t.setOrderColumn("createdAt")}))},"+")),l.createElement("div",{className:(0,s.default)(c.exercises)},a.orderedExercises.map((function(e,t){return l.createElement(_,{exercise:e,key:t})}))))})),S=a(96486),T=a(63432),D=a(30381),K=a.n(D),C=(0,d.Pi)((function(e){var t=l.useState(!1),a=t[0],r=t[1],n=[],i=e.totalTimeGroupedByDate,o=e.totalTime,d=e.firstDayOfWeek,u=-1*b.p3.indexOf(d||"So"),m=K()().startOf("year").day();return(0,S.orderBy)(Object.values(i),["date"],["asc"]).forEach((function(e){var t=Math.floor((e.day-1+m+u)/7);n.push({cells:[e.fDate,(0,b.mr)(e.total)],className:(0,s.default)(t%2==0?c.even:c.odd)})})),l.createElement("div",{className:(0,s.default)(c.topicStats)},l.createElement(f.G,{className:(0,s.default)(c.faButton),color:a?"var(--ifm-color-primary)":"gray",icon:g.sqG,onClick:function(){return r(!a)}}),a&&l.createElement("div",{className:(0,s.default)("card")},l.createElement("div",{className:(0,s.default)("card__header")},l.createElement("h3",null,"Zusammenfassung")),l.createElement("div",{className:(0,s.default)("card__body"),style:{display:"flex",alignItems:"start",justifyContent:"space-between"}},l.createElement("div",null,"Zeit Total:"," ",l.createElement("span",{className:(0,s.default)("badge","badge--success")},(0,b.mr)(o))),l.createElement(T.ZP,{header:["Tag","Zeit"],rows:n,compact:!0,size:"small",alignments:["left","right"],collapsing:!0}))))})),O=a(74322),Z=(0,d.Pi)((function(e){var t=(0,u.oR)("timedTopicStore");if((0,u.RN)(e.webKey),!(0,o.Z)())return l.createElement("div",null,"SSR");var a=t.find(e.webKey);return a?l.createElement("div",null,l.createElement(m.Z,null),l.createElement(C,{totalTime:a.totalTime,totalTimeGroupedByDate:a.totalTimeGroupedByDate,firstDayOfWeek:e.firstDayOfWeek}),l.createElement("div",{className:(0,s.default)(c.TimedExercisesContainer)},l.createElement(x,{webKey:e.webKey}))):l.createElement(O.Z,null)})),P=(0,d.Pi)((function(e){var t=(0,u.oR)("timedTopicStore");return l.createElement(C,(0,r.Z)({},t.topicStats,{firstDayOfWeek:e.firstDayOfWeek}))})),B=["components"],L={title:"Algebra 1",sidebar_label:"Algebra 1",sidebar_position:2},G="Algebra 1",W={unversionedId:"algebra1",id:"version-24w/algebra1",title:"Algebra 1",description:"Kapitel 1",source:"@site/versioned_docs/version-24w/algebra1.md",sourceDirName:".",slug:"/algebra1",permalink:"/24w/algebra1",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24w/algebra1.md",tags:[],version:"24w",lastUpdatedAt:1639329001,formattedLastUpdatedAt:"12/12/2021",sidebarPosition:2,frontMatter:{title:"Algebra 1",sidebar_label:"Algebra 1",sidebar_position:2},sidebar:"version-24w/sidebar",previous:{title:"Home 24w",permalink:"/24w/home"},next:{title:"Diagramme",permalink:"/24w/Excel/diagramme"}},A=[{value:"Kapitel 1",id:"kapitel-1",children:[],level:2},{value:"Kapitel 2",id:"kapitel-2",children:[],level:2},{value:"Kapitel 3",id:"kapitel-3",children:[],level:2},{value:"Kapitel 5",id:"kapitel-5",children:[],level:2},{value:"Kapitel 6",id:"kapitel-6",children:[],level:2},{value:"Kapitel 7 (Freiwillig: Pr\xfcfungsvorbereitung Probe 2)",id:"kapitel-7-freiwillig-pr\xfcfungsvorbereitung-probe-2",children:[],level:2}],R={toc:A};function F(e){var t=e.components,a=(0,n.Z)(e,B);return(0,i.kt)("wrapper",(0,r.Z)({},R,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"algebra-1"},"Algebra 1"),(0,i.kt)(P,{firstDayOfWeek:"Fr",mdxType:"TopicStats"}),(0,i.kt)("h2",{id:"kapitel-1"},"Kapitel 1"),(0,i.kt)(Z,{webKey:"915b28a8-0722-4f72-93b9-dd7ef6f7537d",topic:"Kapitel 1",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}),(0,i.kt)("h2",{id:"kapitel-2"},"Kapitel 2"),(0,i.kt)(Z,{webKey:"16d653a0-92ad-4530-8a79-78dca5972e22",topic:"Kapitel 2",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}),(0,i.kt)("h2",{id:"kapitel-3"},"Kapitel 3"),(0,i.kt)(Z,{webKey:"23f279a3-5eb5-4557-989d-bc9be25bfc58",topic:"Kapitel 3",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}),(0,i.kt)("h2",{id:"kapitel-5"},"Kapitel 5"),(0,i.kt)(Z,{webKey:"f56d9901-f3c5-405f-85d5-3efedff22a62",topic:"Kapitel 5",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}),(0,i.kt)("h2",{id:"kapitel-6"},"Kapitel 6"),(0,i.kt)(Z,{webKey:"81d29bab-40f2-4ec9-bcc9-80710b23aca3",topic:"Kapitel 6",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}),(0,i.kt)("h2",{id:"kapitel-7-freiwillig-pr\xfcfungsvorbereitung-probe-2"},"Kapitel 7 (Freiwillig: Pr\xfcfungsvorbereitung Probe 2)"),(0,i.kt)(Z,{webKey:"96b8a471-b2a7-4230-8223-1128205f07da",topic:"Kapitel 7",firstDayOfWeek:"Fr",mdxType:"TimedTopic"}))}F.isMDXComponent=!0}}]);