"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5444],{69454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={sidebar_position:4},r="Creating an Endpoint",s={unversionedId:"api/guides/guide-to-creating-an-endpoint",id:"api/guides/guide-to-creating-an-endpoint",title:"Creating an Endpoint",description:"These are the various steps that are involved in creating a new endpoint.",source:"@site/docs/api/guides/guide-to-creating-an-endpoint.md",sourceDirName:"api/guides",slug:"/api/guides/guide-to-creating-an-endpoint",permalink:"/mymove-docs/docs/api/guides/guide-to-creating-an-endpoint",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/api/guides/guide-to-creating-an-endpoint.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apiSidebar",previous:{title:"API Style Guide",permalink:"/mymove-docs/docs/api/guides/api-style-guide"},next:{title:"How to Deprecate an API Endpoint",permalink:"/mymove-docs/docs/api/guides/how-to-deprecate-endpoints"}},l={},p=[{value:"These are the various steps that are involved in creating a new endpoint.",id:"these-are-the-various-steps-that-are-involved-in-creating-a-new-endpoint",level:6},{value:"Adding a new entry into the yaml",id:"adding-a-new-entry-into-the-yaml",level:2},{value:"Troubleshooting your local swagger state:",id:"troubleshooting-your-local-swagger-state",level:4},{value:"Defining a path for your endpoint",id:"defining-a-path-for-your-endpoint",level:4},{value:"Description Section and the response body",id:"description-section-and-the-response-body",level:4},{value:"Gen files:",id:"gen-files",level:4},{value:"Swagger overview",id:"swagger-overview",level:2},{value:"Swagger Architecture",id:"swagger-architecture",level:3},{value:"Example diagram of how Swagger calls our handler functions:",id:"example-diagram-of-how-swagger-calls-our-handler-functions",level:3},{value:"Creating a Handler:",id:"creating-a-handler",level:2},{value:"Steps to creating a new handler:",id:"steps-to-creating-a-new-handler",level:3},{value:"Anatomy of a handler",id:"anatomy-of-a-handler",level:3},{value:"Validating Response Payload",id:"validating-response-payload",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Connecting the Handler to the Service Object:",id:"connecting-the-handler-to-the-service-object",level:3},{value:"How to handle errors",id:"how-to-handle-errors",level:3},{value:"Add event key and update event map",id:"add-event-key-and-update-event-map",level:3},{value:"References:",id:"references",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-an-endpoint"},"Creating an Endpoint"),(0,i.kt)("h6",{id:"these-are-the-various-steps-that-are-involved-in-creating-a-new-endpoint"},"These are the various steps that are involved in creating a new endpoint."),(0,i.kt)("p",null,"Prior to creating an endpoint in the Handler folder, we must first add a new endpoint definition to swagger. We are using Swagger 2.0, which is ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/specification/v2/"},"OpenAPI"),", a specification we use to format our RESTful APIs and provide a template for us to communicate the information in our API.\nAlways start with swagger. This step creates your endpoint definition and generates the files and helper functions you will need to create your endpoint. More specifically, swagger converts JSON user input into generated Go types."),(0,i.kt)("h2",{id:"adding-a-new-entry-into-the-yaml"},"Adding a new entry into the yaml"),(0,i.kt)("p",null,"All new definitions will be added in ",(0,i.kt)("inlineCode",{parentName:"p"},"mymove/swagger-def"),". Note that we have broken down our spec into different files and we share definitions between files.\nBuilt compiled versions of our API spec will be generated and stored in the swagger folder, which we will not edit directly. Notice that there is a yaml file for each of our APIs.\nAn endpoint definition for the prime will go into the Prime yaml, but you may notice there are some definitions in ",(0,i.kt)("inlineCode",{parentName:"p"},"mymove/swagger-def/definitions"),".\nThis is because some definitions are shared across APIs and we've created a space to add those definitions in one place.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Uploads.yaml")," shares its definition across various APIs, and rather than creating various yaml files for this action, we have created one and added it to the shared ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," folder."),(0,i.kt)("p",null,"For the purposes for adding a new endpoint, make sure that your endpoint is defined in these sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," - is where we group all of our endpoints by category (i.e. shipment endpoints, agent endpoints, service item endpoints, etc.).\nThis top level field is where our gen files will divide the endpoints into their own packages. Tag component names are ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - defines our endpoint. Path names use ",(0,i.kt)("inlineCode",{parentName:"li"},"kebab-case"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"definitions")," - defines the shape of the data for our endpoint. Definitions component names are ",(0,i.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responses")," - define what the endpoints return. Responses component names are ",(0,i.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parameters")," - define what an endpoint needs (e.g. headers). Parameter component names are ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase"),".")),(0,i.kt)("h4",{id:"troubleshooting-your-local-swagger-state"},"Troubleshooting your local swagger state:"),(0,i.kt)("p",null,"If you are having issues with your local swagger state it is recommended to run ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_generate"),", accept the prompt, and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_run")," again. For more information on troubleshooting, ",(0,i.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1632254277386600"},"this")," explanation will be helpful."),(0,i.kt)("h4",{id:"defining-a-path-for-your-endpoint"},"Defining a path for your endpoint"),(0,i.kt)("p",null,"For more information about URL design and structure checkout: ",(0,i.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/API-Style-Guide"},"API Style Guide")),(0,i.kt)("p",null,"Defining your endpoint path follows this simple convention:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    /your path:\n        HTTP request:\n            summary: this is the name of the action your endpoint performs, in camelCase\n            description: new convention is to reference description files in the swagger-def/info/ folder\n            operationId: this should match the endpoint title in the definitions section and summary in your paths section.\n            tags: matches the tag section for this endpoint\n            produces: this field will always be application/json\n            parameters: include parameters associated with this path\n            responses: response codes for this path, and a schema reference and the description if needed.\n")),(0,i.kt)("p",null,"NOTE: The description item will reference markdown files in ",(0,i.kt)("inlineCode",{parentName:"p"},"swagger-def/info/"),". This change is further described in a recent ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/7435"},"PR"),"."),(0,i.kt)("p",null,"An example of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Moves")," path is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  /moves:\n    get:\n      summary: listMoves\n      description:\n          $ref: 'info/{file_name}.md'\n      operationId: listMoves\n      tags:\n        - moveTaskOrder\n      produces:\n        - application/json\n      parameters:\n        - in: query\n          name: since\n          type: string\n          format: date-time\n          description: Only return moves updated since this time. Formatted like \"2021-07-23T18:30:47.116Z\"\n      responses:\n        '200':\n          description: Successfully retrieved moves. A successful fetch might still return zero moves.\n          schema:\n            $ref: '#/definitions/ListMoves'\n        '401':\n          $ref: 'responses/PermissionDenied.yaml'\n        '403':\n          $ref: 'responses/PermissionDenied.yaml'\n        '500':\n          $ref: '#/responses/ServerError'\n")),(0,i.kt)("h4",{id:"description-section-and-the-response-body"},"Description Section and the response body"),(0,i.kt)("p",null,"In your endpoint description make sure that the following fields are included when necessary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required")," - fields that are required are listed in the description section."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x-nullable")," - this indicates that the value of a particular property may be\nnull. It will also return null if the value doesn't exist otherwise it will be\nomitted if x-nullable is false. ",(0,i.kt)("inlineCode",{parentName:"li"},"x-omitempty")," -  this extension is good to add\nand set it to false if we don't want that field to be omitted if it is empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readOnly")," - sometimes you will need specify a ready-only property, for\nexample when the property differs in a GET from a POST or PATCH. Note:\n",(0,i.kt)("inlineCode",{parentName:"li"},"readOnly")," properties are included in responses but not in requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eTag")," - An entity tag is provided so that a browser client or a script can\nmake conditional REST requests using optimistic concurrency control. All ",(0,i.kt)("inlineCode",{parentName:"li"},"eTags"),"\nmust be marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"readOnly"),".")),(0,i.kt)("p",null,"An example of the ListMove description is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      ListMove:\n        description:\n            $ref: 'info/{file_name}.md'\n        type: object\n        properties:\n          id:\n            example: 1f2270c7-7166-40ae-981e-b200ebdf3054\n            format: uuid\n            type: string\n          moveCode:\n            type: string\n            example: 'HYXFJF'\n            readOnly: true\n          createdAt:\n            format: date-time\n            type: string\n            readOnly: true\n          orderID:\n            example: c56a4180-65aa-42ec-a945-5fd21dec0538\n            format: uuid\n            type: string\n          referenceId:\n            example: 1001-3456\n            type: string\n          availableToPrimeAt:\n            format: date-time\n            type: string\n            x-nullable: true\n            readOnly: true\n          updatedAt:\n            format: date-time\n            type: string\n            readOnly: true\n          ppmType:\n            type: string\n            enum:\n              - FULL\n              - PARTIAL\n          ppmEstimatedWeight:\n            type: integer\n          eTag:\n            type: string\n            readOnly: true\n")),(0,i.kt)("p",null,"For information on error responses, check out: ",(0,i.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/API-Errors#api-errors"},"API Errors Guide")),(0,i.kt)("h4",{id:"gen-files"},"Gen files:"),(0,i.kt)("p",null,"Once you finishing updating the yaml files with the new endpoint information make sure to run your make commands like ",(0,i.kt)("inlineCode",{parentName:"p"},"make swagger-generate")," to autogenerate your swagger files, or simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_run"),",\nwhich runs your server and other useful make commands in one go."),(0,i.kt)("h2",{id:"swagger-overview"},"Swagger overview"),(0,i.kt)("h3",{id:"swagger-architecture"},"Swagger Architecture"),(0,i.kt)("p",null,"Link to a pictorial view of how the Swagger packages map from ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Go")," files and functions. Highlighting ",(0,i.kt)("inlineCode",{parentName:"p"},"paths"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"tags"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"operationId"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(79153).Z},"Link to PDF Swagger architecture"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MilMove Swagger architecture PNG",src:n(91581).Z,width:"5432",height:"9020"})),(0,i.kt)("h3",{id:"example-diagram-of-how-swagger-calls-our-handler-functions"},"Example diagram of how Swagger calls our handler functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:n(44964).Z},"Link to PDF MilMove Swagger call"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MilMove Swagger call PNG",src:n(83220).Z,width:"3710",height:"2484"})),(0,i.kt)("h2",{id:"creating-a-handler"},"Creating a Handler:"),(0,i.kt)("p",null,"Now you're ready to add your endpoint to the ",(0,i.kt)("inlineCode",{parentName:"p"},"handlers")," folder. Start building out the service object before creating your handler.\nFor more information about service objects and when to create one: ",(0,i.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/service-objects"},"Service Objects"),"."),(0,i.kt)("p",null,"An important note about service objects: The service layer is where we will store our business logic and connect to the database. Once a service object is created, it will be passed in to the handler ",(0,i.kt)("inlineCode",{parentName:"p"},"NewPrimeAPIHandler")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/handlers/primeapi/api.go"),",\nand the handler will only be aware of the service object interface, while the service object will contain all of the rules and validations as well as accessing object from the database."),(0,i.kt)("p",null,"Handlers must never hit the database. Ideally, endpoint handlers are for type validations."),(0,i.kt)("p",null,"Handlers are also where we convert from payload (Swagger types) to model\n(MilMove Go types). Generally, before calling the service object to process the\nrequest, you would call the appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"payload_to_model.go")," function. And\nafter returning from the call to the service object you would call the\nappropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"model_to_payload.go")," function."),(0,i.kt)("h3",{id:"steps-to-creating-a-new-handler"},"Steps to creating a new handler:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Add a handler for the endpoint."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"api.go")," file depending on which API you are updating:")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pkg/handlers/\n    adminapi/api.go\n    ghcapi/api.go\n    internalapi/api.go\n    ordersapi/api.go\n    primeapi/api.go\n    supportapi/api.go\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add payload_to_model converters")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is a good place to check data types and null values."),(0,i.kt)("li",{parentName:"ul"},"Each API has a set of ",(0,i.kt)("inlineCode",{parentName:"li"},"payload_to_model.go")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"model_to_paylaod.go")," files under the ",(0,i.kt)("inlineCode",{parentName:"li"},"internal")," dir:")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pkg/handlers/\n    adminapi/internal/payloads\n    ghcapi/internal/payloads\n    internalapi/internal/payloads\n    ordersapi/internal/payloads\n    primeapi/internal/payloads\n    supportapi/internal/payloads\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"model_to_payload functions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Once we have either modified the model or added something to our model, it must be converted back into a payload in order to be returned by the handler."),(0,i.kt)("li",{parentName:"ul"},"Each API has a set of ",(0,i.kt)("inlineCode",{parentName:"li"},"payload_to_model.go")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"model_to_paylaod.go")," files under the ",(0,i.kt)("inlineCode",{parentName:"li"},"internal")," dir:")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pkg/handlers/\n    adminapi/internal/payloads\n    ghcapi/internal/payloads\n    internalapi/internal/payloads\n    ordersapi/internal/payloads\n    primeapi/internal/payloads\n    supportapi/internal/payloads\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create handler type and Handle function")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Handlers are stored in this area depending on which API you are updating:")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pkg/handlers/\n    adminapi/\n    ghcapi/\n    internalapi/\n    ordersapi/\n    primeapi/\n    supportapi/\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add tests for the handler")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add test code",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," * Use `testdatagen` functions [Understanding `Testdatagen` Functions](/mymove-docs/docs/backend/testing/understanding-testdatagen-functions)\n"))),(0,i.kt)("li",{parentName:"ul"},"Add mocks (only if absolutely necessary): ",(0,i.kt)("a",{parentName:"li",href:"https://transcom.github.io/mymove-docs/docs/dev/testing/writing-tests/generate-mocks-with-mockery"},"Generating Mocks with mockery"))))),(0,i.kt)("h3",{id:"anatomy-of-a-handler"},"Anatomy of a handler"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation is currently in transition while handlers are being\nrefactored to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AuditableAppContextFromRequestWithErrors")," rather than extracting the\n",(0,i.kt)("inlineCode",{parentName:"p"},"AppContext")," from the request."))),(0,i.kt)("p",null,"All handlers should begin by storing the DB, logger, and/or session from the request into the ",(0,i.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/use-stateless-services-with-app-context"},"AppContext"),". This is the easiest way to get all three:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Old way to get the AppContext"',title:'"Old',way:!0,to:!0,get:!0,the:!0,'AppContext"':!0},"appCtx := h.AppContextFromRequest(params.HTTPRequest)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="New way to get the AppContext"',title:'"New',way:!0,to:!0,get:!0,the:!0,'AppContext"':!0},"return h.AuditableAppContextFromRequestWithErrors(params.HTTPRequest,\n    func(appCtx appcontext.AppContext) middleware.Responder {\n    // contents of handler\n    })\n")),(0,i.kt)("p",null,"The new way of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"appCtx")," is to avoid some latent bugs where the\ncodebase was starting transactions but not running SQL inside of the\ntransaction due to referencing the incorrect ",(0,i.kt)("inlineCode",{parentName:"p"},"dbconnection"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"appCtx"),' from\n"outside" the transaction. With the addition of\n',(0,i.kt)("inlineCode",{parentName:"p"},"AuditableAppContextFromRequestWithErrors"),", we now start a transaction and pass that into\nhandlers to ensure that all handlers are running inside a transaction."),(0,i.kt)("p",null,"This is done for multiple reasons, such as audit logging where we run\n",(0,i.kt)("inlineCode",{parentName:"p"},"RawQuery")," to set local variables that contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"userID")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"appCtx"),"\nSession."),(0,i.kt)("p",null,"And then this ",(0,i.kt)("inlineCode",{parentName:"p"},"appCtx")," will be passed in as the first argument to any service object function. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"shipment, err := h.RejectShipment(appCtx, shipmentID, eTag, rejectionReason)\n")),(0,i.kt)("p",null,"The DB, logger, and session can then be extracted from the app context like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"appCtx.DB()\nappCtx.Logger()\nappCtx.Session()\n")),(0,i.kt)("p",null,"Below are other ways to grab the logger and session from the request, and populating the AppContext with them."),(0,i.kt)("p",null,"Grab just the logger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"logger := h.LoggerFromRequest(params.HTTPRequest)\n")),(0,i.kt)("p",null,"or the session and logger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"session, logger := h.SessionAndLoggerFromRequest(params.HTTPRequest)\n")),(0,i.kt)("p",null,"Then, store the DB connection and logger in the\nApp Context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"appCtx := appcontext.NewAppContext(h.DB(), logger)\n")),(0,i.kt)("p",null,"If you also need the session, you can do all three at once:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"appCtx := appcontext.WithSession(appcontext.NewAppContext(h.DB(), logger), session)\n")),(0,i.kt)("h3",{id:"validating-response-payload"},"Validating Response Payload"),(0,i.kt)("p",null,"We need to ensure that the data that is being returned from the\nhandler matches what is defined in the swagger definition."),(0,i.kt)("p",null,"In your tests you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"Validate")," on the payload.  Something\nlike ..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"{8,9}","{8,9}":!0},"    handler := ListMovesHandler{HandlerConfig: context, MoveTaskOrderFetcher: movetaskorder.NewMoveTaskOrderFetcher()}\n    response := handler.Handle(params)\n\n    suite.IsNotErrResponse(response)\n    listMovesResponse := response.(*movetaskorderops.ListMovesOK)\n    movesList := listMovesResponse.Payload\n\n    // Validate the payload response\n    suite.NoError(movesList.Validate(strfmt.Default))\n\n")),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"You'll notice that many handlers perform authorization within the handler, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'if !session.IsOfficeUser() || !session.Roles.HasRole(roles.RoleTypeTOO) {\n    logger.Error("Only TOO role can reject shipments")\n    return shipmentops.NewRejectShipmentForbidden()\n}\n')),(0,i.kt)("p",null,"This duplicated logic can be extracted into a service object. Perhaps something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (f *authorization) TOOAuthorized(appCtx appcontext.AppContext) bool {\n  session := appCtx.Session()\n\n  return session.IsOfficeUser() && session.Roles.HasRole(roles.RoleTypeTOO)\n}\n")),(0,i.kt)("p",null,"and then the handler would be updated like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'if !h.TOOAuthorized(appCtx) {\n  logger.Error("Only TOO role can reject shipments")\n  return shipmentops.NewRejectShipmentForbidden()\n}\n')),(0,i.kt)("h3",{id:"connecting-the-handler-to-the-service-object"},"Connecting the Handler to the Service Object:"),(0,i.kt)("p",null,"Once you create your handler type and Handle function, it can be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"api.go"),".\nThis file is also where you can connect your service object to the handler.\nFor example, our ListsMoves Handler will be passed the service object interface as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"primeAPI.MoveTaskOrderListMovesHandler = ListMovesHandler{\n    ctx,\n    movetaskorder.NewMoveTaskOrderFetcher(),\n}\n")),(0,i.kt)("p",null,"Additionally in your file containing the handler make sure to pass in the services to your struct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ListMovesHandler struct {\n    handlers.HandlerConfig\n    services.MoveTaskOrderFetcher\n}\n")),(0,i.kt)("h3",{id:"how-to-handle-errors"},"How to handle errors"),(0,i.kt)("p",null,"For more information on how we handle errors,  check out our detailed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove-docs/blob/720592c63db4bffe402a801417f7c14772573c28/docs/dev/contributing/backend/API-Errors.md"},"documentation"),"."),(0,i.kt)("h3",{id:"add-event-key-and-update-event-map"},"Add event key and update event map"),(0,i.kt)("p",null,"Each API has a corresponding file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/pkg/services/event/<apiName>_endpoint.go")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add new ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," to represent event key"),(0,i.kt)("li",{parentName:"ol"},"Add event key to endpoint map in the same file, using the event key name, api name, and operation ID.")),(0,i.kt)("p",null,"An example of an event key for MoveTaskOrder Create Handler is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// MoveTaskOrderCreateEventKey is a key containing MoveTaskOrder.Create\nconst MoveTaskOrderCreateEventKey KeyType = "MoveTaskOrder.Create"\n')),(0,i.kt)("p",null,"The event would be added to the event map called eventModels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var eventModels = map[KeyType]eventModel{\n    EndpointEventKey:                    {EndpointEventKey, models.Model{}}, // this is an example\n    NewEndpointEventKey:                 {NewEndpointEventKey, models.Model{}}, // this is an example\n    MoveTaskOrderCreateEventKey:         {MoveTaskOrderCreateEventKey, models.Move{},\n}\n")),(0,i.kt)("p",null,"If you'd like to learn more about event triggers, you can find more details ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove-docs/blob/720592c63db4bffe402a801417f7c14772573c28/docs/dev/contributing/backend/How-to-Add-an-Event-Trigger.md"},"here"),"."),(0,i.kt)("h2",{id:"references"},"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/backend/testing/acceptance-testing-payment-requests"},"Acceptance testing payment requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/frontend/guides/access-swagger-endpoints-from-react"},"How To Call Swagger Endpoints from React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/testing/acceptance-testing-prime-api-endpoints"},"Acceptance Testing Prime API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/guides/how-to-deprecate-endpoints"},"How to Deprecate an API Endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/about/overview-of-milmove/#swagger"},"MilMove Overview Swagger section")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/testing/how-to-test-the-prime-api"},"How to Test the Prime API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/guides/guide-to-creating-an-endpoint"},"Creating an Endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goswagger.io/tutorial/todo-list.html"},"Swagger tutorial"))))}c.isMDXComponent=!0},44964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/MilMoveSwaggerCall-1ad30e9184211a690c310905ec498f27.pdf"},79153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/SwaggerBackendArchitecture-04896085460566cade8544ee44ac5804.pdf"},83220:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MilMoveSwaggerCall-b29c3058581367926ebd4b8d6ec8a63b.png"},91581:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SwaggerBackendArchitecture-425ee8547a389e6a13a868ad18499fb5.jpg"}}]);