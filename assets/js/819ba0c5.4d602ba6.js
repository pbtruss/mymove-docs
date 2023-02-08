"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1582],{27990:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var a=l(87462),n=(l(67294),l(3905));l(29420);const o={},i="MilMove Local Client",s={unversionedId:"about/application-setup/milmove-local-client",id:"about/application-setup/milmove-local-client",title:"MilMove Local Client",description:"Commands in this section:",source:"@site/docs/about/application-setup/milmove-local-client.md",sourceDirName:"about/application-setup",slug:"/about/application-setup/milmove-local-client",permalink:"/mymove-docs/docs/about/application-setup/milmove-local-client",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/application-setup/milmove-local-client.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Direnv",permalink:"/mymove-docs/docs/about/application-setup/direnv"},next:{title:"Run the app",permalink:"/mymove-docs/docs/about/application-setup/run-the-app"}},p={},r=[],c={toc:r};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"milmove-local-client"},"MilMove Local Client"),(0,n.kt)("p",null,"Commands in this section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_build\n")),(0,n.kt)("p",null,"and"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_run\n")),(0,n.kt)("p",null,"These will start the webpack dev server, serving the frontend on port 3000. If paired with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make server_run\n")),(0,n.kt)("p",null,"then the whole app will work, the webpack dev server proxies all API calls through to the server."),(0,n.kt)("p",null,"If both the server and client are running, you should be able to view the Swagger UI at\n",(0,n.kt)("a",{parentName:"p",href:"http://milmovelocal:3000/swagger-ui/internal.html"},"http://milmovelocal:3000/swagger-ui/internal.html"),". If it does not, try running"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make client_build\n")),(0,n.kt)("p",null,"(this only needs to be run the first time)."),(0,n.kt)("p",null,"Dependencies are managed by ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn"),". To add a new dependency, use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add\n")))}m.isMDXComponent=!0}}]);