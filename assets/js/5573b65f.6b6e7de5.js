"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7650],{72885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));a(95657);const n={sidebar_position:1},o="Overview",s={unversionedId:"backend/guides/service-objects/overview",id:"backend/guides/service-objects/overview",title:"Overview",description:"What is a Service Object?",source:"@site/docs/backend/guides/service-objects/overview.md",sourceDirName:"backend/guides/service-objects",slug:"/backend/guides/service-objects/overview",permalink:"/mymove-docs/docs/backend/guides/service-objects/overview",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/service-objects/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"backendSidebar",previous:{title:"testing-handlers",permalink:"/mymove-docs/docs/backend/testing/testing-handlers"},next:{title:"Getting Started",permalink:"/mymove-docs/docs/backend/guides/service-objects/getting-started"}},l={},c=[{value:"What is a Service Object?",id:"what-is-a-service-object",level:2},{value:"Where Do Service Objects Fit In?",id:"where-do-service-objects-fit-in",level:3},{value:"Service Object Types",id:"service-object-types",level:3},{value:"ADRs",id:"adrs",level:2},{value:"Key features",id:"key-features",level:2},{value:"Detailed Docs",id:"detailed-docs",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("h2",{id:"what-is-a-service-object"},"What is a Service Object?"),(0,r.kt)("p",null,"The MilMove backend is ",(0,r.kt)("em",{parentName:"p"},"loosely")," designed with this\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1kVQzrYWY0AnYyPbiqfuFv8Fh_7IwwIFv3XKRxZI44Hs/edit#slide=id.p"},"3-layer structure"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Presentation layer.")," - Our endpoint handlers that perform type conversions and connect user requests to\nbusiness logic functions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Business logic layer.")," - Code that implements MilMove's business logic."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data access layer.")," - Code that directly interacts with and manipulates the database.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," package is a combination of the bottom two layers, ",(0,r.kt)("strong",{parentName:"p"},"business logic")," and ",(0,r.kt)("strong",{parentName:"p"},"data access"),". It is\nlocated within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/main/pkg/services"},(0,r.kt)("inlineCode",{parentName:"a"},"mymove")," ",(0,r.kt)("inlineCode",{parentName:"a"},"./pkg/services"))," directory."),(0,r.kt)("p",null,'Our "service objects," as we call them (this is MilMove-specific terminology), are the structs/functions within this\npackage that implement our business logic. An example of a service object would be something like ',(0,r.kt)("inlineCode",{parentName:"p"},"AddressUpdater"),"\nto update an ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," record, or ",(0,r.kt)("inlineCode",{parentName:"p"},"MTOShipmentCreator")," to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"MTOShipment")," record. "),(0,r.kt)("h3",{id:"where-do-service-objects-fit-in"},"Where Do Service Objects Fit In?"),(0,r.kt)("p",null,"We mentioned above that a service object is a combination of the business and data access layers and that our\nhandlers are our presentation layer. To see what this means in practice, let's look at what this might look like\nwith a fake example (fake because the code doesn't actually do this because standards have changed over time). Say a\nrequest came in to create a service member through the internal API. An ideal flow without errors would look something\nlike this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The handler (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateServiceMemberHandler"),") would handle auth checks"),(0,r.kt)("li",{parentName:"ul"},"Handler translates/converts data from payload types (swagger types) to model types"),(0,r.kt)("li",{parentName:"ul"},"Handler uses a service object (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ServiceMemberCreator"),") to create a service member"),(0,r.kt)("li",{parentName:"ul"},"Handler returns response with newly created service member")),(0,r.kt)("p",null,"There are more docs you can check out: ",(0,r.kt)("a",{parentName:"p",href:"usage"},"Using service objects"),". Note that this is one of the last steps in\nthe tutorial, so it may make more sense if you're following along with the docs."),(0,r.kt)("h3",{id:"service-object-types"},"Service Object Types"),(0,r.kt)("p",null,"We have a few different kinds of service objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data type: These are the service objects that are tied to a specific model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipmentUpdater")," service object contains the logic to update an ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipment")," model\ninstance. The implementation code is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg/services/mto_shipment")," service subpackage."))),(0,r.kt)("li",{parentName:"ul"},"orchestrators: These are service objects that help manage other service objects that are closely related.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, we have service objects to create ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipments"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipmentCreator"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"PPMShipments"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"PPMShipmentCreator"),". Each has the necessary logic for creating the model it is for, but ",(0,r.kt)("inlineCode",{parentName:"li"},"PPMShipment")," is a\nchild model of ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipment")," and needs an ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipment")," to exist before it can be created. To make it\neasier for our handlers to create a shipment of any kind, without having to know that for PPM shipments you\nhave to first use the ",(0,r.kt)("inlineCode",{parentName:"li"},"MTOShipmentCreator")," and then use the ",(0,r.kt)("inlineCode",{parentName:"li"},"PPMShipmentCreator"),", we use an orchestrator\nservice object, ",(0,r.kt)("inlineCode",{parentName:"li"},"ShipmentCreator"),", that handles the logic of calling the correct creators as needed and in the\nproper order. This orchestrator service object implementation lives in the\n",(0,r.kt)("inlineCode",{parentName:"li"},"pkg/services/orchestrators/shipment")," service subpackage."))),(0,r.kt)("li",{parentName:"ul"},"utility: These are service objects that help us out across the code base.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, we have a ",(0,r.kt)("inlineCode",{parentName:"li"},"Fetcher")," service object that fetch a record form the database. The implementation\nlogic lives in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg/services/fetch")," service subpackage.")))),(0,r.kt)("p",null,"Service objects allow for better unit testing, re-usability, and organization of code in the MilMove project. "),(0,r.kt)("h2",{id:"adrs"},"ADRs"),(0,r.kt)("p",null,"We have two decision records related to service objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mymove-docs/docs/adrs/service-object-layer"},"ADR 0033 Service Object Layer"),"\nis the one that began our use of service objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mymove-docs/docs/adrs/use-orchestrator-service-objects"},"ADR 0069 Use orchestrator service objects ADR"),"\nis where we defined a new type of service object to help manage interactions between closely related service objects.")),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("p",null,"A well-defined service object is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reusable and modular"),(0,r.kt)("li",{parentName:"ul"},"Not related to or affected by our API design")),(0,r.kt)("p",null,"Specific types of service objects have additional constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data type service objects should be:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Concerned primarily with one data object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They may use other service objects to perform actions on other data objects, but you should also consider if\nit should use that other service object directly, or if it would be better to use a service object orchestrator."))))),(0,r.kt)("li",{parentName:"ul"},"orchestrator service objects should:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Not repeat validation that the service objects they use will have. The main validation that should be done at\nthis level should be for things that the orchestrator needs in order to function.")))),(0,r.kt)("p",null,"Service objects should expose clear and self-explanatory public functions. Niche utilities and business logic should be\nin private functions within the service object's package."),(0,r.kt)("h2",{id:"detailed-docs"},"Detailed Docs"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There are several service objects that don't fully match what is stated in these docs. That is usually because the\npatterns outlined in the docs were established after many of these service objects existed, and we didn't go back and\nchange existing service objects to match. It has also happened from accidentally following the wrong example for\nwhat to look at. If you are adding a new service object, follow the patterns outlined here. If you are editing a\nservice object and have a bit of extra time, try updating the service object you're changing to follow the patterns\nhere.")),(0,r.kt)("p",null,"The detailed docs are written in a tutorial style, with each page introducing the different concepts needed to\nunderstand, create, and work with service objects. Because of that, each page builds on what was previously\ncovered/created so if this is your first time working on service objects, it is recommended to follow along with the\ntutorial."),(0,r.kt)("p",null,"That said, the pages are also broken down based on what you're trying to do/understand, so if you are already familiar\nwith service objects and are looking for a refresher or details, you can jump directly to the section you are interested\nin."),(0,r.kt)("p",null,"Regardless of which you're doing, the best starting point is the ",(0,r.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," page because it\nwill outline the models being used for creating the docs and will make it easier to understand the rest of the pages."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1kVQzrYWY0AnYyPbiqfuFv8Fh_7IwwIFv3XKRxZI44Hs/edit#slide=id.p"},"3 Layer Application Structure"))))}h.isMDXComponent=!0}}]);