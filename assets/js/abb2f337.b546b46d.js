"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7752],{36435:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=o(87462),n=(o(67294),o(3905));o(95657);const i={title:"0001 Go ORM"},r="Use [Pop](https://github.com/gobuffalo/pop) as the ORM for 3M",l={unversionedId:"adrs/go-orm",id:"adrs/go-orm",title:"0001 Go ORM",description:"3M will have include evolving data structures that we anticipate will change significantly throughout development.",source:"@site/docs/adrs/0001-go-orm.md",sourceDirName:"adrs",slug:"/adrs/go-orm",permalink:"/mymove-docs/docs/adrs/go-orm",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0001-go-orm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"0001 Go ORM"},sidebar:"adrsSidebar",previous:{title:"0000 Server Framework",permalink:"/mymove-docs/docs/adrs/server-framework"},next:{title:"0002 Go package management",permalink:"/mymove-docs/docs/adrs/go-package-management"}},s={},m=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"No ORM",id:"no-orm",level:3},{value:"Other Go ORM",id:"other-go-orm",level:3}],d={toc:m};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-pop-as-the-orm-for-3m"},"Use ",(0,n.kt)("a",{parentName:"h1",href:"https://github.com/gobuffalo/pop"},"Pop")," as the ORM for 3M"),(0,n.kt)("p",null,"3M will have include evolving data structures that we anticipate will change significantly throughout development.\nWe'd like to have a way to handle such changes with as little pain as possible. One of the things ORMs do well is to help with all the boilerplate when the data model changes.."),(0,n.kt)("p",null,"Prior to the start of the contract, other Go ORMs had been explored. Pop is considered one of the more mature ORMs currently available."),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No ORM"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"Pop")),(0,n.kt)("li",{parentName:"ul"},"Other Go ORMs")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://github.com/gobuffalo/pop"},"Pop"))),(0,n.kt)("li",{parentName:"ul"},"Pop is one of the more mature Go ORMs around"),(0,n.kt)("li",{parentName:"ul"},"Written by the same author as ",(0,n.kt)("a",{parentName:"li",href:"https://gobuffalo.io/"},"Buffalo")," framework and used in Buffalo"),(0,n.kt)("li",{parentName:"ul"},"Don't have to write our own SQL migrations and models; instead, we can check in the generated Fizz migrations that come with Pop"),(0,n.kt)("li",{parentName:"ul"},"Pop handles simple loading and saving models to the db"),(0,n.kt)("li",{parentName:"ul"},"Pop does not include features for doing joins /magically/ which can be a dangerous ORM feature"),(0,n.kt)("li",{parentName:"ul"},"We have not spent significant time looking into all our options--Pop seemed good enough for our purposes.")),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"no-orm"},"No ORM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Don't have to rely on another tool over your database layer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Have to write SQL for migrations etc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Have to write models and migrations rather than having them generated.")),(0,n.kt)("h3",{id:"other-go-orm"},"Other Go ORM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Don't have to write SQL for migrations etc"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Not as mature as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"Pop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Not used in ",(0,n.kt)("a",{parentName:"li",href:"https://gobuffalo.io/"},"Buffalo")," framework")))}u.isMDXComponent=!0}}]);