"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3064],{34015:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));o(95657);const l={sidebar_position:4},s="Local Load Test Setup",r={unversionedId:"tools/locust/local-load-test-setup",id:"tools/locust/local-load-test-setup",title:"Local Load Test Setup",description:"This will cover local setup necessary to run locust locally. The instructions vary depending on which server you are",source:"@site/docs/tools/locust/local-load-test-setup.md",sourceDirName:"tools/locust",slug:"/tools/locust/local-load-test-setup",permalink:"/mymove-docs/docs/tools/locust/local-load-test-setup",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/locust/local-load-test-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolsSidebar",previous:{title:"Running Locust Locally",permalink:"/mymove-docs/docs/tools/locust/running-locust-locally"},next:{title:"Running Locust from AWS",permalink:"/mymove-docs/docs/tools/locust/running-locust-from-aws"}},i={},u=[{value:"Setup To Run Against A Local MyMove Server",id:"setup-to-run-against-a-local-mymove-server",level:2},{value:"Local MyMove Server",id:"local-mymove-server",level:3},{value:"Local Server Data",id:"local-server-data",level:3},{value:"Setup To Run Against The Load Test Environment MyMove Server",id:"setup-to-run-against-the-load-test-environment-mymove-server",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"local-load-test-setup"},"Local Load Test Setup"),(0,n.kt)("p",null,"This will cover local setup necessary to run ",(0,n.kt)("inlineCode",{parentName:"p"},"locust")," locally. The instructions vary depending on which server you are\ntargeting."),(0,n.kt)("h2",{id:"setup-to-run-against-a-local-mymove-server"},"Setup To Run Against A Local MyMove Server"),(0,n.kt)("h3",{id:"local-mymove-server"},"Local MyMove Server"),(0,n.kt)("p",null,"You will need to check out and set up the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove"},"MilMove")," project."),(0,n.kt)("p",null,"Follow the setup instructions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," README, all the way through running the local server (",(0,n.kt)("inlineCode",{parentName:"p"},"make server_run"),").\nYou don't need to run the user interface in order to run load tests (so you can skip the ",(0,n.kt)("inlineCode",{parentName:"p"},"make client_run")," step), unless\nyou would like to be able to log in and look at data using the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," UI."),(0,n.kt)("h3",{id:"local-server-data"},"Local Server Data"),(0,n.kt)("p",null,"Our goal is to eventually have all the data we need set up by the load tests, but until that's done, you should populate\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," server with data using this command (in the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," repo directory):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make db_dev_e2e_populate  ## populates the development database with test data\n")),(0,n.kt)("h2",{id:"setup-to-run-against-the-load-test-environment-mymove-server"},"Setup To Run Against The Load Test Environment MyMove Server"),(0,n.kt)("p",null,"To load test against the API in the load test environment, you will need to install and set up ",(0,n.kt)("inlineCode",{parentName:"p"},"direnv"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"chamber"),", and\n",(0,n.kt)("inlineCode",{parentName:"p"},"aws-vault"),". If you have already set up these tools in order to run the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," project, you do not need to repeat\nthese steps. Otherwise, please follow the instructions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"mymove")," repo to complete this setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove#setup-aws-services-optional"},"Setup: AWS Services")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove#setup-direnv"},"Setup: ",(0,n.kt)("inlineCode",{parentName:"a"},"direnv")," and ",(0,n.kt)("inlineCode",{parentName:"a"},"chamber")))),(0,n.kt)("p",null,"Now in the load test repo, run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cp .envrc.chamber.template .envrc.chamber\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"direnv allow\n")),(0,n.kt)("p",null,"Once you have loaded the secrets from ",(0,n.kt)("inlineCode",{parentName:"p"},"chamber"),", which will include the ",(0,n.kt)("inlineCode",{parentName:"p"},"dp3")," certificate and private key, you may run\nyour load tests using ",(0,n.kt)("inlineCode",{parentName:"p"},"dp3")," as the host value."))}c.isMDXComponent=!0}}]);