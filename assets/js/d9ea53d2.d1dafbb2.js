"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2275],{71881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));a(95657);const r={},s="How to Create & Submit a Pull Request (PR)",i={unversionedId:"about/development/how-to-create-and-submit-PR",id:"about/development/how-to-create-and-submit-PR",title:"How to Create & Submit a Pull Request (PR)",description:"Initial steps",source:"@site/docs/about/development/how-to-create-and-submit-PR.md",sourceDirName:"about/development",slug:"/about/development/how-to-create-and-submit-PR",permalink:"/mymove-docs/docs/about/development/how-to-create-and-submit-PR",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/development/how-to-create-and-submit-PR.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Goland",permalink:"/mymove-docs/docs/about/development/goland"},next:{title:"Logging",permalink:"/mymove-docs/docs/about/development/logging"}},l={},u=[{value:"Initial steps \u2600\ufe0f",id:"initial-steps-\ufe0f",level:2},{value:"Creating a PR \u2b50",id:"creating-a-pr-",level:2},{value:"Writing a PR description \u270f\ufe0f",id:"writing-a-pr-description-\ufe0f",level:2},{value:"Final Touches \ud83d\udc4c",id:"final-touches-",level:2},{value:"Submitting a PR \ud83c\udf89",id:"submitting-a-pr-",level:2},{value:"Merging your PR \ud83d\udcaf",id:"merging-your-pr-",level:2},{value:"How to use Mergify",id:"how-to-use-mergify",level:3},{value:"CONGRATS! YOU HAVE SUCCESSFULLY MERGED YOUR PR! \ud83c\udf8a",id:"congrats-you-have-successfully-merged-your-pr-",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-create--submit-a-pull-request-pr"},"How to Create & Submit a Pull Request (PR)"),(0,n.kt)("h2",{id:"initial-steps-\ufe0f"},"Initial steps \u2600\ufe0f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1:")," Select a ticket under the \u2018To Do\u2019 column to work on from your team\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/jira/software/c/projects/MB/boards/26?selectedIssue=MB-13958"},"Jira board"),". In the Jira board, move that ticket to the \u2018Started\u2019 column."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2:")," Open up the Milmove repo in your code editor. Make sure you\u2019re on the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch. Do a ",(0,n.kt)("inlineCode",{parentName:"p"},"git pull")," to ensure you have all the latest changes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3:")," Create a new branch off of main for your ticket. The typical naming convention is ",(0,n.kt)("inlineCode",{parentName:"p"},"[your initials]-[Jira ticket number]-short description of task"),".\nEx: ",(0,n.kt)("inlineCode",{parentName:"p"},"bp-MB-13507-change-aoa-language")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4:")," Start working on your ticket and code away!!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5:"),"  Now that you feel you\u2019ve completed the tasks needed for your ticket and you\u2019ve pushed up all your work, your code is ready for review. It is time to submit a PR!"),(0,n.kt)("h2",{id:"creating-a-pr-"},"Creating a PR \u2b50"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6:"),"  Go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pulls"},"Milmove\u2019s GitHub"),". On the homepage, you should see at the top your most recent push along with a green button that says \u2018Compare & pull request\u2019. Click on this green button.\n",(0,n.kt)("img",{alt:"Image showing compare &amp; pull request button on Github",src:a(46002).Z,width:"1171",height:"146"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 7"),":  Next, you will see a pre-made description delineating the information you need to write for your PR (as shown in screenshot below). This description should state your Jira ticket number, the steps reviewers need to take to replicate and see your change, and for good measure, add any relevant screenshots for more clarity. Feel free to check out your teammates\u2019 PRs as well to help you get an idea of what to write. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/9145"},"Example PR"),"\n",(0,n.kt)("img",{alt:"Image showing how to open a PR",src:a(43973).Z,width:"1388",height:"821"})),(0,n.kt)("h2",{id:"writing-a-pr-description-\ufe0f"},"Writing a PR description \u270f\ufe0f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 8:"),"  First things first, gotta give your PR a title. There is a required naming convention for the title: ",(0,n.kt)("inlineCode",{parentName:"p"},"[Jira ticket number]-brief description of task"),". Brackets needed."),(0,n.kt)("p",null,"Ex: ",(0,n.kt)("inlineCode",{parentName:"p"},"[MB-13507] Changed AOA language for Customer PPM Form")),(0,n.kt)("p",null,"a) Next, provide the link to your Jira ticket.",(0,n.kt)("br",null),"\nb) Under the \u201cSummary\u201d section, this is where you may add in any special details you believe reviewers should be aware of. For example, explaining why you wrote some code the way you did, why you chose this approach instead of another.",(0,n.kt)("br",null),"\nc) \u201cSetup to Run Your Code\u201d-thankfully there is already boilerplate info there, so no need to touch this section.",(0,n.kt)("br",{parentName:"p"}),"\n","d) Under \u201cAdditional Steps\u201d, this is where you add the steps reviewers need to take to view and check your changes.",(0,n.kt)("br",null),"\ne) The \u201cVerification Steps for Author\u201d section is where you check to ensure your PR is ready for review. (See the ",(0,n.kt)("strong",{parentName:"p"},"Final Touches")," section below for more info on requesting reviewers). ",(0,n.kt)("br",null),"\nf) \u201cVerification Steps for Reviewers\u201d- section for reviewers. Feel free to delete any sections here that are not pertinent to your PR. For ex: if your PR is frontend only, then you can delete the database section.",(0,n.kt)("br",null),"\ng) \u201cScreenshots\u201d-attach any relevant screenshots. Ex: for Frontend updates, a screenshot that displays the change you made in the app"),(0,n.kt)("h2",{id:"final-touches-"},"Final Touches \ud83d\udc4c"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 9"),":  On the right hand side, you\u2019ll see some categories that you need to assign values to. Specifically, we will focus on the \u201cReviewers\u201d and \u201cLabels\u201d."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing the categories side panel",src:a(19025).Z,width:"405",height:"317"})),(0,n.kt)("p",null,"a) Under \u201cReviewers\u201d, select your team from the dropdown. If you are making a change to the Frontend that also affects the layout/design of the app (i.e. adding a new form on a page), you\u2019ll need to also select the \u201ctruss-design\u201d team. Similarly, if you are making a change to the database, you\u2019ll also need to select the \u201ctruss-db\u201d team."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing the reviewers side panel",src:a(67380).Z,width:"364",height:"552"})),(0,n.kt)("p",null,"At least 1 engineer from your team needs to approve your PR in order for you to merge it in.",(0,n.kt)("br",null),"\nIf you also need design/database review, one person from those teams will need to approve your PR as well. ",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Please note"),": Depending on what parts of the code your PR touches, some reviewers will be automatically assigned to the PR. For ex: if your PR is frontend and you have code changes in Storybook or .scss files, the truss-design team will be automatically assigned as a reviewer. "),(0,n.kt)("p",null,"b) Under \u201cLabels\u201d, select your team name."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing the labels side panel",src:a(59723).Z,width:"326",height:"492"})),(0,n.kt)("h2",{id:"submitting-a-pr-"},"Submitting a PR \ud83c\udf89"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 9:"),"  Proofread and do a once-over to ensure all the necessary details are mentioned in your PR. When you feel it is good to go, click that green \u201cCreate pull request\u201d button!"),(0,n.kt)("p",null,"You should now see your PR in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pulls"},"Pull requests page"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 10:")," Go back to your Jira board. Move your ticket from the \u201cStarted\u201d column to the \u201cIn review\u201d column."),(0,n.kt)("h2",{id:"merging-your-pr-"},"Merging your PR \ud83d\udcaf"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 11"),":  Once you\u2019ve received the necessary approvals for your PR and all the checks have passed, it is time to merge it into main."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"FIRST APPROACH")),(0,n.kt)("p",null,"a)  Scroll down in your PR page, towards the bottom you\u2019ll see a list of checks that get run. If you\u2019re making changes in the Frontend, you\u2019ll usually get Happo diffs and a failing test for this as a result. Make sure a designer also approves your Happo diffs prior to merging your PR.\n",(0,n.kt)("img",{alt:"Image showing happo diffs",src:a(74509).Z,width:"971",height:"450"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," If any of your CircleCI tests fail, click the \u201cdetails\u201d link to get more info."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depending on whether your ticket is frontend or backend, you should run ",(0,n.kt)("inlineCode",{parentName:"p"},"make_client test")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"make_server test")," locally respectively, to make sure all tests are passing before you commit your changes & submit a PR.",(0,n.kt)("br",null),"\n-If client test or server test fails, that means either a) the code changes you made affected another thing and it caused the failing test or b) you need to make revisions and adapt the tests to account for the changes you\u2019ve made.",(0,n.kt)("br",null),"\n-You can also run Cypress locally with ",(0,n.kt)("inlineCode",{parentName:"p"},"make e2e_test")," to reproduce the issue.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cypress integration tests can sometimes be flaky as denoted by the \u2018flaky\u2019 CircleCI labels and can fail sporadically as well. These tests you can try re-running if it fails."))),(0,n.kt)("p",null,"b)  Make sure to regularly pull from main to keep your branch updated with the latest before merging. Otherwise, you\u2019ll get a warning that states \u2018branch has conflicts\u2026\u2019"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing merge conflicts",src:a(50684).Z,width:"913",height:"691"})),(0,n.kt)("p",null,"c) Once you see 3 green checks for a) changes approved, b) all checks passed, c) branch has no conflicts, you\u2019ll see the bottom green button \u201cSquash and merge\u201d is enabled. Go ahead and ",(0,n.kt)("strong",{parentName:"p"},"CLICK THIS BUTTON!")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing merge button",src:a(64047).Z,width:"1018",height:"582"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SECOND APPROACH")),(0,n.kt)("p",null,"Another way of merging your changes is using Mergify."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pros of using Mergify")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't have to manually merge main and can ensure that your code passes the tests before merging. Especially if you forget to pull the latest from main, you may come across tests breaking. Mergify helps you here.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Con of using Mergify")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can take a while, especially if there are multiple merges happening at the same time. Mergify has a queue of jobs that it tries to merge in order so you may be blocked by other merges. Nonetheless, it is very seamless and simple."),(0,n.kt)("li",{parentName:"ul"},'Can get "merge happy" and prematurely merge before getting all the necessary reviews and approvals. For ex: it might merge your PR after only getting a design review when your PR needs ',(0,n.kt)("strong",{parentName:"li"},"both")," design and code reviews.",(0,n.kt)("br",null),(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("strong",{parentName:"li"},"NOTE"),': That is why it is important to only assign the "ready-to-merge" label ',(0,n.kt)("strong",{parentName:"li"},"AFTER")," you know you have gotten all the necessary reviews and approvals for your PR. ")),(0,n.kt)("h3",{id:"how-to-use-mergify"},"How to use Mergify"),(0,n.kt)("p",null,"a)  Under the \u201cLabels\u201d section on the right, select \u201cready-to-merge\u201d."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing Mergify&#39;s ready-to-merge label",src:a(96947).Z,width:"324",height:"337"})),(0,n.kt)("p",null,"b) Soon you\u2019ll almost immediately see that GitHub is automatically running checks and merging your branch into main!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image showing PR is ready to merge",src:a(86592).Z,width:"512",height:"86"}),"\n",(0,n.kt)("img",{alt:"Image showing successful merge",src:a(69075).Z,width:"907",height:"100"})),(0,n.kt)("h2",{id:"congrats-you-have-successfully-merged-your-pr-"},"CONGRATS! YOU HAVE SUCCESSFULLY MERGED YOUR PR! \ud83c\udf8a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 12"),": After merging your PR, go back to the Jira board and move your ticket from the \u201cIn Review\u201d column to the \u201cReady for Acceptance\u201d column."))}m.isMDXComponent=!0},19025:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/categories_side_panel-21368688d9fbf6ba876e2f67113e635c.png"},46002:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/compare_pr-ee5133d89c8c2a82043bc9ebddeb281e.png"},74509:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/happo_diffs-f27ee537bed51dee811592b4dbd1e62a.png"},59723:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/labels-209686e28c827d9e919ae626988ae3d9.png"},64047:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/merge-a3d8845181c76e2ab8a46476ca05f4dc.png"},50684:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/merge_conflicts-1cd5de841356f7d9165d41de46c44740.png"},69075:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/merge_success-7979b13559b20e0f1ad48a3f781c0636.png"},96947:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/mergify-28945beb142589f8bea851ed58ba93c0.png"},43973:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/open_pr-d54292eff05e6949913e6590edeca261.png"},86592:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ready_to_merge-93769515a5c5d037ae3e1b11d582b02c.png"},67380:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/reviewers-c78116db544b4e02bd466801d09df92b.png"}}]);