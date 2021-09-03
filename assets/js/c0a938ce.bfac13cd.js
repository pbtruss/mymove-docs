"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8719],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8869:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],d={},l="Adding `ShipmentLineItem` records to the 400ng table (`tariff400ng_items`)",m={unversionedId:"old-wiki/tariff400ng_items-update-data",id:"old-wiki/tariff400ng_items-update-data",isDocsHomePage:!1,title:"Adding `ShipmentLineItem` records to the 400ng table (`tariff400ng_items`)",description:"Update the 400ng Common Item Code List",source:"@site/docs/old-wiki/tariff400ng_items-update-data.md",sourceDirName:"old-wiki",slug:"/old-wiki/tariff400ng_items-update-data",permalink:"/mymove-docs/docs/old-wiki/tariff400ng_items-update-data",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/tariff400ng_items-update-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Importing tariff400ng data for the year",permalink:"/mymove-docs/docs/old-wiki/tariff400ng-yearly-import"},next:{title:"Time in Golang",permalink:"/mymove-docs/docs/old-wiki/time"}},c=[{value:"Update the 400ng Common Item Code List",id:"update-the-400ng-common-item-code-list",children:[]},{value:"Update the table <code>tariff400ng_items</code> and the appropriate rate tables",id:"update-the-table-tariff400ng_items-and-the-appropriate-rate-tables",children:[{value:"Check that the information isn&#39;t already in the table",id:"check-that-the-information-isnt-already-in-the-table",children:[]},{value:"Add or update the record",id:"add-or-update-the-record",children:[]},{value:"Create the migration",id:"create-the-migration",children:[]}]},{value:"Source code",id:"source-code",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-shipmentlineitem-records-to-the-400ng-table-tariff400ng_items"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h1"},"ShipmentLineItem")," records to the 400ng table (",(0,i.kt)("inlineCode",{parentName:"h1"},"tariff400ng_items"),")"),(0,i.kt)("h2",{id:"update-the-400ng-common-item-code-list"},"Update the ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"400ng Common Item Code List")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Check if the "Service Code (L705)" is present in the ',(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"spreadsheet")),(0,i.kt)("li",{parentName:"ul"},"If the Service Code the you want to add the 400ng table isn't in this spreadsheet you will have to add it there."),(0,i.kt)("li",{parentName:"ul"},"If there is a reason that the item is not already present and you are having to add it there yourself, add a Google docs comment to the spreadsheet addressing why the new item is being added.")),(0,i.kt)("h2",{id:"update-the-table-tariff400ng_items-and-the-appropriate-rate-tables"},"Update the table ",(0,i.kt)("inlineCode",{parentName:"h2"},"tariff400ng_items")," and the appropriate rate tables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gather the information needed, the information should be in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1MSkrhLHH9tHGVGN7ELVLkdpg7XRTb3R3I1xd-ZEkCI4/edit#gid=1382174367"},"400ng Common Item Code List")," if it's not there you will need to add it there."),(0,i.kt)("li",{parentName:"ul"},"Reach out to the #dp3-ask-the-govies Slack channel and get the information needed, if you do not already have it"),(0,i.kt)("li",{parentName:"ul"},"Add the new and/or updated item to the database table (",(0,i.kt)("inlineCode",{parentName:"li"},"tariff400ng_items"),") and the rate table(s)")),(0,i.kt)("h3",{id:"check-that-the-information-isnt-already-in-the-table"},"Check that the information isn't already in the table"),(0,i.kt)("p",null,"E.g, Query for the ",(0,i.kt)("inlineCode",{parentName:"p"},"tariff400ng_items.code")),(0,i.kt)("h3",{id:"add-or-update-the-record"},"Add or update the record"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"And the record to the database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"(optional) If you are copying from a very similar record you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO, SELECT")," command via command line\nE.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"  -- Example adding 105C into the table while copying from 105A\n  INSERT INTO tariff400ng_items\n      (code, discount_type, allowed_location, item, measurement_unit_1, created_at, updated_at)\n  SELECT '105C', discount_type, 'DESTINATION', 'Full Unpack', measurement_unit_1, NOW(), NOW()\n  FROM tariff400ng_items\n  WHERE code = '105A';\n")))),(0,i.kt)("p",null,"This basically is overkill (in this scenario) since there was only 1 column copied into the new record."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(optional) Or copy and paste row inside your Postgres editor of choice, changing the necessary rows")),(0,i.kt)("h3",{id:"create-the-migration"},"Create the ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/transcom/mymove/blob/master/docs/database.md#migrations"},"migration")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For an HHG (Household Goods) move, the function that computes and creates shipment line items is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/pkg/rateengine/rateengine.go#L241"},(0,i.kt)("inlineCode",{parentName:"a"},"ComputeShipment"))),(0,i.kt)("li",{parentName:"ul"},"For a PPM (Personally Procured Move) move, the function that computes and creates shipment line items is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/pkg/rateengine/rateengine.go#L84"},(0,i.kt)("inlineCode",{parentName:"a"},"computePPM")))))}p.isMDXComponent=!0}}]);