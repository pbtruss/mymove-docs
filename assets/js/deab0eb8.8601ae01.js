"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3588],{56557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));t(95657);const i={},r="Environment Variables",l={unversionedId:"about/development/environment-variables",id:"about/development/environment-variables",title:"Environment Variables",description:"In development, we use direnv to setup environment variables required by the application.",source:"@site/docs/about/development/environment-variables.md",sourceDirName:"about/development",slug:"/about/development/environment-variables",permalink:"/mymove-docs/docs/about/development/environment-variables",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/development/environment-variables.md",tags:[],version:"current",frontMatter:{},sidebar:"aboutSidebar",previous:{title:"Documentation",permalink:"/mymove-docs/docs/about/development/documentation"},next:{title:"Goland",permalink:"/mymove-docs/docs/about/development/goland"}},p={},d=[],s={toc:d},m="wrapper";function v(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"In development, we use ",(0,o.kt)("a",{parentName:"p",href:"https://direnv.net/"},"direnv")," to setup environment variables required by the application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to add a new environment variable to affect only your development machine, export it in ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local"),". Variables exported in this file take precedence over those in ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want to add a new environment variable that is required by new development, it can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," using one of the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Add a default value for all devs that can be overridden in their .envrc.local\nexport NEW_ENV_VAR="default value"\n\n# or\n\n# Specify that an environment variable must be defined in .envrc.local\nrequire NEW_ENV_VAR "Look for info on this value in chamber and Google Drive"\n')))),(0,o.kt)("p",null,"Required variables should be placed in google docs and linked in ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),". The value should also be placed in ",(0,o.kt)("inlineCode",{parentName:"p"},"chamber"),"\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"DISABLE_AWS_VAULT_WRAPPER=1 AWS_REGION=us-gov-west-1 aws-vault exec transcom-gov-dev -- chamber write app-devlocal <key> <value>"),". For long blocks of text like certificates you can write them with\n",(0,o.kt)("inlineCode",{parentName:"p"},'echo "$LONG_VALUE" | DISABLE_AWS_VAULT_WRAPPER=1 AWS_REGION=us-gov-west-1 aws-vault exec transcom-gov-dev -- chamber write app-devlocal <key> -'),"."),(0,o.kt)("p",null,"For per-tier environment variables (that are not secret), simply add the variables to the relevant ",(0,o.kt)("inlineCode",{parentName:"p"},"config/env/[experimental|staging|prod].env")," file with the format ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME=VALUE")," on each line. Then add the relevant section to ",(0,o.kt)("inlineCode",{parentName:"p"},"config/app.container-definition.json"),". The deploy process uses Go's ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"template package")," for rendering the container definition. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"MY_SPECIAL_TOKEN=abcxyz\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MY_SPECIAL_TOKEN",\n  "value": "{{ .MY_SPECIAL_TOKEN }}"\n}\n')))}v.isMDXComponent=!0}}]);