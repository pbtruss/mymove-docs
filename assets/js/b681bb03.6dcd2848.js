"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2776],{56289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));o(95657);const i={sidebar_position:8},r="How to revert a change",d={unversionedId:"backend/guides/how-to/revert-a-change",id:"backend/guides/how-to/revert-a-change",title:"How to revert a change",description:"On Staging app",source:"@site/docs/backend/guides/how-to/revert-a-change.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/revert-a-change",permalink:"/mymove-docs/docs/backend/guides/how-to/revert-a-change",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/revert-a-change.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"backendSidebar",previous:{title:"How to upgrade Node",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-node"},next:{title:"How to Soft Delete",permalink:"/mymove-docs/docs/backend/guides/how-to/soft-delete"}},s={},c=[{value:"On Staging app",id:"on-staging-app",level:2},{value:"On Production app",id:"on-production-app",level:2}],l={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-revert-a-change"},"How to revert a change"),(0,n.kt)("h2",{id:"on-staging-app"},"On Staging app"),(0,n.kt)("p",null,"Go to Github and find the pr with the change you'd like to revert. Click the revert button. This will generate a pr for you that reverts the change. You'll still need a reviewer to approve the pr."),(0,n.kt)("p",null,"Note that this will only revert code changes (and not migration changes), so you'll need to consider if reverting the code, but not the db migrations will cause any problems."),(0,n.kt)("p",null,"Once CI passes, it should automatically deploy to staging."),(0,n.kt)("h2",{id:"on-production-app"},"On Production app"),(0,n.kt)("p",null,"Still to be discovered..."))}p.isMDXComponent=!0}}]);