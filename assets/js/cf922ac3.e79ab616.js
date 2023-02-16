"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2889],{62359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>m});var i=a(87462),n=(a(67294),a(3905));a(8209);const d={title:"Adding ShipmentLineItem records to the 400ng table (tariff400ng_items)",sidebar_position:3},o="Adding ShipmentLineItem records to the 400ng table (tariff400ng_items)",r={unversionedId:"backend/guides/tariff400ng_items-update-data",id:"backend/guides/tariff400ng_items-update-data",title:"Adding ShipmentLineItem records to the 400ng table (tariff400ng_items)",description:"Update the 400ng Common Item Code List",source:"@site/docs/backend/guides/tariff400ng_items-update-data.md",sourceDirName:"backend/guides",slug:"/backend/guides/tariff400ng_items-update-data",permalink:"/mymove-docs/docs/backend/guides/tariff400ng_items-update-data",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/tariff400ng_items-update-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Adding ShipmentLineItem records to the 400ng table (tariff400ng_items)",sidebar_position:3},sidebar:"backendSidebar",previous:{title:"Backend Structure",permalink:"/mymove-docs/docs/backend/guides/backend-structure"},next:{title:"Database Guides",permalink:"/mymove-docs/docs/backend/guides/database"}},s={},m=[{value:"Update the 400ng Common Item Code List",id:"update-the-400ng-common-item-code-list",level:2},{value:"Update the table <code>tariff400ng_items</code> and the appropriate rate tables",id:"update-the-table-tariff400ng_items-and-the-appropriate-rate-tables",level:2},{value:"Check that the information isn&#39;t already in the table",id:"check-that-the-information-isnt-already-in-the-table",level:3},{value:"Add or update the record",id:"add-or-update-the-record",level:3},{value:"Create the migration",id:"create-the-migration",level:3},{value:"Source code",id:"source-code",level:2}],l={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adding-shipmentlineitem-records-to-the-400ng-table-tariff400ng_items"},"Adding ",(0,n.kt)("inlineCode",{parentName:"h1"},"ShipmentLineItem")," records to the 400ng table (",(0,n.kt)("inlineCode",{parentName:"h1"},"tariff400ng_items"),")"),(0,n.kt)("h2",{id:"update-the-400ng-common-item-code-list"},"Update the ",(0,n.kt)("a",{parentName:"h2",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"400ng Common Item Code List")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Check if the "Service Code (L705)" is present in the ',(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"spreadsheet")),(0,n.kt)("li",{parentName:"ul"},"If the Service Code the you want to add the 400ng table isn't in this spreadsheet you will have to add it there."),(0,n.kt)("li",{parentName:"ul"},"If there is a reason that the item is not already present and you are having to add it there yourself, add a Google docs comment to the spreadsheet addressing why the new item is being added.")),(0,n.kt)("h2",{id:"update-the-table-tariff400ng_items-and-the-appropriate-rate-tables"},"Update the table ",(0,n.kt)("inlineCode",{parentName:"h2"},"tariff400ng_items")," and the appropriate rate tables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gather the information needed, the information should be in the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"400ng Common Item Code List")," if it's not there you will need to add it there."),(0,n.kt)("li",{parentName:"ul"},"Reach out to the #dp3-ask-the-govies Slack channel and get the information needed, if you do not already have it"),(0,n.kt)("li",{parentName:"ul"},"Add the new and/or updated item to the database table (",(0,n.kt)("inlineCode",{parentName:"li"},"tariff400ng_items"),") and the rate table(s)")),(0,n.kt)("h3",{id:"check-that-the-information-isnt-already-in-the-table"},"Check that the information isn't already in the table"),(0,n.kt)("p",null,"E.g, Query for the ",(0,n.kt)("inlineCode",{parentName:"p"},"tariff400ng_items.code")),(0,n.kt)("h3",{id:"add-or-update-the-record"},"Add or update the record"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"And the record to the database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(optional) If you are copying from a very similar record you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO, SELECT")," command via command line\nE.g."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"  -- Example adding 105C into the table while copying from 105A\n  INSERT INTO tariff400ng_items\n      (code, discount_type, allowed_location, item, measurement_unit_1, created_at, updated_at)\n  SELECT '105C', discount_type, 'DESTINATION', 'Full Unpack', measurement_unit_1, NOW(), NOW()\n  FROM tariff400ng_items\n  WHERE code = '105A';\n")))),(0,n.kt)("p",null,"This basically is overkill (in this scenario) since there was only 1 column copied into the new record."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(optional) Or copy and paste row inside your Postgres editor of choice, changing the necessary rows")),(0,n.kt)("h3",{id:"create-the-migration"},"Create the ",(0,n.kt)("a",{parentName:"h3",href:"/mymove-docs/docs/backend/setup/database-migrations"},"migration")),(0,n.kt)("h2",{id:"source-code"},"Source code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For an HHG (Household Goods) move, the function that computes and creates shipment line items is ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/main/pkg/rateengine/rateengine.go#L241"},(0,n.kt)("inlineCode",{parentName:"a"},"ComputeShipment"))),(0,n.kt)("li",{parentName:"ul"},"For a PPM (Personally Procured Move) move, the function that computes and creates shipment line items is ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/main/pkg/rateengine/rateengine.go#L84"},(0,n.kt)("inlineCode",{parentName:"a"},"computePPM")))))}h.isMDXComponent=!0}}]);