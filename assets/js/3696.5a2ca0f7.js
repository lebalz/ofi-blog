"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3696],{39058:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),n=a(86010),r=a(65967),i=a(87524),o=a(39960),s=a(95999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.default)(m.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.default)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.default)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(13102);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.default)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},99703:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(95999),r=a(32244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&l.createElement(r.Z,{permalink:i,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},15289:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(44996),r=a(9460);function i(e){let{children:t,className:a}=e;const{frontMatter:i,assets:o,metadata:{description:s}}=(0,r.C)(),{withBaseUrl:m}=(0,n.C)(),c=o.image??i.image,u=i.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&l.createElement("meta",{itemProp:"description",content:s}),c&&l.createElement("link",{itemProp:"image",href:m(c,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}},99714:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(86010),r=a(18780),i=a(9460),o=a(45042);function s(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,i.C)();return l.createElement("div",{id:s?r.blogPostContainerID:void 0,className:(0,n.default)("markdown",a),itemProp:"articleBody"},l.createElement(o.Z,null,t))}},12046:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(67294),n=a(86010),r=a(9460),i=a(84881),o=a(71526),s=a(87462),m=a(95999),c=a(39960);function u(){return l.createElement("b",null,l.createElement(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,s.Z)({"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(u,null))}const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function p(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:m,hasTruncateMarker:c}=e,u=!t&&c,p=a.length>0;return p||u||m?l.createElement("footer",{className:(0,n.default)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull)},p&&l.createElement("div",{className:(0,n.default)("col",{"col--9":u})},l.createElement(o.Z,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(i.Z,{editUrl:m})),u&&l.createElement("div",{className:(0,n.default)("col text--right",{"col--3":p})},l.createElement(d,{blogPostTitle:s,to:e.permalink}))):null}},79224:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(67294),n=a(86010),r=a(39960),i=a(9460);const o={title:"title_f1Hy"};function s(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,i.C)(),{permalink:m,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.default)(o.title,t),itemProp:"headline"},s?c:l.createElement(r.Z,{itemProp:"url",to:m},c))}var m=a(95999),c=a(88824);const u={container:"container_mt6G"};function d(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,c.c)();return t=>{const a=Math.ceil(t);return e(a,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function g(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return l.createElement(l.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,i.C)(),{date:r,formattedDate:o,readingTime:s}=a;return l.createElement("div",{className:(0,n.default)(u.container,"margin-vert--md",t)},l.createElement(g,{date:r,formattedDate:o}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(p,null),l.createElement(d,{readingTime:s})))}function E(e){return e.href?l.createElement(r.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:s,email:m}=t,c=o||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.default)("avatar margin-bottom--sm",a)},s&&l.createElement(E,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(E,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,i.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.default)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.default)(!o&&"col col--6",o?b.imageOnlyAuthorCol:b.authorCol),key:t},l.createElement(f,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(s,null),l.createElement(h,null),l.createElement(v,null))}},79985:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(9460),r=a(18835);function i(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},84881:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(95999),r=a(35281),i=a(87462),o=a(86010);const s={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(s.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(39960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return l.createElement(r.Z,{className:(0,n.default)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},13008:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(39960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.default)(i.tag,o?i.tagWithCount:i.tagRegular)},a,o&&l.createElement("span",null,o))}},71526:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(86010),r=a(95999),i=a(13008);const o={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.default)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o.tag},l.createElement(i.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>i});var l=a(67294),n=a(902);const r=l.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:i},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);