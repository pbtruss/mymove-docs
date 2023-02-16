"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7144],{986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(8209);const s={title:"0059 Use snapshot to cleanup load testing"},l="Use snapshot to cleanup load testing",i={unversionedId:"adrs/use-snapshot-to-cleanup-loadtesting",id:"adrs/use-snapshot-to-cleanup-loadtesting",title:"0059 Use snapshot to cleanup load testing",description:"User Story: Jira Story",source:"@site/docs/adrs/0059-use-snapshot-to-cleanup-loadtesting.md",sourceDirName:"adrs",slug:"/adrs/use-snapshot-to-cleanup-loadtesting",permalink:"/mymove-docs/docs/adrs/use-snapshot-to-cleanup-loadtesting",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0059-use-snapshot-to-cleanup-loadtesting.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{title:"0059 Use snapshot to cleanup load testing"},sidebar:"adrsSidebar",previous:{title:"0058 Use Happo for visual regression testing",permalink:"/mymove-docs/docs/adrs/replace-loki-with-happo"},next:{title:"0060 Move statuses to support service counseling",permalink:"/mymove-docs/docs/adrs/move-state-for-service-counseling"}},r={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Option 1: Create and Restore Snapshot",id:"option-1-create-and-restore-snapshot",level:3},{value:"Option 2: Delete batch endpoint in Support API. Delete script run by load testing machine",id:"option-2-delete-batch-endpoint-in-support-api-delete-script-run-by-load-testing-machine",level:3},{value:"Option 3: Upload delete UUIDs to AWS, AWS scheduled task to delete all",id:"option-3-upload-delete-uuids-to-aws-aws-scheduled-task-to-delete-all",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-snapshot-to-cleanup-load-testing"},"Use snapshot to cleanup load testing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User Story:")," ",(0,o.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-3071"},"Jira Story")),(0,o.kt)("p",null,"We use the tool Locust to perform load testing. We will be running this tool locally and it will hit endpoints on the experimental deployment of Milmove."),(0,o.kt)("p",null,"We need a solution to cleanup the database after load testing. Load testing creates a large number of moves and associated records such as orders, users, shipments and payment requests."),(0,o.kt)("p",null,"Once they are in the database, there's no obvious way to differentiate them from other valid records and clean them up."),(0,o.kt)("p",null,"We need a strategy for cleanup."),(0,o.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and restore snapshot of the database."),(0,o.kt)("li",{parentName:"ul"},"Create a batch delete endpoint in Support API. Delete script run by load testing machine."),(0,o.kt)("li",{parentName:"ul"},"Upload delete UUIDs to AWS, create an AWS scheduled task to delete all.")),(0,o.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,o.kt)("p",null,"We will snapshot the database on experimental prior to load testing and restore it after."),(0,o.kt)("p",null,"As we are currently only planning on running against experimental, this is the cleaner, simpler way to solve for this. The other options require too much initial code + maintenance, and would only become necessary if we decided to run against staging."),(0,o.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,o.kt)("h3",{id:"option-1-create-and-restore-snapshot"},"Option 1: Create and Restore Snapshot"),(0,o.kt)("p",null,"Currently we are only targeting load testing against experimental. Therefore, we are able to snapshot the database and then restore it at the end of the load test. If possible, we will create a script that helps with the creation and restoration of this snapshot for ease of use by developer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," This will cleanly remove all load testing artifacts and is not subject to us coding anything to specifically find and delete the records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," This mechanism is currently used by infra and is a known process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Need to get permissions for app-eng to be able to complete this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," ",(0,o.kt)("strong",{parentName:"li"},"Can only be used on experimental"),". We can only do this in experimental or another private testing environment. Not suitable for staging where multiple people may be using it at the same time.")),(0,o.kt)("h3",{id:"option-2-delete-batch-endpoint-in-support-api-delete-script-run-by-load-testing-machine"},"Option 2: Delete batch endpoint in Support API. Delete script run by load testing machine"),(0,o.kt)("p",null,"We could create a delete endpoint in the Support Api.\nThis could take batch lists of user UUIDs as the parents, and delete all users, orders, moves etc. associated."),(0,o.kt)("p",null,"We can't clean up the objects as we load test because that would defeat the purpose of load testing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Could be used on staging and experimental."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," We would have to log all created user UUIDs locally while we are running testing and after completion delete all of them. This opens up the possibility that the logs get deleted or corrupted, or the developer forgets to run the cleanup script. Once that information is lost, we can't reconstruct it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Extra work needed to create endpoint and keep it updated as structure of nested objects changes.")),(0,o.kt)("h3",{id:"option-3-upload-delete-uuids-to-aws-aws-scheduled-task-to-delete-all"},"Option 3: Upload delete UUIDs to AWS, AWS scheduled task to delete all"),(0,o.kt)("p",null,"We could configure load testing to periodically upload the list of user UUIDs to delete to AWS. We would need an endpoint to do this. In addition, we could use an AWS scheduled task that processes them all at end of day directly deleting from the DB."),(0,o.kt)("p",null,"We can't clean up the objects as we load test because that would defeat the purpose of load testing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Could be used on staging and experimental."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Can\u2019t run load testing overnight if task will cleanup objects on a set schedule."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Extra work needed to upload ids, create endpoint for uploads, create task to process, and keep it updated as the structure of nested objects changes.")))}u.isMDXComponent=!0}}]);