"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[66673],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,h=u["".concat(o,".").concat(p)]||u[p]||c[p]||a;return t?i.createElement(h,s(s({ref:n},m),{},{components:t})):i.createElement(h,s({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},685162:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(667294),r=t(386010),a="tabItem_Ymn6";function s(e){var n=e.children,t=e.hidden,s=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.default)(a,s),hidden:t},n)}},665488:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(487462),r=t(667294),a=t(386010),s=t(972389),l=t(867392),o=t(707094),d=t(212466),m="tabList__CuJ",c="tabItem_LNqP";function u(e){var n,t,s=e.lazy,u=e.block,p=e.defaultValue,h=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),N=y.tabGroupChoices,x=y.setTabGroupChoices,Z=(0,r.useState)(w),T=Z[0],z=Z[1],_=[],E=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==T&&b.some((function(e){return e.value===S}))&&z(S)}var D=function(e){var n=e.currentTarget,t=_.indexOf(n),i=b[t].value;i!==T&&(E(n),z(i),null!=f&&x(f,String(i)))},B=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i,r=_.indexOf(e.currentTarget)+1;t=null!=(i=_[r])?i:_[0];break;case"ArrowLeft":var a,s=_.indexOf(e.currentTarget)-1;t=null!=(a=_[s])?a:_[_.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,a.default)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":u},k)},b.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return _.push(e)},onKeyDown:B,onFocus:D,onClick:D},s,{className:(0,a.default)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,s.Z)();return r.createElement(u,(0,i.Z)({key:String(n)},e))}},285107:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(894578),r=t(667294),a=t(665488),s=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},765648:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(497326),r=t(894578),a=t(204942),s=t(667294),l=t(592814),o="videoComponent_YfiL",d="headerClosed_s_Of",m="headerOpen_AzNA",c="minimize_pBQC",u="description_p2GN",p="title_YxV5",h="cardOpen_IEP6",f=t(51436),k=t(386010),g=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return n=e.call.apply(e,[this].concat(r))||this,(0,a.Z)((0,i.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,a.Z)((0,i.Z)(n),"videoRef",s.createRef()),(0,a.Z)((0,i.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),t=e.top,i=e.bottom;t<window.innerHeight&&i>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,a.Z)((0,i.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,r.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},t.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},t.render=function(){var e=this.props,n=e.title,t=e.src,i=e.type,r=e.children;return s.createElement("div",{ref:this.videoRef,className:o},this.state.open?s.createElement("div",{className:h},s.createElement("div",{className:m},n&&s.createElement("h5",{className:p},n),!this.props.expanded&&s.createElement("button",{className:(0,k.default)("button button--sm button--outline button--secondary",c),onClick:this.onClick},s.createElement(l.G,{icon:f.IQi})),r&&s.createElement("div",{className:u},r)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:t,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:d},s.createElement("div",{className:p},n||"Video"),r&&s.createElement("div",{className:u},r)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:t,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(l.G,{icon:f.IJ7,spin:!0}))))},n}(s.Component)},883672:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return k}});var i,r=t(487462),a=t(263366),s=(t(667294),t(603905)),l=t(285107),o=t(644996),d=t(765648),m=t(685162),c=(t(592814),["components"]),u={},p="Software",h={unversionedId:"BYOD-Basics/software",id:"version-24L/BYOD-Basics/software",title:"Software",description:"Der Ausdruck Software ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort Hardware das erste Mal verwendet wurde. Dabei bezeichnet Hardware alle physischen Bestandteile eines Computers. In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet.",source:"@site/versioned_docs/version-24L/02-BYOD-Basics/006-software.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/software",permalink:"/24L/BYOD-Basics/software",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/02-BYOD-Basics/006-software.mdx",tags:[],version:"24L",sidebarPosition:6,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"Systemnavigation",permalink:"/24L/BYOD-Basics/navigation"},next:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/24L/BYOD-Basics/pruefungsfragen"}},f={},k=[{value:"Fotos / Videos",id:"fotos--videos",level:2},{value:"Bildschirmfoto erstellen",id:"bildschirmfoto-erstellen",level:3},{value:"Bildschirmaufnahme erstellen",id:"bildschirmaufnahme-erstellen",level:3},{value:"Foto zuschneiden, drehen und bearbeiten",id:"foto-zuschneiden-drehen-und-bearbeiten",level:3},{value:"Video zuschneiden",id:"video-zuschneiden",level:2},{value:"Browser",id:"browser",level:2},{value:"Mailprogramm &amp; Kalender",id:"mailprogramm--kalender",level:2},{value:"Word/Powerpoint/Excel",id:"wordpowerpointexcel",level:2},{value:"To Do",id:"to-do",level:2},{value:"Forms",id:"forms",level:2},{value:"Teams",id:"teams",level:2},{value:"Nachrichten an Lehrpersonen",id:"nachrichten-an-lehrpersonen",level:3},{value:"OneDrive",id:"onedrive",level:2}],g=(i="Figure",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),b={toc:k};function v(e){var n=e.components,i=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},b,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"software"},"Software"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Der Ausdruck ",(0,s.kt)("strong",{parentName:"p"},"Software")," ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort ",(0,s.kt)("strong",{parentName:"p"},"Hardware")," das erste Mal verwendet wurde. Dabei bezeichnet ",(0,s.kt)("strong",{parentName:"p"},"Hardware alle physischen Bestandteile eines Computers"),". In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet. ",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,s.kt)("p",null,'Im folgenden werden g\xe4ngige Abl\xe4ufe zu verschiedener Software auf dem BYOD-Ger\xe4t gezeigt. Oft gibt es mehr als eine M\xf6glichkeit, das gew\xfcnschte Ziel zu erreichen (bspw. \xfcber Tastenk\xfcrzel, sog. "Shortcuts"). Es steht Ihnen frei, auch eigene Varianten auszuprobieren und sich anzueignen. '),(0,s.kt)("h2",{id:"fotos--videos"},"Fotos / Videos"),(0,s.kt)("h3",{id:"bildschirmfoto-erstellen"},"Bildschirmfoto erstellen"),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Ausschneiden und Skizzieren",src:t(631077).Z,width:"256",height:"256"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Ausschneiden und Skizzieren",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Unter dem Startmen\xfc nach ",(0,s.kt)("inlineCode",{parentName:"li"},"Ausschneiden und Skizzieren")," (franz\xf6sisch: ",(0,s.kt)("inlineCode",{parentName:"li"},"Capture et croquis"),") suchen."),(0,s.kt)("li",{parentName:"ol"},"Es gibt drei Optionen um eine Bildschirmaufnahme zu erfassen:"),(0,s.kt)("li",{parentName:"ol"},"der ganze Bildschirm"),(0,s.kt)("li",{parentName:"ol"},"ein einzelnes Fenster"),(0,s.kt)("li",{parentName:"ol"},"ein selbst gew\xe4hlter Ausschnitt"))),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Bildschirmfoto",src:t(473946).Z,width:"256",height:"256"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In Spotlight nach ",(0,s.kt)("inlineCode",{parentName:"li"},"Bildschirmfoto")," (franz\xf6sisch: ",(0,s.kt)("inlineCode",{parentName:"li"},"captures"),") suchen"),(0,s.kt)("li",{parentName:"ol"},"Es gibt unterschiedliche Optionen um eine Bildschirmaufnahme zu erfassen:")),(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Bildschirmfoto Aufnehmen",src:t(2083).Z,width:"1592",height:"974"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto Aufnehmen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,s.kt)("h3",{id:"bildschirmaufnahme-erstellen"},"Bildschirmaufnahme erstellen"),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)("p",null,"Unter Windows gibt es aktuell keine M\xf6glichkeit, den gesamten Bildschirm (inkl. dem Desktop und dem Dateiexplorer) aufzunehmen.\nHier springt ",(0,s.kt)("strong",{parentName:"p"},"Powerpoint")," ein - in einem Powerpointdokument kann unter ",(0,s.kt)("inlineCode",{parentName:"p"},"Einf\xfcgen>Bildschirmaufzeichnung"),' eine Bildschirmaufnahme gestartet werden.\nDas aufgenommene Video muss dann gespeichert werden - mittels rechtsklick auf das Video und dann "Medien speichern unter...".'),(0,s.kt)("p",null,"Optional kann das Video zuerst noch zugeschnitten werden."),(0,s.kt)(d.Z,{src:(0,o.Z)("/img/byod-basics/win/create_screencast.mp4"),mdxType:"Video"})),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("p",null,"Auf Mac OSx lassen sich mit dem App ",(0,s.kt)("strong",{parentName:"p"},"Bildschirmfoto")," ebenfalls Screencasts (Videoaufnahmen des Bildschirms) aufnehmen."),(0,s.kt)(g,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Bildschirmfoto",src:t(473946).Z,width:"256",height:"256"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Bildschirmfoto",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,s.kt)("h3",{id:"foto-zuschneiden-drehen-und-bearbeiten"},"Foto zuschneiden, drehen und bearbeiten"),(0,s.kt)("p",null,"Bekanntlich sagt ein Foto mehr als 1000 Worte - allerdings sollte sich das Foto auf das Wesentliche beziehen... Deshalb ist es wichtig, dass Sie ein Foto (oder einen Screenshot) f\xfcr die Verwendung in einem Bericht oder in einer Nachricht\nbearbeiten k\xf6nnen."),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Zeichnung hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/edit_picture1.mp4"),mdxType:"Video"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zeichnen")))),(0,s.kt)(d.Z,{title:"Zuschneiden/Drehen",src:(0,o.Z)("/img/byod-basics/win/edit_picture2.mp4"),mdxType:"Video"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,s.kt)("li",{parentName:"ol"},"Direkt zuschneiden oder drehen"),(0,s.kt)("li",{parentName:"ol"},"(Alternativ: ",(0,s.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Bearbeiten"),")")))),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Foto zuschneiden, drehen und bearbeiten",src:(0,o.Z)("/img/byod-basics/osx/edit_picture.mp4"),mdxType:"Video"}))),(0,s.kt)("h2",{id:"video-zuschneiden"},"Video zuschneiden"),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/win/shorten_video.mp4"),mdxType:"Video"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Video in "Fotos" \xf6ffnen'),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zuschneiden"))))),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/osx/shorten_video.mp4"),mdxType:"Video"},(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Video mit "QuickTime" \xf6ffnen (doppelklicken)'),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Bearbeiten > K\xfcrzen")))))),(0,s.kt)("h2",{id:"browser"},"Browser"),(0,s.kt)("p",null,"Vergewissern Sie sich, dass Sie folgende Aufgaben ohne weiteres im Browser ihrer Wahl (bspw. Firefox, Chrome, Edge, Safari...) durchf\xfchren k\xf6nnen:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Internetseite aufrufen (bspw. ",(0,s.kt)("inlineCode",{parentName:"li"},"https://srf.ch"),")"),(0,s.kt)("li",{parentName:"ul"},"Auf Seite suchen (",(0,s.kt)("inlineCode",{parentName:"li"},"Ctrl+f")," oder ",(0,s.kt)("inlineCode",{parentName:"li"},"Einstellungen > Auf Seite suchen"),")"),(0,s.kt)("li",{parentName:"ul"},"Seite drucken (",(0,s.kt)("inlineCode",{parentName:"li"},"Ctrl+p"),")"),(0,s.kt)("li",{parentName:"ul"},"Neuer Tab \xf6ffnen (",(0,s.kt)("inlineCode",{parentName:"li"},"Ctrl+t"),")")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Privates Fenster \xf6ffnen (",(0,s.kt)("i",null,"Inkognito Mode"),")"),'hier werden alle pers\xf6nlichen Daten nach dem Schliessen des Fensters wieder gel\xf6scht. So werden Sie bspw. auch von allen angemeldeten Websites automatisch abgemeldet und auch "Automatische Logins" werden verworfen. Auf fremden Laptops empfielt sich also der private Modus.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"URL k\xfcrzen um sie einfacher zu teilen, bspw. mit ",(0,s.kt)("a",{parentName:"li",href:"https://bitly.com/"},"https://bitly.com/"))),(0,s.kt)("h2",{id:"mailprogramm--kalender"},"Mailprogramm & Kalender"),(0,s.kt)("p",null,'Sie richten ihr Mail-Konto auf einem Mailprogramm (bspw. im Programm "Mail") ein und k\xf6nnen anschliessend die folgenden Aufgaben durchf\xfchren:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Eine neue Mail schreiben und verschicken")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Eine Mail-Signatur hinzuf\xfcgen/\xe4ndern."),(0,s.kt)("p",null,"Als Signatur wird ein Textabschnitt bezeichnet, der h\xe4ufig am Ende von E-Mails, Usenet-Postings oder Beitr\xe4gen in Internetforen steht und Angaben zum Absender enth\xe4lt."),(0,s.kt)("p",null,"Etablierte Konvention ist, eine Signatur durch einen Signaturtrenner vom Nachrichtentext abzutrennen. Dieser besteht aus einer Zeile, die nur die Zeichenfolge ",(0,s.kt)("inlineCode",{parentName:"p"},"-- ")," (zwei Bindestriche und ein Leerzeichen) enth\xe4lt. Dadurch erm\xf6glicht man es den meisten E-Mail-Programmen und Newsreadern, eine Signatur automatisch zu erkennen und beim Antworten nicht zu zitieren.",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,s.kt)("p",null,"Beispiel f\xfcr eine Signatur:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt",metastring:"{5-9}","{5-9}":!0},"Hallo,\ndas ist ein Beispieltext, um Signaturen zu demonstrieren.\nViele Gr\xfc\xdfe\nReto\n-- \nReto Holzer\nHolzerstrasse. 8, 2502 Biel\nTel.: +41 079 123 45 67\nE-Mail: reto@holzer.ch\n"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Einen neuen Kalender-Eintrag erstellen (bspw. \xfcber die Kalender-App)")),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(g,{options:{size:"150"},mdxType:"Figure"},(0,s.kt)("img",{alt:"--size=150",src:t(580326).Z,width:"403",height:"402"})),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Mail Einrichten"),(0,s.kt)("p",null,"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Einstellungen \xf6ffnen",src:t(848176).Z,width:"1974",height:"1346"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Einstellungen \xf6ffnen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Konto hinzuf\xfcgen",src:t(327211).Z,width:"1976",height:"1354"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Konto hinzuf\xfcgen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:t(848226).Z,width:"1976",height:"1342"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Exchange-Konto hinzuf\xfcgen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))))),(0,s.kt)(d.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/mail_signature.mp4"),mdxType:"Video"})),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(g,{options:{size:"150"},mdxType:"Figure"},(0,s.kt)("img",{alt:"--size=150",src:t(789499).Z,width:"512",height:"512"})),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Mailprogramm Einrichten"),"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:",(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Konto hinzuf\xfcgen",src:t(744161).Z,width:"1532",height:"1118"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Konto hinzuf\xfcgen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:t(95585).Z,width:"1534",height:"982"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Exchange-Konto hinzuf\xfcgen",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))))),(0,s.kt)(d.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/osx/mail_signature.mp4"),mdxType:"Video"}))),(0,s.kt)("h1",{id:"office-365"},"Office 365"),(0,s.kt)("p",null,"An der Schule wird die Office 365 Suite verwendet."),(0,s.kt)("h2",{id:"wordpowerpointexcel"},"Word/Powerpoint/Excel"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Neue Datei erstellen"),(0,s.kt)("li",{parentName:"ul"},"Datei in einem vorgegebenen Ordner auf dem Computer speichern")),(0,s.kt)("h2",{id:"to-do"},"To Do"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Was kann Microsoft To Do?"),(0,s.kt)("p",null,"Mit Microsoft To Do k\xf6nnen Sie Folgendes erledigen ",(0,s.kt)("sup",{parentName:"p",id:"fnref-3"},(0,s.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Behalten Sie mit ",(0,s.kt)("strong",{parentName:"li"},"Mein Tag"),", Ihrem personalisierten Tagesplaner mit Aufgabenvorschl\xe4gen, stets Ihre Priorit\xe4ten im Blick"),(0,s.kt)("li",{parentName:"ul"},"Greifen Sie \xfcberall, auf jedem Ger\xe4t auf Ihre Listen zu"),(0,s.kt)("li",{parentName:"ul"},"Teilen Sie Listen und Aufgaben mit Ihren Freunden, der Familie, Kollegen und Klassenkameraden"),(0,s.kt)("li",{parentName:"ul"},"Erstellen Sie farbig codierte Listen"),(0,s.kt)("li",{parentName:"ul"},"Legen Sie einmalige oder wiederkehrende F\xe4lligkeiten und Erinnerungen fest"),(0,s.kt)("li",{parentName:"ul"},"Teilen Sie Ihre Aufgaben in \xfcberschaubare Schritte auf"),(0,s.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Anmerkungen hinzu"),(0,s.kt)("li",{parentName:"ul"},"F\xfcgen Sie beliebigen Aufgaben Dateien hinzu"),(0,s.kt)("li",{parentName:"ul"},"Synchronisieren Sie Ihre Aufgaben zwischen Outlook und To Do"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Installationsanleitungen"),(0,s.kt)("p",null,"Onlineversion: ",(0,s.kt)("a",{parentName:"p",href:"https://to-do.office.com/"},"https://to-do.office.com/"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-in/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558"},"Auf dem Laptop installieren")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://apps.apple.com/de/app/microsoft-to-do/id1212616790"},"Auf dem iPhone installieren")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=de"},"Auf Android installieren")))),(0,s.kt)("p",null,"Sie k\xf6nnen:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Neue ToDo-Liste erstellen"),(0,s.kt)("li",{parentName:"ul"},"Neue ToDos erfassen"),(0,s.kt)("li",{parentName:"ul"},"Erinnerung festlegen und einschalten")),(0,s.kt)("h2",{id:"forms"},"Forms"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Was kann Microsoft Forms?"),(0,s.kt)("p",null,"Microsoft Forms erm\xf6glicht das schnelle und einfache Erstellen von benutzerdefinierte Quizfragen, Umfragen und Frageb\xf6gen. Nach der \xdcbermittlung der Ergebnisse k\xf6nnen Sie die integrierte Analysefunktion zum Auswerten der Antworten verwenden. Formulardaten k\xf6nnen f\xfcr eine tiefer greifende Analyse oder die Benotung ganz einfach nach Excel exportiert werden."),(0,s.kt)("p",null,"Beim Erstellen der Umfrage kann konfiguriert werden, wer die Umfrage ausf\xfcllen darf und welche Daten von den Teilnehmern erfasst werden:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Personendaten erfassen"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Benutzerkonto erforderlich"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Eine Antwort pro Person","*"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,s.kt)("p",null,"*"," Durch die Anmeldung mit einem Benutuerkonto kann optional sichergestellt werden,\ndass jede Person eine Umfrage nur genau ein Mal ausf\xfcllt. Die Personendaten werden aber nicht weitergeleitet (Antworten sind anonym.)")),(0,s.kt)("p",null,"Online unter ",(0,s.kt)("a",{parentName:"p",href:"https://forms.office.com"},"https://forms.office.com")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Neue Umfrage erstellen und teilen"),(0,s.kt)("li",{parentName:"ul"},"Anonyme Umfrage erstellen"),(0,s.kt)("li",{parentName:"ul"},"Bei Umfragen die Email-Adresse von Teilnehmenden erfassen "),(0,s.kt)("li",{parentName:"ul"},"Umfragen mit Zeitbeschr\xe4nkungen erstellen"),(0,s.kt)("li",{parentName:"ul"},"Benachrichtigungseinstellungen f\xfcr ausgef\xfcllte Umfragen festlegen")),(0,s.kt)("h2",{id:"teams"},"Teams"),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:(0,s.kt)("span",null,"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks ",(0,s.kt)("code",null,"`code`")),src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/win/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"})),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks `code`",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"}))),(0,s.kt)("h3",{id:"nachrichten-an-lehrpersonen"},"Nachrichten an Lehrpersonen"),(0,s.kt)("p",null,"Nachrichten an Lehrpersonen werden mit ",(0,s.kt)("strong",{parentName:"p"},"Sorgfalt")," geschrieben. Es geh\xf6rt eine kurze ",(0,s.kt)("strong",{parentName:"p"},"Anrede")," sowie eine ",(0,s.kt)("strong",{parentName:"p"},"Schlussformel")," dazu. In der Schlussformel am Ende der Nachricht halten Sie nebst ihrem Namen auch die ",(0,s.kt)("strong",{parentName:"p"},"Klassenbezeichnung")," fest."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Lieber Herr M\xfcller"),(0,s.kt)("p",{parentName:"blockquote"},'Ist bei der Nettobilanz beim Citratzyklus mit "aktiver Essigs\xe4ure" die gebundene Essigs\xe4ure gemeint?'),(0,s.kt)("p",{parentName:"blockquote"},"Mit freundlichen Gr\xfcssen"),(0,s.kt)("p",{parentName:"blockquote"},"Mark Muster, 24z")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div",id:"teams--whatsapp"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Teams \u2260 WhatsApp")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Auch wenn Sie nur eine kurze Frage haben, geh\xf6rt die Anrede und Schlussformel dazu (es ist ",(0,s.kt)("strong",{parentName:"p"},"kein WhatsApp-Chat unter Freunden"),"!)."),(0,s.kt)("p",{parentName:"div"},"Entwickelt sich durch die Antwort der Lehrperson einen Chat-Charakter (daher die Lehrperson schreibt innerhalb kurzer Zeit zur\xfcck und Sie haben eine R\xfcckfrage zum selben Thema), darf die Anrede und die Schlussformel anschliessend f\xfcr diese Unterhaltung weggelassen werden."))),(0,s.kt)("h2",{id:"onedrive"},"OneDrive"),(0,s.kt)(l.Z,{mdxType:"OsTabs"},(0,s.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/win/onedrive_share.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,s.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,s.kt)(d.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"  ",(0,s.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,s.kt)(d.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/win/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,s.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht."))),(0,s.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(d.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/osx/onedrive_share.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,s.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,s.kt)(d.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"  ",(0,s.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,s.kt)(d.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/osx/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,s.kt)(d.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,s.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,s.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht.")))),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Software#Etymologie"},"Wikipedia"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Signatur_(E-Mails_und_Postings)"},"Wikipedia"),(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-3"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://www.microsoft.com/de-ch/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558#activetab=pivot:overviewtab"},"Microsoft"),(0,s.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}v.isMDXComponent=!0},473946:function(e,n,t){n.Z=t.p+"assets/images/apps_bildschirmfoto-5134a720041a4c067c82dd3a53590259.png"},744161:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account-2781d50b2265c40ab3980d19e3946835.png"},95585:function(e,n,t){n.Z=t.p+"assets/images/mail_add_exchange-0a6ddd45f625eff7e5880a2c76c0a6af.png"},789499:function(e,n,t){n.Z=t.p+"assets/images/mail_app-85fd99977e78b1dcf89c16066082f9ea.webp"},2083:function(e,n,t){n.Z=t.p+"assets/images/take_screenshot-ed8c27f790910e5bf3b0cd725398b189.png"},631077:function(e,n,t){n.Z=t.p+"assets/images/apps_ausschneiden_skizzieren-d1222941d4454a5bb38cf7da3c50da3d.png"},848176:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_01-bdf9885a7616907a6ef06afa5588efae.png"},327211:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_02-9c73bcf7c83df2b6f5411d410224b316.png"},848226:function(e,n,t){n.Z=t.p+"assets/images/mail_add_account_03-98a892a644600fd5de5f21ed0902f364.png"},580326:function(e,n,t){n.Z=t.p+"assets/images/mail_app-85c1bc06be8800f65f30e61189f9e422.png"}}]);