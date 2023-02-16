"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1458],{92747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const o={title:"0055 Consolidate moves and move task orders into one database table"},r="Consolidate moves and move task orders into one database table",s={unversionedId:"adrs/consolidate-moves-and-mtos",id:"adrs/consolidate-moves-and-mtos",title:"0055 Consolidate moves and move task orders into one database table",description:"Jira Epic",source:"@site/docs/adrs/0055-consolidate-moves-and-mtos.md",sourceDirName:"adrs",slug:"/adrs/consolidate-moves-and-mtos",permalink:"/mymove-docs/docs/adrs/consolidate-moves-and-mtos",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0055-consolidate-moves-and-mtos.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"0055 Consolidate moves and move task orders into one database table"},sidebar:"adrsSidebar",previous:{title:"0054 Use CSS to highlight unfinished features",permalink:"/mymove-docs/docs/adrs/use-CSS-to-highlight-unfinished-features"},next:{title:"0056 Use ASDF To Manage Golang Versions In Development",permalink:"/mymove-docs/docs/adrs/use-asdf-to-manage-golang-versions-in-development"}},l={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Definitions of fields",id:"definitions-of-fields",level:3},{value:"Fields that we are not moving from move_task_orders to moves",id:"fields-that-we-are-not-moving-from-move_task_orders-to-moves",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Keep moves and move_task_orders separate",id:"keep-moves-and-move_task_orders-separate",level:3},{value:"Consolidate moves and move_task_orders",id:"consolidate-moves-and-move_task_orders",level:3},{value:"Definitions",id:"definitions",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consolidate-moves-and-move-task-orders-into-one-database-table"},"Consolidate moves and move task orders into one database table"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-3021"},"Jira Epic"))),(0,i.kt)("p",null,"Currently, a ",(0,i.kt)("inlineCode",{parentName:"p"},"moves")," record is distinct from a ",(0,i.kt)("inlineCode",{parentName:"p"},"move_task_orders")," (MTO) record, and there\nis no direct association between the two. Data entered by customers during move onboarding\nmust flow into the MTO correctly. If we don't get ahead of this now, the teams will\npotentially implement different versions of the database, resulting in rework and\nconfusion later. Having a consistent and uniform data model will improve\ncollaboration and productivity, and will enable us to demonstrate end-to-end\ncapability."),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep ",(0,i.kt)("inlineCode",{parentName:"li"},"moves")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"move_task_orders")," in separate database tables"),(0,i.kt)("li",{parentName:"ul"},"Consolidate ",(0,i.kt)("inlineCode",{parentName:"li"},"moves")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"move_task_orders")," into a single table")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chosen Alternative: Consolidate ",(0,i.kt)("inlineCode",{parentName:"li"},"moves")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"move_task_orders")," into a single table"),(0,i.kt)("li",{parentName:"ul"},"Keep only the ",(0,i.kt)("inlineCode",{parentName:"li"},"moves")," table and add fields to it to enable accurate\nrepresentation of an MTO."),(0,i.kt)("li",{parentName:"ul"},"Below is the final state of the ",(0,i.kt)("inlineCode",{parentName:"li"},"moves"),' table. The "new" label means it was ported over from\nthe ',(0,i.kt)("inlineCode",{parentName:"li"},"move_task_orders")," table.  These new fields will need to be nullable for\nbackwards-compatibility with the current production process.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updated_at")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"orders_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selected_move_type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cancel_reason")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"show")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contractor_id")," (new)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"available_to_prime_at")," (new)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ppm_type")," (new)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ppm_estimated_weight")," (new)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference_id")," (new)")))),(0,i.kt)("h3",{id:"definitions-of-fields"},"Definitions of fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id"),": A UUID primary key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"created_at"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updated_at"),": The usual Pop timestamps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"orders_id"),": A foreign key to the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"orders")," record")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"selected_move_type"),": Allowed values are HHG, PPM, UB, POV, NTS, HHG_PPM (but\nonly HHG and PPM appear to be used currently).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"status"),": Allowed values are DRAFT, SUBMITTED, APPROVED, CANCELED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"locator"),": This is a 6-digit alphanumeric value that is a sharable,\nhuman-readable identifier for a move (so it could be disclosed to support staff,\nfor instance). The MTO's ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_id")," is similar in nature but is in a ",(0,i.kt)("inlineCode",{parentName:"p"},"dddd-dddd"),"\nformat. The ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_id")," does serve currently as the prefix for payment request\nnumbers. We likely don\u2019t need both ",(0,i.kt)("inlineCode",{parentName:"p"},"locator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_id")," if these tables\nmerge. See ",(0,i.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1595605700223400"},"Slack discussion"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cancel_reason"),": A string to explain why a move was canceled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"show"),": A boolean that allows admin users to prevent a move from showing up\nin the TxO queue. This came out of a HackerOne engagement where hundreds of fake\nmoves were created. This defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"contractor_id"),": This was added to represent the prime contractor who will\nhandle the move. This makes it easy to point the move to a different contractor in case it changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"available_to_prime_at"),": a date and time field that indicates when the move is\navailable for the Prime to handle. The presence of this field can be used to\ndetermine whether or not to display the move to the Prime.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ppm_type"),": currently used values are ",(0,i.kt)("inlineCode",{parentName:"p"},"FULL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTIAL"),". This appears to be\ndifferent from having the ",(0,i.kt)("inlineCode",{parentName:"p"},"selected_move_type")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"moves")," table be ",(0,i.kt)("inlineCode",{parentName:"p"},"PPM")," vs\n",(0,i.kt)("inlineCode",{parentName:"p"},"HHG_PPM"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1595617833232800"},"Slack discussion"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ppm_estimated_weight"),": this is being set by the Prime currently so we are\nkeeping it for now.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reference_id"),": A unique identifier for an MTO (which also serves as the prefix\nfor payment request numbers) in ",(0,i.kt)("inlineCode",{parentName:"p"},"dddd-dddd")," format. There is still an ongoing\ndiscussion as to whether or not we need this ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_id")," in addition to the\nunique ",(0,i.kt)("inlineCode",{parentName:"p"},"locator")," identifier, so we are keeping ",(0,i.kt)("inlineCode",{parentName:"p"},"reference_id")," for now."))),(0,i.kt)("p",null,"There will be future work to reconcile the ",(0,i.kt)("inlineCode",{parentName:"p"},"ppm_type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ppm_estimated_weight"),"\nfields when we reenter conversations with the prime."),(0,i.kt)("h3",{id:"fields-that-we-are-not-moving-from-move_task_orders-to-moves"},"Fields that we are not moving from move_task_orders to moves"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_canceled"),": used to determine if an MTO was canceled or not. The moves\ntable already has a ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," field with a ",(0,i.kt)("inlineCode",{parentName:"li"},"CANCELED")," option, so we can get rid of\n",(0,i.kt)("inlineCode",{parentName:"li"},"is_canceled")," and use ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," instead.")),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"keep-moves-and-move_task_orders-separate"},"Keep moves and move_task_orders separate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," Allows for the possibility of multiple MTOs for a single move."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Increase the risk of code complexity and data duplication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Makes it more difficult to represent the move from the point of view of\nall parties: service member, TOO, Prime. For example, to find a move related to an MTO, you have to find the ",(0,i.kt)("inlineCode",{parentName:"li"},"order_id")," that the MTO points to, then the move that points to that same ",(0,i.kt)("inlineCode",{parentName:"li"},"orders_id"),"\n(unless we add a foreign key to a ",(0,i.kt)("inlineCode",{parentName:"li"},"moves")," record from a ",(0,i.kt)("inlineCode",{parentName:"li"},"move_task_orders")," record)")),(0,i.kt)("h3",{id:"consolidate-moves-and-move_task_orders"},"Consolidate moves and move_task_orders"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," It keeps things simple in the codebase because an MTO is essentially a\nmove that is available to the Prime. All moves will require an MTO except in one\nspecific scenario: when the service member chooses to handle the move on their\nown (PPM) AND they receive counseling from services and not from the Prime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," A move can only have one MTO, and the information the MTO refers to also\napplies to a move, so it makes sense to only have one DB table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Because of the differences between both tables, the consolidation will\nrequire more effort and might cause breaking API changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," By not having a separate DB table for MTOs, there is a risk we might not\nbe representing an MTO accurately. An MTO is a legal construct with specific\nrequirements.")),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TOO - Task Ordering Officer"),'. They are responsible for generating Task Orders\nand "ordering" shipments and service items such as crating, shuttle service and\nSIT. They are also a check on lines of accounting to make sure the correct ones\nare on the MTO so the Prime is paid from the appropriate bucket of money.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PPM - Personally Procured Move"),". When a service member chooses to handle the\nmove on their own."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MTO - Move Task Order"),'. Is similar to an order for goods from a contractor.\nIn the case of MilMove, the TOO is ordering services from the Prime Contractor.\nWhen the Prime Contractor completes those services, they can request payment for\nthose services. Every service the Prime undertakes must be "ordered." The\ngovernment does this via a Move Task Order. It is the record of everything that\nis ordered (approved) for the Prime to do. The Move Task Order contains all the\ninformation about shipments, including approved service items, estimated weights,\nactuals, requested and scheduled move dates etc.'))}p.isMDXComponent=!0}}]);