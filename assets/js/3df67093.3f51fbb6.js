"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[60188],{58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(83117),a=n(67294),r=n(72389),s=n(74348),o=n(86010),l="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),k=g.tabGroupChoices,E=g.setTabGroupChoices,w=(0,a.useState)(y),Z=w[0],x=w[1],T=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var B=k[p];null!=B&&B!==Z&&f.some((function(e){return e.value===B}))&&x(B)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),i=f[n].value;i!==Z&&(N(t),x(i),null!=p&&E(p,i))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=T.indexOf(e.currentTarget)+1;n=T[i]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:I,onClick:I},r,{className:(0,o.default)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function c(e){var t=(0,r.Z)();return a.createElement(u,(0,i.Z)({key:String(t)},e))}},85107:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(21073),a=n(67294),r=n(9877),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(a.Component)},65648:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(44415),a=n(21073),r=n(91189),s=n(67294),o=n(92814),l="videoComponent_YfiL",u="headerClosed_s_Of",c="headerOpen_AzNA",d="minimize_pBQC",m="description_p2GN",p="title_YxV5",b="cardOpen_IEP6",v=n(51436),f=n(86010),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,(0,r.Z)((0,i.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,r.Z)((0,i.Z)(t),"videoRef",s.createRef()),(0,r.Z)((0,i.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,r.Z)((0,i.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,a=e.children;return s.createElement("div",{ref:this.videoRef,className:l},this.state.open?s.createElement("div",{className:b},s.createElement("div",{className:c},t&&s.createElement("h5",{className:p},t),!this.props.expanded&&s.createElement("button",{className:(0,f.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},s.createElement(o.G,{icon:v.IQi})),a&&s.createElement("div",{className:m},a)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:v.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:u},s.createElement("div",{className:p},t||"Video"),a&&s.createElement("div",{className:m},a)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(o.G,{icon:v.IJ7,spin:!0}))))},t}(s.Component)},83028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return f},toc:function(){return h},default:function(){return g}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),s=n(84384),o=n(85107),l=n(58215),u=n(92814),c=n(51417),d=n(44996),m=n(65648),p=["components"],b={},v="Betriebssystem",f={unversionedId:"BYOD-Basics/betriebssystem",id:"version-24o/BYOD-Basics/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-24o/02-BYOD-Basics/002-betriebssystem.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/betriebssystem",permalink:"/24o/BYOD-Basics/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/02-BYOD-Basics/002-betriebssystem.mdx",tags:[],version:"24o",sidebarPosition:2,frontMatter:{},sidebar:"version-24o/sidebar",previous:{title:"Basics",permalink:"/24o/BYOD-Basics/overview"},next:{title:"Dateiexplorer",permalink:"/24o/BYOD-Basics/dateiexplorer"}},h=[{value:"Globale Suche",id:"globale-suche",children:[],level:2},{value:"Night-Shift",id:"night-shift",children:[],level:2}],y={toc:h};function g(e){var t=e.components,b=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},y,b,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,r.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,r.kt)(u.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,r.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(70427).Z,mdxType:"Image"}))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,r.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(481).Z,mdxType:"Image"})))),(0,r.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,r.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(m.Z,{src:(0,d.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}g.isMDXComponent=!0},481:function(e,t,n){t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},70427:function(e,t,n){t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);