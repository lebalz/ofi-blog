"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[32913],{31498:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var t=i(83117),r=i(80102),o=(i(67294),i(3905)),a=i(84384),s=["components"],d={title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",image:"./images/compression.png"},m="Kompression",p={unversionedId:"Codes und Daten/compression/index",id:"version-24o/Codes und Daten/compression/index",title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",source:"@site/versioned_docs/version-24o/08-Codes und Daten/01-compression/index.md",sourceDirName:"08-Codes und Daten/01-compression",slug:"/Codes und Daten/compression/",permalink:"/24o/Codes und Daten/compression/",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/08-Codes und Daten/01-compression/index.md",tags:[],version:"24o",frontMatter:{title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",image:"./images/compression.png"},sidebar:"version-24o/sidebar",previous:{title:"Videos Editieren",permalink:"/24o/Computer/Video-Editor/video-editor"},next:{title:"1. Huffman-Codierung",permalink:"/24o/Codes und Daten/compression/huffman"}},l={image:i(75528).Z},c=[],u={toc:c};function g(e){var n=e.components,d=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,d,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kompression"},"Kompression"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)(a.Z,{bib:{author:"faircom",source:"https://docs.faircom.com/doc/v10ace/55874.htm",licence:"Unknown",licence_url:"https://www.faircom.com/",edited:!1},caption:"undefined",options:{},isInline:!1,src:i(75528).Z,mdxType:"Image"})),(0,o.kt)("p",null,"Die Datenkompression (abgeleitet aus dem lateinischen Wort \u201eCompressio\u201c: \u201eZusammendr\xfccken\u201c) \u2013 oder auch Datenkomprimierung genannt \u2013 ist ein Vorgang, bei dem die Menge digitaler Daten ",(0,o.kt)("strong",{parentName:"p"},"verdichtet oder reduziert")," wird. Dadurch sinkt der ben\xf6tigte Speicherplatz, und die \xdcbertragungszeit der Daten verk\xfcrzt sich."),(0,o.kt)("p",null,"Grunds\xe4tzlich wird bei der Datenkompression versucht, redundante Informationen (daher mehrfach vorhandene Informationen) zu entfernen. Dazu werden die Daten in eine Darstellung \xfcberf\xfchrt, mit der sich alle \u2013 oder zumindest die meisten \u2013 Informationen in k\xfcrzerer Form darstellen lassen. Diesen Vorgang \xfcbernimmt ein ",(0,o.kt)("em",{parentName:"p"},"Kodierer")," und man bezeichnet den Vorgang als Kompression oder Komprimierung. Die Umkehrung bezeichnet man als Dekompression oder Dekomprimierung."),(0,o.kt)("p",null,"Man spricht von ",(0,o.kt)("strong",{parentName:"p"},"verlustfreier Kompression")," wenn aus den komprimierten Daten wieder exakt die Originaldaten gewonnen werden k\xf6nnen. Das ist beispielsweise bei der Kompression von Textdokumenten notwendig."),(0,o.kt)("p",null,"Bei der ",(0,o.kt)("strong",{parentName:"p"},"verlustbehafteten Kompression")," k\xf6nnen die Originaldaten aus den komprimierten Daten meist nicht mehr exakt zur\xfcckgewonnen werden - ein Teil der Information geht also verloren. Die Algorithmen versuchen, m\xf6glichst nur \u201eunwichtige\u201c Informationen wegzulassen. Solche Verfahren werden h\xe4ufig zur Bild- oder Videokompression und Audiodatenkompression eingesetzt.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("p",null,"Ein Dateiformat (bspw. ",(0,o.kt)("inlineCode",{parentName:"p"},".docx")," oder ",(0,o.kt)("inlineCode",{parentName:"p"},".jpeg"),") enthalten komprimierte Daten, so dass ein spezielles Programm (bspw. Word oder ein Fotobetrachter) verwendet werden muss, damit der Inhalt dekomprimiert und angezeigt werden kann."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div",id:"zip-ordner"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ZIP Ordner")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sollen Datei(en) m\xf6glichst platzsparend abgespeichert werden, kann eine Benutzer:in daraus eine ",(0,o.kt)("inlineCode",{parentName:"p"},".zip"),"-Datei erstellen. Also eine Datei, die genauso wie ein Reissverschluss (engl. ",(0,o.kt)("em",{parentName:"p"},"Zipper"),") die Daten platzsparend zusammenf\xfcgt und abspeichert."),(0,o.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,o.kt)(a.Z,{bib:void 0,caption:"",options:{width:"100px"},isInline:!1,src:i(95440).Z,alt:"--width=100px",mdxType:"Image"})))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,o.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Datenkompression"},"Wikipedia"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0},75528:function(e,n,i){n.Z=i.p+"assets/images/compression-4cc710ab9752b2a5083c784042c3e3e8.png"},95440:function(e,n,i){n.Z=i.p+"assets/images/zip-osx-5c1518df20c67063261e9cc8dafec3db.png"}}]);