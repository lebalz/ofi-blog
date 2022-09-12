"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9817],{31986:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(83117),r=a(67294),l=a(86010),i=a(35281),s=a(53438),c=a(48596),o=a(39960),m=a(44996),d=a(95999);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function h(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?r.createElement("span",{className:l,itemProp:"name"},t):a?r.createElement(o.Z,{className:l,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function v(e){let{children:t,active:a,index:i,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.default)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}function p(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.default)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(v,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(h,{href:t.href,isLast:n},t.label))})))):null}},34228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(67294),r=a(1944),l=a(53438),i=a(44996),s=a(86010),c=a(39960),o=a(13919),m=a(95999);const d="cardContainer_fWXF",u="cardTitle_rnsV",b="cardDescription_PWke";function h(e){let{href:t,children:a}=e;return n.createElement(c.Z,{href:t,className:(0,s.default)("card padding--lg",d)},a)}function v(e){let{href:t,icon:a,title:r,description:l}=e;return n.createElement(h,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",u),title:r},a," ",r),l&&n.createElement("p",{className:(0,s.default)("text--truncate",b),title:l},l))}function g(e){let{item:t}=e;const a=(0,l.Wl)(t);return a?n.createElement(v,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){var t;let{item:a}=e;const r=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,l.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(v,{href:a.href,icon:r,title:a.label,description:null==i?void 0:i.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{className:t}=e;const a=(0,l.jA)();return n.createElement(N,{items:a.items,className:t})}function N(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const r=(0,l.MN)(t);return n.createElement("section",{className:(0,s.default)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}var _=a(4966),k=a(23120),Z=a(6122),L=a(31986),T=a(92503);const y="generatedIndexPage_vN6x",w="list_eTzJ",x="title_kItE";function I(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.Z)(t.image)})}function C(e){let{categoryGeneratedIndex:t}=e;const a=(0,l.jA)();return n.createElement("div",{className:y},n.createElement(k.Z,null),n.createElement(L.Z,null),n.createElement(Z.Z,null),n.createElement("header",null,n.createElement(T.Z,{as:"h1",className:x},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(N,{items:a.items,className:w})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(_.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function V(e){return n.createElement(n.Fragment,null,n.createElement(I,e),n.createElement(C,e))}},4966:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(83117),r=a(67294),l=a(95999),i=a(86010),s=a(39960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return r.createElement(s.Z,{className:(0,i.default)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},23120:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010),l=a(52263),i=a(39960),s=a(95999),c=a(94104),o=a(35281),m=a(60373),d=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,l.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),g=null!=u?u:(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.default)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},92503:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),l=a(86010),i=a(95999),s=a(86668);const c="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();return"h1"!==t&&a?r.createElement(t,(0,n.Z)({},m,{className:(0,l.default)("anchor",d?o:c),id:a}),m.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,n.Z)({},m,{id:void 0}))}},6122:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294),r=a(86010),l=a(35281),i=a(74477);const s="version_QPgx",c="admin_MkoQ",o="badge_f3Vz",m="options_zu7h",d="clearFilter_B01g";var u=a(21314);const b=(0,a(71217).Pi)((e=>{let{className:t}=e;const a=(0,i.E)(),b=(0,u.oR)("adminStore"),h=(0,u.oR)("userStore");if(a.badge){const e=b.isAdmin?h.groupsByClass(a.label):[];return n.createElement("div",{className:(0,r.default)(s,e.length>0&&c)},n.createElement("span",{className:(0,r.default)(t,l.k.docs.docVersionBadge,"badge badge--secondary",o)},a.label),e.length>0&&n.createElement("div",{className:(0,r.default)("dropdown","dropdown--hoverable")},n.createElement("span",{className:(0,r.default)("badge","badge--secondary",m)},b.viewGroupFilter?n.createElement(n.Fragment,null,b.viewGroupFilter,n.createElement("i",{className:(0,r.default)("mdi","mdi-close",d),onClick:()=>{b.clearViewGroupFilter()}})):n.createElement("i",{className:(0,r.default)("mdi","mdi-chevron-right")}),n.createElement("ul",{className:"dropdown__menu"},e.map(((e,t)=>n.createElement("span",{className:(0,r.default)("badge","badge--primary"),key:t,onClick:()=>{b.setViewGroupFilter(e)}},e)))))))}return null}))}}]);