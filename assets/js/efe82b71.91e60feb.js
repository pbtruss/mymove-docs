"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[986],{52600:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var i=s(87462),n=(s(67294),s(3905));s(61839);const o={title:"0060 Move statuses to support service counseling"},a="_Move statuses to support service counseling_",r={unversionedId:"adrs/move-state-for-service-counseling",id:"adrs/move-state-for-service-counseling",title:"0060 Move statuses to support service counseling",description:'User Story: Create new move "status" for Services Counseling',source:"@site/docs/adrs/0060-move-state-for-service-counseling.md",sourceDirName:"adrs",slug:"/adrs/move-state-for-service-counseling",permalink:"/mymove-docs/docs/adrs/move-state-for-service-counseling",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0060-move-state-for-service-counseling.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"0060 Move statuses to support service counseling"},sidebar:"adrsSidebar",previous:{title:"0059 Use snapshot to cleanup load testing",permalink:"/mymove-docs/docs/adrs/use-snapshot-to-cleanup-loadtesting"},next:{title:"0061 Use OpenTelemetry to instrument code for distributed tracing",permalink:"/mymove-docs/docs/adrs/use-opentelemetry-for-distributed-tracing"}},l={},m=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2}],u={toc:m};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"move-statuses-to-support-service-counseling"},(0,n.kt)("em",{parentName:"h1"},"Move statuses to support service counseling")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User Story:")," ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-7112"},'Create new move "status" for Services Counseling')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"We need to define states for when moves go to service counseling and when service counseling is complete"),"\n","*","it would be nice to minimize the impact of this to downstream systems."),(0,n.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Create two states and one new timestamp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When a customer submits a move, the submitted timestamp is always set."),(0,n.kt)("li",{parentName:"ul"},"If the move is routed to service counseling, the move state is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"needs_service_counseling"),". Otherwise it is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"submitted"),"."),(0,n.kt)("li",{parentName:"ul"},"When the service counselor is done, the move state is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"service_counseling_completed")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"service_counseling_completed_at")," is set to the current time."),(0,n.kt)("li",{parentName:"ul"},"The TOO queue excludes items in ",(0,n.kt)("inlineCode",{parentName:"li"},"draft"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"needs_service_counseling")," and shows those in ",(0,n.kt)("inlineCode",{parentName:"li"},"service_counseling_completed")," (along with other states it currently shows)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"create one state and one new timestamp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When a customer submits a move, the submitted timestamp is always set."),(0,n.kt)("li",{parentName:"ul"},"If the move is routed to service counseling, the move state is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"needs_service_counseling"),". Otherwise it is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"submitted"),"."),(0,n.kt)("li",{parentName:"ul"},"When the service counselor is done, the move state is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"submitted")," and the ",(0,n.kt)("inlineCode",{parentName:"li"},"service_counseling_completed_at")," is set to the current time."),(0,n.kt)("li",{parentName:"ul"},"The TOO queue excludes items in ",(0,n.kt)("inlineCode",{parentName:"li"},"draft"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"needs_service_counseling")," and shows those in ",(0,n.kt)("inlineCode",{parentName:"li"},"submitted")," (along with other states it currently shows).")))),(0,n.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,n.kt)("em",{parentName:"li"},"Create two states and one new timestamp"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This more closely matches the mental model of the user and is not significantly more work than the alternative."),(0,n.kt)("li",{parentName:"ul"},"We don't get into a confusing situation where moving to submitted updates different timestamps.")))))}c.isMDXComponent=!0}}]);