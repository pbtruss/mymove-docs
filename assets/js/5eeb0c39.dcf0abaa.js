"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2738],{73082:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));i(95657);const s={sidebar_position:12},o="Testing payment requests",r={unversionedId:"backend/testing/testing-payment-requests-for-domestic-sit-service-items",id:"backend/testing/testing-payment-requests-for-domestic-sit-service-items",title:"Testing payment requests",description:"Storage In Transit (SIT) pricing is composed of the following three elements:",source:"@site/docs/backend/testing/testing-payment-requests-for-domestic-sit-service-items.md",sourceDirName:"backend/testing",slug:"/backend/testing/testing-payment-requests-for-domestic-sit-service-items",permalink:"/mymove-docs/docs/backend/testing/testing-payment-requests-for-domestic-sit-service-items",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/testing-payment-requests-for-domestic-sit-service-items.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"backendSidebar",previous:{title:"Testing best practices",permalink:"/mymove-docs/docs/backend/testing/testing-best-practices"},next:{title:"Understanding testdatagen functions",permalink:"/mymove-docs/docs/backend/testing/understanding-testdatagen-functions"}},l={},m=[{value:"Domestic SIT service items",id:"domestic-sit-service-items",level:3},{value:"Distance calculation",id:"distance-calculation",level:2},{value:"Where do I put these ZIPs?",id:"where-do-i-put-these-zips",level:2},{value:"Example ZIP codes for testing",id:"example-zip-codes-for-testing",level:2},{value:"Create Origin SIT service items",id:"create-origin-sit-service-items",level:2},{value:"Create Destination SIT service items",id:"create-destination-sit-service-items",level:2}],d={toc:m};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"testing-payment-requests"},"Testing payment requests"),(0,n.kt)("p",null,"Storage In Transit (SIT) pricing is composed of the following three elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SIT First Day: Covers the warehouse and handing in/out costs (but not transit)."),(0,n.kt)("li",{parentName:"ul"},"SIT Add\u2019l Days: After the first day, a daily rate is charged for ongoing storage."),(0,n.kt)("li",{parentName:"ul"},"SIT Pickup/Delivery: The cost of picking up or delivering a shipment in/out of SIT.")),(0,n.kt)("p",null,"There are two types of SIT -- Origin SIT and Destination SIT, depending on whether SIT is being used at the origin or destination of the move."),(0,n.kt)("h3",{id:"domestic-sit-service-items"},"Domestic SIT service items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DOFSIT")," - Domestic origin 1st day SIT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DOASIT")," - Domestic origin Additional day SIT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DOPSIT")," - Domestic origin SIT pickup"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DDFSIT")," - Domestic destination 1st day SIT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DDASIT")," - Domestic destination Additional day SIT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DDDSIT")," - Domestic destination SIT delivery")),(0,n.kt)("p",null,"This page will walk you through creating and pricing a move with SIT service items."),(0,n.kt)("h1",{id:"choosing-a-pricing-scenario"},"Choosing a pricing scenario"),(0,n.kt)("p",null,'Origin SIT pickup (DOPSIT) and Destination SIT delivery (DDDSIT) service items are priced in 3 different ways, depending on the "original" and "actual" ZIP3 (a ZIP3 is the first 3 digits of a ZIP code). See the ',(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1jRl91aslMnOMt2zS1tt_XT0lD1I-xvsiKOfprAaFrAs/edit#heading=h.qvz570f9mzig"},"pricing notes doc")," for details."),(0,n.kt)("p",null,"The 3 scenarios are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ZIP3 to same ZIP3"),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and > 50 miles"),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and <= 50 miles")),(0,n.kt)("h2",{id:"distance-calculation"},"Distance calculation"),(0,n.kt)("p",null,"DTOD is used to calculate distances within the same ZIP3, and Rand McNally is used for other distance calculations."),(0,n.kt)("h2",{id:"where-do-i-put-these-zips"},"Where do I put these ZIPs?"),(0,n.kt)("p",null,"For both types of SIT, the original ZIP comes from an address entered by the service member when creating their shipment, and the actual ZIP is set by the prime.\nFor Origin SIT, the original ZIP comes from the pickup address on the shipment (",(0,n.kt)("inlineCode",{parentName:"p"},"mto_shipments.pickup_address_id"),"), and the actual address is sent in the ",(0,n.kt)("inlineCode",{parentName:"p"},"sitHHGActualOrigin")," field when creating the DOFSIT service item.\nFor Destination SIT, the original ZIP comes from the destination address on the shipment (",(0,n.kt)("inlineCode",{parentName:"p"},"mto_shipments.destination_address_id"),"), and the actual address is sent in the ",(0,n.kt)("inlineCode",{parentName:"p"},"sitDestinationFinalAddress")," field when updating the DDDSIT service item."),(0,n.kt)("h2",{id:"example-zip-codes-for-testing"},"Example ZIP codes for testing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"close to Fort Gordon (useful when testing Destination SIT)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZIP3 to same ZIP3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Fort Gordon, GA 30905"),(0,n.kt)("li",{parentName:"ul"},"to: Augusta, GA 30909"))),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and > 50 miles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Aberdeen Proving Ground, MD, 21005"),(0,n.kt)("li",{parentName:"ul"},"to: Fort Gordon, GA 30813"))),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and <= 50 miles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Fort Gordon, GA 30905"),(0,n.kt)("li",{parentName:"ul"},"to: Fort Gordon, GA 30813"))))),(0,n.kt)("li",{parentName:"ul"},"close to Fort Irwin (useful when testing Origin SIT)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZIP3 to same ZIP3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Fort Irwin, CA 92310"),(0,n.kt)("li",{parentName:"ul"},"to: Baker, CA 92309"))),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and > 50 miles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Fort Irwin, CA 92310"),(0,n.kt)("li",{parentName:"ul"},"to: Henderson, NV 89002"))),(0,n.kt)("li",{parentName:"ul"},"ZIP3 to different ZIP3 and <= 50 miles",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"from: Beverly Hills, CA 90210"),(0,n.kt)("li",{parentName:"ul"},"to: Long Beach, CA 90803")))))),(0,n.kt)("h1",{id:"initial-move-setup-from-scratch"},"Initial move setup from scratch"),(0,n.kt)("p",null,"Before you can add SIT service items to a move, you have to set up a move and get it ready for the Prime.\nCreate an account for a new service member and create a new HHG move with a shipment. The origin duty station's GBLOC must be in the same GBLOC as the office user you look at it with (see ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/frontend/testing/how-to-view-a-move-or-payment-request-in-the-office-app-as-a-too-or-tio"},"this Wiki page")," for more details). Take note of the move locator on the last page."),(0,n.kt)("p",null,"For Origin SIT, choose a pickup address with a ZIP that fits your chosen pricing scenario."),(0,n.kt)("p",null,"For Destination SIT, choose a delivery address with a ZIP that fits your chosen pricing scenario. If the destination duty station ZIP fits, you can opt to use that instead of entering a delivery address."),(0,n.kt)("p",null,"Go to the office app (",(0,n.kt)("a",{parentName:"p",href:"http://officelocal:3000"},"local"),", ",(0,n.kt)("a",{parentName:"p",href:"https://office.stg.move.mil/"},"staging"),") and find the move you just created via the move locator. Go to the orders and set any empty fields like TAC/SAC. Go ahead and approve the move and the default service items for shipment management and counseling fees."),(0,n.kt)("p",null,"Now let's use the pricing-acceptance script to handle some of the usual things like updating dates/weights that the prime would be doing."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rm bin/prime-api-client\nmake bin/prime-api-client\n\n# local\npricing-acceptance <insert move ID> local\n\n# staging\npricing-acceptance <insert move ID> api.stg.move.mil\n\n")),(0,n.kt)("p",null,"Note that this script can create destination SIT service items (DDFSIT, DDASIT, DDDSIT), but it will not update the DDDSIT item with ",(0,n.kt)("inlineCode",{parentName:"p"},"sitDestinationFinalAddress"),". It will also create a payment request.\nDepending on what you are testing, you may want to stop the demo script with ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl-c")," before one or both of these steps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are testing destination SIT, and ",(0,n.kt)("strong",{parentName:"li"},"don't")," intend to set a final address, you can run the script to the end."),(0,n.kt)("li",{parentName:"ul"},"If you are testing destination SIT, and you ",(0,n.kt)("strong",{parentName:"li"},"do")," intend to set a final address, you can stop the script when it prompts to create a payment request"),(0,n.kt)("li",{parentName:"ul"},"If you do not want to create destination SIT service items, kill the script when it prompts to create a DDFSIT service item.")),(0,n.kt)("h1",{id:"creating-sit-service-items"},"Creating SIT service items"),(0,n.kt)("p",null,"When you create the first day SIT service items, additional days and pickup/delivery service items will be created automatically.\nSo if you add a DOFSIT service item, you'll also get a DOASIT and a DOPSIT, and if you add a DDFSIT, you'll get a DDASIT and a DDDSIT."),(0,n.kt)("p",null,"When creating origin SIT service items, we can send the new pickup address in the payload for creating the DOFSIT service item."),(0,n.kt)("p",null,"For destination SIT, after creating the service items, you use update-mto-service-item to add the new delivery address to the DDDSIT service item."),(0,n.kt)("h2",{id:"create-origin-sit-service-items"},"Create Origin SIT service items"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Skip this section if you are only testing Destination SIT")),(0,n.kt)("p",null,"If necessary, you can use the move locator to look up the moveTaskOrderID and the mtoShipmentID:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client --insecure fetch-mto-updates | jq --arg moveCode <insert move locator> 'map(select(.moveCode == $moveCode)) | .[0] | {moveTaskOrderID: .id, mtoShipmentID: .mtoShipments[0].id}'\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq --arg moveCode <insert move locator> 'map(select(.moveCode == $moveCode)) | .[0] | {moveTaskOrderID: .id, mtoShipmentID: .mtoShipments[0].id}'\n\n")),(0,n.kt)("p",null,"Make a payload file for creating the DOFSIT service item:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"create_dofsit_service_item.json")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "moveTaskOrderID": "bc561acb-0cae-43f7-a1a8-393067ffcc56",\n    "mtoShipmentID": "22267602-d1b8-45e8-a95e-ec61bc728a13",\n    "modelType": "MTOServiceItemOriginSIT",\n    "reServiceCode": "DOFSIT",\n    "sitPostalCode": "00000",\n    "reason": "my address changed",\n    "sitEntryDate": "2021-01-13",\n    "sitHHGActualOrigin":  {\n      "streetAddress1": "20245 4th St",\n      "city": "New Braunfels",\n      "state": "TX",\n      "postalCode": "78130",\n      "country": "United States"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Update ",(0,n.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"mtoShipmentID")," to match your move.\nUpdate ",(0,n.kt)("inlineCode",{parentName:"p"},"sitEntryDate")," to something plausible.\n",(0,n.kt)("inlineCode",{parentName:"p"},"sitHHGActualOrigin"),' is used as the "actual" address for pricing, so set this according to your pricing scenario.'),(0,n.kt)("p",null,"Note: ",(0,n.kt)("inlineCode",{parentName:"p"},"sitPostalCode")," is not currently used (and may be removed), but for now, it must be present and must pass ZIP validations."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client --insecure create-mto-service-item --filename create_dofsit_service_item.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 create-mto-service-item --filename create_dofsit_service_item.json\n")),(0,n.kt)("p",null,"Approve the new service items from the TOO interface, and proceed to making a payment request."),(0,n.kt)("h2",{id:"create-destination-sit-service-items"},"Create Destination SIT service items"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Skip this section if you are only testing Origin SIT")),(0,n.kt)("p",null,"Start by adding a DDFSIT (destination first day SIT) to the move. This will also cause DDASIT and DDDSIT service items to be added automatically. You'll need the moveTaskOrderID and the shipmentID. You can get these from your local database, or by using the prime API."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client --insecure fetch-mto-updates | jq --arg moveCode <insert move locator> 'map(select(.moveCode == $moveCode)) | .[0] | {moveTaskOrderID: .id, mtoShipmentID: .mtoShipments[0].id}'\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq --arg moveCode <insert move locator> 'map(select(.moveCode == $moveCode)) | .[0] | {moveTaskOrderID: .id, mtoShipmentID: .mtoShipments[0].id}'\n")),(0,n.kt)("p",null,"Use this JSON template to make a file named create_ddfsit_service_item.json, filling in the move ID and shipment ID (which you can either get from your local database, or by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch-mto-updates"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "moveTaskOrderID": "<insert move ID>",\n    "mtoShipmentID": "<insert shipment ID>",\n    "modelType": "MTOServiceItemDestSIT",\n    "reServiceCode": "DDFSIT",\n    "timeMilitary1": "1705Z",\n    "firstAvailableDeliveryDate1": "2021-01-31",\n    "timeMilitary2": "0719Z",\n    "firstAvailableDeliveryDate2": "2021-02-03",\n    "sitEntryDate": "2021-01-12",\n    "sitDepartureDate": "2021-01-22"\n  }\n}\n')),(0,n.kt)("p",null,"Run this command to create DDFSIT, DDASIT, and DDDSIT service items, and generate a payload file for the next step:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# local\nprime-api-client --insecure create-mto-service-item --filename create_ddfsit_service_item.json | jq "map(select(.reServiceCode == \\"DDDSIT\\"))[0] | {mtoServiceItemId: .id, ifMatch: .eTag, body: {id: .id, modelType: \\"UpdateMTOServiceItemSIT\\", sitDestinationFinalAddress: {streetAddress1: \\"20245 4th St\\", city: \\"Albuquerque\\", state: \\"NM\\", postalCode: \\"87117\\", country: \\"United States\\"}}}" > update_dddsit_service_item.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 create-mto-service-item --filename create_ddfsit_service_item.json | jq "map(select(.reServiceCode == \\"DDDSIT\\"))[0] | {mtoServiceItemId: .id, ifMatch: .eTag, body: {id: .id, modelType: \\"UpdateMTOServiceItemSIT\\", sitDestinationFinalAddress: {streetAddress1: \\"20245 4th St\\", city: \\"Albuquerque\\", state: \\"NM\\", postalCode: \\"87117\\", country: \\"United States\\"}}}" > update_dddsit_service_item.json\n')),(0,n.kt)("p",null,"If you've already created the SIT service items (eg with the ",(0,n.kt)("inlineCode",{parentName:"p"},"pricing-acceptance")," script, you can use information from ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch-mto-updates")," to generate the payload instead."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# local\nprime-api-client --insecure fetch-mto-updates | jq --arg moveCode <insert move locator> \'map(select(.moveCode == $moveCode)) | .[0] |  .mtoServiceItems | map(select(.reServiceCode == "DDDSIT"))[0] | {mtoServiceItemId: .id, ifMatch: .eTag, body: {id: .id, modelType: "UpdateMTOServiceItemSIT", sitDestinationFinalAddress: {streetAddress1: "20245 4th St", city: "Albuquerque", state: "NM", postalCode: "87117", country: "United States"}}}\' > update_dddsit_service_item.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq --arg moveCode <insert move locator> \'map(select(.moveCode == $moveCode)) | .[0] |  .mtoServiceItems | map(select(.reServiceCode == "DDDSIT"))[0] | {mtoServiceItemId: .id, ifMatch: .eTag, body: {id: .id, modelType: "UpdateMTOServiceItemSIT", sitDestinationFinalAddress: {streetAddress1: "20245 4th St", city: "Albuquerque", state: "NM", postalCode: "87117", country: "United States"}}}\' > update_dddsit_service_item.json\n')),(0,n.kt)("p",null,"You should update the ",(0,n.kt)("inlineCode",{parentName:"p"},"sitDestinationFinalAddress")," field in the generated file, ",(0,n.kt)("inlineCode",{parentName:"p"},"update_dddsit_service_item.json")," if you require a specific address for the scenario that you're testing."),(0,n.kt)("p",null,"Next, use the following command to use the generated file to update the DDDSIT service item with the new address."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client --insecure update-mto-service-item --filename update_dddsit_service_item.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 update-mto-service-item --filename update_dddsit_service_item.json\n")),(0,n.kt)("h1",{id:"creating-a-payment-request"},"Creating a Payment Request"),(0,n.kt)("p",null,"Get the MTO ID and the MTO Service Item IDs of any service items you want to include in the payment request, and put them in the body\nof the request."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "isFinal": false,\n    "moveTaskOrderID": "<insert MTO ID>",\n    "serviceItems": [\n      {\n        "id": "<insert first MTO service item ID>"\n      },\n      {\n        "id": "<insert second MTO service item ID>"\n      },\n      ...\n    ]\n  }\n}\n')),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch-mto-updates")," to generate a request body that includes every service item."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client --insecure fetch-mto-updates | jq --arg moveCode <insert move code> 'map(select(.moveCode == $moveCode)) | .[0] | .id as $mto | .mtoServiceItems | map({id: .id}) | {body: {isFinal: false, moveTaskOrderID: $mto, serviceItems: .}}' > create_payment_request.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq --arg moveCode <insert move code> 'map(select(.moveCode == $moveCode)) | .[0] | .id as $mto | .mtoServiceItems | map({id: .id}) | {body: {isFinal: false, moveTaskOrderID: $mto, serviceItems: .}}' > create_payment_request.json\n\n")),(0,n.kt)("p",null,"And then use the request body to create a payment request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# local\nprime-api-client create-payment-request --insecure --filename create_payment_request.json\n\n# staging\nprime-api-client --cac --hostname api.stg.move.mil --port 443 create-payment-request --insecure --filename create_payment_request.json\n")),(0,n.kt)("h1",{id:"approve-payment-request-as-tio"},"Approve payment request as TIO"),(0,n.kt)("p",null,"Log in as a TIO user in the same GBLOC as your move."),(0,n.kt)("p",null,"You should be able to see the SIT service items and pricing details."),(0,n.kt)("p",null,"You can check the pricing calculations using the instructions from ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/testing/acceptance-testing-payment-requests"},"this document"),"."),(0,n.kt)("p",null,"If you want to send an invoice, approve some of the service items and the move, and then wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"process_edis")," scheduled task to run."),(0,n.kt)("h1",{id:"references"},"References"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1jRl91aslMnOMt2zS1tt_XT0lD1I-xvsiKOfprAaFrAs/edit#"},"SIT pricing discovery")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/testing/acceptance-testing-payment-requests#add-sit-related-service-items"},"Add SIT related service items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Has example payload and call for dom/origin first day SIT and no explanation")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6435"},"https://github.com/transcom/mymove/pull/6435")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"explains the 3 pricing scenarios for destination SIT")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6417"},"https://github.com/transcom/mymove/pull/6417")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use prime api demo to set up some sit service items"),(0,n.kt)("li",{parentName:"ul"},"How to add DDASIT service item"),(0,n.kt)("li",{parentName:"ul"},"Create a payment request for that service item"),(0,n.kt)("li",{parentName:"ul"},"Screenshots for TIO view of the service item")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6402"},"https://github.com/transcom/mymove/pull/6402")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use prime api demo to set up new move"),(0,n.kt)("li",{parentName:"ul"},"Create DOFSIT service item with prime api client"),(0,n.kt)("li",{parentName:"ul"},"Create payment request for service item"),(0,n.kt)("li",{parentName:"ul"},"Screenshot of TIO view")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/5823"},"https://github.com/transcom/mymove/pull/5823")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"More detailed move creation instructions (eg talks about GBLOC, and more detail about what to do as TOO)"),(0,n.kt)("li",{parentName:"ul"},"Create DOFSIT and explains how the tcreates other service items"),(0,n.kt)("li",{parentName:"ul"},"Talks about the 3 zip scenarios and suggests testing them all"),(0,n.kt)("li",{parentName:"ul"},"Links to SIT pricing notes doc: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1jRl91aslMnOMt2zS1tt_XT0lD1I-xvsiKOfprAaFrAs/edit#heading=h.od9n7nbhtjs5"},"https://docs.google.com/document/d/1jRl91aslMnOMt2zS1tt_XT0lD1I-xvsiKOfprAaFrAs/edit#heading=h.od9n7nbhtjs5"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/5769"},"https://github.com/transcom/mymove/pull/5769")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Talks about updating DDDSIT with an address",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"So you have to create it without an address, and then you later call update-mto-service-item with the new address")))))}c.isMDXComponent=!0}}]);