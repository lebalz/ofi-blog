"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[29514,20486],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(67294),l=n(86010),r=n(10833),o=n(35281),i=n(43320),c=n(53438),s=n(74477),d=n(1116),m=n(65967),u=n(95999),b=n(12466),p=n(85936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(r.current?r.current=!1:a>=o?(i(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",o.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(91442),g=n(16550),v=n(87524),_=n(86668),k=n(21327),C=n(87462);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var w=n(59689),x=n(902);const T=Symbol("EmptyContext"),B=a.createContext(T);function y(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(B.Provider,{value:r},t)}var L=n(86043),A=n(48596),Z=n(39960),F=n(72389);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),f=function(e){const t=(0,F.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),g=(0,c._F)(t,r),v=(0,A.Mg)(h,r),{collapsed:k,setCollapsed:S}=(0,L.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),w=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:k,updateCollapsed:w}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,l.default)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(Z.Z,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?w(!1):(e.preventDefault(),w())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),w()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:i+1})))}var W=n(13919),P=n(39471);const D={menuExternalLink:"menuExternalLink_NmtK"};function z(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,r),E=(0,W.Z)(m);return a.createElement("li",{className:(0,l.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(Z.Z,(0,C.Z)({className:(0,l.default)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(P.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function V(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,l.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[R.menuHtmlItem,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(M,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(y,null,t.map(((e,t)=>a.createElement(U,(0,C.Z)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(K),G={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Y(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,w.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",G.menu,i&&G.menuWithAnnouncementBar,r)},a.createElement("ul",{className:(0,l.default)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const $="sidebar_njMd",q="sidebarWithHideableNavbar_wUlq",O="sidebarHidden_VK0M",X="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return a.createElement("div",{className:(0,l.default)($,i&&q,o&&O)},i&&a.createElement(k.Z,{tabIndex:-1,className:X}),a.createElement(Y,{path:t,sidebar:n}),c&&a.createElement(N,{onClick:r}))}const Q=a.memo(J);var ee=n(13102),te=n(93163);const ne=e=>{let{sidebar:t,path:n}=e;const r=(0,te.e)();return a.createElement("ul",{className:(0,l.default)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ae(e){return a.createElement(ee.Zo,{component:ne,props:e})}const le=a.memo(ae);function re(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),l&&a.createElement(le,e))}const oe={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:oe.expandButtonIcon}))}const ce={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function se(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,g.TH)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,f.n)()&&s(!0),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,l.default)(o.k.docs.docSidebarContainer,ce.docSidebarContainer,n&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,l.default)(ce.sidebarViewport,c&&ce.sidebarViewportHidden)},a.createElement(re,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(ie,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.default)(me.docMainContainer,(t||!r)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function pe(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(ue,{hiddenSidebarContainer:l},t)))}var he=n(20486),Ee=n(90197);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,c.hI)(e);if(!n)return a.createElement(he.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(r.FG,{className:(0,l.default)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(pe,null,i)))))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),l=n(95999),r=n(10833),o=n(65967),i=n(16550);function c(){const e=(0,i.TH)();if(/^\/24(i|f|o|L|K)\//i.test(e.pathname)){const t=`https://ofi.24.gbsl.website${e.pathname}${e.hash}${e.search}`;return a.createElement(a.Fragment,null,a.createElement(r.d,{title:"Seite archiviert"}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement("a",{href:t,className:"button hero__title button--outline button--success margin--xs"},"Weiter zum Artikel"," ",a.createElement("i",{className:"mdi mdi-arrow-right-bold-box",style:{marginLeft:"0.1em"}}))),a.createElement("p",null,"Die Kurse fr\xfcherer Jahrg\xe4nge wurden ",a.createElement("b",null,"archiviert")," und werden nicht weiter aktualisiert/ver\xe4ndert."),a.createElement("p",null,"Die archivierte Seite ist unter"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website"},"https://ofi.24.gbsl.website")," zu finden."),a.createElement("p",null,"Bis zum Ende Ihrer Schulzeit k\xf6nnen Sie sich dort weiterhin mit Ihrem Schulaccount einloggen, ihre Daten bearbeiten, ver\xe4ndern oder aber auch die gespeicherten Daten"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website/login"},"herunterladen")," oder deren"," ",a.createElement("a",{href:"https://ofi.24.gbsl.website/login"},"L\xf6schung")," beantragen."),a.createElement("a",{href:t,className:"button button--success margin--xs"},"Weiter zum Artikel"," ",a.createElement("i",{className:"mdi mdi-arrow-right-bold-box",style:{marginLeft:"1em",marginRight:"-1em"}})))))))}return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);