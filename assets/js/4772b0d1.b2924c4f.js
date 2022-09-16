"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?i.createElement(h,l(l({ref:t},m),{},{components:n})):i.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n"},l="Use Templates for SQL Queries",o={unversionedId:"adrs/using-templates-for-sql-queries",id:"adrs/using-templates-for-sql-queries",title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n",source:"@site/docs/adrs/0073-using-templates-for-sql-queries.md",sourceDirName:"adrs",slug:"/adrs/using-templates-for-sql-queries",permalink:"/mymove-docs/docs/adrs/using-templates-for-sql-queries",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0073-using-templates-for-sql-queries.md",tags:[],version:"current",sidebarPosition:73,frontMatter:{title:"0073 Use Templates for SQL Queries",description:"Decision outcome: Establish a pattern for SQL query template artifacts\n"},sidebar:"adrsSidebar",previous:{title:"0072 Using React-App-Rewired",permalink:"/mymove-docs/docs/adrs/using-react-app-rewired"}},s={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Do not <del>try to reinvent the wheel</del> circumvent Pop - ADR 0001",id:"do-not-try-to-reinvent-the-wheel-circumvent-pop---adr-0001",level:4},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Do nothing</em>",id:"do-nothing",level:3},{value:"<em>Utilize a SQL Template Engine</em>",id:"utilize-a-sql-template-engine",level:3},{value:"<em>Build out our own SQL Templating architecture</em>",id:"build-out-our-own-sql-templating-architecture",level:3},{value:"<em>A hybrid approach using an external library implemented to work with Pop</em>",id:"a-hybrid-approach-using-an-external-library-implemented-to-work-with-pop",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-templates-for-sql-queries"},"Use Templates for SQL Queries"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User Story:")," ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-12577"},"MB-12577"))," \ud83d\udd12"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"The Go method which fetches a move's data change history contains a very large SQL query in which it sets up the data that is being tracked by the database triggers whenever data changes in tables.\nThe problem with such a large SQL statement in Go code is that it is essentially a string with no SQL linting or checking. This also means that developers lose the benefit of potential syntax highlighting when writing SQL queries."),(0,a.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,a.kt)("h4",{id:"do-not-try-to-reinvent-the-wheel-circumvent-pop---adr-0001"},"Do not ",(0,a.kt)("del",{parentName:"h4"},"try to reinvent the wheel")," circumvent Pop - ",(0,a.kt)("a",{parentName:"h4",href:"/mymove-docs/docs/adrs/go-orm"},"ADR 0001")),(0,a.kt)("p",null,"While evaluating potential options and opportunities, one key consideration is how the chosen approach will work with the existing ORM architecture ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"(Pop)"),"."),(0,a.kt)("p",null,"In order to achieve the best return value with the least effort, the chosen approach should not require excessive refactoring or removal of the Pop ORM pattern if at all possible."),(0,a.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"bold denotes chosen"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Do nothing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Utilize a SQL Template Engine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Build out our own SQL Templating architecture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A hybrid approach using an external library implemented to work with Pop"))),(0,a.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,a.kt)("em",{parentName:"li"},"A hybrid approach using an external library implemented to work with Pop")),(0,a.kt)("li",{parentName:"ul"},"Positive Outcomes: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We will have a SQL templating pattern that is easy to implement without requiring major refactor, provides us with linting opportunities and better code visualization, and may be very useful in the future if we end up implementing additional complex queries."))),(0,a.kt)("li",{parentName:"ul"},"Consequences: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If this new templating is not utilized elsewhere we will likely continue defaulting to writing SQL queries as strings in the Go code, which is our current pattern. "))),(0,a.kt)("li",{parentName:"ul"},"Other considerations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The templating pattern must be clearly documented in order to be easily adopted.")))),(0,a.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,a.kt)("h3",{id:"do-nothing"},(0,a.kt)("em",{parentName:"h3"},"Do nothing")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"There's no work to be done so teams can focus on other work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," ",(0,a.kt)("em",{parentName:"li"},"Existing SQL is embedded in Go files as strings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," The current approach to SQL queries means that we cannot benefit\nfrom linting, checking, or potentially useful IDE visualization when formatting\nqueries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," Long queries become more and more difficult to maintain")))),(0,a.kt)("h3",{id:"utilize-a-sql-template-engine"},(0,a.kt)("em",{parentName:"h3"},"Utilize a SQL Template Engine")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"Simple setup.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"The syntax is simple and easy to learn."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Ongoing SQL work should be more consistent, and have positive impacts\nfor onboarding efforts."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," ",(0,a.kt)("em",{parentName:"li"},"The most readily applicable templating engine may not be consistently maintained/supported."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Davmuz/gqt"},"Go SQL Templates")," most recent commit was 6 years ago")))),(0,a.kt)("h3",{id:"build-out-our-own-sql-templating-architecture"},(0,a.kt)("em",{parentName:"h3"},"Build out our own SQL Templating architecture")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"Allows engineering team to take ownership of the templating design.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," ",(0,a.kt)("em",{parentName:"li"},"Additional effort to build out initially"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Once established, future SQL query work following the determined pattern should\nbe more consistent, and have positive impacts for onboarding efforts.")))),(0,a.kt)("h3",{id:"a-hybrid-approach-using-an-external-library-implemented-to-work-with-pop"},(0,a.kt)("em",{parentName:"h3"},"A hybrid approach using an external library implemented to work with Pop")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"Simple setup.")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"The level of effort necessary to initiate refactor is low.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"The syntax is simple and easy to learn."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Ongoing SQL work should be more consistent, and have positive impacts\nfor onboarding efforts."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"Allows engineering team to take ownership of the templating design.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," ",(0,a.kt)("em",{parentName:"li"},"Significantly less effort to build out initially than completely designing our own"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+")," Once established, future SQL query work following the determined pattern should\nbe more consistent, and have positive impacts for onboarding efforts.")))))}u.isMDXComponent=!0}}]);