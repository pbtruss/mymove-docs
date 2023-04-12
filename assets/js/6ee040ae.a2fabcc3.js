"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[194],{60068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const o={title:"0013 REST API Updates"},s="REST API Updates",l={unversionedId:"adrs/rest-api-updates",id:"adrs/rest-api-updates",title:"0013 REST API Updates",description:"A large part of the functionality of the system is exposed as a RESTful",source:"@site/docs/adrs/0013-rest-api-updates.md",sourceDirName:"adrs",slug:"/adrs/rest-api-updates",permalink:"/mymove-docs/docs/adrs/rest-api-updates",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0013-rest-api-updates.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"0013 REST API Updates"},sidebar:"adrsSidebar",previous:{title:"0012 The TSP Data Models",permalink:"/mymove-docs/docs/adrs/tsp-data-models"},next:{title:"0014 Go Dependency Management",permalink:"/mymove-docs/docs/adrs/go-dependency-management"}},r={},p=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: <em>Use <code>PATCH</code> with partial JSON objects (falling back to <code>POST</code>) to allow updates and <code>action</code> URLS for more complex operations</em>",id:"chosen-alternative-use-patch-with-partial-json-objects-falling-back-to-post-to-allow-updates-and-action-urls-for-more-complex-operations",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Allowing state change via POST/PUT passing partial objects</em>",id:"allowing-state-change-via-postput-passing-partial-objects",level:3},{value:"<em>Using PUT along with field specifiers to update state</em>",id:"using-put-along-with-field-specifiers-to-update-state",level:3},{value:"<em>Using PATCH to update objects by passing partial JSON objects and adding &#39;action&#39; URLs</em>",id:"using-patch-to-update-objects-by-passing-partial-json-objects-and-adding-action-urls",level:3},{value:"<em>Using PATCH along with JSON Patch or JSON Merge Patch</em>",id:"using-patch-along-with-json-patch-or-json-merge-patch",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rest-api-updates"},"REST API Updates"),(0,i.kt)("p",null,"A large part of the functionality of the system is exposed as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nAPI. Such APIs map standard HTTP methods (GET, POST, PUT, etc) to methods of manipulating the stateful objects\nthe API is manipulating, e.g. Ruby on Rails uses the conventions ",(0,i.kt)("a",{parentName:"p",href:"http://guides.rubyonrails.org/routing.html#crud-verbs-and-actions"},"here"),"."),(0,i.kt)("p",null,"Whilst there is no official definition of the mapping used for a RESTful API there are some very common patterns like using\n",(0,i.kt)("inlineCode",{parentName:"p"},"POST /widgets")," to create a new Widget, the value of the Widget being in the body of the request. Likewise ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /widgets/15435"),"\nwill retrieve the Widget with ID 15435."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," is generally used to update or replace an object, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /widgets/15435")," would update or replace Widget 15435\nwith the new value in the body of the request."),(0,i.kt)("p",null,"Where the consensus breaks down is when a request wants to update or change just part of the state of an object, e.g.\nchange the description of Widget 15435 to be, say, \"Recently updated - now in blue\". Here there are a range of patterns\nin play, some being easy to implement but technically ambiguous/confusing to those that are 'correct' as proscribed in\nRFCs but in practice ignored and putting a greater burden on the clients of the API."),(0,i.kt)("p",null,"In particular, we want to consider a couple of use cases, viz:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updating the Actual Delivery Date on a shipment, i.e. a TSP delivers the shipment and wants to record the delivery date"),(0,i.kt)("li",{parentName:"ul"},"Accepting an Awarded Shipment, i.e. a shipment is awarded to a TSP and an agent for the TSP wants to accept that\nshipment. In this case the client may not (or possibly cannot) exactly understand what state in the object should change\nbut clearly knows the action (",(0,i.kt)("inlineCode",{parentName:"li"},"accept"),") that they wish to perform.")),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Allowing state change via POST/PUT passing partial objects"),", e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST /shipments/1243 HTTP/1.1\nContent-Type: application/json\n\n{\n  \"status\": 'ACCEPTED'\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using PUT along with field specifiers to update state"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /shipments/13425/status")," with 'ACCEPTED' as the body."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST /shipments/1243/status HTTP/1.1\nContent-Type: application/json\n\n{\n  \"value\": 'ACCEPTED'\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using PATCH to update objects by passing partial JSON objects and adding 'action' URLs"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /shipments/13425/accept"),"\nto surface more complex state changes"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"PATCH /shipments/1243 HTTP/1.1\nContent-Type: application/json\n\n{\n  \"status\": 'ACCEPTED'\n}\n")),(0,i.kt)("p",{parentName:"li"}," and if acceptance is a more complex operation which involves updating the state of the shipment more subtly than above, e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /shipments/1243/accept HTTP/1.1\nContent-Type: application/json\n\n{\n  "reason": "Can accommodate this move"\n}\n')),(0,i.kt)("p",{parentName:"li"}," NOTE: This is not explicitly setting either an 'accept' nor a 'reason' property of a shipment, but can be thought of as an rpc, e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'shipment.accept("Can accommodate this move");\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using PATCH along with ",(0,i.kt)("a",{parentName:"strong",href:"https://tools.ietf.org/html/rfc6902"},"JSON Patch")," or ",(0,i.kt)("a",{parentName:"strong",href:"https://tools.ietf.org/html/rfc7386"},"JSON Merge Patch")),"\nto update objects"),(0,i.kt)("p",{parentName:"li"}," The ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Patch_verb#Patching_resources"},"canonical way to use PATCH")," is with an atomic\ndescription of the change, ideally using either ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6902"},"JSON Patch")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7386"},"JSON Merge Patch"),", e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'PATCH /shipment/1243 HTTP/1.1\nContent-Type: application/json-patch+json\n\n [\n   { "op": "replace", "path": "/status", "value": "ACCEPTED" },\n   { "op": "add", "path": "/accept_reason", "value": "Can accomodate this move" }\n ]\n')))),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("h3",{id:"chosen-alternative-use-patch-with-partial-json-objects-falling-back-to-post-to-allow-updates-and-action-urls-for-more-complex-operations"},"Chosen Alternative: ",(0,i.kt)("em",{parentName:"h3"},"Use ",(0,i.kt)("inlineCode",{parentName:"em"},"PATCH")," with partial JSON objects (falling back to ",(0,i.kt)("inlineCode",{parentName:"em"},"POST"),") to allow updates and ",(0,i.kt)("inlineCode",{parentName:"em"},"action")," URLS for more complex operations")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Justification: While using ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," with partial objects (application/json) is frowned upon by some\n",(0,i.kt)("a",{parentName:"p",href:"http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/"},"commentators"),", it is common practice,\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.github.com/v3/pulls/#update-a-pull-request"},"see Github")," and is simple enough."),(0,i.kt)("p",{parentName:"li"}," It does not preclude adding support for one of the PATCH standards later as these use a different, explicit, content type, e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"application/json-patch+json"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Consequences: There is no good way to remove a field from an object without PUTting a new version of the object. In addition, people may "Well Actually" the API.'))),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"allowing-state-change-via-postput-passing-partial-objects"},(0,i.kt)("em",{parentName:"h3"},"Allowing state change via POST/PUT passing partial objects")),(0,i.kt)("p",null,"Using POST for this is not problematic (in fact it's a good fallback when PATCH is not supported) but using PUT is ambiguous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Conceptually easy to understand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Ambiguous if using PUT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Provokingly non-standard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Relies on all updates to be done by explicitly altering fields on the objects - has no support for actions like ",(0,i.kt)("inlineCode",{parentName:"li"},"accept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," No easy way to remove fields from an object.")),(0,i.kt)("h3",{id:"using-put-along-with-field-specifiers-to-update-state"},(0,i.kt)("em",{parentName:"h3"},"Using PUT along with field specifiers to update state")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Conceptually easy to understand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+/-")," Arguably standard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Relies on all updates to be done by explicitly altering fields on the objects - has no support for actions like ",(0,i.kt)("inlineCode",{parentName:"li"},"accept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Not common/familiar")),(0,i.kt)("h3",{id:"using-patch-to-update-objects-by-passing-partial-json-objects-and-adding-action-urls"},(0,i.kt)("em",{parentName:"h3"},"Using PATCH to update objects by passing partial JSON objects and adding 'action' URLs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Conceptually easy to understand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Offers low and high granularity changes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," In line with common practice"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Compatible with future support of JSON-PATCH or JSON-MERGE-PATCH"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+/-")," Arguably standard/not the best way to used patch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," No easy way to remove fields from an object.")),(0,i.kt)("h3",{id:"using-patch-along-with-json-patch-or-json-merge-patch"},(0,i.kt)("em",{parentName:"h3"},"Using PATCH along with ",(0,i.kt)("a",{parentName:"em",href:"https://tools.ietf.org/html/rfc6902"},"JSON Patch")," or ",(0,i.kt)("a",{parentName:"em",href:"https://tools.ietf.org/html/rfc7386"},"JSON Merge Patch"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Strict adherence to best practices"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Offers low and high granularity changes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Not common practice so unlikely to be easy for clients to implement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," No support from Swagger codegen tools")))}m.isMDXComponent=!0}}]);