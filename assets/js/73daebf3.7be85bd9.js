"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3528],{22896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(61839);const i={sidebar_position:3},r="Intercepting Cookies for Postman",s={unversionedId:"tools/postman/intercepting-cookies-for-postman",id:"tools/postman/intercepting-cookies-for-postman",title:"Intercepting Cookies for Postman",description:"Please follow these initial setup instructions first!",source:"@site/docs/tools/postman/intercepting-cookies-for-postman.md",sourceDirName:"tools/postman",slug:"/tools/postman/intercepting-cookies-for-postman",permalink:"/mymove-docs/docs/tools/postman/intercepting-cookies-for-postman",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/postman/intercepting-cookies-for-postman.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolsSidebar",previous:{title:"Creating a Local Environment for Postman",permalink:"/mymove-docs/docs/tools/postman/creating-a-local-environment-for-postman"},next:{title:"Using eTags and the If-Match header in Postman",permalink:"/mymove-docs/docs/tools/postman/using-etags-and-the-if-match-header-in-postman"}},l={},p=[{value:"Install Postman and Interceptor",id:"install-postman-and-interceptor",level:2},{value:"Find and transfer the necessary cookies",id:"find-and-transfer-the-necessary-cookies",level:2},{value:"Form a working GET and PATCH request in Postman",id:"form-a-working-get-and-patch-request-in-postman",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:p};function k(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intercepting-cookies-for-postman"},"Intercepting Cookies for Postman"),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/tools/postman/setting-up-postman"},"these initial setup instructions")," first!"),(0,o.kt)("p",null,"For these APIs, we need to supply Postman with the appropriate session cookies from a logged-in user. One way to do this is the Interceptor Chrome extension from Postman. It creates a connection between Chrome and Postman that lets Chrome capture the cookies from a browser session and pass them on to your Postman app. We'll use Interceptor in Chrome to capture cookies as we log in to the app, and then switch to Postman to make the request."),(0,o.kt)("p",null,"This doc will take you through the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#intercepting-cookies-for-postman"},"Intercepting Cookies for Postman"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-postman-and-interceptor"},"Install Postman and Interceptor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#find-and-transfer-the-necessary-cookies"},"Find and transfer the necessary cookies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#form-a-working-get-and-patch-request-in-postman"},"Form a working GET and PATCH request in Postman")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"))))),(0,o.kt)("h2",{id:"install-postman-and-interceptor"},"Install Postman and Interceptor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Install Postman"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en"},"Install Postman Interceptor for Chrome"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Postman and ",(0,o.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor"},"follow these instructions")," for installing Interceptor. Pasted below:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navigate to the Postman app and click the satellite icon in the upper-right corner to ",(0,o.kt)("strong",{parentName:"p"},"Capture requests and cookies with Postman"),". You can then enable those two features in their respective tabs. Under ",(0,o.kt)("strong",{parentName:"p"},"Requests"),", change ",(0,o.kt)("strong",{parentName:"p"},"Source")," to Interceptor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Install Interceptor Bridge")," to download the Bridge, an independent executable that facilitates communication with the Interceptor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're on Windows or Linux, Postman will take care of everything for you. If you're on MacOS, you'll be prompted to install NodeJS if it's not already installed on your computer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Confirm Interceptor is ready to use by checking that the ",(0,o.kt)("strong",{parentName:"p"},"Interceptor connected")," status is green. You can now capture requests from your browser and cookies from any domain to use in Postman.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Turn on cookie syncing for Milmove domains."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click again on the satellite icon and click on the ",(0,o.kt)("strong",{parentName:"p"},"Cookies")," tab.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("strong",{parentName:"p"},"Capture Cookies")," is toggled ",(0,o.kt)("strong",{parentName:"p"},"On."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Domains"),", add the following domains:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"admin.stg.move.mil")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"adminlocal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"office.stg.move.mil")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"officelocal"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Screenshot of Postman Interceptor settings",src:n(18444).Z,width:"1172",height:"1654"})))))),(0,o.kt)("h2",{id:"find-and-transfer-the-necessary-cookies"},"Find and transfer the necessary cookies"),(0,o.kt)("p",null,"We\u2019ll run through an example with the Admin API."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In your terminal, ",(0,o.kt)("inlineCode",{parentName:"p"},"make server_run")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"make admin_client_run"),"  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the Admin app, click ",(0,o.kt)("strong",{parentName:"p"},"Local Sign In")," and log in as an admin user.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Postman, make GET request to an Admin endpoint. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://adminlocal:3000/webhook_subscriptions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some people have luck with Interceptor successfully updating all cookies on the first try, and you may get a 200 here! But it\u2019s common to get a ",(0,o.kt)("inlineCode",{parentName:"p"},"403 Unauthorized")," at this point. To fix, we\u2019ll update the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin_session_token")," manually in Postman.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Chrome, open up dev tools -> Application -> Cookies -> Copy the token for ",(0,o.kt)("inlineCode",{parentName:"p"},"admin_session_token"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Postman, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookies")," link in your Request view. You should see three values populated. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin_session_token")," cookie, paste in your new value, and save.  "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Cookies link in Postman",src:n(11406).Z,width:"1502",height:"772"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Cookies view in Postman",src:n(64198).Z,width:"1582",height:"976"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Retry the ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," request. You should receive a 200!")),(0,o.kt)("h2",{id:"form-a-working-get-and-patch-request-in-postman"},"Form a working GET and PATCH request in Postman"),(0,o.kt)("p",null,"At this point, you\u2019ve already made a successful ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request. Now that your session token is updated and Interceptor is working, you should be able to make any ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," requests without further setup."),(0,o.kt)("p",null,"To do a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH")," request, you'll need to add a new header.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Postman, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"cookies")," link in your Request view. You should see three values populated. Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"masked_gorilla_csrf")," cookie, and copy the value.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the Request view, click ",(0,o.kt)("strong",{parentName:"p"},"Headers.")," Add a header for your request with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"X-CSRF-TOKEN")," and value ",(0,o.kt)("inlineCode",{parentName:"p"},"<masked_gorilla_csrf value you copied>")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of how to update a header in Postman",src:n(44709).Z,width:"1518",height:"1226"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add your Request body for your update, and hit Send. Success!")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Can't connect to Postman's request interceptor after install?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's possible that ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.postman/InterceptorBridge/InterceptorBridge")," is trying to look for a local install of ",(0,o.kt)("inlineCode",{parentName:"li"},"Node"),". ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Try installing ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"brew install node")),(0,o.kt)("li",{parentName:"ul"},"Then restart the Postman desktop app")))))}k.isMDXComponent=!0},11406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman_cookies_link-4422078d02cc6f0af33c75e08ce9b26c.jpg"},18444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman_interceptor_add_domains-1d7568410d54248518e53f2aa5b3133d.jpg"},64198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman_update_admin_session_token-144f2f350448575e4c3029ccc870a367.jpg"},44709:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman_update_csrf_header-65191b6af5e8f55f187c8430e7e153f6.jpg"}}]);