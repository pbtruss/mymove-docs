"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8490],{10382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));n(8209);const r={sidebar_position:2},o="End to End Testing Playing the Prime",l={unversionedId:"api/testing/end-to-end-testing-playing-the-prime",id:"api/testing/end-to-end-testing-playing-the-prime",title:"End to End Testing Playing the Prime",description:"This page includes instructions on how to complete basic functions as the Prime when testing the application e2e (e.g. MilMob) with other user roles (Services Counselor, TOO, TIO).",source:"@site/docs/api/testing/end-to-end-testing-playing-the-prime.md",sourceDirName:"api/testing",slug:"/api/testing/end-to-end-testing-playing-the-prime",permalink:"/mymove-docs/docs/api/testing/end-to-end-testing-playing-the-prime",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/api/testing/end-to-end-testing-playing-the-prime.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Acceptance Testing Prime API",permalink:"/mymove-docs/docs/api/testing/acceptance-testing-prime-api-endpoints"},next:{title:"How to Test the Prime API",permalink:"/mymove-docs/docs/api/testing/how-to-test-the-prime-api"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"E2E Testing Sequence for 1 HHG Move",id:"e2e-testing-sequence-for-1-hhg-move",level:2},{value:"Prime: Part I",id:"prime-part-i",level:2},{value:"Prime: Part II",id:"prime-part-ii",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"end-to-end-testing-playing-the-prime"},"End to End Testing Playing the Prime"),(0,a.kt)("p",null,"This page includes instructions on how to complete basic functions as the Prime when testing the application e2e (e.g. MilMob) with other user roles (Services Counselor, TOO, TIO)."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1321598984/mTLS+Integrations+Certificate"},"Install mTLS integrations certificate")," on your local machine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls"},"Configure Postman for mTLS API calls")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use your mTLS integrations certificate in place of the dev certs"),(0,a.kt)("li",{parentName:"ul"},"Add an entry for each environment, STG and EXP"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import Prime E2E Testing collection into Postman"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove-docs/blob/main/static/files/postman/Prime%20E2E%20Testing.postman_collection.json"},"Postman Collection here")),(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove-docs/blob/main/static/files/postman/Prime%20EXP.postman_environment.json"},"Postman EXP environment config here")),(0,a.kt)("li",{parentName:"ul"},"In Postman, go to File > Import > Select your downloaded files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hit an endpoint to test your setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Select "Prime EXP" as your environment'),(0,a.kt)("li",{parentName:"ul"},"Open the new Prime Testing collection"),(0,a.kt)("li",{parentName:"ul"},"Send the ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchMTOUpdates")," request."),(0,a.kt)("li",{parentName:"ul"},"If you don't get a 200, check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls"},"Postman troubleshooting doc"),".")))),(0,a.kt)("h2",{id:"e2e-testing-sequence-for-1-hhg-move"},"E2E Testing Sequence for 1 HHG Move"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customer creates move"),(0,a.kt)("li",{parentName:"ul"},"Services Counselor reviews"),(0,a.kt)("li",{parentName:"ul"},"TOO approves shipment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prime Part I - Update shipment, add service items")),(0,a.kt)("li",{parentName:"ul"},"TOO approves service items"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prime Part II - Request payment, upload proof of service docs")),(0,a.kt)("li",{parentName:"ul"},"TIO handles invoicing")),(0,a.kt)("p",null,"This page covers the bold sections for Prime."),(0,a.kt)("h2",{id:"prime-part-i"},"Prime: Part I"),(0,a.kt)("p",null,"A move must go through all previous steps before these actions can be taken, ending with TOO approval."),(0,a.kt)("p",null,"Each request in the collection should be ran in sequence. You can edit the body as you see fit. There is code in the Tests section of some of the requests that will set variables to reuse, e.g. eTag, mtoShipmentID, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchMTOUpdates")," and search for your move code. Once you find it, copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit the collection > Variables > Paste in your value for ",(0,a.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"getMoveTaskOrder")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will grab the mtoShipmentID and eTag and store them"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check response for ",(0,a.kt)("inlineCode",{parentName:"p"},"destinationAddress"),". If none is present, include one in the next request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMTOShipment")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Include ",(0,a.kt)("inlineCode",{parentName:"li"},"primeEstimatedWeight"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"primeActualWeight"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"scheduledPickupDate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"actualPickupDate")),(0,a.kt)("li",{parentName:"ul"},"If no ",(0,a.kt)("inlineCode",{parentName:"li"},"deliveryAddress")," is present on the shipment, include an address in the following format:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   "destinationAddress": {\n        "streetAddress1": "148 S East St",\n        "city": "Princeton",\n        "state": "NC",\n        "postalCode": "27569",\n        "country": "US"\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send requests for ",(0,a.kt)("inlineCode",{parentName:"p"},"createMTOServiceItem"),", once for each type/request listed in the collection.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wait for TOO approval"))),(0,a.kt)("h2",{id:"prime-part-ii"},"Prime: Part II"),(0,a.kt)("p",null,"Once the service items have been approved, you can create a payment request. The current setup includes two separate payment requests: One with DOSHUT service item, and one with DOFSIT service items."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createPaymentRequest1")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This includes the ",(0,a.kt)("inlineCode",{parentName:"li"},"DOSHUT")," service item and should succeed"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createUpload")," to include proof of service docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createPaymentRequest2")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This includes the remaining service items created"),(0,a.kt)("li",{parentName:"ul"},"This may fail and send back errors. Record these for further investigation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If payment request succeeds, send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createUpload")," to include proof of service docs."))))}u.isMDXComponent=!0}}]);