"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4533],{87896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));n(95657);const r={sidebar_position:13},l="Precommit Hooks",a={unversionedId:"backend/guides/troubleshoot-precommit-hook-failures",id:"backend/guides/troubleshoot-precommit-hook-failures",title:"Precommit Hooks",description:"The precommit hooks run automatically when you try to make a commit. They are a set of scripts that validate the commit.",source:"@site/docs/backend/guides/troubleshoot-precommit-hook-failures.md",sourceDirName:"backend/guides",slug:"/backend/guides/troubleshoot-precommit-hook-failures",permalink:"/mymove-docs/docs/backend/guides/troubleshoot-precommit-hook-failures",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/troubleshoot-precommit-hook-failures.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"backendSidebar",previous:{title:"Importing tariff400ng data for the year",permalink:"/mymove-docs/docs/backend/guides/tariff400ng-yearly-import"},next:{title:"Route Planner Guide",permalink:"/mymove-docs/docs/backend/guides/route-planner"}},s={},u=[{value:"Cheatsheet",id:"cheatsheet",level:2},{value:"Errors and Solutions",id:"errors-and-solutions",level:2},{value:"1. Error: Installing environment",id:"1-error-installing-environment",level:3},{value:"Solution 1",id:"solution-1",level:4},{value:"Solution 2",id:"solution-2",level:4},{value:"2. Golang-ci Error: \u201cno go files to analyze\u201d",id:"2-golang-ci-error-no-go-files-to-analyze",level:3},{value:"Solution",id:"solution",level:4},{value:"3. Golang-ci Error: &quot;failed prerequisites&quot;",id:"3-golang-ci-error-failed-prerequisites",level:3},{value:"Solution",id:"solution-3",level:4},{value:"4. ESLint Error: &quot;couldn&#39;t find the config react-app&quot;",id:"4-eslint-error-couldnt-find-the-config-react-app",level:3},{value:"Solution",id:"solution-4",level:4},{value:"5. Executable ... not found.",id:"5-executable--not-found",level:3},{value:"Solution",id:"solution-5",level:4},{value:"6. Module not found in <code>gen</code>",id:"6-module-not-found-in-gen",level:3},{value:"Solution",id:"solution-6",level:4},{value:"7. Module not found in <code>mocks</code>",id:"7-module-not-found-in-mocks",level:3},{value:"Solution",id:"solution-7",level:4},{value:"8. Failed prerequisites without an indication of an error",id:"8-failed-prerequisites-without-an-indication-of-an-error",level:3},{value:"Solution",id:"solution-8",level:4},{value:"Nix Error: SSL Certificate verify failed",id:"nix-error-ssl-certificate-verify-failed",level:4},{value:"Solution",id:"solution-9",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"precommit-hooks"},"Precommit Hooks"),(0,i.kt)("p",null,"The precommit hooks run automatically when you try to make a commit. They are a set of scripts that validate the commit.\nIf the validation fails, the commit isn't committed."),(0,i.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,i.kt)("p",null,"Here are some useful ways to debug."),(0,i.kt)("p",null,"To run them yourself before you commit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit run --all-files\n")),(0,i.kt)("p",null,"To run a specific hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit run markdownlint --all-files\n")),(0,i.kt)("p",null,"If they are not installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit install-hooks\n")),(0,i.kt)("h2",{id:"errors-and-solutions"},"Errors and Solutions"),(0,i.kt)("h3",{id:"1-error-installing-environment"},"1. Error: Installing environment"),(0,i.kt)("p",null,"For an error about installing the environment, try ensuring your nodenv is set correctly.\nThis is what the error looks like, it stalls here for a while\u2026."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit install-hooks\n[INFO] Installing environment for git://github.com/igorshubovych/markdownlint-cli.\n[INFO] Once installed this environment will be reused.\n[INFO] This may take a few minutes...\n")),(0,i.kt)("h4",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"For this error you may need to set your global nodenv version"),(0,i.kt)("p",null,"Check the current versions,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/$ cat .node-version\n12.21.0\n")),(0,i.kt)("p",null,"Outside mymove folder, set the global version,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/mymove$ cd ..\n~/$ nodenv global 12.21.0\n")),(0,i.kt)("p",null,"Then inside mymove,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/$ cd mymove\n~/mymove$ pre-commit install-hooks\n")),(0,i.kt)("h4",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"If the above solution does not work, and running the above still results in a hanging or incomplete installation, remove the pre-commit cache and the ",(0,i.kt)("inlineCode",{parentName:"p"},".client_deps.stamp")," and try again"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ~/.cache/pre-commit\nrm .client_deps.stamp\n")),(0,i.kt)("h3",{id:"2-golang-ci-error-no-go-files-to-analyze"},"2. Golang-ci Error: \u201cno go files to analyze\u201d"),(0,i.kt)("p",null,"For an error about context loading failing, clean your precommit cache."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'level=error msg="Running error: context loading failed: no go files to analyze\n')),(0,i.kt)("h4",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rm -rf ~/.cache/pre-commit && pre-commit run -a\n")),(0,i.kt)("h3",{id:"3-golang-ci-error-failed-prerequisites"},'3. Golang-ci Error: "failed prerequisites"'),(0,i.kt)("p",null,"This error about failed prerequisites is misleading. if you see a failure in ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2026/[pkgname].test")," it means there\u2019s a test in there that likely isn\u2019t building."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'level=warning msg="[runner] Can\'t run linter goanalysis_metalinter: assign: failed prerequisites: inspect@github.com/transcom/mymove/pkg/handlers/ghcapi [github.com/transcom/mymove/pkg/handlers/ghcapi.test]"\nlevel=error msg="Running error: assign: failed prerequisites: inspect@github.com/transcom/mymove/pkg/handlers/ghcapi [github.com/transcom/mymove/pkg/handlers/ghcapi.test]"\n')),(0,i.kt)("h4",{id:"solution-3"},"Solution"),(0,i.kt)("p",null,"Probably an error in server tests.\nRun the tests and look for errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make server_test\n")),(0,i.kt)("p",null,"One weird trick - you can compile but not run the tests using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go test -run=nope ./...\n")),(0,i.kt)("p",null,"This is helpful to find the package with the compile error."),(0,i.kt)("h3",{id:"4-eslint-error-couldnt-find-the-config-react-app"},'4. ESLint Error: "couldn\'t find the config react-app"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Oops! Something went wrong! :(\n\nESLint: 7.5.0\n\nESLint couldn\'t find the config "react-app" to extend from. Please check that the name of the config is correct.\n')),(0,i.kt)("h4",{id:"solution-4"},"Solution"),(0,i.kt)("p",null,"For this error, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),". This will install the dependencies listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h3",{id:"5-executable--not-found"},"5. Executable ... not found."),(0,i.kt)("p",null,"This error says you don't have some tool installed. You might see this with ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spectral"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prettier.................................................................Failed\n- hook id: prettier\n- exit code: 1\nExecutable `node_modules/.bin/prettier` not found\n")),(0,i.kt)("h4",{id:"solution-5"},"Solution"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),". This will install the dependencies listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h3",{id:"6-module-not-found-in-gen"},"6. Module not found in ",(0,i.kt)("inlineCode",{parentName:"h3"},"gen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cannot find module providing package github.com/transcom/mymove/pkg/gen/*\n")),(0,i.kt)("h4",{id:"solution-6"},"Solution"),(0,i.kt)("p",null,"Try running ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_generate")," which should generate files for the ",(0,i.kt)("inlineCode",{parentName:"p"},"gen")," folder automatically."),(0,i.kt)("h3",{id:"7-module-not-found-in-mocks"},"7. Module not found in ",(0,i.kt)("inlineCode",{parentName:"h3"},"mocks")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cannot find module providing package github.com/transcom/mymove/pkg/.../mocks\n")),(0,i.kt)("h4",{id:"solution-7"},"Solution"),(0,i.kt)("p",null,"Try running ",(0,i.kt)("inlineCode",{parentName:"p"},"make mocks_generate")," which should auto generate mocks."),(0,i.kt)("h3",{id:"8-failed-prerequisites-without-an-indication-of-an-error"},"8. Failed prerequisites without an indication of an error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Can't run linter goanalysis_metalinter: assign: failed prerequisites: inspect@github.com/transcom/mymove/cmd/milmove\n")),(0,i.kt)("h4",{id:"solution-8"},"Solution"),(0,i.kt)("p",null,"This could be due to the build failing. Try ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_build")," to check."),(0,i.kt)("h4",{id:"nix-error-ssl-certificate-verify-failed"},"Nix Error: SSL Certificate verify failed"),(0,i.kt)("p",null,"This can happen because of the way certs need to be handled in this project and ",(0,i.kt)("inlineCode",{parentName:"p"},"nix"),". "),(0,i.kt)("h4",{id:"solution-9"},"Solution"),(0,i.kt)("p",null,"To get around this issue, you can try running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NIX_SSL_CERT_FILE=$HOME/.nix-profile/etc/ssl/certs/ca-bundle.crt <pre-commit related command>\n")),(0,i.kt)("p",null,"E.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NIX_SSL_CERT_FILE=$HOME/.nix-profile/etc/ssl/certs/ca-bundle.crt pre-commit install-hooks\n")))}c.isMDXComponent=!0}}]);