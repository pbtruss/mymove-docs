"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[438],{48432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(87462),i=(t(67294),t(3905));t(95657);const a={sidebar_position:2},l="Common Errors and Solutions",r={unversionedId:"backend/setup/common-errors-and-solutions",id:"backend/setup/common-errors-and-solutions",title:"Common Errors and Solutions",description:"Having trouble running mymove locally? This page collects common errors and their solutions.",source:"@site/docs/backend/setup/common-errors-and-solutions.md",sourceDirName:"backend/setup",slug:"/backend/setup/common-errors-and-solutions",permalink:"/mymove-docs/docs/backend/setup/common-errors-and-solutions",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/setup/common-errors-and-solutions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"backendSidebar",previous:{title:"Configure Postico or TablePlus to connect to mymove DB",permalink:"/mymove-docs/docs/backend/setup/configure-postico-or-tableplus-to-connect-to-mymove-db"},next:{title:"How To Backup and Restore the Development Database",permalink:"/mymove-docs/docs/backend/setup/backup-and-restore-dev-database"}},s={},d=[{value:"Migrations",id:"migrations",level:2},{value:"Invalid migration path",id:"invalid-migration-path",level:3},{value:"Solution",id:"solution",level:4},{value:"Pre-Commit Hook Failures",id:"pre-commit-hook-failures",level:2},{value:"Yarn",id:"yarn",level:2},{value:"Engine &quot;node&quot; is incompatible with this module",id:"engine-node-is-incompatible-with-this-module",level:3},{value:"Solution",id:"solution-1",level:4},{value:"Compiling",id:"compiling",level:2},{value:"The client doesn&#39;t reflect my new changes or will not build locally",id:"the-client-doesnt-reflect-my-new-changes-or-will-not-build-locally",level:2},{value:"Solution",id:"solution-2",level:4},{value:"Webpack is failing on the client build step unable to order dependencies in the bundle",id:"webpack-is-failing-on-the-client-build-step-unable-to-order-dependencies-in-the-bundle",level:2}],u={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-errors-and-solutions"},"Common Errors and Solutions"),(0,i.kt)("p",null,"Having trouble running mymove locally? This page collects common errors and their solutions."),(0,i.kt)("h2",{id:"migrations"},"Migrations"),(0,i.kt)("h3",{id:"invalid-migration-path"},"Invalid migration path"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'2020-08-05T10:41:00.589-0500    INFO    milmove/migrate.go:61   checking migration config   {"git_branch": "main", "git_commit": "c42a3ef9a458e5b9de94fa3507b6c2f43b209856"}\npanic: invalid configuration: Expected migrations//secure to be a path in the filesystem: invalid migration path "migrations//secure"\n')),(0,i.kt)("h4",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv allow")),(0,i.kt)("h2",{id:"pre-commit-hook-failures"},"Pre-Commit Hook Failures"),(0,i.kt)("p",null,"These can happen when committing your code, or when manually running the ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-commit install-hooks")," command. Check out this doc for all the errors and fixes: ",(0,i.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/help/Troubleshoot-Precommit-Hook-Failures/"},"Troubleshoot Precommit Hook Failures")),(0,i.kt)("h2",{id:"yarn"},"Yarn"),(0,i.kt)("h3",{id:"engine-node-is-incompatible-with-this-module"},'Engine "node" is incompatible with this module'),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),", you may see an error similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'The engine "node" is incompatible with this module. Expected version "12.21.0". Got [another version].\n')),(0,i.kt)("h4",{id:"solution-1"},"Solution"),(0,i.kt)("p",null,"The project uses node version ",(0,i.kt)("inlineCode",{parentName:"p"},"12.21.0"),". Use ",(0,i.kt)("inlineCode",{parentName:"p"},"nodenv")," to manage your node versions and easily switch between them."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"nodenv"),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nodenv/nodenv"},"https://github.com/nodenv/nodenv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"brew install nodenv")))),(0,i.kt)("li",{parentName:"ul"},"Install the correct version of Node",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodenv install 12.21.0")))),(0,i.kt)("li",{parentName:"ul"},"Set version of Node",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodenv local 12.21.0"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Make sure you've appended ",(0,i.kt)("inlineCode",{parentName:"p"},'eval "$(nodenv init -)"')," to your shell rc. Read through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodenv/nodenv#installation"},"official docs")," when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"nodenv"),"."),(0,i.kt)("h2",{id:"compiling"},"Compiling"),(0,i.kt)("h2",{id:"the-client-doesnt-reflect-my-new-changes-or-will-not-build-locally"},"The client doesn't reflect my new changes or will not build locally"),(0,i.kt)("p",null,"The client server is detecting a build problem. You fix it, but it does not see the new code and the problem remains. Sometimes, no new build is triggered. "),(0,i.kt)("p",null,'This can manifest in a couple of ways, appearing to be a code problem or potential a missing npm package and various other "weird" symptoms. Sometimes it occurs on branch switching without shutting down the server first.'),(0,i.kt)("p",null,"Troubleshooting steps may include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Restarting the server"),(0,i.kt)("li",{parentName:"ul"},"Restarting your code editor"),(0,i.kt)("li",{parentName:"ul"},"Migrating the database")),(0,i.kt)("h4",{id:"solution-2"},"Solution"),(0,i.kt)("p",null,"Trigger a fresh build. To do so, make a change to the code. This may mean inserting a console log, shutting down and switching branches, creating an intentional syntax error, basically anything that will trigger a build."),(0,i.kt)("h2",{id:"webpack-is-failing-on-the-client-build-step-unable-to-order-dependencies-in-the-bundle"},"Webpack is failing on the client build step unable to order dependencies in the bundle"),(0,i.kt)("p",null,"As Webpack is trying to bundle the frontend javascript and css assets it can run into a problem of circular dependency where it can't deterministically split how some imports should be ordered."),(0,i.kt)("p",null,"You may see an error message stating ",(0,i.kt)("inlineCode",{parentName:"p"},"Conflicting order")," from a plugin such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"mini-css-extract-plugin")," and names of css or js files that it is failing on."),(0,i.kt)("p",null,"The way to resolve these errors is to figure out what the common parents of these components or files are and where they are used.  You will likely need to reorder the import statements of these resources in a consistent fashion.  Because we are using create-react-app we can't easily suppress this warning in a webpack config."),(0,i.kt)("p",null,"For more details you can consult this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/5372"},"GitHub issue"),"."))}m.isMDXComponent=!0}}]);