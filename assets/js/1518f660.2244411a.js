"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1617],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44947:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={},p=void 0,l={unversionedId:"dev/tools/SchemaSpy",id:"dev/tools/SchemaSpy",isDocsHomePage:!1,title:"SchemaSpy",description:"SchemaSpy is a tool that generates a visual representation of the database as a webpage you can navigate.",source:"@site/docs/dev/tools/SchemaSpy.md",sourceDirName:"dev/tools",slug:"/dev/tools/SchemaSpy",permalink:"/mymove-docs/docs/dev/tools/SchemaSpy",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/tools/SchemaSpy.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Configure-Postico-or-TablePlus-to-connect-to-mymove-DB",permalink:"/mymove-docs/docs/dev/tools/Configure-Postico-or-TablePlus-to-connect-to-mymove-DB"},next:{title:"Docusaurus",permalink:"/mymove-docs/docs/dev/tools/docusaurus"}},c=[{value:"What&#39;s In SchemaSpy",id:"whats-in-schemaspy",children:[{value:"What SchemaSpy Isn&#39;t",id:"what-schemaspy-isnt",children:[]}]},{value:"How to generate SchemaSpy",id:"how-to-generate-schemaspy",children:[]},{value:"How to view a pre-generated SchemaSpy",id:"how-to-view-a-pre-generated-schemaspy",children:[]}],m={toc:c};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SchemaSpy is a tool that generates a visual representation of the database as a webpage you can navigate."),(0,r.kt)("p",null,"It makes it easier to view and understand the tables and fields and view their descriptions and relationships."),(0,r.kt)("h2",{id:"whats-in-schemaspy"},"What's In SchemaSpy"),(0,r.kt)("p",null,"You can see descriptions of each table and field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tables")," tab. Here's an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," table. You can see the comments folder with a meaningful description of the field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sample image of users table in schemaspy",src:a(81395).Z})),(0,r.kt)("p",null,"You can also see a diagram of the whole database model in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relationships")," tab. This shows you how the tables are connection to each other in terms of foreign keys."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sample image of db diagram",src:a(53044).Z})),(0,r.kt)("h3",{id:"what-schemaspy-isnt"},"What SchemaSpy Isn't"),(0,r.kt)("p",null,"SchemaSpy does not let you edit anything about the database. It is not a database schema editor."),(0,r.kt)("p",null,"SchemaSpy also does not show you any data that's in the tables. It shows you the structure but not the contents of the database. So it's not mean to view or update any records."),(0,r.kt)("h2",{id:"how-to-generate-schemaspy"},"How to generate SchemaSpy"),(0,r.kt)("p",null,"SchemaSpy is run as a command-line tool that generates a website."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout the MilMove ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove"},"source repo")," on your computer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"make schemaspy")," to generate the html website."),(0,r.kt)("p",{parentName:"li"}," You should see the test database get reset and migrated again to ensure we have an up-to-date database from which to generate the SchemaSpy website."),(0,r.kt)("p",{parentName:"li"}," Finally you should see the following message:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Schemaspy output can be found in ./tmp/schemaspy\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to the directory indicated above."),(0,r.kt)("p",{parentName:"li"}," Type ",(0,r.kt)("inlineCode",{parentName:"p"},"open index.html")," and the SchemaSpy application should start running in your browser."))),(0,r.kt)("h2",{id:"how-to-view-a-pre-generated-schemaspy"},"How to view a pre-generated SchemaSpy"),(0,r.kt)("p",null,"If you can't checkout the repo, you can view a pre-generated version that we have saved into google drive."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Head to this ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1LNu-oqXZf748pK9iPP3xwS1GKSnu-t1G"},"folder in Google drive")," to find the pre-generated zips.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the most recent SchemaSpy ZIP file, with a title like ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaspy_20210218.zip"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unzip the file on your computer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaspy")," directory that results from this in Finder.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find and double click ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tada! \ud83c\udf89 Your web browser should open up and the SchemaSpy application will be running in it!"))))}u.isMDXComponent=!0},53044:function(e,t,a){t.Z=a.p+"assets/images/diagram-schemaspy-6ed08c9bb968253b33ac28c3af95e61b.png"},81395:function(e,t,a){t.Z=a.p+"assets/images/users-schemaspy-d37d2210cada3ee0de69e2d7ad722968.png"}}]);