"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4964],{57159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var s=n(87462),a=(n(67294),n(3905));n(8209);const o={},i="AppContext: how and when to use it",p={unversionedId:"backend/guides/use-stateless-services-with-app-context",id:"backend/guides/use-stateless-services-with-app-context",title:"AppContext: how and when to use it",description:"We want our services to be composable, so that one service can call",source:"@site/docs/backend/guides/use-stateless-services-with-app-context.md",sourceDirName:"backend/guides",slug:"/backend/guides/use-stateless-services-with-app-context",permalink:"/mymove-docs/docs/backend/guides/use-stateless-services-with-app-context",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/use-stateless-services-with-app-context.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Understanding MilMove Routing",permalink:"/mymove-docs/docs/backend/guides/understanding-milmove-routing"},next:{title:"Configure Postico or TablePlus to connect to mymove DB",permalink:"/mymove-docs/docs/backend/setup/configure-postico-or-tableplus-to-connect-to-mymove-db"}},r={},c=[{value:"Testing with AppContext",id:"testing-with-appcontext",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"appcontext-how-and-when-to-use-it"},"AppContext: how and when to use it"),(0,a.kt)("p",null,"We want our services to be composable, so that one service can call\nanother. We also want to be able to have a per request trace id\nassociated with a logger so that we can correlate log messages in a\nsingle request."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/use-stateless-services-with-context"},"ADR 0064 Use Stateless Services with Context")," for more background."),(0,a.kt)("p",null,"The way we achieve that goal is by storing the DB connection, logger, and\nsession inside an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"appcontext.AppContext"),", and requiring all\nfunctions that need one or more of those elements (DB, logger, session) to accept an argument of type ",(0,a.kt)("inlineCode",{parentName:"p"},"appcontext.AppContext")," as its first argument. The function can then extract those elements from the app context, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func MyFunction(appCtx appcontext.AppContext) {\n  db := appCtx.DB()\n  logger := appCtx.Logger()\n  session := appCtx.Session()\n}\n")),(0,a.kt)("p",null,"Search the ",(0,a.kt)("inlineCode",{parentName:"p"},"mymove")," codebase for ",(0,a.kt)("inlineCode",{parentName:"p"},"appCtx appcontext.AppContext")," for more usage examples. We also have examples here in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/backend/guides/service-objects/validation"},"Service Objects"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/guides/guide-to-creating-an-endpoint#steps-to-creating-a-new-handler"},"Guide to Creating an Endpoint"),"."),(0,a.kt)("h2",{id:"testing-with-appcontext"},"Testing with AppContext"),(0,a.kt)("p",null,"When testing a service object function, we need to pass in an instance of the AppContext that contains the test DB and test logger. That instance can be created like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"appcontext.NewAppContext(suite.DB(), suite.logger)\n")),(0,a.kt)("p",null,"Since this is a common thing to do in tests, packages should extract this into a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAppContext()")," helper method that's defined in the package's ",(0,a.kt)("inlineCode",{parentName:"p"},"*_test.go")," file. For example, it is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/services/mto_shipment/mto_shipment_service_test.go")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"mtoshipment")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// TestAppContext returns the AppContext for the test suite\nfunc (suite *MTOShipmentServiceSuite) TestAppContext() appcontext.AppContext {\n  return appcontext.NewAppContext(suite.DB(), suite.logger)\n}\n")),(0,a.kt)("p",null,"Search for ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAppContext() appcontext.AppContext")," in the codebase for more examples."),(0,a.kt)("p",null,"You can then use it in tests like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (suite *MTOShipmentServiceSuite) TestRejectShipment() {\n  router := NewShipmentRouter()\n  approver := NewShipmentRejecter(router)\n  reason := "reason"\n\n  suite.T().Run("If the shipment rejection is approved successfully, it should update the shipment status in the DB", func(t *testing.T) {\n    shipment := testdatagen.MakeDefaultMTOShipmentMinimal(suite.DB())\n    shipmentEtag := etag.GenerateEtag(shipment.UpdatedAt)\n    fetchedShipment := models.MTOShipment{}\n\n    rejectedShipment, err := approver.RejectShipment(suite.TestAppContext(), shipment.ID, shipmentEtag, &reason)\n\n    suite.NoError(err)\n    suite.Equal(shipment.MoveTaskOrderID, rejectedShipment.MoveTaskOrderID)\n\n    err = suite.DB().Find(&fetchedShipment, shipment.ID)\n    suite.NoError(err)\n\n    suite.Equal(models.MTOShipmentStatusRejected, fetchedShipment.Status)\n    suite.Equal(shipment.ID, fetchedShipment.ID)\n    suite.Equal(rejectedShipment.ID, fetchedShipment.ID)\n    suite.Equal(&reason, fetchedShipment.RejectionReason)\n  })\n}\n')))}u.isMDXComponent=!0}}]);