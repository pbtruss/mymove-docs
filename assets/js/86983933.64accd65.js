"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9828],{66241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=t(87462),s=(t(67294),t(3905)),l=t(95657);const i={sidebar_position:2},a="Running Load Tests",u={unversionedId:"tools/locust/running-load-tests",id:"tools/locust/running-load-tests",title:"Running Load Tests",description:"There are several ways you can run load tests. You can run locust locally or use the deployed version (on AWS). You",source:"@site/docs/tools/locust/running-load-tests.md",sourceDirName:"tools/locust",slug:"/tools/locust/running-load-tests",permalink:"/mymove-docs/docs/tools/locust/running-load-tests",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/locust/running-load-tests.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolsSidebar",previous:{title:"Locust",permalink:"/mymove-docs/docs/tools/locust/"},next:{title:"Running Locust Locally",permalink:"/mymove-docs/docs/tools/locust/running-locust-locally"}},r={},c=[{value:"Visualization of possible Locust combinations",id:"visualization-of-possible-locust-combinations",level:3},{value:"UI vs Command Line",id:"ui-vs-command-line",level:2},{value:"Setup and Running",id:"setup-and-running",level:2}],d={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"running-load-tests"},"Running Load Tests"),(0,s.kt)("p",null,"There are several ways you can run load tests. You can run ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," locally or use the deployed version (on AWS). You\ncan also use a local ",(0,s.kt)("inlineCode",{parentName:"p"},"mymove")," server or the one deployed in the load test environment (on ",(0,s.kt)("inlineCode",{parentName:"p"},"loadtest.dp3.us"),"). One thing\nto note is that you can't point the deployed ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," instance at a local ",(0,s.kt)("inlineCode",{parentName:"p"},"mymove")," server."),(0,s.kt)("h3",{id:"visualization-of-possible-locust-combinations"},"Visualization of possible Locust combinations"),(0,s.kt)(l.G,{chart:"flowchart RL\n    subgraph Environments\n        subgraph Local\n            direction TB\n            l_customer[(Customer App)]\n            l_office[(Office App)]\n            l_prime[(Prime API)]\n        end\n\n        subgraph AWS\n            direction TB\n            lt_customer[(Customer App)]\n            lt_office[(Office App)]\n            lt_prime[(Prime API)]\n        end\n    end\n\n    l_locust([Local Locust instance])\n    aws_locust([AWS-deployed Locust instance])\n\n    l_locust--\x3eLocal\n    l_locust--\x3eAWS\n\n    aws_locust--\x3eAWS",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"ui-vs-command-line"},"UI vs Command Line"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"locust")," can be run either via the command line or through the web UI provided by ",(0,s.kt)("inlineCode",{parentName:"p"},"locust"),"."),(0,s.kt)("p",null,"If you run ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," locally, you have the option of using either, but if you run ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," from AWS, you will only have\nthe option of running with the UI."),(0,s.kt)("p",null,"The instructions in these docs will cover how to get ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," started (with or without the UI), but won't cover much\nabout the UI since the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.locust.io/en/stable/quickstart.html#locust-s-web-interface"},"locust web interface docs"),"\ncover a decent amount of helpful information."),(0,s.kt)("h2",{id:"setup-and-running"},"Setup and Running"),(0,s.kt)("p",null,"There are different instructions based on where ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," is running from so follow the instructions below based on what\nyou're trying to do:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./running-locust-locally"},"Running Locust Locally"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"This is regardless of whether you are targeting either a local or the load test env ",(0,s.kt)("inlineCode",{parentName:"li"},"mymove")," server"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mymove-docs/docs/tools/locust/running-locust-from-aws"},"Running Locust From AWS"))))}p.isMDXComponent=!0}}]);