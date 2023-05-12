"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9817],{1310:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),r=a(67294),i=a(86010),l=a(35281),s=a(53438),c=a(48596),o=a(39960),m=a(95999),d=a(44996);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const g={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.Z,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function f(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.default)(l.k.docs.docBreadcrumbs,g.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},34228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(67294),r=a(1944),i=a(53438),l=a(44996),s=a(86010),c=a(39960),o=a(13919),m=a(95999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(c.Z,{href:t,className:(0,s.default)("card padding--lg",d.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.default)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(f,{items:a.items,className:t})}function f(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.default)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}var E=a(80049),N=a(23120),_=a(65973),k=a(1310),Z=a(92503);const L={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:L.generatedIndexPage},n.createElement(N.Z,null),n.createElement(k.Z,null),n.createElement(_.Z,null),n.createElement("header",null,n.createElement(Z.Z,{as:"h1",className:L.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(f,{items:a.items,className:L.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(E.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function w(e){return n.createElement(n.Fragment,null,n.createElement(T,e),n.createElement(y,e))}},80049:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),r=a(67294),i=a(95999),l=a(32244);function s(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.Z,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},23120:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),r=a(86010),i=a(52263),l=a(39960),s=a(95999),c=a(94104),o=a(35281),m=a(60373),d=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,c.Jo)(s),v=u??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.default)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:g.label,to:v.path,onClick:()=>d(g.name)})))}function v(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}},92503:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(95999),s=a(86668),c=a(39960);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.Z)({},m,{className:(0,i.default)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010),i=a(39960);function l(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(i.Z,{className:(0,r.default)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},65973:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010),i=a(35281),l=a(74477);const s="version_QPgx",c="admin_MkoQ",o="badge_f3Vz",m="options_zu7h",d="clearFilter_B01g",u="menu__XAU",h="item_Sd7c";var b=a(21314);const g=(0,a(46670).Pi)((e=>{let{className:t}=e;const a=(0,l.E)(),g=(0,b.oR)("adminStore"),v=(0,b.oR)("userStore");if(a.badge){const e=g.isAdmin?v.groupsByClass(a.label):[];return n.createElement("div",{className:(0,r.default)(s,e.length>0&&c)},n.createElement("span",{className:(0,r.default)(t,i.k.docs.docVersionBadge,"badge","badge--secondary",o)},a.label),e.length>0&&n.createElement("div",{className:(0,r.default)("dropdown","dropdown--hoverable")},n.createElement("span",{className:(0,r.default)("badge","badge--secondary",m)},g.viewGroupFilter?n.createElement(n.Fragment,null,g.viewGroupFilter,n.createElement("i",{className:(0,r.default)("mdi","mdi-close",d),onClick:()=>{g.clearViewGroupFilter()}})):n.createElement("i",{className:(0,r.default)("mdi","mdi-chevron-right")}),n.createElement("ul",{className:(0,r.default)("dropdown__menu",u)},e.map(((e,t)=>n.createElement("div",{className:(0,r.default)("badge","badge--secondary","dropdown__link","badge--sm",h),key:t,onClick:()=>{g.setViewGroupFilter(e)}},e)))))))}return null}))}}]);