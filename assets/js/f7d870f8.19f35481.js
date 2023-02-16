"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4211],{85052:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));i(8209);const o={title:"0033 Service Object Layer",description:"Decision outcome: Adopt service object layer, an architectural pattern for\nwriting code that allows for encapsulation of logic, code re-usability,\nultimately keeping our handler code much less complex and more lightweight.\n"},r="*Service Object Layer*",s={unversionedId:"adrs/service-object-layer",id:"adrs/service-object-layer",title:"0033 Service Object Layer",description:"Decision outcome: Adopt service object layer, an architectural pattern for\nwriting code that allows for encapsulation of logic, code re-usability,\nultimately keeping our handler code much less complex and more lightweight.\n",source:"@site/docs/adrs/0033-service-object-layer.md",sourceDirName:"adrs",slug:"/adrs/service-object-layer",permalink:"/mymove-docs/docs/adrs/service-object-layer",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0033-service-object-layer.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"0033 Service Object Layer",description:"Decision outcome: Adopt service object layer, an architectural pattern for\nwriting code that allows for encapsulation of logic, code re-usability,\nultimately keeping our handler code much less complex and more lightweight.\n"},sidebar:"adrsSidebar",previous:{title:"0032 CSRF Protection for the Application",permalink:"/mymove-docs/docs/adrs/csrf-protection"},next:{title:"0034 Working With Mocks: Generation and Assertion\n",permalink:"/mymove-docs/docs/adrs/working-with-mocks-generation-and-assertion"}},l={},c=[{value:"Decision Drivers",id:"decision-drivers",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Service Objects</em>",id:"service-objects",level:3},{value:"<em>Do Nothing</em>",id:"do-nothing",level:3}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"service-object-layer"},(0,n.kt)("em",{parentName:"h1"},"Service Object Layer")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/use-orchestrator-service-objects"},"ADR 0069 Use orchestrator service objects")," expands on service\nobjects when it comes to how they should interact with each other when they're closely related. While it doesn't\nsupersede this one, it may be helpful to read after reading this one."),(0,n.kt)("p",null,"Currently the web service is built as two layers, Web Handlers (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/main/pkg/handlers"},"pkg/handlers"),") which implement interfaces based on the swagger definitions of the services provided by the server and Model Objects (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/main/pkg/models"},"pkg/models"),") which marshal object representations of data in and out of the database."),(0,n.kt)("p",null,"We are currently coming across a number of issues which suggest that we have reached the limits of what such a naive, two-layer design can easily support, viz:"),(0,n.kt)("p",null,"It is not clear where Authorization code should live, i.e. code which enforces that logged in users only see and can access the data pertinent to them. Currently this is in the models (see ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/model-authorization-and-handler-design"},"ADR 0024"),") but that means that models cannot be used for tools applications with different authorization controls, e.g. bulk loaders or admin interfaces.\nFurthermore, there is no place for code which touches multiple models, but is used by more than one handler, e.g. enforcing coherent state for multiple object relating to the same move (aka 'state machines') or making sure invoices line items are consistent between the GBL and the invoice.\nThere is little or no encapsulation in the layers, so details of pop (database ORM) usage are in the handlers and equally swagger details appear in the model code. These examples and others show how painful our experiences with testing and refactoring could be."),(0,n.kt)("p",null,"Ultimately, this lead to a discussion around Business Logic and Service Layers. Jim drew the teams attention to the Service Object pattern from rails. Looking for a similar pattern for go, it was suggested that we simply implement the Service Object pattern. For further context on the pattern that inspires our approach, please see this ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/selleo/essential-rubyonrails-patterns-part-1-service-objects-1af9f9573ca1"},"article"),"."),(0,n.kt)("p",null,"This, in turn, lead to a search for a Dependency Injection framework for golang which could be used in place of the global state used in Rails. Nick T. then went on to complete a spike that investigated Dig, a dependency injection framework, resulting in a very high value, but risky ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/1118"},"PR")," with over 132 different file changes. The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1xlqgVSTf9JUhZfWR18rvzaGPg2iHcF7uKRahGvrO45E/edit#"},"service object layer and dependency injection design document")," ultimately provided a plan for integration - first provide and integrate examples of service objects, provide training on using service objects, then finally adding the dependency injection framework later. This ADR is primarily concerned with the decisions behind adding a service object layer."),(0,n.kt)("h2",{id:"decision-drivers"},"Decision Drivers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ease of adoption"),(0,n.kt)("li",{parentName:"ul"},"Minimal impact"),(0,n.kt)("li",{parentName:"ul"},"Provide encapsulation of logic"),(0,n.kt)("li",{parentName:"ul"},"Better ability to test and refactor encapsulations of logic"),(0,n.kt)("li",{parentName:"ul"},"Code re-usability")),(0,n.kt)("h2",{id:"considered-options"},"Considered Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Service Objects"),(0,n.kt)("li",{parentName:"ul"},"Do nothing")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("p",null,"Adopt service object layer, an architectural pattern for writing code that allows for encapsulation of logic, code re-usability, ultimately keeping our handler code much less complex and more lightweight."),(0,n.kt)("p",null,"Resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/selleo/essential-rubyonrails-patterns-part-1-service-objects-1af9f9573ca1"},"Essential Ruby On Rails Patterns - Part 1: Service Objects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.calhoun.io/using-the-service-object-pattern-in-go/"},"Using the Service Object Pattern in Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1xlqgVSTf9JUhZfWR18rvzaGPg2iHcF7uKRahGvrO45E/edit#"},"Service Object Layer & Dependency Injection Design Document"))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"service-objects"},(0,n.kt)("em",{parentName:"h3"},"Service Objects")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Allows better organization of business logic"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Keeps API handler endpoints less complex by writing less code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Improves maintainability as ease of refactoring is increased"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Allows better unit testing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Allows encapsulation of logic"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Provides code re-usability"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Provides a pattern for writing better code as more conventions are introduced defining codification of services"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Provides easier scalability"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," New learning as team must adopt new pattern"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Dependency management can become difficult as services become more complex")),(0,n.kt)("h3",{id:"do-nothing"},(0,n.kt)("em",{parentName:"h3"},"Do Nothing")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Maintains everything as-is and we reap none of the above benefits.")))}m.isMDXComponent=!0}}]);