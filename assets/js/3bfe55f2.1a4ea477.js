"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1628],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15358:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={},p=void 0,l={unversionedId:"dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo",id:"dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo",isDocsHomePage:!1,title:"Manually-run-Prime-API-for-Slice-demo",description:"Pricing Acceptance script is being used to mimick the Prime's use of the Prime API. If this script fails on a step, you will need to run the commands manually. This wiki page is to document the list of commands in order that would normally be run by the Prime.",source:"@site/docs/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo.md",sourceDirName:"dev/testing/running-tests",slug:"/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo",permalink:"/mymove-docs/docs/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Acceptance Testing Syncada",permalink:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing"},next:{title:"Testing Payment Requests",permalink:"/mymove-docs/docs/dev/testing/running-tests/Testing-payment-requests-for-domestic-SIT-service-items"}},m=[{value:"Assuming the MTO was created during the demo, fetch the latest MTO and save it to a file",id:"assuming-the-mto-was-created-during-the-demo-fetch-the-latest-mto-and-save-it-to-a-file",children:[{value:"Other variations if needed",id:"other-variations-if-needed",children:[]}]},{value:"For help narrowing down the eTag you can use <code>jq</code>",id:"for-help-narrowing-down-the-etag-you-can-use-jq",children:[]},{value:"For help narrowing down the eTag you can use <code>jq</code>",id:"for-help-narrowing-down-the-etag-you-can-use-jq-1",children:[]},{value:"For help narrowing down the eTag you can use <code>jq</code>",id:"for-help-narrowing-down-the-etag-you-can-use-jq-2",children:[]},{value:"Create the payload",id:"create-the-payload",children:[]},{value:"Review the payload",id:"review-the-payload",children:[]},{value:"Send the payment request and save the response",id:"send-the-payment-request-and-save-the-response",children:[]},{value:"Get the payment request ID and payment request Number",id:"get-the-payment-request-id-and-payment-request-number",children:[]},{value:"Store fake upload files to ./tmp/uploads",id:"store-fake-upload-files-to-tmpuploads",children:[]}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/scripts/pricing-acceptance"},"Pricing Acceptance script")," is being used to mimick the Prime's use of the Prime API. If this script fails on a step, you will need to run the commands manually. This wiki page is to document the list of commands in order that would normally be run by the Prime."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-fetch-mtos-available-to-the-prime"},"1. Fetch MTOs available to the Prime"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#assuming-the-mto-was-created-during-the-demo-fetch-the-latest-mto-and-save-it-to-a-file"},"Assuming the MTO was created during the demo, fetch the latest MTO and save it to a file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#other-variations-if-needed"},"Other variations if needed"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fetch-all-mtos"},"Fetch all MTOs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#to-find-the-latest-mto-use-a-jq-filter"},"To find the latest MTO use a ",(0,i.kt)("inlineCode",{parentName:"a"},"jq")," filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#to-find-the-mto-by-moveorderid-use-a-jq-filter"},"To find the MTO by MoveOrderID use a ",(0,i.kt)("inlineCode",{parentName:"a"},"jq")," filter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#an-additional-filter-can-be-added-to-only-return-the-mto-id"},"An additional filter can be added to only return the MTO ID")))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-prime-to-update-dates-for-the-shipment"},"2. Prime to update dates for the shipment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#for-help-narrowing-down-the-etag-you-can-use-jq"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"a"},"jq"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-prime-to-update-the-weights-for-the-shipment"},"3. Prime to update the weights for the shipment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#for-help-narrowing-down-the-etag-you-can-use-jq-1"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"a"},"jq"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-prime-to-update-destination-address-for-the-shipment"},"4. Prime to update destination address for the shipment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#for-help-narrowing-down-the-etag-you-can-use-jq-2"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"a"},"jq"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#5-prime-creates-a-payment-request"},"5. Prime creates a payment request"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-the-payload"},"Create the payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#review-the-payload"},"Review the payload")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#send-the-payment-request-and-save-the-response"},"Send the payment request and save the response")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-payment-request-id-and-payment-request-number"},"Get the payment request ID and payment request Number")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#6-prime-adds-proof-of-service-documents"},"6. Prime adds proof of service documents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#store-fake-upload-files-to-tmpuploads"},"Store fake upload files to ./tmp/uploads")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#7-generate-edi-in-858-format-for-the-payment-request"},"7. Generate EDI in 858 format for the Payment Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#8-update-the-payment-requests-status"},"8. Update the payment requests status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,i.kt)("h1",{id:"1-fetch-mtos-available-to-the-prime"},"1. Fetch MTOs available to the Prime"),(0,i.kt)("h2",{id:"assuming-the-mto-was-created-during-the-demo-fetch-the-latest-mto-and-save-it-to-a-file"},"Assuming the MTO was created during the demo, fetch the latest MTO and save it to a file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq 'sort_by(.updatedAt) | .[-1]' > demo_mto.json\n")),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#2-prime-to-update-dates-for-the-shipment"},"step 2"),"."),(0,i.kt)("h3",{id:"other-variations-if-needed"},"Other variations if needed"),(0,i.kt)("h4",{id:"fetch-all-mtos"},"Fetch all MTOs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq\n")),(0,i.kt)("h4",{id:"to-find-the-latest-mto-use-a-jq-filter"},"To find the latest MTO use a ",(0,i.kt)("inlineCode",{parentName:"h4"},"jq")," filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq 'sort_by(.updatedAt) | .[-1]' \n")),(0,i.kt)("h4",{id:"to-find-the-mto-by-moveorderid-use-a-jq-filter"},"To find the MTO by MoveOrderID use a ",(0,i.kt)("inlineCode",{parentName:"h4"},"jq")," filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq 'map(select(.moveOrderID == \"uuid-for-moveorder-id\")) | .[0]'\n")),(0,i.kt)("h4",{id:"an-additional-filter-can-be-added-to-only-return-the-mto-id"},"An additional filter can be added to only return the MTO ID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | jq 'sort_by(.updatedAt) | .[-1]' | jq '.id'\n")),(0,i.kt)("h1",{id:"2-prime-to-update-dates-for-the-shipment"},"2. Prime to update dates for the shipment"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shipmentID")," must be consistent between steps 2, 3, 4, and 5."),(0,i.kt)("p",null,"Date format: ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")),(0,i.kt)("p",null,"Copy the payload to a file, filling in the variables. The file in this example will be ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_updates_dates.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mtoShipmentID": ${shipmentID},\n  "ifMatch": ${shipmentEtag},\n  "body": {\n    "scheduledPickupDate": "${scheduledPickupDate}",\n    "actualPickupDate": "${actualPickupDate}"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 update-mto-shipment --filename demo_updates_dates.json | jq\n")),(0,i.kt)("h2",{id:"for-help-narrowing-down-the-etag-you-can-use-jq"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"h2"},"jq")),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the MTO ID and the second ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the Shipment ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'prime-api-client --cac --hostname api.stg.move.mil --port 443  fetch-mto-updates | \\\n  jq \'map(select(.id == "da3f34cc-fb94-4e0b-1c90-ba3333cb7791")) | .[0] | .mtoShipments | map(select(.id == "b4148fad-acc6-4065-b387-90d05a702a24")) | .[0] | .eTag\'\n')),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#3-prime-to-update-the-weights-for-the-shipment"},"step 3"),"."),(0,i.kt)("h1",{id:"3-prime-to-update-the-weights-for-the-shipment"},"3. Prime to update the weights for the shipment"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shipmentID")," must be consistent between steps 2, 3, 4, and 5."),(0,i.kt)("p",null,"Copy the payload to a file, filling in the variables. The file is this example will be ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_update_weights.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mtoShipmentID": ${shipmentID},\n  "ifMatch": ${shipmentEtag},\n  "body": {\n    "primeEstimatedWeight": ${estimatedWeight},\n    "primeActualWeight": ${actualWeight}\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 update-mto-shipment --filename demo_update_weights.json | jq\n\n")),(0,i.kt)("h2",{id:"for-help-narrowing-down-the-etag-you-can-use-jq-1"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"h2"},"jq")),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the MTO ID and the second ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the Shipment ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'prime-api-client --cac --hostname api.stg.move.mil --port 443 fetch-mto-updates | \\\n  jq \'map(select(.id == "da3f34cc-fb94-4e0b-1c90-ba3333cb7791")) | .[0] | .mtoShipments | map(select(.id == "b4148fad-acc6-4065-b387-90d05a702a24")) | .[0] | .eTag\'\n')),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#4-prime-creates-a-payment-request"},"step 4"),"."),(0,i.kt)("h1",{id:"4-prime-to-update-destination-address-for-the-shipment"},"4. Prime to update destination address for the shipment"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shipmentID")," must be consistent between steps 2, 3, 4, and 5."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," It is critical to pick a zip code that is not within 50 miles of the origin zip"),(0,i.kt)("p",null,"Copy the payload to a file, filling in the variables. The file in this example will be ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_updates_dates.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mtoShipmentID": ${shipmentID},\n  "ifMatch": ${shipmentEtag},\n  "body": {\n    "destinationAddress": {\n      "streetAddress1": "${destStreetAddress1}",\n      "city": "${destCity}",\n      "state": "${destState}",\n      "postalCode": "${destZip}",\n      "country": "US"\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 update-mto-shipment --filename demo_updates_dates.json | jq\n")),(0,i.kt)("h2",{id:"for-help-narrowing-down-the-etag-you-can-use-jq-2"},"For help narrowing down the eTag you can use ",(0,i.kt)("inlineCode",{parentName:"h2"},"jq")),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the MTO ID and the second ",(0,i.kt)("inlineCode",{parentName:"p"},".id")," is the Shipment ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'prime-api-client --cac --hostname api.stg.move.mil --port 443  fetch-mto-updates | \\\n  jq \'map(select(.id == "da3f34cc-fb94-4e0b-1c90-ba3333cb7791")) | .[0] | .mtoShipments | map(select(.id == "b4148fad-acc6-4065-b387-90d05a702a24")) | .[0] | .eTag\'\n')),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#3-prime-to-update-the-weights-for-the-shipment"},"step 3"),"."),(0,i.kt)("h1",{id:"5-prime-creates-a-payment-request"},"5. Prime creates a payment request"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"shipmentID")," must be consistent between steps 2, 3, 4, and 5."),(0,i.kt)("h2",{id:"create-the-payload"},"Create the payload"),(0,i.kt)("p",null,"Edit the list of service codes as needed for the demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'jq \'.mtoServiceItems | map(select((.mtoShipmentID == "e272af65-c662-40e3-a47b-9711942d9ce1") and (.reServiceCode == "FSC" or .reServiceCode == "DLH") or .reServiceCode == "MS" or .reServiceCode == "CS")) | { body: { isFinal: false, moveTaskOrderID: "ec88724f-bfa9-4d89-8833-4fcfab24ef59", serviceItems: map({ id: .id }) } }\' demo_mto.json > demo_create_payment_request.json\n')),(0,i.kt)("h2",{id:"review-the-payload"},"Review the payload"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"jq . demo_create_payment_request.json\n")),(0,i.kt)("h2",{id:"send-the-payment-request-and-save-the-response"},"Send the payment request and save the response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 create-payment-request --filename demo_create_payment_request.json > demo_create_payment_request_response.json\n")),(0,i.kt)("h2",{id:"get-the-payment-request-id-and-payment-request-number"},"Get the payment request ID and payment request Number"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"jq .id demo_create_payment_request_response.json\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"jq .paymentRequestNumber demo_create_payment_request_response.json\n")),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#5-prime-adds-proof-of-service-documents"},"step 5"),"."),(0,i.kt)("h1",{id:"6-prime-adds-proof-of-service-documents"},"6. Prime adds proof of service documents"),(0,i.kt)("p",null,"Get the list of documents that you want to send e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"(./tmp/uploads/proof_of_service.png ./tmp/uploads/proof_of_service.jpg ./tmp/uploads/proof_of_service.pdf)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'for proofOfService in "./tmp/uploads/proof_of_service.png" "./tmp/uploads/proof_of_service.jpg" "./tmp/uploads/proof_of_service.pdf"; do\n    if [ -f "$proofOfService" ]; then\n        echo "Uploading file ${proofOfService}."\n        proofBase=$(basename "${proofOfService}")\n        prime-api-client --cac --hostname api.stg.move.mil --port 443 create-upload --paymentRequestID "${prID}" --filename "${proofOfService}" > demo_create_upload_response_"${proofBase}".json\n    else\n        echo "File ${proofOfService} does not exist, skipping upload."\n    fi\ndone\n')),(0,i.kt)("p",null,"If successful, go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Manually-run-Prime-API-for-Slice-demo#6-generate-edi-in-858-format-for-the-payment-request"},"step 6")),(0,i.kt)("h2",{id:"store-fake-upload-files-to-tmpuploads"},"Store fake upload files to ./tmp/uploads"),(0,i.kt)("p",null,"If you would like to following this example as-is. You can copy ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1D4QSM1ksBKWXyhVA8pfqdn_t5CkYY626/view?usp=sharing"},"these files")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"./tmp/uploads")," directory"),(0,i.kt)("h1",{id:"7-generate-edi-in-858-format-for-the-payment-request"},"7. Generate EDI in 858 format for the Payment Request"),(0,i.kt)("p",null,"Use the payment ID from step #5."),(0,i.kt)("p",null,"Save payload to filename ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_get_payment_request_edi.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentRequestID": "${prID}"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg.move.mil --port 443 support-get-payment-request-edi --filename demo_get_payment_request_edi.json | jq -r '.edi' > demo_edi_response.json; cat  demo_edi_response.json\n\n")),(0,i.kt)("h1",{id:"8-update-the-payment-requests-status"},"8. Update the payment requests status"),(0,i.kt)("p",null,"Use the payment ID from step #5."),(0,i.kt)("p",null,"Save payload to a filename ",(0,i.kt)("inlineCode",{parentName:"p"},"demo_update_payment_request_status.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "paymentRequestID": "${prID}",\n    "sendToSyncada": false\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"prime-api-client --cac --hostname api.stg/move.mil --port 443 support-reviewed-payment-requests --filename demo_update_payment_request_status.json\n")),(0,i.kt)("p",null,"If successful, Prime demo is complete \ud83c\udf89."),(0,i.kt)("h1",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Acceptance-Testing-Payment-Requests"},"Acceptance Testing Payment Requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Acceptance-Testing-Prime-API-Endpoints"},"Acceptance Testing Prime API Endpoints"))))}u.isMDXComponent=!0}}]);