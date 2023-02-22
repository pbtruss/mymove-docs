"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5651],{13737:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(95657);const s={sidebar_position:4},i="How to Setup Postman to make Mutual TLS API Calls",r={unversionedId:"tools/postman/setup-postman-to-make-mutual-tls-api-calls",id:"tools/postman/setup-postman-to-make-mutual-tls-api-calls",title:"How to Setup Postman to make Mutual TLS API Calls",description:"If you are planning to use Postman for testing the api you will need to make the following changes to support Mutual TLS.",source:"@site/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls.md",sourceDirName:"tools/postman",slug:"/tools/postman/setup-postman-to-make-mutual-tls-api-calls",permalink:"/mymove-docs/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolsSidebar",previous:{title:"Using eTags and the If-Match header in Postman",permalink:"/mymove-docs/docs/tools/postman/using-etags-and-the-if-match-header-in-postman"},next:{title:"Utilizing the GitHub Workflow for designing a Slice Demo Postman Collection:",permalink:"/mymove-docs/docs/tools/postman/prime-demo-script-postman-setup"}},l={},p=[{value:"General Postman Settings",id:"general-postman-settings",level:2},{value:"Postman Environment settings",id:"postman-environment-settings",level:2},{value:"Troubleshooting Postman",id:"troubleshooting-postman",level:2}],m={toc:p};function d(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-setup-postman-to-make-mutual-tls-api-calls"},"How to Setup Postman to make Mutual TLS API Calls"),(0,o.kt)("p",null,"If you are planning to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman")," for testing the api you will need to make the following changes to support Mutual TLS."),(0,o.kt)("h2",{id:"general-postman-settings"},"General Postman Settings"),(0,o.kt)("p",null,"Open the general settings panel by clicking the wrench icon in the upper left corner"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman Settings Menu Upper Right Corner",src:n(85416).Z,width:"1244",height:"595"})),(0,o.kt)("p",null,"Under the ",(0,o.kt)("em",{parentName:"p"},"General")," tab turn off ",(0,o.kt)("strong",{parentName:"p"},"SSL certificate verification")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman SSL certification verification switch",src:n(99498).Z,width:"805",height:"680"})),(0,o.kt)("p",null,"Switch to the ",(0,o.kt)("strong",{parentName:"p"},"Certificates")," tab and add the development certificate with the following settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host")," ",(0,o.kt)("inlineCode",{parentName:"li"},"primelocal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port")," ",(0,o.kt)("inlineCode",{parentName:"li"},"9443")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CRT File")," ",(0,o.kt)("inlineCode",{parentName:"li"},"config/tls/devlocal-mtls.cer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KEY File")," ",(0,o.kt)("inlineCode",{parentName:"li"},"config/tls/devlocal-mtls.key"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman client cert settings",src:n(48376).Z,width:"737",height:"642"})),(0,o.kt)("h2",{id:"postman-environment-settings"},"Postman Environment settings"),(0,o.kt)("p",null,"You will need to configure the base url for development or other environment you plan to connect to. Click on the gear icon near the environment pull down in the upper right of the application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman open environment dialog",src:n(85437).Z,width:"307",height:"260"})),(0,o.kt)("p",null,"This will open the ",(0,o.kt)("em",{parentName:"p"},"Manage Environments")," dialog. Select ",(0,o.kt)("strong",{parentName:"p"},"Add")," in the lower right corner"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman environment dialog",src:n(17571).Z,width:"729",height:"676"})),(0,o.kt)("p",null,"Fill in the following details in the add new dialog and click ",(0,o.kt)("strong",{parentName:"p"},"Add")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Variable")," ",(0,o.kt)("inlineCode",{parentName:"li"},"baseUrl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Initial Value")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://primelocal:9443/prime/v1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Current Value")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://primelocal:9443/prime/v1"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman environment add dialog",src:n(1441).Z,width:"730",height:"666"})),(0,o.kt)("p",null,"Once you have added this environment and closed the dialog select the new environment from the pull down."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Postman select environment",src:n(90093).Z,width:"455",height:"311"})),(0,o.kt)("h2",{id:"troubleshooting-postman"},"Troubleshooting Postman"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ECONNREFUSED error in Postman")),(0,o.kt)("p",{parentName:"li"},"If you see an error that looks like the following, Postman cannot connect to your server."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"Postman ECONNREFUSED error",src:n(22932).Z,width:"488",height:"142"})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Solution:")," Make sure your server is running with ",(0,o.kt)("inlineCode",{parentName:"p"},"make server_run"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Unauthorized")),(0,o.kt)("p",{parentName:"li"},"If the endpoint returns Unauthorized, this could mean that your DB was unpopulated and the server was unable to find your authorization."),(0,o.kt)("p",{parentName:"li"},"The authorization for the devlocal certifications is stored in the milmove database. Perhaps your database does not contain the authorization? One common reason is that you have an old or empty database."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Solution:")," Make sure you have a up-to-date and populated DB by running ",(0,o.kt)("inlineCode",{parentName:"p"},"make db_dev_e2e_populate"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Socket hang up / TLS handshake error")),(0,o.kt)("p",{parentName:"li"},"If you see an error that say socket hangup, the server hung up on Postman, likely due to authentication."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Postman ECONNREFUSED error",src:n(36842).Z,width:"333",height:"151"})),(0,o.kt)("p",{parentName:"li"},"This could be a certs related issue. Check your server log in the terminal, do you see a TLS handshake error?"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"2021-01-29T02:20:25.902Z ERROR http/server.go:3093 http: TLS handshake error from 127.0.0.1:61467: tls: client didn't provide a certificate\n")),(0,o.kt)("p",{parentName:"li"},"If so, this means Postman did not send your certificates successfully to the server when making the request, OR the server did not send the correct cert back."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Solution:")," Make sure you have your ",(0,o.kt)("inlineCode",{parentName:"p"},"devlocal-mtls.cer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"devlocal-mtls.key")," set up as described above in ",(0,o.kt)("a",{parentName:"p",href:"#general-postman-settings"},"General Postman Settings"),". This ensures you are sending the correct cert. "),(0,o.kt)("p",{parentName:"li"},"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"devlocal"),", the server does not send a correct certificate back. Check that you have SSL certificate verification set to ",(0,o.kt)("strong",{parentName:"p"},"off")," in the Settings, this ensures you are not trying to verify that certificate."))))}d.isMDXComponent=!0},22932:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/econnrefused-e4f35f78fc4f98878122dc9df2355322.png"},48376:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_client_cert-9c98597a7381161eb2ab3706ad43e9f9.png"},85437:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_environment-b5c8e007b56b7e47337f13d210416849.png"},1441:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_manage_environment_add-616680cf28aae10a441dea7b0c2b2d54.png"},17571:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_manage_environment_dialog-c3537742a993d95eebec6812a53d68c2.png"},90093:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_set_environment-c956c928bb31c27264040f2fff0b8da4.png"},85416:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_settings_menu-bf2a885839f45d7a0dea3d8e496abac0.png"},99498:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/postman_ssl_verification-ecd10042821a30421ff782068e2f7b59.png"},36842:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/socket-hangup-1ee9f0a23f87a91356f0f9c7f42d9dd5.png"}}]);