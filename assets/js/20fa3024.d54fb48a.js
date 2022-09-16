"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2234],{72861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));a(61839);const i={title:"0000 Server Framework",sidebar_position:1},r="Use Truss' [Golang](https://golang.org/) web server skeleton to build API for DP3",l={unversionedId:"adrs/server-framework",id:"adrs/server-framework",title:"0000 Server Framework",description:"The Personal Property Prototype project needs an API and services in place to support",source:"@site/docs/adrs/0000-server-framework.md",sourceDirName:"adrs",slug:"/adrs/server-framework",permalink:"/mymove-docs/docs/adrs/server-framework",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0000-server-framework.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"0000 Server Framework",sidebar_position:1},sidebar:"adrsSidebar",previous:{title:"\ud83d\udce6 Architecture Decision Records",permalink:"/mymove-docs/docs/adrs"},next:{title:"0001 Go ORM",permalink:"/mymove-docs/docs/adrs/go-orm"}},s={},p=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"gRPC",id:"grpc",level:3},{value:"OpenAPI within the framework of a Buffalo",id:"openapi-within-the-framework-of-a-buffalo",level:3},{value:"OpenAPI within the framework of a custom Golang application",id:"openapi-within-the-framework-of-a-custom-golang-application",level:3},{value:"AWS Lambda",id:"aws-lambda",level:3},{value:"Other languages/web frameworks",id:"other-languagesweb-frameworks",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-truss-golang-web-server-skeleton-to-build-api-for-dp3"},"Use Truss' ",(0,n.kt)("a",{parentName:"h1",href:"https://golang.org/"},"Golang")," web server skeleton to build API for DP3"),(0,n.kt)("p",null,"The Personal Property Prototype project needs an API and services in place to support"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The React client application"),(0,n.kt)("li",{parentName:"ol"},"Integration from Transport Service Providers (TSPs) who want to service the moves")),(0,n.kt)("p",null,"Because of 2. above the API will need to be fully documented, secured and readily accessible from a variety of client applications"),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC")," as a way of publishing the APIs"),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",{parentName:"li",href:"https://www.openapis.org/"},"OpenAPI")," within the framework of a ",(0,n.kt)("a",{parentName:"li",href:"https://gobuffalo.io/"},"Buffalo")," Golang application"),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",{parentName:"li",href:"https://www.openapis.org/"},"OpenAPI")," within the framework of a custom Golang application"),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," to host a 'serverless' API"),(0,n.kt)("li",{parentName:"ul"},"Using another language and web framework, e.g. Python/Django, Ruby/Rails or Phoenix/Elixir")),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chosen Alternative: Using OpenAPI within the context of a custom Golang application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Golang is a fairly straightforward choice for the implementation language bringing together Type safety, Active support and development, and enough community experience to be relatively low risk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"gRPC is not (yet) well suited to Web applications (see below) so was ruled out by our need to support the React client")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Buffalo brought too many 'opinions'/baggage in terms of web pipeline, lack of support for React out of the box")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lambda is very tempting for simplifying deployment and management, but has too many unknowns for the team in terms of cost and performance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consequence: need to rapidly evaluate OpenAPI code generation tools and test/confirm the belief that they can be integrated into our application framework"))),(0,n.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,n.kt)("h3",{id:"grpc"},(0,n.kt)("a",{parentName:"h3",href:"https://grpc.io/"},"gRPC")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," High performance RPC mechanism with active support from google"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," gRPC doesn't currently have good ",(0,n.kt)("a",{parentName:"li",href:"https://improbable.io/games/blog/grpc-web-moving-past-restjson-towards-type-safe-web-apis"},"support for web clients")," and while Improbable is driving this and has a solution, there is no official implementation yet.")),(0,n.kt)("h3",{id:"openapi-within-the-framework-of-a-buffalo"},(0,n.kt)("a",{parentName:"h3",href:"https://www.openapis.org/"},"OpenAPI")," within the framework of a ",(0,n.kt)("a",{parentName:"h3",href:"https://gobuffalo.io"},"Buffalo")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Buffalo is the most complete Golang web framework we have found and pulls together solutions to most of the common web framework concerns (authentication, authorization, middleware injection, database management and mapping)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," It has an active community supporting it"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," The built in web pipeline does not (out of the box) have support for a React pipeline, and in particular the Create React App framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Adapting the framework to accommodate out client work would undermine many of the benefits of using an off the shelf web framework without mitigating any of the dependency risks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," It is not clear how OpenAPI code generation tools might co-exist with the buffalo framework")),(0,n.kt)("h3",{id:"openapi-within-the-framework-of-a-custom-golang-application"},(0,n.kt)("a",{parentName:"h3",href:"https://www.openapis.org/"},"OpenAPI")," within the framework of a custom Golang application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Truss has already done most of the preparatory work for this in our Prototype Web Application"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," We have control of a known codebase"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," It is not clear how best to integrate OpenAPI code generation tools into our current workflow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We need to manage the evaluation, selection and integration of all the parts of the system, e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/markbates/goth"},"authentication"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gobuffalo/pop"},"database management")," etc")),(0,n.kt)("h3",{id:"aws-lambda"},(0,n.kt)("a",{parentName:"h3",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Is GovCloud approved and so requires no extra work if we need to operate in that environment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Removes the need for server infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Pricing can be a surprise as it is based on traffic (according to anecdata from people Truss has asked)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," We have no experience building this way so it carries risks of longer dev ramp up and potential performance/reliability surprises.")),(0,n.kt)("h3",{id:"other-languagesweb-frameworks"},"Other languages/web frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Some team members are more familiar with, e.g. Django or Rails"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"+")," Some frameworks have more longevity in the field"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Django and Rails are less compelling in a single-page responsive client app environment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," Type safety has repeatedly shown"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-")," React/go is what was proposed, with good reason, during the bid process for this contract. Adopting another approach without a compelling reason seems contrary.")))}d.isMDXComponent=!0}}]);