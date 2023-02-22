"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9851],{6883:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));i(95657);const a={title:"0054 Use CSS to highlight unfinished features"},s="Use CSS to highlight unfinished features",l={unversionedId:"adrs/use-CSS-to-highlight-unfinished-features",id:"adrs/use-CSS-to-highlight-unfinished-features",title:"0054 Use CSS to highlight unfinished features",description:"For the MilMove demo on 8/4/2020, the decision was made to use a feature flag to conceal unfinished work, in order to reduce confusion on the part of the client as to what work was complete vs. not yet finished. The MilMove project encountered a similar issue in 2018 and decided to use a low-lift solution of highlighting unfinished work with a yellow background via a CSS class applied to UI elements. This decision resulted in increasing transparency around feature status, lowering confusion, and helped improve overall client communication around project progress.",source:"@site/docs/adrs/0054-use-CSS-to-highlight-unfinished-features.md",sourceDirName:"adrs",slug:"/adrs/use-CSS-to-highlight-unfinished-features",permalink:"/mymove-docs/docs/adrs/use-CSS-to-highlight-unfinished-features",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0054-use-CSS-to-highlight-unfinished-features.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{title:"0054 Use CSS to highlight unfinished features"},sidebar:"adrsSidebar",previous:{title:"0053 Use React Query for Office App API interactions",permalink:"/mymove-docs/docs/adrs/use-react-query-office-app"},next:{title:"0055 Consolidate moves and move task orders into one database table",permalink:"/mymove-docs/docs/adrs/consolidate-moves-and-mtos"}},r={},u=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives  optional ",id:"pros-and-cons-of-the-alternatives--optional-",level:2},{value:"Continue as is (i.e. not highlighting unfinished features)",id:"continue-as-is-ie-not-highlighting-unfinished-features",level:3},{value:"* Use feature flags to conceal unfinished work from the client",id:"-use-feature-flags-to-conceal-unfinished-work-from-the-client",level:3},{value:"Use CSS to highlight unfinished features",id:"use-css-to-highlight-unfinished-features-1",level:3}],d={toc:u};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-css-to-highlight-unfinished-features"},"Use CSS to highlight unfinished features"),(0,o.kt)("p",null,"For the MilMove demo on 8/4/2020, the decision was made to use a feature flag to conceal unfinished work, in order to reduce confusion on the part of the client as to what work was complete vs. not yet finished. The MilMove project encountered a similar issue in 2018 and decided to use a low-lift solution of highlighting unfinished work with a yellow background via a CSS class applied to UI elements. This decision resulted in increasing transparency around feature status, lowering confusion, and helped improve overall client communication around project progress."),(0,o.kt)("p",null,'Since client users and other folks are being set up with access to the staging environment and being instructed to report bugs, there is another use case besides demos for highlighting incomplete features. Using a CSS class would provide a clear visual cue for which features should be expected to work fully, vs. which features are still being worked on. This would help avoid the additional overhead on the part of the client as well as Truss, of "bugs" being reported, verified, triaged, as well as all the ensuing communication surrounding the issues.'),(0,o.kt)("p",null,"Decision drivers include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The amount of time and cost of implementation, maintenance, removal, and surrounding cognitive overhead"),(0,o.kt)("li",{parentName:"ul"},"Aiding in client understanding of work status to decrease potential confusion or false expectation")),(0,o.kt)("p",null,"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all incomplete features are already behind feature flags specific to environment, so everything discussed here is based on the assumption that neither the features in question nor the CSS class is visible in production environments."),(0,o.kt)("li",{parentName:"ul"},'by "incomplete" or "unfinished" work, I am referring to the current state of how work is defined and planned across all the teams of MilMove, which seems to be a mixture of ',(0,o.kt)("a",{parentName:"li",href:"https://agility.im/frequent-agile-question/difference-incremental-iterative-development/"},"incremental and iterative development"),". Examples include UI form element input data not yet submitting to the API, displaying a minimum amount of fields for an object rather than ALL expected fields, yet-to-be determined features (e.g. handling entitlement calculation on HHG's) and their consequent display (e.g. not showing entitlement on the HHG Review page), etc. These are a couple of examples that come to mind, but I am confident that I can rustle up multiple examples across the project, if need be.")),(0,o.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Continue as is (i.e. not highlighting unfinished features)"),(0,o.kt)("li",{parentName:"ul"},"Use feature flags to conceal unfinished work from the client"),(0,o.kt)("li",{parentName:"ul"},"Use CSS to highlight unfinished features")),(0,o.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chosen Alternative: TBD")),(0,o.kt)("h2",{id:"pros-and-cons-of-the-alternatives--optional-"},"Pros and Cons of the Alternatives "),(0,o.kt)("h3",{id:"continue-as-is-ie-not-highlighting-unfinished-features"},"Continue as is (i.e. not highlighting unfinished features)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Very low effort and cost"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Incomplete work will not be clearly communicated to the client when interacting with the app, potentially leading to confusion and false expectations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Incomplete work will not be clearly communicated to the client during demos, squelching the opportunity for clarifying questions or course-correcting false assumptions for road map discussions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-"),' For users reporting bugs on staging, there is a higher risk that known "bugs" will be reported to the MilMove team, adding to extra work and communication overhead in sorting through what are actually viable bugs.')),(0,o.kt)("h3",{id:"-use-feature-flags-to-conceal-unfinished-work-from-the-client"},"*"," Use feature flags to conceal unfinished work from the client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Higher effort/cost than applying a CSS class - adding additional feature flags takes roughly 1.5 engineering days to implement vs. 1 hour for applying a CSS class. Additional overhead for removing flags than CSS class applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," More time/effort to communicate how to set feature flags to the entire team, as well as to the client when interacting with the staging environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," A feature flag only hides features, which does not aid in clarifying what has been started and yet to be done. If the client cannot see which features have been started, there are no opportunities to ask clarifying question or help establish appropriate expectations.")),(0,o.kt)("h3",{id:"use-css-to-highlight-unfinished-features-1"},"Use CSS to highlight unfinished features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Minimal effort/cost compared to using feature flags - usually single line additions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Lower overhead in communication to the team and client - users don't need instructions for turning on/off flags, only that a visual cue highlights not-yet-complete work for added clarity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Incomplete work will be clearly communicated to the client during demo and when interacting with the app, avoiding confusion and false expectations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Allows for the opportunity for clarifying questions to be asked during demo around specific features, aiding in client understanding of work status."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+"),' For users reporting bugs on staging, there should be a lower amount of false "bugs" reported, given that it should be clear to users what is complete vs. not.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," Avoids concealing work from the client. If less confusion and higher trust is the desired outcome, highlighting rather than concealing incomplete work seems to bring us closer to that goal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," Takes more time than doing nothing (i.e. continuing as is).")))}h.isMDXComponent=!0}}]);