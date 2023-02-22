"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3807],{60261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));t(95657);const s={sidebar_position:1},i="Acceptance testing Syncada",r={unversionedId:"backend/testing/acceptance-testing-syncada-edi-invoicing",id:"backend/testing/acceptance-testing-syncada-edi-invoicing",title:"Acceptance testing Syncada",description:"Prerequisites",source:"@site/docs/backend/testing/acceptance-testing-syncada-edi-invoicing.md",sourceDirName:"backend/testing",slug:"/backend/testing/acceptance-testing-syncada-edi-invoicing",permalink:"/mymove-docs/docs/backend/testing/acceptance-testing-syncada-edi-invoicing",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/acceptance-testing-syncada-edi-invoicing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"backendSidebar",previous:{title:"MilMove Backend",permalink:"/mymove-docs/docs/backend"},next:{title:"Acceptance testing notifications",permalink:"/mymove-docs/docs/backend/testing/acceptance-testing-notifications"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Move",id:"move",level:3},{value:"Orders",id:"orders",level:3},{value:"Shipment",id:"shipment",level:3},{value:"Payment Request",id:"payment-request",level:3},{value:"Invoicing Operations",id:"invoicing-operations",level:2},{value:"Generate EDI locally",id:"generate-edi-locally",level:3},{value:"Generate EDI via support API",id:"generate-edi-via-support-api",level:3},{value:"Update status of Payment Request",id:"update-status-of-payment-request",level:3},{value:"Generate and send EDI to Syncada",id:"generate-and-send-edi-to-syncada",level:3},{value:"References",id:"references",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"acceptance-testing-syncada"},"Acceptance testing Syncada"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"The following examples use a Move from the devseed data if needed for local\nuse."))),(0,o.kt)("p",null,"This section will describe the prerequisites for invoicing, that are beyond the scope of documenting here. See the ",(0,o.kt)("a",{parentName:"p",href:"#references"},"References")," section for links that may help in setting these up."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following commands listed assume you have built the local tooling required. You may either run ",(0,o.kt)("inlineCode",{parentName:"p"},"make build_tools")," which will build all the tooling for the project. Or to run the commands in this document, run ",(0,o.kt)("inlineCode",{parentName:"p"},"make bin/prime-api-client bin/generate-payment-request-edi"),". This will allow you to run the commands without any prefixes.")),(0,o.kt)("h3",{id:"move"},"Move"),(0,o.kt)("p",null,"A move with at least one shipment approved. Also helpful to have Management or Counsiling fees approved."),(0,o.kt)("h3",{id:"orders"},"Orders"),(0,o.kt)("p",null,"The orders associated with the move must have all the required fields, particularly ",(0,o.kt)("inlineCode",{parentName:"p"},"Department indicator"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TAC"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"SAC")," as all 3 are required for EDI Generation."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"TAC and SAC are large, 255 varchar and text in the database respectively;\nhowever, the EDI can only handle a max of 80 characters for those two fields."))),(0,o.kt)("h3",{id:"shipment"},"Shipment"),(0,o.kt)("p",null,"A shipment that is approved, with service items that can be priced."),(0,o.kt)("h3",{id:"payment-request"},"Payment Request"),(0,o.kt)("p",null,"A payment request is created for price-able service items. That payment request then needs to be reviewed via the TIO interface and contain at least 1 approved payment service item."),(0,o.kt)("p",null,"Save the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"payload.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save the following JSON to payload.json"',title:'"Save',the:!0,following:!0,JSON:!0,to:!0,'payload.json"':!0},'{\n  "body": {\n    "isFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "serviceItems": [\n      {\n        "id": "ca9aeb58-e5a9-44b0-abe8-81d233dbdebf"\n      },\n      {\n        "id": "eee4b555-2475-4e67-a5b8-102f28d950f8"\n      },\n      {\n        "id": "6431e3e2-4ee4-41b5-b226-393f9133eb6c"\n      },\n      {\n        "id": "fd6741a5-a92c-44d5-8303-1d7f5e60afbf"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Run this command"',title:'"Run',this:!0,'command"':!0},"prime-api-client --insecure create-payment-request --filename payload.json | jq '.id,.paymentRequestNumber'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Previous command output"',title:'"Previous',command:!0,'output"':!0},'"ce261508-1bd3-4876-b5ca-fb761de43d4d"\n"5405-6058-1"\n')),(0,o.kt)("h2",{id:"invoicing-operations"},"Invoicing Operations"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"The following examples use a Move from the devseed data if needed for local use."))),(0,o.kt)("h3",{id:"generate-edi-locally"},"Generate EDI locally"),(0,o.kt)("p",null,"You will need the payment request number that you can find in the fetch-mto-updates call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Run this command"',title:'"Run',this:!0,'command"':!0},"generate-payment-request-edi --payment-request-number 5405-6058-1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Previous command output"',title:'"Previous',command:!0,'output"':!0},"ISA*00*0084182369*00*0000000000*ZZ*MILMOVE        *12*8004171844     *210116*0827*U*00401*533069921*0*T*|\nGS*SI*MILMOVE*8004171844*20210116*0827*100001251*X*004010\nST*858*0001\nBX*00*J*PP*5405-6058*TRUS**4\nN9*CN*5405-6058-1**\nN9*CT*TRUSS_TEST**\nN9*1W*Leo, Spacemen**\nN9*ML*E_1**\nN9*3L*ARMY**\nG62*10*20210115**\nG62*76*20210114**\nG62*86*20200316**\nN1*BY*JPPSO Testy McTest*92*LKNQ\nN1*SE*Prime*2*PRME\nN1*ST*Fort Gordon*10*CNNQ\nN3*Fort Gordon*\nN4*Augusta*GA*30813*USA**\nPER*CN**TE*706-791-4184\nN1*SF*umRSlGJ7mP*10*LKNQ\nN3*987 Other Avenue*P.O. Box 1234\nN4*Des Moines*IA*50309*USA**\nPER*CN**TE*(510) 555-5555\nHL*1**I\nN9*PO*5405-6058-a492e26c**\nL5*1*FSC*TBD*D**\nL0*1*354.000*DM*1349.000*B******L\nL1*1*1349*LB*34400\nFA1*DY\nFA2*TA*F8E1\nHL*2**I\nN9*PO*5405-6058-740cb8c2**\nL5*2*CS*TBD*D**\nL0*2**********\nL1*2*0**2235300\nFA1*DY\nFA2*TA*F8E1\nHL*3**I\nN9*PO*5405-6058-1044cdb9**\nL5*3*DSH*TBD*D**\nL0*3*388.000*DM*1349.000*B******L\nL1*3*1349*LB*47543300\nFA1*DY\nFA2*TA*F8E1\nHL*4**I\nN9*PO*5405-6058-6233632d**\nL5*4*DLH*TBD*D**\nL0*4*354.000*DM*1349.000*B******L\nL1*4*1349*LB*115948500\nFA1*DY\nFA2*TA*F8E1\nL3*****1657615\nSE*50*0001\nGE*1*100001251\nIEA*1*533069921\n")),(0,o.kt)("h3",{id:"generate-edi-via-support-api"},"Generate EDI via support API"),(0,o.kt)("p",null,"Save the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"payload.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save the following JSON to payload.json"',title:'"Save',the:!0,following:!0,JSON:!0,to:!0,'payload.json"':!0},'{\n  "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d"\n}\n')),(0,o.kt)("p",null,"Use the Support API endpoint to generate the EDI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Run this command"',title:'"Run',this:!0,'command"':!0},"prime-api-client --insecure support-get-payment-request-edi --filename payload.json | jq -r .edi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Previous command output"',title:'"Previous',command:!0,'output"':!0},"ISA*00*0084182369*00*0000000000*ZZ*MILMOVE        *12*8004171844     *210116*0834*U*00401*000000002*0*T*|\nGS*SI*MILMOVE*8004171844*20210116*0834*100001251*X*004010\nST*858*0001\nBX*00*J*PP*5405-6058*TRUS**4\nN9*CN*5405-6058-1**\nN9*CT*TRUSS_TEST**\nN9*1W*Leo, Spacemen**\nN9*ML*E_1**\nN9*3L*ARMY**\nG62*10*20210115**\nG62*76*20210114**\nG62*86*20200316**\nN1*BY*JPPSO Testy McTest*92*LKNQ\nN1*SE*Prime*2*PRME\nN1*ST*Fort Gordon*10*CNNQ\nN3*Fort Gordon*\nN4*Augusta*GA*30813*USA**\nPER*CN**TE*706-791-4184\nN1*SF*umRSlGJ7mP*10*LKNQ\nN3*987 Other Avenue*P.O. Box 1234\nN4*Des Moines*IA*50309*USA**\nPER*CN**TE*(510) 555-5555\nHL*1**I\nN9*PO*5405-6058-a492e26c**\nL5*1*FSC*TBD*D**\nL0*1*354.000*DM*1349.000*B******L\nL1*1*1349*LB*34400\nFA1*DY\nFA2*TA*F8E1\nHL*2**I\nN9*PO*5405-6058-740cb8c2**\nL5*2*CS*TBD*D**\nL0*2**********\nL1*2*0**2235300\nFA1*DY\nFA2*TA*F8E1\nHL*3**I\nN9*PO*5405-6058-1044cdb9**\nL5*3*DSH*TBD*D**\nL0*3*388.000*DM*1349.000*B******L\nL1*3*1349*LB*47543300\nFA1*DY\nFA2*TA*F8E1\nHL*4**I\nN9*PO*5405-6058-6233632d**\nL5*4*DLH*TBD*D**\nL0*4*354.000*DM*1349.000*B******L\nL1*4*1349*LB*115948500\nFA1*DY\nFA2*TA*F8E1\nL3*****1657615\nSE*50*0001\nGE*1*100001251\nIEA*1*000000002\n")),(0,o.kt)("h3",{id:"update-status-of-payment-request"},"Update status of Payment Request"),(0,o.kt)("p",null,"To update the status of one payment request you can trigger the reviewed payment request processor."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"The payment request processor will only apply changes to payment requests in\nthe Reviewed status"))),(0,o.kt)("p",null,"Save one of the below JSON snippets to ",(0,o.kt)("inlineCode",{parentName:"p"},"payload.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON to update status of all reviewed paymentrequests to SENT_TO_GEX"',title:'"JSON',to:!0,update:!0,status:!0,of:!0,all:!0,reviewed:!0,paymentrequests:!0,'SENT_TO_GEX"':!0},'{\n  "body": {\n    "sendToSyncada": false,\n    "deleteFromSyncada": false,\n    "readFromSyncada": false\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON to update status of all reviewed paymentrequests to another one"',title:'"JSON',to:!0,update:!0,status:!0,of:!0,all:!0,reviewed:!0,paymentrequests:!0,another:!0,'one"':!0},'{\n  "body": {\n    "status": "PAID",\n    "sendToSyncada": false,\n    "deleteFromSyncada": false,\n    "readFromSyncada": false\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON to update status of one reviewed paymentrequest to SENT_TO_GEX"',title:'"JSON',to:!0,update:!0,status:!0,of:!0,one:!0,reviewed:!0,paymentrequest:!0,'SENT_TO_GEX"':!0},'{\n  "body": {\n    "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sendToSyncada": false,\n    "deleteFromSyncada": false,\n    "readFromSyncada": false\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON to update status of one reviewed paymentrequest to something else"',title:'"JSON',to:!0,update:!0,status:!0,of:!0,one:!0,reviewed:!0,paymentrequest:!0,something:!0,'else"':!0},'{\n  "body": {\n    "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "status": "PAID",\n    "sendToSyncada": false,\n    "deleteFromSyncada": false,\n    "readFromSyncada": false\n  }\n}\n')),(0,o.kt)("p",null,"Run the following command to change the status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Run this command"',title:'"Run',this:!0,'command"':!0},"prime-api-client --insecure support-reviewed-payment-requests --filename tmp/payloads/process_payment.json|jq .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of previous command output"',title:'"Example',of:!0,previous:!0,command:!0,'output"':!0},'[\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NDczMjRa",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4228",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae7",\n    "paymentRequestNumber": "2387-4783-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTI4Nlo=",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4229",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae8",\n    "paymentRequestNumber": "9644-7573-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTU5NjZa",\n    "id": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "paymentRequestNumber": "5405-6058-1",\n    "status": "SENT_TO_GEX"\n  }\n]\n')),(0,o.kt)("h3",{id:"generate-and-send-edi-to-syncada"},"Generate and send EDI to Syncada"),(0,o.kt)("p",null,"To send to Syncada you will need to make use of the reviewed payment request processor"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"The payment request processor will only apply changes to payment requests in\nthe Reviewed status"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"This can be run locally if you have the SYNCADA credentials from Chamber"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"em"},"paymentRequestID")," parameter is ignored if ",(0,o.kt)("inlineCode",{parentName:"em"},"sendToSyncada")," is set to true"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Save the following JSON to payload.json"',title:'"Save',the:!0,following:!0,JSON:!0,to:!0,'payload.json"':!0},'{\n  "body": {\n    "sendToSyncada": true,\n    "deleteFromSyncada": false,\n    "readFromSyncada": false\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Run this command"',title:'"Run',this:!0,'command"':!0},"prime-api-client --insecure support-reviewed-payment-requests --filename payload.json | jq .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of previous command output"',title:'"Example',of:!0,previous:!0,command:!0,'output"':!0},'[\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NDczMjRa",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4228",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae7",\n    "paymentRequestNumber": "2387-4783-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTI4Nlo=",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4229",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae8",\n    "paymentRequestNumber": "9644-7573-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTU5NjZa",\n    "id": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "paymentRequestNumber": "5405-6058-1",\n    "status": "SENT_TO_GEX"\n  }\n]\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"Some helpful resources for getting this setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/mymove-docs/docs/backend/testing/acceptance-testing-payment-requests"},"Acceptance Testing Payment Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/mymove-docs/docs/backend/testing/manually-run-prime-api-for-slice-demo"},"Manually run Prime API for Slice demo"))))}m.isMDXComponent=!0}}]);