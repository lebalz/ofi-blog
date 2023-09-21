"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7894],{39058:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(86010),r=a(65967),o=a(87524),i=a(39960),s=a(95999);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.default)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.default)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.default)(c.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(13102);function d(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.Zo,{component:d,props:e})}function f(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?n.createElement(g,{sidebar:t}):n.createElement(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(f,{sidebar:t}),n.createElement("main",{className:(0,l.default)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},15289:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(44996),r=a(9460);function o(e){let{children:t,className:a}=e;const{frontMatter:o,assets:i,metadata:{description:s}}=(0,r.C)(),{withBaseUrl:c}=(0,l.C)(),m=i.image??o.image,u=o.keywords??[];return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"description",content:s}),m&&n.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),u.length>0&&n.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}},99714:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r=a(18780),o=a(9460),i=a(45042);function s(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,o.C)();return n.createElement("div",{id:s?r.blogPostContainerID:void 0,className:(0,l.default)("markdown",a),itemProp:"articleBody"},n.createElement(i.Z,null,t))}},12046:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),l=a(86010),r=a(9460),o=a(84881),i=a(71526),s=a(87462),c=a(95999),m=a(39960);function u(){return n.createElement("b",null,n.createElement(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return n.createElement(m.Z,(0,s.Z)({"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(u,null))}const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function f(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:c,hasTruncateMarker:m}=e,u=!t&&m,f=a.length>0;return f||u||c?n.createElement("footer",{className:(0,l.default)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull)},f&&n.createElement("div",{className:(0,l.default)("col",{"col--9":u})},n.createElement(i.Z,{tags:a})),t&&c&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(o.Z,{editUrl:c})),u&&n.createElement("div",{className:(0,l.default)("col text--right",{"col--3":f})},n.createElement(d,{blogPostTitle:s,to:e.permalink}))):null}},79224:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(67294),l=a(86010),r=a(39960),o=a(9460);const i={title:"title_f1Hy"};function s(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,o.C)(),{permalink:c,title:m}=a,u=s?"h1":"h2";return n.createElement(u,{className:(0,l.default)(i.title,t),itemProp:"headline"},s?m:n.createElement(r.Z,{itemProp:"url",to:c},m))}var c=a(95999),m=a(88824);const u={container:"container_mt6G"};function d(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.c)();return t=>{const a=Math.ceil(t);return e(a,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function g(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function p(e){let{className:t}=e;const{metadata:a}=(0,o.C)(),{date:r,formattedDate:i,readingTime:s}=a;return n.createElement("div",{className:(0,l.default)(u.container,"margin-vert--md",t)},n.createElement(g,{date:r,formattedDate:i}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(d,{readingTime:s})))}function h(e){return e.href?n.createElement(r.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:i,imageURL:s,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.default)("avatar margin-bottom--sm",a)},s&&n.createElement(h,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(h,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function E(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,o.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.default)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.default)(!i&&"col col--6",i?b.imageOnlyAuthorCol:b.authorCol),key:t},n.createElement(v,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})))))}function _(){return n.createElement("header",null,n.createElement(s,null),n.createElement(p,null),n.createElement(E,null))}},84881:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),l=a(95999),r=a(35281),o=a(87462),i=a(86010);const s={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010),r=a(39960);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.default)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},39407:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.default)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:s,linkActiveClassName:c})))}},93743:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),l=a(67294),r=a(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),a=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:a.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function d(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const g=l.memo(d);function f(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,r.L)(),h=m??p.tableOfContents.minHeadingLevel,v=d??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),l.createElement(g,(0,n.Z)({toc:b,className:a,linkClassName:s},f))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(39960);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.default)(o.tag,i?o.tagWithCount:o.tagRegular)},a,i&&n.createElement("span",null,i))}},71526:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r=a(95999),o=a(13008);const i={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.default)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i.tag},n.createElement(o.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var n=a(67294),l=a(902);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(67294),l=a(52263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},98279:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(67294),l=a(86010),r=a(10833),o=a(35281),i=a(9460),s=a(39058),c=a(18835),m=a(87462),u=a(95999),d=a(32244);function g(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(d.Z,(0,m.Z)({},a,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(d.Z,(0,m.Z)({},t,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:a,description:l,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return n.createElement(r.d,{title:a,description:l,keywords:u,image:d},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=a(39407);function h(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:h}=u;return n.createElement(s.Z,{sidebar:t,toc:!d&&r.length>0?n.createElement(p.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},n.createElement(c.Z,null,a),(o||m)&&n.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return n.createElement(i.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.default)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},n.createElement(f,null),n.createElement(h,{sidebar:e.sidebar},n.createElement(t,null))))}var b=a(38684);function E(e){return n.createElement(b._.Provider,{value:e.content.frontMatter},n.createElement(v,{...e}))}}}]);