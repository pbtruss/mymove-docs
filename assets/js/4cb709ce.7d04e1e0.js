"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4596],{3537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));n(29420);const o={title:"0074 Refactor Move Event's Details Rendering "},s="*0074 Refactor Move Event's Details rendering*",l={unversionedId:"adrs/move-history-details-refactor",id:"adrs/move-history-details-refactor",title:"0074 Refactor Move Event's Details Rendering ",description:"\ud83d\udd12 User Story: MB-11214",source:"@site/docs/adrs/0074-move-history-details-refactor.md",sourceDirName:"adrs",slug:"/adrs/move-history-details-refactor",permalink:"/mymove-docs/docs/adrs/move-history-details-refactor",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0074-move-history-details-refactor.md",tags:[],version:"current",sidebarPosition:74,frontMatter:{title:"0074 Refactor Move Event's Details Rendering "},sidebar:"adrsSidebar",previous:{title:"0073 Use Templates for SQL Queries",permalink:"/mymove-docs/docs/adrs/using-templates-for-sql-queries"},next:{title:"0075 Remove CLI Spinner",permalink:"/mymove-docs/docs/adrs/cli-spinner"}},r={},m=[{value:"Useful definition",id:"useful-definition",level:3},{value:"Example of two move events with the same action, event, and table combination",id:"example-of-two-move-events-with-the-same-action-event-and-table-combination",level:2},{value:"There are two ways to consider this issue",id:"there-are-two-ways-to-consider-this-issue",level:3},{value:"1. The move events will match multiple templates",id:"1-the-move-events-will-match-multiple-templates",level:4},{value:"2. The move events are of different details types so the same template cannot be used.",id:"2-the-move-events-are-of-different-details-types-so-the-same-template-cannot-be-used",level:4},{value:"Scope of the issue",id:"scope-of-the-issue",level:3},{value:"Proposal: Refactor event templates to return their own details components.",id:"proposal-refactor-event-templates-to-return-their-own-details-components",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Chosen Alternative: <em>Refactor event templates to return their own details components</em>",id:"chosen-alternative-refactor-event-templates-to-return-their-own-details-components",level:3},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"<em>Add a new changed values criterion for distinguishing between events when matching to event templates</em>",id:"add-a-new-changed-values-criterion-for-distinguishing-between-events-when-matching-to-event-templates",level:3},{value:"<em>Refactor our details types and details components so that different data can be displayed differently within the same details type</em>",id:"refactor-our-details-types-and-details-components-so-that-different-data-can-be-displayed-differently-within-the-same-details-type",level:3},{value:"<em>Do nothing</em>",id:"do-nothing",level:3}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0074-refactor-move-events-details-rendering"},(0,i.kt)("em",{parentName:"h1"},"0074 Refactor Move Event's Details rendering")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udd12 User Story:")," ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://dp3.atlassian.net/browse/MB-12606"},"MB-11214"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"At present, move history templates are matched based on action, event name, and table name. This expects that each action, event, and table combination is unique. However, some move history events share the same values for all three and there isn't a way to specify which template to use.")),(0,i.kt)("h3",{id:"useful-definition"},"Useful definition"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Matching combination:")," A move event's action, eventName, and tableName.")),(0,i.kt)("h2",{id:"example-of-two-move-events-with-the-same-action-event-and-table-combination"},"Example of two move events with the same action, event, and table combination"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Approvals request"),(0,i.kt)("td",null,"Prime excess weight ")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "UPDATE",\n  ...\n  "changedValues": {\n    "status": "APPROVALS REQUESTED"\n  },\n  ...\n  "eventName": "updateMTOShipment",\n  "tableName": "moves",\n  "transactionId": 6627,\n}\n'))),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "UPDATE",\n  ...\n  "changedValues": {\n    "excess_weight_qualified_at": "2022-09-07T21:26:47"\n  },\n  ...\n  "eventName": "updateMTOShipment",\n  "tableName": "moves", \n  "transactionId": 6627,\n}\n'))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nHistory record data has been abbreviated.")),(0,i.kt)("h3",{id:"there-are-two-ways-to-consider-this-issue"},"There are two ways to consider this issue"),(0,i.kt)("h4",{id:"1-the-move-events-will-match-multiple-templates"},"1. The move events will match multiple templates"),(0,i.kt)("p",null,"Since we assume each matching combination is unique, we create a template for each move event. Given our current setup, if multiple move event has the matching combination, the move events will be able to match to multiple templates. However the TemplateManager, still holds the assumption that 1 template will match a given move event, so it returns after the first match is found. So in our case when a move events with identical match combinations, it will show whichever template is first in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," for templates even if there is another template that is a better match."),(0,i.kt)("h4",{id:"2-the-move-events-are-of-different-details-types-so-the-same-template-cannot-be-used"},"2. The move events are of different details types so the same template cannot be used."),(0,i.kt)("p",null,"One approach could be to share the one for move events with the same matching combinations. However, the move events must have the same detail type. The detail type determines which react component will be rendered in the details column. In the example above one move event requires ",(0,i.kt)("inlineCode",{parentName:"p"},"plainTextDetails")," and the other requires ",(0,i.kt)("inlineCode",{parentName:"p"},"statusDetails"),". Due to rigid mapping of event template to detailsType, only one detail type can be specified since there is. There is currently no supported way to display more than one detailsType within an eventTemplate."),(0,i.kt)("h3",{id:"scope-of-the-issue"},"Scope of the issue"),(0,i.kt)("p",null,"To find potential the scope of the issue of sharing matching combinations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"templateManager")," was edited to run the movement against all the templates instead of returning as soon as it found its first match. This change would make it so a template's test would fail if another template could also be a possible match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default (historyRecord) => {\n  // find all the templates that match\n  const templates = allMoveHistoryEventTemplates.filter((eventType) => eventType.matches(historyRecord));\n  // if the template array is length of 1 return that first value\n  if (templates.length === 1) {\n    return templates[0];\n  }\n  // else return undefined event\n  return undefinedEvent;\n};\n")),(0,i.kt)("p",null,"After running the test, we found all of our existing templates match 1:1. Upon, further inspection, it looks like we solved for matching combinations mostly by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/0df3d6c0e603112b006e29fd31df0b0bd80086bd/src/constants/MoveHistory/EventTemplates/updateMTOShipmentDeprecatePaymentRequest.js"},"sharing templates and using ternaries to return different values")," based on ",(0,i.kt)("inlineCode",{parentName:"p"},"changedValues"),"."),(0,i.kt)("h2",{id:"proposal-refactor-event-templates-to-return-their-own-details-components"},"Proposal: Refactor event templates to return their own details components."),(0,i.kt)("p",null,'One way to look at the issue being addressed by this ADR is that there is a restrictive constant mapping of event template to detailsType. In other words, each event template has only one detailsType, so there isn\'t much flexibility in how the details for an event template can be displayed. This can be addressed by removing this mapping -- getting rid of the detailsType field and any other details-related fields in the template such as "getPlaintextDetails" -- and providing a single replacement function, ',(0,i.kt)("inlineCode",{parentName:"p"},"getDetails"),", which is responsible for returning the entire details for the event template."),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// approveShipment.jsx\n\nexport default {\n  action: a.UPDATE,\n  eventName: o.approveShipment,\n  tableName: t.mto_shipments,\n  getEventNameDisplay: () => 'Approved shipment',\n  getDetails: (historyRecord) => {\n    return <div>{`${s[historyRecord.oldValues?.shipment_type]} shipment`}</div>;\n  },\n};\n")),(0,i.kt)("p",null,"This provides flexibility to return two completely different details components, perhaps based on some condition, within the same event template.\nAny existing details components such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<LabeledDetails>")," can also be returned directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"getDetails")," function.\nTests could also be changed to actually render components and test detail text on the screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// approveShipment.test.jsx\n\ndescribe('when given an Approved shipment history record', () => {\n  const item = {\n    action: 'UPDATE',\n    changedValues: { status: 'APPROVED' },\n    eventName: 'approveShipment',\n    oldValues: { shipment_type: 'HHG' },\n    tableName: 'mto_shipments',\n  };\n  it('correctly matches the Approved shipment event', () => {\n    const result = getTemplate(item);\n    expect(result).toMatchObject(e);\n    render(result.getDetails(item));\n    expect(screen.getByText('HHG shipment')).toBeInTheDocument();\n  });\n});\n")),(0,i.kt)("p",null,"Such an approach would involve some work to convert the existing move history templates to follow this pattern. This work could be broken down and worked on incrementally if the ",(0,i.kt)("inlineCode",{parentName:"p"},"MoveHistoryDetailsSelector")," is updated to accept either details provider. The incremental refactor can be coupled with a better organization of the event templates into sub-folders based on ",(0,i.kt)("inlineCode",{parentName:"p"},"eventName"),"."),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Add a new changed values criterion for distinguishing between events when matching to event templates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Refactor our details types and details components so that different data can be displayed uniquely within the same details type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Do nothing"))),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("h3",{id:"chosen-alternative-refactor-event-templates-to-return-their-own-details-components"},"Chosen Alternative: ",(0,i.kt)("em",{parentName:"h3"},"Refactor event templates to return their own details components")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"The strategy for displaying details for move history rows would be much more flexible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Displaying move history details would more closely resemble more conventional React-like patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"Refactoring the existing event templates could be broken down and addressed incrementally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Refactoring the existing event templates would be a sizeable amount of work.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"It does not solve the issue of moving events matching to multiple templates. However, it does give the flexibility to share the same template"))),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"add-a-new-changed-values-criterion-for-distinguishing-between-events-when-matching-to-event-templates"},(0,i.kt)("em",{parentName:"h3"},"Add a new changed values criterion for distinguishing between events when matching to event templates")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"It is the same approach used when Action and Table were added as matching criteria when Event Name was not sufficient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"It assumes that no event will have the same action, event name, table name, and changed values. We may run into a case that meets this criterion and will have to come up with another metric in which to differentiate move events.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"It assumes all ",(0,i.kt)("inlineCode",{parentName:"em"},"changedValues")," listed are required. There are move events where only some of the possible ",(0,i.kt)("inlineCode",{parentName:"em"},"changedValues")," will be present. In that situation, it will not match the template at all."))),(0,i.kt)("h3",{id:"refactor-our-details-types-and-details-components-so-that-different-data-can-be-displayed-differently-within-the-same-details-type"},(0,i.kt)("em",{parentName:"h3"},"Refactor our details types and details components so that different data can be displayed differently within the same details type")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," ",(0,i.kt)("em",{parentName:"li"},"This will allow us to refactor the details component and consolidate our details types from 4 types to 2 types by combining the status, labeled detail, and plain text types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Changes would eventually need all the existing event templates to update their details types or we will have to continue to support the legacy format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"Details components will still be rigid and could run into the same problem if a new design for details is introduced."))),(0,i.kt)("h3",{id:"do-nothing"},(0,i.kt)("em",{parentName:"h3"},"Do nothing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"This does not solve the situation where multiple move event shares the same action, table, and event name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," ",(0,i.kt)("em",{parentName:"li"},"The move events will not consistently render the correct details"))))}p.isMDXComponent=!0}}]);