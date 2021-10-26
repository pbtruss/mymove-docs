"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5444],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69454:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:4},l="Creating an Endpoint",d={unversionedId:"api/guides/guide-to-creating-an-endpoint",id:"api/guides/guide-to-creating-an-endpoint",isDocsHomePage:!1,title:"Creating an Endpoint",description:"These are the various steps that are involved in creating a new endpoint.",source:"@site/docs/api/guides/guide-to-creating-an-endpoint.md",sourceDirName:"api/guides",slug:"/api/guides/guide-to-creating-an-endpoint",permalink:"/mymove-docs/docs/api/guides/guide-to-creating-an-endpoint",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/api/guides/guide-to-creating-an-endpoint.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apiSidebar",previous:{title:"API Style Guide",permalink:"/mymove-docs/docs/api/guides/api-style-guide"},next:{title:"How to Deprecate an API Endpoint",permalink:"/mymove-docs/docs/api/guides/how-to-deprecate-endpoints"}},p=[{value:"Adding  a new entry into the yaml",id:"adding--a-new-entry-into-the-yaml",children:[]},{value:"Creating a Handler:",id:"creating-a-handler",children:[{value:"Add event key and update event map",id:"add-event-key-and-update-event-map",children:[]}]}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-an-endpoint"},"Creating an Endpoint"),(0,o.kt)("h6",{id:"these-are-the-various-steps-that-are-involved-in-creating-a-new-endpoint"},"These are the various steps that are involved in creating a new endpoint."),(0,o.kt)("p",null,"Prior to creating an endpoint in the Handler folder, we must first add a new endpoint definition to swagger. We are using Swagger 2.0, which is ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/v2/"},"OpenAPI"),", a specification we use to format our RESTful APIs and provide a template for us to communicate the information in our API.\nAlways start with swagger. This step creates your endpoint definition and generates the files and helper functions you will need to create your endpoint. More specifically, swagger converts JSON user input into generated Go types."),(0,o.kt)("h2",{id:"adding--a-new-entry-into-the-yaml"},"Adding  a new entry into the yaml"),(0,o.kt)("p",null,"All new definitions will be added in ",(0,o.kt)("inlineCode",{parentName:"p"},"mymove/swagger-def"),". Note that we have broken down our spec into different files and we share definitions between files.\nBuilt compiled versions of our API spec will be generated and stored in the swagger folder, which we will not edit directly. Notice that there is a yaml file for each of our APIs.\nAn endpoint definition for the prime will go into the Prime yaml, but you may notice there are some definitions in ",(0,o.kt)("inlineCode",{parentName:"p"},"mymove/swagger-def/definitions"),".\nThis is because some definitions are shared across APIs and we've created a space to add those definitions in one place.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Uploads.yaml")," shares its definition across various APIs, and rather than creating various yaml files for this action, we have created one and added it to the shared ",(0,o.kt)("inlineCode",{parentName:"p"},"definitions")," folder."),(0,o.kt)("p",null,"For the purposes for adding a new endpoint, make sure that your endpoint is defined in these sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tags")," - is where we group all of our endpoints by category (i.e. shipment endpoints, agent endpoints, service item endpoints, etc.).\nThis top level field is where our gen files will divide the endpoints into their own packages. Tag component names are ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paths")," - defines our endpoint. Path names use ",(0,o.kt)("inlineCode",{parentName:"li"},"kebab-case"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"definitions")," - defines the shape of the data for our endpoint. Definitions component names are ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"responses")," - define what the endpoints return. Responses component names are ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parameters")," - define what an endpoint needs (e.g. headers). Parameter component names are ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),".")),(0,o.kt)("h4",{id:"troubleshooting-your-local-swagger-state"},"Troubleshooting your local swagger state:"),(0,o.kt)("p",null,"If you are having issues with your local swagger state it is recommended to run ",(0,o.kt)("inlineCode",{parentName:"p"},"make server_generate"),", accept the prompt, and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"make server_run")," again. For more information on troubleshooting, ",(0,o.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1632254277386600"},"this")," explanation will be helpful."),(0,o.kt)("h4",{id:"defining-a-path-for-your-endpoint"},"Defining a path for your endpoint"),(0,o.kt)("p",null,"For more information about URL design and structure checkout: ",(0,o.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/API-Style-Guide"},"API Style Guide")),(0,o.kt)("p",null,"Defining your endpoint path follows this simple convention:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    /your path:\n        HTTP request:\n            summary: this is the name of the action your endpoint performs, in camelCase\n            description: new convention is to reference description files in the swagger-def/info/ folder\n            operationId: this should match the endpoint title in the definitions section and summary in your paths section.\n            tags: matches the tag section for this endpoint\n            produces: this field will always be application/json\n            parameters: include parameters associated with this path\n            responses: response codes for this path, and a schema reference and the description if needed.\n")),(0,o.kt)("p",null,"NOTE: The description item will reference markdown files in ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger-def/info/"),". This change is further described in a recent ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/7435"},"PR"),".                "),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Moves")," path is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  /moves:\n    get:\n      summary: listMoves\n      description:\n          $ref: 'info/{file_name}.md'\n      operationId: listMoves\n      tags:\n        - moveTaskOrder\n      produces:\n        - application/json\n      parameters:\n        - in: query\n          name: since\n          type: string\n          format: date-time\n          description: Only return moves updated since this time. Formatted like \"2021-07-23T18:30:47.116Z\"\n      responses:\n        '200':\n          description: Successfully retrieved moves. A successful fetch might still return zero moves.\n          schema:\n            $ref: '#/definitions/ListMoves'\n        '401':\n          $ref: 'responses/PermissionDenied.yaml'\n        '403':\n          $ref: 'responses/PermissionDenied.yaml'\n        '500':\n          $ref: '#/responses/ServerError'\n    \n")),(0,o.kt)("h4",{id:"description-section-and-the-response-body"},"Description Section and the response body"),(0,o.kt)("p",null,"In your endpoint description make sure that the following fields are included when necessary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"required - fields that are required are listed in the description section."),(0,o.kt)("li",{parentName:"ul"},"x-nullable - this indicates that the value of a particular property may be null. It will also return null if the value doesn't exist otherwise it will be omitted if x-nullable is false."),(0,o.kt)("li",{parentName:"ul"},"x-omitempty -  this extension is good to add and set it to false if we don't want that field to be omitted if it is empty."),(0,o.kt)("li",{parentName:"ul"},"readOnly - sometimes you will need specify a readyonly property, for example when the property differs in a GET from a POST or PATCH. Note: readOnly properties are included in responses but not in requests."),(0,o.kt)("li",{parentName:"ul"},"eTag - An entity tag is provided so that a browser client or a script can make conditional REST requests using optimistic concurrency control. All eTags must be marked as readOnly.")),(0,o.kt)("p",null,"An example of the ListMove description is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      ListMove:\n        description:\n            $ref: 'info/{file_name}.md'\n        type: object\n        properties:\n          id:\n            example: 1f2270c7-7166-40ae-981e-b200ebdf3054\n            format: uuid\n            type: string\n          moveCode:\n            type: string\n            example: 'HYXFJF'\n            readOnly: true\n          createdAt:\n            format: date-time\n            type: string\n            readOnly: true\n          orderID:\n            example: c56a4180-65aa-42ec-a945-5fd21dec0538\n            format: uuid\n            type: string\n          referenceId:\n            example: 1001-3456\n            type: string\n          availableToPrimeAt:\n            format: date-time\n            type: string\n            x-nullable: true\n            readOnly: true\n          updatedAt:\n            format: date-time\n            type: string\n            readOnly: true\n          ppmType:\n            type: string\n            enum:\n              - FULL\n              - PARTIAL\n          ppmEstimatedWeight:\n            type: integer\n          eTag:\n            type: string\n            readOnly: true\n")),(0,o.kt)("p",null,"For information on error responses, check out: ",(0,o.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/API-Errors#api-errors"},"API Errors Guide")),(0,o.kt)("h4",{id:"gen-files"},"Gen files:"),(0,o.kt)("p",null,"Once you finishing updating the yaml files with the new endpoint information make sure to run your make commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"make swagger-generate")," to autogenerate your swagger files, or simply run ",(0,o.kt)("inlineCode",{parentName:"p"},"make server_run"),",\nwhich runs your server and other useful make commands in one go."),(0,o.kt)("h2",{id:"creating-a-handler"},"Creating a Handler:"),(0,o.kt)("p",null,"Now you're ready to add your endpoint to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handlers")," folder. Start building out the service object before creating your handler.\nFor more information about service objects and when to create one: ",(0,o.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/backend/service-objects"},"Service Objects"),"."),(0,o.kt)("p",null,"An important note about service objects: The service layer is where we will store our business logic and connect to the database. Once a service object is created, it will be passed in to the handler ",(0,o.kt)("inlineCode",{parentName:"p"},"NewPrimeAPIHandler")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/handlers/primeapi/api.go"),",\nand the handler will only be aware of the service object interface, while the service object will contain all of the rules and validations as well as accessing object from the database."),(0,o.kt)("p",null,"Handlers must never hit the database. Ideally, endpoint handlers are for type validations."),(0,o.kt)("h4",{id:"steps-to-creating-a-new-handler"},"Steps to creating a new handler:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a handler for the endpoint"),(0,o.kt)("li",{parentName:"ol"},"Add payload_to_model converters",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this is a good place to check data types and null values."))),(0,o.kt)("li",{parentName:"ol"},"model_to_payload functions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once we have either modified the model or added something to our model, it must be converted back into a payload in order to be returned by the handler."))),(0,o.kt)("li",{parentName:"ol"},"Create handler type and Handle function"),(0,o.kt)("li",{parentName:"ol"},"Add tests for the handler",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add test code",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," * Use testdatagen functions [[Understanding Testdatagen Functions]]\n"))),(0,o.kt)("li",{parentName:"ul"},"Add mocks (only if absolutely necessary): ",(0,o.kt)("a",{parentName:"li",href:"https://transcom.github.io/mymove-docs/docs/dev/testing/writing-tests/generate-mocks-with-mockery"},"Generating Mocks with mockery"))))),(0,o.kt)("h4",{id:"anatomy-of-a-handler"},"Anatomy of a handler"),(0,o.kt)("p",null,"All handlers should begin by storing the DB, logger, and/or session from the request into the ",(0,o.kt)("a",{parentName:"p",href:"use-stateless-services-with-app-context"},"AppContext"),". This is the easiest way to get all three:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"appCtx := h.AppContextFromRequest(params.HTTPRequest)\n")),(0,o.kt)("p",null,"And then this ",(0,o.kt)("inlineCode",{parentName:"p"},"appCtx")," will be passed in as the first argument to any service object function. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"shipment, err := h.RejectShipment(appCtx, shipmentID, eTag, rejectionReason)\n")),(0,o.kt)("p",null,"The DB, logger, and session can then be extracted from the app context like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"appCtx.DB()\nappCtx.Logger()\nappCtx.Session()\n")),(0,o.kt)("p",null,"Below are other ways to grab the logger and session from the request, and populating the AppContext with them."),(0,o.kt)("p",null,"Grab just the logger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"logger := h.LoggerFromRequest(params.HTTPRequest)\n")),(0,o.kt)("p",null,"or the session and logger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"session, logger := h.SessionAndLoggerFromRequest(params.HTTPRequest)\n")),(0,o.kt)("p",null,"Then, store the DB connection and logger in the\nApp Context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"appCtx := appcontext.NewAppContext(h.DB(), logger)\n")),(0,o.kt)("p",null,"If you also need the session, you can do all three at once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"appCtx := appcontext.WithSession(appcontext.NewAppContext(h.DB(), logger), session)\n")),(0,o.kt)("h4",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"You'll notice that many handlers perform authorization within the handler, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if !session.IsOfficeUser() || !session.Roles.HasRole(roles.RoleTypeTOO) {\n    logger.Error("Only TOO role can reject shipments")\n    return shipmentops.NewRejectShipmentForbidden()\n}\n')),(0,o.kt)("p",null,"This duplicated logic can be extracted into a service object. Perhaps something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (f *authorization) TOOAuthorized(appCtx appcontext.AppContext) bool {\n  session := appCtx.Session()\n\n  return session.IsOfficeUser() && session.Roles.HasRole(roles.RoleTypeTOO)\n}\n")),(0,o.kt)("p",null,"and then the handler would be updated like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'if !h.TOOAuthorized(appCtx) {\n  logger.Error("Only TOO role can reject shipments")\n  return shipmentops.NewRejectShipmentForbidden()\n}\n')),(0,o.kt)("h4",{id:"connecting-the-handler-to-the-service-object"},"Connecting the Handler to the Service Object:"),(0,o.kt)("p",null,"Once you create your handler type and Handle function, it can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"api.go"),".\nThis file is also where you can connect your service object to the handler.\nFor example, our ListsMoves Handler will be passed the service object interface as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"primeAPI.MoveTaskOrderListMovesHandler = ListMovesHandler{\n    ctx,\n    movetaskorder.NewMoveTaskOrderFetcher(),\n}\n")),(0,o.kt)("p",null,"Additionally in your file containing the handler make sure to pass in the services to your struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ListMovesHandler struct {\n    handlers.HandlerContext\n    services.MoveTaskOrderFetcher\n}\n")),(0,o.kt)("h4",{id:"how-to-handle-errors"},"How to handle errors"),(0,o.kt)("p",null,"For more information on how we handle errors,  check out our detailed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove-docs/blob/720592c63db4bffe402a801417f7c14772573c28/docs/dev/contributing/backend/API-Errors.md"},"documentation"),"."),(0,o.kt)("h3",{id:"add-event-key-and-update-event-map"},"Add event key and update event map"),(0,o.kt)("p",null,"Each API has a corresponding file in ",(0,o.kt)("inlineCode",{parentName:"p"},"/pkg/services/event/<apiName>_endpoint.go")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add new ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," to represent event key"),(0,o.kt)("li",{parentName:"ol"},"Add event key to endpoint map in the same file, using the event key name, api name, and operation ID.")),(0,o.kt)("p",null,"An example of an event key for MoveTaskOrder Create Handler is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// MoveTaskOrderCreateEventKey is a key containing MoveTaskOrder.Create\nconst MoveTaskOrderCreateEventKey KeyType = "MoveTaskOrder.Create"\n')),(0,o.kt)("p",null,"The event would be added to the event map called eventModels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var eventModels = map[KeyType]eventModel{\n    EndpointEventKey:                    {EndpointEventKey, models.Model{}}, // this is an example\n    NewEndpointEventKey:                 {NewEndpointEventKey, models.Model{}}, // this is an example\n    MoveTaskOrderCreateEventKey:         {MoveTaskOrderCreateEventKey, models.Move{},\n}\n")),(0,o.kt)("p",null,"If you'd like to learn more about event triggers, you can find more details ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove-docs/blob/720592c63db4bffe402a801417f7c14772573c28/docs/dev/contributing/backend/How-to-Add-an-Event-Trigger.md"},"here"),"."))}u.isMDXComponent=!0}}]);