"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6988],{685162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(667294),r=n(386010),i="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,s),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(667294),i=n(386010),s=n(972389),o=n(867392),l=n(707094),u=n(212466),c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,p=e.defaultValue,b=e.values,f=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),E=w.tabGroupChoices,Z=w.setTabGroupChoices,T=(0,r.useState)(k),x=T[0],N=T[1],I=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=E[f];null!=_&&_!==x&&y.some((function(e){return e.value===_}))&&N(_)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==x&&(C(t),N(a),null!=f&&Z(f,String(a)))},V=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var i,s=I.indexOf(e.currentTarget)-1;n=null!=(i=I[s])?i:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":m},v)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:V,onFocus:S,onClick:S},s,{className:(0,i.default)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},285107:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(894578),r=n(667294),i=n(665488),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(497326),r=n(894578),i=n(204942),s=n(667294),o=n(592814),l="videoComponent_YfiL",u="headerClosed_s_Of",c="headerOpen_AzNA",d="minimize_pBQC",m="description_p2GN",p="title_YxV5",b="cardOpen_IEP6",f=n(51436),v=n(386010),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,i.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,i.Z)((0,a.Z)(t),"videoRef",s.createRef()),(0,i.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,i.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,r=e.children;return s.createElement("div",{ref:this.videoRef,className:l},this.state.open?s.createElement("div",{className:b},s.createElement("div",{className:c},t&&s.createElement("h5",{className:p},t),!this.props.expanded&&s.createElement("button",{className:(0,v.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},s.createElement(o.G,{icon:f.IQi})),r&&s.createElement("div",{className:m},r)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:f.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:u},s.createElement("div",{className:p},t||"Video"),r&&s.createElement("div",{className:m},r)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:f.IJ7,spin:!0}))))},t}(s.Component)},80072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return y}});var a,r=n(487462),i=n(263366),s=(n(667294),n(603905)),o=n(285107),l=n(685162),u=n(592814),c=n(951417),d=n(644996),m=n(765648),p=["components"],b={},f="Betriebssystem",v={unversionedId:"byod-basics/v24/betriebssystem",id:"byod-basics/v24/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v24/002-betriebssystem.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/betriebssystem",permalink:"/byod-basics/v24/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/002-betriebssystem.mdx",tags:[],version:"current",lastUpdatedAt:1628320816,formattedLastUpdatedAt:"7.8.2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Basics",permalink:"/byod-basics/v24/overview"},next:{title:"Dateiexplorer",permalink:"/byod-basics/v24/dateiexplorer"}},h={},y=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],g=(a="Figure",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),k={toc:y};function w(e){var t=e.components,a=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,s.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,s.kt)(o.Z,{mdxType:"OsTabs"},(0,s.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,s.kt)(u.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,s.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,s.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{src:n(266901).Z,width:"1641",height:"1294"}))),(0,s.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,s.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,s.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{src:n(929021).Z,width:"1383",height:"890"})))),(0,s.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,s.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,s.kt)(o.Z,{mdxType:"OsTabs"},(0,s.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,s.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}w.isMDXComponent=!0},929021:function(e,t,n){t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},266901:function(e,t,n){t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);