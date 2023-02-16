"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5883],{81310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(8209);const s={title:"0071 Introduce Move History Events"},o="Introduce Move History Events",l={unversionedId:"adrs/move-history-events",id:"adrs/move-history-events",title:"0071 Introduce Move History Events",description:"- \ud83d\udd12 User Story: MB-8115",source:"@site/docs/adrs/0071-move-history-events.md",sourceDirName:"adrs",slug:"/adrs/move-history-events",permalink:"/mymove-docs/docs/adrs/move-history-events",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0071-move-history-events.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{title:"0071 Introduce Move History Events"},sidebar:"adrsSidebar",previous:{title:"0070 Use a consistent file structure for cypress tests",permalink:"/mymove-docs/docs/adrs/cypress-tests-file-layout"},next:{title:"0072 Using React-App-Rewired",permalink:"/mymove-docs/docs/adrs/using-react-app-rewired"}},r={},d=[{value:"Constant Objects",id:"constant-objects",level:2},{value:"Events",id:"events",level:2},{value:"Event Template",id:"event-template",level:3},{value:"Proposal: Organize constants files into individual modules",id:"proposal-organize-constants-files-into-individual-modules",level:2},{value:"Template Manager",id:"template-manager",level:3},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: <em>Organize constants files into individual modules</em>",id:"chosen-alternative-organize-constants-files-into-individual-modules",level:3},{value:"Justification: This is the only decision which will help prevent merge conflicts",id:"justification-this-is-the-only-decision-which-will-help-prevent-merge-conflicts",level:4},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Do nothing</em>",id:"do-nothing",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduce-move-history-events"},"Introduce Move History Events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd12 ",(0,i.kt)("strong",{parentName:"li"},"User Story:")," ",(0,i.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-8115"},(0,i.kt)("em",{parentName:"a"},"MB-8115"))),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd12 ",(0,i.kt)("strong",{parentName:"li"},"User Story:")," ",(0,i.kt)("a",{parentName:"li",href:"https://dp3.atlassian.net/browse/MB-12515"},(0,i.kt)("em",{parentName:"a"},"MB-12515")))),(0,i.kt)("p",null,"There are a number of additions to the front-end codebase for Move History Log.\nThe changes discussed in this ADR are around the files found in ",(0,i.kt)("inlineCode",{parentName:"p"},"constants/"),".\nThese files are currently flat within the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/constants/")," directory with names\nthat start with ",(0,i.kt)("inlineCode",{parentName:"p"},"moveHistory")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"historyLog"),". These files all have exports that\nare leveraged in a number of ways within the files themselves and also within\nthe Move History components located at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/Office/MoveHistory/"),"."),(0,i.kt)("h2",{id:"constant-objects"},"Constant Objects"),(0,i.kt)("p",null,"There are a number of JavaScript objects that are used to map responses from the\nAPI into human-readable strings. These objects are all within a single file\ncurrently. Any updates to these objects has the potential of causing merge\nconflicts."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"With the History Log outcome, the MilMove team needs to create event templates\nwhich are JavaScript Objects that facilitate the customization, rendering, and\nidentifying of different events being used in the History Log. The structure of\nthese Objects are outlined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  action: '',\n  eventName: '',\n  tableName: '',\n  detailsType: '',\n  getEventNameDisplay: (historyRecord) => '',\n  // One of the following functions are used to populate the details column of\n  // an event. The function that is called is based on the `detailsType`\n  // property above.\n  getDetailsPlainText: (historyRecord) => '',\n  getDetailsLabeledDetails: (historyRecord) => {\n    let newChangedValues = {};\n    // add to newChangedValues Object.\n    return newChangedValues\n  },\n  getStatusDetails: (historyRecord) => {\n    let newChangedValues = {};\n    // add to newChangedValues Object.\n    return newChangedValues\n  },\n}\n")),(0,i.kt)("h3",{id:"event-template"},"Event Template"),(0,i.kt)("p",null,"This ADR is introducing this Object above for Move History Event Templates. This\nADR is not an exhaustive list of the types of Details column will be displayed\nbut include three examples based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"detailsType")," property above. Currently\nthe maintenance and addition of these event types requires engineers to edit a\nsingle file named ",(0,i.kt)("inlineCode",{parentName:"p"},"src/constants/moveHistory/moveHistoryEventTemplate.js"),". This\nhas proven to lead to many merge conflicts as engineers are adding event\ntemplates to the same file. This file structure makes it non-trivial to verify\nwhich event names have been added to the project because there is only a single\nfile that ever gets updated. Tests written for testing the event names happen at\nthe event template file rather than near the actual event templates that are\nbeing tested. This has proven to create scenarios where certain events are not\ntested because they are mistakenly forgotten to be added. At the time of this\nwriting, the file above is over 550 lines of code supporting 32 distinct event\ntemplates. At the time of this writing, it's estimated that we will be adding\nanother 21 distinct event templates."),(0,i.kt)("h2",{id:"proposal-organize-constants-files-into-individual-modules"},"Proposal: Organize constants files into individual modules"),(0,i.kt)("p",null,"Organizing these ",(0,i.kt)("inlineCode",{parentName:"p"},"src/constants/")," files for Move History into individual\nJavaScript modules is a great way to encapsulate any changes so multiple\nengineers are able to work on the PO9 outcome at the same time without working\nwithin the same file. This will lead to much less merge conflicts around similar\nfeatures. The added benefits of individual modules is that anyone with access to\nthe repository on GitHub can see what Move History Events are supported by\nlooking for the folders under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/constants/MoveHistory/EventTemplates/"),"."),(0,i.kt)("p",null,"Below is an example of the proposed file structure for Move History constants."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"src/constants/MoveHistory\n\u251c\u2500\u2500 TemplateManager.js\n\u2514\u2500\u2500 EventTemplates\n   \u251c\u2500\u2500 updateMTOReviewedBillableWeightAt.js\n   \u2514\u2500\u2500 updateMTOReviewedBillableWeightAt.test.js\n\u2514\u2500\u2500 Database\n   \u251c\u2500\u2500 Tables.js\n   \u2514\u2500\u2500 FieldToDisplayName.js\n\u2514\u2500\u2500 LabeledFields\n   \u251c\u2500\u2500 OrdersOptions.js\n\u2514\u2500\u2500 UIDisplay\n   \u2514\u2500\u2500 DetailsTypes.js\n   \u2514\u2500\u2500 HistoryLogRecordShapes.js\n")),(0,i.kt)("p",null,'This example is a minimal set of files. A refactor for all the current exports\nwill include many more files under certain directories. The file and directory\nnames are capitalized and camel-case for readability. The event templates should\nbe named after the user action to which they correspond (usually based on their\nevent name) and their names should not end in "event." Any tests for these files\nwill be written alongside the files that they are testing. Each template test\nfile would technically test the functionality of building and getting templates\nfrom the ',(0,i.kt)("inlineCode",{parentName:"p"},"TemplateManager.js")," file to achieve the expected result."),(0,i.kt)("h3",{id:"template-manager"},"Template Manager"),(0,i.kt)("p",null,"This ADR introduces changing the getting and building of templates into a single\nfile named ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateManager.js"),". This file has a local Array which is appended\nto at build-time of the templates. This ",(0,i.kt)("inlineCode",{parentName:"p"},"TemplateManager.js")," exports two\nfunctions named ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildTemplate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetTemplate"),". With this approach, there is\nno need to maintain a static Array of events as was done previously. This cuts\ndown on the number of times an Event Name is written in the codebase. Below is\nan example of the changes related to using this Array to store events at build\ntime rather than maintaining the Array manually."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u25b6\ufe0f  A diff of tested changes to refactor maintaining a static Array variable."),(0,i.kt)("p",null,"The diff below works prior to the refactor suggested in this ADR. The diff above\nis meant to give an example and is only the beginning of the necessary changes\nthat would be done to complete this ADR."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"diff --git a/src/constants/moveHistoryEventTemplate.js b/src/constants/moveHistoryEventTemplate.js\nindex 99b505f090..f68e5fcf79 100644\n--- a/src/constants/moveHistoryEventTemplate.js\n+++ b/src/constants/moveHistoryEventTemplate.js\n@@ -17,7 +17,10 @@ export const detailsTypes = {\n   STATUS: 'STATUS',\n };\n\n-const buildMoveHistoryEventTemplate = ({\n+// A private Array to store all the Event templates.\n+let allMoveHistoryEventTemplates = []; // eslint-disable-line prefer-const\n+\n+export const buildMoveHistoryEventTemplate = ({\n   action = '*',\n   eventName = '*',\n   tableName = '*',\n@@ -54,6 +57,9 @@ const buildMoveHistoryEventTemplate = ({\n     );\n   };\n\n+  // Append the eventType after creating it into the private Array.\n+  allMoveHistoryEventTemplates.push(eventType);\n+\n   return eventType;\n };\n\n@@ -520,42 +526,8 @@ export const updateMTOReviewedBillableWeightsAt = buildMoveHistoryEventTemplate(\n   getDetailsPlainText: () => 'Reviewed weights',\n });\n\n-const allMoveHistoryEventTemplates = [\n-  acknowledgeExcessWeightRiskEvent,\n-  approveShipmentEvent,\n-  approveShipmentDiversionEvent,\n-  createMTOShipmentEvent,\n-  createMTOShipmentAddressesEvent,\n-  createMTOShipmentAgentEvent,\n-  createOrdersEvent,\n-  createPaymentRequestReweighUpdate,\n-  createPaymentRequestShipmentUpdate,\n-  createBasicServiceItemEvent,\n-  createStandardServiceItemEvent,\n-  requestShipmentCancellationEvent,\n-  requestShipmentDiversionEvent,\n-  requestShipmentReweighEvent,\n-  setFinancialReviewFlagEvent,\n-  submitMoveForApprovalEvent,\n-  updateAllowanceEvent,\n-  uploadAmendedOrdersEvent,\n-  updateBillableWeightEvent,\n-  updateMoveTaskOrderEvent,\n-  updateMoveTaskOrderStatusEvent,\n-  updateMTOShipmentEvent,\n-  updateMTOShipmentAddressesEvent,\n-  updateMTOShipmentAgentEvent,\n-  updateMTOShipmentDeprecatePaymentRequest,\n-  updateOrderEvent,\n-  updatePaymentRequestEvent,\n-  updatePaymentRequestStatus,\n-  updateServiceItemStatusEvent,\n-  updateBillableWeightEvent,\n-  updateAllowanceEvent,\n-  updateMTOReviewedBillableWeightsAt,\n-];\n-\n const getMoveHistoryEventTemplate = (historyRecord) => {\n+  // Read from the private Array to find templates based on the historyRecord\n   return allMoveHistoryEventTemplates.find((eventType) => eventType.matches(historyRecord)) || undefinedEvent;\n };\n\n"))),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Do nothing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Organize constants files into individual modules")," (",(0,i.kt)("strong",{parentName:"li"},"chosen"),")")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("h3",{id:"chosen-alternative-organize-constants-files-into-individual-modules"},"Chosen Alternative: ",(0,i.kt)("em",{parentName:"h3"},"Organize constants files into individual modules")),(0,i.kt)("h4",{id:"justification-this-is-the-only-decision-which-will-help-prevent-merge-conflicts"},"Justification: This is the only decision which will help prevent merge conflicts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"The outcome is much easier to follow by looking at the files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Prevents merge conflicts as engineers are able to work separately on\ntests and features in separate files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Implementing this will block work for PO9 outcome while it's getting done"))),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"do-nothing"},(0,i.kt)("em",{parentName:"h3"},"Do nothing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"No effort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Continues to cause merge conflicts as developers work on the same files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Understanding the amount of Events that are complete is opaque"))))}m.isMDXComponent=!0}}]);