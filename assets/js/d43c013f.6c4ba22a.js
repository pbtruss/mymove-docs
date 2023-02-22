"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2280],{10397:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));o(95657);const d={sidebar_position:3},i="How to manage dependencies with go mod",s={unversionedId:"backend/guides/how-to/manage-dependencies-with-go-mod",id:"backend/guides/how-to/manage-dependencies-with-go-mod",title:"How to manage dependencies with go mod",description:"Go modules is the built-in dependency system provided by Go. It supersedes dep, which we previously used to manage Go dependencies.",source:"@site/docs/backend/guides/how-to/manage-dependencies-with-go-mod.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/manage-dependencies-with-go-mod",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-dependencies-with-go-mod",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/manage-dependencies-with-go-mod.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"backendSidebar",previous:{title:"How to handle errors",permalink:"/mymove-docs/docs/backend/guides/how-to/handle-errors"},next:{title:"How To Manage Docker Locally",permalink:"/mymove-docs/docs/backend/guides/how-to/manage-docker-locally"}},p={},c=[{value:"Update all go dependencies",id:"update-all-go-dependencies",level:2},{value:"Update a specific dependency",id:"update-a-specific-dependency",level:2},{value:"Update a specific dependency to a specific branch",id:"update-a-specific-dependency-to-a-specific-branch",level:2}],r={toc:c};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},r,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-manage-dependencies-with-go-mod"},"How to manage dependencies with go mod"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules"},"Go modules")," is the built-in dependency system provided by Go. It supersedes ",(0,n.kt)("a",{parentName:"p",href:"https://golang.github.io/dep/"},"dep"),", which we previously used to manage Go dependencies."),(0,n.kt)("p",null,"It's important to note that go mod uses a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#version-selection"},"different dependency resolution algorithm")," than many other packaging tools. It will install ",(0,n.kt)("em",{parentName:"p"},"oldest")," indirect\ndependency (called ",(0,n.kt)("em",{parentName:"p"},"minimal version selection"),") that will satisfy all direct dependencies, whereas other package managers will tend to install the ",(0,n.kt)("em",{parentName:"p"},"newest"),".\nYou can read more about the rationale behind this approach ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/golang/proposal/blob/master/design/24301-versioned-go.md#update-timing--high-fidelity-builds"},"in the original proposal"),"."),(0,n.kt)("p",null,"For the most part, a developer interacts with ",(0,n.kt)("inlineCode",{parentName:"p"},"go mod")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"go get"),". The other go tools are likewise aware of how to work with go modules."),(0,n.kt)("h2",{id:"update-all-go-dependencies"},"Update all go dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ go get -u\n")),(0,n.kt)("h2",{id:"update-a-specific-dependency"},"Update a specific dependency"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ go get -u github.com/pkg/errors\n")),(0,n.kt)("h2",{id:"update-a-specific-dependency-to-a-specific-branch"},"Update a specific dependency to a specific branch"),(0,n.kt)("p",null,"The following updates ",(0,n.kt)("inlineCode",{parentName:"p"},"github.com/pkg/errors")," to the latest version available on the ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ go get -u github.com/pkg/errors@master\n")))}l.isMDXComponent=!0}}]);