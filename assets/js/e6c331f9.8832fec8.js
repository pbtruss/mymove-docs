"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[307],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,c=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l=void 0,d={unversionedId:"old-wiki/Using-EagerPreload-in-Pop",id:"old-wiki/Using-EagerPreload-in-Pop",isDocsHomePage:!1,title:"Using-EagerPreload-in-Pop",description:"TOC",source:"@site/docs/old-wiki/Using-EagerPreload-in-Pop.md",sourceDirName:"old-wiki",slug:"/old-wiki/Using-EagerPreload-in-Pop",permalink:"/mymove-docs/docs/old-wiki/Using-EagerPreload-in-Pop",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Using-EagerPreload-in-Pop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/mymove-docs/docs/old-wiki/User-Management"},next:{title:"Background",permalink:"/mymove-docs/docs/old-wiki/Using-Etags-and-the-If-Match-Header-in-Postman"}},p=[{value:"TOC",id:"toc",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"When to Use",id:"when-to-use",children:[]},{value:"How to Use",id:"how-to-use",children:[]},{value:"EagerPreload Bugs and Workarounds",id:"eagerpreload-bugs-and-workarounds",children:[{value:"Foreign keys as pointers",id:"foreign-keys-as-pointers",children:[]},{value:"Foreign keys named differently from the related table",id:"foreign-keys-named-differently-from-the-related-table",children:[]},{value:"Associations with 3+ path elements where the first 2 path elements match",id:"associations-with-3-path-elements-where-the-first-2-path-elements-match",children:[]}]}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"toc"},"TOC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-use"},"When to Use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-use"},"How to Use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#eagerpreload-bugs-and-workarounds"},"EagerPreload Bugs and Workarounds"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#foreign-keys-as-pointers"},"Foreign keys as pointers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#foreign-keys-named-differently-from-the-related-table"},"Foreign keys named differently from the related table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#associations-with-3-path-elements-where-the-first-2-path-elements-match"},"Associations with 3+ path elements where the first 2 path elements match"))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"Pop")," as our ORM\n(",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"},"object-relational mapping"),") tool\nfor querying the database. Pop provides the ability to eagerly fetch associations via its\n",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#eager-mode"},"Eager method"),".\nHowever, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," method is subject to the ",(0,r.kt)("a",{parentName:"p",href:"database#excessive-queries-eg-n1-problem"},'"n+1" problem'),"\nwhere each association is loaded via a separate query.  For Pop queries that\nreturn records in which each has an eagerly-loaded tree of associated data, the amount of\nSQL queries executed as a result can be substantial."),(0,r.kt)("p",null,'Starting with version 5.1, Pop has the ability to minimize the "n+1" problem via\na new ',(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#eagerpreload-mode"},"EagerPreload method"),".\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload"),", Pop fetches the requested associations across\nall parent records rather than doing one at a time. This reduces the number of connections made\nto the database at the expense of doing more computation on the Go side.  In many\nsituations, this can be a reasonable tradeoff that provides better overall performance."),(0,r.kt)("h2",{id:"when-to-use"},"When to Use"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," in a query, you should also try ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," and note the difference in\nthe number of generated queries (which should show in the log by default in development mode).\nCompare performance of both ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," with representative data."),(0,r.kt)("p",null,"In most cases, ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," should outperform ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager"),".  Although there is\n",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#loading-associations"},"an option")," to turn\n",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on by default, there are some issues in Pop's implementation at the moment that could\nlead to subtle bugs in MilMove\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/547"},"example1"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/603"},"example2"),").\nIn some cases, associations that loaded with ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," are not loading with ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," -- this may not cause a\nfailure, but rather result in missing data returned from an endpoint, for instance.  For now, we should\nconsider using and testing ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on a case-by-case basis until we feel more confident in Pop's\nimplementation. "),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"Generally speaking, you should be able to take an ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," call like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().Eager(\n    "PaymentRequests.PaymentServiceItems.PaymentServiceItemParams.ServiceItemParamKey",\n    "MTOServiceItems.ReService",\n    "MTOShipments.DestinationAddress",\n    "Orders.NewDutyStation.Address",\n).All(&moveTaskOrders)\n')),(0,r.kt)("p",null,"and just replace it with an ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," call instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().EagerPreload(\n    "PaymentRequests.PaymentServiceItems.PaymentServiceItemParams.ServiceItemParamKey",\n    "MTOServiceItems.ReService",\n    "MTOShipments.DestinationAddress",\n    "Orders.NewDutyStation.Address",\n).All(&moveTaskOrders)\n')),(0,r.kt)("p",null,"In theory, the resulting slice in ",(0,r.kt)("inlineCode",{parentName:"p"},"moveTaskOrders")," should be identical in both cases.  In practice,\nyou should always verify that is indeed the case due to bugs we've run into in Pop as noted above."),(0,r.kt)("h2",{id:"eagerpreload-bugs-and-workarounds"},"EagerPreload Bugs and Workarounds"),(0,r.kt)("p",null,"Below are some of the issues we have found so far in using ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload"),":"),(0,r.kt)("h3",{id:"foreign-keys-as-pointers"},"Foreign keys as pointers"),(0,r.kt)("p",null,"We often represent a nullable foreign key (a\n",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations/#available-struct-tags"},"belongs_to")," relationship in Pop terms)\nas a pointer.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type MTOShipment struct {\n    ID              uuid.UUID  `db:"id"`\n    // ...\n    PickupAddress   *Address   `belongs_to:"addresses"`\n    PickupAddressID *uuid.UUID `db:"pickup_address_id"`\n    // ...\n}\n')),(0,r.kt)("p",null,"Doing an ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"PickupAddress")," will not load the association currently,\nbut it will with ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager"),".\nWe think we have identified the issue in Pop and have submitted a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/pull/602"},"PR to fix it"),".  Until that is merged and released\n",(0,r.kt)("em",{parentName:"p"},"(update: it got released in Pop 5.3.2)"),", however,\na workaround is to use gobuffalo's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/nulls"},"nulls package")," (specifically,\na ",(0,r.kt)("inlineCode",{parentName:"p"},"nulls.UUID")," in this case) instead of a pointer for the ",(0,r.kt)("inlineCode",{parentName:"p"},"PickupAddressID")," field (note that ",(0,r.kt)("inlineCode",{parentName:"p"},"PickupAddress"),"\ncan remain a ",(0,r.kt)("inlineCode",{parentName:"p"},"*Address"),", however).  You can see\nexamples of how this is used in ",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/models#nulls-handling"},"Pop's documentation"),".\nIn general, if you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nulls")," variants rather than pointers for optional fields, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload"),"\ncorrectly loads the assocation.\nNote that moving to ",(0,r.kt)("inlineCode",{parentName:"p"},"nulls")," instead of pointers will usually require changing most usages of the field in\nquestion since it is a different type (although it's a pretty straightforward change in most cases)."),(0,r.kt)("h3",{id:"foreign-keys-named-differently-from-the-related-table"},"Foreign keys named differently from the related table"),(0,r.kt)("p",null,"Consider this example model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Order struct {\n    ID               uuid.UUID   `json:"id" db:"id"`\n    // ...\n    NewDutyStationID uuid.UUID   `json:"new_duty_station_id" db:"new_duty_station_id"`\n    NewDutyStation   DutyStation `belongs_to:"duty_stations"`\n    // ...\n}\n')),(0,r.kt)("p",null,"Note that the foreign key is named ",(0,r.kt)("inlineCode",{parentName:"p"},"NewDutyStationID")," but it references a ",(0,r.kt)("inlineCode",{parentName:"p"},"DutyStation")," model.  Depending on\nwhat other associations are on the model, this can cause Pop to fail to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewDutyStation")," association\nin cases where ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," worked fine.  We have developed a test case and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/603"},"filed an issue"),"\nwith Pop about this -- refer to the issue for an example that fails."),(0,r.kt)("p",null,"As a workaround, try putting a ",(0,r.kt)("inlineCode",{parentName:"p"},"fk_id")," struct tag on the association field like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Order struct {\n    ID               uuid.UUID   `json:"id" db:"id"`\n    // ...\n    NewDutyStationID uuid.UUID   `json:"new_duty_station_id" db:"new_duty_station_id"`\n    NewDutyStation   DutyStation `belongs_to:"duty_stations" fk_id:"new_duty_station_id"`\n    // ...\n}\n')),(0,r.kt)("p",null,"This appears to cause the association to load because it forces Pop to use the explicit foreign key column name\nrather than deducing it from the struct's field name (Pop didn't seem to need this ",(0,r.kt)("inlineCode",{parentName:"p"},"fk_id")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager"),")."),(0,r.kt)("h3",{id:"associations-with-3-path-elements-where-the-first-2-path-elements-match"},"Associations with 3+ path elements where the first 2 path elements match"),(0,r.kt)("p",null,"Suppose you try to do an ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().EagerPreload(\n    "Orders.OriginDutyStation.Address",\n    "Orders.OriginDutyStation.TransportationOffice",\n).All(&moveTaskOrders)\n')),(0,r.kt)("p",null,"What seems to be happening in this case is that the last association ",(0,r.kt)("em",{parentName:"p"},"only")," -- ",(0,r.kt)("inlineCode",{parentName:"p"},"TransportationOffice")," in this case --\nwill be populated.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," will be left as either a zero-valued struct or a nil depending on whether the\nfield is a pointer or not.  It appears this only occurs when you have a long association path where the first two\npath elements match.  We have developed a test case and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/626"},"filed an issue"),"\nwith Pop about this.  Please refer to the issue for more details."),(0,r.kt)("p",null,"One workaround is to remove one of the associations from the ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," and include it separately by\niterating over the results and doing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," on the missing association each time through the loop.\nThat's not as efficient as ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload")," of course, but it will at least populate the models correctly."))}h.isMDXComponent=!0}}]);