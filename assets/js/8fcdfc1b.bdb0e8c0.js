"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4884],{28156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));n(95657);const r={title:"0048 Use a consistent file structure for front-end code"},a="Use a consistent file structure for front-end code",s={unversionedId:"adrs/frontend-file-org",id:"adrs/frontend-file-org",title:"0048 Use a consistent file structure for front-end code",description:"Currently, the front end code is in a state of mid-reorganization from one file structure to another. However, without a specific plan in place, this reorganization risks losing momentum, and over time could result in the code being indefinitely split between two different file structures. This makes future work on this codebase more confusing and increases the risk for mistakes to be made. Therefore, the purpose of this ADR is to establish a plan and certain guidelines for moving the reorganization forward, hopefully at an increased pace.",source:"@site/docs/adrs/0048-frontend-file-org.md",sourceDirName:"adrs",slug:"/adrs/frontend-file-org",permalink:"/mymove-docs/docs/adrs/frontend-file-org",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0048-frontend-file-org.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{title:"0048 Use a consistent file structure for front-end code"},sidebar:"adrsSidebar",previous:{title:"0047 Use CircleCI to build only Pull Requests and master",permalink:"/mymove-docs/docs/adrs/build-only-pull-requests-in-circleci"},next:{title:"0049 Do not update child records using parent's E-tag",permalink:"/mymove-docs/docs/adrs/etag-for-child-updates"}},l={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Move everything into the new structure at once",id:"move-everything-into-the-new-structure-at-once",level:3},{value:"Do nothing, continue work in two different structures",id:"do-nothing-continue-work-in-two-different-structures",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-a-consistent-file-structure-for-front-end-code"},"Use a consistent file structure for front-end code"),(0,i.kt)("p",null,"Currently, the front end code is in a state of mid-reorganization from one file structure to another. However, without a specific plan in place, this reorganization risks losing momentum, and over time could result in the code being indefinitely split between two different file structures. This makes future work on this codebase more confusing and increases the risk for mistakes to be made. Therefore, the purpose of this ADR is to establish a plan and certain guidelines for moving the reorganization forward, hopefully at an increased pace."),(0,i.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actively move code into the new structure as it is worked on"),(0,i.kt)("li",{parentName:"ul"},"Move everything into the new structure at once"),(0,i.kt)("li",{parentName:"ul"},"Do nothing, continue work in two different structures")),(0,i.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Chosen Alternative:")," Actively move code into the new structure as it is worked on"),(0,i.kt)("p",null,"For the purpose of distinguishing between the two file structures, I will use ",(0,i.kt)("strong",{parentName:"p"},'"legacy"')," to mean the previous structure (in which all files were located in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/shared")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"src/scenes"),"), and ",(0,i.kt)("strong",{parentName:"p"},'"new"')," to mean the new structure."),(0,i.kt)("p",null,"For reference, the new file structure is described ",(0,i.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/contributing/frontend/frontend#file-layout--naming"},"here"),"."),(0,i.kt)("p",null,"I am proposing we start operating under the following guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any new front-end files should be created in one of the new directories.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are creating a new file and feel that it doesn't fit in one of the existing new directories, ",(0,i.kt)("em",{parentName:"li"},"or")," you aren't sure where it belongs, ask in #prac-frontend."))),(0,i.kt)("li",{parentName:"ul"},"If you are making significant changes to a file in a legacy directory, take the opportunity to move it into one of the new directories.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For moving files, usually you can do a global search of the codebase to find where it is imported to other files, searching by the filename and/or its named exports. Some IDEs (including VSCode) will also offer to automatically update import paths for you."),(0,i.kt)("li",{parentName:"ul"},"While this can be a delicate process, it is also usually easily tested by building the application and viewing some implementation of the code that has been moved. The build process and Jest tests will both throw an error if a missing file is referenced somewhere. If you don't feel comfortable doing this though, or if you would like help, ask in #prac-frontend."))),(0,i.kt)("li",{parentName:"ul"},"When creating or editing React components, they should be structured so they are encapsulated in their own directory, and contain all related files (the component source code, tests, stories, CSS, etc.).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, this would be the file structure for a component called ",(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent.jsx")," (component source code)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent.test.jsx")," (unit tests, will be run in Jest)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent.stories.jsx")," (Storybook stories, UI test cases)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.jsx")," (optional - used to connect component code with required providers such as Redux or the ",(0,i.kt)("inlineCode",{parentName:"li"},"withRouter")," HOC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MyComponent.module.scss")," (optional, SCSS module code related to the component)"))))),(0,i.kt)("li",{parentName:"ul"},"Component files should be PascalCased (following the naming convention of the exported component itself)."),(0,i.kt)("li",{parentName:"ul"},"Some components may composed of multiple, smaller components. Sometimes it will make sense for all of these components to be defined in the same file, or for them to be in multiple files within the one component directory (especially if they are only ever used within that one component. That's okay too!"),(0,i.kt)("li",{parentName:"ul"},"These are guidelines, not strict rules, and there may be exceptions. Use your best judgment and always ask in #prac-frontend if you aren't sure or would like another opinion!"))),(0,i.kt)("li",{parentName:"ul"},"Front-end files that are ",(0,i.kt)("em",{parentName:"li"},"not")," React components (such as JS helpers, utilities, constants, etc.) can just be organized within a top-level directory (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"src/helpers"),"), and should be camelCased."),(0,i.kt)("li",{parentName:"ul"},"Most of the time, all JS files should also have a corresponding test file.")),(0,i.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,i.kt)("h3",{id:"move-everything-into-the-new-structure-at-once"},"Move everything into the new structure at once"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," All of the frontend code will be organized according to the new file structure right away"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," We will no longer be in between two ways of organizing files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," Such a significant change to the code would be difficult to resolve promptly, and would be prone to conflicts and introducing bugs")),(0,i.kt)("h3",{id:"do-nothing-continue-work-in-two-different-structures"},"Do nothing, continue work in two different structures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," No changes needed to our current process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," It is unclear to the team where new files should be created, and when to move existing files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," It may become more and more confusing as time passes and team members lose context for this work")))}m.isMDXComponent=!0}}]);