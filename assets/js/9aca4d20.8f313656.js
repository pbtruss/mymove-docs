"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8274],{22213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));a(16758);const i={sidebar_position:4},r="How we use React Query",s={unversionedId:"frontend/guides/how-we-use-react-query",id:"frontend/guides/how-we-use-react-query",title:"How we use React Query",description:"The MilMove project uses React Query v2 for the Frontend applications.",source:"@site/docs/frontend/guides/how-we-use-react-query.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/how-we-use-react-query",permalink:"/mymove-docs/docs/frontend/guides/how-we-use-react-query",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/guides/how-we-use-react-query.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"frontendSidebar",previous:{title:"How to display dates and times",permalink:"/mymove-docs/docs/frontend/guides/display-dates-and-times"},next:{title:"How To Store Data in Redux",permalink:"/mymove-docs/docs/frontend/guides/how-to-store-api-data-on-the-front-end"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"<code>useQuery</code> Basics",id:"usequery-basics",level:2},{value:"Mutations (Updates)",id:"mutations-updates",level:2},{value:"Query invalidation",id:"query-invalidation",level:2},{value:"Query cache",id:"query-cache",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-we-use-react-query"},"How we use React Query"),(0,n.kt)("admonition",{title:"Version information",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The MilMove project uses ",(0,n.kt)("strong",{parentName:"p"},"React Query v2")," for the Frontend applications.")),(0,n.kt)("admonition",{title:"Ask in Slack",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"If you have any questions, ask in ",(0,n.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CTQQJD3G8"},"#prac-frontend")," /\n",(0,n.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF"},"#prac-engineering")," for help.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://react-query-v2.tanstack.com/docs"},"Read more about React Query in the official Overview\ndocumentation"),". This guide is a brief primer and discusses\nbest practices for the MilMove project. Instead of being comprehensive, this\ndocumentation strives to be a starting point for the official documentation with\nreferences to how to find the particular React Query functions within the\nMilMove codebase using the official GitHub search functionality. This search\nfunctionality can also be achieved locally using command-line tools such as\n",(0,n.kt)("inlineCode",{parentName:"p"},"grep")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ripgrep"),"."),(0,n.kt)("h2",{id:"usequery-basics"},(0,n.kt)("inlineCode",{parentName:"h2"},"useQuery")," Basics"),(0,n.kt)("admonition",{title:"Official documentation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://react-query-v2.tanstack.com/docs/guides/queries"},"Read the official documentation on this here"),".")),(0,n.kt)("p",null,"On the MilMove project we setup all of our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22useQuery%28%22"},"custom React Query hooks in the same\nfile"),", with the exceptions of Mutations. For Mutations\nwe create these on a per-page or per-Component basis."),(0,n.kt)("h2",{id:"mutations-updates"},"Mutations (Updates)"),(0,n.kt)("admonition",{title:"Official documentation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://react-query-v2.tanstack.com/docs/guides/mutations"},"Read the official documentation on this here"),".")),(0,n.kt)("p",null,"On the MilMove project, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22useMutation%28%22"},"we create Mutations for specific Components or\nPages"),". The reason for that is because these Mutations\nhave callback functions that are specific to user actions. This allows us to do\nspecific Component or Page actions on Success or Error related to the data being\nshown on that Component or Page."),(0,n.kt)("h2",{id:"query-invalidation"},"Query invalidation"),(0,n.kt)("admonition",{title:"Official documentation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://react-query-v2.tanstack.com/docs/guides/query-invalidation"},"Read the official documentation on this here"),".")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/search?l=JavaScript&q=%22invalidateQueries%28%22&type="},"We use query invalidation to fetch new data")," from\nthe APIs that ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," fetches from.  Only use this when you want to fetch new\ndata related to the Entity that you're updating. Make sure you also fetch new\ndata for related Entities as well."),(0,n.kt)("h3",{id:"query-cache"},"Query cache"),(0,n.kt)("admonition",{title:"Official documentation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://react-query-v2.tanstack.com/docs/guides/caching"},"Read the official documentation on this here"),".")),(0,n.kt)("admonition",{title:"About Query Cache",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Currently, we don't use Query Cache for React Query. We do have it for Redux.\nBut we have the ability to do Query Cache for the React Query in the future when\nwe get real-user data.")))}p.isMDXComponent=!0}}]);