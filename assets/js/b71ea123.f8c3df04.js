"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5657],{63559:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(8209);const s={sidebar_position:11},o="Testing best practices",r={unversionedId:"backend/testing/testing-best-practices",id:"backend/testing/testing-best-practices",title:"Testing best practices",description:"General guidelines",source:"@site/docs/backend/testing/testing-best-practices.md",sourceDirName:"backend/testing",slug:"/backend/testing/testing-best-practices",permalink:"/mymove-docs/docs/backend/testing/testing-best-practices",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/testing-best-practices.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"backendSidebar",previous:{title:"Test data generation",permalink:"/mymove-docs/docs/backend/testing/test-data-generation"},next:{title:"Testing payment requests",permalink:"/mymove-docs/docs/backend/testing/testing-payment-requests-for-domestic-sit-service-items"}},l={},c=[{value:"General guidelines",id:"general-guidelines",level:2},{value:"Examples of tests that will pass when they should fail",id:"examples-of-tests-that-will-pass-when-they-should-fail",level:2},{value:"Using NotEqual",id:"using-notequal",level:3},{value:"Not checking the length of an array before iterating through it",id:"not-checking-the-length-of-an-array-before-iterating-through-it",level:3}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-best-practices"},"Testing best practices"),(0,a.kt)("h2",{id:"general-guidelines"},"General guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be explicit when verifying values"),(0,a.kt)("li",{parentName:"ul"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"NotEqual")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"NotNil")," tests because they can lead to a false sense of security. Prefer testing for specific values with ",(0,a.kt)("inlineCode",{parentName:"li"},"Equal")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Nil"),"."),(0,a.kt)("li",{parentName:"ul"},"Before iterating through a range, make sure that the range is not empty first."),(0,a.kt)("li",{parentName:"ul"},"When verifying an expected error, you ",(0,a.kt)("strong",{parentName:"li"},"must")," check the type of the error, and if necessary, the contents of the error message. ",(0,a.kt)("inlineCode",{parentName:"li"},"suite.Error(err)")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"suite.NotNil(err)")," is not enough because they can result in false positives of false negatives."),(0,a.kt)("li",{parentName:"ul"},"Do not write a huge setup with subtests that reference variables several lines above the subtest. Create a separate setup for each test for readability."),(0,a.kt)("li",{parentName:"ul"},"Subtests must be able to run in isolation. You can verify this with Goland, which makes it easy to run individual subtests."),(0,a.kt)("li",{parentName:"ul"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"mock.anything"),". Part of mocking is to ensure that the object that is mocked has been called with the right arguments. If a handler is supposed to call a service object with a specific model ID, then if you use ",(0,a.kt)("inlineCode",{parentName:"li"},"mock.anything")," in the test and you introduce a bug in the handler where it passes in the wrong ID, the test will still pass. If you find it hard to avoid using ",(0,a.kt)("inlineCode",{parentName:"li"},"mock.anything"),", it's most likely a sign the code under test is not designed properly."),(0,a.kt)("li",{parentName:"ul"},"Always validate ",(0,a.kt)("inlineCode",{parentName:"li"},"Params")," in handlers using ",(0,a.kt)("inlineCode",{parentName:"li"},"suite.NoError(params.Body.Validate(strfmt.Default))"))),(0,a.kt)("h2",{id:"examples-of-tests-that-will-pass-when-they-should-fail"},"Examples of tests that will pass when they should fail"),(0,a.kt)("h3",{id:"using-notequal"},"Using NotEqual"),(0,a.kt)("p",null,"This test below is supposed to verify that if a service item has an existing ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason"),", and if the service item is approved, it should no longer have a ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason"),". The way the test is making that verification is by asserting that the updated service item's ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason")," is not equal to the one it had at the beginning of the test. This is not a valid test because if the code changed to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason")," to any value that is not the original one, the test would pass, but we expect it to fail. Instead, we should assert that the ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *HandlerSuite) TestUpdateMTOServiceItemStatusHandlerApproveSuccess() {\n    mtoServiceItem := suite.createServiceItem()\n    mtoServiceItem.Status = models.MTOServiceItemStatusApproved\n    reason := "should not update reason"\n    mtoServiceItem.RejectionReason = &reason\n\n    request := httptest.NewRequest("PATCH", "/service-items/{mtoServiceItemID}/status", nil)\n    params := mtoserviceitemop.UpdateMTOServiceItemStatusParams{\n    HTTPRequest:      request,\n    MtoServiceItemID: mtoServiceItem.ID.String(),\n    Body:             payloads.MTOServiceItem(&mtoServiceItem),\n    IfMatch:          etag.GenerateEtag(mtoServiceItem.UpdatedAt),\n    }\n\n    // rest of handler boilerplate goes here\n\n    suite.NotEqual(mtoServiceItemPayload.RejectionReason, reason)\n}\n')),(0,a.kt)("p",null,"There is another issue with the test above. Can you spot it?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason")," is not being saved to the database, and so it will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," in the payload. If you comment out the code in the service that sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"RejectionReason")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),", the test will still pass, which is not good. Here is what the test should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *HandlerSuite) TestUpdateMTOServiceItemStatusHandlerApproveSuccess() {\n    mtoServiceItem := suite.createServiceItem()\n    reason := "should not update reason"\n    mtoServiceItem.RejectionReason = &reason\n    suite.MustSave(&mtoServiceItem)\n    mtoServiceItem.Status = models.MTOServiceItemStatusApproved\n\n    request := httptest.NewRequest("PATCH", "/service-items/{mtoServiceItemID}/status", nil)\n    params := mtoserviceitemop.UpdateMTOServiceItemStatusParams{\n    HTTPRequest:      request,\n    MtoServiceItemID: mtoServiceItem.ID.String(),\n    Body:             payloads.MTOServiceItem(&mtoServiceItem),\n    IfMatch:          etag.GenerateEtag(mtoServiceItem.UpdatedAt),\n    }\n\n    // rest of handler boilerplate goes here\n\n    suite.Nil(mtoServiceItemPayload.RejectionReason)\n}\n')),(0,a.kt)("h3",{id:"not-checking-the-length-of-an-array-before-iterating-through-it"},"Not checking the length of an array before iterating through it"),(0,a.kt)("p",null,"In this test below, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateMTOShipmentStatus")," function is refactored and\nstops returning service items, the test will still pass. If\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceItems")," array is empty, the code inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop will\nnot be executed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'suite.T().Run("Create approved service items when the mtoShipment is approved", func(t *testing.T) {\n    shipmentForAutoApproveEtag := etag.GenerateEtag(shipmentForAutoApprove.UpdatedAt)\n    serviceItems := models.MTOServiceItems{}\n\n    _, err := updater.UpdateMTOShipmentStatus(shipmentForAutoApprove.ID, status, nil, shipmentForAutoApproveEtag)\n    suite.NoError(err)\n\n    err = suite.DB().Where("mto_shipment_id = ?", shipmentForAutoApprove.ID).All(&serviceItems)\n    suite.NoError(err)\n\n    // If we\'ve gotten the shipment updated and fetched it without error then we can inspect the\n    // service items created as a side effect to see if they are approved.\n    for _, serviceItem := range serviceItems {\n        suite.Equal(models.MTOServiceItemStatusApproved, serviceItem.Status)\n    }\n}\n')),(0,a.kt)("p",null,"To make this test more robust, first make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceItems")," array contains the expected amount of items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"suite.Equal(6, len(serviceItems))\n")))}m.isMDXComponent=!0}}]);