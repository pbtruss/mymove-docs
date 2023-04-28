"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7583],{54550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));n(95657);const a={sidebar_position:7},i="Usage",c={unversionedId:"backend/guides/service-objects/usage",id:"backend/guides/service-objects/usage",title:"Usage",description:"Service objects are often used in other services, but they're most commonly used by our handler functions. Handlers are",source:"@site/docs/backend/guides/service-objects/usage.md",sourceDirName:"backend/guides/service-objects",slug:"/backend/guides/service-objects/usage",permalink:"/mymove-docs/docs/backend/guides/service-objects/usage",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/service-objects/usage.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"backendSidebar",previous:{title:"Implementation",permalink:"/mymove-docs/docs/backend/guides/service-objects/implementation"},next:{title:"Backend Structure",permalink:"/mymove-docs/docs/backend/guides/backend-structure"}},o={},d=[],u={toc:d},l="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Service objects are often used in other services, but they're most commonly used by our handler functions. Handlers are\nthe ",(0,s.kt)("strong",{parentName:"p"},"presentation layer")," of our backend, and they correspond to API endpoints."),(0,s.kt)("p",null,"In either case, they will be used in much the same way. Service objects are often (although not necessarily) defined as\na dependency in a struct:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"// CreatePetHandler is the handler for the API endpoint to create a pet\ntype CreatePetHandler struct {\n    handlers.HandlerConfig\n    creator services.PetCreator // our service object\n}\n")),(0,s.kt)("p",null,"When that struct is being instantiated, they are created using their ",(0,s.kt)("inlineCode",{parentName:"p"},"New<MyServiceObject>")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"// First we need to initialize our service object. Here we're using the Customer version, which needs the string checker\npetCreator := pet.NewCustomerPetCreator(stringchecker.NewStringChecker)\n\n// Create an instance of CreatePetHandler, passing it the creator, and assign it to our generated Swagger Go code\ninternalAPI.PetCreatePetHandler = CreatePetHandler{\n    ctx,\n    petCreator,\n}\n")),(0,s.kt)("p",null,"And finally, once the service object is instantiated, it will be used by calling the function defined in the interface\ntype:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"// Call the service object using the creator set in our handler struct (`h` is the struct reference in this receiver \n// func)\ncreatedPet, err := h.creator.CreatePet(appCtx, newPet)\n")))}p.isMDXComponent=!0}}]);