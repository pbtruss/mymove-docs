"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8016],{11821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(95657);const o={sidebar_position:21},s="WIP server-side validation",r={unversionedId:"backend/guides/wip-server-side-validation",id:"backend/guides/wip-server-side-validation",title:"WIP server-side validation",description:"The (grossly over-simplified) layers of the MilMove server",source:"@site/docs/backend/guides/wip-server-side-validation.md",sourceDirName:"backend/guides",slug:"/backend/guides/wip-server-side-validation",permalink:"/mymove-docs/docs/backend/guides/wip-server-side-validation",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/wip-server-side-validation.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"backendSidebar",previous:{title:"Zip code to Rate area mappings",permalink:"/mymove-docs/docs/backend/guides/zip-code-to-rate-area-mappings"},next:{title:"Debugging SQL Tests",permalink:"/mymove-docs/docs/backend/guides/debugging-sql-tests"}},l={},d=[{value:"The (grossly over-simplified) layers of the MilMove server",id:"the-grossly-over-simplified-layers-of-the-milmove-server",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Swagger (OpenAPI)",id:"swagger-openapi",level:3},{value:"Handlers",id:"handlers",level:3},{value:"Payload-to-Model / Model-to-Payload functions",id:"payload-to-model--model-to-payload-functions",level:4},{value:"Service Objects",id:"service-objects",level:3},{value:"Models",id:"models",level:3}],h={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wip-server-side-validation"},"WIP server-side validation"),(0,n.kt)("h2",{id:"the-grossly-over-simplified-layers-of-the-milmove-server"},"The (grossly over-simplified) layers of the MilMove server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authentication"},"Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#swagger-openapi"},"Swagger (OpenAPI)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#handlers"},"Handlers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Payload-to-Model conversions (and the reverse)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#service-objects"},"Service Objects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#models"},"Models"))),(0,n.kt)("p",null,"In an ideal world, each of these layers would have a distinct purpose. Because we've never explicitly defined these purposes, learning where to find code while debugging an error, or where to write code when working on a new part of the app, is one of the steepest challenges on MilMove. We can immediately improve the accessibility of the project for new and junior engineers by establishing basic guidelines about what logic belongs in each of the server-side app layers."),(0,n.kt)("p",null,"I propose that we begin to write these guidelines starting with validation. Once we agree on where we validate each part of the user request, we can use that as a foundation to structure the rest of our codebase. Below is the validation structure I suggest for MilMove."),(0,n.kt)("p",null,"(Note that this is NOT an in-depth guide for how to interact with each layer in our system. It is only intended to be a high-level overview.)"),(0,n.kt)("h3",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"This is where we authenticate the user. Any code related to permissions, sessions, certificates, etc, belongs here. No validation related to user input or the request body should be in this layer."),(0,n.kt)("h3",{id:"swagger-openapi"},"Swagger (OpenAPI)"),(0,n.kt)("p",null,"This is the first place where we'll see any input validation. After the server\nauthenticates the user, it tries to convert our request to the Go types defined\nby the packages located in ",(0,n.kt)("inlineCode",{parentName:"p"},"./pkg/gen"),". These files are generated using Swagger\nCodegen, a tool that analyzes our API specification and converts it into Go\ncode. ",(0,n.kt)("strong",{parentName:"p"},"We do not write any code in ",(0,n.kt)("inlineCode",{parentName:"strong"},"./pkg/gen")," - all of these files are\nautogenerated.")),(0,n.kt)("p",null,"We can modify the generated Go code by updating our API specifications and then regenerating the files in ",(0,n.kt)("inlineCode",{parentName:"p"},"./pkg/gen"),". Our API specifications are YAML files that have been written in the Swagger (OpenAPI v2.0) format and are kept in the top-level ",(0,n.kt)("inlineCode",{parentName:"p"},"./swagger")," directory. Each one of these files corresponds to a distinct API being served up by MilMove."),(0,n.kt)("p",null,'(Is all this talk of "Swagger" and "OpenAPI" confusing to you? I recommend going through the official Swagger documentation as a first step. Start here: ',(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/about/"},"What is OpenAPI?"),")"),(0,n.kt)("p",null,"The OpenAPI format gives us a lot of options when we're writing our API. When we define the fields that belong in the request body of an endpoint, we can use this format to tell Swagger how these fields should be validated. For example, we can add rules like ",(0,n.kt)("inlineCode",{parentName:"p"},"readOnly: True"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"format: date-time"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern: '^(\\[2-9\\]\\\\d{2}-\\\\d{3}-\\\\d{4})?$'")," (the pattern for a phone number). Swagger will use this information when it generates the Go code for our server, and this code will then be able to validate the input data as expected."),(0,n.kt)("p",null,"It's important to note that by adding these rules to the API specification, we're not just telling Swagger how to validate the input - we're telling the user what kind of input is acceptable. Just like how we use these YAML files to generate Go code, we also use them to generate user-facing documentation. This will be our clients' primary resource for learning how to use our API."),(0,n.kt)("p",null,"When we rely on validation in the Swagger-generated Go code, we don't have much control over what those responses look like, and we don't have any control over possible exceptions or complex business rules. The true benefit of placing input validation in this layer is communicating with the client about what they need to know in order to use our API successfully. This layer is all about improving clarity and usability."),(0,n.kt)("p",null,"Any validation that can be reasonably defined using the OpenAPI format, without sacrificing readability, ease-of-use, or maintainability, should be included in the API specification."),(0,n.kt)("h3",{id:"handlers"},"Handlers"),(0,n.kt)("p",null,"The Handlers layer, located in ",(0,n.kt)("inlineCode",{parentName:"p"},"./pkg/handlers"),", is the most organized. Every API on our server has its own package (",(0,n.kt)("inlineCode",{parentName:"p"},"adminapi"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"primeapi"),", etc), and every endpoint within that API has its own ",(0,n.kt)("inlineCode",{parentName:"p"},"Handle()")," function. These functions are where we execute all of the required logic for a given endpoint."),(0,n.kt)("p",null,"When we work in this part of the codebase, we already know who our user is (or who they can be) and which API they came from by virtue of where we're writing our code. This structure makes it seem like the ",(0,n.kt)("inlineCode",{parentName:"p"},"Handle()")," functions are a natural place to check API-level or user-specific business rules. However, this layer should ",(0,n.kt)("strong",{parentName:"p"},"not")," access the database - we reserve that functionality for the Service Objects (for reasons outlined in that section)."),(0,n.kt)("p",null,'With business rules like "The Prime contractor cannot update a service item that already has an active payment request" or "The TOO can only see moves in the same GBLOC as their own transportation office," it becomes apparent that we will need to query the database in order to verify that these conditions have been met.'),(0,n.kt)("h4",{id:"payload-to-model--model-to-payload-functions"},"Payload-to-Model / Model-to-Payload functions"),(0,n.kt)("p",null,"Due to Go's strict typing, we TODO EXPLAIN THAT SOME TYPE VALIDATION GOTTA HAPPEN HERE BUT THAT'S IT"),(0,n.kt)("h3",{id:"service-objects"},"Service Objects"),(0,n.kt)("p",null,"The service objects are how we access the database on MilMove. IMPORTANT"),(0,n.kt)("h3",{id:"models"},"Models"),(0,n.kt)("p",null,"Models represent DATABASE TABLES"))}p.isMDXComponent=!0}}]);