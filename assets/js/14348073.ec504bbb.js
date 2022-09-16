"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5615],{1467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(87462),s=(n(67294),n(3905));n(61839);const o={sidebar_position:13},i="Understanding testdatagen functions",r={unversionedId:"backend/testing/understanding-testdatagen-functions",id:"backend/testing/understanding-testdatagen-functions",title:"Understanding testdatagen functions",description:"Why we use testdatagen functions",source:"@site/docs/backend/testing/understanding-testdatagen-functions.md",sourceDirName:"backend/testing",slug:"/backend/testing/understanding-testdatagen-functions",permalink:"/mymove-docs/docs/backend/testing/understanding-testdatagen-functions",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/understanding-testdatagen-functions.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"backendSidebar",previous:{title:"Testing payment requests",permalink:"/mymove-docs/docs/backend/testing/testing-payment-requests-for-domestic-sit-service-items"},next:{title:"Manually run Prime API for Slice demo",permalink:"/mymove-docs/docs/backend/testing/manually-run-prime-api-for-slice-demo"}},d={},u=[{value:"Why we use testdatagen functions",id:"why-we-use-testdatagen-functions",level:2},{value:"How to use a testdatagen function",id:"how-to-use-a-testdatagen-function",level:2},{value:"Defaults provided",id:"defaults-provided",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Dependent objects",id:"dependent-objects",level:3},{value:"Assertions on dependent records",id:"assertions-on-dependent-records",level:3},{value:"Reusing objects",id:"reusing-objects",level:3},{value:"Stubbing objects",id:"stubbing-objects",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"understanding-testdatagen-functions"},"Understanding testdatagen functions"),(0,s.kt)("h2",{id:"why-we-use-testdatagen-functions"},"Why we use testdatagen functions"),(0,s.kt)("p",null,"When we unit test our code, we need a way to insert records in the database to test with. We need sample records to manipulate, update, delete, etc."),(0,s.kt)("p",null,"We could create them by using Pop to create in the DB directly. However, our records have a lot of interdependencies and constraints. Here\u2019s a subset of the constraints you\u2019d have to understand, and handle, to create a payment request:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Payment requests must link to existent service items."),(0,s.kt)("li",{parentName:"ul"},"Payment requests must link to an existent MTO record."),(0,s.kt)("li",{parentName:"ul"},"The MTO must link to an existent Orders record."),(0,s.kt)("li",{parentName:"ul"},"Payment requests must use a sequence_id > 0"),(0,s.kt)("li",{parentName:"ul"},"Payment requests must have a PaymentRequestNumber\nthe list goes on\u2026")),(0,s.kt)("p",null,"So to test something as simple as a function to approve a Payment Request, you\u2019d be writing a lot of test code just to create that Payment Request."),(0,s.kt)("p",null,"That\u2019s where ",(0,s.kt)("inlineCode",{parentName:"p"},"testdatagen.Make")," functions come in handy. They efficiently ",(0,s.kt)("strong",{parentName:"p"},"create records")," with ",(0,s.kt)("strong",{parentName:"p"},"default values"),", while handling all the ",(0,s.kt)("strong",{parentName:"p"},"dependencies"),", and even allowing you to ",(0,s.kt)("strong",{parentName:"p"},"override default values"),"."),(0,s.kt)("p",null,"It's important to note that they create ",(0,s.kt)("strong",{parentName:"p"},"records in the db")," by default, so if you just want a model that doesn't need to exist in the db, use the ",(0,s.kt)("a",{parentName:"p",href:"#stubbing-objects"},"stub feature"),"."),(0,s.kt)("h2",{id:"how-to-use-a-testdatagen-function"},"How to use a testdatagen function"),(0,s.kt)("p",null,"To use a testdatagen function, you import the testdatagen package from ",(0,s.kt)("inlineCode",{parentName:"p"},"github.com/transcom/mymove/pkg/testdatagen")," and use the Make functions."),(0,s.kt)("p",null,"Let's assume we're creating an MTOShipment."),(0,s.kt)("h3",{id:"defaults-provided"},"Defaults provided"),(0,s.kt)("p",null,"The testdatagen function should provide defaults for value in the record, so you don't need to provide these. The following should create an MTOShipment in the db and return a model with the data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"mtoShipment := testdatagen.MakeDefaultMTOShipment(suite.DB())\n")),(0,s.kt)("h3",{id:"assertions"},"Assertions"),(0,s.kt)("p",null,"However if you want to change a field in the record, you can provide an ",(0,s.kt)("inlineCode",{parentName:"p"},"assertion")," to do so.\nAn assertion says, create the default record, but overwrite this field."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'mtoShipment := testdatagen.MakeMTOShipment(suite.DB(),\n  testdatagen.Assertions{\n    MTOShipment: models.MTOShipment{\n      CustomerRemarks: swag.String("my special remarks"),\n    },\n})\n')),(0,s.kt)("p",null,"What this says is: create a default MTOShipment but overwrite the ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomerRemarks")," field."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CAVEAT"),": Overriding does not work for ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," boolean values. If some attribute is ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," by default, setting it to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," via Assertions won't work. This is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/imdario/mergo/issues/165"},"known issue in the mergo")," package we use for merging the structs. To work around this, you can either just avoid making the default value ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," in the base function."),(0,s.kt)("p",null,"Or you can use a helper function like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-golang"},"func setDependentsAuthorized(assertionDependentsAuthorized *bool) *bool {\n    dependentsAuthorized := swag.Bool(true)\n    if assertionDependentsAuthorized != nil {\n    dependentsAuthorized = assertionDependentsAuthorized\n    }\n    return dependentsAuthorized\n}\nentitlement := models.Entitlement{\n    DependentsAuthorized:  setDependentsAuthorized(assertions.Entitlement.DependentsAuthorized),\n    ...\n}\n")),(0,s.kt)("h3",{id:"dependent-objects"},"Dependent objects"),(0,s.kt)("p",null,"In addition to creating the record you requested, the ",(0,s.kt)("inlineCode",{parentName:"p"},"MTOShipment"),", the Make function will also create every nested record it needs, by calling those objects' Make functions."),(0,s.kt)("p",null,"Pretty awesome not to have to create all of these records!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MakeMTOShipment\n\u251c\u2500\u2500 MakeMove\n\u2502\xa0\xa0 \u251c\u2500\u2500 MakeOrder\n\u2502   \u2502\xa0 \u251c\u2500\u2500 MakeExtendedServiceMember\n\u2502   \u2502\xa0 \u251c\u2500\u2500 MakeDocument\n\u2502   \u2502\xa0 \u2514\u2500\u2500 MakeUserUpload\n\u2502\xa0\xa0 \u2514\u2500\u2500 MakeContractor\n\u2514\u2500\u2500 MakeAddress\n")),(0,s.kt)("p",null,"So what if you want to overwrite fields in those nested objects? You can, in fact, pass in assertions for those records."),(0,s.kt)("h3",{id:"assertions-on-dependent-records"},"Assertions on dependent records"),(0,s.kt)("p",null,"Dependent records are things like ",(0,s.kt)("inlineCode",{parentName:"p"},"Move"),", that ",(0,s.kt)("inlineCode",{parentName:"p"},"MTOShipment")," nests in its model."),(0,s.kt)("p",null,"But the assertions work differently. You want to ",(0,s.kt)("strong",{parentName:"p"},"flatten")," the assertions, so that in the ",(0,s.kt)("inlineCode",{parentName:"p"},"testdatagen.Assertions")," object, they are all at the top level."),(0,s.kt)("p",null,"Notice inside the assertions, that ",(0,s.kt)("inlineCode",{parentName:"p"},"MTOShipment")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Move")," are at the same level."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'mtoShipment := testdatagen.MakeMTOShipment(suite.DB(),\n  testdatagen.Assertions{\n    MTOShipment: models.MTOShipment{\n      CustomerRemarks: swag.String("my special remarks"),\n    },\n    Move: models.Move{\n      ReferenceID: "1234567",\n    },\n})\n')),(0,s.kt)("p",null,"This ensures that when the nested Make functions get called, they can find all your assertions and apply them correctly."),(0,s.kt)("h3",{id:"reusing-objects"},"Reusing objects"),(0,s.kt)("p",null,"In the above examples, the Make functions are always creating new records with a new uuid, so a new ",(0,s.kt)("inlineCode",{parentName:"p"},"MTOShipment"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Move"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Order")," etc. At times, you may want to provide an record you have already created."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"mto := testdatagen.MakeAvailableMove(suite.DB())\n.\n.\n.\nmtoShipment1 := testdatagen.MakeMTOShipment(suite.DB(),\n  testdatagen.Assertions{\n    Move: mto,\n})\n")),(0,s.kt)("p",null,"This will connect that shipment to the previously created MTO."),(0,s.kt)("h2",{id:"stubbing-objects"},"Stubbing objects"),(0,s.kt)("p",null,"In many cases, you should not need to use the DB to test logic. To keep using the handy testdatagen functions but without saving them to the DB, you can pass in the top-level ",(0,s.kt)("inlineCode",{parentName:"p"},"Stub: true")," assertion, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"officeUser := testdatagen.MakeTOOOfficeUser(suite.DB(), testdatagen.Assertions{\n    Stub: true,\n})\n")),(0,s.kt)("p",null,"For more details, read about ",(0,s.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/testing/how-to-write-fast-tests"},"How to write fast tests"),"."))}p.isMDXComponent=!0}}]);