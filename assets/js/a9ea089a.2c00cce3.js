"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9196],{89589:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(87462),s=(o(67294),o(3905));o(95657);const a={sidebar_position:5},i="Running Locust from AWS",l={unversionedId:"tools/locust/running-locust-from-aws",id:"tools/locust/running-locust-from-aws",title:"Running Locust from AWS",description:"As of this writing (2022-01-25), the deployed locust is set up to run the prime load tests only.",source:"@site/docs/tools/locust/running-locust-from-aws.md",sourceDirName:"tools/locust",slug:"/tools/locust/running-locust-from-aws",permalink:"/mymove-docs/docs/tools/locust/running-locust-from-aws",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/locust/running-locust-from-aws.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"toolsSidebar",previous:{title:"Local Load Test Setup",permalink:"/mymove-docs/docs/tools/locust/local-load-test-setup"},next:{title:"Working With Load Tests",permalink:"/mymove-docs/docs/tools/locust/working-with-load-tests"}},r={},p=[{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,s.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"running-locust-from-aws"},"Running Locust from AWS"),(0,s.kt)("admonition",{title:"Note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"As of this writing (2022-01-25), the deployed locust is set up to run the prime load tests only.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Run the port-forwarding script:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"aws-vault exec $AWS_PROFILE -- ./scripts/aws-session-port-forward.py\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You can then visit ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000")," to see the ",(0,s.kt)("inlineCode",{parentName:"p"},"locust")," web UI for the deployed version of ",(0,s.kt)("inlineCode",{parentName:"p"},"locust"),"."))),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"You may see the following errors:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"SessionManagerPlugin is not found"),". If you do please follow the link and the instructions to install the Session\nManager plugin or reference\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-macos"},"the Session Manager plugin installation guide"),"\ndirectly.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"An error mentioning ",(0,s.kt)("inlineCode",{parentName:"p"},"credentials missing"),"."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If there is an additional reference to a specific profile. If this is the case please add the corresponding entry\nfrom ",(0,s.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/wiki/spaces/MT/pages/1348927493/AWS+GovCloud+Config+Templates"},"this AWS config template"),"\nto your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.aws/config")," file.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you only see an error mentioning ",(0,s.kt)("inlineCode",{parentName:"p"},"credentials missing")," without an additional reference to a specific profile,\nplease ensure that your $AWS_PROFILE variable is not blank. This can be set by running:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"direnv allow\n")))))))}c.isMDXComponent=!0}}]);