"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[58598],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(83117),r=t(67294),a=t(72389),o=t(36162),l=t(86010),s="tabItem_LplD";function d(e){var n,t,a,d=e.lazy,u=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,o.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(v),I=N[0],Z=N[1],x=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==I&&h.some((function(e){return e.value===C}))&&Z(C)}var E=function(e){var n=e.currentTarget,t=x.indexOf(n),i=h[t].value;i!==I&&(S(n),Z(i),null!=m&&w(m,i))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=x.indexOf(e.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":u},f)},h.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:E,onClick:E},a,{className:(0,l.default)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function u(e){var n=(0,a.Z)();return r.createElement(d,(0,i.Z)({key:String(n)},e))}},84384:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(67294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(92814),o=t(51436),l=t(86010),s=function(e){return i.createElement("span",{className:r.details},i.createElement("span",{className:(0,l.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,l.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,l.default)("badge badge--secondary")},i.createElement(a.G,{icon:o.Xjp}))))},d=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},u=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+d(t.size)+")",n.maxHeight=d(t.size),delete t.size),t.height&&(n.maxHeight=d(t.height),n.height=d(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+d(t.width)+")",n.width=d(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},c=function(e){if(e.isInline)return i.createElement(u,e);var n=i.useState(!1),t=(n[0],n[1]),a=i.useState(!1),o=a[0],d=a[1],c=e.caption&&"undefined"!==e.caption,p=e.bib||c;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,l.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,r,a,o;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,r=e.clientY,a=n.left<=i&&n.right>=i,o=n.top<=r&&n.bottom>=r,a&&o||t(!1)}},i.createElement(u,e),p&&i.createElement("figcaption",null,c&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,l.default)(r.bib,o?r.visible:void 0),onClick:function(){return d(!o)}},"@"),o&&i.createElement(s,e.bib)))}},85107:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(21073),r=t(67294),a=t(9877),o=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},84741:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),o=t(84384),l=t(85107),s=t(58215),d=["components"],u={title:"2. VS Code"},c="VS Code",p={unversionedId:"Software/vscode",id:"version-24K/Software/vscode",title:"2. VS Code",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/versioned_docs/version-24K/03-Software/02-vscode.mdx",sourceDirName:"03-Software",slug:"/Software/vscode",permalink:"/24K/Software/vscode",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/03-Software/02-vscode.mdx",tags:[],version:"24K",sidebarPosition:2,frontMatter:{title:"2. VS Code"},sidebar:"version-24K/sidebar",previous:{title:"1. Python",permalink:"/24K/Software/python"},next:{title:"Programmieren-1",permalink:"/24K/category/programmieren-1"}},m={},f=[{value:"Installieren",id:"installieren",level:2},{value:"Konfigurieren",id:"konfigurieren",level:2},{value:"Python Interpreter",id:"python-interpreter",level:3},{value:"Verwenden",id:"verwenden",level:2},{value:"1. Wo ist was?",id:"1-wo-ist-was",level:3},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",level:3},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",level:3},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",level:3},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",level:3}],b={toc:f};function h(e){var n=e.components,u=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,i.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vs-code"},"VS Code"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.kt)("h2",{id:"installieren"},"Installieren"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unter ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Surface Pro X -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ARM")),(0,a.kt)("li",{parentName:"ul"},"Windows -> ",(0,a.kt)("inlineCode",{parentName:"li"},"64 bit")),(0,a.kt)("li",{parentName:"ul"},"Mac mit M1 Chip -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Apple Silicon")),(0,a.kt)("li",{parentName:"ul"},"Mac OS -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Intel Chip"),(0,a.kt)(o.Z,{bib:void 0,caption:"Download Optionen",options:{},isInline:!0,src:t(69145).Z,alt:"Download Optionen",mdxType:"Image"})))),(0,a.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken"),(0,a.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installations-Optionen"),(0,a.kt)(l.Z,{mdxType:"OsTabs"},(0,a.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:t(8702).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:t(84135).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(34493).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:t(79557).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:t(12471).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:t(74729).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:t(49319).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,a.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei ist eine komprimierte ",(0,a.kt)("inlineCode",{parentName:"li"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,a.kt)("li",{parentName:"ol"},"Die Datei ",(0,a.kt)("inlineCode",{parentName:"li"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,a.kt)("li",{parentName:"ol"},"Beim ersten \xd6fnnen kommt folgender Hinweis:\n",(0,a.kt)(o.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:t(30978).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,a.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,a.kt)("p",null,"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,a.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"VS Code Plugins",options:{},isInline:!1,src:t(972).Z,alt:"VS Code Plugins",mdxType:"Image"})),(0,a.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,a.kt)("p",null,"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,a.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,a.kt)(l.Z,{mdxType:"OsTabs"},(0,a.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(60025).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"}))),(0,a.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Der ",(0,a.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"Interpreter Ausw\xe4hlen",options:{},isInline:!1,src:t(71675).Z,alt:"Interpreter Ausw\xe4hlen",mdxType:"Image"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Eine andere Version verwenden"),(0,a.kt)("p",null,"Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,a.kt)("p",null,"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,a.kt)("p",null,"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,a.kt)("h2",{id:"verwenden"},"Verwenden"),(0,a.kt)("p",null,"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,a.kt)("h3",{id:"1-wo-ist-was"},"1. Wo ist was?"),(0,a.kt)("p",null,"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(30652).Z,mdxType:"Image"})),(0,a.kt)("h3",{id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(24611).Z,mdxType:"Image"})),(0,a.kt)("h3",{id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,a.kt)("p",null,"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(93156).Z,mdxType:"Image"})),(0,a.kt)("h3",{id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,a.kt)("p",null,'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,a.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,a.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(37005).Z,mdxType:"Image"})),(0,a.kt)("h3",{id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:t(60828).Z,mdxType:"Image"})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},93156:function(e,n,t){n.Z=t.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},37005:function(e,n,t){n.Z=t.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},30652:function(e,n,t){n.Z=t.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},60828:function(e,n,t){n.Z=t.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},24611:function(e,n,t){n.Z=t.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},30978:function(e,n,t){n.Z=t.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},71675:function(e,n,t){n.Z=t.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},69145:function(e,n,t){n.Z=t.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},972:function(e,n,t){n.Z=t.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},8702:function(e,n,t){n.Z=t.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},84135:function(e,n,t){n.Z=t.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},34493:function(e,n,t){n.Z=t.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},79557:function(e,n,t){n.Z=t.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},12471:function(e,n,t){n.Z=t.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},74729:function(e,n,t){n.Z=t.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},49319:function(e,n,t){n.Z=t.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},60025:function(e,n,t){n.Z=t.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);