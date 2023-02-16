"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6922],{95361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));n(8209);const o={sidebar_position:1},r="Use, Purpose, and Documentation",i={unversionedId:"tools/dockerfile/dockerfile-use,-purpose,-and-documentation",id:"tools/dockerfile/dockerfile-use,-purpose,-and-documentation",title:"Use, Purpose, and Documentation",description:"This document lists all the current Dockerfiles we use, their base images, and what user that image uses. It also notes why that image uses the user account it uses.",source:"@site/docs/tools/dockerfile/dockerfile-use,-purpose,-and-documentation.md",sourceDirName:"tools/dockerfile",slug:"/tools/dockerfile/dockerfile-use,-purpose,-and-documentation",permalink:"/mymove-docs/docs/tools/dockerfile/dockerfile-use,-purpose,-and-documentation",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/dockerfile/dockerfile-use,-purpose,-and-documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"Integration Test Failures",permalink:"/mymove-docs/docs/tools/cicd/integration_test_failures"},next:{title:"Using Docusaurus",permalink:"/mymove-docs/docs/tools/docusaurus/"}},s={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-purpose-and-documentation"},"Use, Purpose, and Documentation"),(0,l.kt)("p",null,"This document lists all the current Dockerfiles we use, their base images, and what user that image uses. It also notes why that image uses the user account it uses."),(0,l.kt)("p",null,"NOTE for ",(0,l.kt)("inlineCode",{parentName:"p"},"gcr.io/distroless/base:latest")," based images these by default run with ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," locally. However, we have updated our ECS task definition (See code ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/main/cmd/ecs-deploy/task_def.go#L581"},"here"),") to override that to run with a UID of ",(0,l.kt)("inlineCode",{parentName:"p"},"1042")," and not ",(0,l.kt)("inlineCode",{parentName:"p"},"root"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"UID:0"),"."),(0,l.kt)("p",null,"All docker images that are deployed must not use ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," as their user inside the container to meet Docker STIG requirements. We've updated all Dockerfiles for deployed containers to not use root. We chose not to do this as well on Dockerfiles for images that are not deployed but only used on local laptops or in our CircleCI pipeline for development and testing."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dockerfile"),(0,l.kt)("th",{parentName:"tr",align:null},"base image"),(0,l.kt)("th",{parentName:"tr",align:null},"user"),(0,l.kt)("th",{parentName:"tr",align:null},"Where it's used"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile*"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"When running the application when deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.local"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally)"),(0,l.kt)("td",{parentName:"tr",align:null},"When running the application locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.migrations*"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running migrations when deploying the app, staging, experimental, and production")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.migrations_local"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running migrations locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cypress/Dockerfile.cypress"),(0,l.kt)("td",{parentName:"tr",align:null},"cypress/base:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running cypress tests locally and in CircleCI only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.storybook"),(0,l.kt)("td",{parentName:"tr",align:null},"milmove/circleci-docker:milmove-app-browsers-",(0,l.kt)("inlineCode",{parentName:"td"},"<SHA>")),(0,l.kt)("td",{parentName:"tr",align:null},"circleci"),(0,l.kt)("td",{parentName:"tr",align:null},"Used when running storybook tests in CircleCI only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.storybook_local"),(0,l.kt)("td",{parentName:"tr",align:null},"milmove/circleci-docker:milmove-app-browsers-",(0,l.kt)("inlineCode",{parentName:"td"},"<SHA>")),(0,l.kt)("td",{parentName:"tr",align:null},"circleci"),(0,l.kt)("td",{parentName:"tr",align:null},"Used when running ",(0,l.kt)("inlineCode",{parentName:"td"},"make storybook_tests")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"make storybook_docker")," locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tasks*"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (CircleCI / Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"ECS Scheduled Tasks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tasks_local"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (CircleCI / Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"ECS Scheduled Tasks local only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tools"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Container for tools used in e2e testing on CircleCI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tools_local"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Container for tools used in e2e testing on CircleCI local only")))),(0,l.kt)("p",null,"*"," Images that are used in deployed environments outside of local laptops or build/test pipeline in CircleCI"))}m.isMDXComponent=!0}}]);