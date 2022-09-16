"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3745],{70160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));a(61839);const i={sidebar_position:6},s="Using EagerPreload in Pop",r={unversionedId:"backend/setup/using-eagerpreload-in-pop",id:"backend/setup/using-eagerpreload-in-pop",title:"Using EagerPreload in Pop",description:"Introduction",source:"@site/docs/backend/setup/using-eagerpreload-in-pop.md",sourceDirName:"backend/setup",slug:"/backend/setup/using-eagerpreload-in-pop",permalink:"/mymove-docs/docs/backend/setup/using-eagerpreload-in-pop",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/setup/using-eagerpreload-in-pop.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backendSidebar",previous:{title:"Run pre-commit hooks",permalink:"/mymove-docs/docs/backend/setup/run-pre-commit-hooks"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"When to Use",id:"when-to-use",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"EagerPreload Bugs and Workarounds",id:"eagerpreload-bugs-and-workarounds",level:2},{value:"Foreign keys as pointers",id:"foreign-keys-as-pointers",level:3},{value:"Foreign keys named differently from the related table",id:"foreign-keys-named-differently-from-the-related-table",level:3},{value:"Associations with 3+ path elements where the first 2 path elements match",id:"associations-with-3-path-elements-where-the-first-2-path-elements-match",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-eagerpreload-in-pop"},"Using EagerPreload in Pop"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop"},"Pop")," as our ORM\n(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"},"object-relational mapping"),") tool\nfor querying the database. Pop provides the ability to eagerly fetch associations via its\n",(0,o.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#eager-mode"},"Eager method"),".\nHowever, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," method is subject to the ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/database#excessive-queries-eg-n1-problem"},'"n+1" problem'),"\nwhere each association is loaded via a separate query.  For Pop queries that\nreturn records in which each has an eagerly-loaded tree of associated data, the amount of\nSQL queries executed as a result can be substantial."),(0,o.kt)("p",null,'Starting with version 5.1, Pop has the ability to minimize the "n+1" problem via\na new ',(0,o.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#eagerpreload-mode"},"EagerPreload method"),".\nUsing ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload"),", Pop fetches the requested associations across\nall parent records rather than doing one at a time. This reduces the number of connections made\nto the database at the expense of doing more computation on the Go side.  In many\nsituations, this can be a reasonable tradeoff that provides better overall performance."),(0,o.kt)("h2",{id:"when-to-use"},"When to Use"),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," in a query, you should also try ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," and note the difference in\nthe number of generated queries (which should show in the log by default in development mode).\nCompare performance of both ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," with representative data."),(0,o.kt)("p",null,"In most cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," should outperform ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager"),".  Although there is\n",(0,o.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations#loading-associations"},"an option")," to turn\n",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on by default, there are some issues in Pop's implementation at the moment that could\nlead to subtle bugs in MilMove\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/547"},"example1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/603"},"example2"),").\nIn some cases, associations that loaded with ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," are not loading with ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," -- this may not cause a\nfailure, but rather result in missing data returned from an endpoint, for instance.  For now, we should\nconsider using and testing ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on a case-by-case basis until we feel more confident in Pop's\nimplementation."),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("p",null,"Generally speaking, you should be able to take an ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," call like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().Eager(\n    "PaymentRequests.PaymentServiceItems.PaymentServiceItemParams.ServiceItemParamKey",\n    "MTOServiceItems.ReService",\n    "MTOShipments.DestinationAddress",\n    "Orders.NewDutyStation.Address",\n).All(&moveTaskOrders)\n')),(0,o.kt)("p",null,"and just replace it with an ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," call instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().EagerPreload(\n    "PaymentRequests.PaymentServiceItems.PaymentServiceItemParams.ServiceItemParamKey",\n    "MTOServiceItems.ReService",\n    "MTOShipments.DestinationAddress",\n    "Orders.NewDutyStation.Address",\n).All(&moveTaskOrders)\n')),(0,o.kt)("p",null,"In theory, the resulting slice in ",(0,o.kt)("inlineCode",{parentName:"p"},"moveTaskOrders")," should be identical in both cases.  In practice,\nyou should always verify that is indeed the case due to bugs we've run into in Pop as noted above."),(0,o.kt)("h2",{id:"eagerpreload-bugs-and-workarounds"},"EagerPreload Bugs and Workarounds"),(0,o.kt)("p",null,"Below are some of the issues we have found so far in using ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload"),":"),(0,o.kt)("h3",{id:"foreign-keys-as-pointers"},"Foreign keys as pointers"),(0,o.kt)("p",null,"We often represent a nullable foreign key (a\n",(0,o.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/relations/#available-struct-tags"},"belongs_to")," relationship in Pop terms)\nas a pointer.  For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type MTOShipment struct {\n    ID              uuid.UUID  `db:"id"`\n    // ...\n    PickupAddress   *Address   `belongs_to:"addresses"`\n    PickupAddressID *uuid.UUID `db:"pickup_address_id"`\n    // ...\n}\n')),(0,o.kt)("p",null,"Doing an ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"PickupAddress")," will not load the association currently,\nbut it will with ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager"),".\nWe think we have identified the issue in Pop and have submitted a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/pull/602"},"PR to fix it"),".  Until that is merged and released\n",(0,o.kt)("em",{parentName:"p"},"(update: it got released in Pop 5.3.2)"),", however,\na workaround is to use gobuffalo's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/nulls"},"nulls package")," (specifically,\na ",(0,o.kt)("inlineCode",{parentName:"p"},"nulls.UUID")," in this case) instead of a pointer for the ",(0,o.kt)("inlineCode",{parentName:"p"},"PickupAddressID")," field (note that ",(0,o.kt)("inlineCode",{parentName:"p"},"PickupAddress"),"\ncan remain a ",(0,o.kt)("inlineCode",{parentName:"p"},"*Address"),", however).  You can see\nexamples of how this is used in ",(0,o.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/models#nulls-handling"},"Pop's documentation"),".\nIn general, if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"nulls")," variants rather than pointers for optional fields, the ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload"),"\ncorrectly loads the assocation.\nNote that moving to ",(0,o.kt)("inlineCode",{parentName:"p"},"nulls")," instead of pointers will usually require changing most usages of the field in\nquestion since it is a different type (although it's a pretty straightforward change in most cases)."),(0,o.kt)("h3",{id:"foreign-keys-named-differently-from-the-related-table"},"Foreign keys named differently from the related table"),(0,o.kt)("p",null,"Consider this example model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Order struct {\n    ID               uuid.UUID   `json:"id" db:"id"`\n    // ...\n    NewDutyStationID uuid.UUID   `json:"new_duty_station_id" db:"new_duty_station_id"`\n    NewDutyStation   DutyStation `belongs_to:"duty_stations"`\n    // ...\n}\n')),(0,o.kt)("p",null,"Note that the foreign key is named ",(0,o.kt)("inlineCode",{parentName:"p"},"NewDutyStationID")," but it references a ",(0,o.kt)("inlineCode",{parentName:"p"},"DutyStation")," model.  Depending on\nwhat other associations are on the model, this can cause Pop to fail to load the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewDutyStation")," association\nin cases where ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager")," worked fine.  We have developed a test case and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/603"},"filed an issue"),"\nwith Pop about this -- refer to the issue for an example that fails."),(0,o.kt)("p",null,"As a workaround, try putting a ",(0,o.kt)("inlineCode",{parentName:"p"},"fk_id")," struct tag on the association field like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Order struct {\n    ID               uuid.UUID   `json:"id" db:"id"`\n    // ...\n    NewDutyStationID uuid.UUID   `json:"new_duty_station_id" db:"new_duty_station_id"`\n    NewDutyStation   DutyStation `belongs_to:"duty_stations" fk_id:"new_duty_station_id"`\n    // ...\n}\n')),(0,o.kt)("p",null,"This appears to cause the association to load because it forces Pop to use the explicit foreign key column name\nrather than deducing it from the struct's field name (Pop didn't seem to need this ",(0,o.kt)("inlineCode",{parentName:"p"},"fk_id")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Eager"),")."),(0,o.kt)("h3",{id:"associations-with-3-path-elements-where-the-first-2-path-elements-match"},"Associations with 3+ path elements where the first 2 path elements match"),(0,o.kt)("p",null,"Suppose you try to do an ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'err := db.Q().EagerPreload(\n    "Orders.OriginDutyStation.Address",\n    "Orders.OriginDutyStation.TransportationOffice",\n).All(&moveTaskOrders)\n')),(0,o.kt)("p",null,"What seems to be happening in this case is that the last association ",(0,o.kt)("em",{parentName:"p"},"only")," -- ",(0,o.kt)("inlineCode",{parentName:"p"},"TransportationOffice")," in this case --\nwill be populated.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," will be left as either a zero-valued struct or a nil depending on whether the\nfield is a pointer or not.  It appears this only occurs when you have a long association path where the first two\npath elements match.  We have developed a test case and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/pop/issues/626"},"filed an issue"),"\nwith Pop about this.  Please refer to the issue for more details."),(0,o.kt)("p",null,"One workaround is to remove one of the associations from the ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," and include it separately by\niterating over the results and doing a ",(0,o.kt)("inlineCode",{parentName:"p"},"Load")," on the missing association each time through the loop.\nThat's not as efficient as ",(0,o.kt)("inlineCode",{parentName:"p"},"EagerPreload")," of course, but it will at least populate the models correctly."))}u.isMDXComponent=!0}}]);